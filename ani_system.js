$(document).ready(function () {

    var tl = gsap.timeline();

		tl.to(".container_partone .belt", {
            left: "14.4rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
		tl.to(".container_partone .box", {
            left: "15rem",
            duration: 0.8,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
		tl.to(".container_partone .img_bg", {
            left: "20rem",
            duration: 0.8,
			ease: "power2.inOut",
            opacity: 0.4,
		},"-=0.8")
       tl.to(".container_partone .title_bg", {
            left: "48.5rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 0.7,
        },"-=0.5")
        tl.to(".container_partone h2", {
            right: "20rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },">")
        tl.to(".container_partone p", {
            right: "18rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")

	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

    if(scrollTop >= 400){

        var t2 = gsap.timeline();

		t2.to(".container_parttwo .school", {
            right: "21rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
       t2.to(".cloth", {
            right: "22rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        t2.to(".container_parttwo .school_bg", {
            right: "16.5rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.5,
        },">")
        t2.to(".container_parttwo .title_bg", {
            left: "19rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.6,
        },"-=0.3")
        t2.to(".container_parttwo h2", {
            left: "20rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo p", {
            left: "20rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")

    }

    if(scrollTop >= 800){

        var t3 = gsap.timeline();

		t3.to(".container_parthree .title_bg", {
            left: "20rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 0.5,
		})
        t3.to(".container_parthree h2", {
            left: "21rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.5")
        t3.to(".container_parthree p", {
            left: "24rem",
			duration: 0.5, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=0.3")

    }

    if(scrollTop >= 1500){

        var t4 = gsap.timeline();

		t4.to(".board", {
            top: "118rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t4.to(".video", {
            top: "130rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    })	   
})
	