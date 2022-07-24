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
      div.innerHTML=`<a href="https://www.figma.com/file/tGrUfiGxJo6Ahku54c7l5f/Fashion-Blog-Template?node-id=0%3A2"><h2>Home</h2></a><a href="#recipes"><h2>Recipes</h2></a><a href="#article"><h2>Article</h2></a><a href="#contact"><h2>Contact</h2></a><a href="#purchase"><h2>Purchase</h2></a>`;
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

document.querySelector('body > main > footer > nav > span').addEventListener('click',()=>{
  window.location.href=`tel:+79123456789#`;
});


let date= new Date();
// console.log(date.getFullYear());
document.querySelector('#date').innerHTML=`${date.getFullYear()}`;
document.querySelector('#nasoberu').style.cssText=`font-size:30px;`
document.querySelector('#nasoberu').addEventListener('click',()=>{
  window.location.href='https://nasobe.ru';
});
let fotki = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg','14.jpeg','15.jpeg','16.jpeg','17.jpeg','18.jpeg','19.jpeg','20.jpeg','21.jpeg','22.jpeg','23.jpeg','24.jpeg','25.jpeg'];
let oj=+0;
document.querySelector('#recipes > img').addEventListener('click',()=>{
  oj++;
  // for(let oj=0;oj<fotki;oj++){}
  if(oj==24){
    document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
    oj=1;
  }
  document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
})
