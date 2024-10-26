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

    const parameter = new URLSearchParams(document.location.search).get('lang')
    select_language(parameter)
}

function select_language(selected) {
    if (db_languages[selected] == undefined) {
        selected = 'en'
    }

    document.getElementById("language-display").innerHTML = db_languages[selected].name
    window.history.replaceState('', '', updateURLParameter(window.location.href, "lang", db_languages[selected].short))

    

    var innerHTML = ""

    for (show of Object.values(db_catalogue)) {
        if (show.available.includes(selected)) {
            innerHTML += "<li class=\"list-group-item\">"
            innerHTML += show.name
            innerHTML += "</li>"
        }
    }

    document.getElementById("main-list").innerHTML = innerHTML
}

/**
 * http://stackoverflow.com/a/10997390/11236
 */
function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}