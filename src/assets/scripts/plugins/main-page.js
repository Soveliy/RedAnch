
var Animations = function() {
  var controller;
  var initIntro = false;
  var loaded = $.Deferred();
  var allImgsCount = 0;
  var introLoaded = false;
  var allImageLoaded = $.Deferred();
  var e = document.documentElement;
  var g = document.getElementsByTagName('body')[0];
  var winw = window.innerWidth || e.clientWidth || g.clientWidth;
  var isTablet = winw < 1024;
    var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);
  var isRetina = winw > 1920;
  var desktopLoadedFunc = false;
  let scene5;
  let controllerAnch = new ScrollMagic.Controller();
 
/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
(function (window, document, Math) {
  var rAF = window.requestAnimationFrame	||
    window.webkitRequestAnimationFrame	||
    window.mozRequestAnimationFrame		||
    window.oRequestAnimationFrame		||
    window.msRequestAnimationFrame		||
    function (callback) { window.setTimeout(callback, 1000 / 60); };
  
  var utils = (function () {
    var me = {};
  
    var _elementStyle = document.createElement('div').style;
    var _vendor = (function () {
      var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
        transform,
        i = 0,
        l = vendors.length;
  
      for ( ; i < l; i++ ) {
        transform = vendors[i] + 'ransform';
        if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
      }
  
      return false;
    })();
  
    function _prefixStyle (style) {
      if ( _vendor === false ) return false;
      if ( _vendor === '' ) return style;
      return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
    }
  
    me.getTime = Date.now || function getTime () { return new Date().getTime(); };
  
    me.extend = function (target, obj) {
      for ( var i in obj ) {
        target[i] = obj[i];
      }
    };
  
    me.addEvent = function (el, type, fn, capture) {
      el.addEventListener(type, fn, !!capture);
    };
  
    me.removeEvent = function (el, type, fn, capture) {
      el.removeEventListener(type, fn, !!capture);
    };
  
    me.prefixPointerEvent = function (pointerEvent) {
      return window.MSPointerEvent ?
        'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
        pointerEvent;
    };
  
    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
      var distance = current - start,
        speed = Math.abs(distance) / time,
        destination,
        duration;
  
      deceleration = deceleration === undefined ? 0.0006 : deceleration;
  
      destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
      duration = speed / deceleration;
  
      if ( destination < lowerMargin ) {
        destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
        distance = Math.abs(destination - current);
        duration = distance / speed;
      } else if ( destination > 0 ) {
        destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
        distance = Math.abs(current) + destination;
        duration = distance / speed;
      }
  
      return {
        destination: Math.round(destination),
        duration: duration
      };
    };
  
    var _transform = _prefixStyle('transform');
  
    me.extend(me, {
      hasTransform: _transform !== false,
      hasPerspective: _prefixStyle('perspective') in _elementStyle,
      hasTouch: 'ontouchstart' in window,
      hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
      hasTransition: _prefixStyle('transition') in _elementStyle
    });
  
    /*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
      - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
      - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S3 is badAndroid (stock brower, webview)
       `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S4 is badAndroid (stock brower, webview)
       `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
     - galaxy S5 is OK
       `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
     - galaxy S6 is OK
       `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    */
    me.isBadAndroid = (function() {
      var appVersion = window.navigator.appVersion;
      // Android browser is not a chrome browser.
      if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
        if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
          return parseFloat(safariVersion[1]) < 535.19;
        } else {
          return true;
        }
      } else {
        return false;
      }
    })();
  
    me.extend(me.style = {}, {
      transform: _transform,
      transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
      transitionDuration: _prefixStyle('transitionDuration'),
      transitionDelay: _prefixStyle('transitionDelay'),
      transformOrigin: _prefixStyle('transformOrigin'),
      touchAction: _prefixStyle('touchAction')
    });
  
    me.hasClass = function (e, c) {
      var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
      return re.test(e.className);
    };
  
    me.addClass = function (e, c) {
      if ( me.hasClass(e, c) ) {
        return;
      }
  
      var newclass = e.className.split(' ');
      newclass.push(c);
      e.className = newclass.join(' ');
    };
  
    me.removeClass = function (e, c) {
      if ( !me.hasClass(e, c) ) {
        return;
      }
  
      var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
      e.className = e.className.replace(re, ' ');
    };
  
    me.offset = function (el) {
      var left = -el.offsetLeft,
        top = -el.offsetTop;
  
      // jshint -W084
      while (el = el.offsetParent) {
        left -= el.offsetLeft;
        top -= el.offsetTop;
      }
      // jshint +W084
  
      return {
        left: left,
        top: top
      };
    };
  
    me.preventDefaultException = function (el, exceptions) {
      for ( var i in exceptions ) {
        if ( exceptions[i].test(el[i]) ) {
          return true;
        }
      }
  
      return false;
    };
  
    me.extend(me.eventType = {}, {
      touchstart: 1,
      touchmove: 1,
      touchend: 1,
  
      mousedown: 2,
      mousemove: 2,
      mouseup: 2,
  
      pointerdown: 3,
      pointermove: 3,
      pointerup: 3,
  
      MSPointerDown: 3,
      MSPointerMove: 3,
      MSPointerUp: 3
    });
  
    me.extend(me.ease = {}, {
      quadratic: {
        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fn: function (k) {
          return k * ( 2 - k );
        }
      },
      circular: {
        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
        fn: function (k) {
          return Math.sqrt( 1 - ( --k * k ) );
        }
      },
      back: {
        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fn: function (k) {
          var b = 4;
          return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
        }
      },
      bounce: {
        style: '',
        fn: function (k) {
          if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
            return 7.5625 * k * k;
          } else if ( k < ( 2 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
          } else if ( k < ( 2.5 / 2.75 ) ) {
            return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
          } else {
            return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
          }
        }
      },
      elastic: {
        style: '',
        fn: function (k) {
          var f = 0.22,
            e = 0.4;
  
          if ( k === 0 ) { return 0; }
          if ( k == 1 ) { return 1; }
  
          return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
        }
      }
    });
  
    me.tap = function (e, eventName) {
      var ev = document.createEvent('Event');
      ev.initEvent(eventName, true, true);
      ev.pageX = e.pageX;
      ev.pageY = e.pageY;
      e.target.dispatchEvent(ev);
    };
  
    me.click = function (e) {
      var target = e.target,
        ev;
  
      if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
        // initMouseEvent is deprecated.
        ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
        ev.initEvent('click', true, true);
        ev.view = e.view || window;
        ev.detail = 1;
        ev.screenX = target.screenX || 0;
        ev.screenY = target.screenY || 0;
        ev.clientX = target.clientX || 0;
        ev.clientY = target.clientY || 0;
        ev.ctrlKey = !!e.ctrlKey;
        ev.altKey = !!e.altKey;
        ev.shiftKey = !!e.shiftKey;
        ev.metaKey = !!e.metaKey;
        ev.button = 0;
        ev.relatedTarget = null;
        ev._constructed = true;
        target.dispatchEvent(ev);
      }
    };
  
    me.getTouchAction = function(eventPassthrough, addPinch) {
      var touchAction = 'none';
      if ( eventPassthrough === 'vertical' ) {
        touchAction = 'pan-y';
      } else if (eventPassthrough === 'horizontal' ) {
        touchAction = 'pan-x';
      }
      if (addPinch && touchAction != 'none') {
        // add pinch-zoom support if the browser supports it, but if not (eg. Chrome <55) do nothing
        touchAction += ' pinch-zoom';
      }
      return touchAction;
    };
  
    me.getRect = function(el) {
      if (el instanceof SVGElement) {
        var rect = el.getBoundingClientRect();
        return {
          top : rect.top,
          left : rect.left,
          width : rect.width,
          height : rect.height
        };
      } else {
        return {
          top : el.offsetTop,
          left : el.offsetLeft,
          width : el.offsetWidth,
          height : el.offsetHeight
        };
      }
    };
  
    return me;
  })();
  function IScroll (el, options) {
    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
    this.scroller = this.wrapper.children[0];
    this.scrollerStyle = this.scroller.style;		// cache style for better performance
  
    this.options = {
  
      resizeScrollbars: true,
  
      mouseWheelSpeed: 20,
  
      snapThreshold: 0.334,
  
  // INSERT POINT: OPTIONS
      disablePointer : !utils.hasPointer,
      disableTouch : utils.hasPointer || !utils.hasTouch,
      disableMouse : utils.hasPointer || utils.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: true,
      directionLockThreshold: 5,
      momentum: true,
  
      bounce: true,
      bounceTime: 600,
      bounceEasing: '',
  
      preventDefault: true,
      preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
  
      HWCompositing: true,
      useTransition: true,
      useTransform: true,
      bindToWrapper: typeof window.onmousedown === "undefined"
    };
  
    for ( var i in options ) {
      this.options[i] = options[i];
    }
  
    // Normalize options
    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
  
    this.options.useTransition = utils.hasTransition && this.options.useTransition;
    this.options.useTransform = utils.hasTransform && this.options.useTransform;
  
    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
  
    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
  
    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
  
    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
  
    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
  
    if ( this.options.tap === true ) {
      this.options.tap = 'tap';
    }
  
    // https://github.com/cubiq/iscroll/issues/1029
    if (!this.options.useTransition && !this.options.useTransform) {
      if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
        this.scrollerStyle.position = "relative";
      }
    }
  
    if ( this.options.shrinkScrollbars == 'scale' ) {
      this.options.useTransition = false;
    }
  
    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
  
    if ( this.options.probeType == 3 ) {
      this.options.useTransition = false;	}
  
  // INSERT POINT: NORMALIZATION
  
    // Some defaults
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;
    this._events = {};
  
  // INSERT POINT: DEFAULTS
  
    this._init();
    this.refresh();
  
    this.scrollTo(this.options.startX, this.options.startY);
    this.enable();
  }
  
  IScroll.prototype = {
    version: '5.2.0-snapshot',
  
    _init: function () {
      this._initEvents();
  
      if ( this.options.scrollbars || this.options.indicators ) {
        this._initIndicators();
      }
  
      if ( this.options.mouseWheel ) {
        this._initWheel();
      }
  
      if ( this.options.snap ) {
        this._initSnap();
      }
  
      if ( this.options.keyBindings ) {
        this._initKeys();
      }
  
  // INSERT POINT: _init
  
    },
  
    destroy: function () {
      this._initEvents(true);
      clearTimeout(this.resizeTimeout);
       this.resizeTimeout = null;
      this._execEvent('destroy');
    },
  
    _transitionEnd: function (e) {
      if ( e.target != this.scroller || !this.isInTransition ) {
        return;
      }
  
      this._transitionTime();
      if ( !this.resetPosition(this.options.bounceTime) ) {
        this.isInTransition = false;
        this._execEvent('scrollEnd');
      }
    },
  
    _start: function (e) {
      // React to left mouse button only
      if ( utils.eventType[e.type] != 1 ) {
        // for button property
        // http://unixpapa.com/js/mouse.html
        var button;
        if (!e.which) {
          /* IE case */
          button = (e.button < 2) ? 0 :
                   ((e.button == 4) ? 1 : 2);
        } else {
          /* All others */
          button = e.button;
        }
        if ( button !== 0 ) {
          return;
        }
      }
  
      if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
        return;
      }
  
      if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
        e.preventDefault();
      }
  
      var point = e.touches ? e.touches[0] : e,
        pos;
  
      this.initiated	= utils.eventType[e.type];
      this.moved		= false;
      this.distX		= 0;
      this.distY		= 0;
      this.directionX = 0;
      this.directionY = 0;
      this.directionLocked = 0;
  
      this.startTime = utils.getTime();
  
      if ( this.options.useTransition && this.isInTransition ) {
        this._transitionTime();
        this.isInTransition = false;
        pos = this.getComputedPosition();
        this._translate(Math.round(pos.x), Math.round(pos.y));
        this._execEvent('scrollEnd');
      } else if ( !this.options.useTransition && this.isAnimating ) {
        this.isAnimating = false;
        this._execEvent('scrollEnd');
      }
  
      this.startX    = this.x;
      this.startY    = this.y;
      this.absStartX = this.x;
      this.absStartY = this.y;
      this.pointX    = point.pageX;
      this.pointY    = point.pageY;
  
      this._execEvent('beforeScrollStart');
    },
  
    _move: function (e) {
      if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
        return;
      }
  
      if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
        e.preventDefault();
      }
  
      var point		= e.touches ? e.touches[0] : e,
        deltaX		= point.pageX - this.pointX,
        deltaY		= point.pageY - this.pointY,
        timestamp	= utils.getTime(),
        newX, newY,
        absDistX, absDistY;
  
      this.pointX		= point.pageX;
      this.pointY		= point.pageY;
  
      this.distX		+= deltaX;
      this.distY		+= deltaY;
      absDistX		= Math.abs(this.distX);
      absDistY		= Math.abs(this.distY);
  
      // We need to move at least 10 pixels for the scrolling to initiate
      if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
        return;
      }
  
      // If you are scrolling in one direction lock the other
      if ( !this.directionLocked && !this.options.freeScroll ) {
        if ( absDistX > absDistY + this.options.directionLockThreshold ) {
          this.directionLocked = 'h';		// lock horizontally
        } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
          this.directionLocked = 'v';		// lock vertically
        } else {
          this.directionLocked = 'n';		// no lock
        }
      }
  
      if ( this.directionLocked == 'h' ) {
        if ( this.options.eventPassthrough == 'vertical' ) {
          e.preventDefault();
        } else if ( this.options.eventPassthrough == 'horizontal' ) {
          this.initiated = false;
          return;
        }
  
        deltaY = 0;
      } else if ( this.directionLocked == 'v' ) {
        if ( this.options.eventPassthrough == 'horizontal' ) {
          e.preventDefault();
        } else if ( this.options.eventPassthrough == 'vertical' ) {
          this.initiated = false;
          return;
        }
  
        deltaX = 0;
      }
  
      deltaX = this.hasHorizontalScroll ? deltaX : 0;
      deltaY = this.hasVerticalScroll ? deltaY : 0;
  
      newX = this.x + deltaX;
      newY = this.y + deltaY;
  
      // Slow down if outside of the boundaries
      if ( newX > 0 || newX < this.maxScrollX ) {
        newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
      }
      if ( newY > 0 || newY < this.maxScrollY ) {
        newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
      }
  
      this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
      this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
  
      if ( !this.moved ) {
        this._execEvent('scrollStart');
      }
  
      this.moved = true;
  
      this._translate(newX, newY);
  
  /* REPLACE START: _move */
      if ( timestamp - this.startTime > 300 ) {
        this.startTime = timestamp;
        this.startX = this.x;
        this.startY = this.y;
  
        if ( this.options.probeType == 1 ) {
          this._execEvent('scroll');
        }
      }
  
      if ( this.options.probeType > 1 ) {
        this._execEvent('scroll');
      }
  /* REPLACE END: _move */
  
    },
  
    _end: function (e) {
      if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
        return;
      }
  
      if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
        e.preventDefault();
      }
  
      var point = e.changedTouches ? e.changedTouches[0] : e,
        momentumX,
        momentumY,
        duration = utils.getTime() - this.startTime,
        newX = Math.round(this.x),
        newY = Math.round(this.y),
        distanceX = Math.abs(newX - this.startX),
        distanceY = Math.abs(newY - this.startY),
        time = 0,
        easing = '';
  
      this.isInTransition = 0;
      this.initiated = 0;
      this.endTime = utils.getTime();
  
      // reset if we are outside of the boundaries
      if ( this.resetPosition(this.options.bounceTime) ) {
        return;
      }
  
      this.scrollTo(newX, newY);	// ensures that the last position is rounded
  
      // we scrolled less than 10 pixels
      if ( !this.moved ) {
        if ( this.options.tap ) {
          utils.tap(e, this.options.tap);
        }
  
        if ( this.options.click ) {
          utils.click(e);
        }
  
        this._execEvent('scrollCancel');
        return;
      }
  
      if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
        this._execEvent('flick');
        return;
      }
  
      // start momentum animation if needed
      if ( this.options.momentum && duration < 300 ) {
        momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
        momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
        newX = momentumX.destination;
        newY = momentumY.destination;
        time = Math.max(momentumX.duration, momentumY.duration);
        this.isInTransition = 1;
      }
  
  
      if ( this.options.snap ) {
        var snap = this._nearestSnap(newX, newY);
        this.currentPage = snap;
        time = this.options.snapSpeed || Math.max(
            Math.max(
              Math.min(Math.abs(newX - snap.x), 1000),
              Math.min(Math.abs(newY - snap.y), 1000)
            ), 300);
        newX = snap.x;
        newY = snap.y;
  
        this.directionX = 0;
        this.directionY = 0;
        easing = this.options.bounceEasing;
      }
  
  // INSERT POINT: _end
  
      if ( newX != this.x || newY != this.y ) {
        // change easing function when scroller goes out of the boundaries
        if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
          easing = utils.ease.quadratic;
        }
  
        this.scrollTo(newX, newY, time, easing);
        return;
      }
  
      this._execEvent('scrollEnd');
    },
  
    _resize: function () {
      var that = this;
  
      clearTimeout(this.resizeTimeout);
  
      this.resizeTimeout = setTimeout(function () {
        that.refresh();
      }, this.options.resizePolling);
    },
  
    resetPosition: function (time) {
      var x = this.x,
        y = this.y;
  
      time = time || 0;
  
      if ( !this.hasHorizontalScroll || this.x > 0 ) {
        x = 0;
      } else if ( this.x < this.maxScrollX ) {
        x = this.maxScrollX;
      }
  
      if ( !this.hasVerticalScroll || this.y > 0 ) {
        y = 0;
      } else if ( this.y < this.maxScrollY ) {
        y = this.maxScrollY;
      }
  
      if ( x == this.x && y == this.y ) {
        return false;
      }
  
      this.scrollTo(x, y, time, this.options.bounceEasing);
  
      return true;
    },
  
    disable: function () {
      this.enabled = false;
    },
  
    enable: function () {
      this.enabled = true;
    },
  
    refresh: function () {
      utils.getRect(this.wrapper);		// Force reflow
  
      this.wrapperWidth	= this.wrapper.clientWidth;
      this.wrapperHeight	= this.wrapper.clientHeight;
  
      var rect = utils.getRect(this.scroller);
  /* REPLACE START: refresh */
  
      this.scrollerWidth	= rect.width;
      this.scrollerHeight	= rect.height;
  
      this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
  
  /* REPLACE END: refresh */
  
      this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
      this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
      
      if ( !this.hasHorizontalScroll ) {
        this.maxScrollX = 0;
        this.scrollerWidth = this.wrapperWidth;
      }
  
      if ( !this.hasVerticalScroll ) {
        this.maxScrollY = 0;
        this.scrollerHeight = this.wrapperHeight;
      }
  
      this.endTime = 0;
      this.directionX = 0;
      this.directionY = 0;
      
      if(utils.hasPointer && !this.options.disablePointer) {
        // The wrapper should have `touchAction` property for using pointerEvent.
        this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, true);
  
        // case. not support 'pinch-zoom'
        // https://github.com/cubiq/iscroll/issues/1118#issuecomment-270057583
        if (!this.wrapper.style[utils.style.touchAction]) {
          this.wrapper.style[utils.style.touchAction] = utils.getTouchAction(this.options.eventPassthrough, false);
        }
      }
      this.wrapperOffset = utils.offset(this.wrapper);
  
      this._execEvent('refresh');
  
      this.resetPosition();
  
  // INSERT POINT: _refresh
  
    },	
  
    on: function (type, fn) {
      if ( !this._events[type] ) {
        this._events[type] = [];
      }
  
      this._events[type].push(fn);
    },
  
    off: function (type, fn) {
      if ( !this._events[type] ) {
        return;
      }
  
      var index = this._events[type].indexOf(fn);
  
      if ( index > -1 ) {
        this._events[type].splice(index, 1);
      }
    },
  
    _execEvent: function (type) {
      if ( !this._events[type] ) {
        return;
      }
  
      var i = 0,
        l = this._events[type].length;
  
      if ( !l ) {
        return;
      }
  
      for ( ; i < l; i++ ) {
        this._events[type][i].apply(this, [].slice.call(arguments, 1));
      }
    },
  
    scrollBy: function (x, y, time, easing) {
      x = this.x + x;
      y = this.y + y;
      time = time || 0;
  
      this.scrollTo(x, y, time, easing);
    },
  
    scrollTo: function (x, y, time, easing) {
      easing = easing || utils.ease.circular;
  
      this.isInTransition = this.options.useTransition && time > 0;
      var transitionType = this.options.useTransition && easing.style;
      if ( !time || transitionType ) {
          if(transitionType) {
            this._transitionTimingFunction(easing.style);
            this._transitionTime(time);
          }
        this._translate(x, y);
      } else {
        this._animate(x, y, time, easing.fn);
      }
    },
  
    scrollToElement: function (el, time, offsetX, offsetY, easing) {
      el = el.nodeType ? el : this.scroller.querySelector(el);
  
      if ( !el ) {
        return;
      }
  
      var pos = utils.offset(el);
  
      pos.left -= this.wrapperOffset.left;
      pos.top  -= this.wrapperOffset.top;
  
      // if offsetX/Y are true we center the element to the screen
      var elRect = utils.getRect(el);
      var wrapperRect = utils.getRect(this.wrapper);
      if ( offsetX === true ) {
        offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
      }
      if ( offsetY === true ) {
        offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
      }
  
      pos.left -= offsetX || 0;
      pos.top  -= offsetY || 0;
  
      pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
      pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
  
      time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
  
      this.scrollTo(pos.left, pos.top, time, easing);
    },
  
    _transitionTime: function (time) {
      if (!this.options.useTransition) {
        return;
      }
      time = time || 0;
      var durationProp = utils.style.transitionDuration;
      if(!durationProp) {
        return;
      }
  
      this.scrollerStyle[durationProp] = time + 'ms';
  
      if ( !time && utils.isBadAndroid ) {
        this.scrollerStyle[durationProp] = '0.0001ms';
        // remove 0.0001ms
        var self = this;
        rAF(function() {
          if(self.scrollerStyle[durationProp] === '0.0001ms') {
            self.scrollerStyle[durationProp] = '0s';
          }
        });
      }
  
  
      if ( this.indicators ) {
        for ( var i = this.indicators.length; i--; ) {
          this.indicators[i].transitionTime(time);
        }
      }
  
  
  // INSERT POINT: _transitionTime
  
    },
  
    _transitionTimingFunction: function (easing) {
      this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
  
  
      if ( this.indicators ) {
        for ( var i = this.indicators.length; i--; ) {
          this.indicators[i].transitionTimingFunction(easing);
        }
      }
  
  
  // INSERT POINT: _transitionTimingFunction
  
    },
  
    _translate: function (x, y) {
      if ( this.options.useTransform ) {
  
  /* REPLACE START: _translate */
  
        this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
  
  /* REPLACE END: _translate */
  
      } else {
        x = Math.round(x);
        y = Math.round(y);
        this.scrollerStyle.left = x + 'px';
        this.scrollerStyle.top = y + 'px';
      }
  
      this.x = x;
      this.y = y;
  
  
    if ( this.indicators ) {
      for ( var i = this.indicators.length; i--; ) {
        this.indicators[i].updatePosition();
      }
    }
  
  
  // INSERT POINT: _translate
  
    },
  
    _initEvents: function (remove) {
      var eventType = remove ? utils.removeEvent : utils.addEvent,
        target = this.options.bindToWrapper ? this.wrapper : window;
  
      eventType(window, 'orientationchange', this);
      eventType(window, 'resize', this);
  
      if ( this.options.click ) {
        eventType(this.wrapper, 'click', this, true);
      }
  
      if ( !this.options.disableMouse ) {
        eventType(this.wrapper, 'mousedown', this);
        eventType(target, 'mousemove', this);
        eventType(target, 'mousecancel', this);
        eventType(target, 'mouseup', this);
      }
  
      if ( utils.hasPointer && !this.options.disablePointer ) {
        eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
        eventType(target, utils.prefixPointerEvent('pointermove'), this);
        eventType(target, utils.prefixPointerEvent('pointercancel'), this);
        eventType(target, utils.prefixPointerEvent('pointerup'), this);
      }
  
      if ( utils.hasTouch && !this.options.disableTouch ) {
        eventType(this.wrapper, 'touchstart', this);
        eventType(target, 'touchmove', this);
        eventType(target, 'touchcancel', this);
        eventType(target, 'touchend', this);
      }
  
      eventType(this.scroller, 'transitionend', this);
      eventType(this.scroller, 'webkitTransitionEnd', this);
      eventType(this.scroller, 'oTransitionEnd', this);
      eventType(this.scroller, 'MSTransitionEnd', this);
    },
  
    getComputedPosition: function () {
      var matrix = window.getComputedStyle(this.scroller, null),
        x, y;
  
      if ( this.options.useTransform ) {
        matrix = matrix[utils.style.transform].split(')')[0].split(', ');
        x = +(matrix[12] || matrix[4]);
        y = +(matrix[13] || matrix[5]);
      } else {
        x = +matrix.left.replace(/[^-\d.]/g, '');
        y = +matrix.top.replace(/[^-\d.]/g, '');
      }
  
      return { x: x, y: y };
    },
    _initIndicators: function () {
      var interactive = this.options.interactiveScrollbars,
        customStyle = typeof this.options.scrollbars != 'string',
        indicators = [],
        indicator;
  
      var that = this;
  
      this.indicators = [];
  
      if ( this.options.scrollbars ) {
        // Vertical scrollbar
        if ( this.options.scrollY ) {
          indicator = {
            el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenX: false
          };
  
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
  
        // Horizontal scrollbar
        if ( this.options.scrollX ) {
          indicator = {
            el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
            interactive: interactive,
            defaultScrollbars: true,
            customStyle: customStyle,
            resize: this.options.resizeScrollbars,
            shrink: this.options.shrinkScrollbars,
            fade: this.options.fadeScrollbars,
            listenY: false
          };
  
          this.wrapper.appendChild(indicator.el);
          indicators.push(indicator);
        }
      }
  
      if ( this.options.indicators ) {
        // TODO: check concat compatibility
        indicators = indicators.concat(this.options.indicators);
      }
  
      for ( var i = indicators.length; i--; ) {
        this.indicators.push( new Indicator(this, indicators[i]) );
      }
  
      // TODO: check if we can use array.map (wide compatibility and performance issues)
      function _indicatorsMap (fn) {
        if (that.indicators) {
          for ( var i = that.indicators.length; i--; ) {
            fn.call(that.indicators[i]);
          }
        }
      }
  
      if ( this.options.fadeScrollbars ) {
        this.on('scrollEnd', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
  
        this.on('scrollCancel', function () {
          _indicatorsMap(function () {
            this.fade();
          });
        });
  
        this.on('scrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1);
          });
        });
  
        this.on('beforeScrollStart', function () {
          _indicatorsMap(function () {
            this.fade(1, true);
          });
        });
      }
  
  
      this.on('refresh', function () {
        _indicatorsMap(function () {
          this.refresh();
        });
      });
  
      this.on('destroy', function () {
        _indicatorsMap(function () {
          this.destroy();
        });
  
        delete this.indicators;
      });
    },
  
    _initWheel: function () {
      utils.addEvent(this.wrapper, 'wheel', this);
      utils.addEvent(this.wrapper, 'mousewheel', this);
      utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
  
      this.on('destroy', function () {
        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = null;
        utils.removeEvent(this.wrapper, 'wheel', this);
        utils.removeEvent(this.wrapper, 'mousewheel', this);
        utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
      });
    },
  
    _wheel: function (e) {
      if ( !this.enabled ) {
        return;
      }
  
      e.preventDefault();
  
      var wheelDeltaX, wheelDeltaY,
        newX, newY,
        that = this;
  
      if ( this.wheelTimeout === undefined ) {
        that._execEvent('scrollStart');
      }
  
      // Execute the scrollEnd event after 400ms the wheel stopped scrolling
      clearTimeout(this.wheelTimeout);
      this.wheelTimeout = setTimeout(function () {
        if(!that.options.snap) {
          that._execEvent('scrollEnd');
        }
        that.wheelTimeout = undefined;
      }, 400);
  
      if ( 'deltaX' in e ) {
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
          wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
      } else if ( 'wheelDeltaX' in e ) {
        wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
        wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
      } else if ( 'wheelDelta' in e ) {
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
      } else if ( 'detail' in e ) {
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
      } else {
        return;
      }
  
      wheelDeltaX *= this.options.invertWheelDirection;
      wheelDeltaY *= this.options.invertWheelDirection;
  
      if ( !this.hasVerticalScroll ) {
        wheelDeltaX = wheelDeltaY;
        wheelDeltaY = 0;
      }
  
      if ( this.options.snap ) {
        newX = this.currentPage.pageX;
        newY = this.currentPage.pageY;
  
        if ( wheelDeltaX > 0 ) {
          newX--;
        } else if ( wheelDeltaX < 0 ) {
          newX++;
        }
  
        if ( wheelDeltaY > 0 ) {
          newY--;
        } else if ( wheelDeltaY < 0 ) {
          newY++;
        }
  
        this.goToPage(newX, newY);
  
        return;
      }
  
      newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
      newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
  
      this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
      this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
  
      if ( newX > 0 ) {
        newX = 0;
      } else if ( newX < this.maxScrollX ) {
        newX = this.maxScrollX;
      }
  
      if ( newY > 0 ) {
        newY = 0;
      } else if ( newY < this.maxScrollY ) {
        newY = this.maxScrollY;
      }
  
      this.scrollTo(newX, newY, 0);
  
      if ( this.options.probeType > 1 ) {
        this._execEvent('scroll');
      }
  
  // INSERT POINT: _wheel
    },
  
    _initSnap: function () {
      this.currentPage = {};
  
      if ( typeof this.options.snap == 'string' ) {
        this.options.snap = this.scroller.querySelectorAll(this.options.snap);
      }
  
      this.on('refresh', function () {
        var i = 0, l,
          m = 0, n,
          cx, cy,
          x = 0, y,
          stepX = this.options.snapStepX || this.wrapperWidth,
          stepY = this.options.snapStepY || this.wrapperHeight,
          el,
          rect;
  
        this.pages = [];
  
        if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
          return;
        }
  
        if ( this.options.snap === true ) {
          cx = Math.round( stepX / 2 );
          cy = Math.round( stepY / 2 );
  
          while ( x > -this.scrollerWidth ) {
            this.pages[i] = [];
            l = 0;
            y = 0;
  
            while ( y > -this.scrollerHeight ) {
              this.pages[i][l] = {
                x: Math.max(x, this.maxScrollX),
                y: Math.max(y, this.maxScrollY),
                width: stepX,
                height: stepY,
                cx: x - cx,
                cy: y - cy
              };
  
              y -= stepY;
              l++;
            }
  
            x -= stepX;
            i++;
          }
        } else {
          el = this.options.snap;
          l = el.length;
          n = -1;
  
          for ( ; i < l; i++ ) {
            rect = utils.getRect(el[i]);
            if ( i === 0 || rect.left <= utils.getRect(el[i-1]).left ) {
              m = 0;
              n++;
            }
  
            if ( !this.pages[m] ) {
              this.pages[m] = [];
            }
  
            x = Math.max(-rect.left, this.maxScrollX);
            y = Math.max(-rect.top, this.maxScrollY);
            cx = x - Math.round(rect.width / 2);
            cy = y - Math.round(rect.height / 2);
  
            this.pages[m][n] = {
              x: x,
              y: y,
              width: rect.width,
              height: rect.height,
              cx: cx,
              cy: cy
            };
  
            if ( x > this.maxScrollX ) {
              m++;
            }
          }
        }
  
        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
  
        // Update snap threshold if needed
        if ( this.options.snapThreshold % 1 === 0 ) {
          this.snapThresholdX = this.options.snapThreshold;
          this.snapThresholdY = this.options.snapThreshold;
        } else {
          this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
          this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
        }
      });
  
      this.on('flick', function () {
        var time = this.options.snapSpeed || Math.max(
            Math.max(
              Math.min(Math.abs(this.x - this.startX), 1000),
              Math.min(Math.abs(this.y - this.startY), 1000)
            ), 300);
  
        this.goToPage(
          this.currentPage.pageX + this.directionX,
          this.currentPage.pageY + this.directionY,
          time
        );
      });
    },
  
    _nearestSnap: function (x, y) {
      if ( !this.pages.length ) {
        return { x: 0, y: 0, pageX: 0, pageY: 0 };
      }
  
      var i = 0,
        l = this.pages.length,
        m = 0;
  
      // Check if we exceeded the snap threshold
      if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
        Math.abs(y - this.absStartY) < this.snapThresholdY ) {
        return this.currentPage;
      }
  
      if ( x > 0 ) {
        x = 0;
      } else if ( x < this.maxScrollX ) {
        x = this.maxScrollX;
      }
  
      if ( y > 0 ) {
        y = 0;
      } else if ( y < this.maxScrollY ) {
        y = this.maxScrollY;
      }
  
      for ( ; i < l; i++ ) {
        if ( x >= this.pages[i][0].cx ) {
          x = this.pages[i][0].x;
          break;
        }
      }
  
      l = this.pages[i].length;
  
      for ( ; m < l; m++ ) {
        if ( y >= this.pages[0][m].cy ) {
          y = this.pages[0][m].y;
          break;
        }
      }
  
      if ( i == this.currentPage.pageX ) {
        i += this.directionX;
  
        if ( i < 0 ) {
          i = 0;
        } else if ( i >= this.pages.length ) {
          i = this.pages.length - 1;
        }
  
        x = this.pages[i][0].x;
      }
  
      if ( m == this.currentPage.pageY ) {
        m += this.directionY;
  
        if ( m < 0 ) {
          m = 0;
        } else if ( m >= this.pages[0].length ) {
          m = this.pages[0].length - 1;
        }
  
        y = this.pages[0][m].y;
      }
  
      return {
        x: x,
        y: y,
        pageX: i,
        pageY: m
      };
    },
  
    goToPage: function (x, y, time, easing) {
      easing = easing || this.options.bounceEasing;
  
      if ( x >= this.pages.length ) {
        x = this.pages.length - 1;
      } else if ( x < 0 ) {
        x = 0;
      }
  
      if ( y >= this.pages[x].length ) {
        y = this.pages[x].length - 1;
      } else if ( y < 0 ) {
        y = 0;
      }
  
      var posX = this.pages[x][y].x,
        posY = this.pages[x][y].y;
  
      time = time === undefined ? this.options.snapSpeed || Math.max(
        Math.max(
          Math.min(Math.abs(posX - this.x), 1000),
          Math.min(Math.abs(posY - this.y), 1000)
        ), 300) : time;
  
      this.currentPage = {
        x: posX,
        y: posY,
        pageX: x,
        pageY: y
      };
  
      this.scrollTo(posX, posY, time, easing);
    },
  
    next: function (time, easing) {
      var x = this.currentPage.pageX,
        y = this.currentPage.pageY;
  
      x++;
  
      if ( x >= this.pages.length && this.hasVerticalScroll ) {
        x = 0;
        y++;
      }
  
      this.goToPage(x, y, time, easing);
    },
  
    prev: function (time, easing) {
      var x = this.currentPage.pageX,
        y = this.currentPage.pageY;
  
      x--;
  
      if ( x < 0 && this.hasVerticalScroll ) {
        x = 0;
        y--;
      }
  
      this.goToPage(x, y, time, easing);
    },
  
    _initKeys: function (e) {
      // default key bindings
      var keys = {
        pageUp: 33,
        pageDown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
      var i;
  
      // if you give me characters I give you keycode
      if ( typeof this.options.keyBindings == 'object' ) {
        for ( i in this.options.keyBindings ) {
          if ( typeof this.options.keyBindings[i] == 'string' ) {
            this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
          }
        }
      } else {
        this.options.keyBindings = {};
      }
  
      for ( i in keys ) {
        this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
      }
  
      utils.addEvent(window, 'keydown', this);
  
      this.on('destroy', function () {
        utils.removeEvent(window, 'keydown', this);
      });
    },
  
    _key: function (e) {
      if ( !this.enabled ) {
        return;
      }
  
      var snap = this.options.snap,	// we are using this alot, better to cache it
        newX = snap ? this.currentPage.pageX : this.x,
        newY = snap ? this.currentPage.pageY : this.y,
        now = utils.getTime(),
        prevTime = this.keyTime || 0,
        acceleration = 0.250,
        pos;
  
      if ( this.options.useTransition && this.isInTransition ) {
        pos = this.getComputedPosition();
  
        this._translate(Math.round(pos.x), Math.round(pos.y));
        this.isInTransition = false;
      }
  
      this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
  
      switch ( e.keyCode ) {
        case this.options.keyBindings.pageUp:
          if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
            newX += snap ? 1 : this.wrapperWidth;
          } else {
            newY += snap ? 1 : this.wrapperHeight;
          }
          break;
        case this.options.keyBindings.pageDown:
          if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
            newX -= snap ? 1 : this.wrapperWidth;
          } else {
            newY -= snap ? 1 : this.wrapperHeight;
          }
          break;
        case this.options.keyBindings.end:
          newX = snap ? this.pages.length-1 : this.maxScrollX;
          newY = snap ? this.pages[0].length-1 : this.maxScrollY;
          break;
        case this.options.keyBindings.home:
          newX = 0;
          newY = 0;
          break;
        case this.options.keyBindings.left:
          newX += snap ? -1 : 5 + this.keyAcceleration>>0;
          break;
        case this.options.keyBindings.up:
          newY += snap ? 1 : 5 + this.keyAcceleration>>0;
          break;
        case this.options.keyBindings.right:
          newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
          break;
        case this.options.keyBindings.down:
          newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
          break;
        default:
          return;
      }
  
      if ( snap ) {
        this.goToPage(newX, newY);
        return;
      }
  
      if ( newX > 0 ) {
        newX = 0;
        this.keyAcceleration = 0;
      } else if ( newX < this.maxScrollX ) {
        newX = this.maxScrollX;
        this.keyAcceleration = 0;
      }
  
      if ( newY > 0 ) {
        newY = 0;
        this.keyAcceleration = 0;
      } else if ( newY < this.maxScrollY ) {
        newY = this.maxScrollY;
        this.keyAcceleration = 0;
      }
  
      this.scrollTo(newX, newY, 0);
  
      this.keyTime = now;
    },
  
    _animate: function (destX, destY, duration, easingFn) {
      var that = this,
        startX = this.x,
        startY = this.y,
        startTime = utils.getTime(),
        destTime = startTime + duration;
  
      function step () {
        var now = utils.getTime(),
          newX, newY,
          easing;
  
        if ( now >= destTime ) {
          that.isAnimating = false;
          that._translate(destX, destY);
          
          if ( !that.resetPosition(that.options.bounceTime) ) {
            that._execEvent('scrollEnd');
          }
  
          return;
        }
  
        now = ( now - startTime ) / duration;
        easing = easingFn(now);
        newX = ( destX - startX ) * easing + startX;
        newY = ( destY - startY ) * easing + startY;
        that._translate(newX, newY);
  
        if ( that.isAnimating ) {
          rAF(step);
        }
  
        if ( that.options.probeType == 3 ) {
          that._execEvent('scroll');
        }
      }
  
      this.isAnimating = true;
      step();
    },
  
    handleEvent: function (e) {
      switch ( e.type ) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);
          break;
        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);
          break;
        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);
          break;
        case 'orientationchange':
        case 'resize':
          this._resize();
          break;
        case 'transitionend':
        case 'webkitTransitionEnd':
        case 'oTransitionEnd':
        case 'MSTransitionEnd':
          this._transitionEnd(e);
          break;
        case 'wheel':
        case 'DOMMouseScroll':
        case 'mousewheel':
          this._wheel(e);
          break;
        case 'keydown':
          this._key(e);
          break;
        case 'click':
          if ( this.enabled && !e._constructed ) {
            e.preventDefault();
            e.stopPropagation();
          }
          break;
      }
    }
  };
  function createDefaultScrollbar (direction, interactive, type) {
    var scrollbar = document.createElement('div'),
      indicator = document.createElement('div');
  
    if ( type === true ) {
      scrollbar.style.cssText = 'position:absolute;z-index:9999';
      indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
    }
  
    indicator.className = 'iScrollIndicator';
  
    if ( direction == 'h' ) {
      if ( type === true ) {
        scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
        indicator.style.height = '100%';
      }
      scrollbar.className = 'iScrollHorizontalScrollbar';
    } else {
      if ( type === true ) {
        scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
        indicator.style.width = '100%';
      }
      scrollbar.className = 'iScrollVerticalScrollbar';
    }
  
    scrollbar.style.cssText += ';overflow:hidden';
  
    if ( !interactive ) {
      scrollbar.style.pointerEvents = 'none';
    }
  
    scrollbar.appendChild(indicator);
  
    return scrollbar;
  }
  
  function Indicator (scroller, options) {
    this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
    this.wrapperStyle = this.wrapper.style;
    this.indicator = this.wrapper.children[0];
    this.indicatorStyle = this.indicator.style;
    this.scroller = scroller;
  
    this.options = {
      listenX: true,
      listenY: true,
      interactive: false,
      resize: true,
      defaultScrollbars: false,
      shrink: false,
      fade: false,
      speedRatioX: 0,
      speedRatioY: 0
    };
  
    for ( var i in options ) {
      this.options[i] = options[i];
    }
  
    this.sizeRatioX = 1;
    this.sizeRatioY = 1;
    this.maxPosX = 0;
    this.maxPosY = 0;
  
    if ( this.options.interactive ) {
      if ( !this.options.disableTouch ) {
        utils.addEvent(this.indicator, 'touchstart', this);
        utils.addEvent(window, 'touchend', this);
      }
      if ( !this.options.disablePointer ) {
        utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
      }
      if ( !this.options.disableMouse ) {
        utils.addEvent(this.indicator, 'mousedown', this);
        utils.addEvent(window, 'mouseup', this);
      }
    }
  
    if ( this.options.fade ) {
      this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
      var durationProp = utils.style.transitionDuration;
      if(!durationProp) {
        return;
      }
      this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
      // remove 0.0001ms
      var self = this;
      if(utils.isBadAndroid) {
        rAF(function() {
          if(self.wrapperStyle[durationProp] === '0.0001ms') {
            self.wrapperStyle[durationProp] = '0s';
          }
        });
      }
      this.wrapperStyle.opacity = '0';
    }
  }
  
  Indicator.prototype = {
    handleEvent: function (e) {
      switch ( e.type ) {
        case 'touchstart':
        case 'pointerdown':
        case 'MSPointerDown':
        case 'mousedown':
          this._start(e);
          break;
        case 'touchmove':
        case 'pointermove':
        case 'MSPointerMove':
        case 'mousemove':
          this._move(e);
          break;
        case 'touchend':
        case 'pointerup':
        case 'MSPointerUp':
        case 'mouseup':
        case 'touchcancel':
        case 'pointercancel':
        case 'MSPointerCancel':
        case 'mousecancel':
          this._end(e);
          break;
      }
    },
  
    destroy: function () {
      if ( this.options.fadeScrollbars ) {
        clearTimeout(this.fadeTimeout);
        this.fadeTimeout = null;
      }
      if ( this.options.interactive ) {
        utils.removeEvent(this.indicator, 'touchstart', this);
        utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
        utils.removeEvent(this.indicator, 'mousedown', this);
  
        utils.removeEvent(window, 'touchmove', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
        utils.removeEvent(window, 'mousemove', this);
  
        utils.removeEvent(window, 'touchend', this);
        utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
        utils.removeEvent(window, 'mouseup', this);
      }
  
      if ( this.options.defaultScrollbars && this.wrapper.parentNode ) {
        this.wrapper.parentNode.removeChild(this.wrapper);
      }
    },
  
    _start: function (e) {
      var point = e.touches ? e.touches[0] : e;
  
      e.preventDefault();
      e.stopPropagation();
  
      this.transitionTime();
  
      this.initiated = true;
      this.moved = false;
      this.lastPointX	= point.pageX;
      this.lastPointY	= point.pageY;
  
      this.startTime	= utils.getTime();
  
      if ( !this.options.disableTouch ) {
        utils.addEvent(window, 'touchmove', this);
      }
      if ( !this.options.disablePointer ) {
        utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
      }
      if ( !this.options.disableMouse ) {
        utils.addEvent(window, 'mousemove', this);
      }
  
      this.scroller._execEvent('beforeScrollStart');
    },
  
    _move: function (e) {
      var point = e.touches ? e.touches[0] : e,
        deltaX, deltaY,
        newX, newY,
        timestamp = utils.getTime();
  
      if ( !this.moved ) {
        this.scroller._execEvent('scrollStart');
      }
  
      this.moved = true;
  
      deltaX = point.pageX - this.lastPointX;
      this.lastPointX = point.pageX;
  
      deltaY = point.pageY - this.lastPointY;
      this.lastPointY = point.pageY;
  
      newX = this.x + deltaX;
      newY = this.y + deltaY;
  
      this._pos(newX, newY);
  
  
      if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
        this.startTime = timestamp;
        this.scroller._execEvent('scroll');
      } else if ( this.scroller.options.probeType > 1 ) {
        this.scroller._execEvent('scroll');
      }
  
  
  // INSERT POINT: indicator._move
  
      e.preventDefault();
      e.stopPropagation();
    },
  
    _end: function (e) {
      if ( !this.initiated ) {
        return;
      }
  
      this.initiated = false;
  
      e.preventDefault();
      e.stopPropagation();
  
      utils.removeEvent(window, 'touchmove', this);
      utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
      utils.removeEvent(window, 'mousemove', this);
  
      if ( this.scroller.options.snap ) {
        var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
  
        var time = this.options.snapSpeed || Math.max(
            Math.max(
              Math.min(Math.abs(this.scroller.x - snap.x), 1000),
              Math.min(Math.abs(this.scroller.y - snap.y), 1000)
            ), 300);
  
        if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
          this.scroller.directionX = 0;
          this.scroller.directionY = 0;
          this.scroller.currentPage = snap;
          this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
        }
      }
  
      if ( this.moved ) {
        this.scroller._execEvent('scrollEnd');
      }
    },
  
    transitionTime: function (time) {
      time = time || 0;
      var durationProp = utils.style.transitionDuration;
      if(!durationProp) {
        return;
      }
  
      this.indicatorStyle[durationProp] = time + 'ms';
  
      if ( !time && utils.isBadAndroid ) {
        this.indicatorStyle[durationProp] = '0.0001ms';
        // remove 0.0001ms
        var self = this;
        rAF(function() {
          if(self.indicatorStyle[durationProp] === '0.0001ms') {
            self.indicatorStyle[durationProp] = '0s';
          }
        });
      }
    },
  
    transitionTimingFunction: function (easing) {
      this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
    },
  
    refresh: function () {
      this.transitionTime();
  
      if ( this.options.listenX && !this.options.listenY ) {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
      } else if ( this.options.listenY && !this.options.listenX ) {
        this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
      } else {
        this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
      }
  
      if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
        utils.addClass(this.wrapper, 'iScrollBothScrollbars');
        utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
  
        if ( this.options.defaultScrollbars && this.options.customStyle ) {
          if ( this.options.listenX ) {
            this.wrapper.style.right = '8px';
          } else {
            this.wrapper.style.bottom = '8px';
          }
        }
      } else {
        utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
        utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
  
        if ( this.options.defaultScrollbars && this.options.customStyle ) {
          if ( this.options.listenX ) {
            this.wrapper.style.right = '2px';
          } else {
            this.wrapper.style.bottom = '2px';
          }
        }
      }
  
      utils.getRect(this.wrapper);	// force refresh
  
      if ( this.options.listenX ) {
        this.wrapperWidth = this.wrapper.clientWidth;
        if ( this.options.resize ) {
          this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
          this.indicatorStyle.width = this.indicatorWidth + 'px';
        } else {
          this.indicatorWidth = this.indicator.clientWidth;
        }
  
        this.maxPosX = this.wrapperWidth - this.indicatorWidth;
  
        if ( this.options.shrink == 'clip' ) {
          this.minBoundaryX = -this.indicatorWidth + 8;
          this.maxBoundaryX = this.wrapperWidth - 8;
        } else {
          this.minBoundaryX = 0;
          this.maxBoundaryX = this.maxPosX;
        }
  
        this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
      }
  
      if ( this.options.listenY ) {
        this.wrapperHeight = this.wrapper.clientHeight;
        if ( this.options.resize ) {
          this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
          this.indicatorStyle.height = this.indicatorHeight + 'px';
        } else {
          this.indicatorHeight = this.indicator.clientHeight;
        }
  
        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
  
        if ( this.options.shrink == 'clip' ) {
          this.minBoundaryY = -this.indicatorHeight + 8;
          this.maxBoundaryY = this.wrapperHeight - 8;
        } else {
          this.minBoundaryY = 0;
          this.maxBoundaryY = this.maxPosY;
        }
  
        this.maxPosY = this.wrapperHeight - this.indicatorHeight;
        this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
      }
  
      this.updatePosition();
    },
  
    updatePosition: function () {
      var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
        y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
  
      if ( !this.options.ignoreBoundaries ) {
        if ( x < this.minBoundaryX ) {
          if ( this.options.shrink == 'scale' ) {
            this.width = Math.max(this.indicatorWidth + x, 8);
            this.indicatorStyle.width = this.width + 'px';
          }
          x = this.minBoundaryX;
        } else if ( x > this.maxBoundaryX ) {
          if ( this.options.shrink == 'scale' ) {
            this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
            this.indicatorStyle.width = this.width + 'px';
            x = this.maxPosX + this.indicatorWidth - this.width;
          } else {
            x = this.maxBoundaryX;
          }
        } else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
          this.width = this.indicatorWidth;
          this.indicatorStyle.width = this.width + 'px';
        }
  
        if ( y < this.minBoundaryY ) {
          if ( this.options.shrink == 'scale' ) {
            this.height = Math.max(this.indicatorHeight + y * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
          }
          y = this.minBoundaryY;
        } else if ( y > this.maxBoundaryY ) {
          if ( this.options.shrink == 'scale' ) {
            this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
            this.indicatorStyle.height = this.height + 'px';
            y = this.maxPosY + this.indicatorHeight - this.height;
          } else {
            y = this.maxBoundaryY;
          }
        } else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
          this.height = this.indicatorHeight;
          this.indicatorStyle.height = this.height + 'px';
        }
      }
  
      this.x = x;
      this.y = y;
  
      if ( this.scroller.options.useTransform ) {
        this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
      } else {
        this.indicatorStyle.left = x + 'px';
        this.indicatorStyle.top = y + 'px';
      }
    },
  
    _pos: function (x, y) {
      if ( x < 0 ) {
        x = 0;
      } else if ( x > this.maxPosX ) {
        x = this.maxPosX;
      }
  
      if ( y < 0 ) {
        y = 0;
      } else if ( y > this.maxPosY ) {
        y = this.maxPosY;
      }
  
      x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
      y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
  
      this.scroller.scrollTo(x, y);
    },
  
    fade: function (val, hold) {
      if ( hold && !this.visible ) {
        return;
      }
  
      clearTimeout(this.fadeTimeout);
      this.fadeTimeout = null;
  
      var time = val ? 250 : 500,
        delay = val ? 0 : 300;
  
      val = val ? '1' : '0';
  
      this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
  
      this.fadeTimeout = setTimeout((function (val) {
        this.wrapperStyle.opacity = val;
        this.visible = +val;
      }).bind(this, val), delay);
    }
  };
  
  IScroll.utils = utils;
  
  if ( typeof module != 'undefined' && module.exports ) {
    module.exports = IScroll;
  } else if ( typeof define == 'function' && define.amd ) {
          define( function () { return IScroll; } );
  } else {
    window.IScroll = IScroll;
  }
  
  })(window, document, Math);
  if (isTablet){
  
    jQuery(function($){
      $(document).mouseup( function(e){ // событие клика по веб-документу
        var div = $( ".choice-box__wrapper--active" ); // тут указываем ID элемента
        if (div.is(e.target) ) { 

          
                $(".isBigZindex").parent().removeClass("isBigZindex")
                $(".js-choice-box").removeClass("choice-box--active")
                $(".choice-box__wrapper").removeClass("choice-box__wrapper--active")
                
                
        }
      });
    });
  }
  let scene_5 = {
    target: '#section_5',
    target_2: '.end_of_seq',
    count: 385,
    src: './assets/images/chain/comp2/',
    type: '.png',
    wrap: document.querySelector('#preloadImagesContainer'),
    // canvas: document.querySelector('#section_5_canvas'),
    images: {},
    firstImage: true,
    imgHasWrap: true,
  };


  let scene_cst = {
    target: '#mobile-wrap',
    target_2: '.partners',
    count: 10,
    // src: './assets/images/mobile_anch2/',
    src: '/local/templates/.default/frontend/dist/assets/images/mobile_anch2/',
    type: '.webp',
    wrap: document.querySelector('#mobile-anchor'),
    // canvas: document.querySelector('#section_5_canvas'),
    images: {},
    firstImage: true,
    imgHasWrap: true,
  };
  



  function heroAnimationAnch(){
  var anchorRight = new TimelineMax();
  let anchorRightElem = $("#preloadImagesContainer");
  console.log(controller)
  if (isRetina){
    anchorRight.to(anchorRightElem, 1, { x: "35%", ease: "cubic-bezier(.5,0,0,1)", 
    }, "0");
  } else {
    anchorRight.to(anchorRightElem, 1, { x: "28%", ease: "cubic-bezier(.5,0,0,1)",
  }, "0");
  }

  var sceneAnchor = new ScrollMagic.Scene({
    // triggerElement: ".triger_dev",
    duration: 600,
  })
  // .addIndicators()
  .setTween(anchorRight)
  .addTo(controller);

  }

  function FixedFooter(){
    if ($("body").hasClass("main-page")){
      let footerHeight = $(".footer").height();
      $(".footer__substrate").height(footerHeight + 20)
      // $(".main").css("margin-bottom" , footerHeight + "px")
     
    }
    

 
  }     
  var loadImgsHandler = function(objects) {
    if (objects) {
      var count = 0;
      for (var k in objects) {
        if (objects.hasOwnProperty(k) && objects[k].wrap) {
          var object = objects[k];
          var start = object.i ? object.i : 1;
          for (var i = start; i < object.count + 1; i++) {
            var image = new Image();
            image.index = i;
            image.k = k;
            image.object = object;
            image.array = object.images;
            image.firstImage = object.firstImage;
            image.i = start;

            if (object.canvas) {
              image.canvas = object.canvas;
            }

            image.onload = function() {
              if (!this.canvas) {
                if (this.object.imgHasWrap) {
                  var div = document.createElement('div');
                  div.classList.add('img_' + this.index);
                  div.appendChild(this);
                  this.object.wrap.appendChild(div);
                } else {
                  this.object.wrap.appendChild(this);
                  this.classList.add('img_' + this.index);
                }
              } else {
                if (this.index === this.i) {
                  this.canvas.height = this.height;
                  this.canvas.width = this.width;
                  if (this.firstImage) {
                    this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
                  }
                }
                objects[this.k].images[this.index] = this;
              }

              count++;
              let counterPng;
             

              if (allImgsCount === counterPng && !isTablet) {
                allImageLoaded.resolve();
              }
            };

            if (!isTablet) {
              image.classList.add('is-visible');
            }
            if (i > 40){
              object.type = ".jpg"
            }
            image.src = object.src + i + object.type;
          }
        }
      }
    }
  };

  var setLoadImages = function() {
  //   var intro = document.querySelector('.c-intro');
    var objects = [];

    if (isTablet){
      
      objects =[scene_cst];
    } else {
      objects =[scene_5];
    }
     
    
    objects.map(function(item) {
      allImgsCount += item.count;
      if (item.i) {
        allImgsCount -= item.i;
      }
    });

    loadImgsHandler(objects);
  };

  var setVisibleClassImages = function() {
  //   scene_5.wrap.className = 'c-manager frame_1';
    // scene_cst.wrap.className = 'c-manager frame_1';
  };

  var removeAllImageVisible = function() {
    $('img').removeClass('is-visible');
  };

  var outerWrapManager = 0;
  var outerWrapManagerSection = 0;

  var resizeManagerSizes = function() {
    var managerWrap = $('.c-manager__wrap');
    var sectionWrap = $('.c-fifth-section__wrap');
    var isbottom = managerWrap.hasClass('bottom');

    if (isbottom) {
      managerWrap.removeClass('bottom');
    }

    outerWrapManager = managerWrap.outerHeight() + managerWrap.offset().top;
    
    outerWrapManagerSection = sectionWrap.outerHeight() + sectionWrap.offset().top;

    if (isbottom) {
      managerWrap.addClass('bottom');
    }
  };

  var initAnimationsPage = function() {
      // sequention_5();
    sequention_mob();
    setVisibleClassImages();
    resizeManagerSizes();
    
  };

  var scrollManager = function() {
    if (!isTablet) {
      var window = $(this);
      var scrollTop = window.scrollTop();
      var hWindow = window.outerHeight();
      var managerWrap = $('.c-manager__wrap');
      var sectionWrap = $('.c-fifth-section__wrap');

      if (scrollTop + hWindow >= outerWrapManager) {
        managerWrap.addClass('fixed');

      } else {
        managerWrap.removeClass('fixed');
        // if ($("#preloadImagesContainer").hasClass("frameImage40")){
        //   console.log("q")
        // }
      }

      if (scrollTop + hWindow > outerWrapManagerSection) {
        managerWrap.removeClass('fixed').addClass('bottom');
      } else {
        managerWrap.removeClass('bottom');
      }
    }
  };

  var scrollFromFirstSection = function() {
    var allowScrollTop = false;
 

  };

  var scrollFunction = function() {
  //   var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  //   isSafari = true;

    jQuery(function($) {
      var $window = $(window);

      // var allowScrollTop = false;


      resizeManagerSizes();

      $window.on('resize', function() {
        resizeManagerSizes();
        // FixedFooter();
        scrollManager();
     
        sequention_5();
      }).on('scroll', scrollManager).on('mousewheel DOMMouseScroll', function(event) {
         scrollManager();
         if (!isTablet) {
          // var scrollTop = $(window).scrollTop();
          // var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
          // var delta2 = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;

          // if (section1.outerHeight() > scrollTop && delta2 < 0 && !allowScrollTop) {
          //   allowScrollTop = true;
          //   $('body, html').stop(true, true).animate({scrollTop: section2.offset().top + 1}, 600, function() {
          //     allowScrollTop = false;
          //   });
          // } else if (section2.offset().top + Math.abs(delta) >= scrollTop && delta2 > 0 && !allowScrollTop) {
          //   allowScrollTop = true;
          //   $('body, html').stop(true, true).animate({scrollTop: 0}, 600, function() {
          //     allowScrollTop = false;
          //   });
          // }
        }
      });

      // function mousewheelListener(stop) {
      //   $window.on('mousewheel DOMMouseScroll', function(event) {
      //     if (!isTablet) {
      //       event.stopPropagation();
      //       event.preventDefault();
      //       if (!allowScrollTop) {
      //         console.log("qq")
      //         var delta2 = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
      //         var scrollTop = $window.scrollTop();
      //         var finalScroll = scrollTop - parseInt(delta2 * scrollDistance);
      //         TweenMax.to($window, scrollTime, {
      //           scrollTo: {y: finalScroll, autoKill: true},
      //           ease: 'linear',
      //           autoKill: true,
      //           overwrite: 5,
      //         });
      //       }
      //     }
      //   });
      // }

      // if (!isSafari) {
      //   //  mousewheelListener()
      // }

      // document.addEventListener('touchstart', function(event) {
      //   if (!isTablet) {
      //     this.allowUp = (this.scrollTop > 0);
      //     this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
      //     this.slideBeginY = event.pageY;
      //   }
      // });

      // document.addEventListener('touchmove', function(event) {
      //   if (!isTablet) {
      //     var up = (event.pageY > this.slideBeginY);
      //     var down = (event.pageY < this.slideBeginY);
      //     this.slideBeginY = event.pageY;
      //     if ((up && this.allowUp) || (down && this.allowDown)) {
      //       event.stopPropagation();
      //     }
      //     else {
      //       event.preventDefault();
      //     }
      //   }
      // });
    });
  };



 
  var setDesktopAnimation = function() {
    if (initIntro) {
      if (window.location.hash === '') {
        setTimeout(function() {
          // document.body.classList.add('w-fixed')
          initIntroAnimation();
        }, 5);
      } else {
        setTimeout(function() {
          // window.scrollTo(0, 0);
          //document.body.classList.add('w-fixed')
          initIntroAnimation();
        }, 5);
      }
    } else {
      introLoaded = true;
      if (window.location.hash === '') {
        setTimeout(function() {
          // window.scrollTo(0, 0);
       
          initAnimationsPage();
          scrollFunction();
        }, 5);
      } else {
        setTimeout(function() {
        
          initAnimationsPage();
          scrollFunction();
        }, 5);
      }
    }
  };



  const debounceTime = 300;
  let resizeSceneTimeout;

  window.addEventListener('resize', function() {
    setTimeout(() => {
      heroAnimationAnch();
    }, 100);
    console.log("resize")
    clearTimeout(resizeSceneTimeout);
    resizeSceneTimeout = setTimeout(() => sequention_5(), debounceTime);
    
    FixedFooter();
    
    winw = window.innerWidth || e.clientWidth || g.clientWidth;
    isTablet = winw < 1280;
    if (isTablet) {
      // setMobileScrollHeader(true);
    } else {
     
        setDesktopAnimation();
        removeAllImageVisible();
        setVisibleClassImages();
    }
  });
  let isMain = false;
