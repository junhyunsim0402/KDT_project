// 수강 신청 조회
// 테이블명,역할,주요 컬럼 (필드)
// Students(학생)="학번(PK), 이름, 전공코드"
// Courses(교과명)="과목코드(PK), 과목명, 주야구분"
// Registrations(수강신청)="신청번호(PK), 학번(FK), 과목코드(FK)"

let students = {
    이름: ["심준현", "이한승", "누구지"],
    학번: [20210849, 412412, 141241],
    전공코드: [1, 2, 3]
};

let coures = {
    전공코드: [1, 2, 3],
    교과명: ["자바", "파이썬", "c++"],
    주야구분: ["주", "야", "주"]
};

let registration = {
    신청번호: [101, 102, 103],
    학번: [20210849, 412412, 141241],
    과목코드: [1, 2, 3]
};

let user = Number(prompt("당신이 듣는 과목코드?"));

for (let i = 0; i < students.이름.length; i++) {
    let studentID = students.학번[i];
    let Index = registration.학번.indexOf(studentID);
    let ID = registration.과목코드[Index];
    let Index1 = coures.전공코드.indexOf(ID);

    if (ID === user) {
        console.log(`${students.이름[i]}(PK:${studentID})의 전공은 ${coures.교과명[Index1]}입니다.`);
    }
}