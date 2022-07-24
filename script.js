if(window.innerWidth>900){
  console.log("900");
}else{
  let div=document.createElement('div');
    let line=document.createElement('p');
    div.append(line);
    let lineTwo=document.createElement('p');
    div.append(lineTwo);
    let lineThree=document.createElement('p');
    div.append(lineThree);
    line.style.cssText="background:grey;width:30px;height:3px;margin-bottom:9px;";
    lineTwo.style.cssText="background:grey;width:30px;height:3px;margin-bottom:9px";
    lineThree.style.cssText="background:grey;width:30px;height:3px;";
    document.querySelector('nav').append(div);
    div.style.cssText=`position:absolute;right:30px;display:block;z-index:1;`
    // FlyBoxMenu
    let ClickCount=+0;
    document.querySelector('nav > div').addEventListener('click',()=>{
      ClickCount++;
      document.querySelector('nav > div').style.cssText=`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      width:100%;
      height:100%;
      background:rgba(255,255,255,0.5);
      position:fixed;
      z-index:9;
      top:0;
      `;
      console.log('OoKk');
      div.innerHTML=`<a href="#ok"><h2>Home</h2></a><a href="#recipes"><h2>Recipes</h2></a><a href="article"><h2>Article</h2></a><a href="#contact"><h2>Contact</h2></a><a href="#purchase"><h2>Purchase</h2></a>`;
      document.querySelector('body').style.cssText=`overflow:hidden;`

      if(ClickCount==2){
        div.innerHTML=``;
        div.append(line);
        div.append(lineTwo);
        div.append(lineThree);
        document.querySelector('nav > div').style.cssText=`
          position:absolute;
          right:30px;
          display:block;
          z-index:1;
          background:none;
          `;
        ClickCount=0;
        document.querySelector('body').style.cssText=`overflow:scroll;`
      }
    });
}

let date= new Date();
// console.log(date.getFullYear());
document.querySelector('#date').innerHTML=`${date.getFullYear()}`;
document.querySelector('#nasoberu').style.cssText=`font-size:30px;`
document.querySelector('#nasoberu').addEventListener('click',()=>{
  window.location.href='https://nasobe.ru';
});
