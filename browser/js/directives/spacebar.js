app.directive('spacebar', function (PlayerFactory) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('keydown', function(e) {
            	if (PlayerFactory.getCurrentSong()) {
	            	if (e.keyCode == 32) {
			            if (PlayerFactory.isPlaying()) PlayerFactory.pause();
						else PlayerFactory.resume();
	            	}
	            	else if (e.keyCode == 37) PlayerFactory.previous();
	            	else if (e.keyCode == 39) PlayerFactory.next();
	            }
            });

        }
    };
});