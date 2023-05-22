$(document).ready(function () {

    var tl = gsap.timeline();

		tl.to(".container_partone .title_bg", {
            top: "8rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
		tl.to(".container_partone h2", {
            top: "8.5rem",
            duration: 0.5,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.3")
		tl.to(".container_partone .img_bg", {
            left: "10rem",
            duration: 0.5,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
       tl.to(".container_partone h4", {
            left: "14rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone .pin", {
            top: "17rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone .small_titlebg01", {
            right: "15rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        tl.to(".container_partone .check01", {
            right: "32rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone .text_one", {
            right: "19rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.7")
        tl.to(".container_partone .small_titlebg02", {
            right: "15rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        tl.to(".container_partone .check02", {
            right: "31.5rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone .text_two", {
            right: "16rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.7")
        tl.to(".container_partone .line2", {
            left: "36rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.7,
        },"-=0.5")
        tl.to(".container_partone .line3", {
            left: "36.5rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.7,
        },"-=0.2")

	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

    if(scrollTop >= 400){

        var t2 = gsap.timeline();

		t2.to(".container_parttwo .title_bg", {
            left: "11rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 0.8,
		},"-=0.5")
       t2.to(".container_parttwo h3", {
            left: "15rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        t2.to(".dialog_container img:first-child", {
            left: "14rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo .text01", {
            left: "18rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".dialog_container img:nth-child(2)", {
            right: "3.5rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo .text02", {
            right: "6rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },">")

    }

    if(scrollTop >= 600){

        var t3 = gsap.timeline();

		t3.to(".dialog_container img:nth-child(3)", {
            left: "14rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t3.to(".container_parttwo .text03", {
            left: "18rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    if(scrollTop >= 800){

        var t4 = gsap.timeline();

		t4.to(".dialog_container img:nth-child(4)", {
            right: "3.5rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t4.to(".container_parttwo .text04", {
            right: "6rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    if(scrollTop >= 1100){

        var t5 = gsap.timeline();

		t5.to(".dialog_container img:nth-child(5)", {
            left: "14rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t5.to(".container_parttwo .text05", {
            left: "18rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    if(scrollTop >= 1200){

        var t5 = gsap.timeline();

		t5.to(".container_partthree .title_bg", {
            top: "118rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t5.to(".container_partthree #start_modal", {
            top: "118rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    if(scrollTop >= 1500){

        var t6 = gsap.timeline();

		t6.to(".container_partthree .dialog_bg", {
            top: "117rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 0.8,
		})
        t6.to(".container_partthree img:nth-child(6)", {
            left: "17.5rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")
        t6.to(".container_partthree img:nth-child(7)", {
            left: "17.5rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")
        t6.to(".container_partthree .subtitle_one", {
            left: "20rem",
			duration: 0.5, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.7")
        t6.to(".container_partthree .subtitle_two", {
            left: "20rem",
			duration: 0.5, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree img:nth-child(3)", {
            left: "30.5rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .goal_text", {
            left: "41rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.3")
        t6.to(".container_partthree img:nth-child(4)", {
            left: "47.5rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .circle", {
            left: "59rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree h6", {
            left: "64.5rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .arrow_top", {
            top: "128rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .plan_text", {
            top: "132rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.7")
        t6.to(".container_partthree .arrow_right", {
            right: "17.5rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .execute_text", {
            right: "20rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.7")
        t6.to(".container_partthree .arrow_bottom", {
            top: "146rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .check_text", {
            left: "58rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.7")
        t6.to(".container_partthree .arrow_left", {
            right: "36.5rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t6.to(".container_partthree .improve_text", {
            left: "58rem",
			duration: 0.6, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.7")
        t6.to(".container_partthree .two_arrow", {
            top: "146rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")

    }

    })	   
})
	