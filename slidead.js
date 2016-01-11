setTimeout(function() {
    
    document.getElementById("popup").className="active";
    
}, 90000);

document.getElementById("close").onclick=function () {
    document.getElementById("popup").className="";
}
