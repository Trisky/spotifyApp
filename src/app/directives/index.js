export function PlayerDirective() {
    return {
        restrict: 'E',
        link: dLink,
        scope: {
            play: '=',
            trackId: '<',
            playToggle: '&'
        },
        templateUrl: 'app/directives/player.html',
        controller: playerController
    };
}

function dLink() { }

function playerController() {
    

}