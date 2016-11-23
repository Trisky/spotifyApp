export function searchDirective() {
    return {
        restrict: 'E',
        link: dLink,
        scope: {
            searchTerm: '='
        },
        templateUrl: '/app/directives/searchBar.html',
        controller: searchController
    };
}

function dLink() { } //para modificar el html

function searchController($scope, $location) {
    $scope.searchArtist = function() {
        $location.path("search/" + $scope.searchInput);
    };



}