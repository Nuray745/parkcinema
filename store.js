async function showFilms() {
    let res = await fetch('https://parkcinema-data-eta.vercel.app/landing')
    let data = await res.json()
    console.log(data);
    return data;
    
}
showFilms()