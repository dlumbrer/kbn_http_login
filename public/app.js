import uiModules from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import overviewTemplate from './templates/index.html';

uiRoutes.enable();
uiRoutes
.when('/', {
  template: overviewTemplate,
  controller: 'httpLoginController',
  controllerAs: 'ctrl'
})


uiModules
.get('app/http_login')
.controller('httpLoginController', function ($scope, $http) {
  /*$http.post('../elasticsearch/_msearch', '{"query":{"match_all":{}},"size":10000}').then((response) => {
    this.indices = response.data;
  });*/
  $scope.login = function(){
    console.log($scope.username, $scope.password)
  }

})
