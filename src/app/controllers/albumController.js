export function albumController($scope, $http, $routeParams, ApiService, favoritesService, ArtistsService) {
    var albumID = $routeParams.id;
    var searchTerm = 'https://api.spotify.com/v1/albums/' + albumID + '/tracks';
    $scope.album = ArtistsService.getAlbum(albumID);
    $scope.orderList = 'duration_ms';

    $scope.albumImage = $scope.album.image;
    $scope.albumName = $scope.album.name;

    ApiService.getInfo(searchTerm, this.showAlbums)
        .then(data => { this.showTracks(data); });

    this.showTracks = function (data) {
        $scope.trackList = data.items;
        console.log(data);
    };

    $scope.toggleFavorite = function (item) { //recieves a track item
        favoritesService.toggle(item, $scope.album);
    };
    $scope.playSong = function (trackId) {
        $scope.previewUrl = $scope.trackList[trackId].preview_url;
        //mostrar modal con el player. TODO
    };
    $scope.favorited = function (id) {
        return favoritesService.isFavorited(id);
    };

    $scope.orderByDuration = function () {
        $scope.orderList = 'duration_ms';
    };
    $scope.orderByNumber = function () {
        $scope.orderList = 'track_number';
    };



}

