export function favoritesService($cookies) {

    this.toggle = function (item) {
        console.log("fav");
        var track = $cookies.getObject(item.id);
        if (track == undefined) this.add(item);
        else $cookies.remove(item.id);
        console.log($cookies);
    };
    this.add = function (item) {
        console.log(item);
        $cookies.putObject(item.id, item);
    };
    //     function Track(item) {
    //         this.name = item.name;
    //         this.artist = item.artists[0].name;
    //         this.id = item.id;
    //         this.href = item.href;
    //     }
}