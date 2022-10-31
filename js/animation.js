

  // 読み込み完了後にページが表示される
  // 最初のアニメーションがちゃんと表示されるように調整が必要。
window.onload = function () {
  console.log("ページ読み込み完了")
    const target = document.getElementById('wrapper');
    const target2 = document.getElementById('loader_box');

    const target3 = document.getElementById('char1');
    const target4 = document.getElementById('char2');
    const target5 = document.getElementById('char3');
    const target6 = document.getElementById('char4');
    const target7 = document.getElementById('char5');
    const target8 = document.getElementById('mv-subtitle_p');
    const target9 = document.getElementById('globe');
    const target10 = document.getElementById('globe_box');
    const target11 = document.getElementById('world_box');
    const target12 = document.querySelector('a.scrollArrow');
    // target2.style.visibility = 'hidden';
    target2.style.opacity = '0';
    setTimeout(function(){
      scrollTo(0,0);
      target.style.opacity = '1';
      target.style.visibility = 'visible';
      target2.style.display = "none";
      console.log("表示完了")
      target3.classList.add('title-anim');
      target4.classList.add('title-anim');
      target5.classList.add('title-anim');
      target6.classList.add('title-anim');
      target7.classList.add('title-anim');
      target8.classList.add('title-anim');
      target9.classList.add('title-anim');
      target10.classList.add('title-anim');
      target11.classList.add('title-anim');
      // console.log("アニメーション設定完了")   
      setTimeout(function(){
        target12.style.opacity = '1';
      },4000);
    },1000);
    
    }


    

// パララックス（自作）
// scrollY();
// function scrollY(){
//   var ys = window.pageYOffset ;
//   // console.log(ys);
//   document.documentElement.style.setProperty('--ys', `${ys}px`);
// }
// window.addEventListener('scroll', scrollY );

// パララックス(Rellax)
const bg = new Rellax('.bg-image_box',{
  speed: 10
})

const kumo = new Rellax('.mv-bg-up li',{
  speed: 7
})



// 下に行ったらぼかし
var scrollBlur = function() {
  const target20 = document.querySelector('.bg-image');
  const target21 = document.querySelector('.mv-bg-up ul');
  const target22 = document.querySelector('.globe_box1');
  const target_works = document.querySelector('.works');
  const target23 = document.querySelector('a.scrollArrow');
  var triggerMargin_ybs = 200;
  var ybs = (window.pageYOffset - triggerMargin_ybs)/100;
  if ( ybs > 4 ) {
    ybs = 4;
  } else if ( ybs < 1) {
    ybs = 1;
  }
  var ybss = (window.pageYOffset - triggerMargin_ybs)/100;
  if ( ybss > 4 ) {
    ybss = 4;
  } else if ( ybss < 0) {
    ybss = 0;
  }
  if (window.innerHeight > target_works.getBoundingClientRect().top + triggerMargin_ybs){
    document.documentElement.style.setProperty('--ybs', `${ybs}px`);
    document.documentElement.style.setProperty('--ybss', `${ybss}px`);
    target20.classList.add('blur');
    target21.classList.add('blur');
    target22.classList.add('blur');
    target23.style.opacity = '0';
  } else {
    target20.classList.remove('blur');
    target21.classList.remove('blur');
    target22.classList.remove('blur');
  }
}

window.addEventListener('scroll', scrollBlur );

