(function ($) {
    $( document ).ready(function() {
        var $htmlBody = $('html, body'),
            $body = $('body'),
            $adviceSlider = $('.js-slider-advice'),
            $burger = $('.js-burger'),
            $menu = $('.js-header-menu'),
            $whoDescription = $('.js-who-desc'),
            $whoWord = $('.js-who-word'),
            $whoClose = $('.js-who-close'),
            $whoInfo = $('.js-who-info'),
            $tweetBtn = $('.js-tweet'),
            $readyBtn = $('.js-ready'),
            currentUrl = window.location.href,
            currentHash = currentUrl.substring(currentUrl.indexOf('#')+1),
            themeUrl = 'http://' + window.location.host,
            metaFbTitle = 'Un kā tu rīkojies ar naudu?',
            metaFbName = 'Ienāc MANS BRUNO',
            metaFbDesc = 'Nosaki savu finanšu personības tipu!',
            metaFbImg;

        if (window.location.hash) {
            $htmlBody.animate({
                scrollTop: $('#' + currentHash).offset().top - 160
            }, 50);
        }

        if (currentUrl.indexOf('verotajs') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb-cover/fb-1.jpg';
        } else if (currentUrl.indexOf('patmilis') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb-cover/fb-2.jpg';
        } else if (currentUrl.indexOf('gramatvedis') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb-cover/fb-3.jpg';
        } else if (currentUrl.indexOf('labdaris') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb-cover/fb-4.jpg';
        } else if (currentUrl.indexOf('teretajs') > -1) {
            metaFbImg = themeUrl + '/assets/img/fb-cover/fb-5.jpg';
        }

        $('#share-fb-button').on('click', function(e){
            e.preventDefault();
            FB.ui({
                method: 'share_open_graph',
                action_type: 'og.shares',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': themeUrl,
                        'og:title': metaFbTitle,
                        'og:site_name': metaFbName,
                        'og:description': metaFbDesc,
                        'og:image': metaFbImg
                    }
                })
            });
        });


        if ($adviceSlider.length) {
            $adviceSlider.slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }

        $burger.on('click', function (e) {
            e.preventDefault();
            $burger.toggleClass('burger--active');
            $menu.toggleClass('header__drop--active');
        });

        //force remove active header, when user clicks outside of box
        $body.on('click',function(e) {
            // if the target of the click isn't the container nor a descendant of the container
            if ($menu.hasClass('header__drop--active')) {
                if (!$burger.is(e.target) && $burger.has(e.target).length === 0) {
                    $menu.removeClass('header__drop--active');
                }
            }

            if ($whoInfo.length && $whoInfo.hasClass('landing__who-info--active')) {
               if (!$whoWord.is(e.target) && $whoWord.has(e.target).length === 0) {
                   $whoDescription.each(function() {
                       $(this).removeClass('landing__who-desc--active');
                       $whoInfo.removeClass('landing__who-info--active');
                   });
               }
            }
        });

        $tweetBtn.on('click', function () {
           var $this = $(this),
               link = $this.data('link');
            window.open(link, 'popupWindow', 'width=600, height=400, scrollbars=yes');
        });

        $readyBtn.on('click', function () {
            mt('webpush:prompt:show', '7ed5de6c')
        });

        if ($whoWord.length) {
            $whoWord.each(function(i) {
                var order = i++;
                $(this).on('click', function(e) {
                    e.preventDefault();
                    checkDescriptionBox(order);
                });
            });
        }

        if ($whoClose.length) {
            $whoClose.each(function() {
                var $this = $(this);
                $this.on('click', function(e) {
                    e.preventDefault();
                    $whoClose.closest('.landing__who-desc')
                        .removeClass('landing__who-desc--active');
                    $whoInfo.removeClass('landing__who-info--active');
                });
            });
        }

        function checkDescriptionBox(elPosition) {
            $whoDescription.each(function(i) {
                if (i === elPosition) {
                    $whoClose.closest('.landing__who-desc')
                        .removeClass('landing__who-desc--active');
                    $(this).addClass('landing__who-desc--active');
                    $whoInfo.addClass('landing__who-info--active');
                }
            });
        }
    });
})(jQuery);