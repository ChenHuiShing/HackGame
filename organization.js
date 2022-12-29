$(document).ready(function () {

    var tl = gsap.timeline();

		tl.to(".container_partone .member_one", {
            left: "18rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
		tl.to(".container_partone .member_bg", {
            left: "52rem",
            duration: 0.7,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
		tl.to(".container_partone h5", {
            top: "21.5rem",
            duration: 0.8,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.3")
       tl.to(".container_partone p", {
            right: "25rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")
        tl.to(".container_partone .pen", {
            top: "24.5rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".decorate_img .line_one", {
            right: "32rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")

	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

    if(scrollTop >= 400){

        var t2 = gsap.timeline();

		t2.to(".container_parttwo .member_two", {
            right: "16rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
       t2.to(".container_parttwo .member_bg", {
            right: "52rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".container_parttwo h5", {
            top: "53rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")
        t2.to(".container_parttwo p", {
            left: "26rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")
        t2.to(".container_parttwo .pen", {
            top: "56rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t2.to(".decorate_img .line_two", {
            right: "32rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")

    }

    if(scrollTop >= 1000){

        var t3 = gsap.timeline();

		t3.to(".container_partthree .member_three", {
            left: "18rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
       t3.to(".container_partthree .member_bg", {
            left: "54rem",
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        t3.to(".container_partthree h5", {
            top: "86rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")
        t3.to(".container_partthree p", {
            right: "23rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.3")
        t3.to(".container_partthree .pen", {
            top: "89rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")

    }

    if(scrollTop >= 1120){
        var t4 = gsap.timeline();

		t4.to(".decorate_img .book", {
            right: "24rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.3")
        t4.to(".decorate_img .clock", {
            right: "18rem",
			duration: 0.8, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")


    }

    })	   
})
	