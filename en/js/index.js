const $mainDescOpt = $('#MainDesc').children();
let index = Math.floor(Math.random() * 8) + 1;
let clipNum = Math.floor(Math.random() * 2) + 1;
const $alumniProfile = $('#Alumni').find('#Alumni' + clipNum);
const $alumniBtn = $('#AlumniToggle');
let alumniNum = clipNum;

//Init 
$('#MainPic').find('img').attr('src', `./images/photo${index}.jpg`)

setInterval(function () {
    if (index < 8) {
        index++;
    } else {
        index = 1;
    }
    $('#PicStrip').css('left', -100 * (index - 1) + '%')
    $('#MainPic').find('img').attr('src', `./images/photo${index}.jpg`)
}, 5000)

$alumniProfile.siblings().hide();

$mainDescOpt
    .on('mouseenter', function () {
        $(this).siblings()
            .css('transform', 'scale(.9)')
            .stop(true, false).fadeTo(500, .5)
    })
    .on('mouseleave', function () {
        $(this).siblings()
            .css('transform', 'scale(1)')
            .stop(true, false).fadeTo(500, 1)
    })

$('#Alumni').find('input').on('click', function () {
    const $targetDiv = $(this).closest('.alumni-profile')
    let $nextDiv = $targetDiv.next('.alumni-profile')

    if ($nextDiv.length === 0) {
        $nextDiv = $targetDiv.siblings('.alumni-profile').first()
    }

    $targetDiv.hide()
    $nextDiv.show()
})