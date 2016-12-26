var ReExp_onlyFloatNum=/^-?\d+\.?\d*$/;
var ReExp_SpecChars=/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
function toDollar(percent, availBal) {
	var dollarAmt = 0;
	if (percent != null && percent != "" && !isNaN(percent) && availBal != null
			&& availBal != "" && !isNaN(availBal)) {
		var enteredAmount = parseFloat(percent);
		var rowAmount = parseFloat(availBal);
		if (enteredAmount && rowAmount) {
			dollarAmt = Math.round(rowAmount * (enteredAmount / 100));
			dollarAmt = dollarAmt < 1 ? 1 : dollarAmt;
		}
	}
	return dollarAmt;
}

function toPercentage(dollar, availBal) {
	var percentAmount = 0;
	if (dollar != null && dollar != "" && !isNaN(dollar) && availBal != null
			&& availBal != "" && !isNaN(availBal)) {
		var enteredAmount = parseFloat(dollar);
		var rowAmount = parseFloat(availBal);
		if (enteredAmount && rowAmount) {
			percentAmount = (enteredAmount / rowAmount) * 100;
			percentAmount = percentAmount < 1 ? 1 : percentAmount;
		}
	}
	return percentAmount.toFixed(1);
}

function totalAmtCalc(fromTransAmt){
	 var fromTotal=0;
	 angular.forEach(fromTransAmt,function(amount,index){
		 if(angular.isDefined(amount)&&amount!=""){
			 amount=parseFloat(amount);
			 amount=isNaN(amount)?0:amount;
			 fromTotal+=amount;
		 }
	 });
	 return fromTotal;
}

function validateAndReplaceAmt(oldVal){
	if(!(ReExp_onlyFloatNum.test(oldVal))){
		return oldVal.replace(ReExp_SpecChars, '');
	}
	else{
		return oldVal;
	}
}

function isWithInAvailBal(inpAmt,accAmt){
	if(angular.isDefined(inpAmt)&&angular.isDefined(accAmt)){
		inpAmt=parseFloat(inpAmt);
		inpAmt=isNaN(inpAmt)?0:inpAmt;
		accAmt=parseFloat(accAmt);
		accAmt=isNaN(accAmt)?0:accAmt;
		if(inpAmt<=accAmt){
			return true;
		}
	}
	return false;
}
function addNavigator($rootScope,pageId){
	if(!hasNavigator($rootScope,pageId)){
		$rootScope.navigator=$rootScope.navigator+"-"+pageId;
	}
}
function removeNavigator($rootScope,pageId){
	if(hasNavigator($rootScope,pageId)){
		$rootScope.navigator=$rootScope.navigator.replace("-"+pageId,"");
	}
}
function hasNavigator($rootScope,pageId){
	if(angular.isDefined($rootScope.navigator)&&$rootScope.navigator.indexOf(pageId)!=-1){
		return true;
	}else{
		return false;
	}
}
function showhideLoading(id,show){
	if(show){
		document.getElementById(id).classList.remove("hidden");
	}
	else{
		document.getElementById(id).classList.add("hidden");
	}
}
function updateHeader(){

}