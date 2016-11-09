export function indexController($scope, $http) {
    var searchUrl = "https://api.spotify.com/v1/search?q=";
    $scope.searchArtist = function () {

        var searchTerm = $scope.searchInput;
        console.log(searchTerm);
        //searchTherm.replace(' ', '+');
        $http({
            method: 'GET',
            url: searchUrl + searchTerm + '&type=artist',
        }).then(function successCallback(response) {
            console.log(response);
            $scope.RenderArtists(response.data.artists.items);

        }, function errorCallback(response) {
            console.error();
            console.log(response);
        });
    };

    $scope.RenderArtists = function (artists) {
        $scope.artistsList = artists;
    };


}

export function artistController($scope, $http, $routeParams) {
    var artistID = $routeParams.id;
    var searchTerm = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';

    $http({
        method: 'GET',
        url: searchTerm
    }).then(function successCallback(response) {
        console.log(response);

        $scope.albumsList = response.data.items;
        $scope.ArtistName = response.data.items[0].artists[0].name;
    }, function errorCallback(response) {
        console.error();
        console.log(response);
    });
}

export function albumController($scope, $http, $routeParams) {
    var albumID = $routeParams.id;

    // var albumUrl = 'https://api.spotify.com/v1/albums/' + albumID;
    // getInfo(albumUrl, $scope.getAlbumInfo);


    // $scope.getAlbumInfo = function (info){
    //     console.log("album INFO:");
    //     console.log(info);
    // };

    var searchTerm = 'https://api.spotify.com/v1/albums/' + albumID + '/tracks';
    $http({
        method: 'GET',
        url: searchTerm
    }).then(function successCallback(response) {
        console.log(response);
        $scope.trackList = response.data.items;
        //$scope.ArtistName = response.data.items[0].artists[0].name;
    }, function errorCallback(response) {
        console.error();
        console.log(response);
    });


    // $scope.playSong = function (trackID) {
    //     $scope.previewUrl = $scope.trackList[trackID].preview_url;
    //     //mostrar modal con el player. TODO

}


// $scope.getInfo = function (searchTerm, funcion) {
//     $http({
//         method: 'GET',
//         url: searchTerm
//     }).then(function successCallback(response) {
//         funcion(response);
//         // $scope.ArtistName = response.data.items[0].artists[0].name;
//     }, function errorCallback(response) {
//         console.error();
//         console.log(response);
//     });
// }

