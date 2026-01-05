// [1] 반복
// 초기값:1 조건문:5 증감식:+1
// for (let 반복변수=1;반복변수<=5; 반복변수=반복변수+1){
//     console.log(반복변수);
// }

// [2] 1부터 5까지 총 합계
// let sum=0;
// for (let i=1;i<=5;i+=1){
//     sum+=i;
// }
// console.log(sum);

//[3] 구구단 2단 전체
// for (let 곱=1;곱<=9;곱++){
//     console.log(`2*${곱}=${2*곱}`);
// }

// [4]배열과 반복문의 관계:배열내 저장된 자료들은 인덱스가 존재함 
// *인덱스란? 배열내에 저장된 자료들의 순서번호 *0번부터 시작
let ary=[];
let a=prompt("첫번째 값:");
let b=prompt("두번째 값:");
let c=prompt("세번째 값:");
ary.push(a);
ary.push(b);
ary.push(c);
for (let i=0; i<ary.length; i++){
    console.log(ary[i]);
}