$(document).ready(function() {
	//xử lý sự kiện cho nút buy
		//xử lý class
		$('.content').addClass('open-content');
		$('.open-backgr').addClass('backgr-open');
	//tự tắt quảng cáo
	var advertisement = setInterval(function(){
	$('.content').removeClass('open-content');
	$('.open-backgr').removeClass('backgr-open');
	 clearInterval(advertisement); //xóa hàm interval 
	}, 4000);
	
	//xử lý cho close
	$('.close').click(function(event) {
		$('.content').removeClass('open-content');
		$('.open-backgr').removeClass('backgr-open');
	});;
});















