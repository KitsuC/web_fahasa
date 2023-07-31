// TOGGLE
$(document).ready(function () {
	$('.toggle').hide(); // Ẩn khối toggle khi trang được tải

	$('.toggle-btn').on('click', function () {
		$(this).toggleClass('none');
		$(this).text(function (i, text) {
			return text === 'Xem Thêm' ? 'Ẩn Bớt' : 'Xem Thêm';
		});
		$('.toggle').slideToggle();
		$(this).insertAfter($('.toggle'));
	});
});
