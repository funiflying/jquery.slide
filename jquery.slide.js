!(function ($, window, document, undefined) {

    var slide = function (ele, conf) {
        this.$element = ele;
        this.defaults = {
            'name': 'wutiangx',
            'title': 'title'
        }
        this.config = $.extend({}, this.defaults, conf);
    }
    slide.prototype = {
        setWidth: function () {
            var ili = this.$element.find('li');
            var iwith = ili.length * ili.outerWidth(true);
            this.$element.css('width', iwith + 'px');
        }

    }

    $.fn.slide = function (conf) {
        return new slide(this, conf);
    }









})(jQuery, window, document)
