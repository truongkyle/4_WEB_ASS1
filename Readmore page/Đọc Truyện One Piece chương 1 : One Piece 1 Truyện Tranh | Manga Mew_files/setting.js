$('.noidung .readmore ').click(function() {
	$('.noidung .mota').toggleClass('active');
	var txt = $(".noidung .mota").hasClass('active') ? 'Thu gọn' : 'Xem thêm';
	$(this).text(txt);
})


var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   // console.log(st);

   if (st > lastScrollTop){
       $('.reader.vertical header ').removeClass('show');
   } else {
    
      $('.reader.vertical header ').addClass('show');
   }
   if(st == 0) {

     $('.reader.vertical header ').addClass('active');
   } else {
    $('.reader.vertical header ').removeClass('active');
   }

   lastScrollTop  = st;
});

$('.genres-block .toggle_class .nd').slideUp();
$('.toggle_class > span').click(function() {
  $('.genres-block .toggle_class .nd').slideToggle('fast');
  $(this).toggleClass('active');
  var txt = $(this).hasClass('active') ? 'Xem thêm' : 'Thu gọn';
  $(this).text(txt);
})

///////////////


$('header .navbar-nav li.has_child>span').click(function() {
  $('header .navbar-nav li ul.list_child').toggleClass('active');
})