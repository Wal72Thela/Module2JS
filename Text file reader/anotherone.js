function loadXMLDoc() {
    req=new XMLHttpRequest();
    req.onreadystatechange=function() {
        if (req.readyState==4 && req.status==200) {
            document.getElementById("div1").innerHTML=req.responseText;
       }};
    req.open("GET","appoftheyearwinner.txt",true);
    req.send();

}