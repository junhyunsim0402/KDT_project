/*
[JS 실습 6] 편의점 인기 상품 진열대 관리 프로그램

1. 사전 데이터 (수정 금지)
   - let displayStatus = ['정상', '품절', '정상', '정상', '품절', '정상'];
   - let productNames = ['참치마요', '매콤제육', '스팸계란', '전주비빔', '치즈불고기', '돈까스'];

2. 요구 사항
   (1) 배열 탐색 및 중단 (break 활용)
       - productNames 배열을 순회하며 이름에 '비빔'이 포함된 첫 번째 상품 찾기
       - 찾은 즉시 반복문 종료(break)
       - 힌트: 문자열.indexOf('비빔') !== -1 이용

   (2) 문자열 반복 (repeat 활용)
       - 찾은 상품명 앞에 별표(*) 3개 붙이기 (예: ***전주비빔)
       - 콘솔에 "찾은 상품: ***상품명" 출력

   (3) HTML/CSS 동적 생성 및 화면 출력
       - displayStatus 배열을 for문으로 순회하며 <div> 태그 생성
       - '정상' 상품: 글자색 blue
       - '품절' 상품: 글자색 red

3. 출력 예시
   - 화면: [정상] [품절] (2개씩 줄바꿈)
   - 콘솔: 찾은 상품: ***전주비빔

4. 코딩중 너무 다른 배열안에 인덱스 값이 아까워서 prompt함수도 넣음
*/

// --- 아래에 코드를 작성하세요 ---
let displayStatus = ['정상', '품절', '정상', '정상', '품절', '정상'];
let productNames = ['참치마요', '매콤제육', '스팸계란', '전주비빔', '치즈불고기', '돈까스'];
let user=prompt("상품명(키워드) ex) 비빔.제육,치즈 등");
let bibim="";
let result="";
// for (let i=0;i<displayStatus.length;i++){
// 	for(let j=0;j<productNames.length;j++){
//         if(productNames[i][j]==`비`&&productNames[i][j+1]==`빔`){
//             console.log(productNames[i]);
//             break;
//         }
// 	}
// }        이렇게 해도되지만 힌트를 이용하면 편하다는걸 지금 깨달음 (내가 만든4번 조건때매 탈락) 
for(let i=0;i<productNames.length;i++){
    if(productNames[i].indexOf(user)!==-1){
        bibim=`${`*`.repeat(3)}${productNames[i]}`;
        if(displayStatus[i]=="정상"){
            result+=`<span id="정상">${bibim}:${displayStatus[i]}</span><br>`
        }else if(displayStatus[i]=="품절"){
            result+=`<span id="품절">${bibim}:${displayStatus[i]}</span><br>`
        }
        break;
    }
}
console.log(`찾은 상품: ${bibim}`);
document.write(result);