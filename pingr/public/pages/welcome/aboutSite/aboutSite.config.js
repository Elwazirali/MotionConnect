/**
 * Created by Ali on 2016-07-10.
 */
app.config(function ($provide,$stateProvider,$urlRouterProvider){

    $stateProvider.state('welcome.aboutSite',{
        url:'/aboutSite',
        templateUrl:'pages/welcome/aboutSite/aboutSite.tpl.html'
    });
});