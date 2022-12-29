$(document).ready(function () {

    var tl = gsap.timeline();

		tl.to(".container_partone .book", {
            left: "20rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
		tl.to(".container_partone .ink_01", {
            width: "8%",
            duration: 0.5,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
		tl.to(".container_partone .ink_02 ", {
            width: "8%",
            duration: 0.5,
			ease: "power2.inOut",
            opacity:1,
		},">")
       tl.to(".container_partone .book_bg", {
            left: "17.5rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 0.5,
        },"-=0.8")
        tl.to(".container_partone .title_bg", {
            left: "53rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.6,
        },"-=0.5")
        tl.to(".container_partone h2", {
            right: "24rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone p", {
            right: "18rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },">")

	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

    if(scrollTop >= 300){

        var t2 = gsap.timeline();

		t2.to(".school", {
            right: "20rem",
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
            right: "14.5rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.5,
        },"-=0.5")
        t2.to(".container_parttwo .title_bg", {
            right: "22rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 0.7,
        },"-=0.5")
        t2.to(".container_parttwo h2", {
            left: "26rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo p", {
            left: "18rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },">")

    }

    if(scrollTop >= 800){

        var t3 = gsap.timeline();

		t3.to(".board", {
            top: "70rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		})
        t3.to(".video", {
            top: "84rem",
			duration: 0.8, 
			ease: "power2.inOut",
			opacity: 1,
		},"-=1")

    }

    })	   
})
	