if ($("body").hasClass("main-page")){
   isMain = true
}

 if (isMain){

  var sequention_mob = function() {

    var duration_scene_cst = $(scene_cst.target).outerHeight() + $(scene_cst.target_2).outerHeight() - $(scene_cst.wrap).outerHeight() - 600;
    var offset_scene_cst = duration_scene_cst / scene_cst.count;
    var offset_top_scene_cst = $(scene_cst.wrap).outerHeight();



    for (var i = 1, l = scene_cst.count; i <= l; i++) {
      var scene_for_cst = new ScrollMagic.Scene({
        triggerElement: scene_cst.target,
        offset: (i * offset_scene_cst) + offset_top_scene_cst - 200,

      
        reverse: true,
        triggerHook: .5,
      })
          // .addIndicators() // add indicators (requires plugin)
          .addTo(controller)
        
          scene_for_cst.index = i;
        
          scene_for_cst.on('start', function(event) {
            $("body").addClass("pinned")
        if (scene_cst.canvas) {
          //scene_5.wrap.className = 'c-manager frame_' + this.index;
          if (this.index <= scene_cst.count && scene_cst.images[this.index]) {
            scene_cst.canvas.getContext('2d').drawImage(scene_cst.images[this.index], 0, 0, scene_cst.canvas.width, scene_cst.images[this.index].height);
          }
        } else {
          if (this.index <= scene_cst.count) {
            // $("#mobile-anchor").removeClass('frame_' + (this.index - 1))
            // $("#mobile-anchor").addClass('frame_' + this.index).addClass("c-manager");
            // $("#mobile-anchor").removeClass('frame_' + (this.index + 1))
       
            scene_cst.wrap.className = 'c-manager frame_' + this.index;
          }
        }
      });
    }

  };
  var sequention_5 = function() {
    // console.log('sequention_5 timeout');
    // let lastIndex;
    // console.log(lastIndex)
    controllerAnch?.destroy();
    // console.log("qq")
   
    controllerAnch = new ScrollMagic.Controller();
    var duration_scene_5 = $(scene_5.target).outerHeight() + $(scene_5.target_2).outerHeight() - $(scene_5.wrap).outerHeight();
    var offset_scene_5 = duration_scene_5 / scene_5.count;
    var offset_top_scene_5 = $(scene_5.wrap).outerHeight();
    let counterLoad = 0;
    for (var i = 1, l = scene_5.count; i <= l; i++) {
      const scene5 = new ScrollMagic.Scene({
        triggerElement: scene_5.target,
        offset: ((i*1.1) * offset_scene_5) + offset_top_scene_5 - 200,
        reverse: true,
        triggerHook: 1,
        // duration: "100%",
      })
     
 
        .setClassToggle(".hero", "end") // add class toggle
          //  .addIndicators() // add indicators (requires plugin)
          .addTo(controllerAnch);
         
          scene5.index = i + 19;
        
        scene5.on('start', function(event) {
          if (this.index <= scene_5.count) {
              // console.log($(".img_" + this.index + " img"))
              // console.log(counterLoad)
              // if ($(".img_" + this.index + " img").hasClass("lazyloading")){
              //   if (counterLoad == 0){
              //     counterLoad = 1
              //   }
                
              // }
              // if ( counterLoad == 1){
              //   return
              // }
              // if ($(".img_" + this.index + " img").hasClass("lazyloading") && $("#preloadImages img").hasClass("lazyloading")){
              //   if (counterLoad == 0){
              //     scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
                
              //   }


              //   return
              // if ($(".img_" + this.index + " img").hasClass("lazyload")){
              //   if (counterLoad == 0){
              //         counterLoad = 1
              //         scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              //       }
                    
              // } else if ($("#preloadImages img").hasClass("lazyloading"))  {
              //    return
              // } else {
              //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              // }
              
              // } else {
              //   scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              // }
              // $("#preloadImagesContainer").removeClass('frame_' + (this.index - 1))
              // $("#preloadImagesContainer").addClass('frame_' + this.index);
              // $("#preloadImagesContainer").removeClass('frame_' + (this.index + 1))
             
              // lastIndex = 'frame_' + (this.index + 1);
           
              // defaultImageCount = defaultImageCount + 1;


              if ($(".img_" + this.index + " img").hasClass("lazyload")){
                  //  $("#preloadImagesContainer").addClass('frame_' + this.index).one()
              } else {
                scene_5.wrap.className = 'frameImage c-manager frame_' + this.index;
              }
            }
      });
    }
  };


  window.addEventListener('load', function() {
    

    var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
    // to protect from tree shaking
    TweenMaxWithCSS = gsapWithCSS.core.Tween;
    var HERO = document.querySelector('.hero');
    var SCENE = HERO.querySelector('.hero__main');
    var SYSTEM__IMG = SCENE.querySelector('.hero__mobile-anch');
    var TL = gsapWithCSS.timeline();
    
   console.log(SYSTEM__IMG)
    // TL.fromTo(SYSTEM__IMG, {
    //   y: "-50%"
    // }, {
    //   y: "0"
    // }, "start");
    gsap.registerPlugin(CSSPlugin,ScrollSmoother,ScrollTrigger)
    ScrollSmoother.create({
      wrapper: ".content-wrapper",
      content: ".content-wrapper__scroll",
    
      smooth: 1.5,
      effects: true
    });
  
    console.log(ScrollSmoother)
    
    ScrollTrigger.matchMedia({
      "(min-width: 320px) and (max-width: 1023px)": function minWidth320pxAndMaxWidth960px() {
        var TL = new gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: SYSTEM__IMG,
            start: "top",
            end: "100% + 400px",
            scrub: true,
            markers: false,
            toggleClass: 'enable',
            ease:"none",

            onEnter: () => $("body").removeClass('pinnedTest'),
            onLeave: () => $("body").addClass('pinnedTest'),
            onEnterBack: () => $("body").removeClass('pinnedTest'),
            onLeaveBack: () => $("body").addClass('pinnedTest'),
          }
      });
        TL.fromTo(SYSTEM__IMG, {
          
          y: "-50%"
        }, {
          y: "0%"
        }, "start",
        );
        
   
       
      },
   
    });

    // let STL_1 = gsapWithCSS.timeline({
    //   // yes, we can add it to an entire timeline!
    //   scrollTrigger: {
    //     trigger: ".content-wrapper__scroll",
    //     pin: false,   // pin the trigger element while active
    //     start: "center", // when the top of the trigger hits the top of the viewport
    //     end: "+=500", // end after scrolling 500px beyond the start
    //     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
       
    //   }
    // });
  
  // add animations and labels to the timeline


  // STL_1.addLabel("start")
  //   .from(".hero__mobile-anch", {scale: 0.3, rotation:45, autoAlpha: 0})
    // let mobileParam = $(window).height() - 
    
    // $("body").overlayScrollbars({ });
    // controller = new ScrollMagic.Controller();
    // console.log(isMobile)
    controller = new ScrollMagic.Controller();
    // if (isTablet){
    //   controller = new ScrollMagic.Controller({container: ".content-wrapper__scroll"});
    // } else {
    //   controller = new ScrollMagic.Controller();
    // }
   
 
      if(!isTablet){
        setTimeout(() => {
          sequention_5();
        }, 100);
      }
          

      
    var tl = new TimelineMax();
    let parallaxElem = $(".video-gallery img");
    tl.to(parallaxElem, 1, { y: -100, ease: "cubic-bezier(.5,0,0,1)" });
    var scene = new ScrollMagic.Scene({
      triggerElement: ".aboutUs__preview ",
      triggerHook: 1,
      duration: "150%",
    })
        // .addIndicators()
      .setTween(tl)
      .addTo(controller);


     if(!isTablet){
        var iconsTimeline = new TimelineMax();
        let iconsPallax = $(".checks__title div");
        iconsTimeline.to(iconsPallax, 1, { y: 250, ease: "cubic-bezier(.5,0,0,1)" });
        var iconsScene = new ScrollMagic.Scene({
          triggerElement: ".checks__title div",
          triggerHook: 1,
          duration: "150%",
        })
        // .addIndicators()
          .setTween(iconsTimeline)
          .addTo(controller);

          $(".tizers__item-container--w60").each(function() {
            var tizersItemTimeline = new TimelineMax();
            var child = $(this).find(".tizers-item");
            let parallaxY;
            if (!isTablet){
              parallaxY = 100
            } else {
              parallaxY = 30
            }
            tizersItemTimeline.to(child, 1, { y: -parallaxY, ease: "cubic-bezier(.5,0,0,1)" });
          
            var scene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: 1,
              duration: "120%"
            })
              .setTween(tizersItemTimeline)
              .addTo(controller);
          });
     }


    // setTimeout(() => {
    //   var mobile_anchTest = new TimelineMax();
    //   let firstAnchMob = $(".hero__mobile-anch");
   
    //   // let mobileParam = $('.tech__title').offset().top - $(window).height();
    //   // console.log($('.tech__title').offset().top)
    //   // console.log($(window).height())
    //   // console.log(mobileParam)
    //   // // mobile_anchTest.to(firstAnchMob, 1, { y: - 700, ease: "cubic-bezier(.5,0,0,1)" });
    //   // // mobile_anchTest.to(firstAnchMob, 1, { y: - $(window).height()*.5 });
    //   // mobile_anchTest.to(firstAnchMob, 1, { y: - mobileParam, },"0");
    //   // let durationAnch = $("#mobile-secvention").offset().top

    //   var sceneMobAnch = new ScrollMagic.Scene({
    //     triggerElement: ".hero",
    //     triggerHook: 0,
    //     duration: durationAnch,
    //   })
    //       .setClassToggle("body", "anchor-hidden") // add class toggle
    //     .setTween(mobile_anchTest)
    //     // .addIndicators()
    //     .addTo(controller);
    // }, 200);


        // var sceneDev = new ScrollMagic.Scene({triggerElement: "#section_5", duration: 300})
        // 	.setPin(".hero__mobile-anch")
        // 	.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
        // 	.addTo(controller);
      setTimeout(() => {
        let mobile_anchLast= new TimelineMax();
        let lastAnchMob = $("#mobile-anchor .img_10 img");

        // console.log(lastAnchMob)
        // console.log("prev")
    
        mobile_anchLast.to(lastAnchMob, 1, { y: "-50%", });
    

        var sceneMobAnchLast = new ScrollMagic.Scene({
          triggerElement: ".partners__title",
          triggerHook: .5,
          duration: "100%",
        })
       
          .setTween(mobile_anchLast)
          // .addIndicators()
          .addTo(controller);
      }, 1000);
      heroAnimationAnch();
      

      var bgRight = new TimelineMax();
      let bgRightElem = $(".hero__bg")
      bgRight.to(bgRightElem, 1, { scaleX: 1, width: "100%",  ease: "cubic-bezier(.5,0,0,1)",
      },
       );
    
    

      var sceneBgRight = new ScrollMagic.Scene({
        // triggerElement: ".triger_dev",
        
        duration: 2050,
      })
     
      // .addIndicators()
      .setTween(bgRight)
      .addTo(controller);

      var bgLeft = new TimelineMax();
      let bgLeftElem = $(".hero__shadow")
      bgLeft.to(bgLeftElem, 1, { opacity: 1,  ease: "cubic-bezier(.5,0,0,1)",
      },
       );
       var sceneBgLeft = new ScrollMagic.Scene({
        // triggerElement: ".triger_dev",
        
        duration: 1100,
      })
     
      // .addIndicators()
      .setTween(bgLeft)
      .addTo(controller);
     
   
  
      // preloader.to("#theGradientWhiteTop stop", 0.25, {
      //   attr: { offset: "0%" },
      //   repeat: false,
      //   yoyo: true,
      //   repeatDelay: 0.5,
      //   ease: "cubic-bezier(.5,0,0,1)",
      //   onComplete: function() {
      //     // $("body").addClass('mainAnimatedClass');
      //   }
      // },"=-0.13");
      



      

       
      
  

    //  for (var i = 0; i < 41; i++) {
    //   function timeout(val) {
    //     setTimeout(function() {
    //       $(".frameImage").removeClass('frameImage' + (i - 1))
    //       $(".frameImage").addClass('frameImage' + i)
    //     }, 100);
    //   }
    //   timeout(i);
    // }
     
   
    
    
 

      initAnimationsPage();

     

    if(isTablet){
      setLoadImages();
      sequention_mob();
    }
    
    document.body.classList.add('w-load');

    let aosOffset;
    if (!isTablet){
      aosOffset = 200
    } else{
      aosOffset = 100
    }
    AOS.init({
      offset:aosOffset,
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'cubic-bezier(.5,0,0,1)', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
    setTimeout(() => {
      if(isTablet){
        // var controller1 = new ScrollMagic.Controller({container: ".content-wrapper__scroll"});
        $('[data-aos="fade-up"]').each(function(){
  
  
          var scene = new ScrollMagic.Scene({triggerElement: this,triggerHook: .9})
              .addTo(controller)
            .setClassToggle(this, "aos-animate") // add class toggle
              // .addIndicators() // add indicators (requires plugin)
              .reverse(false)
              
          });
      }
      
     }, 100);
   
      $(".categoriesMain-item").each(function() {
        var catItemTimeline = new TimelineMax();
        var child = $(this).find("img");
        let parallaxY;
        if (!isTablet){
          parallaxY = -180
        } else {
          parallaxY = -80
        }
        catItemTimeline.to(child, 1, { y: parallaxY, ease: "cubic-bezier(.5,0,0,1)" });
      
        var scene = new ScrollMagic.Scene({
          triggerElement: this,
          triggerHook: 1,
          duration: "110%"
        })
          .setTween(catItemTimeline)
         
          .addTo(controller);
      });

    


  
      FixedFooter();
      
  
      // we'd only like to use iScroll for mobile...
      if (isMobile) {
        // configure iScroll
   
      //   var myScroll = new IScroll('.content-wrapper__scroll',
      //   {
      //     // don't scroll horizontal
      //     scrollX: false,
      //     // but do scroll vertical
      //     scrollY: true,
      //     // show scrollbars
      //     scrollbars: true,
      //     // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
      //     // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
      //     useTransform: false,
      //     // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
      //     useTransition: false,
      //     // set to highest probing level to get scroll events even during momentum and bounce
      //     // requires inclusion of iscroll-probe.js
      //     probeType: 3,
      //     // pass through clicks inside scroll container
      //     click: true,
      //     // HWCompositing:false,
      //     // bounce:false,
      //     // momentum:false,
      //     deceleration:0.00125,
      //     // deceleration:0001,
      //     // bounceTime:1000

      //     bindToWrapper:true,
      //   }
      // );
  
  // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
      // controller.scrollPos(function () {
      //   return -myScroll.y;
        
      // });


    // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
      // myScroll.on("scroll", function () {
      //   controller.update(true);
      // });
      
        // add indicators to scrollcontent so they will be moved with it.
        
      }

      new ScrollMagic.Scene({triggerElement: "#categoriesMain",offset:0, triggerHook: 0,})
      .setClassToggle("body", "sequantion-end") // add class toggle
      .addTo(controller);

      // let cstHeight = $("#section_5").outerHeight()
      // new ScrollMagic.Scene({triggerElement: "#mobile-wrap",
      // triggerHook: .5,})
      // // .setClassToggle("#section_5", "pinned") // add class toggle
      // // .addIndicators()
      // .setClassToggle("body", "pinnedTest") // add class toggle
      // .addTo(controller);
     
      

      
    });
 }

  (function () {
  
    $( ".partners__item" ).mousemove(function(event) {
      $(this).siblings().addClass("isBigIndex")
      var target = this.getBoundingClientRect();
      var x = event.clientX - target.left;
      var y = event.clientY - target.top;
      let pointerElem = $(this).find(".partners__item-picture") ;
     setTimeout(() => {
      $(pointerElem).css("left", x + "px").css("top", y +  'px')
     }, 200);
      
   
    });
    $( ".partners__item" ).mouseleave(function(event) {

      $(".partners__item").removeClass("isBigIndex")
      
   
    });

})();


  
     
 


  jQuery(function($) {
    $.when(loaded, allImageLoaded).done(function() {
      if (isTablet) {
        setMobileVisibleElems(true);
      //   setLoadImages();
        // setTimeout(function() {
        //   window.scrollTo(0, 0);
        // }, 5);
      } else {
     
        setDesktopAnimation();
        removeAllImageVisible();
        setVisibleClassImages();
      }
      // scrollFromFirstSection();
      // Preloader();
    });

  });
  if (!isTablet) {
  //   setLoadImages();
  } else {
    allImageLoaded.resolve();
  }
};

Animations();



$(".print").click(function(e){
window.print()
})







