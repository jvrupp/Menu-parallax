var id;
      function msg(){
        alert("TESTE");
      }
     function carrega(){
       id=document.getElementById("teste")
      exporta(id)
       }
       function exporta(id){
         id.addEventListener("click",msg)
       }
      window.addEventListener("load",carrega);