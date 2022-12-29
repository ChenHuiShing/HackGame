 setTimeout(function () {

    var textWrapper = document.querySelector('.loader');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='.loader .letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.loader .letter',
        scale: [3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      });



        $(document).ready(function () {
            $("#loader_wrap").css('display','none');
            $(".loader").removeClass('.letter');
        });
}, 500);

<div class="loader_wrapper" id="loader_wrap">
	<div class="loader">Nursery</div>	
</div>