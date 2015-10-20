app.directive("artistLinks", function(){
	return {
		restrict: "E",
		template: '<span ng-repeat="artist in artists"><a ui-sref="artist({artistId: artist._id})">{{ artist.name }}</a> </span>',
		scope: {
			artists: "="
		}
	}
})