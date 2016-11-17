/**** script javascript ***/
var app = angular
          .module('appRoot')//, ['ngMessages','angularUtils.directives.dirPagination','ngRoute', 'currencyMask', 'ui.bootstrap'])
          .config(function($interpolateProvider){
              $interpolateProvider.startSymbol('[[');
              $interpolateProvider.endSymbol(']]');
          });
          
        // .directive('loading', ['$http',function($http){
        //   return {
        //     restrict: 'A',
        //     link : function(scope, element, attrs){
        //       scope.isLoading = function(){
        //         return $http.pendingRequests.length > 0;
        //       };

        //       scope.$watch(scope.isLoading, function(value){
        //         if(value){
        //           element.show(); 
        //         } else{
        //           element.hide();
        //         }
        //       })
        //     }
        //   }
        // }]);