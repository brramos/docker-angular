function WelcomeController() {
    this.title = 'Hola'

    this.toUppercase = function (str) {
        if (str) {
            return str.toUpperCase();
        } else {
            return '';
        }
    };

}

module.exports = [WelcomeController];