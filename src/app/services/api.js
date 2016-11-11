export function ApiService($http) {

    //mirar xq no esta bindeado

    var foundArtists;
    this.getInfo = function (searchTerm, funcion) {
        return $http({
            method: 'GET',
            url: searchTerm
        }).then(function successCallback(response) {
            funcion(response);
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
