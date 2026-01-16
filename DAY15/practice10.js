let memberList = [
    { "no": 1, "id": "qwe", "pw": 1234 }, { "no": 2, "id": "asd", "pw": 4567 }];

function signup() {
    const id = document.querySelector(`.signId`);
    const pw = document.querySelector(`.signPw`);
    const Id = id.value;
    const Pw = pw.value;    //입력받은 값을 저장할 곳
    // 만약에 회원목록에서 1개이상이면 마지막 번호에+1 아니면1
    let no = memberList.length >= 1 ? memberList[memberList.length - 1].no : 1;
    let obj = { "no": no, "id": Id, "pw": Pw };
    memberList.push(obj);   //로컬에 저장
    alert("회원가입 성공");
    localStorage.setItem(`memberList`, JSON.stringify(memberList));
}
function login() {
    let result=false;
    const id = document.querySelector(`.loginId`);
    const pw = document.querySelector(`.loginPw`);
    const Id = id.value;
    const Pw = pw.value;    //값을 저장할 곳
    for (let index = 0; index < memberList.length; index++) {
        if (memberList[index].id == Id && memberList[index].pw == Pw) {
            memberList.push(localStorage.setItem(`id`, Id));   //로컬에 저장
            memberList.push(localStorage.setItem(`pw`, Pw));
            result=true;
            alert("로그인 성공");
            break;
        }
    }
    if(result==false){
        alert("동일한 회원정보가 없습니다. 로그인 실패");
    }
}