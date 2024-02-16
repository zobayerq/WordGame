function playGame() {

    addHiddenclass('hid1');

    removeHiddenclass('hid2')
    gamestart();
    setInerText('mtext', n);

  

    
    

}
function  gamecotrl(event){

    const kyeprees=event.key;
    
    const classlis=document.getElementById('mtext');
   const displykye= classlis.innerText;
   if (kyeprees===displykye) {
    getinerTxt('ssss');

    const scor=parseInt(r);

    const newscor=scor+1;
    setInerText('ssss', newscor);

    
    
    gamestart();
    setInerText('mtext', n);
    setInerText('final-scor', newscor);
    
    
   }

    else if (kyeprees==='Escape') {
        addHiddenclass('hid2');
        removeHiddenclass('hid3');

    
   }


   else{
    getinerTxt('life');
    const life=parseInt(r);
    const carentlife=life-1;
    setInerText('life', carentlife);

    if (carentlife===0) {
        addHiddenclass('hid2');
        removeHiddenclass('hid3');


        
    }
      
     
   }



    
 



}

document.addEventListener('keyup', gamecotrl );



function addHiddenclass(id){
    const classlis=document.getElementById(id);
classlis.classList.add("hidden")

}

function removeHiddenclass(id){
    const classlis=document.getElementById(id);
classlis.classList.remove("hidden")

}


function gamestart(){

    const inr=Math.random()*25;
    const i=Math.round(inr);

   const numbars="abcdefghijklmnopqrstuvwxyz";
   const Number=numbars.split("");
  return  n=Number[i];
   

   


}
function getinerTxt(id) {
    const text=document.getElementById(id);
    return r=text.innerText;
   
    
}

function setInerText(id, Whatset){
    const call=document.getElementById(id);
    call.innerText=Whatset;
    
}


function gameReStart(){
    addHiddenclass('hid3'); 
        removeHiddenclass('hid2');
        setInerText('life', 6);
        setInerText('ssss', 0);

}