(function() {

	'use strict';
	angular.module('aaApp').config(config);
	config.$inject = [ '$stateProvider', '$urlRouterProvider','$httpProvider'];
	
	function config($stateProvider, $urlRouterProvider, $httpProvider) {
	    var header={
	    		templateUrl:function(){
					return getTemplateUrl("header");
				},
	    		controller : 'appHeaderCtrl as header',
	    };
	    var footer={
	    		templateUrl:function(){
					return getTemplateUrl("footer");
				},
	    		controller : 'artMFooterController as footer',
	    };
		//Route Configuration...
		$stateProvider
				.state(
						'home',
						{
							url : '/home',
							views:{
									"root":{
										templateUrl : function(){
											return getTemplateUrl("homeContent");
										},
										controller:'A1ExampleCtrl',
									},
								},
						})
				.state(
						'home.a1example',
						{
							url : '/angularstarting/:name',
							views:{
								"a1example":{
									templateUrl :function($stateParams){
										return getTemplateUrl($stateParams.name);
									},
									//controller : 'artMDateController',
								},
								"a1theme@home":{
									template:" ",
								}
							}
						});
				
				
		$urlRouterProvider.otherwise('home');
		
	}
	function getTemplateUrl(file){
			return appContx+file+'.html';
	}
	
	
	angular.module('aaApp.ang1').config(ang1Config);
	
	ang1Config.$inject = [ '$stateProvider', '$urlRouterProvider','$httpProvider'];
	
	function ang1Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider
		
		.state('angular1',{
				abstract:true,
			    url:"/angular1",
				views:{
					"root":{
						templateUrl:function(){return getTemplateUrl("a1");},
						controller : 'homeContentCtrl as hctrl',
					}
				}
		})
		.state('angular1.main',{
			url:"",
			views:{
				"alcontent":{
					templateUrl:function(){return getTemplateUrl("a1core");},
					controller : 'Angular1allctrl as a1alltrl',
				},
				"lmenu":{
					templateUrl:function(){return getTemplateUrl("a1-lm");},
					controller:'Angular1LmenuCtrl as a1lmctrl',
				}
			}
		})
		.state('angular1.main.cmp',{
			//angular1 component display like directive,filter,..
			url:"/cmp/:cname",
			views:{
				"alcontent@angular1":{
					templateUrl:function($stateParams){ 
						return getTemplateUrl($stateParams.cname);},
					controller : 'angular1cmpctrl as a1cmptrl',
				},
			}
		})
		.state('angular1.main.cmp.itemDetail',{
			//angular1 component display like directive,filter,..
			url:"/detail/:iname",
			views:{
				"angitemdata":{
					templateUrl:function($stateParams){
						return getTemplateUrl('a1c-itemmenu');},
						controller :function($state,$stateParams,$scope,dataService){
						$scope.tabData=dataService.getTabDataList($stateParams.cname,$stateParams.iname);
						var prefix=$stateParams.cname+$stateParams.iname;
						$state.go('angular1.main.cmp.itemDetail.tab',{'tfName':prefix+'bsc'});
					},
				}
			}
		})
		.state('angular1.main.cmp.itemDetail.tab',{
			url:"/tab/:tfName",
			views:{
				"tabcontent":{
					templateUrl:function($stateParams){
					console.log($stateParams.tfName);
						return getTemplateUrl($stateParams.tfName);},
					//controller : 'A1CmpItemDetailTab as a1citctrl',
				}
			}
		});
		
	}
	
	
	
	//
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})();
