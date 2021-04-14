const step = 6;
function moveRight() {
    let car = document.getElementsByTagName('img')[0];
    car.src = 'images/right.jpg';
    car.style.width='100px';
    car.style.height='50px';
    car.style.left = parseInt(car.style.left) + step + 'px';
    }
 function moveUp() {
    let car = document.getElementsByTagName('img')[0];
    car.src = 'images/up.jpg';
    car.style.width='50px';
    car.style.height='100px';
    car.style.top = parseInt(car.style.top) - step + 'px';
 }
 function moveDown() {
    let car = document.getElementsByTagName('img')[0];
    car.src = 'images/down.jpg';
    car.style.width='50px';
    car.style.height='100px';
    car.style.top = parseInt(car.style.top) + step + 'px';
 }
 function moveLeft() {
    let car = document.getElementsByTagName('img')[0];
    car.src = 'images/left.jpg';
    car.style.width='100px';
    car.style.height='50px';
    car.style.left = parseInt(car.style.left) - step + 'px';
}
function pressKey(evt){
    
        switch (evt.keyCode) {
            case 37:
                moveLeft();
                break;
            case 39:
                moveRight();
                break;
            case 38:
                moveUp();
                break;
            case 40:
                moveDown();
                break;
        }
    } 
function docReady() {
    window.addEventListener('keydown', pressKey(evt));
    }

