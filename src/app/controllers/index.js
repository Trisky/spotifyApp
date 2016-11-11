export * from './artistController';
export * from './indexController';



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