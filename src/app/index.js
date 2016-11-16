import { routes } from './routes';
import { ApiService } from './services';
import 'angular-cookies';
import 'ngstorage';

//services
import { favoritesService } from './services';

//controllers
import { indexController } from './controllers';
import { artistController } from './controllers';
import { albumController } from './controllers';
import { favoritesDirective } from './directives';

//font-awesome
//require('./fonts/font-darkenstone/darkenstone.scss');



angular.module('App', ['ngRoute', 'ngStorage', 'ngCookies'])
    .config(routes)
    .service('ApiService', ['$http', ApiService])
    .service('favoritesService', ['$localStorage', favoritesService])
    .controller('indexController', ['$scope', '$http','favoritesService', 'ApiService', indexController])
    .controller('artistController', ['$scope', '$http', '$routeParams', 'ApiService', artistController])
    .controller('albumController', ['$scope', '$http', '$routeParams', 'ApiService', 'favoritesService', albumController]) //to show the tracks
    .directive('favoritesDirective',['favoritesService',favoritesDirective] );
