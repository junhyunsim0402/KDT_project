// [1]조건문:조건이 true이면 코드 실행
// vs 삼항 연산자:
// 1.다양한 놀리 할때 가독성 떨어진다
// 2. true와 false (항) 함수호출 또는 변수선언 

// 10>5 ? console.log("참") : console.log("거짓")
if(10>3)console.log("[1-1]참1"); //
if(10>20)console.log("[1-2]참2"); //

// [2]명령어 문장(;)이 2개 이상일때 {} 중괄호 묶어서 사용
if(10>3) {
    console.log("[2-1]참1");console.log("[2-2]참2");
}

// [3] 조건이 참일때 거짓일때, if(조건){} else{} 사용
if (10>3){console.log("[3-1]참1");}
else {console.log("[3-2]거짓2");}

// [4] 조건이 다수일때,if(조건1){} else if(조건2){} else{}
if(10>20){
    console.log("[4-1]참1");
}else if(10>15){
    console.log("[4-2]참2");
}else if(10>10){
    console.log("[4-3]참3");
}else if (10>5){
    console.log("[4-4]참4"); //출력
}else {
    console.log("[4-5]그외(거짓)");
}