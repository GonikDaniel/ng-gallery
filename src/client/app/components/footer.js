angular.module('dgPhotoGallery').directive('dgFooter', function() {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/components/footer.html',
        controller: function($scope, $location) {
            
        }
    };
});