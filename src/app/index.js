import { routes } from './routes';
import { ApiService } from './services';
import { favoritesService } from './services';
import { indexController } from './controllers';
import { artistController } from './controllers';
import { albumController } from './controllers';
import 'angular-cookies';
import 'ngstorage';


angular.module('App', ['ngRoute','ngStorage', 'ngCookies'])
    .config(routes)
    .service('ApiService', ['$http', ApiService])
    .service('favoritesService', ['ngStorage','$cookies', favoritesService])
    .controller('indexController', indexController)
    .controller('artistController', ['$scope', '$http', '$routeParams', 'ApiService', artistController])
    .controller('albumController', ['$scope', '$http', '$routeParams', 'ApiService','favoritesService', albumController]); //to show the tracks
