const filterContain = document.querySelectorAll('div.dropdown')

export default function hideDropdown() {
        for (let elem of filterContain){
            elem.children[0].addEventListener('click', ()=>{
                
                if (elem.children[1].classList[1] == 'hidden'){
                    elem.children[1].classList.remove("hidden");
                    // console.log(elem.children[1].classList);
                }
                else{
                    elem.children[1].classList.add("hidden");
                    // console.log(elem.children[1].classList);
                }
            })
        }
    }
