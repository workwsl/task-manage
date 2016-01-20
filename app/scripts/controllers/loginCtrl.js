
(function () {
    "use strict";
    /**
     * 用户登录控制层
     * @param {type} $scope
     * @param {type} $timeout
     * @param {type} User
     * @return {type} 
     */
    taskApp.controller("loginCtrl",["$scope","$timeout","$location","User",function($scope,$timeout,$location,User){
        $scope.user = {}
        $scope.submit = function () {
        	$scope.alerts = [];
        	User.login($scope.user).success(function(data, status, headers, config){
        		if(data.success){
        			 addAlert({ type: 'success', msg: '登录成功' });
        			  $location.path("user");
        		}else{
        			 addAlert({ type: 'danger', msg: '登录失败' });
        		}
        	}).error(function(data, status, headers, config) {
        		 addAlert({ type: 'danger', msg: '服务器出差，清稍后再试' });
        	});
           
        };
        //添加提示
        function addAlert(alert) {
            $scope.alerts.push(alert);
            $timeout(function () {
                angular.forEach($scope.alerts, function (a, i) {
                    if (alert != a)
                        return;
                    $scope.alerts.splice(i, 1);
                });
            }, 5000);
        };
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }])
    
})();