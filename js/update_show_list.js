function update_content(selected) {
    var innerHTML = ""

    for (show of db_catalogue) {
        if (show.available.includes(selected)) {
            innerHTML += "<a href=\"catalogue/"
            innerHTML += show.id
            innerHTML += ".html?lang="
            innerHTML += selected
            innerHTML += "\"class=\"list-group-item list-group-item-action\">"
            innerHTML += show.name
            innerHTML += "</a>"
        }
    }

    document.getElementById("main-list").innerHTML = innerHTML
}