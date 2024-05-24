
// Función para establecer una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Función para eliminar una cookie
function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

// Función para establecer la preferencia de idioma
function setLanguagePreference() {
    const language = 'es'; // Suponemos que el idioma es español
    setCookie('language', language, 30); // Guardar la preferencia por 30 días
}

// Función para mostrar un mensaje en el idioma preferido
function displayWelcomeMessage() {
    const language = getCookie('language');
    let message = 'Welcome!'; // Mensaje por defecto en inglés

    if (language === 'es') {
        message = '¡Bienvenido!';
    }
    // Agregar más idiomas según sea necesario

    document.getElementById('welcomeMessage').textContent = message;
}

// Llamar a las funciones cuando la página se carga
window.onload = function () {
    setLanguagePreference();
    displayWelcomeMessage();
};
