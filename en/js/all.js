const $navInfo = $('#NavInfo');
const $navTrain = $('#NavTrain');
const $navMenu = $('#NavMenu');
const $navList = $('#NavList');

//Init 

//Event 
$navInfo
    .on('mouseenter', function () {
        $(this).find('ul').stop(true, false).slideDown(1000)
    })
    .on('mouseleave', function () {
        $(this).find('ul').hide()
    })

$navTrain
    .on('mouseenter', function () {
        $(this).find('ul').stop(true, false).slideDown(1000)
    })
    .on('mouseleave', function () {
        $(this).find('ul').hide()
    })

$navMenu
    .on('click', function (e) {
        e.stopPropagation();
        $navList.slideToggle(300)
    })

$navList.on('click', function (e) {
    e.stopPropagation()
})

$(document).on('click', function () {
    if ($(window).width() <= 565) {
        $navList.slideUp(300)
    }
})

$(window).on('resize', function () {
    if ($(window).width() > 565) {
        $navList.removeClass('active').removeAttr('style');
    } else {
        $navList.css('display', '');
    }
});

$(window).trigger('resize');
