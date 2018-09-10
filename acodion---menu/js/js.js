/*các hàm sẽ xử dụng:
1./ hàm click 
2./ hàm addClass ; removeClass ; toggleClass : xử lý thay đổi giao diện thông qua class và css
3./hàm animete-scrollTop: chuyển đến đoạn theo yêu cầu
4./hàm slideup và slidedown : có khăt năng co nội dung lên, hoặc thả nội dung xuống
5./hiệu ứng easing (thư viện gia tốc)*/

/*các bước làm*/
$(function() {
//1. xử lý phần kích vào thì chữ thanh box-title có màu xanh. Bằng cách addClass .box-title.click vào class box-title. Hoặc sử dụng toggleClass để tự chuyển sau mỗi lần click
$('.box-title').click(function(event) {
	$(this).toggleClass('click');
	//xử lý hiệu ứng acodion, khi click vào thì xổ ra
	$(this).next().slideToggle(300,'easeOutExpo');
	$(this).next().find(".box-img").slideToggle(1200,'easeOutExpo');// hàm find là để chọn ra phần tử thuộc phần next
	//cuộn nội dung lên
	$('body').animate({scrollTop: $(this).offset().top},1200,'easeOutExpo');
	
	
});;
//2./xử lý click vào thì phóng to ảnh. và next sang các ảnh khác. dowload hiệu ứng thư viện ảnh (fancy box)
	//phóng to ảnh
	$('.box-img a').fancybox(); //một số hiệu ứng phóng ảnh khác thì sẽ đọc hướng dẫn ở file fancybox
//3./ xử lý acodion
	// xử lý co lại
	$('.box-content, .box-img').slideUp();
});