window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction ||window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if(!window.indexedDB){
    window.alert("Tu navegador no soporta una version estable de IndexedDB")
}

let sudokuF = [
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 8, disabled: true },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: 5, disabled: true },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: 8, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: 9, disabled: true },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: 8, disabled: true },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: 9, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: 8, disabled: true },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
];

let sudokuResueltoF = [
    { valor: 9, disabled: false },
    { valor: 6, disabled: true },
    { valor: 3, disabled: false },
    { valor: 1, disabled: true },
    { valor: 7, disabled: false },
    { valor: 4, disabled: true },
    { valor: 2, disabled: false },
    { valor: 5, disabled: true },
    { valor: 8, disabled: false },
    { valor: 1, disabled: false },
    { valor: 7, disabled: false },
    { valor: 8, disabled: true },
    { valor: 3, disabled: true },
    { valor: 2, disabled: false },
    { valor: 5, disabled: true },
    { valor: 6, disabled: true },
    { valor: 4, disabled: false },
    { valor: 9, disabled: false },
    { valor: 2, disabled: true },
    { valor: 5, disabled: false },
    { valor: 4, disabled: false },
    { valor: 6, disabled: false },
    { valor: 8, disabled: false },
    { valor: 9, disabled: false },
    { valor: 7, disabled: false },
    { valor: 3, disabled: false },
    { valor: 1, disabled: true },
    { valor: 8, disabled: true },
    { valor: 2, disabled: false },
    { valor: 1, disabled: false },
    { valor: 4, disabled: true },
    { valor: 3, disabled: false },
    { valor: 7, disabled: true },
    { valor: 5, disabled: false },
    { valor: 9, disabled: false },
    { valor: 6, disabled: true },
    { valor: 4, disabled: false },
    { valor: 9, disabled: false },
    { valor: 6, disabled: true },
    { valor: 8, disabled: false },
    { valor: 5, disabled: false },
    { valor: 2, disabled: false },
    { valor: 3, disabled: true },
    { valor: 1, disabled: false },
    { valor: 7, disabled: false },
    { valor: 7, disabled: true },
    { valor: 3, disabled: true },
    { valor: 5, disabled: false },
    { valor: 9, disabled: true },
    { valor: 6, disabled: false },
    { valor: 1, disabled: true },
    { valor: 8, disabled: true },
    { valor: 5, disabled: false },
    { valor: 4, disabled: true },
    { valor: 5, disabled: true },
    { valor: 8, disabled: false },
    { valor: 9, disabled: false },
    { valor: 7, disabled: false },
    { valor: 1, disabled: false },
    { valor: 3, disabled: false },
    { valor: 4, disabled: false },
    { valor: 6, disabled: false },
    { valor: 2, disabled: true },
    { valor: 3, disabled: false },
    { valor: 1, disabled: false },
    { valor: 7, disabled: true },
    { valor: 2, disabled: true },
    { valor: 4, disabled: false },
    { valor: 6, disabled: true },
    { valor: 9, disabled: true },
    { valor: 8, disabled: false },
    { valor: 5, disabled: false },
    { valor: 6, disabled: false },
    { valor: 4, disabled: true },
    { valor: 2, disabled: false },
    { valor: 5, disabled: true },
    { valor: 9, disabled: false },
    { valor: 8, disabled: true },
    { valor: 1, disabled: false },
    { valor: 7, disabled: true },
    { valor: 3, disabled: false },
];

let sudokuM = [
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: 9, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: 8, disabled: true },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: 9, disabled: true },
    { valor: "", disabled: true },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: 6, disabled: true },
    { valor: 2, disabled: true },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 3, disabled: true },
    { valor: 8, disabled: true },
    { valor: 5, disabled: true },
    { valor: 7, disabled: true },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: 4, disabled: true },
    { valor: 9, disabled: true },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: 8, disabled: true },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 8, disabled: true },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 5, disabled: true },
    { valor: 3, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
];
 
let sudokuResueltoM = [
    { valor: 5, disabled: true },
    { valor: 3, disabled: false },
    { valor: 9, disabled: true },
    { valor: 8, disabled: false },
    { valor: 7, disabled: false },
    { valor: 6, disabled: false },
    { valor: 4, disabled: true },
    { valor: 1, disabled: false },
    { valor: 2, disabled: false },
    { valor: 7, disabled: true },
    { valor: 2, disabled: false },
    { valor: 8, disabled: true },
    { valor: 3, disabled: true },
    { valor: 1, disabled: false },
    { valor: 4, disabled: true },
    { valor: 9, disabled: true },
    { valor: 6, disabled: true },
    { valor: 5, disabled: false },
    { valor: 6, disabled: true },
    { valor: 4, disabled: false },
    { valor: 1, disabled: true },
    { valor: 2, disabled: false },
    { valor: 9, disabled: false },
    { valor: 5, disabled: false },
    { valor: 7, disabled: true },
    { valor: 3, disabled: true },
    { valor: 8, disabled: false },
    { valor: 4, disabled: true },
    { valor: 6, disabled: true },
    { valor: 2, disabled: true },
    { valor: 5, disabled: true },
    { valor: 3, disabled: false },
    { valor: 9, disabled: false },
    { valor: 8, disabled: false },
    { valor: 7, disabled: false },
    { valor: 1, disabled: false },
    { valor: 3, disabled: true },
    { valor: 8, disabled: true },
    { valor: 5, disabled: true },
    { valor: 7, disabled: true },
    { valor: 2, disabled: true },
    { valor: 1, disabled: false },
    { valor: 6, disabled: true },
    { valor: 4, disabled: true },
    { valor: 9, disabled: true },
    { valor: 1, disabled: true },
    { valor: 9, disabled: false },
    { valor: 7, disabled: true },
    { valor: 4, disabled: true },
    { valor: 6, disabled: false },
    { valor: 8, disabled: true },
    { valor: 2, disabled: true },
    { valor: 5, disabled: false },
    { valor: 3, disabled: false },
    { valor: 2, disabled: true },
    { valor: 5, disabled: false },
    { valor: 6, disabled: false },
    { valor: 1, disabled: true },
    { valor: 8, disabled: false },
    { valor: 7, disabled: false },
    { valor: 3, disabled: false },
    { valor: 9, disabled: false },
    { valor: 4, disabled: true },
    { valor: 9, disabled: false },
    { valor: 1, disabled: false },
    { valor: 3, disabled: true },
    { valor: 6, disabled: false },
    { valor: 4, disabled: true },
    { valor: 2, disabled: false },
    { valor: 5, disabled: false },
    { valor: 8, disabled: true },
    { valor: 7, disabled: true },
    { valor: 8, disabled: false },
    { valor: 7, disabled: true },
    { valor: 4, disabled: false },
    { valor: 9, disabled: false },
    { valor: 5, disabled: true },
    { valor: 3, disabled: true },
    { valor: 1, disabled: false },
    { valor: 2, disabled: false },
    { valor: 6, disabled: true },
]; 

