//문제1
// let second=Number(prompt("초단위 시간 입력:"));
// let hour=parseInt(second/3600);
// let miniute=parseInt((second%3600)/60);
// let sec=second%60;
// let result=hour<10 ? `0${hour}` : hour;
// let result2=miniute<10 ? `0${miniute}` : miniute;
// let result3=sec<10 ? `0${sec}` : sec;
// console.log(`${result}:${result2}:${result3}`);

//문제2
let sth=Number(prompt());
let stm=Number(prompt());
let eth=Number(prompt());
let etm=Number(prompt());
let stm1=sth*60+stm;
let etm1=eth*60+etm;
let minus=etm1-stm1;
let re=parseInt((minus-30)/10)
re=(minus-30)%10>0 ? re+1 : re;
let result=re>0 && re<37 ? `${2000+re*500}` : re<0 ? 
`${2000}` : re>=37 ? `${20000}` : `false`
result=sth>=22 ? `${result*0.8}(심야)` : result;
console.log(result);