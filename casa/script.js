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
    if(document.getElementById("bagno").style.display == "none"){
        document.getElementById("bagno").style.display = "block";        
    }
    else{
        document.getElementById("bagno").style.display = "none";
    }
}

function camera(){
    if(document.getElementById("camera").style.display == "none"){
        document.getElementById("camera").style.display = "block";        
    }
    else{
        document.getElementById("camera").style.display = "none";
    }
}

function soggiorno(){
    if(document.getElementById("soggiorno").style.display == "none"){
        document.getElementById("soggiorno").style.display = "block";        
    }
    else{
        document.getElementById("soggiorno").style.display = "none";
    }
}

function cucina(){
    if(document.getElementById("cucina").style.display == "none"){
        document.getElementById("cucina").style.display = "block";        
    }
    else{
        document.getElementById("cucina").style.display = "none";
    }
}

function terrazzo(){
    if(document.getElementById("terrazzo").style.display == "none"){
        document.getElementById("terrazzo").style.display = "block";        
    }
    else{
        document.getElementById("terrazzo").style.display = "none";
    }
}