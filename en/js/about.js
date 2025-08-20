const $aboutHeader = $('#About').find('.about-header'); 

$aboutHeader.on('click', function(){
    $(this).next().stop(true, false).slideToggle()
    $(this).parent().siblings().find('.about-body').stop(true, false).slideUp()
})