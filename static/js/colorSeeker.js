(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals (root is window)
        factory(root.jQuery);
    }
}(typeof self !== 'undefined' ? self : this, function ($) {
    'use strict';

    $.fn.broiler = function (callback) {
        var image = this[0],
            canvas = $('<canvas/>')[0],
            imageData;

        canvas.width = image.width;
        canvas.height = image.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        imageData = ctx.getImageData(0, 0, image.width, image.height).data;

        this.on('click', function (event) {
            var offset = $(this).offset(),
                x, y, start;

            x = Math.round(event.clientX - offset.left + $(window).scrollLeft());
            y = Math.round(event.clientY - offset.top + $(window).scrollTop());
            start = (x + y * image.width) * 4;

            callback({
                r: imageData[start],
                g: imageData[start + 1],
                b: imageData[start + 2],
                a: imageData[start + 3]
            });
        });
    };
}));
