var nomeProprietario = "";

function conferma(){
    let txt = document.getElementById("nomeP");

    if(txt.value == ""){
        alert("Inserire un Proprietario");
    }
    else{
        nomeProprietario = txt.value;
    }
}

function bagno(){
    document.getElementById("bagno").style.display = "block";
    setTimeout(togli, 1000);
}

function camera(){
    document.getElementById("camera").style.display = "block";
    setTimeout(togli, 1000);
}

function soggiorno(){
    document.getElementById("soggiorno").style.display = "block";
    setTimeout(togli, 1000);
}

function cucina(){
    document.getElementById("cucina").style.display = "block";
    setTimeout(togli, 1000);
}

function terrazzo(){
    document.getElementById("terrazzo").style.display = "block";
    setTimeout(togli, 1000);
}

function togli(){
    document.getElementById("bagno").style.display = "none";
    document.getElementById("camera").style.display = "none";
    document.getElementById("soggiorno").style.display = "none";
    document.getElementById("cucina").style.display = "none";
    document.getElementById("terrazzo").style.display = "none";
}