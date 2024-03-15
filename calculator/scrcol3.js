
function domath(val)
{
   var n1=document.getElementById('res');
   n1.value =n1.value+val;
}
function result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
function cl(val)
{
	
	document.getElementById('res').value=null;
			
}
