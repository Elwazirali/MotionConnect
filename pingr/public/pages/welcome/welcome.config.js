/**
 * Created by Ali on 2016-07-07.
 */
app.config(function ($stateProvider,$urlRouterProvider){
    $stateProvider.state('welcome',{
            url:'/welcome',
            templateUrl:'pages/welcome/welcome.tpl.html',
            controller:'welcomeCtrl as vm'
    })
});

