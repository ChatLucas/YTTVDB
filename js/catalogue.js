function loadCatalogue() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let lang = urlParams.get('lang');
    var html = "";
    var htmlFranchise = "";

    document.getElementById("lang").innerHTML = "";
    Languages.forEach((item) => {
        var href = "catalogue.html?lang=" + item.id
        document.getElementById("lang").innerHTML += "<a href=" + href + ">" + item.name + " </a>";
    })

    document.getElementById("list").innerHTML = "";
    Catalogue.forEach((item) => {
        if (item.available.includes(lang)) {
            let name = "";
            if (item.localName && item.localName[lang]) {
                name = item.localName[lang];
            } else {
                name = item.name;
            }
            var hyperlink = "franchise.html?lang=" + lang + "&franchise=" + item.id;
            htmlFranchise += "<li><a href=" + hyperlink + ">" + name + "</a></li>";
        }
    })
    html += "<ul>" + htmlFranchise + "</ul>";
    document.getElementById("list").innerHTML = html;
}