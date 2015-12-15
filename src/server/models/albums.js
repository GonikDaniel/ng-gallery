var _ = require('lodash');

var albums = [
{
    "albumId": 1,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/1.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 12
}, {
    "albumId": 2,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/2.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, ea reiciendis sequi vel ut culpa beatae, quos possimus, earum nisi in officia fuga similique. Distinctio molestias earum magnam nostrum quis!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 22
}, {
    "albumId": 3,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/3.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 8
}, {
    "albumId": 4,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/4.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 32
}, {
    "albumId": 5,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/5.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 112
}, {
    "albumId": 6,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/6.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 20
}, {
    "albumId": 7,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/7.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 33
}, {
    "albumId": 8,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/8.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 7
}, {
    "albumId": 9,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/9.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 14
}, {
    "albumId": 10,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/10.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 44
}, {
    "albumId": 11,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/11.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 22
}, {
    "albumId": 12,
    "cover": "/Applications/MAMP/htdocs/projects/portfolio/study/php/img/12.jpg",
    "title": "Sample album",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, ratione. Ad eveniet eos quibusdam maxime qui dolore, a consequuntur inventore quis adipisci modi, non repudiandae quo commodi distinctio nobis eaque!",
    "author": "admin",
    "createdAt": 995035392133,
    "modifiedAt": 1450153676624,
    "photoAmount": 11
}];

module.exports = {
  get: function(id) {
    return _.find(albums, function(album){
      return album.albumId === id;
    });
  },
  all: function() {
    return albums;
  }
};