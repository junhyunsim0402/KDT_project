// [1] 서로 다른 JS 파일에서 변수/함수 사용 가능 여부
// 하나의 HTML에서 여러개 JS파일 호출했을때
//     <script src="test1.js"></script>
// <script src="exam1.js"></script>
console.log(var1);  //다른 test1.js에서 선언된 변수 사용
func1(); //다른 exam1.js에서 선언된 함수 사용

// [2] JS는 HTML에 종속된 관계라서 F5(새로고침) 초기화(변수 재생성)
// 백엔드 없이 영구저장(자동로그인,검색기록,비회원제장바구니 등)
// =>웹스토리지(브라우저 저장소 제공):F12(어플리케이션/응용프로그램)탭->왼쪽 사이드바 메뉴
// [로컬 저장소]/[세션 저장소]

// 종류:
//  1]sessionStorage:세션 저장소를 관리하는 객체
//          *서로 다른 HTML간의 자료 공유안함*
//          *모든 브라우저가 종료되면 자료 자동 삭제*
//  2]localStorage: 로컬 저장소를 관리하는 객체(기능/데이터)를 가짐
//          *서로 다른 HTML간의 자료 공유한다* <도메인(HTTP주소) 동일할때만>
//          *모든 브라우저가 종료 되더라도 유지*<사용자가 직접 삭제>
// 객체란?서로다른 종류/타입(문자/숫자/변수/배열/함수)

// 주요 기능/함수
//  1].setItem(`key`,value);        :세션/로컬 저장소에 속성/자료 추가
//  2].setItem(`key`);              :세션/로컬 저장소에 `key`해당 자료 호출
//  3].removeItem(`key`);           :세션/로컬 저장소에 `key`해당 자료 삭제
//    .clear();                     :모든 키 삭제
// 
//  JSON변환:세션/러칼 저장소는 문자열 저장이 가능하다
//      1]Json.stingify():JS객체->JSON문자열
//      2]JSON.parse():JSON문자열->JS객체
// /
console.log(sessionStorage);
console.log(localStorage);

// 저장
sessionStorage.setItem("name","홍길동");
localStorage.setItem("age",20);     //F12->어플리케이션 탭->확인가능

// 호출
console.log(sessionStorage.getItem("name"));    //세션 저장소에 저장된 `name`키 갖는 값 호출
console.log(localStorage.getItem("age"));       //로컬 저장소에 저장된 `age`키 갖는 값 호출

// 삭제
sessionStorage.removeItem(`name`);          //세션 저장소에 `name`키 삭제
localStorage.removeItem(`age`);             //로컬 저장소에 `age`키 삭제

// 활용:복잡한 (샘플) 데이터 
//  *세션/로컬 저장소는 문자열만 저장 가능하다.배열/객체-->
//       문자열로 변환(***JSON:자바스크립트 객체 기반의 문자열 형식***)*
sessionStorage.setItem(`user`,JSON.stringify([{name:"유재석",age:40},{name:"김종국",age:50}]));
console.log(JSON.parse(sessionStorage.getItem(`user`)));
