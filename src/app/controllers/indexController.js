"use strict";
export function indexController($scope, $http, $location, favoritesService, ApiService) {
    var searchapi = "https://api.spotify.com/v1/search?q=";

    $scope.favoritesLst = favoritesService.getFavorites(); //set the favorites to the local scope list

    $scope.searchArtist = function() {

        var searchInput = $scope.searchInput;
        var searchUrl = searchapi + searchInput + '&type=artist';
        ApiService.getInfo(searchUrl, this.showAlbums)
            .then(data => { $scope.RenderArtists(data); });
    };

    $scope.viewArtist = function(artist) {
        ApiService.selectedArtist = artist;
        $location.path('artist' + artist.id);
    };

    $scope.RenderArtists = function(data) {
        console.log(data);
        $scope.artistsList = data.artists.items;
    };
    $scope.removeFavorite = function(track) {
        favoritesService.removeTrack(track);
        $scope.favoritesLst = favoritesService.getFavorites();
        // var index = $scope.favoritesLst.indexOf(track);
        // $scope.favoritesLst.splice(index, 1);
    };
}