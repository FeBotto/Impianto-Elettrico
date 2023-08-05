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