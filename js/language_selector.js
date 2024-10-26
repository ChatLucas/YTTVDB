function on_load() {
    var innerHTML = ""
    for (lang of Object.values(db_languages)) {
        innerHTML += "<li><a class=\"dropdown-item\" onclick=\"select_language('"
        innerHTML += lang.short
        innerHTML += "')\">"
        innerHTML += lang.name
        innerHTML += "</a></li>"
    }
    document.getElementById("language-list").innerHTML = innerHTML
}

function select_language(selected) {
    document.getElementById("language-display").innerHTML = db_languages[selected].name
}