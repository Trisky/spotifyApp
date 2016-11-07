export function indexController(){

    var searchUrl = "https://api.spotify.com/v1/search?q="

    $scope.searchArtist = function () {
        Console.log("asd");
        var searchTerm = $scope.searchInput;
        searchTerm.replace(' ', '+');
        $http({
            method: 'GET',
            url: searchUrl + searchTerm + "*",
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            alert("error");
        });
    };
}