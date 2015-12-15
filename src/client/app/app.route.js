angular.module('dgPhotoGallery').config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/albums'
        })

        .when('/albums', {
            templateUrl: 'app/albums/index.html',
            controller: 'AlbumIndexController',
            // controllerAs: 'albums'
        })

        .when('/albums/:id', {
            templateUrl: 'app/albums/album.html',
            controller: 'AlbumShowController',
            // controllerAs: 'album'
        })

        .otherwise({redirectTo: '/'});
        // if(window.history && window.history.pushState){
        //     $locationProvider.html5Mode(true);
        // }
}]);