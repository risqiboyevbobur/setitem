const getItem = () =>{
    let inp = document.querySelector('input')
console.log(inp.value);

    let local = localStorage

local.setItem('user-name', inp.value)
let get_item = local.getItem('user-name')
console.log(get_item);
}