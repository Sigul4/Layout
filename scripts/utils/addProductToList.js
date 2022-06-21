import productCard from "./productCard.js";

const cardField = document.querySelector("ul.products");

function addProductToList(data) {
  if (data === "") return "There are no products like this";

  // console.log(data);

  cardField.innerHTML = data.reduce((accumulator, product) => {
    // console.log(product);
    accumulator += productCard(product);
    return accumulator;
  }, "");
}

export default addProductToList;