let sudokuD = [
    { valor: 8, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 3, disabled: true },
    { valor: 6, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 9, disabled: true },
    { valor: "", disabled: false },
    { valor: 2, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: 5, disabled: true },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 3, disabled: true },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 6, disabled: true },
    { valor: 8, disabled: true },
    { valor: 4, disabled: true },
    { valor: 3, disabled: true },
    { valor: 8, disabled: true },
    { valor: 5, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 1, disabled: true },
    { valor: 7, disabled: true },
    { valor: "", disabled: false },
    { valor: 9, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
    { valor: 4, disabled: true },
    { valor: "", disabled: false },
    { valor: "", disabled: false },
];

let sudokuResueltoD = [
    { valor: 8, disabled: true },
    { valor: 1, disabled: false },
    { valor: 2, disabled: false },
    { valor: 7, disabled: false },
    { valor: 5, disabled: false },
    { valor: 3, disabled: false },
    { valor: 6, disabled: false },
    { valor: 4, disabled: false },
    { valor: 9, disabled: false },
    { valor: 9, disabled: false },
    { valor: 4, disabled: false },
    { valor: 3, disabled: true },
    { valor: 6, disabled: true },
    { valor: 8, disabled: false },
    { valor: 2, disabled: false },
    { valor: 1, disabled: false },
    { valor: 7, disabled: false },
    { valor: 5, disabled: false },
    { valor: 6, disabled: false },
    { valor: 7, disabled: true },
    { valor: 5, disabled: false },
    { valor: 4, disabled: false },
    { valor: 9, disabled: true },
    { valor: 1, disabled: false },
    { valor: 2, disabled: true },
    { valor: 8, disabled: false },
    { valor: 3, disabled: false },
    { valor: 1, disabled: false },
    { valor: 5, disabled: true },
    { valor: 4, disabled: false },
    { valor: 2, disabled: false },
    { valor: 3, disabled: false },
    { valor: 7, disabled: true },
    { valor: 8, disabled: false },
    { valor: 9, disabled: false },
    { valor: 6, disabled: false },
    { valor: 3, disabled: false },
    { valor: 6, disabled: false },
    { valor: 9, disabled: false },
    { valor: 8, disabled: false },
    { valor: 4, disabled: true },
    { valor: 5, disabled: true },
    { valor: 7, disabled: true },
    { valor: 2, disabled: false },
    { valor: 1, disabled: false },
    { valor: 2, disabled: false },
    { valor: 8, disabled: false },
    { valor: 7, disabled: false },
    { valor: 1, disabled: true },
    { valor: 6, disabled: false },
    { valor: 9, disabled: false },
    { valor: 5, disabled: false },
    { valor: 3, disabled: true },
    { valor: 4, disabled: true },
    { valor: 5, disabled: false },
    { valor: 2, disabled: false },
    { valor: 1, disabled: true },
    { valor: 9, disabled: false },
    { valor: 7, disabled: false },
    { valor: 4, disabled: false },
    { valor: 3, disabled: false },
    { valor: 6, disabled: true },
    { valor: 8, disabled: true },
    { valor: 4, disabled: true },
    { valor: 3, disabled: true },
    { valor: 8, disabled: true },
    { valor: 5, disabled: true },
    { valor: 2, disabled: false },
    { valor: 6, disabled: false },
    { valor: 9, disabled: false },
    { valor: 1, disabled: true },
    { valor: 7, disabled: true },
    { valor: 7, disabled: false },
    { valor: 9, disabled: true },
    { valor: 6, disabled: false },
    { valor: 3, disabled: false },
    { valor: 1, disabled: false },
    { valor: 8, disabled: false },
    { valor: 4, disabled: true },
    { valor: 5, disabled: false },
    { valor: 2, disabled: false },
];

let db;
let request = windoe.indexedDB.open("sudokusDataBase", 1);

request.onerror = function(event){
    console.log("error: ");
};

request.onsuccess = function(event){
    db = request.result;
    console.log("éxito: " + db);
};

request.onupgradeneeded = function(event){
    var db = event.target.result;
    var objectStore = db.createObjectStore("sudoku", {keyPath: "id"});

    objectStore.add(sudokuF);
    objectStore.add(sudokuResueltoF);
    objectStore.add(sudokuM);
    objectStore.add(sudokuResueltoM);
    objectStore.add(sudokuD);
    objectStore.add(sudokuResueltoD);
}

export { /*el objectStore? ni idea*/  };