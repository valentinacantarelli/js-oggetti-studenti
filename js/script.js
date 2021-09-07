// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//oggetto studente
var studente={
    "nome":"Valentina",
    "cognome":"Cantarelli",
    "età":33
};

//ciclo for in
for(var key in studente){
    console.log(key);
}

//array studenti
var studenti=[
    {"nome":"Oliver",
    "cognome":"Walker",
    "età":15
    },
    {"nome":"Robert",
    "cognome":"Robinson",
    "età":72
    },
    {"nome":"Agatha",
    "cognome":"Davies",
    "età":27
    },
    {"nome":"Calista",
    "cognome":"Williams",
    "età":36
    },
    {"nome":"Dotty",
    "cognome":"Wilson",
    "età":21
    },

];
studenti.push(studente);
console.log(studenti);


 //chiedo a utente dati studente
 var nome= prompt("Inserisci il tuo nome");
 var cognome= prompt("Inserisci il tuo cognome");
 var eta= parseInt(prompt("Inserisci la tua età"));

 var utente={
    "nome":nome,
    "cognome":cognome,
    "età":eta
 }

 //stampo in lista i nuovi dati
 studenti.push(utente);

//ciclo per stampare nome e cognome studente
var lista=document.getElementById("studenti")
 for(var i=0; i<studenti.length;i++){
    lista.innerHTML+=`<li>Nome studente : ${studenti[i]["nome"]} ${studenti[i]["cognome"]}</li>`
 }
