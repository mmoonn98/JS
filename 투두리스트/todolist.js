//todo_submit Dom 가져옴
const todoForm = document.querySelector("#todo_form");  
const todoInput = document.querySelector("#todo_input");

//갯수확인
let count=0;

//이벤트리스너를 통해 이벤트 발생
//submit 이벤트는 Form에서 발생하는 이벤트
todoSubmit.addEventListener("submit",todoFormSubmit);

//버튼이 눌렀을때 todoFormSubmit 함수
function todoFormSubmit(e) {
    e.preventDefault();
    console.log(todoInput.value);
    //console.log(todoInput.value);

    const li = document.createElement("li");

    //체크박스생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //텍스트노드생성
    const text = document.createTextNode(todoInput.value);

    //버튼 생성
    const button = document.createElement("button");
    button.textContent = "X"

    const todoBoard = document.querySelector("#todo_board ul");
    //board에 추가
    todoBoard.appendChild(li);

    //li에 추가
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);

    //input에 빈 문자열 할당
    todoInput.value="";

    //check박스 이벤트 추가
    checkbox.addEventListener("click",checkTodo);

    //button 이벤트 추가
    button.addEventListener("click",deletTodo);

}
//
function checkTodo(e) {
    if (e.target.checked) {//체크박스가 체크가 되었을때.
        e.target //체크박스의 부모(li)의 색바꿈
        e.target.parentNode.style.color = "lightgray";
    }
    else {
        e.target.parentNode.style.color = "black";
    }
}