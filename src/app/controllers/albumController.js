export function albumController($scope, $http, $routeParams, ApiService, favoritesService) {
    var albumID = $routeParams.id;
    var searchTerm = 'https://api.spotify.com/v1/albums/' + albumID + '/tracks';
    $scope.albumImage = ApiService.selectedAlbum.images[2].url;
    $scope.albumName = ApiService.selectedAlbum.name;
    console.log(ApiService.selectedAlbum);

    ApiService.getInfo(searchTerm, this.showAlbums)
        .then(data => { this.showTracks(data); });

    this.showTracks = function (data) {
        $scope.trackList = data.items;
        console.log(data);
    };

    $scope.toggleFavorite = function (item) { //recieves a track item
        favoritesService.toggle(item, ApiService.selectedAlbum);
    };
    $scope.playSong = function (trackId) {
        $scope.previewUrl = $scope.trackList[trackId].preview_url;
        //mostrar modal con el player. TODO
    };
    $scope.favorited = function (id) {
        return favoritesService.isFavorited(id);
    };


}

