"use strict";
export function indexController($scope, $location, favoritesService) {    

    $scope.favoritesLst = favoritesService.getFavorites(); //set the favorites to the local scope list

    // $scope.searchArtist = function() {
    //     var searchInput = $scope.searchInput;
    //     $location.path("search/" + searchInput);        
    // };    
    
    $scope.removeFavorite = function(track) {
        favoritesService.removeTrack(track);
        $scope.favoritesLst = favoritesService.getFavorites();
        // var index = $scope.favoritesLst.indexOf(track);
        // $scope.favoritesLst.splice(index, 1);
    };
}