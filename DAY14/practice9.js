const categoryAry = [{ "ccode": 1, "cname": "개발팀" }, { "ccode": 2, "cname": "디자인팀" }, { "ccode": 3, "cname": "기획팀" }]

const memberAry = [
    { "mcode": 100, "mname": "김민준", "ccode": 1, "rank": "선임개발자", "image": "https://placehold.co/100x100" },
    { "mcode": 101, "mname": "이서연", "ccode": 2, "rank": "수석디자이너", "image": "https://placehold.co/100x100" },
    { "mcode": 102, "mname": "박도윤", "ccode": 3, "rank": "팀장", "image": "https://placehold.co/100x100" }
]

const vacationAry = [
    { "mcode": 100, "date": "2025-08-04", "reason": "병원 진료", "vcode": 200 },
    { "mcode": 101, "date": "2025-07-25", "reason": "여름 휴가", "vcode": 201 }
]

printMember()
function printMember() {
    const tbody = document.querySelector(".tbody");

    let html = "";

    for (index = 0; index <= memberAry.length - 1; index++) {
        const member = memberAry[index];
        let category = "";

        for (let index1 = 0; index1 <= categoryAry.length - 1; index1++) {
            if (member.ccode === categoryAry[index1].ccode) {
                category = categoryAry[index1].cname;
                break;
            } // if end
        } // for end

        html += `           <tr>
                                <td><img src="${member.image}" /></td>
                                <td>${member.mname}</td>
                                <td>${category}</td>
                                <td>${member.rank}</td>
                                <td>
                                    <button onclick="memberUpdate(${member.mcode})" class="updateBtn">수정</button>
                                    <button onclick="memberDelete(${member.mcode})" class="deleteBtn">삭제</button>
                                </td>
                            </tr>`
    } // for end
    tbody.innerHTML = html;
} // f end 
let mcode = 102;
function memberAdd() {
    const nameInput = document.querySelector(".name");
    const name = nameInput.value;

    const categoryInput = document.querySelector(".category");
    const category = categoryInput.value

    const rankInput = document.querySelector(".rank");
    const rank = rankInput.value;

    const imageInput = document.querySelector(".image");
    const image = imageInput.files[0];

    mcode += 1;

    const obj =
    {
        "mcode": mcode,
        "image": image == undefined ? "https://placehold.co/100x100" : URL.createObjectURL(image),
        "ccode": category,
        "mname": name,
        "rank": rank
    }
    console.log(obj)

    memberAry.push(obj);
    console.log(memberAry)
    printMember()
    vacationfuck()
}

function memberUpdate(mcode) {
    for (let index = 0; index < memberAry.length; index++) {
        if (mcode == memberAry[index].mcode) {

            const newName = prompt("수정할 이름 : ");
            const newCate = prompt("수정할 부서 : ");
            const newRank = prompt("수정할 직급 : ");

            memberAry[index].mname = newName;
            categoryAry[index].cname = newCate;
            memberAry[index].rank = newRank;

            printMember();

            return;
        }// if end
    } // for end
} // f end 

function memberDelete(mcode) {
    for (let index = 0; index <= memberAry.length - 1; index++) {
        if (mcode == memberAry[index].mcode) {
            memberAry.splice(index, 1);
            printMember();
            categoryPrint();
            break;
        } // if end
    }// for end
} // f end
let ccode = 3
function categoryAdd() {
    const categoryInput = document.querySelector(".left-category");
    let category = categoryInput.value;

    ccode += 1;

    const obj =
    {
        "ccode": ccode,
        "cname": category
    }
    categoryAry.push(obj);
    categoryPrint();
    newMember();
}

function categoryUpdate(ccode) {
    for (let index = 0; index <= categoryAry.length - 1; index++) {
        if (ccode == categoryAry[index].ccode) {
            let newcname = prompt("부서명을 수정하세요 ")

            categoryAry[index].cname = newcname;
            categoryPrint();
            printMember();
            break;
        }
    }
    newMember(); 
}
function categoryDelete(ccode) {
    for (let index = 0; index <= categoryAry.length - 1; index++) {
        if (ccode == categoryAry[index].ccode) {
            categoryAry.splice(index, 1)
            categoryPrint();
    newMember();
            return;
        }
    }
}







categoryPrint()
function categoryPrint() {
    const tbody = document.querySelector(".tbody-left");
    let html = "";
    for (let index = 0; index < categoryAry.length; index++) {
        let category = categoryAry[index];
        // for end
        html += `       <tr>
                            <td>${category.cname}</td>
                            <td>
                                <button class="updateBtn" onclick="categoryUpdate(${category.ccode})">수정</button>
                                <button class="deleteBtn" onclick="categoryDelete(${category.ccode})">삭제</button>
                            </td>
                        </tr>`
    }
    tbody.innerHTML = html;
}//f end










let vcode = 201
function vacationAdd() {
    const vmemberInput = document.querySelector(".inputdept");
    let vmember = vmemberInput.value;

    const SdateInput = document.querySelector(".startdate")
    let startdate = SdateInput.value;

    const EdateInput = document.querySelector(".enddate")
    let endDate = EdateInput.value;

    const reasonInput = document.querySelector(".width")
    let reason = reasonInput.value

    vcode += 1;

    const obj = {

        "vcode": vcode,
        "mcode": vmember,
        "date": `${startdate}~${endDate}`,
        "reason": reason
    }
    vacationAry.push(obj)
    vacationPrint();

}
vacationPrint()
function vacationPrint() {
    let allList = document.querySelector('.all-list');

    let html = "";
    for (let index = 0; index <= vacationAry.length - 1; index++) {
        let vacation = vacationAry[index];
        let name1 = "";
        for (let index1 = 0; index1 <= memberAry.length - 1; index1++) {
            if (memberAry[index1].mcode == vacation.mcode) {
                name1 = memberAry[index1].mname
            }
        }
        html += `                        <div class="list">
                            <div class="top">
                                <h4>${name1}</h4>
                                <button onclick="vacationCancel(${vacation.vcode})">신청취소</button>
                            </div>
                            <div class="center">
                                ${vacation.date}
                            </div>
                            <div class="bottom">
                                ${vacation.reason}
                            </div>
                        </div>`
    }
    allList.innerHTML = html

}

function vacationCancel(vcode) {
    const vacationCancelDom = document.querySelector(`.cancel`);
    for (let index = 0; index <= vacationAry.length - 1; index++) {
        if (vcode == vacationAry[index].vcode) {
            vacationAry.splice(index, 1)
            vacationPrint();
        }
    }
}
vacationPrint();

vacationfuck()
function vacationfuck() {
    const select = document.querySelector('.inputdept');

    let html = `<option value="disabled">휴가 신청 사원을 선택하세요</option>`;
    for (let i = 0; i <= memberAry.length - 1; i++) {
        let member = memberAry[i];

        html += `<option value="${member.mcode}">${member.mname}</option>`
    }

    select.innerHTML = html

}

function newMember() {
    const categorySelect = document.querySelector(".category");

    let html = `<option value="disabled">부서를 선택하세요</option>`;

    for (let i = 0; i < categoryAry.length; i++) {
        const category = categoryAry[i];
        html += `<option value="${category.ccode}">${category.cname}</option>`;
    }

    categorySelect.innerHTML = html;
}