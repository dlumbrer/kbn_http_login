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
    console.log("Login: ", $scope.username, $scope.password)

    var clientId = "bitergia";
    var clientSecret = "bitergia";

    var authorizationBasic = window.btoa(clientId + ':' + clientSecret);

    /*var request = new XMLHttpRequest();
    request.open('PUT', "https://localhost:9200/.kibana/login", true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
    request.setRequestHeader('Accept', 'application/json');
    request.send("username=bitergia&password=bitergia&grant_type=password");



    request.onreadystatechange = function () {
        if (request.readyState === 4) {
           alert(request.responseText);
        }
    };*/

    var xhr = new XMLHttpRequest();
    /*xhr.open('POST', 'http://localhost:9200/_search', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa('test:test'));
    xhr.send('{"query":{"match_all":{}}}');*/

    $.ajax
    ({
      type: "GET",
      url: "https://localhost:5601/hrx/elasticsearch/_msearch",
      dataType: 'json',
      async: false,
      data: '',
      beforeSend: function (xhr){
          xhr.setRequestHeader('Authorization', 'Basic ' + btoa('bitergia:bitergia'));
      },
      success: function (){
          alert('Thanks for your comment!');
      }
    });


  }

})
