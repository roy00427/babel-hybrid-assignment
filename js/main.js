'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var person = {};
person[Symbol.iterator] = function () {
    var URL = "//json placeholder.typicode.com/person";
    return {
        next: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var random, req, response, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                random = Math.random();

                                if (!(random > 0.7)) {
                                    _context.next = 3;
                                    break;
                                }

                                return _context.abrupt('return', {
                                    value: undefined,
                                    done: true
                                });

                            case 3:
                                req = request(URL + ('?r=' + random), {
                                    method: 'GET',
                                    mode: 'cors'
                                });
                                _context.next = 6;
                                return fetch(req);

                            case 6:
                                response = _context.sent;
                                _context.next = 9;
                                return response.json();

                            case 9:
                                data = _context.sent;

                                console.log('person fetched', data);
                                return _context.abrupt('return', {
                                    value: data,
                                    done: false
                                });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function next() {
                return _ref.apply(this, arguments);
            }

            return next;
        }()

    };
};