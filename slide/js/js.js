$(function() {
	// tự động chạy
	var auto = setInterval(function () {
		// $('.button-prev').trigger('click'); //hàm strigger là kích hoạt nút .button-prev bằng phương pháp click
		//hoặc copy lại toàn bộ code của một nút
		var slide_prev = $('.active').prev();
			// console.log(slide_prev.length);
			var vitri = $('._click').index()+1;
		console.log(vitri);
		$('.button ul li').removeClass('_click');
		//reset index để chạy lại
		if (vitri == 1) {vitri =$('.button ul li').length + 1;}
		// sau đó mới addclass cho phần tử được click
		$('.button ul li:nth-child('+(vitri-1)+')').addClass('_click');



		if (slide_prev.length!=0) {
			$('.active').addClass('turn_right').one('webkitAnimationEnd', function(event){
				$('.turn_right').removeClass('turn_right').removeClass('active');
			});
			slide_prev.addClass('active').addClass('turn_left').one('webkitAnimationEnd', function(event) {
				$('.turn_left').removeClass('turn_left');		
			});
		} else {
				$('.active').addClass('turn_right').one('webkitAnimationEnd', function(event){
					$('.turn_right').removeClass('turn_right').removeClass('active');
			});
			$('.slide-img:last-child').addClass('active').addClass('turn_left').one('webkitAnimationEnd', function(event) {
				$('.turn_left').removeClass('turn_left');		
			});	
		}
	},3000) //sau 3s sẽ tự chạy

	// xử lý nút next
	$('.button-next').click(function(event) {
		//hủy chạy tự động
		clearInterval(auto);
 		//nút next
		var slide_next = $('.active').next();
		// console.log(slide_next.length);
		// bấm next/prev thì nút button cũng chuyển
		var vitri = $('._click').index()+1;
		console.log(vitri);
		$('.button ul li').removeClass('_click');
		//reset index để chạy lại
		if (vitri == $('.button ul li').length) {vitri =0;}
		// sau đó mới addclass cho phần tử được click
		$('.button ul li:nth-child('+(vitri+1)+')').addClass('_click');
		


		if (slide_next.length!=0) {
			$('.active').addClass('turn_left').one('webkitAnimationEnd', function(event){
				$('.turn_left').removeClass('turn_left').removeClass('active');	
				
		});
			slide_next.addClass('active').addClass('turn_right').one('webkitAnimationEnd', function(event) {
				$('.turn_right').removeClass('turn_right');
			
		});} else {
			$('.active').addClass('turn_left').one('webkitAnimationEnd', function(event){
				$('.turn_left').removeClass('turn_left').removeClass('active');	
		});
			$('.slide-img:first-child').addClass('active').addClass('turn_right').one('webkitAnimationEnd', function(event) {
				$('.turn_right').removeClass('turn_right');
		});		
	};
		//end nút next
		
		});
	//nút prev
	$('.button-prev').click(function(event) {
	//hủy chạy tự động
		clearInterval(auto)
			var slide_prev = $('.active').prev();
			// console.log(slide_prev.length);
			var vitri = $('._click').index()+1;
		console.log(vitri);
		$('.button ul li').removeClass('_click');
		//reset index để chạy lại
		if (vitri == 1) {vitri =$('.button ul li').length + 1;}
		// sau đó mới addclass cho phần tử được click
		$('.button ul li:nth-child('+(vitri-1)+')').addClass('_click');



		if (slide_prev.length!=0) {
			$('.active').addClass('turn_right').one('webkitAnimationEnd', function(event){
				$('.turn_right').removeClass('turn_right').removeClass('active');
			});
			slide_prev.addClass('active').addClass('turn_left').one('webkitAnimationEnd', function(event) {
				$('.turn_left').removeClass('turn_left');		
			});
		} else {
				$('.active').addClass('turn_right').one('webkitAnimationEnd', function(event){
					$('.turn_right').removeClass('turn_right').removeClass('active');
			});
			$('.slide-img:last-child').addClass('active').addClass('turn_left').one('webkitAnimationEnd', function(event) {
				$('.turn_left').removeClass('turn_left');		
			});	
		}
	});
	//end nút prev
	// nút control
				//khi click thì sẽ chuyển sang màu 
	$('.button ul li').click(function(event) {

		//đầu tiên xóa tất cả các class _click
		$('.button ul li').removeClass('_click');
		// sau đó mới addclass cho phần tử được click
		$(this).addClass('_click');
	

	// bắt các slide tương ứng với nút
		
		//cho slide hiện tại biến mất
		$('.active').addClass('turn_right').one('webkitAnimationEnd', function(event){
					$('.turn_right').removeClass('turn_right').removeClass('active');
			});
		// hàm tính vị trí hiện tại của phần tử Click: This.index() (hàm này tính từ 0)
		console.log($(this).index()+1);
		// bật ra slide mới tương ứng với vị trí $(this).index()+1
		$('.slide-img:nth-child('+($(this).index()+1)+')').addClass('active').addClass('turn_left').one('webkitAnimationEnd', function(event) {
				$('.turn_left').removeClass('turn_left');		
			});
	});;

	});