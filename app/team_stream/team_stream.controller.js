/**
 * Created by vicman on 4/12/16.
 */

(function () {
    angular.module('TeamStream', [])
        .controller('TeamStreamCtrl', TeamStreamCtrl);

        function TeamStreamCtrl($http){
            var self = this;
            self.messageList = [];

            $http({
                method: 'GET',
                url: 'http://udem.herokuapp.com/parcial'
            }).then(function successCallback(response) {
                console.log(response);
                angular.forEach(response.data.messages, function(item){
                    self.messageList.push(item);
                });
            }, function errorCallback(response) {
                console.log("se tiro la aplicacion");
            });
        }
})();
