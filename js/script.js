// chiede all'utente nome, cognome, età e controlla che ci siano numeri per la variabile età e lettere per le variabili nome e cognomi

while (isNaN(eta) || !isNaN(nome) || !isNaN(cognome)) {
    var nome = prompt("Inserisci il tuo nome!");
    var cognome = prompt("Inserisci il tuo cognome!");
    var eta = parseInt(prompt("Inserisci la tua età!"));
}

// Inserisce in una object le variabili inserite tramite prompt 

var nuovoStudente = {};
nuovoStudente.nome = nome;
nuovoStudente.cognome = cognome;
nuovoStudente.eta = eta;

console.log(nuovoStudente);

var classe34 = [
    
    studente1 = {
        nome: "Domenico",
        cognome: "Lampada",
        eta: 29
    },
    studente2 = {
        nome: "Salvatore",
        cognome: "De Santis",
        eta: 22
    },
    studente3 = {
        nome: "Gabriele",
        cognome: "Moscato",
        eta: 18
    },
    studente4 = {
        nome: "Erika",
        cognome: "Forti",
        eta: 21
    }
    
]

// Controlla se l'utente sia già registrato e di conseguenza stampa e inserisce nell'array il nuovo studente
check = true;
for (i=0; i < classe34.length; i++){
    console.log(classe34[i].nome + " " + classe34[i].cognome + " " + classe34[i].eta);
    if (nuovoStudente.nome == classe34[i].nome || nuovoStudente.cognome == classe34[i].cognome || nuovoStudente.eta == classe34[i].eta ) {
        console.log("Sei già iscritto!");
        check = false;
    }
}

if (check == true) {
    classe34.push(nuovoStudente);
    console.log("Iscrizione completa con Sucesso!");
    console.log(classe34);
}
