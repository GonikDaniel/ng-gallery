angular.module('dgPhotoGallery').controller('AlbumIndexController', ['$scope', 'Albums', AlbumIndexController]);

function AlbumIndexController($scope, Albums){
    $scope.albums = Albums.query();
}