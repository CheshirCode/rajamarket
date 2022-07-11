const select = document.querySelector("select");
const allLang = ["en", "ru", "fi"];
const flagSelector = document.querySelector(".flag");
console.log(flagSelector);

// document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener("change", changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
let hash;
function changeLanguage() {
  hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;
  document.querySelector(".lng-wellcome").innerHTML = langArr["wellcome"][hash];
  // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
  console.log(hash);
}

changeLanguage();

const selectedFlag = document.querySelectorAll(".flag img");
console.log(selectedFlag);
