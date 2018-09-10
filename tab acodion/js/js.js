$(function () {
    // tất cả các box sẽ thu lại. sử dụng hàm .slideUp
    $('.box-conten').slideUp();
    //tạo sự kiện kick (.click(function(){})
    $('.box h3').click(function (e) { 
        //trạng thái tất cả co lại
        $('.box-conten').slideUp();
        // chon thẻ được mở ra. sử dụng this (nghĩa là thẻ sự kiện)
        // vì thẻ box-conten ở ngay sau thẻ h3 nên ta sẽ dùng hàm .next
        //kết hợp các box sẽ mở ra hàm .slideDown() . hoặc có thể sử dụng hàm .slideToggle() để tự hiểu 1 kick mở ra, kick thêm co vào.
        $(this).next('.box-conten').slideToggle();
        
       // sau khi kich vào sẽ có hiệu ứng chuyển màu
       // addClass (khi kick vào h3 thì chính nó(this) sẽ được chuyển màu sau đó bị giữ nguyên). Hoặc  .toggleClass() sẽ được tự động chuyển màu gốc khi co lại
       $(this).toggleClass('box-click');
      
    });
});