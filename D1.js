/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype in JavaScript sono come i giocattoli che vengono ordinati per tipologia, mio cugino Andrea infatti non mischierebbe mai "I DC" con i suoi amatissimi "Avengers", in quanto finirebbero per far "esplodere" la sua cameretta.
Ora pensiamo che la cameretta di Andrea fosse un "Terminale", una sorta di "esecutore" di istruzioni (un pò come lo è Andrea quando sa che sto per ragalargli qualcosa) che ci tornerà utile più in là nel discorso, e che i bauli di giocattoli fossero delle "variabili" (come il baule di Andrea che aumenta a dismisura, beato Andrea).
Le tipologie di giocattoli invece vengono sostituiti dai datatype (tipologie di dati), e ne esistono di 3 tipi:
1.String = dati composti da caratteri di testo, un pò come il nome di Andrea.
2.Number = dati numerici, 5 come le lettere del nome di Andrea.
3.Boolean = dati che hanno SOLO due valori , true=vero ; false=falso.
Il Terminale è dove possiamo constatare che i vari bauli di giocattoli contengano i giusti giocattoli.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Alessandro";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
let somma = num1 + num2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let numX = "x";
numX = 12;
console.log(numX);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Querci";
const mySurname = "Querci";
/* mySurname = "Alessandro";
console.log(mySurname);               / inseriti in un commento in quanto bloccano l'esecuzione di JavaScript  
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero = 4;
let sottrazione = numero - numX;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
name1 = name2;
console.log(name1 == name2);
