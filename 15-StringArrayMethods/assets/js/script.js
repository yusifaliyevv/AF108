// STRING METHODS

// TASK 1 Verilmis string-de sait herflewrin tapilmasi

// function saitTap(string){
//   let saitler = 'aoueiAIOUE';
//   let netice = [];
  
//   for (let char of string){
//     if (saitler.includes(char)){
//       netice.push(char);
//     }
//   }
//   return netice;
// }
  
// let verilmisString = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(saitTap(verilmisString));





// TASK 2 Verilmish string-de sozlerin bosluga gore sayi.

// function sozSayi(string) {
//   let sozler = string.trim().split(" ");
//   return sozler.length;
// }


// let verilmisString = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(sozSayi(verilmisString));





// TASK 3 Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın

// function enUzunSoz(string) {
//   let sozler = string.trim().split(" ");
//   let enUzun = "";

//   for (let hazirki of sozler) {
//     if (hazirki.length > enUzun.length) {
//       enUzun = hazirki;
//     }
//   }

//   return enUzun;
// }

// let verilmisString = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(enUzunSoz(verilmisString));





// TASK 4 Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// function indexVeSoz(string){
//   let sozler = string.trim().split(" ");

//   for (let i = 0; i < sozler.length; i++){
//     let boyukSoz = sozler[i];
//     if (boyukSoz === boyukSoz.toUpperCase()){
//       console.log(`${i}, ${boyukSoz}`);
//     }
//   }
// }

// let verilmisString = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(indexVeSoz(verilmisString));





// TASK 5 Verilmiş string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

// function boyukHerfElement(string){
//   let sozler = string.trim().split(" ");

//   for (let boyukHerf of sozler){
//     let boyukHerfSayi = 0;

//     for (let char of boyukHerf){
//       if (char >= 'A' && char <= 'Z'){
//         boyukHerfSayi++;
//       }
//     }
//     if (boyukHerfSayi > 2){
//       console.log(boyukHerf);
//     }
//   }
// }

// let verilmisString = "I am frontend DEVELOPER I LEARN Javascript";
// console.log(boyukHerfElement(verilmisString));





// TASK 6 Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ

// function birlesdirme(cumle) {
//   cumle = cumle.trim();

//   let sozler = cumle.split(" ");

//   let ilkHerf = "";
//   for (let tekSoz of sozler) {
//     if (tekSoz.length > 0) {
//       ilkHerf += tekSoz[0];
//     }
//   }

//   return ilkHerf;
// }

// console.log(birlesdirme("  bu funksiya cumledeki butun sozlerin bas herflerini birlesdirir  "));





// TASK 7 Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır,
// ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn: komputer-k6r, stəkan-s4n, javascript- j8t

// function cumleAyirma(cumle){
//   return cumle.split(" ").map(soz => sozQisaltma(soz)).join(" ");
// }

// function sozQisaltma(soz){
//   let length = soz.length;

//   if (length < 4){
//     return soz;
//   }

//   let ilkHerf = soz[0];
//   let sonHerf = soz[length - 1];
//   let ortaHerfSayi = length - 2;

//   return `${ilkHerf}${ortaHerfSayi}${sonHerf}`;
// }

// let verilmisCumle = "bu funksiya cumledeki butun sozleri ixtisar edir";
// let netice = cumleAyirma(verilmisCumle);
// console.log(netice);










// ARRAY METHODS

// TASK 1 Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.

// function tekrarSilme(arr){
//   let tekrarlar = [];
//   let uniqueReqemler = [];

//   for (let i = 0; i < arr.length; i++){
//     let say = 0;
//     for (let j = 0; j < arr.length; j++){
//       if (arr[i] === arr[j]) {
//         say++;
//       }
//     }
//     if (say === 1){
//       uniqueReqemler.push(arr[i]);
//     } else if (say > 1 && !tekrarlar.includes(arr[i])){
//       tekrarlar.push(arr[i]);
//     }
//   }

//   console.log("unikler:", uniqueReqemler);
//   console.log("tekrar sayi:", tekrarlar.length);
// }
// tekrarSilme([1, 1, 2, 2, 3, 4, 5, 6, 7]);





// TASK 2 Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.

// function polindromYoxlama(soz){
//   let verilmisSoz = soz.toLowerCase().split(' ').join('');
//   let tersSoz = verilmisSoz.split('').reverse().join('');

//   return verilmisSoz === tersSoz;
// }
// console.log(polindromYoxlama("salam"));
// console.log(polindromYoxlama("ana"));
// console.log(polindromYoxlama("enene"));





// TASK 3 Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.

// function boyuklerinSayi(arr, eded){
//   let say = 0;
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] > eded){
//       say++;
//     }
//   }
//   return say;
// }

// let arr = [1, 3, 5, 7, 9];
// let eded = 5;
// console.log(boyuklerinSayi(arr, eded));





// TASK 4 customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.

// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"],
//     },
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"],
//     },
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"],
//     },
//   },
// ];

// function hobbiler(customersArr){
//   let allHobbies = customersArr.reduce((acc, customer) => {
//     return acc.concat(customer.personal.hobbies);
//   }, []);
  
//   console.log(allHobbies);
// }
// hobbiler(customers);





// TASK 5 Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)

// function analyzeArray() {
//   let arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1);
//   console.log("random array:", arr);

//   let max = Math.max(...arr);
//   console.log("max eded:", max);

//   let min = Math.min(...arr);
//   console.log("min eded:", min);

//   let sum = arr.reduce((acc, val) => acc + val, 0);
//   console.log("cem:", sum);

//   let average = sum / arr.length;
//   console.log("ortalama:", average);

//   let squares = arr.map(num => Math.pow(num, 2));
//   console.log("kvadrat:", squares);
// }
// analyzeArray();