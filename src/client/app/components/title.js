angular.module('dgPhotoGallery').directive('title', function($timeout) {
   return function(scope, element, attrs) {
        $timeout(function() {
            $(element).tooltip();
        });

        scope.$on('$destroy', function() {
            $(element).tooltip('destroy');
        });
   };
});