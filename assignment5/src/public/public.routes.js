(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['NarrowItDownController', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })

    .state('public.signup', {
      url: '/sing-up',
      templateUrl: 'src/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl',

      resolve: {
        validMenuItemsShortNames: ['MenuService', function (MenuService) {
          return MenuService.getMenuItems().then(function (data) {
            return data.menu_items.map(function (element) {
              return element.short_name;
            });
          });
        }],
      }
    });
}
})();