/**
 * Created by Ali on 2016-07-11.
 */
app.config(function ($provide,$stateProvider,$urlRouterProvider){
    $stateProvider.state('welcome.aboutMe',{
        url:'/aboutMe',
        templateUrl:'pages/welcome/aboutMe/aboutMe.tpl.html',
        controller:  'aboutMeCtrl as vm'
    });
});
