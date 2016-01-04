setTimeout(function() {
    
    document.getElementById("popup").className="active";
    
}, 5000);

document.getElementById("close").onclick=function () {
    document.getElementById("popup").className="";
}
setTimeout(function() {
    
    document.getElementById("poprite").className="active";
    
}, 5000);

document.getElementById("close").onclick=function () {
    document.getElementById("poprite").className="";
}
