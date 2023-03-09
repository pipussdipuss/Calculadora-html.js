const display= document.getElementById('display');
const btnAC = document.getElementById('AC');
const borrarTodo=()=>{
    display.value ="";
}

btnAC.addEventListener("click",borrarTodo);

const btnC = document.getElementById('C')
const borrarNum = () =>{
display.value = display.value.toString().slice(0,-1);
};
btnC.addEventListener("click",borrarNum);

const btnigual = document.getElementById('igual');
const calcular = ()=> {
    display.value = eval(display.value);
}
btnigual.addEventListener("click",calcular);