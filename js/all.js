const $navInfo = $('#NavInfo');
const $navTrain = $('#NavTrain');

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