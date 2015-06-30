$(function(){
    $(document).scroll(function(){
        var scrollHeight = $(this).scrollTop();
        if (scrollHeight > 100) {
            $('.up-button').removeClass('up-button--hidden');
        }
        else {
            $('.up-button').addClass('up-button--hidden');
        }
    });

    $('.up-button').on('click', function(e){
        e.preventDefault();
        $('body').animate({scrollTop:0}, 500, 'swing');
    })
});