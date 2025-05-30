const btn = document.getElementById("langBtn");
const menu = document.getElementById("langMenu");
const film = document.getElementById("film");

function toggleMenu() { menu.classList.toggle("hidden"); };

function setLang(lang) {
    let img;
    if (lang === "AZ") img = "Az.png";
    else if (lang === "EN") img = "En.png";
    else if (lang === "RU") img = "russian.png";

    btn.querySelector("span").textContent = lang;
    btn.querySelector("img").src = `img/${img}`;
    menu.classList.add("hidden");
}

function navigate(id) {
    location.href = `html/details.htm?id=${id}`;
}

async function Films() {
    let data = await showFilms();

    console.log(data);
    data.forEach(item => {
        let date = new Date(item.firstScreeningDate);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;

        let formattedDate = `${day}.${month}.${year}`;
        let subtitles = item.subtitles.join(', ');

        return (
            film.innerHTML += `
            <div onclick="navigate('${item.id}')" class="bg-gray-900 cursor-pointer rounded-2xl overflow-hidden shadow-lg">
                <img src="https://new.parkcinema.az/_next/image?url=https%3A%2F%2Fnew.parkcinema.az%2Fapi%2Ffile%2FgetFile%2F${item.image}&w=640&q=75" alt="movie" class="w-full h-80 object-cover">
                <div class="p-4">
                    <h2 class="text-lg font-semibold">${item.name}</h2>
                    <p class="text-sm text-gray-400">${formattedDate}</p>
                    <div class="flex items-center justify-between text-sm mt-1">
                        <span>${item.ageLimit}</span>
                        <p>${subtitles}</p>
                    </div>
                </div>
            </div>
        `
        )
    });
}
Films();
