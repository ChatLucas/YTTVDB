function initialize() {
    document.getElementById("lang").innerHTML = "";
    Languages.forEach((item) => {
        var href = "html/catalogue.html?lang=" + item.id
        document.getElementById("lang").innerHTML += "<a href=" + href + ">" + item.name + " </a>";
    })
}