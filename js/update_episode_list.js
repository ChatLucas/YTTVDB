function update_content(selected) {
    var innerHTML = ""

    if (get_number_of_season() > 1) {
        innerHTML += "<button id=\"season-name\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">"
        innerHTML += "    Dropdown button"
        innerHTML += "</button>"
        innerHTML += "<ul class=\"dropdown-menu\">"
        for (season of db_season_list) {
            if (season.available.includes(selected)) {
                innerHTML += "<li><a class=\"dropdown-item\" onclick=\"update_episode_list('"
                innerHTML += season.id
                innerHTML += "')\">"
                innerHTML += get_name(season)
                innerHTML += "</a></li>"
            }
        }
        innerHTML += "</ul>"

        document.getElementById("season-selector").innerHTML = innerHTML
    }

    var first_id_available = ""

    for (season of db_season_list) {
        if (season.available.includes(selected) && first_id_available == "") first_id_available = season.id
    }

    if (first_id_available != "") {
        update_episode_list(first_id_available)
    }
}

function get_number_of_season() {
    const language = new URLSearchParams(document.location.search).get('lang')

    var season_available = 0

    for (season of db_season_list) {
        if (season.available.includes(language)) season_available += 1
    }

    return season_available
}

function update_season_name(season_id) {
    var season_name = ""

    for (season of db_season_list) {
        if (season.id == season_id) season_name = get_name(season)
    }

    document.getElementById("season-name").innerHTML = season_name
}

function update_episode_list(season_id) {
    const language = new URLSearchParams(document.location.search).get('lang')
    var innerHTML = ""

    for (episode of db_episode_list[season_id]) {
        if (episode.available.includes(language)) {
            innerHTML += "<a class=\"list-group-item list-group-item-action\">"
            innerHTML += get_name(episode)
            innerHTML += "</a>"
        }
    }

    document.getElementById("main-list").innerHTML = innerHTML

    if(get_number_of_season() > 1) update_season_name(season_id)
}