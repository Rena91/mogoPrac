// 1. reverse a String 

function reverse(str) {
    const len = str.length - 1;
    let res =''
    for(let x =len;x > -1;x--) res += str[x];
    return res;
}
// console.log(reverse("ABCD")); // DCBA

// 2. factorialize 

function factorial(x){
    return x === 0 ? 1 : x * factorial(x-1)
}
// console.log(factorial(6));

function fact2(num) {
        let res = 1;
    for(let i = num ;i > 0; i--){
       res *=  i;
    }
    return res;

}

// console.log(fact2(5));

// 3. palindrome

function palindrome(str) {
    return (str === str.split('').reverse().join('')) ? true : false ;
}

// console.log(palindrome('AAB'));

// 4. Longest word in a string 

const statement = "The quick brown fox jumped over the lazy dog";

function findLongestWord(str){
      let strArray = str.split(' ').sort((a,b) =>a.length - b.length);
    return strArray[strArray.length-1]
}

// console.log(findLongestWord(statement));

// Title case 

 const title = "I'm a little tea pot";

 function titleCase(str){
     let strArray = str.split(' ').map(x => x[0].toLocaleUpperCase()+x.slice(1))
     return strArray.join(' ')
 }
 console.log(titleCase(title));
 