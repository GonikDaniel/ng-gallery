angular.module('dgPhotoGallery').factory('Albums', ['$resource', function($resource){
    //по поводу @id - в случае обновления или удаления заметки нам нужно указать ее id
    //поэтому мы передаем доп.параметром для $resource данный id - @id значит по сути то же, что и this.id (т.е. возьми текущий id)
    return $resource('/albums/:id', {id: "@id"}, {
        update: {
            method: 'PUT'
        }
    });
}]);