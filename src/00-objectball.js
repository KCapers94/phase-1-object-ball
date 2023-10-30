const gameObject = {
    home: {
        teamName:"Brooklyn Nets",
        colors:["Black","White"],
        players: {
            "Alan Anderson": {
                number:0,
                shoe:16,
                points:22,
                rebounds:12,
                assists:12,
                steals:3,
                blocks:1,
                slamDunks:1,
            },
            "Reggie Evans": {
                number:30,
                shoe:14,
                points:12,
                rebounds:12,
                assists:12,
                steals:12,
                blocks:12,
                slamDunks:7,
            },
            "Brook Lopez": {
                number:11,
                shoe:17,
                points:17,
                rebounds:19,
                assists:10,
                steals:3,
                blocks:1,
                slamDunks:15,
            },
            "Mason Plumlee": {
                number:1,
                shoe:19,
                points:26,
                rebounds:12,
                assists:6,
                steals:3,
                blocks:8,
                slamDunks:5,
            },
            "Jason Terry": {
                number:31,
                shoe:15,
                points:19,
                rebounds:2,
                assists:2,
                steals:4,
                blocks:11,
                slamDunks:1,
            },
        }
    },
    away: {
        teamName:"Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien":{
                number:4,
                shoe:18,
                points:10,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamDunks:2,
            },
            "Bismak Biyombo": {
                number:0,
                shoe:16,
                points:12,
                rebounds:4,
                assists:7,
                steals:7,
                blocks:15,
                slamDunks:10,
            },
            "DeSagna Diop":{
                number:2,
                shoe:14,
                points:24,
                rebounds:12,
                assists:12,
                steals:4,
                blocks:5,
                slamDunks:5,
            },
            "Ben Gordon": {
                number:8,
                shoe:15,
                points:33,
                rebounds:3,
                assists:2,
                steals:1,
                blocks:1,
                slamDunks:0,
            },
            "Brendan Haywood": {
                number:33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamDunks:12,
            },

        }
    }
}

function newGameObject() {
    return gameObject()
}

function numPointsScored(player) {
    if (gameObject.home.players[player]){
        return gameObject.home.players[player].points
    } else {
        return gameObject.away.players[player].points
    }
}

console.log(numPointsScored("Alan Anderson"));

function shoeSize(players) {
    if (gameObject.home.players[players]){
        return gameObject.home.players[players].shoe
    } else {
        return gameObject.away.players[players].shoe
    }
}
console.log(shoeSize("Reggie Evans"))

function teamColors(name) {
    if(name === "Brooklyn Nets"){
        return gameObject.home.colors
    } else {
        return gameObject.away.colors
    }

}
console.log(teamColors("Brooklyn Nets"))


function teamNames() {
    let myArray = [gameObject.home.teamName, gameObject.away.teamName]
    return myArray

}

console.log(teamNames())

function playerNumbers(teamName) {
    let teamArray = Object.values(gameObject)
    let team = teamArray.find(team=>team.teamName===teamName)
    return Object.values(team.players).map(player=>player.number)
     
}
playerNumbers("Brooklyn Nets")

function playerStats(playerName) {
   let allPlayers = {...gameObject.home.players,...gameObject.away.players}
   return(allPlayers[playerName])
}
playerStats("Alan Anderson")




