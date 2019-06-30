;(function ($) {
    $(function () {
        // tabs
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

        // popup
        $('.popup .close').on('click', function () {
            $(this)
                .closest('.popup_bg')
                // .removeClass('opened')
                .fadeOut();
        });
        $('.ask').on('click', function () {
            $('.ask-form-popup')
                .addClass('opened')
                .fadeIn();
        });

        // popup 2
        $('.effect a').on('click', function () {
            $('.popup_bg').fadeOut();
            $('.ask-thanks')
                .addClass('opened')
                .fadeIn();
        });
    });
})(jQuery);
