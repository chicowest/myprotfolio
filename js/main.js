
    // let $btns = $('.project-area .button-group button');

    // $btns.click(function(e){

    //     $('.project-area .button-group button').removeClass('active');
    //     e.target.classList.add('active');

    //     let selector = $(e.target).attr('data-fliter');
    //     $('.project-area .grid').isotope({
    //         fliter: selector
    //     });

    //     return false;


 

    // })


    const filterButtons = document.querySelector("#filter-btns").children;
    const items = document.querySelector(".Portfolio-gallery").children;


    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", function(){
            for (let j =0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove("active")
            }
            this.classList.add("active");
            const target = this.getAttribute("data-target")


            for (let k = 0; k < items.length; k++) {
                items[k].style.display = "none";
                if (target == items[k].getAttribute("data-id")){
                    items[k].style.display = "block";


                }
                if (target == "all") {
                    items[k].style.display = "block";
                }
            }
        });
    
    };

    $(".project-area .row grid .Portfolio-gallery .filter-buttons #btn1").trigger("click");

    
    $(".project-area .item .test-popup-link").magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });

    //owl-carousel
    console.log('Hurray');

    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 2,
        nav: true,
        loop: true,
        lazyLoad: true,
        margin: 5,
        padding: 5,
        stagePadding: 5,
        responsive: {
            0 : {
                items: 1,
                dots: false
            },
            485 : {
                items: 2,
                dots: false
            },
            /*--- add more pictures
            728 : {
                items: 3,
                dots: false
            },

            
            960 : {
                items: 4,
                dots: false
            }
            1200 :{
                items: 5,
                dots: true
            }  */
        }
        });
            






/*
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


*/






