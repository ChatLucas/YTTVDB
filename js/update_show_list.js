function update_content(selected) {
    var innerHTML = ""

    for (show of db_catalogue) {
        if (show.available.includes(selected)) {
            innerHTML += "<li class=\"list-group-item\">"
            innerHTML += show.name
            innerHTML += "</li>"
        }
    }

    document.getElementById("main-list").innerHTML = innerHTML
}