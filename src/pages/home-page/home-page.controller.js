function HomeController($location) {
    this.name = 'Batman';
    this.title = 'Billy Ramos';

    this.toUppercase = function (str) {
        if (str) {
            return str.toUpperCase();
        } else {
            return '';
        }
    };

    this.onDiscover = function () {
        // todo: need card portfolio page
        $location.path('/article-tiles')
    }

}

HomeController.$inject = ['$location'];

module.exports = HomeController;