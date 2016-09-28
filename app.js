let app = angular.module('SongApp', ['ui.router']);

app.factory("AudioService", function () {
    let songArray = [
        { songTitle: 'Murder in the City', artistName: 'The Avett Brothers', albumName: 'The Second Gleam' },
        { songTitle: 'Benediction', artistName: 'Josh Garrels', albumName: 'Home' },
        { songTitle: 'Cold is the Night', artistName: 'The Oh Hellos', albumName: 'The Oh Hellos' },
        { songTitle: 'Michigan', artistName: 'The Milk Carton Kids', albumName: 'Prologue' },
        { songTitle: 'The Death of Queen Jane', artistName: 'Oscar Isaac', albumName: 'Inside Llewyn Davis Soundtrack' },
    ];

    let friendArray = [
        { friendName: "Blitz McCracken", songsLiked: 17000, superPower: "bedazzling grumpy family members", },
        { friendName: "Stella Liles", songsLiked: 4, superPower: "tunneling behind enemy lines", },
        { friendName: "Winston Hedgerow", songsLiked: 32, superPower: "trimming shrubs with his bare hands", },
        { friendName: "Harper Barfield", songsLiked: 70, superPower: "drinking at least a dozen fellows under the table", },
        { friendName: "Jiffy Scarborough", songsLiked: 200000, superPower: "consuming grotesque amounts of peanut butter", },
    ];

    let userArray = ["Wishbone", "Count Dumas", "Biggles", "Lancelot", "Diggle", "Pikachu", "Guy"];

    let grandArray = ["Blue", "Gary", "Idgit", "Rival", "Liger"];

    return {
        getSongs: function() {
            return songArray;
        },

        getFriends: function() {
            return friendArray;
        },

        getUser: function() {
            return userArray[Math.floor(Math.random() * userArray.length)];
        },

        getGrandson: function() {
            return grandArray[Math.floor(Math.random() * grandArray.length)]; 
        }
    }
});

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: "home",
        url: "/home",
        component: "home",
    });

    $stateProvider.state({
        name: "listOfSongs",
        url: '/songs',
        component: "songs",
    });

    $stateProvider.state({
        name: "listOfFriends",
        url: "/friends",
        component: "friends",
    })
});

app.component('home', {
    templateUrl: 'components/home.html',
    controller: 'HomeController',
});

app.controller('HomeController', function($scope, AudioService) {
    $scope.username = AudioService.getUser();
    $scope.grandson = AudioService.getGrandson();
    $scope.songs = AudioService.getSongs();
    $scope.friends = AudioService.getFriends();
});

app.component('songs', {
    templateUrl: 'components/songs.html',
    controller: 'SongListController',
});

// these actually are all good songs (and albums), by the way, 
// in case you need something to listen to
app.controller('SongListController', function($scope, AudioService) {
    $scope.songs = AudioService.getSongs();
});

app.component('tune', {
    templateUrl: 'components/tune.html',
    bindings: {
        tune: '<',
    },
    controller: 'TuneController',
});

app.controller('TuneController', function ($scope) {
    $scope.play = function (tune) {
        console.log('Playing ' + tune.songTitle);
    }
});

app.component('friends', {
    templateUrl: 'components/friends.html',
    controller: 'FriendController',
});

app.controller('FriendController', function($scope, AudioService) {
    $scope.friends = AudioService.getFriends();
});

app.component('chum', {
    templateUrl: 'components/chum.html',
    bindings: {
        chum: '<',
    },
});