const body = document.querySelector("body");
const img_number = 3;

//이미지 경로 할당 및 랜덤이미지 번호 할당
function paintImage(imgNumber) {
  const image = new Image();

  image.src = `images/${imgNumber + 1}.jpg`;
  //+1로 세팅 Math.random()에서 값이 0 나올수도 있음
  body.appendChild(image);
}
//랜덤숫자 발생 함수
function genRandomNum() {
  const number = Math.floor(Math.random() * img_number);
  return number;

  /**
   * Random in JS
   *
   * Math.random()*5 >> 1 to 5
   * floor 랜덤 날리기
   * floor(바닥), -> 버림 ceil(천장) ->올림
   * Math.floor(Math.random()*3); 1~3 랜덤 반복
   *
   */
}

//최최 시작
function init() {
  const randomNumber = genRandomNum();
  paintImage(randomNumber);
}

init();
