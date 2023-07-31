const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const Handlebars = require('handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const route = require('./routes');
const db = require('./config/db');
const flash = require('connect-flash');
const { body, validationResult } = require('express-validator');
const Account = require('../src/app/models/Account');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const helpers = require('handlebars-helpers')();
Handlebars.registerHelper(helpers);

const app = express();
const port = 5000;
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));

//Connect to DB
db.connect();
// Middleware kiểm tra validation errors

app.use(express.static(path.join(__dirname, '/')));
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());
app.use(methodOverride('_method'));


// Cấu hình Passport.js
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  (username, password, done) => {
    Account.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Invalid credentials' });
        }

        // Kiểm tra mật khẩu
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (!isMatch) {
            return done(null, false, { message: 'Invalid credentials' });
          }
          return done(null, user);
        });
      })
      .catch(err => done(err));
  }
));

passport.serializeUser((user, done) => {
  // Lưu thông tin người dùng vào session
  done(null, user.id);
});


passport.deserializeUser((id, done) => {
  Account.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

//HTTP logger
app.use(morgan('combined'));

// Kích hoạt flash messages
app.use(flash());

app.use(
	session({
		secret: 'your-secret-key',
		resave: false,
		saveUninitialized: false,
	})
);

// Middleware để đưa flash messages vào biến cục bộ trong tất cả các view
app.use((req, res, next) => {
	res.locals.successMessage = req.flash('successMessage');
	res.locals.errorMessage = req.flash('errorMessage');
	next();
});

Handlebars.registerHelper('formatDate', function (date) {
	const formattedDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
	return formattedDate;
});

Handlebars.registerHelper('length', function (array) {
  if(array){
    return array.length;
  }
});
Handlebars.registerHelper('multiply', function(price, quantity) {
  return price * quantity;
});
Handlebars.registerHelper('formatPrice', function(price, quantity) {
  const totalPrice = price * quantity;
  return totalPrice.toFixed(3);
});

Handlebars.registerHelper('calculateTotalPrice', function(cart) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    const productPrice = parseFloat(product.price.trim());
    const productQuantity = parseInt(product.quantity);
    totalPrice += productPrice * productQuantity;
  }
  return totalPrice.toFixed(3);
});

Handlebars.registerHelper('sumPrice', function(array) {
  if (!Array.isArray(array)) {
    return '0';
  }

  var sum = 0;
  array.forEach(function(item) {
    var price = parseFloat(item.price);
    var quantity = parseFloat(item.quantity);
    sum += price * quantity;
  });

  return sum.toFixed(3)
});
Handlebars.registerHelper('sumPriceFee', function(array) {
  if (!Array.isArray(array)) {
    return '0';
  }

  var sum = 19.000;
  array.forEach(function(item) {
    var price = parseFloat(item.price);
    var quantity = parseFloat(item.quantity);
    sum += price * quantity ;
  });

  return sum.toFixed(3)
});


// Tạo helper Handlebars để định dạng thời gian
Handlebars.registerHelper('dateFormat', function (date, options) {
  const { format } = options.hash;

  // Kiểm tra nếu date không hợp lệ hoặc không phải là đối tượng Date
  if (!date || !(date instanceof Date)) {
    return '';
  }

  // Định dạng ngày theo format
  const formattedDate = formatDate(date, format);

  return new Handlebars.SafeString(formattedDate);
});

function formatDate(date, format) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed, so we add 1
  const year = date.getFullYear();

  // Custom format for day/month/year as requested
  if (format === 'DD/MM/YYYY') {
    return `${day}/${month}/${year}`;
  } else {
    // Default format if not specified
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    return `${monthName} ${day}, ${year}`;
  }
}


Handlebars.registerHelper('shortenId', function (id) {
  if (!id) return '';
  return id.toString().slice(0, 10);
});

Handlebars.registerHelper('sortProducts', function(products, selectedValue) {
  if (selectedValue === 'az') {
    // Sắp xếp danh sách sản phẩm theo tên từ A-Z
    return products.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    return products; // Trả về danh sách sản phẩm ban đầu nếu không có giá trị được chọn
  }
});
//Template engine
app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
		helpers: {
			sum: (a, b) => a + b,
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'view'));

//Route init
// routeA(app);
route(app);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
