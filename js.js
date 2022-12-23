// const getItem = () =>{
//     let inp = document.querySelector('input')
// console.log(inp.value);



// if(inp.value !== '' && !inp.value.includes(" ") ){
//     let data = {
//         name:inp.value
//     }
//     local.setItem('user-name', JSON.stringify(data))
    
//     let get_item = local.getItem('user-name')
    
//     get_item = JSON.parse(get_item)
//     console.log(get_item);

// }else{
//     alert('iltimos bo\'sh joyni to\'ldiring' )
// }




// }
// let local = localStorage
// let head  = document.querySelector('h1')
// head.innerHTML = JSON.parse(local['user-name']).name

// const remowe = () =>{
//     local.clear('user-name')
// }


////////////////////////////////////////////////////////
const getItem = () =>{
    let inp = document.querySelector('input')
console.log(inp.value);

if(inp.value !== '' && !inp.value.includes(" ") ){
    let data = {
        name:inp.value
    }
    local.setItem('user-name', JSON.stringify(data))
    
    let get_item = local.getItem('user-name')
    
    get_item = JSON.parse(get_item)

alert(`your email is  ---  ${inp.value}  --- `)
} 
else{
    alert('iltimos bo\'sh joyni to\'ldiring' )
}

}
let local = localStorage
let head  = document.querySelector('h1')
head.innerHTML = JSON.parse(local['user-name']).name

const remowe = () =>{
    local.clear('user-name')
}

