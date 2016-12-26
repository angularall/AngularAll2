(function(){
	'use strict';
	angular.module('aaApp.ang1').controller('homeContentCtrl',homeContentCtrl);
	homeContentCtrl.$inject=['$scope','$interval'];
	function homeContentCtrl($scope,$interval){
		$scope.appName="AngularALL";
		$scope.$watch('showConModal',function(){
			if($scope.showConModal){
				$scope.openMsgSend=false;
			}
		});
		$scope.temp=[];
		for(var i=0;i<20;i++){
				$scope.temp[i]=i;
		}
		$scope.alDirectives=loadNgDirectivies();
		
	}
	angular.module('aaApp').controller('appHeaderCtrl',appHeaderCtrl);
	appHeaderCtrl.$inject=['$scope','$interval'];
	function appHeaderCtrl($scope,$interval){
		
		
	}
	angular.module('aaApp').controller('Angular1allctrl',Angular1allctrl);
	Angular1allctrl.$inject=['$scope','dataService'];
	function Angular1allctrl($scope,dataService){
		$scope.cmpDetail=dataService.getA1CmpDetail();
	}

	angular.module('aaApp').controller('Angular1LmenuCtrl',Angular1LmenuCtrl);
	Angular1LmenuCtrl.$inject=['$scope','dataService'];
	function Angular1LmenuCtrl($scope,dataService){
		$scope.comp=dataService.getA1Cmp();
	}
	function loadPageData(){
		var pageData={};
		pageData=[{'image':'one','id':'1','show':true},{'image':'two','id':'2','show':false},{'image':'three','id':'3','show':false},{'image':'four','id':'4','show':false}];
		return pageData;
	}
	function loadNgDirectivies(){
		var data=[];
		data=['if','rpt','controller','click','init','bind','model','show','hide','keyup','app','change','class'];
		return data;
	}
})();	
	