import { routes } from './routes';
import 'angular-cookies';
import 'ngstorage';

//services
import { favoritesService } from './services';
import { ApiService } from './services';
import { ArtistsService } from './services';

//controllers
import { indexController } from './controllers';
import { artistController } from './controllers';
import { albumController } from './controllers';
import { searchController } from './controllers';

//directives
import { searchDirective } from './directives';

angular.module('App', ['ngRoute', 'ngStorage', 'ngCookies'])
    .config(routes)
    .service('ApiService', ['$http', ApiService])
    .service('favoritesService', ['$localStorage', favoritesService])
    .service('ArtistsService', ['$localStorage', ArtistsService])

    .controller('searchController', ['$scope', '$location', '$routeParams', 'ApiService', 'ArtistsService',
        searchController])

    .controller('indexController', ['$scope', '$location', 'favoritesService',
        indexController])

    .controller('artistController', ['$scope', '$location', '$routeParams', 'ArtistsService',
         'ApiService', artistController])

    .controller('albumController', ['$scope', '$http', '$routeParams',
        'ApiService', 'favoritesService','ArtistsService', albumController])

    .directive('searchBar', searchDirective);


    //$scope, $location, $routeParams, ArtistsService, ApiService