$(document).ready(function() {
  $(".navbar li.nav-item.butt .lang").click(function () {
   
    $(".navbar").toggleClass("show");
  });
});

$(".animated").typed({

 
  strings: ["نحن نقدم افضل الخدمات  ", 

  "لدينا افضل خطط الاسعار ", 

  "نحن موثوق بنا !",  

  "معنا انت فى ايد امنه! "],

  stringsElement: null,

  typeSpeed: 0,

  startDelay: 400,

  backSpeed: 500,

  shuffle: true,

  backDelay: 500,

  fadeOut: true,

  fadeOutClass: 'typed-fade-out',

  fadeOutDelay: 500, // milliseconds

  loop: true,

  loopCount: false,

  showCursor: true,

  cursorChar: "",

  attr: null,

  contentType: 'html'

});




     });
