//문제1
// let num1=Number(prompt("점수1 입력:"));
// let num2=Number(prompt("점수2 입력:"));
// let sum=num1+num2;
// if (sum>=90){
//     console.log("성공");
// }else{
//     console.log("실패");
// }

//문제2
// let num3=Number(prompt("점수1 입력:"));
// let num4=Number(prompt("점수2 입력:"));
// if (num3>num4){
//     console.log(num3);
// }else if (num3<num4){
//     console.log(num4);
// }else{
//     console.log("같음");
// }

//문제3
// let id=prompt("아이디 입력:");
// let pw=prompt("비밀번호 입력:");
// if (id==`admin`&& pw==`1234`){
//     console.log("로그인 성공");
// }else{
//     console.log("로그인 실패");
// }

//문제4
// let pw=prompt("비밀번호 입력:");
// if (pw.length<8){
//     console.log(`보안 등급:약함 (8자 이상으로 설정해주세요.)`);
// }else if (pw.length<=12){
//     console.log(`보안 등급:보통`);
// }else {
//     console.log(`보안 등급:강함`);
// }

//문제5
// let seaList=[`O`, `X`, `O`];
// let userInput=prompt("0 또는 1 또는 2를 입력:");
// if (userInput==seaList.indexOf(`X`)){
//     console.log("예약 가능");
// }else{
//     console.log("예약 불가");
// }

//문제6
// let sc=Number(prompt("점수 입력:"));
// if (sc>=900){
// 	console.log(`A급 경품`);
// }else if (sc>=700){
//     console.log(`B급 경품`);
// }else if (sc>=500){
//     console.log(`C급 경품`);
// }else {
//     console.log(`참가상`);
// }

//문제7
// let player1=prompt("역할");
// if (player1==`admin`){
//     console.log(`모든 기능에 접근할 수 있습니다`);
// }else if (player1==`editor`){
//     console.log(`콘텐츠 수정 및 생성 기능에 접근할 수 있습니다`);
// }else if (player1==`viewer`){
//     console.log(`콘텐츠 조회만 가능합니다`);
// }else{
//     console.log(`정의되지 않은 역할입니다`);
// }

//문제8
// let age=Number(prompt("나이 입력:"));
// if (age>=65){
//     console.log(`3000원`);
// }else if (age>=20){
//     console.log(`10000원`);
// }else if (age>=8){
//     console.log(`5000원`);
// }else {
//     console.log(`무료`);
// }

//문제9
// let score=Number(prompt("점수 입력:"));
// if (score>=90){
//     console.log(`A`);
// }else if (score>=80){
//     console.log(`B`);
// }else if (score>=70){
//     console.log(`C`);
// }else{
//     console.log(`재시험`);
// }

//문제10
let drinkNames=["콜라", "사이다", "커피"];
let drinkPrices=[1000, 1000, 1500];
let userInput=prompt("0 또는 1 또는 2를 입력:");
if (userInput==0){
    console.log(`선택하신 음료는 ${drinkNames[0]}입니다.가격은 ${drinkPrices[0]}원입니다.`);
}else if (userInput==1){
    console.log(`선택하신 음료는 ${drinkNames[1]}입니다.가격은 ${drinkPrices[1]}원입니다.`);
}else if (userInput==2){
    console.log(`선택하신 음료는 ${drinkNames[2]}입니다.가격은 ${drinkPrices[2]}원입니다.`);
}else{
    console.log("없는 상품입니다.");
}