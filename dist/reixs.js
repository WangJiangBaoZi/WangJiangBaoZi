(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.reixs = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = require('./src/reixs')["default"];

},{"./src/reixs":31}],2:[function(require,module,exports){
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],4:[function(require,module,exports){
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],5:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],6:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":15}],7:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":15}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],11:[function(require,module,exports){
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
},{}],12:[function(require,module,exports){
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],13:[function(require,module,exports){
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],14:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":17,"./assertThisInitialized":3}],15:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],16:[function(require,module,exports){
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":2,"./iterableToArray":12,"./nonIterableSpread":13}],17:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],18:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":19}],19:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReixsRace = exports.ReixsAll = exports.Reixs = void 0;

var _reixs = _interopRequireDefault(require("./reixs"));

var _reixsAll = _interopRequireDefault(require("./reixs-all"));

var _reixsRace = _interopRequireDefault(require("./reixs-race"));

var Reixs = _reixs["default"];
exports.Reixs = Reixs;
var ReixsAll = _reixsAll["default"];
exports.ReixsAll = ReixsAll;
var ReixsRace = _reixsRace["default"];
exports.ReixsRace = ReixsRace;

},{"./reixs":23,"./reixs-all":21,"./reixs-race":22,"@babel/runtime/helpers/interopRequireDefault":10}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createRequest = _interopRequireDefault(require("../create-request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Concurrent request
 */
var ReixsAll =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(ReixsAll, _Scheduler);

  function ReixsAll() {
    var _this;

    (0, _classCallCheck2["default"])(this, ReixsAll);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReixsAll).call(this));
    _this._schedulers = [];

    for (var _len = arguments.length, schedulers = new Array(_len), _key = 0; _key < _len; _key++) {
      schedulers[_key] = arguments[_key];
    }

    _this._schedulers = schedulers;

    _this._initRequest();

    return _this;
  }
  /**
   * Create request function
   */


  (0, _createClass2["default"])(ReixsAll, [{
    key: "_initRequest",
    value: function _initRequest() {
      var _config = this._config,
          _sendRequest = this._sendRequest,
          _execute = this._execute,
          _hook = this._hook;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * Concurrent all scheduler
     * 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _schedulers, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _schedulers = this._schedulers;
                _context.next = 3;
                return Promise.all(_schedulers.map(function (scheduler) {
                  return new Promise(function (resolve) {
                    scheduler.request.call(Object.assign({}, scheduler, {
                      injection: function injection(data) {
                        resolve(data);
                      }
                    }));
                  });
                }));

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }]);
  return ReixsAll;
}(_scheduler["default"]);

