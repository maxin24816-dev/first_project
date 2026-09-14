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