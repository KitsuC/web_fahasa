const q = document.querySelector.bind(document);
const qq = document.querySelectorAll.bind(document);

const navMenus = qq('.item-left');

navMenus.forEach((item) => {
  item.addEventListener('mouseover', function (e) {
    const q = document.querySelector.bind(document);
    q('.item-left.active-item-left').classList.remove('active-item-left');
    this.classList.add('active-item-left');
  });
});
q('.item-left-1').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
                    <i
                      style="
                        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_sachtrongnuoc.svg');
                      "
                    ></i>
                    Sách Trong Nước
                  </h2>
                  <div class="row row-cols-lg-4">
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">VĂN HỌC</h3>
                        <li class="item-right">Tiểu Thuyết</li>
                        <li class="item-right">Truyện Ngắn - Tản Văn</li>
                        <li class="item-right">Light Novel</li>
                        <li class="item-right">Ngôn Tình</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">KINH TẾ</h3>
                        <li class="item-right">
                          Nhân Vật - Bài Học Kinh Doanh
                        </li>
                        <li class="item-right">Quản Trị - Lãnh Đạo</li>
                        <li class="item-right">Marketing - Bán Hàng</li>
                        <li class="item-right">Phân Tích Kinh Tế</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">TÂM LÝ - KĨ NĂNG SỐNG</h3>
                        <li class="item-right">Kỹ Năng Sống</li>
                        <li class="item-right">Rèn Luyện Nhân Cách</li>
                        <li class="item-right">Tâm Lý</li>
                        <li class="item-right">Sách Cho Tuổi Mới Lớn</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">NUÔI DẠY CON</h3>
                        <li class="item-right">Cẩm Nang Làm Cha Mẹ</li>
                        <li class="item-right">Phương Pháp Giáo Dục Trẻ ...</li>
                        <li class="item-right">Phát Triển Trí Tuệ Cho Trẻ</li>
                        <li class="item-right">Phát Triển Kỹ Năng Cho Trẻ</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
                        <li class="item-right">Manga - Comic</li>
                        <li class="item-right">Kiến Thức Bách Khoa</li>
                        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
                        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
                        <li class="item-right">Câu Chuyện Cuộc Đời</li>
                        <li class="item-right">Chính Trị</li>
                        <li class="item-right">Kinh Tế</li>
                        <li class="item-right">Nghệ Thuật - Giải Trí</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
                        <li class="item-right">Sách Giáo Khoa</li>
                        <li class="item-right">Sách Tham Khảo</li>
                        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
                        <li class="item-right">Mẫu Giáo</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
                        <li class="item-right">Tiếng Anh</li>
                        <li class="item-right">Tiếng Nhật</li>
                        <li class="item-right">Tiếng Hoa</li>
                        <li class="item-right">Tiếng Hàn</li>
                        <li class="item-right">Xem tất cả</li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">
                          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
                        </h3>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="list-right">
                        <h3 class="title-item-right">
                          SÁCH BÁN CHẠY
                          <span style="color: #ff0000">&nbsp;♥</span>
                        </h3>
                      </ul>
                    </div>
                  </div>
    `;
};

q('.item-left-2').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_foreignbooks.svg');
      "
    ></i>
    FOREIGN BOOKS
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-3').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_VPP.svg');
      "
    ></i>
    VPP - Dụng Cụ Học Sinh
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-4').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_dochoi.svg');
      "
    ></i>
    Đồ Chơi
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-5').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_lamdepsuckhoe.svg');
      "
    ></i>
    Làm Đẹp - Sức Khỏe
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-6').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_hanhtrangdentruong.svg');
      "
    ></i>
    Hành Trang Đến Trường
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-7').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_VPP.svg');
      "
    ></i>
    VPP - DCHS Theo Thương Hiêu
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-8').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('	https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_dochoi.svg');
      "
    ></i>
    Đồ Chơi Theo Thương Hiệu
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.item-left-9').onmouseover = function () {
  q('.navbar__menu-list-right').innerHTML = `
    <h2 class="title-right">
    <i
      style="
        background-image: url('https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/category/ico_bachhoaonline.svg');
      "
    ></i>
    Bách Hóa Online - Lưu Niệm
  </h2>
  <div class="row row-cols-lg-4">
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">FICTION</h3>
        <li class="item-right">Contemporary Fiction</li>
        <li class="item-right">Romance</li>
        <li class="item-right">Fantasy</li>
        <li class="item-right">Classics</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">BUSINESS & MANAGEMENT</h3>
        <li class="item-right">
        Business & Management
        </li>
        <li class="item-right">Economics</li>
        <li class="item-right">Finance & Accounting</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">PERSONAL DEVELOPMENT</h3>
        <li class="item-right">Popular Psychology</li>
        <li class="item-right">Advice On Careers & Achieving Success</li>
        <li class="item-right">Personal Finance</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">CHILDREN'S BOOKS</h3>
        <li class="item-right">Picture & Activity Books</li>
        <li class="item-right">Fiction (For Kids & Teen)</li>
        <li class="item-right">Education</li>
        <li class="item-right">Non-Fiction</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH THIẾU NHI</h3>
        <li class="item-right">Manga - Comic</li>
        <li class="item-right">Kiến Thức Bách Khoa</li>
        <li class="item-right">Sách Tranh Kỹ Năng Sống C...</li>
        <li class="item-right">Vừa Học - Vừa Học Vừa Chơ...</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">TIỂU SỬ - HỒI KÝ</h3>
        <li class="item-right">Câu Chuyện Cuộc Đời</li>
        <li class="item-right">Chính Trị</li>
        <li class="item-right">Kinh Tế</li>
        <li class="item-right">Nghệ Thuật - Giải Trí</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">GIÁO KHOA - THAM KHẢO</h3>
        <li class="item-right">Sách Giáo Khoa</li>
        <li class="item-right">Sách Tham Khảo</li>
        <li class="item-right">Luyện Thi THPT Quốc Gia</li>
        <li class="item-right">Mẫu Giáo</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">SÁCH HỌC NGOẠI NGỮ</h3>
        <li class="item-right">Tiếng Anh</li>
        <li class="item-right">Tiếng Nhật</li>
        <li class="item-right">Tiếng Hoa</li>
        <li class="item-right">Tiếng Hàn</li>
        <li class="item-right">Xem tất cả</li>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH MỚI <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
    <div class="col">
      <ul class="list-right">
        <h3 class="title-item-right">
          SÁCH BÁN CHẠY
          <span style="color: #ff0000">&nbsp;♥</span>
        </h3>
      </ul>
    </div>
  </div>
    `;
};

q('.language').onclick = () => {
  q('.language-choice').style.display = 'block';
};

// OPTION

// TREND

function showSaleList1() {
  document.getElementById('sale-list-1').style.display = 'flex';
  document.getElementById('sale-list-2').style.display = 'none';
  document.getElementById('sale-list-3').style.display = 'none';
}

function showSaleList2() {
  document.getElementById('sale-list-1').style.display = 'none';
  document.getElementById('sale-list-2').style.display = 'flex';
  document.getElementById('sale-list-3').style.display = 'none';
}

function showSaleList3() {
  document.getElementById('sale-list-1').style.display = 'none';
  document.getElementById('sale-list-2').style.display = 'none';
  document.getElementById('sale-list-3').style.display = 'flex';
}

// SGK

function showSGK1() {
  document.getElementById('show-sgk-1').style.display = 'flex';
  document.getElementById('show-sgk-2').style.display = 'none';
  document.getElementById('show-sgk-3').style.display = 'none';
}

function showSGK2() {
  document.getElementById('show-sgk-1').style.display = 'none';
  document.getElementById('show-sgk-2').style.display = 'flex';
  document.getElementById('show-sgk-3').style.display = 'none';
}

function showSGK3() {
  document.getElementById('show-sgk-1').style.display = 'none';
  document.getElementById('show-sgk-2').style.display = 'none';
  document.getElementById('show-sgk-3').style.display = 'flex';
}
