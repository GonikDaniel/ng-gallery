angular.module('dgPhotoGallery').directive('dgTopNav', function() {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/components/topnav.html',
        controller: function($scope, $location) {
            $scope.isPage = function(name) {
                return new RegExp("/" + name + "($|/)").test($location.path());
            };
        }
    };
});