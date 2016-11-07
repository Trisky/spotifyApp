import angular from 'angular';

import './app';

angular.bootstrap(document, ['App']);

var moviesController = angular.controller('ArtistCtrl', ['$cookies', '$scope', function ($scope) {

    var searchUrl = "https://api.spotify.com/v1/search?q="

    $scope.searchArtist = function () {
        Console.log("asd");
        var searchTerm = $scope.searchInput;
        searchTerm.replace(' ', '+');
        $http({
            method: 'GET',
            url: searchUrl + searchTerm + "*",
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            alert("error");
        });
    };


}]);