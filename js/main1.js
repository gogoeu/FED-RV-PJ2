// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

const slide = myFn.qs(".slide");
// 순번변수
const section = myFn.qs(".section");

//버튼
let seqNum = 0;
myFn.qs(".ab2").onclick = () => {
  seqNum++;
  if (seqNum > 4) {
    seqNum = 0;
    slide.style.transition = ".3s ease-in-out";
  } else {
    slide.style.transition = "1s ease-in-out";
  }
  // 슬라이드 CSS변경하기
  seqnum();
};
myFn.qs(".ab1").onclick = () => {
  seqNum--;
  if (seqNum < 0) {
    seqNum = 4;
    slide.style.transition = ".3s ease-in-out";
  } else {
    slide.style.transition = "1s ease-in-out";
  }
  seqnum();
  // ??
};

// 자동 넘김
var sec = document.querySelector('section');
var secLen = sec.querySelectorAll('img').length;
setInterval(interval,2000);
function interval() {
    seqNum++;
    if (seqNum == secLen) seqNum = 0;
    seqnum()
}

// translate 함수
function seqnum() {
  // console.log(seqNum);
  slide.style.translate = seqNum * -100 + "%";
  slide.style.transition = ".5s ease-in-out";
}




// 1. 대상선정 :
// (1) 이벤트 대상 : window
// (2) 변경대상 : .scroll-act
const scrollAct = myFn.qsa(".scroll");

myFn.addEvt(window, "scroll", showEl);

// 기준값 만들기 : 화면 높이값을 사용(화면의 2/3)
const CRITERIA = ( window.innerHeight ) ;
// console.log("기준값:", CRITERIA);


// 3. 함수만들기 /////////////
// (1) 요소 등장 함수 /////////
function showEl() {
    // (1) 함수호출확인
    // console.log('나야나!',window.scrollY);
  
    scrollAct.forEach((el) => {
      // 각 등장요소의 바운딩 top값
      let bcrVal = myFn.getBCR(el);
      console.log(bcrVal, el.getBoundingClientRect());
  
      if (bcrVal < CRITERIA) el.classList.add("on");
      else el.classList.remove("on");
    }); ///// forEach /////
  } /////// showEl함수 ////////////////


  