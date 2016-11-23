"use strict";
export function ArtistsService($localStorage) {
    $localStorage.artists = $localStorage.artists || [];
    $localStorage.albums = $localStorage.albums || [];

    ///check and add artists to the list
    this.add = function (artists) {
        console.log("artistsss");
        console.log(artists);
        for (var i = artists.length - 1; i >= 0; i--) {
            var artist = artists[i];

            var art = this.getArtist(artist);
            if (!art) {
                this.addOne(artist);
            }
        }
    };

    this.getArtist = function (artist) {
        var art = $localStorage.artists.find(this.getById(artist));
        return art;
    };

    //used by artistController to get image
    this.getArtistById = function (id) {
        var artist = {};
        artist.id = id;
        return this.getArtist(artist);
    };

    this.addOne = function (spotiArtist) {
        var artist = new Artist(spotiArtist);
        $localStorage.artists.push(artist);
    };

    function Artist(a) {
        this.name = a.name;
        this.id = a.id;
        this.image = a.images && a.images[1] && a.images[1].url;
    }

    this.getById = function (item) {
        return function (element) {
            return element.id === item.id;
        };
    };

    //when we click on an album
    this.saveAlbum = function (album) {

        var albumOnList = $localStorage.albums.find(this.getById(album));
        if (!albumOnList) {
            var newAlbum = new Album(album);
            $localStorage.albums.push(newAlbum);
        }
    };

    //when we open the tracks list
    this.getAlbum = function (id) {
        var a = {};
        a.id = id;
        var album = $localStorage.albums.find(this.getById(a));
        return album;
    };

    function Album(a) {
        this.name = a.name;
        this.image = a.images && a.images[2] && a.images[2].url;
        this.id = a.id;
    }
}