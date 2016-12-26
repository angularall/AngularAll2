(
function(){
	
    'use strict';

    angular.module('aaApp.ang1')
            .factory('dataService',dataService);

    dataService.$inject = ['$http'];
    
    function dataService($http){
    	
    	return{
    		getA1Cmp:getA1Cmp,
    		getA1CmpDetail:getA1CmpDetail
    	};
    	function getA1Cmp(){
    		var comp=[{'n':'Directive','f':'a1cd'},{'n':'Filter','f':'a1cf'},{'n':'Function','f':'a1cfu'},{'n':'Provider','f':'a1cp'},{'n':'Service','f':'a1cs'},{'n':'Factory','f':'a1cft'},{'n':'Animation','f':'a1ca'},{'n':'Router','f':'a1cr'}];
    		return comp; 
    	}
    	function getA1CmpDetail(){
    		var data=[{'n':'Directive','fpre':'a1cd','items':[{'n':'if','f':'if'},{'n':'repeat','f':'rpt'},{'n':'class','f':'cls'},{'n':'show','f':'sh'},{'n':'hide','f':'hd'},{'n':'model','f':'mdl'}]}
    		,{'n':'Filter','fpre':'a1cf','items':[{'n':'currency','f':'cr'},{'n':'date','f':'dt'},{'n':'filter','f':'flt'},{'n':'lowercase','f':'lc'},{'n':'uppercase','f':'uc'},{'n':'limitTo','f':'lt'}]}];
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

