var screenData= document.getElementById("screen");

function getvalue(val){
    var value=val;
    display(val);

}

function display(v) {
    if (v === "=") {
        let data=screenData.value;
        let total = eval(data) // 1 + 1
        screenData.value = total;
    }
    else{
        screenData.value += v;
    }
}

function clearval() {
        screenData.value="";
    
}

function remove() {

    var rev = screenData.value;
    screenData.value = rev.substring(0, rev.length - 1);

}