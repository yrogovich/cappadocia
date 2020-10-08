$(function() {
    // Form handler
    $('form').submit(function(event) {
        event.preventDefault();

        console.log('form func is running');

        let msg = jQuery(this).serialize();
        let form = jQuery(this);

        jQuery.ajax({
            type: 'POST',
            url: `send.php`,
            data: msg,
            success: function(data) {
                console.log('form ok');

                form.closest(".free-consult").addClass('form-ok');
            },
            error: function () {
                console.log('form error');
            }
        });
    });

    // Jquery LazyLoad init
    try {
        $('.lazy').Lazy();
    } catch (error) {
        console.log(`LazyLoad plugin error: ${error}`);
    }

    // Accordions
    $('.accordion .content').slideUp();
    $('.accordions .accordion:first').addClass('active');
    $('.accordions .accordion:first .content').slideDown();

    $('.accordion .title').on('click', function() {
        $('.accordion').removeClass('active');
        $('.accordion .content').slideUp();

        $(this)
            .parent()
            .addClass('active')
            .find('.content')
            .slideDown();
    });
});
