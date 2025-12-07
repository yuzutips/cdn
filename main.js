(function (_0x270341, _0x38a779) {
  const _0x53cfee = _0x270341();
  while (true) {
    try {
      const _0x2030d5 = -parseInt(_0x4c91(2588, 0x5d8)) / 1 * (-parseInt(_0x4c91(639, 0x8ec)) / 2) + parseInt(_0x4c91(2779, 0x12e2)) / 3 * (-parseInt(_0x4c91(5092, 0x19bd)) / 4) + parseInt(_0x4c91(2640, 0xbc)) / 5 + parseInt(_0x4c91(4731, 0x15cc)) / 6 + -parseInt(_0x4c91(229, 0x8f5)) / 7 * (-parseInt(_0x4c91(954, -0x638)) / 8) + -parseInt(_0x4c91(2724, 0x1566)) / 9 + -parseInt(_0x4c91(3955, 0x80c)) / 10;
      if (_0x2030d5 === _0x38a779) {
        break;
      } else {
        _0x53cfee.push(_0x53cfee.shift());
      }
    } catch (_0x346a30) {
      _0x53cfee.push(_0x53cfee.shift());
    }
  }
})(_0x530e, 146487);
"use strict";
!function (_0x5d5685) {
  _0x5d5685.fn.hgzMenu = function () {
    return this.each(function () {
      let _0x5327e7 = _0x5d5685(this);
      let _0x33cf1e = _0x5327e7.find('a');
      let _0x220cf5 = _0x33cf1e.length;
      function _0x3bc0a5(_0x538fee, _0xdee3d9, _0x3cb594, _0x27f737) {
        for (let _0x33465c = 0; _0x33465c < _0xdee3d9; _0x33465c++) {
          let _0x3f8a4b = _0x538fee.eq(_0x33465c);
          let _0x34360d = _0x3f8a4b.text();
          if ('_' !== _0x34360d.charAt(0) && '_' === _0x538fee.eq(_0x33465c + 1).text().charAt(0)) {
            (_0x27f737 = _0x3f8a4b.parent()).append("<ul class=\"ul sub sm-" + _0x3cb594 + "\"/>");
          }
          if ('_' === _0x34360d.charAt(0)) {
            _0x3f8a4b.text(_0x34360d.replace('_', '')).parent().appendTo(_0x27f737.children(".sm-" + _0x3cb594));
          }
        }
      }
      _0x3bc0a5(_0x33cf1e, _0x220cf5, 1);
      _0x3bc0a5(_0x33cf1e, _0x220cf5, 2);
      _0x5327e7.find(".sub").parent('li').addClass("has-sub");
      _0x5327e7.children(".widget").addClass("is-ready");
    });
  };
}(jQuery);
(function (_0x17fd63) {
  _0x17fd63.fn.hgzToc = function (_0x5cc95e) {
    return this.each(function () {
      var _0x50366c;
      var _0x2bf76e;
      var _0x39862a = [_0x17fd63(this)];
      var _0x307742 = this.tagName;
      var _0x51455f = 0;
      const _0x2ca872 = {
        content: "body",
        headings: "h1,h2,h3"
      };
      _0x2bf76e = (_0x50366c = _0x17fd63.extend(_0x2ca872, _0x5cc95e)).headings.split(',');
      _0x17fd63(_0x50366c.content).find(_0x50366c.headings).attr('id', function (_0x4c7daf, _0x4ee597) {
        return _0x4ee597 || function (_0x52ffd6) {
          if (0 === _0x52ffd6.length) {
            _0x52ffd6 = '?';
          }
          var _0x199afd = _0x52ffd6.replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, '_');
          var _0x45e02a = '';
          for (var _0x1324a7 = 1; null !== document.getElementById(_0x199afd + _0x45e02a);) {
            _0x45e02a = '_' + _0x1324a7++;
          }
          return _0x199afd + _0x45e02a;
        }(_0x17fd63(this).text());
      }).each(function (_0x167f50, _0x38ed92) {
        if ('' != (_0x167f50 = _0x17fd63(this)).text().trim()) {
          if ((_0x38ed92 = _0x17fd63.map(_0x2bf76e, function (_0x2323ba, _0x42f5df) {
            return _0x167f50.is(_0x2323ba) ? _0x42f5df : undefined;
          })[0]) > _0x51455f) {
            var _0x3ecd60 = _0x39862a[0].children('li').last()[0];
            if (_0x3ecd60) {
              _0x39862a.unshift(_0x17fd63('<' + _0x307742 + '/>').appendTo(_0x3ecd60));
            }
          } else {
            _0x39862a.splice(0, Math.min(_0x51455f - _0x38ed92, Math.max(_0x39862a.length - 1, 0)));
          }
          _0x17fd63("<li/>").appendTo(_0x39862a[0]).append(_0x17fd63("<a/>").text(_0x167f50.text()).attr("href", '#' + _0x167f50.attr('id')));
          _0x51455f = _0x38ed92;
        }
      });
    });
  };
})(jQuery);
(function (_0x3c65f1) {
  const _0x31aeaf = function () {
    let _0x32418f = true;
    return function (_0x3c09aa, _0x3f3a03) {
      const _0x3a0ebd = _0x32418f ? function () {
        if (_0x3f3a03) {
          const _0x24a5d9 = _0x3f3a03.apply(_0x3c09aa, arguments);
          _0x3f3a03 = null;
          return _0x24a5d9;
        }
      } : function () {};
      _0x32418f = false;
      return _0x3a0ebd;
    };
  }();
  (function () {
    _0x31aeaf(this, function () {
      const _0x5e922c = new RegExp("function *\\( *\\)");
      const _0xc7e0e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x37ceaa = _0x5c1783("init");
      if (!_0x5e922c.test(_0x37ceaa + "chain") || !_0xc7e0e.test(_0x37ceaa + "input")) {
        _0x37ceaa('0');
      } else {
        _0x5c1783();
      }
    })();
  })();
  _0x3c65f1.fn.hgzLazy = function (_0x41ff6a) {
    const _0x386674 = {
      onScroll: true
    };
    _0x41ff6a = _0x3c65f1.extend(_0x386674, _0x41ff6a);
    return this.each(function () {
      let _0x9ad909 = _0x3c65f1(this);
      let _0xef91b4 = _0x3c65f1(window);
      let _0x4f1bbc = _0x9ad909.width() >= 1 ? _0x9ad909.width() : 1;
      let _0x3ff8dc = _0x9ad909.height() >= 1 ? _0x9ad909.height() : 1;
      let _0x4b06fc = 'w' + Math.round(_0x4f1bbc + _0x4f1bbc / 10) + '-h' + Math.round(_0x3ff8dc + _0x3ff8dc / 10) + "-p-k-no-nu-rw";
      let _0x49b6de = '';
      let _0x156eb7 = _0x9ad909.data("src");
      if (_0x156eb7.match("resources.blogblog.com")) {
        _0x156eb7 = "undefined" != typeof noThumbnail ? noThumbnail : hgz.noThumb;
      }
      if (_0x156eb7.match("/img/a") || _0x156eb7.match("/blogger_img_proxy")) {
        let _0x1d5b67 = _0x156eb7.split('=');
        _0x156eb7 = (_0x156eb7.match('=') ? _0x1d5b67[0] : _0x156eb7) + "=w72-h72-p-k-no-nu";
      }
      function _0x1cc0fd() {
        let _0x3d87f5 = new Image();
        _0x3d87f5.onload = function () {
          _0x9ad909.attr("style", "background-image:url('" + this.src + "')").addClass("hgz-lazy");
        };
        _0x3d87f5.src = _0x49b6de;
      }
      if (_0x156eb7.match("/blogger_img_proxy") && _0x156eb7.match("testonly")) {
        _0x156eb7 = _0x156eb7.replace("-testonly.", '.');
      }
      _0x49b6de = _0x156eb7.match("w72-h72-p-k-no-nu") ? _0x156eb7.match('=') ? _0x156eb7.replace("=w72-h72-p-k-no-nu", '=' + _0x4b06fc) : _0x156eb7.replace("/w72-h72-p-k-no-nu", '/' + _0x4b06fc) : _0x156eb7;
      if (true == _0x41ff6a.onScroll) {
        _0xef91b4.on("load resize scroll", function _0x19ef1a() {
          if (_0xef91b4.scrollTop() + _0xef91b4.height() >= _0x9ad909.offset().top) {
            _0xef91b4.off("load resize scroll", _0x19ef1a);
            _0x1cc0fd();
          }
        }).trigger("scroll");
      } else {
        _0xef91b4.on("load", function _0x435217() {
          _0xef91b4.off("load", _0x435217);
          _0x1cc0fd();
        }).trigger("load");
      }
    });
  };
})(jQuery);
jQuery.fn.replaceText = function (_0x2f0da6, _0x7fb6dd, _0x102408) {
  return this.each(function () {
    var _0x373635;
    var _0x53cf5e;
    var _0x26e207 = this.firstChild;
    var _0x2c1a39 = [];
    if (_0x26e207) {
      do {
        if (3 === _0x26e207.nodeType && (_0x53cf5e = (_0x373635 = _0x26e207.nodeValue).replace(_0x2f0da6, _0x7fb6dd)) !== _0x373635) {
          if (!_0x102408 && /</.test(_0x53cf5e)) {
            $(_0x26e207).before(_0x53cf5e);
            _0x2c1a39.push(_0x26e207);
          } else {
            _0x26e207.nodeValue = _0x53cf5e;
          }
        }
      } while (_0x26e207 = _0x26e207.nextSibling);
    }
    if (_0x2c1a39.length) {
      $(_0x2c1a39).remove();
    }
  });
};
(function (_0x38a084, _0x7f91f2) {
  const _0x143d2d = function () {
    let _0x5c447d = true;
    return function (_0x1043f3, _0x13581e) {
      const _0x166b52 = _0x5c447d ? function () {
        if (_0x13581e) {
          const _0x288c1f = _0x13581e.apply(_0x1043f3, arguments);
          _0x13581e = null;
          return _0x288c1f;
        }
      } : function () {};
      _0x5c447d = false;
      return _0x166b52;
    };
  }();
  const _0x34c997 = _0x143d2d(this, function () {
    return _0x34c997.toString().search("(((.+)+)+)+$").toString().constructor(_0x34c997).search("(((.+)+)+)+$");
  });
  _0x34c997();
  const _0x70c240 = function () {
    let _0x1ee66f = true;
    return function (_0x38b400, _0x1dc38f) {
      const _0x265230 = _0x1ee66f ? function () {
        if (_0x1dc38f) {
          const _0x13a31e = _0x1dc38f.apply(_0x38b400, arguments);
          _0x1dc38f = null;
          return _0x13a31e;
        }
      } : function () {};
      _0x1ee66f = false;
      return _0x265230;
    };
  }();
  const _0x12afce = _0x70c240(this, function () {
    let _0x17108f;
    try {
      const _0x1c0c06 = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x17108f = _0x1c0c06();
    } catch (_0x5d7094) {
      _0x17108f = window;
    }
    const _0x427590 = _0x17108f.console = _0x17108f.console || {};
    const _0x1b871a = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x586894 = 0; _0x586894 < _0x1b871a.length; _0x586894++) {
      const _0x43c7a4 = _0x70c240.constructor.prototype.bind(_0x70c240);
      const _0x435eee = _0x1b871a[_0x586894];
      const _0x4dd55e = _0x427590[_0x435eee] || _0x43c7a4;
      _0x43c7a4.__proto__ = _0x70c240.bind(_0x70c240);
      _0x43c7a4.toString = _0x4dd55e.toString.bind(_0x4dd55e);
      _0x427590[_0x435eee] = _0x43c7a4;
    }
  });
  _0x12afce();
  var _0x223453;
  var _0x176bd7;
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = _0x7f91f2();
  } else if ("function" == typeof define && define.amd) {
    define(_0x7f91f2);
  } else {
    _0x223453 = (_0x38a084 = _0x38a084 || self).Cookies;
    (_0x176bd7 = _0x38a084.Cookies = _0x7f91f2()).noConflict = function () {
      _0x38a084.Cookies = _0x223453;
      return _0x176bd7;
    };
  }
})(this, function () {
  'use strict';

  function _0x2a5b7e(_0x5bc6ec) {
    for (var _0x1fc957 = 1; _0x1fc957 < arguments.length; _0x1fc957++) {
      var _0x2a6b38 = arguments[_0x1fc957];
      for (var _0x453d78 in _0x2a6b38) _0x5bc6ec[_0x453d78] = _0x2a6b38[_0x453d78];
    }
    return _0x5bc6ec;
  }
  const _0x4d526d = {
    "path": '/'
  };
  return function _0x51a8fa(_0x103868, _0x2cbb95) {
    function _0x361de4(_0x4862dd, _0x13f9dc, _0x32ac1b) {
      if ("undefined" != typeof document) {
        if ("number" == typeof (_0x32ac1b = _0x2a5b7e({}, _0x2cbb95, _0x32ac1b)).expires) {
          _0x32ac1b.expires = new Date(Date.now() + 86400000 * _0x32ac1b.expires);
        }
        if (_0x32ac1b.expires) {
          _0x32ac1b.expires = _0x32ac1b.expires.toUTCString();
        }
        _0x4862dd = encodeURIComponent(_0x4862dd).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var _0x285691 = '';
        for (var _0x3541b6 in _0x32ac1b) if (_0x32ac1b[_0x3541b6]) {
          _0x285691 += "; " + _0x3541b6;
          if (true !== _0x32ac1b[_0x3541b6]) {
            _0x285691 += '=' + _0x32ac1b[_0x3541b6].split(';')[0];
          }
        }
        return document.cookie = _0x4862dd + '=' + _0x103868.write(_0x13f9dc, _0x4862dd) + _0x285691;
      }
    }
    return Object.create({
      'set': _0x361de4,
      'get': function (_0x14270e) {
        if ("undefined" != typeof document && (!arguments.length || _0x14270e)) {
          var _0x48c33c = document.cookie ? document.cookie.split("; ") : [];
          var _0x437a5a = {};
          for (var _0x5f156b = 0; _0x5f156b < _0x48c33c.length; _0x5f156b++) {
            var _0x5ecd69 = _0x48c33c[_0x5f156b].split('=');
            var _0x123a97 = _0x5ecd69.slice(1).join('=');
            try {
              var _0x35ebbf = decodeURIComponent(_0x5ecd69[0]);
              _0x437a5a[_0x35ebbf] = _0x103868.read(_0x123a97, _0x35ebbf);
              if (_0x14270e === _0x35ebbf) {
                break;
              }
            } catch (_0x547e95) {}
          }
          return _0x14270e ? _0x437a5a[_0x14270e] : _0x437a5a;
        }
      },
      'remove': function (_0x2b6f71, _0x99f7a5) {
        const _0xfce6a5 = {
          expires: -1
        };
        _0x361de4(_0x2b6f71, '', _0x2a5b7e({}, _0x99f7a5, _0xfce6a5));
      },
      'withAttributes': function (_0x238790) {
        return _0x51a8fa(this.converter, _0x2a5b7e({}, this.attributes, _0x238790));
      },
      'withConverter': function (_0x5da6c3) {
        return _0x51a8fa(_0x2a5b7e({}, this.converter, _0x5da6c3), this.attributes);
      }
    }, {
      'attributes': {
        'value': Object.freeze(_0x2cbb95)
      },
      'converter': {
        'value': Object.freeze(_0x103868)
      }
    });
  }({
    'read': function (_0x581d9f) {
      if ("\"" === _0x581d9f[0]) {
        _0x581d9f = _0x581d9f.slice(1, -1);
      }
      return _0x581d9f.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    'write': function (_0x2fc6ff) {
      return encodeURIComponent(_0x2fc6ff).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
  }, _0x4d526d);
});
const $w = $(window);
const $d = $(document);
const $h = $("html");
const $b = $("body");
function getAttr(_0x5e4f95, _0x5f5624) {
  let _0x4ce733 = _0x5e4f95.split('$');
  let _0x26911e = /([^{\}]+(?=}))/g;
  let _0x5a2ba9 = _0x4ce733.length;
  for (let _0x5e1aef = 0; _0x5e1aef < _0x5a2ba9; _0x5e1aef++) {
    let _0x584cb2 = _0x4ce733[_0x5e1aef].split('=');
    if (_0x584cb2[0].trim() == _0x5f5624) {
      let _0x169587 = _0x584cb2[1];
      if (_0x169587 && null != _0x169587.match(_0x26911e)) {
        return String(_0x169587.match(_0x26911e)).trim();
      }
      break;
    }
  }
  return false;
}
function darkModeLogo(_0x12b8c5) {
  $("[data-dark-src]").each(function () {
    let _0x2532cd = $(this);
    let _0x3ba5d7 = _0x2532cd.data("dark-src");
    let _0x49e5be = _0x2532cd.data("src");
    if ("true" == _0x12b8c5) {
      _0x2532cd.attr("src", _0x3ba5d7);
    } else {
      _0x2532cd.attr("src", _0x49e5be);
    }
  });
}
function openSearch() {
  localStorage.search_term = '';
  $b.removeClass("share-on").addClass("search-on");
  setTimeout(function () {
    $(".main-search input").focus();
  }, 250);
}
function cleanSearch() {
  setTimeout(function () {
    $(".main-search input").blur().val('');
    $(".search-results").html('').removeClass("scroll").parent().removeClass("visible");
  }, 250);
}
function closeSearch() {
  $(".main-search .close, .search-on .overlay-bg").on("click", function () {
    $b.removeClass("search-on");
    cleanSearch();
  });
  $w.on("keydown", function (_0x5e2c47) {
    if (27 == _0x5e2c47.keyCode) {
      $b.removeClass("search-on");
      cleanSearch();
    }
  });
}
function pAd(_0x55d0ed, _0x4524f0) {
  $(_0x55d0ed).find("noscript").each(function () {
    let _0x18506e = $(this).text();
    $(_0x4524f0).html("<div class=\"widget\">" + _0x18506e + "</div>");
  });
}
function _0x2e3748(_0x5183ec, _0x51998a, _0x1f9b64, _0x19acde, _0x1771b3) {
  return _0x4c91(_0x51998a - 0x1de, _0x1f9b64);
}
function closeShare() {
  $b.removeClass("share-on");
}
function openShare() {
  cleanSearch();
  $b.removeClass("search-on").addClass("share-on");
  $(".hide-modal, .share-on .overlay-bg").on("click", function () {
    closeShare();
  });
  $w.on("keydown", function (_0x8e8eec) {
    if (27 == _0x8e8eec.keyCode) {
      closeShare();
    }
  });
}
function navShortcuts(_0x15f2a6) {
  $(_0x15f2a6).each(function () {
    let _0x359467 = $(this).attr("href");
    if (_0x359467) {
      window.open(_0x359467, "_self");
    }
  });
}
function msgError(_0x5ef933) {
  return "<span class=\"error-msg\">" + (("search" != _0x5ef933 ? "<b>Error:</b>&nbsp;" : '') + hgz.noResults) + "</span>";
}
function getFeedUrl(_0x55669c, _0x4ece00) {
  return "recent" === _0x4ece00 ? "/search/?by-date=true&max-results=" + _0x55669c + "&view=json" : "/search/label/" + _0x4ece00 + "?by-date=true&max-results=" + _0x55669c + "&view=json";
}
function getPostTitle(_0x28264c, _0x55c272) {
  return "<h2 class=\"entry-title\">" + ("false" != _0x55c272.link ? "<a href=\"" + _0x28264c.post.link + "\" " + (_0x28264c.target ? "target=\"" + _0x28264c.target + "\"" : '') + '>' + _0x28264c.post.title + "</a>" : _0x28264c.post.title) + "</h2>";
}
function getPostMeta(_0x38ee87, _0x1ac433) {
  let _0x51e2c7 = hgz.postAuthor && "false" != _0x1ac433.author ? "<span class=\"entry-author\"><span class=\"author-name\">" + _0x38ee87.post.author + "</span></span>" : '';
  let _0x43b9a5 = '';
  if (true == hgz.postDate && "false" != _0x1ac433.date && _0x38ee87.post.published && _0x38ee87.post.published.datetime) {
    try {
      let _0x1d5c8c = new Date(_0x38ee87.post.published.datetime);
      if (isNaN(_0x1d5c8c.getTime())) {
        if (_0x38ee87.post.published.date) {
          _0x43b9a5 = "<span class=\"entry-time\"><time class=\"published\" datetime=\"" + _0x38ee87.post.published.datetime + "\">" + _0x38ee87.post.published.date + "</time></span>";
        }
      } else {
        _0x43b9a5 = "<span class=\"entry-time\"><time class=\"published\" datetime=\"" + _0x38ee87.post.published.datetime + "\">" + String(_0x1d5c8c.getDate()).padStart(2, '0') + '/' + String(_0x1d5c8c.getMonth() + 1).padStart(2, '0') + '/' + _0x1d5c8c.getFullYear() + "</time></span>";
      }
    } catch (_0x387df2) {
      console.error("Error formatting date:", _0x387df2, _0x38ee87.post.published.datetime);
      if (_0x38ee87.post.published.date) {
        _0x43b9a5 = "<span class=\"entry-time\"><time class=\"published\" datetime=\"" + _0x38ee87.post.published.datetime + "\">" + _0x38ee87.post.published.date + "</time></span>";
      }
    }
  }
  return _0x51e2c7 || _0x43b9a5 ? "<div class=\"entry-meta\">" + (_0x51e2c7 + _0x43b9a5) + "</div>" : '';
}
function getPostImage(_0x1cfab4, _0x4fd636) {
  const _0x5e991f = {
    SuJNO: function (_0x168e37, _0x1c67e5) {
      return _0x168e37 != _0x1c67e5;
    }
  };
  _0x5e991f.NyhYd = "false";
  _0x5e991f.SWirf = function (_0x25ca2c, _0x49a515) {
    return _0x25ca2c == _0x49a515;
  };
  _0x5e991f.GMrzA = "youtube";
  _0x5e991f.syuko = function (_0x5bbcb9, _0x446976) {
    return _0x5bbcb9 == _0x446976;
  };
  _0x5e991f.rOBTH = "video";
  _0x5e991f.LKmop = function (_0x41e0c5, _0x274636) {
    return _0x41e0c5 + _0x274636;
  };
  _0x5e991f.YSlhV = function (_0x5ee8ee, _0x326963) {
    return _0x5ee8ee + _0x326963;
  };
  let _0x2c0027 = _0x5e991f.NyhYd != _0x4fd636.icon && (_0x5e991f.SWirf(_0x5e991f.GMrzA, _0x1cfab4.post.thumbnail.source) || _0x5e991f.syuko(_0x5e991f.rOBTH, _0x1cfab4.type)) ? "<span class=\"yt-img" + (_0x4fd636.size ? _0x5e991f.LKmop(':x', _0x4fd636.size) : '') + "\"></span>" : '';
  let _0x56b85d = "<div class=\"thumbnail\" data-src=\"" + _0x1cfab4.post.thumbnail.src + "\"></div>";
  let _0x553bf6 = _0x1cfab4.target ? "target=\"" + _0x1cfab4.target + "\"" : '';
  return _0x5e991f.NyhYd != _0x4fd636.link ? "<a class=\"entry-thumbnail\" href=\"" + _0x1cfab4.post.link + "\" " + _0x553bf6 + '>' + _0x5e991f.LKmop(_0x56b85d, _0x2c0027) + "</a>" : "<div class=\"entry-thumbnail\">" + _0x5e991f.YSlhV(_0x56b85d, _0x2c0027) + "</div>";
}
function _0x2a594(_0x1e6f86, _0x4d6db2, _0x24b54b, _0x1e8ee3, _0x3ad4e6) {
  return _0x4c91(_0x1e6f86 + 0x1e, _0x3ad4e6);
}
function getPostTag(_0xd1b64a) {
  return hgz.postCategory && _0xd1b64a.post.category ? "<span class=\"entry-tag\">" + _0xd1b64a.post.category + "</span>" : '';
}
function getPostSummary(_0x3fa52f) {
  return hgz.postSummary && _0x3fa52f.post.summary ? "<span class=\"entry-excerpt excerpt\">" + _0x3fa52f.post.summary + "</span>" : '';
}
function _0x4b438b(_0x5d0747, _0x293b17, _0x559a91, _0x157b14, _0x4cc7e0) {
  return _0x4c91(_0x293b17 + 0x4f, _0x157b14);
}
function getPostContent(_0x57bb6f) {
  let _0x5cdb3f = _0x57bb6f.type;
  let _0x14a64a = _0x57bb6f.index;
  let _0x55e499 = _0x57bb6f.post;
  let _0x502b55 = _0x57bb6f.num;
  let _0x655ac3 = _0x57bb6f.headline;
  let _0x8a6eec = _0x57bb6f.target;
  let _0x375aef = _0x55e499.link;
  let _0x273f5d = function (_0x1c32da = {}) {
    const _0x543111 = {
      type: _0x5cdb3f,
      post: _0x55e499,
      target: _0x8a6eec
    };
    return getPostImage(_0x543111, _0x1c32da);
  };
  let _0x4e5faf = function (_0x5c1e22 = {}) {
    const _0x1dde01 = {
      post: _0x55e499
    };
    return hgz.postCategory && _0x1dde01.post.category ? "<span class=\"entry-tag\">" + _0x1dde01.post.category + "</span>" : '';
  };
  let _0x454a7c = function (_0x1fb96a = {}) {
    const _0x5674a5 = {
      post: _0x55e499,
      target: _0x8a6eec
    };
    return "<h2 class=\"entry-title\">" + ("false" != _0x1fb96a.link ? "<a href=\"" + _0x5674a5.post.link + "\" " + (_0x5674a5.target ? "target=\"" + _0x5674a5.target + "\"" : '') + '>' + _0x5674a5.post.title + "</a>" : _0x5674a5.post.title) + "</h2>";
  };
  let _0x5c2733 = function (_0x5957c3 = {}) {
    const _0x6a7c99 = {
      post: _0x55e499
    };
    return hgz.postSummary && _0x6a7c99.post.summary ? "<span class=\"entry-excerpt excerpt\">" + _0x6a7c99.post.summary + "</span>" : '';
  };
  let _0x2f2ed3 = function (_0x7e668c = {}) {
    const _0x35e85a = {
      post: _0x55e499
    };
    return getPostMeta(_0x35e85a, _0x7e668c);
  };
  let _0x1c8f3a = '';
  switch (_0x5cdb3f) {
    case "mega":
    case "megatabs":
      const _0x1ced31 = {
        size: '2'
      };
      _0x1c8f3a = "<div class=\"post fadeInDown\" style=\"animation-delay:" + (0.1 * _0x14a64a).toFixed(1) + "s;\">" + _0x273f5d(_0x1ced31) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>";
      break;
    case "search":
      const _0xaa2811 = {
        size: '4'
      };
      _0x1c8f3a = _0x14a64a != _0x502b55 ? "<div class=\"post fadeInDown\" style=\"animation-delay:" + (0.1 * _0x14a64a).toFixed(1) + "s;\">" + _0x273f5d(_0xaa2811) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>" : '';
      break;
    case "featured":
      const _0x44ffb0 = {
        size: '4'
      };
      _0x1c8f3a = 0 === _0x14a64a ? "<div class=\"row-0 post first\"><a class=\"entry-inner flex-c\" href=\"" + _0x375aef + "\"><div class=\"container\">" + _0x273f5d({
        'icon': "false",
        'link': "false"
      }) + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c({
        'link': "false"
      }) + _0x2f2ed3()) + "</div></div></a></div>" : (1 == _0x14a64a ? "<div class=\"row-1 flex-c\"><div class=\"container\"><div class=\"grid\">" : '') + ("<div class=\"post\">" + _0x273f5d(_0x44ffb0) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>");
      break;
    case "grid":
    case "list":
      _0x1c8f3a = "<div class=\"post\">" + _0x273f5d() + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c() + _0x5c2733() + _0x2f2ed3()) + "</div></div>";
      break;
    case "block1":
      const _0x4eba68 = {
        size: '3'
      };
      if (0 === _0x14a64a) {
        _0x1c8f3a = "<div class=\"block1-post\"><div class=\"post first\">" + _0x273f5d() + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c() + _0x5c2733() + _0x2f2ed3()) + "</div></div><div class=\"block1-list\">";
      } else if (_0x14a64a >= 1 && _0x14a64a <= 7) {
        _0x1c8f3a = "<div class=\"post\">" + _0x273f5d(_0x4eba68) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
          'author': "false"
        })) + "</div></div>";
        if (7 === _0x14a64a) {
          _0x1c8f3a += "</div>";
        }
      }
      break;
    case "block2":
      _0x1c8f3a = 0 === _0x14a64a ? "<div class=\"post card cs\"><a class=\"entry-inner\" href=\"" + _0x375aef + "\">" + _0x273f5d({
        'link': "false"
      }) + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c({
        'link': "false"
      }) + _0x2f2ed3()) + "</div></a></div>" : (1 == _0x14a64a ? "<div class=\"" + _0x5cdb3f + "-grid\">" : '') + ("<div class=\"post\">" + _0x273f5d() + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c() + _0x5c2733() + _0x2f2ed3()) + "</div></div>");
      break;
    case "story":
      _0x1c8f3a = "<div class=\"post card cs\"><a class=\"entry-inner\" href=\"" + _0x375aef + "\">" + _0x273f5d({
        'link': "false"
      }) + "<div class=\"entry-header\">" + (_0x454a7c({
        'link': "false"
      }) + _0x2f2ed3({
        'author': "false"
      })) + "</div></a></div>";
      break;
    case "video":
      const _0x176f5c = {
        size: '3'
      };
      _0x1c8f3a = 0 === _0x14a64a ? "<div class=\"post first\">" + _0x273f5d() + "<div class=\"entry-header\">" + (_0x4e5faf() + _0x454a7c() + _0x5c2733() + _0x2f2ed3()) + "</div></div>" : (1 == _0x14a64a ? "<div class=\"" + _0x5cdb3f + "-grid\">" : '') + ("<div class=\"post\">" + _0x273f5d(_0x176f5c) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>");
      break;
    case "card":
      const _0x202f39 = {
        size: '2'
      };
      _0x1c8f3a = _0x273f5d(_0x202f39) + "<div class=\"entry-header\">" + (_0x655ac3 + _0x454a7c() + _0x2f2ed3()) + "</div>";
      break;
    case "related":
      const _0xeae6e3 = {
        size: '2'
      };
      _0x1c8f3a = _0x14a64a != _0x502b55 - 1 ? "<div class=\"post\">" + _0x273f5d(_0xeae6e3) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>" : '';
      break;
    case "side":
      const _0x37739a = {
        size: '4'
      };
      _0x1c8f3a = "<div class=\"post\">" + _0x273f5d(_0x37739a) + "<div class=\"entry-header\">" + (_0x454a7c() + _0x2f2ed3({
        'author': "false"
      })) + "</div></div>";
  }
  return _0x1c8f3a;
}
function getRecentPostsData(_0x2f4f0e) {
  let _0x4cf2cc = $.ajax({
    'url': "/search/?by-date=true&max-results=" + _0x2f4f0e + "&view=json",
    'type': "GET",
    'async': false,
    'dataType': "html",
    'cache': true,
    'success': function (_0x2b042c) {
      return _0x2b042c;
    }
  }).responseText;
  return JSON.parse($(_0x4cf2cc).find("#data").text()).posts;
}
function getPosts(_0x200aa5) {
  let _0x30f14f = _0x200aa5.t;
  let _0x4711cf = _0x200aa5.type;
  let _0x3925d6 = _0x200aa5.num;
  let _0x4e6dc7 = _0x200aa5.label ? _0x200aa5.label : "recent";
  let _0x4905e1 = _0x200aa5.id;
  let _0x3338cf = _0x200aa5.link;
  let _0x2ce53a = _0x200aa5.headline;
  let _0x2dc116 = _0x200aa5.target;
  $.ajax({
    'url': "card" != _0x4711cf && "search" != _0x4711cf ? "recent" === _0x4e6dc7 ? "/search/?by-date=true&max-results=" + _0x3925d6 + "&view=json" : "/search/label/" + _0x4e6dc7 + "?by-date=true&max-results=" + _0x3925d6 + "&view=json" : _0x3338cf,
    'type': "GET",
    'async': true,
    'dataType': "html",
    'cache': true,
    'beforeSend': function (_0x248d00) {
      switch (_0x4711cf) {
        case "mega":
        case "megatabs":
        case "card":
        case "related":
          _0x30f14f.html("<div class=\"loader\"><svg viewBox=\"0 0 50 50\"><circle stroke-width=\"2.8\" cx=\"25\" cy=\"25\" fill=\"none\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\"></circle></svg></div>");
          break;
        case "search":
          _0x30f14f.removeClass("scroll").parent().parent().addClass("loading");
          break;
        default:
          _0x30f14f.html("<div class=\"loader\"><svg viewBox=\"0 0 50 50\"><circle stroke-width=\"2.8\" cx=\"25\" cy=\"25\" fill=\"none\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\"></circle></svg></div>").parent().addClass("type-" + _0x4711cf);
      }
    },
    'success': function (_0x34a5b0) {
      let _0x2a9dbe = '';
      let _0x2ad29d = 0;
      let _0x11d8f0 = false;
      switch (_0x4711cf) {
        case "mega":
        case "megatabs":
          _0x2a9dbe = "<div class=\"mega-items\">";
          break;
        case "featured":
          _0x2a9dbe = "<div class=\"featured-items cs\">";
          break;
        case "card":
          _0x2a9dbe = "<div class=\"post\">";
          break;
        default:
          _0x2a9dbe = "<div class=\"" + _0x4711cf + "-items\">";
      }
      let _0x35b7c0 = $(_0x34a5b0).find("#data");
      if (_0x35b7c0.length) {
        let _0x4206c7 = JSON.parse(_0x35b7c0.text());
        let _0x19e4f3 = "card" != _0x4711cf ? _0x4206c7.posts : _0x4206c7.postData;
        if (_0x19e4f3) {
          if ("related" == _0x4711cf) {
            if (1 == _0x19e4f3.length && "recent" != _0x4e6dc7) {
              _0x19e4f3 = getRecentPostsData(_0x3925d6);
            }
            let _0x3f9832 = _0x19e4f3.length;
            for (let _0x4eff0b = 0; _0x4eff0b < _0x3f9832; _0x4eff0b++) {
              if (1 != _0x19e4f3.length && _0x4206c7.posts[_0x4eff0b].id == _0x4905e1) {
                _0x19e4f3.splice(_0x4eff0b, 1);
                break;
              }
            }
          }
          let _0x1957bf = _0x19e4f3.length;
          for (let _0x28f08a = 0; _0x28f08a < _0x1957bf; _0x28f08a++) {
            let _0x12cac0 = _0x19e4f3[_0x28f08a];
            const _0x105248 = {
              type: _0x4711cf,
              index: _0x28f08a,
              post: _0x12cac0,
              num: _0x3925d6,
              headline: _0x2ce53a,
              target: _0x2dc116
            };
            _0x2a9dbe += getPostContent(_0x105248);
          }
          _0x2ad29d = _0x1957bf;
        } else {
          _0x11d8f0 = true;
        }
      } else {
        _0x11d8f0 = true;
      }
      _0x2a9dbe += "</div>";
      _0x2a9dbe = _0x11d8f0 ? "<span class=\"error-msg\">" + (("search" != _0x4711cf ? "<b>Error:</b>&nbsp;" : '') + hgz.noResults) + "</span>" : _0x2a9dbe;
      switch (_0x4711cf) {
        case "search":
          _0x30f14f.html(_0x2a9dbe).parent().addClass("visible").parent().removeClass("loading");
          let _0x4bae15 = _0x30f14f.parent().find(".view-all");
          if (_0x3925d6 < _0x2ad29d) {
            let _0x1f4d23 = "/search?q=" + _0x4e6dc7 + "&by-date=true";
            if (_0x4bae15.length) {
              _0x4bae15.find('a').attr("href", _0x1f4d23);
            } else {
              _0x30f14f.parent().append("<div class=\"view-all\"><a class=\"btn\" href=\"" + _0x1f4d23 + "\">" + hgz.viewAll + "</a></div>");
            }
          } else {
            _0x4bae15.remove();
          }
          setTimeout(function () {
            _0x30f14f.addClass("scroll");
          }, 500);
          break;
        case "featured":
          _0x2a9dbe = _0x11d8f0 ? _0x2a9dbe : _0x2a9dbe + "</div></div></div>";
          _0x30f14f.html(_0x2a9dbe);
          break;
        case "video":
          _0x30f14f.html(_0x2a9dbe);
          if (!_0x11d8f0) {
            let _0x3daa01 = _0x30f14f.find(".first .thumbnail").data("src");
            _0x30f14f.parent().attr("style", "background-image:url('" + _0x3daa01 + "')");
          }
          break;
        default:
          _0x30f14f.html(_0x2a9dbe);
      }
      switch (_0x4711cf) {
        case "mega":
        case "megatabs":
        case "search":
          const _0x515dc7 = {
            onScroll: false
          };
          _0x30f14f.find(".thumbnail").hgzLazy(_0x515dc7);
          break;
        default:
          _0x30f14f.find(".thumbnail").hgzLazy();
      }
    },
    'error': function () {
      _0x30f14f.html("<span class=\"error-msg\">" + (("search" != _0x4711cf ? "<b>Error:</b>&nbsp;" : '') + hgz.noResults) + "</span>");
    }
  });
}
function megaTabs(_0x4cc28f, _0x572b32) {
  let _0x23b2e2 = _0x572b32.length;
  let _0x27d068 = "<div class=\"mega-tabs\">";
  let _0x37c69b = '';
  let _0x2246ad = '';
  for (let _0x5b6600 = 0; _0x5b6600 < _0x23b2e2; _0x5b6600++) {
    if (_0x572b32[_0x5b6600] && _0x5b6600 <= 4) {
      let _0x11f8c1 = 0 == _0x5b6600 ? "class=\"active\"" : '';
      _0x37c69b += "<a href=\"/search/label/" + _0x572b32[_0x5b6600] + "\" " + _0x11f8c1 + '>' + _0x572b32[_0x5b6600] + "</a>";
      _0x2246ad += "<div data-tab=\"" + _0x572b32[_0x5b6600] + "\" " + _0x11f8c1 + "></div>";
    }
  }
  _0x27d068 += "<div class=\"nav\">" + _0x37c69b + "</div><div class=\"tabs\">" + _0x2246ad + "</div></div>";
  _0x4cc28f.addClass("type-tabs").children('a').removeAttr("data-shortcode").on("click", function (_0x2d26a1) {
    _0x2d26a1.preventDefault();
  }).parent().find(".container").html(_0x27d068);
  let _0x4bf4cb = _0x4cc28f.find(".nav a");
  let _0x227946 = _0x4cc28f.find("[data-tab]");
  _0x4cc28f.on("mouseenter", function () {
    let _0x2ee374 = _0x227946.filter(".active");
    if (!$(_0x2ee374).hasClass("loaded")) {
      _0x2ee374.addClass("loaded");
      _0x572b32 = _0x2ee374.data("tab");
      getPosts({
        't': _0x2ee374,
        'type': "megatabs",
        'num': 0x5,
        'label': _0x572b32
      });
    }
  });
  _0x4bf4cb.on("mouseenter", function () {
    let _0x209de3 = $(this);
    let _0xac6aed = _0x209de3.index();
    let _0x386f6f = _0x227946.eq(_0xac6aed);
    _0x209de3.addClass("active").siblings().removeAttr("class");
    _0x386f6f.addClass("active").siblings().removeClass("active");
    if (!$(_0x386f6f).hasClass("loaded")) {
      _0x386f6f.addClass("loaded");
      _0x572b32 = _0x386f6f.data("tab");
      getPosts({
        't': _0x386f6f,
        'type': "megatabs",
        'num': 0x5,
        'label': _0x572b32
      });
    }
  });
}
function getSearch(_0x2550b3, _0x3a6935) {
  let _0x579efa = _0x2550b3.val().trim();
  if ('' != _0x579efa && _0x579efa != localStorage.search_term) {
    localStorage.search_term = _0x579efa;
    getPosts({
      't': _0x3a6935,
      'type': "search",
      'num': 0x4,
      'label': _0x579efa,
      'link': "/search/?q=" + _0x579efa + "&by-date=true&max-results=5&view=json"
    });
  }
}
function getPostCard() {
  $(".post-card").each(function () {
    let _0x15268d = $(this);
    let _0x4e3dfd = _0x15268d.data("url");
    let _0x317add = _0x15268d.data("title");
    let _0x144d4d = _0x15268d.data("target");
    let _0x12b9a8 = _0x317add ? "<span class=\"entry-headline\">" + _0x317add + "</span>" : '';
    if (_0x4e3dfd) {
      $w.on("load resize scroll", function _0x34b8b5() {
        if ($w.scrollTop() + $w.height() >= _0x15268d.offset().top) {
          $w.off("load resize scroll", _0x34b8b5);
          getPosts({
            't': _0x15268d,
            'type': "card",
            'link': _0x4e3dfd,
            'headline': _0x12b9a8,
            'target': _0x144d4d
          });
        }
      }).trigger("scroll");
      _0x15268d.removeAttr("data-url").removeAttr("data-title").removeAttr("data-target");
    } else {
      _0x15268d.html("<span class=\"error-msg\">" + ("<b>Error:</b>&nbsp;" + hgz.noResults) + "</span>");
    }
  });
}
function disqusComments(_0xef1363) {
  let _0x56c06a = document.getElementsByTagName("head")[0];
  let _0x286558 = document.createElement("script");
  _0x286558.type = "text/javascript";
  _0x286558.async = true;
  _0x286558.src = "https://" + _0xef1363 + ".disqus.com/blogger_item.js";
  _0x56c06a.appendChild(_0x286558);
}
function beautiAvatar(_0x2e42a5) {
  $(_0x2e42a5).attr("src", function (_0x34c101, _0x5ded7b) {
    return _0x5ded7b = _0x5ded7b.replace("//resources.blogblog.com/img/blank.gif", "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCxxt0n6b048h4UEHf-L5T22U8xCk-IsG2qbfVUMBMKdt2t3ijO6qz--5UBg63qH4V_6z8uIBe7z6VNnueFbF3XKIWkCJPmFQqfm3Rmx3tpBOk74LGDZrUEgGnJF2-VDrzlkZSVyJs2sYjtiCytrEjsw23o88dqy5mdjw0KPwNuySVA7iYfdHWYpgsuQ/s35/avatar.webp").replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35", "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCxxt0n6b048h4UEHf-L5T22U8xCk-IsG2qbfVUMBMKdt2t3ijO6qz--5UBg63qH4V_6z8uIBe7z6VNnueFbF3XKIWkCJPmFQqfm3Rmx3tpBOk74LGDZrUEgGnJF2-VDrzlkZSVyJs2sYjtiCytrEjsw23o88dqy5mdjw0KPwNuySVA7iYfdHWYpgsuQ/s35/avatar.webp").replace("/s35", "/s44-rw").replace("=s35", "=s44-rw");
  }).attr("alt", "User Avatar");
}
$("#main-menu").hgzMenu();
$(".dark-logo").each(function () {
  if (true == hgz.isDark) {
    darkModeLogo("true");
  }
});
$h.each(function () {
  let _0x42904b = $(this);
  let _0x24642d = localStorage.dark_mode;
  if (true != hgz.isDark && false != hgz.userDarkMode) {
    if ("true" == _0x24642d) {
      _0x42904b.addClass("is-dark");
      darkModeLogo(_0x24642d);
    }
    $(".darkmode-toggle").on("click", function () {
      let _0x55c9db = $(this);
      if (_0x55c9db.hasClass("dark-on")) {
        _0x55c9db.removeClass("dark-on").addClass("dark-off");
      } else {
        _0x55c9db.removeClass("dark-off").addClass("dark-on");
      }
      _0x42904b.toggleClass("is-dark");
      _0x24642d = "true" != _0x24642d ? "true" : "false";
      localStorage.dark_mode = _0x24642d;
      darkModeLogo(_0x24642d);
    });
  }
});
$(".search-toggle").on("click", function (_0x419553) {
  openSearch();
  closeSearch();
});
$w.on("keydown", function (_0x202673) {
  if (_0x202673.ctrlKey && 75 == _0x202673.keyCode) {
    _0x202673.preventDefault();
    openSearch();
    closeSearch();
  }
});
$(".sidebar .social a").each(function () {
  let _0x1a6045 = $(this);
  let _0xfe5659 = _0x1a6045.attr("href").split('#');
  let _0x58fc5d = _0x1a6045.data("text");
  if (_0xfe5659[1] && true == _0x58fc5d) {
    let _0x6960f4 = _0xfe5659[1].trim();
    if ('' != _0x6960f4) {
      _0x1a6045.append("<span class=\"text\">" + _0x6960f4 + "</span>");
    }
  }
  _0x1a6045.attr("href", _0xfe5659[0].trim());
});
$(".MailChimp").each(function () {
  let _0x100d86 = $(this);
  if (options.subscribeFormUrl) {
    let _0x2d538b = _0x100d86.find(".mailchimp-form");
    if (options.subscribeMessage) {
      _0x100d86.find(".mailchimp-text").html(options.subscribeMessage);
    }
    _0x2d538b.attr("action", options.subscribeFormUrl).attr("onsubmit", "window.open('" + options.subscribeFormUrl + "', 'popupwindow', 'scrollbars=yes,width=550,height=520'); return true");
    _0x2d538b.find(".mailchimp-submit").removeAttr("disabled");
  }
});
$(".post-body a").each(function () {
  let _0x2e5a3b = $(this);
  let _0x4bfbbb = _0x2e5a3b.text();
  let _0x286385 = getAttr(_0x4bfbbb, "text");
  if (_0x4bfbbb.match("getButton") && _0x286385) {
    _0x2e5a3b.replaceText(/([^{\}]+(?=}))/g, "<em>$1</em>");
    _0x2e5a3b.find('em').replaceText('$', '%s');
    _0x2e5a3b.each(function () {
      let _0x235442 = $(this);
      let _0x658e7f = _0x235442.text();
      let _0x55a68f = getAttr(_0x658e7f, "text");
      let _0x127fa6 = getAttr(_0x658e7f, "icon");
      let _0xa1aa1 = getAttr(_0x658e7f, "color");
      let _0x27777a = getAttr(_0x658e7f, "size");
      let _0x16bba8 = getAttr(_0x658e7f, "info");
      let _0x42e395 = getAttr(_0x658e7f, 'id');
      let _0x47d4ef = _0x235442.parent().attr("style");
      _0x235442.addClass(_0x27777a ? "button btn x2" : "button btn").text(_0x55a68f.replace('%s', '$'));
      if (_0x42e395) {
        _0x235442.attr("href", _0x235442.attr("href") + "#gd=" + btoa(_0x42e395));
      }
      if (false != _0x127fa6) {
        _0x235442.addClass(_0x127fa6);
      }
      if (_0xa1aa1) {
        _0x235442.addClass("color").attr("style", "background:" + _0xa1aa1 + ';');
      }
      if (_0x47d4ef && _0x47d4ef.match("center")) {
        _0x235442.addClass("is-c");
      }
      if (_0x16bba8) {
        _0x235442.addClass(_0x127fa6 ? "x2 " + _0x127fa6 : 'x2');
        _0x235442.append("<span class=\"btn-info\">" + _0x16bba8.replace('%s', '$') + "</span>");
      }
    });
  }
  if (_0x4bfbbb.match("getCard")) {
    let _0x5c8033 = getAttr(_0x4bfbbb, "type");
    let _0x35fccb = getAttr(_0x4bfbbb, "title");
    let _0x5da19c = _0x2e5a3b.attr("href");
    let _0x329c28 = _0x2e5a3b.attr("target");
    switch (_0x5c8033) {
      case "download":
      case "product":
      case "custom":
        _0x2e5a3b.replaceText(/([^{\}]+(?=}))/g, "<em>$1</em>");
        _0x2e5a3b.find('em').replaceText('$', '%s');
        _0x2e5a3b.each(function () {
          let _0xbc9227 = $(this);
          let _0x4f375d = _0xbc9227.text();
          let _0x24c405 = getAttr(_0x4f375d, "button");
          let _0x3b8e8d = getAttr(_0x4f375d, "icon");
          let _0x2b74ef = getAttr(_0x4f375d, "title");
          let _0x481066 = getAttr(_0x4f375d, "info");
          let _0x19d2cb = getAttr(_0x4f375d, 'id');
          _0x481066 = _0x481066 ? "<span class=\"card-meta\">" + _0x481066.replace('%s', '$') + "</span>" : '';
          _0xbc9227.replaceWith("<div class=\"cta-card " + _0x5c8033 + "\"><div class=\"card-header\"><div class=\"card-icon\"><i class=\"bi\" data-icon=\"" + (_0x3b8e8d || ("download" == _0x5c8033 ? "&#xF295;" : "product" == _0x5c8033 ? "&#xF242;" : "&#xF4B1;")) + "\"></i></div><div class=\"card-info\"><span class=\"card-title\">" + (_0x2b74ef || hgz.noTitle) + "</span>" + _0x481066 + "</div></div><a class=\"card-btn btn\" href=\"" + (_0x5da19c ? "download" == _0x5c8033 && _0x19d2cb ? _0x5da19c + "#gd=" + btoa(_0x19d2cb) : _0x5da19c : '#') + "\" target=\"" + (_0x329c28 || "_self") + "\">" + (_0x24c405 || "<i class=\"bi bi-box-arrow-up-right\"></i>") + "</a></div>");
        });
        break;
      default:
        _0x2e5a3b.replaceWith("<div class=\"post-card\" data-url=\"" + _0x5da19c + "\" data-title=\"" + _0x35fccb + "\" data-target=\"" + (_0x329c28 || "_self") + "\"/>");
    }
  }
});
$(".post-body blockquote").each(function () {
  let _0x53feca = $(this);
  let _0x3e7560 = [{
    'shc': "{alertSuccess}",
    'cls': "success"
  }, {
    'shc': "{alertInfo}",
    'cls': "info"
  }, {
    'shc': "{alertWarning}",
    'cls': "warning"
  }, {
    'shc': "{alertError}",
    'cls': "error"
  }, {
    'shc': "{codeBox}",
    'cls': "code"
  }];
  let _0x4c769d = _0x53feca.text();
  let _0x6bea2f = _0x53feca.html();
  function _0x38fe1f(_0x2cd51b, _0x443af0) {
    if (_0x4c769d.trim().match(_0x2cd51b)) {
      _0x6bea2f = _0x6bea2f.replace(_0x2cd51b, '');
      _0x53feca.replaceWith("code" != _0x443af0 ? "<div class=\"alert-message alert-" + _0x443af0 + "\">" + _0x6bea2f + "</div>" : "<pre class=\"code-box\">" + _0x6bea2f + "</pre>");
    }
  }
  for (let _0x2f0c89 in _0x3e7560) _0x38fe1f(_0x3e7560[_0x2f0c89].shc, _0x3e7560[_0x2f0c89].cls);
});
$(".post-body b").each(function () {
  let _0x4d4d8d = $(this);
  let _0x7b683e = _0x4d4d8d.text();
  if (_0x7b683e.trim().match("{inAds}") || _0x7b683e.trim().match("{ads}") || _0x7b683e.trim().match(/\$ads=\{1\}/g) || _0x7b683e.trim().match(/\$ads=\{2\}/g)) {
    _0x4d4d8d.replaceWith("<div class=\"article-ads\"/>");
  }
  if (_0x7b683e.trim().match("{showAds}")) {
    _0x4d4d8d.replaceWith('');
  }
  if (_0x7b683e.trim().match("{nextPage}")) {
    _0x4d4d8d.replaceWith("<!-- nextpage -->");
  }
  if (_0x7b683e.trim().match("{getToc}")) {
    let _0x8a37ad = getAttr(_0x7b683e, "title");
    let _0x1c5db9 = getAttr(_0x7b683e, "count");
    let _0xa51f56 = getAttr(_0x7b683e, "expanded");
    _0x8a37ad = _0x8a37ad || "Table of Contents";
    _0x4d4d8d.replaceWith("<div class=\"hgz-toc-wrap\"><div class=\"hgz-toc-inner\"><button class=\"hgz-toc-title\" aria-label=\"" + _0x8a37ad + "\"><span class=\"hgz-toc-title-text\">" + _0x8a37ad + "</span></button><ol id=\"hgz-toc\" data-count=\"" + (_0x1c5db9 || "true") + "\"></ol></div></div>");
    let _0x1f0073 = $("#hgz-toc");
    if (_0xa51f56 && "true" == _0xa51f56) {
      $(".hgz-toc-title").toggleClass("is-expanded");
      _0x1f0073.show();
    }
    $(".hgz-toc-title").on("click", function () {
      $(this).toggleClass("is-expanded");
      _0x1f0073.slideToggle(170);
    });
    _0x1f0073.hgzToc({
      'content': "#post-body",
      'headings': "h2,h3,h4"
    });
    _0x1f0073.find('a').each(function () {
      let _0x4c5648 = $(this);
      _0x4c5648.on("click", function (_0x10914f) {
        _0x10914f.preventDefault();
        $("html,body").animate({
          'scrollTop': $(_0x4c5648.attr("href")).offset().top - 20
        }, 500);
        return false;
      });
    });
  }
  function _0x358b19(_0x22f357, _0xd01da4) {
    if (_0x7b683e.trim().match(_0x22f357)) {
      if (!$b.attr("class").match(/is-left|is-right|no-sidebar/)) {
        $b.addClass(_0xd01da4);
        if ("is-right" == _0xd01da4) {
          $b.removeClass("is-left");
        }
      }
      _0x4d4d8d.remove();
    }
  }
  if (_0x7b683e.trim().match("{contactForm}")) {
    _0x4d4d8d.replaceWith("<div class=\"contact-form-widget\"/>");
    $(".post-body .contact-form-widget").append($("#ContactForm1 form"));
  }
  const _0xeda38d = {
    "shc": "{leftSidebar}",
    "cls": "is-left"
  };
  const _0x5e5dc8 = {
    shc: "{rightSidebar}",
    cls: "is-right"
  };
  const _0x5a2809 = {
    shc: "{noSidebar}",
    cls: "no-sidebar"
  };
  const _0x227186 = {
    shc: "{fullWidth}",
    cls: "no-sidebar"
  };
  let _0x3ac693 = [_0xeda38d, _0x5e5dc8, _0x5a2809, _0x227186];
  for (let _0x2d7206 in _0x3ac693) _0x358b19(_0x3ac693[_0x2d7206].shc, _0x3ac693[_0x2d7206].cls);
  if (_0x7b683e.trim().match("{getLink}")) {
    let _0x392c2f = getAttr(_0x7b683e, "seconds");
    let _0xd0de99 = getAttr(_0x7b683e, "before");
    let _0x33f4e3 = getAttr(_0x7b683e, "after");
    let _0x213c74 = getAttr(_0x7b683e, "message");
    let _0x245a21 = getAttr(_0x7b683e, "size");
    _0x4d4d8d.replaceWith("<div class=\"flex-c\"><div class=\"gd-link\"><div class=\"gd-countdown\"><span class=\"gd-seconds\">" + (_0x392c2f || '15') + "</span><span class=\"gd-message\">" + (_0x213c74 || "Please wait...") + "</span></div><button class=\"get-link button btn link" + (_0x245a21 ? " x2" : '') + "\" disabled>" + (_0xd0de99 || "Generate Link") + "</button><button class=\"goto-link button btn link" + (_0x245a21 ? " x2" : '') + "\">" + (_0x33f4e3 || "Go to Link") + "</button></div></div>");
    $(".gd-link").each(function () {
      let _0x4158af = $(this);
      let _0x2b20af = _0x4158af.find(".get-link");
      let _0x548b6d = _0x4158af.find(".goto-link");
      let _0x5cbca9 = _0x4158af.find(".gd-seconds");
      let _0x965a4a = window.location.href;
      let _0x19b36f = _0x965a4a.match(/\?/g) ? '&' : '?';
      let _0x23af7b = new URL(_0x965a4a.replace('#', _0x19b36f));
      let _0x1a4aa0 = new URLSearchParams(_0x23af7b.search);
      let _0x4c25cc = _0x1a4aa0.get('gd');
      let _0x3d2a29 = _0x1a4aa0.get('go');
      let _0x2f5e74 = _0x392c2f ? Number(_0x392c2f) - 1 : 14;
      if (_0x4c25cc) {
        localStorage.gd_key = _0x4c25cc;
      } else {
        localStorage.gd_key = 0;
      }
      if (_0x3d2a29) {
        localStorage.go_key = _0x3d2a29;
      } else {
        localStorage.go_key = 0;
      }
      if (_0x4c25cc || _0x3d2a29) {
        _0x2b20af.removeAttr("disabled").on("click", function () {
          if (_0x2b20af.not("[disabled]")) {
            _0x4158af.addClass("loading");
            let _0x443c18 = setInterval(function _0x27aae2() {
              if (0 == _0x2f5e74) {
                clearTimeout(_0x443c18);
                _0x4158af.addClass("loaded").removeClass("loading");
                $(".gd-btn").removeAttr("disabled");
              } else {
                _0x5cbca9.text(_0x2f5e74);
                _0x2f5e74--;
              }
            }, 1000);
          }
        });
      }
      _0x548b6d.on("click", function () {
        $("html,body").animate({
          'scrollTop': $(".gd-btn").offset().top - $w.height() / 2 + $(".gd-btn").height() / 2
        }, 500);
      });
    });
  }
  if (_0x7b683e.trim().match("{getDownload}")) {
    let _0x4b1867 = getAttr(_0x7b683e, "button");
    let _0x10be05 = getAttr(_0x7b683e, "size");
    _0x4d4d8d.replaceWith("<div class=\"flex-c\"><button class=\"gd-btn button btn download has-loader" + (_0x10be05 ? " x2" : '') + "\" disabled>" + "<div class=\"loader\"><svg viewBox=\"0 0 50 50\"><circle stroke-width=\"2.8\" cx=\"25\" cy=\"25\" fill=\"none\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\"></circle></svg></div>" + (_0x4b1867 || "Download") + "</button></div>");
    $(".gd-btn").each(function () {
      let _0x466537 = $(this);
      _0x466537.on("click", function () {
        if (_0x466537.not("[disabled]")) {
          let _0x258d95 = localStorage.gd_key;
          let _0x1d6794 = localStorage.go_key;
          let _0x3df073 = 0 != _0x258d95 ? "https://drive.google.com/uc?id=" + atob(_0x258d95) + "&export=download" : 0 != _0x1d6794 && atob(_0x1d6794);
          if (_0x3df073) {
            _0x466537.addClass("loading");
            setTimeout(function () {
              window.open(_0x3df073, "_self");
              _0x466537.removeClass("loading");
            }, 2000);
          }
        }
      });
    });
  }
  if (_0x7b683e.trim().match("{getContinue}")) {
    let _0x3cd62f = getAttr(_0x7b683e, "button");
    let _0x174c43 = getAttr(_0x7b683e, "size");
    _0x4d4d8d.replaceWith("<div class=\"flex-c\"><button class=\"go-btn button btn continue has-loader" + ('1' == _0x174c43 ? " x1" : " x2") + "\" disabled>" + "<div class=\"loader\"><svg viewBox=\"0 0 50 50\"><circle stroke-width=\"2.8\" cx=\"25\" cy=\"25\" fill=\"none\" r=\"20\" stroke=\"currentColor\" stroke-linecap=\"round\"></circle></svg></div>" + (_0x3cd62f || "Continue") + "</button></div>");
    $(".go-btn").each(function () {
      let _0x879142 = $(this);
      let _0x3effdc = window.location.href;
      let _0x48ef27 = _0x3effdc.match(/\?/g) ? '&' : '?';
      let _0x58fa13 = new URL(_0x3effdc.replace('#', _0x48ef27));
      let _0x3f96c5 = new URLSearchParams(_0x58fa13.search).get('go');
      let _0x2bb882 = !!_0x3f96c5 && atob(_0x3f96c5);
      if (_0x2bb882) {
        _0x879142.removeAttr("disabled");
        _0x879142.on("click", function () {
          if (_0x879142.not("[disabled]")) {
            _0x879142.addClass("loading");
            setTimeout(function () {
              window.open(_0x2bb882, "_self");
              _0x879142.removeClass("loading");
            }, 2000);
          }
        });
      }
    });
  }
});
$(".before-ads").each(function () {
  if ($("#post-ads-1").length) {
    pAd("#post-ads-1", $(this));
  }
});
$(".after-ads").each(function () {
  if ($("#post-ads-2").length) {
    pAd("#post-ads-2", $(this));
  }
});
$(".article-ads").each(function () {
  if ($("#post-ads-3").length) {
    pAd("#post-ads-3", $(this));
  }
});
$(".post-footer-ads").each(function () {
  if ($("#post-ads-4").length) {
    pAd("#post-ads-4", $(this));
  }
});
$(".blog-post article").each(function () {
  let _0x491485 = $(this);
  let _0x3d9b23 = _0x491485.find(".post-body");
  let _0x33fef1 = _0x491485.find(".pagination");
  let _0x2adeb8 = _0x3d9b23.html().split(/<!\-\-\s*nextpage\s*\-\->/i);
  let _0x9ddbe6 = _0x2adeb8.length;
  let _0xce9554 = 0;
  if (_0x9ddbe6 > 1) {
    function _0x188c83() {
      var _0x3c3805;
      let _0xffd290 = window.location.href;
      let _0x2665b4 = _0xffd290.match(/\?/g) ? '&' : '?';
      let _0x3d390d = new URL(_0xffd290.replace('#', _0x2665b4));
      let _0x27f05f = new URLSearchParams(_0x3d390d.search).get("page");
      let _0x4e3b8f;
      let _0x19c258;
      let _0x279b74;
      let _0x57cd90;
      let _0x274574;
      let _0x26aff6;
      _0xce9554 = (_0xce9554 = Number(0 == _0x27f05f || _0x27f05f < 0 ? 1 : _0x27f05f || 1) - 1) >= _0x9ddbe6 ? _0x9ddbe6 - 1 : _0xce9554;
      _0x3d9b23.html(_0x2adeb8[_0xce9554]);
      _0x3c3805 = _0xce9554;
      _0x4e3b8f = options.pageOf ? options.pageOf : "Page {page} of {pages}";
      _0x19c258 = options.prevPage ? options.prevPage : "Previous";
      _0x279b74 = options.nextPage ? options.nextPage : "Next";
      _0x274574 = (_0x57cd90 = _0x3c3805 + 1) > 1 ? "<a href=\"#page=" + _0x3c3805 + "\" class=\"prev btn\">" + _0x19c258 + "</a>" : '';
      _0x26aff6 = _0x57cd90 < _0x9ddbe6 ? "<a href=\"#page=" + (_0x3c3805 + 2) + "\" class=\"next btn\">" + _0x279b74 + "</a>" : '';
      _0x33fef1.html(_0x274574 + "<span class=\"info\">" + _0x4e3b8f.replace("{page}", _0x57cd90 > _0x9ddbe6 ? _0x9ddbe6 : _0x57cd90).replace("{pages}", _0x9ddbe6) + "</span>" + _0x26aff6).addClass("visible");
      _0x33fef1.find(".btn").on("click", function () {
        const _0x3d8eeb = {
          scrollTop: 0x0
        };
        $("html, body").animate(_0x3d8eeb, 500);
      });
      getPostCard();
    }
    $w.on("hashchange", _0x188c83);
    _0x188c83();
  }
});
$(".window-open").on("click", function (_0x354ce6) {
  _0x354ce6.preventDefault();
  let _0x43e2c9 = $(this).attr("href");
  window.open(_0x43e2c9, "_blank", "scrollbars=yes,resizable=yes,toolbar=0,width=860,height=540,top=50,left=50").focus();
});
$w.on("keydown", function (_0x1f0744) {
  if (hgz.isPost && _0x1f0744.ctrlKey && 83 == _0x1f0744.keyCode) {
    _0x1f0744.preventDefault();
    openShare();
  }
});
$(".post-share .show-more button, .share-toggle").on("click", function () {
  openShare();
});
$(".copy-link").each(function () {
  let _0xa8356 = $(this);
  let _0x1fe123 = _0xa8356.children("input");
  _0x1fe123.on("click", function () {
    this.select();
  });
  _0xa8356.children("button").on("click", function () {
    navigator.clipboard.writeText(_0x1fe123.val());
    _0xa8356.removeClass("copied-off").addClass("copied");
    setTimeout(function () {
      _0xa8356.removeClass("copied").addClass("copied-off");
    }, 3000);
  });
});
$(".about-author .author-text").each(function () {
  let _0x96b5a9 = $(this);
  let _0x28871c = _0x96b5a9.find('a');
  if (_0x28871c.length) {
    _0x28871c.each(function () {
      let _0x409f30 = $(this);
      let _0x385cbd = _0x409f30.text().trim();
      let _0x41b1d2 = _0x409f30.attr("href");
      let _0x8c7390 = "external-link" == _0x385cbd ? "website" : _0x385cbd;
      _0x409f30.replaceWith("<li class=\"" + _0x8c7390 + "\"><a class=\"bi-" + _0x8c7390 + "\" href=\"" + _0x41b1d2 + "\" title=\"" + _0x8c7390 + "\" rel=\"nofollow noopener\" target=\"_blank\"></a></li>");
    });
    _0x96b5a9.parent().append("<ul class=\"author-links social color\"></ul>");
    _0x96b5a9.find('li').appendTo(_0x96b5a9.parent().find(".author-links"));
  }
});
$w.on("keydown", function (_0x31a90e) {
  if (hgz.isPost) {
    if (_0x31a90e.ctrlKey && 37 == _0x31a90e.keyCode) {
      _0x31a90e.preventDefault();
      navShortcuts(hgz.isRTL ? ".post-nav-older-link" : ".post-nav-newer-link");
    } else if (_0x31a90e.ctrlKey && 39 == _0x31a90e.keyCode) {
      _0x31a90e.preventDefault();
      navShortcuts(hgz.isRTL ? ".post-nav-newer-link" : ".post-nav-older-link");
    }
  }
});
$(".main-nav .has-mega").each(function () {
  let _0x3a6954 = $(this);
  let _0x407c1d = getAttr(_0x3a6954.find('a').data("shortcode"), "label") || "recent";
  let _0x2abd8a = _0x407c1d.split('/');
  let _0x48240e = _0x407c1d.match('/') && _0x2abd8a[0] ? "tabs" : !_0x407c1d.match('/') && "mega";
  if ("mega" == _0x48240e) {
    let _0x175d78 = "recent" == _0x407c1d ? "/search" : "/search/label/" + _0x407c1d;
    _0x3a6954.addClass("type-mega").on("mouseenter", function () {
      if (!_0x3a6954.hasClass("loaded")) {
        _0x3a6954.addClass("loaded");
        getPosts({
          't': _0x3a6954.find(".container"),
          'type': "mega",
          'num': 0x5,
          'label': _0x407c1d
        });
      }
    }).children('a').attr("href", _0x175d78).removeAttr("data-shortcode");
  } else if ("tabs" == _0x48240e) {
    megaTabs(_0x3a6954, _0x2abd8a);
  } else {
    _0x3a6954.addClass("loaded").find(".container").html("<span class=\"error-msg\">" + ("<b>Error:</b>&nbsp;" + hgz.noResults) + "</span>");
  }
});
$(".main-search").each(function () {
  let _0x5a1046 = $(this);
  let _0x1dee0a = _0x5a1046.find("input");
  let _0x73469b = _0x5a1046.find(".search-results");
  let _0x21564d;
  $w.on("input", function (_0x592798) {
    _0x592798.preventDefault();
    clearTimeout(_0x21564d);
    _0x21564d = setTimeout(function () {
      getSearch(_0x1dee0a, _0x73469b);
    }, 500);
  });
});
$(".featured .getPosts").each(function () {
  let _0xab2597 = $(this).find(".widget-content");
  let _0x2797b4 = _0xab2597.data("shortcode");
  if (_0x2797b4) {
    let _0x377c5e = getAttr(_0x2797b4, "label");
    $w.on("load resize scroll", function _0x50ef51() {
      if ($w.scrollTop() + $w.height() >= _0xab2597.offset().top) {
        $w.off("load resize scroll", _0x50ef51);
        getPosts({
          't': _0xab2597,
          'type': "featured",
          'num': 0x4,
          'label': _0x377c5e
        });
      }
    }).trigger("scroll");
    _0xab2597.removeAttr("data-shortcode");
  }
});
$(".content-section .getPosts").each(function () {
  let _0x1f5dd6 = $(this).find(".widget-content");
  let _0x51fa22 = _0x1f5dd6.data("shortcode");
  if (_0x51fa22) {
    let _0x31c2fa = getAttr(_0x51fa22, "results");
    let _0x2d8140 = getAttr(_0x51fa22, "label");
    let _0x86b418 = getAttr(_0x51fa22, "type");
    let _0x32de32 = _0x2d8140 || "recent";
    let _0x268551 = _0x86b418 || "block1";
    let _0x3d5c31 = _0x31c2fa || 4;
    _0x3d5c31 = "block1" == _0x268551 || "block1" == _0x268551 ? 7 : "video" == _0x268551 ? 5 : "story" == _0x268551 ? 3 : _0x3d5c31;
    if ("grid" == _0x268551 || "list" == _0x268551 || "block1" == _0x268551 || "block2" == _0x268551 || "story" == _0x268551 || "video" == _0x268551) {
      if (_0x32de32) {
        _0x1f5dd6.parent().find(".title-link").attr("href", "recent" == _0x32de32 ? "/search" : "/search/label/" + _0x32de32);
      }
      $w.on("load resize scroll", function _0x3e9c5f() {
        if ($w.scrollTop() + $w.height() >= _0x1f5dd6.offset().top) {
          $w.off("load resize scroll", _0x3e9c5f);
          getPosts({
            't': _0x1f5dd6,
            'type': _0x268551,
            'num': _0x3d5c31,
            'label': _0x32de32
          });
        }
      }).trigger("scroll");
    } else {
      _0x1f5dd6.html("<span class=\"error-msg\">" + ("<b>Error:</b>&nbsp;" + hgz.noResults) + "</span>");
    }
    _0x1f5dd6.removeAttr("data-shortcode");
  }
});
$(".sidebar .getPosts, .footer .getPosts").each(function () {
  let _0x2678f4 = $(this).find(".widget-content");
  let _0x6e1489 = _0x2678f4.data("shortcode");
  if (_0x6e1489) {
    let _0x291fd3 = getAttr(_0x6e1489, "results") || 6;
    let _0x4b5e6f = getAttr(_0x6e1489, "label");
    $w.on("load resize scroll", function _0x104936() {
      if ($w.scrollTop() + $w.height() >= _0x2678f4.offset().top) {
        $w.off("load resize scroll", _0x104936);
        getPosts({
          't': _0x2678f4,
          'type': "side",
          'num': _0x291fd3,
          'label': _0x4b5e6f
        });
      }
    }).trigger("scroll");
    _0x2678f4.removeAttr("data-shortcode");
  }
});
getPostCard();
$("#related-posts .HTML").each(function () {
  let _0x3b7802 = $(this);
  let _0x4b21ca = _0x3b7802.data("shortcode");
  if (_0x4b21ca) {
    $(".related-wrap").each(function () {
      let _0x47df06;
      let _0x5d6193;
      let _0x4ebe13;
      let _0x580046 = $(this);
      let _0x15d817 = _0x580046.find(".related-tag");
      let _0x199e5d = _0x15d817.data('id');
      let _0x64e746 = _0x15d817.data("label");
      let _0xdf479c = _0x580046.find(".widget-content");
      _0x5d6193 = (_0x47df06 = getAttr(_0x4b21ca, "results")) ? Number(_0x47df06) + 1 : 4;
      _0x4ebe13 = getAttr(_0x4b21ca, "label");
      let _0x4890e7 = [_0x5d6193, _0x4ebe13];
      let _0x342545 = _0x4890e7[0];
      let _0xeb915d = _0x4890e7[1];
      let _0x50ab3a = _0xeb915d && _0xeb915d != _0x64e746 && "related" != _0xeb915d ? _0xeb915d : _0x64e746;
      if (_0xeb915d && _0xeb915d != _0x64e746 && "related" != _0xeb915d) {
        _0xdf479c.parent().find(".title-link").attr("href", "/search/label/" + _0x50ab3a);
      }
      $w.on("load resize scroll", function _0x5c485a() {
        if ($w.scrollTop() + $w.height() >= _0xdf479c.offset().top) {
          $w.off("load resize scroll", _0x5c485a);
          getPosts({
            't': _0xdf479c,
            'type': "related",
            'num': _0x342545,
            'label': _0x50ab3a,
            'id': _0x199e5d
          });
          _0x3b7802.parent().remove();
        }
      }).trigger("scroll");
    });
  }
});
$(".blog-post-comments").each(function () {
  let _0x28a584 = $(this);
  let _0x4434a2 = _0x28a584.data("shortcode");
  let _0x1b251f = getAttr(_0x4434a2, "type");
  let _0x150c32 = _0x1b251f + "-comments";
  switch (_0x1b251f) {
    case "disqus":
      let _0x436251 = getAttr(_0x4434a2, "shortname");
      if (false != _0x436251) {
        disqus_shortname = _0x436251;
      }
      disqusComments(disqus_shortname);
      _0x28a584.addClass(_0x150c32 + " visible");
      break;
    case "facebook":
      let _0x4e2886 = getAttr(_0x4434a2, "lang");
      let _0x3c34b7 = false != _0x4e2886 ? "https://connect.facebook.net/" + _0x4e2886 + "/all.js#xfbml=1&version=v14.0" : "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0";
      $("head").append("<script async=\"async\" defer=\"defer\" crossorigin=\"anonymous\" src=\"" + _0x3c34b7 + "\" />");
      _0x28a584.addClass(_0x150c32).find("#comments").html("<div class=\"fb-comments\" data-width=\"100%\" data-href=\"" + disqus_blogger_current_url + "\" order_by=\"time\" data-numposts=\"5\" data-lazy=\"true\"></div>");
      _0x28a584.addClass("visible");
      break;
    default:
      _0x28a584.addClass("blogger-comments visible");
      _0x28a584.find("#top-continue .comment-reply").addClass("btn");
      beautiAvatar(".avatar-image-container img");
  }
  let _0x5cb860 = _0x28a584.find(".comments .comment-reply");
  let _0x5478fd = _0x28a584.find(".comments #top-continue");
  let _0x36a234 = _0x28a584.find(".show-cf");
  _0x5cb860.on("click", function (_0x35be48) {
    _0x35be48.preventDefault();
    _0x28a584.addClass("cf-on");
    _0x5478fd.show();
    _0x36a234.remove();
  });
  _0x5478fd.on("click", function (_0xe145f3) {
    _0xe145f3.preventDefault();
    _0x5478fd.hide();
  });
  _0x36a234.on("click", function () {
    _0x28a584.addClass("cf-on");
    _0x36a234.remove();
  });
});
$(function () {
  $(".entry-thumbnail .thumbnail, .entry-avatar .avatar").not(".hgz-lazy").hgzLazy();
  $(".header-inner").each(function () {
    let _0x183dcd = $(this);
    if (true == hgz.stickyMenu && _0x183dcd.length > 0) {
      let _0x3e877d = $d.scrollTop();
      let _0x26b072 = _0x183dcd.offset().top + 2 * _0x183dcd.height();
      $w.scroll(function () {
        let _0x33c31a = $d.scrollTop();
        let _0x19bb8b = _0x183dcd.offset().top;
        let _0x1a70c5 = $(".main-header").offset().top + 1;
        if (_0x33c31a > _0x26b072) {
          _0x183dcd.addClass("is-fixed");
        } else if (_0x19bb8b <= _0x1a70c5) {
          _0x183dcd.removeClass("is-fixed").removeClass("show");
        }
        if (_0x33c31a < _0x3e877d) {
          setTimeout(function () {
            if (_0x19bb8b >= _0x1a70c5) {
              _0x183dcd.addClass("show");
            }
          }, 250);
        } else {
          setTimeout(function () {
            _0x183dcd.removeClass("show");
          }, 250);
        }
        _0x3e877d = _0x33c31a;
      });
    }
  });
  $(".mobile-logo").each(function () {
    let _0x5b90bc = $(this);
    let _0x28500f = $(".main-logo a").clone();
    _0x28500f.find('h1').remove();
    _0x28500f.appendTo(_0x5b90bc);
  });
  $(".mobile-menu").each(function () {
    let _0x1f5c4f = $(this);
    let _0x4141a0 = $(".main-nav").clone();
    _0x4141a0.attr("class", "mobile-nav").find(".sub").attr("class", "sub");
    _0x4141a0.find(".type-mega").removeAttr("class").find(".ul").remove();
    _0x4141a0.find(".type-tabs .nav a").removeAttr("class").wrap("<li/>");
    _0x4141a0.find(".type-tabs").attr("class", "has-sub").find(".ul").each(function () {
      let _0x26f522 = $(this);
      let _0x27a156 = _0x26f522.find(".nav").html();
      _0x26f522.replaceWith("<ul class=\"sub\">" + _0x27a156 + "</ul>");
    });
    _0x4141a0.appendTo(_0x1f5c4f);
    $(".menu-toggle, .hide-mobile-menu").on("click", function () {
      $b.toggleClass("menu-on");
      $(".menu-on .overlay-bg").on("click", function () {
        $b.removeClass("menu-on");
      });
    });
    $(".mobile-menu .has-sub > a").on("click", function (_0x15bbe5) {
      _0x15bbe5.preventDefault();
      let _0x139642 = $(this);
      if (_0x139642.parent().hasClass("expanded")) {
        _0x139642.parent().removeClass("expanded").children(".sub").slideToggle(170);
      } else {
        _0x139642.parent().addClass("expanded").children(".sub").slideToggle(170);
      }
    });
  });
  $(".mm-footer").each(function () {
    let _0x103fc5 = $(this);
    let _0x51e5b4 = $(".footer-info .social");
    let _0x4f963d = $(".footer-menu ul");
    let _0x3e8855 = !!_0x51e5b4.length && _0x51e5b4.clone();
    let _0x3686f2 = !!_0x4f963d.length && _0x4f963d.clone();
    if (_0x3e8855) {
      _0x3e8855.attr("class", "social color").find(".text").remove();
      _0x103fc5.append(_0x3e8855);
    }
    if (_0x3686f2) {
      _0x3686f2.attr("class", "links");
      _0x103fc5.append(_0x3686f2);
    }
  });
  $("#load-more").each(function () {
    let _0x2e96b3 = $(this);
    let _0x3c96eb = $(".blog-pager .loading");
    let _0x11a276 = _0x2e96b3.data("url");
    _0x2e96b3.on("click", function (_0x3f505f) {
      _0x3f505f.preventDefault();
      _0x2e96b3.removeClass("visible");
      $.ajax({
        'url': _0x11a276,
        'beforeSend': function () {
          _0x3c96eb.addClass("visible");
        },
        'success': function (_0x5bd6f8) {
          let _0x392b5b = $(_0x5bd6f8).find(".blog-posts");
          _0x392b5b.find(".post").each(function (_0x161817) {
            $(this).addClass("fadeInUp").attr("style", "animation-delay:" + (0.1 * _0x161817).toFixed(1) + 's;');
          });
          $(".blog-posts").append(_0x392b5b.html());
          if (_0x11a276 = $(_0x5bd6f8).find("#load-more").data("url")) {
            _0x2e96b3.addClass("visible");
          } else {
            _0x2e96b3.removeClass("visible");
            $(".blog-pager .no-more").addClass("visible");
          }
        },
        'complete': function () {
          _0x3c96eb.removeClass("visible");
          $(".blog-posts .thumbnail").not(".hgz-lazy").hgzLazy();
        }
      });
    });
  });
  $("p.comment-content").each(function () {
    let _0x43483b = $(this);
    _0x43483b.replaceText(/\{image\}([^\}]*)\{\/image\}/g, "<img class=\"comment-image\" src=\"$1\" alt=\"Comment Image\" loading=\"lazy\"/>");
    _0x43483b.replaceText(/\{video\}([^\}]*)\{\/video\}/g, "<span class=\"comment-video-url\">$1</span>");
    _0x43483b.find(".comment-video-url").each(function () {
      let _0xf5996e = $(this);
      let _0x2a228e = _0xf5996e.text();
      let _0x3aa3d5;
      let _0x4ad57f;
      let _0x42d139;
      let _0x48b73d;
      _0x3aa3d5 = new URL(_0x2a228e);
      _0x4ad57f = new URLSearchParams(_0x3aa3d5.search);
      _0xf5996e.replaceWith((_0x48b73d = (_0x42d139 = !!_0x2a228e.match("youtube.com") && _0x4ad57f.get('v')) || !!_0x2a228e.match("youtu.be") && _0x3aa3d5.pathname.replace('/', '')) ? "<div class=\"comment-video\" data-id=\"" + _0x48b73d + "\"><img width=\"100%\" height=\"315\" src=\"https://i.ytimg.com/vi/" + _0x48b73d + "/hqdefault.jpg\" alt=\"YouTube Video Cover\" loading=\"lazy\"/><span class=\"yt-img\"></span></div>" : "Error: " + hgz.noResults);
    });
    _0x43483b.find(".comment-video").each(function () {
      let _0xff16bd = $(this);
      let _0x44664d = _0xff16bd.data('id');
      _0xff16bd.on("click", function () {
        _0xff16bd.replaceWith("<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/" + _0x44664d + "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
      });
    });
  });
  $(".cookie-consent").each(function () {
    let _0x503841 = $(this);
    let _0x41ceb0 = _0x503841.find(".consent-button");
    if (_0x503841.length > 0) {
      if ("true" !== Cookies.get("cookie_consent")) {
        _0x503841.css("display", "block");
        $w.on("load", function () {
          _0x503841.addClass("visible");
        });
      }
      _0x41ceb0.off("click").on("click", function (_0x4bde73) {
        const _0x32e2db = {
          expires: 0x7,
          path: '/'
        };
        _0x4bde73.stopPropagation();
        Cookies.set("cookie_consent", "true", _0x32e2db);
        _0x503841.removeClass("visible");
        setTimeout(function () {
          _0x503841.css("display", "none");
        }, 500);
      });
    }
  });
  $(".to-top").each(function () {
    let _0x461b18 = $(this);
    $w.on("scroll", function () {
      if ($(this).scrollTop() >= 100) {
        _0x461b18.addClass("show");
      } else {
        _0x461b18.removeClass("show");
      }
      if (_0x461b18.offset().top >= $(".site-footer").offset().top - 36) {
        _0x461b18.addClass("on-footer");
      } else {
        _0x461b18.removeClass("on-footer");
      }
    });
    _0x461b18.on("click", function () {
      const _0x3812aa = {
        scrollTop: 0x0
      };
      $("html, body").animate(_0x3812aa, 500);
    });
  });
});
if (hgz.hasCookie) {
  window.cookieChoices = {};
}
function _0x530e() {
  const _0x4029e7 = ['Jsbtc', 'faMpx', 'ImIOv', 'OxyDV', 'IEqyQ', 'girWI', 'MBfWz', 'ch-re', 'NyhYd', 'CjTli', 'AqsYd', 'ZWiOF', 'slide', 'IvVmV', 'GzmDw', 'GHnve', 'oxOkn', 'HaBaC', 'vKVPu', 'fqDmG', 'hXPGJ', 'MJyaI', 'postD', 'rXXna', 'HwhTm', 'rKvOB', 'h-on', 'QoVHI', 'NrALk', 'tyle=', 'pAsVI', 'DQSJt', 'wSReI', 'ge:ur', "\"/><s", 'mayZS', 'GzkkC', 'aERln', '.</li', 'wAIRN', 'QhMHg', 'wkQjI', 'PWXSA', 'jXYdv', 'WcsSl', 'fiHFR', 'DZDgS', 'ch/?q', 'e-men', 'HGKMF', 'vOZfv', 'keHFL', "iv cl", 'AsXZH', 'QtuHH', 'nJysd', 'PIThG', 'ch/la', 'OhgGT', 'troke', 'qxtwt', 'Lzrtk', 'nXRGM', 'giLMY', 'PybuT', 'cCdGp', 'dMicz', 'kgPrQ', 'ZFyUg', 'doxhs', 'krfHn', 'd-btn', 'EhHRZ', 'nBDAg', 'ixKZk', 'kYNEC', 'PPVgE', 'oyzxg', 'BgBew', "d has", 'ledly', '-sear', 'fskqQ', 'VzLzQ', 'yuLiy', 'UikCv', 'idftd', 'XnBIi', "s=\"in", 'LdMIv', 'cript', 'NRdeI', 'GYLJO', 'QZVLY', 'ItaxY', 'yfNMa', 'PALQF', "s=\"pu", 'read', 'story', 'QyrCB', 'ribeF', 'SHnYW', 'ZgPou', 'focus', 'Sjufc', "\"ul s", 'izuOX', 'uEeCq', '22U8x', 'rtQiZ', 'NwCjF', '.gif', 'debu', 'cdlBo', 'Child', "oke=\"", 'html', 'RQSQD', 'RzoQu', 'cnnRT', "ener\"", 'dHhLH', 'NSYNb', 'CVIpY', "} of ", 'AJwJv', 'WNvXz', 'EsTGK', 'gmneO', 'WOawc', "ss=\"g", 'GWbdw', 'bGues', 'YKSjL', 'swMsR', 'AIpHm', 'lxBoQ', 'stubp', "ext b", 'MQKeb', 'activ', 'mbnai', 'cFKOC', "\"><di", 'LNBtx', 'abs', 'mega', 'rJcOO', 'lvPXE', 'qeuQQ', 'hOJEV', 'nctio', "\"><a ", 'Anxhd', '.text', 'dnGUy', 'RaFiK', 'keiqA', 'keLLu', 'mBIuh', 'yoabW', 'PjMVc', 'EBKWd', 'yLBBt', 'oqdEq', 'zCvIo', "><ol ", 'CPRRW', 'Vzfrv', 'GNJTl', 'ue}', 'is-re', "t .th", "fo\">", '-resu', 'eqxRw', " .nav", 'mNUkp', 'uqLbO', 'Qwsnw', 'QEgno', 'hUfvZ', 'RhDVL', 'agUyL', 'cscqp', 'ippet', 'OTPyK', 'VkppI', '95;', 'QKNOw', 'xTevq', 'ntZBi', 'hUrnr', 'AqSqP', "src=\"", 'zzdPv', 'FTYZR', 'eBmmk', 'ktHaB', 'aBPgU', 'hRQOD', 'ysdbZ', 'IQubF', 'eMoPH', 'mment', 'TrzjT', 'rMPPq', 'oVews', 'baZpo', '-tabs', 'ribeM', '119wHXbYk', 'ubKzj', 'kIxoc', 'qtTGX', 'RDZNv', 'YbSGI', 'rbdbI', 'bJudP', '-subm', 'LsAxJ', 'QcTkc', 'lRmZf', 'ame>', 'llYea', 'CjVPh', "\"><sp", 'EEvmc', '-avat', 'CtYfY', 'off', 'cnwVh', 'bQgwU', 'yTtMo', 'ONZhZ', 'vFcZf', 'GkbNa', "use s", '8OnbD', 'YuUmC', 'EKKum', "\"anim", 'jPGsJ', 'xMRSK', 'yVsPm', 'LxnSd', 'MvyJl', 'sIxXV', 'qBYhr', 'gGBfu', 'AhQYY', 'Sideb', "s=\"en", '.acti', 'YdgeJ', 'iWoXX', 'kjPcm', 'ownlo', 'TqhSX', 'NFkDb', "t car", 'lMwqv', '-src]', 'gzOEP', " heig", 'JF2-V', 'CQQPf', 'CFCPX', 'VIMZq', 'ZkLTz', 'rt=do', 'aCFMP', "k\">Xe", 'puPBd', 'hRzGr', 'er-me', 'EjjBZ', 'LDLMw', 'bZGDj', 'SPuHe', 'uoocI', 'TbhJp', 'bVrip', 'tpIWF', 'wykub', 'HojgK', 'nYYbp', 'uywyR', 'JLUOD', 'aqpdv', 'DXANA', 'cpNOQ', 'WNDUO', '1</em', 'sNvMa', 'rando', 'NOvhR', 'hcUln', 'isPos', " .sha", 'expir', 'doFiA', 'IogZM', 'MlElo', 'NfFCh', 'bel/', 'vtTeS', 'code', 'wLlsL', ',h3', 'e_con', 'TWFDl', 'XjYSp', 'joRat', 'data-', '.view', 'wQTya', 'UWkSr', 'ate', 'RlZHq', 'AkZtP', 'DGQOj', '.goog', 'zqXQL', 'kPkcq', 'ong', 'hziZp', 'wGRVV', 'IICpI', 'AqBNu', 'cwSKI', 'IlsiB', 'oogAP', 'PbiOP', 'vvtoH', 'AGEsE', 'sbNcD', 'CtyPD', 'sYVIt', 'rjnYP', 'kkONL', 'wJIFP', 'd-off', "s=\"co", 'IWQrR', 'TciKX', 'VFbQi', 'size', 'OaEZS', 'dbRYf', 'CyHJj', 'MaeKF', 'subst', 'jJgtD', 'HtGtQ', '//res', 'NnOXw', "\" all", 'RkEgF', 'FFbaa', 'PyPkq', "\"></o", 'HFJaX', 'CZPmk', 'NDLfK', "s=\"er", 'RBnpt', 'gCdQw', "s\">", 'WrMMb', 'hShuE', 'lSaxK', 'nly', 'bOobQ', 'ined', 'qEHjJ', 'AgRxH', 'rlCtU', 'LwYbW', 'go_ke', 'postA', 'ml=1&', 'DNkgf', 'gd-bt', 'hpPmh', 'ExITL', 'HlhqA', 'Tllde', 'fQmzs', 'jZHDJ', 'lLJam', 'WWLzb', 'iZniE', 'cjzfw', 'mary?', 'fWQbo', 'vFaNY', 'dqsty', 'SbMqO', 'dec', 'ess}', 'JWrpG', 'zHeIZ', 'euser', 'IwMnR', 'bbRcM', 'PCsvt', 'hJ-SA', '-bg', 'ruLod', 'LSDxh', 'qfjCf', "l .th", 'MFFQC', 'uMskW', 'otDVj', 'older', 'XtHQc', "s=\"rc", 'wZznS', 'GKsaD', 'ZNIRG', 'secon', '.rela', "s=\"yt", 'rLTdK', 'vzoOX', 'vrysB', 'ZGmHs', " .con", 'rrdKM', 'yQJNq', 'bml=1', 'const', " load", 'rhWDw', 'oLfsy', 'LpBNe', 'EaNZp', 'UjyJk', 'wBWAw', 'iITYf', 'jsfKr', 'input', 'XqhUO', 'IelMV', 'osts', 'UnuUZ', 'cdFdT', 'mbXWM', 'vboBN', 'pyjij', 'uMaNp', 'NbGpI', 'mjMCu', 'VUaCt', 'ebkIB', 'VOngj', 'fEbnC', 'KGMzB', 'oEiCU', 'MWIfm', 'lKSmA', 'eJqia', 'LFWqg', 'RsDzT', 'ArFEW', 'ZmUoR', 'PscTp', 'WjBHB', 'VbQwy', '.befo', 'AtVMu', 'oCEUk', 'zyFFs', 'nbukv', '.gd-b', 'oLStd', 'UXjcQ', 'dTFrQ', 'RZMsF', 'hOzEX', 'Prsqh', 'toc', 'mUBVI', 'kzXAj', 'jFLMj', 'ZmhKc', 'SPMjX', 'tNqFq', 'ltbab', 'idJPX', 'mbhVh', '></a>', 'VtymL', 'LEOnc', 'yaDqa', 'lepzD', 'yphrM', 'XEZPH', 'CqANI', 'html,', 'yMjue', 'be.co', 'TNfTh', 'cYlEU', 'cgjwI', 'BfLHe', 'WzLCP', 'JhPgg', 'ECOnw', 'XlkwP', '{show', '.abou', 'zMdzK', 'dgpgQ', 'BTgGV', 'rAQSF', 'PteoO', 'EWDFu', 'KKnXX', 'lPhsw', 'Znhlo', 'sVetZ', 'xyVao', 'lKYCP', 'rmenA', 'AGeGJ', 'SuJNO', 'gmWvg', 'ssaxa', 'XOqqN', 'LJGLB', 'crxCr', 'tXQRN', 'QqNin', "rm1 f", 'bfouT', 'snaZA', 'pXwaf', 'rGPXU', "ef=\"#", 'net/', 'pkKEy', 'VlCDA', 'age-c', 'ulSEt', 'yrCvg', "l\" da", 'Lhytq', "100%\"", '</ul>', 'mtLgt', 'flMfK', 'OUuVX', 'NVEGs', 'gzxPC', 'Downl', '-dela', 'djOcu', '-rw', 'YcCxL', 'uoWvY', 'NYTqN', 'HtcrS', 'WYuYO', 'jwKfp', 'ixJEa', 'sRewk', 'UIEqS', 'xyUwd', 'oncso', 'error', 'nvqOL', 'LMzGz', 'yuaRD', '-mega', 'NlMOU', 'rmfVv', 'OPafe', 'jKpFB', 'QtCiE', 'GRsUx', '<time', 'kwASi', 'DMTPM', " visi", 'loade', 'poVFs', 'jrtuY', 'userD', 'GcSqn', 'FqUws', 'nZGYB', 'rOBTH', 'css', 'gRQJX', 'qxEfA', 'cmGNC', 'bTKrC', 'ppYwj', 'ZyyIY', 'DaLEq', 'zEZkC', 'lbyFv', 'kkHON', 'QRiff', 'cxdLs', 'wYRef', 'GjqKR', "er=\"d", 'safeh', 'jQZCi', 'qthwg', 'DBLng', 'ZAWvK', 'apMRv', 'yUcUL', 'rter', 'dzBsJ', 'warni', '8TUpmpd', 'DUZip', 'aVCoq', 'tJOjX', 'WGZpd', 'Conti', 'rVUgV', 'BYtri', 'tion-', 'zKDnF', 'jfqVR', ')+)+)', "-nav ", 'ar}', 'auwzb', "e\" ar", 'udUll', 'ontai', 'ZjhpQ', 'wljCe', 'BBEQi', 'NGFbF', 'TfdJL', 'UToll', 'ch?q=', 'dMytS', 'Cdxvn', 'hjIOj', 'pZoUY', 'itAuw', 'mXcQg', 'shZAS', 'qPIWv', 'ueHgZ', 'naCfW', 'HoZYu', 'LGDZr', 'h2,h3', 'YzZDe', 'sRLBA', 'cUuKC', 'NjfTv', 'TvBOt', "an cl", 'yudpG', 'rc-to', 'GljzJ', 'bqNOM', 'VqHsG', 'Krcid', 'xNkID', 'sFbFh', 'SppUH', "l('", 's/com', 'AgfJJ', 'goImg', 'dChil', 'GFeDa', 'guZYE', "ay; c", 'eOyEH', 'OviDR', 'KwyLv', 'lPyoZ', 'QllEC', 'lzkUZ', 'qSdMe', 'INbmV', 'VndWL', 'ructo', 'EgjfJ', 'lPhmN', 'hgwaG', 'bzZWh', 'DAqic', 'qnvrS', 'tFTaH', 'hPUFf', 'vkPBx', 'jsNiQ', 'hftgu', 'cNqBk', 'fmRsE', 'AhVLY', 'JKpOy', 'xagqr', 'pCKQH', 'mXenl', "ate L", 'to__', 'niKGV', 'UCROG', 'ePnUT', 'szsQG', 'hMjvs', "=\"tim", 'wsnts', 'KqvES', " data", '.avat', 'KLcxP', 'XWZbe', "=\"vie", 'kmUWV', "ton b", 'jzESA', 'wamKC', '-titl', 'VvRUm', 'vLftb', 'v></a', 'yOkkC', 'cxolP', 'xCZnH', 'KwqHw', 'xPPjE', 'push', 'PMkKH', 'WWXqp', 'VnkBn', 'QNpTs', 'WGvar', "\"/>", 'kYNHx', 'kUaSb', 'fOBQw', 'VGoEc', "me wi", 'try-t', 'jVTty', 'ojwqs', 'EwIft', 'aLYpK', 'dinVw', 'yvcGF', 'EtEGB', "=\"ale", 'drLMh', 'om/40', 'y-inn', 'WOkhV', 'wTmOY', "info\"", 'jximp', 'tsSOp', '&#xF4', 'UMZZP', 'BQMvd', 'MdDGc', 'kHcxn', 'aapKO', 'qveKA', 'nodeT', 'KkbvK', 'nal-l', 'BWjLW', 'TCCFs', 'HWnXV', "r fle", 'NyCZu', 'FQomE', 'enc', 'Page}', 'miPkh', 'kCawJ', 'ieOIl', 'kQIDL', "<a hr", 'h1,h2', 'WBEoH', 'BqLQD', "ch in", 'VzNZW', 'ahqhA', 'eAmxZ', 'USTdm', 'butto', "ub sm", 'toc-t', 'AjsFE', 'mtCvY', 'ZYLrT', 'mSSUs', 'BnMER', 'MsBHM', 'ZTKrH', "bel=\"", 'inclu', 'BomcG', 'BSrHC', 'ube.c', "%\" da", 'NVZAK', 'pWNqS', 'VSwAo', 'sCbWC', 'fKXwd', 'upOoO', 'evRrW', 'OtmVu', 'LWHZx', 'VqRtv', 'OObmZ', 'fFlLl', 'LJYtD', 'fylzq', 'ifhaM', 'SBlGE', 'Ck-Is', "')\"><", '2&max', 'getPo', 'xuQfR', 'pathn', 'l></d', 'wIXzv', 'caMpw', 'sYBzA', 'HZftC', "<div ", 'nyDvB', 'on=v1', 'DEakI', 'TwVSV', 'ARkDz', 'mCOsy', 'Lhvsq', 'etPos', 'UJDWO', 'LKqYK', 'BNpkj', 'GbguR', '.comm', 'setIn', 'FaUJN', 'ERycp', 'Mhjwt', 'custo', 'RyNJX', "z .ps", 'Ekqvg', 'UnDwN', 'vsbl', "age -", 'tton,', 'zYwyT', 'KBBbx', 'xypFL', 'er_by', "v><a ", 'tjslw', 'class', 'ard-w', 'now', 'ZcJwI', 'STEaC', 'bHWNA', "ents ", '.sm-', 'OtPnC', 'rJzIF', 'NcQqI', 'CVsoW', 'HYOyZ', 'qbIkR', 'tFgLl', 'lLzgm', 'kfCgk', 'XktrQ', 'Kdt2t', 'moAso', 'EGzqQ', 'cf-on', 'vOloo', 'rPekr', 'GxtoV', '://vi', 'gLQFE', 'xDrti', 'Blcev', 'form-', 'rJqFE', 'lcIrw', 'VnOUC', 'LVcez', '-link', 'max', 'vTqOI', 'm/blo', 'MLKWP', '-togg', " btn\"", 'RmHkb', 'hsUqH', 'loadi', 'ollow', 'NlyPL', 'qKrYM', 'dhHON', 'gmgLn', 'backg', 'LpjBC', 'jvrQR', 'k-no-', 'vnGjc', 'src', '-nav-', 'xTuOK', 'mJkEa', 'cLWGL', '.nav', 'Rgulc', 'hgzTo', 'Bxhtu', '113576qUEBBl', 'lwXVU', 'ipiCd', 'jQFoa', 'KLbTN', 'hide', 'WknCF', 'flict', 'OEAVd', 'ype', "efer\"", 'bxQEM', 'PPPBN', 'ch/?b', 'tVDYE', 'djoSv', 'AxMdN', 'rap', 'RJIhs', "ing=\"", 'UExBX', 'PuIDR', 'blish', 'sMnUl', 'zjETN', 'UXYPY', 'Jjxgt', 'qMFin', 'fsVmT', 'abUox', 'xzIyH', 'jrfzB', 'NJDYc', 'ZOigA', 'conve', 'nmxuo', 'PeAeu', 'websi', '&#xF2', 'wORFE', 'QwsEL', '#Cont', 'cquSc', 'tveDC', 'SmHes', 'newer', 'iZchf', 'yiZyh', 'PKFOB', 'fPbep', 'mJXYv', 'ZpSmT', 'TUPFA', 'jqpVT', 'qSHVG', 'TobcZ', 'Iqnhw', 'ullsc', 'ePTDe', "t exc", 'freez', 'fKNgr', "re\" h", 'RSaHp', 'Nlhqj', " targ", 'dxGE7', 'JYzSb', 'uilOQ', " cros", 'ywhGu', 'path', "nu ul", 'ment-', 'jhiBb', 'GDRPj', 'SuupZ', 'TCFGd', 'entry', 'wBbEe', 'mouse', 'er-co', 'dwRAU', 'fdCAb', 'fIMzu', 'xecJL', 'YXXJr', 'utfbW', 'HlMDn', 'exter', 'n></d', "nts\" ", 'iRoNk', 'iVuHy', 'rqoLd', 'Vyrzh', 'alt=j', 'ZiRtT', 'MGkjt', '=json', 'GwFFJ', 'filte', 'qerdN', 'ldAnw', 'GVGLn', 'eInDo', 'uMXFq', 'pnbMH', 'ZbyNW', 'zNAJD', 'LMSMW', 'lNPKg', 'rSNcJ', 'LHive', 'aIBSX', 'test', 'lback', 'WMgfI', 'SyGWt', 'UTKnf', 'izZRi', 'HvfFg', 'kZnfH', 'ATHrS', 'js#xf', 'CPaQO', 'nth', 'SLWif', 'tkDHv', 'mwgXb', 'text/', 'OElUf', 'saQvy', 'ohKSY', 'ymQwe', 'EmDiD', 'QCqMC', 'windo', 'WaGKF', 'arCJu', 'MGqun', 'PIkgh', "er=\"0", 'febjV', 'AyBze', "le=\"", 'NNNIO', 'befor', 'UPpFf', 'toLoc', 'qLypD', 'href=', 'yUjna', 'miGcm', 'eXgwd', 'mXpNH', 'SERfC', '.go-b', 'LoeCk', 'text=', 'IWeLK', 'iEMcm', 'YWUSE', 'LmCmc', 'OQiLs', 'OoQGJ', 'TBLQj', 'JeakS', 'tact-', 'lgNhO', 'iSbYn', 'lIOzo', 'lmSaN', 'ADzlg', 'xnwAL', 'yPtAF', 'OOLCP', 'riIUy', 'AGWWt', 'qGqkE', 'kskLf', 'WeZTa', 'eNDGA', 'xpcZz', 'eoFWz', 'sXUkD', 'keDJa', '/hqde', 'JxDKl', 'YXbsA', 'NerFB', 'maeKZ', 'KtsJL', 'PNxCP', "get\">", 'Hxjjk', 'yCryL', 'ainer', 'grid', 'lkwBY', 'IOIhf', 'w.ope', " (tru", 'AQbvx', 'bar}', "f=\"", 'GnBnz', 'VxMeb', 'jkPix', 'dUzjh', 'IQCMc', 'SRFwr', 'UrEsq', 'XEuLi', 'KqAFu', 'tkiAe', 'IytSe', 'sTBBW', 'nRHBa', 'cnzRx', 'Drzlk', 'CrXeD', 'VpoVt', 'BaowL', 'r-ads', 'HLTTC', 'gYDgv', 'le-lo', 'AWDuD', 'GvqQW', 'RXCRg', 'ocial', 'WHERg', 'GYIvr', 'mThwm', 'mQQgo', 'wDayO', 'agcAy', 'gnbzs', "\"back", 'LFaru', 'DyJtv', 'DQdAg', "\\+\\+ ", 'lCgCm', 'XGtxH', 'pEagg', 'toUTC', 'vaEeD', "bi\" d", 'JspWZ', 'qkTsu', 'sjaqn', 'match', 'hzDBM', 'utopl', "s=\"hg", 'makAf', 'gDAiy', 'aIPbr', 'mvNZY', 'nhniJ', 'dObPy', 'IbHOD', 'ICfvF', "\"></a", 'ZfCsj', 'WMGjy', 'KkOIn', 'uLLbS', 'VkHJs', "\"auth", 'fLrKa', 'VLVBD', 'hasCl', 'qHjlk', 'tXnTS', "=\"nof", 'aDoHa', 'VuTAE', 'HpXLY', 'alter', 'uvTkx', 'DwaUl', "e .sh", "=\"row", 'UaTtx', "der\">", 'DVsCu', "ag\">", 'fONvP', 'ZvZvw', 'aiGAl', 'nVGHO', 'JUJyK', 'jyrmS', 'tUlDs', 'tmUzy', 'JYPSQ', '#rela', 'iIrTx', "d\" da", 'cvqyc', 'ZNsRb', 'prRyH', 'ntinu', 'as-su', 'div>', 'is-c', 'wcEis', 'rpLVo', 'tUhEe', 'GZMBX', 'buppq', 'RjYjg', 'QxwNE', 'OAdwK', 'rcont', 'hgzLa', 'displ', 'WScUI', 'whLqW', 'sUvLg', 'EVUWL', 'ZPMkF', 'kgZMx', 'HdLVf', 'ugTyx', 'ZtrQJ', 'zrtbs', 'jMQTB', 'LVyho', 'qOzib', 'aSeBf', 'BirJi', 'psWEU', 'gnWGW', 'excep', 'ZXIuG', 'gsCzr', 'jDSxv', 'PWBfE', 'wrzSJ', 'ubMPk', 'NCVfN', 'Ytngy', 'qypGB', 'RNCGq', 'dnceJ', 'amd', 'nDLiP', 'SKwat', 'UDkHg', 'sCiTp', 'nSKjZ', 'rcBZY', 'zzCcr', 'rc-fe', 'CDJKD', 'XbWNC', 'NStxt', 'OXmxM', 'rougD', 'nate', 'wucCH', 'lJJcK', 'qurxG', 'hImOZ', 'bnail', 'PaHZc', 'NDHep', 'apply', 'cMfQV', "a; gy", 'Width', 'wljBm', 'DBUnl', 'mUFiH', 'image', 'SKuaW', 'todah', 'bMYre', 'yes,t', 'GSMcf', 'Glyrj', 'GcoPj', 'textC', 'cBgIO', 'QEOdk', 'PttaP', 'mMLwg', 'kaaUw', 'scrol', 'CEmfR', 'psyua', 'zoUFK', 'OMAux', 'info', 'fqcel', "<h2 c", 'ZzPzN', 'yaxNp', 'eohdw', 'AgmOA', 'FOAzG', 'rKNmw', 'aIGby', "ent I", 'yhdlH', '/sear', 'ESgpa', "e vid", 'rel', 't-aut', 'disqu', 'gwIwA', 'nextP', 'QjJpH', 'Fbday', '-nav', 'kUEks', 'UkYhk', 'gOsxo', 'NtENj', 'nbVsu', 'rqYkK', 'ffff?', 'Previ', 'MxzAd', 'dEuQz', 'vLPLD', 'VWGtp', 'WxyAb', 'KoOWt', 'cACHy', 'VrIAp', 'eNaMQ', 'ZtnHg', 'CQglf', 'uBZKP', 'pnQQJ', 'sKoXd', 'zsNfa', 'dmhVg', 'JBtvC', 'first', '14.0', 'ZlSQX', 'oogle', 'AOYTS', 'Vxmdl', 'svQBi', "ink b", 'yJgsc', 'ldACo', 'wtPqT', 'ItSOl', 'qojjd', 'tjqrL', 'icle-', 'Kqcgi', 'EfZqB', 'VxQdQ', 'eadli', 'ehwzS', 'Ibsks', 'PmpdY', 'HKpOo', 'SlDsJ', 'oard', 'ate=t', 'gnsSA', "t fir", 'log', 'rEjsw', 'lotKk', 'jZTww', 'lvLYA', "=520'", 'BjYUK', 'SFdPO', 'xxydS', 'pkwVb', 'WBToE', 'swYSw', 'hZAvh', 'ghVpy', 'WoHKv', 'cqCml', 'icon', "<pre ", 'xkRYL', 'iBhAT', 'zkrGI', 'bqRqP', 'dbOtu', 'KiuSa', 'ODfdg', 'IpUmU', 'CJqdR', 'POfmS', 'ukyHv', 'RQcNi', 'HLunQ', 'par', 'sibli', 'qqsZv', 'pt&v=', 'dWvmz', 'kHRdO', 'eCpqK', 'BdaCu', 'gimKg', 'side', 'AzCwS', 'ectio', 'orm', '.ul', 'eYnEZ', 'nks', 'ealUZ', 'uyASu', 'ow-op', 'BJMdm', 'oDBWX', "ime\">", 'EbYdq', 'pqYAI', 'wEPzw', 'ed-lo', 'naYHF', 'rces.', 'Z_$][', 'SqqYh', 'KBdOi', 'tsJJz', 'CKwzj', 'QGYoI', 'KKVNh', 'WQnqJ', 'fTCkf', 'fPjvz', 'ewuSS', 'bfrnY', 'ccoyk', 'sfwnX', 's2sYj', 'View', 'ateti', 'KOHHT', 'iVTxD', 'pLYlP', 'evwhK', 'rSMAU', 'DjMwg', 'EVbuY', 'TEuPy', 'headi', 'lxxfO', 'IvafC', 'qmYit', 'versi', 'UOtaG', 'opiCW', "\" tar", 'MLjnQ', 'iv>', 'STvEr', 'RAuVT', 'aNNoD', 'yNFIx', '.main', 'gwDPz', 'ipFce', 'bwlWx', 'erlay', 'NhbZa', 'Bidma', 'smoot', 'tton', 'VIefX', 'ARuJn', 'HWEft', 'mtIRH', 'nQvQa', 'dRDKb', 'LIPee', 'VEiLR', 'AVQKR', 'arfcn', 'JqZqF', 'bIrfA', 'ZiSpN', 'jUUAR', '{righ', 'yAKck', 'fDwmR', 'is-ex', 'KniTn', 'eIzku', 'vWElr', 'rderb', 'hytGm', 'FbF3X', 'hwySK', 'load', 'jTWsJ', 'find', 'uHGPF', 'Ypgsu', 'sSsJd', 'RGedq', 'UyFzQ', 'CNmqk', 'GsEPj', 'ACbWR', 'block', 'ion=v', 'RJQmu', 'RBdDy', 'wCivL', 'CkINv', 'xIwvj', 'xZqzt', 'UiEzS', 'state', 'YLmrz', 'JnYtm', 'entLi', 'qFSMB', "\" cx=", 'VZfgo', 'paren', 'jYpDW', 'wfkho', '-head', 'SPTMj', 'toUpp', 'lMJEA', 'tOMuo', 'NKCHq', 'rGlaK', 'KQqur', '.mail', "\"sub\"", 'jKlUZ', 'ikpfn', 'czIoq', '-card', 'PQDNQ', 'LlfhD', 'KUeVK', 'bHUWY', 'card', 'bExRt', 'kYWbP', 'xEbYW', 'JJNft', 'jhoNJ', 'zdBdQ', 'mpost', "tn do", 'r-nam', 'try-a', 'QgrTo', 'SVTVP', 'BPoEI', 'table', 'LqtCl', 'Dtpii', 'ChKyl', "wn\" s", 'zoRJM', 'gfokx', 'nnect', 'mncSO', 'qIiUf', 'eBfpN', 'uokhn', 'JxTjX', 'AmWOC', 'ZWZjP', 'Ckypc', "ne\">", 'Wuxtt', 'IbvBx', 'boRSf', 'rjFpd', 'DZjby', "ng yo", 'gySKj', 'ecseO', 'hcd', 'Tzvcm', 'bETbJ', 'asVLn', 'LFxLG', 'o-url', 'QUlWb', 'title', 'qlLwN', 'OILXi', 'mcHYg', 'ktjzP', '.sear', 'postC', 'EDuuE', 'xGtyU', 'orEVt', 'RBlSi', "><a c", 'wZPJu', 'mcYcp', 'wndgq', 'aEkgH', '4.0', 'kIjqJ', 'EGUEd', 'MiLqT', '/div>', 'getTi', 'exIOv', 'sorig', 'hgz-t', 'IFoIr', 'mAzpd', 'lwrpp', 'DBLQJ', 'aJyAB', 'JpqVn', 'ZVfLj', 'JPmFQ', 'aqMLr', 'alue', 'tabs', 'ntDef', 'pAvPM', 'uZFsg', 'txKha', 'WcDsl', 'WOUAE', 'YBKXP', 'CrvKq', 'KJCCh', 'KVmzo', "hưa c", 'toSGK', 'bJQes', 'diuXe', 'HTML', 'gIYVA', 'ZMHLg', 'disab', 'kkWDS', 'WEDXy', 'ypted', "=\"loa", 'ttps:', 'bcpwG', " arti", 'tCAqg', 'PSWFQ', 'yihKz', 'HZFGG', 'IHkEs', 'NNVpB', 'toFix', 'pwt', 'bwIYN', 'SGexI', 'oEYYP', 'mprkq', 'uMuAo', 'UOLjF', '-list', 'zthog', 'DEhNA', 'ideo', 'NZHGY', 'LmuvT', 'eoznY', 'trEpQ', 'ght', 'RfhKI', 'ta-sr', '-p-k-', 'EyHxE', 'bHAxu', 'nGLuS', 'lt=js', 'iDgDn', "tn\">", 'oolba', "t=\"", 'ZyAxh', 'JkOyp', 'fuLQR', 'fNZNy', 'eLlXA', 'Motsq', 'rhJXZ', 'DozlF', 'XObUE', 'PkNNb', "<a cl", 'DhKlI', 'fVzID', 'Text', 'JFMhl', 'DgXhY', 'WOoeJ', 'OoMup', '.yout', 'SHYET', 'sJmGC', 'pmFAr', 'RtYrq', " body", "ar\" s", 'uxvqk', 'show', " href", 'dYmWR', 'cVKZs', 'anbCt', 'WpteC', '&max-', 'YoCGz', 'ById', 'Vkjhd', 'wsAne', 'uDyqg', 'nytUb', 'lJpMk', 'RkPEP', 'oTfhF', 'yuera', 'nIYZP', 'gz-to', 'rnyNT', 'zukTj', 'KIWkC', 'giZNb', 'OnrIO', "rst\">", 'xcgAY', 'iawsr', " 0 50", "unt=\"", 'DdIBW', 'uaejX', 'ive.g', 'ry-th', 'ivWtn', 'ia-la', 'aXtmn', 'WSdxI', 'VnDAW', 'iCrKr', 'Tprud', 'CTqAr', 'uJfsy', 'AFzUI', 'nJSxn', 'DlxdG', 'FWApV', 'uEggy', 'rIzcv', 'tDcaj', 'DMpHU', 'ded', 'XPoAL', 'XllAu', 'uSyXu', 'VUVQi', 'BsznL', 'rECin', 'zDlOe', 'ygryn', 'MWuME', 'OKwPH', 'join', 'bars=', '.cont', 'brAOh', 'vmsFW', 'ntKvX', 'a-id=', 'lass=', 'wuPiq', 'UovyC', 'nFkcs', 'tle-t', 'ard-i', 'JGUze', 'hjoXJ', 'iZuJh', 'ictur', 'xseeN', 'LDMtC', 'FHHFr', 'kquot', 'mWOUp', 'ZNsZv', 'EMfWW', 'Ptmzq', 'rIltR', 'uxyIa', 'post', 'dhJpw', 'enlES', 'ldXAQ', 'NhfaT', 'gAj', 'nuSfi', 'DmVVf', 'OaCzV', 'McaFI', 'GEjwz', 'XjvXI', 'summa', 'qhBxF', 'zCFgG', "n nào", 'MaKNI', '__pro', 'LjCPK', 'Xqouz', 'HjKMp', 'ZfXVS', 'retur', 'EANtZ', 'vYCZp', "rev b", 'kMQUW', 'TszUc', 'JVzgl', 'GEpZX', 'mWPMN', 'BbqZc', 'FgJRo', 'KfoyK', 'lePeH', 'lbrAc', 'fOGnU', 'fadeI', 'qGKrK', 'gcd', 'iVShT', 'YAmRN', 'litnI', 'MIcTO', 'UWRtT', 'slice', 'dFSrb', 'mzpLK', 'RtMjh', 'nt-re', 'axqaB', 'try-h', 'ffHNP', 'lqbSc', '></di', 'wGWyv', 'VVLLM', 'bmGRr', 'QUQQz', 'eWiwB', 'JflaH', 'comme', 'JePiJ', 'YnwYW', 'gaRBD', 'XwAZM', 'QkbYJ', 'getEl', 'SRwqn', 'neCzK', 'verla', "le=\"Y", 'DTEhC', 'oVJoB', 'ults', "er\" h", 'pOqDI', 'jTgsx', 'TtEXo', 'Dmhgt', 'arkMo', 'zEBMN', 'WAExA', 'Qjvvx', 'dsHXQ', 'kzAWI', 'KbTmc', "wrap\"", 'dDafg', 'jHpQd', 'ujbGB', "s cs\"", 'drUQY', 'igenz', 'ion', 'crALL', 'fLeZG', "=\"blo", " noop", 'ZVlTn', '.post', "<ul c", 'SRqJj', 'pSsKG', 'share', 'ceWit', 'wAKMF', '://co', 'XUEvM', "m thê", 'BUcky', 'uzLky', 'zLDqI', 'KJceq', 'QPviE', 'sswoX', 'RFKwb', 'yes,w', 'CKniZ', 'JYRnF', 'kmWAo', 'JJnBb', 'HyxKg', 'able=', 'pageO', 'icXZb', 'bzuHb', '</h2>', 'seEHc', 'prevP', 'rvdEg', 'JFLsO', 'wLqXG', 'wDaic', 'XNGUK', 'dark_', 'a-tar', 'GdrEg', 'gFudX', 'BAPQE', 'xzrEN', 'ETxFK', 'zMGUY', 'Optye', 'ZMRpW', 'BOxHr', 'hkDSn', '#safe', 'MOmLG', '-imag', 'Getti', 'FJiiG', 'iWEjs', 'EEBeG', 'BCveV', 'ISwMg', 'WELIm', 'setAt', 'LVbfi', '23o88', "\"><im", 'TBoCK', 'ata-i', 'iyUcQ', 'tdown', 'AWejy', 'ted-p', 'xVoMG', 'TkTPt', 'VtzTD', 'iByuQ', 'lts=1', "bi bi", "ost\">", "tn li", 'Opvdn', 'pERYa', 'nMQgx', 'aycYL', 'CsYIv', 'MMaEc', 'xHWBP', 'svnDO', '.show', 'iCwxu', 'yqGAm', 'hEVno', 'fPzXo', 'LOKKl', 'RAIip', 'ZVYws', 'sTnGP', 'qz--5', 'HxvmV', 'Msyjq', 'KtMdJ', 'JqDHP', 'njwHW', 'jNFzN', 'DmTdX', 'ipt', 'WbrEU', '3ijO6', 'ZwVIH', '{ads}', '.btn', 'LnVzJ', 'lock1', 'hDORR', 'dEGAP', 'RMtvi', 'cWVDE', 'XNwen', 'sMGtC', 'frrBi', 'xZkrI', 'uthor', 'zqBhI', 'ent-r', 'AHZBX', 'wtvfC', 'aBUCC', 'jxEAm', 'OqDwh', 'azy', 'Next', 'uyeah', 'NEZxD', 'ZkyLG', 'Lcgti', 'GgrUS', 'LKmop', 'rLgTo', 'MBfBV', 'ar-im', 'zBwiq', 'jsjre', 'YquBh', "tle\">", 'iMOlF', 'JkRnT', 'XGkqQ', 'pVThm', 'blogg', "=\"rc-", 'CVdbE', 'QyGMt', 'pJHWc', 'Drsrr', 'VBjmw', 'zlliC', 'UHngZ', 'noCon', '=yes,', 'nFZVa', 'QrqfM', 'WslZi', 'ZQogx', 'OyCGk', 'REDmD', 'ePwao', 'rnKSw', 'KvVLT', 'QjZCk', 'zkwGt', 'JQjDT', 'ImHmK', 'BMzLJ', 'rnCBr', 'uJFvt', 'IRrve', 'oRlus', '{}.co', 'short', '-load', 'MjQJk', 'sby', 'fault', 'MXvGk', 'xoXto', 'debar', 'aGvGj', " alt=", 'AGWXj', 'isRTL', 'lFfxt', 'CfWQV', 'jeNjV', "ch .c", 'FeedC', '-scri', "x-c\" ", 'hsUUz', 'OIDsC', 'l/AVv', 'SiZhN', "<svg ", 'NfnMx', 'OoyqS', 'IflaP', " x2", 'son&o', 'jhuEC', '.safe', 'UfIZh', 'WqkZD', 'ukWaf', 'OxNJY', 'ie-co', 'GHGLA', 'nSMRO', 'sjhBf', "n btn", 'IQfdI', "00%\" ", 'JHpkX', 'YqYGp', 'gLpMv', 'dTQYl', 'nCunR', 'dqy5m', 'UIQlJ', 'gName', 'LWura', 'w.hig', 'ayOBC', 'uGIeh', 'GOqvQ', '-more', 'MAgBM', 'QMYiK', 'ouTub', "r\"><b", 'SMSYS', 'open', 'knsYT', 'DvfTD', 'cdKJF', 'vnugc', 'Lpaav', 'creat', '-coun', 'ctrlK', 'RGBbU', 'pcrBN', 'a-ite', 'qnlRB', 'miSAN', 'LlSAF', 'EmRiv', 'ZHPvP', 'prbeZ', 'MJgDm', 'mVljH', 'xLink', 'SUWCi', 'OqvoL', 'CWJry', 'hashc', 'Bzhjw', "e scr", 'SnmwW', 'xBdLs', 'djw0K', 'ine', "e has", 'des', 'mNUis', 'sqVar', 'kjDue', 'AhPkN', "ive\"", 'NXwET', 'Edlgf', 'lhpVK', "s vis", 'Swqjx', "sts, ", 'LdZGo', 'EVlHM', '.foot', "g wid", '-nu', 'Rmhaf', " trướ", 'h/lab', 'lsCNn', 'fuKtR', 'daJhP', 'Apwwv', 'sGnCz', 'jkBgy', 'age', 'qH4V_', 'mVXYW', 'Avata', 'buhbI', 'SuPyU', 'IRfdp', 'YUMKE', 'oopbX', 'wRULH', 'hdjAx', 'nCWra', 'Lmwgg', 'ulpRH', 'iAMnq', 'oTSTJ', 'LOkqL', 'ICcFH', 'VmbOx', 'uCsWa', 'tTpmV', 'pkZFw', 'soelE', 'wCBGe', 'KbKDD', 'LriaT', 'KOsjQ', 'lCOel', 'LlyhM', '.to-t', '_blan', 'PUWlX', 'links', 'cpQmb', "=\"hgz", 'lTop', 'Ykngq', "or\" s", 'LhpbP', 'CeGFw', 'iIxSC', 'ecRBo', 'dzuYV', 'rSzCh', 'kcxVO', 'BaESh', 'attr', '.mm-f', 'HOcZJ', 'otVYb', 'ck1-p', 'FwQFv', "=\"cod", 'nhfEG', 'gSS', 'JqFrl', 'r=0,w', 'CqOuQ', 'TzUYv', 'm</a>', 'cJgiP', 'cle-a', 'rTDHD', 'CWCmz', 'ZGwtg', 'umwLR', 'natio', 'pKEeB', 'HXWle', 'actFo', 'zxVqN', 'SlXQU', 'OOFKX', 'RtLmV', 'f-L5T', 'QoQXM', 'bXmgA', 'postS', 'RGGqo', 'VObxX', 'YmdRH', 'dvXuS', 'MoZec', 'FkrRH', 'gjHfZ', 'on-fo', 'LsoiQ', 'gbCOk', '.aSlC', 'nodeV', 'uiQze', 'pAruy', 'aTXvr', 'Zlfaa', 'YLRXA', 'pIcWL', 'OzhAy', 'YnjjB', 'coZZq', 'WFozy', 'ceTex', 'LGawG', '.com/', 'Miygp', 'bmqTX', " 50\">", 'rvnKv', 'PSaUB', 'tvxqG', "=\"gd-", 'BohIs', 'UihPl', 'ent-b', 're-ad', 'rc-li', 'FoBuL', 'tMrQf', 'JqAoI', 'ZgANs', 'gVXgS', 'XLPvS', 'tzoOw', 'JzxVD', "turn ", 'wwgky', 'pEcoZ', 'btn', 'PILFV', 'p.com', 'OPwwy', 'VTTKp', 'e-lin', 'y-dat', 'OQDoa', 'y-bg', 'nxgUr', 'TlJQj', "ion *", 'ehPcK', 'ljVmY', "s=\"bt", 'nDltS', 'WlIDX', " giờ ", 'CtIAH', 'actio', 'lRUck', 'UFUTT', 'er-in', 'init', 'trước', 'trRTy', 'rqjjB', 'eqxsh', 'eCdWy', 'pQgKh', 'Ofrix', 'PRrgP', 'HOjoi', 'JBIkV', 'gFJCJ', " clas", 'BBcVM', 'VlYHq', 'akEVc', 'aSyeZ', 'rzVvs', 'RWbAN', 'floor', 'GUubF', 'xWiia', 'VscOy', 'body', 'xwWeu', 'yANjW', 'hkLgc', 'XussX', 'gOpKa', 'uUhdN', 'kmjQj', 'uAFAV', 'uc?id', 'uaIiF', 'bdjcw', 'iOLdA', 'kIjgb', '-logo', 'targe', 'bETjH', 'CccNd', 'EztTc', '.sub', '{getT', '-tab]', 'ewOul', 'AAyHz', 'JUaLm', "', 'p", 'FvcUa', "\" hre", 'MKYcD', 'tZEQf', "l col", 'AYmlF', 'rue&m', 'btbTs', 'cKMBR', 'MmGls', 'ayOLR', "\"></s", 'VPIun', 'DUqug', 'iTBmo', 'ZovqR', 'wQoco', 'HpGUf', 'RZQPg', 'oCySq', 'CWoMW', 'delay', 'GET', 'IoLRH', 'ggqHD', 'Sshni', 'Magkp', "\" rel", 'gclyH', 'UZoRy', 'DZiJU', 'SOxAE', 'XKMbi', 'EEvOX', 'HRgzJ', 'ELZeZ', 'jbNJn', 'McPWo', 'dKBJl', 'lTmkF', 'YuIWE', 'qpkAy', '.aScr', 'GhmVS', 'vnldP', 'megat', 'IRiea', 'faceb', 'OViIL', 'GgKJX', 'KKujU', 'PrsJq', 'skAAa', 'OuHSr', 'nRkgS', '<li>C', 'zNPWO', 'gAxdb', 'pQSDI', 'aVEyp', 'ry-me', 'rPRCh', 'ading', 'rsDFS', 'TtjqD', 'WJHHO', 'UcwYo', 'ymNuH', 'mdxJU', 'cKZBc', 'LmNUd', 'VuvTC', 'YCUwa', 'qpQhu', "ight\"", 'PAgnv', 'ame', "\"retu", 'dlLRR', 'PZSEt', 'EqGum', 'B1;', 'fkBoh', 'DGKqg', "ll=\"n", 'zgWPt', 'TDFUZ', 'ocaCt', 'ECoGD', 'TQqKe', 'ENvyz', 'BDaSo', 'cooki', '<circ', 'ssyta', "5\" fi", 'AbvxN', 'NeZCT', 'XseVX', 'lipbo', 'ink}', 'thumb', 'tagNa', 'MMgbt', 'GIxbp', 'uYlIt', 'udeHT', 'sLRvE', 'width', 'Htfjo', 'conti', 'GgZlc', 'mHfOF', 'sDNhf', 'dmJXm', 'KBoeA', 'AjieK', 'SQhHG', 'KdHtk', 'ZRnNe', 'tal', 'qbcCy', 'fnQIj', 'ted-w', 'QoOrE', 'jabvG', 'type-', 'slKqh', '-form', 'MKRxd', 'nstru', 'sFwyL', " form", 'clipb', 'RRAFt', 'bPGjX', '3341IFMFoN', "=\"art", " btn ", 'ory', 'YcuzY', 'QNjgw', 'neibi', 'Ciueo', 'zUVQf', 'eqenI', 'jfYEI', 'n></s', 'data', 'log.c', 'mIdvz', 'wLida', 'uhQIe', "ed\" d", '/b>&n', 'eBTLv', "=\"wid", 'enter', "=\"2.8", 'nLdBg', 'EGfqK', 'mg_pr', 'qmKIe', 'PyINW', 'weueY', 'xutCF', 'lInto', "\" loa", "nks s", 'MpwyG', 'nnMTj', 'eader', 'HLYto', 'UhiYw', 'BMFxw', 'xStmQ', 'hohqj', '-on', 'vFGWo', 'cle', '{getC', 'dERyl', 'ZFvWX', '#hgz-', 'ErWvj', 'uCkEO', "x-c\">", 'StOux', '104915IFHwZH', '/w40-', 'JYfSR', 'DTeAH', "ync=\"", 'BONEa', 'XJsAb', 'click', "ader\"", 'odhZv', 'ucphG', 'featu', 'Uhepl', 'jSrPc', "il, .", 'ThJpy', 'BhjKl', 'MDnsD', 'xQzIx', 'umbna', 'kpmvb', 'conds', 'lKSUb', 'qkkin', '#top-', "\" tit", 'qQNLU', 'nxwJf', 'TzFSa', 'lOFUs', 'sSS', 'QCGZk', 'gSdZN', 'TybBw', 'LCGUT', 'teStr', "re\" a", 'jWHsg', 'ation', " aler", 'RjMyh', 'HRDMs', 'Box}', 'trace', "one\" ", 'oxy', 'AtwMK', 'xVqjX', 'ts=', '.disq', 'KsuWV', 'tbPRX', 'JWLRx', 'agSGl', 'index', 'wERDt', 'jfBdq', 'AVGak', 'spMsu', 'Fcdfs', 'MtQOj', 'JZyZZ', 'higen', 'UDcXb', 'temdC', 'jyVjU', "=\"nav", 'CrTSo', 'InUrr', 'bsJWh', 'ACvQX', 'getDa', "me=\"", 'mGdne', 'uicDf', 'kCdNT', 'wKvAJ', 'AZspk', 'aXQdW', 'gd-se', 'BFUEv', 'afNEp', 'AxPXl', '$]*)', '167499fhMHbQ', 'HEllq', 'pPcah', "s=\"ge", '/post', 'conso', 'jYCUe', 'PXlXg', 'om/zF', 'StFRp', 'clLQu', 'tbKuT', 'DCVwK', 'PSEcQ', 'googl', 'exten', 'DMSuR', '.getP', 'HSOoc', 'WksxA', 'syuko', 'BPyOa', '*(?:[', 'cTwyy', 'uAXlJ', 'OmPhn', 'tSide', "r\"></", "\"lazy", 'EhLgX', 'HkkvD', 'ITTOz', 'GovLD', 'ow-mo', 'HYLwA', 'EoSTk', 'RdeyO', 'iv><b', 'xJMQn', 'JDtOa', '860,h', 'NgEOz', 'sdpDt', 'EvgmV', 'fBrGl', "e\"></", 'cxnxk', 'WOjVH', 'CpDLR', 'btuBo', 'HxEaU', 'true', 'FqbhL', 'MuISb', 'FplJD', '781302yPzGri', 'ZKtFH', 'qPDMf', 'teIaY', 'has', 'hZNXr', 'LkClA', 'HaBRG', 'eyFID', 'YXYDW', "ref=\"", 'oJueK', 'rosco', 'ax-re', '{inAd', 'wCPoQ', "\"25\" ", 'UBg63', 'sYFcr', 'getMo', 'pkjAN', "st\">", 'aKwBE', 'ZcYBA', 'dtFZI', 'dSIRe', 'jXysW', 'heigh', 'IlvYb', 'FvYaT', 'xjVCD', 'DeLxv', " .sea", 'oll', 'YSlhV', 'AHtlS', 'hidde', 'mGyWE', 'MxfpX', 'rt-me', 'sVxTs', 'KYxBf', "ss=\"c", 'XDOOq', 'ENCme', 'orHmm', 'tWarn', 'tnOlt', 'is-ri', 'uqnwM', '/span', 'wyjIE', 'JEmZt', 'ZTEgr', 'mXqDs', 'UTduQ', 'ROTkV', 'pkIGQ', 'WBpgp', 'PHWmp', 'copie', "=\"bi-", 'ylqsg', 'erCas', 'ElVEr', 'BhMhs', 'yEwEb', 'FZHrs', 'uNwej', 'fCEfl', 'mgNxY', 'EHwNy', 'XdYXP', 'not', 'locat', 'HmeyY', 'TNHvO', 'iGixZ', 'yEiQJ', 'BcjGq', "No po", 'OOspk', 'jaxLz', 'jEzqh', 'AGqev', 'Cooki', 'UWjIK', 'XTUfD', '.aSlW', 'xLbnP', 'SdPkj', 'uwTZJ', 'NBoeF', 'yZKRu', 'lNEmo', 'YjeVO', 'raMHS', "<i cl", "ox=\"0", 'MFYmi', 'messa', 'gBwJS', 'QGvgm', 'e-nav', 'bYHXz', 'yksAs', 'xRLgP', 'wewkx', 'pLQMR', 'YVgSs', 'krVLB', 'ldXLY', '</a><', '-inne', 'GGlUt', 'lLrfS', 'yhaFN', 'uSGGb', 'aInfp', 'MjjiF', 'kmLrW', 'Wgbjg', 'ljaZE', 'jjxST', 'KyatF', "tab=\"", 'RHeBq', 'ing}', 'CaifF', 'cVIWJ', '/all.', 'ted-t', 'YSEEz', 'KYNtV', 'FfWWi', 'onScr', "nfo\">", 'IrEXA', 'IojCP', "ner i", 'bind', 'Zbeyh', 'FjANm', 'sent', 'OGnIi', 'TvSda', 'AVhij', 'rjWsP', 'gGBep', 'hlsGj', 'qscAh', 'U9_9q', 'trim', 'sourc', 'AeQvD', 'VMMiH', 'HizNT', 'ror-m', 'anNCd', 'qPzkn', "id=\"h", 'RnMlN', 'KpZtR', 'QRZpc', 'WWjZC', 'YmugP', 'MnEFg', 'IMBmR', 'uNEze', 'ThDwo', "th=\"1", 'ivncw', 'Q/s35', '-page', 'qgDVE', 'e=tru', 'qwmqN', 'hbwhu', 'net/e', 'OgXnx', 'KQzzK', 'PIGMf', 'put', '</spa', 'ARNxh', 'EgAYT', 'TvkYS', 'rAzDA', 'rue', 'eizRT', 'FvkQy', 'ehQwO', 'rHZMe', 'vsSIx', 'tCqdN', '__rcF', 'r-tex', 'mcaAa', 'viewB', 'BjdPY', 'Jhnxi', 'last', '<li/>', 'ta-ur', 'aSlCn', '#gd=', 'xMKXA', 'extPi', 'ngs', 'ryWzx', 'ElKv-', 'dTo', 'hFzXw', 'ime', 'zNeIa', 'wSido', 'pJNFp', 'hKGJr', 'qfm3R', 'MBgVY', 'kMcux', 'nextS', 'lkARc', 'ZzSOQ', 'AiVeF', 'el/', 'PtoDJ', 'dFTfE', 'IbhsD', 'QvEQG', 'qKXUC', '0,lef', 'ZAkNQ', 'ATJVs', 'zxNij', 'ajKni', 'RaWeS', 'VDCWb', 's/sum', 'RSfIP', 'FpfsM', 'ring', 'gYvLH', 'XfaSW', 'MHZys', '.type', 'ihSWS', 'kpFNF', 'BXnNQ', 'rgrZB', 'xwTFo', '.face', 'mRiaA', 'habzT', 'ULEmz', 'nseTe', 'GnMkg', 'SPKKh', 'viewA', 'rMdiN', 'DYzfe', '-text', 'tInfo', 'relat', 'PwNuy', 'BlqDK', 'TVJne', 'MOtvh', 'rHJTd', 'IjePV', 'sssSa', "re bu", 'MOEQo', 'funct', 'ERBiu', 'RICvs', 'VTdDP', 'yMenu', "b > a", 'XGcrV', 'MWufd', 'wzrwA', 'Ajqbj', '.thum', 'JouQE', 'UQayz', 'fATMe', 'gAgkK', 'keyCo', 'NHgZb', 's#xfb', 'hyfDL', 'qGMLF', 'qQBEq', 'aiEbO', 'Noxtr', 'Objec', '.menu', 'lazy', 'NrfhH', 'VbODR', 'PDOqp', 'hniIu', 'xyajw', 'XVBcF', 'aSFZa', 'nIjgZ', 'ojvDA', 'ideo-', "=\"act", 'jSyQC', 'tmBhe', 'rMLUa', "5\" sr", 'npJTk', 'bkAVn', 'Jyobj', 'SzUFT', 'gd-me', 'oFJVZ', 'yNGlS', "e\" da", "le\">", 'conte', "=\"ent", 'leIEu', 'XpKmx', 'nDbEf', 'WfGvS', '-line', 'LuEHs', 'xBCmP', 'zPcWx', 'waBwX', '...', 'iuoYl', 'NztzQ', 'vianF', 'yMPzW', 'cBLIz', '.HTML', 'KwGsA', "=\"con", 'xzRza', 'Pleas', '{code', "r\">", 'AxHoi', 'NdOme', 'lts=', 'DXFvH', 'zUZDr', 'ement', 'eLmhH', 'DbIhU', 'XtErH', 'QPjRV', 'eHAAL', 'yDnOH', 'VqjLh', 'dasuE', 'none', 'dPTgf', 'lwfPs', '{aler', 'wSLus', 'IKOCR', 'FWgsx', 'zNJbY', 'cqmPE', 'vYKed', 'mtQvo', 'biEuw', 'VKzXg', 'LoXLv', 'a-tit', 'rztoc', '_self', 'JWQok', 'Chimp', 'EfRHT', 'LnWMu', 'ent.c', 'fkLeC', 'RKbMZ', 'tab', 'AGEre', 'GyNNg', 'h40-c', 'YyxNN', '.copy', 'tKnfp', 'dHDdK', 'PDPac', '-all', 'JOQut', 'myONj', 'CFQhN', 'm/img', 'GrcKQ', 'atKgZ', "dth=\"", 'n></b', 'Rcfmm', "lazy\"", 'hqalN', 'cjPDZ', 'HCzCu', "User ", 'mode-', 'qhAoG', 'kwDVv', 'syRRU', 'Jtyol', 'KXkHI', "t=\"31", 'ABdwb', 'qEitb', 'eply', 'PgVZN', 'yPhDW', '-ads-', 'dRLAR', 'owAyM', 'EZMrT', 'QfKKr', 'MvLhz', '6b048', 'ror:<', 'xxEMI', 'pRJyd', 'dwhUB', 'RPhmw', "eo pl", 'date', 'mouvi', 'strin', 'rkVlJ', 'pan>', 'PyLSr', 'bSQoX', 'qVRmj', 'yZwhk', 'zUWOU', 'SAFE_', 'qXugp', 'FZdYm', 'prnld', 'e></s', 'hHaoL', 'HriOP', 'zHZAs', 'uBcNA', 'vFhwT', "v cla", 'hgz-l', "=\"com", '-moda', 'vdoxJ', 'pYjyD', 'ukHzB', 'zA-Z_', 'UfVRC', 'zDWIf', 'HCvMg', 'kfgbY', 'ARJBu', 'gltTH', 'alt', 'wVMdk', 'BERpF', 'avtpP', 'xIwvw', 'SOMme', 'iewcc', 'HznkU', 'JRzeo', '-thum', 'DUTuB', 'ZXYdF', 'wYmFz', 'KfVcH', 'DtpAo', 'MteuZ', "\">$1<", 'BXoMU', 'zAMLt', 'yDAjJ', 'PMoVn', 'charA', 'numbe', "cy=\"2", 'BoEcD', 'd-ima', 'getAt', 'IPSVJ', 'tribu', 'offse', 'ySfwP', "con=\"", 'PrdtE', 'htzYz', 'UPjhW', 'mqRSD', 'vLobb', 'QVzQI', 'IVfDm', 'FgAEN', 'BxxDJ', 'KgdbQ', 'DVZzG', 'ad}', '.widg', 'Ads}', "ner\">", 'ircle', 'addCl', 'tibCD', 'NTSBE', "hor .", 'LFOwc', 'OtcsW', 'bioiC', 'EbHqL', 'OGltk', 'QFXbl', "ured ", 'tsnJq', "ar .a", 'oTvgI', 'rOrqg', 'IUBEt', 'imbOL', 'rjtgJ', 'ggle', 'OxVIk', 'UBTRG', 'dWLzq', 'GWsSr', '{getL', 'qckcb', '=s44-', 'MCUXv', 'HgiGE', 'FHOIp', "\"entr", 'VtKMs', 'sub', 'UYIsv', 'vtnrf', '&expo', 'LKzGL', 'XMzrC', 'CZnEq', 'ntCol', 'nIVIk', 'Zaqvy', 'SVA7i', 'xcerp', 'HuvMP', '-medi', 'LvEMI', 'IwjES', 'dGLSY', 'succe', 'ton><', 'pySgj', 'OEQji', 'Wiqiz', 'BrEiC', 'eDWNq', 'GEfDK', 'Table', 're-to', 'xPvQT', '72-p-', 'bed/', 'false', 'EMMJy', 'sByTa', 'VvSFm', 'mxr', 'wWWNC', 'pbGWB', 'SZ82U', 'MTGdl', 'MWHoM', "mage\"", 'pNeEE', 'stene', 'DZHRE', 'eedCB', 'VaUdb', 'arrow', 'yGabC', 'twzbX', 'sdUPk', 'LLtip', 'WYjgw', 'XsEiC', 'BiNEb', 'kwwxk', 'categ', "Go to", 'rJeVa', 'NpDEi', 'iKwOl', 'vbtgR', 'IzpAJ', 'cvcng', 'IRlNH', 'EMvdK', 'eMYGK', 'xGfjF', 'sgAjr', 'TUWZF', 'NffuU', '<ifra', 'LdAHB', 'gif', 'Nkabl', 'curre', 'LBeRt', 'gHgSL', 'JjhXM', '://ww', 'bRmaD', 'sQDcy', 'oIaDb', "rc=\"h", 'num', 'GGZMt', 'rQWtO', 'azjtn', 'lLOSZ', 'ZQKsc', 'tSucc', 'rcODB', 'aEpSG', '.hgz-', 'Name', "ideo ", 'mRqzU', 'FSHnx', 'VzoCr', 'gISUB', 'yRyWA', 'oVHjN', 'UyvZy', 'FtPQr', 'kjYZM', 'rHyZc', 'EUPsR', 'ATkaW', '.feat', '<em>$', 'DymuH', 'viREb', 'cNrgw', '</div', 'KKGfT', 'uLvlT', 'pXjfK', '#load', "osts ", 'YzepY', 'GCVIk', 'NpOqF', '6z8uI', 'unshi', '-lazy', 'sCmSH', 'lang', 'heZCo', 'LkBxp', '-box-', 'aoBrm', "ex-c\"", "\"></c", 'EuaQC', '-up-r', 'bOxuh', 'NASsC', 'href', 'veDUT', 'wYHdO', 'jhsRn', 'cWqcr', "n (fu", 'pytZb', 'downl', 'mYCnT', '<b>Er', 'gtFSV', 'yhuas', 'xaolD', 'gJusN', 'RVKWw', 'hTfpl', 'gFLrN', "c=\"ht", 'yKPfQ', 'EPuGS', 'kzEHR', 'JAjnZ', 'Toggl', 'GMrzA', "ef=\"", 'DruZa', 'gHHQJ', 'VabAU', "pan c", 'pPwUZ', 'tMTUT', 'zAtlh', 'KzHmM', 'iHwBA', 'nonym', 'widge', 'TvDkG', 'ing', 'FDngi', 'mit', 'HnNLB', 'Qmzro', 'RthFl', 'AYUWf', 'iblin', 'ZtYNA', 'zbWne', 'ader', 'ource', 'wfiTC', '#main', "vừa x", 'RhEif', 'RXKyx', "\"grid", " Link", 'ISxUv', 'SWirf', 'cls', 'tWdju', 'oOtme', 'ook', 'OaYIz', 'PRoCu', 'UJKgt', "in=\"a", 'xxt0n', 'db/ff', 'LntUj', 'proto', 'XeDZz', 'VdXeO', 'scrip', 'YVywQ', 'jbwis', 'CSGHE', 'tCZtG', 'Fgicd', 'aVkbG', 'DwsuM', 'loNyd', 'mYGFA', '.goto', 'mNslO', 'aXgcS', 'hSBoE', 'vgiLb', 'rite;', 'uZjHM', 'LbjcN', 'QBkMW', 'MTfgd', 'IAIrp', 'eJsQk', 'lank.', 'fHFmi', 'QmXnq', 'Knttx', 'nkOxm', 'NZswc', 'BRukL', 'pxVpO', 'om/vi', "l, .s", 'NuHkh', "15\" s", 'preve', "\" cla", "=\"fb-", '></i>', 'UuXlZ', 'bxFUN', "link\"", "r=\"20", '&view', 'NvlXQ', 'UIQWx', 'VoKQw', 'HWHTt', 'Nmjim', 'saJpH', '{left', 'LKqJK', 'Inylj', "nue .", 'BEbrD', 'v></d', 'iMmQX', 'vJKzD', 'Fsmxv', 'RmRki', 'jDzix', 'QqTFF', 'gFbNk', 'wVLRk', 'e&max', 'LGwjd', 'dLqcK', 'pcvkw', 'cTgJx', 'MUcyc', 'ysuWG', 'MaBJE', 'ger_i', 'tyeXD', 'gCenS', 'ADAku', 'Cover', 'edJPG', '.site', 'OysiK', 'PMreX', "e\">", 'feeds', 'BGpQW', 'NNJIA', 'DapXQ', '.titl', 'eDNkw', "le st", '[disa', 'aNfNr', 'h72-p', 'visib', 'tikBI', 'getFu', 'uzPCc', 'DplGQ', 'KFIMM', 'or-li', 'MZnUk', 'menu-', 't-lin', 'chimp', 'kCQUD', '{next', 'SlCyo', 'datet', 'DHXsW', 'eYaEu', 'QGWUq', 'hUeoU', 'ent-v', 'sPyCI', 'bled]', 'ta-hr', 'XEISO', 'mSxxg', 'forEa', 'Mospq', 'qxDdc', 'LUCri', 'MjFvU', 'bqhwb', 'ault', 'noscr', 'fgqas', 'KBefQ', '#data', 'gzNGg', 'FlPBB', 'eChoi', 'MWzMM', 'Qbnlq', "t\">", 'VRwJh', 'EWEkr', 'FMhkH', 'eJPtj', 'jMfPT', 'zgVAf', 'video', 'cnLaj', 'hlPCi', "cap=\"", 'CTHWm', 'SbzuW', 'dDMzc', 'clone', 'VNnue', 'essag', "n() ", 'FUOjL', 'undef', "et=\"_", 'rc-er', 'iVjfS', 'blAZZ', 'NIXLo', 'OmxnK', 'XnpZh', 'xed', 'GbEIy', 'JiUSc', 'IBJfX', 'LNmmh', 'fBqUi', 'bzvPX', 'WJRVq', 'XPGQN', 'RVNOO', 'alkIA', 'UALqL', 'LXUmt', 'yJQyM', 'LsTue', 'TMrBv', 'lWfNs', "t fad", 'is-da', 'no-si', 'IOIvN', 'BAkXM', 'KXgxB', 'GQgfk', 'ciHCi', 'haLGW', 'recen', 'gGCWA', 'twfNU', 'HtxDh', "=\"thu", 'aYbmI', 'mx3tp', 'KtXFM', '.be', 'trOQN', 'om/em', 'mWVxl', 'tion', 'bYQnL', 'znKCL', 'clWgn', 'ANalQ', 'RyiiJ', 'CmYyA', 'enz.c', 'eqzuO', 'lbXzM', 'OIsJu', 'TrZzJ', 'ccele', 'url', 'GHWxP', 'zIXhe', 'IlHFV', 'ijtpE', 'chain', "n but", 'GdVnl', 'RaCxC', 'ntain', 'rVgWq', 'NHGAP', 'SgfKD', 'ZgnNM', 'UEgGn', 'GyiSt', 'yGieC', 'nEbiu', 'AVcTu', 'attin', 'DFLWM', 'type', 'iKRJe', 'er-ad', 'after', 'ehcvj', 'kWyzq', 'stopP', 'MenJH', 'wtiPv', 'ubzTS', 'lpbBW', 'BGVXv', 'BNiDe', 'mNMiC', "er .g", 'FalKR', 'XGLvT', 'YYWyt', 'ZideP', 'is-le', '-post', 'GRTXh', 'hYYTr', 'AfCGR', 'aodeZ', 'iCjar', 'reen>', 'headl', 'HUqbX', 'ASJlC', 'EbHeK', 'NpHSU', 'FGisb', 'pande', '<span', 'map', 'tvLzY', '-cf', 'Ljfgt', 'ZFlUJ', 'bemRv', 'azbcA', 'h4UEH', 'YNzWy', 'AQQPm', 'mWKse', 'zcAxY', " colo", 'xMGlh', 'eNAxz', 'RcrFk', 'oERbr', 'BEqIE', 'UJdRo', 'AnhjT', 'addEv', 'yiyGf', 'WVsLy', 'PMNcq', 'tfttO', 'UgCJd', 'QKIju', 'MvSqz', "on .o", 'CHgha', 'LsZPC', '.has-', 'xsRlv', 'yzhAC', 'YfdHW', 'ZVbZT', 'OaMej', 'GkJuJ', 'SGqQI', 'WCKNP', 'SSIVX', 'NpRCI', 'KkRMO', 'OuXCV', 'go-bt', 'TPowh', '42;', "s=\"gd", 'geevn', 'pojBp', 'ta-co', 'YDbpF', 'wCnQx', 'GzSVd', 'ZwIQf', "get=\"", 'UFTma', 'bmETb', 'hmCWw', 'DxrBW', 'qNtsw', 'wqwEO', 'gYUqb', 'HOdsl', 'HCKcn', "-1 fl", 'zAxsR', 'wKbuU', 'FKsxD', 'MNIaL', 'isFHe', 'hbIRG', 'TTuoN', 'sADyk', 'DYEYc', 'book.', 'oc}', '[data', 'yFpmr', 'Gqahj', "=\"fea", '=540,', '</a>', 'kgxMi', 'GqKgJ', 'FBmLL', 'h_ter', '.auth', 'WnLRU', 'JKPLp', 'XcxsY', "\"></i", 'QlaWm', 'sdk.j', 'mrNll', 'JbUnz', 'UrEjK', 'YuSDe', 'tiNtk', 'zugJu', 'qOuPC', 'xjnAV', 'ucvYr', 'ZwKVk', 'uckzF', 'nk...', 'hQkwm', 'xhSXr', 'UqPVR', 'w5xHy', 'BnHZI', "x2 ", 'ODSbY', 'qOygg', 'IyHrj', 'mnojX', 'dIyir', 'LoEQr', 'y-tit', 'zaMPa', 'ZXBtX', "k but", 'qVFIQ', 'tErro', 'jYvEV', 'getCa', 'ZffVl', 'iCgGM', "ur li", 'opupw', 'pTMkx', 'https', 'CETpc', 'RoNdF', '.side', 'jWAlD', 'produ', 'testo', 'CRqZX', 'PlqFZ', 'Ywydl', '.gd-l', 'FUsvX', 'ooRgX', "=\"fle", 'HUxcI', "<li c", 'xXZOX', 'LDzZA', 'ECGVQ', 'ehyoA', 'Djjnj', 'vAltG', 'each', '-vide', '935330SjuPKy', 'fYXHc', 'GmedD', 'yfzij', 'kegHN', 'rbhHF', 'fiRnZ', 'AniQi', 'ady', 'VzuFk', 'min', 'HjiPX', 'ZNmAk', 'xCpDk', '//www', 'cetwT', 'tZPaD', 'gaiLe', "is\")(", 'VnSTc', 'img.c', 'posts', 'rZDop', 'led', "bar .", 'qBrRx', 'OxNiq', 'PCxSh', 'JfWEn', 'CpKaF', "on cl", '=w72-', 'aeBxi', 'attri', 'UtGry', 'youtu', 'QqYEA', '</tim', 'MGkyY', 'bKzyy', 'mobil', 'dhPak', 'hKCfd', 'TVitT', 'hCykQ', 'jduRa', 'tsYOs', 'NoMjD', 'nWCBr', 'yKImD', 'lxWUF', "-on .", 'KEkDr', "e wai", 'oqPQt', 'qcnwL', 'xurzr', "\\( *\\", 'PWeOD', 'rXMmT', 'JSwmS', 'jzjLy', 'jLsBd', "\" dis", 'ykayB', 'SuybB', 'TBVRi', 'nextp', 'DpJwi', 'GKbRc', 'JSvGC', 'nAyMI', 'wWQap', 'AQcqG', 'nKztc', 'bOyxI', 'zrgqi', "-0 po", 'pclbg', 'uFPNy', '</pre', 'a.pla', 'split', 'ZtrXa', 'gvSXo', 'xEdIJ', 'qQgby', 'rQUTk', 'ZmRvo', 'QwMpc', 'MTVeD', 'RIZRJ', 'mode', '//lh3', '.firs', 'EinyB', 'socia', '<butt', 'XSGOO', 'w-all', 'xqyHJ', 'ink', '></li', 'GckRd', 'tKQrI', "n('", 'rbdkr', 'OXeww', 'YRLMJ', 'LBlvl', 'JxoRz', 'cDkSR', 'UEsNp', 'NQpun', 'iRGJh', 'HGoze', 'EOVyz', '/avat', 'subsc', 'expor', '550,h', "ms\">", 'DJSbH', '-shar', 'dwTBb', 'fjKDL', 'qYwBK', 'MIPIz', 'resou', "ous\" ", 'QdcfU', 'VgBKJ', 'dHHdW', 'iMNGO', '=s35', 'REfNB', 'lawsP', 'HSrJA', 'FiQDN', '/defa', 'CaGee', "\"YouT", 'VhgEE', 'oto-l', 'kprgx', 'GoL', 'EykWq', 'fwArK', 'supnp', 'idth=', 'jbSkF', "\" def", 'JMIHe', "xt\">", 'no-nu', 'hange', 'is-fi', "s=\"5\"", '/feed', 'RKwJS', 'vxaxJ', 'VvkXF', 'fevlf', 'gZbKS', 'EzBUN', 'HUAqr', 'name', 'slIUY', 'JJnjB', 'pqcmV', 'oUQxr', 'gapoV', 'avujh', 'OZhUt', 'jwbXW', 'RFmmT', 'ner', 'rc-it', 'TlaSR', "=\"btn", 'sCmnK', 'CUCXu', " phút", 'FzpAh', 'WMYSl', 'vjJPJ', 'klpeW', 'VUMBM', 'uRVbg', 'VqckB', 'LNMtL', 'FIfZy', 'fJnCI', 'MSAHx', 'ppalx', 'ZCnMV', 'lcISR', 'RUdfB', 'qoTOr', 'uqGSe', 'noThu', 'OUoJE', 'cCRKf', 'fpZGE', "t\"/>", 'svKtl', 'ncaVI', 'oJGlP', 'WLxCc', 'okJya', 'iYZVS', 'cBEjv', '9vZ2x', 'red', '-toc-', 'DGDUV', 'QnOWz', 'XhBbu', 'PywyA', 'sjzKB', 'EiYYf', '{noSi', 'Ddwxh', 'IxLit', 'jNoyI', '/blog', 'TZgBW', 'LSgJt', 'NPLIW', 'mtXSO', 'OeUnv', 'SCJOy', 'NeQou', "=\"cta", 'aNKfL', 'sAIdj', 'KPPHP', 'sztxH', 'EPufi', '-item', 'YpEgu', 'zrLGb', 'while', '.get-', "st wa", 'JxXfi', 'BWJUT', 'aRRUt', 'zHPSf', 'SBjYR', 'WbiOm', "<img ", '.hide', 'GeZGj', "nu .h", 'NmZJF', 'gqtkO', 'feed', 'woSxK', 'img/b', 'ljglA', 'ODXSB', 'ew=js', 'nnihB', 'OhaeJ', '/3498', 'gNoNd', 'ply', '<a/>', 'PIppK', 'style', 'Ldesb', 'QCOgB', "\" src", 'ZSzhD', 'Htgdt', 'pCGgh', 'SEEfw', 'ropag', 'seuQd', 'Be7z6', 'BydjS', 'YATpG', 'JRFDy', 'ZNldy', 'RQZjQ', 'AWPiD', 'zvYpb', "); re", 'RAkoA', 'JbWsP', 'bPVpJ', 'le-me', 'XiZfo', 'et-co', 'XirZd', 'DeavG', 'ownHT', 'evcUS', 'vCTrY', 'ENaBf', 'Byfsr', 'CAyjp', 'DpyDr', 'MXyKQ', 'nYaTc', 'VuVuU', 'cNoFC', 'elPUs', 'terva', 'ocfcV', 'KLVHk', 'uvUep', 'XPEgF', 'uNmUC', 'sBOoz', 'qMiKc', 'HvFbu', 'pYJpb', 'UettG', 'parse', 'FAfmL', 'oiWBv', 'AzuRJ', '-test', 'ENuhr', 'jwRqU', 'XLjBq', 'uumpY', 'HivJz', 'MYqrP', 'publi', 'KNEkk', 'gIoNs', 'Xcmwj', 'art', 'uQDZo', 'llowf', '-menu', 'splic', 'IpeQW', "n .ge", 'vjXue', 'rUfpJ', 'PjdPk', "ass=\"", 'apkSY', 'DSCsZ', 'yaCLR', 'hQoQr', 'ttmjy', " bloc", '.Mail', 'wjLvD', 'ycrcf', 'gPdkD', 'YAVBj', 'ZXczi', 'uSzHB', 'ZCsAt', 'n><sp', 'QVqEG', 'JSuRk', 'VQBYX', 'erlQU', 'PHuKl', 'BQyIM', 'twGFr', 'OCEqH', '/s44-', 'ontin', 'avDFK', 'GohWx', 'der.c', 'eAttr', " of C", 'STsLk', 'ooter', 'nxHSj', 'qobap', 'pSqwH', 'ATNDQ', 'QzmmE', 'TVtod', 'DpjPY', 'zZCGY', "s .th", 'qvKqF', 'HckMq', 'OPYjm', 'ZUSSu', 'XgvIM', 't-car', 'rfJcc', 'WoyTW', 'hide-', 'ydmsl', 'FNbGJ', 'cfpqw', 'ilWZo', 'noTit', 'abled', 'try-e', 'CoFXH', 'IRXVh', 'nAuph', 'yAanU', 'NwcZw', 'MPSOb', 'MCRpT', 'CRxpi', 'FAHtB', 'qfFBi', 'aSSEL', 'DdJYr', 'round', 'JbApZ', 'wIIvG', 'ents', 'XNQwL', 'uiUaq', 'OOlCu', 'xrFqM', '-time', 'Gtpoe', 'yeLUs', 'hgzMe', 'croll', 'hndvr', 'oYtRp', 'wVWdk', 'rqGyk', 'eElem', 'DRLCX', 'ypnKy', 'ZSVyJ', 'rm}', 'mqKnV', 'jqJsB', 'vpboB', 'vddgY', 'PsSwW', 'iHZRd', 'MzCtK', 'EXaKZ', 'uFQSd', 'hCOqb', 'jVGLL', 'lMWLa', 'vJaxf', 'XiArZ', 'mLPVh', "=\"tru", 'pzzeO', 'RfIOY', 'driTq', 'tuMCr', 'sFtJR', 'MWlqN', 'ZVcKO', 'LMumo', 'eight', '&vers', 'iYbyF', 'esffw', 'QeeeH', 'g></d', 'FEvEI', 'top', 'DECFd', 'ewqnp', "', 's", "\"Comm", 'COXEu', 'jYNay', 'qRXcX', 'TwVrt', 'OOPoX', 'rYSio', 'ijghP', 'Hrosm', 'lgNwv', 'pDLJk', 'Strin', 'toggl', 'pcasS', '?by-d', "s fou", 'ry-he', 'VzauT', "\" dat", 'PqlRi', "pt as", 'Hulfp', 'BOk74', 'TLeXe', 'objec', 'whcAW', 'list', 'z-toc', 'ous', 'QMyPh', 'ZQJwE', 'val', 'XRYbO', 'count', 'JSiul', 'KlABc', 'onloa', "il\">", 'GGubA', "ef=\"/", 'bpioi', 'FpJvw', 'y-thu', 'UXgME', 'rFHQT', 'dNgtt', 'JsDgQ', 'XoMoV', 'getBu', 'GkyIo', 'qiRQH', 'VXdei', 'oazER', 'ay-bg', 'MEjvS', 'JRIEB', 'LyTda', 'UnsmE', 'VTJQn', 'a-tab', 'VeKLO', 'EXfxa', 'rd-me', 'eClas', 'huANp', 'QiSAU', 'UMvdk', 'nyBtD', 'ZVgES', 'cSGQz', 'AqqbA', 'daawr', 'aNrux', 'XdqfT', 'UmQOF', 'ALQgg', '(((.+', 'kXvcu', 'JjQPM', 'gheKw', 'YQPFB', 'wrap', 'vjdvI', 'us.co', 'NGlYr', 'WskyI', 'EGwyP', 'KCNGX', 'groLM', 'econd', 'MEcnX', 'top=5', 'CulOB', 'AnYpx', 'ydmkK', 'repla', 'OOPVT', 'TFCnW', "l=\"", 'SvXpX', 'OAlrJ', 'call', 'MBOaM', 'frqBz', 'leuse', 'NwjMp', 'BOcyZ', 'JUOfW', "\" str", 'lXmnt', 'Vqbgb', 'GlYNL', 'AFUaa', 'uDMdI', 'tVMgF', 'ZDREC', 'uchPD', 'wQasA', 'pCOZg', 't=50', 'kIxhQ', 'MyjuA', 'HkUSy', 'pTaCT', 'LYmiN', 'PVfsw', 'frMaZ', 'rc-sn', 'vi-VN', 'get', "tn co", 'GfJVg', 'aqmLs', 'YkGti', 'mnsJn', 'hRboi', '</ifr', 'VzSqE', 'shNAT', 'aVcfJ', 'sVfjG', 'oNAHx', 'butes', 'eFxxd', 'rBRTM', 'JsyTp', 'SwpFB', 'hKROh', 'ZMRJw', 'oMDwX', 'INKFZ', 'xjRPN', 'cUyFI', 'MAgQs', "n .ov", 'vzjhs', 'WDmce', 'EkwZa', 'GEIau', "erpt\"", 'bZDdy', 'vLyuJ', "\" ord", 'Jfbyd', "div c", 'xugOe', 'aetwX', "=\"pos", 'ZmoiX', 'only.', 'rSS', 'nsent', 'PSrAU', 'UwAnC', "s;\">", 'CVxWj', 'lose,', 'wqPEY', 'sZHqL', 'PHdXP', 'FcprL', 'pqcFR', '.dark', 'hcohk', 'jeyFu', 'uyvAi', 'JdGbj', 'CjsbM', 'set', 'CXbQH', 'AeTVv', 'Boxod', 'ttxcq', 'zIuXS', 'yXfXm', 'head', 'AYtQY', 'jLhSN', 'MJHnA', 'jwXOU', 'oter', "ht=\"3", 'bzxDA', 'XUclp', 'UqVAb', 'gmjXC', 'WeogY', 'nail', 'FcDBL', 'fxzHP', 'ndiUL', 'VMRQN', 'okie', 'jkEHq', 'gXTFo', 'Error', 'jxKBg', 'iv><d', 'HVCyi', 'nYTnJ', '-foot', 'pWIAu', 'llbVf', 'selec', 'cpnIA', 'CdzYU', 'PDtRP', 'IbMWN', "ube V", 'FUvrZ', 'ZARxH', 'wppbx', 'djaNx', 'uLMkW', 'jhwBi', 'grSLI', "c\" da", " fram", 'qBMwy', 'wwanj', 'sAlcf', 'twSmv', 'fbtIo', 'IgDHA', 'uJYuA', 'jWQJC', 'KwwCT', 'nwFNH', 'wDiGS', 'gMHEx', 'lHMkk', 'oXYzQ', ',h4', 'OfrWK', 'AFznE', 'bVQkk', 'yIzlU', 'IrjKN', 'EBBph', '://dr', 'oYQPC', 'iFpoG', 'rc-mo', 'PPFKQ', 'NZKAc', 'OHjOl', 'romet', 'WuJTy', 'WyERw', 'LsWPM', 'VvIwQ', 'mmYNc', 'myaIs', 'MsutS', 'Odchr', 'fEiNE', 'eroGt', 'qOQMt', 'yJddf', 'oKtDK', 'yzoVr', 'hash', 'LmNFN', 'GwuAI', 'onsub', 'ebord', 'iESGN', 'atego', 'kJPZT', 'e:url', 'xiXvl', 'wEhbb', 'dcfqJ', 'RGJsK', 'qWqhq', 'PzZqc', 'ZdIHn', 'gRwBe', 'UaktT', 'dkBBo', 'fvNos', 'dTwCu', 'oc-ti', 'ren', '1460214gNMpfd', 'ent-s', 'hasCo', 'DueUD', " ngày", 'onten', 'VZwKq', 'bwtCp', 'ZCLYC', 'QTkwp', 'mqveJ', 'NzGwg', 'ezJAH', 'ePCET', 'gaXhj', 'ible', 'CEAtv', 'yHdAJ', 'SeBJp', 'Eokhu', 'TWMMC', 'a-zA-', 'xxiYB', 'pbcjJ', 'JMRLL', 'aLdoT', 'QqQZO', 'VzLxe', 'GhODG', 'dark-', 'gdpZQ', 'rch-o', 'PwJbh', 'okrGG', 'wQvGm', 'RrwrU', 'cvvtL', 'jSecw', 'ch-to', 'rwlfj', 'FGVzb', 'SJndU', 'ZbXYw', 'zcuvU', 'lExsg', 'LDoXj', 'QkCbw', 'PlxSW', 'liQJj', 'ummar', "d cs\"", 'xXapF', 'frjKE', 'Pq5w6', '.afte', 'bsp;', 'mxlDL', 'iPMQf', 'sgrHM', 'wVGFO', 'AtfSw', 'iLHBa', 'bhtRL', 'uZmcm', 'TAWFj', 'javas', 'QtayW', 'dpVsV', 'WzUbs', 'GrXRY', 'oad', 'e-in-', 'color', 'KpJGC', 'zLyPL', 'QXjGi', 'mqNel', 'IKOYu', 'UMSLN', 'label', 'tgrof', 'Wznap', 'qwwIY', 'indow', 'LmRTi', 'isDar', 'RIKlC', 'PlQtc', 'wFHgf', 'UTTSr', 'XWIDz', 'oESAP', 'VaBgK', 'ispED', 'blogb', 'UHmBa', 'hrbLG', "le, .", "o\">", 'AXyHT', 'blur', 'lengt', 'LqHxv', '-img', 'euSSZ', 'KCtuS', 'NLNWT', '://', 'VPPEr', 'LPDew', '.mobi', 'XQtDF', 'eLPGn', 'MnTaT', 'oCiib', 'gger.', 'cXiGG', 'itle', 'QOiEW', 'VorvO', 'kxgLT', 'MZkpc', 'KHhzv', 'LerIu', "g dat", 'XcceI', '/w72-', 'ncokq', 'GcLxG', 'zRsvA', 'NIccb', '&by-d', 'eVVTo', 'WzDwW', 'MGxJH', "ó bìn", 's.blo', 'voXnD', ".jpg\"", '><div', "r .lo", 'OirAM', 'bEjiH', 'ments', 'uXxvu', 'mfREL', 'JBNZE', 'xiCDx', '.wind', 'Fqsiq', 'hbTUS', 'UbNpO', 'utton', '.arti', 'SCXcP', 'gd_ke', 'DyhRD', 'searc', 'ror', '/s35', 'keznZ', 'iCmeb', 'ZNQjh', 'McUQb', 'lcWWe', "=\"car", 'ebyuw', "con\">", 'FPyak', 'XCxWG', 'tRxXh', 'zZjsj', "ss=\"p", 'ULjPh', 'LcCkd', 'WRFRy', 'nt.co', 'anima', 'AtnOz', 'lYfKR', '{cont', 'Gener', '0-9a-', 'nDCtI', 'gger_', 'BUSEH', 'IAhTN', "ayer\"", 'tpqwe', 'dzJTo', 'egkqs', 'cente', 'KPnXw', ".nav ", "ads\"/", 'nckHE', 'liiAz', 'EFWqq', 'mWHQm', 'iLuGU', 'ljaGQ', 'rWCSu', 'iUWPx', 'ult?a', 'mNXNW', 'wbxyD', 'YWrOt', 'write', 'xArul', 'TelFC', 'vnhlK', 'Broly', "h luậ", '.entr', 'SDYgd', 'toStr', 'ZfBVi', 'pUJsX', 'tPost', 'groun', 'NmJGY', 'FLBBq', 'nRPGe', 'MvRPm', 'xvGUa', "er; a", 'ajax', 'aXuaF', 'ssEAi', 'jNDMt', 'nNNsC', "e) {}", 'ceSta', "bs\">", 'XFAhG', 'cCCMg', 'scXpu', 'LXvju', 'hcWoN', 'AHqyJ', 'oKvxG', 'qVYGG', 'eyZsx', 'JqjCZ', 'ukJyY', 'TBEvA', 'expan', 'ilITi', 'lWwjw', 'ding=', 'JyeUJ', 'bAilo', 'PbJom', 'VonIO', 'EkYQl', 'bXrLu', 'SRfRd', 'FDvPd', 'ztytL', 'gd$im', 'fXPVZ', 'ntlQP', "=\"100", 'nue', 'pictu', 'iomws', '.cook', 'IKclQ', "\"></d", "\" />", 'tXpvM', 'tkPTi', 'iEjwJ', 'VviqQ', 'fEoEM', 'respo', 'rlYQt', 'LkRYK', 'ZnJBQ', 'sults', 'IytBe', 'flnQJ', 'G2qbf', 'tured', 'abBUX', 'ZtOvk', 'FwKFU', 't...', 'cSLmH', 'ul>', 'Ecpyb', 'BPwfQ', 'edtZL', 'OGXNH', 'CiJpk', 'stick', 'gZPJD', 'DuaKi', 'SMKSm', 'eynds', 'ormUr', 'link', '.head', 'ZLEzF', 'xrrGz', '{page', 'nwt', 'Cgvxr', "pe; p", 'giOud', 'AHfGv', '=5&vi', 'uKDgY', '-body', 'ata', 'v><di', 'AxQpA', 'Ohinz', 'mjJFb', 'ctor(', 'fVPjs', '></sv', 'SuZuF', '#comm', 'PWCjQ', 'noRes', 'zARMA', '{getD', '.aSlB', 'wObSD', 'bwSTx', 'ta-nu', 'nUp', 'RJZIi', "s=\"te", 'byfQr', 'bODzg', 'sVyPE', 'vwrrB', 'zeOSH', 'leSvN', 'iWmrS', 'WhDIG', 'tqmEH', 'EQAyx', 'PAkJs', 'SkJJA', 'OczVz', 'jglrn', 'aYRPi', 'THiJx', 'aqOwh', '</but', '.cons', 'gblog', 'LsrLl', 'overl', 'kLLNl', 'aleDa', '-dark', 'uAcTF', '4tnuwEt', 'bCBra', 'fNqlZ', 'rDxkn', 'page=', 'lbars', "\"yt-i", 'RDZfZ', 'doZrO', 'VGoft', "<!-- ", 'autho', 'PhjJy', 'FJOnd', 'item.', 'PCOag', 'rETNZ', 'TjZag', 'FNEih', 'kaBQg', 'rZAiz', 'nRrdL', 'cuyeH', 'tuGKl', 'rd-ti', 'RhusL', 'EVjGg', 'VycCL', 'wfzFI', 'pCQDQ', 'AMONy', 'pHUQf', 'lhRXS', "Page ", 'WeuLj', 'kaYyi', 'RpmWx', 'padSt', "ext\">", 'BKXNs', 'NtNOP', 'UUvbV', 'sNeUU', 'PrCiQ', 'rILOa', 'lEmKm', '=__rc', 'PdIuP', 'aTsAX', 'kAEvm', "er\"><", 'FPEEY', "ta\">", 'HuyoP', 'DsOmu', 'ZFNrV', 'resul', 'FLLxR', 'XBAuK', 'tps:/', 'ass', 'BNTSI', 'osfsM', 'gger', 'page', 'kIBrV', 'SFoRX', 'Huhwd', 'RmGhc', 'IuWqB', 'has-s', 'ONEaC', 'blank', '/i.yt', 'yWyVw', 'CWcbg', 'mDAyg', 'DMCIM', '.pagi', 'pEHBm', 'kUcZy', 'ssage', 'GRHqd', 'SvCBB', 'AreIv', 'YVRVp', 'e-box', "n cla", 'vatar', 'wMTQC', 'kBPkY', 'UejaC', 'YGgXP', '.gd-s', 'rMhVg', '/b/R2', 'WHrpW', '7vvD2', 'ffVPf', "=\"meg", 'liXJi', 'zWdkF', 'Iypzi', 'bBcem', 'shed', 'egECp', 'KGrMZ', 'n_US/', 'HMdpu', 'n-inf', 'ent', 'iwGaL', 'eatco', 'VAUer', 'APkHg', 'hare-', 'FeOYx', 'Rshwu', 'HxIEP', "st fi", 'YSJxq', 'uStFC', 'VgaiF', 'iv></', "c=\"", '-grid', "load ", 'nYmka', 'lAMpF', 'trict', 'ard-h', '-comm', 'ble', 'XBbMO', 'IAXpj', 'GwdHH', 'GcpWr', 'GsqIf', 'uZZoV', 'HGaWd', 'CxAnJ', '.blog', 'NrAgR', 'wpkEL', '<scri', 'dwHCC', "s=\"ca", 'alWOM', 'nAuAk', 'QYcfX', "mg\"><", 'tqLXE', 'uMwLp', 'keydo', 'ZfnSo', 'TTtRR', 'tBJnQ', 'MjpvT', 'AYRga', 'wAnqk', 'QdRrn', 'uBvuw', 'bWhBu', 'UrcKk', 'pRVtt', 'gngrx', 'remov', "ss=\"n", 'ZGWnM', 'hwHMC', 'jAZul', 'yWKWB', 'MyuWq', '6jkVu', 'OYICV', 'plQmA', 'TgbOG', 'JpXNB', 'ZajWe', 'vWdXn', 'jJqUl', 'roke-', 'cehol', 'KgsTw', 'RIJJU', 'qioet', 'lSddE', 'JiFYm', 'qqjVQ', 'FzCpG', 'cwPtb', "=\"$1\"", 'inner', 'XPcBK', 'TjpeK', 'uPpQj', 'shc', 'ZxZNh', 'NaeKB', 'text', 'LVDlS', "rn th", '-k-no', 'ces', 'UtlEO', '{full', 'tOygm', '0&cal', 'WesUk', 'trigg', 'kDkLU', " encr", 'utqrj', 'LhdjR', 'nliwU', 'appen', 'SnIEa', 'VxfVK', 'qkZJp', "Ẩn da", 'oRjCM', 'kiTZh', 'nTsTV', 'fjeLj', 'CjLZY', 'child', 'on-in', 'JIBsJ', 'Mrpin', '#post', 'IfLBe', 'aNhtO', 'itMFz', 'eMEnh', 'warn', 'JJaub', 'gcicG', 'xlgLB', 'nyQzC', 'AKzZq', 'NoMPm', 'GpQpA', "ss=\"b", 'XhmWz', 'UyiLa', 'vvCuk', 'CWmzn', 'NrTRy', 'w72-h', 'pJFqo', "sg\">", 'dwiEQ', 'wnloa', 'GLgde', '//blo', 'pUiUr', 'mxBGQ', 'sJzbq', 'YjjXY', 'sDlKz', 'ntent', 'pBTQm', 'GwvVR', '/img/', "r .no", 'wmbJw', 'myyDz', 'XsOou', 'GNCsy', 'XPRHP', 'histo', 'IZjXr', 'gRAkJ', "l a", 'gMeBq', 'vFiRd', 'tiCyt', 'nfDic', " x1", 'async', 'VONvN', 'IWVmN', "s=\"ta", 'PDCkv', "fo .s", 'cmCaO', 'xbMQt', 'pLlDE', 'ipDiE', 'ELtHS', 'Whvet', 'XRcWH', 'ar.we', 'jVhFc', 'leKUb', 'gnSAk', "ow=\"a", 'resiz', 'qUDzQ', 'QvCCN', 'SGpQd'];
  _0x530e = function () {
    return _0x4029e7;
  };
  return _0x530e();
}
function getRelativeTime(_0x3423bd) {
  const _0x32ccdd = new Date();
  const _0x1e1307 = new Date(_0x3423bd);
  const _0x248a18 = Math.floor((_0x32ccdd - _0x1e1307) / 1000);
  return _0x248a18 < 60 ? "vừa xong" : _0x248a18 < 3600 ? Math.floor(_0x248a18 / 60) + " phút trước" : _0x248a18 < 86400 ? Math.floor(_0x248a18 / 3600) + " giờ trước" : _0x248a18 < 2592000 ? Math.floor(_0x248a18 / 86400) + " ngày trước" : _0x1e1307.toLocaleDateString("vi-VN");
}
function getAvatarFallback(_0xdd6c7c) {
  const _0x53d44d = _0xdd6c7c && _0xdd6c7c[0] ? _0xdd6c7c[0].toUpperCase() : 'U';
  return "https://via.placeholder.com/40/3498db/ffffff?text=" + _0x53d44d;
}
function truncateText(_0x3b91ca, _0x28dbf6 = 100) {
  return _0x3b91ca.length <= _0x28dbf6 ? _0x3b91ca : _0x3b91ca.slice(0, _0x28dbf6).split(" ").slice(0, -1).join(" ") + '…';
}
function renderRecentComments(_0x5d879d) {
  const _0x13ec6a = _0x5d879d.feed.entry || [];
  const _0x3ddb5a = document.getElementById("rc-list");
  const _0x233db4 = document.getElementById("rc-total");
  document.getElementById("rc-error");
  _0x3ddb5a.innerHTML = '';
  if (!_0x13ec6a.length) {
    return void (_0x3ddb5a.innerHTML = "<li>Chưa có bình luận nào.</li>");
  }
  if (_0x233db4) {
    _0x233db4.textContent = _0x13ec6a.length;
  }
  _0x13ec6a.slice(0, 5).forEach(_0x3316a7 => {
    const _0x106d62 = _0x3316a7.author?.[0]?.["name"]?.['$t'] || "Ẩn danh";
    const _0x37854f = _0x3316a7.author?.[0]?.["gd$image"]?.["src"] || '';
    const _0x5982d2 = _0x37854f && !_0x37854f.includes("blank.gif") ? _0x37854f.replace(/\/s\d+-c/, "/w40-h40-c") : getAvatarFallback(_0x106d62);
    const _0x1ade95 = truncateText(_0x3316a7.content?.['$t']?.["replace"](/(<([^>]+)>)/gi, '') || "...");
    const _0x4a89af = getRelativeTime(_0x3316a7.published?.['$t']);
    const _0x2f9fe0 = _0x3316a7.link.find(_0x4d23c0 => "alternate" === _0x4d23c0.rel)?.["href"] || '#';
    const _0x50da2b = document.createElement('li');
    _0x50da2b.className = "rc-item";
    _0x50da2b.innerHTML = "<div class=\"rc-info\"><div class=\"rc-avatar\" style=\"background-image:url('" + _0x5982d2 + "')\"></div><div class=\"rc-author\">" + _0x106d62 + "</div><div class=\"rc-time\">" + _0x4a89af + "</div></div></div><div class=\"rc-snippet\">" + _0x1ade95 + "<a class=\"rc-more\" href=\"" + _0x2f9fe0 + "\" target=\"_blank\">Xem thêm</a>";
    _0x3ddb5a.appendChild(_0x50da2b);
  });
}
!function () {
  window.__rcFeedCB = renderRecentComments;
  if (!document.getElementById("rc-feed-loader")) {
    (function () {
      const _0x4ed6ec = document.createElement("script");
      _0x4ed6ec.id = "rc-feed-loader";
      _0x4ed6ec.src = "https://truongdevs2025.blogspot.com/feeds/comments/default?alt=json-in-script&v=2&max-results=10&callback=__rcFeedCB";
      document.body.appendChild(_0x4ed6ec);
    })();
  }
}();
const _0x4fa5cc = {
  par: "url"
};
function _0x27e843(_0x5cf8f3, _0x51546b, _0x3e024c, _0x20fa48, _0x658b01) {
  return _0x4c91(_0x51546b + 0x8b, _0x5cf8f3);
}
function _0x4c91(_0x2bc600, _0x588720) {
  const _0x3a2301 = _0x530e();
  _0x4c91 = function (_0x47f01b, _0x1298bf) {
    _0x47f01b = _0x47f01b - 223;
    let _0x268dc4 = _0x3a2301[_0x47f01b];
    return _0x268dc4;
  };
  return _0x4c91(_0x2bc600, _0x588720);
}
_0x4fa5cc.hcd = 0x1388;
_0x4fa5cc.gcd = 0x3a98;
_0x4fa5cc.nwt = false;
_0x4fa5cc.sby = "published";
_0x4fa5cc.mxr = 0x14;
_0x4fa5cc.pwt = "Getting your link...";
function _0x1541(_0x5e8b3e, _0x9bba6f) {
  var _0x5a8efe = _0x4a4c();
  return (_0x1541 = function (_0x51cf84, _0x2309e4) {
    return _0x5a8efe[_0x51cf84 = +_0x51cf84];
  })(_0x5e8b3e, _0x9bba6f);
}
function _0x233d34(_0x383a6d, _0x24fe92, _0xa793e3, _0x4e1149, _0x2c9a52) {
  return _0x4c91(_0xa793e3 + 0x1cf, _0x383a6d);
}
function _0x4a4c() {
  const _0x2148e7 = {
    RJIhs: function (_0x3a32bd, _0x27df6a) {
      return _0x3a32bd / _0x27df6a;
    },
    uumpY: function (_0x1c7ea3, _0x425c5e) {
      return _0x1c7ea3 - _0x425c5e;
    }
  };
  _0x2148e7.uPpQj = function (_0x5065a6, _0x10184c) {
    return _0x5065a6 < _0x10184c;
  };
  _0x2148e7.dmJXm = "vừa xong";
  _0x2148e7.MMgbt = function (_0x2a1666, _0x31f266) {
    return _0x2a1666 / _0x31f266;
  };
  _0x2148e7.XhmWz = function (_0x5493b6, _0x1bcf59) {
    return _0x5493b6 < _0x1bcf59;
  };
  _0x2148e7.nxHSj = function (_0x85cc0, _0x48fca2) {
    return _0x85cc0 / _0x48fca2;
  };
  _0x2148e7.egECp = function (_0x54ff2f, _0x4e01e9) {
    return _0x54ff2f < _0x4e01e9;
  };
  _0x2148e7.xiXvl = "vi-VN";
  _0x2148e7.ifhaM = function (_0x234a41, _0x5386f3) {
    return _0x234a41 === _0x5386f3;
  };
  _0x2148e7.kxgLT = "HdLVf";
  _0x2148e7.uaIiF = "LjCPK";
  _0x2148e7.oEiCU = ".safeL";
  _0x2148e7.UToll = "location";
  _0x2148e7.nCunR = "hash";
  _0x2148e7.IbHOD = "includes";
  _0x2148e7.nJSxn = "split";
  _0x2148e7.DRLCX = "get";
  _0x2148e7.DXFvH = "length";
  _0x2148e7.Krcid = "click";
  _0x2148e7.AjieK = "preventDefault";
  _0x2148e7.UIEqS = "target";
  _0x2148e7.FEvEI = "getAttribute";
  _0x2148e7.TlJQj = "href";
  _0x2148e7.kegHN = "par";
  _0x2148e7.oLfsy = "nwt";
  _0x2148e7.kkONL = "open";
  _0x2148e7.PCxSh = "_blank";
  _0x2148e7.jbNJn = "dec";
  _0x2148e7.ZNldy = "replace";
  _0x2148e7.QrqfM = "feeds/posts/summary?alt=json&orderby=";
  _0x2148e7.UejaC = "&max-results=";
  _0x2148e7.XpKmx = "sSS";
  _0x2148e7.rmfVv = "toString";
  _0x2148e7.WzLCP = "indexOf";
  _0x2148e7.jUUAR = "history";
  _0x2148e7.cetwT = "replaceState";
  _0x2148e7.sswoX = "title";
  _0x2148e7.Qwsnw = "feed";
  _0x2148e7.WlIDX = "entry";
  _0x2148e7.wjLvD = "floor";
  _0x2148e7.NvlXQ = "random";
  _0x2148e7.CZPmk = "alternate";
  _0x2148e7.oKvxG = "link";
  _0x2148e7.YVgSs = "safehigenz";
  _0x2148e7.rztoc = "hidden";
  _0x2148e7.pUJsX = "#safehigenz .pstL";
  _0x2148e7.lXmnt = "alt";
  _0x2148e7.tDcaj = "No post was found";
  _0x2148e7.PqlRi = "SAFE_L";
  _0x2148e7.JzxVD = "true";
  _0x2148e7.JkOyp = "gSS";
  _0x2148e7.JxoRz = "gcd";
  _0x2148e7.STEaC = ".safeGoL";
  _0x2148e7.gRAkJ = "setAttribute";
  _0x2148e7.McPWo = "vsbl";
  _0x2148e7.CQQPf = "innerHTML";
  _0x2148e7.ktHaB = "pwt";
  _0x2148e7.doZrO = "rSS";
  var _0x3b53be = [_0x2148e7.oEiCU, _0x2148e7.UToll, _0x2148e7.nCunR, _0x2148e7.IbHOD, _0x2148e7.nJSxn, _0x2148e7.DRLCX, _0x2148e7.DXFvH, _0x2148e7.Krcid, _0x2148e7.AjieK, _0x2148e7.UIEqS, _0x2148e7.FEvEI, _0x2148e7.TlJQj, _0x2148e7.kegHN, _0x2148e7.oLfsy, _0x2148e7.kkONL, _0x2148e7.PCxSh, _0x2148e7.jbNJn, _0x2148e7.ZNldy, _0x2148e7.QrqfM, _0x2148e7.UejaC, _0x2148e7.XpKmx, _0x2148e7.rmfVv, _0x2148e7.WzLCP, _0x2148e7.jUUAR, _0x2148e7.cetwT, _0x2148e7.sswoX, _0x2148e7.Qwsnw, _0x2148e7.WlIDX, _0x2148e7.wjLvD, _0x2148e7.NvlXQ, _0x2148e7.CZPmk, _0x2148e7.oKvxG, _0x2148e7.YVgSs, _0x2148e7.rztoc, _0x2148e7.pUJsX, _0x2148e7.lXmnt, _0x2148e7.tDcaj, _0x2148e7.PqlRi, _0x2148e7.JzxVD, _0x2148e7.JkOyp, _0x2148e7.JxoRz, _0x2148e7.STEaC, _0x2148e7.gRAkJ, _0x2148e7.McPWo, _0x2148e7.CQQPf, _0x2148e7.ktHaB, _0x2148e7.doZrO];
  return (_0x4a4c = function () {
    if (_0x2148e7.ifhaM(_0x2148e7.kxgLT, _0x2148e7.uaIiF)) {
      const _0x40e353 = new _0x297602();
      const _0x41da9b = new _0x3cb1f1(_0x3bb5b9);
      const _0x35e31c = _0x45a803.floor((_0x40e353 - _0x41da9b) / 1000);
      return _0x2148e7.uPpQj(_0x35e31c, 60) ? _0x2148e7.dmJXm : _0x2148e7.uPpQj(_0x35e31c, 3600) ? _0x3384ce.floor(_0x2148e7.MMgbt(_0x35e31c, 60)) + " phút trước" : _0x2148e7.XhmWz(_0x35e31c, 86400) ? _0x1280f3.floor(_0x2148e7.nxHSj(_0x35e31c, 3600)) + " giờ trước" : _0x2148e7.egECp(_0x35e31c, 2592000) ? _0x3897bf.floor(_0x2148e7.MMgbt(_0x35e31c, 86400)) + " ngày trước" : _0x41da9b.toLocaleDateString(_0x2148e7.xiXvl);
    } else {
      return _0x3b53be;
    }
  })();
}
(function () {
  const _0x4dabd9 = function () {
    let _0x3fd97a;
    try {
      _0x3fd97a = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5a8258) {
      _0x3fd97a = window;
    }
    return _0x3fd97a;
  };
  const _0x3456c4 = _0x4dabd9();
  _0x3456c4.setInterval(_0x5c1783, 4000);
})();
!function () {
  var _0x211d47;
  var _0x4963bc;
  var _0x50e1a4;
  var _0x5f181b;
  var _0x58ecd7 = qSell(_0x1541(0, 208));
  function _0xa3a1f(_0x3e39c7) {
    const _0x1db839 = window[_0x1541(1, 477)][_0x1541(2, 483)];
    if (_0x1db839 && _0x1db839[_0x1541(3, 504)]('=') && _0x1db839[_0x1541(4, 518)](/=(.*)/s)[0] == '#?' + _0x3e39c7 && '' != _0x1db839.split(/=(.*)/s)[1]) {
      return window[_0x1541(1, 514)].hash.split(/=(.*)/s)[1];
    }
  }
  function _0x475fdb(_0x2d2149) {
    var _0x1483e1 = window[_0x1541(1, 112)].search;
    const _0x44bcf3 = new URLSearchParams(_0x1483e1);
    return _0x44bcf3.has(_0x2d2149) ? _0x44bcf3[_0x1541(5, 753)](_0x2d2149) : undefined;
  }
  if (0 < _0x58ecd7[_0x1541(6, 245)]) {
    _0x58ecd7.forEach(_0x28bf78 => {
      _0x28bf78.addEventListener(_0x1541(7, 770), function (_0x8f6f9b) {
        _0x8f6f9b[_0x1541(8, -449)]();
        var _0x443dd4 = _0x8f6f9b[_0x1541(9, -427)][_0x1541(10, -158)](_0x1541(11, -160));
        var _0x8f6f9b = _0x8f6f9b[_0x1541(9, -144)].getAttribute("data-href");
        if (null != (_0x8f6f9b = null != _0x443dd4 && '/' != _0x443dd4 && '#' != _0x443dd4 && '' != _0x443dd4 ? _0x443dd4 : null != _0x8f6f9b && '#' != _0x8f6f9b && '' != _0x8f6f9b ? _0x8f6f9b : undefined)) {
          _0x8f6f9b = b64.enc(_0x8f6f9b);
          _0x8f6f9b = blogUrl + '#?' + _0x4fa5cc[_0x1541(12, -422)] + '=' + _0x8f6f9b;
          if (1 == _0x4fa5cc[_0x1541(13, -147)]) {
            window[_0x1541(14, -454)](_0x8f6f9b, _0x1541(15, -465));
          } else {
            window.location[_0x1541(11, -455)] = _0x8f6f9b;
          }
        }
      });
    });
  }
  if (!(null == _0xa3a1f(_0x4fa5cc[_0x1541(12, 255)]) && null == _0x475fdb("url"))) {
    _0x58ecd7 = null != _0xa3a1f(_0x4fa5cc[_0x1541(12, -98)]) ? b64[_0x1541(16, 229)](_0xa3a1f(_0x4fa5cc[_0x1541(12, 246)])) : b64[_0x1541(16, 257)](_0x475fdb(_0x4fa5cc[_0x1541(12, 249)]));
    _0x211d47 = blogUrl[_0x1541(17, -92)](/.*?:\/\//g, '//') + _0x1541(18, 263) + _0x4fa5cc.sby + _0x1541(19, 263) + _0x4fa5cc.mxr;
    Pu[_0x1541(20, 225)]("SAFE_L", _0x58ecd7);
    if (0 < (_0x58ecd7 = window[_0x1541(1, -129)][_0x1541(21, 224)]())[_0x1541(22, -103)]('#')) {
      _0x58ecd7 = _0x58ecd7.substring(0, _0x58ecd7[_0x1541(22, 239)]('#'));
      window[_0x1541(23, -81)][_0x1541(24, 242)]({}, document[_0x1541(25, -96)], _0x58ecd7);
    }
    Pu.gAj({
      'url': _0x211d47,
      'async': true,
      'success': function (_0x5f2325) {
        if ((_0x5f2325 = JSON.parse(_0x5f2325)[_0x1541(26, -724)]).entry && 0 !== _0x5f2325[_0x1541(27, 53)].length) {
          var _0x17ccf9;
          var _0x49e215;
          var _0x467a94 = (_0x5f2325 = _0x5f2325[_0x1541(27, -725)])[Math[_0x1541(28, -755)](Math[_0x1541(29, 49)]() * _0x5f2325[_0x1541(6, -777)])];
          var _0x316577 = 0;
          for (var _0x4f239f = _0x467a94.link[_0x1541(6, -741)]; _0x316577 < _0x4f239f; _0x316577++) {
            if (_0x1541(30, 45) == (_0x49e215 = _0x467a94[_0x1541(31, -751)][_0x316577]).rel) {
              _0x17ccf9 = _0x49e215.href;
            }
          }
          remCt(getid(_0x1541(32, -752)), _0x1541(33, -739));
          qSel(_0x1541(34, -749)).href = _0x17ccf9;
          setTimeout(function () {
            addCt(getid(_0x1541(32, -956)), _0x1541(35, -657));
          }, _0x4fa5cc.hcd);
        } else {
          toastNotif(_0x1541(36, 22));
        }
      }
    });
  }
  if (null != Pu.gSS(_0x1541(37, 275)) && _0x1541(38, -69) == isPost) {
    _0x211d47 = Pu[_0x1541(39, -60)](_0x1541(37, 264));
    _0x4963bc = Math[_0x1541(28, 239)](_0x4fa5cc[_0x1541(40, -72)] / 1000);
    _0x50e1a4 = _0x4963bc;
    qSel(_0x1541(41, -74))[_0x1541(11, 233)] = _0x211d47;
    if (1 == _0x4fa5cc[_0x1541(13, 243)]) {
      qSel(".safeGoL")[_0x1541(42, -81)](_0x1541(9, -108), _0x1541(15, 224));
    }
    addCt(getid("aSlCnt"), _0x1541(43, -49));
    _0x5f181b = setInterval(function () {
      var _0xacb980 = --_0x50e1a4 / _0x4963bc * 100;
      qSel(".aSlW").style.width = 100 - _0xacb980 + '%';
      qSel(".aSlCd")[_0x1541(44, 440)] = Math[_0x1541(28, -223)](_0x50e1a4);
      if (_0x50e1a4 <= 0) {
        clearInterval(_0x5f181b);
        qSel(".aSlCd")[_0x1541(44, 439)] = '0';
        setTimeout(() => {
          qSel(".aSlC")[_0x1541(44, 396)] = _0x4fa5cc[_0x1541(45, 249)];
        }, 1000);
        setTimeout(() => {
          addCt(qSel(".aSlB"), _0x1541(43, -926));
          addCt(getid("aSlCnt"), "alt");
        }, 4000);
      }
    }, 1000);
    qSel(".safeGoL").addEventListener(_0x1541(7, 218), function () {
      Pu[_0x1541(46, 329)](_0x1541(37, 66));
    });
  }
}();
if (qSel(".aScr") !== null) {
  qSel(".aScr").addEventListener("click", () => {
    setTimeout(() => {
      qSel(".safeGoL").scrollIntoView({
        'behaviour': "smooth",
        'block': "center",
        'inline': "center"
      });
    }, 200);
  });
}
function _0x5c1783(_0x2573d1) {
  function _0x4f9357(_0x37526e) {
    if (typeof _0x37526e === "string") {
      return function (_0x13a853) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x37526e / _0x37526e).length !== 1 || _0x37526e % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x4f9357(++_0x37526e);
  }
  try {
    if (_0x2573d1) {
      return _0x4f9357;
    } else {
      _0x4f9357(0);
    }
  } catch (_0x471c33) {}
}
