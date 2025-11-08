const $=document
const divs=$.querySelectorAll('.nav>div')
const color='white'

for(let x of divs){
    x.onclick=clickHandler
}
function clickHandler(event){
  for(let x of divs){
    x.style.cssText='' 
    
  }
  if(getComputedStyle(event.target).backgroundColor=='rgb(224, 89, 89)'){
    event.target.style.cssText=''
    
  }else{
    
    event.target.style.cssText='background-color: rgb(224, 89, 89);color:white'
  }

}




