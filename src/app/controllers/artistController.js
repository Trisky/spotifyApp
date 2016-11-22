"use strict";
export function artistController($scope, $location, $routeParams, ArtistsService, ApiService) {
    var artistID = $routeParams.id;

    var artist = ArtistsService.getArtistById(artistID);
    $scope.artistImage = artist.image;

    var searchTerm = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';

    ApiService.getInfo(searchTerm, this.showAlbums)
        .then(data => { this.showAlbums(data); });

    this.showAlbums = function (data) {
        // console.log("showAlbums");
        // console.log(data.items);
        $scope.albumsList = data.items;
        $scope.ArtistName = data.items[0].artists[0].name;
    };

    $scope.goToAlbum = function (a) {
        ApiService.selectedAlbum = a;
        $location.path('album' + a.id);
    };
}