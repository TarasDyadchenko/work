;(function ($) {
    $(function () {
        var img1 = $('.s1 img:nth-of-type(1)'),
            img1X = parseInt(img1.css('margin-left')),
            img1Y = parseInt(img1.css('bottom')),
            img2 = $('.s1 img:nth-of-type(2)'),
            img2X = parseInt(img2.css('margin-left')),
            img2Y = parseInt(img2.css('bottom')),
            img3 = $('.s1 img:nth-of-type(3)'),
            img3X = parseInt(img3.css('left')),
            img3Y = parseInt(img3.css('bottom')),
            img4 = $('.s1 img:nth-of-type(4)'),
            img4X = parseInt(img4.css('margin-left')),
            img4Y = parseInt(img4.css('bottom')),
            img5 = $('.s1 img:nth-of-type(5)'),
            // img5X = parseInt(img5.css('margin-left')),
            img5Y = parseInt(img5.css('bottom')),
            img6 = $('.s1 img:nth-of-type(6)'),
            // img6X = parseInt(img6.css('margin-left')),
            img6Y = parseInt(img6.css('bottom')),
            img7 = $('.s1 img:nth-of-type(7)'),
            img7X = parseInt(img7.css('margin-left')),
            img7Y = parseInt(img7.css('bottom'));
        // text = $('.s1 .slide'),
        // textX = parseInt(text.css('margin-left')),
        // textY = parseInt(text.css('margin-top'));


        $('.s1').on('mousemove', function (e) {
            var x = e.clientX,
                y = e.clientY;
            img1.css({
                marginLeft: img1X + x / 70 + 'px',
                bottom: img1Y - y / 100 + 'px'
            });
            img2.css({
                marginLeft: img2X - x / 100 + 'px',
                bottom: img2Y - y / 50 + 'px'
            });
            img3.css({
                left: img3X - x / 100 + 'px',
                bottom: img3Y - y / 20 + 'px'
            });
            img4.css({
                marginLeft: img4X - x / 50 + 'px',
                bottom: img4Y + y / 30 + 'px'
            });
            img5.css({
                bottom: img5Y + x / 80 + 'px'
            });
            img6.css({
                marginLeft: img6X - x / 300 + 'px',
                bottom: img6Y + y / 30 + 'px'
            });

            img7.css({
                marginLeft: img7X - x / 50 + 'px',
                bottom: img7Y + y / 30 + 'px'
            });
            // text.css({
            //     marginLeft: textX + x / 30 + 'px',
            //     marginTop: textY + x / 20 + 'px'
            // });
        });
    });

    $(function () {
        // Mouse move parallax
        var img1 = $('.s3 img:nth-of-type(1)'),
            img1X = parseInt(img1.css('margin-right')),
            img1Y = parseInt(img1.css('bottom')),
            img2 = $('.s3 img:nth-of-type(2)'),
            img2X = parseInt(img2.css('margin-right')),
            img2Y = parseInt(img2.css('bottom')),
            img3 = $('.s3 img:nth-of-type(3)'),
            img3X = parseInt(img3.css('right')),
            img3Y = parseInt(img3.css('bottom')),
            img4 = $('.s3 img:nth-of-type(4)'),
            img4X = parseInt(img4.css('margin-right')),
            img4Y = parseInt(img4.css('bottom')),
            img5 = $('.s3 img:nth-of-type(5)'),
            // img5X = parseInt(img5.css('margin-right')),
            img5Y = parseInt(img5.css('bottom')),
            img6 = $('.s3 img:nth-of-type(6)'),
            // img6X = parseInt(img6.css('margin-right')),
            img6Y = parseInt(img6.css('top')),
            text = $('.s3 .bloc'),
            textX = parseInt(text.css('margin-right')),
            textY = parseInt(text.css('margin-top'));

        $('.s3').on('mousemove', function (o) {
            var x = o.clientX,
                y = o.clientY;
            img1.css({
                marginRight: img1X + x / 70 + 'px',
                bottom: img1Y - y / 100 + 'px'
            });
            img2.css({
                marginRightL: img2X - x / 100 + 'px',
                bottom: img2Y - y / 50 + 'px'
            });
            img3.css({
                Right: img3X - x / 100 + 'px',
                bottom: img3Y - y / 30 + 'px'
            });
            img4.css({
                marginRight: img4X - x / 50 + 'px',
                bottom: img4Y + y / 30 + 'px'
            });
            img5.css({
                bottom: img5Y + x / 80 + 'px'
            });
            img6.css({
                top: img6Y - x / 200 + 'px'
            });
            text.css({
                marginRight: textX + x / 300 + 'px',
                marginTop: textY + x / 200 + 'px'
            });
        });


        // Scroll parallax
        var img1scroll = $('.s4 > img'),
            img1scrollY = parseInt(img1scroll.css('bottom')),
            img2scroll = $('.s5 > img:last-of-type'),
            img2scrollY = parseInt(img2scroll.css('bottom'));

        $(window).on('scroll', function () {
            // console.log(window.scrollY);
            // console.log(window.scrollY / 50 + 'px');
            // console.log(img1scrollY);
            img1scroll.css('bottom', img1scrollY - (window.scrollY - 1500) / 3 + 'px');
            // console.log((window.scrollY - 1960) / 10);
            img2scroll.css('bottom', img2scrollY + (window.scrollY - 1960) / 10 + 'px');
        });
    });

    // Sliders
    $('.s1 .section-inner').slick({
        dots: true,
        fade: true
    });
    $('.item-wrapper, .photo-wrapper, .snow-wrapper').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true
    });

})(jQuery);
