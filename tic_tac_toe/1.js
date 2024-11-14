let myname1=prompt("enter 1st player name who choose X")
let myname2=prompt("enter 1st player name who choose 0")
document.querySelector(".name").innerHTML=myname1+`'s`+" "+"Turn:"
let playerX=true;
function enter(button){
    if(playerX)
    {
        document.querySelector(".name").innerHTML=myname2+`'s`+" "+"Turn:"
button.style.color="red"
        button.innerHTML="X";
        button.disabled=true
playerX=false;
    }
   else{
       document.querySelector(".name").innerHTML=myname1+`'s`+" "+"Turn:"
       button.style.color="blue"
button.innerHTML="0";
button.disabled=true
playerX=true;
}
console.log("Button Clicked. InnerHTML:", button.innerHTML);
checkwin();
}
function reset(){
    let onebtn=document.querySelector(".game").querySelectorAll("button");
    onebtn.forEach((e)=>{
        e.innerHTML=""
        e.disabled=false
    })
    playerX=true
    document.querySelector(".name").innerHTML=myname1+`'s`+" "+"Turn:"
}
function checkwin() {
    let onebtn=document.querySelector(".game").querySelectorAll("button");
    let winning = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [1, 4, 7], [2, 4, 6], [6, 7, 8], [2, 5, 8]];

    for (let i = 0; i < winning.length; i++) {
        let [a, b, c] = winning[i];

        if (onebtn[a].innerHTML !== "" && onebtn[a].innerHTML === onebtn[b].innerHTML && onebtn[b].innerHTML === onebtn[c].innerHTML) {
            if(onebtn[a].innerHTML==='0' && onebtn[b].innerHTML==='0' && onebtn[c].innerHTML==='0'){    
            alert("Player " + myname2 + " wins!");  
            reset()
        }
            else if(onebtn[a].innerHTML==='X' && onebtn[b].innerHTML==='X' && onebtn[c].innerHTML==='X') {
            alert("Player " + myname1 + " wins!");  
            reset();
            }
            return true;
       }
        }
    return false;
}