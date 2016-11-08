import {routes} from './routes';
import {ApiService} from './services';


angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService);
