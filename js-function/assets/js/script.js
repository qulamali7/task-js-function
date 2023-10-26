// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
// function findNumber(...params) {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]===45) {
//             console.log(i);
//         }
//     }
// }
// findNumber(1,2,3,45)

//2.Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
// function countSameNum(value,...params) {
//     count = 0
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] === value) {
//             count++
//         }
//     }
//     return count
// }
// console.log(countSameNum(3,5,6,5,6,5,6,5,6,3,3,3));

// 3. arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.
// function num(...params) {
//     sum = 0
//     high = [0]
//     small = params[0]
//     for (let i = 0; i < params.length; i++) {
//         sum += params[i]
//         if (high < params[i]) {
//             high = params[i]
//         }
//         if (small > params[i]) {
//             small = params[i]
//         }
//     }
//     return sum-(high+small)
// }
// console.log(num(1, 2, 3, 5, 6))

// 4.Verilmis n ededinin son reqemini onun evveline getirerek yeni bir eded duzelden function.
// function change(number) {
//     if (number < 100) {
//         a = number % 10
//         b = ((number - number % 10) / 10) % 10
//         console.log(b);
//         console.log(a);
//         console.log(a,b);
//     }
//     else if (100 <= number <= 999) {
//         c = number % 10
//         b = ((number - number % 10) / 10) % 10
//         a = ((number - number % 100) / 100) % 10
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(c,a,b);
//     }
// }
// change(574)

