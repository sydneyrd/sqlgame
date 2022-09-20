
import { useEffect } from "react";
import React from "react";
import './slot.css'
import { useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
// const { forwardRef, useRef, useImperativeHandle } = React;


 export const WinningSlots = ({completedQuestion, incorrectSolutions, winLoss, ref}) => {
  const spinner = useRef()
  const reseter = useRef()

  
  useEffect(() => {
    init()
    spin()
    }, [winLoss])

  // useEffect(() => {
  //   init()
  //   }, [reseter])
  // useEffect(() => {
  //   if (spinner)
  //   init()
  //   else if (reseter)
  //   init()
  //   else {}
  // }, [])
  // useEffect(() => {
  //   spin()
  //   }, [spinner])

  //   useEffect(() => {
  //     init()
  //     }, [reseter])

      // useEffect(() => {
      //   if (completedQuestion === true ){ spin(); init(); }
      //   else { }
        
        
      // }, [completedQuestion])


   
      useImperativeHandle(ref, () => ({
        getWin() {
          init();
          spin();
        }
      })); 

    const items = [
      '🍭',
      '❌',
      '⛄️',
      '🦄',
      '🍌',
      '💩',
      '👻',
      '😻',
      '💵',
      '🤡',    
      '🦖',
      '🍎',
      '😂',
      '🖕',
    ];
    const doors = document.querySelectorAll('.door');

    // document.querySelector('#spinner').addEventListener('click', spin);
    // document.querySelector('#reseter').addEventListener('click', init);
  
    function init(firstInit = true, groups = 1, duration = 1) {
      let winningNumber = Math.floor(Math.random() * items.length)
      for (const door of doors) {
        if (firstInit) {
          door.dataset.spinned = '0';
        } else if (door.dataset.spinned === '1') {
          return;
        }
  
        const boxes = door.querySelector('.boxes');
        const boxesClone = boxes.cloneNode(false);
        const pool = ['❓'];
  
        if (!firstInit) {
          const arr = [];
          for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
            arr.push(...items);
          }
          pool.push(...shuffle(arr));
  
          boxesClone.addEventListener(
            'transitionstart',
            function () {
              door.dataset.spinned = '1';
              this.querySelectorAll('.box').forEach((box) => {
                box.style.filter = 'blur(1px)';
              });
            },
            { once: true }
          );
  
          boxesClone.addEventListener(
            'transitionend',
            function () {
              this.querySelectorAll('.box').forEach((box, index) => {
                box.style.filter = 'blur(0)';
                if (index > 0) this.removeChild(box);
              });
            },
            { once: true }
          );
        }
    

        for (let i = pool.length - winningNumber; i >= 0; i--) {
          const box = document.createElement('div');
          box.classList.add('box');
          box.style.width = door.clientWidth + 'px';
          box.style.height = door.clientHeight + 'px';
          box.textContent = pool[i];
          boxesClone.appendChild(box);
        }
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
        door.replaceChild(boxesClone, boxes);
      }
    }
  

  



    async function spin() {
      init(false, 1, 2);
      
      for (const door of doors) {
        const boxes = door.querySelector('.boxes');
        const duration = parseInt(boxes.style.transitionDuration);
        boxes.style.transform = 'translateY(0)';
        await new Promise((resolve) => setTimeout(resolve, duration * 100));
      }
    }
  
// function shuffle([...arr]) {
//   let m = arr.length;
  
//    while (m) {
//   const i = Math.floor(Math.random() * m--); 
//     [arr[m], arr[i]] = [arr[i], arr[m]];
//   }
//   return arr;
// }

function shuffle([...arr]){
  let m = arr.length;
    const i = Math.floor(Math.random() * m);
    [arr[i], arr[i]] = [arr[i], arr[i]];
    
    return arr;
  } 



  // init();

  


  return <div id="app">
  <div class="doors">
    <div class="door">
      <div class="boxes">
         <div class="box">?</div> 
      </div>
    </div>

    <div class="door">
      <div class="boxes">
        <div class="box">?</div> 
      </div>
    </div>

    <div class="door">
      <div class="boxes">
        <div class="box">?</div> 
      </div>
    </div>
  </div>

  <div class="buttons">
    <button ref={spinner} onClick={(click) => {spin()}} id="spinner">Play</button>
    <button ref={reseter} onClick={(click) => {init()}} id="reseter">Reset</button>
  </div>
</div>
}

