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