// ## Soal 5. Bintang asteriks
// ```js
// // Problem buatlah bintang seperti berikut
// let input = 5
// //hasilnya
// //*
// //**
// //***
// //****
// //*****
// ```

//code here
let input="";
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        input += "*";
    }
    input += "\n";
}
console.log(input);