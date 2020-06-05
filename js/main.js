'use strict'

{
    // キービジュアルアニメーション
    $(function () {
        $('.top-title').textillate({
          loop: false,  
          minDisplayTime: 2000,  
          initialDelay: 300,  
          autoStart: true,  
      
          in:{
            effect: 'fadeIn',  
            delayScale: 1.0,  
            delay: 50, 
            sync: false,  
            shuffle: false
          },  
      
          out:{
            effect: 'fadeOut',  
            delayScale: 1.5,  
            delay: 50,  
            sync: false,  
            shuffle: false
          }
        });

        $('.top-title2').textillate({
            loop: false,  
            minDisplayTime: 500,  
            initialDelay: 1500,  
            autoStart: true,  
        
            in: {
              effect: 'fadeIn',
              delayScale: 1.0, 
              delay: 50,  
              sync: false,  
              shuffle: false
            },  
        
            out: {
              effect: 'bounce',  
              delayScale: 1.0,  
              delay: 50,
              sync: false,  
              shuffle: false
            }
          });
    })

    // フェードインアニメーション 
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var position = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > position - windowHeight + 200){
                  $(this).addClass('active');
                }else{
                  $(this).removeClass('active');
                }
            });
        });
    });

    // プロダクトアニメーション
    $(function () {
        $('#product1').hover(
            function () {
                $('.product1').fadeIn();
            },
            function () {
                $('.product1').fadeOut();
            }
        );
    });
    $(function () {
        $('#product2').hover(
            function () {
                $('.product2').fadeIn();
            },
            function () {
                $('.product2').fadeOut();
            }
        );
    });
    $(function () {
        $('#product3').hover(
            function () {
                $('.product3').fadeIn();
            },
            function () {
                $('.product3').fadeOut();
            }
        );
    });
    $(function () {
        $('#product4').hover(
            function () {
                $('.product4').fadeIn();
            },
            function () {
                $('.product4').fadeOut();
            }
        );
    });

    // ハンバーガーメニュー

    // $('.menu-btn').on('click', function () {
    //     $('.menu').toggleClass('is-active');
    // });

    $('.menu-btn').on('click', function () {
        $('.menu-btn, .menu').toggleClass('is-active');
    });

    $('.menu__item').on('click', function () {
        $('.menu-btn, .menu').toggleClass('is-active')
    });

    // ページトップボタン
    $(function () {
        var topBtn = $('#page_top');
        topBtn.hide();
        //スクロールが100に達したらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                topBtn.fadeIn();
            } else {
                topBtn.fadeOut();
            }
        });
    });

    // ヘッダーアニメーション
    $(function () {
        var header = $('#header');
        header.hide();
        //スクロールが100に達したらボタン表示
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                header.fadeIn();
            } else {
                header.fadeOut();
            }
        });
    });
}