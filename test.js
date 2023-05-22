$(function() {
    
    $( ".container_partone .btn" ).click(function() {
        $( ".container_partone p").addClass('active');
        $(this).addClass('active');
        $( ".container_partone .test_btn").addClass('active');
    });

    var tl = gsap.timeline();

		tl.to(".container_partone .web", {
            left: "25rem",
			duration: 1, 
			ease: "power1.inOut",
			opacity: 1,
		},"-=0.5")
		tl.to(".container_partone h4", {
            top: "8.6rem",
            duration: 0.5,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
		tl.to(".container_partone .webpage", {
            left: "29rem",
            duration: 1,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.3")
       tl.to(".container_partone p", {
            left: "35rem",
            duration: 0.8,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.5")
        tl.to(".container_partone .btn", {
            left: "50rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
        },"-=0.2")
});