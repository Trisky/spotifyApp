export function favoritesService($localStorage) {

    $localStorage.favs = $localStorage.favs || [];

    this.toggle = function (item, album) {
        var track = $localStorage.favs.find(this.getTrackById(item));
        // console.log(track);
        if (!track)
            this.addFav(item, album);

        else
            this.removeTrack(item);
        console.log($localStorage);
    };


    this.getFavorites = function () {
        return $localStorage.favs;
    };


    this.getTrackById = function (item) {
        return function (element) {
            return element.id === item.id;
        };
    };
    this.addFav = function (item, album) {
        var track = new Track(item, album);
        $localStorage.favs.push(track);
    };

    this.isFavorited = function (id) {
        var item = {};
        item.id = id;
        var track = $localStorage.favs.find(this.getTrackById(item));
        if (track != undefined) return true;
        else return false;

    };
    this.removeTrack = function (item) {
        var favs = $localStorage.favs;

        for (var i = 0; i < favs.length; i++) {
            if (favs[i].id == item.id) {
                favs.splice(i, 1);
                return;
            }
        }
    };

    function Track(item, album) {
        this.artist = item.artists[0].name;
        this.name = item.name;
        this.href = item.preview_url;
        this.id = item.id;
        this.albumName = album.name;
        this.image = album.images[2].url;
    }
}