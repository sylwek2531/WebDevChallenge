$(document).ready(function ()
{
    var input = $('.inp-group input');
    var textarea = $('textarea');

    $(window).scroll(function (){
        if ($(this).scrollTop() > 50) {
            $('.navbar').css("padding-top", '20px')
        }
        else if($(window).width() < 500){
            $('.navbar').css("padding-top", '20px')
        }
        else {
            $('.navbar').css("padding-top", '50px')
        }
    });


    input.keyup(function (){
        $(this).val().length !== 0 ? $(this).parent().addClass('value') : $(this).parent().removeClass('value');
    });

    textarea.keyup(function (){
        $(this).val().length !== 0 ? $(this).addClass('value') : $(this).removeClass('value');
    });

    $('.navbar a').bind('click', function () {
        $('.navbar').find('li.active').removeClass('active');

        var id = $(this).attr('data-scroll');
        $(this).parents('li').addClass('active');

        $('html, body').stop().animate({
            scrollTop: $(id).offset().top
        }, 1000);
    })


});