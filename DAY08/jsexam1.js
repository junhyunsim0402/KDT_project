// 문제1
// let numbers=[23,5,67,12,88,34];
// let result=0;
// for (let i=0;i<numbers.length;i++){
//     if(numbers[i]>numbers[i+1]){
//         numbers[i+1]=numbers[i];
//     }else{
//         continue;
//     }
//     result=numbers[numbers.length-1];
// }
// console.log(result);
// or
// let sortnum=numbers.sort();
// result=sortnum[sortnum.length-1];
// console.log(result);


// 문제2
// let k=`*`;
// let c="\n";
// let reuslt="";
// for (let i=1;i<=5;i++){
//     for(let j=5;j-i>=0;j--){
//         reuslt+=k;
//     }
//     reuslt+=c;
// }
// console.log(reuslt);

// 문제3 i=이름 j=한글자씩
// let useNames=[`김하준`,`이서아`,`박솔민`,`최도윤`];
// let name="";
// for (let i=0;i<useNames.length;i++){
//     for (let j=0;j<useNames[i].length;j++){
//         name=useNames[i][j];
//         if(name==`솔`){
//             console.log(useNames[i]);
//             break;
//         }
//     }
// }

// 문제4
// let seat=[[`A1`,`A2`,`A3`],[`B1`,`B2`,`B3`],[`C1`,`C2`,`C3`]];
// let result='';
// for (let i=0;i<seat.length;i++){
//     for(let j=0;j<seat[i].length;j++){
//         result=seat[i][j];
//         console.log(result);
//     }
// }

// 문제5
// let numbers=[1,5,2,3,5,1,4,2];
// let result=[];
// for (let i=0;i<numbers.length;i++){
//     if(result.indexOf(numbers[i])==-1){
//         result.push(numbers[i]);
//     }
// }
// console.log(result);

// 문제6
// let Numbers=[5,3,4,1,2];
// Numbers.sort((a,b)=>a-b);
// console.log(Numbers);

//문제7
// let product = [`볼펜`, `노트`, `지우개`];
// let stock = [10, 5, 20];
// let user = prompt("상품:");
// let user2 = Number(prompt("수량:"));
// let index1 = product.indexOf(user);
// if(index1!==-1){
//     if(stock[index1]>=user2){
//         stock[index1]-=user2;
//         console.log(`구매완료! 남은재고:${stock[index1]}개`);
//     }else{
//         console.log(`죄송합니다. 재고가 부족합니다.}`);
//     }
// }else{
//     console.log("존재하지 않는 상품입니다");
// }

/*문제 8: 영화 평점 시각화하기
주어진 영화 이름과 평점 배열을 이용하여, 각 영화의 평점을 별(★)로 시각화하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
영화 이름과 평점은 두 배열의 동일한 인덱스를 사용합니다.
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];
(2). 구현 조건
for 반복문을 사용하여 모든 영화를 순회합니다.
각 영화의 평점(10점 만점)만큼 꽉 찬 별(★)을, 나머지 점수만큼 빈 별(☆)을 출력합니다.
예시: 평점이 8점이면 ★★★★★★★☆☆ (총 10개의 별)
영화 이름과 별점은 HTML에 한 줄씩 표시합니다.
(3). HTML 출력 예시
히든페이스      ★★★★★★★★☆☆
위키드          ★★★★☆☆☆☆☆☆
글래디에이터2   ★★★★★★★☆☆☆
청설            ★★★★★★☆☆☆☆
*/

// let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
// let movieRatings = [8, 4, 7, 6];
// let result="";
// for (let i=0;i<movieNames.length;i++){
//     result+=`<div>${movieNames[i]}:${`★`.repeat(movieRatings[i])}${`☆`.repeat(10-movieRatings[i])}</div>`;
// }
// document.write(result);



/*문제 9: 좌석 예약 상태 표시하기
총 6개의 좌석 상태 정보가 담긴 배열을 이용하여, 좌석 배치도와 상태를 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
좌석의 상태는 '빈좌석' 또는 '예약석'으로 구성됩니다.
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
(2). 구현 조건
for 반복문을 사용하여 6개의 좌석을 모두 출력합니다.
각 좌석은 하나의 <div> 태그로 표시합니다.
좌석 상태에 따라 <div> 태그에 CSS 색상을 다르게 적용합니다.
'빈좌석': color: blue;
'예약석': color: red;
좌석은 2칸씩 3줄 형태로 배치합니다.
(3). 출력 예시 (HTML)
빈좌석 예약석 
예약석 빈좌석
예약석 빈좌석
*/

// let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석'];
// let result="";
// for (let i=0;i<seatStatus.length;i++){
//     if(seatStatus[i]=="빈좌석"){
//         result+=`<span class="blue">${seatStatus[i]} </span>`
//     }else if(seatStatus[i]=="예약석"){
//         result+=`<span class="red">${seatStatus[i]} </span>`
//     }if((i+1)%2==0){
//         result+=`<br>`
//     }
// }
// document.write(result);



/*문제 10: 주차 요금 정산하기
차량별 주차 시간 데이터가 주어졌을 때, 아래의 요금 규정에 따라 각 차량이 지불해야 할 최종 주차 요금을 계산하여 HTML에 출력하는 프로그램을 작성하시오.
(1). 초기 데이터
차량 번호와 주차 시간(분)은 두 배열의 동일한 인덱스를 사용합니다.
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
(2). 요금 규정
기본 요금: 최초 30분까지 1,000원
추가 요금: 30분 초과 시, 매 10분마다 500원씩 추가
일일 최대 요금: 20,000원 (아무리 오래 주차해도 20,000원을 초과할 수 없음)
(3). 구현 조건
for 반복문을 사용하여 모든 차량의 데이터를 순회합니다.
각 차량의 주차 시간에 맞춰 최종 요금을 계산합니다.
계산된 요금이 일일 최대 요금을 초과하면, 최대 요금(20,000원)으로 처리합니다.
HTML에 차량 번호, 주차 시간, 최종 요금을 한 줄씩 출력합니다.
(4). 출력 예시 (HTML)
250어7142: 65분 주차, 최종 요금: 2500원
142가7415: 30분 주차, 최종 요금: 1000원
888호8888: 140분 주차, 최종 요금: 6500원
931나8234: 420분 주차, 최종 요금: 20000원
(힌트)
기본 시간(30분)을 초과한 시간을 계산하고, parseInt() 함수를 사용하여 10분 단위로 버림 처리하면 추가 요금 단위를 쉽게 계산할 수 있습니다.
추가 요금 단위 계산식:parseInt( (총 주차시간 - 30) / 10 )
계산 예시:65분 주차 시 parseInt( (65 - 30) / 10 )는 parseInt(3.5)가 되어 결과는 3이 됩니다. 따라서 추가 요금은 3 * 500원으로 계산됩니다.
*/

// let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
// let usageMinutes = [65, 30, 140, 420];
// let result="";
// for (let i=0;i<carNumbers.length;i++){
//     let money=parseInt((usageMinutes[i]-30)/10);
//     if(usageMinutes[i]<=30){
//         result+=`<div>${carNumbers[i]}: ${usageMinutes[i]}분 주차, 최종 요금: 1000원</div>`;
//     }else if(usageMinutes[i]<=410){
//         result+=`<div>${carNumbers[i]}: ${usageMinutes[i]}분 주차, 최종 요금: ${1000+money*500}원</div>`;
//     }else{
//         result+=`<div>${carNumbers[i]}: ${usageMinutes[i]}분 주차, 최종 요금: 20000원</div>`;
//     }
// }
// document.write(result);