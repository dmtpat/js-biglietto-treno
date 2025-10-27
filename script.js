/*
*
*js-biglietto-treno*
*chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
*calcolare il prezzo totale del viaggio, secondo queste regole:
* *il prezzo del biglietto è definito in base ai km (0.21 € al km)
* *sconto del 20% per i minorenni
* *sconto del 40% per gli over 65
*risultato: un numero con due decimali dopo la virgola
*stampare il risultato tramite un alert o in console
*
***Bonus: scrivete il risultato in un elemento in pagina (es. un tag <div>)***
*
*/

//------Dichiarazione variabili--------

const prezzoKm = 0.21;
const scontoOver = 0.4;
const scontoMinori = 0.2;

const kmString = prompt(`Kilometri da percorrere`);
const etaString = prompt(`Inserisci la tua età`);

const kmInt = parseInt(kmString).toFixed(2);
const etaInt = parseInt(etaString).toFixed(2);
console.log(kmInt);
console.log(etaInt);

let costo = 0;

//------------Svolgimento-------------
//calcolo costo del biglietto sui km
costo = (kmInt * prezzoKm).toFixed(2);
console.log(`Il costo del biglietto in base ai km senza verificare gli sconti è di € ${costo}`);

if (etaInt < 18) {
    costo -= (costo * scontoMinori);
    console.log(`Effettuato lo sconto per minori di 18 anni`)
}
if (etaInt > 65) {
    costo -= (costo * scontoOver);
    console.log(`Effettuato lo sconto per over 65 anni`)
}
costo = costo.toFixed(2);
//Risultato
console.log(`Il costo totale del biglietto è di € ${costo}`);