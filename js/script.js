
screen = document.querySelector(".scrn")
all_btn = Array.from( document.querySelectorAll(".bt"))

all_btn.map(butnss =>{
    butnss.addEventListener("click", (e)=>{
        e.target.textContent

        if(e.target.textContent == "="){
            try{
                screen.textContent = eval(screen.textContent)
            }catch{
                screen.textContent = "error"
            }
        }else if(e.target.textContent == "c"){
            screen.textContent =" "
        }else if(e.target.textContent == "="){
            
        }else{
        
            screen.textContent+=e.target.textContent
        }
    })
})
