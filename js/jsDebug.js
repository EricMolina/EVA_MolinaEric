function language() {
    var idioma = document.getElementById('language').value
    if (idioma == 'ES') {
        window.location.href = '../index.html'
    } else if (idioma == 'RUS') {
        window.location.href = '../ruso/index.html'
    } else if (idioma == 'ARA') {
        window.location.href = '../arabe/index.html'
    } else {
        window.location.href = '../cat/index.html'
    }

}