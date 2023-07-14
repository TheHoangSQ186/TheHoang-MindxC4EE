/* 1. Viết chương trình JavaScript để tính tổng của hai số nguyên đã cho và in kết quả ra màn hình. */

let a = 13
let b = 12
sumAB = a+b 
console.log(sumAB);

/* 2. Viết chương trình JavaScript để tính chu vi 
của một hình tròn với bán kính đã cho và in kết quả ra màn hình */
let r = 5
let pi = 3.14
circlePerimeter = r*pi
console.log("Chu vi hinh tron la: " + circlePerimeter)

/* 3. Viết chương trình JavaScript để kiểm tra xem một số 
đã cho có phải là số chẵn hay số lẻ không và in kết quả ra màn hình. */
let c = 3
if (c%2 == 0) { console.log(c + " la so chan")}
else {console.log(c + " la so le")}

/* 4. Viết chương trình JavaScript để tạo ra một chuỗi mới từ hai chuỗi 
đã cho bằng cách nối chúng lại với nhau và in kết quả ra màn hình. */
let stringSubject = "We don't talk anymore "
let stringObject = "like we used to do!"
console.log(stringSubject + stringObject)

/* 5. Viết chương trình JavaScript để kiểm tra xem một chuỗi 
đã cho có chứa một từ hay không và in kết quả ra màn hình. */
const mySentence = "You kept me like a secret but I kept you like an oath!"
const theWord = "secret"

if (mySentence.includes(theWord)) 
    {console.log("Chuoi cua ban co su dung tu " + theWord)}
else {console.log("Chuoi cua ban khong su dung tu " + theWord)}

/* 6. Viết chương trình JavaScript để kiểm tra xem một chuỗi đã cho có phải là chuỗi 
rỗng hay không và in kết quả ra màn hình. */
if (mySentence === null) 
    {console.log("Chuoi da cho la chuoi rong")}
else {console.log("Chuoi khong rong")}

/* Viết một chương trình JavaScript để kiểm tra xem một số đã 
cho có phải là số dương hay số âm không. */
let d = 5
if (d < 0)
    {console.log(d + " la so am")}
else if (d > 0)
    {console.log(d + " la so duong")}
else {console.log(d + "khong am cung khong duong")}

/* Viết một chương trình JavaScript để tính tổng, hiệu, tích, 
thương của hai số đã cho. */
let x = 1996
let y = 1994
sumXy = x + y
subtractXy = x - y 
multiplyXy = x*y
divideXy = x/y 
console.log("Tong 2 so la: " + sumXy)
console.log("Hieu so la: " + subtractXy)
console.log("Tich cua 2 so la: " + multiplyXy)
console.log("Thuong cua 2 so la: " + divideXy)