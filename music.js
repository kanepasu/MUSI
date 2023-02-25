function OnButtonClick() {
    let element = document.getElementById("floatingInput");
    full_pass = element.value;
    return{
        full_pass
    };
}
function OnButtonClick2() {
    let music = new Audio(OnButtonClick().full_pass);
    music.play();
}
