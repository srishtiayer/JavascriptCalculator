
// / is 10
// * is 11
// - is 12
// . is 13
// + is 14
var calculationExecution=[];
function CalculatorCalculation(valueSent){
	if(valueSent=="null"){
		//console.log(calculationExecution.length);
	}
	else{
		if(valueSent<=9){
			//console.log(valueSent);
			calculationExecution.push(valueSent);	
		}else{
			if(valueSent==10){
				calculationExecution.push("/");
			}
			if(valueSent==11){
				calculationExecution.push("*");
			}
			if(valueSent==12){
				calculationExecution.push("-");
			}
			if(valueSent==13){
				calculationExecution.push(".");
			}
			if(valueSent==14){
				calculationExecution.push("+");
			}
		}
		var id = document.getElementsByClassName("display");
		var temporaryTotalValue="";
		for(let i=0;i<calculationExecution.length;i++){
			temporaryTotalValue=temporaryTotalValue+calculationExecution[i];
		}
		id[0].value=temporaryTotalValue;
		//console.log(calculationExecution);
	}
}
function CalculateCalculation(){
	var OperandOne="";
	var OperandOneOn=true;
	var OperandTwo="";
	var OperandTwoOn=false;
	var OperatorHere="";
	for(let i=0;i<calculationExecution.length;i++){
		if((calculationExecution[i]=="+")||(calculationExecution[i]=="-")||(calculationExecution[i]=="*")||(calculationExecution[i]=="/")){
			OperatorHere=calculationExecution[i];
			OperandOneOn=false;
			OperandTwoOn=true;
			continue;
		}
		if(OperandOneOn){
			OperandOne=OperandOne+calculationExecution[i];
		}
		if(OperandTwoOn){
			OperandTwo=OperandTwo+calculationExecution[i];
		}	
	}
	//console.log("first operand is "+OperandOne+" & second operand is "+OperandTwo+" & operator is "+OperatorHere);
	OperationAndOperand(Number(OperandOne),OperatorHere,Number(OperandTwo));
}
function OperationAndOperand(operand1,operator,operand2){
	var outputOfCalculation=0;
	if(operator=="+"){
		outputOfCalculation=operand1+operand2;
	}
	if(operator=="*"){
		outputOfCalculation=operand1*operand2;
	}
	if(operator=="/"){
		outputOfCalculation=operand1/operand2;
	}
	if(operator=="-"){
		outputOfCalculation=operand1-operand2;
	}
	var id = document.getElementsByClassName("display");
	id[0].value=outputOfCalculation;
	calculationExecution=[];

}
CalculatorCalculation("null");