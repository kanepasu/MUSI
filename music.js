function OnButtonClick() {
    let element = document.getElementById("floatingInput");
    full_pass = element.value;
    true_pass = "file://"+full_pass;
    return{
        true_pass
    };
}
function OnButtonClick2() {
    let music = new Audio(OnButtonClick().true_pass);
    music.play();
}
