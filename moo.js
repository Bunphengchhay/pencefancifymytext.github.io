function moo(){
    var text = document.getElementById("text_id").value;
    var uppercase_text = text.toUpperCase();
    var split_text = uppercase_text.split(".");
    suffixed_text = split_text.join("_Moo");
    document.getElementById("text_id").value = suffixed_text;

}