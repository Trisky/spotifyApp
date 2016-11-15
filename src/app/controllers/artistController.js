"use strict";
export function artistController($scope, $http, $routeParams, ApiService) {
    var artistID = $routeParams.id;
    var searchTerm = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';

    ApiService.getInfo(searchTerm, this.showAlbums)
        .then(data => { this.showAlbums(data); });

    this.showAlbums = function (data) {
        console.log("showAlbums"); 
        console.log(data.items);
        $scope.albumsList = data.items;
        $scope.ArtistName = data.items[0].artists[0].name;
        //$scope.ArtistImage = 
    };
}