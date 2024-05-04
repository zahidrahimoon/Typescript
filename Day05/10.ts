enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
}

function printSeason(season: Season): void {
    console.log("Season:", Season[season]);
}

printSeason(Season.Summer);
