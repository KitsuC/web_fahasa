
const Account = require('../models/Account');
const Product = require('../models/Product');
const Delivery = require('../models/Delivery');
const { mongooseToObject } = require('../../util/mongoose');
let isAddingToCart = false;
class CartController {
  
  show(req, res, next) {
    const datas = req.session.data;
    if(datas){
      var data = datas.account;
      Account.findById(data._id)
      .then(product => {
        try {
          // Kiểm tra trạng thái đăng nhập của người dùng (giả sử được lưu trong session)
          const isLoggedIn = req.session.isLoggedIn || false;
      
          if (isLoggedIn) {
            res.render('cart', {
              data: mongooseToObject(product),
              isAdmin: req.session.ua ? true : false,
              isAuthenticated: req.session.isAuthenticated,
            });
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
          // Nếu đã đăng nhập, hiển thị giỏ hàng từ session hoặc cookie (tùy cách bạn lưu giỏ hàng)
          // Ví dụ: Giỏ hàng được lưu trong session dưới key "cart"
          const cart = Account.cart || [];
    
          // Render template giỏ hàng với dữ liệu cart
          res.render('cart', { cart });
        } else {
          // Nếu chưa đăng nhập, hiển thị thông báo "Vui lòng đăng nhập"
          // res.send('Vui lòng đăng nhập để xem giỏ hàng');
          res.render('cart', {
            login:true
          })
        }
      } catch (error) {
        console.error('Error while fetching cart data:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  }

  async ins(req, res) {
    // res.json('done')
    try {
      const datas = req.session.data;
      if (!datas || !datas.account) {
        res.render('delivery', {
          login:true
        })
      }
  
      const account = await Account.findById(datas.account._id);
      if (!account) {
        return res.send('Tài khoản không tồn tại');
      }
  
      // Tìm vị trí sản phẩm trong giỏ hàng của tài khoản
      const cartItemIndex = account.cart.findIndex(item => item._id.toString() === req.params.id);
      if (cartItemIndex === -1) {
        return res.status(404).json({ success: false, message: 'Product not found in cart' });
      }
  
      // Tăng số lượng sản phẩm
      account.cart[cartItemIndex].quantity += 1;
  
      // Lưu lại thông tin tài khoản đã được cập nhật sau khi tăng số lượng
      await account.save();
  
      return res.redirect('back');
    } catch (error) {
      console.error('Error while increasing quantity:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

  async prew(req, res) {
    // res.json('done')
    try {
      const datas = req.session.data;
      if (!datas || !datas.account) {
        res.render('delivery', {
          login:true
        })
      }
  
      const account = await Account.findById(datas.account._id);
      if (!account) {
        return res.send('Tài khoản không tồn tại');
      }
  
      // Tìm vị trí sản phẩm trong giỏ hàng của tài khoản
      const cartItemIndex = account.cart.findIndex(item => item._id.toString() === req.params.id);
      if (cartItemIndex === -1) {
        return res.status(404).json({ success: false, message: 'Product not found in cart' });
      }
  
      // Giảm số lượng sản phẩm
      if(account.cart[cartItemIndex].quantity > 1){
        account.cart[cartItemIndex].quantity -= 1;
      }
  
      // Lưu lại thông tin tài khoản đã được cập nhật sau khi tăng số lượng
      await account.save();
  
      return res.redirect('back');
    } catch (error) {
      console.error('Error while increasing quantity:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

  async add(req, res, next) {
    if (isAddingToCart) {
      return;
    }
  
    isAddingToCart = true;
    const datas = req.session.data;
    if (datas) {
      var data = datas.account;
      const account = await Account.findById(data._id);
      if (!account) {
        isAddingToCart = false;
        return res.send('Tài khoản không tồn tại');
      }
  
      try {
        const product = await Product.findOne({ Slug: req.session.slug });
        if (!product) {
          isAddingToCart = false;
          throw new Error('Sản phẩm không tồn tại');
        }
  
        const existingCartItem = account.cart.find((item) => item.productId.equals(product._id));
        if (existingCartItem) {
          existingCartItem.quantity += 1; // Tăng số lượng quantity nếu sản phẩm đã tồn tại trong giỏ hàng
        } else {
          account.cart.push({
            productId: product._id,
            price: product.PriceN,
            quantity: 1,
            name: product.Name,
            image: product.Image
          }); // Thêm sản phẩm mới vào giỏ hàng nếu chưa tồn tại
        }
  
        req.session.cart = await account.save();
        isAddingToCart = false;
        res.redirect('back');
      } catch (err) {
        console.log(err, '123');
        isAddingToCart = false;
        res.status(400).send({
          success: false,
          err: err.message
        });
      }
    } else {
      isAddingToCart = false;
      res.render('delivery', {
        login:true
      })
    }
  }
  
  
  async delete(req, res, next) {
    try {
      // Lấy thông tin tài khoản từ session
      const datas = req.session.data;
      if (!datas || !datas.account) {
        return res.send('Vui lòng đăng nhập');
      }
  
      // Lấy thông tin tài khoản từ MongoDB
      const account = await Account.findById(datas.account._id);
      if (!account) {
        return res.send('Tài khoản không tồn tại');
      }
  
      // Lấy thông tin sản phẩm cần xóa từ giỏ hàng trong tài khoản
      const cartItemIndex = account.cart.findIndex(item => item._id.toString() === req.params.id);
      if (cartItemIndex === -1) {
        return res.status(404).send('Không tìm thấy sản phẩm trong giỏ hàng');
      }
  
      // Xóa sản phẩm khỏi giỏ hàng trong tài khoản
      account.cart.splice(cartItemIndex, 1);
  
      // Lưu lại thông tin tài khoản đã được cập nhật sau khi xóa sản phẩm
      await account.save();
  
      return res.redirect('back');
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      return res.status(500).send('Lỗi server');
    }
  }
  
  delivery(req, res){
    const datas = req.session.data;
    if(datas){
      var data = datas.account;
      Account.findById(data._id)
      .then(product => {
        try {
          // Kiểm tra trạng thái đăng nhập của người dùng (giả sử được lưu trong session)
          const isLoggedIn = req.session.isLoggedIn || false;
      
          if (isLoggedIn) {
            res.render('delivery', {
              data: mongooseToObject(product),
              isAdmin: req.session.ua ? true : false,
              isAuthenticated: req.session.isAuthenticated,
            });
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
          // Nếu đã đăng nhập, hiển thị giỏ hàng từ session hoặc cookie (tùy cách bạn lưu giỏ hàng)
          // Ví dụ: Giỏ hàng được lưu trong session dưới key "cart"
          const cart = Account.cart || [];
    
          // Render template giỏ hàng với dữ liệu cart
          res.render('delivery', { cart });
        } else {
          // Nếu chưa đăng nhập, hiển thị thông báo "Vui lòng đăng nhập"
          // res.send('Vui lòng đăng nhập để xem giỏ hàng');
          res.render('delivery', {
            login:true
          })
        }
      } catch (error) {
        console.error('Error while fetching cart data:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  }

  async deliveryAdd(req,res){
    const datas = req.session.data;
    if(datas){
      var data = datas.account;
      Account.findById(data._id)
      .then(product => {
        try {
          // Kiểm tra trạng thái đăng nhập của người dùng (giả sử được lưu trong session)
          const isLoggedIn = req.session.isLoggedIn || false;
          if (isLoggedIn) {
            try {
              console.log('Received form data:', data.username);
              console.log('Received form data:2', data);
              
              var newDelivery = Delivery({
                Account: data.username,
                Name:  req.body.txtName,
                Number:  req.body.txtNum,
                Nation:  req.body.txtNation,
                City:  req.body.txtCity,
                District:  req.body.txtDistrict,
                Wards:  req.body.txtWards,
                Location:  req.body.txtLocation,
                Status: "Chờ xác nhận",
                cart: product.cart
              });
              
              newDelivery.save();
              product.cart = [];
              product.save();
              res.redirect('/'); // Redirect to success page or any other page you want
            } catch (error) {
              console.error('Error saving delivery:', error);
              res.status(500).send('Có lỗi xảy ra khi lưu thông tin giao hàng.'); // Thêm phần xử lý lỗi ở đây
            }
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
          // Nếu đã đăng nhập, hiển thị giỏ hàng từ session hoặc cookie (tùy cách bạn lưu giỏ hàng)
          // Ví dụ: Giỏ hàng được lưu trong session dưới key "cart"
          const cart = Account.cart || [];
    
          // Render template giỏ hàng với dữ liệu cart
          res.render('cart', { cart });
        } else {
          // Nếu chưa đăng nhập, hiển thị thông báo "Vui lòng đăng nhập"
          // res.send('Vui lòng đăng nhập để xem giỏ hàng');
          res.render('cart', {
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

module.exports = new CartController();
