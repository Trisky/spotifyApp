import {routes} from './routes';
import {ApiService} from './services';
import {Controllers} from './Controllers';


angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService);
    

