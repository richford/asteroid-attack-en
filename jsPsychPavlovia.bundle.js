/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/jsPsychPavlovia.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* eslint-disable */

/**
 * jsPsych plugin (version > 7.0) for pavlovia.org
 *
 * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
 * and uploads data to the server.
 *
 * @author Alain Pitiot
 * @version 2022.1.1
 * @copyright (c) 2017-2020 Ilixa Ltd. (http://ilixa.com) (c) 2020-2021 Open Science Tools Ltd.
 *   (https://opensciencetools.org)
 * @license Distributed under the terms of the MIT License
 */

/**
 * **pavlovia**
 *
 * This plugin handles communications with the pavlovia.org server: it opens and closes sessions,
 * and uploads data to the server.
 *
 * @author Alain Pitiot
 * @see {@link https://pavlovia.org/docs/experiments/create-jsPsych Running jsPsych experiments from Pavlovia}
 */
var PavloviaPlugin = /*#__PURE__*/function () {
  function PavloviaPlugin(jsPsych) {
    _classCallCheck(this, PavloviaPlugin);

    this._jsPsych = jsPsych;
  }
  /**
   * Run the plugin.
   *
   * @param {HTMLElement} display_element - the HTML DOM element where jsPsych content
   * 	is rendered
   * @param {Object} trial - the jsPsych trial
   * @public
   */


  _createClass(PavloviaPlugin, [{
    key: "trial",
    value: function () {
      var _trial2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(display_element, _trial) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _trial.command.toLowerCase();
                _context.next = _context.t0 === 'init' ? 3 : _context.t0 === 'finish' ? 6 : 10;
                break;

              case 3:
                _context.next = 5;
                return this._init(_trial);

              case 5:
                return _context.abrupt("break", 11);

              case 6:
                data = this._jsPsych.data.get().csv();
                _context.next = 9;
                return this._finish(_trial, data);

              case 9:
                return _context.abrupt("break", 11);

              case 10:
                _trial.errorCallback('unknown command: ' + _trial.command);

              case 11:
                // end trial
                this._jsPsych.finishTrial();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function trial(_x, _x2) {
        return _trial2.apply(this, arguments);
      }

      return trial;
    }()
    /**
     * The default error callback function.
     *
     * Error messages are displayed in the body of the document and in the browser's console.
     *
     * @param {Object} error - the error json object to be displayed.
     * @public
     */

  }, {
    key: "_init",
    value:
    /**
     * Initialise the connection with pavlovia.org: configure the plugin and open a new session.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json configuration file
     * @returns {Promise<void>}
     * @private
     */
    function () {
      var _init2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(trial) {
        var _this = this;

        var configURL,
            response,
            _beforeunloadCallback,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                configURL = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'config.json';
                _context2.prev = 1;
                _context2.next = 4;
                return this._configure(configURL);

              case 4:
                response = _context2.sent;
                PavloviaPlugin._config = response.config;

                this._log('init | _configure.response=', response); // open a new session:


                _context2.next = 9;
                return this._openSession();

              case 9:
                response = _context2.sent;

                // _config.experiment.token = response.token;
                this._log('init | _openSession.response=', response); // warn the user when they attempt to close the tab or browser:


                _beforeunloadCallback = function _beforeunloadCallback(event) {
                  // preventDefault should ensure that the user gets prompted:
                  event.preventDefault(); // Chrome requires returnValue to be set:

                  event.returnValue = '';
                };

                window.addEventListener('beforeunload', _beforeunloadCallback); // when the user closes the tab or browser, we attempt to close the session
                // and optionally save the results
                // note: we communicate with the server using the Beacon API

                window.addEventListener('unload', function (event) {
                  if (PavloviaPlugin._config.session.status === 'OPEN') {
                    // get and save the incomplete results if need be:
                    if (PavloviaPlugin._config.experiment.saveIncompleteResults) {
                      var data = _this._jsPsych.data.get().csv();

                      _this._save(trial, data, true);
                    } // close the session:


                    _this._closeSession(false, true);
                  }
                });
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](1);
                trial.errorCallback(_context2.t0);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 16]]);
      }));

      function _init(_x3) {
        return _init2.apply(this, arguments);
      }

      return _init;
    }()
    /**
     * Finish the connection with pavlovia.org: upload the collected data and close the session.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {Object} data - the experiment data to be uploaded
     * @returns {Promise<void>}
     * @private
     */

  }, {
    key: "_finish",
    value: function () {
      var _finish2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(trial, data) {
        var msg, displayElement, sync, response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                // remove the beforeunload listener:
                window.removeEventListener('beforeunload', PavloviaPlugin._beforeunloadCallback); // tell the participant that the data is being uploaded:

                msg = 'Please wait a moment while the data are uploaded to the pavlovia.org server...';
                displayElement = this._jsPsych.getDisplayElement();
                displayElement.innerHTML = '<pre id="pavlovia-data-upload"></pre>';
                document.getElementById('pavlovia-data-upload').textContent = msg; // upload the data to pavlovia.org:

                sync = typeof trial.sync !== 'undefined' ? trial.sync : false;
                _context3.next = 9;
                return this._save(trial, data, sync);

              case 9:
                response = _context3.sent;

                this._log('finish | _save.response=', response); // check for errors:


                if (!('serverData' in response && 'error' in response.serverData)) {
                  _context3.next = 13;
                  break;
                }

                throw response.serverData;

              case 13:
                _context3.next = 15;
                return this._closeSession(true, false);

              case 15:
                response = _context3.sent;

                this._log('finish | _closeSession.response=', response);

                _context3.next = 22;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                trial.errorCallback(_context3.t0);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      function _finish(_x4, _x5) {
        return _finish2.apply(this, arguments);
      }

      return _finish;
    }()
    /**
     * Configure the plugin by reading the configuration file created upon activation
     * of the experiment.
     *
     * @param {string} [configURL= "config.json"] - the URL of the pavlovia.org json
     * 	configuration file
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_configure",
    value: function () {
      var _configure2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(configURL) {
        var response, configurationResponse, urlQuery, urlParameters;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                response = {
                  origin: '_configure',
                  context: 'when configuring the plugin'
                };
                _context4.prev = 1;
                _context4.next = 4;
                return this._getConfiguration(configURL);

              case 4:
                configurationResponse = _context4.sent;

                // legacy experiments had a psychoJsManager block instead of a pavlovia block, and the URL
                // pointed to https://pavlovia.org/server
                if ('psychoJsManager' in configurationResponse.config) {
                  delete configurationResponse.config.psychoJsManager;
                  configurationResponse.config.pavlovia = {
                    URL: 'https://pavlovia.org'
                  };
                } // tests for the presence of essential blocks in the configuration:


                if ('experiment' in configurationResponse.config) {
                  _context4.next = 8;
                  break;
                }

                throw 'missing experiment block in configuration';

              case 8:
                if ('name' in configurationResponse.config.experiment) {
                  _context4.next = 10;
                  break;
                }

                throw 'missing name in experiment block in configuration';

              case 10:
                if ('fullpath' in configurationResponse.config.experiment) {
                  _context4.next = 12;
                  break;
                }

                throw 'missing fullpath in experiment block in configuration';

              case 12:
                if ('pavlovia' in configurationResponse.config) {
                  _context4.next = 14;
                  break;
                }

                throw 'missing pavlovia block in configuration';

              case 14:
                if ('URL' in configurationResponse.config.pavlovia) {
                  _context4.next = 16;
                  break;
                }

                throw 'missing URL in pavlovia block in configuration';

              case 16:
                // get the server parameters (those starting with a double underscore):
                urlQuery = window.location.search.slice(1);
                urlParameters = new URLSearchParams(urlQuery);
                urlParameters.forEach(function (value, key) {
                  if (key.indexOf('__') === 0) {
                    PavloviaPlugin._serverMsg.set(key, value);
                  }
                });
                return _context4.abrupt("return", configurationResponse);

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](1);
                throw _objectSpread(_objectSpread({}, response), {}, {
                  error: _context4.t0
                });

              case 25:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 22]]);
      }));

      function _configure(_x6) {
        return _configure2.apply(this, arguments);
      }

      return _configure;
    }()
    /**
     * Get the pavlovia.org json configuration file.
     *
     * @param {string} configURL - the URL of the pavlovia.org json configuration file
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_getConfiguration",
    value: function _getConfiguration(configURL) {
      var response = {
        origin: '_getConfiguration',
        context: 'when reading the configuration file: ' + configURL
      };
      return new Promise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
          var serverResponse, serverData;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return fetch(configURL, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer'
                  });

                case 3:
                  serverResponse = _context5.sent;
                  _context5.next = 6;
                  return serverResponse.json();

                case 6:
                  serverData = _context5.sent;
                  resolve(_objectSpread(_objectSpread({}, response), {}, {
                    config: serverData
                  }));
                  _context5.next = 14;
                  break;

                case 10:
                  _context5.prev = 10;
                  _context5.t0 = _context5["catch"](0);
                  console.error(_context5.t0);
                  reject(_objectSpread(_objectSpread({}, response), {}, {
                    error: _context5.t0
                  }));

                case 14:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[0, 10]]);
        }));

        return function (_x7, _x8) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * Open a new session for this experiment on pavlovia.org.
     *
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_openSession",
    value: function _openSession() {
      var response = {
        origin: '_openSession',
        context: 'when opening a session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
      }; // prepare a POST query:

      var formData = new FormData();

      if (PavloviaPlugin._serverMsg.has('__pilotToken')) {
        formData.append('pilotToken', PavloviaPlugin._serverMsg.get('__pilotToken'));
      } // query pavlovia server:


      return new Promise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
          var url, serverResponse, serverData;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  url = "".concat(PavloviaPlugin._config.pavlovia.URL, "/api/v2/experiments/").concat(PavloviaPlugin._config.gitlab.projectId, "/sessions");
                  _context6.prev = 1;
                  _context6.next = 4;
                  return fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                    body: formData
                  });

                case 4:
                  serverResponse = _context6.sent;
                  _context6.next = 7;
                  return serverResponse.json();

                case 7:
                  serverData = _context6.sent;

                  // check for required attributes:
                  if (!('token' in serverData)) {
                    reject(Object.assign(response, {
                      error: 'unexpected answer from server: no token'
                    }));
                  }

                  if (!('experiment' in serverData)) {
                    reject(Object.assign(response, {
                      error: 'unexpected answer from server: no experiment'
                    }));
                  } // update the configuration:


                  PavloviaPlugin._config.session = {
                    token: serverData.token,
                    status: 'OPEN'
                  };
                  PavloviaPlugin._config.experiment.status = serverData.experiment.status2;
                  PavloviaPlugin._config.experiment.saveFormat = Symbol["for"](serverData.experiment.saveFormat);
                  PavloviaPlugin._config.experiment.saveIncompleteResults = serverData.experiment.saveIncompleteResults;
                  PavloviaPlugin._config.experiment.license = serverData.experiment.license;
                  PavloviaPlugin._config.runMode = serverData.experiment.runMode;
                  resolve(Object.assign(response, {
                    token: serverData.token,
                    status: serverData.experiment.status2
                  }));
                  _context6.next = 23;
                  break;

                case 19:
                  _context6.prev = 19;
                  _context6.t0 = _context6["catch"](1);
                  console.error(_context6.t0);
                  reject(_objectSpread(_objectSpread({}, response), {}, {
                    error: _context6.t0
                  }));

                case 23:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[1, 19]]);
        }));

        return function (_x9, _x10) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
    /**
     * Close the previously opened session on pavlovia.org.
     *
     * @param {boolean} isCompleted - whether or not the participant completed the experiment
     * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
     * 	with the server
     * @private
     */

  }, {
    key: "_closeSession",
    value: function _closeSession() {
      var isCompleted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var response = {
        origin: '_closeSession',
        context: 'when closing the session for experiment: ' + PavloviaPlugin._config.experiment.fullpath
      }; // prepare a DELETE query:

      var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token;
      var formData = new FormData();
      formData.append('isCompleted', isCompleted); // synchronously query the pavlovia server:

      if (sync) {
        navigator.sendBeacon(url + '/delete', formData);
        PavloviaPlugin._config.session.status = 'CLOSED';
      } else {
        // asynchronously query the pavlovia server:
        return new Promise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
            var serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return fetch(url, {
                      method: 'DELETE',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer',
                      body: formData
                    });

                  case 3:
                    serverResponse = _context7.sent;
                    _context7.next = 6;
                    return serverResponse.json();

                  case 6:
                    serverData = _context7.sent;
                    PavloviaPlugin._config.session.status = 'CLOSED';
                    resolve(Object.assign(response, {
                      serverData: serverData
                    }));
                    _context7.next = 15;
                    break;

                  case 11:
                    _context7.prev = 11;
                    _context7.t0 = _context7["catch"](0);
                    console.error(_context7.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context7.t0
                    }));

                  case 15:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, null, [[0, 11]]);
          }));

          return function (_x11, _x12) {
            return _ref3.apply(this, arguments);
          };
        }());
      }
    }
    /**
     * Upload data to the pavlovia.org server.
     *
     * @param {Object} trial - the jsPsych trial
     * @param {string} data - the experiment data to be uploaded
     * @param {boolean} [sync = false] - whether or not to use the Beacon API to communicate
     * 	with the server
     * @return {Promise<any>}
     * @private
     */

  }, {
    key: "_save",
    value: function () {
      var _save2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(trial, data) {
        var sync,
            date,
            dateString,
            key,
            filteredData,
            _args8 = arguments;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                sync = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : false;
                date = new Date();
                dateString = date.getFullYear() + '-' + ('0' + (1 + date.getMonth())).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + '_';
                dateString += ('0' + date.getHours()).slice(-2) + 'h' + ('0' + date.getMinutes()).slice(-2) + '.' + ('0' + date.getSeconds()).slice(-2) + '.' + date.getMilliseconds();
                key = PavloviaPlugin._config.experiment.name + '_' + trial.participantId + '_' + 'SESSION' + '_' + dateString + '.csv';
                filteredData = trial.dataFilter(data);

                if (!(PavloviaPlugin._config.experiment.status === 'RUNNING' && !PavloviaPlugin._serverMsg.has('__pilotToken'))) {
                  _context8.next = 12;
                  break;
                }

                _context8.next = 9;
                return this._uploadData(key, filteredData, sync);

              case 9:
                return _context8.abrupt("return", _context8.sent);

              case 12:
                this._offerDataForDownload(key, filteredData, 'text/csv');

                return _context8.abrupt("return", {
                  origin: '_save',
                  context: 'when saving results for experiment: ' + PavloviaPlugin._config.experiment.fullpath,
                  message: 'offered the .csv file for download'
                });

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _save(_x13, _x14) {
        return _save2.apply(this, arguments);
      }

      return _save;
    }()
    /**
     * Upload data (a key/value pair) to pavlovia.org.
     *
     * @param {string} key - the key
     * @param {string} value - the value
     * @param {boolean} [sync = false] - whether or not to upload the data using the Beacon API
     * @returns {Promise<any>}
     * @private
     */

  }, {
    key: "_uploadData",
    value: function _uploadData(key, value) {
      var sync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var response = {
        origin: '_uploadData',
        context: "when uploading participant' results for experiment: " + PavloviaPlugin._config.experiment.fullpath
      };
      var url = PavloviaPlugin._config.pavlovia.URL + '/api/v2/experiments/' + PavloviaPlugin._config.gitlab.projectId + '/sessions/' + PavloviaPlugin._config.session.token + '/results';
      var formData = new FormData();
      formData.append('key', key);
      formData.append('value', value); // synchronous query the pavlovia server:

      if (sync) {
        navigator.sendBeacon(url, formData);
      } // asynchronously query the pavlovia server:
      else {
        return new Promise( /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
            var serverResponse, serverData;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return fetch(url, {
                      method: 'POST',
                      mode: 'cors',
                      cache: 'no-cache',
                      credentials: 'same-origin',
                      redirect: 'follow',
                      referrerPolicy: 'no-referrer',
                      body: formData
                    });

                  case 3:
                    serverResponse = _context9.sent;
                    _context9.next = 6;
                    return serverResponse.json();

                  case 6:
                    serverData = _context9.sent;
                    resolve(Object.assign(response, {
                      serverData: serverData
                    }));
                    _context9.next = 14;
                    break;

                  case 10:
                    _context9.prev = 10;
                    _context9.t0 = _context9["catch"](0);
                    console.error(_context9.t0);
                    reject(_objectSpread(_objectSpread({}, response), {}, {
                      error: _context9.t0
                    }));

                  case 14:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, null, [[0, 10]]);
          }));

          return function (_x15, _x16) {
            return _ref4.apply(this, arguments);
          };
        }());
      }
    }
    /**
     * Log messages to the browser's console.
     *
     * @param {...*} messages - the messages to be displayed in the browser's console
     * @private
     */

  }, {
    key: "_log",
    value: function _log() {
      var _console;

      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, ['[pavlovia ' + PavloviaPlugin.version + ']'].concat(messages));
    }
    /**
     * Offer data as download in the browser.
     *
     * @param {string} filename - the name of the file to be downloaded
     * @param {*} data - the data
     * @param {string} type - the MIME type of the data, e.g. 'text/csv' or 'application/json'
     * @private
     */

  }, {
    key: "_offerDataForDownload",
    value: function _offerDataForDownload(filename, data, type) {
      var blob = new Blob([data], {
        type: type
      });

      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    }
  }], [{
    key: "defaultErrorCallback",
    value: function defaultErrorCallback(error) {
      // output the error to the console:
      console.error('[pavlovia ' + PavloviaPlugin.version + ']', error); // output the error to the html body:

      var htmlCode = '<h3>[jspsych-pavlovia plugin ' + PavloviaPlugin.version + '] Error</h3><ul>';

      while (true) {
        if (_typeof(error) === 'object' && 'context' in error) {
          htmlCode += '<li>' + error.context + '</li>';
          error = error.error;
        } else {
          htmlCode += '<li><b>' + error + '</b></li>';
          break;
        }
      }

      htmlCode += '</ul>';
      document.querySelector('body').innerHTML = htmlCode;
    }
    /**
     * The default data filter, applied to the data gathered by jsPsych, before they are
     * uploaded to the server.
     *
     * The filter typically prunes and reformat jsPsych.data.get().csv().
     *
     * @param {Object} data - input data, typically from jsPsych.data.get().csv()
     * @returns filtered data, ready for upload to the server
     * @public
     */

  }, {
    key: "defaultDataFilter",
    value: function defaultDataFilter(data) {
      return data;
    }
  }]);

  return PavloviaPlugin;
}();
/**
 * Plugin version:
 * @public
 */


