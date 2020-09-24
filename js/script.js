$(function() {
    $('a').click(function() {
        let scrollingTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(scrollingTo).offset().top
        }, 1000);
    });

    $('.works__item').click(function() {
        $('.works__item').removeClass('active');
        $(this).addClass('active');

        let category = $(this).attr('data-category');

        if ($(this).attr('data-category') == 'all') {
            $('.gallery').css('display', '');
            $('.gallery__item').css('display', '');
            $('.gallery__item').css('width', '');
            $('.gallery__item').css('max-width', '');
        } else {
            $('.gallery').css('display', 'flex');
            $('.gallery__item').css('width', 'auto');
            $('.gallery__item').css('max-width', '380px');
            $('.gallery__item').css('display', 'none');
            $(`.${category}`).css('display', 'block');
            $('.gallery__item').css('object-fit', 'contain');
        }
    });
});