<div class="red">
    <div class="row column">
      <ul class="menu">
        <li><a href="#">Головна</a></li>
        <li><a href="#">Контакти</a></li>
        <li><a href="#">Політика конфіденційності</a></li>
        <li><a href="#">Карта сайту</a></li>
      </ul>
    </div></div>
      
    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>
      <script>
      $(document).foundation();
        $(".menu-icon").click(function(){
            $(this).toggleClass('is-active');
        });

        $(".js-off-canvas-exit").click(function(){
            $(".menu-icon").removeClass("is-active");
        });
    </script>