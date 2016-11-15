"use strict";
export function ApiService($http) {
    this.getInfo = function (searchTerm) {
        return $http({
            method: 'GET',
            url: searchTerm
        }).then(response => {
            return response.data;
        }, function errorCallback(response) {
            console.error();
            console.log(response);
        });
    };

    this.getArtists = function (string) {
        var searchUrl = "https://api.spotify.com/v1/search?q=";
        var url = searchUrl + string + '&type=artist';
        this.getInfo(url, this.saveFoundArtists);

    };
    this.saveFoundArtists = function (response) {
        foundArtists = response.data.artists.items;
    };
}
