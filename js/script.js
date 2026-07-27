const trBtn = document.getElementById("trBtn");
const enBtn = document.getElementById("enBtn");

const title = document.getElementById("title");

const cards = document.querySelectorAll(".card p");
const buttons = document.querySelectorAll(".btn");

const langData = {
    tr: {
        title: "İstemci Seçimi",
        desc: [
            "En kararlı ve önerilen istemci.",
            "PvP odaklı istemci.",
            "Orijinal istemci."
        ],
        open: "Aç"
    },
    en: {
        title: "Client Selection",
        desc: [
            "Most stable and recommended client.",
            "PvP focused client.",
            "Original client."
        ],
        open: "Open"
    }
};

function setLang(lang) {
    localStorage.setItem("lang", lang);

    title.textContent = langData[lang].title;

    cards.forEach((el, i) => {
        if (langData[lang].desc[i]) {
            el.textContent = langData[lang].desc[i];
        }
    });

    buttons.forEach(btn => {
        btn.textContent = langData[lang].open;
    });
}

trBtn.onclick = () => setLang("tr");
enBtn.onclick = () => setLang("en");

window.onload = () => {
    const saved = localStorage.getItem("lang") || "tr";
    setLang(saved);
};
