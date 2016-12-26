/**
 * Custom Directive
 */

/**
 * Destination investment display in table format
 */
(function(){
	angular.module('artApp').directive('toTable',function(){
		return {
			restrict:"E",
			link:function(scope,element,attr){
			html="";
			scope.$watch(function(){return element.controller();},function(obj){
				angular.forEach(eval('obj.'+attr.tiersdata),function(tier,tindex){
					angular.forEach(tier.toAssets,function(toAssest,taindex){
						angular.forEach(toAssest.investments,function(investment,invindex){
							html+="<tr><td><a style='color: #0b7599;cursor: pointer;'><b>" +
									investment.tickerSymbol+"</b></a><div>"+
									investment.name+"</div><div>"+
									investment.accumulation+"</div></td></tr>";	
						});
					});
				});
				console.log(html);
				element.replaceWith(html);
				},true);
			}
		}
	});
	
	angular.module('artApp').directive('allowOnlyNumber',function(){
			return{
				restrict:"A",
				link:function(scope,element,attr){
					element.on('keydown',function(event){
						var keyCode=event.keyCode;
						if(keyCode==8||keyCode==13||keyCode==37||keyCode==39||keyCode==46){
						}else if((keyCode>47&&keyCode<57)||(keyCode>95&&keyCode<106)){
						}
						else{
							event.preventDefault();
						}
						
					});
				}
			};
		});
})();