const items = [
  "красный",
  "оранжевый",
  "желтый",
  "зеленый",
  "голубой",
  "коричневый",
];

const vvod_add = document.getElementById("vvod_add");
const vvod_search = document.getElementById("vvod_search");
const vyvod = document.getElementById("vyvod");
const add_submit = document.getElementById("add_item");
const search_submit = document.getElementById("search_item");

add_submit.addEventListener("click", () => {
  items.push(vvod_add.value.toLowerCase());
  vvod_add.value = "";
});
search_submit.addEventListener("click", () => {
  vyvod.innerHTML = "";

  items.forEach((item) => {
      if (item.toLowerCase().includes(vvod_search.value.toLowerCase())) {
        const li = document.createElement("li");
        li.innerText = item;
        vyvod.appendChild(li);
      }
    });

  vvod_search.value = "";
});

items.forEach((item) => {
  
    const li = document.createElement("li");
    li.innerText = item;
    vyvod.appendChild(li);
});