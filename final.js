        const container = document.getElementById('container');
        const circle = document.getElementById('circle');
        var posX=0;
        var posY=0;
        var direction = 'right';
        var rotationdegree=0;


        function rotateAndMoveCircle() {
            if (direction == 'right') {
                posX += 1;
                if (posX+2 >= container.offsetWidth - circle.offsetWidth) {
                    direction = 'up';
                }
            } else if (direction == 'up') {
                posY += 1;
                if (posY+2>= container.offsetHeight - circle.offsetHeight) {
                    direction = 'left';
                }
            } else if (direction == 'left') {
                posX -= 1;
                if (posX+2<= 0) {
                    direction = 'down';
                }
            }
            else if (direction == 'down') {
                posY -= 1 ;
                if (posY+2<= 0) {
                    direction = 'right';
                }
            }
            setTimeout(()=>{   
                rotateAndMoveCircle();
            },100000);
            rotationdegree+=120;
            circle.style.transform = `rotate(${rotationdegree}deg)`;
            circle.style.left=posX+"px";
            circle.style.bottom=posY+"px";
            requestAnimationFrame(rotateAndMoveCircle);

        }