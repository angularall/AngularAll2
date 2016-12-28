(function(){
	'use strict';
	angular.module('aaApp.ang1').controller('homeContentCtrl',homeContentCtrl);
	homeContentCtrl.$inject=['$scope','$interval','dataService'];
	function homeContentCtrl($scope,$interval,dataService){
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
		$scope.a1Data=dataService.getA1CmpDetail();
		$scope.alDirectives=loadNgDirectivies();
		
	}
	angular.module('aaApp').controller('A1ExampleCtrl',A1ExampleCtrl);
	A1ExampleCtrl.$inject=['$scope','dataService'];
	function A1ExampleCtrl($scope,dataService){
		$scope.a1Topics=loadA1Topics();
	}

	angular.module('aaApp').controller('angular1cmpctrl',angular1cmpctrl);
	angular1cmpctrl.$inject=['$scope','$stateParams','dataService'];
	function angular1cmpctrl($scope,$stateParams,dataService){
		$scope.cmpData;
		loadData();
		function loadData(){
			dataService.getA1CmpDetail().then(function(data){
				var a1Data=data["components"];
				angular.forEach(a1Data,function(cmp,ck){
					if(cmp.componentFileName==$stateParams.cname){
						$scope.cmpData=cmp;
					}
				});
			});
		}
		
	}
	angular.module('aaApp').controller('appHeaderCtrl',appHeaderCtrl);
	appHeaderCtrl.$inject=['$scope','$interval'];
	function appHeaderCtrl($scope,$interval){
		
		
	}

	angular.module('aaApp').controller('Angular1allctrl',Angular1allctrl);
	Angular1allctrl.$inject=['$scope','dataService'];
	function Angular1allctrl($scope,dataService){
		$scope.cmpDetail=dataService.getA1CmpDetail();
		loadData();
		function loadData(){
			dataService.getA1CmpDetail().then(function(data){
				$scope.cmpDetail=data["components"];
			});
		}
	}

	angular.module('aaApp').controller('Angular1LmenuCtrl',Angular1LmenuCtrl);
	Angular1LmenuCtrl.$inject=['$scope','dataService'];
	function Angular1LmenuCtrl($scope,dataService){
		$scope.comp=dataService.getA1Cmp();
	}
	/*angular.module('aaApp').controller('Angular1LmenuCtrl',A1CmpItemDetailTab);
	A1CmpItemDetailTab.$inject=['$scope','dataService','$stateParams'];
	function A1CmpItemDetailTab($scope,dataService,$stateParams){
		$scope.menuList=dataService.getMenuTabs($stateParams.cname,$stateParams.iname,$stateParams.name);
	}*/
	function loadPageData(){
		var pageData={};
		pageData=[{'image':'one','id':'1','show':true},{'image':'two','id':'2','show':false},{'image':'three','id':'3','show':false},{'image':'four','id':'4','show':false}];
		return pageData;
	}
	function loadNgDirectivies(){
		var data=[];
		data=['if','rpt','controller','click','init','bind','model','show','hide','keyup','app','change','class','bind1','model1','show1','hide1','keyup1','app1','change1','class1'];
		return data;
	}
	function loadA1Topics(){
		var data=[];
		data=['module','model','bind','expression','controller','filter','directive','function']
		return data;
	}
})();	
	