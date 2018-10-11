$("a[href='#top']").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1;
}), jQuery(window).scroll(function() {
    var a = jQuery(this).scrollTop();
    a > "200" ? $("#to-top").show() : $("#to-top").hide();
})
/////////////////////////
jQuery(window).scroll(function() {
    var currentScroll = jQuery(this).scrollTop();
    headerOrgOffset = jQuery('#header').offset().top;
    if(currentScroll > 80) {
        jQuery('#header').addClass('keep-menu');
    } else {
        jQuery('#header').removeClass('keep-menu '); 
    }
});
///////////////////////////////////////
if ($(window).width() < 992) {
    var currentScroll = jQuery(this).scrollTop();
    var previousScroll = 0,
    headerOrgOffset = jQuery('#header').offset().top;
    if(currentScroll > 60) {
        jQuery('#header').addClass('keep-menu');
    } else {
        jQuery('#header').removeClass('keep-menu '); 
    }
    $('.overlay-menu').click(function() {
      $('body').removeClass('no-scroll');
      $('.navbar-collapse-mobile').removeClass('active'); 
      $('.navbar-toggle').removeClass('active');
      $('.overlay-menu').removeClass('active');  
    })
   $('header .navbar-nav li ul.list_child').remove();
}
else {
  $('.navbar-collapse-mobile li ul.list_child').remove();
}


///////////////////////////
$('.introducing .close').click(function() {
  $('.introducing').slideUp();
  $('.open_introducing').addClass('active');
  //$(this).parent().hide();
})
$('.open_introducing').click(function() {
  $(this).removeClass('active');
   $('.introducing').slideDown();
  //$(this).parent().hide();
})
/////////////////////////
$('ul.navbar-nav li.has_child ').click(function() {
  $(this).toggleClass('active');
})
////////////////////////////
$('.navbar-toggle, .btn_close_menu_mb').click(function() {
 // $(this).toggleClass('active');
  $('body').toggleClass('no-scroll');
  $('.navbar-collapse-mobile').toggleClass('active');
  $('.overlay-menu').toggleClass('active');
})
////////////////////////////

////////////////////////////////
$(document).mouseup(function (e){
  var _elm = $(".navbar-collapse-mobile, .navbar-header");     
  if (!_elm.is(e.target) 
      && _elm.has(e.target).length === 0) 
  {  
    $('body').removeClass('no-scroll');
    $('.navbar-collapse-mobile').removeClass('active'); 
    $('.navbar-toggle').removeClass('active');
    $('.overlay-menu').removeClass('active');     
  }
});

/////////////////////

$('.navbar-collapse-mobile ul.nav li.has_child ul.list_child').slideUp();
$('.navbar-collapse-mobile > ul.nav li.has_child a').click(function() {
  $(this).next().slideToggle();
  $(this).parent().toggleClass('active');
})

////////////
$('.detail .chapter ul li a').click(function() {
  var data_chap = '.'+$(this).attr('data-chap');
  var offet_top = $(data_chap).offset().top - 50;
  $("html, body").animate({ scrollTop: offet_top }, "1000");
})
////////////
var base_url = window.location.origin;

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     lazyLoad : true,
//     dots: false,
//     navText : ["<img src='"+ base_url +"/admin/asset/images/chevron-left.png'  />","<img src='"+ base_url +"/admin/asset/images/chevron-right.png'  />"],    
//     animateOut: 'fadeOut',
//     animateIn: 'fadeIn',
//     mouseDrag: false,
//     touchDrag: true,
//     responsive:{
//         0:{
//             items:1
//         },
//     }
// })
function callBackOwlCarousel(){
    $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    lazyLoad : true,
    dots: false,
    navText : ["<img src='"+ base_url +"/admin/asset/images/chevron-left.png'  />","<img src='"+ base_url +"/admin/asset/images/chevron-right.png'  />"],    
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag: false,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
    }
  })
}

callBackOwlCarousel();

 $(".reader .inner-slider .item").each(function(){
   $(this).click(function() {
         var _html = $(this).html();
        $('.reader #modal-img-reader .modal-body').empty();
        $('.reader #modal-img-reader .modal-body').append(_html);
   })
});


 


