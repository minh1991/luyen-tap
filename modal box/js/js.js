$(document).ready(function() {
	//xử lý sự kiện cho nút buy
	$('.buy').click(function(event) {
		//xử lý class
		$('.content').addClass('open-content');
		$('.open-backgr').addClass('backgr-open');
	});;
	//xử lý cho close
	$('.close').click(function(event) {
		$('.content').removeClass('open-content');
		$('.open-backgr').removeClass('backgr-open');
	});;
});
















var input = document.getElementById('soluon');
var cost = document.getElementById('cost');

// lay data cost
var giaTien=parseInt(cost.getAttribute('data-cost'));
console.log(giaTien);


// bat su kien
input.addEventListener('input',handleOnchange);

function handleOnchange (e){
	
	var number =e.target.value;
	document.getElementById('tongtien').innerHTML = (number*giaTien + ' $');
}