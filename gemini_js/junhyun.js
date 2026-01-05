let juice = [`아메리카노`, `바나나라떼`, `아이스티`];
let price = [3000, 5000, 10000];
let user = (prompt("주문하실 메뉴"));
let useradd = Number(prompt("샷 추가"));
let re = juice.indexOf(user)
let addshot = 500 * useradd;
let result = price[re] + addshot;
if (re !== -1) {
    if (result >= 20000) {
        result = result * 0.9;
    } else {
        result += 0;
    }
}else{
    console.log("존재하지 않는 메뉴입니다");
}
let bottle = Number(prompt());
if (bottle > 0) {
    result = result - 300 * bottle;
    console.log(parseInt(result));
} else {
    result += 0;
    console.log(parseInt(result));
}