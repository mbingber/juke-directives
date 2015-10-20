app.config(function ($stateProvider) {
	$stateProvider.state('artist.songs', {
		url: '/songs',
		template: '<div><h4>SONGS</h4><song-list songs="artist.songs"></song-list></div>'
	});
});