const bugs = document.querySelectorAll('.bug');
const carrots = document.querySelectorAll('.carrot');
const start = document.querySelector('.function__start');
const counter = document.querySelector('.function__counter');
const replay = document.querySelector('.function__replay');
const failed = document.querySelector('.function__failed');
const win = document.querySelector('.function__win');

const alert = document.querySelector('.alert')
const bg = document.querySelector('.bg')
const bug_pull = document.querySelector('.bug_pull')
const carrot_pull = document.querySelector('.carrot_pull')
const game_win = document.querySelector('.game_win')

let count=0;

start.addEventListener('click',()=>{
    bg.play();
    count=0;
    counter.innerHTML=count;
    start.classList.add('hide');
    counter.classList.remove('hide');
    replay.classList.remove('hide');
    bugs.forEach( (bug) => {
        random(bug);
        bug.classList.remove('hide')
    });
    carrots.forEach( (carrot) => {
        random(carrot);
        carrot.classList.remove('hide')
    });
})
replay.addEventListener('click', ()=>{
    alert.play();
    bg.pause();  
    start.classList.remove('hide');
    counter.classList.add('hide');
    replay.classList.add('hide');
    failed.classList.add('hide');
    win.classList.add('hide');
    bugs.forEach( (bug) => {
        bug.classList.add('hide')
        bug.disabled = false;
    });
    carrots.forEach( (carrot) => {
        carrot.classList.add('hide')
        carrot.disabled = false;
    });
})

bugs.forEach( (bug) => {
    bug.addEventListener('click', ()=>{
        bug_pull.play();
        bg.pause();  
        failed.classList.remove('hide');
        counter.classList.add('hide');
        replay.classList.remove('hide');
        carrots.forEach( (carrot) => {
            carrot.disabled = true;
        });
    })
  });


  carrots.forEach( (carrot) => {
    carrot.addEventListener('click', ()=>{
        carrot_pull.play();
        carrot.classList.add('hide');
        count=count+1;
        counter.innerHTML=count;
        if(count==10){
            bg.pause();  
            game_win.play();
            win.classList.remove('hide');
            bugs.forEach( (bug) => {
                bug.disabled = true;
            });
        }
    })
  });


  function random (a) {
  const x = Math.random()*1200;
  const y = Math.random()*250;
  console.log(Math.random());
  a.style.position = 'absolute';
  a.style.left = `${x}px`;
  a.style.top = `${y}px`;
  }
