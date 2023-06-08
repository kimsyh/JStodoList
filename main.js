const todoBtn = document.querySelector("#submit");
const input = document.querySelector("#input");
const ul = document.getElementById("list");

todoBtn.addEventListener("click", function () {
  //새로운 list 추가
  const newList = document.createElement("li");
  newList.innerText = input.value;
  ul.appendChild(newList);

  //삭제버튼생성
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제";
  newList.appendChild(deleteBtn);

  //input창 초기화
  input.value = "";

  //삭제버튼 클릭시
  deleteBtn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

//검색어자동완성
const searchbx = document.querySelector("#searchbox");
const loading = document.querySelector("#loading");
const list = document.createElement("li");
const keywordList = [
  "공산당",
  "나비",
  "다리",
  "라지",
  "민주당",
  "바지",
  "새누리당",
  "가나다라",
  "가위",
];

// const state = {
//   items: []
// }

let timer;
// 리스트 만들기
input.addEventListener("input", function (e) {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(showDropList, 1000);
});

//리스트 생성
const showDropList = async () => {
  // state.items.push({ name: input.value , id:  state.items.length + 1})
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  //리스트 삭제
  clearItem();

  //'찾는중' hide
  loading.classList.remove("show");

  await sleep(1);

  if (input.value) {
    //'찾는중' show
    loading.classList.add("show");
    //리스트 show
    searchbx.classList.add("show");

    const result = keywordList.filter((word) => word.includes(input.value));
    console.log("result", result);

    //인풋값 있을때
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        const list = document.createElement("li");
        searchbx.append(list);
        list.innerText = result[i];

        list.addEventListener("click", function () {
          input.value = list.innerText;
        });
      }
    }

    //인풋값 없을때
    if (result.length == 0) {
      const list = document.createElement("li");
      searchbx.append(list);
      list.innerText = "없음";
    }
  }
};

//리스트 삭제
const clearItem = () => {
  if (document.querySelector("li")) {
    searchbx.removeChild(searchbx.lastChild);
    searchbx.classList.remove("show");
  }
};

//외부영역 클릭시 드롭다운 리스트 숨기기
document.querySelector("body").addEventListener("click", function (e) {
  if (e.target !== e.currentTarget) {
    searchbx.classList.remove("show");
    clearItem();
  }
});
