const inp = document.getElementById("inp");

inp.addEventListener("change",()=>{
    window.location.href= `http://localhost:4000/download?URL=${inp.value}`;
})
