$(document).ready(function() {

	$(".nav-bar ul li > a").each(function (i) {
        var $me = $(this);

        var lochref = $.trim(window.location.href);
        var mehref = $.trim($me.get(0).href);



        if (lochref.indexOf(mehref) != -1) {
            $me.parent().addClass("active");
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        } else {
            $me.parent().removeClass("active");
        }

    });

    $(function() {
        var header = $(".nav-bar > ul");
        var dropdown = $(".nav-bar ul li > ul");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 300) {
                header.addClass('active');
                dropdown.addClass("active");
            } else {
                header.removeClass("active");
                dropdown.removeClass("active");
            }
        });
    });     

});

	
