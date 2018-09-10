/*
Phong cách WEB ONEPAGE là trang kéo từ trên xuống dưới là 1 trang. Các vị trí của trang được định vị trên menu
            A/ các kiến thức cần có
1./hàm Click xử lý sự kiện
2./ hàm Addclass. ( giả sử kích vào một vị trí menu thì sẽ hiện sáng)
3./ hàm cuộn chuột body: .animete ({scrollTop - cuộn từ trên xuống dưới: giá trị so với phần top) + giá trị thời gian. ( ngoài ra để tạo hiệu ứng di chyển gia tốc sử dụng thêm thư viện Easing: http://gsgd.co.uk/sandbox/jquery/easing/)
4./ hàm tính vị trí phần tử ( kích vào đâu thì vào vị trí đó trên trang page) : $(tên phần từ).offset.top
 */
$(function() {
//1./ hàm xử lý sự kiện click
	$('.menu-top ul li:nth-child(2) a').on('click', function(event) {/*chọn li thứ 2 trong thẻ ul*/
		event.preventDefault();// Không để cho thẻ a chuyển sang trang web khác
		/* Act on the event */
// 2./ xử lý cuộn chuột cho body
console.log($('.chapter1').offset().top);// tính thử vị trí của một phần tử
		$('body').animate({
			scrollTop: $('.chapter1').offset().top},//khi click vào a thì body sẽ được cuộn xuống đúng vị trí thẻ chapter1
			1600,'easeOutExpo');// với tốc độ 1600 ml giây. Kết hợp hiệu ứng easeOutExpo(tra ở http://gsgd.co.uk/sandbox/jquery/easing/ )
	});
//3./ làm tương tự để có các nút chapter sau
$('.menu-top ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: $('.chapter2').offset().top},
			1600, 'easeOutExpo');
	});

$('.menu-top ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: $('.chapter3').offset().top},
			1600, 'easeOutExpo');
	});
//4./ cho nút back to top trở lên trên cùng của trang( vị trí 0px)
$('.back-to-top').on('click', function(event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: 0}, //vị trí 0px
			1600, 'easeOutExpo');
	});








});