PavloviaPlugin.version = '2022.1.1';
/**
 * The pavlovia.org configuration (usually read from the config.json configuration file).
 *
 * @type {Object}
 * @private
 */

PavloviaPlugin._config = {};
/**
 * The callback for the beforeunload event, which is triggered when the participant
 * tries to leave the experiment by closing the tab or browser.
 *
 * @type {null}
 * @private
 */

PavloviaPlugin._beforeunloadCallback = null;
/**
 * The server parameters (those starting with a double underscore).
 *
 * @type {Object}
 * @private
 */

PavloviaPlugin._serverMsg = new Map();
/**
 * Plugin information.
 * @public
 */

PavloviaPlugin.info = {
  name: 'pavlovia',
  description: 'communication with pavlovia.org',
  parameters: {
    command: {
      type: 1,
      pretty_name: 'Command',
      "default": 'init',
      description: 'The pavlovia command: "init" (default) or "finish"'
    },
    participantId: {
      type: 1,
      pretty_name: 'Participant Id',
      "default": 'PARTICIPANT',
      description: 'The participant Id: "PARTICIPANT" (default) or any string'
    },
    errorCallback: {
      type: 4,
      pretty_name: 'ErrorCallback',
      "default": PavloviaPlugin.defaultErrorCallback,
      description: 'The callback function called whenever an error has occurred'
    },
    dataFilter: {
      type: 4,
      pretty_name: 'DataFilter',
      "default": PavloviaPlugin.defaultDataFilter,
      description: 'The filter applied to the data gathered by jsPsych before upload to the server'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PavloviaPlugin);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxnQkFGQTtBQUdiLGlCQUFTLGFBSEk7QUFJYkYsTUFBQUEsV0FBVyxFQUFFO0FBSkEsS0FQTDtBQWFWM0gsSUFBQUEsYUFBYSxFQUFFO0FBQ2IwRyxNQUFBQSxJQUFJLEVBQUUsQ0FETztBQUVibUIsTUFBQUEsV0FBVyxFQUFFLGVBRkE7QUFHYixpQkFBU3pJLGNBQWMsQ0FBQzBJLG9CQUhYO0FBSWJILE1BQUFBLFdBQVcsRUFDVDtBQUxXLEtBYkw7QUFvQlZ6QixJQUFBQSxVQUFVLEVBQUU7QUFDVlEsTUFBQUEsSUFBSSxFQUFFLENBREk7QUFFVm1CLE1BQUFBLFdBQVcsRUFBRSxZQUZIO0FBR1YsaUJBQVN6SSxjQUFjLENBQUMySSxpQkFIZDtBQUlWSixNQUFBQSxXQUFXLEVBQ1Q7QUFMUTtBQXBCRjtBQUhRLENBQXRCO0FBaUNBLGlFQUFldkksY0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzdGVyb2lkLWF0dGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWQtYXR0YWNrLy4vc3JjL2pzUHN5Y2hQYXZsb3ZpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIGpzUHN5Y2ggcGx1Z2luICh2ZXJzaW9uID4gNy4wKSBmb3IgcGF2bG92aWEub3JnXG4gKlxuICogVGhpcyBwbHVnaW4gaGFuZGxlcyBjb21tdW5pY2F0aW9ucyB3aXRoIHRoZSBwYXZsb3ZpYS5vcmcgc2VydmVyOiBpdCBvcGVucyBhbmQgY2xvc2VzIHNlc3Npb25zLFxuICogYW5kIHVwbG9hZHMgZGF0YSB0byB0aGUgc2VydmVyLlxuICpcbiAqIEBhdXRob3IgQWxhaW4gUGl0aW90XG4gKiBAdmVyc2lvbiAyMDIyLjEuMVxuICogQGNvcHlyaWdodCAoYykgMjAxNy0yMDIwIElsaXhhIEx0ZC4gKGh0dHA6Ly9pbGl4YS5jb20pIChjKSAyMDIwLTIwMjEgT3BlbiBTY2llbmNlIFRvb2xzIEx0ZC5cbiAqICAgKGh0dHBzOi8vb3BlbnNjaWVuY2V0b29scy5vcmcpXG4gKiBAbGljZW5zZSBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoqXG4gKiAqKnBhdmxvdmlhKipcbiAqXG4gKiBUaGlzIHBsdWdpbiBoYW5kbGVzIGNvbW11bmljYXRpb25zIHdpdGggdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXI6IGl0IG9wZW5zIGFuZCBjbG9zZXMgc2Vzc2lvbnMsXG4gKiBhbmQgdXBsb2FkcyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gKlxuICogQGF1dGhvciBBbGFpbiBQaXRpb3RcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGF2bG92aWEub3JnL2RvY3MvZXhwZXJpbWVudHMvY3JlYXRlLWpzUHN5Y2ggUnVubmluZyBqc1BzeWNoIGV4cGVyaW1lbnRzIGZyb20gUGF2bG92aWF9XG4gKi9cbmNsYXNzIFBhdmxvdmlhUGx1Z2luIHtcbiAgY29uc3RydWN0b3IoanNQc3ljaCkge1xuICAgIHRoaXMuX2pzUHN5Y2ggPSBqc1BzeWNoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgcGx1Z2luLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkaXNwbGF5X2VsZW1lbnQgLSB0aGUgSFRNTCBET00gZWxlbWVudCB3aGVyZSBqc1BzeWNoIGNvbnRlbnRcbiAgICogXHRpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gdHJpYWwgLSB0aGUganNQc3ljaCB0cmlhbFxuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyB0cmlhbChkaXNwbGF5X2VsZW1lbnQsIHRyaWFsKSB7XG4gICAgLy8gZXhlY3V0ZSB0aGUgY29tbWFuZDpcbiAgICBzd2l0Y2ggKHRyaWFsLmNvbW1hbmQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXQodHJpYWwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZmluaXNoJzpcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2pzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5fZmluaXNoKHRyaWFsLCBkYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRyaWFsLmVycm9yQ2FsbGJhY2soJ3Vua25vd24gY29tbWFuZDogJyArIHRyaWFsLmNvbW1hbmQpO1xuICAgIH1cblxuICAgIC8vIGVuZCB0cmlhbFxuICAgIHRoaXMuX2pzUHN5Y2guZmluaXNoVHJpYWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBlcnJvciBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICpcbiAgICogRXJyb3IgbWVzc2FnZXMgYXJlIGRpc3BsYXllZCBpbiB0aGUgYm9keSBvZiB0aGUgZG9jdW1lbnQgYW5kIGluIHRoZSBicm93c2VyJ3MgY29uc29sZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVycm9yIC0gdGhlIGVycm9yIGpzb24gb2JqZWN0IHRvIGJlIGRpc3BsYXllZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRFcnJvckNhbGxiYWNrKGVycm9yKSB7XG4gICAgLy8gb3V0cHV0IHRoZSBlcnJvciB0byB0aGUgY29uc29sZTpcbiAgICBjb25zb2xlLmVycm9yKCdbcGF2bG92aWEgJyArIFBhdmxvdmlhUGx1Z2luLnZlcnNpb24gKyAnXScsIGVycm9yKTtcblxuICAgIC8vIG91dHB1dCB0aGUgZXJyb3IgdG8gdGhlIGh0bWwgYm9keTpcbiAgICBsZXQgaHRtbENvZGUgPVxuICAgICAgJzxoMz5banNwc3ljaC1wYXZsb3ZpYSBwbHVnaW4gJyArXG4gICAgICBQYXZsb3ZpYVBsdWdpbi52ZXJzaW9uICtcbiAgICAgICddIEVycm9yPC9oMz48dWw+JztcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgJ2NvbnRleHQnIGluIGVycm9yKSB7XG4gICAgICAgIGh0bWxDb2RlICs9ICc8bGk+JyArIGVycm9yLmNvbnRleHQgKyAnPC9saT4nO1xuICAgICAgICBlcnJvciA9IGVycm9yLmVycm9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHRtbENvZGUgKz0gJzxsaT48Yj4nICsgZXJyb3IgKyAnPC9iPjwvbGk+JztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGh0bWxDb2RlICs9ICc8L3VsPic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmlubmVySFRNTCA9IGh0bWxDb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGRhdGEgZmlsdGVyLCBhcHBsaWVkIHRvIHRoZSBkYXRhIGdhdGhlcmVkIGJ5IGpzUHN5Y2gsIGJlZm9yZSB0aGV5IGFyZVxuICAgKiB1cGxvYWRlZCB0byB0aGUgc2VydmVyLlxuICAgKlxuICAgKiBUaGUgZmlsdGVyIHR5cGljYWxseSBwcnVuZXMgYW5kIHJlZm9ybWF0IGpzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBpbnB1dCBkYXRhLCB0eXBpY2FsbHkgZnJvbSBqc1BzeWNoLmRhdGEuZ2V0KCkuY3N2KClcbiAgICogQHJldHVybnMgZmlsdGVyZWQgZGF0YSwgcmVhZHkgZm9yIHVwbG9hZCB0byB0aGUgc2VydmVyXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0RGF0YUZpbHRlcihkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGlzZSB0aGUgY29ubmVjdGlvbiB3aXRoIHBhdmxvdmlhLm9yZzogY29uZmlndXJlIHRoZSBwbHVnaW4gYW5kIG9wZW4gYSBuZXcgc2Vzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWdVUkw9IFwiY29uZmlnLmpzb25cIl0gLSB0aGUgVVJMIG9mIHRoZSBwYXZsb3ZpYS5vcmcganNvbiBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhc3luYyBfaW5pdCh0cmlhbCwgY29uZmlnVVJMID0gJ2NvbmZpZy5qc29uJykge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25maWd1cmU6XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9jb25maWd1cmUoY29uZmlnVVJMKTtcbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcgPSByZXNwb25zZS5jb25maWc7XG4gICAgICB0aGlzLl9sb2coJ2luaXQgfCBfY29uZmlndXJlLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gb3BlbiBhIG5ldyBzZXNzaW9uOlxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9vcGVuU2Vzc2lvbigpO1xuICAgICAgLy8gX2NvbmZpZy5leHBlcmltZW50LnRva2VuID0gcmVzcG9uc2UudG9rZW47XG4gICAgICB0aGlzLl9sb2coJ2luaXQgfCBfb3BlblNlc3Npb24ucmVzcG9uc2U9JywgcmVzcG9uc2UpO1xuXG4gICAgICAvLyB3YXJuIHRoZSB1c2VyIHdoZW4gdGhleSBhdHRlbXB0IHRvIGNsb3NlIHRoZSB0YWIgb3IgYnJvd3NlcjpcbiAgICAgIGNvbnN0IF9iZWZvcmV1bmxvYWRDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCBzaG91bGQgZW5zdXJlIHRoYXQgdGhlIHVzZXIgZ2V0cyBwcm9tcHRlZDpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBDaHJvbWUgcmVxdWlyZXMgcmV0dXJuVmFsdWUgdG8gYmUgc2V0OlxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9ICcnO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBfYmVmb3JldW5sb2FkQ2FsbGJhY2spO1xuXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIGNsb3NlcyB0aGUgdGFiIG9yIGJyb3dzZXIsIHdlIGF0dGVtcHQgdG8gY2xvc2UgdGhlIHNlc3Npb25cbiAgICAgIC8vIGFuZCBvcHRpb25hbGx5IHNhdmUgdGhlIHJlc3VsdHNcbiAgICAgIC8vIG5vdGU6IHdlIGNvbW11bmljYXRlIHdpdGggdGhlIHNlcnZlciB1c2luZyB0aGUgQmVhY29uIEFQSVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9PT0gJ09QRU4nKSB7XG4gICAgICAgICAgLy8gZ2V0IGFuZCBzYXZlIHRoZSBpbmNvbXBsZXRlIHJlc3VsdHMgaWYgbmVlZCBiZTpcbiAgICAgICAgICBpZiAoUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnNhdmVJbmNvbXBsZXRlUmVzdWx0cykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuX2pzUHN5Y2guZGF0YS5nZXQoKS5jc3YoKTtcbiAgICAgICAgICAgIHRoaXMuX3NhdmUodHJpYWwsIGRhdGEsIHRydWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNsb3NlIHRoZSBzZXNzaW9uOlxuICAgICAgICAgIHRoaXMuX2Nsb3NlU2Vzc2lvbihmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0cmlhbC5lcnJvckNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluaXNoIHRoZSBjb25uZWN0aW9uIHdpdGggcGF2bG92aWEub3JnOiB1cGxvYWQgdGhlIGNvbGxlY3RlZCBkYXRhIGFuZCBjbG9zZSB0aGUgc2Vzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHRyaWFsIC0gdGhlIGpzUHN5Y2ggdHJpYWxcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSB0aGUgZXhwZXJpbWVudCBkYXRhIHRvIGJlIHVwbG9hZGVkXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2ZpbmlzaCh0cmlhbCwgZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZW1vdmUgdGhlIGJlZm9yZXVubG9hZCBsaXN0ZW5lcjpcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAnYmVmb3JldW5sb2FkJyxcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2JlZm9yZXVubG9hZENhbGxiYWNrXG4gICAgICApO1xuXG4gICAgICAvLyB0ZWxsIHRoZSBwYXJ0aWNpcGFudCB0aGF0IHRoZSBkYXRhIGlzIGJlaW5nIHVwbG9hZGVkOlxuICAgICAgY29uc3QgbXNnID1cbiAgICAgICAgJ1BsZWFzZSB3YWl0IGEgbW9tZW50IHdoaWxlIHRoZSBkYXRhIGFyZSB1cGxvYWRlZCB0byB0aGUgcGF2bG92aWEub3JnIHNlcnZlci4uLic7XG4gICAgICBjb25zdCBkaXNwbGF5RWxlbWVudCA9IHRoaXMuX2pzUHN5Y2guZ2V0RGlzcGxheUVsZW1lbnQoKTtcbiAgICAgIGRpc3BsYXlFbGVtZW50LmlubmVySFRNTCA9ICc8cHJlIGlkPVwicGF2bG92aWEtZGF0YS11cGxvYWRcIj48L3ByZT4nO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhdmxvdmlhLWRhdGEtdXBsb2FkJykudGV4dENvbnRlbnQgPSBtc2c7XG5cbiAgICAgIC8vIHVwbG9hZCB0aGUgZGF0YSB0byBwYXZsb3ZpYS5vcmc6XG4gICAgICBjb25zdCBzeW5jID0gdHlwZW9mIHRyaWFsLnN5bmMgIT09ICd1bmRlZmluZWQnID8gdHJpYWwuc3luYyA6IGZhbHNlO1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fc2F2ZSh0cmlhbCwgZGF0YSwgc3luYyk7XG4gICAgICB0aGlzLl9sb2coJ2ZpbmlzaCB8IF9zYXZlLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gY2hlY2sgZm9yIGVycm9yczpcbiAgICAgIGlmICgnc2VydmVyRGF0YScgaW4gcmVzcG9uc2UgJiYgJ2Vycm9yJyBpbiByZXNwb25zZS5zZXJ2ZXJEYXRhKSB7XG4gICAgICAgIHRocm93IHJlc3BvbnNlLnNlcnZlckRhdGE7XG4gICAgICB9XG5cbiAgICAgIC8vIGNsb3NlIHRoZSBzZXNzaW9uOlxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9jbG9zZVNlc3Npb24odHJ1ZSwgZmFsc2UpO1xuICAgICAgdGhpcy5fbG9nKCdmaW5pc2ggfCBfY2xvc2VTZXNzaW9uLnJlc3BvbnNlPScsIHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdHJpYWwuZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZSB0aGUgcGx1Z2luIGJ5IHJlYWRpbmcgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBjcmVhdGVkIHVwb24gYWN0aXZhdGlvblxuICAgKiBvZiB0aGUgZXhwZXJpbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb25maWdVUkw9IFwiY29uZmlnLmpzb25cIl0gLSB0aGUgVVJMIG9mIHRoZSBwYXZsb3ZpYS5vcmcganNvblxuICAgKiBcdGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXN5bmMgX2NvbmZpZ3VyZShjb25maWdVUkwpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBvcmlnaW46ICdfY29uZmlndXJlJyxcbiAgICAgIGNvbnRleHQ6ICd3aGVuIGNvbmZpZ3VyaW5nIHRoZSBwbHVnaW4nLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlndXJhdGlvblJlc3BvbnNlID0gYXdhaXQgdGhpcy5fZ2V0Q29uZmlndXJhdGlvbihjb25maWdVUkwpO1xuXG4gICAgICAvLyBsZWdhY3kgZXhwZXJpbWVudHMgaGFkIGEgcHN5Y2hvSnNNYW5hZ2VyIGJsb2NrIGluc3RlYWQgb2YgYSBwYXZsb3ZpYSBibG9jaywgYW5kIHRoZSBVUkxcbiAgICAgIC8vIHBvaW50ZWQgdG8gaHR0cHM6Ly9wYXZsb3ZpYS5vcmcvc2VydmVyXG4gICAgICBpZiAoJ3BzeWNob0pzTWFuYWdlcicgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZykge1xuICAgICAgICBkZWxldGUgY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5wc3ljaG9Kc01hbmFnZXI7XG4gICAgICAgIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcucGF2bG92aWEgPSB7XG4gICAgICAgICAgVVJMOiAnaHR0cHM6Ly9wYXZsb3ZpYS5vcmcnLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyB0ZXN0cyBmb3IgdGhlIHByZXNlbmNlIG9mIGVzc2VudGlhbCBibG9ja3MgaW4gdGhlIGNvbmZpZ3VyYXRpb246XG4gICAgICBpZiAoISgnZXhwZXJpbWVudCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZykpIHtcbiAgICAgICAgdGhyb3cgJ21pc3NpbmcgZXhwZXJpbWVudCBibG9jayBpbiBjb25maWd1cmF0aW9uJztcbiAgICAgIH1cbiAgICAgIGlmICghKCduYW1lJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnLmV4cGVyaW1lbnQpKSB7XG4gICAgICAgIHRocm93ICdtaXNzaW5nIG5hbWUgaW4gZXhwZXJpbWVudCBibG9jayBpbiBjb25maWd1cmF0aW9uJztcbiAgICAgIH1cbiAgICAgIGlmICghKCdmdWxscGF0aCcgaW4gY29uZmlndXJhdGlvblJlc3BvbnNlLmNvbmZpZy5leHBlcmltZW50KSkge1xuICAgICAgICB0aHJvdyAnbWlzc2luZyBmdWxscGF0aCBpbiBleHBlcmltZW50IGJsb2NrIGluIGNvbmZpZ3VyYXRpb24nO1xuICAgICAgfVxuICAgICAgaWYgKCEoJ3BhdmxvdmlhJyBpbiBjb25maWd1cmF0aW9uUmVzcG9uc2UuY29uZmlnKSkge1xuICAgICAgICB0aHJvdyAnbWlzc2luZyBwYXZsb3ZpYSBibG9jayBpbiBjb25maWd1cmF0aW9uJztcbiAgICAgIH1cbiAgICAgIGlmICghKCdVUkwnIGluIGNvbmZpZ3VyYXRpb25SZXNwb25zZS5jb25maWcucGF2bG92aWEpKSB7XG4gICAgICAgIHRocm93ICdtaXNzaW5nIFVSTCBpbiBwYXZsb3ZpYSBibG9jayBpbiBjb25maWd1cmF0aW9uJztcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHRoZSBzZXJ2ZXIgcGFyYW1ldGVycyAodGhvc2Ugc3RhcnRpbmcgd2l0aCBhIGRvdWJsZSB1bmRlcnNjb3JlKTpcbiAgICAgIGNvbnN0IHVybFF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHVybFBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KTtcbiAgICAgIHVybFBhcmFtZXRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ19fJykgPT09IDApIHtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb25maWd1cmF0aW9uUmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IHsgLi4ucmVzcG9uc2UsIGVycm9yIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGF2bG92aWEub3JnIGpzb24gY29uZmlndXJhdGlvbiBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnVVJMIC0gdGhlIFVSTCBvZiB0aGUgcGF2bG92aWEub3JnIGpzb24gY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZ2V0Q29uZmlndXJhdGlvbihjb25maWdVUkwpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBvcmlnaW46ICdfZ2V0Q29uZmlndXJhdGlvbicsXG4gICAgICBjb250ZXh0OiAnd2hlbiByZWFkaW5nIHRoZSBjb25maWd1cmF0aW9uIGZpbGU6ICcgKyBjb25maWdVUkwsXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZ1VSTCwge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzZXJ2ZXJEYXRhID0gYXdhaXQgc2VydmVyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIHJlc29sdmUoeyAuLi5yZXNwb25zZSwgY29uZmlnOiBzZXJ2ZXJEYXRhIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJlamVjdCh7IC4uLnJlc3BvbnNlLCBlcnJvciB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGEgbmV3IHNlc3Npb24gZm9yIHRoaXMgZXhwZXJpbWVudCBvbiBwYXZsb3ZpYS5vcmcuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3BlblNlc3Npb24oKSB7XG4gICAgbGV0IHJlc3BvbnNlID0ge1xuICAgICAgb3JpZ2luOiAnX29wZW5TZXNzaW9uJyxcbiAgICAgIGNvbnRleHQ6XG4gICAgICAgICd3aGVuIG9wZW5pbmcgYSBzZXNzaW9uIGZvciBleHBlcmltZW50OiAnICtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LmZ1bGxwYXRoLFxuICAgIH07XG5cbiAgICAvLyBwcmVwYXJlIGEgUE9TVCBxdWVyeTpcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmhhcygnX19waWxvdFRva2VuJykpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgJ3BpbG90VG9rZW4nLFxuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmdldCgnX19waWxvdFRva2VuJylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gcXVlcnkgcGF2bG92aWEgc2VydmVyOlxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnBhdmxvdmlhLlVSTH0vYXBpL3YyL2V4cGVyaW1lbnRzLyR7UGF2bG92aWFQbHVnaW4uX2NvbmZpZy5naXRsYWIucHJvamVjdElkfS9zZXNzaW9uc2A7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHNlcnZlclJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgcmVxdWlyZWQgYXR0cmlidXRlczpcbiAgICAgICAgaWYgKCEoJ3Rva2VuJyBpbiBzZXJ2ZXJEYXRhKSkge1xuICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgZXJyb3I6ICd1bmV4cGVjdGVkIGFuc3dlciBmcm9tIHNlcnZlcjogbm8gdG9rZW4nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKCdleHBlcmltZW50JyBpbiBzZXJ2ZXJEYXRhKSkge1xuICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHtcbiAgICAgICAgICAgICAgZXJyb3I6ICd1bmV4cGVjdGVkIGFuc3dlciBmcm9tIHNlcnZlcjogbm8gZXhwZXJpbWVudCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgdGhlIGNvbmZpZ3VyYXRpb246XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbiA9IHtcbiAgICAgICAgICB0b2tlbjogc2VydmVyRGF0YS50b2tlbixcbiAgICAgICAgICBzdGF0dXM6ICdPUEVOJyxcbiAgICAgICAgfTtcbiAgICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5leHBlcmltZW50LnN0YXR1cyA9XG4gICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LnN0YXR1czI7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5zYXZlRm9ybWF0ID0gU3ltYm9sLmZvcihcbiAgICAgICAgICBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQuc2F2ZUZvcm1hdFxuICAgICAgICApO1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc2F2ZUluY29tcGxldGVSZXN1bHRzID1cbiAgICAgICAgICBzZXJ2ZXJEYXRhLmV4cGVyaW1lbnQuc2F2ZUluY29tcGxldGVSZXN1bHRzO1xuICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQubGljZW5zZSA9XG4gICAgICAgICAgc2VydmVyRGF0YS5leHBlcmltZW50LmxpY2Vuc2U7XG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcucnVuTW9kZSA9IHNlcnZlckRhdGEuZXhwZXJpbWVudC5ydW5Nb2RlO1xuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXNwb25zZSwge1xuICAgICAgICAgICAgdG9rZW46IHNlcnZlckRhdGEudG9rZW4sXG4gICAgICAgICAgICBzdGF0dXM6IHNlcnZlckRhdGEuZXhwZXJpbWVudC5zdGF0dXMyLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmVqZWN0KHsgLi4ucmVzcG9uc2UsIGVycm9yIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBwcmV2aW91c2x5IG9wZW5lZCBzZXNzaW9uIG9uIHBhdmxvdmlhLm9yZy5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0NvbXBsZXRlZCAtIHdoZXRoZXIgb3Igbm90IHRoZSBwYXJ0aWNpcGFudCBjb21wbGV0ZWQgdGhlIGV4cGVyaW1lbnRcbiAgICogQHBhcmFtIHtib29sZWFufSBbc3luYyA9IGZhbHNlXSAtIHdoZXRoZXIgb3Igbm90IHRvIHVzZSB0aGUgQmVhY29uIEFQSSB0byBjb21tdW5pY2F0ZVxuICAgKiBcdHdpdGggdGhlIHNlcnZlclxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2Nsb3NlU2Vzc2lvbihpc0NvbXBsZXRlZCA9IHRydWUsIHN5bmMgPSBmYWxzZSkge1xuICAgIGxldCByZXNwb25zZSA9IHtcbiAgICAgIG9yaWdpbjogJ19jbG9zZVNlc3Npb24nLFxuICAgICAgY29udGV4dDpcbiAgICAgICAgJ3doZW4gY2xvc2luZyB0aGUgc2Vzc2lvbiBmb3IgZXhwZXJpbWVudDogJyArXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICB9O1xuXG4gICAgLy8gcHJlcGFyZSBhIERFTEVURSBxdWVyeTpcbiAgICBjb25zdCB1cmwgPVxuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5wYXZsb3ZpYS5VUkwgK1xuICAgICAgJy9hcGkvdjIvZXhwZXJpbWVudHMvJyArXG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmdpdGxhYi5wcm9qZWN0SWQgK1xuICAgICAgJy9zZXNzaW9ucy8nICtcbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi50b2tlbjtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnaXNDb21wbGV0ZWQnLCBpc0NvbXBsZXRlZCk7XG5cbiAgICAvLyBzeW5jaHJvbm91c2x5IHF1ZXJ5IHRoZSBwYXZsb3ZpYSBzZXJ2ZXI6XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCArICcvZGVsZXRlJywgZm9ybURhdGEpO1xuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5zZXNzaW9uLnN0YXR1cyA9ICdDTE9TRUQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhc3luY2hyb25vdXNseSBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgICAgICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHNlcnZlclJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuc2Vzc2lvbi5zdGF0dXMgPSAnQ0xPU0VEJztcbiAgICAgICAgICByZXNvbHZlKE9iamVjdC5hc3NpZ24ocmVzcG9uc2UsIHsgc2VydmVyRGF0YSB9KSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KHsgLi4ucmVzcG9uc2UsIGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBsb2FkIGRhdGEgdG8gdGhlIHBhdmxvdmlhLm9yZyBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0cmlhbCAtIHRoZSBqc1BzeWNoIHRyaWFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gdGhlIGV4cGVyaW1lbnQgZGF0YSB0byBiZSB1cGxvYWRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jID0gZmFsc2VdIC0gd2hldGhlciBvciBub3QgdG8gdXNlIHRoZSBCZWFjb24gQVBJIHRvIGNvbW11bmljYXRlXG4gICAqIFx0d2l0aCB0aGUgc2VydmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIF9zYXZlKHRyaWFsLCBkYXRhLCBzeW5jID0gZmFsc2UpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGF0ZVN0cmluZyA9XG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgK1xuICAgICAgJy0nICtcbiAgICAgICgnMCcgKyAoMSArIGRhdGUuZ2V0TW9udGgoKSkpLnNsaWNlKC0yKSArXG4gICAgICAnLScgK1xuICAgICAgKCcwJyArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgK1xuICAgICAgJ18nO1xuICAgIGRhdGVTdHJpbmcgKz1cbiAgICAgICgnMCcgKyBkYXRlLmdldEhvdXJzKCkpLnNsaWNlKC0yKSArXG4gICAgICAnaCcgK1xuICAgICAgKCcwJyArIGRhdGUuZ2V0TWludXRlcygpKS5zbGljZSgtMikgK1xuICAgICAgJy4nICtcbiAgICAgICgnMCcgKyBkYXRlLmdldFNlY29uZHMoKSkuc2xpY2UoLTIpICtcbiAgICAgICcuJyArXG4gICAgICBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXG4gICAgY29uc3Qga2V5ID1cbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5uYW1lICtcbiAgICAgICdfJyArXG4gICAgICB0cmlhbC5wYXJ0aWNpcGFudElkICtcbiAgICAgICdfJyArXG4gICAgICAnU0VTU0lPTicgK1xuICAgICAgJ18nICtcbiAgICAgIGRhdGVTdHJpbmcgK1xuICAgICAgJy5jc3YnO1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRyaWFsLmRhdGFGaWx0ZXIoZGF0YSk7XG5cbiAgICBpZiAoXG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuc3RhdHVzID09PSAnUlVOTklORycgJiZcbiAgICAgICFQYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnLmhhcygnX19waWxvdFRva2VuJylcbiAgICApIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl91cGxvYWREYXRhKGtleSwgZmlsdGVyZWREYXRhLCBzeW5jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb2ZmZXJEYXRhRm9yRG93bmxvYWQoa2V5LCBmaWx0ZXJlZERhdGEsICd0ZXh0L2NzdicpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb3JpZ2luOiAnX3NhdmUnLFxuICAgICAgICBjb250ZXh0OlxuICAgICAgICAgICd3aGVuIHNhdmluZyByZXN1bHRzIGZvciBleHBlcmltZW50OiAnICtcbiAgICAgICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLmV4cGVyaW1lbnQuZnVsbHBhdGgsXG4gICAgICAgIG1lc3NhZ2U6ICdvZmZlcmVkIHRoZSAuY3N2IGZpbGUgZm9yIGRvd25sb2FkJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZCBkYXRhIChhIGtleS92YWx1ZSBwYWlyKSB0byBwYXZsb3ZpYS5vcmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSB0aGUga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jID0gZmFsc2VdIC0gd2hldGhlciBvciBub3QgdG8gdXBsb2FkIHRoZSBkYXRhIHVzaW5nIHRoZSBCZWFjb24gQVBJXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBsb2FkRGF0YShrZXksIHZhbHVlLCBzeW5jID0gZmFsc2UpIHtcbiAgICBsZXQgcmVzcG9uc2UgPSB7XG4gICAgICBvcmlnaW46ICdfdXBsb2FkRGF0YScsXG4gICAgICBjb250ZXh0OlxuICAgICAgICBcIndoZW4gdXBsb2FkaW5nIHBhcnRpY2lwYW50JyByZXN1bHRzIGZvciBleHBlcmltZW50OiBcIiArXG4gICAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcuZXhwZXJpbWVudC5mdWxscGF0aCxcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsID1cbiAgICAgIFBhdmxvdmlhUGx1Z2luLl9jb25maWcucGF2bG92aWEuVVJMICtcbiAgICAgICcvYXBpL3YyL2V4cGVyaW1lbnRzLycgK1xuICAgICAgUGF2bG92aWFQbHVnaW4uX2NvbmZpZy5naXRsYWIucHJvamVjdElkICtcbiAgICAgICcvc2Vzc2lvbnMvJyArXG4gICAgICBQYXZsb3ZpYVBsdWdpbi5fY29uZmlnLnNlc3Npb24udG9rZW4gK1xuICAgICAgJy9yZXN1bHRzJztcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdrZXknLCBrZXkpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgndmFsdWUnLCB2YWx1ZSk7XG5cbiAgICAvLyBzeW5jaHJvbm91cyBxdWVyeSB0aGUgcGF2bG92aWEgc2VydmVyOlxuICAgIGlmIChzeW5jKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGZvcm1EYXRhKTtcbiAgICB9XG4gICAgLy8gYXN5bmNocm9ub3VzbHkgcXVlcnkgdGhlIHBhdmxvdmlhIHNlcnZlcjpcbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VydmVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3Qgc2VydmVyRGF0YSA9IGF3YWl0IHNlcnZlclJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgIHJlc29sdmUoT2JqZWN0LmFzc2lnbihyZXNwb25zZSwgeyBzZXJ2ZXJEYXRhIH0pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoeyAuLi5yZXNwb25zZSwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgbWVzc2FnZXMgdG8gdGhlIGJyb3dzZXIncyBjb25zb2xlLlxuICAgKlxuICAgKiBAcGFyYW0gey4uLip9IG1lc3NhZ2VzIC0gdGhlIG1lc3NhZ2VzIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlcidzIGNvbnNvbGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9sb2coLi4ubWVzc2FnZXMpIHtcbiAgICBjb25zb2xlLmxvZygnW3BhdmxvdmlhICcgKyBQYXZsb3ZpYVBsdWdpbi52ZXJzaW9uICsgJ10nLCAuLi5tZXNzYWdlcyk7XG4gIH1cblxuICAvKipcbiAgICogT2ZmZXIgZGF0YSBhcyBkb3dubG9hZCBpbiB0aGUgYnJvd3Nlci5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGZpbGUgdG8gYmUgZG93bmxvYWRlZFxuICAgKiBAcGFyYW0geyp9IGRhdGEgLSB0aGUgZGF0YVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIHRoZSBNSU1FIHR5cGUgb2YgdGhlIGRhdGEsIGUuZy4gJ3RleHQvY3N2JyBvciAnYXBwbGljYXRpb24vanNvbidcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vZmZlckRhdGFGb3JEb3dubG9hZChmaWxlbmFtZSwgZGF0YSwgdHlwZSkge1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZSB9KTtcblxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcbiAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVsZW0gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgZWxlbS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBlbGVtLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgZWxlbS5jbGljaygpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQbHVnaW4gdmVyc2lvbjpcbiAqIEBwdWJsaWNcbiAqL1xuUGF2bG92aWFQbHVnaW4udmVyc2lvbiA9ICcyMDIyLjEuMSc7XG5cbi8qKlxuICogVGhlIHBhdmxvdmlhLm9yZyBjb25maWd1cmF0aW9uICh1c3VhbGx5IHJlYWQgZnJvbSB0aGUgY29uZmlnLmpzb24gY29uZmlndXJhdGlvbiBmaWxlKS5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuUGF2bG92aWFQbHVnaW4uX2NvbmZpZyA9IHt9O1xuXG4vKipcbiAqIFRoZSBjYWxsYmFjayBmb3IgdGhlIGJlZm9yZXVubG9hZCBldmVudCwgd2hpY2ggaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHBhcnRpY2lwYW50XG4gKiB0cmllcyB0byBsZWF2ZSB0aGUgZXhwZXJpbWVudCBieSBjbG9zaW5nIHRoZSB0YWIgb3IgYnJvd3Nlci5cbiAqXG4gKiBAdHlwZSB7bnVsbH1cbiAqIEBwcml2YXRlXG4gKi9cblBhdmxvdmlhUGx1Z2luLl9iZWZvcmV1bmxvYWRDYWxsYmFjayA9IG51bGw7XG5cbi8qKlxuICogVGhlIHNlcnZlciBwYXJhbWV0ZXJzICh0aG9zZSBzdGFydGluZyB3aXRoIGEgZG91YmxlIHVuZGVyc2NvcmUpLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5QYXZsb3ZpYVBsdWdpbi5fc2VydmVyTXNnID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIFBsdWdpbiBpbmZvcm1hdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuUGF2bG92aWFQbHVnaW4uaW5mbyA9IHtcbiAgbmFtZTogJ3BhdmxvdmlhJyxcbiAgZGVzY3JpcHRpb246ICdjb21tdW5pY2F0aW9uIHdpdGggcGF2bG92aWEub3JnJyxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbW1hbmQ6IHtcbiAgICAgIHR5cGU6IDEsXG4gICAgICBwcmV0dHlfbmFtZTogJ0NvbW1hbmQnLFxuICAgICAgZGVmYXVsdDogJ2luaXQnLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgcGF2bG92aWEgY29tbWFuZDogXCJpbml0XCIgKGRlZmF1bHQpIG9yIFwiZmluaXNoXCInLFxuICAgIH0sXG4gICAgcGFydGljaXBhbnRJZDoge1xuICAgICAgdHlwZTogMSxcbiAgICAgIHByZXR0eV9uYW1lOiAnUGFydGljaXBhbnQgSWQnLFxuICAgICAgZGVmYXVsdDogJ1BBUlRJQ0lQQU5UJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIHBhcnRpY2lwYW50IElkOiBcIlBBUlRJQ0lQQU5UXCIgKGRlZmF1bHQpIG9yIGFueSBzdHJpbmcnLFxuICAgIH0sXG4gICAgZXJyb3JDYWxsYmFjazoge1xuICAgICAgdHlwZTogNCxcbiAgICAgIHByZXR0eV9uYW1lOiAnRXJyb3JDYWxsYmFjaycsXG4gICAgICBkZWZhdWx0OiBQYXZsb3ZpYVBsdWdpbi5kZWZhdWx0RXJyb3JDYWxsYmFjayxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuZXZlciBhbiBlcnJvciBoYXMgb2NjdXJyZWQnLFxuICAgIH0sXG4gICAgZGF0YUZpbHRlcjoge1xuICAgICAgdHlwZTogNCxcbiAgICAgIHByZXR0eV9uYW1lOiAnRGF0YUZpbHRlcicsXG4gICAgICBkZWZhdWx0OiBQYXZsb3ZpYVBsdWdpbi5kZWZhdWx0RGF0YUZpbHRlcixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnVGhlIGZpbHRlciBhcHBsaWVkIHRvIHRoZSBkYXRhIGdhdGhlcmVkIGJ5IGpzUHN5Y2ggYmVmb3JlIHVwbG9hZCB0byB0aGUgc2VydmVyJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGF2bG92aWFQbHVnaW47XG4iXSwibmFtZXMiOlsiUGF2bG92aWFQbHVnaW4iLCJqc1BzeWNoIiwiX2pzUHN5Y2giLCJkaXNwbGF5X2VsZW1lbnQiLCJ0cmlhbCIsImNvbW1hbmQiLCJ0b0xvd2VyQ2FzZSIsIl9pbml0IiwiZGF0YSIsImdldCIsImNzdiIsIl9maW5pc2giLCJlcnJvckNhbGxiYWNrIiwiZmluaXNoVHJpYWwiLCJjb25maWdVUkwiLCJfY29uZmlndXJlIiwicmVzcG9uc2UiLCJfY29uZmlnIiwiY29uZmlnIiwiX2xvZyIsIl9vcGVuU2Vzc2lvbiIsIl9iZWZvcmV1bmxvYWRDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXNzaW9uIiwic3RhdHVzIiwiZXhwZXJpbWVudCIsInNhdmVJbmNvbXBsZXRlUmVzdWx0cyIsIl9zYXZlIiwiX2Nsb3NlU2Vzc2lvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtc2ciLCJkaXNwbGF5RWxlbWVudCIsImdldERpc3BsYXlFbGVtZW50IiwiaW5uZXJIVE1MIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50Iiwic3luYyIsInNlcnZlckRhdGEiLCJvcmlnaW4iLCJjb250ZXh0IiwiX2dldENvbmZpZ3VyYXRpb24iLCJjb25maWd1cmF0aW9uUmVzcG9uc2UiLCJwc3ljaG9Kc01hbmFnZXIiLCJwYXZsb3ZpYSIsIlVSTCIsInVybFF1ZXJ5IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInVybFBhcmFtZXRlcnMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmb3JFYWNoIiwidmFsdWUiLCJrZXkiLCJpbmRleE9mIiwiX3NlcnZlck1zZyIsInNldCIsImVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXJQb2xpY3kiLCJzZXJ2ZXJSZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwiZnVsbHBhdGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaGFzIiwiYXBwZW5kIiwidXJsIiwiZ2l0bGFiIiwicHJvamVjdElkIiwiYm9keSIsIk9iamVjdCIsImFzc2lnbiIsInRva2VuIiwic3RhdHVzMiIsInNhdmVGb3JtYXQiLCJTeW1ib2wiLCJsaWNlbnNlIiwicnVuTW9kZSIsImlzQ29tcGxldGVkIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsImRhdGUiLCJEYXRlIiwiZGF0ZVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsIm5hbWUiLCJwYXJ0aWNpcGFudElkIiwiZmlsdGVyZWREYXRhIiwiZGF0YUZpbHRlciIsIl91cGxvYWREYXRhIiwiX29mZmVyRGF0YUZvckRvd25sb2FkIiwibWVzc2FnZSIsIm1lc3NhZ2VzIiwibG9nIiwidmVyc2lvbiIsImZpbGVuYW1lIiwidHlwZSIsImJsb2IiLCJCbG9iIiwibXNTYXZlT3JPcGVuQmxvYiIsIm1zU2F2ZUJsb2IiLCJlbGVtIiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJjcmVhdGVPYmplY3RVUkwiLCJkb3dubG9hZCIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImh0bWxDb2RlIiwicXVlcnlTZWxlY3RvciIsIk1hcCIsImluZm8iLCJkZXNjcmlwdGlvbiIsInBhcmFtZXRlcnMiLCJwcmV0dHlfbmFtZSIsImRlZmF1bHRFcnJvckNhbGxiYWNrIiwiZGVmYXVsdERhdGFGaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9