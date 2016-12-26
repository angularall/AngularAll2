(
function(){
	
    'use strict';

    angular.module('aaApp.ang1')
            .factory('dataService',dataService);

    dataService.$inject = ['$http'];
    
    function dataService($http){
    	
    	return{
    		getA1Cmp:getA1Cmp,
    		getA1CmpDetail:getA1CmpDetail,
    		getTabDataList:getTabDataList,
    	};
    	function getA1Cmp(){
    		var comp=[{'n':'Directive','f':'a1cd'},{'n':'Filter','f':'a1cf'},{'n':'Function','f':'a1cfu'},{'n':'Provider','f':'a1cp'},{'n':'Service','f':'a1cs'},{'n':'Factory','f':'a1cft'},{'n':'Animation','f':'a1ca'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'},{'n':'Router','f':'a1cr'}];
    		return comp; 
    	}
    	function getA1CmpDetail(){
    		var data=[{'n':'Directive','fpre':'a1cd','items':[{'n':'if','f':'if'},{'n':'repeat','f':'rpt'},{'n':'class','f':'cls'},{'n':'show','f':'sh'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'}]}
    		,{'n':'Filter','fpre':'a1cf','items':[{'n':'currency','f':'cr'},{'n':'date','f':'dt'},{'n':'filter','f':'flt'},{'n':'lowercase','f':'lc'},{'n':'uppercase','f':'uc'},{'n':'limitTo','f':'lt'}]}
    		,{'n':'Angular Function','fpre':'a1cfu','items':[{'n':'angular.isDefined()','f':'isd'},{'n':'angular.fromJson()','f':'fj'},{'n':'angular.element()','f':'el'},{'n':'angular.element()','f':'el'},{'n':'angular.bind()','f':'bi'},{'n':'angular.equals()','f':'eq'},{'n':'angular.extend()','f':'ex'},{'n':'angular.forEach()','f':'fe'},{'n':'angular.isArray()','f':'isa'},{'n':'angular.isDate()','f':'isda'},{'n':'angular.isNumber()','f':'isn'},{'n':'angular.isFunction()','f':'isfu'},{'n':'angular.isObject()','f':'iso'},{'n':'angular.isString()','f':'isst'}]}
    		
    		];
    		return data; 
    	}
    	function getTabDataList(cname,iname){
    		var data={};
    		data['cname']=cname;
    		data['iname']=iname;
    		//angular iterate json and get tab list object for cname and iname
    		data.tabList=[{'tName':'Basics','fileName':cname+iname+'bsc'},{'tName':'Syntax','fileName':cname+iname+'syn'},{'tName':'Arguments','fileName':cname+iname+'arg'},{'tName':'Examples','fileName':cname+iname+'exp'},{'tName':'Animation','fileName':cname+iname+'ani'},{'tName':'Errors&Solutions','fileName':cname+iname+'ersl'}]
    		return data;
    	}
    	function getFromInvestmentDetails(contractNum){
    		return $http.post(window.artAppProperties.contextpath+'/artmobile/frominvestments',contractNum)
            .then(success)
            .catch(failure);
    		function success(response) { 
    			return response.data;
    		}
    		function failure(error) { 
    		}
    	}
    	
    	function validateTransaction(dataObj){
    		return $http(
    				{
    					method: 'POST',
    					url:window.artAppProperties.contextpath+'/artmobile/validateTransction?isfalloc="false"',
    					data:dataObj
    					
    				}).then(success).catch(failure);
    		function success(response){
    			return response.data;
    		}
    		function failure(error){
    			console.log(error);
    		}
    	}
    	
    }
}
)();

