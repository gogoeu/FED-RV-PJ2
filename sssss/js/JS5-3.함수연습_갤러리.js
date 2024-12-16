// JS5-3.함수연습_갤러리 JS

// 나의 함수 불러오기
import myFn from "./my_function.js";

const btn = myFn.qsa(".btn");

// 1-2. 변경 대상: #mbox img
const mbox = myFn.qs("#mbox img");


// 2. 이벤트 설정하기 /////////
// 이벤트 대상은 btn변수에 할당
btn.forEach((el) => {
  // el - 각각의 버튼요소
  myFn.addEvt(el, "click", changeImg);
}); ////// forEach /////

// 3. 함수만들기 ////////////
// 이미지번호변수(전역변수)
let iNum = 1;
function changeImg(e) {
  e.preventDefault();

  // (1) 함수호출 확인(this확인)
  console.log("나야나!", this);

  // (2) 오른쪽 버튼인지 여부판별
  let isR = this.classList.contains("rb");
  console.log("오른쪽인가?", isR);

  // (3) 이미지 번호 증감 분기하기
  if (isR) {
    // 오른쪽버튼일때 이미지번호 증가
    iNum++;
    // 한계값 체크(끝번호 다음은 첫번호)
    if (iNum > 7) iNum = 1;
  } /// if ///
  else {
    iNum--;
    // 한계값 체크(첫번호 이전은 끝번호)
    if (iNum < 1) iNum = 7;
  } /// else ///

  // (4) 이미지 src변경하기
  // 변경대상은 mbox변수에 할당
  mbox.setAttribute("src", `../meat_0${iNum}.jpg`);
} ////// changeImg 함수 ///////////

