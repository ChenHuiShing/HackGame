$(function() {
	$(window).scroll(function(){

	  let scrollTop=$(this).scrollTop();
	  let value = window.scrollY;
	  console.log(scrollTop);

      //優質管理
	   if(scrollTop >= 500){

            var tl = gsap.timeline();

            tl.to(".manege_container img:first-child", {
                left: "21rem",
                duration: 0.8, 
                ease: "power1.inOut",
                opacity: 1,
            })
            tl.to(".manege_container img:nth-child(2)", {
                top: "60.3rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            })
            tl.to(".manege_container .title", {
                top: "60rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
        tl.to(".manege_container p", {
                top: "64rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },">")
            tl.to(".manege_container .btn_to_page", {
                left: "50.5rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
       }

        //課程動畫

       if(scrollTop >= 850){

            var t2 = gsap.timeline();

            t2.to(".animation_container img:first-child", {
                right: "22rem",
                duration: 0.8, 
                ease: "power1.inOut",
                opacity: 1,
            })
            t2.to(".animation_container img:nth-child(2)", {
                top: "90rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            })
            t2.to(".animation_container .title", {
                top: "89.7rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
        t2.to(" .animation_container ul", {
                top: "94rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },">")
            t2.to(".animation_container .btn_to_page", {
                left: "30rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
       }

        //資訊分享

       if(scrollTop >= 1300){

            var t3 = gsap.timeline();

            t3.to(".info_share_container img:first-child", {
                left: "23rem",
                duration: 0.8, 
                ease: "power1.inOut",
                opacity: 1,
            })
            t3.to(".info_share_container img:nth-child(2)", {
                top: "118rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            })
            t3.to(".info_share_container .title", {
                top: "117.7rem",
                duration: 1,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
            t3.to(" .info_share_container p", {
                top: "122rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },">")
            t3.to(".info_share_container .btn_to_page", {
                right: "38.2rem",
                duration: 0.5,
                ease: "power2.inOut",
                opacity:1,
            },"-=0.5")
        }

        // 優質小學堂

       if(scrollTop >= 1800){

		var t4 = gsap.timeline();

		t4.to(".test_container img:first-child", {
            right: "22rem",
			duration: 0.8, 
			ease: "power1.inOut",
			opacity: 1,
		})
		t4.to(".test_container img:nth-child(2)", {
            top: "149rem",
            duration: 1,
			ease: "power2.inOut",
            opacity:1,
		})
		t4.to(".test_container .title", {
            top: "148.7rem",
            duration: 1,
			ease: "power2.inOut",
            opacity:1,
		},"-=0.5")
       t4.to("  .test_container p", {
            top: "153rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity:1,
        },">")
        t4.to("  .test_container .btn_to_page", {
            left: "30rem",
            duration: 0.5,
            ease: "power2.inOut",
            opacity:1,
        },"-=0.5")

       }	   
    })
})
	