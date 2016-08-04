(function () {
    'use strict';

    angular
        .module('jhipsterDemoApp', [
            'ngAnimate',
            'tmh.dynamicLocale',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ngStorage',
            'ngCacheBuster',
            'ui.router',
            'ui.bootstrap',
            'ui.utils',
            'ui.load',
            'ui.jq',
            'oc.lazyLoad',
            'pascalprecht.translate'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler'];

    function run(stateHandler, translationHandler) {
        stateHandler.initialize();
        translationHandler.initialize();
    }
})();
