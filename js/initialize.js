function on_load() {
    var innerHTML = ""

    innerHTML += "<nav class=\"navbar navbar-expand-lg bg-body-tertiary\">"
    innerHTML += "    <div class=\"container-fluid\">"
    innerHTML += "        <a href=\"https://ChatLucas.github.io/TYYVDB\" class=\"navbar-brand\">Home</a>"
    innerHTML += "        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavDropdown\""
    innerHTML += "            aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"
    innerHTML += "            <span class=\"navbar-toggler-icon\"></span>"
    innerHTML += "        </button>"
    innerHTML += "        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">"
    innerHTML += "            <ul class=\"navbar-nav\">"
    innerHTML += "                <li class=\"nav-item dropdown\">"
    innerHTML += "                    <a class=\"nav-link dropdown-toggle\" role=\"button\" data-bs-toggle=\"dropdown\""
    innerHTML += "                        aria-expanded=\"false\" id=\"language-display\">"
    innerHTML += "                        Languages"
    innerHTML += "                    </a>"
    innerHTML += "                    <ul class=\"dropdown-menu\" id=\"language-list\">"
    innerHTML += "                    </ul>"
    innerHTML += "                </li>"
    innerHTML += "            </ul>"
    innerHTML += "        </div>"
    innerHTML += "    </div>"
    innerHTML += "</nav>"

    document.getElementById("navbar").innerHTML = innerHTML

    innerHTML = ""
    
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