

    let slideRight = document.getElementById('slide-right');
    let slideLeft = document.getElementById('slide-left');

    const itemsLenght = (slideLeft.querySelectorAll('.slide').length - 1) * 100;
    const itemsRightLenght = 0
    slideLeft.style.transform = `translateY(-${itemsLenght}vh)`;
    slideRight.style.transform= `translateY(${itemsRightLenght}vh)`;

    let trayectoriaRight = 0;
    let trayectoriaLeft = -itemsLenght;

    document.getElementById('arrow-up').addEventListener('click', onUp);
    document.getElementById('arrow-down').addEventListener('click', onDown);

    function onUp(){
        startUpAnimation()
        console.log("onUp");
    }
    function onDown(){
        startDowAnimation()
        console.log("onDown");
    }

    function startDowAnimation(){
        trayectoriaLeft +=100;
        console.log(trayectoriaLeft);

        let slideLeft = document.getElementById('slide-left');

        if (slideLeft) {
            slideLeft.style.transform = `translateY(${trayectoriaLeft}vh)`;
            if (trayectoriaLeft == 0) {
                trayectoriaLeft = -itemsLenght;
            }   
        } else{
            console.warn("El elemento no esta");
        }
    }

    function startUpAnimation(){
        console.log(trayectoriaLeft);

        let slideRight = document.getElementById('slide-right');

        if (slideRight) {
            slideRight.style.transform = `translateY(${trayectoriaRight}vh)`;
            trayectoriaRight -=100;
            if (trayectoriaRight == -(slideRight.querySelectorAll('.slide').length ) * 100  ) {
                trayectoriaRight = 0;
            }   
        } else{
            console.warn("El elemento no esta");
        }
    }