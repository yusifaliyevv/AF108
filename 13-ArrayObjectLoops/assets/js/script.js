// function armstrongEdedleri(max) {
//     let netice = [];

//     for (let i = 1; i <= max; i++) {
//         let cem = 0, temp = i;
//         while (temp > 0) {
//             let digit = temp % 10;
//             cem += digit ** 3;
//             temp = Math.floor(temp / 10);
//         }
//         if (cem === i) netice.push(i);
//     }

//     return netice;
// }

// console.log(armstrongEdedleri(1000));