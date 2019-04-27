;(function ($) {
    $(function () {
        $('.slider').slick({
            arrows: false,
            dots: true
        });
        var $grid = $('.items').isotope({
            itemSelector: '.element-item',
            layoutMode: 'packery'
        });
        $('.filters-button-group').on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            $(this)
                .addClass('b')
                .siblings()
                .removeClass('b')
        });
    });
})(jQuery);
