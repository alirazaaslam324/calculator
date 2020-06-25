function calc(num)
{
    document.form.view.value = document.form.view.value+num;

}
function clean()
{
    document.form.view.value = "";
}
function result()
{
    var a = document.form.view.value;
    if (a) 
    {
        document.form.view.value = eval(a);
        
    }
    
}
function back()
{
    var a = document.form.view.value;
    document.form.view.value = a.substring(0, a.length-1);
}
$('.result').click(function(e)
{
    e.preventDefault();
    var a = document.form.view.value;
    
    if (a == "/" || a == "*" || a == "+" || a == "-" || a == "") 
    {
        alert("Calculate start with integers.");
        document.form.view.value ="";
        
        
    }
    else
    {
        document.form.view.value = eval(a);
    }
    
});

