(function ($) {
    $( document ).ready(function() {
        $('#share-fb-button').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Quiz Social share',
                eventAction: 'Result share Facebook',
                eventLabel: '' + $(this).data('type') + ''
            });
        });

        $('.js-tweet').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Quiz Social share',
                eventAction: 'Result share Twitter',
                eventLabel: '' + $(this).data('type') + ''
            });
        });

        $('.js-test-begin-video').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Start test button',
                eventAction: 'Click',
                eventLabel: 'First page under video'
            });
        });

        $('.js-test-begin-under-types').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Start test button',
                eventAction: 'Click',
                eventLabel: 'First page under types'
            });
        });

        $('.js-test-begin-types').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Start test button',
                eventAction: 'Click',
                eventLabel: 'Bruno types under'
            });
        });

        $('.js-youtube').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Play video',
                eventAction: 'Click',
                eventLabel: 'Start page'
            });
        });

        $('.js-attachment').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Open attachment',
                eventAction: 'Click',
                eventLabel: 'Start page'
            });
        });

        $('.js-ready').on('click', function() {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Star commitment',
                eventAction: 'Click',
                eventLabel: '' + $(this).parent().data("slug") + ''
            });
        });
    });
})(jQuery);