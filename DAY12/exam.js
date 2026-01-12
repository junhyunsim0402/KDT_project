// [1] 함수 : 함(상자/공간/블럭) 수(숫자/코드/명령어)
// 누군가가 상자에 미리 넣어둔 숫자/코드
// 왜? -> 한번 넣어둔 숫자/코드를 재사용 예)수학(공식)/라이브러리/API

// [2] 함수 만들기/정의
function 내가만들함수명(){
    console.log("내가만든함수");
}

// [3] 함수 호출/사용하기
// 내가만든함수명();

//[4] 함수 종류:1. 내가만든 함수 function 2.남이만든함수 console.log() alert() prompt() 등

// [5] 함수 예
function 믹서기함수(과일){
    let 주스=과일+"주스";
    return 주스; //처리된 결과를 반환 선택!
} // 매개변수는 함수가 종료될 때 사라짐. <지역변수 특징>
let cup=믹서기함수("사과"); //믹서기함수에 "사과"라는 문자열을 전달했다. 인자값/인수 --중매/연결 -->매개변수
// 참고:"사과"이면 자료이고 사과이면 변수/함수명(키워드)
// 믹서기 함수가 처리한 결과를 컴 이라는 변수에 답았다
let data="딸기";
let cup2=믹서기함수(data);
console.log(cup2);


// [6] 매개변수 X , 반환X,
function func1(){console.log("func1 exe");}
func1();

// [7] 매개변수 O , 반환X,대표적으로 console.log()  생활:폐핸드폰반납기(폐핸드폰을 넣으면 버려지는 느낌)
function func2(x,y){console.log("func2 exe");}
func2(3,5);

// [8] 매개변수O,반환O,대표적으로 prompt();         생활:자판기(돈->음료)
function func3(x,y){console.log("func3 exe");return x+y;}
let result=func3(3,5);

// [9] 매개변수X, 반환O,
function func4(){console.log("func4 exe");return 100;}
let result2=func4();

// [10] 지역변수란?특정한 if/for/함수 {}안에서 선언된 (매개)변수는 {}밖에서 호출/사용 안된다
let 전역변수="대한민국";
if (true){
    let 지역변수1="경기도";   
    console.log(지역변수1);//여기는 가능
    for (let i=0;i<1;i++){
        let 지역변수2="안양시";
        console.log(지역변수1); //ok
        console.log(지역변수2); //ok
        console.log(전역변수); //ok
    }//안양시 끝
    // console.log(지역변수2); //오류
}//경기도 끝
// console.log(지역변수); //오류 남 (지역변수:is not defined)

function func5(지역변수3){ //즉] 매개변수 또한 지역변수의 특징을 갖는다! 장점:함수 호출/사용 시 에만 메모리(저장소)사용한다.
    let 지역변수4="수원시";
}
func5("안산시");

// [11] 함수 호출/사용 하는 방법
//  (1) js에서 호출:함수명(값);
alert("JS에서 실행");

// (2) html에서 호출:<마크업명 이벤트속성명="함수명();/>
// onclick:해당 마크업을 클랙했을때 (이벤트/JS) 발생
// <button onclick="alert("HTML에서 실행")>버튼</button>