function changeText(){
 const elements = document.getElementByIdClassname('text');
 for(let i=0; i<elements.length; i++){
    elements[i].innerText = 'text has been modified';
 } 
}