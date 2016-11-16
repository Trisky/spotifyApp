export function favoritesService($localStorage) {

    $localStorage.favs = $localStorage.favs || [];

    this.toggle = function(item) {
        var track = $localStorage.favs.find(this.getTrackById(item));
        // console.log(track);
        if (!track)
            $localStorage.favs.push(item);
        else
            this.removeTrack(item);
        console.log($localStorage);
    };

    this.getFavorites = function() {
        return $localStorage.favs;
    };


    this.getTrackById = function(item) {
        return function(element) {
            return element.id === item.id;
        };
    };
    this.removeTrack = function(item) {
        var favs = $localStorage.favs;
        var index = favs.indexOf(item);
        if (index > -1) {
            favs.splice(index, 1);
        }
    };

    function Track(item) {
        this.artist = item.artists[0].name;
        this.name = item.name;
        this.href = item.href;
        this.id = item.id;

    }
}