import {routes} from './routes';
import {ApiService} from './services';
import {indexController} from './controllers';
import {artistController} from './controllers';
import {albumController} from './controllers';


angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .controller('indexController',indexController)
    .controller('artistController',artistController)
    .controller('albumController',albumController);
