function route() {
  const app = document.querySelector(`#app`);

  let number = window.location.hash.substring(1);
  number = number || 1;

  let div = document.querySelector(`#div${number}`);
  if (!div) {
    div = document.querySelector(`#div404`);
  }
  div.style.display = "block";

  if (app.children.length > 0) {
    app.children[0].style.display = "none";
    document.body.appendChild(app.children[0]);
  }
  app.appendChild(div);
}

route();

window.addEventListener("hashchange", () => {
  console.log("hash changed");
  route();
});

// 以上就做成了一个可以根据用户选择而进行路由。
