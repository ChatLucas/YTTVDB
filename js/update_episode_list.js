function update_content(selected) {
    var innerHTML = ""

    var season_available = 0

    for (season of db_season_list) {
        if (season.available.includes(selected)) season_available += 1
    }

    if (season_available > 1) {
        innerHTML += "<button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">"
        innerHTML += "    Dropdown button"
        innerHTML += "</button>"
        innerHTML += "<ul class=\"dropdown-menu\">"
        for (season of db_season_list) {
            if (season.available.includes(selected)) {
                innerHTML += "<li><a class=\"dropdown-item\" onclick=\"update_episode_list('"
                innerHTML += season.id
                innerHTML += "')\">"
                innerHTML += season.name
                innerHTML += "</a></li>"
            }
        }
        innerHTML += "</ul>"
    }
    
    document.getElementById("season-selector").innerHTML = innerHTML
}

function update_episode_list(season_id) {
    const language = new URLSearchParams(document.location.search).get('lang')
    var innerHTML = ""

    for (episode of db_episode_list[season_id]) {
        if (episode.available.includes(language)) {
            innerHTML += "<a class=\"list-group-item list-group-item-action\">"
            innerHTML += episode.name
            innerHTML += "</a>"
        }
    }

    document.getElementById("main-list").innerHTML = innerHTML
}