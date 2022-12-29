$(function(){

	var timeline = gsap.timeline({defaults: {duration: 0.8}});
		timeline.fromTo(".health_care, .money", {
			opacity: 0, 
			width: "2%",
		},{
			opacity: 1, 
			width: "8%",
			delay: 1.5,
		})
        .fromTo(".dine", {
			opacity: 0, 
			width: "2%",
		},{
			opacity: 1, 
			width: "7%",
		},"-=0.8")
        .fromTo(".timeline ul > li:first-child p", {
			opacity: 0, 
			right: "20rem",
		},{
			opacity: 1, 
			right: "22rem",
			delay: 1.5,
		},"-=1.5")
		.fromTo(".timeline ul > li:nth-child(2) p", {
			opacity: 0, 
            left: "22rem",
		},{
			opacity: 1, 
			left: "24rem",
		})
		.fromTo(".timeline ul > li:nth-child(3) p", {
			opacity: 0, 
            right: "20rem",
		},{
			opacity: 1, 
			right: "22rem",
		})
        .fromTo(".timeline .hover_modal", {
			opacity: 0, 
            bottom: "-38rem",
		},{
			opacity: 1, 
            bottom: "-36rem",
		})
        .fromTo(".timeline ul > li:nth-child(4) p", {
			opacity: 0, 
            left: "22rem",
		},{
			opacity: 1, 
			left: "24rem",
		})
        .fromTo(".timeline .hover_modal_2", {
			opacity: 0, 
            bottom: "-44rem",
		},{
			opacity: 1, 
            bottom: "-42rem",
		})

});