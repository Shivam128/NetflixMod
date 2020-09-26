let a=0;
document.getElementById("but").addEventListener("click", myFunction)

function myFunction() {
    if(document.getElementById("c1").checked){
        if(document.getElementById("r1").checked)
            {a=a+50;}
        else if(document.getElementById("r2").checked)
            {a+=70;}
        else if(document.getElementById("r3").checked)
            {a+=90;}
        else if(document.getElementById("b").checked)
            {a+=120;}
        else
            {console.log("No type selected")}
    }
    if(document.getElementById("c2").checked){
        if(document.getElementById("r1").checked)
            a+=50
        else if(document.getElementById("r2").checked)
            a+=70
        else if(document.getElementById("r3").checked)
            a+=90
        else if(document.getElementById("b").checked)
            a+=120
        else
            console.log("No type selected")
    }
    if(document.getElementById("c3").checked){
        if(document.getElementById("r1").checked)
            a+=50
        else if(document.getElementById("r2").checked)
            a+=70
        else if(document.getElementById("r3").checked)
            a+=90
        else if(document.getElementById("b").checked)
            a+=120
        else
            console.log("No type selected")
    }
    document.getElementById("amt").innerHTML = a.toString();
    console.log(a);
}
