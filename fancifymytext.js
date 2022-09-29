function fancifymytext(){
    document.getElementById("text_id").style.fontSize="4em";
    if(document.getElementById('fancy_button').checked==true) {
        document.getElementById("text_id").style.fontWeight="bold";
        document.getElementById("text_id").style.color="Blue";
        document.getElementById("text_id").style.textDecoration="underline";
    }

    if(document.getElementById('boring_button').checked==true) {

        document.getElementById("text_id").style.fontWeight="normal";
        document.getElementById("text_id").style.textDecoration="none";
        document.getElementById('fancy_button').checked= new Boolean;
    }
}


