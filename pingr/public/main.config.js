/**
 * Created by Ali on 2016-07-07.
 */

/**
 * @ngInject
 */

app.config(function ($provide,$stateProvider,$urlRouterProvider){
    $provide.decorator('$uiViewScroll', function ($delegate) {
        return function (uiViewElement) {
            $('html,body').animate({
                scrollTop: uiViewElement.offset().top
            }, 700);
        };
    });
    $urlRouterProvider.otherwise('/home');
     $stateProvider.state('home',{
         url:'/home',
         templateURl:'index.html',
         controller:'aboutSiteCtrl as vm'
     });
 });
