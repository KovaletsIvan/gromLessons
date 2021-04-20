const n = 1000;
let sum = 0;
let num;
for (let i = 0; i <= n; i += 1) {
  sum += i;
}
 num = sum/1234 > sum % 1234 ? true : false;
console.log(num);
