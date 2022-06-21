import api from "./api/index.js";
import addProductToList from "./utils/addProductToList.js";
import hideDropdown from "./utils/hideFilterList.js";
import filterData from "./api/filterData.js";
// import {viewPersonalCard, hidePersonalCard} from './utils/changePersonalCard.js';

const { searchProducts } = api;

// const searchUsersForm = document.forms['search-users'];


// document.body.addEventListener('click', () => {
//   hidePersonalCard();
// });

hideDropdown();

const users = await searchProducts(
  "https://shop-items-server.herokuapp.com"
).then((data) => {
  

  addProductToList(data);
  
  console.log('****************************')
  
  
  let filterParent = document.querySelectorAll('div.dropdown');

  let checkboxNum = document.querySelectorAll('div.dropdown-element')

  let filterNames = document.querySelectorAll('a.filter__name');

  let filterCategory = document.querySelectorAll('p.drop-title');

  let filter = document.querySelectorAll('input.filter__checkbox');

  let currentCategory 
  let currentIndex

  console.log(data)
  filterParent.forEach((element, index)=>{
      element.addEventListener('click', (e) =>{
      currentCategory = filterCategory[index].innerHTML
    })
  })
  
  filter.forEach((element, index) =>{
      element.addEventListener('click', (e) => {
      console.log('=====>',currentCategory.toLowerCase(),checkboxNum[index].children[1].innerHTML)

          const result = filterData(data,currentCategory.toLowerCase(),checkboxNum[index].children[1].innerHTML)
          console.log(result)
    })})

});

// searchUsersForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   console.log("cards", cards);
//

//   addCardToList(users);

// });
