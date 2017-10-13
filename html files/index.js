var opentime;
switch (new Date().getDay()) {
    case 0:
        day = "Opens at: 11:00 AM - 1:00 AM";
        break;
    case 1:
        day = "Opens at: 6:00 AM - 1:00 AM";
        break;
    case 2:
        day = "Opens at: 6:00 AM - 1:00 AM";
        break;
    case 3:
        day = "Opens at: 6:00 AM - 1:00 AM";
        break;
    case 4:
        day = "TOpens at: 6:00 AM - 1:00 AM";
        break;
    case 5:
        day = "Opens at: 6:00 AM - 1:00 AM";
        break;
    case 6:
        day = "Opens at: 6:00 AM - 1:00 AM";
        break;
}
document.getElementById("opentime").innerHTML = "Today is " + day;