function calculate() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var oper=document.getElementById("oper").value;
    if(oper=='+') 
    var res=parseInt(n1) + parseInt(n2);
    if(oper=='-') 
    var res=parseInt(n1) - parseInt(n2);
    if(oper=='*') 
    var res=parseInt(n1) * parseInt(n2);
    if(oper=='/') 
    var res=parseInt(n1) / parseInt(n2);

    document.getElementById("res").value=res;

}