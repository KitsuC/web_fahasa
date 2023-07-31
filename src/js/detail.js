// SHOW IMG

function showImage(src) {
  const fullscreenImage = document.getElementById('fullscreen-image');
  const fullscreenImageSrc = document.getElementById('fullscreen-image-src');

  fullscreenImageSrc.src = src;
  fullscreenImage.classList.add('show');
}

function closeFullscreenImage() {
  const fullscreenImage = document.getElementById('fullscreen-image');

  fullscreenImage.classList.remove('show');
}

// QUANTITY PRICE

let minusButton = document.querySelector('.minus-btn');
let plusButton = document.querySelector('.plus-btn');
let quantityInput = document.querySelector("input[name='quantity']");

minusButton.addEventListener('click', function () {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', function () {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});


// Gắn sự kiện click vào nút "Thêm vào giỏ hàng"
// document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
//   btn.addEventListener('click', function() {
//     const productId = this.parentElement.dataset.productId;
    
//     // Gửi yêu cầu AJAX để thêm sản phẩm vào giỏ hàng
//     fetch('/cart/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ productId, quantity: 1 }), // Đặt số lượng sản phẩm là 1
//     })
//     .then((response) => {
//       // Kiểm tra phản hồi từ server
//       if (response.ok) {
//         console.log('Sản phẩm đã được thêm vào giỏ hàng');
//       } else {
//         console.log('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng');
//       }
//     })
//     .catch((error) => {
//       console.log('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng:', error);
//     });
//   });
// });
