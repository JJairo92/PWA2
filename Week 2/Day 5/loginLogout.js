// login-logout

$.ajax({
	url: 'xhr/login.php',
	data: {
		username: user,
		password: pass
	},
	type: 'post',
	dataType: 'json',
	success: function(response) {
		console.log(response);

		if(response.error) {
			showLoginError();
		} else {
			loadApp();
		}
	}
});

win.on('click', '#btn-logout', function() {
	$.get('xhr/logout.php', function() {
		loadLanding();
	}
	return false;
})