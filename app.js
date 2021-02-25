const toggleMenu = (e) => {
    window['directions-menu'].classList.toggle("hidden")
}

window['directions-button'].onclick = toggleMenu
cancelTrip.onclick = toggleMenu

const showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m + " " + session;

    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime()