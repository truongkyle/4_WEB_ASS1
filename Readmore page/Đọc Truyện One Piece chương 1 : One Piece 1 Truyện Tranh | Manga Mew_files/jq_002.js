$(document).ready(function() {
    $('#btn_sb_search').click(function() {
        var x = $("#search").val();
        if (x != "") {
            $("#btn_sb_search").attr("type", "submit");

        }

    })

    $("#next_page").click(function(){
		var page_next = $("#page_next").attr("id-next");
	    $.ajax({
	        url: 'ajax/hot-update/' + page_next, 
	        success: function(data){
	        $("#hot_update").html(data);
	    }});
    });

    $("#prev_page").click(function(){
    	var page_prev = $("#page_prev").attr("id-prev");
        $.ajax({
            url: 'ajax/hot-update/' + page_prev, 
            success: function(data){
            $("#hot_update").html(data);
        }});
    });
    ////////////////////////////////////
    $( "#sortby" ).change(function() {
        $( "#frm-sort" ).submit();
    });
    //////////////////////////////
    $( "#sortall" ).change(function() {
    	// alert('a');
        $( "#frmSortAll" ).submit();
    });


    $( ".bcc" ).click(function() {
        // alert('a');
        $( "#frmSortAll" ).submit();
    });

    $("#reset").click(function() {
        $(this).closest('form').find("input[type=checkbox]").removeAttr('checked');
        $('#r1').attr('checked','checked');
        // $('#save').css( "display", "inline-block !important" );
    });
  

    $( "#list_chap" ).change(function() {
        // var id_chap = $('#list_chap :selected').val();
        var url = $('#list_chap :selected').val();
        // var name_slug = $('#name_slug').val();
        // var base_url = window.location.origin;
        window.location= url;
    });

    // $(function(){
        // $(window).bind('scroll', function() {
        //     $('.item').each(function() {
        //         var post = $(this);
        //         var position = post.position().top - $(window).scrollTop();
                
        //         if (position <= 0) {
        //             var tt = post.attr('tt');
        //             setCookie('cookie-vertical', tt , 0.001);
        //             console.log(tt);
        //         } 

        //     });        
        // });
    // });
    // function setCookie(cname, cvalue, exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //     var expires = "expires=" + d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    // }
    

    // function getCookie(cname) {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // $("#it_4").offset().top;
});


