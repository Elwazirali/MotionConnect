app.controller('welcomeCtrl',function($http){
    var vm = this;
    vm.testing = 'testing child controller';


    vm.lightOn = false;
    vm.turnOnLight = function(){
        vm.lightOn = true;
        $http.get('http://192.168.43.30/1',function(res){
            console.log(res);

        });
    };

    vm.turnOffLight = function(){
        vm.lightOn = false;
        $http.get('http://192.168.43.30/0',function(res){
            console.log(res);

        });
    };

    vm.timedTask = function(){
        $http.get('/api/timedTask',function(res){

        })
    }

});