function HomeController() {
    this.name = 'Batman'
    this.title = 'Billy Ramos'

    this.toUppercase = function (str) {
        if (str) {
            return str.toUpperCase();
        } else {
            return '';
        }
    };

}

module.exports = [HomeController];