(function($) {
    if ($.support.placeholder === undefined) {
        var i = document.createElement('input');
        $.support.placeholder = typeof i.placeholder !== 'undefined';
    }
    var methods = {
        init: function(options) {

            return this.each(function() {

                var $this = $(this),
                        settings = {
                        force: false,
                        borrowClasses: true,
                        borrowSize: true,
                        borrowPadding: true,
                        borrowMargin: true,
                        color: '#bbb'
                };

                $.extend(settings, options);

                if ($.support.placeholder === true && !settings.force) {
                    return;
                }

                var data = $this.data('placeholder');

                var placeholder = $this.attr('placeholder');

                if (!placeholder) {
                    return;
                }

                var fake = $('<' + this.nodeName.toLowerCase() + ' />');

                fake.addClass('placeholder-fake').val(placeholder);
                if (settings.color)
                    fake.css('color', settings.color);

                $this.removeAttr('placeholder').addClass('placeholder').after(fake);

                data = {
                    fake: fake,
                    placeholder: placeholder,
                    settings: settings
                };

                $this.data('placeholder', data);

                var h = function() {
                    fake.hide();
                    if (settings.borrowSize) {
                        if (settings.borrowPadding)
                            $this.css('padding', fake.css('padding'));
                        if (settings.borrowMargin)
                            $this.css('margin', fake.css('margin'));
                        $this.width(fake.width());
                        $this.height(fake.height());
                    }
                    $this.show().focus();
                }, s = function() {
                    if (!$this.val()) {
                        $this.hide();
                        if (settings.borrowSize) {
                            if (settings.borrowPadding)
                                fake.css('padding', $this.css('padding'));
                            if (settings.borrowMargin)
                                fake.css('margin', $this.css('margin'));
                            fake.width($this.width());
                            fake.height($this.height());
                        }
                        fake.show();
                    } else
                        fake.hide();
                };

                fake.on('focus.placeholder', h);

                $this.on('blur.placeholder', s);

                s();

            });
        },
        destroy: function( ) {

            return this.each(function() {

                var $this = $(this),
                        data = $this.data('placeholder');

                // Namespacing FTW
                $this.off('.placeholder');
                data.fake.off('.placeholder').remove();
                if (data.placeholder)
                    $this.attr('placeholder', data.placeholder);
                $this.removeData('placeholder');
                $this.show();
            });

        }
    };

    $.fn.placeholder = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.placeholder');
        }

    };

})(jQuery);