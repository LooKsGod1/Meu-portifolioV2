
function alterarDisplay(){
    let button = document.getElementById('button-display')
    let header = document.getElementById('meu-header')
   


    if(header.style.display === 'none'){
        header.style.display = 'flex'
        

       
    }
    else{
        header.style.display = 'none'
        
    }
 

}