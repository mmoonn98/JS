//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num"); //입력받는 곳
    const startButton = document.querySelector("#start_button"); //시작버튼
    const gameForm = document.querySelector("#game_form"); //입력받는 form(submit)
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    //form요소는 submit요소를 이용해 함수 실행
}

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran =Math.floor(Math.random()*100 + 1); 
    console.log(ran);
    //0이 포함되는게 싫다면 +1 / 정수math.floor
    count = 1;

    //입력받는 form(submit)
    const gameForm = document.querySelector("#game_form");
    gameForm.firstElementChild.disabled = false;
    gameForm.lastElementChild.disabled = false;

    //explan의 내용 수정
    const explan = document.querySelector("#explan");
    explan.textContent = "게임이 시작되었습니다 1~100사이의 수를 입력하세요";
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    //submit으로 들고오면 창새로고침이 발생
    e.preventDefault();

    //DOM 들고오기
    const explan = document.querySelector("#explan");
    const userNum = document.querySelector("#user_num");
    const result = document.querySelector("#result");

    //DOM 값으로 ran값 비교

    userNum.value

    //if문을 이용해서 DOM 값 수정
    if(ran>userNum.value) {
        explan.textContent = `${userNum.value}보다 더 크다`;
    }
    else if (ran < userNum.value) {
        explan.textContent = `${userNum.value}보다 더 작다`;
    }
    else if (ran == userNum.value) {
        explan.textContent = `${userNum.value}! 정답!`;
        userNum.disabled = true;
        userNum.nextElementSibling.disabled = true;

        //정답자 이름 기록 코드
        //promt를 열어서 이름 입력
        const name = prompt("이름을 입력해주세요");
        //새로운 노드 생성하여 ul안에 li로 이름과 횟수(count) 기록
        const li = document.querySelector("li");
        document.querySelector("#log").appendChild(li);
        li.textContent = `${name}님 ${count}회 성공`;
        //
    }

    result.textContent = `${count}번째 입니다`;
    count++;
    userNum.value = "";
}
