//Bai Tap 1
let yourAge = 17 
if (yourAge >= 18) {console.log("Ban du tuoi lai xe")
} 
else {console.log("Ban khong du tuoi lai xe. Lai xe la bi bat do.")}


//Bai 2
let yourNumber = 5
if (yourNumber > 0) {console.log("So cua ban la so duong")}
else if (yourNumber <0) {console.log("So cua ban la so am")}
else {console.log("Ban nhap so 0, tai sao ban nhap so 0 lam chi? Quau nha!")}

//Bai 3
let checkNumber = 20
if (checkNumber%3 == 0 && checkNumber%5 == 0) {console.log(checkNumber + " chia het cho 3 va 5")}
else {console.log(checkNumber + " khong chia het cho 3 va 5 ")}

//Bai 4 Kiem tra ngay trong tuan 
let checkDay = 3
switch (checkDay) {
    case 1:
        checkDay = "Chu Nhat";
        break;
    case 2:
        checkDay = "Thu 2"
        break;
    case 3:
        checkDay = "Thu 3";
        break;
    case 4:
        checkDay = "Thu 4";
        break;
    case 5:
        checkDay = "Thu 5";
        break;
    case 6:
        checkDay = "Thu 6";
        break;
    case 7: 
        checkDay = "Thu 7";
}
console.log(checkDay); 

//Bai 5
let n = 6
let sum = 0
for (let i = 0; i <= n; i++) {
	sum += i
}
console.log(sum)

// Bai 6
for (let i = 0; i <10 ; i++) {
    if ( i == 5) { 
          continue;
      }
      console.log(i); 
  }

//Bai 7
let resultDiv3 = 0
for (let i = 1; i <=20; i++) {
    if (i%3===0) {resultDiv3 = i;
    break;}
} console.log("Bai 7: " + resultDiv3);


/* Bai 8:
Vòng lặp thực hiện hiện 100 lần từ i = 0 cho đến  i= 99 vì i <100 là <statement2> - điều kiện 
để vòng lặp kết thúc */

/*Bai 9
Trong vòng lặp while, điều kiện sẽ được thực hiện trước block of code. Nếu điều kiện được 
thoả mãn thì block mới được chạy. Nếu ĐK không thoả mãn / True thì block không được chạy.

Vòng lắp do while thì block được thực hiện trước rồi mới xét điều kiện sau. 
Do while sẽ chạy block ít nhất 1 lần còn while nếu đk sai thì không chạy từ đầu. */