//문제1
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//문제2
// let fruits=[`사과`,`바나나`,`포도`,`딸기`];
// for (let i=0;i<=fruits.length;i++){
//     console.log(fruits[i]);
// }

//문제3
// let numbers=[1,2,3,4,5];
// for (let i=numbers.length;i>=0;i--){
//     console.log(numbers[i]);
// }

//문제4
// sum=0
// for (let i=1;i<=50;i++){
//     sum+=i;
// }
// console.log(sum);

//문제5
// for(let i=1;i<=20;i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }

//문제6
// let scores=[85,92,78,65,95];
// sum=0;
// for (let i=0; i<scores.length;i++){
//     sum+=scores[i];
// }
// console.log(sum,sum/scores.length);

//문제7
// let scores=[77,82,100,54,96];
// for (let i=0;i<scores.length;i++){
    
//     console.log(`찾기용`+scores[i]);
//     if(scores[i]==100){
//         console.log(`만점자를 찾음`);
//         break;
//     }
// }

//문제8
// let scores=[90,45,72,88,59,100];
// for (let i=0;i<scores.length;i++){
//     if (scores[i]<60){
//         continue;
//     }
//     else{
//         console.log(scores[i]);
//     }
// }

//문제9
// let bloodTypes=[`A`,`B`,`O`,`AB`,`A`,`B`,`A`];
// let count=0;
// for (let i=0; i<bloodTypes.length;i++){
//     if(bloodTypes[i]==`A`){
//         count+=1
//     }
// }
// console.log(count);

//문제10
// let nameArray=[`유재석`,`강호동`,`신동엽`];
// let scores=[92,86,72];
// let sc="";
// for (let i=0;i<scores.length;i++){
//     let scr=parseInt(scores[i]/10);
//     sc+=`<div>${nameArray[i]}:`;
//     sc+=`●`.repeat(scr);
//     sc += `○`.repeat(10-scr);
//     sc+=`</div><br>`;
// }
// document.getElementById('display').innerHTML = sc;

// or

// let html=``;
// for (let index=0;index<nameArray.length;index++){
//     html+=nameArray[index];
//     let b=parseInt(scores[index]/10);
//     for (let i=0;i<=10;i++){
//         if(i<=b){
//             html+=`●`;
//         }else{
//             html+=`○`;
//         }
//     }
//     html+=`<br>`;
// }
// document.write(html);