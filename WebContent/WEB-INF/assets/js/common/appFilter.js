/**
 * Custom Directive
 */

/**
 * Destination investment display in table format
 */
(function(){
	angular.module('artApp').filter('camelCase',function(){
		return function(input){
			input=input||'';
			return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}
	});

})();