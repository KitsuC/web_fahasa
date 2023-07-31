const Product = require('../models/Product');
const Delivery = require('../models/Delivery');
const Account = require('../models/Account');

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require('../../util/mongoose');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function shuffleArray2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
class SiteController {
  // [GET] /news
  async detail(req, res, next) {
    const productA = await Product.find().exec();
    const datas = req.session.data;
    if (datas) {
      var data = datas.account;

      Product.findOne({ Slug: req.params.slug })
        .then((product) => {
          if (product) {
            Product.find({ Type: product.Type })
            .then((productS) => {
              req.session.slug = product.Slug; 
              req.session.name = product.Name; 
              res.render('detail', {
                data,
                isAdmin: req.session.ua ? true : false,
                isAuthenticated: req.session.isAuthenticated,
                product: mongooseToObject(product),
                producta: mutipleMongooseToObject(shuffleArray(productA)),
                producta2: mutipleMongooseToObject(shuffleArray2(productA)),
                products: mutipleMongooseToObject(productS),
              });
            });
          } else {
            res.json('err');
          }
        })
        .catch(next);
    } else {
      Product.findOne({ Slug: req.params.slug }).then((product) => {
        if (product) {
          Product.find({ Type: product.Type }).then((productS) => {
            req.session.slug = product.Slug; 
            res.render('detail', {
              product: mongooseToObject(product),
              producta: mutipleMongooseToObject(shuffleArray(productA)),
              producta2: mutipleMongooseToObject(shuffleArray2(productA)),
              products: mutipleMongooseToObject(productS),
            });
          });
        } else {
          res.render('404');
        }
      });
    }
  }

  show(req, res, next) {
    Product.find({})
      .then((product) => {
        const datas = req.session.data;
        if (!datas) {
          // res.json(req.session.isAuthenticated)
          res.render('home', {
            product: mutipleMongooseToObject(product),
            productR: mutipleMongooseToObject(shuffleArray(product)),
            productN: mutipleMongooseToObject(
              product.sort((a, b) => b.createdAt - a.createdAt),
            ),
          });
        } else {
          var data = datas.account;
          // res.json(data)
          res.render('home', {
            data,
            isAdmin: req.session.ua ? true : false,
            isAuthenticated: req.session.isAuthenticated,
            product: mutipleMongooseToObject(product),
            productR: mutipleMongooseToObject(shuffleArray(product)),
            productN: mutipleMongooseToObject(
              product.sort((a, b) => b.createdAt - a.createdAt),
            ),
          });
        }
      })
      .catch(next);
  }

  order(req, res, next) {
    const datas = req.session.data;
    if(datas){
      var data = datas.account;
      Account.findById(data._id)
      .then(product => {
        try {
          // Kiểm tra trạng thái đăng nhập của người dùng (giả sử được lưu trong session)
          const isLoggedIn = req.session.isLoggedIn || false;

          if (isLoggedIn) {
            Delivery.find({ Account : data.username })
            .then(value => {
              console.log(value);
              // res.json(value)
              res.render('order', {
                data,
                isAdmin: req.session.ua ? true : false,
                isAuthenticated: req.session.isAuthenticated,
                value: mutipleMongooseToObject(value),
              });
            })
            
          } else {
            // Nếu chưa đăng nhập, hiển thị thông báo "Vui lòng đăng nhập"
            res.send('Vui lòng đăng nhập để xem giỏ hàng');
          }
        } catch (error) {
          console.error('Error while fetching cart data:', error);
          return res.status(500).json({ success: false, message: 'Internal server error' });
        }
      })
      
    }else{
      try {
        // Kiểm tra trạng thái đăng nhập của người dùng (giả sử được lưu trong session)
        const isLoggedIn = req.session.isLoggedIn || false;
    
        if (isLoggedIn) {
          res.render('order');
        } else {
          // Nếu chưa đăng nhập, hiển thị thông báo "Vui lòng đăng nhập"
          // res.send('Vui lòng đăng nhập để xem giỏ hàng');
          res.render('404', {
            login:true
          })
        }
      } catch (error) {
        console.error('Error while fetching cart data:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  }
}

module.exports = new SiteController();
