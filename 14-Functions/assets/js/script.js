// TASK 1 (Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.)

// let sum = (a, b) => a + b;
// let sub = (a, b) => a - b;
// let mult = (a, b) => a * b;
// let div = (a, b) => a / b;

// let calculate = (a, b, func) => func(a, b)

// console.log(calculate(7, 5, sum));
// console.log(calculate(7, 5, sub));
// console.log(calculate(7, 5, mult));
// console.log(calculate(7, 5, div));




// TASK 2 (Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)(14, 20, 35, 40, 57, 60, 100))

// function tekVeCut (...ededler){
//     let tekEded = [];
//     let cutEded = [];

//     for (let num of ededler){
//         if (num % 2 === 0){
//             cutEded.push(num);
//         }else {
//             tekEded.push(num);
//         }
//     }
//     console.log("tek ededler:", tekEded);
//     console.log("cut ededler", cutEded);
// }
// tekVeCut(14, 20, 35, 40, 57, 60, 100);




// TASK 3 (Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen elementlerin cemini tapin.[14, 20, 35, 40, 57, 60, 100])

// function bolunenlerCemi (arr){
//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] % 4 === 0 && arr[i] % 5 === 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(bolunenlerCemi([14, 20, 35, 40, 57, 60, 100]))




// TASK 4 (Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded olduğunu tapan Proqramın alqoritmini yazin.)

// let cumle = prompt("Cumle daxil edin:");
// let simvol = prompt("Axtarilan simvolu daxil edin:")

// function simvolSay (cumle, simvol){
//     let say = 0;
//     for (let i = 0; i < cumle.length; i++) {
//         if (cumle[i] === simvol){
//             say++;
//         }
//     }
//     return say;
// }

// if (simvol.length !== 1){
//     alert("1 simvol daxil edin")
// }else {
//     alert(`"${simvol}" simvolu "${cumle}" cumlesinde ${simvolSay (cumle, simvol)} defe islenilib`)
// }




// TASK 5 (Daxil edilen ededin Aboundant ve ya Deficient oldugunu yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa) cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient eded olur. 12-Aboundant, 13- Deficient))

// function aboundantYaxudDeficient (num){
//     if (num <= 0){
//         return "musbet eded daxil edin";
//     }

//     let sum = 0;

//     for (let i = 0; i <= num / 2; i++) {
//         if(num % i === 0){
//             sum += i;
//         }
//     }

//     if ( sum > num ){
//         return `${num} aboundant ededdir`;
//     }else {
//         return `${num} deficient ededdir`;
//     }
// }
// let getNum = parseInt(prompt("eded daxil edin"));
// alert(aboundantYaxudDeficient(getNum))




// TASK 6 (Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.)

// function kvadrataYukselenArray (){
//     let eded = prompt("array ededlerini daxil edin:");
//     let arr = [];
//     let bosluq = "";

//     for (let i = 0; i < eded.length; i++) {
//         if( eded[i] === ','){
//             arr.push(Number(bosluq));
//             bosluq = "";
//         }else {
//             bosluq += eded[i];
//         }
//     }
    
//     if (bosluq) arr.push(Number(bosluq));

//     let yukselmisArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         yukselmisArr.push(arr[i] * arr[i]);
//     }
//     return yukselmisArr;
// }
// console.log(kvadrataYukselenArray());




// TASK 7 (İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54])

// let istirakcilar = [
//     { name: "eli", age: 13 },
//     { name: "veli", age: 67 },
//     { name: "deli", age: 54 },
// ];

// function yasFerqi (arr){
//     if( arr.length === 0){
//         return [];
//     }

//     let maxYas = arr[0].age;
//     let minYas = arr[0].age;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i].age < minYas){
//             minYas = arr[i].age;
//         }
//         if(arr[i].age > maxYas){
//             maxYas = arr[i].age;
//         }
//     }

//     let ferq = maxYas - minYas;
//     return [maxYas, minYas, ferq];
// }
// console.log(yasFerqi(istirakcilar))