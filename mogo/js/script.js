$(document).ready(function() {
	
	$('.btn-menu').on('click', function(){
                $('.menu-mogo').css('display','block');
                });
				
	$('.servise2-arrow').on('click', function(e){
		var $src=$(this).attr('src');
		var par=$(this).parent().parent().children('.servise2-box-dec');
		if ($src=='img/arrow-down.png') {
			$(this).attr('src', 'img/arrow-up.png');
			$(par).css('display','none');
		}
		else if ($src=='img/arrow-up.png') {
			$(this).attr('src', 'img/arrow-down.png');
			$(par).css('display','block');
		}
                });
      
              var slider = $('.slider'),
                sliderContent = slider.html(),                      // вміст слайдера
                slideWidth = $('.slider-box').outerWidth(),         // ширина слайдера
                slideCount = $('.slider .slides').length,           // кількість слайдів
                prev = $('.slider-box .prev'),                      // кнопка "назад"
                next = $('.slider-box .next'),                      // кнопка "вперед"
                sliderInterval = 6000,                              // інтервал зміни слайдів
                animateTime = 1500,                                 // час зміни слайдів
                course = 1,                                         // направлення руху слайдера (1 або -1)
                margin = - slideWidth;                              // початкове зміщення слайдів

              $('.slider .slides:last').clone().prependTo('.slider');   // копія останньго слайду переноситься у початок.
              $('.slider .slides').eq(1).clone().appendTo('.slider');   // копія першого слайду переноситься в кінець.  
              $('.slider').css('margin-left', -slideWidth);         // контейнер .slider зміщується вліво на ширину одного слайду.

              function nextSlide(){                                 // запускається функція animation(), яка виконує зміну слайдів.
                interval = window.setInterval(animate, sliderInterval);
              }

              function animate(){
                if (margin==-slideCount*slideWidth-slideWidth){     // якщо слайдер дійшов до кінця
                  slider.css({'marginLeft':-slideWidth});           // то блок .slider повертається у початкове положення
                  margin=-slideWidth*2;
                }else if(margin==0 && course==-1){                  // якщо слайдер знаходиться у початку і нажата кнопка "назад"
                  slider.css({'marginLeft':-slideWidth*slideCount});// то блок .slider переміщається в кінцеве положення
                  margin=-slideWidth*slideCount+slideWidth;
                }else{                                              // якщо умови вище не спрацювали,
                margin = margin - slideWidth*(course);              // значення margin встановлюється для показу наступного слайду
                }
                slider.animate({'marginLeft':margin},animateTime);  // блок .slider зміщується вліво на 1 слайд.
              }

              function sliderStop(){                                // функція яка зупиняє роботу слайдера      
                window.clearInterval(interval);
              }

              prev.click(function() {                               // нажата кнопка "назад"
                if (slider.is(':animated')) { return false; }       // якщо не відбувається анімація
                var course2 = course;                               // тимчасова змінна для збереження значення course
                course = -1;                                        // встановлюється направлення слайдера справа наліво
                animate();                                          // виклик функції animate()
                course = course2 ;                                  // змінна course набуває початкового значення
              });
              next.click(function() {                               // нажата кнопка "назад"
                if (slider.is(':animated')) { return false; }       // якщо не виконується анімація
                var course2 = course;                               // тимчасова змінна для збереження значення course
                course = 1;                                         // встановлюється направлення слайдера справа наліво
                animate();                                          // виклик функції animate()
                course = course2 ;                                  // змінна course набуває початкового значення
              });

              slider.add(next).add(prev).hover(function() {         // Якщо курсор миші в області слайдера
                sliderStop();                                       // викликається функція sliderStop() для призупинки роботи слайдера
              }, nextSlide);                                        // коли курсор виходить за межі слайдера, анімація відновлюється.

              nextSlide();                                          // Виклик функції nextSlide()
          
     
});