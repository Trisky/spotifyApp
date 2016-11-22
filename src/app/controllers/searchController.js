"use strict";
export function searchController($scope, $location, $routeParams, ApiService, ArtistsService) {

    var searchapi = "https://api.spotify.com/v1/search?q=";
    var searchInput = $routeParams.id;
    var searchUrl = searchapi + searchInput + '&type=artist';

    ApiService.getInfo(searchUrl, this.showAlbums)
        .then(data => { $scope.RenderArtists(data); });



    $scope.RenderArtists = function (data) {
        console.log(data.artists.items);
        $scope.artistsList = data.artists.items;

        //now we save the details of each artist to the localstorage
        ArtistsService.add(data.artists.items);
    };
    $scope.viewArtist = function (artist) {
        ApiService.selectedArtist = artist;
        $location.path('artist' + artist.id);
    };
}
