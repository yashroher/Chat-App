import { url } from "inspector";

function change()
{
    var set_box=document.getElementById("set-box");
    var btn=(<HTMLInputElement>document.getElementById("btn-set"));
    if(btn.innerHTML==="Settings")
    {
        btn.innerHTML="Close";
        set_box.style.width="20%";
    }

    else
    {
        btn.innerHTML="Settings";
        set_box.style.width="0%";
    }
}

function changeMode()
{
    var main_interface=(<HTMLElement>document.getElementById("main"));
    var btn=document.getElementById("mode");
    if(btn.innerHTML==="Light Mode:")
    {
       btn.innerHTML="Dark Mode:";
       main_interface.style.backgroundImage="/img/img2.jpg"
    }

    else
    {
        btn.innerHTML="Light Mode:";
        main_interface.style.backgroundImage="url('/img/img2.jpg')"
    }
}