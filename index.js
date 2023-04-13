    for(var i=0;i<document.querySelectorAll(".drum").length;i++){
        document.querySelectorAll("button")[i].addEventListener("click",
            function (){

                var name=this.innerHTML;
                    buttonAnimation(name);
                switch (name) {
                    case 'w':
                        var audio=new Audio("sounds/tom-1.mp3");
                        break;
                    case 'a':
                        var audio=new Audio("sounds/tom-2.mp3");
                        break;
                    case 's':
                        var audio=new Audio("sounds/tom-3.mp3");
                        break;
                    case 'd':
                        var audio=new Audio("sounds/tom-4.mp3");
                        break;
                    case 'j':
                        var audio=new Audio("sounds/snare.mp3");
                        break;
                    case 'k':
                        var audio=new Audio("sounds/crash.mp3");
                        break;
                    case 'l':
                        var audio=new Audio("sounds/kick-bass.mp3");
                        break;
                    default:
                        console.log("404 erro mohit");

                }

                audio.play();
            })


    }

    document.addEventListener("keydown",function (){
        var name=event.key;
        buttonAnimation(name);
        switch (name) {
            case 'w':
                var audio=new Audio("sounds/tom-1.mp3");
                break;
            case 'a':
                var audio=new Audio("sounds/tom-2.mp3");
                break;
            case 's':
                var audio=new Audio("sounds/tom-3.mp3");
                break;
            case 'd':
                var audio=new Audio("sounds/tom-4.mp3");
                break;
            case 'j':
                var audio=new Audio("sounds/snare.mp3");
                break;
            case 'k':
                var audio=new Audio("sounds/crash.mp3");
                break;
            case 'l':
                var audio=new Audio("sounds/kick-bass.mp3");
                break;
            default:
                console.log("404 erro mohit");
        }
        audio.play();
    })

    function buttonAnimation(currentKey){
        var activeButtons=document.querySelector("."+currentKey);
        activeButtons.classList.add("pressed");
        setTimeout( function (){
            activeButtons.classList.remove("pressed")

        },100);
    }