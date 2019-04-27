;(function ($) {
    $(function () {
        var img1 = $('.s1 img:nth-of-type(1)'),
            img1X = parseInt(img1.css('margin-left')),
            img1Y = parseInt(img1.css('margin-top')),
            img2 = $('.s1 img:nth-of-type(2)'),
            img2X = parseInt(img2.css('margin-left')),
            img2Y = parseInt(img2.css('margin-top')),
            img3 = $('.s1 img:nth-of-type(3)'),
            img3X = parseInt(img3.css('margin-left')),
            img3Y = parseInt(img3.css('margin-top')),
            img4 = $('.s1 img:nth-of-type(4)'),
            img4X = parseInt(img4.css('margin-left')),
            img4Y = parseInt(img4.css('margin-top')),
            img5 = $('.s1 img:nth-of-type(5)'),
            img5X = parseInt(img5.css('margin-left')),
            img5Y = parseInt(img5.css('margin-top')),
            img6 = $('.s1 img:nth-of-type(6)'),
            img6X = parseInt(img6.css('margin-left')),
            img6Y = parseInt(img6.css('margin-top')),
            img7 = $('.s1 img:nth-of-type(7)'),
            img7X = parseInt(img7.css('margin-left')),
            img7Y = parseInt(img7.css('margin-top')),
            img8 = $('.s1 img:nth-of-type(8)'),
            img8X = parseInt(img8.css('margin-left')),
            img8Y = parseInt(img8.css('margin-top'));


        $('.s1').on('mousemove', function (e) {
            var x = e.clientX,
                y = e.clientY;
            img1.css({
                marginLeft: img1X + x / 70 + 'px',
                marginTop: img1Y - y / 100 + 'px'
            });

            img2.css({
                marginLeft: img2X - x / 100 + 'px',
                marginTop: img2Y - y / 50 + 'px'
            });
            img3.css({
                marginLeft: img3X - x / 100 + 'px',
                marginTop: img3Y - y / 20 + 'px'
            });
            img4.css({
                marginLeft: img4X - x / 50 + 'px',
                marginTop: img4Y + y / 30 + 'px'
            });
            img5.css({
                marginTop: img5Y + x / 80 + 'px'
            });
            img6.css({
                marginLeft: img6X - x / 50 + 'px',
                marginTop: img6Y - x / 300 + 'px'
            });

            img7.css({
                marginLeft: img7X - x / 50 + 'px',
                marginTop: img7Y + y / 30 + 'px'
            });

            img8.css({
                marginLeft: img8X - x / 50 + 'px',
                marginTop: img8Y + y / 30 + 'px'
            });
        });
    });

    // Sliders
    // $('.s1 .section-inner').slick({
    //     dots: true,
    //     fade: true
    // });

})(jQuery);