exports["default"] = ReixsAll;

},{"../create-request":25,"./scheduler":24,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createRequest = _interopRequireDefault(require("../create-request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Multiple request race
 */
var ReixsRace =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(ReixsRace, _Scheduler);

  function ReixsRace() {
    var _this;

    (0, _classCallCheck2["default"])(this, ReixsRace);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReixsRace).call(this));
    _this._schedulers = [];

    for (var _len = arguments.length, schedulers = new Array(_len), _key = 0; _key < _len; _key++) {
      schedulers[_key] = arguments[_key];
    }

    _this._schedulers = schedulers;

    _this._initRequest();

    return _this;
  }
  /**
   * Create request function
   */


  (0, _createClass2["default"])(ReixsRace, [{
    key: "_initRequest",
    value: function _initRequest() {
      var _config = this._config,
          _sendRequest = this._sendRequest,
          _execute = this._execute,
          _hook = this._hook;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * The scheduler for the race
     * 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _schedulers, data;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _schedulers = this._schedulers;
                _context.next = 3;
                return Promise.race(_schedulers.map(function (scheduler) {
                  return new Promise(function (resolve) {
                    scheduler.request.call(Object.assign({}, scheduler, {
                      injection: function injection(data) {
                        resolve(data);
                      }
                    }));
                  });
                }));

              case 3:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }]);
  return ReixsRace;
}(_scheduler["default"]);

exports["default"] = ReixsRace;

},{"../create-request":25,"./scheduler":24,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/regenerator":18}],23:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _utils = require("../../shared/utils");

var _constants = require("../../shared/constants");

var _createRequest = _interopRequireDefault(require("../create-request"));

var request = _interopRequireWildcard(require("../request"));

var _scheduler = _interopRequireDefault(require("./scheduler"));

/**
 *  Separate request object
 */
var Reixs =
/*#__PURE__*/
function (_Scheduler) {
  (0, _inherits2["default"])(Reixs, _Scheduler);

  function Reixs(url) {
    var _this;

    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck2["default"])(this, Reixs);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Reixs).call(this)); // Initialize the http

    _this._http = {
      url: '',
      method: null,
      header: {},
      params: null,
      cookie: true // Data filtering

    };
    _this._pipes = {
      reqPipes: [],
      resPipes: [] // Different stage interceptors

    };
    _this._interceptors = {
      beforeReq: null,
      afterReq: null,
      beforeRes: null,
      afterRes: null
      /**
       * Complete request header
       * 
       * @return {Object} 
       */

    };
    _this._http = Object.assign({}, _this._http, {
      url: url,
      params: params
    });

    _this.setMethod(method); // Create request function


    _this._initRequest();

    return _this;
  } // Multiple requests Shared


  (0, _createClass2["default"])(Reixs, [{
    key: "_getParams",

    /**
     * Complete request parameters
     * 
     * @param {Object} params 
     */
    value: function _getParams(params) {
      if ((0, _typeof2["default"])(params) !== 'object') return params;
      var globalParams = Reixs.global.globalParams;
      return Object.assign(globalParams, params);
    }
    /**
     * Create request function
     */

  }, {
    key: "_initRequest",
    value: function _initRequest() {
      var _config = this._config,
          _sendRequest = this._sendRequest,
          _execute = this._execute,
          _hook = this._hook;
      this.request = (0, _createRequest["default"])(_config, _sendRequest.bind(this), _execute.bind(this), _hook);
    }
    /**
     * Set the request url
     * 
     * @param {string} url 
     */

  }, {
    key: "setUrl",
    value: function setUrl(url) {
      if (typeof url === 'string') {
        this._http.url = url;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Set the request header
     * 
     * @param {Object} header 
     */

  }, {
    key: "setHeader",
    value: function setHeader(header) {
      if ((0, _utils.isPlainObject)(header)) {
        this._http.header = header;
      } else {
        throw new Error('The argument passed in must be a literal object');
      }

      return this;
    }
    /**
     * Set request parameters
     * 
     * @param {*} params 
     */

  }, {
    key: "setParams",
    value: function setParams(params) {
      if ((0, _typeof2["default"])(params) !== 'object' || (0, _utils.isPlainObject)(params) || Array.isArray(params)) {
        this._http.params = params;
      } else {
        throw new Error('When the parameter type is object, The argument passed in must be a literal object');
      }

      return this;
    }
    /**
     * Set whether to carry cookies
     * 
     * @param {boolean} ifCookie 
     */

  }, {
    key: "setCookie",
    value: function setCookie(ifCookie) {
      if (typeof ifCookie === 'boolean') {
        this._http.cookie = ifCookie;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Set the request method
     * 
     * @param {string} method 
     */

  }, {
    key: "setMethod",
    value: function setMethod() {
      var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      method = method.toLowerCase();

      if (_constants.METHOD_TYPES.includes(method)) {
        this._http.method = method;
      } else {
        throw new Error('Invalid method');
      }

      return this;
    }
    /**
     * Set the request filter pipeline
     * 
     * @param  {...any} pipes 
     */

  }, {
    key: "reqPipes",
    value: function reqPipes() {
      for (var _len = arguments.length, pipes = new Array(_len), _key = 0; _key < _len; _key++) {
        pipes[_key] = arguments[_key];
      }

      if (pipes.find(function (pipe) {
        return typeof pipe !== 'function';
      })) {
        throw new Error('Pipe must be a function');
      } else {
        this._pipes.reqPipes = [].concat(pipes);
      }

      return this;
    }
    /**
     * Set the response filter pipeline
     * 
     * @param  {...any} pipes 
     */

  }, {
    key: "resPipes",
    value: function resPipes() {
      for (var _len2 = arguments.length, pipes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        pipes[_key2] = arguments[_key2];
      }

      if (pipes.find(function (pipe) {
        return typeof pipe !== 'function';
      })) {
        throw new Error('Pipe must be a function');
      } else {
        this._pipes.resPipes = [].concat(pipes);
      }

      return this;
    }
    /**
     * Set request interceptor
     * @param {Function} interceptor 
     */

  }, {
    key: "reqInterceptor",
    value: function reqInterceptor(interceptor) {
      if (typeof interceptor === 'function') {
        if (this._pipes.reqPipes.length) {
          this._interceptors.afterReq = interceptor;
        } else {
          this._interceptors.beforeReq = interceptor;
        }

        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Set response interceptor
     * @param {Function} interceptor 
     */

  }, {
    key: "resInterceptor",
    value: function resInterceptor(interceptor) {
      if (typeof interceptor === 'function') {
        if (this._pipes.resPipes.length) {
          this._interceptors.afterRes = interceptor;
        } else {
          this._interceptors.beforeRes = interceptor;
        }

        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Send the request to the server
     * 
     * @param {*} params 
     * @param {string} type 
     */

  }, {
    key: "_sendRequest",
    value: function () {
      var _sendRequest2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var params,
            type,
            _this$_http,
            url,
            method,
            cookie,
            errorHook,
            _this$_pipes,
            reqPipes,
            resPipes,
            _this$_interceptors,
            beforeReq,
            afterReq,
            beforeRes,
            afterRes,
            _this$constructor$glo,
            globalReqPipes,
            globalResPipes,
            globalBeforeReq,
            globalAfterReq,
            globalBeforeRes,
            globalAfterRes,
            requestType,
            requestParams,
            finalParams,
            data,
            finalData,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : this._http.params;
                type = _args.length > 1 ? _args[1] : undefined;
                _this$_http = this._http, url = _this$_http.url, method = _this$_http.method, cookie = _this$_http.cookie;
                errorHook = this._hook.errorHook;
                _this$_pipes = this._pipes, reqPipes = _this$_pipes.reqPipes, resPipes = _this$_pipes.resPipes;
                _this$_interceptors = this._interceptors, beforeReq = _this$_interceptors.beforeReq, afterReq = _this$_interceptors.afterReq, beforeRes = _this$_interceptors.beforeRes, afterRes = _this$_interceptors.afterRes;
                _this$constructor$glo = this.constructor.global, globalReqPipes = _this$constructor$glo.reqPipes, globalResPipes = _this$constructor$glo.resPipes, globalBeforeReq = _this$constructor$glo.beforeReq, globalAfterReq = _this$constructor$glo.afterReq, globalBeforeRes = _this$constructor$glo.beforeRes, globalAfterRes = _this$constructor$glo.afterRes;
                requestType = type ? type : method;
                requestParams = this._getParams(params); // Front request interceptor

                if (!(globalBeforeReq && globalBeforeReq(requestParams) === false || beforeReq && beforeReq(requestParams) === false)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                try {
                  finalParams = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalReqPipes), (0, _toConsumableArray2["default"])(reqPipes)), requestParams);
                } catch (error) {
                  errorHook(error);
                } // Rear request interceptor


                if (!(globalAfterReq && globalAfterReq(finalParams) === false || afterReq && afterReq(finalParams) === false)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                _context.next = 16;
                return request[requestType](url, finalParams, this.requesetHeader, cookie);

              case 16:
                data = _context.sent;

                if (!(globalBeforeRes && globalBeforeRes(data) === false || beforeRes && beforeRes(data) === false)) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return");

              case 19:
                try {
                  finalData = (0, _utils.dataFiltering)([].concat((0, _toConsumableArray2["default"])(globalResPipes), (0, _toConsumableArray2["default"])(resPipes)), data);
                } catch (error) {
                  errorHook(error);
                } // Rear response interceptor


                if (!(globalAfterRes && globalAfterRes(finalData) === false || afterRes && afterRes(finalData) === false)) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt("return");

              case 22:
                return _context.abrupt("return", finalData);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _sendRequest() {
        return _sendRequest2.apply(this, arguments);
      }

      return _sendRequest;
    }()
  }, {
    key: "requesetHeader",
    get: function get() {
      var header = this._http.header;
      var globalHeader = Reixs.global.globalHeader;
      return Object.assign(globalHeader, header);
    }
  }]);
  return Reixs;
}(_scheduler["default"]); // Bind request category 


Reixs.global = {
  globalHeader: {},
  globalParams: {},
  reqPipes: [],
  resPipes: [],
  beforeReq: null,
  afterReq: null,
  beforeRes: null,
  afterRes: null // Network request information

};

_constants.METHOD_TYPES.map(function (requestType) {
  Reixs.prototype[requestType] = function (params) {
    this.request(params, requestType);
  };
});

var _default = Reixs;
exports["default"] = _default;

},{"../../shared/constants":32,"../../shared/utils":33,"../create-request":25,"../request":30,"./scheduler":24,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/interopRequireWildcard":11,"@babel/runtime/helpers/possibleConstructorReturn":14,"@babel/runtime/helpers/toConsumableArray":16,"@babel/runtime/helpers/typeof":17,"@babel/runtime/regenerator":18}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * The underlying request model
 */
var Scheduler =
/*#__PURE__*/
function () {
  function Scheduler() {
    (0, _classCallCheck2["default"])(this, Scheduler);
    this._config = {
      throttle: false,
      debounce: 0,
      audit: false,
      overtime: null // Life cycle function

    };
    this._hook = {
      prepareHook: null,
      tartHook: null,
      endHook: null,
      errorHook: null // Task queue executed after the request is completed

    };
    this._taskList = new Map();
  }

  (0, _createClass2["default"])(Scheduler, [{
    key: "_execute",

    /**
     * Circular call task
     * @param {*} data 
     */
    value: function _execute(data) {
      var errorHook = this._hook.errorHook;

      if (data !== undefined) {
        try {
          (0, _toConsumableArray2["default"])(this._taskList.keys()).forEach(function (task) {
            task(data);
          });
        } catch (error) {
          errorHook && errorHook(error);
        }
      }
    }
    /**
     * Set throttle
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "throttle",
    value: function throttle(settings) {
      if (typeof settings === 'number' || settings === false) {
        this._config.throttle = settings;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Set debounce
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "debounce",
    value: function debounce(settings) {
      if (typeof settings === 'number' || settings === false) {
        this._config.debounce = settings;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Set audit
     * 
     * @param {number|boolean} settings 
     */

  }, {
    key: "audit",
    value: function audit(settings) {
      if (typeof settings === 'number' || typeof settings === 'boolean') {
        this._config.audit = settings;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Set overtime
     * 
     * @param {number|null} time 
     */

  }, {
    key: "overtime",
    value: function overtime(time) {
      if (typeof time === 'number' || time === null) {
        this._config.overtime = time;
      } else {
        throw new Error('Invalid type');
      }

      return this;
    }
    /**
     * Add task
     * 
     * @param {Function} task 
     */

  }, {
    key: "task",
    value: function task(_task) {
      if (typeof _task === 'function') {
        this._taskList.set(_task);

        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Remove assigned task
     * 
     * @param {Function} task 
     */

  }, {
    key: "removeTask",
    value: function removeTask(task) {
      if (!this._taskList["delete"](task)) {
        throw new Error('Remove task failed');
      }
    }
    /**
     * Remove all task
     */

  }, {
    key: "removeAllTask",
    value: function removeAllTask() {
      this._taskList.clear();
    }
    /**
     * Request to prepare
     * 
     * @param {Function} prepareHook 
     */

  }, {
    key: "prepare",
    value: function prepare(prepareHook) {
      if (typeof prepareHook === 'function') {
        this._hook.prepareHook = prepareHook;
        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to start
     * 
     * @param {Function} startHook 
     */

  }, {
    key: "start",
    value: function start(startHook) {
      if (typeof startHook === 'function') {
        this._hook.startHook = startHook;
        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to end
     * 
     * @param {Function} endHook 
     */

  }, {
    key: "end",
    value: function end(endHook) {
      if (typeof endHook === 'function') {
        this._hook.endHook = endHook;
        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
    /**
     * Request to error
     * 
     * @param {Function} errorHook 
     */

  }, {
    key: "error",
    value: function error(errorHook) {
      if (typeof errorHook === 'function') {
        this._hook.errorHook = errorHook;
        return this;
      } else {
        throw new Error('Invalid type');
      }
    }
  }]);
  return Scheduler;
}(); // Scheduler is blocked from inheriting an Object


Object.setPrototypeOf(Scheduler.prototype, Object.create(null));
var _default = Scheduler;
exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/toConsumableArray":16}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _markMap = _interopRequireDefault(require("./mark-map"));

var _wait = require("./wait");

var _requestTimer = _interopRequireDefault(require("./request-timer"));

/**
 * The method to create the request
 * 
 * @param {Object} config 
 * @param {Function} sendRequest 
 * @param {Array} execute 
 * @param {Object} hook 
 */
function _default(config, sendRequest, execute, hook) {
  var markMap = new _markMap["default"]();
  var throttleWait = new _wait.ThrottleWait();
  var debounceWait = new _wait.DebounceWait();
  return (
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var prepareHook,
          startHook,
          endHook,
          throttle,
          debounce,
          audit,
          overtime,
          injection,
          mark,
          _ref2,
          timeout,
          data,
          _args = arguments;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              prepareHook = hook.prepareHook, startHook = hook.startHook, endHook = hook.endHook;
              throttle = config.throttle, debounce = config.debounce, audit = config.audit, overtime = config.overtime; // External rewrite method

              injection = this.injection;
              prepareHook && prepareHook();

              if (audit) {
                mark = markMap.get(audit);
              }

              _context.next = 7;
              return Promise.all([throttleWait.get(throttle), debounceWait.get(debounce)]);

            case 7:
              startHook && startHook();
              _context.next = 10;
              return (0, _requestTimer["default"])(sendRequest.apply(void 0, _args), overtime);

            case 10:
              _ref2 = _context.sent;
              timeout = _ref2.timeout;
              data = _ref2.data;

              if (!(data === undefined)) {
                _context.next = 16;
                break;
              }

              endHook && endHook();
              return _context.abrupt("return");

            case 16:
              // If audit is set, the duplicate request is discarded
              if (!audit || markMap.test(mark)) {
                // If the timeout occurs, the task is not processed
                if (!timeout) {
                  if (injection) {
                    injection(data);
                  }

                  execute(data);
                }

                endHook && endHook();
              }

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))
  );
}

},{"./mark-map":26,"./request-timer":27,"./wait":28,"@babel/runtime/helpers/asyncToGenerator":4,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/regenerator":18}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Verify that mark is deprecated
 */
var _default =
/*#__PURE__*/
function () {
  function _default() {
    (0, _classCallCheck2["default"])(this, _default);
    this._map = [];
  }

  (0, _createClass2["default"])(_default, [{
    key: "get",

    /**
     * Get mark
     * @param {number|boolean} audit 
     */
    value: function get(audit) {
      var _map = this._map;

      if (audit) {
        var sym = Symbol();
        var time = Date.now();
        var sign;

        if (!_map.length || time - _map[_map.length - 1].time > audit && audit !== true) {
          sign = {
            sym: sym,
            time: time
          };

          _map.push(sign);
        } else {
          sign = _map[_map.length - 1];
          sign.sym = sym;
          sign.time = time;
        }

        return {
          sign: sign,
          sym: sign.sym
        };
      }

      return null;
    }
    /**
     * Verify the mark
     * @param {Object} mark 
     */

  }, {
    key: "test",
    value: function test(mark) {
      if (mark && mark.sym !== mark.sign.sym) {
        return false;
      }

      if (mark) {
        var _map = this._map;

        var index = _map.indexOf(mark.sign);

        _map.splice(index, 1);
      }

      return true;
    }
  }]);
  return _default;
}();

exports["default"] = _default;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/interopRequireDefault":10}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = requestTimer;

/**
 * Create delay promise
 * 
 * @param {number} time 
 */
function createWait(time) {
  return time === 0 ? Promise.resolve() : new Promise(function (resolve) {
    setTimeout(function () {
      return resolve();
    }, time);
  });
}
/**
 * Detect timeout
 * 
 * @param {Promise} promise 
 * @param {null|number} time 
 */


function requestTimer(promise, time) {
  var request = promise.then(function (data) {
    return {
      timeout: false,
      data: data
    };
  });
  var timer = createWait(time).then(function () {
    return {
      timeout: true,
      data: null
    };
  });
  return time === null ? request : Promise.race([request, timer]);
}

},{}],28:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceWait = exports.ThrottleWait = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Create wait object
 */
var Wait =
/*#__PURE__*/
function () {
  function Wait() {
    (0, _classCallCheck2["default"])(this, Wait);
    this._timer = null;
  }

  (0, _createClass2["default"])(Wait, [{
    key: "_createPromise",

    /**
     * Create internal promise
     * @param {number} time 
     */
    value: function _createPromise(time) {
      var _this = this;

      return time ? new Promise(function (resolve) {
        _this._timer = setTimeout(function () {
          _this._timer = null;
          resolve();
        }, time);
      }) : Promise.resolve();
    }
  }]);
  return Wait;
}();
/**
 * Create debounce wait object
 */


var ThrottleWait =
/*#__PURE__*/
function (_Wait) {
  (0, _inherits2["default"])(ThrottleWait, _Wait);

  function ThrottleWait() {
    (0, _classCallCheck2["default"])(this, ThrottleWait);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ThrottleWait).call(this));
  }
  /**
   * get await promise
   * @param {number} time 
   */


  (0, _createClass2["default"])(ThrottleWait, [{
    key: "get",
    value: function get(time) {
      if (this._timer) {
        return new Promise(function () {});
      }

      return this._createPromise(time);
    }
  }]);
  return ThrottleWait;
}(Wait);
/**
 * Create debounce wait object
 */


exports.ThrottleWait = ThrottleWait;

var DebounceWait =
/*#__PURE__*/
function (_Wait2) {
  (0, _inherits2["default"])(DebounceWait, _Wait2);

  function DebounceWait() {
    (0, _classCallCheck2["default"])(this, DebounceWait);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DebounceWait).call(this));
  }
  /**
   * get await promise
   * @param {number} time 
   */


  (0, _createClass2["default"])(DebounceWait, [{
    key: "get",
    value: function get(time) {
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }

      return this._createPromise(time);
    }
  }]);
  return DebounceWait;
}(Wait);

exports.DebounceWait = DebounceWait;

},{"@babel/runtime/helpers/classCallCheck":5,"@babel/runtime/helpers/createClass":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":14}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleFetch;

/**
 * Check for success
 * 
 * @param {Object} response 
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    var contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      return response.text();
    }
  } else {
    throw new Error();
  }
}
/**
 * Handle fetch
 * 
 * @param {Object} promise 
 */


function handleFetch(promise) {
  return promise.then(function (response) {
    return checkStatus(response);
  })["catch"](function (error) {
    throw error;
  });
}

},{}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.push = push;
exports.post = post;
exports.form = form;

var _constants = require("../../shared/constants");

var _handleFetch = _interopRequireDefault(require("./handle-fetch"));

var _utils = require("../../shared/utils");

/**
 * Query String Parameters
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */
function get(url, data, headers, cookie) {
  url = new URL(url);

  if ((0, _utils.isPlainObject)(data)) {
    Object.keys(data).forEach(function (key) {
      return url.searchParams.append(key, data[key]);
    });
  } else {
    url.search = data.toString();
  }

  var promise = fetch(url, {
    method: 'GET',
    headers: Object.assign({}, headers),
    credentials: cookie ? 'include' : 'omit'
  });
  return (0, _handleFetch["default"])(promise);
}
/**
 * Dynamic Router
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function push(url, data, headers, cookie) {
  url = new URL(url);
  url.pathname += "/".concat(data.toString());
  var promise = fetch(url, {
    method: 'GET',
    headers: Object.assign({}, headers),
    credentials: cookie ? 'include' : 'omit'
  });
  return (0, _handleFetch["default"])(promise);
}
/**
 * Request Payload
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function post(url, data, headers, cookie) {
  url = new URL(url);

  if ((0, _utils.isPlainObject)(data)) {
    data = JSON.stringify(data);
  }

  var promise = fetch(url, {
    method: 'POST',
    body: data.toString(),
    headers: Object.assign({
      'Content-type': _constants.CONTENT_TYPE['JSON']
    }, headers),
    credentials: cookie ? 'include' : 'omit'
  });
  return (0, _handleFetch["default"])(promise);
}
/**
 * Form Data
 *
 * @param {string} url
 * @param {*} data
 * @param {Object} headers
 * @param {boolean} cookie
 */


function form(url, data, headers, cookie) {
  url = new URL(url);
  var fromData = '';

  if ((0, _utils.isPlainObject)(data)) {
    Object.keys(data).forEach(function (key) {
      fromData += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]), "&");
    });
  } else {
    fromData = data.toString();
  }

  var promise = fetch(url, {
    method: 'POST',
    body: fromData,
    headers: Object.assign({
      'Content-type': _constants.CONTENT_TYPE['FORM']
    }, headers),
    credentials: cookie ? 'include' : 'omit'
  });
  return (0, _handleFetch["default"])(promise);
}

},{"../../shared/constants":32,"../../shared/utils":33,"./handle-fetch":29,"@babel/runtime/helpers/interopRequireDefault":10}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _constructor = require("./core/constructor");

var _utils = require("./shared/utils");

/**
 * Set pipe 
 * 
 * @param {string} name 
 * @param  {...any} funList 
 */
function setPipes(name) {
  for (var _len = arguments.length, funList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funList[_key - 1] = arguments[_key];
  }

  funList.forEach(function (fn) {
    if (typeof fn !== 'function') {
      throw new Error('Invalid type');
    }
  });
  _constructor.Reixs.global[name] = [].concat(funList);
}
/**
 * Set Interceptor
 * 
 * @param {string} name 
 * @param {Function} fun 
 */


function setInterceptor(name, fun) {
  if (typeof fn === 'function') {
    _constructor.Reixs.global[name] = fun;
  } else {
    throw new Error('Invalid type');
  }
}
/**
 * reixs method
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {*} params 
 */


function reixs(url, method, params) {
  return new _constructor.Reixs(url, method, params);
} // reixs.all


reixs.all = function () {
  for (var _len2 = arguments.length, scheduler = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    scheduler[_key2] = arguments[_key2];
  }

  return (0, _construct2["default"])(_constructor.ReixsAll, scheduler);
}; // reixs.race


reixs.race = function () {
  for (var _len3 = arguments.length, scheduler = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    scheduler[_key3] = arguments[_key3];
  }

  return (0, _construct2["default"])(_constructor.ReixsRace, scheduler);
}; // Replaced by browserify-versionify transform


reixs.version = '0.1.1'; // Set request and response pipe

reixs.reqPipes = setPipes.bind(null, 'reqPipes');
reixs.resPipes = setPipes.bind(null, 'resPipes'); // Set request and response interceptor

reixs.beforeReq = setInterceptor.bind(null, 'beforeReq');
reixs.afterReq = setInterceptor.bind(null, 'afterReq');
reixs.beforeRes = setInterceptor.bind(null, 'beforeRes');
reixs.afterRes = setInterceptor.bind(null, 'afterRes'); // Set global header

Reflect.defineProperty(reixs, 'globalHeader', {
  set: function set(value) {
    if ((0, _utils.isPlainObject)(value)) {
      _constructor.Reixs.global.globalHeader = value;
    } else {
      throw new Error('The argument passed in must be a literal object');
    }
  }
}); // Set global params

Reflect.defineProperty(reixs, 'globalParams', {
  set: function set(value) {
    if ((0, _utils.isPlainObject)(value)) {
      _constructor.Reixs.global.globalParams = value;
    } else {
      throw new Error('The argument passed in must be a literal object');
    }
  }
});
var _default = reixs;
exports["default"] = _default;

},{"./core/constructor":20,"./shared/utils":33,"@babel/runtime/helpers/construct":6,"@babel/runtime/helpers/interopRequireDefault":10}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTENT_TYPE = exports.METHOD_TYPES = void 0;
var METHOD_TYPES = ['get', 'post', 'form', 'push'];
exports.METHOD_TYPES = METHOD_TYPES;
var CONTENT_TYPE = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded; charset=UTF-8'
};
exports.CONTENT_TYPE = CONTENT_TYPE;

},{}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataFiltering = dataFiltering;
exports.isPlainObject = isPlainObject;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Data processing
 * 
 * @param {Array} pipes 
 * @param {*} data 
 */
function dataFiltering(pipes, data) {
  var newData = [data].concat((0, _toConsumableArray2["default"])(pipes)).reduce(function (prev, cur) {
    return cur(prev);
  });
  return newData;
}
/**
 * Determines whether it is a literal object
 * 
 * @param {Object} obj 
 */


function isPlainObject(obj) {
  if ((0, _typeof2["default"])(obj) !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

},{"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/toConsumableArray":16,"@babel/runtime/helpers/typeof":17}]},{},[1])(1)
});

//# sourceMappingURL=reixs.js.map
