$(document).ready(function() {
    ///////////////////////////
    $(".noti-3").addClass('active');
    setTimeout(function(){
        $(".noti-3").removeClass("active");

    },1500);
    var cookieStatus = 0;
    // var getCookieStatus = $.cookie("status");
    var getCookieStatus = getCookie("status");

    if(getCookieStatus){
        if (getCookieStatus == 0){
            $("#r001").attr('checked', 'checked');
        } else {
            cookieStatus = 1;
            $("#r002").attr('checked','checked');
        }
    }else{
        $("#r001").attr('checked','checked');
    }
    
    //-----end-----------------------
    
    function callAjaxRead(cookieStatus,chap_id){

        var base_url = window.location.origin;
        $.ajax({
            url: base_url + '/ajax/read/' + chap_id + '/' + cookieStatus, 
            success: function(data){
            $("#content").html(data);
            if (cookieStatus == 0){
                $("#r001").attr('checked','checked');
                callBackOwlCarousel();
                //-----check cookie prev-------
                if(getCookie('vertical')){
                    if(getCookie('vertical') != 0){
                        // alert('ok');
                        var owl = jQuery(".owl-carousel");
                        var tt = getCookie('vertical') ;
                        owl.trigger('to.owl.carousel', [tt,1,true]);
                        setCookie('vertical', 0 , 0.1);   
                    }
                    
                }
                //------------------------------
                // var d = 0;
                // alert('fck');
                callBackEvent();
            }
            else{
                $("#r002").attr("checked" );
                if(getCookie('horizon')){
                    if(getCookie('horizon') != 0){
                        // alert('ok');
                        var a = getCookie('horizon'); 
                        var offet_top = $("#it_" + a ).offset().top;
                        $("html, body").animate({ scrollTop: offet_top }, "10");
                        setCookie('horizon', 0 , 0.1);   
                    }
                    
                }
                 //----call lazy load------
                $(document).ready(function() {
                    $('img').lazyload({
                        threshold : 200,
                        effect: 'fadeIn'
                    });
                });
                //------------------------
            }
        }});
    }
    


    $("#sb_read").click(function(){
        var chap_id = $("#chap_id").val();
        var status = $('input[name=status]:checked').val();
        var webtoon = $('input[name=webtoon]:checked').val();
        if (webtoon){
            // $.cookie("webtoon",webtoon,{expires : 10});
            setCookie("webtoon",webtoon,30);

            //------function--------------------
                var base_url = window.location.origin;
                var chap_id = $("#chap_id").val();
                $.ajax({
                    url: base_url + '/ajax/json/' + chap_id, 
                    success: function(data){
                        var parsed = JSON.parse(data);

                        var arr = [];

                        for(var x in parsed){
                          arr.push(parsed[x]);
                        }

                        for(i = 0 ; i < arr.length  ; i++){
                            var img = new Image();
                            img.src = arr[i];
                            img.onload = function() {
                                var width = this.width;
                                var height = this.height;
                                var chap_id = $("#chap_id").val();
                                var x = height/width; 
                                if (x > 2){
                                    setCookie(chap_id,1,1);
                                }
                            }

                        }

                        setTimeout(function(){ 
                            if (getCookie(chap_id) == 1){
                                setCookie("status", 1 , 30);
                                // $.cookie("status", 0, { expires : 10 });
                                callAjaxRead(1,chap_id);
                                // $("#r002").attr('checked','checked');
                                $("#body").addClass("vertical");
                                $(".noti-1").addClass("active");
                                setTimeout(function(){
                                    $(".noti-1").removeClass("active");
                                    $("#r002").attr('checked','checked');
                                    // alert(3);
                                },2000);

                            }else{
                                setCookie("status", status , 30);
                                callAjaxRead(status,chap_id);
                                if(status == 0){
                                    
                                    var cookieVertical = getCookie('cookie-vertical');
                                    setCookie('vertical', cookieVertical, 0.01 ); 

                                    $("#r001").attr('checked','checked');
                                    $(".noti-2").addClass("active");
                                    setTimeout(function(){
                                        $(".noti-2").removeClass("active");

                                    },2000);
                                }else{

                                    var cookieHorizon = getCookie('cookie-horizon');
                                    setCookie('horizon', cookieHorizon, 0.01);

                                    $("#r002").attr('checked','checked');
                                    $("#body").addClass("vertical");
                                    $(".noti-1").addClass("active");
                                    setTimeout(function(){
                                        $(".noti-1").removeClass("active");

                                    },2000);
                                }

                            }
                        }, 1000);


                        
                }});
            //---------end function-------------
        }else{
            // $.removeCookie("webtoon");
            setCookie("webtoon",0,30);

            // $.cookie("status", status, { expires : 10 });
            setCookie("status", status, 30);
            if(status == 1){
                $("#body").addClass("vertical");
                $(".noti-1").addClass("active");
                var cookieHorizon = getCookie('cookie-horizon');
                setCookie('horizon', cookieHorizon, 0.01);
                setTimeout(function(){
                    $(".noti-1").removeClass("active");

                },2000);
            }else{
                $(".noti-2").addClass("active");
                var cookieVertical = getCookie('cookie-vertical');
                setCookie('vertical', cookieVertical, 0.01 ); 
                setTimeout(function(){
                    $(".noti-2").removeClass("active");

                },2000);
            }
            callAjaxRead(status,chap_id);
        }
        

    });
    //-----------run auto dected----------------
    // var getCookieWebtoon = $.cookie("webtoon");
    var getCookieWebtoon = getCookie("webtoon");
    // if (!getCookieWebtoon){
    //     getCookieWebtoon == 1
    //     setCookie("webtoon",1,30);
    // }
    if (!getCookieWebtoon || getCookieWebtoon == 1){
        setCookie("webtoon",1,20);
        $("#chk_1").attr('checked','checked');
        var base_url = window.location.origin;
        var chap_id = $("#chap_id").val();
        $.ajax({
            url: base_url + '/ajax/json/' + chap_id, 
            success: function(data){
                var parsed = JSON.parse(data);
                var arr = [];
                for(var x in parsed){
                  arr.push(parsed[x]);
                }
                for(i = 0 ; i < arr.length  ; i++){
                    var img = new Image();
                    img.src = arr[i];
                    img.onload = function() {
                        var width = this.width;
                        var height = this.height;
                        var chap_id = $("#chap_id").val();
                        var x = height/width; 
                        if (x > 2){
                            setCookie(chap_id,1,1);
                        }
                    }

                }

                setTimeout(function(){ 
                    if (getCookie(chap_id) == 1){
                        setCookie("status", 1 , 30);
                        // $.cookie("status", 0, { expires : 10 });
                        callAjaxRead(1,chap_id);
                        // $("#r002").attr('checked','checked');
                        $("#body").addClass("vertical");
                        $(".noti-1").addClass("active");
                        setTimeout(function(){
                            $(".noti-1").removeClass("active");

                        },2000);
                    }else{

                        callAjaxRead(cookieStatus,chap_id);
                        setCookie("status", cookieStatus , 30);
                        // 
                        if(cookieStatus == 0){
                            $("#r001").attr('checked','checked');
                            $(".noti-2").addClass("active");
                            setTimeout(function(){
                                $(".noti-2").removeClass("active");

                            },2000);
                        }else{
                            $("#body").addClass("vertical");
                            $(".noti-1").addClass("active");
                            setTimeout(function(){
                                    $(".noti-1").removeClass("active");

                                },2000);
                            $("#r002").attr('checked','checked');

                        }

                    }
                }, 1000);

        }});
    }else{
    
        // var getCookieStatus = $.cookie("status");
        var getCookieWebtoon = getCookie("webtoon");
        if (getCookieStatus) {
            cookieStatus = getCookieStatus;
        }
        if(cookieStatus == 1){
            $("#body").addClass("vertical");
        }

        var chap_id = $("#chap_id").val();
        callAjaxRead(cookieStatus,chap_id);
    }
    //---------------------------
    // var d = 0;
    var totalItems = $('.item').length ;
    var currentIndex = $('div.active').index();
    var d = currentIndex;
    setCookie('cookie-horizon', d, 0.01);
    function callBackEvent(){
        $(".reader .inner-slider .item").each(function(){
           $(this).click(function() {
                 var _html = $(this).html();
                $('.reader #modal-img-reader .modal-body').empty();
                $('.reader #modal-img-reader .modal-body').append(_html);
           })
        });
        // d = 0;
        var totalItems = $('.item').length ;
        var currentIndex = $('div.active').index();
        d = currentIndex;
        $('.owl-next').click(function() {
            // var totalItems = $('.item').length;
            var chap_next = $('#chap_next').val();
            if (totalItems - 1  == d ){
                if (chap_next != '0'){
                    window.location.href = chap_next;
                } else {
                    $('.noti-4').addClass('active');
                    $('#cancel').click(function(){
                        $('.noti-4').removeClass('active');
                    });
                    $('#close').click(function(){
                        var name_story = $('#name_slug').val();
                        var id_story = $('#id_story').val();
                        var base_url = window.location.origin;
                        window.location.href = base_url + '/manga/' + name_story + '-' + id_story + '/' ;
                    });

                }

            } else {
                d = d + 1;
            }
            setCookie('cookie-horizon', d, 0.01);

            // console.log(d);

        })

        $('.owl-prev').click(function() {
            var totalItems = $('.item').length ;
            var chap_prev = $('#chap_prev').val();
            if ( d == 0){
                if (chap_prev != '0'){
                    window.location.href = chap_prev;
                    // setCookie('btn_prev', 1 , 0.0001);
                }
            }else{
                d = d - 1;
            }
            setCookie('cookie-horizon', d, 0.01);

            // console.log(d);


        })


        
    }
    
       $(document).ready(function(){
            //--------------event click------------------------
            // var stt = getCookie("status");
            // if(stt == 0){
                jQuery(document.documentElement).keyup(function (event) {  

                // console.log('keycode', event.keyCode) ; 

                // var owl = $(".owl-carousel");
                    if (event.keyCode == 37) {
                        var totalItems = $('.item').length ;
                        var chap_prev = $('#chap_prev').val();
                        var chap_id = $('#chap_id').val();
                        if ( d == 0){
                            if (chap_prev != '0'){
                                window.location.href = chap_prev;
                                // setCookie('btn_prev', 1 , 0.0001);
                            }
                        }else{
                            d = d - 1;
                            $(".owl-carousel").trigger('prev.owl.carousel');

                        }
                            setCookie('cookie-horizon', d, 0.01);
                            // console.log(d);

                        // owl.trigger('to.owl.carousel', [4,500,true]);

                    }

                    if (event.keyCode == 39) {
                        var totalItems = $('.item').length ;
                        var chap_next = $('#chap_next').val();
                        if (totalItems - 1  == d ){
                            if (chap_next != '0'){
                                window.location.href = chap_next;
                            } else {
                                $('.noti-4').addClass('active');
                                $('#cancel').click(function(){
                                    $('.noti-4').removeClass('active');
                                });
                                $('#close').click(function(){
                                    var name_story = $('#name_slug').val();
                                    var id_story = $('#id_story').val();
                                    var base_url = window.location.origin;
                                    window.location.href = base_url + '/manga/' + name_story + '-' + id_story + '/' ;
                                });
                            }
                        } else {
                            d = d + 1;
                            $(".owl-carousel").trigger('next.owl.carousel');

                        }
                            setCookie('cookie-horizon', d, 0.01);
                            // console.log(d);

                    }

                });
            // }

        })
 

    //---------------------------//
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    $(window).bind('scroll', function() {
        $('.item').each(function() {
            var post = $(this);
            var position = post.position().top - $(window).scrollTop();
            
            if (position <= 0) {
                var tt = post.attr('tt');
                setCookie('cookie-vertical', tt , 0.001);
                // console.log(tt);
            } 

        });        
    });

});


