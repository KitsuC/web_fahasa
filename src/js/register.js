document
  .getElementById('registerForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var emailInput = document.getElementById('emailInput');
    var usernameInput = document.getElementById('usernameInput');
    var passwordInput = document.getElementById('passwordInput');

    var emailError = document.getElementById('emailError');
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');

    // Kiểm tra và hiển thị thông báo lỗi (nếu có)
    if (emailInput.value === '') {
      emailError.textContent = 'Vui lòng nhập Email';
      emailInput.classList.add('shake');
      setTimeout(function () {
        emailInput.classList.remove('shake');
      }, 500);
    } else if (!emailInput.value.includes('@')) {
      emailError.textContent = 'Vui lòng nhập đúng định dạng Email';
      emailInput.classList.add('shake');
      setTimeout(function () {
        emailInput.classList.remove('shake');
      }, 500);
    } else {
      emailError.textContent = '';
    }

    if (usernameInput.value === '') {
      usernameError.textContent = 'Vui lòng nhập tên người dùng';
      usernameInput.classList.add('shake');
      setTimeout(function () {
        usernameInput.classList.remove('shake');
      }, 500);
    } else {
      usernameError.textContent = '';
    }

    if (passwordInput.value === '') {
      passwordError.textContent = 'Vui lòng nhập mật khẩu';
      passwordInput.classList.add('shake');
      setTimeout(function () {
        passwordInput.classList.remove('shake');
      }, 500);
    } else {
      passwordError.textContent = '';
    }

    // Nếu không có lỗi, submit form
    if (
      emailError.textContent === '' &&
      usernameError.textContent === '' &&
      passwordError.textContent === ''
    ) {
      this.submit();
    }
  });
