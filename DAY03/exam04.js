/*문제1
let korean=prompt()
let english=prompt()
let math=prompt()
let ko=Number(korean)
let eg=Number(english)
let ma=Number(math)
let sum1=ko+eg+ma;
let avg1=sum1/3;
console.log(sum1)
console.log(avg1)
*/
/*문제2
let input1=prompt()
result=Number(input1)*Number(input1)*3.14;
console.log(result);
*/
/*문제3
let input1=prompt()
let input2=prompt()
result=(Number(input1)/Number(input2)*100);
console.log(result);
*/
/*문제4
let input1=prompt()
result1=Number(input1)%2==1;
console.log(`${result1}`)
*/
/*문제5
let num=Number(prompt());
let result2=num%7==0;
console.log(`${result2}`);
*/
// 문제6
// 1.삼항연산자 , 조건 ? 참 : 거짓
// ->조건:조건에는 논리(true.false) 또는 논리를 반환하는 연산
// ->참:true대신에 반환할 자료, 예)true대신 합격
// ->거지 :false대신에 반환할 자료, 예)false대신 불합격
// =if 조건문 비슷하지만 다르다.리액드 환경에서 주로 사용됨.(간단한 조건식에서 사용)
// =중첩 :조건?참1
// let id=prompt();
// let password=prompt();
// if (id==`admin`&& password==`1234`){
//     console.log("true");
// }
// else{
//     console.log("false")
// }
/* 문제7
let num=Number(prompt());
if (num%2==0 && num%7==0){
    console.log("true")
}
else{
    console.log("false")
}*/
// 8번 문제
// let num1=Number(prompt("입력1"));
// let num2=Number(prompt("입력2"));
// let sum=num1+num2;
// let result=sum>=150 ? `합격` : `불합격`;
// // html에 문자열 출력
// document.write(`<h3>실습8번 결과:${result}</h3>`);   //출력1
// document.querySelector('h3').innerHTML=`실습8번 결과:${result}`; //출력2(이걸 더 권장)

//9번 문제
// let name1=prompt();
// let name2=prompt();
// name1+=name1==`유재석` ? `(방장)` : ``; //name1이 유재석이면 (방장)을 붙이고 아니면 공백
// name2+=name2==`유재석` ? `(방장)` : ``;
// let result2=`<li>${name1}</li><li>${name2}</li>`;
// // 연산은 인수에 따라 결과를 항상 다르게 변환된다.
// document.querySelector(`ol`).innerHTML=`9번 문제 결과:${result2}`;