function changeColors() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const box3 = document.getElementById('box3');
    
    box1.classList.add('yellow');
    
    box2.classList.remove('blue');
    box2.classList.add('purple');
    
    box3.classList.toggle('orange');
}

document.getElementById('changeColors').addEventListener('click', changeColors);