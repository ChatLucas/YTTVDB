function get_name(object) {
    const language = new URLSearchParams(document.location.search).get('lang')

    if (object.localized[language] == undefined) {
        return object.name
    }
    else {
        return object.localized[language]
    }
}