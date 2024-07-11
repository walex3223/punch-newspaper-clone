const body=document.querySelector('body')
const inners=document.querySelector('#inner')
const months=document.querySelector('#months')


const dates=document.querySelector('#date')

body.onload=(function(){
    inners.innerHTML=window.innerWidth
    console.log(window.innerWidth)
    const today=new Date()
   const x=today.getDate()
   const y=today.getMonth()
   const z=today.getFullYear()
   const month={
    0:"january",1:"february",2:"march",3:"april",4:"may",5:"june",6:"july",7:"august",8:"september",9:"october",
    10:"november",11:"december",
   }
   dates.innerHTML=x+"/"+y+"/"+z
   console.log(month[y])
   const mt=+y

  const mont=month[mt]
const one=mont[0].toUpperCase();
const two=mont.slice(1,mont.lenght)
months.innerHTML=one+two
console.log(one,two)




}());

const image1=document.querySelector('.im1')
const image2=document.querySelector('.im2')
const image3=document.querySelector('.im3')
let current=0
window.onload=slide;
const newim=[image1,image2,image3]

function slide(){
  for(let i=0; i<newim.length; i++){
    newim[i].style.display="none"
}
newim[current].style.display='block'
setTimeout(slide,2000)
current++
if(current==3){
  current=0
}

}

const d=new Date()
console.log(Intl.DateTimeFormat('en-us',{'short':'month'}).format(d))

function godown(){
  // const godown=document.querySelector('.godown')
  const down=document.querySelector('#down')
  
  console.log("working")
  down.style.animationDuration="4s"
  if(down.style.display=="none"){


    down.style.display="block"
  }else{
    down.style.animationDuration="0.9s"
    down.style.display="none"



  }
 
}

let currents=0
function clickme(){
  
  
  const spans=document.createElement('span')
  const spantext=document.createTextNode("you jhave click me")
  spans.innerHTML="<a>linked</a>"
  spans.style.display="none"
   
  if(spans.style.display=="none"){
    spans.style.display="block"
  }
  else{
    spans.style.display="none"
    console.log("not workj")

  }


  spans.id="test"


  const clickmediv=document.querySelector('#clickme')
  clickmediv.appendChild(spans)
  const tes=document.querySelector('#tes')
 


  }
  

  
  

  

 




