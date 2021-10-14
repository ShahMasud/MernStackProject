(function($) {
    "use strict";
    /******************************************
    -	PREPARE PLACEHOLDER FOR SLIDER	-
    ******************************************/

    var tpj = jQuery;
    var revapi116;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_116_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_116_1");
        } else {
            revapi116 = tpj("#rev_slider_116_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "../../revolution/js/",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "gyges",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    }
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%"
                },
                gridwidth: 1240,
                gridheight: 600,
                lazyType: "none",
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });


    $(document).ready(function() {


        //color picker start
        jQuery(window).load(function() {
            var colorcode = document.cookie;
            if (colorcode != "") {
                var cname = "colorcssfile";
                var name = cname + "=";
                var cssname = '';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1);
                    if (c.indexOf(name) != -1) {
                        cssname = c.substring(name.length, c.length);
                    }
                }

                if (cssname != '') {
                    var new_style = 'css/' + cssname + '.css';
                    $('#theme-change').attr('href', new_style);
                }
            }
        });
        //Color Change Script
        $('.colorchange').on("click", function() {
            var name = $(this).attr('id');
            var new_style = 'css/' + name + '.css';
            $('#theme-change').attr('href', new_style);
        });

        $("#style-switcher .bottom a.settings").on("click", function(e) {
            e.preventDefault();
            var div = $("#style-switcher");
            if (div.css("left") === "-159px") {
                $("#style-switcher").animate({
                    left: "0px"
                });
            } else {
                $("#style-switcher").animate({
                    left: "-159px"
                });
            }
        });
        //color picker end


        //crousel slider
        var $slider = jQuery('.bxslider').bxSlider({
            maxSlides: 5,
            minSlides: 1,
            moveSlides: 1,
            slideWidth: 225,
            margin: 5,
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            auto: true,
            easing: 'easeInOutQuint',
            pause: 3000,
            pager: false,
            controls: true,
        });

        //bxslider

        var $slider = jQuery('.slider_bx').bxSlider({

            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            easing: 'easeInOutQuint',
            auto: true,
            pause: 3000,
            pager: false,
            controls: true,
        });

        //prettyphoto 

        jQuery(".gallery a").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
        jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
			
			 //prettyphoto lightbox 

        jQuery(".light_img_wrap a ").attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });
        jQuery(".alignnone").parent().attr("data-gal", "prettyPhoto[gallery1]")
            .prettyPhoto({
                theme: 'light_rounded',
                overlay_gallery: false,
                deeplinking: false
            });

        //notification bar
        $(".toogle_span").on("click", function() {
            $(".notification_bar").slideToggle(300);

        });

        //toggle menu
        $(".navbar_toggle").on("click", function() {
            $(".navbar_collapse").slideToggle(300);

        });

        //sidebar
        $(".sidebar_toogle").on("click", function() {
            $(".ds_sidebar").slideToggle(300);

        });
        //active_sub
        $(".active_sub").attr('style', 'color:#333 !important');

        //active class
        $(".menu a").on("click", function() {
            $(".menu").find(".current_page_item").removeClass("current_page_item");
            $(this).parent().addClass("current_page_item");
        });


        //active portfolio  class
        $(".blog_ul a").on("click", function() {
            $(".blog_ul ").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });



        //add class
        $(".sub-menu li a").before("<b></b>");

        //add submenu li class
        $("ul.sub-menu").parents("li").addClass("dropdown");


        //uitabs

        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");

        $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
        //Mixitup

        $('#porfolio_filter').mixItUp();
        filterSelector: ".filter"
        $(".filter").on("click", function(e) {
            e.preventDefault()
        });

        //conter js
        $('.timer').each(count);

        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }

        //accordion toogle
        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find('i.indicator')
                .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        }
        $('#accordion').on('hidden.bs.collapse', toggleChevron);
        $('#accordion').on('shown.bs.collapse', toggleChevron);
    });
    //contact form submition
    $("#em_submit").on("click", function() {
        var e = $("#uname").val();
        var t = $("#umail").val();
        var s = $("#subj").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                useresubject: s,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#uname").val("");
                    $("#umail").val("");
                    $("#subj").val("");
                    $("#msg").val("");
                    $("#err").html(i[1])
                } else {
                    $("#uname").val(e);
                    $("#umail").val(t);
                    $("#subj").val(s);
                    $("#msg").val(r);
                    $("#err").html(i[1])
                }
            }
        })
    });
	//Booking form Mail function
    $(".booking_btn").on("click", function() {
        var e = $("#b_name").val();
        var t = $("#b_email").val();
        var m = $("#b_msg").val();
        $.ajax({
            type: "POST",
            url: "booking.php",
            data: {
                username: e,
                useremail: t,
                usermessage: m
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#b_name").val("");
                    $("#b_email").val("");
                    $("#b_msg").val("");
                    $("#booking_err").html(i[1])
                } else {
                    $("#b_name").val(e);
                    $("#b_email").val(t);
                    $("#b_msg").val(m);
                    $("#booking_err").html(i[1])
                }
            }
        })
    });

    //menu scroll top 

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 70) {
            $('.wrapper_nav').addClass('fixed_top').slideDown('slow');


        } else {
            $('.wrapper_nav').removeClass('fixed_top');
        }

    });
//preloader
    $("#status").fadeOut();
    $("#preloader").delay(1200).fadeOut("slow")
        //preloader end

}(jQuery));