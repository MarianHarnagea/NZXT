const seeMoreBtns = document.querySelectorAll(".see-more-btn");

function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

seeMoreBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let title =
      event.target.parentElement.parentElement.firstElementChild
        .firstElementChild.textContent;
    let img =
      event.target.parentElement.parentElement.firstElementChild
        .firstElementChild.nextElementSibling.firstElementChild.src;
    let descriprion =
      event.target.parentElement.parentElement.firstElementChild
        .firstElementChild.nextElementSibling.nextElementSibling
        .firstElementChild.textContent;

    const product = {};
    product.title = title;
    product.img = img;
    product.descriprion = descriprion;
    product.id = createUUID();

    showDetails(product);
  });
});

function showDetails(product) {
  console.log(product);
}
