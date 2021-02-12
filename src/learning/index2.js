const div1 = document.createElement("div");
div1.innerHTML = 1;
const div2 = document.createElement("div");
const child1 = document.createElement("div");
child1.innerHTML = "1.1";
div1.appendChild(child1);
div2.innerHTML = 2;
const div3 = document.createElement("div");
div3.innerHTML = 3;
const div4 = document.createElement("div");
div4.innerHTML = 4;
const routeTable = {
  1: div1,
  2: div2,
  3: div3,
  4: div4,
};

function route() {
  const app = document.querySelector(`#app`);
  let number = window.location.hash.substring(1);
  number = number || 1;

  let div = routeTable[number];
  if (!div) {
    div = document.querySelector("#div404");
  }
  div.style.display = "block";

  if (app.children.length > 0) {
    if (div !== app.children[0]) {
      app.children[0].style.display = "none";
    }
    document.body.appendChild(app.children[0]);
  }
  app.appendChild(div);
}

route();

window.addEventListener("hashchange", () => {
  console.log("hash changed");
  route();
});
