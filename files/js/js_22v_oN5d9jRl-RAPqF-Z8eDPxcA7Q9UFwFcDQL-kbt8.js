(function($) {
    $(function() {
        $('#search-block-form input.form-text').focus(function() {
            if ($(this).val() == 'Search') {
                $(this).val('');
            }
        });
        $('#search-block-form input.form-text').blur(function() {
            if ($(this).val() == '') {
                $(this).val('Search');
            }
        });
        $('#superfish-1 li li > a').each(function () {
            if ($(this).text().length < 25) {
                $(this).css('padding-top', '10px');
            }
        });
        $('#block-user-login .block-inner').before('<img src="/sites/amqp.org/themes/genesis_amqp/images/carousel-nav-bullet.png" width="15" height="12" alt="" id="login-pointer">');
        $('#login').click(function(event) {
            event.preventDefault();
            $('#block-user-login').slideToggle();
        });
        if ($('#user-login-form input.error').length !== 0) {
            $('#block-user-login').slideToggle();
        }
    });
    carouselMove = function(carousel, li, liIndex, state) {
        liIndex -= 1;
        $('#carousel-nav li').removeClass('active');
        $('#carousel-nav li img').remove('.bullet');
        $('#carousel-nav li:eq(' + liIndex % 4 + ')').addClass('active');
        $('#carousel-nav li:eq(' + liIndex % 4 + ')').prepend('<img src="/sites/amqp.org/themes/genesis_amqp/images/carousel-nav-bullet.png" width="15" height="12" alt="" class="bullet" />');
    };
    carouselInit = function(carousel, init) {
        $('#carousel-nav li').bind('click', function() {
            carousel.scroll($(this).index() + 1);
            return false;
        });
    };

})(jQuery);;
