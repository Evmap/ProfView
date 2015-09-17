angular.module('starter.controllers', [])
   .controller('CityCtrl', function($scope,Cities) {
	 $scope.cities = Cities.all();
})
    .controller('CityDetailCtrl', function($scope, $http, $stateParams, $ionicPopup) {

	$scope.data = {};
	$scope.id = $stateParams.id;
	$scope.showAlert = function(title, text) {
            $ionicPopup.alert({
		title: title,
		template: text
            });
	};

	$scope.vk_response = {};
	$scope.vk_posts = {};
	$scope.vk_tags = ["#мероприятияигу","#стипендияигу","#работаигу"];
	$scope.refresh = function() {
	    var script = document.createElement('SCRIPT');
	    script.src = "https://api.vk.com/method/wall.get?domain=profisu&v=5.34&callback=callbackFunc";
	    document.getElementsByTagName("head")[0].appendChild(script);
	    callbackFunc = function(result){
		$scope.vk_response = result.response;
		$scope.vk_posts = result.response.items;
		document.getElementsByTagName("head")[0].removeChild(script);
		$scope.$broadcast('scroll.refreshComplete');
	    };	
	};

	$scope.GoToLink = function (url) {
	    window.open(url,'_system');
	}
	$scope.refresh();
})

  




