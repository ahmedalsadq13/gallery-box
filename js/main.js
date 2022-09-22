const sun = document.getElementById('sun');
const wave1 = document.getElementById('wave1');
const wave2 = document.getElementById('wave2');
const wave3 = document.getElementById('wave3');
const mountain1 = document.getElementById('mountain1');
const mountain2 = document.getElementById('mountain2');
const mountain3 = document.getElementById('mountain3');
const mountain4 = document.getElementById('mountain4');
const mountain5 = document.getElementById('mountain5');
const mountain6 = document.getElementById('mountain6');
const birdsBlock = document.getElementById('birds-block');
const bird1 = document.getElementById('bird1');
const bird2 = document.getElementById('bird2');
const bird3 = document.getElementById('bird3');
const treesBlock = document.getElementById('trees-block');
const rightTree = document.getElementById('right-tree');
const leftTree = document.getElementById('left-tree');
const stage1 = [sun, wave1, wave2, wave3, mountain6, mountain5, mountain4, mountain3, mountain2, mountain1, birdsBlock,treesBlock , rightTree, leftTree];

/* First Stage */
window.onscroll = ()=>{
    let valueOfY = scrollY;
    sun.style.transform = `translateY(${valueOfY * 1.5}px)`;    
    wave1.style.transform = `translateY(${valueOfY}px)`;    
    wave2.style.transform = `translateY(${valueOfY}px)`;    
    wave3.style.transform = `translateY(${valueOfY}px)`;  
    birdsBlock.style.transform = `translate(${-valueOfY}px, ${valueOfY}px)`;  
    mountain6.style.transform = `translateY(${valueOfY*3.3}px)`
    mountain5.style.transform = `translateY(${valueOfY*2.8}px)`;    
    mountain4.style.transform = `translateY(${valueOfY*2.6}px)`;    
    mountain3.style.transform = `translateY(${valueOfY*3.3}px)`;    
    mountain2.style.transform = `translateY(${valueOfY*2.4}px)`;    
    treesBlock.style.transform = `translateY(${valueOfY*2.5}px)`;    
    mountain1.style.transform = `translateY(${valueOfY*2}px)`; 
    rightTree.style.width = `${valueOfY *2}px`;   
    rightTree.style.right = `${valueOfY - 410}px`;   
    leftTree.style.width = `${valueOfY *2}px`;   
    if (valueOfY > 366) {
        rightTree.style.width = `732px`; 
        leftTree.style.width = `732px`; 
        rightTree.style.right = `-40px`; 
         
    }
    if (valueOfY > 1133) {
        stage1.map(item=>item.style.display = `none`);
    } else {
        stage1.map(item=>item.style.display = ``);   
    }
}
