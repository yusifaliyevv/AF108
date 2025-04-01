function showMonthsBySeason(season) {
    const seasons = {
        "yaz": ["Mart", "Aprel", "May"],
        "yay": ["Iyun", "Iyul", "Avqust"],
        "payiz": ["Sentyabr", "Oktyabr", "Noyabr"],
        "qis": ["Dekabr", "Yanvar", "Fevral"]
    };

    season = season.toLowerCase();
    
    if (seasons[season]) {
        console.log(`${season.toUpperCase()} movsumunun aylari: ${seasons[season].join(", ")}`);
    } else{
        console.log("Duzgun movsum daxil edin: yaz, yay, payiz, qis");
    }
}

const userSeason = prompt("Movsumu daxil edin (yaz, yay, payiz, qis):");
showMonthsBySeason(userSeason);
