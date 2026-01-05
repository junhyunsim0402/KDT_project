//[1]for 문 중첩:for문 2개 이상
//(1)2단 구구단
//방법1
// for (let i=1;i<=9;i++){
//     console.log(`2*${i}=${2*i}`);
// }

//방법2
// for (let i=2;i<=9;i++){
//     for (let j=0;j<=9;j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }

// 별찍기
// *
// **
// ***
// ****
// *****
// 찾은패턴1:줄은 1부터 5까지 1씩 증가
// *은 1부터 line까지 1씩 증가
// let ouput="";
// for (let line=1;line<=5;line++){
//     for (let star=1;star<=line;star++){
//         ouput+=`*`
//     }
//     ouput+=`\n`;
// }
// console.log(ouput);

//별찍기 연습(혼자 연습함)
//      *   별 개수:줄*2-1
//     ***
//    *****
//   *******
//  *********
// ***********
//*************/
// let out=""
// for (let i=1;i<=7;i++){
//     for(let j=1;j<=7-i;j++){
//         out+=` `
//     }
//     for(let j=1;j<=i*2-1;j++){
//         out+=`*`
//     }
//     out+=`\n`;
// }
// console.log(out);

//[3] 반복문과 자주 사용되는 키워드
//(1) continue
// for (let i=1;i<=5;i++){
//     if (i==3){
//         continue;
//     }
//     console.log(i);
// }

// (2) break
// for (let i=1;i<=5;i++){
//     if (i==3){
//         break;
//     }
//     console.log(i);
// }

// [4] 무한루프:종료가 없는 계속되는 반복문
// 방법1:for ( ; ;){console.log(1);}
// 방법2:while(true){console.log(1);}
// 활용: for( ; ; ){let a=prompt("무한 입력");}
// 활용: for( ; ; ){let b=prompt("무한 입력");if(b==`x`)break;}
