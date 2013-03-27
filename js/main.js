$(document).ready(function () {

	/* Ensure that all fields have a value.
	   Highlight missing fields and show an alert.
	   The form is only submitted if all fields are present. */
	$('form').submit(function (event) {
		var form_okay = true;

		$(':input').removeClass('missing').each(function () {
			var value = $( this ).val();

			// Uh oh, missing value.
			if (value === '') {
				$(this).addClass( 'missing' );
				$(this).after('<img class="error" src=http://images.wikia.com/dantest/images/c/c8/Cross.gif>');
				form_okay = false;
			}
		});

		// A field was missed, so don't submit.
		if ( ! form_okay) {
			event.preventDefault();
			alert('Please complete all fields');
		}

	});

});
