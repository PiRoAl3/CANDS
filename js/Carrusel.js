

    let slideRight = document.getElementById('slide-right');
    let slideLeft = document.getElementById('slide-left');

    const itemsLenght = (slideLeft.querySelectorAll('.slide').length - 1) * 100;
    slideLeft.style.transform = `translateY(-${itemsLenght}vh)`;

    let trayectoriaRight = 100;
    let trayectoriaLeft = 200;

    document.getElementById('arrow-up').addEventListener('click', onUp);
    document.getElementById('arrow-down').addEventListener('click', onDown);

    function onUp(){
        console.log("onUp");
    }
    function onDown(){
        startDowAnimation()
        console.log("onDown");
    }

    function startDowAnimation(){
        trayectoriaLeft +=100;
        console.log(trayectoriaLeft)
        if (trayectoriaLeft) {
            trayectoriaLeft.style.transform = `translateY(${trayectoriaLeft}vh)`;
            if (trayectoriaLeft == 0) {
                trayectoriaLeft = -300;
            }   
        } else{
            console.warn("El elemento no esta");
        }
    }