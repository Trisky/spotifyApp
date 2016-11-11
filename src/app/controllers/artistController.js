export function artistController($scope, $http, $routeParams, ApiService) {
    var artistID = $routeParams.id;
    var searchTerm = 'https://api.spotify.com/v1/artists/' + artistID + '/albums';

    console.log("caca");
    ApiService.getInfo(searchTerm, this.showAlbums);

    this.showAlbums = function (response) {
        $scope.albumsList = response.data.items;
        $scope.ArtistName = response.data.items[0].artists[0].name;
    };
}