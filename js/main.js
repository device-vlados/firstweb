$(function () {

    var mixer = mixitup('.blog__list');

    $('.blog__filter-btn').on('click', function() {
        $('.blog__filter-btn').removeClass('blog__filter-btn--active')
        $(this).addClass('blog__filter-btn--active')
    })

    $('.things__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        appendDots: $('.things__dots'),
        waitForAnimate: false,
    })
    $('.things__prev').on('click', function (e) {
        e.preventDefault()
        $('.things__slider').slick('slickPrev')
    })
    $('.things__next').on('click', function (e) {
        e.preventDefault()
        $('.things__slider').slick('slickNext')
    })

    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__acc-link--active')) {
            $(this).removeClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideUp()
        } else {
            $('.faq__acc-link').removeClass('faq__acc-link--active')
            $('.faq__acc-text').slideUp()
            $(this).addClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideDown()
        }
    })

    $(".header__nav-list a, .footer__logo, .footer__nav-list a").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 800)
    })
})