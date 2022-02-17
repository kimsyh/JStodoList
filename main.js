
var todoBtn = document.getElementById('todoBtn');
var todoInput = document.getElementById('todoInput');
var list = document.getElementById('list');


todoBtn.addEventListener('click',function(){
    //새로운 list 추가
    var newList = document.createElement('li')
    newList.innerText = todoInput.value;
    list.appendChild(newList);
    
    //삭제버튼생성
    var deleteBtn = document.createElement('button')
    deleteBtn.innerText = '삭제'
    newList.appendChild(deleteBtn)

    //input창 초기화
    todoInput.value ='';

    //삭제버튼 클릭시
    deleteBtn.addEventListener('click', function(){
        this.parentElement.remove()
    })
})

