

const indexes = [1, 2, 3]
const recenica = "Cao ja sam Filip, pokazujem Nikoli JS!";


const nikola = {
    ime: "nikola",
    prezime: "tesic",
    jmbg: "13019961234",
    porodica: {
        marija: {
            ime: "Marija"
        }
    }
}

for(let ime in nikola.porodica) { 
    console.log(nikola.porodica[ime].ime);
}

console.log(nikola.porodica.marija.ime);


nikola["porodica"];

const mojaFunkcija = function () { 
    console.log("Ja sam funkcija")
}


function pozivacFunckije(nekaFunkcija) {
    return nekaFunkcija
}

pozivacFunckije(function () {
    console.log("Blala!")
})
