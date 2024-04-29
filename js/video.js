function loadVideo() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let lang = urlParams.get('lang');
    let franchise = urlParams.get('franchise');
    let season = urlParams.get('season');
    let episode = urlParams.get('episode');
    var curFranchise = Catalogue.find((element) => element.id === franchise);
    var curSeason = curFranchise.seasons.find((element) => element.id === season);
    var curEpisode = curSeason.episodes.find((element) => element.id === episode);

    document.getElementById("lang").innerHTML = "";
    Languages.forEach((item) => {
        if (curEpisode.ytids[item.id] != undefined) {
            var href = "video.html?lang=" + item.id + "&franchise=" + franchise + "&season=" + season + "&episode=" + episode;
            document.getElementById("lang").innerHTML += "<a href=" + href + ">" + item.name + " </a>";
        }
    })

    let name = "";
    if (curFranchise.localName && curFranchise.localName[lang]) {
        name = curFranchise.localName[lang];
    } else {
        name = curFranchise.name;
    }
    document.getElementById("top menu").innerHTML = "<a href=catalogue.html?lang=" + lang + ">Catalogue </a>";
    document.getElementById("top menu").innerHTML += "<a href=franchise.html?lang=" + lang + "&franchise=" + franchise + ">" + name + "</a>";

    document.getElementById("episode").innerHTML = "<iframe allow=\"fullscreen;\" width=\"720\" height=\"540\" src=\"https://www.youtube.com/embed/" + curEpisode.ytids[lang] + "\"> </iframe>";
}