(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define("reactsandbox", ["React"], factory);
	else if(typeof exports === 'object')
		exports["reactsandbox"] = factory(require("React"));
	else
		root["reactsandbox"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(10);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(12);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = new DOMParser();

function parseReactElement(value) {
  var element = parser.parseFromString(value, "text/xml");
  if (!value || !value.length) {
    return false;
  }

  var reactElement = false;
  if (element && element.firstChild) {
    var child = element.firstChild;
    var properties = {};
    if (child.getAttribute('src')) {
      properties['src'] = child.getAttribute('src');
      // properties['style'] = {width:'100%'}
    }
    if (child.getAttribute('class')) {
      properties['className'] = child.getAttribute('class');
    }

    reactElement = _react2.default.createElement(child.tagName, properties);
  } else {
    console.warn('failed to parse string to DOMElement');
  }

  return reactElement;
}

exports.default = parseReactElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Types = undefined;

var _withSandbox = __webpack_require__(6);

var _withSandbox2 = _interopRequireDefault(_withSandbox);

var _Types = __webpack_require__(14);

var _Types2 = _interopRequireDefault(_Types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withSandbox2.default;
exports.Types = _Types2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jsxToString = __webpack_require__(7);

var _jsxToString2 = _interopRequireDefault(_jsxToString);

var _compose = __webpack_require__(9);

var _compose2 = _interopRequireDefault(_compose);

var _setDisplayName = __webpack_require__(1);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _withState = __webpack_require__(11);

var _withState2 = _interopRequireDefault(_withState);

var _lifecycle = __webpack_require__(13);

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _parseReactElement = __webpack_require__(4);

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sandbox = function Sandbox(_ref) {
  var Component = _ref.Component,
      propsComponent = _ref.propsComponent,
      controls = _ref.controls;

  Component = Component ? _react2.default.createElement(Component, propsComponent) : null;
  var code = void 0;
  if (Component) {
    code = (0, _jsxToString2.default)(Component);
  }

  return _react2.default.createElement(
    'div',
    { className: 'reactsandbox' },
    _react2.default.createElement(
      'div',
      { className: 'reactsandbox-sandbox' },
      Component
    ),
    _react2.default.createElement(
      'div',
      { className: 'reactsandbox-controls' },
      controls
    ),
    _react2.default.createElement(
      'div',
      { className: 'reactsandbox-code' },
      _react2.default.createElement(
        'pre',
        null,
        code
      )
    )
  );
};

function withSandbox(Component, config) {
  var SandboxWithState = (0, _compose2.default)((0, _setDisplayName2.default)('Sandbox'), (0, _lifecycle2.default)({
    componentDidMount: function componentDidMount() {
      var _this = this;

      var propsComponent = {};
      var controls = [];
      var keys = Object.keys(config);

      keys.forEach(function (prop, index) {
        var _config$prop = config[prop],
            value = _config$prop.value,
            description = _config$prop.description,
            type = _config$prop.type;

        var Input = function Input() {
          return _react2.default.createElement('div', null);
        };

        if (type === 'boolean') {
          var BooleanInput = function BooleanInput(_ref2) {
            var checked = _ref2.checked,
                setChecked = _ref2.setChecked;
            return _react2.default.createElement('input', { type: 'checkbox', checked: checked,
              onChange: function onChange() {
                setChecked(function (n) {
                  return !n;
                });
                var propsComponent = _this.state.propsComponent;

                propsComponent[prop] = !propsComponent[prop];
                _this.setState({ propsComponent: propsComponent });
              }
            });
          };
          Input = (0, _compose2.default)((0, _withState2.default)('checked', 'setChecked', value))(BooleanInput);
        }

        if (type === 'string' || type === 'number') {
          var StringInput = function StringInput(_ref3) {
            var inputValue = _ref3.inputValue,
                setInputValue = _ref3.setInputValue;
            return _react2.default.createElement('input', { type: 'text', value: inputValue,
              onChange: function onChange(evt) {
                setInputValue(evt.target.value);
                var propsComponent = _this.state.propsComponent;

                propsComponent[prop] = evt.target.value;
                _this.setState({ propsComponent: propsComponent });
              }
            });
          };
          Input = (0, _compose2.default)((0, _withState2.default)('inputValue', 'setInputValue', value))(StringInput);
        }

        if (type === 'reactelement') {
          var _StringInput = function _StringInput(_ref4) {
            var inputValue = _ref4.inputValue,
                setInputValue = _ref4.setInputValue;
            return _react2.default.createElement('input', { type: 'text', value: inputValue,
              onChange: function onChange(evt) {
                setInputValue(evt.target.value);
                var propsComponent = _this.state.propsComponent;

                propsComponent[prop] = (0, _parseReactElement2.default)(evt.target.value);
                _this.setState({ propsComponent: propsComponent });
              }
            });
          };
          Input = (0, _compose2.default)((0, _withState2.default)('inputValue', 'setInputValue', config[prop].rawValue))(_StringInput);
        }

        propsComponent[prop] = value;
        controls.push(_react2.default.createElement(
          'div',
          { className: 'control', key: index },
          _react2.default.createElement(
            'div',
            { className: 'control-switch' },
            _react2.default.createElement(
              'div',
              { className: 'control-prop' },
              keys[index]
            ),
            _react2.default.createElement(Input, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'control-description' },
            description
          )
        ));
      });

      this.setState({ propsComponent: propsComponent, Component: Component, controls: controls });
    }
  }))(Sandbox);

  return SandboxWithState;
}

exports.default = withSandbox;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _jsonStringifyPrettyCompact = __webpack_require__(8);

var _jsonStringifyPrettyCompact2 = _interopRequireDefault(_jsonStringifyPrettyCompact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDefaultProp(defaultProps, key, value) {
  if (!defaultProps) {
    return false;
  }
  return defaultProps[key] === value;
}

function stringifyObject(object, opts) {
  var result = void 0;
  if (Array.isArray(object)) {
    result = object.map(function (item) {
      return stringifyObject(item);
    });
  } else if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
    result = {};
    Object.keys(object).map(function (key) {
      var value = object[key];
      if (_react2.default.isValidElement(value)) {
        value = jsxToString(value, opts);
      } else if (Array.isArray(value)) {
        value = value.map(function (item) {
          return stringifyObject(item, opts);
        });
      } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        value = stringifyObject(value, opts);
      } else if (typeof value === 'function') {
        value = opts.useFunctionCode ? opts.functionNameOnly ? item.name.toString() : item.toString() : '...';
      }
      result[key] = value;
    });
  } else {
    result = object;
  }
  return result;
}

var _JSX_REGEXP = /"<.+>"/g;

function serializeItem(item, options) {
  var delimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var result = void 0;

  if (typeof item === 'string') {
    result = delimit ? '\'' + item + '\'' : item;
  } else if (typeof item === 'number' || typeof item === 'boolean') {
    result = '' + item;
  } else if (Array.isArray(item)) {
    var indentation = new Array(options.spacing + 1).join(' ');
    var delimiter = delimit ? ', ' : '\n' + indentation;
    var items = item.map(function (i) {
      return serializeItem(i, options);
    }).join(delimiter);
    result = delimit ? '[' + items + ']' : '' + items;
  } else if (_react2.default.isValidElement(item)) {
    result = jsxToString(item, options);
  } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    result = (0, _jsonStringifyPrettyCompact2.default)(stringifyObject(item, options));
    // remove string quotes from embeded JSX values
    result = result.replace(_JSX_REGEXP, function (match) {
      return match.slice(1, match.length - 1);
    });
  } else if (typeof item === 'function') {
    result = options.useFunctionCode ? options.functionNameOnly ? item.name.toString() : item.toString() : '...';
  }
  return result;
}

function jsxToString(component, options) {

  var baseOpts = {
    displayName: component.type.displayName || component.type.name || component.type,
    ignoreProps: [],
    ignoreTags: [],
    keyValueOverride: {},
    spacing: 0,
    detectFunctions: false
  };

  var opts = _extends({}, baseOpts, options);

  // Do not return anything if the root tag should be ignored
  if (opts.ignoreTags.indexOf(opts.displayName) !== -1) {
    return '';
  }

  var componentData = {
    name: opts.displayName
  };

  delete opts.displayName;
  if (component.props) {
    var indentation = new Array(opts.spacing + 3).join(' ');
    componentData.props = Object.keys(component.props).filter(function (key) {
      return key !== 'children' && !isDefaultProp(component.type.defaultProps, key, component.props[key]) && opts.ignoreProps.indexOf(key) === -1;
    }).map(function (key) {
      var value = void 0;
      if (typeof opts.keyValueOverride[key] === 'function') {
        value = opts.keyValueOverride[key](component.props[key]);
      } else if (opts.keyValueOverride[key]) {
        value = opts.keyValueOverride[key];
      } else if (opts.shortBooleanSyntax && typeof component.props[key] === 'boolean' && component.props[key]) {
        return key;
      } else {
        value = serializeItem(component.props[key], _extends({}, opts, { key: key }));
      }
      if (typeof value !== 'string' || value[0] !== "'") {
        value = '{' + value + '}';
      }
      return key + '=' + value;
    }).join('\n' + indentation);

    if (component.key && opts.ignoreProps.indexOf('key') === -1) {
      componentData.props += 'key=\'' + component.key + '\'';
    }

    if (componentData.props.length > 0) {
      componentData.props = ' ' + componentData.props;
    }
  }

  if (component.props.children) {
    opts.spacing += 2;
    var _indentation = new Array(opts.spacing + 1).join(' ');
    if (Array.isArray(component.props.children)) {
      componentData.children = component.props.children.reduce(function (a, b) {
        return a.concat(b);
      }, []) // handle Array of Arrays
      .filter(function (child) {
        var childShouldBeRemoved = child && child.type && opts.ignoreTags.indexOf(child.type.displayName || child.type.name || child.type) === -1;
        // Filter the tag if it is in the ignoreTags list or if is not a tag
        return childShouldBeRemoved;
      }).map(function (child) {
        return serializeItem(child, opts, false);
      }).join('\n' + _indentation);
    } else {
      componentData.children = serializeItem(component.props.children, opts, false);
    }
    return '<' + componentData.name + componentData.props + '>\n' + ('' + _indentation + componentData.children + '\n') + (_indentation.slice(0, -2) + '</' + componentData.name + '>');
  } else {
    return '<' + componentData.name + componentData.props + ' />';
  }
}

exports.default = jsxToString;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Copyright 2014, 2016 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

function stringify (obj, options) {
  options = options || {}
  var indent = JSON.stringify([1], null, get(options, 'indent', 2)).slice(2, -3)
  var maxLength = (indent === '' ? Infinity : get(options, 'maxLength', 80))

  return (function _stringify (obj, currentIndent, reserved) {
    if (obj && typeof obj.toJSON === 'function') {
      obj = obj.toJSON()
    }

    var string = JSON.stringify(obj)

    if (string === undefined) {
      return string
    }

    var length = maxLength - currentIndent.length - reserved

    if (string.length <= length) {
      var prettified = prettify(string)
      if (prettified.length <= length) {
        return prettified
      }
    }

    if (typeof obj === 'object' && obj !== null) {
      var nextIndent = currentIndent + indent
      var items = []
      var delimiters
      var comma = function (array, index) {
        return (index === array.length - 1 ? 0 : 1)
      }

      if (Array.isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, comma(obj, index)) || 'null'
          )
        }
        delimiters = '[]'
      } else {
        Object.keys(obj).forEach(function (key, index, array) {
          var keyPart = JSON.stringify(key) + ': '
          var value = _stringify(obj[key], nextIndent,
                                 keyPart.length + comma(array, index))
          if (value !== undefined) {
            items.push(keyPart + value)
          }
        })
        delimiters = '{}'
      }

      if (items.length > 0) {
        return [
          delimiters[0],
          indent + items.join(',\n' + nextIndent),
          delimiters[1]
        ].join('\n' + currentIndent)
      }
    }

    return string
  }(obj, '', 0))
}

// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
var stringOrChar = /("(?:[^\\"]|\\.)*")|[:,]/g

function prettify (string) {
  return string.replace(stringOrChar, function (match, string) {
    return string ? match : match + ' '
  })
}

function get (options, name, defaultValue) {
  return (name in options ? options[name] : defaultValue)
}

module.exports = stringify


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _setDisplayName = __webpack_require__(1);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(3);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithState = function (_Component) {
      _inherits(WithState, _Component);

      function WithState() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithState.prototype.render = function render() {
        var _extends2;

        return factory(_extends({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return WithState;
    }(_react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withState'))(WithState);
    }
    return WithState;
  };
};

exports.default = withState;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _setDisplayName = __webpack_require__(1);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(3);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle = function (_Component) {
      _inherits(Lifecycle, _Component);

      function Lifecycle() {
        _classCallCheck(this, Lifecycle);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state));
      };

      return Lifecycle;
    }(_react.Component);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'lifecycle'))(Lifecycle);
    }
    return Lifecycle;
  };
};

exports.default = lifecycle;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseReactElement = __webpack_require__(4);

var _parseReactElement2 = _interopRequireDefault(_parseReactElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StringType(value, description) {
  if (!value) value = '';
  if (!description) description = '';

  return {
    value: value,
    description: description,
    type: 'string'
  };
}

function ReactElementType(value, description) {
  return {
    value: (0, _parseReactElement2.default)(value),
    rawValue: value,
    description: description,
    type: 'reactelement'
  };
}

function BooleanType(value, description) {
  if (typeof value !== 'boolean') value = false;
  if (!description) description = '';

  return {
    value: value,
    description: description,
    type: 'boolean'
  };
}

function NumberType() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var description = arguments[1];

  if (!Number.isInteger(value)) value = parseInt(value, 10);
  if (!value || value.toString() === 'NaN') value = 0;
  if (!description) description = '';

  return {
    value: value,
    description: description,
    type: 'number'
  };
}

var Types = {
  String: StringType,
  Number: NumberType,
  Boolean: BooleanType,
  ReactElement: ReactElementType
};

exports.default = Types;

/***/ })
/******/ ]);
});