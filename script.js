function find(id){
    return document.getElementById(id);
}
function giveRedirect(obj, page){
    if (!obj){
        return
    }
    obj.addEventListener("click", () => {
        window.location.href = page;
    })
}

const to_main = find("to_main");
const to_all = document.querySelectorAll(".to_all");
const to_about = find("to_about");
const to_sources = find("to_sources");

const to_math = find("to_math");
const to_it = find("to_it");
const to_talk = find("to_talk");
const to_management = find("to_management");
const to_filology = find("to_filology");

const to_kney = find("kney");
const to_knly = find("knly");
const to_kny = find("kny");
const to_kpi = find("kpi");
const to_lny = find("lny");
const to_NaUKMA = find("NaUKMA");
const to_yky = find("yky")


giveRedirect(to_main, "index.html");
for (let i = 0;i<to_all.length;i++){
    giveRedirect(to_all[i], "every_place.html");
}
giveRedirect(to_about, "about.html");
giveRedirect(to_sources, "sources.html");

giveRedirect(to_math, "math.html");
giveRedirect(to_it, "it.html");
giveRedirect(to_talk, "talk.html");
giveRedirect(to_management, "management.html");
giveRedirect(to_filology, "filology.html");

giveRedirect(to_kney, "https://kneu.edu.ua");
giveRedirect(to_knly, "https://www.knlu.kiev.ua");
giveRedirect(to_kny, "https://knu.ua");
giveRedirect(to_kpi, "https://kpi.ua");
giveRedirect(to_lny, "https://lnu.edu.ua");
giveRedirect(to_NaUKMA, "https://www.ukma.edu.ua");
giveRedirect(to_yky, "https://ucu.edu.ua");