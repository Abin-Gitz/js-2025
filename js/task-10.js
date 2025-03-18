// // // let removedup = () => {
// // //   let nums = [1, 2, 1, 3, 5];
// // //   let res = [];
// // //   for (let i = 0; i < nums.length; i++) {
// // //     for (let j = 1; j < nums.length; j++) {
// // //       if (nums[i] != nums[j]) {
// // //         res.push(nums[i]);
// // //       }
// // //     }
// // //   }
// // //   console.log(res);
// // // };

// // // removedup();

// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let found = false;
//         for (let j = 0; j < uniqueArr.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             uniqueArr[uniqueArr.length] = arr[i];
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicates([1,2,1,3,4,5]))

// // function isPrime(n) {
// //     if (n < 2) return false;
// //     for (let i = 2; i * i <= n; i++) {
// //         if (n % i === 0) return false;
// //     }
// //     return true;
// // }
// // console.log(isPrime(11))

// // function mostFrequentChar(str) {
// //     let freq = {};
// //     let maxChar = '';
// //     let maxCount = 0;
    
// //     for (let i = 0; i < str.length; i++) {
// //         let char = str[i];
// //         if (!freq[char]) {
// //             freq[char] = 1;
// //         } else {
// //             freq[char]++;
// //         }
        
// //         if (freq[char] > maxCount) {
// //             maxCount = freq[char];
// //             maxChar = char;
// //         }
// //     }
// //     return maxChar;
// // }
// // console.log(mostFrequentChar('Hello Wolrd'))

// function wordWithMostVowels(sentence) {
//     let words = [];
//     let word = "";
    
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== ' ') {
//             word += sentence[i];
//         } else {
//             words[words.length] = word;
//             word = "";
//         }
//     }
//     words[words.length] = word;
    
//     let vowels = "aeiouAEIOU";
//     let maxVowelCount = 0;
//     let maxVowelWord = "";
    
//     for (let i = 0; i < words.length; i++) {
//         let count = 0;
//         for (let j = 0; j < words[i].length; j++) {
//             for (let k = 0; k < vowels.length; k++) {
//                 if (words[i][j] === vowels[k]) {
//                     count++;
//                 }
//             }
//         }
//         if (count > maxVowelCount) {
//             maxVowelCount = count;
//             maxVowelWord = words[i];
//         }
//     }
//     return maxVowelWord;
// }
// console.log(wordWithMostVowels('Heyae Abin'))