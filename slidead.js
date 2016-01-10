setTimeout(function() {
    
    document.getElementById("popup").className="active";
    
}, 100000);

document.getElementById("close").onclick=function () {
    document.getElementById("popup").className="";
}
