window.onscroll = function() {myFunction()};

//change banner design
function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        setWhite(true);
        arrowDown(false);
        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            aboutZoom(true);
        }
        else{
            aboutZoom(false);
        }
    }else{
        setWhite(false);
        arrowDown(true);
    }

    if(screen.width >= 700 && screen.width < 1000){
        if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
            buttonSlide(holder);
            if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
                testimonialSlide(true);
                if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 1000 && screen.width < 1300){
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
            buttonSlide(holder);
            if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
                testimonialSlide(true);
                if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 1300 && screen.width < 1400){
        if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
            buttonSlide(holder);
            if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450){
                testimonialSlide(true);
                if(document.body.scrollTop > 2600 || document.documentElement.scrollTop > 2600){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 1400 && screen.width < 1800){
        if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
            buttonSlide(holder);
            if(document.body.scrollTop > 1650 || document.documentElement.scrollTop > 1650){
                testimonialSlide(true);
                if(document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 1800 && screen.width < 2200){
        if(document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200){
            buttonSlide(holder);
            if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700){
                testimonialSlide(true);
                if(document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 2200 && screen.width < 2600){
        if(document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
            buttonSlide(holder);
            if(document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
                testimonialSlide(true);
                if(document.body.scrollTop > 4200 || document.documentElement.scrollTop > 4200){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 2600 && screen.width < 3000){
        if(document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
            buttonSlide(holder);
            if(document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300){
                testimonialSlide(true);
                if(document.body.scrollTop > 5000 || document.documentElement.scrollTop > 5000){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 3000 && screen.width < 3500){
        if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600){
            buttonSlide(holder);
            if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
                testimonialSlide(true);
                if(document.body.scrollTop > 5800 || document.documentElement.scrollTop > 5800){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
    else if(screen.width >= 3500 && screen.width < 4000){
        if(document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
            buttonSlide(holder);
            if(document.body.scrollTop > 3500 || document.documentElement.scrollTop > 3500){
                testimonialSlide(true);
                if(document.body.scrollTop > 6700 || document.documentElement.scrollTop > 6700){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }else{
        if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900){
            buttonSlide(holder);
            if(document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600){
                testimonialSlide(true);
                if(document.body.scrollTop > 6900 || document.documentElement.scrollTop > 6900){
                    contactBounce(0);
                }
            }
            else{
                testimonialSlide(false);
            }
        }
    }
}


//header
function setWhite(active){
    var header = document.getElementById("HomeHeader");
    var logo = document.getElementById("logo");
    var navLinks = document.querySelectorAll('nav a');
    var anchor = document.getElementsByTagName('a');

    if(active){
        header.style.backgroundColor = "white";
        logo.style.color = "black";
        for(var i = 0; i < anchor.length; ++i){
            if(anchor[i] == navLinks[i]){
                anchor[i].style.color = "#777";
            }
        }
    }
    else{
        header.style.backgroundColor = "black";
        logo.style.color = "white";
        for(var i = 0; i < anchor.length; ++i){
            if(anchor[i] == navLinks[i]){
                anchor[i].style.color = "white";
            }
        }
    }
    
}

//Latest Project buttons
var holder = 1;
function buttonSlide(group){
    var button1 = document.getElementById("oneV");
    var button2 = document.getElementById("oneC");
    var button3 = document.getElementById("twoV");
    var button4 = document.getElementById("twoC");
    var button5 = document.getElementById("threeV");
    var button6 = document.getElementById("threeC");
    var button7 = document.getElementById("fourV");
    var button8 = document.getElementById("fourC");

    setTimeout(function() {
        if(group == 1){
            effect(button1, button2);
            reset(button3, button4);
            reset(button7, button8);
        }else if(group == 2){
            effect(button3, button4);
            reset(button1, button2);
            reset(button5, button6);
        }else if(group == 3){
            effect(button5, button6);
            reset(button3, button4);
            reset(button7, button8);
        }else if(group == 4){
            effect(button7, button8);
            reset(button1, button2);
            reset(button5, button6);
        }else if(group > 4){
            holder = 1;
            buttonSlide(1);
        }else{
            holder = 4;
            buttonSlide(4);
        }
    }, 500);


    function effect(button2, button1){
        setTimeout(function() {
            button1.style.transform = "translateY(0)";
            button1.style.opacity = "1";
        }, 300); 
        button2.style.transform = "translateY(0)";
        button2.style.opacity = "1";
    }

    function reset(button2, button1){
        button1.style.transform = "translateY(50px)";
        button1.style.opacity = "0";
        button2.style.transform = "translateY(50px)";
        button2.style.opacity = "0";
    }
}


//Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    buttonSlide(holder += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("folio_wrapper");
    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex = slides.length}
    for(i = 0; i<slides.length; ++i){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


//Looping word
iterator(0, 0, "");

function iterator(b, iter, title){
    var skills = [
        ['m', 'y', 'S', 'Q', 'L'],
        ['P', 'y', 't', 'h', 'o', 'n'],
        ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'],
        ['C', 'S', 'S', '3'],
        ['H', 'T', 'M', 'L'],
        ['J', 'a', 'v', 'a'],
        ['A', 'I']
    ];
    if(skills.length > b){
        if(skills[b].length > iter){
            task(b, iter);
        }
        else if(skills[b].length == iter){
            pause(b);
        }
    }
    else if(skills.length == b){
        iterator(0, 0, "");
    }

    function task(b, iter) { 
        setTimeout(function() {
            title = title + skills[b][iter];
            document.getElementById("sequence").innerHTML = title;
            iterator(b, ++iter, title);
        }, 250); 
    } 

    function pause(b){
        setTimeout(function() {
            iterator(++b, 0, "");
        }, 800); 
    }
}

//about zoom
function aboutZoom(active){
    var about = document.querySelector(".greeting_info");
    var button = document.querySelector(".greeting .button_wrapper");

    if(active){
        about.style.opacity = "1";
        about.style.transform = "translateX(0)";
        button.style.opacity = "1";
        button.style.transform = "translateX(0)";
    }
    else{
        about.style.opacity = "0.5";
        about.style.transform = "translateX(-100px)";
        button.style.opacity = "0.5";
        button.style.transform = "translateX(50px)";
    }
    
}

//testimonials slide
function testimonialSlide(active){
    var text = document.querySelector(".Testimonial_main_wrapper .Testimonial_main");

    if(active){
        text.style.opacity = "1";
        text.style.transform = "translateX(0)";
    }
}

//Contact bounce
function contactBounce(i){
    var img1 = document.getElementById("facebook");
    var img2 = document.getElementById("github");
    var img3 = document.getElementById("email");
    var img4 = document.getElementById("location");
    var img5 = document.getElementById("linkedin");
    var img6 = document.getElementById("phone");
    var images = [img1, img2, img3, img4, img5, img6];
    if(i < images.length){
        setTimeout(function() {
            images[i].style.transform = "translateY(0)";
            images[i].style.opacity = "1";
            contactBounce(++i);
        }, 300); 
    }
}

//down arrow
arrowDown(true);
function arrowDown(active){
    var arrow = document.querySelector(".main_wrapper .arrow_wrapper .arrow");

    if(active){
        setTimeout(function() {  
            arrow.style.opacity = "1";
        }, 3500);
    }
    else{
        arrow.style.opacity = "0";
    }
}