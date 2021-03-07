(function($) {
	$.fn.extend({
		"eosMenu": function(options) {
			var defaluts = {
				fontSize: '14px', //å­—ä½“å¤§å°
				color: '#eee', //å­—ä½“é¢œè‰²
				hoverColor: '#eee', //é¼ æ ‡æ‚¬åœ,å­—ä½“é¢œè‰²
				background: '#2F4050', //èƒŒæ™¯é¢œè‰²
				subBackground: '#263442', //å­çº§èƒŒæ™¯é¢œè‰²
				hoverBackground: '#293744', //é¼ æ ‡æ‚¬åœ,èƒŒæ™¯é¢œè‰²
				height: '40px', //æ¯è¡Œæ€»é«˜åº¦
				lineHeight: '40px', //æ¯è¡Œè¡Œé«˜
				borderColor: '#293744', //è¾¹çº¿é¢œè‰²
				hoverborderColor: '#293744', //é¼ æ ‡æ‚¬åœ,è¾¹çº¿é¢œè‰²
				zIndex: 10, //èœå•ä¸»ä½“å±‚çº§
				onItemClick: null, //ç‚¹å‡»èœå•é¡¹æ—¶æ‰§è¡Œå‡½æ•°
				onMenuTitleClick: null, //ç‚¹å‡»ç›®å½•æ ‡é¢˜æ—¶æ‰§è¡Œå‡½æ•°
				onGroupTitleClick: null, //ç‚¹å‡»èœå•ç»„æ ‡é¢˜æ—¶æ‰§è¡Œå‡½æ•°
			};
			var opts = $.extend({}, defaluts, options);

			var extend_style = '<style>' +
				'.eos-menu{' +
				'font-size:' + opts.fontSize + ';' +
				'color:' + opts.color + ';' +
				'}' +
				'.eos-menu .eos-item a{' +
				'color:' + opts.color + ';' +
				'}' +
				'.eos-menu .eos-menu-content{' +
				'z-index:' + opts.zIndex + ';' +
				'}' +
				'.eos-menu .eos-group-content .eos-item{' +
				'background:' + opts.subBackground + ';' +
				'}' +
				'.eos-menu .eos-menu-title, .eos-menu .eos-group-title, .eos-menu .eos-item{' +
				'height:' + opts.height + ';' +
				'line-height:' + opts.lineHeight + ';' +
				'background:' + opts.background + ';' +
				'border-color:' + opts.borderColor + ';' +
				'}' +
				'.eos-menu .eos-menu-title .fa, .eos-menu .eos-group-title .fa, .eos-menu .eos-item .fa{' +
				'line-height:' + opts.lineHeight + ';' +
				'}' +
				'.eos-menu .eos-menu-title:hover, .eos-menu .eos-group-title:hover, .eos-menu .eos-item:hover{' +
				'color:' + opts.hoverColor + ';' +
				'background:' + opts.hoverBackground + ';' +
				'border-color:' + opts.hoverborderColor + ';' +
				'}' +
				'</style>';

			$('head').append(extend_style);

			this.each(function() {
				var $this = $(this);

				//æ‰“å¼€æˆ–å…³é—­èœå•é¢æ¿
				$this.find('.eos-menu-title').click(function() {
					var next = $(this).next();
					if (next.hasClass('eos-menu-content')) {
						var toHeight = next.outerHeight() ? 0 : getChildrenTotalHeight(next);
						next.outerHeight(toHeight);
					}

					if (typeof opts.onMenuTitleClick == 'function') opts.onMenuTitleClick($(this));
				})

				//æ‰“å¼€æˆ–å…³é—­èœå•ç»„
				$this.find('.eos-group-title').click(function() {
					var next = $(this).next();
					if (next.hasClass('eos-group-content')) {
						var toHeight = next.outerHeight() ? 0 : getChildrenTotalHeight(next);
						var changeHeight = toHeight - next.outerHeight();
						var menuHeight = $this.find('.eos-menu-content').outerHeight();

						next.outerHeight(toHeight);
						$this.find('.eos-menu-content').outerHeight(menuHeight + changeHeight);
					}

					if (typeof opts.onGroupTitleClick == 'function') opts.onGroupTitleClick($(this));
				})

				//ç‚¹å‡»æŸä¸€å…·ä½“èœå•
				$this.find('.eos-item').click(function() {
					if (typeof opts.onItemClick == 'function') opts.onItemClick($(this));
				})
			});

			//èŽ·å–å½“å‰å¯¹è±¡æ€»é«˜åº¦
			function getChildrenTotalHeight(obj) {
				var outerHeight = 0
				obj.children().each(function() {
					outerHeight += $(this).outerHeight();
				})
				return outerHeight;
			}

		}
	});
})(window.jQuery);