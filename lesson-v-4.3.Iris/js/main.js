;(function ($) {
    $(function () {
        $('.blog span[data-id]').on('click', function () {
            var $this = $(this),
                currentType = $this.data('id');
            $this
                .addClass('active')
                .siblings()
                .removeClass('active');
            $('.collage[data-id=' + currentType + ']')
                .addClass('active')
                .siblings()
                .removeClass('active');
        });
    });
})(jQuery);
