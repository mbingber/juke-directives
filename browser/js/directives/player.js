app.directive('player', function(PlayerFactory) {
	return {
		restrict: 'E',
		templateUrl: '/templates/player.html',
		link: function(scope) {
			scope.getCurrentSong = PlayerFactory.getCurrentSong;
			scope.isPlaying = PlayerFactory.isPlaying;
			scope.forward = PlayerFactory.next;
			scope.back = PlayerFactory.previous;

			scope.getPercent = function () {
				return (100 * PlayerFactory.getProgress()) + '%';
			};

			scope.toggle = function (keyCode) {
				if (keyCode == 32 || !keyCode) {
					if (PlayerFactory.isPlaying()) PlayerFactory.pause();
					else PlayerFactory.resume();
				}
			};
		}
	}
})