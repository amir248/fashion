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

document.querySelector('#tel').addEventListener('click',()=>{
  window.location.href=`tel:+79123456789#`;
});


let date= new Date();
// console.log(date.getFullYear());
document.querySelector('#date').innerHTML=`${date.getFullYear()}`;
document.querySelector('#nasoberu').style.cssText=`font-size:30px;`
document.querySelector('#nasoberu').addEventListener('click',()=>{
  window.location.href='https://nasobe.ru';
});
let fotki = ['0.jpg','1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg','14.jpeg','15.jpeg','16.jpeg','17.jpeg','18.jpeg','19.jpeg','20.jpeg','21.jpeg','22.jpeg','23.jpeg','24.jpeg','25.jpeg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','50.jpg','51.jpg','52.jpg','53.jpg','54.jpg','55.jpg','56.jpg','57.jpg','58.jpg','59.jpg','60.jpg','61.jpg','62.jpg','63.jpg','64.jpg','65.jpg','66.jpg','67.jpg','68.jpg','69.jpg','70.jpg','71.jpg','72.jpg','73.jpg','74.jpg','75.jpeg','76.jpeg','77.jpeg','78.jpeg','79.jpeg','80.jpeg','81.jpeg','82.jpeg','83.jpeg','84.jpeg'];
let oj=+0;
function nextClick(){
    oj++;
    // for(let oj=0;oj<fotki;oj++){}
    console.log(oj);
    if(oj==84){
      document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
      oj=0;
      console.log(oj);
    }else if(oj>=75){
      document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
    }else if(oj==74){
      document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
    }else if(oj>24){
      document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
      if(oj==74){
        // oj=0;
      }
    }else{
      if(oj==0){
        document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
      }else{
        document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
      }
    }
};
 // может потом как нибудь заработает
// function returnFoto(){
//   oj--;
//   console.log(oj);
//   // document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
//   if(oj==74){
//     document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
//     oj=0;
//   }else if(oj>24){
//     document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
//     if(oj==74){
//       oj=0;
//     }
//   }else{
//     if(oj==0){
//       document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpg');
//     }else{
//       document.querySelector('#recipes > img').setAttribute('src','img/'+[oj]+'.jpeg');
//     }
//   }
// };
// document.querySelector('#returnFoto').addEventListener('click',returnFoto);
 // завтра

// document.querySelector('#recipes > p > img'),addEventListener('click',nextClick);
document.querySelector('#recipes').addEventListener('click',nextClick);
