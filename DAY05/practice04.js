// 문제1
// let fruitList=[`사과`,`바나나`];
// let user=prompt();
// if (user==fruitList[0] || user==fruitList[1]){
//     console.log("이미 존재하는 과일입니다");
// }else{
//     fruitList.push(user)
//     console.log(`${fruitList}`);
// }

// 문제2
// let num=prompt();
// let numlist=[...num];
// if (numlist[6]==`1` || 6){
//     console.log(`blue`);
// }else if (numlist[6]==`2` || `4`){
//     console.log(`red`);
// }else{
//     console.log(`당신은 사람이 아닙니다`);
// }

// 문제3
// let num=Number(prompt());
// if (num>=50000){
//     console.log(`${num*0.9}`);
// }else if (num>=30000){
//     console.log(`${num*0.95}`);
// }else if (num>=10000){
//     console.log(`${num*0.99}`);
// }else{
//     console.log(`${num}`);
// }

// 문제4
// let month=Number(prompt("1~12"));
// if (3<=month && month<=5){
//     console.log("봄");
// }else if (6<=month && month<=8){
//     console.log("여름");
// }else if (9<=month && month<=11){
//     console.log("가을");
// }else if (month==12 || month==1 || month==2){
//     console.log("겨울");
// }else{
//     console.log("잘못된 월입니다");
// }

// 문제5
// let num1=Number(prompt("같은 수 x"));
// let num2=Number(prompt("같은 수 x"));
// let num3=Number(prompt("같은 수 x"));
// if (num1>num2){
//     if (num1>num3){
//         console.log(num1);
//     }else {
//         console.log(num3);
//     }
// }else if (num2>num3){
//     console.log(num2);
// }else{
//     console.log(num3);
// }

// 문제6
// let year=Number(prompt("연도 입력"));
// if ((year%4==0 && year%100!=0)||year%400==0){
//     console.log(`${year}년은 윤년입니다`);
// }else{
//     console.log(`${year}년은 평년입니다`);
// }

// 문제7
// let num1=Number(prompt());
// let num2=Number(prompt());
// let num3=Number(prompt());
// let numlist=[num1,num2,num3];
// numlist.sort((a,b)=>a-b);
// console.log(`${numlist}`);
//          or
// if( num1>num2){let temp=num1; num1=num2; num2=temp;}
// if( num1>num3){let temp=num1; num1=num3; num3=temp;}
// if( num2>num3){let temp=num2; num2=num3; num3=temp;}
// console.log(`${num1},${num2},${num3}`);

// 문제8
// let num1=Number(prompt("0(가위) 1(바위) 2(보)"));
// let num2=Number(prompt("0(가위) 1(바위) 2(보)"));
// if (num1==0 && num2==2 || num1==1 && num2==0 || num1==2 && num2==1){
//     console.log("플레이어1 승리");
// }else if (num1==2 && num2==0 || num1==0 && num2==1 || num1==1 && num2==2){
//     console.log("플레이어2 승리");
// }else{
//     console.log("무승부");
// }

// 문제9
// let carArray=[`250어7142`,`142가7415`,`888호8888`];
// let locationArray=[`A1`,`B3`,`C2`];
// let user=prompt();
// let result=locationArray[carArray.indexOf(user)];
// if (result){
//     console.log(result);
// }else{
//     console.log("차량이 존재하지 않습니다");
// }

// 문제10
// let courseList=[`수학`,`영어`,`과학`,`국어`];
// let user=prompt();
// let result=courseList.indexOf(user);
// if (result!==-1){
//     courseList.splice(result,1);
//     console.log(`${courseList}`);
// }else{
//     console.log("해당 과목은 신청 목록에 없습니다");
// }