$(function() {
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function($form, event, errors) {

        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM

            var thisForm = event.target.getAttribute('id');
            var email = $('#' + thisForm).find("input.email-input").val();
            var message = $('#' + thisForm).find("textarea.textarea").val();

            $.ajax({
                url: "https://formspree.io/f/xyylaprv",
                type: "POST",
                dataType: 'json',
                data: {
                    email: email,
                    message: message
                },
                cache: false,
                success: function(data) {
	                    // Success message
                        $('#send-message-modal').modal();
	                    //clear all fields
                        $('#' + thisForm).trigger("reset");
                        //close contact modal
                        $('#contact-me-modal').modal("hide");
					},
                error: function(data) {
                    console.log('error');
                }
            });

        },
        filter: function() {
            return $(this).is(":visible");
        }
    });
});


/*When clicking on Full hide fail/success boxes */
$('#form-first-name').focus(function() {
    $('#success').html('');
});
