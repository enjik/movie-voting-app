/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/enjikim/Desktop/CodingProjects/movie-voting-app/client/src/index.jsx: Unexpected token, expected \\\",\\\" (39:77)\\n\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m        })\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 | \\u001b[39m      })\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 39 | \\u001b[39m      \\u001b[33m.\\u001b[39m\\u001b[36mcatch\\u001b[39m(error \\u001b[33m=>\\u001b[39m console\\u001b[33m.\\u001b[39mlog(\\u001b[32m'Axios could not retrieve movies:'\\u001b[39m\\u001b[33m,\\u001b[39m error))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                                                             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m    })\\u001b[0m\\n\\u001b[0m \\u001b[90m 41 | \\u001b[39m    \\u001b[33m.\\u001b[39m\\u001b[36mcatch\\u001b[39m(error \\u001b[33m=>\\u001b[39m console\\u001b[33m.\\u001b[39mlog(\\u001b[32m'Axios could not post new movie:'\\u001b[39m\\u001b[33m,\\u001b[39m error))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 | \\u001b[39m  }\\u001b[0m\\n    at _class.raise (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:4028:15)\\n    at _class.unexpected (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5359:16)\\n    at _class.expect (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5347:28)\\n    at _class.parseCallExpressionArguments (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:6281:14)\\n    at _class.parseSubscript (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:6191:32)\\n    at _class.parseSubscripts (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:6101:19)\\n    at _class.parseExprSubscripts (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:6091:17)\\n    at _class.parseMaybeUnary (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:6060:21)\\n    at _class.parseExprOps (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5945:21)\\n    at _class.parseMaybeConditional (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5917:21)\\n    at _class.parseMaybeAssign (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5864:21)\\n    at _class.parseExpression (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:5817:21)\\n    at _class.parseStatementContent (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7592:21)\\n    at _class.parseStatement (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7478:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8046:23)\\n    at _class.parseBlockBody (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8033:10)\\n    at _class.parseBlock (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8022:10)\\n    at _class.parseFunctionBody (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7130:24)\\n    at _class.parseFunctionBodyAndFinish (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7112:10)\\n    at _class.parseMethod (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7054:10)\\n    at _class.pushClassMethod (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8442:30)\\n    at _class.parseClassMemberWithIsStatic (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8367:12)\\n    at _class.parseClassMember (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8309:10)\\n    at /Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8263:16\\n    at _class.withTopicForbiddingContext (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7402:14)\\n    at _class.parseClassBody (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8238:10)\\n    at _class.parseClass (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8209:10)\\n    at _class.parseStatementContent (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7506:21)\\n    at _class.parseStatement (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:7478:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/enjikim/Desktop/CodingProjects/movie-voting-app/node_modules/@babel/parser/lib/index.js:8046:23)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });