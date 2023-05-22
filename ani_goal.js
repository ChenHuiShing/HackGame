$(document).ready(function () {

    var tl = gsap.timeline();

		tl.to(".container_partone .calander", {
            right: "16rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
		tl.to(".container_partone .calander_bg", {
            right: "16rem",
            duration: 0.5,
			ease: "power2.inOut",
            opacity: 0.6,
		},"-=0.5")
		tl.to(".container_partone .title_bg", {
            left: "19.5rem",
            duration: 0.5,
			ease: "power2.inOut",
            opacity: 0.8,
		},">")
       tl.to(".container_partone h2", {
            left: "22%",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        tl.to(".container_partone p", {
            left: "20rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")

	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

    if(scrollTop >= 500){

        var t2 = gsap.timeline();

		t2.to(".container_parttwo .paper", {
            left: "20rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
       t2.to(".container_parttwo .magnifier", {
            left: "30rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.8")
        t2.to(".container_parttwo .img_bg", {
            left: "19rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.5,
        },"-=0.5")
        t2.to(".container_parttwo .title_bg", {
            right: "33rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.7,
        },"-=0.5")
        t2.to(".container_parttwo h2", {
            right: "35rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo p", {
            right: "18rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },">")

    }

    if(scrollTop >= 1000){

        var t3 = gsap.timeline();

		t3.to(".board", {
            top: "85rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t3.to(".video", {
            top: "96rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    })	   
})
	