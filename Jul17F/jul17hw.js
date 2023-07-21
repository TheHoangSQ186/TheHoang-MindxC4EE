// Câu 1
const scoreArr = [
    [{name: "Hoàng", score: 2}, {name: "Long", score: 4}],
    [{name: "Tú", score: 100}, {name: "Linh", score: 10}],
    [{name: "Ngọc", score: 1}, {name: "Long Lê", score: 9}]
   ];

const flattenedArr = scoreArr.flat();

flattenedArr.sort((a,b) => {
       if(a.score > b.score) return 1;
       if(a.score < b.score) return -1;
       return 0;
   });
   
   console.log(flattenedArr);

   /* Nguồn tham khảo: 
   Aray.prototypr.flat
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

   Array sort
   https://www.w3schools.com/js/js_array_sort.asp */

