//제미나이한테 받아온 문제
//요구 사항 및 요구 규칙
//입력: prompt를 통해 차량 번호를 입력받습니다.
//시간 계산:
// 입차 시간과 출차 시간의 차이를 분(minute) 단위로 직접 계산해야 합니다.

// 요금 규칙:
// 기본 요금: 최초 30분까지 2,000원 (30분 이내면 무조건 2,000원)
// 추가 요금: 30분 초과 시, 10분당 500원 추가
// 올림 적용: 1분이라도 초과하면 10분 단위 요금을 받습니다. (예: 31분 이용 시 2,500원)
// 일일 최대 요금: 총합이 30,000원을 넘을 수 없습니다.

// 할인 적용:
// carTypeList가 **1(경차)**인 차량은 계산된 최종 요금에서 50% 할인을 적용합니다.

// 출력 예시:
// 존재하지 않는 차량: "등록되지 않은 차량입니다."
// 정상 계산: "[78라5678] 차량의 주차 시간은 160분이며, 요금은 4,250원(경차 할인 적용)입니다."

// 차량 번호
let carNumberList = ['12가3456', '34나7890', '56다1234', '78라5678'];
// 차종 (0: 일반, 1: 경차) - 경차는 최종 요금에서 50% 할인
let carTypeList = [0, 1, 0, 1];
// 입차 시간 (단위: 시, 분 - 24시제)
let entryTime = ['09:00', '10:30', '12:00', '18:20'];
// 출차 시간 (단위: 시, 분 - 24시제)
let exitTime = ['10:15', '14:50', '13:10', '21:00'];

//시작
let user = (prompt("차량번호"));
let index = carNumberList.indexOf(user);
let start = 0;
let end = 0;
if (index !== -1) {
    start = entryTime[index].split(':');
    end = exitTime[index].split(':');
} else {
    console.log("등록되지 않은 차량입니다.");
}
let resultTime = (Number(end[0]) * 60 + Number(end[1])) - (Number(start[0]) * 60 + Number(start[1]));
let time = parseInt((resultTime - 30) / 10);
let re = 0;
if (resultTime % 10 > 0) {
    time += 1;
} else {
    time += 0;
}
if (resultTime <= 30 && resultTime >= 0) {
    re = 2000;
} else if (resultTime <= 590) {
    re += 2000 + time * 500;
} else if (index!==-1) {
    re = 30000;
}
if (carTypeList[index] == 1) {
    re *= 0.5;
} else {
    re += 0;
}
// 0이 나오면 차량 번호가 틀린것이고 이를 고치기 위해선 if(index!==-1)안에 
// 조건문들을 넣어야함
console.log(re);