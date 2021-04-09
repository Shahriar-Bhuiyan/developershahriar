function int(){ 
    const slide = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [
        'radial-gradient(#2B3760,#0B1023)',
        'radial-gradient( #EA2027 , #ff4757)',
        'radial-gradient(#4E4342,#161616)'
    ];  
    //tracker 
    let current = 0; 
    let scrollSlide = 0;
    slide.forEach((slide,index)=>{ 
    slide.addEventListener("click",function(){ 
       changeDots(this);  
       nextSlide(index); 
       scrollSlide = index;
    });
    
    }); 
    function changeDots(dot){ 
        slide.forEach((e)=>{ 
            e.classList.remove("active")
        }); 
        dot.classList.add("active");
    }; 
     
    function nextSlide(pageNumber){ 
        const nextPage = pages[pageNumber]; 
        const currentPage = pages[current];  
        const nextLeft = nextPage.querySelector(".hero .model-left");  
        const nextRight = nextPage.querySelector(".hero .model-right");  
        const currentLeft = currentPage.querySelector(".hero .model-left");   
        const currentRight = currentPage.querySelector(".hero .model-right");  
        const nextText = document.querySelector(".details");  
        const protfolio = document.querySelector(".portfolio"); 
         
        const tl = new TimelineMax( 
            { 
                onStart: function(){ 
                    slide.forEach(slide=>{ 
                        slide.style.pointerEvents = "none";
                    });
                }, 
                onComplete: function(){ 
                 slide.forEach(slide=>{ 
                     slide.style.pointerEvents ="all"
                 })
                }
            }
            
        )
        tl.fromTo( 
            currentLeft, 
             0.3, 
             {y:"-10%"}, 
             {y:"-100%"}  
             ) 
             .fromTo( 
                 currentRight, 
                 0.3, 
                 {y:"10%"} ,
                 {y:"-100%"}, 
                 "-=0.2"
             ) 
             .to( 
                 protfolio,  
                 0.3, 
                 {backgroundImage:backgrounds[pageNumber]}
                ) 
                .fromTo( 
                    currentPage, 
                    0.3, 
                    {opacity:1,pointerEvents:"all"}, 
                    {opacity:0,pointerEvents:"none"}
                ) 
                .fromTo( 
                    nextPage, 
                    0.3, 
                    {opacity:0,pointerEvents:"none"}, 
                    {opacity:1,pointerEvents:"all"}, 
                    "-=0.4"
                ) 
                .fromTo( 
                    nextLeft, 
                    0.3, 
                    {y:"-100%"}, 
                    {y:"-10%"}, 
                     

                )  
                .fromTo( 
                    nextRight, 
                    0.3, 
                    {y:"-100%"}, 
                    {y:"10%"},  
                    "-=0.5"
                     

                ) 
                .fromTo( 
                    nextText, 
                    0.4, 
                    {opacity:0,y:0}, 
                    {opacity:1,y:0}, 
                    
                ) 
                .set(nextLeft, 
                    {clearProps:"all"} 
                    ) 
                    .set(nextRight, 
                        {clearProps:"all"} 
                        )
                current  = pageNumber;

    }  
    document.addEventListener("wheel", throttle(scrollChange, 1500));
    document.addEventListener("touchmove", throttle(scrollChange, 1500));

    function switchDots(dotNumber) {
        const activeDot = document.querySelectorAll(".slide")[dotNumber];
        slide.forEach(slide => {
            slide.classList.remove("active");
        });
        activeDot.classList.add("active");
    }

    function scrollChange(e) {
        if(e.deltaY > 0){
            scrollSlide ++;
        } else {
            scrollSlide--;
        }

        if(scrollSlide > pages.length-1) {
            scrollSlide = 0;
        }
        if(scrollSlide < 0) {
            scrollSlide = pages.length-1;
        }
        nextSlide(scrollSlide);
        switchDots(scrollSlide);
    }; 
    
    
    
  } 
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    }; 
   
  }
int();