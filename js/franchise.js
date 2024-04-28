function loadFranchise() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let lang = urlParams.get('lang');
    let franchise = urlParams.get('franchise');
    var curFranchise = Catalogue.find((element) => element.id === franchise)

    document.getElementById("lang").innerHTML = "";
    Languages.forEach((item) => {
        if (curFranchise.available.includes(item.id)) {
            var href = "franchise.html?lang=" + item.id + "&franchise=" + franchise;
            document.getElementById("lang").innerHTML += "<a href=" + href + ">" + item.name + " </a>";
        }
    })

    document.getElementById("list").innerHTML = "";
    curFranchise.seasons.forEach((season) => {
        if (season.available.includes(lang)) {
            let name = "";
            if (season.localName && season.localName[lang]) {
                name = season.localName[lang];
            } else {
                name = season.name;
            }
            document.getElementById("list").innerHTML += "<h1>" + name + "</h1>";
            season.episodes.forEach((episode) => {
                if (episode.ytids[lang] != undefined) {
                    console.log("Test");
                    let name = "";
                    if (episode.localName && episode.localName[lang]) {
                        name = episode.localName[lang];
                    } else {
                        name = episode.name;
                    }
                    var hyperlink = "video.html?lang=" + lang + "&franchise=" + curFranchise.id + "&season=" + season.id + "&episode=" + episode.id;
                    document.getElementById("list").innerHTML += "<li><a href=" + hyperlink + ">" + name + "</a></li>";
                }
            })
        }
    })
}