// 문제 1
// let accountNuberList=[`111-222`,`333-444`,`555-666`];
// let balanceList=[50000,120000,30000];
// let user=prompt("계좌번호 입력:");
// let money=Number(prompt("출금 금액 입력:"));
// let result=accountNuberList.indexOf(user);
// if (result!==-1){
//     if(money<10000){
//         console.log("출금 금액이 너무 적습니다");
//     }else if(money%10000){
//         console.log("출금 단위 오류입니다.");
//     }else if(money+1200>balanceList[result]){
//         console.log("잔액이 부족합니다");
//     }else{
//         console.log(`출금완료! 잔액:${balanceList[result]-money-1200}}`)
//     }
// }else{
//     console.log("존재하지 않는 계좌입니다");
// }


//문제 2
// let carNumberList=[`12가3456`,`34나7890`,`56다1234`];
// let useTimeList=[45,130,320];
// let k=prompt("차량 번호를 입력하세요");
// let result=carNumberList.indexOf(k);
// let usemin=parseInt((useTimeList[result]-60)/30);
// if ((useTimeList[result]-60)%30>0){
//     usemin+=1;
// }else{
//     usemin+=0;
// }
// let re=0
// if (result!==-1){
//     if (useTimeList[result]<=0){
//         console.log("잘못된 사용 시간입니다.");
//     }else if (useTimeList[result]<=60){
//         re=1000;
//         console.log(re);
//     }else if(useTimeList[result]<=600){
//         re=1000+500*usemin;
//         console.log(re);
//     }else{
//         re=10000;
//         console.log(re);
//     }
// }else{
//     console.log("존재하지 않는 차량입니다");
// }