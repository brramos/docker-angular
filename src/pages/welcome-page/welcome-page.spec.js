describe('welcomePage', function() {
    var ctrl;

    beforeEach(function(){
        angular.mock.module(require('.'));

        inject(function($componentController) {
            ctrl = $componentController('welcomePage', {});
        });

    });

    it('has working uppercase function',function(){
        expect(ctrl.toUppercase('Ryan')).toEqual('RYAN');
    });

});
