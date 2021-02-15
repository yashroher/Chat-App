
function change() {
    var set_box = document.getElementById("set-box");
    var btn = document.getElementById("btn-set");
    if (btn.innerHTML === "Settings") {
        btn.innerHTML = "Close";
        set_box.style.height = "89%";
    }
    else {
        btn.innerHTML = "Settings";
        set_box.style.height = "0%";
    }
}
function changeMode() {
    var main_interface = document.getElementById("main");
    var btn = document.getElementById("mode");
    var set_box=document.getElementById("set-box")
    var users=document.getElementById("User");
    var input=document.getElementById("message");
    var btn_1=document.getElementById("send-btn");
    var btn_2=document.getElementById("loc");
    var title=document.getElementById("room-title");
    var time=document.getElementById("time");
    var user_title=document.getElementById("User-Title");
    var main_mess=document.getElementById("main-mess");
    if (btn.innerHTML === "Light Mode:") {
        btn.innerHTML = "Dark Mode:";
        main_interface.style.backgroundImage ="url('../img/img4.jpg')";
        set_box.style.backgroundColor="rgba(214, 202, 202, 0.945)";
        users.style.backgroundColor="rgba(214, 202, 202, 0.945)";
        input.style.backgroundColor="rgba(0, 0, 0, 0.555)";
        btn_1.style.backgroundColor="rgba(0, 0, 0, 0.555)";
        btn_2.style.backgroundColor="rgba(0, 0, 0, 0.555)";
        title.style.backgroundColor="rgba(0, 0, 0, 0.555)";
        user_title.style.backgroundColor="white";
        user_title.style.color="black";
        title.style.color="white";
        input.style.color="white";
        btn_1.style.color="white";
        btn_2.style.color="white";
    }
    else {
        btn.innerHTML = "Light Mode:";
        main_interface.style.backgroundImage = "url('../img/img2.jpg')";
        set_box.style.backgroundColor="rgb(17, 16, 16)";
        users.style.backgroundColor="rgb(17, 16, 16)"
        input.style.backgroundColor="rgba(255, 255, 255, 0.555)";
        btn_2.style.backgroundColor="rgba(255, 255, 255, 0.555)";
        btn_1.style.backgroundColor="rgba(255, 255, 255, 0.555)";
        title.style.backgroundColor="rgba(255, 255, 255, 0.555)";
        title.style.color="black";
        btn_1.style.color="black";
        btn_2.style.color="black";
        user_title.style.backgroundColor="black";
        user_title.style.color="white";
        // main_mess.style.backgroundColor="rgba(0, 0, 0, 0.555)";
        // main_mess.style.color="white"

    }
}

function hideBar()
{
    var user_bar=document.getElementById("User");
    var hide=document.getElementById("hide");
    var main_interface = document.getElementById("main");
    var title=document.getElementById("User-Title")
    if(hide.innerHTML==="Hide side-Bar:")
    {
       user_bar.style.width="0%";
       title.style.display="none";
       hide.innerHTML="Show side-Bar:";
       main_interface.style.width="100%"
    }
    else
    {
        hide.innerHTML="Hide side-Bar:";
    }
}
function changeFont()
{
    var font=document.getElementById("font");
    document.querySelector('body').style.fontFamily=font.value;
}

function changeBackGround(image)
{
    var main_interface=document.getElementById("main")
    main_interface.style.backgroundImage="url("+image+")";
    main_interface.style.backgroundRepeat="no-repeat";
    main_interface.style.backgroundSize="cover";
}

function changeColor()
{
    var color=document.getElementById("color");
    var users=document.getElementById("User");
    users.style.backgroundColor=color.value;
    var set_box=document.getElementById("set-box");
    set_box.style.backgroundColor=color.value;
}

