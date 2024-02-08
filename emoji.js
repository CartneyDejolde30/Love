let para = document.getElementById("para");
let btns1 = document.getElementById("btns1");
let btns2 = document.getElementById("btns2");
let emoji = document.getElementById("emojis");

function yes(){
    para.innerHTML = "Yayy! I Love You &#128525;";
   emoji.src = "https://media.tenor.com/YKLvL1Ck_nwAAAAj/cony-line-friends-i-love-you.gif";
   btns1.style.display = 'none';
    btns2.style.display = 'none';
    emoji.style.width = '300px'; 
    emoji.style.height = '300px';
}
function no(){
    para.innerHTML = "Okay &#128532;";
   emoji.src = "https://media.tenor.com/zhy7eq_NWkUAAAAj/heart-break.gif";
   btns1.style.display = 'none';
    btns2.style.display = 'none';
}

