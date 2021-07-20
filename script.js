const btn1 =document.getElementById("Btn1")
const colorchoice1 =document.getElementById("color1")
const colorchoice2 =document.getElementById("color2")
const colorchoice3 =document.getElementById("color3")
const zb = document.getElementById("answer")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomness(f){
    do{
        var x = getRandomInt(0,2)
        var y = getRandomInt(0,2)
        var z = getRandomInt(0,2)
    }while(x===y || x===z || y===z)
colorchoice1.innerHTML=f[x] 
colorchoice2.innerHTML=f[y]     
colorchoice3.innerHTML=f[z]  
}

function randomC () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')

let ra = 0;
btn1.addEventListener("click",()=>{
const colorhex =[randomC(),randomC(),randomC()]
ra=getRandomInt(0,2)
document.body.style.backgroundColor=colorhex[ra]
randomness(colorhex)

})

document.body.addEventListener("click",(e)=>{

    if(e.target!=colorchoice1 && e.target !=colorchoice2 && e.target!=colorchoice3) return null
    let test = document.body.style.backgroundColor.substring( 4,document.body.style.backgroundColor.length-1)

let spl=test.split(",")

if(e.target.innerHTML===colorchoice1.innerHTML && colorchoice1.innerHTML === rgbToHex(parseInt(spl[0]),parseInt(spl[1]),parseInt(spl[2]))){
       alert("true")
}
else if(e.target.innerHTML===colorchoice2.innerHTML && colorchoice2.innerHTML === rgbToHex(parseInt(spl[0]),parseInt(spl[1]),parseInt(spl[2]))){
    alert("true")
}else if(e.target.innerHTML===colorchoice3.innerHTML && colorchoice3.innerHTML === rgbToHex(parseInt(spl[0]),parseInt(spl[1]),parseInt(spl[2]))){
    alert("true")
}else{
    alert("not true")
}
btn1.click()
})

btn1.click();



