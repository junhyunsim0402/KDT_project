/*
[JS 실습 5] 편의점 "나만의 냉장고" 결제 시스템
편의점에서 물건을 구매할 때, 재고가 있는지 확인하고 **통신사 할인(10%)**을 적용하여 최종 결제 금액을 출력하는 프로그램을 만드세요.

1. 사전 제공 데이터 (수정 금지)
JavaScript

// 상품 정보
let itemList = ['삼각김밥', '바나나우유', '컵라면', '샌드위치'];
let priceList = [1200, 1500, 1800, 2500];
let stockList = [3, 0, 5, 2]; // 현재 매장의 재고 수량
2. 요구 사항
입력: prompt를 통해 구매하고 싶은 상품명을 입력받습니다.

재고 확인:

상품이 리스트에 없으면: "존재하지 않는 상품입니다." 출력.

재고(stockList)가 0이면: "죄송합니다. 해당 상품은 품절되었습니다." 출력.

할인 적용:

재고가 있다면, 할인 받으시겠습니까?(예or아니요)로 사용자가 입력

할인을 적용하면 판매가에서 **10%**를 깎아줍니다.

반복 구매 (도전 과제):

while문을 사용하여 사용자가 **"그만"**이라고 입력할 때까지 계속 상품을 물어보고 결제 금액을 누적하세요.

출력:

결제 성공 시: "[상품명] 결제 완료. 남은 재고: 0개"

"그만" 입력 시: "--- 총 결제 금액: 0,000원 ---"
*/
let itemList = ['삼각김밥', '바나나우유', '컵라면', '샌드위치'];
let priceList = [1200, 1500, 1800, 2500];
let stockList = [3, 0, 5, 2];
let result=0;
let sale="";
while (true) {
    let user = (prompt("구매하고 싶은 상품명"));
    let index = itemList.indexOf(user);
    if(user=="그만"){
        console.log(`총 결제 금액: ${result}원`);
        break;
    }
    if (index !== -1) {
        if(stockList[index]==0){
            console.log("죄송합니다. 해당 상품은 품절되었습니다.");
        }else{
            sale=(prompt("할인 받으시겠습니까?(예or아니요)"));
        }
        if (sale=="예"){
            result+=priceList[index]*0.9;
            stockList[index]-=1;
        }else if(sale=="아니요"){
            reuslt+=priceList[index];
            stockList[index]-=1;
        }else{
            console.log("잘못된 입력입니다");
        }
    } else {
        console.log("존재하지 않는 상품입니다");
    }
}