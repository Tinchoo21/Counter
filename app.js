

const btn = document.getElementById("btn");
const inc = document.querySelector(".value");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");

let num = 0;

btn.addEventListener("click" , function()
{

    

        num++;
    

    
     inc.textContent = num;

   })
  dec.addEventListener("click" , function()
   {
   
       
   
           num--;
       
   
       
        inc.textContent = num;
   
      })

      reset.addEventListener("click" , function()
      {
      
          
      
              num = 0;
          
      
          
           inc.textContent = num;
      
         })


  