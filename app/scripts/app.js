
var taskApp= window.taskApp ||{};
(function () {
    "use strict";
    
    /**
     * 应用配置，依赖ui.router和ui.bootstrap
     * @param {type} ui.router
     * @param {type} ngMessages
     * @param {type} ui.bootstrap
     * @return {type} 
     */
     taskApp = angular.module('taskApp', ['ui.router','ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',function($httpProvider) {
      // Use x-www-form-urlencoded Content-Type
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    
    }]);
   
    /**
     * [由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
     * 这里的run方法只会在angular启动的时候运行一次。]
     * @param  {[type]} $rootScope   [description]
     * @param  {[type]} $state       [description]
     * @param  {[type]} $stateParams [description]
     * @param  {[type]} $location    [description]
     * @param  {[type]} User)        { $rootScope.$state [description]
     * @return {[type]}              [description]
     */
    taskApp.run(["$rootScope","$state","$stateParams","$location","User",function($rootScope, $state, $stateParams,$location,User) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        //用户登录验证
        $rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){
          
          // var p =User.isLoign();
          // p.success(function(data){
          //   var isLogin = data.isLogin;
          //   if(!isLogin){
          //           $location.path('/login'); 
          //     }else{
          //       if(toState.url=='/'||toState.url=='/login'){
          //           $location.path('/user'); 
          //       }
          //     }
          // });
          
        });
        
    }]);
    
    /**
     * 路由配置，采用的router-ui
     * @param  {[type]} $stateProvider
     * @param  {[type]} $urlRouterProvider
     * @return {[type]} 
     */
    taskApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        
            $urlRouterProvider.otherwise('/');
            $stateProvider
            .state('index', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'views/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    '': {
                        templateUrl: 'views/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })
            .state('user', {
                url: '/user',
                views: {
                    '': {
                        templateUrl: 'views/usercenter.html'
//                      controller: 'loginCtrl'
                    },
                    'header@user': {
                        templateUrl: 'views/header.html'
//                      controller: 'loginCtrl'
                    },
                    'silder@user': {
                        templateUrl: 'views/silder.html'
//                      controller: 'loginCtrl'
                    },
                    'main@user': {
                        templateUrl: 'views/main.html'
//                      controller: 'loginCtrl'
                    },
                    'footer@user': {
                        templateUrl: 'views/footer.html'
//                      controller: 'loginCtrl'
                    }
                }
            })
          // $locationProvider.html5Mode(true);
     });
    
})();