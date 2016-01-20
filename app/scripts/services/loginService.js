(function () {
    "use strict";
    /**
     * 用户登陆注册退出service
     * @param  {[type]} $http
     * @return {[type]} $http
     */
    taskApp.factory('User', function($http){
       return {
           login : function(formData){
               return $http({
                        method: 'Post',
                        url: 'data/user.json',
                        data : formData
                });
                
           },
           register : function(formData) {
               return $http({
                        method: 'POST',
                        url: '/users/register',
                        data: $.param(formData)
                });                        
           },
           logout : function(){
               return $http({
                        method: 'POST',
                        url: '/users/logout'
                });                    
           },
           isLoign:function(){
           	return $http({
                        method: 'get',
                        url: 'data/isLogin.json'
                });
           }
       } 
    });
    
})();