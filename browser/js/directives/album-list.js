app.directive('albumList', function(AlbumFactory) {
	return {
		restrict: 'E',
		templateUrl: '/templates/album-list.html',
		scope: {
			albums: '='
		}
	}
})