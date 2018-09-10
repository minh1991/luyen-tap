$(function() {
	$(window).scroll(function(event) {
		//tính vị trí cuộn chuột
		 console.log($('body').scrollTop());// giả sử vị trí muốn đổi là 397
		var menu_change = $('body').scrollTop();
		if ((menu_change>=397)&&(menu_change<1656)) {
			$('.menu').addClass('menu_change'); //nếu vị trí >= 397 sẽ biến đổi
		}else {
			$('.menu').removeClass('menu_change'); // ngượi lại nếu vị trí <397 thì trở về bt
		};
		if ((menu_change>=1656)&&(menu_change<2683)) {
			$('.menu').addClass('menu_change_1'); //nếu vị trí >= 1656 sẽ biến đổi
		} else{
			$('.menu').removeClass('menu_change_1');//remove class
		}
		if (menu_change>=2683) {
			$('.menu').addClass('menu_change_2'); //nếu vị trí >= 2683 sẽ biến đổi
		} else{
			$('.menu').removeClass('menu_change_2');//remove class
		}
		});
	});
