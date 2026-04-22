function unityFramework(_0x1455c0) {
    var _0x1455c0 = typeof _0x1455c0 !== 'undefined' ? _0x1455c0 : {};
    _0x1455c0['USER_JSPRE_PLACEHOLDER'] = 'USER_JSPRE_PLACEHOLDER';
    function _0x74c98b(_0x54d731, _0x2c89af) {
        return _0x41d093('The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead.'),
        _0x46211(_0x54d731, _0x2c89af);
    }
    _0x1455c0['Pointer_stringify'] = _0x74c98b;
    var _0x36eb3a = '(^|\n)(\s+at\s+|)jsStackTrace(\s+\(|@)([^\n]+):\d+:\d+(\)|)(\n|$)'
      , _0x3215bd = _0x518cfb()['match'](new RegExp(_0x36eb3a));
    if (_0x3215bd)
        _0x1455c0['stackTraceRegExp'] = new RegExp(_0x36eb3a['replace']('([^\n]+)', _0x3215bd[0x4]['replace'](/[\\^${}[\]().*+?|]/g, '\$&'))['replace']('jsStackTrace', '[^\n]+'));
    var _0x26724f = function(_0x14a352) {
        if (_0x2035c4)
            return;
        _0x2035c4 = !![],
        _0x56ac0b = 0x1;
        if (typeof ENVIRONMENT_IS_PTHREAD !== 'undefined' && ENVIRONMENT_IS_PTHREAD)
            console['error']('Pthread aborting at ' + new Error()['stack']);
        _0x14a352 !== undefined ? (_0x468a5e(_0x14a352),
        _0x5a96d4(_0x14a352),
        _0x14a352 = JSON['stringify'](_0x14a352)) : _0x14a352 = '';
        var _0x5f5c35 = 'abort(' + _0x14a352 + ') at ' + _0x3c669b();
        if (_0x1455c0['abortHandler'] && _0x1455c0['abortHandler'](_0x5f5c35))
            return;
        throw _0x5f5c35;
    };
    _0x1455c0['SetFullscreen'] = function(_0x3025a5) {
        if (typeof _0xc0d315 === 'undefined' || !_0xc0d315)
            console['log']('Runtime not initialized yet.');
        else {
            if (typeof _0x5bb742 === 'undefined')
                console['log']('Player not loaded yet.');
            else {
                var _0x593003 = _0x5bb742['canPerformEventHandlerRequests'];
                _0x5bb742['canPerformEventHandlerRequests'] = function() {
                    return 0x1;
                }
                ,
                _0x1455c0['ccall']('SetFullscreen', null, ['number'], [_0x3025a5]),
                _0x5bb742['canPerformEventHandlerRequests'] = _0x593003;
            }
        }
    }
    ;
    (typeof ENVIRONMENT_IS_PTHREAD === 'undefined' || !ENVIRONMENT_IS_PTHREAD) && _0x1455c0['preRun']['push'](function() {
        var _0x5c0678 = _0x1455c0['unityFileSystemInit'] || function() {
            _0x23c512['mkdir']('/idbfs'),
            _0x23c512['mount'](_0x3581f4, {}, '/idbfs'),
            _0x1455c0['addRunDependency']('JS_FileSystem_Mount'),
            _0x23c512['syncfs'](!![], function(_0x3eb268) {
                if (_0x3eb268)
                    console['log']('IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.');
                _0x1455c0['removeRunDependency']('JS_FileSystem_Mount');
            });
        }
        ;
        _0x5c0678();
    });
    var _0x57d6e9 = [], _0x925822 = ![], _0x22ebb5, _0x3af793 = null;
    function _0x9224e8(_0x3544c0) {
        var _0xe3a92 = Object['keys'](_0x57d6e9);
        for (var _0x470e5f = 0x0; _0x470e5f < _0xe3a92['length']; ++_0x470e5f) {
            var _0x1c73d3 = _0x57d6e9[_0xe3a92[_0x470e5f]];
            if (_0x1c73d3['deviceId'] && _0x1c73d3['deviceId'] == _0x3544c0['deviceId'])
                return _0x1c73d3;
        }
        for (var _0x470e5f = 0x0; _0x470e5f < _0xe3a92['length']; ++_0x470e5f) {
            var _0x1c73d3 = _0x57d6e9[_0xe3a92[_0x470e5f]];
            if (_0x1c73d3 == _0x3544c0)
                return _0x1c73d3;
        }
        for (var _0x470e5f = 0x0; _0x470e5f < _0xe3a92['length']; ++_0x470e5f) {
            var _0x1c73d3 = _0x57d6e9[_0xe3a92[_0x470e5f]];
            if (_0x1c73d3['label'] && _0x1c73d3['label'] == _0x3544c0['label'])
                return _0x1c73d3;
        }
        for (var _0x470e5f = 0x0; _0x470e5f < _0xe3a92['length']; ++_0x470e5f) {
            var _0x1c73d3 = _0x57d6e9[_0xe3a92[_0x470e5f]];
            if (_0x1c73d3['groupId'] && _0x1c73d3['kind'] && _0x1c73d3['groupId'] == _0x3544c0['groupId'] && _0x1c73d3['kind'] == _0x3544c0['kind'])
                return _0x1c73d3;
        }
    }
    function _0x90a423() {
        for (var _0x26a19c = 0x0; ; ++_0x26a19c) {
            if (!_0x57d6e9[_0x26a19c])
                return _0x26a19c;
        }
    }
    function _0x56771e(_0x4fe692) {
        _0x22ebb5(),
        _0x57d6e9 = [];
        var _0x4926d6 = {}
          , _0x3864d6 = [];
        _0x4fe692['forEach'](function(_0x37168c) {
            if (_0x37168c['kind'] === 'videoinput') {
                var _0x1be5ab = _0x9224e8(_0x37168c);
                _0x1be5ab ? _0x4926d6[_0x1be5ab['id']] = _0x1be5ab : _0x3864d6['push'](_0x37168c);
            }
        }),
        _0x57d6e9 = _0x4926d6,
        _0x3864d6['forEach'](function(_0x3f008d) {
            !_0x3f008d['id'] && (_0x3f008d['id'] = _0x90a423(),
            _0x3f008d['name'] = _0x3f008d['label'] || 'Video input #' + (_0x3f008d['id'] + 0x1),
            _0x3f008d['isFrontFacing'] = _0x3f008d['name']['toLowerCase']()['includes']('front') || !_0x3f008d['name']['toLowerCase']()['includes']('front') && !_0x3f008d['name']['toLowerCase']()['includes']('back'),
            _0x57d6e9[_0x3f008d['id']] = _0x3f008d);
        });
    }
    function _0x5d9ba3() {
        if (!_0x57d6e9)
            return;
        navigator['mediaDevices']['enumerateDevices']()['then'](function(_0x2f5bfc) {
            _0x56771e(_0x2f5bfc),
            _0x925822 = !![];
        })['catch'](function(_0x1a4ce7) {
            console['warn']('Unable to enumerate media devices: ' + _0x1a4ce7 + '
Webcams will not be available.'),
            _0x2917dd();
        }),
        /Firefox/['test'](navigator['userAgent']) && (setTimeout(_0x5d9ba3, 0xea60),
        _0x41d093('Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977'));
    }
    function _0x2917dd() {
        navigator['mediaDevices'] && navigator['mediaDevices']['removeEventListener'] && navigator['mediaDevices']['removeEventListener']('devicechange', _0x5d9ba3),
        _0x57d6e9 = null;
    }
    _0x1455c0['disableAccessToMediaDevices'] = _0x2917dd;
    if (!navigator['mediaDevices'])
        console['warn']('navigator.mediaDevices not supported by this browser. Webcam access will not be available.' + (location['protocol'] == 'https:' ? '' : ' Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used.')),
        _0x2917dd();
    else {
        if (typeof ENVIRONMENT_IS_PTHREAD === 'undefined' || !ENVIRONMENT_IS_PTHREAD)
            setTimeout(function() {
                try {
                    _0x403b09('enumerateMediaDevices'),
                    _0x22ebb5 = function() {
                        if (_0x3af793 !== null)
                            clearTimeout(_0x3af793);
                        _0x420721('enumerateMediaDevices');
                        if (navigator['mediaDevices'])
                            console['log']('navigator.mediaDevices support available');
                        _0x22ebb5 = function() {}
                        ;
                    }
                    ,
                    _0x5d9ba3(),
                    _0x3af793 = setTimeout(_0x22ebb5, 0x3e8),
                    navigator['mediaDevices']['addEventListener']('devicechange', _0x5d9ba3);
                } catch (_0x76902) {
                    console['warn']('Unable to enumerate media devices: ' + _0x76902),
                    _0x2917dd();
                }
            }, 0x0);
    }
    function _0xe42c6d(_0x4f7554, _0x57ec74, _0x242ae7) {
        var _0x9e7ed3 = _0x3d13ed(_0x57ec74)
          , _0x213950 = _0x3d13ed(_0x4f7554)
          , _0x2b0d30 = 0x0;
        try {
            if (_0x242ae7 === undefined)
                _0x42bad7(_0x213950, _0x9e7ed3);
            else {
                if (typeof _0x242ae7 === 'string')
                    _0x2b0d30 = _0x3d13ed(_0x242ae7),
                    _0x522f98(_0x213950, _0x9e7ed3, _0x2b0d30);
                else {
                    if (typeof _0x242ae7 === 'number')
                        _0x5694a0(_0x213950, _0x9e7ed3, _0x242ae7);
                    else
                        throw '' + _0x242ae7 + ' is does not have a type which is supported by SendMessage.';
                }
            }
        } finally {
            _0x1f3809(_0x2b0d30),
            _0x1f3809(_0x213950),
            _0x1f3809(_0x9e7ed3);
        }
    }
    _0x1455c0['SendMessage'] = _0xe42c6d;
    var _0xb4e8e2 = {}, _0x58c16f;
    for (_0x58c16f in _0x1455c0) {
        _0x1455c0['hasOwnProperty'](_0x58c16f) && (_0xb4e8e2[_0x58c16f] = _0x1455c0[_0x58c16f]);
    }
    var _0x264764 = []
      , _0x3b4a68 = './this.program'
      , _0x3882b7 = function(_0x566eaa, _0x2c9251) {
        throw _0x2c9251;
    }
      , _0x26aa2d = ![]
      , _0x52d399 = ![]
      , _0x37878f = ![]
      , _0xfc143d = ![];
    _0x26aa2d = typeof window === 'object',
    _0x52d399 = typeof importScripts === 'function',
    _0x37878f = typeof process === 'object' && typeof process['versions'] === 'object' && typeof process['versions']['node'] === 'string',
    _0xfc143d = !_0x26aa2d && !_0x37878f && !_0x52d399;
    var _0x791d8a = '';
    function _0x448ac8(_0x148ba7) {
        if (_0x1455c0['locateFile'])
            return _0x1455c0['locateFile'](_0x148ba7, _0x791d8a);
        return _0x791d8a + _0x148ba7;
    }
    var _0x1cbaeb, _0x254226, _0x101491, _0x4145c0, _0x31c36e, _0x4f0b2d;
    if (_0x37878f)
        _0x52d399 ? _0x791d8a = require('path')['dirname'](_0x791d8a) + '/' : _0x791d8a = __dirname + '/',
        _0x1cbaeb = function _0x4cd94f(_0x4f4b5d, _0x5d52b9) {
            if (!_0x31c36e)
                _0x31c36e = require('fs');
            if (!_0x4f0b2d)
                _0x4f0b2d = require('path');
            return _0x4f4b5d = _0x4f0b2d['normalize'](_0x4f4b5d),
            _0x31c36e['readFileSync'](_0x4f4b5d, _0x5d52b9 ? null : 'utf8');
        }
        ,
        _0x101491 = function _0x4d4ce4(_0x462a6b) {
            var _0x3fbb55 = _0x1cbaeb(_0x462a6b, !![]);
            return !_0x3fbb55['buffer'] && (_0x3fbb55 = new Uint8Array(_0x3fbb55)),
            _0x51a343(_0x3fbb55['buffer']),
            _0x3fbb55;
        }
        ,
        process['argv']['length'] > 0x1 && (_0x3b4a68 = process['argv'][0x1]['replace'](/\\/g, '/')),
        _0x264764 = process['argv']['slice'](0x2),
        typeof module !== 'undefined' && (module['exports'] = _0x1455c0),
        process['on']('uncaughtException', function(_0x5cc7fc) {
            if (!(_0x5cc7fc instanceof _0x560a8f))
                throw _0x5cc7fc;
        }),
        process['on']('unhandledRejection', _0x26724f),
        _0x3882b7 = function(_0x338c20) {
            process['exit'](_0x338c20);
        }
        ,
        _0x1455c0['inspect'] = function() {
            return '[Emscripten Module object]';
        }
        ;
    else {
        if (_0xfc143d) {
            typeof read != 'undefined' && (_0x1cbaeb = function _0x2d09b0(_0x30dccf) {
                return read(_0x30dccf);
            }
            );
            _0x101491 = function _0x6397a9(_0x451f70) {
                var _0x2c8959;
                if (typeof readbuffer === 'function')
                    return new Uint8Array(readbuffer(_0x451f70));
                return _0x2c8959 = read(_0x451f70, 'binary'),
                _0x51a343(typeof _0x2c8959 === 'object'),
                _0x2c8959;
            }
            ;
            if (typeof scriptArgs != 'undefined')
                _0x264764 = scriptArgs;
            else
                typeof arguments != 'undefined' && (_0x264764 = arguments);
            typeof quit === 'function' && (_0x3882b7 = function(_0x1edcd5) {
                quit(_0x1edcd5);
            }
            );
            if (typeof print !== 'undefined') {
                if (typeof console === 'undefined')
                    console = {};
                console['log'] = print,
                console['warn'] = console['error'] = typeof printErr !== 'undefined' ? printErr : print;
            }
        } else {
            if (_0x26aa2d || _0x52d399) {
                if (_0x52d399)
                    _0x791d8a = self['location']['href'];
                else
                    typeof document !== 'undefined' && document['currentScript'] && (_0x791d8a = document['currentScript']['src']);
                _0x791d8a['indexOf']('blob:') !== 0x0 ? _0x791d8a = _0x791d8a['substr'](0x0, _0x791d8a['lastIndexOf']('/') + 0x1) : _0x791d8a = '';
                {
                    _0x1cbaeb = function(_0x55dabb) {
                        var _0x53e417 = new XMLHttpRequest();
                        return _0x53e417['open']('GET', _0x55dabb, ![]),
                        _0x53e417['send'](null),
                        _0x53e417['responseText'];
                    }
                    ,
                    _0x52d399 && (_0x101491 = function(_0x3700ff) {
                        var _0x598135 = new XMLHttpRequest();
                        return _0x598135['open']('GET', _0x3700ff, ![]),
                        _0x598135['responseType'] = 'arraybuffer',
                        _0x598135['send'](null),
                        new Uint8Array(_0x598135['response']);
                    }
                    ),
                    _0x254226 = function(_0x1213c1, _0x4eaa7e, _0x3a846e) {
                        var _0x25959e = new XMLHttpRequest();
                        _0x25959e['open']('GET', _0x1213c1, !![]),
                        _0x25959e['responseType'] = 'arraybuffer',
                        _0x25959e['onload'] = function() {
                            if (_0x25959e['status'] == 0xc8 || _0x25959e['status'] == 0x0 && _0x25959e['response']) {
                                _0x4eaa7e(_0x25959e['response']);
                                return;
                            }
                            _0x3a846e();
                        }
                        ,
                        _0x25959e['onerror'] = _0x3a846e,
                        _0x25959e['send'](null);
                    }
                    ;
                }
                _0x4145c0 = function(_0x9e0717) {
                    document['title'] = _0x9e0717;
                }
                ;
            } else {}
        }
    }
    var _0x468a5e = _0x1455c0['print'] || console['log']['bind'](console)
      , _0x5a96d4 = _0x1455c0['printErr'] || console['warn']['bind'](console);
    for (_0x58c16f in _0xb4e8e2) {
        _0xb4e8e2['hasOwnProperty'](_0x58c16f) && (_0x1455c0[_0x58c16f] = _0xb4e8e2[_0x58c16f]);
    }
    _0xb4e8e2 = null;
    if (_0x1455c0['arguments'])
        _0x264764 = _0x1455c0['arguments'];
    if (_0x1455c0['thisProgram'])
        _0x3b4a68 = _0x1455c0['thisProgram'];
    if (_0x1455c0['quit'])
        _0x3882b7 = _0x1455c0['quit'];
    var _0x3c68be = 0x10;
    function _0x2668dd(_0x2868bc, _0x444d89) {
        if (!_0x444d89)
            _0x444d89 = _0x3c68be;
        return Math['ceil'](_0x2868bc / _0x444d89) * _0x444d89;
    }
    function _0x41d093(_0x1eae7a) {
        if (!_0x41d093['shown'])
            _0x41d093['shown'] = {};
        !_0x41d093['shown'][_0x1eae7a] && (_0x41d093['shown'][_0x1eae7a] = 0x1,
        _0x5a96d4(_0x1eae7a));
    }
    var _0x3c53fa = 0x0, _0x58c6a4 = function(_0x468ba6) {
        _0x3c53fa = _0x468ba6;
    }, _0x391cb1 = function() {
        return _0x3c53fa;
    }, _0x5284df;
    if (_0x1455c0['wasmBinary'])
        _0x5284df = _0x1455c0['wasmBinary'];
    var _0x17ad95 = _0x1455c0['noExitRuntime'] || !![];
    typeof WebAssembly !== 'object' && _0x26724f('no native wasm support detected');
    var _0x2aefc6, _0x2035c4 = ![], _0x56ac0b;
    function _0x51a343(_0x5731f9, _0x341519) {
        !_0x5731f9 && _0x26724f('Assertion failed: ' + _0x341519);
    }
    function _0x876335(_0x33513f) {
        var _0x192645 = _0x1455c0['_' + _0x33513f];
        return _0x51a343(_0x192645, 'Cannot call unknown function ' + _0x33513f + ', make sure it is exported'),
        _0x192645;
    }
    function _0x33cb90(_0x9bb757, _0xc4d944, _0x36ec75, _0x129af5, _0xb38c6b) {
        var _0x56b537 = {
            'string': function(_0x52886c) {
                var _0x40e87b = 0x0;
                if (_0x52886c !== null && _0x52886c !== undefined && _0x52886c !== 0x0) {
                    var _0x36f160 = (_0x52886c['length'] << 0x2) + 0x1;
                    _0x40e87b = _0x2887c9(_0x36f160),
                    _0x430ff7(_0x52886c, _0x40e87b, _0x36f160);
                }
                return _0x40e87b;
            },
            'array': function(_0x3bca12) {
                var _0x1a1bd3 = _0x2887c9(_0x3bca12['length']);
                return _0x5b86f9(_0x3bca12, _0x1a1bd3),
                _0x1a1bd3;
            }
        };
        function _0x5a1471(_0x4f61b7) {
            if (_0xc4d944 === 'string')
                return _0x46211(_0x4f61b7);
            if (_0xc4d944 === 'boolean')
                return Boolean(_0x4f61b7);
            return _0x4f61b7;
        }
        var _0x11caf4 = _0x876335(_0x9bb757)
          , _0x51b2f2 = []
          , _0x5285b1 = 0x0;
        if (_0x129af5)
            for (var _0x744779 = 0x0; _0x744779 < _0x129af5['length']; _0x744779++) {
                var _0x1d2a47 = _0x56b537[_0x36ec75[_0x744779]];
                if (_0x1d2a47) {
                    if (_0x5285b1 === 0x0)
                        _0x5285b1 = _0x9ae453();
                    _0x51b2f2[_0x744779] = _0x1d2a47(_0x129af5[_0x744779]);
                } else
                    _0x51b2f2[_0x744779] = _0x129af5[_0x744779];
            }
        var _0x1ae8d1 = _0x11caf4['apply'](null, _0x51b2f2);
        _0x1ae8d1 = _0x5a1471(_0x1ae8d1);
        if (_0x5285b1 !== 0x0)
            _0x305fb7(_0x5285b1);
        return _0x1ae8d1;
    }
    function _0xaee57d(_0x1d2762, _0x3c0b05, _0x15fcc4, _0x419939) {
        _0x15fcc4 = _0x15fcc4 || [];
        var _0x177cbc = _0x15fcc4['every'](function(_0x508dc5) {
            return _0x508dc5 === 'number';
        })
          , _0x3075f0 = _0x3c0b05 !== 'string';
        if (_0x3075f0 && _0x177cbc && !_0x419939)
            return _0x876335(_0x1d2762);
        return function() {
            return _0x33cb90(_0x1d2762, _0x3c0b05, _0x15fcc4, arguments, _0x419939);
        }
        ;
    }
    var _0x571ea0 = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
    function _0x44bcd4(_0x9163a7, _0x45e530, _0x355443) {
        var _0x9349f5 = _0x45e530 + _0x355443
          , _0x1aec20 = _0x45e530;
        while (_0x9163a7[_0x1aec20] && !(_0x1aec20 >= _0x9349f5))
            ++_0x1aec20;
        if (_0x1aec20 - _0x45e530 > 0x10 && _0x9163a7['subarray'] && _0x571ea0)
            return _0x571ea0['decode'](_0x9163a7['subarray'](_0x45e530, _0x1aec20));
        else {
            var _0x3e5edb = '';
            while (_0x45e530 < _0x1aec20) {
                var _0x5d29eb = _0x9163a7[_0x45e530++];
                if (!(_0x5d29eb & 0x80)) {
                    _0x3e5edb += String['fromCharCode'](_0x5d29eb);
                    continue;
                }
                var _0x111d33 = _0x9163a7[_0x45e530++] & 0x3f;
                if ((_0x5d29eb & 0xe0) == 0xc0) {
                    _0x3e5edb += String['fromCharCode']((_0x5d29eb & 0x1f) << 0x6 | _0x111d33);
                    continue;
                }
                var _0x47d48b = _0x9163a7[_0x45e530++] & 0x3f;
                (_0x5d29eb & 0xf0) == 0xe0 ? _0x5d29eb = (_0x5d29eb & 0xf) << 0xc | _0x111d33 << 0x6 | _0x47d48b : _0x5d29eb = (_0x5d29eb & 0x7) << 0x12 | _0x111d33 << 0xc | _0x47d48b << 0x6 | _0x9163a7[_0x45e530++] & 0x3f;
                if (_0x5d29eb < 0x10000)
                    _0x3e5edb += String['fromCharCode'](_0x5d29eb);
                else {
                    var _0x1c9694 = _0x5d29eb - 0x10000;
                    _0x3e5edb += String['fromCharCode'](0xd800 | _0x1c9694 >> 0xa, 0xdc00 | _0x1c9694 & 0x3ff);
                }
            }
        }
        return _0x3e5edb;
    }
    function _0x46211(_0x304349, _0x50c530) {
        return _0x304349 ? _0x44bcd4(_0x2ac27b, _0x304349, _0x50c530) : '';
    }
    function _0x346e2c(_0x8a5c1d, _0x3578d8, _0x3f359f, _0x1ce4b3) {
        if (!(_0x1ce4b3 > 0x0))
            return 0x0;
        var _0xf6006 = _0x3f359f
          , _0x2c2ff5 = _0x3f359f + _0x1ce4b3 - 0x1;
        for (var _0x18b872 = 0x0; _0x18b872 < _0x8a5c1d['length']; ++_0x18b872) {
            var _0x478614 = _0x8a5c1d['charCodeAt'](_0x18b872);
            if (_0x478614 >= 0xd800 && _0x478614 <= 0xdfff) {
                var _0xfbf14 = _0x8a5c1d['charCodeAt'](++_0x18b872);
                _0x478614 = 0x10000 + ((_0x478614 & 0x3ff) << 0xa) | _0xfbf14 & 0x3ff;
            }
            if (_0x478614 <= 0x7f) {
                if (_0x3f359f >= _0x2c2ff5)
                    break;
                _0x3578d8[_0x3f359f++] = _0x478614;
            } else {
                if (_0x478614 <= 0x7ff) {
                    if (_0x3f359f + 0x1 >= _0x2c2ff5)
                        break;
                    _0x3578d8[_0x3f359f++] = 0xc0 | _0x478614 >> 0x6,
                    _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 & 0x3f;
                } else {
                    if (_0x478614 <= 0xffff) {
                        if (_0x3f359f + 0x2 >= _0x2c2ff5)
                            break;
                        _0x3578d8[_0x3f359f++] = 0xe0 | _0x478614 >> 0xc,
                        _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 >> 0x6 & 0x3f,
                        _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 & 0x3f;
                    } else {
                        if (_0x3f359f + 0x3 >= _0x2c2ff5)
                            break;
                        _0x3578d8[_0x3f359f++] = 0xf0 | _0x478614 >> 0x12,
                        _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 >> 0xc & 0x3f,
                        _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 >> 0x6 & 0x3f,
                        _0x3578d8[_0x3f359f++] = 0x80 | _0x478614 & 0x3f;
                    }
                }
            }
        }
        return _0x3578d8[_0x3f359f] = 0x0,
        _0x3f359f - _0xf6006;
    }
    function _0x430ff7(_0x3b11b2, _0x3713ae, _0x336a02) {
        return _0x346e2c(_0x3b11b2, _0x2ac27b, _0x3713ae, _0x336a02);
    }
    function _0x5a6a49(_0x3b6034) {
        var _0x2cb9e5 = 0x0;
        for (var _0x338f1c = 0x0; _0x338f1c < _0x3b6034['length']; ++_0x338f1c) {
            var _0x42b7b1 = _0x3b6034['charCodeAt'](_0x338f1c);
            if (_0x42b7b1 >= 0xd800 && _0x42b7b1 <= 0xdfff)
                _0x42b7b1 = 0x10000 + ((_0x42b7b1 & 0x3ff) << 0xa) | _0x3b6034['charCodeAt'](++_0x338f1c) & 0x3ff;
            if (_0x42b7b1 <= 0x7f)
                ++_0x2cb9e5;
            else {
                if (_0x42b7b1 <= 0x7ff)
                    _0x2cb9e5 += 0x2;
                else {
                    if (_0x42b7b1 <= 0xffff)
                        _0x2cb9e5 += 0x3;
                    else
                        _0x2cb9e5 += 0x4;
                }
            }
        }
        return _0x2cb9e5;
    }
    function _0x14c33e(_0x1ef920) {
        var _0x49d5b7 = _0x5a6a49(_0x1ef920) + 0x1
          , _0x363e7c = _0x214635(_0x49d5b7);
        if (_0x363e7c)
            _0x346e2c(_0x1ef920, _0x10882b, _0x363e7c, _0x49d5b7);
        return _0x363e7c;
    }
    function _0x6d5042(_0x4cbb56) {
        var _0x5d8c42 = _0x5a6a49(_0x4cbb56) + 0x1
          , _0x34302f = _0x2887c9(_0x5d8c42);
        return _0x346e2c(_0x4cbb56, _0x10882b, _0x34302f, _0x5d8c42),
        _0x34302f;
    }
    function _0x5b86f9(_0x5ad597, _0x136aff) {
        _0x10882b['set'](_0x5ad597, _0x136aff);
    }
    function _0x2ad138(_0x4f8436, _0x7b627c, _0x4ff7af) {
        for (var _0x456234 = 0x0; _0x456234 < _0x4f8436['length']; ++_0x456234) {
            _0x10882b[_0x7b627c++ >> 0x0] = _0x4f8436['charCodeAt'](_0x456234);
        }
        if (!_0x4ff7af)
            _0x10882b[_0x7b627c >> 0x0] = 0x0;
    }
    function _0x2fc4f9(_0x52b5b6, _0x125734) {
        return _0x52b5b6 % _0x125734 > 0x0 && (_0x52b5b6 += _0x125734 - _0x52b5b6 % _0x125734),
        _0x52b5b6;
    }
    var _0x3a5088, _0x10882b, _0x2ac27b, _0x9a762d, _0xb88d42, _0x593fb9, _0x311b71, _0x81f2c2, _0x2a3d2d;
    function _0x44e88b(_0x541a0c) {
        _0x3a5088 = _0x541a0c,
        _0x1455c0['HEAP8'] = _0x10882b = new Int8Array(_0x541a0c),
        _0x1455c0['HEAP16'] = _0x9a762d = new Int16Array(_0x541a0c),
        _0x1455c0['HEAP32'] = _0x593fb9 = new Int32Array(_0x541a0c),
        _0x1455c0['HEAPU8'] = _0x2ac27b = new Uint8Array(_0x541a0c),
        _0x1455c0['HEAPU16'] = _0xb88d42 = new Uint16Array(_0x541a0c),
        _0x1455c0['HEAPU32'] = _0x311b71 = new Uint32Array(_0x541a0c),
        _0x1455c0['HEAPF32'] = _0x81f2c2 = new Float32Array(_0x541a0c),
        _0x1455c0['HEAPF64'] = _0x2a3d2d = new Float64Array(_0x541a0c);
    }
    var _0x434828 = _0x1455c0['INITIAL_MEMORY'] || 0x2000000, _0x13c19c, _0x1a96b2 = [], _0xed27dd = [], _0x442cec = [], _0x1a10f4 = [], _0x319260 = [], _0xc0d315 = ![], _0x5289d9 = ![];
    function _0xdb02bb() {
        if (_0x1455c0['preRun']) {
            if (typeof _0x1455c0['preRun'] == 'function')
                _0x1455c0['preRun'] = [_0x1455c0['preRun']];
            while (_0x1455c0['preRun']['length']) {
                _0x32492b(_0x1455c0['preRun']['shift']());
            }
        }
        _0xcd8938(_0x1a96b2);
    }
    function _0x5f4c4f() {
        _0xc0d315 = !![];
        if (!_0x1455c0['noFSInit'] && !_0x23c512['init']['initialized'])
            _0x23c512['init']();
        _0xe4037a['init'](),
        _0x573cc0['root'] = _0x23c512['mount'](_0x573cc0, {}, null),
        _0x4df6bf['root'] = _0x23c512['mount'](_0x4df6bf, {}, null),
        _0xcd8938(_0xed27dd);
    }
    function _0x210095() {
        _0x23c512['ignorePermissions'] = ![],
        _0xcd8938(_0x442cec);
    }
    function _0x3e5935() {
        _0x5289d9 = !![];
    }
    function _0x4b18e0() {
        if (_0x1455c0['postRun']) {
            if (typeof _0x1455c0['postRun'] == 'function')
                _0x1455c0['postRun'] = [_0x1455c0['postRun']];
            while (_0x1455c0['postRun']['length']) {
                _0x3c9402(_0x1455c0['postRun']['shift']());
            }
        }
        _0xcd8938(_0x319260);
    }
    function _0x32492b(_0x2f09ec) {
        _0x1a96b2['unshift'](_0x2f09ec);
    }
    function _0x35bc7d(_0x548d43) {
        _0xed27dd['unshift'](_0x548d43);
    }
    function _0x3c9402(_0x5e5b39) {
        _0x319260['unshift'](_0x5e5b39);
    }
    var _0x28da79 = 0x0
      , _0x176170 = null
      , _0x17ee96 = null;
    function _0x2b1035(_0x26e4a2) {
        return _0x26e4a2;
    }
    function _0x403b09(_0xc76b1) {
        _0x28da79++,
        _0x1455c0['monitorRunDependencies'] && _0x1455c0['monitorRunDependencies'](_0x28da79);
    }
    function _0x420721(_0x2d0e63) {
        _0x28da79--;
        _0x1455c0['monitorRunDependencies'] && _0x1455c0['monitorRunDependencies'](_0x28da79);
        if (_0x28da79 == 0x0) {
            _0x176170 !== null && (clearInterval(_0x176170),
            _0x176170 = null);
            if (_0x17ee96) {
                var _0xebe427 = _0x17ee96;
                _0x17ee96 = null,
                _0xebe427();
            }
        }
    }
    _0x1455c0['preloadedImages'] = {},
    _0x1455c0['preloadedAudios'] = {};
    function _0x26724f(_0x240841) {
        _0x1455c0['onAbort'] && _0x1455c0['onAbort'](_0x240841);
        _0x240841 += '',
        _0x5a96d4(_0x240841),
        _0x2035c4 = !![],
        _0x56ac0b = 0x1,
        _0x240841 = 'abort(' + _0x240841 + '). Build with -s ASSERTIONS=1 for more info.';
        var _0x2e1007 = new WebAssembly['RuntimeError'](_0x240841);
        throw _0x2e1007;
    }
    var _0x402bc2 = 'data:application/octet-stream;base64,';
    function _0xe4623d(_0x4c58f9) {
        return _0x4c58f9['startsWith'](_0x402bc2);
    }
    function _0xd57055(_0x578dd2) {
        return _0x578dd2['startsWith']('file://');
    }
    var _0x12d399 = 'build.wasm';
    !_0xe4623d(_0x12d399) && (_0x12d399 = _0x448ac8(_0x12d399));
    function _0x4a668d(_0x5ede5b) {
        try {
            if (_0x5ede5b == _0x12d399 && _0x5284df)
                return new Uint8Array(_0x5284df);
            if (_0x101491)
                return _0x101491(_0x5ede5b);
            else
                throw 'both async and sync fetching of the wasm failed';
        } catch (_0x383f06) {
            _0x26724f(_0x383f06);
        }
    }
    function _0x4ae5d4() {
        if (!_0x5284df && (_0x26aa2d || _0x52d399)) {
            if (typeof fetch === 'function' && !_0xd57055(_0x12d399))
                return fetch(_0x12d399, {
                    'credentials': 'same-origin'
                })['then'](function(_0x4109f2) {
                    if (!_0x4109f2['ok'])
                        throw 'failed to load wasm binary file at '' + _0x12d399 + ''';
                    return _0x4109f2['arrayBuffer']();
                })['catch'](function() {
                    return _0x4a668d(_0x12d399);
                });
            else {
                if (_0x254226)
                    return new Promise(function(_0x5f2065, _0x4f9c95) {
                        _0x254226(_0x12d399, function(_0x5de048) {
                            _0x5f2065(new Uint8Array(_0x5de048));
                        }, _0x4f9c95);
                    }
                    );
            }
        }
        return Promise['resolve']()['then'](function() {
            return _0x4a668d(_0x12d399);
        });
    }
    function _0x221294() {
        var _0x3e6a4d = {
            'a': _0xe9fa4d
        };
        function _0x1e6fc3(_0x4d55ea, _0x360122) {
            var _0x929d45 = _0x4d55ea['exports'];
            _0x1455c0['asm'] = _0x929d45,
            _0x2aefc6 = _0x1455c0['asm']['ql'],
            _0x44e88b(_0x2aefc6['buffer']),
            _0x13c19c = _0x1455c0['asm']['Ql'],
            _0x35bc7d(_0x1455c0['asm']['rl']),
            _0x420721('wasm-instantiate');
        }
        _0x403b09('wasm-instantiate');
        function _0x29e112(_0x48e422) {
            _0x1e6fc3(_0x48e422['instance']);
        }
        function _0x563e9f(_0x19131a) {
            return _0x4ae5d4()['then'](function(_0x4169bc) {
                var _0x16c67a = WebAssembly['instantiate'](_0x4169bc, _0x3e6a4d);
                return _0x16c67a;
            })['then'](_0x19131a, function(_0x423611) {
                _0x5a96d4('failed to asynchronously prepare wasm: ' + _0x423611),
                _0x26724f(_0x423611);
            });
        }
        function _0x57610f() {
            return !_0x5284df && typeof WebAssembly['instantiateStreaming'] === 'function' && !_0xe4623d(_0x12d399) && !_0xd57055(_0x12d399) && typeof fetch === 'function' ? fetch(_0x12d399, {
                'credentials': 'same-origin'
            })['then'](function(_0x4bed5e) {
                var _0x40a217 = WebAssembly['instantiateStreaming'](_0x4bed5e, _0x3e6a4d);
                return _0x40a217['then'](_0x29e112, function(_0x3d6f05) {
                    return _0x5a96d4('wasm streaming compile failed: ' + _0x3d6f05),
                    _0x5a96d4('falling back to ArrayBuffer instantiation'),
                    _0x563e9f(_0x29e112);
                });
            }) : _0x563e9f(_0x29e112);
        }
        if (_0x1455c0['instantiateWasm'])
            try {
                var _0x223516 = _0x1455c0['instantiateWasm'](_0x3e6a4d, _0x1e6fc3);
                return _0x223516;
            } catch (_0x1f3f89) {
                return _0x5a96d4('Module.instantiateWasm callback failed with error: ' + _0x1f3f89),
                ![];
            }
        return _0x57610f(),
        {};
    }
    var _0x1f09fe, _0x27868b, _0x5ad8c5 = {
        0x534808: function() {
            return _0x1455c0['webglContextAttributes']['premultipliedAlpha'];
        },
        0x534845: function() {
            return _0x1455c0['webglContextAttributes']['preserveDrawingBuffer'];
        },
        0x534885: function() {
            return _0x1455c0['webglContextAttributes']['powerPreference'];
        }
    };
    function _0xcd8938(_0x5da88e) {
        while (_0x5da88e['length'] > 0x0) {
            var _0x27d37b = _0x5da88e['shift']();
            if (typeof _0x27d37b == 'function') {
                _0x27d37b(_0x1455c0);
                continue;
            }
            var _0x193cfc = _0x27d37b['func'];
            typeof _0x193cfc === 'number' ? _0x27d37b['arg'] === undefined ? (function() {
                _0x319313['call'](null, _0x193cfc);
            }()) : function(_0x4e7ee5) {
                _0x2d1c65['apply'](null, [_0x193cfc, _0x4e7ee5]);
            }(_0x27d37b['arg']) : _0x193cfc(_0x27d37b['arg'] === undefined ? null : _0x27d37b['arg']);
        }
    }
    function _0x412d22(_0x547b28) {
        return _0x547b28;
    }
    function _0x33d493(_0x183c48) {
        var _0x134591 = /\b_Z[\w\d_]+/g;
        return _0x183c48['replace'](_0x134591, function(_0xc045c8) {
            var _0x366af1 = _0x412d22(_0xc045c8);
            return _0xc045c8 === _0x366af1 ? _0xc045c8 : _0x366af1 + ' [' + _0xc045c8 + ']';
        });
    }
    function _0x2080a3(_0xa2aed9, _0x3a6d74, _0x1073cc) {
        var _0x43f6bf = _0x1455c0['dynCall_' + _0xa2aed9];
        return _0x1073cc && _0x1073cc['length'] ? _0x43f6bf['apply'](null, [_0x3a6d74]['concat'](_0x1073cc)) : _0x43f6bf['call'](null, _0x3a6d74);
    }
    function _0x45b917(_0x3eec50, _0x42874d, _0x2ee401) {
        return _0x2080a3(_0x3eec50, _0x42874d, _0x2ee401);
    }
    function _0x518cfb() {
        var _0xdcbfca = new Error();
        if (!_0xdcbfca['stack']) {
            try {
                throw new Error();
            } catch (_0x7ea909) {
                _0xdcbfca = _0x7ea909;
            }
            if (!_0xdcbfca['stack'])
                return '(no stack trace available)';
        }
        return _0xdcbfca['stack']['toString']();
    }
    var _0x622fc4 = 0x0;
    function _0x5c72a7() {
        return _0x17ad95 || _0x622fc4 > 0x0;
    }
    function _0x3c669b() {
        var _0x29d3ce = _0x518cfb();
        if (_0x1455c0['extraStackTrace'])
            _0x29d3ce += '
' + _0x1455c0['extraStackTrace']();
        return _0x33d493(_0x29d3ce);
    }
    function _0x409b75(_0xc44055, _0x23e650, _0x2e59b5, _0x38726a, _0x56ba7c) {
        var _0x3a8ce6 = _0x46211(_0xc44055)
          , _0x4cd08b = _0x46211(_0x23e650)
          , _0x13b481 = _0x46211(_0x2e59b5)
          , _0x12a758 = _0x46211(_0x38726a)
          , _0x479a95 = _0x46211(_0x56ba7c);
        try {
            firebase['firestore']()['collection'](_0x3a8ce6)['add'](JSON['parse'](_0x4cd08b))['then'](function(_0x4e2193) {
                window['unityInstance']['SendMessage'](_0x13b481, _0x12a758, 'Success: document added in collection ' + _0x3a8ce6);
            })['catch'](function(_0x180d75) {
                window['unityInstance']['SendMessage'](_0x13b481, _0x479a95, JSON['stringify'](_0x180d75, Object['getOwnPropertyNames'](_0x180d75)));
            });
        } catch (_0x21fb7e) {
            window['unityInstance']['SendMessage'](_0x13b481, _0x479a95, JSON['stringify'](_0x21fb7e, Object['getOwnPropertyNames'](_0x21fb7e)));
        }
    }
    function _0x12a1a1(_0x1db77a, _0x5da5ef, _0x50fed3, _0x515188, _0x4f6106, _0x316a52, _0x228b72) {
        var _0x32f0e7 = _0x46211(_0x1db77a)
          , _0xdde65b = _0x46211(_0x5da5ef)
          , _0x724e66 = _0x46211(_0x50fed3)
          , _0x1d817a = _0x46211(_0x515188)
          , _0x30f9f0 = _0x46211(_0x4f6106)
          , _0x2833a4 = _0x46211(_0x316a52)
          , _0x1f56f2 = _0x46211(_0x228b72);
        try {
            var _0x515188 = {};
            _0x515188[_0x724e66] = firebase['firestore']['FieldValue']['arrayUnion'](JSON['parse'](_0x1d817a)),
            firebase['firestore']()['collection'](_0x32f0e7)['doc'](_0xdde65b)['update'](_0x515188)['then'](function() {
                window['unityInstance']['SendMessage'](_0x30f9f0, _0x2833a4, 'Success: element ' + _0x1d817a + ' was added in ' + _0x724e66);
            })['catch'](function(_0x8a5ac9) {
                window['unityInstance']['SendMessage'](_0x30f9f0, _0x1f56f2, JSON['stringify'](_0x8a5ac9, Object['getOwnPropertyNames'](_0x8a5ac9)));
            });
        } catch (_0x3cf4ab) {
            window['unityInstance']['SendMessage'](_0x30f9f0, _0x1f56f2, JSON['stringify'](_0x3cf4ab, Object['getOwnPropertyNames'](_0x3cf4ab)));
        }
    }
    function _0x3c7cff(_0x2c9fdd) {
        try {
            window['CrazyGames']['SDK']['user']['addScore'](_0x2c9fdd);
        } catch (_0x448658) {
            window['UnitySDK']['logError']('Error while calling addScore:', _0x448658);
        }
    }
    function _0x5c1047(_0xd93432, _0x434a3b) {
        try {
            window['CrazyGames']['SDK']['analytics']['trackOrder'](window['unityStringify'](_0xd93432), JSON['parse'](window['unityStringify'](_0x434a3b)));
        } catch (_0x2c8460) {
            window['UnitySDK']['logError']('Error while calling trackOrder:', _0x2c8460);
        }
    }
    function _0x472cfd(_0x122e17) {
        const _0x40963e = document['createElement']('textarea');
        _0x40963e['value'] = window['unityStringify'](_0x122e17),
        document['body']['appendChild'](_0x40963e),
        _0x40963e['select'](),
        _0x40963e['setSelectionRange'](0x0, 0x1869f),
        document['execCommand']('copy'),
        document['body']['removeChild'](_0x40963e);
    }
    function _0x348b1e(_0x16d31d, _0x45f614, _0x5ec2e2, _0xf7498e, _0x5027b9) {
        var _0x170c78 = _0x46211(_0x16d31d)
          , _0x51f27e = _0x46211(_0x45f614)
          , _0x1f5777 = _0x46211(_0x5ec2e2)
          , _0x10e2f1 = _0x46211(_0xf7498e)
          , _0x4c97d6 = _0x46211(_0x5027b9);
        try {
            firebase['auth']()['createUserWithEmailAndPassword'](_0x170c78, _0x51f27e)['then'](function(_0x581a8b) {
                window['unityInstance']['SendMessage'](_0x1f5777, _0x10e2f1, 'Success: signed up for ' + _0x170c78);
            })['catch'](function(_0xdf4123) {
                window['unityInstance']['SendMessage'](_0x1f5777, _0x4c97d6, JSON['stringify'](_0xdf4123, Object['getOwnPropertyNames'](_0xdf4123)));
            });
        } catch (_0x32228e) {
            window['unityInstance']['SendMessage'](_0x1f5777, _0x4c97d6, JSON['stringify'](_0x32228e, Object['getOwnPropertyNames'](_0x32228e)));
        }
    }
    function _0x45772f() {
        try {
            window['CrazyGames']['SDK']['data']['clear']();
        } catch (_0x5ea63f) {
            window['UnitySDK']['logError']('Error while calling clear:', _0x5ea63f);
        }
    }
    function _0x3983c7(_0x238ac1) {
        var _0x167590 = null;
        try {
            _0x167590 = window['CrazyGames']['SDK']['data']['getItem'](window['unityStringify'](_0x238ac1));
        } catch (_0x10cfa3) {
            window['UnitySDK']['logError']('Error while calling getItem:', _0x10cfa3);
        }
        var _0x23338e = _0x5a6a49(_0x167590 + '') + 0x1
          , _0x1dac0d = _0x214635(_0x23338e);
        return _0x430ff7(_0x167590, _0x1dac0d, _0x23338e),
        _0x1dac0d;
    }
    function _0x3054e8(_0x2d3d5c) {
        var _0x31a158 = null;
        try {
            _0x31a158 = window['CrazyGames']['SDK']['data']['getItem'](window['unityStringify'](_0x2d3d5c));
        } catch (_0x2232b6) {
            window['UnitySDK']['logError']('Error while calling getItem:', _0x2232b6);
        }
        return _0x31a158 !== null;
    }
    function _0xd29ec3(_0x4b102c) {
        try {
            window['CrazyGames']['SDK']['data']['removeItem'](window['unityStringify'](_0x4b102c));
        } catch (_0x2a33ba) {
            window['UnitySDK']['logError']('Error while calling removeItem:', _0x2a33ba);
        }
    }
    function _0x216c44(_0xe0d00e, _0x15e4a4) {
        try {
            window['CrazyGames']['SDK']['data']['setItem'](window['unityStringify'](_0xe0d00e), window['unityStringify'](_0x15e4a4));
        } catch (_0x387a1a) {
            window['UnitySDK']['logError']('Error while calling setItem:', _0x387a1a);
        }
    }
    function _0x8f31f3(_0x444711, _0x5d7491, _0x2228fe, _0x28b9a6, _0x55f56c) {
        var _0x1ba97b = _0x46211(_0x444711)
          , _0x505f80 = _0x46211(_0x5d7491)
          , _0x25f82f = _0x46211(_0x2228fe)
          , _0x30696c = _0x46211(_0x28b9a6)
          , _0x4706a9 = _0x46211(_0x55f56c);
        try {
            firebase['firestore']()['collection'](_0x1ba97b)['doc'](_0x505f80)['delete']()['then'](function() {
                window['unityInstance']['SendMessage'](_0x25f82f, _0x30696c, 'Success: document ' + _0x505f80 + ' was deleted');
            })['catch'](function(_0x54847f) {
                window['unityInstance']['SendMessage'](_0x25f82f, _0x4706a9, JSON['stringify'](_0x54847f, Object['getOwnPropertyNames'](_0x54847f)));
            });
        } catch (_0x142d69) {
            window['unityInstance']['SendMessage'](_0x25f82f, _0x4706a9, JSON['stringify'](_0x142d69, Object['getOwnPropertyNames'](_0x142d69)));
        }
    }
    function _0x57371(_0x573df6, _0x3ba664, _0x15d0eb, _0x44ac81, _0xfa09ee, _0x1f78a2) {
        var _0x2fb884 = _0x46211(_0x573df6)
          , _0x3a1301 = _0x46211(_0x3ba664)
          , _0x52fc62 = _0x46211(_0x15d0eb)
          , _0x3d43e2 = _0x46211(_0x44ac81)
          , _0x5ba5b3 = _0x46211(_0xfa09ee)
          , _0x4d4c7b = _0x46211(_0x1f78a2);
        try {
            var _0xc6cbba = {};
            _0xc6cbba[_0x52fc62] = firebase['firestore']['FieldValue']['delete'](),
            firebase['firestore']()['collection'](_0x2fb884)['doc'](_0x3a1301)['update'](_0xc6cbba)['then'](function() {
                window['unityInstance']['SendMessage'](_0x3d43e2, _0x5ba5b3, 'Success: field ' + _0x52fc62 + ' was deleted');
            })['catch'](function(_0x92bea4) {
                window['unityInstance']['SendMessage'](_0x3d43e2, _0x4d4c7b, JSON['stringify'](_0x92bea4, Object['getOwnPropertyNames'](_0x92bea4)));
            });
        } catch (_0x12ad74) {
            window['unityInstance']['SendMessage'](_0x3d43e2, _0x4d4c7b, JSON['stringify'](_0x12ad74, Object['getOwnPropertyNames'](_0x12ad74)));
        }
    }
    function _0x34b199(_0x47268e, _0x177ed3, _0x18e436, _0x34ef88) {
        var _0x230464 = _0x46211(_0x47268e)
          , _0x39992f = _0x46211(_0x177ed3)
          , _0x1db3ba = _0x46211(_0x18e436)
          , _0x52541b = _0x46211(_0x34ef88);
        try {
            firebase['database']()['ref'](_0x230464)['remove']()['then'](function(_0x184a72) {
                window['unityInstance']['SendMessage'](_0x39992f, _0x1db3ba, 'Success: ' + _0x230464 + ' was deleted');
            });
        } catch (_0x123bd7) {
            window['unityInstance']['SendMessage'](_0x39992f, _0x52541b, JSON['stringify'](_0x123bd7, Object['getOwnPropertyNames'](_0x123bd7)));
        }
    }
    function _0x1a16fd() {
        window['clipboardPasteHandler'] && (window['removeEventListener']('paste', window['clipboardPasteHandler']),
        window['clipboardPasteHandler'] = null,
        console['log']('Paste listener disabled.'));
    }
    function _0x49dcb9(_0x311914, _0x56e9b0, _0x3557f8, _0x3604ca) {
        var _0x9564fc = _0x46211(_0x311914)
          , _0x192023 = _0x46211(_0x56e9b0)
          , _0x1ede40 = _0x46211(_0x3557f8)
          , _0x5bc593 = _0x46211(_0x3604ca);
        try {
            firebase['storage']()['ref'](_0x9564fc)['getDownloadURL']()['then'](function(_0x2c2c47) {
                var _0x3448cd = new XMLHttpRequest();
                _0x3448cd['responseType'] = 'arraybuffer',
                _0x3448cd['onload'] = function(_0x27c770) {
                    var _0x3dbe1f = _0x3448cd['response'];
                    window['unityInstance']['SendMessage'](_0x192023, _0x1ede40, _0x2efa1d(_0x3dbe1f));
                }
                ,
                _0x3448cd['open']('GET', _0x2c2c47),
                _0x3448cd['send']();
            })['catch'](function(_0x659b5c) {
                window['unityInstance']['SendMessage'](_0x192023, _0x5bc593, JSON['stringify'](_0x659b5c, Object['getOwnPropertyNames'](_0x659b5c)));
            });
        } catch (_0x34931f) {
            window['unityInstance']['SendMessage'](_0x192023, _0x5bc593, JSON['stringify'](_0x34931f, Object['getOwnPropertyNames'](_0x34931f)));
        }
        function _0x2efa1d(_0x5c6bb4) {
            var _0x5eabe5 = ''
              , _0x5a72a3 = new Uint8Array(_0x5c6bb4)
              , _0x322af1 = _0x5a72a3['byteLength'];
            for (var _0x2daaa9 = 0x0; _0x2daaa9 < _0x322af1; _0x2daaa9++) {
                _0x5eabe5 += String['fromCharCode'](_0x5a72a3[_0x2daaa9]);
            }
            return window['btoa'](_0x5eabe5);
        }
    }
    function _0x4bd3c4(_0x4c2387, _0x267560) {
        var _0x4bd24a = _0x46211(_0x4c2387)
          , _0x1dc7f2 = _0x46211(_0x267560);
        if (window['clipboardPasteHandler'])
            return;
        window['clipboardPasteHandler'] = function(_0x3163ea) {
            _0x3163ea['preventDefault']();
            var _0x392446 = (_0x3163ea['clipboardData'] || window['clipboardData'])['getData']('text');
            _0xe42c6d(_0x4bd24a, _0x1dc7f2, _0x392446);
        }
        ,
        window['addEventListener']('paste', window['clipboardPasteHandler']),
        console['log']('Paste listener enabled.');
    }
    function _0x575352() {
        var _0x32105a = window['document']
          , _0x20e77d = _0x32105a['fullscreenElement'] || _0x32105a['mozFullScreenElement'] || _0x32105a['webkitFullscreenElement'] || _0x32105a['msFullscreenElement'];
        if (_0x20e77d) {
            if (document['exitFullscreen'])
                document['exitFullscreen']();
            else {
                if (document['msExitFullscreen'])
                    document['msExitFullscreen']();
                else {
                    if (document['mozCancelFullScreen'])
                        document['mozCancelFullScreen']();
                    else {
                        if (document['webkitExitFullscreen'])
                            document['webkitExitFullscreen']();
                    }
                }
            }
        }
    }
    function _0x483950(_0x5a8fdf, _0x587053) {
        var _0x4465ec = _0x46211(_0x5a8fdf)
          , _0x3162d3 = _0x46211(_0x587053)
          , _0x539d16 = new Blob([_0x3162d3],{
            'type': 'text/plain'
        })
          , _0x265fc4 = document['createElement']('a');
        _0x265fc4['href'] = URL['createObjectURL'](_0x539d16),
        _0x265fc4['download'] = _0x4465ec,
        _0x265fc4['click'](),
        setTimeout( () => URL['revokeObjectURL'](_0x265fc4['href']), 0x64);
    }
    function _0x2ab17f() {
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: Getting WeeGoo InGame Ad'),
            window[preroll['config']['loaderObjectName']]['refetchAd']();
        } catch (_0x2b79c6) {
            console['log']('No WeeGooAFG implementation found!');
        }
    }
    function _0x137458(_0x3994ba) {
        var _0x35cdfd = {
            'adStarted': function() {
                _0xe42c6d('GMSDKAdvertisement', 'JSLibCallback_AdStarted');
            },
            'adFinished': function() {
                _0xe42c6d('GMSDKAdvertisement', 'JSLibCallback_AdFinished');
            },
            'adError': function(_0x1bee49) {
                _0xe42c6d('GMSDKAdvertisement', 'JSLibCallback_AdError', JSON['stringify'](_0x1bee49));
            }
        }
          , _0xe8aa31 = window['GMSOFT_GMADS_INFO']['reward']
          , _0x154589 = _0xe8aa31[Math['floor'](Math['random']() * _0xe8aa31['length'])];
        try {
            var _0x4a4c41 = document['createElement']('div');
            _0x4a4c41['id'] = 'gm-ad-overlay',
            _0x4a4c41['style']['cssText'] = '
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        ';
            var _0x21be4a = document['createElement']('div');
            _0x21be4a['style']['cssText'] = '
          position: relative;
          max-width: 90%;
          max-height: 80%;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        ';
            var _0x2add5e = document['createElement']('video');
            _0x2add5e['src'] = _0x154589['image'],
            _0x2add5e['style']['cssText'] = '
          width: 100%;
          height: 100%;
          display: block;
        ',
            _0x2add5e['autoplay'] = !![],
            _0x2add5e['muted'] = !![],
            _0x2add5e['preload'] = 'auto';
            var _0x1c0e92 = document['createElement']('button');
            _0x1c0e92['innerHTML'] = 'Skip (5)',
            _0x1c0e92['disabled'] = !![],
            _0x1c0e92['style']['cssText'] = '
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: 1px solid #666;
          border-radius: 6px;
          padding: 10px 16px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          z-index: 10001;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ',
            _0x1c0e92['disabled'] = !![],
            _0x1c0e92['style']['opacity'] = '0.5';
            var _0x24ab8e = document['createElement']('div');
            _0x24ab8e['style']['cssText'] = '
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          z-index: 10001;
        ';
            var _0x31e399 = document['createElement']('div');
            _0x31e399['style']['cssText'] = '
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
          transition: width 0.1s ease;
        ';
            var _0x5c42fc = 0x5
              , _0x1970ba = setInterval(function() {
                _0x5c42fc--,
                _0x5c42fc > 0x0 ? _0x1c0e92['innerHTML'] = 'Skip (' + _0x5c42fc + ')' : (_0x1c0e92['innerHTML'] = 'Skip',
                _0x1c0e92['disabled'] = ![],
                _0x1c0e92['style']['opacity'] = '1',
                _0x1c0e92['style']['cursor'] = 'pointer',
                clearInterval(_0x1970ba));
            }, 0x3e8);
            function _0x2c9817() {
                _0x4a4c41 && _0x4a4c41['parentNode'] && _0x4a4c41['parentNode']['removeChild'](_0x4a4c41),
                clearInterval(_0x1970ba),
                _0x35cdfd['adFinished']();
            }
            function _0x429fc5() {
                window['open'](_0x154589['url'], '_blank');
            }
            function _0x3e84e6() {
                if (_0x2add5e['duration'] && _0x2add5e['currentTime']) {
                    var _0x309f8b = _0x2add5e['currentTime'] / _0x2add5e['duration'] * 0x64;
                    _0x31e399['style']['width'] = _0x309f8b + '%';
                }
            }
            _0x2add5e['addEventListener']('loadstart', function() {
                _0x35cdfd['adStarted']();
            }),
            _0x2add5e['addEventListener']('timeupdate', function() {
                _0x3e84e6();
            }),
            _0x2add5e['addEventListener']('ended', function() {
                _0x2c9817();
            }),
            _0x2add5e['addEventListener']('error', function(_0x3787ca) {
                var _0x302668 = {
                    'message': 'Video load error',
                    'code': _0x3787ca['target']['error'] ? _0x3787ca['target']['error']['code'] : 'unknown'
                };
                _0x35cdfd['adError'](_0x302668),
                _0x2c9817();
            }),
            _0x2add5e['addEventListener']('click', function() {
                _0x429fc5();
            }),
            _0x1c0e92['addEventListener']('click', function() {
                !_0x1c0e92['disabled'] && _0x2c9817();
            }),
            _0x2add5e['addEventListener']('contextmenu', function(_0x50b0a9) {
                _0x50b0a9['preventDefault']();
            }),
            _0x24ab8e['appendChild'](_0x31e399),
            _0x21be4a['appendChild'](_0x2add5e),
            _0x21be4a['appendChild'](_0x1c0e92),
            _0x21be4a['appendChild'](_0x24ab8e),
            _0x4a4c41['appendChild'](_0x21be4a),
            document['body']['appendChild'](_0x4a4c41),
            _0x2add5e['play']()['catch'](function(_0x3a3b87) {
                console['error']('Video play error:', _0x3a3b87),
                _0x35cdfd['adError']({
                    'message': 'Cannot play video',
                    'details': _0x3a3b87['message']
                }),
                _0x2c9817();
            });
        } catch (_0x2bd17d) {
            console['error']('Ad overlay creation error:', _0x2bd17d),
            _0x35cdfd['adError']({
                'message': 'Failed to create ad overlay',
                'details': _0x2bd17d['message']
            });
        }
    }
    function _0x3c6dd9(_0x2d3155, _0x3635cc) {
        gmEvent(_0x46211(_0x2d3155), _0x46211(_0x3635cc));
    }
    function _0x58d163() {
        const _0x3771bb = 'gmsdksigndomain';
        try {
            if (localStorage['hasOwnProperty'](_0x3771bb)) {
                let _0x44c115 = localStorage['getItem'](_0x3771bb);
                if (_0x44c115 && _0x44c115['length'] > 0xa) {
                    window['GMSOFT_SIGNED'] = _0x44c115,
                    console['log']('Local storage GM_SDK_GetVeryfiedSignature: ', window['GMSOFT_SIGNED']),
                    _0xe42c6d('GmSoft', 'OnGetVeryfiedSignature', window['GMSOFT_SIGNED']);
                    return;
                }
            }
        } catch (_0x355ee7) {
            console['error']('Error getting GM_SDK_GetVeryfiedSignature from local storage: ', _0x355ee7);
        }
        try {
            let _0x18ef95 = 'hn=' + window['location']['hostname']
              , _0x7f648c = btoa(_0x18ef95)
              , _0x4f9c13 = 'https://api.cdnwave.com/sdkdom/keysigned';
            window['GMSOFT_OPTIONS'] && window['GMSOFT_OPTIONS']['signedurl'] && (_0x4f9c13 = window['GMSOFT_OPTIONS']['signedurl']);
            let _0x4b5484 = _0x4f9c13 + '?params=' + _0x7f648c;
            var _0x310df7 = new XMLHttpRequest();
            let _0x3f69be = '';
            _0x310df7['open']('GET', _0x4b5484, ![]),
            _0x310df7['send'](_0x3f69be);
            let _0x2137d2 = _0x310df7['responseText'];
            if (_0x2137d2 && atob(_0x2137d2) === 'bangame') {
                document['dispatchEvent'](new CustomEvent('gmsoftbanevent',{
                    'detail': 'libevent'
                }));
                return;
            }
            window['GMSOFT_SIGNED'] = _0x2137d2,
            localStorage['setItem'](_0x3771bb, _0x2137d2),
            console['log']('send request GM_SDK_GetVeryfiedSignature: ', window['GMSOFT_SIGNED']),
            _0xe42c6d('GmSoft', 'OnGetVeryfiedSignature', window['GMSOFT_SIGNED']);
        } catch (_0x682762) {
            console['error']('Error fetching GM_SDK_GetVeryfiedSignature: ', _0x682762);
        }
    }
    function _0xa4fa8d() {
        let _0x12a170 = document['location']['hostname'];
        _0xe42c6d('GmSoft', 'SetUnityHostName', _0x12a170),
        _0xe42c6d('GmSoft', 'SetSDKType', window['GMSOFT_SDKTYPE']);
    }
    function _0x3bca55() {
        console['log']('GM_SDK_StartGame');
        try {
            gmStartGame(function() {
                _0xe42c6d('GmSoft', 'SetGameInfoParam', JSON['stringify'](window['GMSOFT_GAME_INFO']));
            });
        } catch (_0x19cc1f) {
            console['error']('Error JS 12', _0x19cc1f);
        }
        try {
            gmStartAds(function() {
                _0xe42c6d('GmSoft', 'SetAdParam', JSON['stringify'](window['GMSOFT_ADS_INFO']));
            });
        } catch (_0x197184) {
            console['error']('Error JS 20', _0x197184);
        }
        try {
            document['addEventListener']('gmsoftbanevent', _0x15f1bf => {
                _0xe42c6d('GmSoft', _0x15f1bf['detail']);
            }
            );
        } catch (_0x284779) {
            console['error']('Error JS 28', _0x284779);
        }
    }
    function _0x1f8b1f(_0x137466) {
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: Sending game event'),
            window[preroll['config']['loaderObjectName']]['GameEvent'](_0x137466);
        } catch (_0x1c9056) {
            console['log']('No WeeGooAFG implementation found!');
        }
    }
    function _0x3e4bb9() {
        try {
            window['CrazyGames']['SDK']['game']['gameplayStart']();
        } catch (_0x236e05) {
            window['UnitySDK']['logError']('Error while calling gameplayStart:', _0x236e05);
        }
    }
    function _0x51e4db() {
        try {
            window['CrazyGames']['SDK']['game']['gameplayStop']();
        } catch (_0x11a3d7) {
            window['UnitySDK']['logError']('Error while calling gameplayStop:', _0x11a3d7);
        }
    }
    function _0x4c7540() {
        var _0x254c15 = firebaseConfig['projectId']
          , _0x141124 = _0x5a6a49(_0x254c15) + 0x1
          , _0x4191bb = _0x214635(_0x141124);
        return _0x430ff7(_0x254c15, _0x4191bb, _0x141124),
        _0x4191bb;
    }
    function _0x7791ce(_0x5f5da2, _0x2d3cbf, _0x5f5a05, _0xa6a0e9, _0x28e580) {
        var _0x2287d8 = _0x46211(_0x5f5da2)
          , _0x20050a = _0x46211(_0x2d3cbf)
          , _0x315a38 = _0x46211(_0x5f5a05)
          , _0x41ec4c = _0x46211(_0xa6a0e9)
          , _0x2164d = _0x46211(_0x28e580);
        try {
            firebase['firestore']()['collection'](_0x2287d8)['doc'](_0x20050a)['get']()['then'](function(_0x46a1be) {
                _0x46a1be['exists'] ? window['unityInstance']['SendMessage'](_0x315a38, _0x41ec4c, JSON['stringify'](_0x46a1be['data']())) : window['unityInstance']['SendMessage'](_0x315a38, _0x41ec4c, 'null');
            })['catch'](function(_0xd48cf3) {
                window['unityInstance']['SendMessage'](_0x315a38, _0x2164d, JSON['stringify'](_0xd48cf3, Object['getOwnPropertyNames'](_0xd48cf3)));
            });
        } catch (_0x396669) {
            window['unityInstance']['SendMessage'](_0x315a38, _0x2164d, JSON['stringify'](_0x396669, Object['getOwnPropertyNames'](_0x396669)));
        }
    }
    function _0x491d91(_0x1bebed, _0x5757ee, _0x44e6e9, _0x2db9e3) {
        var _0x470d95 = _0x46211(_0x1bebed)
          , _0x349f22 = _0x46211(_0x5757ee)
          , _0x123bd3 = _0x46211(_0x44e6e9)
          , _0x422800 = _0x46211(_0x2db9e3);
        try {
            firebase['firestore']()['collection'](_0x470d95)['get']()['then'](function(_0x409b1e) {
                var _0x34f881 = {};
                _0x409b1e['forEach'](function(_0x25a947) {
                    _0x34f881[_0x25a947['id']] = _0x25a947['data']();
                }),
                window['unityInstance']['SendMessage'](_0x349f22, _0x123bd3, JSON['stringify'](_0x34f881));
            })['catch'](function(_0x5f30ea) {
                window['unityInstance']['SendMessage'](_0x349f22, _0x422800, JSON['stringify'](_0x5f30ea, Object['getOwnPropertyNames'](_0x5f30ea)));
            });
        } catch (_0x253ae9) {
            window['unityInstance']['SendMessage'](_0x349f22, _0x422800, JSON['stringify'](_0x253ae9, Object['getOwnPropertyNames'](_0x253ae9)));
        }
    }
    function _0x281c38() {
        var _0x5dd54a = window['CrazyGames']['SDK']['environment']
          , _0x32fb03 = _0x5a6a49(_0x5dd54a) + 0x1
          , _0x46fa6a = _0x214635(_0x32fb03);
        return _0x430ff7(_0x5dd54a, _0x46fa6a, _0x32fb03),
        _0x46fa6a;
    }
    function _0x16e558() {
        var _0x561d79 = JSON['stringify'](window['CrazyGames']['SDK']['game']['settings'])
          , _0x5dfafa = _0x5a6a49(_0x561d79) + 0x1
          , _0x5b7b1d = _0x214635(_0x5dfafa);
        return _0x430ff7(_0x561d79, _0x5b7b1d, _0x5dfafa),
        _0x5b7b1d;
    }
    function _0x34d02b(_0x464488) {
        var _0x2b4e46 = new URLSearchParams(window['location']['search'])
          , _0x1f8b65 = _0x2b4e46['get'](window['unityStringify'](_0x464488));
        _0x1f8b65 === null && (_0x1f8b65 = '');
        var _0x519ffc = _0x5a6a49(_0x1f8b65) + 0x1
          , _0x56afee = _0x214635(_0x519ffc);
        return _0x430ff7(_0x1f8b65, _0x56afee, _0x519ffc),
        _0x56afee;
    }
    function _0x5b5a84() {
        return window['CrazyGames']['SDK']['isQaTool'];
    }
    function _0xf01197(_0x5e28af, _0x1dc1fa, _0x232e86, _0x28f8b1) {
        var _0x1a2021 = _0x46211(_0x5e28af)
          , _0x564cd9 = _0x46211(_0x1dc1fa)
          , _0x3b86e2 = _0x46211(_0x232e86)
          , _0x1dbf51 = _0x46211(_0x28f8b1);
        try {
            firebase['database']()['ref'](_0x1a2021)['once']('value')['then'](function(_0x4284bd) {
                window['unityInstance']['SendMessage'](_0x564cd9, _0x3b86e2, JSON['stringify'](_0x4284bd['val']()));
            });
        } catch (_0x54a005) {
            window['unityInstance']['SendMessage'](_0x564cd9, _0x1dbf51, JSON['stringify'](_0x54a005, Object['getOwnPropertyNames'](_0x54a005)));
        }
    }
    function _0x5c5101() {
        var _0x3e1774 = JSON['stringify'](window['CrazyGames']['SDK']['user']['systemInfo'])
          , _0x1a3508 = _0x5a6a49(_0x3e1774) + 0x1
          , _0x394a5a = _0x214635(_0x1a3508);
        return _0x430ff7(_0x3e1774, _0x394a5a, _0x1a3508),
        _0x394a5a;
    }
    function _0x849ab3() {
        if (performance['memory'])
            return performance['memory']['totalJSHeapSize'];
        return 0x0;
    }
    function _0x529032() {
        if (performance['memory'])
            return performance['memory']['usedJSHeapSize'];
        return 0x0;
    }
    function _0x54ba52() {
        window['CrazyGames']['SDK']['user']['getUser']()['then'](function(_0x3f35f5) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetUser', JSON['stringify']({
                'userJson': JSON['stringify'](_0x3f35f5)
            }));
        })['catch'](function(_0x4d3e04) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetUser', JSON['stringify']({
                'errorJson': JSON['stringify'](_0x4d3e04)
            }));
        });
    }
    function _0x19ab61() {
        window['CrazyGames']['SDK']['user']['getUserToken']()['then'](function(_0x5363e3) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetUserToken', JSON['stringify']({
                'token': _0x5363e3
            }));
        })['catch'](function(_0x59c225) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetUserToken', JSON['stringify']({
                'errorJson': JSON['stringify'](_0x59c225)
            }));
        });
    }
    function _0x19bd02() {
        window['CrazyGames']['SDK']['user']['getXsollaUserToken']()['then'](function(_0x528d4f) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetXsollaUserToken', JSON['stringify']({
                'token': _0x528d4f
            }));
        })['catch'](function(_0x55c702) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_GetXsollaUserToken', JSON['stringify']({
                'errorJson': JSON['stringify'](_0x55c702)
            }));
        });
    }
    function _0x52420d() {}
    function _0x2aeeb7() {
        console['log']('afg.ready: ' + afg['ready']),
        afg['ready'] ? (_0xe42c6d('H5Adverisement', 'PreloadRewardedVideoCallback', 0x1),
        afg['adBreak']({
            'type': 'reward',
            'name': 'reward ads',
            'beforeReward': function(_0x528261) {
                this['_showRewardAdFn'] = _0x528261,
                console['log']('[H5 Ads] before reward');
            }
            ['bind'](this),
            'adViewed': function() {
                this['_showRewardAdFn'] = null,
                _0xe42c6d('H5Adverisement', 'RewardedVideoSuccessCallback'),
                console['log']('[H5 Ads] ad viewed');
            }
            ['bind'](this),
            'adDismissed': function() {
                this['_showRewardAdFn'] = null,
                _0xe42c6d('H5Adverisement', 'RewardedVideoFailureCallback'),
                console['log']('[H5 Ads] ad failure');
            }
            ['bind'](this),
            'adBreakDone': function(_0x4ad5ec) {
                console['log']('[H5 Ads] Reward break done'),
                _0xe42c6d('H5Adverisement', 'ResumeGameCallback');
            }
            ['bind'](this)
        })) : (console['log']('[H5 Ads] no reward ads'),
        _0xe42c6d('H5Adverisement', 'PreloadRewardedVideoCallback', 0x0));
    }
    function _0x4afac8() {
        afg['ready'] ? afg['adBreak']({
            'type': 'next',
            'name': 'next',
            'beforeAd': function() {
                afg['onBeforeAd'](),
                console['log']('[H5 Ads] Before ad'),
                _0xe42c6d('H5Adverisement', 'PauseGameCallback');
            }
            ['bind'](this),
            'adBreakDone': function() {
                console['log']('[H5 Ads] Ad break done'),
                _0xe42c6d('H5Adverisement', 'ResumeGameCallback');
            }
            ['bind'](this)
        }) : (console['log']('no next ads'),
        _0xe42c6d('H5Adverisement', 'ResumeGameCallback'));
    }
    function _0x57d13a() {
        this['_showRewardAdFn'] ? (_0xe42c6d('H5Adverisement', 'PauseGameCallback'),
        this['_showRewardAdFn']()) : _0xe42c6d('H5Adverisement', 'ResumeGameCallback');
    }
    function _0x250b8f() {
        try {
            window['CrazyGames']['SDK']['game']['happytime']();
        } catch (_0x53e414) {
            window['UnitySDK']['logError']('Error while calling happytime:', _0x53e414);
        }
    }
    function _0x5ec5c6() {
        try {
            window['CrazyGames']['SDK']['game']['hideInviteButton']();
        } catch (_0x1b41e3) {
            window['UnitySDK']['logError']('Error while calling hideInviteButton:', _0x1b41e3);
        }
    }
    function _0x296f45(_0x520a8c, _0x4314c6) {
        const _0x92162c = _0x46211(_0x520a8c)
          , _0x43a660 = _0x46211(_0x4314c6)
          , _0x273ef2 = document['createElement']('input');
        _0x273ef2['type'] = 'file',
        _0x273ef2['accept'] = '.txt',
        _0x273ef2['onchange'] = _0x43794a => {
            const _0x47e87f = _0x43794a['target']['files'][0x0];
            if (_0x47e87f) {
                const _0x34d343 = new FileReader();
                _0x34d343['onload'] = () => {
                    const _0x217b29 = _0x34d343['result'];
                    _0xe42c6d(_0x92162c, _0x43a660, _0x217b29);
                }
                ,
                _0x34d343['readAsText'](_0x47e87f);
            }
        }
        ,
        _0x273ef2['click']();
    }
    function _0x58dde2(_0x3452b7, _0x5a991e) {
        const _0x563ec0 = _0x46211(_0x3452b7)
          , _0x51f3b7 = _0x46211(_0x5a991e)
          , _0x1cbb25 = document['createElement']('input');
        _0x1cbb25['type'] = 'file',
        _0x1cbb25['accept'] = '.gmd',
        _0x1cbb25['onchange'] = _0x5eb080 => {
            const _0x2305ea = _0x5eb080['target']['files'][0x0];
            if (_0x2305ea) {
                const _0x7b425c = new FileReader();
                _0x7b425c['onload'] = () => {
                    const _0x5aceaa = _0x7b425c['result'];
                    _0xe42c6d(_0x563ec0, _0x51f3b7, _0x5aceaa);
                }
                ,
                _0x7b425c['readAsText'](_0x2305ea);
            }
        }
        ,
        _0x1cbb25['click']();
    }
    function _0x4a298f(_0x4cc3e5, _0xe01c0b, _0x310177, _0xb9b28b, _0x41e33c, _0xf36e, _0x3981bf) {
        var _0x14f876 = _0x46211(_0x4cc3e5)
          , _0x3fa248 = _0x46211(_0xe01c0b)
          , _0x54b6e5 = _0x46211(_0x310177)
          , _0x2f0a94 = _0x46211(_0x41e33c)
          , _0x26c20f = _0x46211(_0xf36e)
          , _0xe0c0ac = _0x46211(_0x3981bf);
        try {
            var _0x42fcaa = {};
            _0x42fcaa[_0x54b6e5] = firebase['firestore']['FieldValue']['increment'](_0xb9b28b),
            firebase['firestore']()['collection'](_0x14f876)['doc'](_0x3fa248)['update'](_0x42fcaa)['then'](function() {
                window['unityInstance']['SendMessage'](_0x2f0a94, _0x26c20f, 'Success: incremented ' + _0x54b6e5 + ' by ' + _0xb9b28b);
            })['catch'](function(_0x1046b3) {
                window['unityInstance']['SendMessage'](_0x2f0a94, _0xe0c0ac, JSON['stringify'](_0x1046b3, Object['getOwnPropertyNames'](_0x1046b3)));
            });
        } catch (_0x4c4cd5) {
            window['unityInstance']['SendMessage'](_0x2f0a94, _0xe0c0ac, JSON['stringify'](_0x4c4cd5, Object['getOwnPropertyNames'](_0x4c4cd5)));
        }
    }
    function _0x2e12bd(_0xa55469) {
        typeof _0x46211 !== 'undefined' ? window['unityStringify'] = _0x46211 : window['unityStringify'] = _0x46211;
        window['UnitySDK'] = {
            'version': window['unityStringify'](_0xa55469),
            'pointerLockElement': undefined,
            'unlockPointer': function() {
                this['pointerLockElement'] = document['pointerLockElement'] || null,
                this['pointerLockElement'] && document['exitPointerLock'] && document['exitPointerLock']();
            },
            'lockPointer': function() {
                this['pointerLockElement'] && this['pointerLockElement']['requestPointerLock'] && this['pointerLockElement']['requestPointerLock']();
            },
            'logError': function() {
                var _0x104241 = Array['prototype']['slice']['call'](arguments);
                _0x104241['unshift']('[JsLib]'),
                console['error']['apply'](console, _0x104241);
            }
        };
        var _0x2f8a7e = {
            'wrapper': {
                'engine': 'unity',
                'sdkVersion': window['unityStringify'](_0xa55469)
            }
        }
          , _0x303edc = document['createElement']('script');
        _0x303edc['src'] = 'https://sdk.crazygames.com/crazygames-sdk-v3.js',
        document['head']['appendChild'](_0x303edc),
        _0x303edc['addEventListener']('load', function() {
            window['CrazyGames']['SDK']['init'](_0x2f8a7e)['then'](function() {
                _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_Init'),
                window['CrazyGames']['SDK']['ad']['hasAdblock']()['then'](function(_0x48c384) {
                    _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdblockDetectionResult', _0x48c384 ? 0x1 : 0x0);
                })['catch'](function(_0x56aac8) {
                    window['UnitySDK']['logError']('Error while checking adblock:', _0x56aac8),
                    _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdblockDetectionResult', 0x0);
                }),
                window['CrazyGames']['SDK']['user']['addAuthListener'](function(_0x3cd595) {
                    _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AuthListener', JSON['stringify']({
                        'userJson': JSON['stringify'](_0x3cd595)
                    }));
                });
            });
        });
    }
    function _0x4aac6d() {
        var _0xbdc6da = window['document']
          , _0x10cd6c = _0xbdc6da['fullscreenElement'] || _0xbdc6da['mozFullScreenElement'] || _0xbdc6da['webkitFullscreenElement'] || _0xbdc6da['msFullscreenElement'];
        return _0x10cd6c != null;
    }
    function _0x1b5568() {
        return window['CrazyGames']['SDK']['user']['isUserAccountAvailable'];
    }
    var _0x411276 = null
      , _0x50b015 = 0x0;
    function _0x24ed2f() {
        return _0x411276 && _0x411276['activated'] || _0x50b015 != 0x0;
    }
    var _0x2f0883 = 0x1
      , _0x36946b = {
        'x': 0x0,
        'y': 0x0,
        'z': 0x0
    };
    function _0x1300c2() {
        _0x36946b = {
            'x': _0x411276['x'] * _0x2f0883,
            'y': _0x411276['y'] * _0x2f0883,
            'z': _0x411276['z'] * _0x2f0883
        };
        if (_0x50b015 != 0x0)
            _0x7c454a(_0x50b015, _0x36946b['x'], _0x36946b['y'], _0x36946b['z']);
    }
    var _0x4dff49 = 0x0
      , _0x5e8297 = 0x0
      , _0x57eb6d = 0x0
      , _0x1e199a = 0x0
      , _0x14ed34 = 0x0;
    function _0x2c8f4b(_0xdf870c, _0x572a6f) {
        var _0x3a87f2 = {
            'x': _0xdf870c['x'] - _0x572a6f['x'],
            'y': _0xdf870c['y'] - _0x572a6f['y'],
            'z': _0xdf870c['z'] - _0x572a6f['z']
        }
          , _0x184ff4 = _0x3a87f2['x'] * _0x3a87f2['x'] + _0x3a87f2['y'] * _0x3a87f2['y'] + _0x3a87f2['z'] * _0x3a87f2['z']
          , _0xa9f5ab = {
            'x': _0xdf870c['x'] + _0x572a6f['x'],
            'y': _0xdf870c['y'] + _0x572a6f['y'],
            'z': _0xdf870c['z'] + _0x572a6f['z']
        }
          , _0x232e87 = _0xa9f5ab['x'] * _0xa9f5ab['x'] + _0xa9f5ab['y'] * _0xa9f5ab['y'] + _0xa9f5ab['z'] * _0xa9f5ab['z'];
        return _0x184ff4 <= _0x232e87 ? _0x3a87f2 : _0xa9f5ab;
    }
    function _0x5cf8ec(_0x2b0c89) {
        var _0x585a06 = {
            'x': _0x2b0c89['accelerationIncludingGravity']['x'] * _0x2f0883,
            'y': _0x2b0c89['accelerationIncludingGravity']['y'] * _0x2f0883,
            'z': _0x2b0c89['accelerationIncludingGravity']['z'] * _0x2f0883
        };
        if (_0x50b015 != 0x0)
            _0x7c454a(_0x50b015, _0x585a06['x'], _0x585a06['y'], _0x585a06['z']);
        var _0x4715bb = {
            'x': _0x2b0c89['acceleration']['x'] * _0x2f0883,
            'y': _0x2b0c89['acceleration']['y'] * _0x2f0883,
            'z': _0x2b0c89['acceleration']['z'] * _0x2f0883
        };
        if (_0x57eb6d != 0x0)
            _0x7c454a(_0x57eb6d, _0x4715bb['x'], _0x4715bb['y'], _0x4715bb['z']);
        if (_0x1e199a != 0x0) {
            var _0x9e4a25 = _0x2c8f4b(_0x585a06, _0x4715bb);
            _0x7c454a(_0x1e199a, _0x9e4a25['x'], _0x9e4a25['y'], _0x9e4a25['z']);
        }
        if (_0x14ed34 != 0x0) {
            var _0xf87821 = Math['PI'] / 0xb4;
            _0x7c454a(_0x14ed34, _0x2b0c89['rotationRate']['alpha'] * _0xf87821, _0x2b0c89['rotationRate']['beta'] * _0xf87821, _0x2b0c89['rotationRate']['gamma'] * _0xf87821);
        }
    }
    var _0x539a1b = 0x0;
    function _0x32262b(_0x3d4189) {
        _0x3d4189 & 0x1 && (typeof DeviceOrientationEvent['requestPermission'] === 'function' && DeviceOrientationEvent['requestPermission']()['then'](function(_0x2883ec) {
            _0x2883ec === 'granted' ? _0x539a1b &= ~0x1 : _0x41d093('DeviceOrientationEvent permission not granted');
        })['catch'](function(_0x123a1c) {
            _0x41d093(_0x123a1c),
            _0x539a1b |= 0x1;
        })),
        _0x3d4189 & 0x2 && (typeof DeviceMotionEvent['requestPermission'] === 'function' && DeviceMotionEvent['requestPermission']()['then'](function(_0x1cc7aa) {
            _0x1cc7aa === 'granted' ? _0x539a1b &= ~0x2 : _0x41d093('DeviceMotionEvent permission not granted');
        })['catch'](function(_0x5edded) {
            _0x41d093(_0x5edded),
            _0x539a1b |= 0x2;
        }));
    }
    function _0x1f4e5c() {
        _0x50b015 == 0x0 && _0x57eb6d == 0x0 && _0x1e199a == 0x0 && _0x14ed34 == 0x0 && (_0x32262b(0x2),
        window['addEventListener']('devicemotion', _0x5cf8ec));
    }
    function _0x333241() {
        var _0x17ecca = 9.80665;
        _0x2f0883 = /(iPhone|iPad|Macintosh)/i['test'](navigator['userAgent']) ? 0x1 / _0x17ecca : -0x1 / _0x17ecca;
    }
    function _0x4af9c3(_0x3d9b3e, _0x7f9f20) {
        _0x333241();
        if (typeof Accelerometer === 'undefined') {
            _0x1f4e5c();
            if (_0x3d9b3e != 0x0)
                _0x50b015 = _0x3d9b3e;
            return;
        }
        if (_0x3d9b3e != 0x0)
            _0x50b015 = _0x3d9b3e;
        function _0x87ead9(_0x358fe5) {
            _0x411276 = new Accelerometer({
                'frequency': _0x358fe5,
                'referenceFrame': 'device'
            }),
            _0x411276['addEventListener']('reading', _0x1300c2),
            _0x411276['addEventListener']('error', function(_0x253741) {
                _0x41d093(_0x253741['error'] ? _0x253741['error'] : _0x253741);
            }),
            _0x411276['start'](),
            _0x5e8297 = _0x358fe5;
        }
        if (_0x411276)
            _0x5e8297 != _0x7f9f20 && (_0x411276['stop'](),
            _0x411276['removeEventListener']('reading', _0x1300c2),
            _0x87ead9(_0x7f9f20));
        else
            _0x4dff49 != 0x0 ? _0x4dff49 = _0x7f9f20 : (_0x4dff49 = _0x7f9f20,
            navigator['permissions']['query']({
                'name': 'accelerometer'
            })['then'](function(_0x551cc3) {
                _0x551cc3['state'] === 'granted' ? _0x87ead9(_0x4dff49) : _0x41d093('No permission to use Accelerometer.'),
                _0x4dff49 = 0x0;
            }));
    }
    function _0x2fe2e6() {
        _0x50b015 == 0x0 && _0x57eb6d == 0x0 && _0x1e199a == 0x0 && _0x14ed34 == 0x0 && window['removeEventListener']('devicemotion', _0x54cb47);
    }
    function _0x4a9192() {
        if (_0x411276)
            (typeof GravitySensor !== 'undefined' || _0x1e199a == 0x0) && (_0x411276['stop'](),
            _0x411276['removeEventListener']('reading', _0x1300c2),
            _0x411276 = null),
            _0x50b015 = 0x0,
            _0x5e8297 = 0x0;
        else
            _0x50b015 != 0x0 && (_0x50b015 = 0x0,
            _0x2fe2e6());
    }
    function _0x52c65d(_0x280bad, _0x124bdb) {
        var _0x3deaf7 = '';
        for (var _0x138050 = 0x0; _0x138050 < _0x124bdb; _0x138050++)
            _0x3deaf7 += String['fromCharCode'](_0x2ac27b[_0x280bad + _0x138050]);
        _0x1455c0['canvas']['style']['cursor'] = 'url(data:image/cur;base64,' + btoa(_0x3deaf7) + '),default';
    }
    function _0x5b7bf7(_0x2b9299) {
        _0x1455c0['canvas']['style']['cursor'] = _0x2b9299 ? 'default' : 'none';
    }
    function _0x59728e(_0x4ee397) {
        if (typeof window['CSS'] !== 'undefined' && typeof window['CSS']['escape'] !== 'undefined')
            return window['CSS']['escape'](_0x4ee397);
        return _0x4ee397['replace'](/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, '\$1');
    }
    function _0x54cae0() {
        var _0x327059 = _0x1455c0['canvas'] ? _0x1455c0['canvas']['id'] : 'unity-canvas';
        return '#' + _0x59728e(_0x327059);
    }
    function _0x418d5b(_0x26575e, _0x2b1379, _0x384d91, _0x5e6e93) {
        var _0x16cd9b = document['querySelector'](_0x54cae0())
          , _0x13bda8 = _0x16cd9b && _0x16cd9b['getBoundingClientRect']();
        _0x311b71[_0x384d91 >> 0x2] = _0x26575e - (_0x13bda8 ? _0x13bda8['left'] : 0x0),
        _0x311b71[_0x5e6e93 >> 0x2] = _0x2b1379 - (_0x13bda8 ? _0x13bda8['top'] : 0x0);
    }
    function _0x3d13ed(_0x13815e) {
        var _0x47a30f = _0x5a6a49(_0x13815e) + 0x1
          , _0x912211 = _0x214635(_0x47a30f);
        return _0x430ff7(_0x13815e, _0x912211, _0x47a30f),
        _0x912211;
    }
    function _0x568013() {
        var _0x541070 = _0x54cae0();
        return _0x568013['selector'] != _0x541070 && (_0x1f3809(_0x568013['ptr']),
        _0x568013['ptr'] = _0x3d13ed(_0x541070),
        _0x568013['selector'] = _0x541070),
        _0x568013['ptr'];
    }
    function _0x5ab318(_0x58f3a7) {
        var _0x1d185b = _0x46211(_0x58f3a7);
        try {
            eval(_0x1d185b);
        } catch (_0x477f74) {
            console['error'](_0x477f74);
        }
    }
    function _0x3812d8(_0x26cf5e) {
        var _0x3a3375 = _0x46211(_0x26cf5e);
        window['open'](_0x3a3375, '_blank', '');
    }
    var _0x5c750c = {
        'numPendingSync': 0x0,
        'syncInternal': 0x3e8,
        'syncInProgress': ![],
        'sync': function(_0xc03825) {
            if (_0xc03825) {
                if (_0x5c750c['numPendingSync'] == 0x0)
                    return;
            } else {
                if (_0x5c750c['syncInProgress']) {
                    _0x5c750c['numPendingSync']++;
                    return;
                }
            }
            _0x5c750c['syncInProgress'] = !![],
            _0x23c512['syncfs'](![], function(_0x449f4a) {
                _0x5c750c['syncInProgress'] = ![];
            }),
            _0x5c750c['numPendingSync'] = 0x0;
        }
    };
    function _0x42a5a4() {
        _0x1455c0['setInterval'](function() {
            _0x5c750c['sync'](!![]);
        }, _0x5c750c['syncInternal']);
    }
    function _0x4baba0() {
        _0x5c750c['sync'](![]);
    }
    var _0x4207eb = null;
    function _0x1f4f04() {
        return typeof GravitySensor !== 'undefined' ? _0x4207eb && _0x4207eb['activated'] : _0x1e199a != 0x0;
    }
    function _0x57a916() {
        if (_0x1e199a != 0x0)
            _0x7c454a(_0x1e199a, _0x4207eb['x'] * _0x2f0883, _0x4207eb['y'] * _0x2f0883, _0x4207eb['z'] * _0x2f0883);
    }
    var _0x2f3160 = 0x0
      , _0x1d48f4 = null;
    function _0x301240() {
        var _0x4aad70 = {
            'x': _0x1d48f4['x'] * _0x2f0883,
            'y': _0x1d48f4['y'] * _0x2f0883,
            'z': _0x1d48f4['z'] * _0x2f0883
        };
        if (_0x57eb6d != 0x0)
            _0x7c454a(_0x57eb6d, _0x4aad70['x'], _0x4aad70['y'], _0x4aad70['z']);
        if (_0x1e199a != 0x0 && typeof GravitySensor === 'undefined') {
            var _0x57deb1 = _0x2c8f4b(_0x36946b, _0x4aad70);
            _0x7c454a(_0x1e199a, _0x57deb1['x'], _0x57deb1['y'], _0x57deb1['z']);
        }
    }
    var _0x20ec86 = 0x0
      , _0x276131 = 0x0;
    function _0x598a05(_0x351dd9, _0x14cf61) {
        _0x333241();
        if (typeof LinearAccelerationSensor === 'undefined') {
            _0x1f4e5c();
            if (_0x351dd9 != 0x0)
                _0x57eb6d = _0x351dd9;
            return;
        }
        if (_0x351dd9 != 0x0)
            _0x57eb6d = _0x351dd9;
        function _0x1a20c5(_0x1d763c) {
            _0x1d48f4 = new LinearAccelerationSensor({
                'frequency': _0x1d763c,
                'referenceFrame': 'device'
            }),
            _0x1d48f4['addEventListener']('reading', _0x301240),
            _0x1d48f4['addEventListener']('error', function(_0x289d16) {
                _0x41d093(_0x289d16['error'] ? _0x289d16['error'] : _0x289d16);
            }),
            _0x1d48f4['start'](),
            _0x276131 = _0x1d763c;
        }
        if (_0x1d48f4)
            _0x276131 != _0x14cf61 && (_0x1d48f4['stop'](),
            _0x1d48f4['removeEventListener']('reading', _0x301240),
            _0x1a20c5(_0x14cf61));
        else
            _0x20ec86 != 0x0 ? _0x20ec86 = _0x14cf61 : (_0x20ec86 = _0x14cf61,
            navigator['permissions']['query']({
                'name': 'accelerometer'
            })['then'](function(_0x23a5f4) {
                _0x23a5f4['state'] === 'granted' ? _0x1a20c5(_0x20ec86) : _0x41d093('No permission to use LinearAccelerationSensor.'),
                _0x20ec86 = 0x0;
            }));
    }
    function _0x5e0402(_0xc8bcdc, _0x404beb) {
        if (typeof GravitySensor === 'undefined') {
            _0x4af9c3(0x0, Math['max'](_0x404beb, _0x5e8297)),
            _0x598a05(0x0, Math['max'](_0x404beb, _0x276131)),
            _0x1e199a = _0xc8bcdc;
            return;
        }
        _0x333241(),
        _0x1e199a = _0xc8bcdc;
        function _0x25101f(_0x550b73) {
            _0x4207eb = new GravitySensor({
                'frequency': _0x550b73,
                'referenceFrame': 'device'
            }),
            _0x4207eb['addEventListener']('reading', _0x57a916),
            _0x4207eb['addEventListener']('error', function(_0x4eb49b) {
                _0x41d093(_0x4eb49b['error'] ? _0x4eb49b['error'] : _0x4eb49b);
            }),
            _0x4207eb['start']();
        }
        if (_0x4207eb)
            _0x4207eb['stop'](),
            _0x4207eb['removeEventListener']('reading', _0x57a916),
            _0x25101f(_0x404beb);
        else
            _0x2f3160 != 0x0 ? _0x2f3160 = _0x404beb : (_0x2f3160 = _0x404beb,
            navigator['permissions']['query']({
                'name': 'accelerometer'
            })['then'](function(_0x156cf5) {
                _0x156cf5['state'] === 'granted' ? _0x25101f(_0x2f3160) : _0x41d093('No permission to use GravitySensor.'),
                _0x2f3160 = 0x0;
            }));
    }
    function _0xccf154() {
        if (_0x1d48f4)
            (typeof GravitySensor !== 'undefined' || _0x1e199a == 0x0) && (_0x1d48f4['stop'](),
            _0x1d48f4['removeEventListener']('reading', _0x301240),
            _0x1d48f4 = null),
            _0x57eb6d = 0x0,
            _0x276131 = 0x0;
        else
            _0x57eb6d != 0x0 && (_0x57eb6d = 0x0,
            _0x2fe2e6());
    }
    function _0x1f33c7() {
        _0x1e199a = 0x0;
        if (typeof GravitySensor === 'undefined') {
            if (_0x50b015 == 0x0)
                _0x4a9192();
            if (_0x57eb6d == 0x0)
                _0xccf154();
            return;
        }
        _0x4207eb && (_0x4207eb['stop'](),
        _0x4207eb['removeEventListener']('reading', _0x57a916),
        _0x4207eb = null);
    }
    function _0x1bd25a(_0x56a728) {
        try {
            (function() {
                _0x319313['call'](null, _0x56a728);
            }());
        } catch (_0xa090d2) {
            console['warn'](_0xa090d2);
        }
    }
    var _0x31ae28 = null;
    function _0x4ea7e3() {
        return _0x31ae28 && _0x31ae28['activated'] || _0x14ed34 != 0x0;
    }
    function _0x20ed5f() {
        if (_0x14ed34 != 0x0)
            _0x7c454a(_0x14ed34, _0x31ae28['x'], _0x31ae28['y'], _0x31ae28['z']);
    }
    var _0x3296d9 = 0x0;
    function _0x3c5711(_0x5bd74e, _0x275782) {
        if (typeof Gyroscope === 'undefined') {
            _0x1f4e5c(),
            _0x14ed34 = _0x5bd74e;
            return;
        }
        _0x14ed34 = _0x5bd74e;
        function _0x24c819(_0x5b774e) {
            _0x31ae28 = new Gyroscope({
                'frequency': _0x5b774e,
                'referenceFrame': 'device'
            }),
            _0x31ae28['addEventListener']('reading', _0x20ed5f),
            _0x31ae28['addEventListener']('error', function(_0x252be3) {
                _0x41d093(_0x252be3['error'] ? _0x252be3['error'] : _0x252be3);
            }),
            _0x31ae28['start']();
        }
        if (_0x31ae28)
            _0x31ae28['stop'](),
            _0x31ae28['removeEventListener']('reading', _0x20ed5f),
            _0x24c819(_0x275782);
        else
            _0x3296d9 != 0x0 ? _0x3296d9 = _0x275782 : (_0x3296d9 = _0x275782,
            navigator['permissions']['query']({
                'name': 'gyroscope'
            })['then'](function(_0x26f624) {
                _0x26f624['state'] === 'granted' ? _0x24c819(_0x3296d9) : _0x41d093('No permission to use Gyroscope.'),
                _0x3296d9 = 0x0;
            }));
    }
    function _0x124255() {
        if (_0x31ae28)
            _0x31ae28['stop'](),
            _0x31ae28['removeEventListener']('reading', _0x20ed5f),
            _0x31ae28 = null,
            _0x14ed34 = 0x0;
        else
            _0x14ed34 != 0x0 && (_0x14ed34 = 0x0,
            _0x2fe2e6());
    }
    function _0x42efd1() {
        const _0x208178 = function(_0x494f89) {
            if (_0x494f89['target']['localName'] !== 'canvas')
                _0x2e5e2a();
        };
        document['addEventListener']('contextmenu', _0x208178),
        _0x1455c0['deinitializers']['push'](function() {
            document['removeEventListener']('contextmenu', _0x208178);
        });
    }
    function _0xb1dd45() {
        return _0x1d48f4 && _0x1d48f4['activated'] || _0x57eb6d != 0x0;
    }
    function _0x429328(_0xf2ab45, _0x2fe40a) {
        var _0x4d4aa4 = _0x46211(_0xf2ab45);
        if (typeof dump == 'function')
            dump(_0x4d4aa4);
        switch (_0x2fe40a) {
        case 0x0:
        case 0x1:
        case 0x4:
            console['error'](_0x4d4aa4);
            return;
        case 0x2:
            console['warn'](_0x4d4aa4);
            return;
        case 0x3:
        case 0x5:
            console['log'](_0x4d4aa4);
            return;
        default:
            console['error']('Unknown console message type!'),
            console['error'](_0x4d4aa4);
        }
    }
    function _0x5037bb(_0x32bf58, _0x380ec3) {
        var _0x5af523 = _0x3c669b();
        if (_0x32bf58)
            _0x430ff7(_0x5af523, _0x32bf58, _0x380ec3);
        return _0x5a6a49(_0x5af523);
    }
    var _0x1bb47f = null
      , _0x2509b2 = 0x0;
    function _0x556822() {
        return _0x1bb47f && _0x1bb47f['activated'] || _0x2509b2 != 0x0;
    }
    function _0x71e500() {
        if (_0x2509b2 != 0x0)
            _0x1193d2(_0x2509b2, _0x1bb47f['quaternion'][0x0], _0x1bb47f['quaternion'][0x1], _0x1bb47f['quaternion'][0x2], _0x1bb47f['quaternion'][0x3]);
    }
    var _0x3d8221 = 0x0;
    function _0x54cb47(_0x467491) {
        if (_0x2509b2) {
            var _0x3d27ee = Math['PI'] / 0xb4
              , _0x1fae86 = _0x467491['beta'] * _0x3d27ee
              , _0x4667d8 = _0x467491['gamma'] * _0x3d27ee
              , _0x56be97 = _0x467491['alpha'] * _0x3d27ee
              , _0x11ac51 = Math['cos'](_0x1fae86 / 0x2)
              , _0x2ffeaf = Math['sin'](_0x1fae86 / 0x2)
              , _0x3203a9 = Math['cos'](_0x4667d8 / 0x2)
              , _0x3cecd3 = Math['sin'](_0x4667d8 / 0x2)
              , _0x59f5e9 = Math['cos'](_0x56be97 / 0x2)
              , _0x4a4f74 = Math['sin'](_0x56be97 / 0x2)
              , _0x20e54d = _0x2ffeaf * _0x3203a9 * _0x59f5e9 - _0x11ac51 * _0x3cecd3 * _0x4a4f74
              , _0x49fe17 = _0x11ac51 * _0x3cecd3 * _0x59f5e9 + _0x2ffeaf * _0x3203a9 * _0x4a4f74
              , _0x4db528 = _0x11ac51 * _0x3203a9 * _0x4a4f74 + _0x2ffeaf * _0x3cecd3 * _0x59f5e9
              , _0x320abb = _0x11ac51 * _0x3203a9 * _0x59f5e9 - _0x2ffeaf * _0x3cecd3 * _0x4a4f74;
            _0x1193d2(_0x2509b2, _0x20e54d, _0x49fe17, _0x4db528, _0x320abb);
        }
    }
    function _0x1b4855(_0x12c5d8, _0x381615) {
        if (typeof RelativeOrientationSensor === 'undefined') {
            _0x2509b2 == 0x0 && (_0x2509b2 = _0x12c5d8,
            _0x32262b(0x1),
            window['addEventListener']('deviceorientation', _0x54cb47));
            return;
        }
        _0x2509b2 = _0x12c5d8;
        function _0x4de96d(_0x3ef3c4) {
            _0x1bb47f = new RelativeOrientationSensor({
                'frequency': _0x3ef3c4,
                'referenceFrame': 'device'
            }),
            _0x1bb47f['addEventListener']('reading', _0x71e500),
            _0x1bb47f['addEventListener']('error', function(_0x178b62) {
                _0x41d093(_0x178b62['error'] ? _0x178b62['error'] : _0x178b62);
            }),
            _0x1bb47f['start']();
        }
        if (_0x1bb47f)
            _0x1bb47f['stop'](),
            _0x1bb47f['removeEventListener']('reading', _0x71e500),
            _0x4de96d(_0x381615);
        else
            _0x3d8221 != 0x0 ? _0x3d8221 = _0x381615 : (_0x3d8221 = _0x381615,
            Promise['all']([navigator['permissions']['query']({
                'name': 'accelerometer'
            }), navigator['permissions']['query']({
                'name': 'gyroscope'
            })])['then'](function(_0x4b77e6) {
                _0x4b77e6['every'](function(_0x51520a) {
                    return _0x51520a['state'] === 'granted';
                }) ? _0x4de96d(_0x3d8221) : _0x41d093('No permissions to use RelativeOrientationSensor.'),
                _0x3d8221 = 0x0;
            }));
    }
    function _0x5da481() {
        if (_0x1bb47f)
            _0x1bb47f['stop'](),
            _0x1bb47f['removeEventListener']('reading', _0x71e500),
            _0x1bb47f = null;
        else
            _0x2509b2 != 0x0 && window['removeEventListener']('deviceorientation', _0x54cb47);
        _0x2509b2 = 0x0;
    }
    function _0x1c6dd3() {
        if (_0x539a1b == 0x0)
            return;
        _0x32262b(_0x539a1b);
    }
    function _0x15e70a() {
        _0x1455c0['QuitCleanup']();
    }
    var _0x2f106f = 0x0;
    function _0x285599() {
        if (_0x2f106f)
            _0x12db9f(_0x2f106f, window['innerWidth'], window['innerHeight'], screen['orientation'] ? screen['orientation']['angle'] : window['orientation']);
    }
    function _0x5d94c9() {
        _0x2f106f = 0x0,
        window['removeEventListener']('resize', _0x285599),
        screen['orientation'] && screen['orientation']['removeEventListener']('change', _0x285599);
    }
    function _0xc6cb69(_0x56bacc) {
        !_0x2f106f && (screen['orientation'] && screen['orientation']['addEventListener']('change', _0x285599),
        window['addEventListener']('resize', _0x285599),
        _0x2f106f = _0x56bacc,
        setTimeout(_0x285599, 0x0));
    }
    var _0x270bff = -0x1
      , _0x1c995a = -0x1
      , _0x451211 = -0x1;
    function _0x2bd03a(_0x5b258a) {
        if (!screen['orientation'] || !screen['orientation']['lock'])
            return;
        function _0x4e739e() {
            _0x1c995a = _0x270bff;
            var _0x248bb8 = ['any', 0x0, 'landscape', 'portrait', 'portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary']
              , _0x34eed6 = _0x248bb8[_0x1c995a];
            screen['orientation']['lock'](_0x34eed6)['then'](function() {
                _0x270bff != _0x1c995a ? _0x451211 = setTimeout(_0x4e739e, 0x0) : _0x451211 = -0x1;
            })['catch'](function(_0x179251) {
                _0x41d093(_0x179251),
                _0x451211 = -0x1;
            });
        }
        _0x270bff = _0x5b258a,
        _0x451211 == -0x1 && _0x5b258a != _0x1c995a && (_0x451211 = setTimeout(_0x4e739e, 0x0));
    }
    var _0x11e93e = {
        'audioInstanceIdCounter': 0x0,
        'audioInstances': {},
        'audioContext': null,
        'audioWebEnabled': 0x0,
        'audioCache': [],
        'pendingAudioSources': {}
    };
    function _0x156ff4(_0x53c816) {
        _0x53c816['estimatePlaybackPosition'] = function() {
            var _0x229028 = (_0x11e93e['audioContext']['currentTime'] - _0x53c816['playbackStartTime']) * _0x53c816['playbackRate']['value'];
            return _0x53c816['loop'] && _0x229028 >= _0x53c816['loopStart'] && (_0x229028 = (_0x229028 - _0x53c816['loopStart']) % (_0x53c816['loopEnd'] - _0x53c816['loopStart']) + _0x53c816['loopStart']),
            _0x229028;
        }
        ,
        _0x53c816['setPitch'] = function(_0x352234) {
            var _0x1ecb3d = _0x53c816['estimatePlaybackPosition']();
            _0x1ecb3d >= 0x0 && (_0x53c816['playbackStartTime'] = _0x11e93e['audioContext']['currentTime'] - _0x1ecb3d / _0x352234);
            if (_0x53c816['playbackRate']['value'] !== _0x352234)
                _0x53c816['playbackRate']['value'] = _0x352234;
        }
        ;
    }
    function _0x25d5f1(_0x51f0ee, _0x8aade) {
        var _0x463251 = {
            'buffer': _0x51f0ee,
            'error': _0x8aade
        };
        return _0x463251['release'] = function() {}
        ,
        _0x463251['getLength'] = function() {
            if (!this['buffer'])
                return console['log']('Trying to get length of sound which is not loaded.'),
                0x0;
            var _0xe10c3 = 0xac44 / this['buffer']['sampleRate'];
            return this['buffer']['length'] * _0xe10c3;
        }
        ,
        _0x463251['getData'] = function(_0x36c405, _0x2642d4) {
            if (!this['buffer'])
                return console['log']('Trying to get data of sound which is not loaded.'),
                0x0;
            var _0x4c3240 = _0x36c405 >> 0x2
              , _0x4f2d2c = _0x81f2c2['subarray'](_0x4c3240, _0x4c3240 + (_0x2642d4 >> 0x2))
              , _0x2ab2de = Math['floor']((_0x2642d4 >> 0x2) / this['buffer']['numberOfChannels'])
              , _0x471165 = Math['min'](this['buffer']['length'], _0x2ab2de);
            for (var _0x42bb47 = 0x0; _0x42bb47 < this['buffer']['numberOfChannels']; _0x42bb47++) {
                var _0x2c8186 = this['buffer']['getChannelData'](_0x42bb47)['subarray'](0x0, _0x471165);
                _0x4f2d2c['set'](_0x2c8186, _0x42bb47 * _0x471165);
            }
            return _0x471165 * this['buffer']['numberOfChannels'] * 0x4;
        }
        ,
        _0x463251['getNumberOfChannels'] = function() {
            if (!this['buffer'])
                return console['log']('Trying to get metadata of sound which is not loaded.'),
                0x0;
            return this['buffer']['numberOfChannels'];
        }
        ,
        _0x463251['getFrequency'] = function() {
            if (!this['buffer'])
                return console['log']('Trying to get metadata of sound which is not loaded.'),
                0x0;
            return this['buffer']['sampleRate'];
        }
        ,
        _0x463251['createSourceNode'] = function() {
            !this['buffer'] && console['log']('Trying to play sound which is not loaded.');
            var _0x202bf5 = _0x11e93e['audioContext']['createBufferSource']();
            return _0x202bf5['buffer'] = this['buffer'],
            _0x156ff4(_0x202bf5),
            _0x202bf5;
        }
        ,
        _0x463251;
    }
    function _0x1539cc(_0x402590, _0x31b7ef) {
        var _0x197923 = {
            'callback': _0x402590,
            'userData': _0x31b7ef,
            'source': null,
            'gain': _0x11e93e['audioContext']['createGain'](),
            'panner': _0x11e93e['audioContext']['createPanner'](),
            'threeD': ![],
            'loop': ![],
            'loopStart': 0x0,
            'loopEnd': 0x0,
            'pitch': 0x1
        };
        return _0x197923['panner']['rolloffFactor'] = 0x0,
        _0x197923['release'] = function() {
            this['disconnectSource'](),
            this['gain']['disconnect'](),
            this['panner']['disconnect']();
        }
        ,
        _0x197923['playSoundClip'] = function(_0x14a127, _0xcc1fd3, _0x9b932d) {
            try {
                var _0x5914c6 = this;
                this['source'] = _0x14a127['createSourceNode'](),
                this['setupPanning'](),
                this['source']['onended'] = function() {
                    _0x5914c6['source']['isStopped'] = !![],
                    _0x5914c6['disconnectSource'](),
                    _0x5914c6['callback'] && _0x45b917('vi', _0x5914c6['callback'], [_0x5914c6['userData']]);
                }
                ,
                this['source']['loop'] = this['loop'],
                this['source']['loopStart'] = this['loopStart'],
                this['source']['loopEnd'] = this['loopEnd'],
                this['source']['start'](_0xcc1fd3, _0x9b932d),
                this['source']['playbackStartTime'] = _0xcc1fd3 - _0x9b932d / this['source']['playbackRate']['value'],
                this['source']['setPitch'](this['pitch']);
            } catch (_0x2ea170) {
                console['error']('Channel.playSoundClip error. Exception: ' + _0x2ea170);
            }
        }
        ,
        _0x197923['stop'] = function(_0x18b5e1) {
            if (!this['source'])
                return;
            try {
                _0x197923['source']['stop'](_0x11e93e['audioContext']['currentTime'] + _0x18b5e1);
            } catch (_0x1e05b1) {}
            _0x18b5e1 == 0x0 && this['disconnectSource']();
        }
        ,
        _0x197923['isPaused'] = function() {
            if (!this['source'])
                return !![];
            if (this['source']['isPausedMockNode'])
                return !![];
            if (this['source']['mediaElement'])
                return this['source']['mediaElement']['paused'] || this['source']['pauseRequested'];
            return ![];
        }
        ,
        _0x197923['pause'] = function() {
            if (!this['source'] || this['source']['isPausedMockNode'])
                return;
            if (this['source']['mediaElement']) {
                this['source']['_pauseMediaElement']();
                return;
            }
            var _0x48a4b9 = {
                'isPausedMockNode': !![],
                'buffer': this['source']['buffer'],
                'loop': this['source']['loop'],
                'loopStart': this['source']['loopStart'],
                'loopEnd': this['source']['loopEnd'],
                'playbackRate': this['source']['playbackRate']['value'],
                'scheduledStopTime': undefined,
                'playbackPausedAtPosition': this['source']['estimatePlaybackPosition'](),
                'setPitch': function(_0x2a2f6f) {
                    this['playbackRate'] = _0x2a2f6f;
                },
                'stop': function(_0x3be8b3) {
                    this['scheduledStopTime'] = _0x3be8b3;
                }
            };
            this['stop'](0x0),
            this['disconnectSource'](),
            this['source'] = _0x48a4b9;
        }
        ,
        _0x197923['resume'] = function() {
            if (this['source'] && this['source']['mediaElement']) {
                this['source']['start'](undefined, this['source']['currentTime']);
                return;
            }
            if (!this['source'] || !this['source']['isPausedMockNode'])
                return;
            var _0x2ea1ac = this['source']
              , _0x371ae4 = _0x25d5f1(_0x2ea1ac['buffer'], ![]);
            this['playSoundClip'](_0x371ae4, _0x11e93e['audioContext']['currentTime'], Math['max'](0x0, _0x2ea1ac['playbackPausedAtPosition'])),
            this['source']['loop'] = _0x2ea1ac['loop'],
            this['source']['loopStart'] = _0x2ea1ac['loopStart'],
            this['source']['loopEnd'] = _0x2ea1ac['loopEnd'],
            this['source']['setPitch'](_0x2ea1ac['playbackRate']);
            if (typeof _0x2ea1ac['scheduledStopTime'] !== 'undefined') {
                var _0x5eaa1b = Math['max'](_0x2ea1ac['scheduledStopTime'] - _0x11e93e['audioContext']['currentTime'], 0x0);
                this['stop'](_0x5eaa1b);
            }
        }
        ,
        _0x197923['setLoop'] = function(_0x3f9497) {
            this['loop'] = _0x3f9497;
            if (!this['source'] || this['source']['loop'] == _0x3f9497)
                return;
            this['source']['loop'] = _0x3f9497;
        }
        ,
        _0x197923['setLoopPoints'] = function(_0x5a9a4a, _0x3f08d3) {
            this['loopStart'] = _0x5a9a4a,
            this['loopEnd'] = _0x3f08d3;
            if (!this['source'])
                return;
            this['source']['loopStart'] !== _0x5a9a4a && (this['source']['loopStart'] = _0x5a9a4a),
            this['source']['loopEnd'] !== _0x3f08d3 && (this['source']['loopEnd'] = _0x3f08d3);
        }
        ,
        _0x197923['set3D'] = function(_0x5b7a7a) {
            if (this['threeD'] == _0x5b7a7a)
                return;
            this['threeD'] = _0x5b7a7a;
            if (!this['source'])
                return;
            this['setupPanning']();
        }
        ,
        _0x197923['setPitch'] = function(_0x4f0715) {
            this['pitch'] = _0x4f0715;
            if (!this['source'])
                return;
            this['source']['setPitch'](_0x4f0715);
        }
        ,
        _0x197923['setVolume'] = function(_0x42bdcc) {
            if (this['gain']['gain']['value'] == _0x42bdcc)
                return;
            this['gain']['gain']['value'] = _0x42bdcc;
        }
        ,
        _0x197923['setPosition'] = function(_0x2d47cf, _0x28db99, _0x383227) {
            var _0x186e8c = this['panner'];
            if (_0x186e8c['positionX']) {
                if (_0x186e8c['positionX']['value'] !== _0x2d47cf)
                    _0x186e8c['positionX']['value'] = _0x2d47cf;
                if (_0x186e8c['positionY']['value'] !== _0x28db99)
                    _0x186e8c['positionY']['value'] = _0x28db99;
                if (_0x186e8c['positionZ']['value'] !== _0x383227)
                    _0x186e8c['positionZ']['value'] = _0x383227;
            } else
                (_0x186e8c['_x'] !== _0x2d47cf || _0x186e8c['_y'] !== _0x28db99 || _0x186e8c['_z'] !== _0x383227) && (_0x186e8c['setPosition'](_0x2d47cf, _0x28db99, _0x383227),
                _0x186e8c['_x'] = _0x2d47cf,
                _0x186e8c['_y'] = _0x28db99,
                _0x186e8c['_z'] = _0x383227);
        }
        ,
        _0x197923['disconnectSource'] = function() {
            if (!this['source'] || this['source']['isPausedMockNode'])
                return;
            this['source']['mediaElement'] && this['source']['_pauseMediaElement'](),
            this['source']['onended'] = null,
            this['source']['disconnect'](),
            delete this['source'];
        }
        ,
        _0x197923['setupPanning'] = function() {
            if (this['source']['isPausedMockNode'])
                return;
            this['source']['disconnect'](),
            this['panner']['disconnect'](),
            this['gain']['disconnect'](),
            this['threeD'] ? (this['source']['connect'](this['panner']),
            this['panner']['connect'](this['gain'])) : this['source']['connect'](this['gain']),
            this['gain']['connect'](_0x11e93e['audioContext']['destination']);
        }
        ,
        _0x197923['isStopped'] = function() {
            if (!this['source'])
                return !![];
            if (this['source']['mediaElement'])
                return this['source']['isStopped'];
            return ![];
        }
        ,
        _0x197923;
    }
    function _0x88f2ae(_0x5f4420, _0x75b1d9) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        return _0x11e93e['audioInstances'][++_0x11e93e['audioInstanceIdCounter']] = _0x1539cc(_0x5f4420, _0x75b1d9),
        _0x11e93e['audioInstanceIdCounter'];
    }
    function _0x10b0c7(_0x14170c) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return 0x0;
        var _0x33de30 = _0x11e93e['audioInstances'][_0x14170c];
        if (!_0x33de30)
            return 0x0;
        return _0x33de30['getLength']();
    }
    function _0x2a266c(_0x9e53ea) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return 0x2;
        var _0x27f60f = _0x11e93e['audioInstances'][_0x9e53ea];
        if (_0x27f60f['error'])
            return 0x2;
        if (_0x27f60f['buffer'] || _0x27f60f['url'])
            return 0x0;
        return 0x1;
    }
    function _0x560c29(_0x199ff8, _0xae63cf) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return _0x311b71[_0xae63cf >> 0x2] = 0x0,
            _0x311b71[(_0xae63cf >> 0x2) + 0x1] = 0x0,
            ![];
        var _0x46e37f = _0x11e93e['audioInstances'][_0x199ff8];
        if (!_0x46e37f)
            return _0x311b71[_0xae63cf >> 0x2] = 0x0,
            _0x311b71[(_0xae63cf >> 0x2) + 0x1] = 0x0,
            ![];
        return _0x311b71[_0xae63cf >> 0x2] = _0x46e37f['getNumberOfChannels'](),
        _0x311b71[(_0xae63cf >> 0x2) + 0x1] = _0x46e37f['getFrequency'](),
        !![];
    }
    function _0x377e97(_0x49606b) {
        var _0x53934b = _0x11e93e['pendingAudioSources'][_0x49606b];
        _0x53934b['sourceNode']['_startPlayback'](_0x53934b['offset']),
        delete _0x11e93e['pendingAudioSources'][_0x49606b];
    }
    function _0x59240c() {
        Object['keys'](_0x11e93e['pendingAudioSources'])['forEach'](function(_0x5f2a3a) {
            _0x377e97(_0x5f2a3a);
        });
    }
    function _0x214e2a() {
        try {
            window['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'],
            _0x11e93e['audioContext'] = new AudioContext();
            var _0x3c0c92 = function() {
                if (_0x11e93e['audioContext']['state'] === 'suspended')
                    _0x11e93e['audioContext']['resume']()['catch'](function(_0x2c773f) {
                        console['warn']('Could not resume audio context. Exception: ' + _0x2c773f);
                    });
                else
                    _0x1455c0['clearInterval'](_0x3e2001);
            }
              , _0x3e2001 = _0x1455c0['setInterval'](_0x3c0c92, 0x190);
            _0x11e93e['audioWebEnabled'] = 0x1;
            var _0x3c9891 = function() {
                try {
                    _0x11e93e['audioContext']['state'] !== 'running' && _0x11e93e['audioContext']['state'] !== 'closed' && _0x11e93e['audioContext']['resume']()['catch'](function(_0x49caeb) {
                        console['warn']('Could not resume audio context. Exception: ' + _0x49caeb);
                    });
                    _0x59240c();
                    var _0x32be3e = 0x14;
                    while (_0x11e93e['audioCache']['length'] < _0x32be3e) {
                        var _0x23c6ab = new Audio();
                        _0x23c6ab['autoplay'] = ![],
                        _0x11e93e['audioCache']['push'](_0x23c6ab);
                    }
                } catch (_0x3ea5c5) {}
            };
            window['addEventListener']('mousedown', _0x3c9891),
            window['addEventListener']('touchstart', _0x3c9891),
            _0x1455c0['deinitializers']['push'](function() {
                window['removeEventListener']('mousedown', _0x3c9891),
                window['removeEventListener']('touchstart', _0x3c9891);
            });
        } catch (_0x41f606) {
            alert('Web Audio API is not supported in this browser');
        }
    }
    function _0x278d34(_0x2ed4cb) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return !![];
        var _0x4ae917 = _0x11e93e['audioInstances'][_0x2ed4cb];
        if (!_0x4ae917)
            return !![];
        return _0x4ae917['isStopped']();
    }
    function _0xa9deec(_0x4dbc5e) {
        var _0x5c2a36 = _0x25d5f1(null, ![]);
        return _0x11e93e['audioContext']['decodeAudioData'](_0x4dbc5e, function(_0x5360cc) {
            _0x5c2a36['buffer'] = _0x5360cc;
        }, function(_0x390209) {
            _0x5c2a36['error'] = !![],
            console['log']('Decode error: ' + _0x390209);
        }),
        _0x5c2a36;
    }
    function _0x22713f(_0x194788, _0x2fab8a) {
        _0x11e93e['pendingAudioSources'][_0x194788['mediaElement']['src']] = {
            'sourceNode': _0x194788,
            'offset': _0x2fab8a
        };
    }
    function _0x3a11d7(_0x2c09fb) {
        switch (_0x2c09fb) {
        case 0xd:
            return 'audio/mpeg';
        case 0x14:
            return 'audio/wav';
        default:
            return 'audio/mp4';
        }
    }
    function _0x644cc3(_0x3dc1ba, _0x1d1b6e) {
        var _0x5617e1 = _0x3a11d7(_0x1d1b6e)
          , _0x3a0e69 = new Blob([_0x3dc1ba],{
            'type': _0x5617e1
        })
          , _0x1aac86 = {
            'url': URL['createObjectURL'](_0x3a0e69),
            'error': ![],
            'mediaElement': new Audio()
        };
        return _0x1aac86['mediaElement']['preload'] = 'metadata',
        _0x1aac86['mediaElement']['src'] = _0x1aac86['url'],
        _0x1aac86['release'] = function() {
            if (!this['mediaElement'])
                return;
            this['mediaElement']['src'] = '',
            URL['revokeObjectURL'](this['url']),
            delete this['mediaElement'],
            delete this['url'];
        }
        ,
        _0x1aac86['getLength'] = function() {
            return this['mediaElement']['duration'] * 0xac44;
        }
        ,
        _0x1aac86['getData'] = function(_0x435880, _0x457cc0) {
            return console['warn']('getData() is not supported for compressed sound.'),
            0x0;
        }
        ,
        _0x1aac86['getNumberOfChannels'] = function() {
            return console['warn']('getNumberOfChannels() is not supported for compressed sound.'),
            0x0;
        }
        ,
        _0x1aac86['getFrequency'] = function() {
            return console['warn']('getFrequency() is not supported for compressed sound.'),
            0x0;
        }
        ,
        _0x1aac86['createSourceNode'] = function() {
            var _0x290718 = this
              , _0x409564 = _0x11e93e['audioCache']['length'] ? _0x11e93e['audioCache']['pop']() : new Audio();
            _0x409564['preload'] = 'metadata',
            _0x409564['src'] = this['url'];
            var _0xcea7fd = _0x11e93e['audioContext']['createMediaElementSource'](_0x409564);
            return Object['defineProperty'](_0xcea7fd, 'loop', {
                'get': function() {
                    return _0xcea7fd['mediaElement']['loop'];
                },
                'set': function(_0x376afd) {
                    if (_0xcea7fd['mediaElement']['loop'] !== _0x376afd)
                        _0xcea7fd['mediaElement']['loop'] = _0x376afd;
                }
            }),
            _0xcea7fd['playbackRate'] = {},
            Object['defineProperty'](_0xcea7fd['playbackRate'], 'value', {
                'get': function() {
                    return _0xcea7fd['mediaElement']['playbackRate'];
                },
                'set': function(_0x55822c) {
                    if (_0xcea7fd['mediaElement']['playbackRate'] !== _0x55822c)
                        _0xcea7fd['mediaElement']['playbackRate'] = _0x55822c;
                }
            }),
            Object['defineProperty'](_0xcea7fd, 'currentTime', {
                'get': function() {
                    return _0xcea7fd['mediaElement']['currentTime'];
                },
                'set': function(_0x259ff7) {
                    if (_0xcea7fd['mediaElement']['currentTime'] !== _0x259ff7)
                        _0xcea7fd['mediaElement']['currentTime'] = _0x259ff7;
                }
            }),
            Object['defineProperty'](_0xcea7fd, 'mute', {
                'get': function() {
                    return _0xcea7fd['mediaElement']['mute'];
                },
                'set': function(_0x136801) {
                    if (_0xcea7fd['mediaElement']['mute'] !== _0x136801)
                        _0xcea7fd['mediaElement']['mute'] = _0x136801;
                }
            }),
            Object['defineProperty'](_0xcea7fd, 'onended', {
                'get': function() {
                    return _0xcea7fd['mediaElement']['onended'];
                },
                'set': function(_0x2191db) {
                    _0xcea7fd['mediaElement']['onended'] = _0x2191db;
                }
            }),
            _0xcea7fd['playPromise'] = null,
            _0xcea7fd['playTimeout'] = null,
            _0xcea7fd['pauseRequested'] = ![],
            _0xcea7fd['isStopped'] = ![],
            _0xcea7fd['_pauseMediaElement'] = function() {
                _0xcea7fd['playPromise'] || _0xcea7fd['playTimeout'] ? _0xcea7fd['pauseRequested'] = !![] : _0xcea7fd['mediaElement']['pause']();
            }
            ,
            _0xcea7fd['_startPlayback'] = function(_0x19a7eb) {
                if (_0xcea7fd['playPromise'] || _0xcea7fd['playTimeout']) {
                    _0xcea7fd['mediaElement']['currentTime'] = _0x19a7eb,
                    _0xcea7fd['pauseRequested'] = ![];
                    return;
                }
                _0xcea7fd['mediaElement']['currentTime'] = _0x19a7eb,
                _0xcea7fd['playPromise'] = _0xcea7fd['mediaElement']['play'](),
                _0xcea7fd['playPromise'] && _0xcea7fd['playPromise']['then'](function() {
                    _0xcea7fd['pauseRequested'] && (_0xcea7fd['mediaElement']['pause'](),
                    _0xcea7fd['pauseRequested'] = ![]),
                    _0xcea7fd['playPromise'] = null;
                })['catch'](function(_0x4e7305) {
                    _0xcea7fd['playPromise'] = null;
                    if (_0x4e7305['name'] !== 'NotAllowedError')
                        throw _0x4e7305;
                    _0x22713f(_0xcea7fd, _0x19a7eb);
                });
            }
            ,
            _0xcea7fd['start'] = function(_0x2c6a54, _0x24bc45) {
                typeof _0x2c6a54 === 'undefined' && (_0x2c6a54 = _0x11e93e['audioContext']['currentTime']);
                typeof _0x24bc45 === 'undefined' && (_0x24bc45 = 0x0);
                var _0x290047 = 0x4
                  , _0x32be78 = (_0x2c6a54 - _0x11e93e['audioContext']['currentTime']) * 0x3e8;
                _0x32be78 > _0x290047 ? _0xcea7fd['playTimeout'] = setTimeout(function() {
                    _0xcea7fd['playTimeout'] = null,
                    _0xcea7fd['_startPlayback'](_0x24bc45);
                }, _0x32be78) : _0xcea7fd['_startPlayback'](_0x24bc45);
            }
            ,
            _0xcea7fd['stop'] = function(_0x32cb02) {
                typeof _0x32cb02 === 'undefined' && (_0x32cb02 = _0x11e93e['audioContext']['currentTime']);
                var _0x5eafab = 0x4
                  , _0x3d845d = (_0x32cb02 - _0x11e93e['audioContext']['currentTime']) * 0x3e8;
                _0x3d845d > _0x5eafab ? setTimeout(function() {
                    _0xcea7fd['_pauseMediaElement'](),
                    _0xcea7fd['isStopped'] = !![];
                }, _0x3d845d) : (_0xcea7fd['_pauseMediaElement'](),
                _0xcea7fd['isStopped'] = !![]);
            }
            ,
            _0x156ff4(_0xcea7fd),
            _0xcea7fd;
        }
        ,
        _0x1aac86;
    }
    function _0x2c1fc9(_0xf1a599, _0xf105c1, _0x21fb5d, _0x5eaee2) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return 0x0;
        var _0x12ffd7 = _0x2ac27b['buffer']['slice'](_0xf1a599, _0xf1a599 + _0xf105c1);
        if (_0xf105c1 < 0x20000)
            _0x21fb5d = 0x1;
        var _0xdc11a2;
        return _0x21fb5d ? _0xdc11a2 = _0xa9deec(_0x12ffd7) : _0xdc11a2 = _0x644cc3(_0x12ffd7, _0x5eaee2),
        _0x11e93e['audioInstances'][++_0x11e93e['audioInstanceIdCounter']] = _0xdc11a2,
        _0x11e93e['audioInstanceIdCounter'];
    }
    function _0x136be5(_0x713d43, _0x24626c, _0x2a79e5, _0x49078c) {
        var _0x4fdbec = _0x11e93e['audioContext']['createBuffer'](_0x713d43, _0x24626c, _0x2a79e5);
        for (var _0x472240 = 0x0; _0x472240 < _0x713d43; _0x472240++) {
            var _0x53ba9c = (_0x49078c >> 0x2) + _0x24626c * _0x472240
              , _0x339a29 = _0x4fdbec['copyToChannel'] || function(_0x5a96d5, _0x7b134b, _0x357860) {
                var _0x24e395 = _0x5a96d5['subarray'](0x0, Math['min'](_0x5a96d5['length'], this['length'] - (_0x357860 | 0x0)));
                this['getChannelData'](_0x7b134b | 0x0)['set'](_0x24e395, _0x357860 | 0x0);
            }
            ;
            _0x339a29['apply'](_0x4fdbec, [_0x81f2c2['subarray'](_0x53ba9c, _0x53ba9c + _0x24626c), _0x472240, 0x0]);
        }
        return _0x25d5f1(_0x4fdbec, ![]);
    }
    function _0x75b5e9(_0x23b12e, _0x75e02f, _0x49cac5, _0x10ac27) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return 0x0;
        var _0x3b2dc6 = _0x136be5(_0x23b12e, _0x75e02f, _0x49cac5, _0x10ac27);
        return _0x11e93e['audioInstances'][++_0x11e93e['audioInstanceIdCounter']] = _0x3b2dc6,
        _0x11e93e['audioInstanceIdCounter'];
    }
    function _0x191eef(_0x4c8f72, _0x3ba9b5, _0x424f12, _0xec249b) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        _0x2b514b(_0x3ba9b5, 0x0);
        var _0x259194 = _0x11e93e['audioInstances'][_0x4c8f72]
          , _0x5a62f4 = _0x11e93e['audioInstances'][_0x3ba9b5];
        if (!_0x259194) {
            console['log']('Trying to play sound which is not loaded.');
            return;
        }
        try {
            _0x5a62f4['playSoundClip'](_0x259194, _0x11e93e['audioContext']['currentTime'] + _0xec249b, _0x424f12);
        } catch (_0x441a05) {
            console['error']('playSoundClip error. Exception: ' + e);
        }
    }
    function _0x51c56d(_0x2c8b87) {
        var _0x41a6ca = _0x11e93e['audioInstances'][_0x2c8b87];
        _0x41a6ca && _0x41a6ca['release'](),
        delete _0x11e93e['audioInstances'][_0x2c8b87];
    }
    function _0x1d9e95() {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        if (_0x11e93e['audioContext']['state'] === 'suspended')
            _0x11e93e['audioContext']['resume']()['catch'](function(_0x3669cd) {
                console['warn']('Could not resume audio context. Exception: ' + _0x3669cd);
            });
    }
    function _0x224ea1(_0x570263, _0x170150) {
        var _0x4199ea = _0x11e93e['audioInstances'][_0x570263];
        _0x4199ea['set3D'](_0x170150);
    }
    function _0x43cdda(_0x42b9dd, _0x485ffa, _0x596f9a, _0x1cd71a, _0x30ca52, _0x15361a) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        _0x42b9dd = -_0x42b9dd,
        _0x485ffa = -_0x485ffa,
        _0x596f9a = -_0x596f9a;
        var _0x1acaba = _0x11e93e['audioContext']['listener'];
        if (_0x1acaba['forwardX']) {
            if (_0x1acaba['forwardX']['value'] !== _0x42b9dd)
                _0x1acaba['forwardX']['value'] = _0x42b9dd;
            if (_0x1acaba['forwardY']['value'] !== _0x485ffa)
                _0x1acaba['forwardY']['value'] = _0x485ffa;
            if (_0x1acaba['forwardZ']['value'] !== _0x596f9a)
                _0x1acaba['forwardZ']['value'] = _0x596f9a;
            if (_0x1acaba['upX']['value'] !== _0x1cd71a)
                _0x1acaba['upX']['value'] = _0x1cd71a;
            if (_0x1acaba['upY']['value'] !== _0x30ca52)
                _0x1acaba['upY']['value'] = _0x30ca52;
            if (_0x1acaba['upZ']['value'] !== _0x15361a)
                _0x1acaba['upZ']['value'] = _0x15361a;
        } else
            (_0x1acaba['_forwardX'] !== _0x42b9dd || _0x1acaba['_forwardY'] !== _0x485ffa || _0x1acaba['_forwardZ'] !== _0x596f9a || _0x1acaba['_upX'] !== _0x1cd71a || _0x1acaba['_upY'] !== _0x30ca52 || _0x1acaba['_upZ'] !== _0x15361a) && (_0x1acaba['setOrientation'](_0x42b9dd, _0x485ffa, _0x596f9a, _0x1cd71a, _0x30ca52, _0x15361a),
            _0x1acaba['_forwardX'] = _0x42b9dd,
            _0x1acaba['_forwardY'] = _0x485ffa,
            _0x1acaba['_forwardZ'] = _0x596f9a,
            _0x1acaba['_upX'] = _0x1cd71a,
            _0x1acaba['_upY'] = _0x30ca52,
            _0x1acaba['_upZ'] = _0x15361a);
    }
    function _0x180f12(_0x25fccc, _0x1c4e89, _0x3a78e4) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x3123bf = _0x11e93e['audioContext']['listener'];
        if (_0x3123bf['positionX']) {
            if (_0x3123bf['positionX']['value'] !== _0x25fccc)
                _0x3123bf['positionX']['value'] = _0x25fccc;
            if (_0x3123bf['positionY']['value'] !== _0x1c4e89)
                _0x3123bf['positionY']['value'] = _0x1c4e89;
            if (_0x3123bf['positionZ']['value'] !== _0x3a78e4)
                _0x3123bf['positionZ']['value'] = _0x3a78e4;
        } else
            (_0x3123bf['_positionX'] !== _0x25fccc || _0x3123bf['_positionY'] !== _0x1c4e89 || _0x3123bf['_positionZ'] !== _0x3a78e4) && (_0x3123bf['setPosition'](_0x25fccc, _0x1c4e89, _0x3a78e4),
            _0x3123bf['_positionX'] = _0x25fccc,
            _0x3123bf['_positionY'] = _0x1c4e89,
            _0x3123bf['_positionZ'] = _0x3a78e4);
    }
    function _0x22484f(_0x587de9, _0x45d0f0) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x544cb6 = _0x11e93e['audioInstances'][_0x587de9];
        _0x544cb6['setLoop'](_0x45d0f0);
    }
    function _0x94284d(_0x22df95, _0xeffe90, _0x1c61f5) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x575bde = _0x11e93e['audioInstances'][_0x22df95];
        _0x575bde['setLoopPoints'](_0xeffe90, _0x1c61f5);
    }
    function _0x4830eb(_0x2db3cc, _0x16be8d) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x180a21 = _0x11e93e['audioInstances'][_0x2db3cc];
        if (_0x16be8d != _0x180a21['isPaused']()) {
            if (_0x16be8d)
                _0x180a21['pause']();
            else
                _0x180a21['resume']();
        }
    }
    function _0x57e171(_0x538caf, _0x1a7c7a) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        try {
            var _0x39107d = _0x11e93e['audioInstances'][_0x538caf];
            _0x39107d['setPitch'](_0x1a7c7a);
        } catch (_0x1bc5fe) {
            console['error']('JS_Sound_SetPitch(channel=' + _0x538caf + ', pitch=' + _0x1a7c7a + ') threw an exception: ' + _0x1bc5fe);
        }
    }
    function _0x233eb3(_0x4032be, _0x20e395, _0x1bdb5d, _0x46863e) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x2b393c = _0x11e93e['audioInstances'][_0x4032be];
        _0x2b393c['setPosition'](_0x20e395, _0x1bdb5d, _0x46863e);
    }
    function _0x4921e7(_0x5925c1, _0x529efb) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        try {
            var _0x5a75d3 = _0x11e93e['audioInstances'][_0x5925c1];
            _0x5a75d3['setVolume'](_0x529efb);
        } catch (_0x8aab5e) {
            console['error']('JS_Sound_SetVolume(channel=' + _0x5925c1 + ', volume=' + _0x529efb + ') threw an exception: ' + _0x8aab5e);
        }
    }
    function _0x2b514b(_0x43e5b4, _0x30b877) {
        if (_0x11e93e['audioWebEnabled'] == 0x0)
            return;
        var _0x158bb9 = _0x11e93e['audioInstances'][_0x43e5b4];
        _0x158bb9['stop'](_0x30b877);
    }
    function _0x5c514e(_0x592af0, _0x42597b, _0xba59ba) {
        var _0x507c30 = _0x46211(_0x592af0)
          , _0x6df6bc = _0x507c30 == '#canvas' ? _0x1455c0['canvas'] : document['querySelector'](_0x507c30)
          , _0xfd1fa5 = 0x0
          , _0x1b0df5 = 0x0;
        if (_0x6df6bc) {
            var _0x2aa2ba = _0x6df6bc['getBoundingClientRect']();
            _0xfd1fa5 = _0x2aa2ba['width'],
            _0x1b0df5 = _0x2aa2ba['height'];
        }
        _0x2a3d2d[_0x42597b >> 0x3] = _0xfd1fa5,
        _0x2a3d2d[_0xba59ba >> 0x3] = _0x1b0df5;
    }
    function _0x52308c(_0x363d5b, _0x4b4e24) {
        if (_0x363d5b)
            _0x430ff7(document['URL'], _0x363d5b, _0x4b4e24);
        return _0x5a6a49(document['URL']);
    }
    function _0x5d7ea0(_0x546949, _0x4aacb3) {
        var _0x7a7c2a = _0x1455c0['SystemInfo']['gpu'];
        if (_0x546949)
            _0x430ff7(_0x7a7c2a, _0x546949, _0x4aacb3);
        return _0x5a6a49(_0x7a7c2a);
    }
    function _0x1e4b97() {
        return _0x1455c0['matchWebGLToCanvasSize'] || _0x1455c0['matchWebGLToCanvasSize'] === undefined;
    }
    function _0x182d2f() {
        return _0x2ac27b['length'] / (0x400 * 0x400);
    }
    function _0x1282c7(_0x438cda, _0x552a09) {
        var _0x20dfe3 = _0x1455c0['SystemInfo']['os'] + ' ' + _0x1455c0['SystemInfo']['osVersion'];
        if (_0x438cda)
            _0x430ff7(_0x20dfe3, _0x438cda, _0x552a09);
        return _0x5a6a49(_0x20dfe3);
    }
    function _0x3384e0() {
        return _0x1455c0['matchWebGLToCanvasSize'] == ![] ? 0x1 : _0x1455c0['devicePixelRatio'] || window['devicePixelRatio'] || 0x1;
    }
    function _0x18f7d1(_0x41e4a5, _0x41a32a) {
        _0x2a3d2d[_0x41e4a5 >> 0x3] = _0x1455c0['SystemInfo']['width'],
        _0x2a3d2d[_0x41a32a >> 0x3] = _0x1455c0['SystemInfo']['height'];
    }
    function _0x109a4a(_0x3c849f, _0xcc9a63) {
        if (_0x3c849f)
            _0x430ff7(_0x1455c0['streamingAssetsUrl'], _0x3c849f, _0xcc9a63);
        return _0x5a6a49(_0x1455c0['streamingAssetsUrl']);
    }
    function _0x5ea05f() {
        var _0x47722d = _0x264078['getExtension']('WEBGL_compressed_texture_astc');
        if (_0x47722d && _0x47722d['getSupportedProfiles'])
            return _0x47722d['getSupportedProfiles']()['includes']('hdr');
        return ![];
    }
    function _0x3e13ca() {
        return _0x1455c0['SystemInfo']['hasCursorLock'];
    }
    function _0x4a4bc7() {
        return _0x1455c0['SystemInfo']['hasFullscreen'];
    }
    function _0x235386() {
        return _0x1455c0['SystemInfo']['hasWebGL'];
    }
    function _0x4c0eef() {
        return _0x1455c0['SystemInfo']['mobile'];
    }
    function _0x59fba4() {
        return !!_0x1455c0['shouldQuit'];
    }
    var _0x371b1b = {
        'requests': {},
        'responses': {},
        'abortControllers': {},
        'timer': {},
        'nextRequestId': 0x1
    };
    function _0x5d13b1(_0x20627b) {
        var _0x3940b6 = _0x371b1b['abortControllers'][_0x20627b];
        if (!_0x3940b6 || _0x3940b6['signal']['aborted'])
            return;
        _0x3940b6['abort']();
    }
    function _0x2f15fe(_0x608bea, _0x555584) {
        var _0x5bb57a = _0x46211(_0x608bea)
          , _0x4487ac = _0x46211(_0x555584)
          , _0x28ecdf = new AbortController()
          , _0x1befb8 = {
            'url': _0x5bb57a,
            'init': {
                'method': _0x4487ac,
                'signal': _0x28ecdf['signal'],
                'headers': {},
                'enableStreamingDownload': !![]
            },
            'tempBuffer': null,
            'tempBufferSize': 0x0
        };
        return _0x371b1b['abortControllers'][_0x371b1b['nextRequestId']] = _0x28ecdf,
        _0x371b1b['requests'][_0x371b1b['nextRequestId']] = _0x1befb8,
        _0x371b1b['nextRequestId']++;
    }
    function _0x38e7fb(_0x4256be) {
        var _0x22d033 = _0x371b1b['responses'][_0x4256be];
        if (!_0x22d033)
            return '';
        if (_0x22d033['headerString'])
            return _0x22d033['headerString'];
        var _0x245a86 = ''
          , _0x2cf1d0 = _0x22d033['headers']['entries']();
        for (var _0x4a672b = _0x2cf1d0['next'](); !_0x4a672b['done']; _0x4a672b = _0x2cf1d0['next']()) {
            _0x245a86 += _0x4a672b['value'][0x0] + ': ' + _0x4a672b['value'][0x1] + '
';
        }
        return _0x22d033['headerString'] = _0x245a86,
        _0x245a86;
    }
    function _0x5c5ba7(_0x5f50a9, _0x5c3083, _0x3a6c50, _0x516619, _0x409a25) {
        var _0x4c72ed = _0x371b1b['responses'][_0x5f50a9];
        if (!_0x4c72ed) {
            _0x430ff7('', _0x5c3083, _0x3a6c50),
            _0x430ff7('', _0x516619, _0x409a25);
            return;
        }
        if (_0x5c3083) {
            var _0x3442d1 = _0x38e7fb(_0x5f50a9);
            _0x430ff7(_0x3442d1, _0x5c3083, _0x3a6c50);
        }
        _0x516619 && _0x430ff7(_0x4c72ed['url'], _0x516619, _0x409a25);
    }
    function _0x3fc045(_0x5b5a0e, _0x3b7a29) {
        var _0x596a57 = _0x371b1b['responses'][_0x5b5a0e];
        if (!_0x596a57) {
            _0x311b71[_0x3b7a29 >> 0x2] = 0x0,
            _0x311b71[(_0x3b7a29 >> 0x2) + 0x1] = 0x0;
            return;
        }
        var _0x317d09 = _0x38e7fb(_0x5b5a0e);
        _0x311b71[_0x3b7a29 >> 0x2] = _0x5a6a49(_0x317d09),
        _0x311b71[(_0x3b7a29 >> 0x2) + 0x1] = _0x5a6a49(_0x596a57['url']);
    }
    function _0x398169(_0x86d58f) {
        _0x371b1b['timer'][_0x86d58f] && clearTimeout(_0x371b1b['timer'][_0x86d58f]),
        delete _0x371b1b['requests'][_0x86d58f],
        delete _0x371b1b['responses'][_0x86d58f],
        delete _0x371b1b['abortControllers'][_0x86d58f],
        delete _0x371b1b['timer'][_0x86d58f];
    }
    function _0x57201c(_0xa391dd, _0x3a9d40, _0x5c2b4d, _0x4a8ef5, _0x1c3122, _0x2ae30a) {
        var _0x52b032 = _0x371b1b['requests'][_0xa391dd]
          , _0x539411 = _0x371b1b['abortControllers'][_0xa391dd];
        function _0x27ea30(_0x3c0b0c) {
            if (!_0x52b032['tempBuffer']) {
                const _0x1317a3 = Math['max'](_0x3c0b0c, 0x400);
                _0x52b032['tempBuffer'] = _0x214635(_0x1317a3),
                _0x52b032['tempBufferSize'] = _0x1317a3;
            }
            return _0x52b032['tempBufferSize'] < _0x3c0b0c && (_0x1f3809(_0x52b032['tempBuffer']),
            _0x52b032['tempBuffer'] = _0x214635(_0x3c0b0c),
            _0x52b032['tempBufferSize'] = _0x3c0b0c),
            _0x52b032['tempBuffer'];
        }
        function _0x3d79a1() {
            _0x371b1b['timer'][_0xa391dd] && (clearTimeout(_0x371b1b['timer'][_0xa391dd]),
            delete _0x371b1b['timer'][_0xa391dd]);
        }
        function _0x17afa3(_0x283128, _0x129fb8) {
            _0x3d79a1();
            if (!_0x1c3122)
                return;
            var _0x3cb907 = 0x0;
            if (_0x52b032['init']['enableStreamingDownload'])
                _0x45b917('viiiiii', _0x1c3122, [_0x4a8ef5, _0x283128['status'], 0x0, _0x129fb8['length'], 0x0, _0x3cb907]);
            else {
                if (_0x129fb8['length'] != 0x0) {
                    var _0x583012 = _0x214635(_0x129fb8['length']);
                    _0x2ac27b['set'](_0x129fb8, _0x583012),
                    _0x45b917('viiiiii', _0x1c3122, [_0x4a8ef5, _0x283128['status'], _0x583012, _0x129fb8['length'], 0x0, _0x3cb907]);
                } else
                    _0x45b917('viiiiii', _0x1c3122, [_0x4a8ef5, _0x283128['status'], 0x0, 0x0, 0x0, _0x3cb907]);
            }
            _0x52b032['tempBuffer'] && _0x1f3809(_0x52b032['tempBuffer']);
        }
        function _0xafe09b(_0x3d3d79, _0x2b345a) {
            _0x3d79a1();
            if (!_0x1c3122)
                return;
            var _0x4f5ca8 = _0x5a6a49(_0x3d3d79) + 0x1
              , _0x49f9ad = _0x214635(_0x4f5ca8);
            _0x430ff7(_0x3d3d79, _0x49f9ad, _0x4f5ca8),
            _0x45b917('viiiiii', _0x1c3122, [_0x4a8ef5, 0x1f4, 0x0, 0x0, _0x49f9ad, _0x2b345a]),
            _0x1f3809(_0x49f9ad),
            _0x52b032['tempBuffer'] && _0x1f3809(_0x52b032['tempBuffer']);
        }
        function _0x7e01d3(_0x215987) {
            if (!_0x2ae30a || !_0x215987['lengthComputable'])
                return;
            var _0x1b16ec = _0x215987['response'];
            _0x371b1b['responses'][_0xa391dd] = _0x1b16ec;
            if (_0x215987['chunk']) {
                var _0x2d9fb6 = _0x27ea30(_0x215987['chunk']['length']);
                _0x2ac27b['set'](_0x215987['chunk'], _0x2d9fb6),
                _0x45b917('viiiiii', _0x2ae30a, [_0x4a8ef5, _0x1b16ec['status'], _0x215987['loaded'], _0x215987['total'], _0x2d9fb6, _0x215987['chunk']['length']]);
            } else
                _0x45b917('viiiiii', _0x2ae30a, [_0x4a8ef5, _0x1b16ec['status'], _0x215987['loaded'], _0x215987['total'], 0x0, 0x0]);
        }
        try {
            if (_0x5c2b4d > 0x0) {
                var _0x2d8df0 = _0x2ac27b['subarray'](_0x3a9d40, _0x3a9d40 + _0x5c2b4d);
                _0x52b032['init']['body'] = new Blob([_0x2d8df0]);
            }
            _0x52b032['timeout'] && (_0x371b1b['timer'][_0xa391dd] = setTimeout(function() {
                _0x52b032['isTimedOut'] = !![],
                _0x539411['abort']();
            }, _0x52b032['timeout']));
            var _0x311bf4 = _0x1455c0['fetchWithProgress'];
            _0x52b032['init']['onProgress'] = _0x7e01d3,
            _0x1455c0['companyName'] && _0x1455c0['productName'] && _0x1455c0['cachedFetch'] && (_0x311bf4 = _0x1455c0['cachedFetch'],
            _0x52b032['init']['companyName'] = _0x1455c0['companyName'],
            _0x52b032['init']['productName'] = _0x1455c0['productName'],
            _0x52b032['control'] = _0x1455c0['cacheControl'](_0x52b032['url'])),
            _0x311bf4(_0x52b032['url'], _0x52b032['init'])['then'](function(_0x275451) {
                _0x371b1b['responses'][_0xa391dd] = _0x275451,
                _0x17afa3(_0x275451, _0x275451['parsedBody']);
            })['catch'](function(_0x5958a8) {
                var _0x383638 = 0x2
                  , _0x57114e = 0x11
                  , _0x4df36b = 0xe;
                if (_0x52b032['isTimedOut'])
                    _0xafe09b('Connection timed out.', _0x4df36b);
                else
                    _0x539411['signal']['aborted'] ? _0xafe09b('Aborted.', _0x57114e) : _0xafe09b(_0x5958a8['message'], _0x383638);
            });
        } catch (_0x4101e6) {
            var _0x49d1e7 = 0x2;
            _0xafe09b(_0x4101e6['message'], _0x49d1e7);
        }
    }
    function _0x14a04b(_0x24deed, _0xaf0d32) {
        var _0x308a34 = _0x371b1b['requests'][_0x24deed];
        if (!_0x308a34)
            return;
        _0x308a34['init']['redirect'] = _0xaf0d32 === 0x0 ? 'error' : 'follow';
    }
    function _0xc521f3(_0x42db4c, _0x48edb3, _0xf25855) {
        var _0xdf205d = _0x371b1b['requests'][_0x42db4c];
        if (!_0xdf205d)
            return;
        var _0x4dc001 = _0x46211(_0x48edb3)
          , _0x5b4228 = _0x46211(_0xf25855);
        _0xdf205d['init']['headers'][_0x4dc001] = _0x5b4228;
    }
    function _0x4d8219(_0x44b237, _0x5e5eb3) {
        var _0x281f78 = _0x371b1b['requests'][_0x44b237];
        if (!_0x281f78)
            return;
        _0x281f78['timeout'] = _0x5e5eb3;
    }
    function _0x50d6a9(_0x35b323, _0x18cc61, _0x54b914) {
        const _0x3337ff = _0x46211(_0x35b323);
        let _0x987274 = _0x46211(_0x18cc61);
        _0x987274 = _0x18cc61 || 0x493e0;
        let _0x3d61b8 = _0x46211(_0x54b914);
        window['_keepAliveInterval'] && clearInterval(window['_keepAliveInterval']),
        window['_keepAliveInterval'] = setInterval( () => {
            let _0x2dd27f = new Date()['toISOString']();
            fetch(_0x3337ff, {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'credentials': 'omit',
                'body': JSON['stringify']({
                    'session_id': _0x3d61b8
                })
            })['then'](_0x284d40 => {
                !_0x284d40['ok'] ? console['warn']('Keep-alive failed:' + _0x284d40['status']) : console['log']('Keep-alive successful');
            }
            )['catch'](_0x12b040 => {
                console['error']('Keep-alive error:', _0x12b040);
            }
            );
        }
        , _0x987274);
    }
    function _0x49b599(_0x3109b7, _0x511aa7, _0x3cbb39, _0x2d5323) {
        var _0x162f8f = _0x46211(_0x3109b7)
          , _0x448874 = _0x46211(_0x511aa7)
          , _0x476145 = _0x46211(_0x3cbb39)
          , _0xd6dd5e = _0x46211(_0x2d5323);
        try {
            firebase['database']()['ref'](_0x162f8f)['on']('child_added', function(_0x435464) {
                window['unityInstance']['SendMessage'](_0x448874, _0x476145, JSON['stringify'](_0x435464['val']()));
            });
        } catch (_0x46262e) {
            window['unityInstance']['SendMessage'](_0x448874, _0xd6dd5e, JSON['stringify'](_0x46262e, Object['getOwnPropertyNames'](_0x46262e)));
        }
    }
    function _0x3940a8(_0x594d2d, _0x441d63, _0x416551, _0x4ddc37) {
        var _0x3ba0f7 = _0x46211(_0x594d2d)
          , _0x282970 = _0x46211(_0x441d63)
          , _0x32a7fb = _0x46211(_0x416551)
          , _0x4324ad = _0x46211(_0x4ddc37);
        try {
            firebase['database']()['ref'](_0x3ba0f7)['on']('child_changed', function(_0x3778d6) {
                window['unityInstance']['SendMessage'](_0x282970, _0x32a7fb, JSON['stringify'](_0x3778d6['val']()));
            });
        } catch (_0x30481d) {
            window['unityInstance']['SendMessage'](_0x282970, _0x4324ad, JSON['stringify'](_0x30481d, Object['getOwnPropertyNames'](_0x30481d)));
        }
    }
    function _0x41f7ac(_0x53f71b, _0x239db8, _0x4302e3, _0x56f836) {
        var _0xdc41f = _0x46211(_0x53f71b)
          , _0x2d60c3 = _0x46211(_0x239db8)
          , _0x825935 = _0x46211(_0x4302e3)
          , _0x3cacfa = _0x46211(_0x56f836);
        try {
            firebase['database']()['ref'](_0xdc41f)['on']('child_removed', function(_0x3dfe11) {
                window['unityInstance']['SendMessage'](_0x2d60c3, _0x825935, JSON['stringify'](_0x3dfe11['val']()));
            });
        } catch (_0x30e078) {
            window['unityInstance']['SendMessage'](_0x2d60c3, _0x3cacfa, JSON['stringify'](_0x30e078, Object['getOwnPropertyNames'](_0x30e078)));
        }
    }
    function _0x2dd9b3(_0x1b2b5f, _0x415ad4, _0x1fd60, _0x3995c3, _0x212d76) {
        var _0x3432b8 = _0x46211(_0x1b2b5f)
          , _0x511cfd = _0x46211(_0x1fd60)
          , _0x1f03c4 = _0x46211(_0x3995c3)
          , _0x51e5e5 = _0x46211(_0x212d76);
        try {
            if (typeof firestorelisteners === 'undefined')
                firestorelisteners = {};
            this['firestorelisteners'][_0x3432b8 + '/collection/'] = firebase['firestore']()['collection'](_0x3432b8)['onSnapshot']({
                'includeMetadataChanges': _0x415ad4 == 0x1
            }, function(_0xfe65d2) {
                var _0x5ce501 = {};
                _0xfe65d2['forEach'](function(_0x3499cc) {
                    _0x5ce501[_0x3499cc['id']] = _0x3499cc['data']();
                }),
                window['unityInstance']['SendMessage'](_0x511cfd, _0x1f03c4, JSON['stringify'](_0x5ce501));
            }, function(_0x5d8403) {
                window['unityInstance']['SendMessage'](_0x511cfd, _0x51e5e5, JSON['stringify'](_0x5d8403, Object['getOwnPropertyNames'](_0x5d8403)));
            });
        } catch (_0x2bffeb) {
            window['unityInstance']['SendMessage'](_0x511cfd, _0x51e5e5, JSON['stringify'](_0x2bffeb, Object['getOwnPropertyNames'](_0x2bffeb)));
        }
    }
    function _0x4086a4(_0x1c5d27, _0x582fdc, _0x47f087, _0x20c885, _0x447ed9, _0x53ade2) {
        var _0x2eb473 = _0x46211(_0x1c5d27)
          , _0x494bdd = _0x46211(_0x582fdc)
          , _0x525bae = _0x46211(_0x20c885)
          , _0x2da525 = _0x46211(_0x447ed9)
          , _0x5296c7 = _0x46211(_0x53ade2);
        try {
            if (typeof firestorelisteners === 'undefined')
                firestorelisteners = {};
            this['firestorelisteners'][_0x2eb473 + '/' + _0x494bdd] = firebase['firestore']()['collection'](_0x2eb473)['doc'](_0x494bdd)['onSnapshot']({
                'includeMetadataChanges': _0x47f087 == 0x1
            }, function(_0x2ba1e2) {
                window['unityInstance']['SendMessage'](_0x525bae, _0x2da525, JSON['stringify'](_0x2ba1e2['data']()));
            }, function(_0x5da4d7) {
                window['unityInstance']['SendMessage'](_0x525bae, _0x5296c7, JSON['stringify'](_0x5da4d7, Object['getOwnPropertyNames'](_0x5da4d7)));
            });
        } catch (_0x1d4b0b) {
            window['unityInstance']['SendMessage'](_0x525bae, _0x5296c7, JSON['stringify'](_0x1d4b0b, Object['getOwnPropertyNames'](_0x1d4b0b)));
        }
    }
    function _0x3ea7b2(_0x53b86b, _0x1464f3, _0x5c8729, _0x564b6a) {
        var _0x508ec6 = _0x46211(_0x53b86b)
          , _0x189849 = _0x46211(_0x1464f3)
          , _0x2e1acf = _0x46211(_0x5c8729)
          , _0x57c57b = _0x46211(_0x564b6a);
        try {
            firebase['database']()['ref'](_0x508ec6)['on']('value', function(_0x4a266d) {
                window['unityInstance']['SendMessage'](_0x189849, _0x2e1acf, JSON['stringify'](_0x4a266d['val']()));
            });
        } catch (_0x341b9a) {
            window['unityInstance']['SendMessage'](_0x189849, _0x57c57b, JSON['stringify'](_0x341b9a, Object['getOwnPropertyNames'](_0x341b9a)));
        }
    }
    function _0x4827b0(_0x3bfab0) {
        var _0x3d9916 = _0x46211(_0x3bfab0);
        firebaseLogEvent(_0x3d9916);
    }
    function _0x52dfb8(_0x29a0d5, _0x458524) {
        var _0x2498d1 = _0x46211(_0x29a0d5)
          , _0x59703c = JSON['parse'](_0x46211(_0x458524));
        firebaseLogEventParameter(_0x2498d1, _0x59703c);
    }
    function _0x40ad62(_0x28b04e) {
        document['makeFullscreen'](_0x46211(_0x28b04e));
    }
    function _0x47afbc(_0x7d1726, _0x2f2d63, _0x94d7c7, _0x3c6e5a, _0x1ba95f) {
        var _0x1aed25 = _0x46211(_0x7d1726)
          , _0x4f2047 = _0x46211(_0x94d7c7)
          , _0x416461 = _0x46211(_0x3c6e5a)
          , _0x380b2d = _0x46211(_0x1ba95f);
        try {
            firebase['database']()['ref'](_0x1aed25)['transaction'](function(_0x5d6a1f) {
                return !isNaN(_0x5d6a1f) ? _0x5d6a1f + _0x2f2d63 : _0x2f2d63;
            })['then'](function(_0x17057b) {
                window['unityInstance']['SendMessage'](_0x4f2047, _0x416461, 'Success: transaction run in ' + _0x1aed25);
            });
        } catch (_0x1d7b51) {
            window['unityInstance']['SendMessage'](_0x4f2047, _0x380b2d, JSON['stringify'](_0x1d7b51, Object['getOwnPropertyNames'](_0x1d7b51)));
        }
    }
    function _0xa2243e(_0x1c9534, _0x1fcdae, _0x27f3bd) {
        var _0x25d0be = _0x46211(_0x1c9534)
          , _0xf179ef = _0x46211(_0x1fcdae)
          , _0x5d55f4 = _0x46211(_0x27f3bd);
        firebase['auth']()['onAuthStateChanged'](function(_0x458b66) {
            _0x458b66 ? window['unityInstance']['SendMessage'](_0x25d0be, _0xf179ef, JSON['stringify'](_0x458b66)) : window['unityInstance']['SendMessage'](_0x25d0be, _0x5d55f4, 'User signed out');
        });
    }
    function _0x34164b(_0x52f22c) {
        window['wgUnityInstance'] = _0x1455c0;
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: WeeGoo InGame Ad, pinging.'),
            window[preroll['config']['loaderObjectName']]['ping'](_0x52f22c);
        } catch (_0x18f9f2) {
            console['log']('WGSDK: No production WGSDK resources found, loading development resources.');
            var _0x3df5d2 = document['createElement']('script');
            _0x3df5d2['addEventListener']('load', function(_0xab4cce) {
                var _0x8423bd = document['createElement']('script');
                _0x8423bd['addEventListener']('load', function(_0x9e371) {
                    console['log']('WGSDK: Development resources loaded.'),
                    _0x91566d(_0x52f22c, !![]);
                }
                ['bind'](this)),
                document['getElementsByTagName']('head')[0x0]['appendChild'](_0x8423bd),
                _0x8423bd['src'] = window['GMSOFT_ADS_INFO']['wgLibrary'];
            }
            ['bind'](this)),
            document['getElementsByTagName']('head')[0x0]['appendChild'](_0x3df5d2),
            _0x3df5d2['src'] = window['GMSOFT_ADS_INFO']['wgConf'];
        }
    }
    function _0x91566d(_0xc1d494, _0x459552) {
        var _0x2aea66;
        _0x459552 === !![] ? _0x2aea66 = _0xc1d494 : _0x2aea66 = _0x46211(_0xc1d494),
        setTimeout(function() {
            _0x34164b(_0x2aea66);
        }, 0xfa);
    }
    function _0x3282a9(_0x5da185, _0x3acffe, _0x470dfe, _0x328cc3, _0x4221e3) {
        var _0x48668e = _0x46211(_0x5da185)
          , _0x55f8dd = _0x46211(_0x3acffe)
          , _0x5ade0f = _0x46211(_0x470dfe)
          , _0x5d193a = _0x46211(_0x328cc3)
          , _0x5657ca = _0x46211(_0x4221e3);
        try {
            firebase['database']()['ref'](_0x48668e)['set'](JSON['parse'](_0x55f8dd))['then'](function(_0x32526a) {
                window['unityInstance']['SendMessage'](_0x5ade0f, _0x5d193a, 'Success: ' + _0x55f8dd + ' was posted to ' + _0x48668e);
            });
        } catch (_0x47601c) {
            window['unityInstance']['SendMessage'](_0x5ade0f, _0x5657ca, JSON['stringify'](_0x47601c, Object['getOwnPropertyNames'](_0x47601c)));
        }
    }
    function _0x7a83a2(_0x3a12dc, _0x1a3ef2, _0x24e503, _0x357268, _0x307880) {
        var _0x1234d0 = _0x46211(_0x3a12dc)
          , _0x17dec1 = _0x46211(_0x1a3ef2)
          , _0x180804 = _0x46211(_0x24e503)
          , _0x500759 = _0x46211(_0x357268)
          , _0x2b54ae = _0x46211(_0x307880);
        try {
            firebase['database']()['ref'](_0x1234d0)['push']()['set'](JSON['parse'](_0x17dec1))['then'](function(_0x1ed604) {
                window['unityInstance']['SendMessage'](_0x180804, _0x500759, 'Success: ' + _0x17dec1 + ' was pushed to ' + _0x1234d0);
            });
        } catch (_0x35bc68) {
            window['unityInstance']['SendMessage'](_0x180804, _0x2b54ae, JSON['stringify'](_0x35bc68, Object['getOwnPropertyNames'](_0x35bc68)));
        }
    }
    function _0x1ccea0(_0x4daa07) {
        _0x4daa07 = _0x74c98b(_0x4daa07),
        window['open'](_0x4daa07);
    }
    function _0x2150fa() {
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: Refetching reward ad.'),
            window[preroll['config']['loaderObjectName']]['rewarded']['initSlot']['call'](window[preroll['config']['loaderObjectName']]);
        } catch (_0x307f08) {
            console['log']('No WeeGooAFG implementation found!');
        }
    }
    function _0x4031b5() {
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: Game controls registered.'),
            window[window['preroll']['config']['loaderObjectName']]['registerGameControls'](_0x1455c0);
        } catch (_0x1b6f7d) {
            console['log']('WGSDK: Can not register game controls.'),
            setTimeout(function() {
                _0x4031b5();
            }, 0xfa);
        }
    }
    function _0x34d5a5() {
        window['onbeforeunload'] = function(_0x394b2d) {
            typeof _0xe42c6d === 'function' && _0xe42c6d('CanvasLoading', 'OnTabCloseDetected');
        }
        ;
    }
    function _0x5d46f2() {
        try {
            window[preroll['config']['loaderObjectName']]['log']('WGSDK: Reward callbacks registered.'),
            window[window['preroll']['config']['loaderObjectName']]['registerRewardCallbacks']({
                'onReady': 'OnReadyMethod',
                'onSuccess': 'OnSuccessMethod',
                'onFail': 'OnFailMethod'
            });
        } catch (_0x26a2a0) {
            console['log']('WGSDK: Can not register reward ad callbacks.'),
            _0x17e9c7();
        }
    }
    function _0x17e9c7() {
        setTimeout(function() {
            _0x5d46f2();
        }, 0xfa);
    }
    function _0x3b98d5(_0x2a5284, _0x4193da, _0x243811, _0x379c06, _0x16d88e, _0x3dab06, _0x2dd961) {
        var _0x37d822 = _0x46211(_0x2a5284)
          , _0x46704d = _0x46211(_0x4193da)
          , _0x5f0451 = _0x46211(_0x243811)
          , _0x487573 = _0x46211(_0x379c06)
          , _0x397110 = _0x46211(_0x16d88e)
          , _0x20b56f = _0x46211(_0x3dab06)
          , _0x1c5080 = _0x46211(_0x2dd961);
        try {
            var _0x379c06 = {};
            _0x379c06[_0x5f0451] = firebase['firestore']['FieldValue']['arrayRemove'](JSON['parse'](_0x487573)),
            firebase['firestore']()['collection'](_0x37d822)['doc'](_0x46704d)['update'](_0x379c06)['then'](function() {
                window['unityInstance']['SendMessage'](_0x397110, _0x20b56f, 'Success: element ' + _0x487573 + ' was removed in ' + _0x5f0451);
            })['catch'](function(_0x5a84bb) {
                window['unityInstance']['SendMessage'](_0x397110, _0x1c5080, JSON['stringify'](_0x5a84bb, Object['getOwnPropertyNames'](_0x5a84bb)));
            });
        } catch (_0x28d2aa) {
            window['unityInstance']['SendMessage'](_0x397110, _0x1c5080, JSON['stringify'](_0x28d2aa, Object['getOwnPropertyNames'](_0x28d2aa)));
        }
    }
    function _0x255447(_0x59dcca) {
        var _0x113f69 = window['unityStringify'](_0x59dcca)
          , _0xbb40f2 = {
            'adStarted': function() {
                window['UnitySDK']['unlockPointer'](),
                _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdStarted');
            },
            'adFinished': function() {
                window['UnitySDK']['lockPointer'](),
                _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdFinished');
            },
            'adError': function(_0x4aabcc) {
                _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdError', JSON['stringify'](_0x4aabcc));
            }
        };
        window['CrazyGames']['SDK']['ad']['requestAd'](_0x113f69, _0xbb40f2)['catch'](function(_0x45e497) {
            window['UnitySDK']['logError']('Error while requesting ad:', _0x45e497),
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_AdError', JSON['stringify']({
                'code': 'unknown',
                'message': _0x45e497['message'] || 'Unknown error'
            }));
        });
    }
    function _0x180dc6(_0x2a8ba1) {
        var _0x54714b = JSON['parse'](window['unityStringify'](_0x2a8ba1));
        try {
            window['CrazyGames']['SDK']['banner']['requestOverlayBanners'](_0x54714b, function(_0x1a339a, _0x4c433e, _0x50bad6) {});
        } catch (_0x3a1e43) {
            window['UnitySDK']['logError']('Error while requesting banners:', _0x3a1e43);
        }
    }
    function _0x281fe0(_0x13dc53) {
        var _0x3fad69 = JSON['parse'](window['unityStringify'](_0x13dc53))
          , _0x10520b = '';
        try {
            _0x10520b = window['CrazyGames']['SDK']['game']['inviteLink'](_0x3fad69);
        } catch (_0x173c2f) {
            window['UnitySDK']['logError']('Error while requesting invite url:', _0x173c2f);
        }
        var _0x2bed22 = _0x5a6a49(_0x10520b) + 0x1
          , _0x3414f8 = _0x214635(_0x2bed22);
        return _0x430ff7(_0x10520b, _0x3414f8, _0x2bed22),
        _0x3414f8;
    }
    function _0x41d591(_0x5a3af2) {
        _0x5a3af2 = _0x46211(_0x5a3af2),
        window['GD_OPTIONS'] = {
            'debug': ![],
            'gameId': _0x5a3af2,
            'onEvent': function(_0x153677) {
                switch (_0x153677['name']) {
                case 'SDK_GAME_START':
                    _0xe42c6d('GameDistribution', 'ResumeGameCallback');
                    break;
                case 'SDK_GAME_PAUSE':
                    _0xe42c6d('GameDistribution', 'PauseGameCallback');
                    break;
                case 'SDK_REWARDED_WATCH_COMPLETE':
                    _0xe42c6d('GameDistribution', 'RewardedCompleteCallback');
                    break;
                case 'SDK_ERROR':
                    break;
                default:
                    _0xe42c6d('GameDistribution', 'EventCallback', _0x153677['name']);
                }
            }
        },
        function(_0x3af3dc, _0x32ef10, _0x19b2d7) {
            var _0x3e9b81, _0x5f2e65 = _0x3af3dc['getElementsByTagName'](_0x32ef10)[0x0];
            if (_0x3af3dc['getElementById'](_0x19b2d7))
                return;
            _0x3e9b81 = _0x3af3dc['createElement'](_0x32ef10),
            _0x3e9b81['id'] = _0x19b2d7,
            _0x3e9b81['src'] = '//html5.api.gamedistribution.com/main.min.js',
            _0x5f2e65['parentNode']['insertBefore'](_0x3e9b81, _0x5f2e65);
        }(document, 'script', 'gamedistribution-jssdk');
    }
    function _0x563641() {
        typeof gdsdk !== 'undefined' && typeof gdsdk['preloadAd'] !== 'undefined' && gdsdk['preloadAd'](gdsdk['AdType']['Rewarded'])['then'](function(_0x326876) {
            _0xe42c6d('GameDistribution', 'PreloadRewardedVideoCallback', 0x1);
        })['catch'](function(_0x48ba84) {
            _0xe42c6d('GameDistribution', 'PreloadRewardedVideoCallback', 0x0);
        });
    }
    function _0x3d8e66(_0x4ac228) {
        _0x4ac228 = _0x46211(_0x4ac228),
        typeof gdsdk !== 'undefined' && typeof gdsdk['sendEvent'] !== 'undefined' && typeof _0x4ac228 !== 'undefined' && gdsdk['sendEvent'](_0x4ac228)['then'](function(_0x2c14be) {
            console['log']('Game event post message sent Succesfully...');
        })['catch'](function(_0x42b7c1) {
            console['log'](_0x42b7c1['message']);
        });
    }
    function _0x4e6172(_0x5c1c91) {
        typeof gdsdk !== 'undefined' && typeof gdsdk['showAd'] !== 'undefined' && (_0x5c1c91 = _0x46211(_0x5c1c91) || gdsdk['AdType']['Interstitial'],
        gdsdk['showAd'](_0x5c1c91)['then'](function(_0x3341ce) {
            _0x5c1c91 === gdsdk['AdType']['Rewarded'] && _0xe42c6d('GameDistribution', 'RewardedVideoSuccessCallback');
        })['catch'](function(_0x47df3b) {
            _0x5c1c91 === gdsdk['AdType']['Rewarded'] && _0xe42c6d('GameDistribution', 'RewardedVideoFailureCallback');
        }));
    }
    function _0x685af(_0x20f73c, _0x3c8e16, _0x57cd1b, _0x13647d, _0x41bcc5, _0x52ef60) {
        var _0x7a5516 = _0x46211(_0x20f73c)
          , _0x3fe2d2 = _0x46211(_0x3c8e16)
          , _0x4e549b = _0x46211(_0x57cd1b)
          , _0x491457 = _0x46211(_0x13647d)
          , _0xdfc429 = _0x46211(_0x41bcc5)
          , _0x51ef7a = _0x46211(_0x52ef60);
        try {
            firebase['firestore']()['collection'](_0x7a5516)['doc'](_0x3fe2d2)['set'](JSON['parse'](_0x4e549b))['then'](function() {
                window['unityInstance']['SendMessage'](_0x491457, _0xdfc429, 'Success: document ' + _0x3fe2d2 + ' was set');
            })['catch'](function(_0x1cb32d) {
                window['unityInstance']['SendMessage'](_0x491457, _0x51ef7a, JSON['stringify'](_0x1cb32d, Object['getOwnPropertyNames'](_0x1cb32d)));
            });
        } catch (_0x151656) {
            window['unityInstance']['SendMessage'](_0x491457, _0x51ef7a, JSON['stringify'](_0x151656, Object['getOwnPropertyNames'](_0x151656)));
        }
    }
    function _0x2c15a3(_0x419bdf) {
        var _0xb12a12 = JSON['parse'](_0x46211(_0x419bdf));
        firebaseSetUserProperties(_0xb12a12);
    }
    function _0x23a863() {
        window['CrazyGames']['SDK']['user']['showAccountLinkPrompt']()['then'](function(_0x6e6073) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_ShowAccountLinkPrompt', JSON['stringify']({
                'linkAccountResponseStr': JSON['stringify'](_0x6e6073)
            }));
        })['catch'](function(_0x174d99) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_ShowAccountLinkPrompt', JSON['stringify']({
                'errorJson': JSON['stringify'](_0x174d99)
            }));
        });
    }
    function _0x5cc032() {
        window['CrazyGames']['SDK']['user']['showAuthPrompt']()['then'](function(_0x1cae5c) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_ShowAuthPrompt', JSON['stringify']({
                'userJson': JSON['stringify'](_0x1cae5c)
            }));
        })['catch'](function(_0x409476) {
            _0xe42c6d('CrazySDKSingleton', 'JSLibCallback_ShowAuthPrompt', JSON['stringify']({
                'errorJson': JSON['stringify'](_0x409476)
            }));
        });
    }
    function _0x412cb4(_0x34565f) {
        var _0x3460a3 = JSON['parse'](window['unityStringify'](_0x34565f))
          , _0x3a5251 = '';
        try {
            _0x3a5251 = window['CrazyGames']['SDK']['game']['showInviteButton'](_0x3460a3);
        } catch (_0x3f576b) {
            window['UnitySDK']['logError']('Error while showing invite button:', _0x3f576b);
        }
        var _0x4b68eb = _0x5a6a49(_0x3a5251) + 0x1
          , _0x233977 = _0x214635(_0x4b68eb);
        return _0x430ff7(_0x3a5251, _0x233977, _0x4b68eb),
        _0x233977;
    }
    function _0x27a105() {
        window[preroll['config']['loaderObjectName']]['showRewardAd']();
    }
    function _0xf73c3a(_0x10a062, _0x4f300b, _0x5d4254) {
        var _0x56d1fe = _0x46211(_0x10a062)
          , _0x1df7ad = _0x46211(_0x4f300b)
          , _0x2a8d6d = _0x46211(_0x5d4254);
        try {
            firebase['auth']()['signInAnonymously']()['then'](function(_0x1b441f) {
                window['unityInstance']['SendMessage'](_0x56d1fe, _0x1df7ad, 'Success: signed up for ' + _0x1b441f);
            })['catch'](function(_0x3067b0) {
                window['unityInstance']['SendMessage'](_0x56d1fe, _0x2a8d6d, JSON['stringify'](_0x3067b0, Object['getOwnPropertyNames'](_0x3067b0)));
            });
        } catch (_0x23809e) {
            window['unityInstance']['SendMessage'](_0x56d1fe, _0x2a8d6d, JSON['stringify'](_0x23809e, Object['getOwnPropertyNames'](_0x23809e)));
        }
    }
    function _0x120322(_0x5ea259, _0x3954e5, _0x13d5bb, _0xa52c9e, _0x11cb83) {
        var _0x1638d2 = _0x46211(_0x5ea259)
          , _0x22a795 = _0x46211(_0x3954e5)
          , _0x11357f = _0x46211(_0x13d5bb)
          , _0x6b8733 = _0x46211(_0xa52c9e)
          , _0x172d16 = _0x46211(_0x11cb83);
        try {
            firebase['auth']()['signInWithEmailAndPassword'](_0x1638d2, _0x22a795)['then'](function(_0x13f761) {
                window['unityInstance']['SendMessage'](_0x11357f, _0x6b8733, 'Success: signed in for ' + _0x1638d2);
            })['catch'](function(_0x7ebf52) {
                window['unityInstance']['SendMessage'](_0x11357f, _0x172d16, JSON['stringify'](_0x7ebf52, Object['getOwnPropertyNames'](_0x7ebf52)));
            });
        } catch (_0x3db55f) {
            window['unityInstance']['SendMessage'](_0x11357f, _0x172d16, JSON['stringify'](_0x3db55f, Object['getOwnPropertyNames'](_0x3db55f)));
        }
    }
    function _0x490b46(_0x345130, _0x1cfe08, _0x5cbd77) {
        var _0x282341 = _0x46211(_0x345130)
          , _0x21b8bb = _0x46211(_0x1cfe08)
          , _0x5a337c = _0x46211(_0x5cbd77);
        try {
            var _0x292d8c = new firebase['auth']['FacebookAuthProvider']();
            firebase['auth']()['signInWithRedirect'](_0x292d8c)['then'](function(_0x5bbd48) {
                window['unityInstance']['SendMessage'](_0x282341, _0x21b8bb, 'Success: signed in with Facebook!');
            })['catch'](function(_0x5cc848) {
                window['unityInstance']['SendMessage'](_0x282341, _0x5a337c, JSON['stringify'](_0x5cc848, Object['getOwnPropertyNames'](_0x5cc848)));
            });
        } catch (_0x3ff5b8) {
            window['unityInstance']['SendMessage'](_0x282341, _0x5a337c, JSON['stringify'](_0x3ff5b8, Object['getOwnPropertyNames'](_0x3ff5b8)));
        }
    }
    function _0x22219d(_0x4078db, _0x56b7b2, _0x3ecc5c) {
        var _0x289baa = _0x46211(_0x4078db)
          , _0x3afd5e = _0x46211(_0x56b7b2)
          , _0x92a803 = _0x46211(_0x3ecc5c);
        try {
            var _0x3c114e = new firebase['auth']['GoogleAuthProvider']();
            firebase['auth']()['signInWithRedirect'](_0x3c114e)['then'](function(_0x3d00d8) {
                window['unityInstance']['SendMessage'](_0x289baa, _0x3afd5e, 'Success: signed in with Google!');
            })['catch'](function(_0x3c1b2b) {
                window['unityInstance']['SendMessage'](_0x289baa, _0x92a803, JSON['stringify'](_0x3c1b2b, Object['getOwnPropertyNames'](_0x3c1b2b)));
            });
        } catch (_0x1309fb) {
            window['unityInstance']['SendMessage'](_0x289baa, _0x92a803, JSON['stringify'](_0x1309fb, Object['getOwnPropertyNames'](_0x1309fb)));
        }
    }
    function _0x41088c(_0x5195b4, _0x30a30f, _0x3f1c8f, _0x4c4bfd) {
        var _0x9a07fc = _0x46211(_0x5195b4)
          , _0x25a363 = _0x46211(_0x30a30f)
          , _0x26713b = _0x46211(_0x3f1c8f)
          , _0xb44437 = _0x46211(_0x4c4bfd);
        try {
            firebase['database']()['ref'](_0x9a07fc)['off']('child_added'),
            window['unityInstance']['SendMessage'](_0x25a363, _0x26713b, 'Success: listener removed');
        } catch (_0x549165) {
            window['unityInstance']['SendMessage'](_0x25a363, _0xb44437, JSON['stringify'](_0x549165, Object['getOwnPropertyNames'](_0x549165)));
        }
    }
    function _0x1b396d(_0x54d15f, _0x1ea889, _0x3b226d, _0xc75d6f) {
        var _0x155782 = _0x46211(_0x54d15f)
          , _0xdc44bb = _0x46211(_0x1ea889)
          , _0x5b58f7 = _0x46211(_0x3b226d)
          , _0x3d45a1 = _0x46211(_0xc75d6f);
        try {
            firebase['database']()['ref'](_0x155782)['off']('child_changed'),
            window['unityInstance']['SendMessage'](_0xdc44bb, _0x5b58f7, 'Success: listener removed');
        } catch (_0x9258a5) {
            window['unityInstance']['SendMessage'](_0xdc44bb, _0x3d45a1, JSON['stringify'](_0x9258a5, Object['getOwnPropertyNames'](_0x9258a5)));
        }
    }
    function _0x53b64d(_0x3d9067, _0x32f9f5, _0x15c3dd, _0x465a3d) {
        var _0x231b13 = _0x46211(_0x3d9067)
          , _0x59e08b = _0x46211(_0x32f9f5)
          , _0x52670d = _0x46211(_0x15c3dd)
          , _0x567e89 = _0x46211(_0x465a3d);
        try {
            firebase['database']()['ref'](_0x231b13)['off']('child_removed'),
            window['unityInstance']['SendMessage'](_0x59e08b, _0x52670d, 'Success: listener removed');
        } catch (_0x5797c6) {
            window['unityInstance']['SendMessage'](_0x59e08b, _0x567e89, JSON['stringify'](_0x5797c6, Object['getOwnPropertyNames'](_0x5797c6)));
        }
    }
    function _0x3755d5(_0x1f5c9b, _0x31f805, _0x49cb8c, _0x3acd42) {
        var _0x53bc9a = _0x46211(_0x1f5c9b)
          , _0x2d9b3e = _0x46211(_0x31f805)
          , _0x2699dd = _0x46211(_0x49cb8c)
          , _0x3dfc9d = _0x46211(_0x3acd42);
        try {
            if (typeof firestorelisteners === 'undefined')
                firestorelisteners = {};
            this['firestorelisteners'][_0x53bc9a + '/collection/'](),
            window['unityInstance']['SendMessage'](_0x2d9b3e, _0x2699dd, 'Success: listener was removed');
        } catch (_0x3b6941) {
            window['unityInstance']['SendMessage'](_0x2d9b3e, _0x3dfc9d, JSON['stringify'](_0x3b6941, Object['getOwnPropertyNames'](_0x3b6941)));
        }
    }
    function _0x2166ee(_0x27c698, _0x4e76a5, _0x5399f9, _0x5bfae0, _0xe801fc) {
        var _0x5eac90 = _0x46211(_0x27c698)
          , _0x26458c = _0x46211(_0x4e76a5)
          , _0x4783e3 = _0x46211(_0x5399f9)
          , _0x907d92 = _0x46211(_0x5bfae0)
          , _0x5707a4 = _0x46211(_0xe801fc);
        try {
            if (typeof firestorelisteners === 'undefined')
                firestorelisteners = {};
            this['firestorelisteners'][_0x5eac90 + '/' + _0x26458c](),
            window['unityInstance']['SendMessage'](_0x4783e3, _0x907d92, 'Success: listener was removed');
        } catch (_0x19d62f) {
            window['unityInstance']['SendMessage'](_0x4783e3, _0x5707a4, JSON['stringify'](_0x19d62f, Object['getOwnPropertyNames'](_0x19d62f)));
        }
    }
    function _0x296828(_0x2d734d, _0x13d016, _0x3f8f25, _0x5c9079) {
        var _0x269fd0 = _0x46211(_0x2d734d)
          , _0x447a64 = _0x46211(_0x13d016)
          , _0x26be34 = _0x46211(_0x3f8f25)
          , _0x14ad3f = _0x46211(_0x5c9079);
        try {
            firebase['database']()['ref'](_0x269fd0)['off']('value'),
            window['unityInstance']['SendMessage'](_0x447a64, _0x26be34, 'Success: listener removed');
        } catch (_0x44a2c8) {
            window['unityInstance']['SendMessage'](_0x447a64, _0x14ad3f, JSON['stringify'](_0x44a2c8, Object['getOwnPropertyNames'](_0x44a2c8)));
        }
    }
    function _0xf33e99() {
        try {
            window['CrazyGames']['SDK']['data']['syncUnityGameData']();
        } catch (_0x2f706c) {
            window['UnitySDK']['logError']('Error while calling syncUnityGameData:', _0x2f706c);
        }
    }
    function _0x579516(_0x535e1b, _0x3ea6a6, _0x1516ec, _0x1dfcae) {
        var _0x188a52 = _0x46211(_0x535e1b)
          , _0x219e88 = _0x46211(_0x3ea6a6)
          , _0x34b75b = _0x46211(_0x1516ec)
          , _0x98c383 = _0x46211(_0x1dfcae);
        try {
            firebase['database']()['ref'](_0x188a52)['transaction'](function(_0x3110bd) {
                return typeof _0x3110bd === 'boolean' ? !_0x3110bd : !![];
            })['then'](function(_0x41d7cc) {
                window['unityInstance']['SendMessage'](_0x219e88, _0x34b75b, 'Success: transaction run in ' + _0x188a52);
            });
        } catch (_0x501f5e) {
            window['unityInstance']['SendMessage'](_0x219e88, _0x98c383, JSON['stringify'](_0x501f5e, Object['getOwnPropertyNames'](_0x501f5e)));
        }
    }
    function _0x2ec2b7(_0x388203, _0xfa0490, _0x5befd6, _0x122942, _0x454955, _0x1b5384) {
        var _0x30128b = _0x46211(_0x388203)
          , _0x244a74 = _0x46211(_0xfa0490)
          , _0x312293 = _0x46211(_0x5befd6)
          , _0x2ea0fe = _0x46211(_0x122942)
          , _0x500410 = _0x46211(_0x454955)
          , _0x3268cc = _0x46211(_0x1b5384);
        try {
            firebase['firestore']()['collection'](_0x30128b)['doc'](_0x244a74)['update'](JSON['parse'](_0x312293))['then'](function() {
                window['unityInstance']['SendMessage'](_0x2ea0fe, _0x500410, 'Success: document ' + _0x244a74 + ' was updated');
            })['catch'](function(_0x35239c) {
                window['unityInstance']['SendMessage'](_0x2ea0fe, _0x3268cc, JSON['stringify'](_0x35239c, Object['getOwnPropertyNames'](_0x35239c)));
            });
        } catch (_0x19bc90) {
            window['unityInstance']['SendMessage'](_0x2ea0fe, _0x3268cc, JSON['stringify'](_0x19bc90, Object['getOwnPropertyNames'](_0x19bc90)));
        }
    }
    function _0x46c950(_0x101b61, _0x34ed71, _0x1651a2, _0x55f3c1, _0x3d8fca) {
        var _0x10c619 = _0x46211(_0x101b61)
          , _0x28f2c4 = _0x46211(_0x34ed71)
          , _0x54f73b = _0x46211(_0x1651a2)
          , _0x1d8641 = _0x46211(_0x55f3c1)
          , _0x58cfb5 = _0x46211(_0x3d8fca);
        try {
            firebase['database']()['ref'](_0x10c619)['update'](JSON['parse'](_0x28f2c4))['then'](function(_0x333610) {
                window['unityInstance']['SendMessage'](_0x54f73b, _0x1d8641, 'Success: ' + _0x28f2c4 + ' was updated in ' + _0x10c619);
            });
        } catch (_0x4280c7) {
            window['unityInstance']['SendMessage'](_0x54f73b, _0x58cfb5, JSON['stringify'](_0x4280c7, Object['getOwnPropertyNames'](_0x4280c7)));
        }
    }
    function _0x1d2edb(_0x5d1536, _0x5e01b2, _0x4269a6, _0x471903, _0x3edcef) {
        var _0x1af00f = _0x46211(_0x5d1536)
          , _0x554538 = _0x46211(_0x5e01b2)
          , _0x4cc202 = _0x46211(_0x4269a6)
          , _0x25d573 = _0x46211(_0x471903)
          , _0xcfd9a4 = _0x46211(_0x3edcef);
        try {
            firebase['storage']()['ref'](_0x1af00f)['put'](_0x52e1c3(_0x554538))['then'](function(_0x517572) {
                window['unityInstance']['SendMessage'](_0x4cc202, _0x25d573, 'Success: data was posted to ' + _0x1af00f);
            });
        } catch (_0x31231a) {
            window['unityInstance']['SendMessage'](_0x4cc202, _0xcfd9a4, JSON['stringify'](_0x31231a, Object['getOwnPropertyNames'](_0x31231a)));
        }
        function _0x52e1c3(_0x353768) {
            var _0x2b63a7 = window['atob'](_0x353768)
              , _0x2e9d43 = _0x2b63a7['length']
              , _0x30a8f6 = new Uint8Array(_0x2e9d43);
            for (var _0x1153d3 = 0x0; _0x1153d3 < _0x2e9d43; _0x1153d3++) {
                _0x30a8f6[_0x1153d3] = _0x2b63a7['charCodeAt'](_0x1153d3);
            }
            return _0x30a8f6['buffer'];
        }
    }
    function _0x4a0f59(_0x244533) {
        _0x244533 = _0x46211(_0x244533);
        let _0x491f96 = document['createElement']('input');
        _0x491f96['type'] = 'file',
        _0x491f96['accept'] = '.mp3',
        _0x491f96['style']['display'] = 'none',
        _0x491f96['onchange'] = () => {
            _0xe42c6d('SongUploader', 'LoadingPanel', 'open');
            let _0x2aee06 = _0x491f96['files'][0x0];
            if (!_0x2aee06) {
                console['log']('empty_file'),
                _0xe42c6d('SongUploader', 'OnFileUploadError', 'empty_file');
                return;
            }
            if (_0x2aee06['type'] !== 'audio/mpeg') {
                console['log']('invalid_file_type'),
                _0xe42c6d('SongUploader', 'OnFileUploadError', 'invalid_file_type');
                return;
            }
            if (_0x2aee06['size'] > 0x5 * 0x400 * 0x400) {
                console['log']('max_exceed_file_size'),
                _0xe42c6d('SongUploader', 'OnFileUploadError', 'max_exceed_file_size');
                return;
            }
            let _0x5c5301 = new FormData();
            _0x5c5301['append']('file', _0x2aee06),
            _0x5c5301['append']('payload', _0x244533),
            fetch('https://api.1games.io/sound/upload', {
                'method': 'POST',
                'body': _0x5c5301
            })['then'](_0x5330c1 => _0x5330c1['text']())['then'](_0x3f7a8b => {
                _0xe42c6d('SongUploader', 'OnFileUploaded', _0x3f7a8b),
                console['log']('AFTER UPLOAD'),
                _0xe42c6d('SongUploader', 'LoadingPanel', 'close');
            }
            )['catch'](_0x57afce => {
                console['error']('Upload error', _0x57afce),
                _0xe42c6d('SongUploader', 'OnFileUploadError', 'upload_file_error'),
                console['log']('AFTER UPLOAD ERR'),
                _0xe42c6d('SongUploader', 'LoadingPanel', 'close');
            }
            );
        }
        ,
        document['body']['appendChild'](_0x491f96),
        _0x491f96['click'](),
        setTimeout( () => _0x491f96['remove'](), 0x3e8);
    }
    var _0x3e0ffd = [];
    function _0x47e5dd(_0x444425, _0x20c451, _0x4331fb, _0x99c0db, _0x5a38cf, _0x4299fe, _0x15bae8, _0x2900bf, _0x5b0dd5, _0x501462, _0x4dc49a, _0x5f1e54) {
        var _0x5614ea = document['getElementById'](_0x46211(_0x444425))
          , _0x3f43da = _0x5614ea['getElementsByTagName']('canvas')[0x0];
        !_0x5614ea && _0x3f43da && (_0x5614ea = _0x3f43da['parentNode']);
        if (_0x3f43da) {
            var _0x12fc5c = _0x5614ea['offsetWidth'] / _0x3f43da['width']
              , _0x2dded9 = _0x5614ea['offsetHeight'] / _0x3f43da['height'];
            _0x12fc5c && _0x2dded9 && (_0x20c451 *= _0x12fc5c,
            _0x99c0db *= _0x12fc5c,
            _0x4331fb *= _0x2dded9,
            _0x5a38cf *= _0x2dded9);
        }
        var _0xf96df4 = document['createElement'](_0x5b0dd5 ? 'textarea' : 'input');
        return _0xf96df4['style']['position'] = 'absolute',
        _0x5f1e54 ? (_0xf96df4['style']['bottom'] = 0x1 + 'vh',
        _0xf96df4['style']['left'] = 0x5 + 'vw',
        _0xf96df4['style']['width'] = 0x5a + 'vw',
        _0xf96df4['style']['height'] = (_0x5b0dd5 ? 0x12 : 0xa) + 'vh',
        _0xf96df4['style']['fontSize'] = 0x5 + 'vh',
        _0xf96df4['style']['borderWidth'] = 0x5 + 'px',
        _0xf96df4['style']['borderColor'] = '#000000') : (_0xf96df4['style']['top'] = _0x4331fb + 'px',
        _0xf96df4['style']['left'] = _0x20c451 + 'px',
        _0xf96df4['style']['width'] = _0x99c0db + 'px',
        _0xf96df4['style']['height'] = _0x5a38cf + 'px',
        _0xf96df4['style']['fontSize'] = _0x4299fe + 'px'),
        _0xf96df4['style']['outlineWidth'] = 0x1 + 'px',
        _0xf96df4['style']['opacity'] = _0x4dc49a ? 0x0 : 0x1,
        _0xf96df4['style']['resize'] = 'none',
        _0xf96df4['style']['padding'] = '0px 1px',
        _0xf96df4['style']['cursor'] = 'default',
        _0xf96df4['style']['touchAction'] = 'none',
        _0xf96df4['spellcheck'] = ![],
        _0xf96df4['value'] = _0x46211(_0x15bae8),
        _0xf96df4['placeholder'] = _0x46211(_0x2900bf),
        _0xf96df4['style']['outlineColor'] = 'black',
        _0x501462 && (_0xf96df4['type'] = 'password'),
        _0x5f1e54 ? document['body']['appendChild'](_0xf96df4) : _0x5614ea['appendChild'](_0xf96df4),
        _0x3e0ffd['push'](_0xf96df4) - 0x1;
    }
    function _0x2db508(_0x145255) {
        var _0x353b44 = _0x3e0ffd[_0x145255];
        _0x353b44['parentNode']['removeChild'](_0x353b44),
        _0x3e0ffd[_0x145255] = null;
    }
    function _0x2cf8fa(_0x39e23b, _0x19675e) {
        var _0x4488fb = _0x3e0ffd[_0x39e23b];
        _0x4488fb['addEventListener']('keydown', function(_0x3da1bf) {
            (_0x3da1bf['which'] && _0x3da1bf['which'] === 0xd || _0x3da1bf['keyCode'] && _0x3da1bf['keyCode'] === 0xd) && (_0x19675e && (_0x3da1bf['preventDefault'](),
            _0x4488fb['blur']()));
        });
    }
    function _0x234983(_0x46675f) {
        var _0x10899e = _0x3e0ffd[_0x46675f];
        _0x10899e['focus']();
    }
    function _0xcf6349(_0x252bf4) {
        var _0xa1b4ae = _0x3e0ffd[_0x252bf4];
        _0xa1b4ae['blur']();
    }
    function _0x55dd69() {
        if (typeof _0x45b917 === 'undefined')
            Runtime = {
                'dynCall': undefined
            };
        else {
            if (typeof Runtime === 'undefined')
                Runtime = {
                    'dynCall': _0x45b917
                };
        }
    }
    function _0x3b7652(_0x1df93c) {
        return _0x3e0ffd[_0x1df93c] === document['activeElement'];
    }
    function _0x134c06(_0x386366, _0x42b81f) {
        var _0x67e29b = _0x3e0ffd[_0x386366];
        _0x67e29b['maxLength'] = _0x42b81f;
    }
    function _0x3f8005(_0x4f4bd1, _0x15adca) {
        document['body']['addEventListener']('focusout', function() {
            document['body']['removeEventListener']('focusout', arguments['callee']),
            Runtime['dynCall']('vi', _0x15adca, [_0x4f4bd1]);
        });
    }
    function _0x40b585(_0x584bc8) {
        var _0x18ec3f = _0x3e0ffd['push'](null) - 0x1;
        return document['body']['addEventListener']('touchend', function() {
            document['body']['removeEventListener']('touchend', arguments['callee']),
            Runtime['dynCall']('vi', _0x584bc8, [_0x18ec3f]);
        }),
        _0x18ec3f;
    }
    function _0x5beb42(_0x51fdf8, _0x3fe81e) {
        var _0x682045 = _0x3e0ffd[_0x51fdf8];
        _0x682045['onblur'] = function() {
            !!Runtime['dynCall'] ? Runtime['dynCall']('vi', _0x3fe81e, [_0x51fdf8]) : function(_0x4a7148) {
                _0x2d1c65['apply'](null, [_0x3fe81e, _0x4a7148]);
            }(_0x51fdf8);
        }
        ;
    }
    function _0x32428d(_0x26853a, _0xae766e) {
        var _0x523b3f = _0x3e0ffd[_0x26853a];
        _0x523b3f['onchange'] = function() {
            var _0x17aa90 = _0x523b3f['value']
              , _0x249a42 = _0x5a6a49(_0x17aa90) + 0x1
              , _0x6d2020 = _0x214635(_0x249a42);
            _0x430ff7(_0x17aa90, _0x6d2020, _0x249a42),
            !!Runtime['dynCall'] ? Runtime['dynCall']('vii', _0xae766e, [_0x26853a, _0x6d2020]) : function(_0x44a7f1, _0x39662b) {
                _0x194ad7['apply'](null, [_0xae766e, _0x44a7f1, _0x39662b]);
            }(_0x26853a, _0x6d2020);
        }
        ;
    }
    function _0x27785b(_0x23a062, _0x307856) {
        var _0x446d66 = _0x3e0ffd[_0x23a062];
        _0x446d66['onfocus'] = function() {
            !!Runtime['dynCall'] ? Runtime['dynCall']('vi', _0x307856, [_0x23a062]) : function(_0x53a544) {
                _0x2d1c65['apply'](null, [_0x307856, _0x53a544]);
            }(_0x23a062);
        }
        ;
    }
    function _0x93bf8c(_0x48bb68, _0x265613) {
        var _0x5e8260 = _0x3e0ffd[_0x48bb68]
          , _0x472bfc = function(_0x2cd0c2, _0x114f9c) {
            if (_0x114f9c instanceof KeyboardEvent) {
                var _0x485c28 = _0x5a6a49(_0x114f9c['key']) + 0x1
                  , _0x12f922 = _0x214635(_0x485c28);
                _0x430ff7(_0x114f9c['key'], _0x12f922, _0x485c28);
                var _0x102d68 = _0x114f9c['code']
                  , _0x1809fb = _0x114f9c['shiftKey'] ? 0x1 : 0x0
                  , _0x1af9f2 = _0x114f9c['ctrlKey'] ? 0x1 : 0x0
                  , _0x242f76 = _0x114f9c['altKey'] ? 0x1 : 0x0;
                !!Runtime['dynCall'] ? Runtime['dynCall']('viiiiiii', _0x265613, [_0x48bb68, _0x2cd0c2, _0x12f922, _0x102d68, _0x1809fb, _0x1af9f2, _0x242f76]) : function(_0x255139, _0xafb8f, _0xd50b5e, _0x1e1339, _0xd16c2c, _0x5332a0, _0x3709cb) {
                    _0x21e182['apply'](null, [_0x265613, _0x255139, _0xafb8f, _0xd50b5e, _0x1e1339, _0xd16c2c, _0x5332a0, _0x3709cb]);
                }(_0x48bb68, _0x2cd0c2, _0x12f922, _0x102d68, _0x1809fb, _0x1af9f2, _0x242f76);
            }
        };
        _0x5e8260['addEventListener']('keydown', function(_0x30971d) {
            _0x472bfc(0x1, _0x30971d);
        }),
        _0x5e8260['addEventListener']('keyup', function(_0x286802) {
            _0x472bfc(0x2, _0x286802);
        });
    }
    function _0x41ce11(_0xdd8ba5, _0x151011) {
        var _0x1600f7 = _0x3e0ffd[_0xdd8ba5];
        _0x1600f7['oninput'] = function() {
            var _0x119b1a = _0x1600f7['value']
              , _0x5d3722 = _0x5a6a49(_0x119b1a) + 0x1
              , _0x5aa867 = _0x214635(_0x5d3722);
            _0x430ff7(_0x119b1a, _0x5aa867, _0x5d3722),
            !!Runtime['dynCall'] ? Runtime['dynCall']('vii', _0x151011, [_0xdd8ba5, _0x5aa867]) : function(_0x2b8a9a, _0x7f9492) {
                _0x194ad7['apply'](null, [_0x151011, _0x2b8a9a, _0x7f9492]);
            }(_0xdd8ba5, _0x5aa867);
        }
        ;
    }
    function _0x30f747(_0x146f90) {
        var _0x3657cd = _0x3e0ffd[_0x146f90];
        return _0x3657cd['selectionDirection'] == 'backward' ? -0x1 : 0x1;
    }
    function _0x175ee4(_0x3e99fa) {
        var _0x48d72b = _0x3e0ffd[_0x3e99fa];
        return _0x48d72b['selectionEnd'];
    }
    function _0x1e78a7(_0x24dd20) {
        var _0x5db6bb = _0x3e0ffd[_0x24dd20];
        return _0x5db6bb['selectionStart'];
    }
    function _0x1d169a(_0x47c1e0, _0x36baac, _0x340e46) {
        var _0x10672f = _0x3e0ffd[_0x47c1e0];
        _0x10672f['setSelectionRange'](_0x36baac, _0x340e46);
    }
    function _0x313852(_0x3205ff, _0x186316) {
        var _0xaae325 = _0x3e0ffd[_0x3205ff];
        _0xaae325['addEventListener']('keydown', function(_0xea4707) {
            if (_0xea4707['which'] && _0xea4707['which'] === 0x9 || _0xea4707['keyCode'] && _0xea4707['keyCode'] === 0x9) {
                _0xea4707['preventDefault']();
                if (_0xaae325['enableTabText']) {
                    var _0x15e364 = _0xaae325['value']
                      , _0x222a38 = _0xaae325['selectionStart']
                      , _0x18270a = _0xaae325['selectionEnd'];
                    _0xaae325['value'] = _0x15e364['substr'](0x0, _0x222a38) + '	' + _0x15e364['substr'](_0x18270a, _0x15e364['length']),
                    _0xaae325['setSelectionRange'](_0x222a38 + 0x1, _0x222a38 + 0x1),
                    _0xaae325['oninput']();
                } else
                    !!Runtime['dynCall'] ? Runtime['dynCall']('vii', _0x186316, [_0x3205ff, _0xea4707['shiftKey'] ? -0x1 : 0x1]) : function(_0x4ba027, _0x47ccdd) {
                        _0x194ad7['apply'](null, [_0x186316, _0x4ba027, _0x47ccdd]);
                    }(_0x3205ff, _0xea4707['shiftKey'] ? -0x1 : 0x1);
            }
        });
    }
    function _0x3df516(_0x3cbb58, _0x5dff9b) {
        var _0x35477e = _0x3e0ffd[_0x3cbb58];
        _0x35477e['value'] = _0x46211(_0x5dff9b);
    }
    function _0x1486b2() {
        var _0x56f1a8 = document['getElementsByTagName']('canvas')
          , _0x201f61 = '';
        _0x56f1a8['length'] >= 0x1 && (_0x201f61 = _0x56f1a8[0x0]['parentNode']['id'],
        _0x201f61 == '' && (_0x201f61 = _0x56f1a8[0x0]['parentNode']['id'] = 'WebGLWindow:Canvas:ParentNode'));
        var _0xece04d = _0x5a6a49(_0x201f61) + 0x1
          , _0x2ffaf5 = _0x214635(_0xece04d);
        return _0x430ff7(_0x201f61, _0x2ffaf5, _0xece04d),
        _0x2ffaf5;
    }
    function _0x2978bb() {
        if (typeof _0x45b917 === 'undefined')
            Runtime = {
                'dynCall': undefined
            };
        else {
            if (typeof Runtime === 'undefined')
                Runtime = {
                    'dynCall': _0x45b917
                };
        }
    }
    function _0x2e9ddd() {
        document['makeFullscreen'] = function(_0x19ee35, _0x164cb0) {
            var _0x3a4d42 = function() {
                var _0x3c9ad3 = window['document']
                  , _0x31b252 = _0x3c9ad3['fullscreenElement'] || _0x3c9ad3['mozFullScreenElement'] || _0x3c9ad3['webkitFullscreenElement'] || _0x3c9ad3['msFullscreenElement'];
                return _0x31b252;
            }
              , _0x2a9375 = function(_0x350d75) {
                document['addEventListener']('fullscreenchange', _0x350d75, ![]),
                document['addEventListener']('webkitfullscreenchange', _0x350d75, ![]),
                document['addEventListener']('mozfullscreenchange', _0x350d75, ![]),
                document['addEventListener']('MSFullscreenChange', _0x350d75, ![]);
            }
              , _0x279bd6 = function(_0x481ed8) {
                document['removeEventListener']('fullscreenchange', _0x481ed8, ![]),
                document['removeEventListener']('webkitfullscreenchange', _0x481ed8, ![]),
                document['removeEventListener']('mozfullscreenchange', _0x481ed8, ![]),
                document['removeEventListener']('MSFullscreenChange', _0x481ed8, ![]);
            }
              , _0x40866f = document['createElement']('div');
            document['body']['appendChild'](_0x40866f);
            var _0x1621d0 = document['getElementsByTagName']('canvas')[0x0]
              , _0x1d2083 = {
                'width': _0x1621d0['style']['width'],
                'height': _0x1621d0['style']['height']
            }
              , _0x126892 = document['getElementById'](_0x19ee35)
              , _0x266898 = _0x126892['tagName']['toLowerCase']() == 'body';
            _0x266898 && (_0x40866f['id'] = _0x126892['id'],
            _0x126892['id'] = '',
            _0x126892 = _0x1621d0);
            var _0x37f3be = _0x126892['parentNode']
              , _0x1be0d6 = window['getComputedStyle'](_0x126892)
              , _0x5ad9ae = parseInt(_0x1be0d6['width'])
              , _0xa24101 = parseInt(_0x1be0d6['height'])
              , _0x422619 = Array['from'](_0x37f3be['children'])['findIndex'](function(_0x362e4f) {
                return _0x362e4f == _0x126892;
            });
            _0x40866f['appendChild'](_0x126892);
            var _0x26f65c = function() {
                if (_0x3a4d42()) {
                    if (_0x164cb0) {
                        var _0x4c2526 = Math['min'](window['screen']['width'] / _0x5ad9ae, window['screen']['height'] / _0xa24101)
                          , _0x1df5a1 = Math['floor'](_0x5ad9ae * _0x4c2526)
                          , _0x139abf = Math['floor'](_0xa24101 * _0x4c2526);
                        _0x126892['style']['width'] = _0x1df5a1 + 'px',
                        _0x126892['style']['height'] = _0x139abf + 'px';
                    } else
                        _0x126892['style']['width'] = window['screen']['width'] + 'px',
                        _0x126892['style']['height'] = window['screen']['height'] + 'px';
                    _0x1621d0['style']['width'] = '100%',
                    _0x1621d0['style']['height'] = '100%';
                } else
                    _0x126892['style']['width'] = _0x5ad9ae + 'px',
                    _0x126892['style']['height'] = _0xa24101 + 'px',
                    _0x37f3be['insertBefore'](_0x126892, Array['from'](_0x37f3be['children'])[_0x422619]),
                    _0x266898 && (_0x37f3be['id'] = _0x40866f['id']),
                    _0x40866f['parentNode']['removeChild'](_0x40866f),
                    _0x1621d0['style']['width'] = _0x1d2083['width'],
                    _0x1621d0['style']['height'] = _0x1d2083['height'],
                    _0x279bd6(_0x26f65c);
            };
            _0x2a9375(_0x26f65c);
            if (_0x40866f['mozRequestFullScreen'])
                _0x40866f['mozRequestFullScreen']();
            else {
                if (_0x40866f['webkitRequestFullScreen'])
                    _0x40866f['webkitRequestFullScreen']();
                else {
                    if (_0x40866f['msRequestFullscreen'])
                        _0x40866f['msRequestFullscreen']();
                    else {
                        if (_0x40866f['requestFullscreen'])
                            _0x40866f['requestFullscreen']();
                    }
                }
            }
        }
        ;
    }
    function _0x153fd5(_0x19b1d3) {
        this['blurListener'] = function() {
            !!Runtime['dynCall'] ? Runtime['dynCall']('v', _0x19b1d3, []) : (function() {
                _0x319313['call'](null, _0x19b1d3);
            }());
        }
        ,
        window['addEventListener']('blur', this['blurListener']);
    }
    function _0x306e4a(_0x1a0329) {
        this['focusListener'] = function() {
            !!Runtime['dynCall'] ? Runtime['dynCall']('v', _0x1a0329, []) : (function() {
                _0x319313['call'](null, _0x1a0329);
            }());
        }
        ,
        window['addEventListener']('focus', this['focusListener']);
    }
    function _0x400fbe(_0x2b4408) {
        this['resizeListener'] = function() {
            !!Runtime['dynCall'] ? Runtime['dynCall']('v', _0x2b4408, []) : (function() {
                _0x319313['call'](null, _0x2b4408);
            }());
        }
        ,
        window['addEventListener']('resize', this['resizeListener']);
    }
    function _0x3f3e8f() {
        focusListener && (window['removeEventListener']('focus', this['focusListener']),
        this['focusListener'] = null),
        blurListener && (window['removeEventListener']('blur', this['blurListener']),
        this['blurListener'] = null),
        resizeListener && (window['removeEventListener']('resize', this['resizeListener']),
        this['resizeListener'] = null);
    }
    var _0x244699 = {
        'requestInstances': {},
        'nextRequestId': 0x1,
        'loglevel': 0x2,
        'SendTextToCSharpSide': function(_0x1f9b2e, _0x3a58dc, _0x3a8e94) {
            const _0x4bdca4 = new TextEncoder()
              , _0x799410 = _0x4bdca4['encode'](_0x3a8e94)
              , _0x1259b1 = function(_0x56da39, _0x51d650) {
                return _0xb7f250['apply'](null, [_0x244699['onallocbuffer'], _0x56da39, _0x51d650]);
            }(_0x1f9b2e, _0x799410['length']);
            _0x2ac27b['set'](_0x799410, _0x1259b1),
            function(_0x4a310d, _0x1f9cd2, _0x485fd5) {
                _0x12db9f['apply'](null, [_0x3a58dc, _0x4a310d, _0x1f9cd2, _0x485fd5]);
            }(_0x1f9b2e, _0x1259b1, _0x799410['length']);
        },
        'GetResponseHeaders': function(_0x10fcb2, _0x388e78) {
            if (_0x244699['loglevel'] <= 0x1)
                console['log']('GetResponseHeaders(' + _0x10fcb2 + ')');
            var _0x51bcc0 = '';
            if (document && document['cookie']) {
                var _0xfec990 = document['cookie']['split'](';');
                for (var _0x418056 = 0x0; _0x418056 < _0xfec990['length']; ++_0x418056) {
                    const _0x23f855 = _0xfec990[_0x418056]['trim']();
                    if (_0x23f855['length'] > 0x0)
                        _0x51bcc0 += 'Set-Cookie:' + _0x23f855 + '
';
                }
            }
            const _0x5636be = _0x244699['requestInstances'][_0x10fcb2]['getAllResponseHeaders']()['trim']()['split'](/[\r\n]+/);
            _0x5636be['forEach'](_0x445644 => {
                const _0x47c2b7 = _0x445644['split'](': ')
                  , _0x4c8e35 = _0x47c2b7['shift']()
                  , _0x1c8173 = _0x47c2b7['join'](': ');
                if (_0x4c8e35 !== 'content-length')
                    _0x51bcc0 += _0x4c8e35 + ':' + _0x1c8173 + '
';
            }
            ),
            _0x244699['SendTextToCSharpSide'](_0x10fcb2, _0x388e78, _0x51bcc0);
        }
    };
    function _0x3dc2fe(_0xfcad6c) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_Abort(' + _0xfcad6c + ')');
        _0x244699['requestInstances'][_0xfcad6c]['abort']();
    }
    function _0x1d6b69(_0x3f06e4, _0x2fd713, _0x5626fd, _0x1327f6, _0x3085d2) {
        var _0x5ae589 = new URL(_0x46211(_0x2fd713))
          , _0x5af5bc = _0x46211(_0x3f06e4);
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_Create (' + _0x244699['nextRequestId'] + ', ' + _0x5af5bc + ', ' + _0x5ae589['toString']() + ', ' + _0x3085d2 + ')');
        var _0x3c2ec0 = new XMLHttpRequest();
        if (_0x5626fd && _0x1327f6) {
            var _0xe7d6fd = _0x46211(_0x5626fd)
              , _0x67c073 = _0x46211(_0x1327f6);
            _0x3c2ec0['withCredentials'] = !![],
            _0x3c2ec0['open'](_0x5af5bc, _0x5ae589['toString'](), !![], _0xe7d6fd, _0x67c073);
        } else
            _0x3c2ec0['withCredentials'] = _0x3085d2,
            _0x3c2ec0['open'](_0x5af5bc, _0x5ae589['toString'](), !![]);
        return _0x3c2ec0['responseType'] = 'arraybuffer',
        _0x244699['requestInstances'][_0x244699['nextRequestId']] = _0x3c2ec0,
        _0x244699['nextRequestId']++;
    }
    function _0x374cbd(_0x4af381) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_Release(' + _0x4af381 + ')');
        delete _0x244699['requestInstances'][_0x4af381];
    }
    function _0x28950a(_0x5c7e11, _0x21ea68, _0x336777) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_Send(' + _0x5c7e11 + ', ' + _0x21ea68 + ', ' + _0x336777 + ')');
        var _0x347141 = _0x244699['requestInstances'][_0x5c7e11];
        try {
            if (_0x336777 > 0x0)
                _0x347141['send'](_0x2ac27b['subarray'](_0x21ea68, _0x21ea68 + _0x336777));
            else
                _0x347141['send']();
        } catch (_0x1f395e) {
            if (_0x244699['loglevel'] <= 0x4)
                console['error']('XHR_Send(' + _0x5c7e11 + '): ' + _0x1f395e['name'] + ' : ' + _0x1f395e['message']);
        }
    }
    function _0x45e57f(_0x578d13) {
        _0x244699['loglevel'] = _0x578d13;
    }
    function _0x5b3597(_0x4293af, _0x3a5124, _0x286f3b) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_SetProgressHandler(' + _0x4293af + ')');
        var _0x5557f6 = _0x244699['requestInstances'][_0x4293af];
        if (_0x5557f6) {
            if (_0x3a5124)
                _0x5557f6['onprogress'] = function _0x32d7de(_0x5e9e12) {
                    if (_0x244699['loglevel'] <= 0x1)
                        console['log']('XHR_SetProgressHandler download(' + _0x4293af + ', ' + _0x5e9e12['loaded'] + ', ' + _0x5e9e12['total'] + ')');
                    _0x5e9e12['lengthComputable'] && function(_0x851ef8, _0x34c36b, _0x9a9dae) {
                        _0x12db9f['apply'](null, [_0x3a5124, _0x851ef8, _0x34c36b, _0x9a9dae]);
                    }(_0x4293af, _0x5e9e12['loaded'], _0x5e9e12['total']);
                }
                ;
            if (_0x286f3b)
                _0x5557f6['upload']['addEventListener']('progress', function _0x4eb1c4(_0x82ff40) {
                    if (_0x244699['loglevel'] <= 0x1)
                        console['log']('XHR_SetProgressHandler upload(' + _0x4293af + ', ' + _0x82ff40['loaded'] + ', ' + _0x82ff40['total'] + ')');
                    _0x82ff40['lengthComputable'] && function(_0x5a0afc, _0x18b0eb, _0x48bd7b) {
                        _0x12db9f['apply'](null, [_0x286f3b, _0x5a0afc, _0x18b0eb, _0x48bd7b]);
                    }(_0x4293af, _0x82ff40['loaded'], _0x82ff40['total']);
                }, !![]);
        }
    }
    function _0x2b7bff(_0x4ec949, _0x982140, _0x3ce9d7) {
        var _0x174026 = _0x46211(_0x982140)
          , _0x2d5320 = _0x46211(_0x3ce9d7);
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_SetRequestHeader(' + _0x174026 + ', ' + _0x2d5320 + ')');
        if (_0x174026 != 'Cookie')
            _0x244699['requestInstances'][_0x4ec949]['setRequestHeader'](_0x174026, _0x2d5320);
        else {
            var _0x77453b = _0x2d5320['split'](';');
            for (var _0x29af74 = 0x0; _0x29af74 < _0x77453b['length']; _0x29af74++) {
                document['cookie'] = _0x77453b[_0x29af74];
            }
        }
    }
    function _0x4dd7c6(_0xe9930a, _0x134e75, _0x51ed2f, _0x5d9596, _0x5801c9, _0x3e88e9, _0x5a7805) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_SetResponseHandler(' + _0xe9930a + ')');
        _0x244699['onallocbuffer'] = _0x5a7805;
        var _0x55bfd3 = _0x244699['requestInstances'][_0xe9930a];
        _0x55bfd3['onreadystatechange'] = _0x5677a7 => {
            if (_0x244699['loglevel'] <= 0x1)
                console['log'](_0xe9930a + ' onreadystatechange(' + _0x55bfd3['readyState'] + ')');
            switch (_0x55bfd3['readyState']) {
            case XMLHttpRequest['UNSENT']:
                break;
            case XMLHttpRequest['OPENED']:
                break;
            case XMLHttpRequest['HEADERS_RECEIVED']:
                {
                    _0x244699['SendTextToCSharpSide'](_0xe9930a, _0x3e88e9, 'HTTP/1.1 ' + _0x55bfd3['status'] + ' ' + _0x55bfd3['statusText'] + '
'),
                    _0x244699['GetResponseHeaders'](_0xe9930a, _0x3e88e9);
                    break;
                }
            case XMLHttpRequest['LOADING']:
                break;
            case XMLHttpRequest['DONE']:
                break;
            }
        }
        ,
        _0x55bfd3['onloadstart'] = _0x4b547e => {
            if (_0x244699['loglevel'] <= 0x1)
                console['log'](_0xe9930a + ' onloadstart: ' + _0x4b547e);
        }
        ,
        _0x55bfd3['onload'] = function _0x3b9560(_0x11f82d) {
            if (_0x244699['loglevel'] <= 0x1)
                console['log'](_0xe9930a + ' onload(' + _0x55bfd3['status'] + ', ' + _0x55bfd3['statusText'] + ')');
            if (_0x134e75) {
                var _0x2d3ff7 = 0x0
                  , _0x2924d5 = 0x0;
                if (!!_0x55bfd3['response']) {
                    var _0x256681 = _0x55bfd3['response'];
                    _0x2d3ff7 = _0x256681['byteLength'],
                    _0x244699['SendTextToCSharpSide'](_0xe9930a, _0x3e88e9, 'content-length:' + _0x2d3ff7 + '

'),
                    _0x2924d5 = function(_0x5379d7, _0x512c5b) {
                        return _0xb7f250['apply'](null, [_0x5a7805, _0x5379d7, _0x512c5b]);
                    }(_0xe9930a, _0x2d3ff7);
                    var _0x2cf108 = new Uint8Array(_0x256681)
                      , _0xe5ec76 = _0x2ac27b['subarray'](_0x2924d5, _0x2924d5 + _0x2d3ff7);
                    _0xe5ec76['set'](_0x2cf108);
                } else
                    _0x244699['SendTextToCSharpSide'](_0xe9930a, _0x3e88e9, 'content-length:0

');
                (function(_0x434bc6, _0x1d16eb, _0x2b45ef) {
                    _0x12db9f['apply'](null, [_0x134e75, _0x434bc6, _0x1d16eb, _0x2b45ef]);
                }(_0xe9930a, _0x2924d5, _0x2d3ff7));
            }
        }
        ;
        _0x51ed2f && (_0x55bfd3['onerror'] = function _0x2cd81d(_0x40f3af) {
            function _0x375855(_0x1200b2) {
                var _0x2a1dc7 = _0x5a6a49(_0x1200b2) + 0x1
                  , _0xfc6fd1 = _0x214635(_0x2a1dc7);
                _0x346e2c(_0x1200b2, _0x2ac27b, _0xfc6fd1, _0x2a1dc7),
                function(_0x2cd4fc, _0x423e9a) {
                    _0x194ad7['apply'](null, [_0x51ed2f, _0x2cd4fc, _0x423e9a]);
                }(_0xe9930a, _0xfc6fd1),
                _0x1f3809(_0xfc6fd1);
            }
            if (_0x40f3af['error'])
                _0x375855(_0x40f3af['error']);
            else
                _0x375855('Unknown Error! Maybe a CORS porblem?');
        }
        );
        if (_0x5d9596)
            _0x55bfd3['ontimeout'] = function _0x2115aa(_0x148020) {
                (function(_0x54fde8) {
                    _0x2d1c65['apply'](null, [_0x5d9596, _0x54fde8]);
                }(_0xe9930a));
            }
            ;
        if (_0x5801c9)
            _0x55bfd3['onabort'] = function _0x2fcaf0(_0x5c720e) {
                (function(_0x160c6a) {
                    _0x2d1c65['apply'](null, [_0x5801c9, _0x160c6a]);
                }(_0xe9930a));
            }
            ;
    }
    function _0x4adb34(_0x30e3bd, _0x4e127a) {
        if (_0x244699['loglevel'] <= 0x1)
            console['log']('XHR_SetTimeout(' + _0x30e3bd + ', ' + _0x4e127a + ')');
        _0x244699['requestInstances'][_0x30e3bd]['timeout'] = _0x4e127a;
    }
    var _0x3b704b = {
        'DESTRUCTOR_OFFSET': 0x0,
        'REFCOUNT_OFFSET': 0x4,
        'TYPE_OFFSET': 0x8,
        'CAUGHT_OFFSET': 0xc,
        'RETHROWN_OFFSET': 0xd,
        'SIZE': 0x10
    };
    function _0x4ba6c4(_0x120601) {
        return _0x214635(_0x120601 + _0x3b704b['SIZE']) + _0x3b704b['SIZE'];
    }
    function _0x57d2f6(_0x51f812) {
        this['excPtr'] = _0x51f812,
        this['ptr'] = _0x51f812 - _0x3b704b['SIZE'],
        this['set_type'] = function(_0x42ebdb) {
            _0x593fb9[this['ptr'] + _0x3b704b['TYPE_OFFSET'] >> 0x2] = _0x42ebdb;
        }
        ,
        this['get_type'] = function() {
            return _0x593fb9[this['ptr'] + _0x3b704b['TYPE_OFFSET'] >> 0x2];
        }
        ,
        this['set_destructor'] = function(_0x49e2a1) {
            _0x593fb9[this['ptr'] + _0x3b704b['DESTRUCTOR_OFFSET'] >> 0x2] = _0x49e2a1;
        }
        ,
        this['get_destructor'] = function() {
            return _0x593fb9[this['ptr'] + _0x3b704b['DESTRUCTOR_OFFSET'] >> 0x2];
        }
        ,
        this['set_refcount'] = function(_0x2306b2) {
            _0x593fb9[this['ptr'] + _0x3b704b['REFCOUNT_OFFSET'] >> 0x2] = _0x2306b2;
        }
        ,
        this['set_caught'] = function(_0x410f2b) {
            _0x410f2b = _0x410f2b ? 0x1 : 0x0,
            _0x10882b[this['ptr'] + _0x3b704b['CAUGHT_OFFSET'] >> 0x0] = _0x410f2b;
        }
        ,
        this['get_caught'] = function() {
            return _0x10882b[this['ptr'] + _0x3b704b['CAUGHT_OFFSET'] >> 0x0] != 0x0;
        }
        ,
        this['set_rethrown'] = function(_0x5b5130) {
            _0x5b5130 = _0x5b5130 ? 0x1 : 0x0,
            _0x10882b[this['ptr'] + _0x3b704b['RETHROWN_OFFSET'] >> 0x0] = _0x5b5130;
        }
        ,
        this['get_rethrown'] = function() {
            return _0x10882b[this['ptr'] + _0x3b704b['RETHROWN_OFFSET'] >> 0x0] != 0x0;
        }
        ,
        this['init'] = function(_0x3945b7, _0x24370b) {
            this['set_type'](_0x3945b7),
            this['set_destructor'](_0x24370b),
            this['set_refcount'](0x0),
            this['set_caught'](![]),
            this['set_rethrown'](![]);
        }
        ,
        this['add_ref'] = function() {
            var _0x3d9d27 = _0x593fb9[this['ptr'] + _0x3b704b['REFCOUNT_OFFSET'] >> 0x2];
            _0x593fb9[this['ptr'] + _0x3b704b['REFCOUNT_OFFSET'] >> 0x2] = _0x3d9d27 + 0x1;
        }
        ,
        this['release_ref'] = function() {
            var _0x49ac3f = _0x593fb9[this['ptr'] + _0x3b704b['REFCOUNT_OFFSET'] >> 0x2];
            return _0x593fb9[this['ptr'] + _0x3b704b['REFCOUNT_OFFSET'] >> 0x2] = _0x49ac3f - 0x1,
            _0x49ac3f === 0x1;
        }
        ;
    }
    function _0x273384(_0x4e06a4) {
        this['free'] = function() {
            _0x1f3809(this['ptr']),
            this['ptr'] = 0x0;
        }
        ,
        this['set_base_ptr'] = function(_0x15f722) {
            _0x593fb9[this['ptr'] >> 0x2] = _0x15f722;
        }
        ,
        this['get_base_ptr'] = function() {
            return _0x593fb9[this['ptr'] >> 0x2];
        }
        ,
        this['set_adjusted_ptr'] = function(_0x769972) {
            var _0x543c39 = 0x4;
            _0x593fb9[this['ptr'] + _0x543c39 >> 0x2] = _0x769972;
        }
        ,
        this['get_adjusted_ptr'] = function() {
            var _0x4290b3 = 0x4;
            return _0x593fb9[this['ptr'] + _0x4290b3 >> 0x2];
        }
        ,
        this['get_exception_ptr'] = function() {
            var _0x606f68 = _0x3fa6ff(this['get_exception_info']()['get_type']());
            if (_0x606f68)
                return _0x593fb9[this['get_base_ptr']() >> 0x2];
            var _0x5da6ea = this['get_adjusted_ptr']();
            if (_0x5da6ea !== 0x0)
                return _0x5da6ea;
            return this['get_base_ptr']();
        }
        ,
        this['get_exception_info'] = function() {
            return new _0x57d2f6(this['get_base_ptr']());
        }
        ,
        _0x4e06a4 === undefined ? (this['ptr'] = _0x214635(0x8),
        this['set_adjusted_ptr'](0x0)) : this['ptr'] = _0x4e06a4;
    }
    var _0x4a1b41 = [];
    function _0x2df76d(_0x468a30) {
        _0x468a30['add_ref']();
    }
    var _0x14f1c8 = 0x0;
    function _0x142cef(_0x14ae99) {
        var _0x327284 = new _0x273384(_0x14ae99)
          , _0x199f76 = _0x327284['get_exception_info']();
        return !_0x199f76['get_caught']() && (_0x199f76['set_caught'](!![]),
        _0x14f1c8--),
        _0x199f76['set_rethrown'](![]),
        _0x4a1b41['push'](_0x327284),
        _0x2df76d(_0x199f76),
        _0x327284['get_exception_ptr']();
    }
    var _0x17d2f7 = 0x0;
    function _0x409d9f(_0x2968f3) {
        return _0x1f3809(new _0x57d2f6(_0x2968f3)['ptr']);
    }
    function _0x4d73e3(_0x67a054) {
        if (_0x67a054['release_ref']() && !_0x67a054['get_rethrown']()) {
            var _0x680764 = _0x67a054['get_destructor']();
            _0x680764 && function(_0x12796b) {
                return _0xd695d7['apply'](null, [_0x680764, _0x12796b]);
            }(_0x67a054['excPtr']),
            _0x409d9f(_0x67a054['excPtr']);
        }
    }
    function _0x14d32c() {
        _0x4990f2(0x0);
        var _0x4146e3 = _0x4a1b41['pop']();
        _0x4d73e3(_0x4146e3['get_exception_info']()),
        _0x4146e3['free'](),
        _0x17d2f7 = 0x0;
    }
    function _0x4cf4ca(_0x32e759) {
        var _0x29f4c2 = new _0x273384(_0x32e759)
          , _0x51787f = _0x29f4c2['get_base_ptr']();
        !_0x17d2f7 && (_0x17d2f7 = _0x51787f);
        _0x29f4c2['free']();
        throw _0x51787f;
    }
    function _0x2771ff() {
        var _0x210895 = _0x17d2f7;
        if (!_0x210895)
            return _0x58c6a4(0x0),
            0x0 | 0x0;
        var _0x4cfb12 = new _0x57d2f6(_0x210895)
          , _0x465f7b = _0x4cfb12['get_type']()
          , _0x2bf9fc = new _0x273384();
        _0x2bf9fc['set_base_ptr'](_0x210895);
        if (!_0x465f7b)
            return _0x58c6a4(0x0),
            _0x2bf9fc['ptr'] | 0x0;
        var _0xbb6c37 = Array['prototype']['slice']['call'](arguments)
          , _0x5afddf = _0x9ae453()
          , _0x38e8d9 = _0x2887c9(0x4);
        _0x593fb9[_0x38e8d9 >> 0x2] = _0x210895;
        for (var _0x56591f = 0x0; _0x56591f < _0xbb6c37['length']; _0x56591f++) {
            var _0x1e90ad = _0xbb6c37[_0x56591f];
            if (_0x1e90ad === 0x0 || _0x1e90ad === _0x465f7b)
                break;
            if (_0x3b07bf(_0x1e90ad, _0x465f7b, _0x38e8d9)) {
                var _0x28a58e = _0x593fb9[_0x38e8d9 >> 0x2];
                return _0x210895 !== _0x28a58e && _0x2bf9fc['set_adjusted_ptr'](_0x28a58e),
                _0x58c6a4(_0x1e90ad),
                _0x2bf9fc['ptr'] | 0x0;
            }
        }
        return _0x305fb7(_0x5afddf),
        _0x58c6a4(_0x465f7b),
        _0x2bf9fc['ptr'] | 0x0;
    }
    function _0x438a87() {
        var _0x5e7388 = _0x17d2f7;
        if (!_0x5e7388)
            return _0x58c6a4(0x0),
            0x0 | 0x0;
        var _0x4fa4c3 = new _0x57d2f6(_0x5e7388)
          , _0x10d621 = _0x4fa4c3['get_type']()
          , _0x525386 = new _0x273384();
        _0x525386['set_base_ptr'](_0x5e7388);
        if (!_0x10d621)
            return _0x58c6a4(0x0),
            _0x525386['ptr'] | 0x0;
        var _0x186fce = Array['prototype']['slice']['call'](arguments)
          , _0x455988 = _0x9ae453()
          , _0x338c97 = _0x2887c9(0x4);
        _0x593fb9[_0x338c97 >> 0x2] = _0x5e7388;
        for (var _0x1a3399 = 0x0; _0x1a3399 < _0x186fce['length']; _0x1a3399++) {
            var _0x432ed3 = _0x186fce[_0x1a3399];
            if (_0x432ed3 === 0x0 || _0x432ed3 === _0x10d621)
                break;
            if (_0x3b07bf(_0x432ed3, _0x10d621, _0x338c97)) {
                var _0x3d0533 = _0x593fb9[_0x338c97 >> 0x2];
                return _0x5e7388 !== _0x3d0533 && _0x525386['set_adjusted_ptr'](_0x3d0533),
                _0x58c6a4(_0x432ed3),
                _0x525386['ptr'] | 0x0;
            }
        }
        return _0x305fb7(_0x455988),
        _0x58c6a4(_0x10d621),
        _0x525386['ptr'] | 0x0;
    }
    function _0x59a3c6() {
        var _0x287572 = _0x17d2f7;
        if (!_0x287572)
            return _0x58c6a4(0x0),
            0x0 | 0x0;
        var _0x28b991 = new _0x57d2f6(_0x287572)
          , _0x514a94 = _0x28b991['get_type']()
          , _0x50823c = new _0x273384();
        _0x50823c['set_base_ptr'](_0x287572);
        if (!_0x514a94)
            return _0x58c6a4(0x0),
            _0x50823c['ptr'] | 0x0;
        var _0x8296f0 = Array['prototype']['slice']['call'](arguments)
          , _0x369fc1 = _0x9ae453()
          , _0x2dad3e = _0x2887c9(0x4);
        _0x593fb9[_0x2dad3e >> 0x2] = _0x287572;
        for (var _0x38c136 = 0x0; _0x38c136 < _0x8296f0['length']; _0x38c136++) {
            var _0x25698f = _0x8296f0[_0x38c136];
            if (_0x25698f === 0x0 || _0x25698f === _0x514a94)
                break;
            if (_0x3b07bf(_0x25698f, _0x514a94, _0x2dad3e)) {
                var _0x17759c = _0x593fb9[_0x2dad3e >> 0x2];
                return _0x287572 !== _0x17759c && _0x50823c['set_adjusted_ptr'](_0x17759c),
                _0x58c6a4(_0x25698f),
                _0x50823c['ptr'] | 0x0;
            }
        }
        return _0x305fb7(_0x369fc1),
        _0x58c6a4(_0x514a94),
        _0x50823c['ptr'] | 0x0;
    }
    function _0x371fd5() {
        var _0x535907 = _0x4a1b41['pop']();
        !_0x535907 && _0x26724f('no exception to throw');
        var _0x53e830 = _0x535907['get_exception_info']()
          , _0x3e1926 = _0x535907['get_base_ptr']();
        !_0x53e830['get_rethrown']() ? (_0x4a1b41['push'](_0x535907),
        _0x53e830['set_rethrown'](!![]),
        _0x53e830['set_caught'](![]),
        _0x14f1c8++) : _0x535907['free']();
        _0x17d2f7 = _0x3e1926;
        throw _0x3e1926;
    }
    function _0x3d1c62(_0x5b0786, _0x4525a8, _0x234704) {
        var _0x11b53d = new _0x57d2f6(_0x5b0786);
        _0x11b53d['init'](_0x4525a8, _0x234704),
        _0x17d2f7 = _0x5b0786,
        _0x14f1c8++;
        throw _0x5b0786;
    }
    function _0x1c35b3(_0x5db104, _0x41e74c) {
        var _0x504aaa = new Date(_0x593fb9[_0x5db104 >> 0x2] * 0x3e8);
        _0x593fb9[_0x41e74c >> 0x2] = _0x504aaa['getUTCSeconds'](),
        _0x593fb9[_0x41e74c + 0x4 >> 0x2] = _0x504aaa['getUTCMinutes'](),
        _0x593fb9[_0x41e74c + 0x8 >> 0x2] = _0x504aaa['getUTCHours'](),
        _0x593fb9[_0x41e74c + 0xc >> 0x2] = _0x504aaa['getUTCDate'](),
        _0x593fb9[_0x41e74c + 0x10 >> 0x2] = _0x504aaa['getUTCMonth'](),
        _0x593fb9[_0x41e74c + 0x14 >> 0x2] = _0x504aaa['getUTCFullYear']() - 0x76c,
        _0x593fb9[_0x41e74c + 0x18 >> 0x2] = _0x504aaa['getUTCDay'](),
        _0x593fb9[_0x41e74c + 0x24 >> 0x2] = 0x0,
        _0x593fb9[_0x41e74c + 0x20 >> 0x2] = 0x0;
        var _0x4a3318 = Date['UTC'](_0x504aaa['getUTCFullYear'](), 0x0, 0x1, 0x0, 0x0, 0x0, 0x0)
          , _0x54843f = (_0x504aaa['getTime']() - _0x4a3318) / (0x3e8 * 0x3c * 0x3c * 0x18) | 0x0;
        _0x593fb9[_0x41e74c + 0x1c >> 0x2] = _0x54843f;
        if (!_0x1c35b3['GMTString'])
            _0x1c35b3['GMTString'] = _0x14c33e('GMT');
        return _0x593fb9[_0x41e74c + 0x28 >> 0x2] = _0x1c35b3['GMTString'],
        _0x41e74c;
    }
    function _0x517f7a(_0xde4973, _0x12aeb0) {
        return _0x1c35b3(_0xde4973, _0x12aeb0);
    }
    function _0x4c1d85() {
        if (_0x4c1d85['called'])
            return;
        _0x4c1d85['called'] = !![];
        var _0x27f7e4 = new Date()['getFullYear']()
          , _0x14909d = new Date(_0x27f7e4,0x0,0x1)
          , _0x5547de = new Date(_0x27f7e4,0x6,0x1)
          , _0x3ad4c7 = _0x14909d['getTimezoneOffset']()
          , _0x2c8937 = _0x5547de['getTimezoneOffset']()
          , _0x26948c = Math['max'](_0x3ad4c7, _0x2c8937);
        _0x593fb9[_0x58e7f9() >> 0x2] = _0x26948c * 0x3c,
        _0x593fb9[_0x2ebd4f() >> 0x2] = Number(_0x3ad4c7 != _0x2c8937);
        function _0x594631(_0x31626b) {
            var _0x26c2e9 = _0x31626b['toTimeString']()['match'](/\(([A-Za-z ]+)\)$/);
            return _0x26c2e9 ? _0x26c2e9[0x1] : 'GMT';
        }
        var _0x52fbd4 = _0x594631(_0x14909d)
          , _0x1f21e9 = _0x594631(_0x5547de)
          , _0xfe6b8b = _0x14c33e(_0x52fbd4)
          , _0x2fed72 = _0x14c33e(_0x1f21e9);
        _0x2c8937 < _0x3ad4c7 ? (_0x593fb9[_0x2e5efc() >> 0x2] = _0xfe6b8b,
        _0x593fb9[_0x2e5efc() + 0x4 >> 0x2] = _0x2fed72) : (_0x593fb9[_0x2e5efc() >> 0x2] = _0x2fed72,
        _0x593fb9[_0x2e5efc() + 0x4 >> 0x2] = _0xfe6b8b);
    }
    function _0x2bea2b(_0x14334c, _0x2da9fc) {
        _0x4c1d85();
        var _0x16d837 = new Date(_0x593fb9[_0x14334c >> 0x2] * 0x3e8);
        _0x593fb9[_0x2da9fc >> 0x2] = _0x16d837['getSeconds'](),
        _0x593fb9[_0x2da9fc + 0x4 >> 0x2] = _0x16d837['getMinutes'](),
        _0x593fb9[_0x2da9fc + 0x8 >> 0x2] = _0x16d837['getHours'](),
        _0x593fb9[_0x2da9fc + 0xc >> 0x2] = _0x16d837['getDate'](),
        _0x593fb9[_0x2da9fc + 0x10 >> 0x2] = _0x16d837['getMonth'](),
        _0x593fb9[_0x2da9fc + 0x14 >> 0x2] = _0x16d837['getFullYear']() - 0x76c,
        _0x593fb9[_0x2da9fc + 0x18 >> 0x2] = _0x16d837['getDay']();
        var _0x3bac82 = new Date(_0x16d837['getFullYear'](),0x0,0x1)
          , _0x253294 = (_0x16d837['getTime']() - _0x3bac82['getTime']()) / (0x3e8 * 0x3c * 0x3c * 0x18) | 0x0;
        _0x593fb9[_0x2da9fc + 0x1c >> 0x2] = _0x253294,
        _0x593fb9[_0x2da9fc + 0x24 >> 0x2] = -(_0x16d837['getTimezoneOffset']() * 0x3c);
        var _0x3b6b38 = new Date(_0x16d837['getFullYear'](),0x6,0x1)['getTimezoneOffset']()
          , _0x4d26f5 = _0x3bac82['getTimezoneOffset']()
          , _0xdb7d01 = (_0x3b6b38 != _0x4d26f5 && _0x16d837['getTimezoneOffset']() == Math['min'](_0x4d26f5, _0x3b6b38)) | 0x0;
        _0x593fb9[_0x2da9fc + 0x20 >> 0x2] = _0xdb7d01;
        var _0x1ddedb = _0x593fb9[_0x2e5efc() + (_0xdb7d01 ? 0x4 : 0x0) >> 0x2];
        return _0x593fb9[_0x2da9fc + 0x28 >> 0x2] = _0x1ddedb,
        _0x2da9fc;
    }
    function _0x11ce3f(_0x660543, _0xe0fd7c) {
        return _0x2bea2b(_0x660543, _0xe0fd7c);
    }
    var _0x34af61 = {
        'splitPath': function(_0x95e133) {
            var _0x2aa730 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            return _0x2aa730['exec'](_0x95e133)['slice'](0x1);
        },
        'normalizeArray': function(_0xe187d8, _0x561d4c) {
            var _0x23b3eb = 0x0;
            for (var _0x101aa1 = _0xe187d8['length'] - 0x1; _0x101aa1 >= 0x0; _0x101aa1--) {
                var _0x261496 = _0xe187d8[_0x101aa1];
                if (_0x261496 === '.')
                    _0xe187d8['splice'](_0x101aa1, 0x1);
                else {
                    if (_0x261496 === '..')
                        _0xe187d8['splice'](_0x101aa1, 0x1),
                        _0x23b3eb++;
                    else
                        _0x23b3eb && (_0xe187d8['splice'](_0x101aa1, 0x1),
                        _0x23b3eb--);
                }
            }
            if (_0x561d4c)
                for (; _0x23b3eb; _0x23b3eb--) {
                    _0xe187d8['unshift']('..');
                }
            return _0xe187d8;
        },
        'normalize': function(_0xb57065) {
            var _0x3f9c77 = _0xb57065['charAt'](0x0) === '/'
              , _0x2e8fd9 = _0xb57065['substr'](-0x1) === '/';
            return _0xb57065 = _0x34af61['normalizeArray'](_0xb57065['split']('/')['filter'](function(_0x300844) {
                return !!_0x300844;
            }), !_0x3f9c77)['join']('/'),
            !_0xb57065 && !_0x3f9c77 && (_0xb57065 = '.'),
            _0xb57065 && _0x2e8fd9 && (_0xb57065 += '/'),
            (_0x3f9c77 ? '/' : '') + _0xb57065;
        },
        'dirname': function(_0x26d5c6) {
            var _0x2e694b = _0x34af61['splitPath'](_0x26d5c6)
              , _0x4426b6 = _0x2e694b[0x0]
              , _0x18219f = _0x2e694b[0x1];
            if (!_0x4426b6 && !_0x18219f)
                return '.';
            return _0x18219f && (_0x18219f = _0x18219f['substr'](0x0, _0x18219f['length'] - 0x1)),
            _0x4426b6 + _0x18219f;
        },
        'basename': function(_0x59c4de) {
            if (_0x59c4de === '/')
                return '/';
            _0x59c4de = _0x34af61['normalize'](_0x59c4de),
            _0x59c4de = _0x59c4de['replace'](/\/$/, '');
            var _0x1d50ec = _0x59c4de['lastIndexOf']('/');
            if (_0x1d50ec === -0x1)
                return _0x59c4de;
            return _0x59c4de['substr'](_0x1d50ec + 0x1);
        },
        'extname': function(_0xd36eeb) {
            return _0x34af61['splitPath'](_0xd36eeb)[0x3];
        },
        'join': function() {
            var _0x22932f = Array['prototype']['slice']['call'](arguments, 0x0);
            return _0x34af61['normalize'](_0x22932f['join']('/'));
        },
        'join2': function(_0x472b36, _0xafa097) {
            return _0x34af61['normalize'](_0x472b36 + '/' + _0xafa097);
        }
    };
    function _0x1576e8() {
        if (typeof crypto === 'object' && typeof crypto['getRandomValues'] === 'function') {
            var _0x2dceca = new Uint8Array(0x1);
            return function() {
                return crypto['getRandomValues'](_0x2dceca),
                _0x2dceca[0x0];
            }
            ;
        } else {
            if (_0x37878f)
                try {
                    var _0x25d082 = require('crypto');
                    return function() {
                        return _0x25d082['randomBytes'](0x1)[0x0];
                    }
                    ;
                } catch (_0xb533dd) {}
        }
        return function() {
            _0x26724f('randomDevice');
        }
        ;
    }
    var _0x57cfd3 = {
        'resolve': function() {
            var _0x4f6eca = ''
              , _0x92d8f8 = ![];
            for (var _0x3b1872 = arguments['length'] - 0x1; _0x3b1872 >= -0x1 && !_0x92d8f8; _0x3b1872--) {
                var _0x51dbfe = _0x3b1872 >= 0x0 ? arguments[_0x3b1872] : _0x23c512['cwd']();
                if (typeof _0x51dbfe !== 'string')
                    throw new TypeError('Arguments to path.resolve must be strings');
                else {
                    if (!_0x51dbfe)
                        return '';
                }
                _0x4f6eca = _0x51dbfe + '/' + _0x4f6eca,
                _0x92d8f8 = _0x51dbfe['charAt'](0x0) === '/';
            }
            return _0x4f6eca = _0x34af61['normalizeArray'](_0x4f6eca['split']('/')['filter'](function(_0x512392) {
                return !!_0x512392;
            }), !_0x92d8f8)['join']('/'),
            (_0x92d8f8 ? '/' : '') + _0x4f6eca || '.';
        },
        'relative': function(_0x138671, _0x877c64) {
            _0x138671 = _0x57cfd3['resolve'](_0x138671)['substr'](0x1),
            _0x877c64 = _0x57cfd3['resolve'](_0x877c64)['substr'](0x1);
            function _0x2d2e3c(_0xf1d02d) {
                var _0xe530ee = 0x0;
                for (; _0xe530ee < _0xf1d02d['length']; _0xe530ee++) {
                    if (_0xf1d02d[_0xe530ee] !== '')
                        break;
                }
                var _0x501125 = _0xf1d02d['length'] - 0x1;
                for (; _0x501125 >= 0x0; _0x501125--) {
                    if (_0xf1d02d[_0x501125] !== '')
                        break;
                }
                if (_0xe530ee > _0x501125)
                    return [];
                return _0xf1d02d['slice'](_0xe530ee, _0x501125 - _0xe530ee + 0x1);
            }
            var _0x12a0e0 = _0x2d2e3c(_0x138671['split']('/'))
              , _0x93255 = _0x2d2e3c(_0x877c64['split']('/'))
              , _0x54babc = Math['min'](_0x12a0e0['length'], _0x93255['length'])
              , _0x14ebac = _0x54babc;
            for (var _0x1fee29 = 0x0; _0x1fee29 < _0x54babc; _0x1fee29++) {
                if (_0x12a0e0[_0x1fee29] !== _0x93255[_0x1fee29]) {
                    _0x14ebac = _0x1fee29;
                    break;
                }
            }
            var _0x386722 = [];
            for (var _0x1fee29 = _0x14ebac; _0x1fee29 < _0x12a0e0['length']; _0x1fee29++) {
                _0x386722['push']('..');
            }
            return _0x386722 = _0x386722['concat'](_0x93255['slice'](_0x14ebac)),
            _0x386722['join']('/');
        }
    }
      , _0xe4037a = {
        'ttys': [],
        'init': function() {},
        'shutdown': function() {},
        'register': function(_0x2b9ea6, _0x473964) {
            _0xe4037a['ttys'][_0x2b9ea6] = {
                'input': [],
                'output': [],
                'ops': _0x473964
            },
            _0x23c512['registerDevice'](_0x2b9ea6, _0xe4037a['stream_ops']);
        },
        'stream_ops': {
            'open': function(_0x53a4a8) {
                var _0x4c9b5b = _0xe4037a['ttys'][_0x53a4a8['node']['rdev']];
                if (!_0x4c9b5b)
                    throw new _0x23c512['ErrnoError'](0x2b);
                _0x53a4a8['tty'] = _0x4c9b5b,
                _0x53a4a8['seekable'] = ![];
            },
            'close': function(_0x18fba4) {
                _0x18fba4['tty']['ops']['flush'](_0x18fba4['tty']);
            },
            'flush': function(_0x393525) {
                _0x393525['tty']['ops']['flush'](_0x393525['tty']);
            },
            'read': function(_0x957461, _0xb8f6ca, _0x4b76c2, _0x3014bb, _0x501ee2) {
                if (!_0x957461['tty'] || !_0x957461['tty']['ops']['get_char'])
                    throw new _0x23c512['ErrnoError'](0x3c);
                var _0x58692a = 0x0;
                for (var _0x35e1bf = 0x0; _0x35e1bf < _0x3014bb; _0x35e1bf++) {
                    var _0x225d0e;
                    try {
                        _0x225d0e = _0x957461['tty']['ops']['get_char'](_0x957461['tty']);
                    } catch (_0x10fb86) {
                        throw new _0x23c512['ErrnoError'](0x1d);
                    }
                    if (_0x225d0e === undefined && _0x58692a === 0x0)
                        throw new _0x23c512['ErrnoError'](0x6);
                    if (_0x225d0e === null || _0x225d0e === undefined)
                        break;
                    _0x58692a++,
                    _0xb8f6ca[_0x4b76c2 + _0x35e1bf] = _0x225d0e;
                }
                return _0x58692a && (_0x957461['node']['timestamp'] = Date['now']()),
                _0x58692a;
            },
            'write': function(_0x3f3791, _0x3a4564, _0xe57e04, _0x35c8c1, _0x49a759) {
                if (!_0x3f3791['tty'] || !_0x3f3791['tty']['ops']['put_char'])
                    throw new _0x23c512['ErrnoError'](0x3c);
                try {
                    for (var _0x2db315 = 0x0; _0x2db315 < _0x35c8c1; _0x2db315++) {
                        _0x3f3791['tty']['ops']['put_char'](_0x3f3791['tty'], _0x3a4564[_0xe57e04 + _0x2db315]);
                    }
                } catch (_0x164c14) {
                    throw new _0x23c512['ErrnoError'](0x1d);
                }
                return _0x35c8c1 && (_0x3f3791['node']['timestamp'] = Date['now']()),
                _0x2db315;
            }
        },
        'default_tty_ops': {
            'get_char': function(_0x1df117) {
                if (!_0x1df117['input']['length']) {
                    var _0x307131 = null;
                    if (_0x37878f) {
                        var _0x56785a = 0x100
                          , _0x46a121 = Buffer['alloc'] ? Buffer['alloc'](_0x56785a) : new Buffer(_0x56785a)
                          , _0x18b5f5 = 0x0;
                        try {
                            _0x18b5f5 = _0x31c36e['readSync'](process['stdin']['fd'], _0x46a121, 0x0, _0x56785a, null);
                        } catch (_0x5ad96a) {
                            if (_0x5ad96a['toString']()['includes']('EOF'))
                                _0x18b5f5 = 0x0;
                            else
                                throw _0x5ad96a;
                        }
                        _0x18b5f5 > 0x0 ? _0x307131 = _0x46a121['slice'](0x0, _0x18b5f5)['toString']('utf-8') : _0x307131 = null;
                    } else {
                        if (typeof window != 'undefined' && typeof window['prompt'] == 'function')
                            _0x307131 = window['prompt']('Input: '),
                            _0x307131 !== null && (_0x307131 += '
');
                        else
                            typeof readline == 'function' && (_0x307131 = readline(),
                            _0x307131 !== null && (_0x307131 += '
'));
                    }
                    if (!_0x307131)
                        return null;
                    _0x1df117['input'] = _0x1fcab5(_0x307131, !![]);
                }
                return _0x1df117['input']['shift']();
            },
            'put_char': function(_0x2c5174, _0x38760b) {
                if (_0x38760b === null || _0x38760b === 0xa)
                    _0x468a5e(_0x44bcd4(_0x2c5174['output'], 0x0)),
                    _0x2c5174['output'] = [];
                else {
                    if (_0x38760b != 0x0)
                        _0x2c5174['output']['push'](_0x38760b);
                }
            },
            'flush': function(_0x53c9ba) {
                _0x53c9ba['output'] && _0x53c9ba['output']['length'] > 0x0 && (_0x468a5e(_0x44bcd4(_0x53c9ba['output'], 0x0)),
                _0x53c9ba['output'] = []);
            }
        },
        'default_tty1_ops': {
            'put_char': function(_0x429383, _0x4834d0) {
                if (_0x4834d0 === null || _0x4834d0 === 0xa)
                    _0x5a96d4(_0x44bcd4(_0x429383['output'], 0x0)),
                    _0x429383['output'] = [];
                else {
                    if (_0x4834d0 != 0x0)
                        _0x429383['output']['push'](_0x4834d0);
                }
            },
            'flush': function(_0x4c926f) {
                _0x4c926f['output'] && _0x4c926f['output']['length'] > 0x0 && (_0x5a96d4(_0x44bcd4(_0x4c926f['output'], 0x0)),
                _0x4c926f['output'] = []);
            }
        }
    };
    function _0x1296a2(_0x56400c) {
        var _0x5ba2dc = _0x2668dd(_0x56400c, 0x10000)
          , _0x44e46f = _0x214635(_0x5ba2dc);
        while (_0x56400c < _0x5ba2dc)
            _0x10882b[_0x44e46f + _0x56400c++] = 0x0;
        return _0x44e46f;
    }
    var _0x3c9fc9 = {
        'ops_table': null,
        'mount': function(_0x18b0de) {
            return _0x3c9fc9['createNode'](null, '/', 0x4000 | 0x1ff, 0x0);
        },
        'createNode': function(_0x3716ed, _0x4d3a29, _0x9f86dc, _0x305dc1) {
            if (_0x23c512['isBlkdev'](_0x9f86dc) || _0x23c512['isFIFO'](_0x9f86dc))
                throw new _0x23c512['ErrnoError'](0x3f);
            !_0x3c9fc9['ops_table'] && (_0x3c9fc9['ops_table'] = {
                'dir': {
                    'node': {
                        'getattr': _0x3c9fc9['node_ops']['getattr'],
                        'setattr': _0x3c9fc9['node_ops']['setattr'],
                        'lookup': _0x3c9fc9['node_ops']['lookup'],
                        'mknod': _0x3c9fc9['node_ops']['mknod'],
                        'rename': _0x3c9fc9['node_ops']['rename'],
                        'unlink': _0x3c9fc9['node_ops']['unlink'],
                        'rmdir': _0x3c9fc9['node_ops']['rmdir'],
                        'readdir': _0x3c9fc9['node_ops']['readdir'],
                        'symlink': _0x3c9fc9['node_ops']['symlink']
                    },
                    'stream': {
                        'llseek': _0x3c9fc9['stream_ops']['llseek']
                    }
                },
                'file': {
                    'node': {
                        'getattr': _0x3c9fc9['node_ops']['getattr'],
                        'setattr': _0x3c9fc9['node_ops']['setattr']
                    },
                    'stream': {
                        'llseek': _0x3c9fc9['stream_ops']['llseek'],
                        'read': _0x3c9fc9['stream_ops']['read'],
                        'write': _0x3c9fc9['stream_ops']['write'],
                        'allocate': _0x3c9fc9['stream_ops']['allocate'],
                        'mmap': _0x3c9fc9['stream_ops']['mmap'],
                        'msync': _0x3c9fc9['stream_ops']['msync']
                    }
                },
                'link': {
                    'node': {
                        'getattr': _0x3c9fc9['node_ops']['getattr'],
                        'setattr': _0x3c9fc9['node_ops']['setattr'],
                        'readlink': _0x3c9fc9['node_ops']['readlink']
                    },
                    'stream': {}
                },
                'chrdev': {
                    'node': {
                        'getattr': _0x3c9fc9['node_ops']['getattr'],
                        'setattr': _0x3c9fc9['node_ops']['setattr']
                    },
                    'stream': _0x23c512['chrdev_stream_ops']
                }
            });
            var _0x10c88c = _0x23c512['createNode'](_0x3716ed, _0x4d3a29, _0x9f86dc, _0x305dc1);
            if (_0x23c512['isDir'](_0x10c88c['mode']))
                _0x10c88c['node_ops'] = _0x3c9fc9['ops_table']['dir']['node'],
                _0x10c88c['stream_ops'] = _0x3c9fc9['ops_table']['dir']['stream'],
                _0x10c88c['contents'] = {};
            else {
                if (_0x23c512['isFile'](_0x10c88c['mode']))
                    _0x10c88c['node_ops'] = _0x3c9fc9['ops_table']['file']['node'],
                    _0x10c88c['stream_ops'] = _0x3c9fc9['ops_table']['file']['stream'],
                    _0x10c88c['usedBytes'] = 0x0,
                    _0x10c88c['contents'] = null;
                else {
                    if (_0x23c512['isLink'](_0x10c88c['mode']))
                        _0x10c88c['node_ops'] = _0x3c9fc9['ops_table']['link']['node'],
                        _0x10c88c['stream_ops'] = _0x3c9fc9['ops_table']['link']['stream'];
                    else
                        _0x23c512['isChrdev'](_0x10c88c['mode']) && (_0x10c88c['node_ops'] = _0x3c9fc9['ops_table']['chrdev']['node'],
                        _0x10c88c['stream_ops'] = _0x3c9fc9['ops_table']['chrdev']['stream']);
                }
            }
            return _0x10c88c['timestamp'] = Date['now'](),
            _0x3716ed && (_0x3716ed['contents'][_0x4d3a29] = _0x10c88c,
            _0x3716ed['timestamp'] = _0x10c88c['timestamp']),
            _0x10c88c;
        },
        'getFileDataAsTypedArray': function(_0x1e7e8e) {
            if (!_0x1e7e8e['contents'])
                return new Uint8Array(0x0);
            if (_0x1e7e8e['contents']['subarray'])
                return _0x1e7e8e['contents']['subarray'](0x0, _0x1e7e8e['usedBytes']);
            return new Uint8Array(_0x1e7e8e['contents']);
        },
        'expandFileStorage': function(_0x117511, _0x57dc7b) {
            var _0x31a58c = _0x117511['contents'] ? _0x117511['contents']['length'] : 0x0;
            if (_0x31a58c >= _0x57dc7b)
                return;
            var _0x57d6da = 0x400 * 0x400;
            _0x57dc7b = Math['max'](_0x57dc7b, _0x31a58c * (_0x31a58c < _0x57d6da ? 0x2 : 1.125) >>> 0x0);
            if (_0x31a58c != 0x0)
                _0x57dc7b = Math['max'](_0x57dc7b, 0x100);
            var _0x392f55 = _0x117511['contents'];
            _0x117511['contents'] = new Uint8Array(_0x57dc7b);
            if (_0x117511['usedBytes'] > 0x0)
                _0x117511['contents']['set'](_0x392f55['subarray'](0x0, _0x117511['usedBytes']), 0x0);
        },
        'resizeFileStorage': function(_0x75f227, _0x1c3c33) {
            if (_0x75f227['usedBytes'] == _0x1c3c33)
                return;
            if (_0x1c3c33 == 0x0)
                _0x75f227['contents'] = null,
                _0x75f227['usedBytes'] = 0x0;
            else {
                var _0x537205 = _0x75f227['contents'];
                _0x75f227['contents'] = new Uint8Array(_0x1c3c33),
                _0x537205 && _0x75f227['contents']['set'](_0x537205['subarray'](0x0, Math['min'](_0x1c3c33, _0x75f227['usedBytes']))),
                _0x75f227['usedBytes'] = _0x1c3c33;
            }
        },
        'node_ops': {
            'getattr': function(_0x52c608) {
                var _0x48232b = {};
                _0x48232b['dev'] = _0x23c512['isChrdev'](_0x52c608['mode']) ? _0x52c608['id'] : 0x1,
                _0x48232b['ino'] = _0x52c608['id'],
                _0x48232b['mode'] = _0x52c608['mode'],
                _0x48232b['nlink'] = 0x1,
                _0x48232b['uid'] = 0x0,
                _0x48232b['gid'] = 0x0,
                _0x48232b['rdev'] = _0x52c608['rdev'];
                if (_0x23c512['isDir'](_0x52c608['mode']))
                    _0x48232b['size'] = 0x1000;
                else {
                    if (_0x23c512['isFile'](_0x52c608['mode']))
                        _0x48232b['size'] = _0x52c608['usedBytes'];
                    else
                        _0x23c512['isLink'](_0x52c608['mode']) ? _0x48232b['size'] = _0x52c608['link']['length'] : _0x48232b['size'] = 0x0;
                }
                return _0x48232b['atime'] = new Date(_0x52c608['timestamp']),
                _0x48232b['mtime'] = new Date(_0x52c608['timestamp']),
                _0x48232b['ctime'] = new Date(_0x52c608['timestamp']),
                _0x48232b['blksize'] = 0x1000,
                _0x48232b['blocks'] = Math['ceil'](_0x48232b['size'] / _0x48232b['blksize']),
                _0x48232b;
            },
            'setattr': function(_0x33e3c1, _0x5ba466) {
                _0x5ba466['mode'] !== undefined && (_0x33e3c1['mode'] = _0x5ba466['mode']),
                _0x5ba466['timestamp'] !== undefined && (_0x33e3c1['timestamp'] = _0x5ba466['timestamp']),
                _0x5ba466['size'] !== undefined && _0x3c9fc9['resizeFileStorage'](_0x33e3c1, _0x5ba466['size']);
            },
            'lookup': function(_0x35b85a, _0x30c016) {
                throw _0x23c512['genericErrors'][0x2c];
            },
            'mknod': function(_0xfeffc1, _0x26c187, _0x493063, _0x5c80b5) {
                return _0x3c9fc9['createNode'](_0xfeffc1, _0x26c187, _0x493063, _0x5c80b5);
            },
            'rename': function(_0x2a0255, _0x30613e, _0x4ed3e8) {
                if (_0x23c512['isDir'](_0x2a0255['mode'])) {
                    var _0x4aeac9;
                    try {
                        _0x4aeac9 = _0x23c512['lookupNode'](_0x30613e, _0x4ed3e8);
                    } catch (_0x3d2491) {}
                    if (_0x4aeac9)
                        for (var _0x52a515 in _0x4aeac9['contents']) {
                            throw new _0x23c512['ErrnoError'](0x37);
                        }
                }
                delete _0x2a0255['parent']['contents'][_0x2a0255['name']],
                _0x2a0255['parent']['timestamp'] = Date['now'](),
                _0x2a0255['name'] = _0x4ed3e8,
                _0x30613e['contents'][_0x4ed3e8] = _0x2a0255,
                _0x30613e['timestamp'] = _0x2a0255['parent']['timestamp'],
                _0x2a0255['parent'] = _0x30613e;
            },
            'unlink': function(_0x1bd02b, _0x202d37) {
                delete _0x1bd02b['contents'][_0x202d37],
                _0x1bd02b['timestamp'] = Date['now']();
            },
            'rmdir': function(_0x27d4f4, _0x4d7a6b) {
                var _0x33245c = _0x23c512['lookupNode'](_0x27d4f4, _0x4d7a6b);
                for (var _0x2e8839 in _0x33245c['contents']) {
                    throw new _0x23c512['ErrnoError'](0x37);
                }
                delete _0x27d4f4['contents'][_0x4d7a6b],
                _0x27d4f4['timestamp'] = Date['now']();
            },
            'readdir': function(_0x40568c) {
                var _0x50b8db = ['.', '..'];
                for (var _0x1c22bc in _0x40568c['contents']) {
                    if (!_0x40568c['contents']['hasOwnProperty'](_0x1c22bc))
                        continue;
                    _0x50b8db['push'](_0x1c22bc);
                }
                return _0x50b8db;
            },
            'symlink': function(_0x2f96ed, _0x465b29, _0x3ef4a1) {
                var _0x1ac41a = _0x3c9fc9['createNode'](_0x2f96ed, _0x465b29, 0x1ff | 0xa000, 0x0);
                return _0x1ac41a['link'] = _0x3ef4a1,
                _0x1ac41a;
            },
            'readlink': function(_0x897775) {
                if (!_0x23c512['isLink'](_0x897775['mode']))
                    throw new _0x23c512['ErrnoError'](0x1c);
                return _0x897775['link'];
            }
        },
        'stream_ops': {
            'read': function(_0x2e1eaf, _0x3865d2, _0xb56746, _0x358f00, _0x1b5def) {
                var _0x49df07 = _0x2e1eaf['node']['contents'];
                if (_0x1b5def >= _0x2e1eaf['node']['usedBytes'])
                    return 0x0;
                var _0x42d893 = Math['min'](_0x2e1eaf['node']['usedBytes'] - _0x1b5def, _0x358f00);
                if (_0x42d893 > 0x8 && _0x49df07['subarray'])
                    _0x3865d2['set'](_0x49df07['subarray'](_0x1b5def, _0x1b5def + _0x42d893), _0xb56746);
                else {
                    for (var _0x5d04b6 = 0x0; _0x5d04b6 < _0x42d893; _0x5d04b6++)
                        _0x3865d2[_0xb56746 + _0x5d04b6] = _0x49df07[_0x1b5def + _0x5d04b6];
                }
                return _0x42d893;
            },
            'write': function(_0x2d2d72, _0x188960, _0x4851d1, _0x156f0b, _0x21620b, _0x429510) {
                _0x188960['buffer'] === _0x10882b['buffer'] && (_0x429510 = ![]);
                if (!_0x156f0b)
                    return 0x0;
                var _0x59362e = _0x2d2d72['node'];
                _0x59362e['timestamp'] = Date['now']();
                if (_0x188960['subarray'] && (!_0x59362e['contents'] || _0x59362e['contents']['subarray'])) {
                    if (_0x429510)
                        return _0x59362e['contents'] = _0x188960['subarray'](_0x4851d1, _0x4851d1 + _0x156f0b),
                        _0x59362e['usedBytes'] = _0x156f0b,
                        _0x156f0b;
                    else {
                        if (_0x59362e['usedBytes'] === 0x0 && _0x21620b === 0x0)
                            return _0x59362e['contents'] = _0x188960['slice'](_0x4851d1, _0x4851d1 + _0x156f0b),
                            _0x59362e['usedBytes'] = _0x156f0b,
                            _0x156f0b;
                        else {
                            if (_0x21620b + _0x156f0b <= _0x59362e['usedBytes'])
                                return _0x59362e['contents']['set'](_0x188960['subarray'](_0x4851d1, _0x4851d1 + _0x156f0b), _0x21620b),
                                _0x156f0b;
                        }
                    }
                }
                _0x3c9fc9['expandFileStorage'](_0x59362e, _0x21620b + _0x156f0b);
                if (_0x59362e['contents']['subarray'] && _0x188960['subarray'])
                    _0x59362e['contents']['set'](_0x188960['subarray'](_0x4851d1, _0x4851d1 + _0x156f0b), _0x21620b);
                else
                    for (var _0x3e1c0b = 0x0; _0x3e1c0b < _0x156f0b; _0x3e1c0b++) {
                        _0x59362e['contents'][_0x21620b + _0x3e1c0b] = _0x188960[_0x4851d1 + _0x3e1c0b];
                    }
                return _0x59362e['usedBytes'] = Math['max'](_0x59362e['usedBytes'], _0x21620b + _0x156f0b),
                _0x156f0b;
            },
            'llseek': function(_0x20063b, _0x3d2bda, _0x3995ab) {
                var _0x5c7e9f = _0x3d2bda;
                if (_0x3995ab === 0x1)
                    _0x5c7e9f += _0x20063b['position'];
                else
                    _0x3995ab === 0x2 && (_0x23c512['isFile'](_0x20063b['node']['mode']) && (_0x5c7e9f += _0x20063b['node']['usedBytes']));
                if (_0x5c7e9f < 0x0)
                    throw new _0x23c512['ErrnoError'](0x1c);
                return _0x5c7e9f;
            },
            'allocate': function(_0x36ea77, _0x1a4804, _0x12d8ac) {
                _0x3c9fc9['expandFileStorage'](_0x36ea77['node'], _0x1a4804 + _0x12d8ac),
                _0x36ea77['node']['usedBytes'] = Math['max'](_0x36ea77['node']['usedBytes'], _0x1a4804 + _0x12d8ac);
            },
            'mmap': function(_0x2dbbed, _0x5c90e5, _0x5e6543, _0x30dfdb, _0x536e0e, _0x2e2cfd) {
                if (_0x5c90e5 !== 0x0)
                    throw new _0x23c512['ErrnoError'](0x1c);
                if (!_0x23c512['isFile'](_0x2dbbed['node']['mode']))
                    throw new _0x23c512['ErrnoError'](0x2b);
                var _0x389b5b, _0x157300, _0x3f10d2 = _0x2dbbed['node']['contents'];
                if (!(_0x2e2cfd & 0x2) && _0x3f10d2['buffer'] === _0x3a5088)
                    _0x157300 = ![],
                    _0x389b5b = _0x3f10d2['byteOffset'];
                else {
                    (_0x30dfdb > 0x0 || _0x30dfdb + _0x5e6543 < _0x3f10d2['length']) && (_0x3f10d2['subarray'] ? _0x3f10d2 = _0x3f10d2['subarray'](_0x30dfdb, _0x30dfdb + _0x5e6543) : _0x3f10d2 = Array['prototype']['slice']['call'](_0x3f10d2, _0x30dfdb, _0x30dfdb + _0x5e6543));
                    _0x157300 = !![],
                    _0x389b5b = _0x1296a2(_0x5e6543);
                    if (!_0x389b5b)
                        throw new _0x23c512['ErrnoError'](0x30);
                    _0x10882b['set'](_0x3f10d2, _0x389b5b);
                }
                return {
                    'ptr': _0x389b5b,
                    'allocated': _0x157300
                };
            },
            'msync': function(_0x24b3ab, _0x360843, _0x5ed5d3, _0x303d22, _0xce4be6) {
                if (!_0x23c512['isFile'](_0x24b3ab['node']['mode']))
                    throw new _0x23c512['ErrnoError'](0x2b);
                if (_0xce4be6 & 0x2)
                    return 0x0;
                var _0x5e178a = _0x3c9fc9['stream_ops']['write'](_0x24b3ab, _0x360843, 0x0, _0x303d22, _0x5ed5d3, ![]);
                return 0x0;
            }
        }
    }
      , _0x3581f4 = {
        'dbs': {},
        'indexedDB': function() {
            if (typeof indexedDB !== 'undefined')
                return indexedDB;
            var _0x4e4928 = null;
            if (typeof window === 'object')
                _0x4e4928 = window['indexedDB'] || window['mozIndexedDB'] || window['webkitIndexedDB'] || window['msIndexedDB'];
            return _0x51a343(_0x4e4928, 'IDBFS used, but indexedDB not supported'),
            _0x4e4928;
        },
        'DB_VERSION': 0x15,
        'DB_STORE_NAME': 'FILE_DATA',
        'mount': function(_0xe9f029) {
            return _0x3c9fc9['mount']['apply'](null, arguments);
        },
        'syncfs': function(_0x267b13, _0x111e5f, _0x2f58a7) {
            _0x3581f4['getLocalSet'](_0x267b13, function(_0x99577f, _0x10a4f5) {
                if (_0x99577f)
                    return _0x2f58a7(_0x99577f);
                _0x3581f4['getRemoteSet'](_0x267b13, function(_0x42a416, _0x1f8ea9) {
                    if (_0x42a416)
                        return _0x2f58a7(_0x42a416);
                    var _0xc4f5a9 = _0x111e5f ? _0x1f8ea9 : _0x10a4f5
                      , _0x4aa670 = _0x111e5f ? _0x10a4f5 : _0x1f8ea9;
                    _0x3581f4['reconcile'](_0xc4f5a9, _0x4aa670, _0x2f58a7);
                });
            });
        },
        'getDB': function(_0x352acd, _0x2d8026) {
            var _0xd61745 = _0x3581f4['dbs'][_0x352acd];
            if (_0xd61745)
                return _0x2d8026(null, _0xd61745);
            var _0x4fb407;
            try {
                _0x4fb407 = _0x3581f4['indexedDB']()['open'](_0x352acd, _0x3581f4['DB_VERSION']);
            } catch (_0xbee5e1) {
                return _0x2d8026(_0xbee5e1);
            }
            if (!_0x4fb407)
                return _0x2d8026('Unable to connect to IndexedDB');
            _0x4fb407['onupgradeneeded'] = function(_0x12ef53) {
                var _0x4c94f9 = _0x12ef53['target']['result'], _0x3f2c41 = _0x12ef53['target']['transaction'], _0xfde96e;
                _0x4c94f9['objectStoreNames']['contains'](_0x3581f4['DB_STORE_NAME']) ? _0xfde96e = _0x3f2c41['objectStore'](_0x3581f4['DB_STORE_NAME']) : _0xfde96e = _0x4c94f9['createObjectStore'](_0x3581f4['DB_STORE_NAME']),
                !_0xfde96e['indexNames']['contains']('timestamp') && _0xfde96e['createIndex']('timestamp', 'timestamp', {
                    'unique': ![]
                });
            }
            ,
            _0x4fb407['onsuccess'] = function() {
                _0xd61745 = _0x4fb407['result'],
                _0x3581f4['dbs'][_0x352acd] = _0xd61745,
                _0x2d8026(null, _0xd61745);
            }
            ,
            _0x4fb407['onerror'] = function(_0x1a27d7) {
                _0x2d8026(this['error']),
                _0x1a27d7['preventDefault']();
            }
            ;
        },
        'getLocalSet': function(_0x102cf5, _0x285e40) {
            var _0x3f6574 = {};
            function _0x1ed75f(_0x3dbe30) {
                return _0x3dbe30 !== '.' && _0x3dbe30 !== '..';
            }
            function _0x494001(_0x314f90) {
                return function(_0x3a1295) {
                    return _0x34af61['join2'](_0x314f90, _0x3a1295);
                }
                ;
            }
            var _0x145c6c = _0x23c512['readdir'](_0x102cf5['mountpoint'])['filter'](_0x1ed75f)['map'](_0x494001(_0x102cf5['mountpoint']));
            while (_0x145c6c['length']) {
                var _0x3ed840 = _0x145c6c['pop'](), _0x3e2bcd;
                try {
                    _0x3e2bcd = _0x23c512['stat'](_0x3ed840);
                } catch (_0x381d8a) {
                    return _0x285e40(_0x381d8a);
                }
                _0x23c512['isDir'](_0x3e2bcd['mode']) && _0x145c6c['push']['apply'](_0x145c6c, _0x23c512['readdir'](_0x3ed840)['filter'](_0x1ed75f)['map'](_0x494001(_0x3ed840))),
                _0x3f6574[_0x3ed840] = {
                    'timestamp': _0x3e2bcd['mtime']
                };
            }
            return _0x285e40(null, {
                'type': 'local',
                'entries': _0x3f6574
            });
        },
        'getRemoteSet': function(_0x576f8b, _0x43df15) {
            var _0x12a1b5 = {};
            _0x3581f4['getDB'](_0x576f8b['mountpoint'], function(_0x37e782, _0x5e1680) {
                if (_0x37e782)
                    return _0x43df15(_0x37e782);
                try {
                    var _0x5ce945 = _0x5e1680['transaction']([_0x3581f4['DB_STORE_NAME']], 'readonly');
                    _0x5ce945['onerror'] = function(_0x424e9c) {
                        _0x43df15(this['error']),
                        _0x424e9c['preventDefault']();
                    }
                    ;
                    var _0x42c788 = _0x5ce945['objectStore'](_0x3581f4['DB_STORE_NAME'])
                      , _0xb7009d = _0x42c788['index']('timestamp');
                    _0xb7009d['openKeyCursor']()['onsuccess'] = function(_0x230be2) {
                        var _0x33fc59 = _0x230be2['target']['result'];
                        if (!_0x33fc59)
                            return _0x43df15(null, {
                                'type': 'remote',
                                'db': _0x5e1680,
                                'entries': _0x12a1b5
                            });
                        _0x12a1b5[_0x33fc59['primaryKey']] = {
                            'timestamp': _0x33fc59['key']
                        },
                        _0x33fc59['continue']();
                    }
                    ;
                } catch (_0x2ad021) {
                    return _0x43df15(_0x2ad021);
                }
            });
        },
        'loadLocalEntry': function(_0xfa4390, _0x40da74) {
            var _0x3307c6, _0x365386;
            try {
                var _0x5d840e = _0x23c512['lookupPath'](_0xfa4390);
                _0x365386 = _0x5d840e['node'],
                _0x3307c6 = _0x23c512['stat'](_0xfa4390);
            } catch (_0x11d953) {
                return _0x40da74(_0x11d953);
            }
            if (_0x23c512['isDir'](_0x3307c6['mode']))
                return _0x40da74(null, {
                    'timestamp': _0x3307c6['mtime'],
                    'mode': _0x3307c6['mode']
                });
            else
                return _0x23c512['isFile'](_0x3307c6['mode']) ? (_0x365386['contents'] = _0x3c9fc9['getFileDataAsTypedArray'](_0x365386),
                _0x40da74(null, {
                    'timestamp': _0x3307c6['mtime'],
                    'mode': _0x3307c6['mode'],
                    'contents': _0x365386['contents']
                })) : _0x40da74(new Error('node type not supported'));
        },
        'storeLocalEntry': function(_0x10a66a, _0x5cacfd, _0x38bafb) {
            try {
                if (_0x23c512['isDir'](_0x5cacfd['mode']))
                    _0x23c512['mkdirTree'](_0x10a66a, _0x5cacfd['mode']);
                else {
                    if (_0x23c512['isFile'](_0x5cacfd['mode']))
                        _0x23c512['writeFile'](_0x10a66a, _0x5cacfd['contents'], {
                            'canOwn': !![]
                        });
                    else
                        return _0x38bafb(new Error('node type not supported'));
                }
                _0x23c512['chmod'](_0x10a66a, _0x5cacfd['mode']),
                _0x23c512['utime'](_0x10a66a, _0x5cacfd['timestamp'], _0x5cacfd['timestamp']);
            } catch (_0x29b89a) {
                return _0x38bafb(_0x29b89a);
            }
            _0x38bafb(null);
        },
        'removeLocalEntry': function(_0x4ab2c9, _0xe7b488) {
            try {
                var _0x1c31a4 = _0x23c512['lookupPath'](_0x4ab2c9)
                  , _0xe530c2 = _0x23c512['stat'](_0x4ab2c9);
                if (_0x23c512['isDir'](_0xe530c2['mode']))
                    _0x23c512['rmdir'](_0x4ab2c9);
                else
                    _0x23c512['isFile'](_0xe530c2['mode']) && _0x23c512['unlink'](_0x4ab2c9);
            } catch (_0x5877c3) {
                return _0xe7b488(_0x5877c3);
            }
            _0xe7b488(null);
        },
        'loadRemoteEntry': function(_0x58625e, _0x32bfc7, _0x2f5891) {
            var _0x382e94 = _0x58625e['get'](_0x32bfc7);
            _0x382e94['onsuccess'] = function(_0x507fd0) {
                _0x2f5891(null, _0x507fd0['target']['result']);
            }
            ,
            _0x382e94['onerror'] = function(_0x519b43) {
                _0x2f5891(this['error']),
                _0x519b43['preventDefault']();
            }
            ;
        },
        'storeRemoteEntry': function(_0xd22b5, _0x1852f2, _0x29c0a0, _0x4513ac) {
            var _0x2d94df = _0xd22b5['put'](_0x29c0a0, _0x1852f2);
            _0x2d94df['onsuccess'] = function() {
                _0x4513ac(null);
            }
            ,
            _0x2d94df['onerror'] = function(_0x456582) {
                _0x4513ac(this['error']),
                _0x456582['preventDefault']();
            }
            ;
        },
        'removeRemoteEntry': function(_0x1f14e2, _0x5bb682, _0x54fb61) {
            var _0x5c83ed = _0x1f14e2['delete'](_0x5bb682);
            _0x5c83ed['onsuccess'] = function() {
                _0x54fb61(null);
            }
            ,
            _0x5c83ed['onerror'] = function(_0x224ee9) {
                _0x54fb61(this['error']),
                _0x224ee9['preventDefault']();
            }
            ;
        },
        'reconcile': function(_0x3b70f1, _0x43cef4, _0x58c6e7) {
            var _0xaa80e7 = 0x0
              , _0x25e1f7 = [];
            Object['keys'](_0x3b70f1['entries'])['forEach'](function(_0x2779b1) {
                var _0x4e13dc = _0x3b70f1['entries'][_0x2779b1]
                  , _0x44eec7 = _0x43cef4['entries'][_0x2779b1];
                (!_0x44eec7 || _0x4e13dc['timestamp']['getTime']() != _0x44eec7['timestamp']['getTime']()) && (_0x25e1f7['push'](_0x2779b1),
                _0xaa80e7++);
            });
            var _0x5c46ce = [];
            Object['keys'](_0x43cef4['entries'])['forEach'](function(_0x18d2e5) {
                !_0x3b70f1['entries'][_0x18d2e5] && (_0x5c46ce['push'](_0x18d2e5),
                _0xaa80e7++);
            });
            if (!_0xaa80e7)
                return _0x58c6e7(null);
            var _0x332a74 = ![]
              , _0x1b9e0c = _0x3b70f1['type'] === 'remote' ? _0x3b70f1['db'] : _0x43cef4['db']
              , _0x4c8c38 = _0x1b9e0c['transaction']([_0x3581f4['DB_STORE_NAME']], 'readwrite')
              , _0x40645a = _0x4c8c38['objectStore'](_0x3581f4['DB_STORE_NAME']);
            function _0x20704f(_0x5c0925) {
                if (_0x5c0925 && !_0x332a74)
                    return _0x332a74 = !![],
                    _0x58c6e7(_0x5c0925);
            }
            _0x4c8c38['onerror'] = function(_0x1db4a5) {
                _0x20704f(this['error']),
                _0x1db4a5['preventDefault']();
            }
            ,
            _0x4c8c38['oncomplete'] = function(_0xac1c16) {
                !_0x332a74 && _0x58c6e7(null);
            }
            ,
            _0x25e1f7['sort']()['forEach'](function(_0x4b6b67) {
                _0x43cef4['type'] === 'local' ? _0x3581f4['loadRemoteEntry'](_0x40645a, _0x4b6b67, function(_0x12eda7, _0x509c7b) {
                    if (_0x12eda7)
                        return _0x20704f(_0x12eda7);
                    _0x3581f4['storeLocalEntry'](_0x4b6b67, _0x509c7b, _0x20704f);
                }) : _0x3581f4['loadLocalEntry'](_0x4b6b67, function(_0xb3ee03, _0x4fb730) {
                    if (_0xb3ee03)
                        return _0x20704f(_0xb3ee03);
                    _0x3581f4['storeRemoteEntry'](_0x40645a, _0x4b6b67, _0x4fb730, _0x20704f);
                });
            }),
            _0x5c46ce['sort']()['reverse']()['forEach'](function(_0x59224e) {
                _0x43cef4['type'] === 'local' ? _0x3581f4['removeLocalEntry'](_0x59224e, _0x20704f) : _0x3581f4['removeRemoteEntry'](_0x40645a, _0x59224e, _0x20704f);
            });
        }
    }
      , _0x23c512 = {
        'root': null,
        'mounts': [],
        'devices': {},
        'streams': [],
        'nextInode': 0x1,
        'nameTable': null,
        'currentPath': '/',
        'initialized': ![],
        'ignorePermissions': !![],
        'trackingDelegate': {},
        'tracking': {
            'openFlags': {
                'READ': 0x1,
                'WRITE': 0x2
            }
        },
        'ErrnoError': null,
        'genericErrors': {},
        'filesystems': null,
        'syncFSRequests': 0x0,
        'lookupPath': function(_0x5dcca5, _0x5670fa) {
            _0x5dcca5 = _0x57cfd3['resolve'](_0x23c512['cwd'](), _0x5dcca5),
            _0x5670fa = _0x5670fa || {};
            if (!_0x5dcca5)
                return {
                    'path': '',
                    'node': null
                };
            var _0xe255cd = {
                'follow_mount': !![],
                'recurse_count': 0x0
            };
            for (var _0xca503a in _0xe255cd) {
                _0x5670fa[_0xca503a] === undefined && (_0x5670fa[_0xca503a] = _0xe255cd[_0xca503a]);
            }
            if (_0x5670fa['recurse_count'] > 0x8)
                throw new _0x23c512['ErrnoError'](0x20);
            var _0x2d480d = _0x34af61['normalizeArray'](_0x5dcca5['split']('/')['filter'](function(_0x109aa8) {
                return !!_0x109aa8;
            }), ![])
              , _0x4f1049 = _0x23c512['root']
              , _0x8adbe6 = '/';
            for (var _0x536e1f = 0x0; _0x536e1f < _0x2d480d['length']; _0x536e1f++) {
                var _0xf1d6ff = _0x536e1f === _0x2d480d['length'] - 0x1;
                if (_0xf1d6ff && _0x5670fa['parent'])
                    break;
                _0x4f1049 = _0x23c512['lookupNode'](_0x4f1049, _0x2d480d[_0x536e1f]),
                _0x8adbe6 = _0x34af61['join2'](_0x8adbe6, _0x2d480d[_0x536e1f]);
                _0x23c512['isMountpoint'](_0x4f1049) && ((!_0xf1d6ff || _0xf1d6ff && _0x5670fa['follow_mount']) && (_0x4f1049 = _0x4f1049['mounted']['root']));
                if (!_0xf1d6ff || _0x5670fa['follow']) {
                    var _0x4d146d = 0x0;
                    while (_0x23c512['isLink'](_0x4f1049['mode'])) {
                        var _0x4d2def = _0x23c512['readlink'](_0x8adbe6);
                        _0x8adbe6 = _0x57cfd3['resolve'](_0x34af61['dirname'](_0x8adbe6), _0x4d2def);
                        var _0x94bc2 = _0x23c512['lookupPath'](_0x8adbe6, {
                            'recurse_count': _0x5670fa['recurse_count']
                        });
                        _0x4f1049 = _0x94bc2['node'];
                        if (_0x4d146d++ > 0x28)
                            throw new _0x23c512['ErrnoError'](0x20);
                    }
                }
            }
            return {
                'path': _0x8adbe6,
                'node': _0x4f1049
            };
        },
        'getPath': function(_0x222f2e) {
            var _0x5a41d2;
            while (!![]) {
                if (_0x23c512['isRoot'](_0x222f2e)) {
                    var _0x52ffd8 = _0x222f2e['mount']['mountpoint'];
                    if (!_0x5a41d2)
                        return _0x52ffd8;
                    return _0x52ffd8[_0x52ffd8['length'] - 0x1] !== '/' ? _0x52ffd8 + '/' + _0x5a41d2 : _0x52ffd8 + _0x5a41d2;
                }
                _0x5a41d2 = _0x5a41d2 ? _0x222f2e['name'] + '/' + _0x5a41d2 : _0x222f2e['name'],
                _0x222f2e = _0x222f2e['parent'];
            }
        },
        'hashName': function(_0x42c6c6, _0xe097ec) {
            var _0x369d34 = 0x0;
            for (var _0x3a05e0 = 0x0; _0x3a05e0 < _0xe097ec['length']; _0x3a05e0++) {
                _0x369d34 = (_0x369d34 << 0x5) - _0x369d34 + _0xe097ec['charCodeAt'](_0x3a05e0) | 0x0;
            }
            return (_0x42c6c6 + _0x369d34 >>> 0x0) % _0x23c512['nameTable']['length'];
        },
        'hashAddNode': function(_0x1fc879) {
            var _0x314f33 = _0x23c512['hashName'](_0x1fc879['parent']['id'], _0x1fc879['name']);
            _0x1fc879['name_next'] = _0x23c512['nameTable'][_0x314f33],
            _0x23c512['nameTable'][_0x314f33] = _0x1fc879;
        },
        'hashRemoveNode': function(_0x5d467d) {
            var _0x281a39 = _0x23c512['hashName'](_0x5d467d['parent']['id'], _0x5d467d['name']);
            if (_0x23c512['nameTable'][_0x281a39] === _0x5d467d)
                _0x23c512['nameTable'][_0x281a39] = _0x5d467d['name_next'];
            else {
                var _0x4e4dd1 = _0x23c512['nameTable'][_0x281a39];
                while (_0x4e4dd1) {
                    if (_0x4e4dd1['name_next'] === _0x5d467d) {
                        _0x4e4dd1['name_next'] = _0x5d467d['name_next'];
                        break;
                    }
                    _0x4e4dd1 = _0x4e4dd1['name_next'];
                }
            }
        },
        'lookupNode': function(_0x377c45, _0x271617) {
            var _0x7113ec = _0x23c512['mayLookup'](_0x377c45);
            if (_0x7113ec)
                throw new _0x23c512['ErrnoError'](_0x7113ec,_0x377c45);
            var _0x51370c = _0x23c512['hashName'](_0x377c45['id'], _0x271617);
            for (var _0x52b3a3 = _0x23c512['nameTable'][_0x51370c]; _0x52b3a3; _0x52b3a3 = _0x52b3a3['name_next']) {
                var _0x3d04a0 = _0x52b3a3['name'];
                if (_0x52b3a3['parent']['id'] === _0x377c45['id'] && _0x3d04a0 === _0x271617)
                    return _0x52b3a3;
            }
            return _0x23c512['lookup'](_0x377c45, _0x271617);
        },
        'createNode': function(_0x4be689, _0x45b277, _0x2c0fe9, _0x1fbdcb) {
            var _0x3eac7b = new _0x23c512['FSNode'](_0x4be689,_0x45b277,_0x2c0fe9,_0x1fbdcb);
            return _0x23c512['hashAddNode'](_0x3eac7b),
            _0x3eac7b;
        },
        'destroyNode': function(_0x45b27f) {
            _0x23c512['hashRemoveNode'](_0x45b27f);
        },
        'isRoot': function(_0x119216) {
            return _0x119216 === _0x119216['parent'];
        },
        'isMountpoint': function(_0x35b0e0) {
            return !!_0x35b0e0['mounted'];
        },
        'isFile': function(_0x729a88) {
            return (_0x729a88 & 0xf000) === 0x8000;
        },
        'isDir': function(_0x510c0e) {
            return (_0x510c0e & 0xf000) === 0x4000;
        },
        'isLink': function(_0x1c15d3) {
            return (_0x1c15d3 & 0xf000) === 0xa000;
        },
        'isChrdev': function(_0x41444e) {
            return (_0x41444e & 0xf000) === 0x2000;
        },
        'isBlkdev': function(_0x36b008) {
            return (_0x36b008 & 0xf000) === 0x6000;
        },
        'isFIFO': function(_0x517173) {
            return (_0x517173 & 0xf000) === 0x1000;
        },
        'isSocket': function(_0x588f1e) {
            return (_0x588f1e & 0xc000) === 0xc000;
        },
        'flagModes': {
            'r': 0x0,
            'r+': 0x2,
            'w': 0x241,
            'w+': 0x242,
            'a': 0x441,
            'a+': 0x442
        },
        'modeStringToFlags': function(_0x5f1758) {
            var _0x13caa9 = _0x23c512['flagModes'][_0x5f1758];
            if (typeof _0x13caa9 === 'undefined')
                throw new Error('Unknown file open mode: ' + _0x5f1758);
            return _0x13caa9;
        },
        'flagsToPermissionString': function(_0x44cbf7) {
            var _0x1c6400 = ['r', 'w', 'rw'][_0x44cbf7 & 0x3];
            return _0x44cbf7 & 0x200 && (_0x1c6400 += 'w'),
            _0x1c6400;
        },
        'nodePermissions': function(_0x3c7ede, _0x53f2af) {
            if (_0x23c512['ignorePermissions'])
                return 0x0;
            if (_0x53f2af['includes']('r') && !(_0x3c7ede['mode'] & 0x124))
                return 0x2;
            else {
                if (_0x53f2af['includes']('w') && !(_0x3c7ede['mode'] & 0x92))
                    return 0x2;
                else {
                    if (_0x53f2af['includes']('x') && !(_0x3c7ede['mode'] & 0x49))
                        return 0x2;
                }
            }
            return 0x0;
        },
        'mayLookup': function(_0x5a27d9) {
            var _0x1891d1 = _0x23c512['nodePermissions'](_0x5a27d9, 'x');
            if (_0x1891d1)
                return _0x1891d1;
            if (!_0x5a27d9['node_ops']['lookup'])
                return 0x2;
            return 0x0;
        },
        'mayCreate': function(_0xb72a3b, _0x50c68f) {
            try {
                var _0x3be396 = _0x23c512['lookupNode'](_0xb72a3b, _0x50c68f);
                return 0x14;
            } catch (_0x3b0c09) {}
            return _0x23c512['nodePermissions'](_0xb72a3b, 'wx');
        },
        'mayDelete': function(_0x166f5f, _0x4a2897, _0x1e289f) {
            var _0x411097;
            try {
                _0x411097 = _0x23c512['lookupNode'](_0x166f5f, _0x4a2897);
            } catch (_0x347abf) {
                return _0x347abf['errno'];
            }
            var _0x532d3f = _0x23c512['nodePermissions'](_0x166f5f, 'wx');
            if (_0x532d3f)
                return _0x532d3f;
            if (_0x1e289f) {
                if (!_0x23c512['isDir'](_0x411097['mode']))
                    return 0x36;
                if (_0x23c512['isRoot'](_0x411097) || _0x23c512['getPath'](_0x411097) === _0x23c512['cwd']())
                    return 0xa;
            } else {
                if (_0x23c512['isDir'](_0x411097['mode']))
                    return 0x1f;
            }
            return 0x0;
        },
        'mayOpen': function(_0x3b37e2, _0x2b2f30) {
            if (!_0x3b37e2)
                return 0x2c;
            if (_0x23c512['isLink'](_0x3b37e2['mode']))
                return 0x20;
            else {
                if (_0x23c512['isDir'](_0x3b37e2['mode'])) {
                    if (_0x23c512['flagsToPermissionString'](_0x2b2f30) !== 'r' || _0x2b2f30 & 0x200)
                        return 0x1f;
                }
            }
            return _0x23c512['nodePermissions'](_0x3b37e2, _0x23c512['flagsToPermissionString'](_0x2b2f30));
        },
        'MAX_OPEN_FDS': 0x1000,
        'nextfd': function(_0x487777, _0x53b821) {
            _0x487777 = _0x487777 || 0x0,
            _0x53b821 = _0x53b821 || _0x23c512['MAX_OPEN_FDS'];
            for (var _0x46b269 = _0x487777; _0x46b269 <= _0x53b821; _0x46b269++) {
                if (!_0x23c512['streams'][_0x46b269])
                    return _0x46b269;
            }
            throw new _0x23c512['ErrnoError'](0x21);
        },
        'getStream': function(_0x792636) {
            return _0x23c512['streams'][_0x792636];
        },
        'createStream': function(_0x42a9a9, _0x5440cc, _0x2bce84) {
            !_0x23c512['FSStream'] && (_0x23c512['FSStream'] = function() {}
            ,
            _0x23c512['FSStream']['prototype'] = {
                'object': {
                    'get': function() {
                        return this['node'];
                    },
                    'set': function(_0x49a67d) {
                        this['node'] = _0x49a67d;
                    }
                },
                'isRead': {
                    'get': function() {
                        return (this['flags'] & 0x200003) !== 0x1;
                    }
                },
                'isWrite': {
                    'get': function() {
                        return (this['flags'] & 0x200003) !== 0x0;
                    }
                },
                'isAppend': {
                    'get': function() {
                        return this['flags'] & 0x400;
                    }
                }
            });
            var _0x87f48b = new _0x23c512['FSStream']();
            for (var _0x2fff0d in _0x42a9a9) {
                _0x87f48b[_0x2fff0d] = _0x42a9a9[_0x2fff0d];
            }
            _0x42a9a9 = _0x87f48b;
            var _0x1871f9 = _0x23c512['nextfd'](_0x5440cc, _0x2bce84);
            return _0x42a9a9['fd'] = _0x1871f9,
            _0x23c512['streams'][_0x1871f9] = _0x42a9a9,
            _0x42a9a9;
        },
        'closeStream': function(_0x335e7b) {
            _0x23c512['streams'][_0x335e7b] = null;
        },
        'chrdev_stream_ops': {
            'open': function(_0x11d4ea) {
                var _0x361034 = _0x23c512['getDevice'](_0x11d4ea['node']['rdev']);
                _0x11d4ea['stream_ops'] = _0x361034['stream_ops'],
                _0x11d4ea['stream_ops']['open'] && _0x11d4ea['stream_ops']['open'](_0x11d4ea);
            },
            'llseek': function() {
                throw new _0x23c512['ErrnoError'](0x46);
            }
        },
        'major': function(_0x2eccdc) {
            return _0x2eccdc >> 0x8;
        },
        'minor': function(_0x1c4070) {
            return _0x1c4070 & 0xff;
        },
        'makedev': function(_0x1f7fca, _0x38c13f) {
            return _0x1f7fca << 0x8 | _0x38c13f;
        },
        'registerDevice': function(_0x31da5d, _0x50e460) {
            _0x23c512['devices'][_0x31da5d] = {
                'stream_ops': _0x50e460
            };
        },
        'getDevice': function(_0x33432a) {
            return _0x23c512['devices'][_0x33432a];
        },
        'getMounts': function(_0x2dec56) {
            var _0x393e9a = []
              , _0x4c139c = [_0x2dec56];
            while (_0x4c139c['length']) {
                var _0xa4903c = _0x4c139c['pop']();
                _0x393e9a['push'](_0xa4903c),
                _0x4c139c['push']['apply'](_0x4c139c, _0xa4903c['mounts']);
            }
            return _0x393e9a;
        },
        'syncfs': function(_0x393f25, _0x307871) {
            typeof _0x393f25 === 'function' && (_0x307871 = _0x393f25,
            _0x393f25 = ![]);
            _0x23c512['syncFSRequests']++;
            _0x23c512['syncFSRequests'] > 0x1 && _0x5a96d4('warning: ' + _0x23c512['syncFSRequests'] + ' FS.syncfs operations in flight at once, probably just doing extra work');
            var _0x43df94 = _0x23c512['getMounts'](_0x23c512['root']['mount'])
              , _0x508b38 = 0x0;
            function _0x25804d(_0x4aa2a7) {
                return _0x23c512['syncFSRequests']--,
                _0x307871(_0x4aa2a7);
            }
            function _0x249592(_0x4f7828) {
                if (_0x4f7828) {
                    if (!_0x249592['errored'])
                        return _0x249592['errored'] = !![],
                        _0x25804d(_0x4f7828);
                    return;
                }
                ++_0x508b38 >= _0x43df94['length'] && _0x25804d(null);
            }
            _0x43df94['forEach'](function(_0x291dc2) {
                if (!_0x291dc2['type']['syncfs'])
                    return _0x249592(null);
                _0x291dc2['type']['syncfs'](_0x291dc2, _0x393f25, _0x249592);
            });
        },
        'mount': function(_0x2f9f9f, _0x30512b, _0x2ead68) {
            var _0x115c91 = _0x2ead68 === '/', _0x57106d = !_0x2ead68, _0x4ff44a;
            if (_0x115c91 && _0x23c512['root'])
                throw new _0x23c512['ErrnoError'](0xa);
            else {
                if (!_0x115c91 && !_0x57106d) {
                    var _0x1ae25c = _0x23c512['lookupPath'](_0x2ead68, {
                        'follow_mount': ![]
                    });
                    _0x2ead68 = _0x1ae25c['path'],
                    _0x4ff44a = _0x1ae25c['node'];
                    if (_0x23c512['isMountpoint'](_0x4ff44a))
                        throw new _0x23c512['ErrnoError'](0xa);
                    if (!_0x23c512['isDir'](_0x4ff44a['mode']))
                        throw new _0x23c512['ErrnoError'](0x36);
                }
            }
            var _0x324f75 = {
                'type': _0x2f9f9f,
                'opts': _0x30512b,
                'mountpoint': _0x2ead68,
                'mounts': []
            }
              , _0x323358 = _0x2f9f9f['mount'](_0x324f75);
            _0x323358['mount'] = _0x324f75,
            _0x324f75['root'] = _0x323358;
            if (_0x115c91)
                _0x23c512['root'] = _0x323358;
            else
                _0x4ff44a && (_0x4ff44a['mounted'] = _0x324f75,
                _0x4ff44a['mount'] && _0x4ff44a['mount']['mounts']['push'](_0x324f75));
            return _0x323358;
        },
        'unmount': function(_0x42d5d4) {
            var _0x36ff3c = _0x23c512['lookupPath'](_0x42d5d4, {
                'follow_mount': ![]
            });
            if (!_0x23c512['isMountpoint'](_0x36ff3c['node']))
                throw new _0x23c512['ErrnoError'](0x1c);
            var _0x5d7168 = _0x36ff3c['node']
              , _0x2ab23c = _0x5d7168['mounted']
              , _0x301ed2 = _0x23c512['getMounts'](_0x2ab23c);
            Object['keys'](_0x23c512['nameTable'])['forEach'](function(_0x38a1c3) {
                var _0x1ec453 = _0x23c512['nameTable'][_0x38a1c3];
                while (_0x1ec453) {
                    var _0x398ded = _0x1ec453['name_next'];
                    _0x301ed2['includes'](_0x1ec453['mount']) && _0x23c512['destroyNode'](_0x1ec453),
                    _0x1ec453 = _0x398ded;
                }
            }),
            _0x5d7168['mounted'] = null;
            var _0x43af4b = _0x5d7168['mount']['mounts']['indexOf'](_0x2ab23c);
            _0x5d7168['mount']['mounts']['splice'](_0x43af4b, 0x1);
        },
        'lookup': function(_0x594166, _0xa9ed2a) {
            return _0x594166['node_ops']['lookup'](_0x594166, _0xa9ed2a);
        },
        'mknod': function(_0x2339d7, _0x12dbe1, _0x2a1834) {
            var _0x4d91ac = _0x23c512['lookupPath'](_0x2339d7, {
                'parent': !![]
            })
              , _0x403574 = _0x4d91ac['node']
              , _0xf3e86d = _0x34af61['basename'](_0x2339d7);
            if (!_0xf3e86d || _0xf3e86d === '.' || _0xf3e86d === '..')
                throw new _0x23c512['ErrnoError'](0x1c);
            var _0x42d6ab = _0x23c512['mayCreate'](_0x403574, _0xf3e86d);
            if (_0x42d6ab)
                throw new _0x23c512['ErrnoError'](_0x42d6ab);
            if (!_0x403574['node_ops']['mknod'])
                throw new _0x23c512['ErrnoError'](0x3f);
            return _0x403574['node_ops']['mknod'](_0x403574, _0xf3e86d, _0x12dbe1, _0x2a1834);
        },
        'create': function(_0x308923, _0x42b824) {
            return _0x42b824 = _0x42b824 !== undefined ? _0x42b824 : 0x1b6,
            _0x42b824 &= 0xfff,
            _0x42b824 |= 0x8000,
            _0x23c512['mknod'](_0x308923, _0x42b824, 0x0);
        },
        'mkdir': function(_0x4a4f4b, _0x2359c8) {
            return _0x2359c8 = _0x2359c8 !== undefined ? _0x2359c8 : 0x1ff,
            _0x2359c8 &= 0x1ff | 0x200,
            _0x2359c8 |= 0x4000,
            _0x23c512['mknod'](_0x4a4f4b, _0x2359c8, 0x0);
        },
        'mkdirTree': function(_0x82b238, _0xa8f1b2) {
            var _0xc3273c = _0x82b238['split']('/')
              , _0x408028 = '';
            for (var _0x122df3 = 0x0; _0x122df3 < _0xc3273c['length']; ++_0x122df3) {
                if (!_0xc3273c[_0x122df3])
                    continue;
                _0x408028 += '/' + _0xc3273c[_0x122df3];
                try {
                    _0x23c512['mkdir'](_0x408028, _0xa8f1b2);
                } catch (_0x1fc0f0) {
                    if (_0x1fc0f0['errno'] != 0x14)
                        throw _0x1fc0f0;
                }
            }
        },
        'mkdev': function(_0x4868d4, _0x252176, _0x2f6b70) {
            return typeof _0x2f6b70 === 'undefined' && (_0x2f6b70 = _0x252176,
            _0x252176 = 0x1b6),
            _0x252176 |= 0x2000,
            _0x23c512['mknod'](_0x4868d4, _0x252176, _0x2f6b70);
        },
        'symlink': function(_0x2217e2, _0x382cf4) {
            if (!_0x57cfd3['resolve'](_0x2217e2))
                throw new _0x23c512['ErrnoError'](0x2c);
            var _0x192796 = _0x23c512['lookupPath'](_0x382cf4, {
                'parent': !![]
            })
              , _0x317290 = _0x192796['node'];
            if (!_0x317290)
                throw new _0x23c512['ErrnoError'](0x2c);
            var _0x2023fa = _0x34af61['basename'](_0x382cf4)
              , _0x2b90fd = _0x23c512['mayCreate'](_0x317290, _0x2023fa);
            if (_0x2b90fd)
                throw new _0x23c512['ErrnoError'](_0x2b90fd);
            if (!_0x317290['node_ops']['symlink'])
                throw new _0x23c512['ErrnoError'](0x3f);
            return _0x317290['node_ops']['symlink'](_0x317290, _0x2023fa, _0x2217e2);
        },
        'rename': function(_0x36648c, _0x3e4ab4) {
            var _0x3dbeff = _0x34af61['dirname'](_0x36648c), _0x25410b = _0x34af61['dirname'](_0x3e4ab4), _0x1390f8 = _0x34af61['basename'](_0x36648c), _0x16e907 = _0x34af61['basename'](_0x3e4ab4), _0x3ce0e1, _0x59f42a, _0x4878ca;
            _0x3ce0e1 = _0x23c512['lookupPath'](_0x36648c, {
                'parent': !![]
            }),
            _0x59f42a = _0x3ce0e1['node'],
            _0x3ce0e1 = _0x23c512['lookupPath'](_0x3e4ab4, {
                'parent': !![]
            }),
            _0x4878ca = _0x3ce0e1['node'];
            if (!_0x59f42a || !_0x4878ca)
                throw new _0x23c512['ErrnoError'](0x2c);
            if (_0x59f42a['mount'] !== _0x4878ca['mount'])
                throw new _0x23c512['ErrnoError'](0x4b);
            var _0x3c5b4d = _0x23c512['lookupNode'](_0x59f42a, _0x1390f8)
              , _0x35f23c = _0x57cfd3['relative'](_0x36648c, _0x25410b);
            if (_0x35f23c['charAt'](0x0) !== '.')
                throw new _0x23c512['ErrnoError'](0x1c);
            _0x35f23c = _0x57cfd3['relative'](_0x3e4ab4, _0x3dbeff);
            if (_0x35f23c['charAt'](0x0) !== '.')
                throw new _0x23c512['ErrnoError'](0x37);
            var _0x5e887b;
            try {
                _0x5e887b = _0x23c512['lookupNode'](_0x4878ca, _0x16e907);
            } catch (_0x195004) {}
            if (_0x3c5b4d === _0x5e887b)
                return;
            var _0x176cfa = _0x23c512['isDir'](_0x3c5b4d['mode'])
              , _0x14b51a = _0x23c512['mayDelete'](_0x59f42a, _0x1390f8, _0x176cfa);
            if (_0x14b51a)
                throw new _0x23c512['ErrnoError'](_0x14b51a);
            _0x14b51a = _0x5e887b ? _0x23c512['mayDelete'](_0x4878ca, _0x16e907, _0x176cfa) : _0x23c512['mayCreate'](_0x4878ca, _0x16e907);
            if (_0x14b51a)
                throw new _0x23c512['ErrnoError'](_0x14b51a);
            if (!_0x59f42a['node_ops']['rename'])
                throw new _0x23c512['ErrnoError'](0x3f);
            if (_0x23c512['isMountpoint'](_0x3c5b4d) || _0x5e887b && _0x23c512['isMountpoint'](_0x5e887b))
                throw new _0x23c512['ErrnoError'](0xa);
            if (_0x4878ca !== _0x59f42a) {
                _0x14b51a = _0x23c512['nodePermissions'](_0x59f42a, 'w');
                if (_0x14b51a)
                    throw new _0x23c512['ErrnoError'](_0x14b51a);
            }
            try {
                _0x23c512['trackingDelegate']['willMovePath'] && _0x23c512['trackingDelegate']['willMovePath'](_0x36648c, _0x3e4ab4);
            } catch (_0x5349c1) {
                _0x5a96d4('FS.trackingDelegate['willMovePath']('' + _0x36648c + '', '' + _0x3e4ab4 + '') threw an exception: ' + _0x5349c1['message']);
            }
            _0x23c512['hashRemoveNode'](_0x3c5b4d);
            try {
                _0x59f42a['node_ops']['rename'](_0x3c5b4d, _0x4878ca, _0x16e907);
            } catch (_0x5884a5) {
                throw _0x5884a5;
            } finally {
                _0x23c512['hashAddNode'](_0x3c5b4d);
            }
            try {
                if (_0x23c512['trackingDelegate']['onMovePath'])
                    _0x23c512['trackingDelegate']['onMovePath'](_0x36648c, _0x3e4ab4);
            } catch (_0x49619c) {
                _0x5a96d4('FS.trackingDelegate['onMovePath']('' + _0x36648c + '', '' + _0x3e4ab4 + '') threw an exception: ' + _0x49619c['message']);
            }
        },
        'rmdir': function(_0x5ea8eb) {
            var _0x3793a7 = _0x23c512['lookupPath'](_0x5ea8eb, {
                'parent': !![]
            })
              , _0x5aa46e = _0x3793a7['node']
              , _0x20213a = _0x34af61['basename'](_0x5ea8eb)
              , _0x274f72 = _0x23c512['lookupNode'](_0x5aa46e, _0x20213a)
              , _0x217d5d = _0x23c512['mayDelete'](_0x5aa46e, _0x20213a, !![]);
            if (_0x217d5d)
                throw new _0x23c512['ErrnoError'](_0x217d5d);
            if (!_0x5aa46e['node_ops']['rmdir'])
                throw new _0x23c512['ErrnoError'](0x3f);
            if (_0x23c512['isMountpoint'](_0x274f72))
                throw new _0x23c512['ErrnoError'](0xa);
            try {
                _0x23c512['trackingDelegate']['willDeletePath'] && _0x23c512['trackingDelegate']['willDeletePath'](_0x5ea8eb);
            } catch (_0x338aff) {
                _0x5a96d4('FS.trackingDelegate['willDeletePath']('' + _0x5ea8eb + '') threw an exception: ' + _0x338aff['message']);
            }
            _0x5aa46e['node_ops']['rmdir'](_0x5aa46e, _0x20213a),
            _0x23c512['destroyNode'](_0x274f72);
            try {
                if (_0x23c512['trackingDelegate']['onDeletePath'])
                    _0x23c512['trackingDelegate']['onDeletePath'](_0x5ea8eb);
            } catch (_0x52927b) {
                _0x5a96d4('FS.trackingDelegate['onDeletePath']('' + _0x5ea8eb + '') threw an exception: ' + _0x52927b['message']);
            }
        },
        'readdir': function(_0x2c5899) {
            var _0x29aeda = _0x23c512['lookupPath'](_0x2c5899, {
                'follow': !![]
            })
              , _0x90d0c5 = _0x29aeda['node'];
            if (!_0x90d0c5['node_ops']['readdir'])
                throw new _0x23c512['ErrnoError'](0x36);
            return _0x90d0c5['node_ops']['readdir'](_0x90d0c5);
        },
        'unlink': function(_0x390126) {
            var _0x3a9683 = _0x23c512['lookupPath'](_0x390126, {
                'parent': !![]
            })
              , _0x24fe33 = _0x3a9683['node']
              , _0x221111 = _0x34af61['basename'](_0x390126)
              , _0x555121 = _0x23c512['lookupNode'](_0x24fe33, _0x221111)
              , _0x5c5005 = _0x23c512['mayDelete'](_0x24fe33, _0x221111, ![]);
            if (_0x5c5005)
                throw new _0x23c512['ErrnoError'](_0x5c5005);
            if (!_0x24fe33['node_ops']['unlink'])
                throw new _0x23c512['ErrnoError'](0x3f);
            if (_0x23c512['isMountpoint'](_0x555121))
                throw new _0x23c512['ErrnoError'](0xa);
            try {
                _0x23c512['trackingDelegate']['willDeletePath'] && _0x23c512['trackingDelegate']['willDeletePath'](_0x390126);
            } catch (_0x5b3369) {
                _0x5a96d4('FS.trackingDelegate['willDeletePath']('' + _0x390126 + '') threw an exception: ' + _0x5b3369['message']);
            }
            _0x24fe33['node_ops']['unlink'](_0x24fe33, _0x221111),
            _0x23c512['destroyNode'](_0x555121);
            try {
                if (_0x23c512['trackingDelegate']['onDeletePath'])
                    _0x23c512['trackingDelegate']['onDeletePath'](_0x390126);
            } catch (_0xc702ee) {
                _0x5a96d4('FS.trackingDelegate['onDeletePath']('' + _0x390126 + '') threw an exception: ' + _0xc702ee['message']);
            }
        },
        'readlink': function(_0x1fcbc6) {
            var _0x2412ce = _0x23c512['lookupPath'](_0x1fcbc6)
              , _0x5d5896 = _0x2412ce['node'];
            if (!_0x5d5896)
                throw new _0x23c512['ErrnoError'](0x2c);
            if (!_0x5d5896['node_ops']['readlink'])
                throw new _0x23c512['ErrnoError'](0x1c);
            return _0x57cfd3['resolve'](_0x23c512['getPath'](_0x5d5896['parent']), _0x5d5896['node_ops']['readlink'](_0x5d5896));
        },
        'stat': function(_0x4ff0b9, _0xfc8be5) {
            var _0xdfee93 = _0x23c512['lookupPath'](_0x4ff0b9, {
                'follow': !_0xfc8be5
            })
              , _0x51f07a = _0xdfee93['node'];
            if (!_0x51f07a)
                throw new _0x23c512['ErrnoError'](0x2c);
            if (!_0x51f07a['node_ops']['getattr'])
                throw new _0x23c512['ErrnoError'](0x3f);
            return _0x51f07a['node_ops']['getattr'](_0x51f07a);
        },
        'lstat': function(_0x14e86c) {
            return _0x23c512['stat'](_0x14e86c, !![]);
        },
        'chmod': function(_0x1ea3d2, _0x46e1d4, _0x4128d2) {
            var _0x1471ef;
            if (typeof _0x1ea3d2 === 'string') {
                var _0x195549 = _0x23c512['lookupPath'](_0x1ea3d2, {
                    'follow': !_0x4128d2
                });
                _0x1471ef = _0x195549['node'];
            } else
                _0x1471ef = _0x1ea3d2;
            if (!_0x1471ef['node_ops']['setattr'])
                throw new _0x23c512['ErrnoError'](0x3f);
            _0x1471ef['node_ops']['setattr'](_0x1471ef, {
                'mode': _0x46e1d4 & 0xfff | _0x1471ef['mode'] & ~0xfff,
                'timestamp': Date['now']()
            });
        },
        'lchmod': function(_0x3ff944, _0x486c96) {
            _0x23c512['chmod'](_0x3ff944, _0x486c96, !![]);
        },
        'fchmod': function(_0x3c6982, _0x47478d) {
            var _0x127635 = _0x23c512['getStream'](_0x3c6982);
            if (!_0x127635)
                throw new _0x23c512['ErrnoError'](0x8);
            _0x23c512['chmod'](_0x127635['node'], _0x47478d);
        },
        'chown': function(_0x5945dd, _0x2d4134, _0x50fbc2, _0xd0ae2f) {
            var _0x286d2e;
            if (typeof _0x5945dd === 'string') {
                var _0xa6f934 = _0x23c512['lookupPath'](_0x5945dd, {
                    'follow': !_0xd0ae2f
                });
                _0x286d2e = _0xa6f934['node'];
            } else
                _0x286d2e = _0x5945dd;
            if (!_0x286d2e['node_ops']['setattr'])
                throw new _0x23c512['ErrnoError'](0x3f);
            _0x286d2e['node_ops']['setattr'](_0x286d2e, {
                'timestamp': Date['now']()
            });
        },
        'lchown': function(_0x3b56af, _0x1e942e, _0x1fb011) {
            _0x23c512['chown'](_0x3b56af, _0x1e942e, _0x1fb011, !![]);
        },
        'fchown': function(_0x4827be, _0x480f86, _0xba84b1) {
            var _0xea1625 = _0x23c512['getStream'](_0x4827be);
            if (!_0xea1625)
                throw new _0x23c512['ErrnoError'](0x8);
            _0x23c512['chown'](_0xea1625['node'], _0x480f86, _0xba84b1);
        },
        'truncate': function(_0x249ce4, _0x4c9055) {
            if (_0x4c9055 < 0x0)
                throw new _0x23c512['ErrnoError'](0x1c);
            var _0x49158a;
            if (typeof _0x249ce4 === 'string') {
                var _0x477781 = _0x23c512['lookupPath'](_0x249ce4, {
                    'follow': !![]
                });
                _0x49158a = _0x477781['node'];
            } else
                _0x49158a = _0x249ce4;
            if (!_0x49158a['node_ops']['setattr'])
                throw new _0x23c512['ErrnoError'](0x3f);
            if (_0x23c512['isDir'](_0x49158a['mode']))
                throw new _0x23c512['ErrnoError'](0x1f);
            if (!_0x23c512['isFile'](_0x49158a['mode']))
                throw new _0x23c512['ErrnoError'](0x1c);
            var _0x394649 = _0x23c512['nodePermissions'](_0x49158a, 'w');
            if (_0x394649)
                throw new _0x23c512['ErrnoError'](_0x394649);
            _0x49158a['node_ops']['setattr'](_0x49158a, {
                'size': _0x4c9055,
                'timestamp': Date['now']()
            });
        },
        'ftruncate': function(_0x55646b, _0x400f50) {
            var _0x92e7ad = _0x23c512['getStream'](_0x55646b);
            if (!_0x92e7ad)
                throw new _0x23c512['ErrnoError'](0x8);
            if ((_0x92e7ad['flags'] & 0x200003) === 0x0)
                throw new _0x23c512['ErrnoError'](0x1c);
            _0x23c512['truncate'](_0x92e7ad['node'], _0x400f50);
        },
        'utime': function(_0x441c76, _0x4eac99, _0x1d2cc9) {
            var _0x1e30dd = _0x23c512['lookupPath'](_0x441c76, {
                'follow': !![]
            })
              , _0x84ef76 = _0x1e30dd['node'];
            _0x84ef76['node_ops']['setattr'](_0x84ef76, {
                'timestamp': Math['max'](_0x4eac99, _0x1d2cc9)
            });
        },
        'open': function(_0x2016fe, _0x33c6c7, _0x34ee73, _0x2683e2, _0x845a56) {
            if (_0x2016fe === '')
                throw new _0x23c512['ErrnoError'](0x2c);
            _0x33c6c7 = typeof _0x33c6c7 === 'string' ? _0x23c512['modeStringToFlags'](_0x33c6c7) : _0x33c6c7,
            _0x34ee73 = typeof _0x34ee73 === 'undefined' ? 0x1b6 : _0x34ee73;
            _0x33c6c7 & 0x40 ? _0x34ee73 = _0x34ee73 & 0xfff | 0x8000 : _0x34ee73 = 0x0;
            var _0x1a3a20;
            if (typeof _0x2016fe === 'object')
                _0x1a3a20 = _0x2016fe;
            else {
                _0x2016fe = _0x34af61['normalize'](_0x2016fe);
                try {
                    var _0x538e23 = _0x23c512['lookupPath'](_0x2016fe, {
                        'follow': !(_0x33c6c7 & 0x20000)
                    });
                    _0x1a3a20 = _0x538e23['node'];
                } catch (_0x4ddba8) {}
            }
            var _0x12fe84 = ![];
            if (_0x33c6c7 & 0x40) {
                if (_0x1a3a20) {
                    if (_0x33c6c7 & 0x80)
                        throw new _0x23c512['ErrnoError'](0x14);
                } else
                    _0x1a3a20 = _0x23c512['mknod'](_0x2016fe, _0x34ee73, 0x0),
                    _0x12fe84 = !![];
            }
            if (!_0x1a3a20)
                throw new _0x23c512['ErrnoError'](0x2c);
            _0x23c512['isChrdev'](_0x1a3a20['mode']) && (_0x33c6c7 &= ~0x200);
            if (_0x33c6c7 & 0x10000 && !_0x23c512['isDir'](_0x1a3a20['mode']))
                throw new _0x23c512['ErrnoError'](0x36);
            if (!_0x12fe84) {
                var _0x4ed792 = _0x23c512['mayOpen'](_0x1a3a20, _0x33c6c7);
                if (_0x4ed792)
                    throw new _0x23c512['ErrnoError'](_0x4ed792);
            }
            _0x33c6c7 & 0x200 && _0x23c512['truncate'](_0x1a3a20, 0x0);
            _0x33c6c7 &= ~(0x80 | 0x200 | 0x20000);
            var _0x3fbb17 = _0x23c512['createStream']({
                'node': _0x1a3a20,
                'path': _0x23c512['getPath'](_0x1a3a20),
                'flags': _0x33c6c7,
                'seekable': !![],
                'position': 0x0,
                'stream_ops': _0x1a3a20['stream_ops'],
                'ungotten': [],
                'error': ![]
            }, _0x2683e2, _0x845a56);
            _0x3fbb17['stream_ops']['open'] && _0x3fbb17['stream_ops']['open'](_0x3fbb17);
            if (_0x1455c0['logReadFiles'] && !(_0x33c6c7 & 0x1)) {
                if (!_0x23c512['readFiles'])
                    _0x23c512['readFiles'] = {};
                !(_0x2016fe in _0x23c512['readFiles']) && (_0x23c512['readFiles'][_0x2016fe] = 0x1,
                _0x5a96d4('FS.trackingDelegate error on read file: ' + _0x2016fe));
            }
            try {
                if (_0x23c512['trackingDelegate']['onOpenFile']) {
                    var _0x462a03 = 0x0;
                    (_0x33c6c7 & 0x200003) !== 0x1 && (_0x462a03 |= _0x23c512['tracking']['openFlags']['READ']),
                    (_0x33c6c7 & 0x200003) !== 0x0 && (_0x462a03 |= _0x23c512['tracking']['openFlags']['WRITE']),
                    _0x23c512['trackingDelegate']['onOpenFile'](_0x2016fe, _0x462a03);
                }
            } catch (_0x200d03) {
                _0x5a96d4('FS.trackingDelegate['onOpenFile']('' + _0x2016fe + '', flags) threw an exception: ' + _0x200d03['message']);
            }
            return _0x3fbb17;
        },
        'close': function(_0x491cbb) {
            if (_0x23c512['isClosed'](_0x491cbb))
                throw new _0x23c512['ErrnoError'](0x8);
            if (_0x491cbb['getdents'])
                _0x491cbb['getdents'] = null;
            try {
                _0x491cbb['stream_ops']['close'] && _0x491cbb['stream_ops']['close'](_0x491cbb);
            } catch (_0x5e08c8) {
                throw _0x5e08c8;
            } finally {
                _0x23c512['closeStream'](_0x491cbb['fd']);
            }
            _0x491cbb['fd'] = null;
        },
        'isClosed': function(_0xbb0236) {
            return _0xbb0236['fd'] === null;
        },
        'llseek': function(_0x2abc15, _0x10eba3, _0x4f14ff) {
            if (_0x23c512['isClosed'](_0x2abc15))
                throw new _0x23c512['ErrnoError'](0x8);
            if (!_0x2abc15['seekable'] || !_0x2abc15['stream_ops']['llseek'])
                throw new _0x23c512['ErrnoError'](0x46);
            if (_0x4f14ff != 0x0 && _0x4f14ff != 0x1 && _0x4f14ff != 0x2)
                throw new _0x23c512['ErrnoError'](0x1c);
            return _0x2abc15['position'] = _0x2abc15['stream_ops']['llseek'](_0x2abc15, _0x10eba3, _0x4f14ff),
            _0x2abc15['ungotten'] = [],
            _0x2abc15['position'];
        },
        'read': function(_0x45b220, _0x43612e, _0x31d37c, _0x3e2444, _0xd26998) {
            if (_0x3e2444 < 0x0 || _0xd26998 < 0x0)
                throw new _0x23c512['ErrnoError'](0x1c);
            if (_0x23c512['isClosed'](_0x45b220))
                throw new _0x23c512['ErrnoError'](0x8);
            if ((_0x45b220['flags'] & 0x200003) === 0x1)
                throw new _0x23c512['ErrnoError'](0x8);
            if (_0x23c512['isDir'](_0x45b220['node']['mode']))
                throw new _0x23c512['ErrnoError'](0x1f);
            if (!_0x45b220['stream_ops']['read'])
                throw new _0x23c512['ErrnoError'](0x1c);
            var _0xf6bcee = typeof _0xd26998 !== 'undefined';
            if (!_0xf6bcee)
                _0xd26998 = _0x45b220['position'];
            else {
                if (!_0x45b220['seekable'])
                    throw new _0x23c512['ErrnoError'](0x46);
            }
            var _0x33816a = _0x45b220['stream_ops']['read'](_0x45b220, _0x43612e, _0x31d37c, _0x3e2444, _0xd26998);
            if (!_0xf6bcee)
                _0x45b220['position'] += _0x33816a;
            return _0x33816a;
        },
        'write': function(_0x47d69b, _0x46c909, _0x2a5f31, _0x2fbefa, _0x283cc1, _0x620595) {
            if (_0x2fbefa < 0x0 || _0x283cc1 < 0x0)
                throw new _0x23c512['ErrnoError'](0x1c);
            if (_0x23c512['isClosed'](_0x47d69b))
                throw new _0x23c512['ErrnoError'](0x8);
            if ((_0x47d69b['flags'] & 0x200003) === 0x0)
                throw new _0x23c512['ErrnoError'](0x8);
            if (_0x23c512['isDir'](_0x47d69b['node']['mode']))
                throw new _0x23c512['ErrnoError'](0x1f);
            if (!_0x47d69b['stream_ops']['write'])
                throw new _0x23c512['ErrnoError'](0x1c);
            _0x47d69b['seekable'] && _0x47d69b['flags'] & 0x400 && _0x23c512['llseek'](_0x47d69b, 0x0, 0x2);
            var _0x4e1c76 = typeof _0x283cc1 !== 'undefined';
            if (!_0x4e1c76)
                _0x283cc1 = _0x47d69b['position'];
            else {
                if (!_0x47d69b['seekable'])
                    throw new _0x23c512['ErrnoError'](0x46);
            }
            var _0xdd8b33 = _0x47d69b['stream_ops']['write'](_0x47d69b, _0x46c909, _0x2a5f31, _0x2fbefa, _0x283cc1, _0x620595);
            if (!_0x4e1c76)
                _0x47d69b['position'] += _0xdd8b33;
            try {
                if (_0x47d69b['path'] && _0x23c512['trackingDelegate']['onWriteToFile'])
                    _0x23c512['trackingDelegate']['onWriteToFile'](_0x47d69b['path']);
            } catch (_0x27d766) {
                _0x5a96d4('FS.trackingDelegate['onWriteToFile']('' + _0x47d69b['path'] + '') threw an exception: ' + _0x27d766['message']);
            }
            return _0xdd8b33;
        },
        'allocate': function(_0x14bc55, _0x11edaa, _0x1894ac) {
            if (_0x23c512['isClosed'](_0x14bc55))
                throw new _0x23c512['ErrnoError'](0x8);
            if (_0x11edaa < 0x0 || _0x1894ac <= 0x0)
                throw new _0x23c512['ErrnoError'](0x1c);
            if ((_0x14bc55['flags'] & 0x200003) === 0x0)
                throw new _0x23c512['ErrnoError'](0x8);
            if (!_0x23c512['isFile'](_0x14bc55['node']['mode']) && !_0x23c512['isDir'](_0x14bc55['node']['mode']))
                throw new _0x23c512['ErrnoError'](0x2b);
            if (!_0x14bc55['stream_ops']['allocate'])
                throw new _0x23c512['ErrnoError'](0x8a);
            _0x14bc55['stream_ops']['allocate'](_0x14bc55, _0x11edaa, _0x1894ac);
        },
        'mmap': function(_0x38db3c, _0xfc5bca, _0x16ab78, _0x1ee9eb, _0x2cbcdb, _0x523ae0) {
            if ((_0x2cbcdb & 0x2) !== 0x0 && (_0x523ae0 & 0x2) === 0x0 && (_0x38db3c['flags'] & 0x200003) !== 0x2)
                throw new _0x23c512['ErrnoError'](0x2);
            if ((_0x38db3c['flags'] & 0x200003) === 0x1)
                throw new _0x23c512['ErrnoError'](0x2);
            if (!_0x38db3c['stream_ops']['mmap'])
                throw new _0x23c512['ErrnoError'](0x2b);
            return _0x38db3c['stream_ops']['mmap'](_0x38db3c, _0xfc5bca, _0x16ab78, _0x1ee9eb, _0x2cbcdb, _0x523ae0);
        },
        'msync': function(_0x5f37c7, _0xea3a81, _0x1eef0c, _0x473a8b, _0x5a6737) {
            if (!_0x5f37c7 || !_0x5f37c7['stream_ops']['msync'])
                return 0x0;
            return _0x5f37c7['stream_ops']['msync'](_0x5f37c7, _0xea3a81, _0x1eef0c, _0x473a8b, _0x5a6737);
        },
        'munmap': function(_0x43010d) {
            return 0x0;
        },
        'ioctl': function(_0x108d58, _0x239f72, _0x1239a1) {
            if (!_0x108d58['stream_ops']['ioctl'])
                throw new _0x23c512['ErrnoError'](0x3b);
            return _0x108d58['stream_ops']['ioctl'](_0x108d58, _0x239f72, _0x1239a1);
        },
        'readFile': function(_0x203242, _0x1a7867) {
            _0x1a7867 = _0x1a7867 || {},
            _0x1a7867['flags'] = _0x1a7867['flags'] || 0x0,
            _0x1a7867['encoding'] = _0x1a7867['encoding'] || 'binary';
            if (_0x1a7867['encoding'] !== 'utf8' && _0x1a7867['encoding'] !== 'binary')
                throw new Error('Invalid encoding type "' + _0x1a7867['encoding'] + '"');
            var _0x45848e, _0x28bea7 = _0x23c512['open'](_0x203242, _0x1a7867['flags']), _0x32f51d = _0x23c512['stat'](_0x203242), _0x37b8a5 = _0x32f51d['size'], _0x1aedf6 = new Uint8Array(_0x37b8a5);
            _0x23c512['read'](_0x28bea7, _0x1aedf6, 0x0, _0x37b8a5, 0x0);
            if (_0x1a7867['encoding'] === 'utf8')
                _0x45848e = _0x44bcd4(_0x1aedf6, 0x0);
            else
                _0x1a7867['encoding'] === 'binary' && (_0x45848e = _0x1aedf6);
            return _0x23c512['close'](_0x28bea7),
            _0x45848e;
        },
        'writeFile': function(_0x52c29d, _0x465e4c, _0x4b256b) {
            _0x4b256b = _0x4b256b || {},
            _0x4b256b['flags'] = _0x4b256b['flags'] || 0x241;
            var _0xb22a7f = _0x23c512['open'](_0x52c29d, _0x4b256b['flags'], _0x4b256b['mode']);
            if (typeof _0x465e4c === 'string') {
                var _0x4c763e = new Uint8Array(_0x5a6a49(_0x465e4c) + 0x1)
                  , _0x3b77dc = _0x346e2c(_0x465e4c, _0x4c763e, 0x0, _0x4c763e['length']);
                _0x23c512['write'](_0xb22a7f, _0x4c763e, 0x0, _0x3b77dc, undefined, _0x4b256b['canOwn']);
            } else {
                if (ArrayBuffer['isView'](_0x465e4c))
                    _0x23c512['write'](_0xb22a7f, _0x465e4c, 0x0, _0x465e4c['byteLength'], undefined, _0x4b256b['canOwn']);
                else
                    throw new Error('Unsupported data type');
            }
            _0x23c512['close'](_0xb22a7f);
        },
        'cwd': function() {
            return _0x23c512['currentPath'];
        },
        'chdir': function(_0x483242) {
            var _0x4822c5 = _0x23c512['lookupPath'](_0x483242, {
                'follow': !![]
            });
            if (_0x4822c5['node'] === null)
                throw new _0x23c512['ErrnoError'](0x2c);
            if (!_0x23c512['isDir'](_0x4822c5['node']['mode']))
                throw new _0x23c512['ErrnoError'](0x36);
            var _0x2edb59 = _0x23c512['nodePermissions'](_0x4822c5['node'], 'x');
            if (_0x2edb59)
                throw new _0x23c512['ErrnoError'](_0x2edb59);
            _0x23c512['currentPath'] = _0x4822c5['path'];
        },
        'createDefaultDirectories': function() {
            _0x23c512['mkdir']('/tmp'),
            _0x23c512['mkdir']('/home'),
            _0x23c512['mkdir']('/home/web_user');
        },
        'createDefaultDevices': function() {
            _0x23c512['mkdir']('/dev'),
            _0x23c512['registerDevice'](_0x23c512['makedev'](0x1, 0x3), {
                'read': function() {
                    return 0x0;
                },
                'write': function(_0x38281b, _0x1619e3, _0x44a601, _0x17d331, _0x1e6391) {
                    return _0x17d331;
                }
            }),
            _0x23c512['mkdev']('/dev/null', _0x23c512['makedev'](0x1, 0x3)),
            _0xe4037a['register'](_0x23c512['makedev'](0x5, 0x0), _0xe4037a['default_tty_ops']),
            _0xe4037a['register'](_0x23c512['makedev'](0x6, 0x0), _0xe4037a['default_tty1_ops']),
            _0x23c512['mkdev']('/dev/tty', _0x23c512['makedev'](0x5, 0x0)),
            _0x23c512['mkdev']('/dev/tty1', _0x23c512['makedev'](0x6, 0x0));
            var _0x125426 = _0x1576e8();
            _0x23c512['createDevice']('/dev', 'random', _0x125426),
            _0x23c512['createDevice']('/dev', 'urandom', _0x125426),
            _0x23c512['mkdir']('/dev/shm'),
            _0x23c512['mkdir']('/dev/shm/tmp');
        },
        'createSpecialDirectories': function() {
            _0x23c512['mkdir']('/proc');
            var _0x16f2ce = _0x23c512['mkdir']('/proc/self');
            _0x23c512['mkdir']('/proc/self/fd'),
            _0x23c512['mount']({
                'mount': function() {
                    var _0x4f6cd7 = _0x23c512['createNode'](_0x16f2ce, 'fd', 0x4000 | 0x1ff, 0x49);
                    return _0x4f6cd7['node_ops'] = {
                        'lookup': function(_0x4a8063, _0x9105b0) {
                            var _0x66ba0d = +_0x9105b0
                              , _0x2443b7 = _0x23c512['getStream'](_0x66ba0d);
                            if (!_0x2443b7)
                                throw new _0x23c512['ErrnoError'](0x8);
                            var _0x55e969 = {
                                'parent': null,
                                'mount': {
                                    'mountpoint': 'fake'
                                },
                                'node_ops': {
                                    'readlink': function() {
                                        return _0x2443b7['path'];
                                    }
                                }
                            };
                            return _0x55e969['parent'] = _0x55e969,
                            _0x55e969;
                        }
                    },
                    _0x4f6cd7;
                }
            }, {}, '/proc/self/fd');
        },
        'createStandardStreams': function() {
            _0x1455c0['stdin'] ? _0x23c512['createDevice']('/dev', 'stdin', _0x1455c0['stdin']) : _0x23c512['symlink']('/dev/tty', '/dev/stdin');
            _0x1455c0['stdout'] ? _0x23c512['createDevice']('/dev', 'stdout', null, _0x1455c0['stdout']) : _0x23c512['symlink']('/dev/tty', '/dev/stdout');
            _0x1455c0['stderr'] ? _0x23c512['createDevice']('/dev', 'stderr', null, _0x1455c0['stderr']) : _0x23c512['symlink']('/dev/tty1', '/dev/stderr');
            var _0xe16192 = _0x23c512['open']('/dev/stdin', 0x0)
              , _0x677d86 = _0x23c512['open']('/dev/stdout', 0x1)
              , _0x1516c3 = _0x23c512['open']('/dev/stderr', 0x1);
        },
        'ensureErrnoError': function() {
            if (_0x23c512['ErrnoError'])
                return;
            _0x23c512['ErrnoError'] = function _0x127330(_0xfe4f76, _0x17dbd1) {
                this['node'] = _0x17dbd1,
                this['setErrno'] = function(_0x5dbb10) {
                    this['errno'] = _0x5dbb10;
                }
                ,
                this['setErrno'](_0xfe4f76),
                this['message'] = 'FS error';
            }
            ,
            _0x23c512['ErrnoError']['prototype'] = new Error(),
            _0x23c512['ErrnoError']['prototype']['constructor'] = _0x23c512['ErrnoError'],
            [0x2c]['forEach'](function(_0x11fdb2) {
                _0x23c512['genericErrors'][_0x11fdb2] = new _0x23c512['ErrnoError'](_0x11fdb2),
                _0x23c512['genericErrors'][_0x11fdb2]['stack'] = '<generic error, no stack>';
            });
        },
        'staticInit': function() {
            _0x23c512['ensureErrnoError'](),
            _0x23c512['nameTable'] = new Array(0x1000),
            _0x23c512['mount'](_0x3c9fc9, {}, '/'),
            _0x23c512['createDefaultDirectories'](),
            _0x23c512['createDefaultDevices'](),
            _0x23c512['createSpecialDirectories'](),
            _0x23c512['filesystems'] = {
                'MEMFS': _0x3c9fc9,
                'IDBFS': _0x3581f4
            };
        },
        'init': function(_0x597b34, _0x34fb35, _0xf6bd3d) {
            _0x23c512['init']['initialized'] = !![],
            _0x23c512['ensureErrnoError'](),
            _0x1455c0['stdin'] = _0x597b34 || _0x1455c0['stdin'],
            _0x1455c0['stdout'] = _0x34fb35 || _0x1455c0['stdout'],
            _0x1455c0['stderr'] = _0xf6bd3d || _0x1455c0['stderr'],
            _0x23c512['createStandardStreams']();
        },
        'quit': function() {
            _0x23c512['init']['initialized'] = ![];
            var _0x53129b = _0x1455c0['_fflush'];
            if (_0x53129b)
                _0x53129b(0x0);
            for (var _0x1df865 = 0x0; _0x1df865 < _0x23c512['streams']['length']; _0x1df865++) {
                var _0x43347f = _0x23c512['streams'][_0x1df865];
                if (!_0x43347f)
                    continue;
                _0x23c512['close'](_0x43347f);
            }
        },
        'getMode': function(_0x19a53f, _0x2be7ba) {
            var _0x270376 = 0x0;
            if (_0x19a53f)
                _0x270376 |= 0x124 | 0x49;
            if (_0x2be7ba)
                _0x270376 |= 0x92;
            return _0x270376;
        },
        'findObject': function(_0x149917, _0x5c5430) {
            var _0xef7604 = _0x23c512['analyzePath'](_0x149917, _0x5c5430);
            return _0xef7604['exists'] ? _0xef7604['object'] : null;
        },
        'analyzePath': function(_0x1361b7, _0x34d9d5) {
            try {
                var _0x450a3f = _0x23c512['lookupPath'](_0x1361b7, {
                    'follow': !_0x34d9d5
                });
                _0x1361b7 = _0x450a3f['path'];
            } catch (_0x809b0b) {}
            var _0x392a8b = {
                'isRoot': ![],
                'exists': ![],
                'error': 0x0,
                'name': null,
                'path': null,
                'object': null,
                'parentExists': ![],
                'parentPath': null,
                'parentObject': null
            };
            try {
                var _0x450a3f = _0x23c512['lookupPath'](_0x1361b7, {
                    'parent': !![]
                });
                _0x392a8b['parentExists'] = !![],
                _0x392a8b['parentPath'] = _0x450a3f['path'],
                _0x392a8b['parentObject'] = _0x450a3f['node'],
                _0x392a8b['name'] = _0x34af61['basename'](_0x1361b7),
                _0x450a3f = _0x23c512['lookupPath'](_0x1361b7, {
                    'follow': !_0x34d9d5
                }),
                _0x392a8b['exists'] = !![],
                _0x392a8b['path'] = _0x450a3f['path'],
                _0x392a8b['object'] = _0x450a3f['node'],
                _0x392a8b['name'] = _0x450a3f['node']['name'],
                _0x392a8b['isRoot'] = _0x450a3f['path'] === '/';
            } catch (_0x192e2a) {
                _0x392a8b['error'] = _0x192e2a['errno'];
            }
            return _0x392a8b;
        },
        'createPath': function(_0x4b4d3d, _0x1f9029, _0x395228, _0x2f4681) {
            _0x4b4d3d = typeof _0x4b4d3d === 'string' ? _0x4b4d3d : _0x23c512['getPath'](_0x4b4d3d);
            var _0x254748 = _0x1f9029['split']('/')['reverse']();
            while (_0x254748['length']) {
                var _0x97eed2 = _0x254748['pop']();
                if (!_0x97eed2)
                    continue;
                var _0x57cd71 = _0x34af61['join2'](_0x4b4d3d, _0x97eed2);
                try {
                    _0x23c512['mkdir'](_0x57cd71);
                } catch (_0x401926) {}
                _0x4b4d3d = _0x57cd71;
            }
            return _0x57cd71;
        },
        'createFile': function(_0x3d7651, _0x5391dd, _0x5d7da7, _0x2fae2d, _0x32874e) {
            var _0x5fefdb = _0x34af61['join2'](typeof _0x3d7651 === 'string' ? _0x3d7651 : _0x23c512['getPath'](_0x3d7651), _0x5391dd)
              , _0xed491c = _0x23c512['getMode'](_0x2fae2d, _0x32874e);
            return _0x23c512['create'](_0x5fefdb, _0xed491c);
        },
        'createDataFile': function(_0xecf202, _0x2aff47, _0x329361, _0x33354b, _0x4ae3c5, _0x5ccf58) {
            var _0x1a4774 = _0x2aff47 ? _0x34af61['join2'](typeof _0xecf202 === 'string' ? _0xecf202 : _0x23c512['getPath'](_0xecf202), _0x2aff47) : _0xecf202
              , _0x2b1c20 = _0x23c512['getMode'](_0x33354b, _0x4ae3c5)
              , _0x3a76d2 = _0x23c512['create'](_0x1a4774, _0x2b1c20);
            if (_0x329361) {
                if (typeof _0x329361 === 'string') {
                    var _0x3a4841 = new Array(_0x329361['length']);
                    for (var _0x2bebab = 0x0, _0x1d2997 = _0x329361['length']; _0x2bebab < _0x1d2997; ++_0x2bebab)
                        _0x3a4841[_0x2bebab] = _0x329361['charCodeAt'](_0x2bebab);
                    _0x329361 = _0x3a4841;
                }
                _0x23c512['chmod'](_0x3a76d2, _0x2b1c20 | 0x92);
                var _0x3f8161 = _0x23c512['open'](_0x3a76d2, 0x241);
                _0x23c512['write'](_0x3f8161, _0x329361, 0x0, _0x329361['length'], 0x0, _0x5ccf58),
                _0x23c512['close'](_0x3f8161),
                _0x23c512['chmod'](_0x3a76d2, _0x2b1c20);
            }
            return _0x3a76d2;
        },
        'createDevice': function(_0xde5826, _0x374bcb, _0x3d65ea, _0x2ab94e) {
            var _0x54ecb0 = _0x34af61['join2'](typeof _0xde5826 === 'string' ? _0xde5826 : _0x23c512['getPath'](_0xde5826), _0x374bcb)
              , _0x2913b = _0x23c512['getMode'](!!_0x3d65ea, !!_0x2ab94e);
            if (!_0x23c512['createDevice']['major'])
                _0x23c512['createDevice']['major'] = 0x40;
            var _0x24bc2f = _0x23c512['makedev'](_0x23c512['createDevice']['major']++, 0x0);
            return _0x23c512['registerDevice'](_0x24bc2f, {
                'open': function(_0x28c666) {
                    _0x28c666['seekable'] = ![];
                },
                'close': function(_0x46f062) {
                    _0x2ab94e && _0x2ab94e['buffer'] && _0x2ab94e['buffer']['length'] && _0x2ab94e(0xa);
                },
                'read': function(_0x4b468a, _0x1f46a9, _0x5d47b2, _0xf134be, _0x139eeb) {
                    var _0x2983bd = 0x0;
                    for (var _0x2c084d = 0x0; _0x2c084d < _0xf134be; _0x2c084d++) {
                        var _0x57b2f0;
                        try {
                            _0x57b2f0 = _0x3d65ea();
                        } catch (_0x27d8cf) {
                            throw new _0x23c512['ErrnoError'](0x1d);
                        }
                        if (_0x57b2f0 === undefined && _0x2983bd === 0x0)
                            throw new _0x23c512['ErrnoError'](0x6);
                        if (_0x57b2f0 === null || _0x57b2f0 === undefined)
                            break;
                        _0x2983bd++,
                        _0x1f46a9[_0x5d47b2 + _0x2c084d] = _0x57b2f0;
                    }
                    return _0x2983bd && (_0x4b468a['node']['timestamp'] = Date['now']()),
                    _0x2983bd;
                },
                'write': function(_0x513dfb, _0x1fc4a1, _0x34e924, _0x246730, _0x1b2bba) {
                    for (var _0x38f210 = 0x0; _0x38f210 < _0x246730; _0x38f210++) {
                        try {
                            _0x2ab94e(_0x1fc4a1[_0x34e924 + _0x38f210]);
                        } catch (_0x24e26c) {
                            throw new _0x23c512['ErrnoError'](0x1d);
                        }
                    }
                    return _0x246730 && (_0x513dfb['node']['timestamp'] = Date['now']()),
                    _0x38f210;
                }
            }),
            _0x23c512['mkdev'](_0x54ecb0, _0x2913b, _0x24bc2f);
        },
        'forceLoadFile': function(_0x22121b) {
            if (_0x22121b['isDevice'] || _0x22121b['isFolder'] || _0x22121b['link'] || _0x22121b['contents'])
                return !![];
            if (typeof XMLHttpRequest !== 'undefined')
                throw new Error('Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.');
            else {
                if (_0x1cbaeb)
                    try {
                        _0x22121b['contents'] = _0x1fcab5(_0x1cbaeb(_0x22121b['url']), !![]),
                        _0x22121b['usedBytes'] = _0x22121b['contents']['length'];
                    } catch (_0x2d195f) {
                        throw new _0x23c512['ErrnoError'](0x1d);
                    }
                else
                    throw new Error('Cannot load without read() or XMLHttpRequest.');
            }
        },
        'createLazyFile': function(_0x42da21, _0x29fe8b, _0x525528, _0x1074bb, _0x2e46e8) {
            function _0x50104e() {
                this['lengthKnown'] = ![],
                this['chunks'] = [];
            }
            _0x50104e['prototype']['get'] = function _0x3db9b4(_0x42569f) {
                if (_0x42569f > this['length'] - 0x1 || _0x42569f < 0x0)
                    return undefined;
                var _0x2fbaca = _0x42569f % this['chunkSize']
                  , _0x45ca4a = _0x42569f / this['chunkSize'] | 0x0;
                return this['getter'](_0x45ca4a)[_0x2fbaca];
            }
            ,
            _0x50104e['prototype']['setDataGetter'] = function _0x5d9dc4(_0x63e096) {
                this['getter'] = _0x63e096;
            }
            ,
            _0x50104e['prototype']['cacheLength'] = function _0x21bde2() {
                var _0x397c13 = new XMLHttpRequest();
                _0x397c13['open']('HEAD', _0x525528, ![]),
                _0x397c13['send'](null);
                if (!(_0x397c13['status'] >= 0xc8 && _0x397c13['status'] < 0x12c || _0x397c13['status'] === 0x130))
                    throw new Error('Couldn't load ' + _0x525528 + '. Status: ' + _0x397c13['status']);
                var _0x465f8d = Number(_0x397c13['getResponseHeader']('Content-length')), _0x27302f, _0x919b20 = (_0x27302f = _0x397c13['getResponseHeader']('Accept-Ranges')) && _0x27302f === 'bytes', _0x8085c5 = (_0x27302f = _0x397c13['getResponseHeader']('Content-Encoding')) && _0x27302f === 'gzip', _0x5e1a41 = 0x400 * 0x400;
                if (!_0x919b20)
                    _0x5e1a41 = _0x465f8d;
                var _0x50beca = function(_0x272ed5, _0x78d903) {
                    if (_0x272ed5 > _0x78d903)
                        throw new Error('invalid range (' + _0x272ed5 + ', ' + _0x78d903 + ') or no bytes requested!');
                    if (_0x78d903 > _0x465f8d - 0x1)
                        throw new Error('only ' + _0x465f8d + ' bytes available! programmer error!');
                    var _0x3b89dc = new XMLHttpRequest();
                    _0x3b89dc['open']('GET', _0x525528, ![]);
                    if (_0x465f8d !== _0x5e1a41)
                        _0x3b89dc['setRequestHeader']('Range', 'bytes=' + _0x272ed5 + '-' + _0x78d903);
                    if (typeof Uint8Array != 'undefined')
                        _0x3b89dc['responseType'] = 'arraybuffer';
                    _0x3b89dc['overrideMimeType'] && _0x3b89dc['overrideMimeType']('text/plain; charset=x-user-defined');
                    _0x3b89dc['send'](null);
                    if (!(_0x3b89dc['status'] >= 0xc8 && _0x3b89dc['status'] < 0x12c || _0x3b89dc['status'] === 0x130))
                        throw new Error('Couldn't load ' + _0x525528 + '. Status: ' + _0x3b89dc['status']);
                    return _0x3b89dc['response'] !== undefined ? new Uint8Array(_0x3b89dc['response'] || []) : _0x1fcab5(_0x3b89dc['responseText'] || '', !![]);
                }
                  , _0x60833c = this;
                _0x60833c['setDataGetter'](function(_0x3a7679) {
                    var _0x1a28fb = _0x3a7679 * _0x5e1a41
                      , _0x1cdd51 = (_0x3a7679 + 0x1) * _0x5e1a41 - 0x1;
                    _0x1cdd51 = Math['min'](_0x1cdd51, _0x465f8d - 0x1);
                    typeof _0x60833c['chunks'][_0x3a7679] === 'undefined' && (_0x60833c['chunks'][_0x3a7679] = _0x50beca(_0x1a28fb, _0x1cdd51));
                    if (typeof _0x60833c['chunks'][_0x3a7679] === 'undefined')
                        throw new Error('doXHR failed!');
                    return _0x60833c['chunks'][_0x3a7679];
                }),
                (_0x8085c5 || !_0x465f8d) && (_0x5e1a41 = _0x465f8d = 0x1,
                _0x465f8d = this['getter'](0x0)['length'],
                _0x5e1a41 = _0x465f8d,
                _0x468a5e('LazyFiles on gzip forces download of the whole file when length is accessed')),
                this['_length'] = _0x465f8d,
                this['_chunkSize'] = _0x5e1a41,
                this['lengthKnown'] = !![];
            }
            ;
            if (typeof XMLHttpRequest !== 'undefined') {
                if (!_0x52d399)
                    throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
                var _0x47fece = new _0x50104e();
                Object['defineProperties'](_0x47fece, {
                    'length': {
                        'get': function() {
                            return !this['lengthKnown'] && this['cacheLength'](),
                            this['_length'];
                        }
                    },
                    'chunkSize': {
                        'get': function() {
                            return !this['lengthKnown'] && this['cacheLength'](),
                            this['_chunkSize'];
                        }
                    }
                });
                var _0x414300 = {
                    'isDevice': ![],
                    'contents': _0x47fece
                };
            } else
                var _0x414300 = {
                    'isDevice': ![],
                    'url': _0x525528
                };
            var _0x4b7f12 = _0x23c512['createFile'](_0x42da21, _0x29fe8b, _0x414300, _0x1074bb, _0x2e46e8);
            if (_0x414300['contents'])
                _0x4b7f12['contents'] = _0x414300['contents'];
            else
                _0x414300['url'] && (_0x4b7f12['contents'] = null,
                _0x4b7f12['url'] = _0x414300['url']);
            Object['defineProperties'](_0x4b7f12, {
                'usedBytes': {
                    'get': function() {
                        return this['contents']['length'];
                    }
                }
            });
            var _0x13214a = {}
              , _0x13e818 = Object['keys'](_0x4b7f12['stream_ops']);
            return _0x13e818['forEach'](function(_0x71eb38) {
                var _0x25b5e8 = _0x4b7f12['stream_ops'][_0x71eb38];
                _0x13214a[_0x71eb38] = function _0x149bc5() {
                    return _0x23c512['forceLoadFile'](_0x4b7f12),
                    _0x25b5e8['apply'](null, arguments);
                }
                ;
            }),
            _0x13214a['read'] = function _0x29a831(_0x2ec60f, _0x4f2a56, _0x520d52, _0xd491be, _0x424dcb) {
                _0x23c512['forceLoadFile'](_0x4b7f12);
                var _0x37fa3f = _0x2ec60f['node']['contents'];
                if (_0x424dcb >= _0x37fa3f['length'])
                    return 0x0;
                var _0x900eb1 = Math['min'](_0x37fa3f['length'] - _0x424dcb, _0xd491be);
                if (_0x37fa3f['slice'])
                    for (var _0x1747b6 = 0x0; _0x1747b6 < _0x900eb1; _0x1747b6++) {
                        _0x4f2a56[_0x520d52 + _0x1747b6] = _0x37fa3f[_0x424dcb + _0x1747b6];
                    }
                else
                    for (var _0x1747b6 = 0x0; _0x1747b6 < _0x900eb1; _0x1747b6++) {
                        _0x4f2a56[_0x520d52 + _0x1747b6] = _0x37fa3f['get'](_0x424dcb + _0x1747b6);
                    }
                return _0x900eb1;
            }
            ,
            _0x4b7f12['stream_ops'] = _0x13214a,
            _0x4b7f12;
        },
        'createPreloadedFile': function(_0x10a0b2, _0x2d5e7f, _0xd0304b, _0x3486fb, _0x5a2751, _0x487b26, _0x25f4fd, _0x317b3d, _0x9ca2c6, _0x7053bd) {
            _0x391f70['init']();
            var _0x11d39e = _0x2d5e7f ? _0x57cfd3['resolve'](_0x34af61['join2'](_0x10a0b2, _0x2d5e7f)) : _0x10a0b2
              , _0x5de935 = _0x2b1035('cp ' + _0x11d39e);
            function _0x77e3d7(_0x19e1a6) {
                function _0x5dd5b3(_0x1f3cad) {
                    if (_0x7053bd)
                        _0x7053bd();
                    !_0x317b3d && _0x23c512['createDataFile'](_0x10a0b2, _0x2d5e7f, _0x1f3cad, _0x3486fb, _0x5a2751, _0x9ca2c6);
                    if (_0x487b26)
                        _0x487b26();
                    _0x420721(_0x5de935);
                }
                var _0xa88d6f = ![];
                _0x1455c0['preloadPlugins']['forEach'](function(_0xb4d3ed) {
                    if (_0xa88d6f)
                        return;
                    _0xb4d3ed['canHandle'](_0x11d39e) && (_0xb4d3ed['handle'](_0x19e1a6, _0x11d39e, _0x5dd5b3, function() {
                        if (_0x25f4fd)
                            _0x25f4fd();
                        _0x420721(_0x5de935);
                    }),
                    _0xa88d6f = !![]);
                });
                if (!_0xa88d6f)
                    _0x5dd5b3(_0x19e1a6);
            }
            _0x403b09(_0x5de935),
            typeof _0xd0304b == 'string' ? _0x391f70['asyncLoad'](_0xd0304b, function(_0x146cf5) {
                _0x77e3d7(_0x146cf5);
            }, _0x25f4fd) : _0x77e3d7(_0xd0304b);
        },
        'indexedDB': function() {
            return window['indexedDB'] || window['mozIndexedDB'] || window['webkitIndexedDB'] || window['msIndexedDB'];
        },
        'DB_NAME': function() {
            return 'EM_FS_' + window['location']['pathname'];
        },
        'DB_VERSION': 0x14,
        'DB_STORE_NAME': 'FILE_DATA',
        'saveFilesToDB': function(_0x2c3e31, _0x1dc39d, _0x5ac0db) {
            _0x1dc39d = _0x1dc39d || function() {}
            ,
            _0x5ac0db = _0x5ac0db || function() {}
            ;
            var _0x493312 = _0x23c512['indexedDB']();
            try {
                var _0x2530ef = _0x493312['open'](_0x23c512['DB_NAME'](), _0x23c512['DB_VERSION']);
            } catch (_0x315712) {
                return _0x5ac0db(_0x315712);
            }
            _0x2530ef['onupgradeneeded'] = function _0x40442f() {
                _0x468a5e('creating db');
                var _0xffa077 = _0x2530ef['result'];
                _0xffa077['createObjectStore'](_0x23c512['DB_STORE_NAME']);
            }
            ,
            _0x2530ef['onsuccess'] = function _0x12c62f() {
                var _0x5b5700 = _0x2530ef['result']
                  , _0x1e9eb2 = _0x5b5700['transaction']([_0x23c512['DB_STORE_NAME']], 'readwrite')
                  , _0x31a9a3 = _0x1e9eb2['objectStore'](_0x23c512['DB_STORE_NAME'])
                  , _0x58e105 = 0x0
                  , _0x2bc347 = 0x0
                  , _0x1bb513 = _0x2c3e31['length'];
                function _0x34115e() {
                    if (_0x2bc347 == 0x0)
                        _0x1dc39d();
                    else
                        _0x5ac0db();
                }
                _0x2c3e31['forEach'](function(_0x5c5108) {
                    var _0x3bfccb = _0x31a9a3['put'](_0x23c512['analyzePath'](_0x5c5108)['object']['contents'], _0x5c5108);
                    _0x3bfccb['onsuccess'] = function _0x50d737() {
                        _0x58e105++;
                        if (_0x58e105 + _0x2bc347 == _0x1bb513)
                            _0x34115e();
                    }
                    ,
                    _0x3bfccb['onerror'] = function _0x111ca1() {
                        _0x2bc347++;
                        if (_0x58e105 + _0x2bc347 == _0x1bb513)
                            _0x34115e();
                    }
                    ;
                }),
                _0x1e9eb2['onerror'] = _0x5ac0db;
            }
            ,
            _0x2530ef['onerror'] = _0x5ac0db;
        },
        'loadFilesFromDB': function(_0x4e1cd0, _0x1d149f, _0x387c4f) {
            _0x1d149f = _0x1d149f || function() {}
            ,
            _0x387c4f = _0x387c4f || function() {}
            ;
            var _0x5c3115 = _0x23c512['indexedDB']();
            try {
                var _0x20ebd4 = _0x5c3115['open'](_0x23c512['DB_NAME'](), _0x23c512['DB_VERSION']);
            } catch (_0x12359f) {
                return _0x387c4f(_0x12359f);
            }
            _0x20ebd4['onupgradeneeded'] = _0x387c4f,
            _0x20ebd4['onsuccess'] = function _0x2d5a26() {
                var _0xee0e7b = _0x20ebd4['result'];
                try {
                    var _0x5abba8 = _0xee0e7b['transaction']([_0x23c512['DB_STORE_NAME']], 'readonly');
                } catch (_0x2a0452) {
                    _0x387c4f(_0x2a0452);
                    return;
                }
                var _0x29f487 = _0x5abba8['objectStore'](_0x23c512['DB_STORE_NAME'])
                  , _0x3a3c52 = 0x0
                  , _0x20efe2 = 0x0
                  , _0x402128 = _0x4e1cd0['length'];
                function _0x29e6f1() {
                    if (_0x20efe2 == 0x0)
                        _0x1d149f();
                    else
                        _0x387c4f();
                }
                _0x4e1cd0['forEach'](function(_0x381a43) {
                    var _0x2e8deb = _0x29f487['get'](_0x381a43);
                    _0x2e8deb['onsuccess'] = function _0x14e9f9() {
                        _0x23c512['analyzePath'](_0x381a43)['exists'] && _0x23c512['unlink'](_0x381a43);
                        _0x23c512['createDataFile'](_0x34af61['dirname'](_0x381a43), _0x34af61['basename'](_0x381a43), _0x2e8deb['result'], !![], !![], !![]),
                        _0x3a3c52++;
                        if (_0x3a3c52 + _0x20efe2 == _0x402128)
                            _0x29e6f1();
                    }
                    ,
                    _0x2e8deb['onerror'] = function _0x4a9342() {
                        _0x20efe2++;
                        if (_0x3a3c52 + _0x20efe2 == _0x402128)
                            _0x29e6f1();
                    }
                    ;
                }),
                _0x5abba8['onerror'] = _0x387c4f;
            }
            ,
            _0x20ebd4['onerror'] = _0x387c4f;
        }
    }
      , _0x5c83f1 = {
        'mappings': {},
        'DEFAULT_POLLMASK': 0x5,
        'umask': 0x1ff,
        'calculateAt': function(_0x2f061f, _0x185cb2, _0xe47417) {
            if (_0x185cb2[0x0] === '/')
                return _0x185cb2;
            var _0x53c2e2;
            if (_0x2f061f === -0x64)
                _0x53c2e2 = _0x23c512['cwd']();
            else {
                var _0x249917 = _0x23c512['getStream'](_0x2f061f);
                if (!_0x249917)
                    throw new _0x23c512['ErrnoError'](0x8);
                _0x53c2e2 = _0x249917['path'];
            }
            if (_0x185cb2['length'] == 0x0) {
                if (!_0xe47417)
                    throw new _0x23c512['ErrnoError'](0x2c);
                return _0x53c2e2;
            }
            return _0x34af61['join2'](_0x53c2e2, _0x185cb2);
        },
        'doStat': function(_0x44ffe5, _0x2f4643, _0x5c1455) {
            try {
                var _0x5bbc1b = _0x44ffe5(_0x2f4643);
            } catch (_0x3ac64d) {
                if (_0x3ac64d && _0x3ac64d['node'] && _0x34af61['normalize'](_0x2f4643) !== _0x34af61['normalize'](_0x23c512['getPath'](_0x3ac64d['node'])))
                    return -0x36;
                throw _0x3ac64d;
            }
            return _0x593fb9[_0x5c1455 >> 0x2] = _0x5bbc1b['dev'],
            _0x593fb9[_0x5c1455 + 0x4 >> 0x2] = 0x0,
            _0x593fb9[_0x5c1455 + 0x8 >> 0x2] = _0x5bbc1b['ino'],
            _0x593fb9[_0x5c1455 + 0xc >> 0x2] = _0x5bbc1b['mode'],
            _0x593fb9[_0x5c1455 + 0x10 >> 0x2] = _0x5bbc1b['nlink'],
            _0x593fb9[_0x5c1455 + 0x14 >> 0x2] = _0x5bbc1b['uid'],
            _0x593fb9[_0x5c1455 + 0x18 >> 0x2] = _0x5bbc1b['gid'],
            _0x593fb9[_0x5c1455 + 0x1c >> 0x2] = _0x5bbc1b['rdev'],
            _0x593fb9[_0x5c1455 + 0x20 >> 0x2] = 0x0,
            (_0x27868b = [_0x5bbc1b['size'] >>> 0x0, (_0x1f09fe = _0x5bbc1b['size'],
            +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
            _0x593fb9[_0x5c1455 + 0x28 >> 0x2] = _0x27868b[0x0],
            _0x593fb9[_0x5c1455 + 0x2c >> 0x2] = _0x27868b[0x1]),
            _0x593fb9[_0x5c1455 + 0x30 >> 0x2] = 0x1000,
            _0x593fb9[_0x5c1455 + 0x34 >> 0x2] = _0x5bbc1b['blocks'],
            _0x593fb9[_0x5c1455 + 0x38 >> 0x2] = _0x5bbc1b['atime']['getTime']() / 0x3e8 | 0x0,
            _0x593fb9[_0x5c1455 + 0x3c >> 0x2] = 0x0,
            _0x593fb9[_0x5c1455 + 0x40 >> 0x2] = _0x5bbc1b['mtime']['getTime']() / 0x3e8 | 0x0,
            _0x593fb9[_0x5c1455 + 0x44 >> 0x2] = 0x0,
            _0x593fb9[_0x5c1455 + 0x48 >> 0x2] = _0x5bbc1b['ctime']['getTime']() / 0x3e8 | 0x0,
            _0x593fb9[_0x5c1455 + 0x4c >> 0x2] = 0x0,
            (_0x27868b = [_0x5bbc1b['ino'] >>> 0x0, (_0x1f09fe = _0x5bbc1b['ino'],
            +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
            _0x593fb9[_0x5c1455 + 0x50 >> 0x2] = _0x27868b[0x0],
            _0x593fb9[_0x5c1455 + 0x54 >> 0x2] = _0x27868b[0x1]),
            0x0;
        },
        'doMsync': function(_0x58ebe4, _0x31d946, _0x399b48, _0x26666d, _0x32a78e) {
            var _0x7d394d = _0x2ac27b['slice'](_0x58ebe4, _0x58ebe4 + _0x399b48);
            _0x23c512['msync'](_0x31d946, _0x7d394d, _0x32a78e, _0x399b48, _0x26666d);
        },
        'doMkdir': function(_0x6a1648, _0xfacb41) {
            _0x6a1648 = _0x34af61['normalize'](_0x6a1648);
            if (_0x6a1648[_0x6a1648['length'] - 0x1] === '/')
                _0x6a1648 = _0x6a1648['substr'](0x0, _0x6a1648['length'] - 0x1);
            return _0x23c512['mkdir'](_0x6a1648, _0xfacb41, 0x0),
            0x0;
        },
        'doMknod': function(_0x47e6f3, _0xd5bc69, _0x13a421) {
            switch (_0xd5bc69 & 0xf000) {
            case 0x8000:
            case 0x2000:
            case 0x6000:
            case 0x1000:
            case 0xc000:
                break;
            default:
                return -0x1c;
            }
            return _0x23c512['mknod'](_0x47e6f3, _0xd5bc69, _0x13a421),
            0x0;
        },
        'doReadlink': function(_0x116b46, _0x23b613, _0x2247ea) {
            if (_0x2247ea <= 0x0)
                return -0x1c;
            var _0x5bdead = _0x23c512['readlink'](_0x116b46)
              , _0x52a2f5 = Math['min'](_0x2247ea, _0x5a6a49(_0x5bdead))
              , _0x49495f = _0x10882b[_0x23b613 + _0x52a2f5];
            return _0x430ff7(_0x5bdead, _0x23b613, _0x2247ea + 0x1),
            _0x10882b[_0x23b613 + _0x52a2f5] = _0x49495f,
            _0x52a2f5;
        },
        'doAccess': function(_0x579604, _0x36d837) {
            if (_0x36d837 & ~0x7)
                return -0x1c;
            var _0x2e1af0, _0x5479a9 = _0x23c512['lookupPath'](_0x579604, {
                'follow': !![]
            });
            _0x2e1af0 = _0x5479a9['node'];
            if (!_0x2e1af0)
                return -0x2c;
            var _0x5700e0 = '';
            if (_0x36d837 & 0x4)
                _0x5700e0 += 'r';
            if (_0x36d837 & 0x2)
                _0x5700e0 += 'w';
            if (_0x36d837 & 0x1)
                _0x5700e0 += 'x';
            if (_0x5700e0 && _0x23c512['nodePermissions'](_0x2e1af0, _0x5700e0))
                return -0x2;
            return 0x0;
        },
        'doDup': function(_0x3edd0a, _0x1cdaa0, _0x3be7b5) {
            var _0x2c918d = _0x23c512['getStream'](_0x3be7b5);
            if (_0x2c918d)
                _0x23c512['close'](_0x2c918d);
            return _0x23c512['open'](_0x3edd0a, _0x1cdaa0, 0x0, _0x3be7b5, _0x3be7b5)['fd'];
        },
        'doReadv': function(_0x36f772, _0x4e0668, _0xbb0b25, _0x6eee0) {
            var _0x2d4288 = 0x0;
            for (var _0x5f1db1 = 0x0; _0x5f1db1 < _0xbb0b25; _0x5f1db1++) {
                var _0x4f54fa = _0x593fb9[_0x4e0668 + _0x5f1db1 * 0x8 >> 0x2]
                  , _0x3e16e8 = _0x593fb9[_0x4e0668 + (_0x5f1db1 * 0x8 + 0x4) >> 0x2]
                  , _0x643c9c = _0x23c512['read'](_0x36f772, _0x10882b, _0x4f54fa, _0x3e16e8, _0x6eee0);
                if (_0x643c9c < 0x0)
                    return -0x1;
                _0x2d4288 += _0x643c9c;
                if (_0x643c9c < _0x3e16e8)
                    break;
            }
            return _0x2d4288;
        },
        'doWritev': function(_0x1d1ca4, _0x158493, _0x100b34, _0x742119) {
            var _0x403407 = 0x0;
            for (var _0x551ce7 = 0x0; _0x551ce7 < _0x100b34; _0x551ce7++) {
                var _0x5b0407 = _0x593fb9[_0x158493 + _0x551ce7 * 0x8 >> 0x2]
                  , _0x3e1007 = _0x593fb9[_0x158493 + (_0x551ce7 * 0x8 + 0x4) >> 0x2]
                  , _0x309235 = _0x23c512['write'](_0x1d1ca4, _0x10882b, _0x5b0407, _0x3e1007, _0x742119);
                if (_0x309235 < 0x0)
                    return -0x1;
                _0x403407 += _0x309235;
            }
            return _0x403407;
        },
        'varargs': undefined,
        'get': function() {
            _0x5c83f1['varargs'] += 0x4;
            var _0x89c492 = _0x593fb9[_0x5c83f1['varargs'] - 0x4 >> 0x2];
            return _0x89c492;
        },
        'getStr': function(_0x2d58ef) {
            var _0xfe59a8 = _0x46211(_0x2d58ef);
            return _0xfe59a8;
        },
        'getStreamFromFD': function(_0x4265e8) {
            var _0x56fa99 = _0x23c512['getStream'](_0x4265e8);
            if (!_0x56fa99)
                throw new _0x23c512['ErrnoError'](0x8);
            return _0x56fa99;
        },
        'get64': function(_0x512b53, _0xcc130a) {
            return _0x512b53;
        }
    };
    function _0x246efb(_0x22c8ff, _0x289c10, _0x51bfa3, _0x523996, _0x99565c) {
        try {
            var _0x2bf300 = 0x0
              , _0x1dfd7c = _0x289c10 ? _0x593fb9[_0x289c10 >> 0x2] : 0x0
              , _0x282c71 = _0x289c10 ? _0x593fb9[_0x289c10 + 0x4 >> 0x2] : 0x0
              , _0x35d048 = _0x51bfa3 ? _0x593fb9[_0x51bfa3 >> 0x2] : 0x0
              , _0x21be5 = _0x51bfa3 ? _0x593fb9[_0x51bfa3 + 0x4 >> 0x2] : 0x0
              , _0x3389d0 = _0x523996 ? _0x593fb9[_0x523996 >> 0x2] : 0x0
              , _0x1df03e = _0x523996 ? _0x593fb9[_0x523996 + 0x4 >> 0x2] : 0x0
              , _0x35fc84 = 0x0
              , _0x54352e = 0x0
              , _0x1ea73d = 0x0
              , _0x932b5b = 0x0
              , _0x15b0d7 = 0x0
              , _0x58df64 = 0x0
              , _0x5278c4 = (_0x289c10 ? _0x593fb9[_0x289c10 >> 0x2] : 0x0) | (_0x51bfa3 ? _0x593fb9[_0x51bfa3 >> 0x2] : 0x0) | (_0x523996 ? _0x593fb9[_0x523996 >> 0x2] : 0x0)
              , _0x43f46d = (_0x289c10 ? _0x593fb9[_0x289c10 + 0x4 >> 0x2] : 0x0) | (_0x51bfa3 ? _0x593fb9[_0x51bfa3 + 0x4 >> 0x2] : 0x0) | (_0x523996 ? _0x593fb9[_0x523996 + 0x4 >> 0x2] : 0x0)
              , _0x2051a7 = function(_0x1fe6fa, _0x1b4430, _0x1678af, _0x3a7bfd) {
                return _0x1fe6fa < 0x20 ? _0x1b4430 & _0x3a7bfd : _0x1678af & _0x3a7bfd;
            };
            for (var _0x4e9cb8 = 0x0; _0x4e9cb8 < _0x22c8ff; _0x4e9cb8++) {
                var _0x4154f2 = 0x1 << _0x4e9cb8 % 0x20;
                if (!_0x2051a7(_0x4e9cb8, _0x5278c4, _0x43f46d, _0x4154f2))
                    continue;
                var _0x364dca = _0x23c512['getStream'](_0x4e9cb8);
                if (!_0x364dca)
                    throw new _0x23c512['ErrnoError'](0x8);
                var _0x44f49b = _0x5c83f1['DEFAULT_POLLMASK'];
                _0x364dca['stream_ops']['poll'] && (_0x44f49b = _0x364dca['stream_ops']['poll'](_0x364dca)),
                _0x44f49b & 0x1 && _0x2051a7(_0x4e9cb8, _0x1dfd7c, _0x282c71, _0x4154f2) && (_0x4e9cb8 < 0x20 ? _0x35fc84 = _0x35fc84 | _0x4154f2 : _0x54352e = _0x54352e | _0x4154f2,
                _0x2bf300++),
                _0x44f49b & 0x4 && _0x2051a7(_0x4e9cb8, _0x35d048, _0x21be5, _0x4154f2) && (_0x4e9cb8 < 0x20 ? _0x1ea73d = _0x1ea73d | _0x4154f2 : _0x932b5b = _0x932b5b | _0x4154f2,
                _0x2bf300++),
                _0x44f49b & 0x2 && _0x2051a7(_0x4e9cb8, _0x3389d0, _0x1df03e, _0x4154f2) && (_0x4e9cb8 < 0x20 ? _0x15b0d7 = _0x15b0d7 | _0x4154f2 : _0x58df64 = _0x58df64 | _0x4154f2,
                _0x2bf300++);
            }
            return _0x289c10 && (_0x593fb9[_0x289c10 >> 0x2] = _0x35fc84,
            _0x593fb9[_0x289c10 + 0x4 >> 0x2] = _0x54352e),
            _0x51bfa3 && (_0x593fb9[_0x51bfa3 >> 0x2] = _0x1ea73d,
            _0x593fb9[_0x51bfa3 + 0x4 >> 0x2] = _0x932b5b),
            _0x523996 && (_0x593fb9[_0x523996 >> 0x2] = _0x15b0d7,
            _0x593fb9[_0x523996 + 0x4 >> 0x2] = _0x58df64),
            _0x2bf300;
        } catch (_0x39c514) {
            if (typeof _0x23c512 === 'undefined' || !(_0x39c514 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x39c514);
            return -_0x39c514['errno'];
        }
    }
    var _0x4bff20 = {
        'EPERM': 0x3f,
        'ENOENT': 0x2c,
        'ESRCH': 0x47,
        'EINTR': 0x1b,
        'EIO': 0x1d,
        'ENXIO': 0x3c,
        'E2BIG': 0x1,
        'ENOEXEC': 0x2d,
        'EBADF': 0x8,
        'ECHILD': 0xc,
        'EAGAIN': 0x6,
        'EWOULDBLOCK': 0x6,
        'ENOMEM': 0x30,
        'EACCES': 0x2,
        'EFAULT': 0x15,
        'ENOTBLK': 0x69,
        'EBUSY': 0xa,
        'EEXIST': 0x14,
        'EXDEV': 0x4b,
        'ENODEV': 0x2b,
        'ENOTDIR': 0x36,
        'EISDIR': 0x1f,
        'EINVAL': 0x1c,
        'ENFILE': 0x29,
        'EMFILE': 0x21,
        'ENOTTY': 0x3b,
        'ETXTBSY': 0x4a,
        'EFBIG': 0x16,
        'ENOSPC': 0x33,
        'ESPIPE': 0x46,
        'EROFS': 0x45,
        'EMLINK': 0x22,
        'EPIPE': 0x40,
        'EDOM': 0x12,
        'ERANGE': 0x44,
        'ENOMSG': 0x31,
        'EIDRM': 0x18,
        'ECHRNG': 0x6a,
        'EL2NSYNC': 0x9c,
        'EL3HLT': 0x6b,
        'EL3RST': 0x6c,
        'ELNRNG': 0x6d,
        'EUNATCH': 0x6e,
        'ENOCSI': 0x6f,
        'EL2HLT': 0x70,
        'EDEADLK': 0x10,
        'ENOLCK': 0x2e,
        'EBADE': 0x71,
        'EBADR': 0x72,
        'EXFULL': 0x73,
        'ENOANO': 0x68,
        'EBADRQC': 0x67,
        'EBADSLT': 0x66,
        'EDEADLOCK': 0x10,
        'EBFONT': 0x65,
        'ENOSTR': 0x64,
        'ENODATA': 0x74,
        'ETIME': 0x75,
        'ENOSR': 0x76,
        'ENONET': 0x77,
        'ENOPKG': 0x78,
        'EREMOTE': 0x79,
        'ENOLINK': 0x2f,
        'EADV': 0x7a,
        'ESRMNT': 0x7b,
        'ECOMM': 0x7c,
        'EPROTO': 0x41,
        'EMULTIHOP': 0x24,
        'EDOTDOT': 0x7d,
        'EBADMSG': 0x9,
        'ENOTUNIQ': 0x7e,
        'EBADFD': 0x7f,
        'EREMCHG': 0x80,
        'ELIBACC': 0x81,
        'ELIBBAD': 0x82,
        'ELIBSCN': 0x83,
        'ELIBMAX': 0x84,
        'ELIBEXEC': 0x85,
        'ENOSYS': 0x34,
        'ENOTEMPTY': 0x37,
        'ENAMETOOLONG': 0x25,
        'ELOOP': 0x20,
        'EOPNOTSUPP': 0x8a,
        'EPFNOSUPPORT': 0x8b,
        'ECONNRESET': 0xf,
        'ENOBUFS': 0x2a,
        'EAFNOSUPPORT': 0x5,
        'EPROTOTYPE': 0x43,
        'ENOTSOCK': 0x39,
        'ENOPROTOOPT': 0x32,
        'ESHUTDOWN': 0x8c,
        'ECONNREFUSED': 0xe,
        'EADDRINUSE': 0x3,
        'ECONNABORTED': 0xd,
        'ENETUNREACH': 0x28,
        'ENETDOWN': 0x26,
        'ETIMEDOUT': 0x49,
        'EHOSTDOWN': 0x8e,
        'EHOSTUNREACH': 0x17,
        'EINPROGRESS': 0x1a,
        'EALREADY': 0x7,
        'EDESTADDRREQ': 0x11,
        'EMSGSIZE': 0x23,
        'EPROTONOSUPPORT': 0x42,
        'ESOCKTNOSUPPORT': 0x89,
        'EADDRNOTAVAIL': 0x4,
        'ENETRESET': 0x27,
        'EISCONN': 0x1e,
        'ENOTCONN': 0x35,
        'ETOOMANYREFS': 0x8d,
        'EUSERS': 0x88,
        'EDQUOT': 0x13,
        'ESTALE': 0x48,
        'ENOTSUP': 0x8a,
        'ENOMEDIUM': 0x94,
        'EILSEQ': 0x19,
        'EOVERFLOW': 0x3d,
        'ECANCELED': 0xb,
        'ENOTRECOVERABLE': 0x38,
        'EOWNERDEAD': 0x3e,
        'ESTRPIPE': 0x87
    }
      , _0x573cc0 = {
        'mount': function(_0x50bb2c) {
            return _0x1455c0['websocket'] = _0x1455c0['websocket'] && 'object' === typeof _0x1455c0['websocket'] ? _0x1455c0['websocket'] : {},
            _0x1455c0['websocket']['_callbacks'] = {},
            _0x1455c0['websocket']['on'] = function(_0x373a8d, _0x2ea16e) {
                return 'function' === typeof _0x2ea16e && (this['_callbacks'][_0x373a8d] = _0x2ea16e),
                this;
            }
            ,
            _0x1455c0['websocket']['emit'] = function(_0x20ca01, _0x1cba35) {
                'function' === typeof this['_callbacks'][_0x20ca01] && this['_callbacks'][_0x20ca01]['call'](this, _0x1cba35);
            }
            ,
            _0x23c512['createNode'](null, '/', 0x4000 | 0x1ff, 0x0);
        },
        'createSocket': function(_0x82a40a, _0x5d115d, _0x201b3f) {
            _0x5d115d &= ~0x80800;
            var _0x5661fb = _0x5d115d == 0x1;
            _0x201b3f && _0x51a343(_0x5661fb == (_0x201b3f == 0x6));
            var _0x2cbc5f = {
                'family': _0x82a40a,
                'type': _0x5d115d,
                'protocol': _0x201b3f,
                'server': null,
                'error': null,
                'peers': {},
                'pending': [],
                'recv_queue': [],
                'sock_ops': _0x573cc0['websocket_sock_ops']
            }
              , _0x70d832 = _0x573cc0['nextname']()
              , _0x49161d = _0x23c512['createNode'](_0x573cc0['root'], _0x70d832, 0xc000, 0x0);
            _0x49161d['sock'] = _0x2cbc5f;
            var _0x11d581 = _0x23c512['createStream']({
                'path': _0x70d832,
                'node': _0x49161d,
                'flags': 0x2,
                'seekable': ![],
                'stream_ops': _0x573cc0['stream_ops']
            });
            return _0x2cbc5f['stream'] = _0x11d581,
            _0x2cbc5f;
        },
        'getSocket': function(_0x288430) {
            var _0x4d8681 = _0x23c512['getStream'](_0x288430);
            if (!_0x4d8681 || !_0x23c512['isSocket'](_0x4d8681['node']['mode']))
                return null;
            return _0x4d8681['node']['sock'];
        },
        'stream_ops': {
            'poll': function(_0x291135) {
                var _0x2a7a4d = _0x291135['node']['sock'];
                return _0x2a7a4d['sock_ops']['poll'](_0x2a7a4d);
            },
            'ioctl': function(_0x1cce54, _0x4629c0, _0x177c6e) {
                var _0x3fce44 = _0x1cce54['node']['sock'];
                return _0x3fce44['sock_ops']['ioctl'](_0x3fce44, _0x4629c0, _0x177c6e);
            },
            'read': function(_0x36b6e9, _0x143f70, _0x1617ec, _0x3f59b5, _0x16ea46) {
                var _0x4c7ebe = _0x36b6e9['node']['sock']
                  , _0x2bae48 = _0x4c7ebe['sock_ops']['recvmsg'](_0x4c7ebe, _0x3f59b5);
                if (!_0x2bae48)
                    return 0x0;
                return _0x143f70['set'](_0x2bae48['buffer'], _0x1617ec),
                _0x2bae48['buffer']['length'];
            },
            'write': function(_0x117ad2, _0x42aa58, _0x2ea084, _0x44addc, _0x5ec1ad) {
                var _0x318f2d = _0x117ad2['node']['sock'];
                return _0x318f2d['sock_ops']['sendmsg'](_0x318f2d, _0x42aa58, _0x2ea084, _0x44addc);
            },
            'close': function(_0x54d148) {
                var _0x15fa63 = _0x54d148['node']['sock'];
                _0x15fa63['sock_ops']['close'](_0x15fa63);
            }
        },
        'nextname': function() {
            return !_0x573cc0['nextname']['current'] && (_0x573cc0['nextname']['current'] = 0x0),
            'socket[' + _0x573cc0['nextname']['current']++ + ']';
        },
        'websocket_sock_ops': {
            'createPeer': function(_0x268612, _0x4033e1, _0x42bf2c) {
                var _0x181750;
                typeof _0x4033e1 === 'object' && (_0x181750 = _0x4033e1,
                _0x4033e1 = null,
                _0x42bf2c = null);
                if (_0x181750) {
                    if (_0x181750['_socket'])
                        _0x4033e1 = _0x181750['_socket']['remoteAddress'],
                        _0x42bf2c = _0x181750['_socket']['remotePort'];
                    else {
                        var _0x485fb9 = /ws[s]?:\/\/([^:]+):(\d+)/['exec'](_0x181750['url']);
                        if (!_0x485fb9)
                            throw new Error('WebSocket URL must be in the format ws(s)://address:port');
                        _0x4033e1 = _0x485fb9[0x1],
                        _0x42bf2c = parseInt(_0x485fb9[0x2], 0xa);
                    }
                } else
                    try {
                        var _0x327621 = _0x1455c0['websocket'] && 'object' === typeof _0x1455c0['websocket']
                          , _0xffe13d = 'ws:#'['replace']('#', '//');
                        _0x327621 && ('string' === typeof _0x1455c0['websocket']['url'] && (_0xffe13d = _0x1455c0['websocket']['url']));
                        if (_0xffe13d === 'ws://' || _0xffe13d === 'wss://') {
                            var _0x303cd1 = _0x4033e1['split']('/');
                            _0xffe13d = _0xffe13d + _0x303cd1[0x0] + ':' + _0x42bf2c + '/' + _0x303cd1['slice'](0x1)['join']('/');
                        }
                        var _0x90cb36 = 'binary';
                        _0x327621 && ('string' === typeof _0x1455c0['websocket']['subprotocol'] && (_0x90cb36 = _0x1455c0['websocket']['subprotocol']));
                        var _0x4a4869 = undefined;
                        _0x90cb36 !== 'null' && (_0x90cb36 = _0x90cb36['replace'](/^ +| +$/g, '')['split'](/ *, */),
                        _0x4a4869 = _0x37878f ? {
                            'protocol': _0x90cb36['toString']()
                        } : _0x90cb36);
                        _0x327621 && null === _0x1455c0['websocket']['subprotocol'] && (_0x90cb36 = 'null',
                        _0x4a4869 = undefined);
                        var _0x48bdf4;
                        _0x37878f ? _0x48bdf4 = require('ws') : _0x48bdf4 = WebSocket,
                        _0x181750 = new _0x48bdf4(_0xffe13d,_0x4a4869),
                        _0x181750['binaryType'] = 'arraybuffer';
                    } catch (_0x57bb79) {
                        throw new _0x23c512['ErrnoError'](_0x4bff20['EHOSTUNREACH']);
                    }
                var _0x146c87 = {
                    'addr': _0x4033e1,
                    'port': _0x42bf2c,
                    'socket': _0x181750,
                    'dgram_send_queue': []
                };
                return _0x573cc0['websocket_sock_ops']['addPeer'](_0x268612, _0x146c87),
                _0x573cc0['websocket_sock_ops']['handlePeerEvents'](_0x268612, _0x146c87),
                _0x268612['type'] === 0x2 && typeof _0x268612['sport'] !== 'undefined' && _0x146c87['dgram_send_queue']['push'](new Uint8Array([0xff, 0xff, 0xff, 0xff, 'p'['charCodeAt'](0x0), 'o'['charCodeAt'](0x0), 'r'['charCodeAt'](0x0), 't'['charCodeAt'](0x0), (_0x268612['sport'] & 0xff00) >> 0x8, _0x268612['sport'] & 0xff])),
                _0x146c87;
            },
            'getPeer': function(_0x3c8e26, _0x1f1ccc, _0x22d57a) {
                return _0x3c8e26['peers'][_0x1f1ccc + ':' + _0x22d57a];
            },
            'addPeer': function(_0x11c7c0, _0x1f903d) {
                _0x11c7c0['peers'][_0x1f903d['addr'] + ':' + _0x1f903d['port']] = _0x1f903d;
            },
            'removePeer': function(_0x5603e1, _0x4f174d) {
                delete _0x5603e1['peers'][_0x4f174d['addr'] + ':' + _0x4f174d['port']];
            },
            'handlePeerEvents': function(_0x5aaa34, _0x154a62) {
                var _0x1059cc = !![]
                  , _0x281938 = function() {
                    _0x1455c0['websocket']['emit']('open', _0x5aaa34['stream']['fd']);
                    try {
                        var _0x35e978 = _0x154a62['dgram_send_queue']['shift']();
                        while (_0x35e978) {
                            _0x154a62['socket']['send'](_0x35e978),
                            _0x35e978 = _0x154a62['dgram_send_queue']['shift']();
                        }
                    } catch (_0x99f0ba) {
                        _0x154a62['socket']['close']();
                    }
                };
                function _0x10248c(_0x3b1fdd) {
                    if (typeof _0x3b1fdd === 'string') {
                        var _0xdb618e = new TextEncoder();
                        _0x3b1fdd = _0xdb618e['encode'](_0x3b1fdd);
                    } else {
                        _0x51a343(_0x3b1fdd['byteLength'] !== undefined);
                        if (_0x3b1fdd['byteLength'] == 0x0)
                            return;
                        else
                            _0x3b1fdd = new Uint8Array(_0x3b1fdd);
                    }
                    var _0x49e8a4 = _0x1059cc;
                    _0x1059cc = ![];
                    if (_0x49e8a4 && _0x3b1fdd['length'] === 0xa && _0x3b1fdd[0x0] === 0xff && _0x3b1fdd[0x1] === 0xff && _0x3b1fdd[0x2] === 0xff && _0x3b1fdd[0x3] === 0xff && _0x3b1fdd[0x4] === 'p'['charCodeAt'](0x0) && _0x3b1fdd[0x5] === 'o'['charCodeAt'](0x0) && _0x3b1fdd[0x6] === 'r'['charCodeAt'](0x0) && _0x3b1fdd[0x7] === 't'['charCodeAt'](0x0)) {
                        var _0x2da048 = _0x3b1fdd[0x8] << 0x8 | _0x3b1fdd[0x9];
                        _0x573cc0['websocket_sock_ops']['removePeer'](_0x5aaa34, _0x154a62),
                        _0x154a62['port'] = _0x2da048,
                        _0x573cc0['websocket_sock_ops']['addPeer'](_0x5aaa34, _0x154a62);
                        return;
                    }
                    _0x5aaa34['recv_queue']['push']({
                        'addr': _0x154a62['addr'],
                        'port': _0x154a62['port'],
                        'data': _0x3b1fdd
                    }),
                    _0x1455c0['websocket']['emit']('message', _0x5aaa34['stream']['fd']);
                }
                _0x37878f ? (_0x154a62['socket']['on']('open', _0x281938),
                _0x154a62['socket']['on']('message', function(_0xe03462, _0x41fe2) {
                    if (!_0x41fe2['binary'])
                        return;
                    _0x10248c(new Uint8Array(_0xe03462)['buffer']);
                }),
                _0x154a62['socket']['on']('close', function() {
                    _0x1455c0['websocket']['emit']('close', _0x5aaa34['stream']['fd']);
                }),
                _0x154a62['socket']['on']('error', function(_0x788f70) {
                    _0x5aaa34['error'] = _0x4bff20['ECONNREFUSED'],
                    _0x1455c0['websocket']['emit']('error', [_0x5aaa34['stream']['fd'], _0x5aaa34['error'], 'ECONNREFUSED: Connection refused']);
                })) : (_0x154a62['socket']['onopen'] = _0x281938,
                _0x154a62['socket']['onclose'] = function() {
                    _0x1455c0['websocket']['emit']('close', _0x5aaa34['stream']['fd']);
                }
                ,
                _0x154a62['socket']['onmessage'] = function _0x3773d7(_0xb0cbdc) {
                    _0x10248c(_0xb0cbdc['data']);
                }
                ,
                _0x154a62['socket']['onerror'] = function(_0x5db524) {
                    _0x5aaa34['error'] = _0x4bff20['ECONNREFUSED'],
                    _0x1455c0['websocket']['emit']('error', [_0x5aaa34['stream']['fd'], _0x5aaa34['error'], 'ECONNREFUSED: Connection refused']);
                }
                );
            },
            'poll': function(_0xf0bf57) {
                if (_0xf0bf57['type'] === 0x1 && _0xf0bf57['server'])
                    return _0xf0bf57['pending']['length'] ? 0x40 | 0x1 : 0x0;
                var _0x21719b = 0x0
                  , _0x58e0ad = _0xf0bf57['type'] === 0x1 ? _0x573cc0['websocket_sock_ops']['getPeer'](_0xf0bf57, _0xf0bf57['daddr'], _0xf0bf57['dport']) : null;
                return (_0xf0bf57['recv_queue']['length'] || !_0x58e0ad || _0x58e0ad && _0x58e0ad['socket']['readyState'] === _0x58e0ad['socket']['CLOSING'] || _0x58e0ad && _0x58e0ad['socket']['readyState'] === _0x58e0ad['socket']['CLOSED']) && (_0x21719b |= 0x40 | 0x1),
                (!_0x58e0ad || _0x58e0ad && _0x58e0ad['socket']['readyState'] === _0x58e0ad['socket']['OPEN']) && (_0x21719b |= 0x4),
                (_0x58e0ad && _0x58e0ad['socket']['readyState'] === _0x58e0ad['socket']['CLOSING'] || _0x58e0ad && _0x58e0ad['socket']['readyState'] === _0x58e0ad['socket']['CLOSED']) && (_0x21719b |= 0x10),
                _0x21719b;
            },
            'ioctl': function(_0x15c526, _0x284202, _0x54f1f4) {
                switch (_0x284202) {
                case 0x541b:
                    var _0x5ced9f = 0x0;
                    _0x15c526['recv_queue']['length'] && (_0x5ced9f = _0x15c526['recv_queue'][0x0]['data']['length']);
                    _0x593fb9[_0x54f1f4 >> 0x2] = _0x5ced9f;
                    return 0x0;
                default:
                    return _0x4bff20['EINVAL'];
                }
            },
            'close': function(_0x40a999) {
                if (_0x40a999['server']) {
                    try {
                        _0x40a999['server']['close']();
                    } catch (_0x13cab7) {}
                    _0x40a999['server'] = null;
                }
                var _0x47b9f8 = Object['keys'](_0x40a999['peers']);
                for (var _0x2c3ac7 = 0x0; _0x2c3ac7 < _0x47b9f8['length']; _0x2c3ac7++) {
                    var _0x2fbd4b = _0x40a999['peers'][_0x47b9f8[_0x2c3ac7]];
                    try {
                        _0x2fbd4b['socket']['close']();
                    } catch (_0x4af646) {}
                    _0x573cc0['websocket_sock_ops']['removePeer'](_0x40a999, _0x2fbd4b);
                }
                return 0x0;
            },
            'bind': function(_0x4f8e4d, _0x16a3cd, _0x495b7d) {
                if (typeof _0x4f8e4d['saddr'] !== 'undefined' || typeof _0x4f8e4d['sport'] !== 'undefined')
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EINVAL']);
                _0x4f8e4d['saddr'] = _0x16a3cd,
                _0x4f8e4d['sport'] = _0x495b7d;
                if (_0x4f8e4d['type'] === 0x2) {
                    _0x4f8e4d['server'] && (_0x4f8e4d['server']['close'](),
                    _0x4f8e4d['server'] = null);
                    try {
                        _0x4f8e4d['sock_ops']['listen'](_0x4f8e4d, 0x0);
                    } catch (_0x2a2629) {
                        if (!(_0x2a2629 instanceof _0x23c512['ErrnoError']))
                            throw _0x2a2629;
                        if (_0x2a2629['errno'] !== _0x4bff20['EOPNOTSUPP'])
                            throw _0x2a2629;
                    }
                }
            },
            'connect': function(_0x5f23cf, _0x56129d, _0x4472c7) {
                if (_0x5f23cf['server'])
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EOPNOTSUPP']);
                if (typeof _0x5f23cf['daddr'] !== 'undefined' && typeof _0x5f23cf['dport'] !== 'undefined') {
                    var _0x5de06b = _0x573cc0['websocket_sock_ops']['getPeer'](_0x5f23cf, _0x5f23cf['daddr'], _0x5f23cf['dport']);
                    if (_0x5de06b) {
                        if (_0x5de06b['socket']['readyState'] === _0x5de06b['socket']['CONNECTING'])
                            throw new _0x23c512['ErrnoError'](_0x4bff20['EALREADY']);
                        else
                            throw new _0x23c512['ErrnoError'](_0x4bff20['EISCONN']);
                    }
                }
                var _0x2a754e = _0x573cc0['websocket_sock_ops']['createPeer'](_0x5f23cf, _0x56129d, _0x4472c7);
                _0x5f23cf['daddr'] = _0x2a754e['addr'],
                _0x5f23cf['dport'] = _0x2a754e['port'];
                throw new _0x23c512['ErrnoError'](_0x4bff20['EINPROGRESS']);
            },
            'listen': function(_0x2061a7, _0x3261d7) {
                if (!_0x37878f)
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EOPNOTSUPP']);
                if (_0x2061a7['server'])
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EINVAL']);
                var _0x564db6 = require('ws')['Server']
                  , _0x78b63 = _0x2061a7['saddr'];
                _0x2061a7['server'] = new _0x564db6({
                    'host': _0x78b63,
                    'port': _0x2061a7['sport']
                }),
                _0x1455c0['websocket']['emit']('listen', _0x2061a7['stream']['fd']),
                _0x2061a7['server']['on']('connection', function(_0x11a79c) {
                    if (_0x2061a7['type'] === 0x1) {
                        var _0x3a8cbe = _0x573cc0['createSocket'](_0x2061a7['family'], _0x2061a7['type'], _0x2061a7['protocol'])
                          , _0x5dd7b6 = _0x573cc0['websocket_sock_ops']['createPeer'](_0x3a8cbe, _0x11a79c);
                        _0x3a8cbe['daddr'] = _0x5dd7b6['addr'],
                        _0x3a8cbe['dport'] = _0x5dd7b6['port'],
                        _0x2061a7['pending']['push'](_0x3a8cbe),
                        _0x1455c0['websocket']['emit']('connection', _0x3a8cbe['stream']['fd']);
                    } else
                        _0x573cc0['websocket_sock_ops']['createPeer'](_0x2061a7, _0x11a79c),
                        _0x1455c0['websocket']['emit']('connection', _0x2061a7['stream']['fd']);
                }),
                _0x2061a7['server']['on']('closed', function() {
                    _0x1455c0['websocket']['emit']('close', _0x2061a7['stream']['fd']),
                    _0x2061a7['server'] = null;
                }),
                _0x2061a7['server']['on']('error', function(_0x5d969e) {
                    _0x2061a7['error'] = _0x4bff20['EHOSTUNREACH'],
                    _0x1455c0['websocket']['emit']('error', [_0x2061a7['stream']['fd'], _0x2061a7['error'], 'EHOSTUNREACH: Host is unreachable']);
                });
            },
            'accept': function(_0x13bc5d) {
                if (!_0x13bc5d['server'])
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EINVAL']);
                var _0x1a4f2e = _0x13bc5d['pending']['shift']();
                return _0x1a4f2e['stream']['flags'] = _0x13bc5d['stream']['flags'],
                _0x1a4f2e;
            },
            'getname': function(_0x119267, _0x488287) {
                var _0x1b4038, _0xc4d625;
                if (_0x488287) {
                    if (_0x119267['daddr'] === undefined || _0x119267['dport'] === undefined)
                        throw new _0x23c512['ErrnoError'](_0x4bff20['ENOTCONN']);
                    _0x1b4038 = _0x119267['daddr'],
                    _0xc4d625 = _0x119267['dport'];
                } else
                    _0x1b4038 = _0x119267['saddr'] || 0x0,
                    _0xc4d625 = _0x119267['sport'] || 0x0;
                return {
                    'addr': _0x1b4038,
                    'port': _0xc4d625
                };
            },
            'sendmsg': function(_0x3015a6, _0xd67ce2, _0x243db5, _0x311c90, _0x39da34, _0x1f7207) {
                if (_0x3015a6['type'] === 0x2) {
                    (_0x39da34 === undefined || _0x1f7207 === undefined) && (_0x39da34 = _0x3015a6['daddr'],
                    _0x1f7207 = _0x3015a6['dport']);
                    if (_0x39da34 === undefined || _0x1f7207 === undefined)
                        throw new _0x23c512['ErrnoError'](_0x4bff20['EDESTADDRREQ']);
                } else
                    _0x39da34 = _0x3015a6['daddr'],
                    _0x1f7207 = _0x3015a6['dport'];
                var _0x3bc74e = _0x573cc0['websocket_sock_ops']['getPeer'](_0x3015a6, _0x39da34, _0x1f7207);
                if (_0x3015a6['type'] === 0x1) {
                    if (!_0x3bc74e || _0x3bc74e['socket']['readyState'] === _0x3bc74e['socket']['CLOSING'] || _0x3bc74e['socket']['readyState'] === _0x3bc74e['socket']['CLOSED'])
                        throw new _0x23c512['ErrnoError'](_0x4bff20['ENOTCONN']);
                    else {
                        if (_0x3bc74e['socket']['readyState'] === _0x3bc74e['socket']['CONNECTING'])
                            throw new _0x23c512['ErrnoError'](_0x4bff20['EAGAIN']);
                    }
                }
                ArrayBuffer['isView'](_0xd67ce2) && (_0x243db5 += _0xd67ce2['byteOffset'],
                _0xd67ce2 = _0xd67ce2['buffer']);
                var _0x38e07e;
                _0x38e07e = _0xd67ce2['slice'](_0x243db5, _0x243db5 + _0x311c90);
                if (_0x3015a6['type'] === 0x2) {
                    if (!_0x3bc74e || _0x3bc74e['socket']['readyState'] !== _0x3bc74e['socket']['OPEN'])
                        return (!_0x3bc74e || _0x3bc74e['socket']['readyState'] === _0x3bc74e['socket']['CLOSING'] || _0x3bc74e['socket']['readyState'] === _0x3bc74e['socket']['CLOSED']) && (_0x3bc74e = _0x573cc0['websocket_sock_ops']['createPeer'](_0x3015a6, _0x39da34, _0x1f7207)),
                        _0x3bc74e['dgram_send_queue']['push'](_0x38e07e),
                        _0x311c90;
                }
                try {
                    return _0x3bc74e['socket']['send'](_0x38e07e),
                    _0x311c90;
                } catch (_0x22e849) {
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EINVAL']);
                }
            },
            'recvmsg': function(_0x18a1d9, _0x278a63) {
                if (_0x18a1d9['type'] === 0x1 && _0x18a1d9['server'])
                    throw new _0x23c512['ErrnoError'](_0x4bff20['ENOTCONN']);
                var _0x3d0cd3 = _0x18a1d9['recv_queue']['shift']();
                if (!_0x3d0cd3) {
                    if (_0x18a1d9['type'] === 0x1) {
                        var _0x43e42f = _0x573cc0['websocket_sock_ops']['getPeer'](_0x18a1d9, _0x18a1d9['daddr'], _0x18a1d9['dport']);
                        if (!_0x43e42f)
                            throw new _0x23c512['ErrnoError'](_0x4bff20['ENOTCONN']);
                        else {
                            if (_0x43e42f['socket']['readyState'] === _0x43e42f['socket']['CLOSING'] || _0x43e42f['socket']['readyState'] === _0x43e42f['socket']['CLOSED'])
                                return null;
                            else
                                throw new _0x23c512['ErrnoError'](_0x4bff20['EAGAIN']);
                        }
                    } else
                        throw new _0x23c512['ErrnoError'](_0x4bff20['EAGAIN']);
                }
                var _0x426b60 = _0x3d0cd3['data']['byteLength'] || _0x3d0cd3['data']['length']
                  , _0x23f79f = _0x3d0cd3['data']['byteOffset'] || 0x0
                  , _0x4aae44 = _0x3d0cd3['data']['buffer'] || _0x3d0cd3['data']
                  , _0xf12ced = Math['min'](_0x278a63, _0x426b60)
                  , _0x476aef = {
                    'buffer': new Uint8Array(_0x4aae44,_0x23f79f,_0xf12ced),
                    'addr': _0x3d0cd3['addr'],
                    'port': _0x3d0cd3['port']
                };
                if (_0x18a1d9['type'] === 0x1 && _0xf12ced < _0x426b60) {
                    var _0xbf1f1e = _0x426b60 - _0xf12ced;
                    _0x3d0cd3['data'] = new Uint8Array(_0x4aae44,_0x23f79f + _0xf12ced,_0xbf1f1e),
                    _0x18a1d9['recv_queue']['unshift'](_0x3d0cd3);
                }
                return _0x476aef;
            }
        }
    };
    function _0x1c23f6(_0xd56120) {
        var _0x5beb83 = _0x573cc0['getSocket'](_0xd56120);
        if (!_0x5beb83)
            throw new _0x23c512['ErrnoError'](0x8);
        return _0x5beb83;
    }
    function _0x1669bd(_0x15cd81) {
        return _0x593fb9[_0x2d2c5c() >> 0x2] = _0x15cd81,
        _0x15cd81;
    }
    function _0x117f6e(_0x355be8) {
        var _0x2dccef = _0x355be8['split']('.');
        for (var _0x21defe = 0x0; _0x21defe < 0x4; _0x21defe++) {
            var _0x5bd5a9 = Number(_0x2dccef[_0x21defe]);
            if (isNaN(_0x5bd5a9))
                return null;
            _0x2dccef[_0x21defe] = _0x5bd5a9;
        }
        return (_0x2dccef[0x0] | _0x2dccef[0x1] << 0x8 | _0x2dccef[0x2] << 0x10 | _0x2dccef[0x3] << 0x18) >>> 0x0;
    }
    function _0x4df739(_0x20ee66) {
        return parseInt(_0x20ee66);
    }
    function _0x5af1ac(_0x5eeb33) {
        var _0xdcae13, _0x4ebb03, _0x2bf21d, _0x15a33b, _0x498af5 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, _0x597428 = [];
        if (!_0x498af5['test'](_0x5eeb33))
            return null;
        if (_0x5eeb33 === '::')
            return [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        _0x5eeb33['startsWith']('::') ? _0x5eeb33 = _0x5eeb33['replace']('::', 'Z:') : _0x5eeb33 = _0x5eeb33['replace']('::', ':Z:');
        _0x5eeb33['indexOf']('.') > 0x0 ? (_0x5eeb33 = _0x5eeb33['replace'](new RegExp('[.]','g'), ':'),
        _0xdcae13 = _0x5eeb33['split'](':'),
        _0xdcae13[_0xdcae13['length'] - 0x4] = _0x4df739(_0xdcae13[_0xdcae13['length'] - 0x4]) + _0x4df739(_0xdcae13[_0xdcae13['length'] - 0x3]) * 0x100,
        _0xdcae13[_0xdcae13['length'] - 0x3] = _0x4df739(_0xdcae13[_0xdcae13['length'] - 0x2]) + _0x4df739(_0xdcae13[_0xdcae13['length'] - 0x1]) * 0x100,
        _0xdcae13 = _0xdcae13['slice'](0x0, _0xdcae13['length'] - 0x2)) : _0xdcae13 = _0x5eeb33['split'](':');
        _0x2bf21d = 0x0,
        _0x15a33b = 0x0;
        for (_0x4ebb03 = 0x0; _0x4ebb03 < _0xdcae13['length']; _0x4ebb03++) {
            if (typeof _0xdcae13[_0x4ebb03] === 'string') {
                if (_0xdcae13[_0x4ebb03] === 'Z') {
                    for (_0x15a33b = 0x0; _0x15a33b < 0x8 - _0xdcae13['length'] + 0x1; _0x15a33b++) {
                        _0x597428[_0x4ebb03 + _0x15a33b] = 0x0;
                    }
                    _0x2bf21d = _0x15a33b - 0x1;
                } else
                    _0x597428[_0x4ebb03 + _0x2bf21d] = _0x1e0697(parseInt(_0xdcae13[_0x4ebb03], 0x10));
            } else
                _0x597428[_0x4ebb03 + _0x2bf21d] = _0xdcae13[_0x4ebb03];
        }
        return [_0x597428[0x1] << 0x10 | _0x597428[0x0], _0x597428[0x3] << 0x10 | _0x597428[0x2], _0x597428[0x5] << 0x10 | _0x597428[0x4], _0x597428[0x7] << 0x10 | _0x597428[0x6]];
    }
    function _0x28fdd5(_0x35b8dc, _0xe5783a, _0x17b835, _0x4afd25, _0x578c4c) {
        switch (_0xe5783a) {
        case 0x2:
            _0x17b835 = _0x117f6e(_0x17b835);
            _0x578c4c && (_0x593fb9[_0x578c4c >> 0x2] = 0x10);
            _0x9a762d[_0x35b8dc >> 0x1] = _0xe5783a,
            _0x593fb9[_0x35b8dc + 0x4 >> 0x2] = _0x17b835,
            _0x9a762d[_0x35b8dc + 0x2 >> 0x1] = _0x1e0697(_0x4afd25),
            (_0x27868b = [0x0 >>> 0x0, (_0x1f09fe = 0x0,
            +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
            _0x593fb9[_0x35b8dc + 0x8 >> 0x2] = _0x27868b[0x0],
            _0x593fb9[_0x35b8dc + 0xc >> 0x2] = _0x27868b[0x1]);
            break;
        case 0xa:
            _0x17b835 = _0x5af1ac(_0x17b835);
            _0x578c4c && (_0x593fb9[_0x578c4c >> 0x2] = 0x1c);
            _0x593fb9[_0x35b8dc >> 0x2] = _0xe5783a,
            _0x593fb9[_0x35b8dc + 0x8 >> 0x2] = _0x17b835[0x0],
            _0x593fb9[_0x35b8dc + 0xc >> 0x2] = _0x17b835[0x1],
            _0x593fb9[_0x35b8dc + 0x10 >> 0x2] = _0x17b835[0x2],
            _0x593fb9[_0x35b8dc + 0x14 >> 0x2] = _0x17b835[0x3],
            _0x9a762d[_0x35b8dc + 0x2 >> 0x1] = _0x1e0697(_0x4afd25),
            _0x593fb9[_0x35b8dc + 0x4 >> 0x2] = 0x0,
            _0x593fb9[_0x35b8dc + 0x18 >> 0x2] = 0x0;
            break;
        default:
            return 0x5;
        }
        return 0x0;
    }
    var _0xe69825 = {
        'address_map': {
            'id': 0x1,
            'addrs': {},
            'names': {}
        },
        'lookup_name': function(_0x5c5a79) {
            var _0x5b64de = _0x117f6e(_0x5c5a79);
            if (_0x5b64de !== null)
                return _0x5c5a79;
            _0x5b64de = _0x5af1ac(_0x5c5a79);
            if (_0x5b64de !== null)
                return _0x5c5a79;
            var _0x2031cb;
            if (_0xe69825['address_map']['addrs'][_0x5c5a79])
                _0x2031cb = _0xe69825['address_map']['addrs'][_0x5c5a79];
            else {
                var _0x5c6599 = _0xe69825['address_map']['id']++;
                _0x51a343(_0x5c6599 < 0xffff, 'exceeded max address mappings of 65535'),
                _0x2031cb = '172.29.' + (_0x5c6599 & 0xff) + '.' + (_0x5c6599 & 0xff00),
                _0xe69825['address_map']['names'][_0x2031cb] = _0x5c5a79,
                _0xe69825['address_map']['addrs'][_0x5c5a79] = _0x2031cb;
            }
            return _0x2031cb;
        },
        'lookup_addr': function(_0x17d539) {
            if (_0xe69825['address_map']['names'][_0x17d539])
                return _0xe69825['address_map']['names'][_0x17d539];
            return null;
        }
    };
    function _0x1b31bb(_0x230b23, _0x1acc56, _0x4aba1c, _0x6bac62) {
        try {
            var _0x2c3be3 = _0x1c23f6(_0x230b23)
              , _0x4653d2 = _0x2c3be3['sock_ops']['accept'](_0x2c3be3);
            if (_0x1acc56)
                var _0x478dff = _0x28fdd5(_0x1acc56, _0x4653d2['family'], _0xe69825['lookup_name'](_0x4653d2['daddr']), _0x4653d2['dport'], _0x4aba1c);
            return _0x4653d2['stream']['fd'];
        } catch (_0x2d90dd) {
            if (typeof _0x23c512 === 'undefined' || !(_0x2d90dd instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x2d90dd);
            return -_0x2d90dd['errno'];
        }
    }
    function _0x601d36(_0x301ceb, _0x37c3de) {
        try {
            return _0x301ceb = _0x5c83f1['getStr'](_0x301ceb),
            _0x5c83f1['doAccess'](_0x301ceb, _0x37c3de);
        } catch (_0x595aca) {
            if (typeof _0x23c512 === 'undefined' || !(_0x595aca instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x595aca);
            return -_0x595aca['errno'];
        }
    }
    function _0x20ec37(_0x61b77a) {
        return (_0x61b77a & 0xff) + '.' + (_0x61b77a >> 0x8 & 0xff) + '.' + (_0x61b77a >> 0x10 & 0xff) + '.' + (_0x61b77a >> 0x18 & 0xff);
    }
    function _0x3c07fa(_0x3655ce) {
        var _0x4331c3 = ''
          , _0x26334d = 0x0
          , _0x1d341b = 0x0
          , _0x488167 = 0x0
          , _0x207796 = 0x0
          , _0x16a1bc = 0x0
          , _0x495ac1 = 0x0
          , _0x56a853 = [_0x3655ce[0x0] & 0xffff, _0x3655ce[0x0] >> 0x10, _0x3655ce[0x1] & 0xffff, _0x3655ce[0x1] >> 0x10, _0x3655ce[0x2] & 0xffff, _0x3655ce[0x2] >> 0x10, _0x3655ce[0x3] & 0xffff, _0x3655ce[0x3] >> 0x10]
          , _0x243894 = !![]
          , _0x46a25f = '';
        for (_0x495ac1 = 0x0; _0x495ac1 < 0x5; _0x495ac1++) {
            if (_0x56a853[_0x495ac1] !== 0x0) {
                _0x243894 = ![];
                break;
            }
        }
        if (_0x243894) {
            _0x46a25f = _0x20ec37(_0x56a853[0x6] | _0x56a853[0x7] << 0x10);
            if (_0x56a853[0x5] === -0x1)
                return _0x4331c3 = '::ffff:',
                _0x4331c3 += _0x46a25f,
                _0x4331c3;
            if (_0x56a853[0x5] === 0x0) {
                _0x4331c3 = '::';
                if (_0x46a25f === '0.0.0.0')
                    _0x46a25f = '';
                if (_0x46a25f === '0.0.0.1')
                    _0x46a25f = '1';
                return _0x4331c3 += _0x46a25f,
                _0x4331c3;
            }
        }
        for (_0x26334d = 0x0; _0x26334d < 0x8; _0x26334d++) {
            _0x56a853[_0x26334d] === 0x0 && (_0x26334d - _0x488167 > 0x1 && (_0x16a1bc = 0x0),
            _0x488167 = _0x26334d,
            _0x16a1bc++),
            _0x16a1bc > _0x1d341b && (_0x1d341b = _0x16a1bc,
            _0x207796 = _0x26334d - _0x1d341b + 0x1);
        }
        for (_0x26334d = 0x0; _0x26334d < 0x8; _0x26334d++) {
            if (_0x1d341b > 0x1) {
                if (_0x56a853[_0x26334d] === 0x0 && _0x26334d >= _0x207796 && _0x26334d < _0x207796 + _0x1d341b) {
                    if (_0x26334d === _0x207796) {
                        _0x4331c3 += ':';
                        if (_0x207796 === 0x0)
                            _0x4331c3 += ':';
                    }
                    continue;
                }
            }
            _0x4331c3 += Number(_0x399942(_0x56a853[_0x26334d] & 0xffff))['toString'](0x10),
            _0x4331c3 += _0x26334d < 0x7 ? ':' : '';
        }
        return _0x4331c3;
    }
    function _0x21553c(_0x33d854, _0x15a00f) {
        var _0x2dffab = _0x9a762d[_0x33d854 >> 0x1], _0x434641 = _0x399942(_0xb88d42[_0x33d854 + 0x2 >> 0x1]), _0x2a4e5e;
        switch (_0x2dffab) {
        case 0x2:
            if (_0x15a00f !== 0x10)
                return {
                    'errno': 0x1c
                };
            _0x2a4e5e = _0x593fb9[_0x33d854 + 0x4 >> 0x2],
            _0x2a4e5e = _0x20ec37(_0x2a4e5e);
            break;
        case 0xa:
            if (_0x15a00f !== 0x1c)
                return {
                    'errno': 0x1c
                };
            _0x2a4e5e = [_0x593fb9[_0x33d854 + 0x8 >> 0x2], _0x593fb9[_0x33d854 + 0xc >> 0x2], _0x593fb9[_0x33d854 + 0x10 >> 0x2], _0x593fb9[_0x33d854 + 0x14 >> 0x2]],
            _0x2a4e5e = _0x3c07fa(_0x2a4e5e);
            break;
        default:
            return {
                'errno': 0x5
            };
        }
        return {
            'family': _0x2dffab,
            'addr': _0x2a4e5e,
            'port': _0x434641
        };
    }
    function _0x168f57(_0x1ba6b2, _0x47c19c, _0x21fd1d) {
        if (_0x21fd1d && _0x1ba6b2 === 0x0)
            return null;
        var _0x24a20f = _0x21553c(_0x1ba6b2, _0x47c19c);
        if (_0x24a20f['errno'])
            throw new _0x23c512['ErrnoError'](_0x24a20f['errno']);
        return _0x24a20f['addr'] = _0xe69825['lookup_addr'](_0x24a20f['addr']) || _0x24a20f['addr'],
        _0x24a20f;
    }
    function _0x48be3c(_0x1f5981, _0x220c74, _0x19aa5a) {
        try {
            var _0x4a2d25 = _0x1c23f6(_0x1f5981)
              , _0x5d1940 = _0x168f57(_0x220c74, _0x19aa5a);
            return _0x4a2d25['sock_ops']['bind'](_0x4a2d25, _0x5d1940['addr'], _0x5d1940['port']),
            0x0;
        } catch (_0x5397e4) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5397e4 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5397e4);
            return -_0x5397e4['errno'];
        }
    }
    function _0x37d2d0(_0x2a0b82, _0x138c1d) {
        try {
            return _0x2a0b82 = _0x5c83f1['getStr'](_0x2a0b82),
            _0x23c512['chmod'](_0x2a0b82, _0x138c1d),
            0x0;
        } catch (_0xd5264b) {
            if (typeof _0x23c512 === 'undefined' || !(_0xd5264b instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0xd5264b);
            return -_0xd5264b['errno'];
        }
    }
    function _0x4f59b1(_0x132c83, _0x260823, _0x57aa8d) {
        try {
            var _0x263328 = _0x1c23f6(_0x132c83)
              , _0x2fda96 = _0x168f57(_0x260823, _0x57aa8d);
            return _0x263328['sock_ops']['connect'](_0x263328, _0x2fda96['addr'], _0x2fda96['port']),
            0x0;
        } catch (_0x34c926) {
            if (typeof _0x23c512 === 'undefined' || !(_0x34c926 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x34c926);
            return -_0x34c926['errno'];
        }
    }
    function _0x14b6e6(_0x1c4c40, _0xd624cd) {
        try {
            var _0x312bcd = _0x5c83f1['getStreamFromFD'](_0x1c4c40);
            if (_0x312bcd['fd'] === _0xd624cd)
                return _0xd624cd;
            return _0x5c83f1['doDup'](_0x312bcd['path'], _0x312bcd['flags'], _0xd624cd);
        } catch (_0x343727) {
            if (typeof _0x23c512 === 'undefined' || !(_0x343727 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x343727);
            return -_0x343727['errno'];
        }
    }
    function _0x32897a(_0x53e1c4, _0x41c04a, _0x1b5cc3) {
        _0x5c83f1['varargs'] = _0x1b5cc3;
        try {
            var _0x5153c8 = _0x5c83f1['getStreamFromFD'](_0x53e1c4);
            switch (_0x41c04a) {
            case 0x0:
                {
                    var _0x320817 = _0x5c83f1['get']();
                    if (_0x320817 < 0x0)
                        return -0x1c;
                    var _0x5b84db;
                    return _0x5b84db = _0x23c512['open'](_0x5153c8['path'], _0x5153c8['flags'], 0x0, _0x320817),
                    _0x5b84db['fd'];
                }
            case 0x1:
            case 0x2:
                return 0x0;
            case 0x3:
                return _0x5153c8['flags'];
            case 0x4:
                {
                    var _0x320817 = _0x5c83f1['get']();
                    return _0x5153c8['flags'] |= _0x320817,
                    0x0;
                }
            case 0xc:
                {
                    var _0x320817 = _0x5c83f1['get']()
                      , _0x9da3f8 = 0x0;
                    return _0x9a762d[_0x320817 + _0x9da3f8 >> 0x1] = 0x2,
                    0x0;
                }
            case 0xd:
            case 0xe:
                return 0x0;
            case 0x10:
            case 0x8:
                return -0x1c;
            case 0x9:
                _0x1669bd(0x1c);
                return -0x1;
            default:
                {
                    return -0x1c;
                }
            }
        } catch (_0x2b8d12) {
            if (typeof _0x23c512 === 'undefined' || !(_0x2b8d12 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x2b8d12);
            return -_0x2b8d12['errno'];
        }
    }
    function _0x6fb3f4(_0x382ab2, _0xec412c) {
        try {
            var _0x4b07d9 = _0x5c83f1['getStreamFromFD'](_0x382ab2);
            return _0x5c83f1['doStat'](_0x23c512['stat'], _0x4b07d9['path'], _0xec412c);
        } catch (_0x2e55f5) {
            if (typeof _0x23c512 === 'undefined' || !(_0x2e55f5 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x2e55f5);
            return -_0x2e55f5['errno'];
        }
    }
    function _0x55f1a5(_0x39d4ac, _0x4b03ff, _0x34f978, _0x2cb80f) {
        try {
            var _0xf1d02c = _0x5c83f1['get64'](_0x34f978, _0x2cb80f);
            return _0x23c512['ftruncate'](_0x39d4ac, _0xf1d02c),
            0x0;
        } catch (_0x3d4afa) {
            if (typeof _0x23c512 === 'undefined' || !(_0x3d4afa instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x3d4afa);
            return -_0x3d4afa['errno'];
        }
    }
    function _0x14f15f(_0x10ba43, _0x71a81) {
        try {
            if (_0x71a81 === 0x0)
                return -0x1c;
            var _0x2a122e = _0x23c512['cwd']()
              , _0x3e1164 = _0x5a6a49(_0x2a122e);
            if (_0x71a81 < _0x3e1164 + 0x1)
                return -0x44;
            return _0x430ff7(_0x2a122e, _0x10ba43, _0x71a81),
            _0x10ba43;
        } catch (_0x51294a) {
            if (typeof _0x23c512 === 'undefined' || !(_0x51294a instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x51294a);
            return -_0x51294a['errno'];
        }
    }
    function _0x32a959(_0x1dd103, _0x3a2f4e, _0x9b7de9) {
        try {
            var _0x52a101 = _0x5c83f1['getStreamFromFD'](_0x1dd103);
            !_0x52a101['getdents'] && (_0x52a101['getdents'] = _0x23c512['readdir'](_0x52a101['path']));
            var _0x25d632 = 0x118
              , _0x20b74d = 0x0
              , _0x18df89 = _0x23c512['llseek'](_0x52a101, 0x0, 0x1)
              , _0x2999fa = Math['floor'](_0x18df89 / _0x25d632);
            while (_0x2999fa < _0x52a101['getdents']['length'] && _0x20b74d + _0x25d632 <= _0x9b7de9) {
                var _0x93ba01, _0x2000bf, _0x18edf1 = _0x52a101['getdents'][_0x2999fa];
                if (_0x18edf1[0x0] === '.')
                    _0x93ba01 = 0x1,
                    _0x2000bf = 0x4;
                else {
                    var _0x55d70d = _0x23c512['lookupNode'](_0x52a101['node'], _0x18edf1);
                    _0x93ba01 = _0x55d70d['id'],
                    _0x2000bf = _0x23c512['isChrdev'](_0x55d70d['mode']) ? 0x2 : _0x23c512['isDir'](_0x55d70d['mode']) ? 0x4 : _0x23c512['isLink'](_0x55d70d['mode']) ? 0xa : 0x8;
                }
                _0x27868b = [_0x93ba01 >>> 0x0, (_0x1f09fe = _0x93ba01,
                +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
                _0x593fb9[_0x3a2f4e + _0x20b74d >> 0x2] = _0x27868b[0x0],
                _0x593fb9[_0x3a2f4e + _0x20b74d + 0x4 >> 0x2] = _0x27868b[0x1],
                (_0x27868b = [(_0x2999fa + 0x1) * _0x25d632 >>> 0x0, (_0x1f09fe = (_0x2999fa + 0x1) * _0x25d632,
                +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
                _0x593fb9[_0x3a2f4e + _0x20b74d + 0x8 >> 0x2] = _0x27868b[0x0],
                _0x593fb9[_0x3a2f4e + _0x20b74d + 0xc >> 0x2] = _0x27868b[0x1]),
                _0x9a762d[_0x3a2f4e + _0x20b74d + 0x10 >> 0x1] = 0x118,
                _0x10882b[_0x3a2f4e + _0x20b74d + 0x12 >> 0x0] = _0x2000bf,
                _0x430ff7(_0x18edf1, _0x3a2f4e + _0x20b74d + 0x13, 0x100),
                _0x20b74d += _0x25d632,
                _0x2999fa += 0x1;
            }
            return _0x23c512['llseek'](_0x52a101, _0x2999fa * _0x25d632, 0x0),
            _0x20b74d;
        } catch (_0x379aea) {
            if (typeof _0x23c512 === 'undefined' || !(_0x379aea instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x379aea);
            return -_0x379aea['errno'];
        }
    }
    function _0x42d444() {
        return 0x0;
    }
    function _0x2125be() {
        return _0x42d444();
    }
    function _0x1f795c(_0x5aec8b, _0x5c5805, _0x108f53) {
        try {
            var _0x51ecb4 = _0x1c23f6(_0x5aec8b);
            if (!_0x51ecb4['daddr'])
                return -0x35;
            var _0x2e37c9 = _0x28fdd5(_0x5c5805, _0x51ecb4['family'], _0xe69825['lookup_name'](_0x51ecb4['daddr']), _0x51ecb4['dport'], _0x108f53);
            return 0x0;
        } catch (_0x48c50f) {
            if (typeof _0x23c512 === 'undefined' || !(_0x48c50f instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x48c50f);
            return -_0x48c50f['errno'];
        }
    }
    function _0x406b0a() {
        return 0x2a;
    }
    function _0x3822a8(_0x5c62a2, _0x54e18e) {
        try {
            return _0x4bcec0(_0x54e18e, 0x0, 0x88),
            _0x593fb9[_0x54e18e >> 0x2] = 0x1,
            _0x593fb9[_0x54e18e + 0x4 >> 0x2] = 0x2,
            _0x593fb9[_0x54e18e + 0x8 >> 0x2] = 0x3,
            _0x593fb9[_0x54e18e + 0xc >> 0x2] = 0x4,
            0x0;
        } catch (_0x93bd79) {
            if (typeof _0x23c512 === 'undefined' || !(_0x93bd79 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x93bd79);
            return -_0x93bd79['errno'];
        }
    }
    function _0x3bde28(_0x17cfb7, _0x39d77e, _0x2c1dcd) {
        try {
            _0x5a96d4('__sys_getsockname ' + _0x17cfb7);
            var _0x4f76dd = _0x1c23f6(_0x17cfb7)
              , _0x506cc4 = _0x28fdd5(_0x39d77e, _0x4f76dd['family'], _0xe69825['lookup_name'](_0x4f76dd['saddr'] || '0.0.0.0'), _0x4f76dd['sport'], _0x2c1dcd);
            return 0x0;
        } catch (_0x2189f3) {
            if (typeof _0x23c512 === 'undefined' || !(_0x2189f3 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x2189f3);
            return -_0x2189f3['errno'];
        }
    }
    function _0x2dc4e9(_0x273479, _0xecb294, _0xe65e24, _0x26a599, _0x4695c7) {
        try {
            var _0x3ab72f = _0x1c23f6(_0x273479);
            if (_0xecb294 === 0x1) {
                if (_0xe65e24 === 0x4)
                    return _0x593fb9[_0x26a599 >> 0x2] = _0x3ab72f['error'],
                    _0x593fb9[_0x4695c7 >> 0x2] = 0x4,
                    _0x3ab72f['error'] = null,
                    0x0;
            }
            return -0x32;
        } catch (_0x5b3415) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5b3415 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5b3415);
            return -_0x5b3415['errno'];
        }
    }
    function _0x364e5e() {
        return _0x42d444();
    }
    function _0x40a2bc(_0x1f5192, _0x22b7d1, _0x5d7b77) {
        _0x5c83f1['varargs'] = _0x5d7b77;
        try {
            var _0x20b0f5 = _0x5c83f1['getStreamFromFD'](_0x1f5192);
            switch (_0x22b7d1) {
            case 0x5405:
            case 0x5401:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    return 0x0;
                }
            case 0x5406:
            case 0x5407:
            case 0x5408:
            case 0x5402:
            case 0x5403:
            case 0x5404:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    return 0x0;
                }
            case 0x540f:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    var _0x499f8f = _0x5c83f1['get']();
                    return _0x593fb9[_0x499f8f >> 0x2] = 0x0,
                    0x0;
                }
            case 0x5410:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    return -0x1c;
                }
            case 0x541b:
                {
                    var _0x499f8f = _0x5c83f1['get']();
                    return _0x23c512['ioctl'](_0x20b0f5, _0x22b7d1, _0x499f8f);
                }
            case 0x5413:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    return 0x0;
                }
            case 0x5414:
                {
                    if (!_0x20b0f5['tty'])
                        return -0x3b;
                    return 0x0;
                }
            default:
                _0x26724f('bad ioctl syscall ' + _0x22b7d1);
            }
        } catch (_0x3425df) {
            if (typeof _0x23c512 === 'undefined' || !(_0x3425df instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x3425df);
            return -_0x3425df['errno'];
        }
    }
    function _0x5b8206(_0x1f1693, _0x29ebf2) {
        try {
            var _0x410c82 = _0x1c23f6(_0x1f1693);
            return _0x410c82['sock_ops']['listen'](_0x410c82, _0x29ebf2),
            0x0;
        } catch (_0x132c6a) {
            if (typeof _0x23c512 === 'undefined' || !(_0x132c6a instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x132c6a);
            return -_0x132c6a['errno'];
        }
    }
    function _0x41fdc9(_0x2d8ca8, _0x3b214f) {
        try {
            return _0x2d8ca8 = _0x5c83f1['getStr'](_0x2d8ca8),
            _0x5c83f1['doStat'](_0x23c512['lstat'], _0x2d8ca8, _0x3b214f);
        } catch (_0x5a92e5) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5a92e5 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5a92e5);
            return -_0x5a92e5['errno'];
        }
    }
    function _0x2cda87(_0x1df7c7, _0x1469d4) {
        try {
            return _0x1df7c7 = _0x5c83f1['getStr'](_0x1df7c7),
            _0x5c83f1['doMkdir'](_0x1df7c7, _0x1469d4);
        } catch (_0x13b6a3) {
            if (typeof _0x23c512 === 'undefined' || !(_0x13b6a3 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x13b6a3);
            return -_0x13b6a3['errno'];
        }
    }
    function _0x3d85b1(_0x3a1e9f, _0x1f161c, _0x3b7e44, _0x338823, _0x48ec59, _0x52b9ee) {
        _0x52b9ee <<= 0xc;
        var _0x5a12f1, _0x5a08b4 = ![];
        if ((_0x338823 & 0x10) !== 0x0 && _0x3a1e9f % 0x10000 !== 0x0)
            return -0x1c;
        if ((_0x338823 & 0x20) !== 0x0) {
            _0x5a12f1 = _0x14b23e(0x10000, _0x1f161c);
            if (!_0x5a12f1)
                return -0x30;
            _0x4bcec0(_0x5a12f1, 0x0, _0x1f161c),
            _0x5a08b4 = !![];
        } else {
            var _0x384bbc = _0x23c512['getStream'](_0x48ec59);
            if (!_0x384bbc)
                return -0x8;
            var _0x4badd5 = _0x23c512['mmap'](_0x384bbc, _0x3a1e9f, _0x1f161c, _0x52b9ee, _0x3b7e44, _0x338823);
            _0x5a12f1 = _0x4badd5['ptr'],
            _0x5a08b4 = _0x4badd5['allocated'];
        }
        return _0x5c83f1['mappings'][_0x5a12f1] = {
            'malloc': _0x5a12f1,
            'len': _0x1f161c,
            'allocated': _0x5a08b4,
            'fd': _0x48ec59,
            'prot': _0x3b7e44,
            'flags': _0x338823,
            'offset': _0x52b9ee
        },
        _0x5a12f1;
    }
    function _0x33b364(_0x30f0d0, _0x307eeb, _0x2cfb97, _0x2702d5, _0x4080f3, _0x553b42) {
        try {
            return _0x3d85b1(_0x30f0d0, _0x307eeb, _0x2cfb97, _0x2702d5, _0x4080f3, _0x553b42);
        } catch (_0x3a02cd) {
            if (typeof _0x23c512 === 'undefined' || !(_0x3a02cd instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x3a02cd);
            return -_0x3a02cd['errno'];
        }
    }
    function _0x2dd012(_0x3220d7, _0x29057e) {
        if ((_0x3220d7 | 0x0) === -0x1 || _0x29057e === 0x0)
            return -0x1c;
        var _0xed63cd = _0x5c83f1['mappings'][_0x3220d7];
        if (!_0xed63cd)
            return 0x0;
        if (_0x29057e === _0xed63cd['len']) {
            var _0x42bceb = _0x23c512['getStream'](_0xed63cd['fd']);
            _0x42bceb && (_0xed63cd['prot'] & 0x2 && _0x5c83f1['doMsync'](_0x3220d7, _0x42bceb, _0x29057e, _0xed63cd['flags'], _0xed63cd['offset']),
            _0x23c512['munmap'](_0x42bceb)),
            _0x5c83f1['mappings'][_0x3220d7] = null,
            _0xed63cd['allocated'] && _0x1f3809(_0xed63cd['malloc']);
        }
        return 0x0;
    }
    function _0x2b4e45(_0x1c96dd, _0x48d40c) {
        try {
            return _0x2dd012(_0x1c96dd, _0x48d40c);
        } catch (_0x3cfcc8) {
            if (typeof _0x23c512 === 'undefined' || !(_0x3cfcc8 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x3cfcc8);
            return -_0x3cfcc8['errno'];
        }
    }
    function _0x3195cc(_0x193309, _0x203005, _0x101091) {
        _0x5c83f1['varargs'] = _0x101091;
        try {
            var _0x5533d0 = _0x5c83f1['getStr'](_0x193309)
              , _0x469c0c = _0x101091 ? _0x5c83f1['get']() : 0x0
              , _0x1cfedc = _0x23c512['open'](_0x5533d0, _0x203005, _0x469c0c);
            return _0x1cfedc['fd'];
        } catch (_0xc9dda1) {
            if (typeof _0x23c512 === 'undefined' || !(_0xc9dda1 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0xc9dda1);
            return -_0xc9dda1['errno'];
        }
    }
    var _0x4df6bf = {
        'BUCKET_BUFFER_SIZE': 0x2000,
        'mount': function(_0x45d537) {
            return _0x23c512['createNode'](null, '/', 0x4000 | 0x1ff, 0x0);
        },
        'createPipe': function() {
            var _0x328815 = {
                'buckets': []
            };
            _0x328815['buckets']['push']({
                'buffer': new Uint8Array(_0x4df6bf['BUCKET_BUFFER_SIZE']),
                'offset': 0x0,
                'roffset': 0x0
            });
            var _0x22673f = _0x4df6bf['nextname']()
              , _0x253102 = _0x4df6bf['nextname']()
              , _0x551e94 = _0x23c512['createNode'](_0x4df6bf['root'], _0x22673f, 0x1000, 0x0)
              , _0x50672c = _0x23c512['createNode'](_0x4df6bf['root'], _0x253102, 0x1000, 0x0);
            _0x551e94['pipe'] = _0x328815,
            _0x50672c['pipe'] = _0x328815;
            var _0x238f35 = _0x23c512['createStream']({
                'path': _0x22673f,
                'node': _0x551e94,
                'flags': 0x0,
                'seekable': ![],
                'stream_ops': _0x4df6bf['stream_ops']
            });
            _0x551e94['stream'] = _0x238f35;
            var _0x1ea79f = _0x23c512['createStream']({
                'path': _0x253102,
                'node': _0x50672c,
                'flags': 0x1,
                'seekable': ![],
                'stream_ops': _0x4df6bf['stream_ops']
            });
            return _0x50672c['stream'] = _0x1ea79f,
            {
                'readable_fd': _0x238f35['fd'],
                'writable_fd': _0x1ea79f['fd']
            };
        },
        'stream_ops': {
            'poll': function(_0xa17390) {
                var _0x5e61c9 = _0xa17390['node']['pipe'];
                if ((_0xa17390['flags'] & 0x200003) === 0x1)
                    return 0x100 | 0x4;
                else {
                    if (_0x5e61c9['buckets']['length'] > 0x0)
                        for (var _0x4d9bee = 0x0; _0x4d9bee < _0x5e61c9['buckets']['length']; _0x4d9bee++) {
                            var _0x335af3 = _0x5e61c9['buckets'][_0x4d9bee];
                            if (_0x335af3['offset'] - _0x335af3['roffset'] > 0x0)
                                return 0x40 | 0x1;
                        }
                }
                return 0x0;
            },
            'ioctl': function(_0x1e0d7e, _0x256390, _0x34471b) {
                return _0x4bff20['EINVAL'];
            },
            'fsync': function(_0x13e711) {
                return _0x4bff20['EINVAL'];
            },
            'read': function(_0x2e9dcd, _0x2292fb, _0x3df95f, _0x49e8e3, _0x131f99) {
                var _0xccaa2a = _0x2e9dcd['node']['pipe']
                  , _0x2202f8 = 0x0;
                for (var _0x3b7e92 = 0x0; _0x3b7e92 < _0xccaa2a['buckets']['length']; _0x3b7e92++) {
                    var _0x266e05 = _0xccaa2a['buckets'][_0x3b7e92];
                    _0x2202f8 += _0x266e05['offset'] - _0x266e05['roffset'];
                }
                _0x51a343(_0x2292fb instanceof ArrayBuffer || ArrayBuffer['isView'](_0x2292fb));
                var _0x25382f = _0x2292fb['subarray'](_0x3df95f, _0x3df95f + _0x49e8e3);
                if (_0x49e8e3 <= 0x0)
                    return 0x0;
                if (_0x2202f8 == 0x0)
                    throw new _0x23c512['ErrnoError'](_0x4bff20['EAGAIN']);
                var _0x41edcf = Math['min'](_0x2202f8, _0x49e8e3)
                  , _0x4898ae = _0x41edcf
                  , _0x1867b0 = 0x0;
                for (var _0x3b7e92 = 0x0; _0x3b7e92 < _0xccaa2a['buckets']['length']; _0x3b7e92++) {
                    var _0x43e282 = _0xccaa2a['buckets'][_0x3b7e92]
                      , _0x446522 = _0x43e282['offset'] - _0x43e282['roffset'];
                    if (_0x41edcf <= _0x446522) {
                        var _0x275d1d = _0x43e282['buffer']['subarray'](_0x43e282['roffset'], _0x43e282['offset']);
                        _0x41edcf < _0x446522 ? (_0x275d1d = _0x275d1d['subarray'](0x0, _0x41edcf),
                        _0x43e282['roffset'] += _0x41edcf) : _0x1867b0++;
                        _0x25382f['set'](_0x275d1d);
                        break;
                    } else {
                        var _0x275d1d = _0x43e282['buffer']['subarray'](_0x43e282['roffset'], _0x43e282['offset']);
                        _0x25382f['set'](_0x275d1d),
                        _0x25382f = _0x25382f['subarray'](_0x275d1d['byteLength']),
                        _0x41edcf -= _0x275d1d['byteLength'],
                        _0x1867b0++;
                    }
                }
                return _0x1867b0 && _0x1867b0 == _0xccaa2a['buckets']['length'] && (_0x1867b0--,
                _0xccaa2a['buckets'][_0x1867b0]['offset'] = 0x0,
                _0xccaa2a['buckets'][_0x1867b0]['roffset'] = 0x0),
                _0xccaa2a['buckets']['splice'](0x0, _0x1867b0),
                _0x4898ae;
            },
            'write': function(_0x202882, _0x35c38b, _0x2a4c59, _0x447a60, _0x3c56d9) {
                var _0x4be008 = _0x202882['node']['pipe'];
                _0x51a343(_0x35c38b instanceof ArrayBuffer || ArrayBuffer['isView'](_0x35c38b));
                var _0x33257f = _0x35c38b['subarray'](_0x2a4c59, _0x2a4c59 + _0x447a60)
                  , _0x4f866e = _0x33257f['byteLength'];
                if (_0x4f866e <= 0x0)
                    return 0x0;
                var _0x304590 = null;
                _0x4be008['buckets']['length'] == 0x0 ? (_0x304590 = {
                    'buffer': new Uint8Array(_0x4df6bf['BUCKET_BUFFER_SIZE']),
                    'offset': 0x0,
                    'roffset': 0x0
                },
                _0x4be008['buckets']['push'](_0x304590)) : _0x304590 = _0x4be008['buckets'][_0x4be008['buckets']['length'] - 0x1];
                _0x51a343(_0x304590['offset'] <= _0x4df6bf['BUCKET_BUFFER_SIZE']);
                var _0x189c99 = _0x4df6bf['BUCKET_BUFFER_SIZE'] - _0x304590['offset'];
                if (_0x189c99 >= _0x4f866e)
                    return _0x304590['buffer']['set'](_0x33257f, _0x304590['offset']),
                    _0x304590['offset'] += _0x4f866e,
                    _0x4f866e;
                else
                    _0x189c99 > 0x0 && (_0x304590['buffer']['set'](_0x33257f['subarray'](0x0, _0x189c99), _0x304590['offset']),
                    _0x304590['offset'] += _0x189c99,
                    _0x33257f = _0x33257f['subarray'](_0x189c99, _0x33257f['byteLength']));
                var _0x518dcf = _0x33257f['byteLength'] / _0x4df6bf['BUCKET_BUFFER_SIZE'] | 0x0
                  , _0x465644 = _0x33257f['byteLength'] % _0x4df6bf['BUCKET_BUFFER_SIZE'];
                for (var _0x4598b2 = 0x0; _0x4598b2 < _0x518dcf; _0x4598b2++) {
                    var _0xc269dd = {
                        'buffer': new Uint8Array(_0x4df6bf['BUCKET_BUFFER_SIZE']),
                        'offset': _0x4df6bf['BUCKET_BUFFER_SIZE'],
                        'roffset': 0x0
                    };
                    _0x4be008['buckets']['push'](_0xc269dd),
                    _0xc269dd['buffer']['set'](_0x33257f['subarray'](0x0, _0x4df6bf['BUCKET_BUFFER_SIZE'])),
                    _0x33257f = _0x33257f['subarray'](_0x4df6bf['BUCKET_BUFFER_SIZE'], _0x33257f['byteLength']);
                }
                if (_0x465644 > 0x0) {
                    var _0xc269dd = {
                        'buffer': new Uint8Array(_0x4df6bf['BUCKET_BUFFER_SIZE']),
                        'offset': _0x33257f['byteLength'],
                        'roffset': 0x0
                    };
                    _0x4be008['buckets']['push'](_0xc269dd),
                    _0xc269dd['buffer']['set'](_0x33257f);
                }
                return _0x4f866e;
            },
            'close': function(_0x13ecfd) {
                var _0x408817 = _0x13ecfd['node']['pipe'];
                _0x408817['buckets'] = null;
            }
        },
        'nextname': function() {
            return !_0x4df6bf['nextname']['current'] && (_0x4df6bf['nextname']['current'] = 0x0),
            'pipe[' + _0x4df6bf['nextname']['current']++ + ']';
        }
    };
    function _0x2ca1e7(_0x5b2b81) {
        try {
            if (_0x5b2b81 == 0x0)
                throw new _0x23c512['ErrnoError'](0x15);
            var _0x231b4f = _0x4df6bf['createPipe']();
            return _0x593fb9[_0x5b2b81 >> 0x2] = _0x231b4f['readable_fd'],
            _0x593fb9[_0x5b2b81 + 0x4 >> 0x2] = _0x231b4f['writable_fd'],
            0x0;
        } catch (_0x23c769) {
            if (typeof _0x23c512 === 'undefined' || !(_0x23c769 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x23c769);
            return -_0x23c769['errno'];
        }
    }
    function _0x20456a(_0x5e777b, _0x5bab9a, _0xe12781) {
        try {
            var _0x19ce4c = 0x0;
            for (var _0x1f4af1 = 0x0; _0x1f4af1 < _0x5bab9a; _0x1f4af1++) {
                var _0x2b4aa3 = _0x5e777b + 0x8 * _0x1f4af1
                  , _0x16e740 = _0x593fb9[_0x2b4aa3 >> 0x2]
                  , _0x5250fa = _0x9a762d[_0x2b4aa3 + 0x4 >> 0x1]
                  , _0x17bf68 = 0x20
                  , _0x216136 = _0x23c512['getStream'](_0x16e740);
                _0x216136 && (_0x17bf68 = _0x5c83f1['DEFAULT_POLLMASK'],
                _0x216136['stream_ops']['poll'] && (_0x17bf68 = _0x216136['stream_ops']['poll'](_0x216136)));
                _0x17bf68 &= _0x5250fa | 0x8 | 0x10;
                if (_0x17bf68)
                    _0x19ce4c++;
                _0x9a762d[_0x2b4aa3 + 0x6 >> 0x1] = _0x17bf68;
            }
            return _0x19ce4c;
        } catch (_0x441e44) {
            if (typeof _0x23c512 === 'undefined' || !(_0x441e44 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x441e44);
            return -_0x441e44['errno'];
        }
    }
    function _0x92a3ca(_0x2dd256, _0x130ccb, _0x3df111) {
        try {
            return _0x2dd256 = _0x5c83f1['getStr'](_0x2dd256),
            _0x5c83f1['doReadlink'](_0x2dd256, _0x130ccb, _0x3df111);
        } catch (_0xaa5ba8) {
            if (typeof _0x23c512 === 'undefined' || !(_0xaa5ba8 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0xaa5ba8);
            return -_0xaa5ba8['errno'];
        }
    }
    function _0x460f62(_0x1b9b66, _0x5a1236, _0x52cbc0, _0x6daca9, _0x436d9b, _0x1007a6) {
        try {
            var _0x10be7f = _0x1c23f6(_0x1b9b66)
              , _0x46f6e0 = _0x10be7f['sock_ops']['recvmsg'](_0x10be7f, _0x52cbc0);
            if (!_0x46f6e0)
                return 0x0;
            if (_0x436d9b)
                var _0x47303e = _0x28fdd5(_0x436d9b, _0x10be7f['family'], _0xe69825['lookup_name'](_0x46f6e0['addr']), _0x46f6e0['port'], _0x1007a6);
            return _0x2ac27b['set'](_0x46f6e0['buffer'], _0x5a1236),
            _0x46f6e0['buffer']['byteLength'];
        } catch (_0x45a870) {
            if (typeof _0x23c512 === 'undefined' || !(_0x45a870 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x45a870);
            return -_0x45a870['errno'];
        }
    }
    function _0x3420cd(_0x568550, _0x552dd6, _0x3958ea) {
        try {
            var _0x3571eb = _0x1c23f6(_0x568550)
              , _0x1759e4 = _0x593fb9[_0x552dd6 + 0x8 >> 0x2]
              , _0x225c76 = _0x593fb9[_0x552dd6 + 0xc >> 0x2]
              , _0x2ff045 = 0x0;
            for (var _0x242417 = 0x0; _0x242417 < _0x225c76; _0x242417++) {
                _0x2ff045 += _0x593fb9[_0x1759e4 + (0x8 * _0x242417 + 0x4) >> 0x2];
            }
            var _0x519791 = _0x3571eb['sock_ops']['recvmsg'](_0x3571eb, _0x2ff045);
            if (!_0x519791)
                return 0x0;
            var _0xca4f8b = _0x593fb9[_0x552dd6 >> 0x2];
            if (_0xca4f8b)
                var _0x4e9eba = _0x28fdd5(_0xca4f8b, _0x3571eb['family'], _0xe69825['lookup_name'](_0x519791['addr']), _0x519791['port']);
            var _0x1622dc = 0x0
              , _0x56dd23 = _0x519791['buffer']['byteLength'];
            for (var _0x242417 = 0x0; _0x56dd23 > 0x0 && _0x242417 < _0x225c76; _0x242417++) {
                var _0x14ea6a = _0x593fb9[_0x1759e4 + (0x8 * _0x242417 + 0x0) >> 0x2]
                  , _0x498846 = _0x593fb9[_0x1759e4 + (0x8 * _0x242417 + 0x4) >> 0x2];
                if (!_0x498846)
                    continue;
                var _0x1a8504 = Math['min'](_0x498846, _0x56dd23)
                  , _0x509858 = _0x519791['buffer']['subarray'](_0x1622dc, _0x1622dc + _0x1a8504);
                _0x2ac27b['set'](_0x509858, _0x14ea6a + _0x1622dc),
                _0x1622dc += _0x1a8504,
                _0x56dd23 -= _0x1a8504;
            }
            return _0x1622dc;
        } catch (_0x49f1bb) {
            if (typeof _0x23c512 === 'undefined' || !(_0x49f1bb instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x49f1bb);
            return -_0x49f1bb['errno'];
        }
    }
    function _0x407aa9(_0x4fd142, _0x3f4964) {
        try {
            return _0x4fd142 = _0x5c83f1['getStr'](_0x4fd142),
            _0x3f4964 = _0x5c83f1['getStr'](_0x3f4964),
            _0x23c512['rename'](_0x4fd142, _0x3f4964),
            0x0;
        } catch (_0x14b73e) {
            if (typeof _0x23c512 === 'undefined' || !(_0x14b73e instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x14b73e);
            return -_0x14b73e['errno'];
        }
    }
    function _0xef2089(_0x3cd7f3) {
        try {
            return _0x3cd7f3 = _0x5c83f1['getStr'](_0x3cd7f3),
            _0x23c512['rmdir'](_0x3cd7f3),
            0x0;
        } catch (_0x53c2f9) {
            if (typeof _0x23c512 === 'undefined' || !(_0x53c2f9 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x53c2f9);
            return -_0x53c2f9['errno'];
        }
    }
    function _0x6d61e4(_0x38cff7, _0x4593ef, _0x281880) {
        try {
            var _0x4948af = _0x1c23f6(_0x38cff7), _0x469130 = _0x593fb9[_0x4593ef + 0x8 >> 0x2], _0x10ab67 = _0x593fb9[_0x4593ef + 0xc >> 0x2], _0x50afe2, _0x4c7b57, _0x5e2410 = _0x593fb9[_0x4593ef >> 0x2], _0x31fefc = _0x593fb9[_0x4593ef + 0x4 >> 0x2];
            if (_0x5e2410) {
                var _0x3ec890 = _0x21553c(_0x5e2410, _0x31fefc);
                if (_0x3ec890['errno'])
                    return -_0x3ec890['errno'];
                _0x4c7b57 = _0x3ec890['port'],
                _0x50afe2 = _0xe69825['lookup_addr'](_0x3ec890['addr']) || _0x3ec890['addr'];
            }
            var _0x4f49c5 = 0x0;
            for (var _0x4a232e = 0x0; _0x4a232e < _0x10ab67; _0x4a232e++) {
                _0x4f49c5 += _0x593fb9[_0x469130 + (0x8 * _0x4a232e + 0x4) >> 0x2];
            }
            var _0x1cb749 = new Uint8Array(_0x4f49c5)
              , _0x244cd6 = 0x0;
            for (var _0x4a232e = 0x0; _0x4a232e < _0x10ab67; _0x4a232e++) {
                var _0x419eb2 = _0x593fb9[_0x469130 + (0x8 * _0x4a232e + 0x0) >> 0x2]
                  , _0x337297 = _0x593fb9[_0x469130 + (0x8 * _0x4a232e + 0x4) >> 0x2];
                for (var _0x55a4b1 = 0x0; _0x55a4b1 < _0x337297; _0x55a4b1++) {
                    _0x1cb749[_0x244cd6++] = _0x10882b[_0x419eb2 + _0x55a4b1 >> 0x0];
                }
            }
            return _0x4948af['sock_ops']['sendmsg'](_0x4948af, _0x1cb749, 0x0, _0x4f49c5, _0x50afe2, _0x4c7b57);
        } catch (_0x838cba) {
            if (typeof _0x23c512 === 'undefined' || !(_0x838cba instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x838cba);
            return -_0x838cba['errno'];
        }
    }
    function _0x4bd1c5(_0x7beace, _0xbfc236, _0x448e7b, _0x5640bb, _0xbc4389, _0x5612e0) {
        try {
            var _0x5e3c12 = _0x1c23f6(_0x7beace)
              , _0x1e2a6e = _0x168f57(_0xbc4389, _0x5612e0, !![]);
            return !_0x1e2a6e ? _0x23c512['write'](_0x5e3c12['stream'], _0x10882b, _0xbfc236, _0x448e7b) : _0x5e3c12['sock_ops']['sendmsg'](_0x5e3c12, _0x10882b, _0xbfc236, _0x448e7b, _0x1e2a6e['addr'], _0x1e2a6e['port']);
        } catch (_0x537862) {
            if (typeof _0x23c512 === 'undefined' || !(_0x537862 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x537862);
            return -_0x537862['errno'];
        }
    }
    function _0xbd7a5e(_0x36b230) {
        try {
            return -0x32;
        } catch (_0x173b5b) {
            if (typeof _0x23c512 === 'undefined' || !(_0x173b5b instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x173b5b);
            return -_0x173b5b['errno'];
        }
    }
    function _0x16644f(_0x1229a3, _0x157585) {
        try {
            return _0x1c23f6(_0x1229a3),
            -0x34;
        } catch (_0x4296df) {
            if (typeof _0x23c512 === 'undefined' || !(_0x4296df instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x4296df);
            return -_0x4296df['errno'];
        }
    }
    function _0x52fd21(_0x20eb79, _0xb4d35b, _0x1aacae) {
        try {
            var _0x222e12 = _0x573cc0['createSocket'](_0x20eb79, _0xb4d35b, _0x1aacae);
            return _0x222e12['stream']['fd'];
        } catch (_0x5ec98c) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5ec98c instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5ec98c);
            return -_0x5ec98c['errno'];
        }
    }
    function _0xb6dbf8(_0x45496f, _0x5a5b25) {
        try {
            return _0x45496f = _0x5c83f1['getStr'](_0x45496f),
            _0x5c83f1['doStat'](_0x23c512['stat'], _0x45496f, _0x5a5b25);
        } catch (_0x1e7b1e) {
            if (typeof _0x23c512 === 'undefined' || !(_0x1e7b1e instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x1e7b1e);
            return -_0x1e7b1e['errno'];
        }
    }
    function _0x6d9e96(_0x29c475, _0x474c7f, _0x9262c4) {
        try {
            return _0x29c475 = _0x5c83f1['getStr'](_0x29c475),
            _0x593fb9[_0x9262c4 + 0x4 >> 0x2] = 0x1000,
            _0x593fb9[_0x9262c4 + 0x28 >> 0x2] = 0x1000,
            _0x593fb9[_0x9262c4 + 0x8 >> 0x2] = 0xf4240,
            _0x593fb9[_0x9262c4 + 0xc >> 0x2] = 0x7a120,
            _0x593fb9[_0x9262c4 + 0x10 >> 0x2] = 0x7a120,
            _0x593fb9[_0x9262c4 + 0x14 >> 0x2] = _0x23c512['nextInode'],
            _0x593fb9[_0x9262c4 + 0x18 >> 0x2] = 0xf4240,
            _0x593fb9[_0x9262c4 + 0x1c >> 0x2] = 0x2a,
            _0x593fb9[_0x9262c4 + 0x2c >> 0x2] = 0x2,
            _0x593fb9[_0x9262c4 + 0x24 >> 0x2] = 0xff,
            0x0;
        } catch (_0x51e89b) {
            if (typeof _0x23c512 === 'undefined' || !(_0x51e89b instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x51e89b);
            return -_0x51e89b['errno'];
        }
    }
    function _0x582cb4(_0x1d97dd, _0xdf285e, _0x3f1edc, _0x239ea3) {
        try {
            _0x1d97dd = _0x5c83f1['getStr'](_0x1d97dd);
            var _0x3175b5 = _0x5c83f1['get64'](_0x3f1edc, _0x239ea3);
            return _0x23c512['truncate'](_0x1d97dd, _0x3175b5),
            0x0;
        } catch (_0x5aade6) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5aade6 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5aade6);
            return -_0x5aade6['errno'];
        }
    }
    function _0x519b27(_0xaf5dff) {
        try {
            if (!_0xaf5dff)
                return -0x15;
            var _0x9ba021 = {
                '__size__': 0x186,
                'domainname': 0x145,
                'machine': 0x104,
                'nodename': 0x41,
                'release': 0x82,
                'sysname': 0x0,
                'version': 0xc3
            }
              , _0x7eff1 = function(_0x5f0414, _0x3dc98b) {
                var _0x5e7a25 = _0x9ba021[_0x5f0414];
                _0x2ad138(_0x3dc98b, _0xaf5dff + _0x5e7a25);
            };
            return _0x7eff1('sysname', 'Emscripten'),
            _0x7eff1('nodename', 'emscripten'),
            _0x7eff1('release', '1.0'),
            _0x7eff1('version', '#1'),
            _0x7eff1('machine', 'wasm32'),
            0x0;
        } catch (_0xc4f86f) {
            if (typeof _0x23c512 === 'undefined' || !(_0xc4f86f instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0xc4f86f);
            return -_0xc4f86f['errno'];
        }
    }
    function _0x1dc07c(_0x4ebab5) {
        try {
            return _0x4ebab5 = _0x5c83f1['getStr'](_0x4ebab5),
            _0x23c512['unlink'](_0x4ebab5),
            0x0;
        } catch (_0x19c87b) {
            if (typeof _0x23c512 === 'undefined' || !(_0x19c87b instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x19c87b);
            return -_0x19c87b['errno'];
        }
    }
    function _0x15e6a1() {
        _0x26724f();
    }
    function _0x44a9a5() {
        if (_0x44a9a5['start'] === undefined)
            _0x44a9a5['start'] = Date['now']();
        return (Date['now']() - _0x44a9a5['start']) * (0xf4240 / 0x3e8) | 0x0;
    }
    function _0x555760() {
        if (_0x37878f)
            return 0x1;
        else {
            if (typeof dateNow !== 'undefined')
                return 0x3e8;
            else
                return 0x3e8;
        }
    }
    var _0x184d4a = !![];
    function _0xf8cead(_0x4566ad, _0x4103ab) {
        var _0x533082;
        if (_0x4566ad === 0x0)
            _0x533082 = 0x3e8 * 0x3e8;
        else {
            if (_0x4566ad === 0x1 && _0x184d4a)
                _0x533082 = _0x555760();
            else
                return _0x1669bd(0x1c),
                -0x1;
        }
        return _0x593fb9[_0x4103ab >> 0x2] = _0x533082 / 0x3b9aca00 | 0x0,
        _0x593fb9[_0x4103ab + 0x4 >> 0x2] = _0x533082,
        0x0;
    }
    var _0x15c469;
    if (_0x37878f)
        _0x15c469 = function() {
            var _0x5d7947 = process['hrtime']();
            return _0x5d7947[0x0] * 0x3e8 + _0x5d7947[0x1] / 0xf4240;
        }
        ;
    else {
        if (typeof dateNow !== 'undefined')
            _0x15c469 = dateNow;
        else
            _0x15c469 = function() {
                return performance['now']();
            }
            ;
    }
    function _0xff062(_0x27ca12, _0x210270) {
        var _0xaf8fad;
        if (_0x27ca12 === 0x0)
            _0xaf8fad = Date['now']();
        else {
            if ((_0x27ca12 === 0x1 || _0x27ca12 === 0x4) && _0x184d4a)
                _0xaf8fad = _0x15c469();
            else
                return _0x1669bd(0x1c),
                -0x1;
        }
        return _0x593fb9[_0x210270 >> 0x2] = _0xaf8fad / 0x3e8 | 0x0,
        _0x593fb9[_0x210270 + 0x4 >> 0x2] = _0xaf8fad % 0x3e8 * 0x3e8 * 0x3e8 | 0x0,
        0x0;
    }
    function _0x4c3060(_0x50e357, _0x4a020b) {
        return _0x50e357 - _0x4a020b;
    }
    function _0x46756e(_0x2de964) {}
    function _0x4614a0() {
        return 0x0;
    }
    function _0x44e5ed(_0x10b8be, _0x53eabb) {}
    function _0x2ab684(_0x4010ce, _0x5b063b) {
        return 0x0;
    }
    var _0x5d9bfe = [];
    function _0x234f2b(_0x4053b0, _0x201dc2) {
        _0x5d9bfe['length'] = 0x0;
        var _0x53312a;
        _0x201dc2 >>= 0x2;
        while (_0x53312a = _0x2ac27b[_0x4053b0++]) {
            var _0x362a66 = _0x53312a < 0x69;
            if (_0x362a66 && _0x201dc2 & 0x1)
                _0x201dc2++;
            _0x5d9bfe['push'](_0x362a66 ? _0x2a3d2d[_0x201dc2++ >> 0x1] : _0x593fb9[_0x201dc2]),
            ++_0x201dc2;
        }
        return _0x5d9bfe;
    }
    function _0x13dd68(_0x35e79b, _0x16fc92, _0x4b26c8, _0x45dcf0) {
        var _0xe0e4c8 = _0x234f2b(_0x16fc92, _0x4b26c8);
        return _0x5ad8c5[_0x35e79b]['apply'](null, _0xe0e4c8);
    }
    function _0x1dee1c(_0x22205f, _0x55829f, _0x4ddc97) {
        return _0x13dd68(_0x22205f, _0x55829f, _0x4ddc97, 0x1);
    }
    function _0x3bd6f3(_0x3c7f07, _0x38312f) {
        _0x391f70['mainLoop']['timingMode'] = _0x3c7f07,
        _0x391f70['mainLoop']['timingValue'] = _0x38312f;
        if (!_0x391f70['mainLoop']['func'])
            return 0x1;
        !_0x391f70['mainLoop']['running'] && (_0x391f70['mainLoop']['running'] = !![]);
        if (_0x3c7f07 == 0x0)
            _0x391f70['mainLoop']['scheduler'] = function _0x230d8a() {
                var _0x2f999 = Math['max'](0x0, _0x391f70['mainLoop']['tickStartTime'] + _0x38312f - _0x15c469()) | 0x0;
                setTimeout(_0x391f70['mainLoop']['runner'], _0x2f999);
            }
            ,
            _0x391f70['mainLoop']['method'] = 'timeout';
        else {
            if (_0x3c7f07 == 0x1)
                _0x391f70['mainLoop']['scheduler'] = function _0x585020() {
                    _0x391f70['requestAnimationFrame'](_0x391f70['mainLoop']['runner']);
                }
                ,
                _0x391f70['mainLoop']['method'] = 'rAF';
            else {
                if (_0x3c7f07 == 0x2) {
                    if (typeof setImmediate === 'undefined') {
                        var _0x1648c0 = []
                          , _0x284522 = 'setimmediate'
                          , _0x46d6bb = function(_0x356cec) {
                            (_0x356cec['data'] === _0x284522 || _0x356cec['data']['target'] === _0x284522) && (_0x356cec['stopPropagation'](),
                            _0x1648c0['shift']()());
                        };
                        addEventListener('message', _0x46d6bb, !![]),
                        setImmediate = function _0x17582b(_0xd263cd) {
                            _0x1648c0['push'](_0xd263cd);
                            if (_0x52d399) {
                                if (_0x1455c0['setImmediates'] === undefined)
                                    _0x1455c0['setImmediates'] = [];
                                _0x1455c0['setImmediates']['push'](_0xd263cd),
                                postMessage({
                                    'target': _0x284522
                                });
                            } else
                                postMessage(_0x284522, '*');
                        }
                        ;
                    }
                    _0x391f70['mainLoop']['scheduler'] = function _0x306576() {
                        setImmediate(_0x391f70['mainLoop']['runner']);
                    }
                    ,
                    _0x391f70['mainLoop']['method'] = 'immediate';
                }
            }
        }
        return 0x0;
    }
    function _0x5cc2ad(_0x32fae3) {
        _0x2e9b6d(_0x32fae3);
    }
    function _0x4731a0() {
        if (!_0x5c72a7())
            try {
                _0x5cc2ad(_0x56ac0b);
            } catch (_0x556517) {
                if (_0x556517 instanceof _0x560a8f)
                    return;
                throw _0x556517;
            }
    }
    function _0x3fee5b(_0x410c04, _0x4b21b0, _0x24c228, _0x342b92, _0x239991) {
        _0x51a343(!_0x391f70['mainLoop']['func'], 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.'),
        _0x391f70['mainLoop']['func'] = _0x410c04,
        _0x391f70['mainLoop']['arg'] = _0x342b92;
        var _0x564303 = _0x391f70['mainLoop']['currentlyRunningMainloop'];
        function _0x19a92d() {
            if (_0x564303 < _0x391f70['mainLoop']['currentlyRunningMainloop'])
                return _0x4731a0(),
                ![];
            return !![];
        }
        _0x391f70['mainLoop']['running'] = ![],
        _0x391f70['mainLoop']['runner'] = function _0x2d201f() {
            if (_0x2035c4)
                return;
            if (_0x391f70['mainLoop']['queue']['length'] > 0x0) {
                var _0x12694d = Date['now']()
                  , _0x4f076c = _0x391f70['mainLoop']['queue']['shift']();
                _0x4f076c['func'](_0x4f076c['arg']);
                if (_0x391f70['mainLoop']['remainingBlockers']) {
                    var _0x2267a5 = _0x391f70['mainLoop']['remainingBlockers']
                      , _0x5da1c0 = _0x2267a5 % 0x1 == 0x0 ? _0x2267a5 - 0x1 : Math['floor'](_0x2267a5);
                    _0x4f076c['counted'] ? _0x391f70['mainLoop']['remainingBlockers'] = _0x5da1c0 : (_0x5da1c0 = _0x5da1c0 + 0.5,
                    _0x391f70['mainLoop']['remainingBlockers'] = (0x8 * _0x2267a5 + _0x5da1c0) / 0x9);
                }
                console['log']('main loop blocker "' + _0x4f076c['name'] + '" took ' + (Date['now']() - _0x12694d) + ' ms'),
                _0x391f70['mainLoop']['updateStatus']();
                if (!_0x19a92d())
                    return;
                setTimeout(_0x391f70['mainLoop']['runner'], 0x0);
                return;
            }
            if (!_0x19a92d())
                return;
            _0x391f70['mainLoop']['currentFrameNumber'] = _0x391f70['mainLoop']['currentFrameNumber'] + 0x1 | 0x0;
            if (_0x391f70['mainLoop']['timingMode'] == 0x1 && _0x391f70['mainLoop']['timingValue'] > 0x1 && _0x391f70['mainLoop']['currentFrameNumber'] % _0x391f70['mainLoop']['timingValue'] != 0x0) {
                _0x391f70['mainLoop']['scheduler']();
                return;
            } else
                _0x391f70['mainLoop']['timingMode'] == 0x0 && (_0x391f70['mainLoop']['tickStartTime'] = _0x15c469());
            _0x353c88['newRenderingFrameStarted'](),
            _0x391f70['mainLoop']['runIter'](_0x410c04);
            if (!_0x19a92d())
                return;
            if (typeof SDL === 'object' && SDL['audio'] && SDL['audio']['queueNewAudioData'])
                SDL['audio']['queueNewAudioData']();
            _0x391f70['mainLoop']['scheduler']();
        }
        ;
        if (!_0x239991) {
            if (_0x4b21b0 && _0x4b21b0 > 0x0)
                _0x3bd6f3(0x0, 0x3e8 / _0x4b21b0);
            else
                _0x3bd6f3(0x1, 0x1);
            _0x391f70['mainLoop']['scheduler']();
        }
        if (_0x24c228)
            throw 'unwind';
    }
    function _0xbe3d48(_0x36d6cd, _0x185a28) {
        if (_0x2035c4)
            return;
        if (_0x185a28) {
            _0x36d6cd();
            return;
        }
        try {
            _0x36d6cd();
        } catch (_0x384de5) {
            if (_0x384de5 instanceof _0x560a8f)
                return;
            else {
                if (_0x384de5 !== 'unwind') {
                    if (_0x384de5 && typeof _0x384de5 === 'object' && _0x384de5['stack'])
                        _0x5a96d4('exception thrown: ' + [_0x384de5, _0x384de5['stack']]);
                    throw _0x384de5;
                }
            }
        }
    }
    var _0x391f70 = {
        'mainLoop': {
            'running': ![],
            'scheduler': null,
            'method': '',
            'currentlyRunningMainloop': 0x0,
            'func': null,
            'arg': 0x0,
            'timingMode': 0x0,
            'timingValue': 0x0,
            'currentFrameNumber': 0x0,
            'queue': [],
            'pause': function() {
                _0x391f70['mainLoop']['scheduler'] = null,
                _0x391f70['mainLoop']['currentlyRunningMainloop']++;
            },
            'resume': function() {
                _0x391f70['mainLoop']['currentlyRunningMainloop']++;
                var _0x4a3a70 = _0x391f70['mainLoop']['timingMode']
                  , _0x50ddd5 = _0x391f70['mainLoop']['timingValue']
                  , _0x25acd9 = _0x391f70['mainLoop']['func'];
                _0x391f70['mainLoop']['func'] = null,
                _0x3fee5b(_0x25acd9, 0x0, ![], _0x391f70['mainLoop']['arg'], !![]),
                _0x3bd6f3(_0x4a3a70, _0x50ddd5),
                _0x391f70['mainLoop']['scheduler']();
            },
            'updateStatus': function() {
                if (_0x1455c0['setStatus']) {
                    var _0x1a93db = _0x1455c0['statusMessage'] || 'Please wait...'
                      , _0x3cdf74 = _0x391f70['mainLoop']['remainingBlockers']
                      , _0x5c15fa = _0x391f70['mainLoop']['expectedBlockers'];
                    _0x3cdf74 ? _0x3cdf74 < _0x5c15fa ? _0x1455c0['setStatus'](_0x1a93db + ' (' + (_0x5c15fa - _0x3cdf74) + '/' + _0x5c15fa + ')') : _0x1455c0['setStatus'](_0x1a93db) : _0x1455c0['setStatus']('');
                }
            },
            'runIter': function(_0x45626a) {
                if (_0x2035c4)
                    return;
                if (_0x1455c0['preMainLoop']) {
                    var _0x421b69 = _0x1455c0['preMainLoop']();
                    if (_0x421b69 === ![])
                        return;
                }
                _0xbe3d48(_0x45626a);
                if (_0x1455c0['postMainLoop'])
                    _0x1455c0['postMainLoop']();
            }
        },
        'isFullscreen': ![],
        'pointerLock': ![],
        'moduleContextCreatedCallbacks': [],
        'workers': [],
        'init': function() {
            if (!_0x1455c0['preloadPlugins'])
                _0x1455c0['preloadPlugins'] = [];
            if (_0x391f70['initted'])
                return;
            _0x391f70['initted'] = !![];
            try {
                new Blob(),
                _0x391f70['hasBlobConstructor'] = !![];
            } catch (_0x429ee4) {
                _0x391f70['hasBlobConstructor'] = ![],
                console['log']('warning: no blob constructor, cannot create blobs with mimetypes');
            }
            _0x391f70['BlobBuilder'] = typeof MozBlobBuilder != 'undefined' ? MozBlobBuilder : typeof WebKitBlobBuilder != 'undefined' ? WebKitBlobBuilder : !_0x391f70['hasBlobConstructor'] ? console['log']('warning: no BlobBuilder') : null,
            _0x391f70['URLObject'] = typeof window != 'undefined' ? window['URL'] ? window['URL'] : window['webkitURL'] : undefined;
            !_0x1455c0['noImageDecoding'] && typeof _0x391f70['URLObject'] === 'undefined' && (console['log']('warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.'),
            _0x1455c0['noImageDecoding'] = !![]);
            var _0x4c58ec = {};
            _0x4c58ec['canHandle'] = function _0xc0537c(_0x3b258e) {
                return !_0x1455c0['noImageDecoding'] && /\.(jpg|jpeg|png|bmp)$/i['test'](_0x3b258e);
            }
            ,
            _0x4c58ec['handle'] = function _0x45fd77(_0xfe85d0, _0x2ce2ad, _0x4d638f, _0x3cf4bd) {
                var _0x256dc0 = null;
                if (_0x391f70['hasBlobConstructor'])
                    try {
                        _0x256dc0 = new Blob([_0xfe85d0],{
                            'type': _0x391f70['getMimetype'](_0x2ce2ad)
                        }),
                        _0x256dc0['size'] !== _0xfe85d0['length'] && (_0x256dc0 = new Blob([new Uint8Array(_0xfe85d0)['buffer']],{
                            'type': _0x391f70['getMimetype'](_0x2ce2ad)
                        }));
                    } catch (_0x369256) {
                        _0x41d093('Blob constructor present but fails: ' + _0x369256 + '; falling back to blob builder');
                    }
                if (!_0x256dc0) {
                    var _0x306b8b = new _0x391f70['BlobBuilder']();
                    _0x306b8b['append'](new Uint8Array(_0xfe85d0)['buffer']),
                    _0x256dc0 = _0x306b8b['getBlob']();
                }
                var _0x3bb537 = _0x391f70['URLObject']['createObjectURL'](_0x256dc0)
                  , _0x654d1 = new Image();
                _0x654d1['onload'] = function _0x3f13de() {
                    _0x51a343(_0x654d1['complete'], 'Image ' + _0x2ce2ad + ' could not be decoded');
                    var _0x307707 = document['createElement']('canvas');
                    _0x307707['width'] = _0x654d1['width'],
                    _0x307707['height'] = _0x654d1['height'];
                    var _0x16f890 = _0x307707['getContext']('2d');
                    _0x16f890['drawImage'](_0x654d1, 0x0, 0x0),
                    _0x1455c0['preloadedImages'][_0x2ce2ad] = _0x307707,
                    _0x391f70['URLObject']['revokeObjectURL'](_0x3bb537);
                    if (_0x4d638f)
                        _0x4d638f(_0xfe85d0);
                }
                ,
                _0x654d1['onerror'] = function _0x23324a(_0x279eca) {
                    console['log']('Image ' + _0x3bb537 + ' could not be decoded');
                    if (_0x3cf4bd)
                        _0x3cf4bd();
                }
                ,
                _0x654d1['src'] = _0x3bb537;
            }
            ,
            _0x1455c0['preloadPlugins']['push'](_0x4c58ec);
            var _0x2e34b9 = {};
            _0x2e34b9['canHandle'] = function _0x2a5fc(_0x1a7970) {
                return !_0x1455c0['noAudioDecoding'] && _0x1a7970['substr'](-0x4)in {
                    '.ogg': 0x1,
                    '.wav': 0x1,
                    '.mp3': 0x1
                };
            }
            ,
            _0x2e34b9['handle'] = function _0x401b95(_0xe0f7e4, _0x5a8ee1, _0x3b9fde, _0x367074) {
                var _0x14a272 = ![];
                function _0x1019e7(_0x5bf8a0) {
                    if (_0x14a272)
                        return;
                    _0x14a272 = !![],
                    _0x1455c0['preloadedAudios'][_0x5a8ee1] = _0x5bf8a0;
                    if (_0x3b9fde)
                        _0x3b9fde(_0xe0f7e4);
                }
                function _0x470abe() {
                    if (_0x14a272)
                        return;
                    _0x14a272 = !![],
                    _0x1455c0['preloadedAudios'][_0x5a8ee1] = new Audio();
                    if (_0x367074)
                        _0x367074();
                }
                if (_0x391f70['hasBlobConstructor']) {
                    try {
                        var _0x5d8750 = new Blob([_0xe0f7e4],{
                            'type': _0x391f70['getMimetype'](_0x5a8ee1)
                        });
                    } catch (_0x5709c4) {
                        return _0x470abe();
                    }
                    var _0x98c8d1 = _0x391f70['URLObject']['createObjectURL'](_0x5d8750)
                      , _0xb60dff = new Audio();
                    _0xb60dff['addEventListener']('canplaythrough', function() {
                        _0x1019e7(_0xb60dff);
                    }, ![]),
                    _0xb60dff['onerror'] = function _0x40763a(_0x570c80) {
                        if (_0x14a272)
                            return;
                        console['log']('warning: browser could not fully decode audio ' + _0x5a8ee1 + ', trying slower base64 approach');
                        function _0x2c9536(_0x1110f6) {
                            var _0x10dda8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
                              , _0x2e3550 = '='
                              , _0x3c89ad = ''
                              , _0x4cb969 = 0x0
                              , _0x5aad99 = 0x0;
                            for (var _0x303b53 = 0x0; _0x303b53 < _0x1110f6['length']; _0x303b53++) {
                                _0x4cb969 = _0x4cb969 << 0x8 | _0x1110f6[_0x303b53],
                                _0x5aad99 += 0x8;
                                while (_0x5aad99 >= 0x6) {
                                    var _0x13e413 = _0x4cb969 >> _0x5aad99 - 0x6 & 0x3f;
                                    _0x5aad99 -= 0x6,
                                    _0x3c89ad += _0x10dda8[_0x13e413];
                                }
                            }
                            if (_0x5aad99 == 0x2)
                                _0x3c89ad += _0x10dda8[(_0x4cb969 & 0x3) << 0x4],
                                _0x3c89ad += _0x2e3550 + _0x2e3550;
                            else
                                _0x5aad99 == 0x4 && (_0x3c89ad += _0x10dda8[(_0x4cb969 & 0xf) << 0x2],
                                _0x3c89ad += _0x2e3550);
                            return _0x3c89ad;
                        }
                        _0xb60dff['src'] = 'data:audio/x-' + _0x5a8ee1['substr'](-0x3) + ';base64,' + _0x2c9536(_0xe0f7e4),
                        _0x1019e7(_0xb60dff);
                    }
                    ,
                    _0xb60dff['src'] = _0x98c8d1,
                    _0x391f70['safeSetTimeout'](function() {
                        _0x1019e7(_0xb60dff);
                    }, 0x2710);
                } else
                    return _0x470abe();
            }
            ,
            _0x1455c0['preloadPlugins']['push'](_0x2e34b9);
            function _0x3b996b() {
                _0x391f70['pointerLock'] = document['pointerLockElement'] === _0x1455c0['canvas'] || document['mozPointerLockElement'] === _0x1455c0['canvas'] || document['webkitPointerLockElement'] === _0x1455c0['canvas'] || document['msPointerLockElement'] === _0x1455c0['canvas'];
            }
            var _0xafab35 = _0x1455c0['canvas'];
            _0xafab35 && (_0xafab35['requestPointerLock'] = _0xafab35['requestPointerLock'] || _0xafab35['mozRequestPointerLock'] || _0xafab35['webkitRequestPointerLock'] || _0xafab35['msRequestPointerLock'] || function() {}
            ,
            _0xafab35['exitPointerLock'] = document['exitPointerLock'] || document['mozExitPointerLock'] || document['webkitExitPointerLock'] || document['msExitPointerLock'] || function() {}
            ,
            _0xafab35['exitPointerLock'] = _0xafab35['exitPointerLock']['bind'](document),
            document['addEventListener']('pointerlockchange', _0x3b996b, ![]),
            document['addEventListener']('mozpointerlockchange', _0x3b996b, ![]),
            document['addEventListener']('webkitpointerlockchange', _0x3b996b, ![]),
            document['addEventListener']('mspointerlockchange', _0x3b996b, ![]),
            _0x1455c0['elementPointerLock'] && _0xafab35['addEventListener']('click', function(_0x30d405) {
                !_0x391f70['pointerLock'] && _0x1455c0['canvas']['requestPointerLock'] && (_0x1455c0['canvas']['requestPointerLock'](),
                _0x30d405['preventDefault']());
            }, ![]));
        },
        'createContext': function(_0x101f30, _0x17fc85, _0x2103b8, _0x2dcbb8) {
            if (_0x17fc85 && _0x1455c0['ctx'] && _0x101f30 == _0x1455c0['canvas'])
                return _0x1455c0['ctx'];
            var _0x33ff0e, _0x49e4e4;
            if (_0x17fc85) {
                var _0x30c8e1 = {
                    'antialias': ![],
                    'alpha': ![],
                    'majorVersion': typeof WebGL2RenderingContext !== 'undefined' ? 0x2 : 0x1
                };
                if (_0x2dcbb8)
                    for (var _0x4b7ca1 in _0x2dcbb8) {
                        _0x30c8e1[_0x4b7ca1] = _0x2dcbb8[_0x4b7ca1];
                    }
                typeof _0x353c88 !== 'undefined' && (_0x49e4e4 = _0x353c88['createContext'](_0x101f30, _0x30c8e1),
                _0x49e4e4 && (_0x33ff0e = _0x353c88['getContext'](_0x49e4e4)['GLctx']));
            } else
                _0x33ff0e = _0x101f30['getContext']('2d');
            if (!_0x33ff0e)
                return null;
            if (_0x2103b8) {
                if (!_0x17fc85)
                    _0x51a343(typeof _0x264078 === 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
                _0x1455c0['ctx'] = _0x33ff0e;
                if (_0x17fc85)
                    _0x353c88['makeContextCurrent'](_0x49e4e4);
                _0x1455c0['useWebGL'] = _0x17fc85,
                _0x391f70['moduleContextCreatedCallbacks']['forEach'](function(_0x3e6edc) {
                    _0x3e6edc();
                }),
                _0x391f70['init']();
            }
            return _0x33ff0e;
        },
        'destroyContext': function(_0x271f94, _0x5932f2, _0x5c9f82) {},
        'fullscreenHandlersInstalled': ![],
        'lockPointer': undefined,
        'resizeCanvas': undefined,
        'requestFullscreen': function(_0x3ef6ea, _0x17d26b) {
            _0x391f70['lockPointer'] = _0x3ef6ea,
            _0x391f70['resizeCanvas'] = _0x17d26b;
            if (typeof _0x391f70['lockPointer'] === 'undefined')
                _0x391f70['lockPointer'] = !![];
            if (typeof _0x391f70['resizeCanvas'] === 'undefined')
                _0x391f70['resizeCanvas'] = ![];
            var _0x347b36 = _0x1455c0['canvas'];
            function _0x399347() {
                _0x391f70['isFullscreen'] = ![];
                var _0x2d672c = _0x347b36['parentNode'];
                if ((document['fullscreenElement'] || document['mozFullScreenElement'] || document['msFullscreenElement'] || document['webkitFullscreenElement'] || document['webkitCurrentFullScreenElement']) === _0x2d672c) {
                    _0x347b36['exitFullscreen'] = _0x391f70['exitFullscreen'];
                    if (_0x391f70['lockPointer'])
                        _0x347b36['requestPointerLock']();
                    _0x391f70['isFullscreen'] = !![],
                    _0x391f70['resizeCanvas'] ? _0x391f70['setFullscreenCanvasSize']() : _0x391f70['updateCanvasDimensions'](_0x347b36);
                } else
                    _0x2d672c['parentNode']['insertBefore'](_0x347b36, _0x2d672c),
                    _0x2d672c['parentNode']['removeChild'](_0x2d672c),
                    _0x391f70['resizeCanvas'] ? _0x391f70['setWindowedCanvasSize']() : _0x391f70['updateCanvasDimensions'](_0x347b36);
                if (_0x1455c0['onFullScreen'])
                    _0x1455c0['onFullScreen'](_0x391f70['isFullscreen']);
                if (_0x1455c0['onFullscreen'])
                    _0x1455c0['onFullscreen'](_0x391f70['isFullscreen']);
            }
            !_0x391f70['fullscreenHandlersInstalled'] && (_0x391f70['fullscreenHandlersInstalled'] = !![],
            document['addEventListener']('fullscreenchange', _0x399347, ![]),
            document['addEventListener']('mozfullscreenchange', _0x399347, ![]),
            document['addEventListener']('webkitfullscreenchange', _0x399347, ![]),
            document['addEventListener']('MSFullscreenChange', _0x399347, ![]));
            var _0x5f38f3 = document['createElement']('div');
            _0x347b36['parentNode']['insertBefore'](_0x5f38f3, _0x347b36),
            _0x5f38f3['appendChild'](_0x347b36),
            _0x5f38f3['requestFullscreen'] = _0x5f38f3['requestFullscreen'] || _0x5f38f3['mozRequestFullScreen'] || _0x5f38f3['msRequestFullscreen'] || (_0x5f38f3['webkitRequestFullscreen'] ? function() {
                _0x5f38f3['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
            }
            : null) || (_0x5f38f3['webkitRequestFullScreen'] ? function() {
                _0x5f38f3['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']);
            }
            : null),
            _0x5f38f3['requestFullscreen']();
        },
        'exitFullscreen': function() {
            if (!_0x391f70['isFullscreen'])
                return ![];
            var _0x3d7b64 = document['exitFullscreen'] || document['cancelFullScreen'] || document['mozCancelFullScreen'] || document['msExitFullscreen'] || document['webkitCancelFullScreen'] || function() {}
            ;
            return _0x3d7b64['apply'](document, []),
            !![];
        },
        'nextRAF': 0x0,
        'fakeRequestAnimationFrame': function(_0x49bcfc) {
            var _0x11f243 = Date['now']();
            if (_0x391f70['nextRAF'] === 0x0)
                _0x391f70['nextRAF'] = _0x11f243 + 0x3e8 / 0x3c;
            else
                while (_0x11f243 + 0x2 >= _0x391f70['nextRAF']) {
                    _0x391f70['nextRAF'] += 0x3e8 / 0x3c;
                }
            var _0x2c37f9 = Math['max'](_0x391f70['nextRAF'] - _0x11f243, 0x0);
            setTimeout(_0x49bcfc, _0x2c37f9);
        },
        'requestAnimationFrame': function(_0x16931d) {
            if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(_0x16931d);
                return;
            }
            var _0x40d985 = _0x391f70['fakeRequestAnimationFrame'];
            _0x40d985(_0x16931d);
        },
        'safeRequestAnimationFrame': function(_0x507687) {
            return _0x391f70['requestAnimationFrame'](function() {
                _0xbe3d48(_0x507687);
            });
        },
        'safeSetTimeout': function(_0x652ffb, _0x215ad1) {
            return setTimeout(function() {
                _0xbe3d48(_0x652ffb);
            }, _0x215ad1);
        },
        'getMimetype': function(_0x29ecaa) {
            return {
                'jpg': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'png': 'image/png',
                'bmp': 'image/bmp',
                'ogg': 'audio/ogg',
                'wav': 'audio/wav',
                'mp3': 'audio/mpeg'
            }[_0x29ecaa['substr'](_0x29ecaa['lastIndexOf']('.') + 0x1)];
        },
        'getUserMedia': function(_0x167745) {
            !window['getUserMedia'] && (window['getUserMedia'] = navigator['getUserMedia'] || navigator['mozGetUserMedia']),
            window['getUserMedia'](_0x167745);
        },
        'getMovementX': function(_0x2b00c4) {
            return _0x2b00c4['movementX'] || _0x2b00c4['mozMovementX'] || _0x2b00c4['webkitMovementX'] || 0x0;
        },
        'getMovementY': function(_0x1cac8f) {
            return _0x1cac8f['movementY'] || _0x1cac8f['mozMovementY'] || _0x1cac8f['webkitMovementY'] || 0x0;
        },
        'getMouseWheelDelta': function(_0x1c8160) {
            var _0x3de8e3 = 0x0;
            switch (_0x1c8160['type']) {
            case 'DOMMouseScroll':
                _0x3de8e3 = _0x1c8160['detail'] / 0x3;
                break;
            case 'mousewheel':
                _0x3de8e3 = _0x1c8160['wheelDelta'] / 0x78;
                break;
            case 'wheel':
                _0x3de8e3 = _0x1c8160['deltaY'];
                switch (_0x1c8160['deltaMode']) {
                case 0x0:
                    _0x3de8e3 /= 0x64;
                    break;
                case 0x1:
                    _0x3de8e3 /= 0x3;
                    break;
                case 0x2:
                    _0x3de8e3 *= 0x50;
                    break;
                default:
                    throw 'unrecognized mouse wheel delta mode: ' + _0x1c8160['deltaMode'];
                }
                break;
            default:
                throw 'unrecognized mouse wheel event: ' + _0x1c8160['type'];
            }
            return _0x3de8e3;
        },
        'mouseX': 0x0,
        'mouseY': 0x0,
        'mouseMovementX': 0x0,
        'mouseMovementY': 0x0,
        'touches': {},
        'lastTouches': {},
        'calculateMouseEvent': function(_0x11a5b0) {
            if (_0x391f70['pointerLock'])
                _0x11a5b0['type'] != 'mousemove' && 'mozMovementX'in _0x11a5b0 ? _0x391f70['mouseMovementX'] = _0x391f70['mouseMovementY'] = 0x0 : (_0x391f70['mouseMovementX'] = _0x391f70['getMovementX'](_0x11a5b0),
                _0x391f70['mouseMovementY'] = _0x391f70['getMovementY'](_0x11a5b0)),
                typeof SDL != 'undefined' ? (_0x391f70['mouseX'] = SDL['mouseX'] + _0x391f70['mouseMovementX'],
                _0x391f70['mouseY'] = SDL['mouseY'] + _0x391f70['mouseMovementY']) : (_0x391f70['mouseX'] += _0x391f70['mouseMovementX'],
                _0x391f70['mouseY'] += _0x391f70['mouseMovementY']);
            else {
                var _0x52bf12 = _0x1455c0['canvas']['getBoundingClientRect']()
                  , _0x261ab0 = _0x1455c0['canvas']['width']
                  , _0x3019d4 = _0x1455c0['canvas']['height']
                  , _0x407cad = typeof window['scrollX'] !== 'undefined' ? window['scrollX'] : window['pageXOffset']
                  , _0x5a2cb9 = typeof window['scrollY'] !== 'undefined' ? window['scrollY'] : window['pageYOffset'];
                if (_0x11a5b0['type'] === 'touchstart' || _0x11a5b0['type'] === 'touchend' || _0x11a5b0['type'] === 'touchmove') {
                    var _0x45dc68 = _0x11a5b0['touch'];
                    if (_0x45dc68 === undefined)
                        return;
                    var _0x1db4d2 = _0x45dc68['pageX'] - (_0x407cad + _0x52bf12['left'])
                      , _0x4eaf05 = _0x45dc68['pageY'] - (_0x5a2cb9 + _0x52bf12['top']);
                    _0x1db4d2 = _0x1db4d2 * (_0x261ab0 / _0x52bf12['width']),
                    _0x4eaf05 = _0x4eaf05 * (_0x3019d4 / _0x52bf12['height']);
                    var _0x21f08f = {
                        'x': _0x1db4d2,
                        'y': _0x4eaf05
                    };
                    if (_0x11a5b0['type'] === 'touchstart')
                        _0x391f70['lastTouches'][_0x45dc68['identifier']] = _0x21f08f,
                        _0x391f70['touches'][_0x45dc68['identifier']] = _0x21f08f;
                    else {
                        if (_0x11a5b0['type'] === 'touchend' || _0x11a5b0['type'] === 'touchmove') {
                            var _0x300e10 = _0x391f70['touches'][_0x45dc68['identifier']];
                            if (!_0x300e10)
                                _0x300e10 = _0x21f08f;
                            _0x391f70['lastTouches'][_0x45dc68['identifier']] = _0x300e10,
                            _0x391f70['touches'][_0x45dc68['identifier']] = _0x21f08f;
                        }
                    }
                    return;
                }
                var _0x5bbbb9 = _0x11a5b0['pageX'] - (_0x407cad + _0x52bf12['left'])
                  , _0x586b3c = _0x11a5b0['pageY'] - (_0x5a2cb9 + _0x52bf12['top']);
                _0x5bbbb9 = _0x5bbbb9 * (_0x261ab0 / _0x52bf12['width']),
                _0x586b3c = _0x586b3c * (_0x3019d4 / _0x52bf12['height']),
                _0x391f70['mouseMovementX'] = _0x5bbbb9 - _0x391f70['mouseX'],
                _0x391f70['mouseMovementY'] = _0x586b3c - _0x391f70['mouseY'],
                _0x391f70['mouseX'] = _0x5bbbb9,
                _0x391f70['mouseY'] = _0x586b3c;
            }
        },
        'asyncLoad': function(_0x7cd3a7, _0x48f2de, _0x48064a, _0x2db77e) {
            var _0xafacb1 = !_0x2db77e ? _0x2b1035('al ' + _0x7cd3a7) : '';
            _0x254226(_0x7cd3a7, function(_0x3373bd) {
                _0x51a343(_0x3373bd, 'Loading data file "' + _0x7cd3a7 + '" failed (no arrayBuffer).'),
                _0x48f2de(new Uint8Array(_0x3373bd));
                if (_0xafacb1)
                    _0x420721(_0xafacb1);
            }, function(_0x1e2b8f) {
                if (_0x48064a)
                    _0x48064a();
                else
                    throw 'Loading data file "' + _0x7cd3a7 + '" failed.';
            });
            if (_0xafacb1)
                _0x403b09(_0xafacb1);
        },
        'resizeListeners': [],
        'updateResizeListeners': function() {
            var _0x2d9387 = _0x1455c0['canvas'];
            _0x391f70['resizeListeners']['forEach'](function(_0x28472e) {
                _0x28472e(_0x2d9387['width'], _0x2d9387['height']);
            });
        },
        'setCanvasSize': function(_0x380ea2, _0x148bbc, _0x391968) {
            var _0x5e69ac = _0x1455c0['canvas'];
            _0x391f70['updateCanvasDimensions'](_0x5e69ac, _0x380ea2, _0x148bbc);
            if (!_0x391968)
                _0x391f70['updateResizeListeners']();
        },
        'windowedWidth': 0x0,
        'windowedHeight': 0x0,
        'setFullscreenCanvasSize': function() {
            if (typeof SDL != 'undefined') {
                var _0x528d14 = _0x311b71[SDL['screen'] >> 0x2];
                _0x528d14 = _0x528d14 | 0x800000,
                _0x593fb9[SDL['screen'] >> 0x2] = _0x528d14;
            }
            _0x391f70['updateCanvasDimensions'](_0x1455c0['canvas']),
            _0x391f70['updateResizeListeners']();
        },
        'setWindowedCanvasSize': function() {
            if (typeof SDL != 'undefined') {
                var _0x527671 = _0x311b71[SDL['screen'] >> 0x2];
                _0x527671 = _0x527671 & ~0x800000,
                _0x593fb9[SDL['screen'] >> 0x2] = _0x527671;
            }
            _0x391f70['updateCanvasDimensions'](_0x1455c0['canvas']),
            _0x391f70['updateResizeListeners']();
        },
        'updateCanvasDimensions': function(_0x37441d, _0x39f0a4, _0x2fdf32) {
            _0x39f0a4 && _0x2fdf32 ? (_0x37441d['widthNative'] = _0x39f0a4,
            _0x37441d['heightNative'] = _0x2fdf32) : (_0x39f0a4 = _0x37441d['widthNative'],
            _0x2fdf32 = _0x37441d['heightNative']);
            var _0x2a2c0b = _0x39f0a4
              , _0x58e81a = _0x2fdf32;
            _0x1455c0['forcedAspectRatio'] && _0x1455c0['forcedAspectRatio'] > 0x0 && (_0x2a2c0b / _0x58e81a < _0x1455c0['forcedAspectRatio'] ? _0x2a2c0b = Math['round'](_0x58e81a * _0x1455c0['forcedAspectRatio']) : _0x58e81a = Math['round'](_0x2a2c0b / _0x1455c0['forcedAspectRatio']));
            if ((document['fullscreenElement'] || document['mozFullScreenElement'] || document['msFullscreenElement'] || document['webkitFullscreenElement'] || document['webkitCurrentFullScreenElement']) === _0x37441d['parentNode'] && typeof screen != 'undefined') {
                var _0x17d25b = Math['min'](screen['width'] / _0x2a2c0b, screen['height'] / _0x58e81a);
                _0x2a2c0b = Math['round'](_0x2a2c0b * _0x17d25b),
                _0x58e81a = Math['round'](_0x58e81a * _0x17d25b);
            }
            if (_0x391f70['resizeCanvas']) {
                if (_0x37441d['width'] != _0x2a2c0b)
                    _0x37441d['width'] = _0x2a2c0b;
                if (_0x37441d['height'] != _0x58e81a)
                    _0x37441d['height'] = _0x58e81a;
                typeof _0x37441d['style'] != 'undefined' && (_0x37441d['style']['removeProperty']('width'),
                _0x37441d['style']['removeProperty']('height'));
            } else {
                if (_0x37441d['width'] != _0x39f0a4)
                    _0x37441d['width'] = _0x39f0a4;
                if (_0x37441d['height'] != _0x2fdf32)
                    _0x37441d['height'] = _0x2fdf32;
                typeof _0x37441d['style'] != 'undefined' && (_0x2a2c0b != _0x39f0a4 || _0x58e81a != _0x2fdf32 ? (_0x37441d['style']['setProperty']('width', _0x2a2c0b + 'px', 'important'),
                _0x37441d['style']['setProperty']('height', _0x58e81a + 'px', 'important')) : (_0x37441d['style']['removeProperty']('width'),
                _0x37441d['style']['removeProperty']('height')));
            }
        },
        'wgetRequests': {},
        'nextWgetRequestHandle': 0x0,
        'getNextWgetRequestHandle': function() {
            var _0x42fddb = _0x391f70['nextWgetRequestHandle'];
            return _0x391f70['nextWgetRequestHandle']++,
            _0x42fddb;
        }
    };
    function _0x5edc4d() {
        _0x391f70['mainLoop']['pause'](),
        _0x391f70['mainLoop']['func'] = null;
    }
    function _0x11bf09(_0x2f1348) {
        clearInterval(_0x2f1348);
    }
    var _0x5bb742 = {
        'inEventHandler': 0x0,
        'removeAllEventListeners': function() {
            for (var _0x16bf64 = _0x5bb742['eventHandlers']['length'] - 0x1; _0x16bf64 >= 0x0; --_0x16bf64) {
                _0x5bb742['_removeHandler'](_0x16bf64);
            }
            _0x5bb742['eventHandlers'] = [],
            _0x5bb742['deferredCalls'] = [];
        },
        'registerRemoveEventListeners': function() {
            !_0x5bb742['removeEventListenersRegistered'] && (_0x1a10f4['push'](_0x5bb742['removeAllEventListeners']),
            _0x5bb742['removeEventListenersRegistered'] = !![]);
        },
        'deferredCalls': [],
        'deferCall': function(_0x124d39, _0xdd8234, _0x4bb787) {
            function _0x101803(_0x8d7310, _0x4bb9ef) {
                if (_0x8d7310['length'] != _0x4bb9ef['length'])
                    return ![];
                for (var _0x14baac in _0x8d7310) {
                    if (_0x8d7310[_0x14baac] != _0x4bb9ef[_0x14baac])
                        return ![];
                }
                return !![];
            }
            for (var _0x3ad4ae in _0x5bb742['deferredCalls']) {
                var _0xb5a6ae = _0x5bb742['deferredCalls'][_0x3ad4ae];
                if (_0xb5a6ae['targetFunction'] == _0x124d39 && _0x101803(_0xb5a6ae['argsList'], _0x4bb787))
                    return;
            }
            _0x5bb742['deferredCalls']['push']({
                'targetFunction': _0x124d39,
                'precedence': _0xdd8234,
                'argsList': _0x4bb787
            }),
            _0x5bb742['deferredCalls']['sort'](function(_0x26c473, _0x389e3a) {
                return _0x26c473['precedence'] < _0x389e3a['precedence'];
            });
        },
        'removeDeferredCalls': function(_0x1cd8e6) {
            for (var _0x313893 = 0x0; _0x313893 < _0x5bb742['deferredCalls']['length']; ++_0x313893) {
                _0x5bb742['deferredCalls'][_0x313893]['targetFunction'] == _0x1cd8e6 && (_0x5bb742['deferredCalls']['splice'](_0x313893, 0x1),
                --_0x313893);
            }
        },
        'canPerformEventHandlerRequests': function() {
            return _0x5bb742['inEventHandler'] && _0x5bb742['currentEventHandler']['allowsDeferredCalls'];
        },
        'runDeferredCalls': function() {
            if (!_0x5bb742['canPerformEventHandlerRequests']())
                return;
            for (var _0x4fb5a1 = 0x0; _0x4fb5a1 < _0x5bb742['deferredCalls']['length']; ++_0x4fb5a1) {
                var _0x1d99d = _0x5bb742['deferredCalls'][_0x4fb5a1];
                _0x5bb742['deferredCalls']['splice'](_0x4fb5a1, 0x1),
                --_0x4fb5a1,
                _0x1d99d['targetFunction']['apply'](null, _0x1d99d['argsList']);
            }
        },
        'eventHandlers': [],
        'removeAllHandlersOnTarget': function(_0x9cee74, _0x35d585) {
            for (var _0x5aa201 = 0x0; _0x5aa201 < _0x5bb742['eventHandlers']['length']; ++_0x5aa201) {
                _0x5bb742['eventHandlers'][_0x5aa201]['target'] == _0x9cee74 && (!_0x35d585 || _0x35d585 == _0x5bb742['eventHandlers'][_0x5aa201]['eventTypeString']) && _0x5bb742['_removeHandler'](_0x5aa201--);
            }
        },
        '_removeHandler': function(_0x57bbd7) {
            var _0x3b8ab5 = _0x5bb742['eventHandlers'][_0x57bbd7];
            _0x3b8ab5['target']['removeEventListener'](_0x3b8ab5['eventTypeString'], _0x3b8ab5['eventListenerFunc'], _0x3b8ab5['useCapture']),
            _0x5bb742['eventHandlers']['splice'](_0x57bbd7, 0x1);
        },
        'registerOrRemoveHandler': function(_0x4042c9) {
            var _0x24e94e = function _0x3c280a(_0x28ddfe) {
                ++_0x5bb742['inEventHandler'],
                _0x5bb742['currentEventHandler'] = _0x4042c9,
                _0x5bb742['runDeferredCalls'](),
                _0x4042c9['handlerFunc'](_0x28ddfe),
                _0x5bb742['runDeferredCalls'](),
                --_0x5bb742['inEventHandler'];
            };
            if (_0x4042c9['callbackfunc'])
                _0x4042c9['eventListenerFunc'] = _0x24e94e,
                _0x4042c9['target']['addEventListener'](_0x4042c9['eventTypeString'], _0x24e94e, _0x4042c9['useCapture']),
                _0x5bb742['eventHandlers']['push'](_0x4042c9),
                _0x5bb742['registerRemoveEventListeners']();
            else
                for (var _0x25433c = 0x0; _0x25433c < _0x5bb742['eventHandlers']['length']; ++_0x25433c) {
                    _0x5bb742['eventHandlers'][_0x25433c]['target'] == _0x4042c9['target'] && _0x5bb742['eventHandlers'][_0x25433c]['eventTypeString'] == _0x4042c9['eventTypeString'] && _0x5bb742['_removeHandler'](_0x25433c--);
                }
        },
        'getNodeNameForTarget': function(_0x41e0a8) {
            if (!_0x41e0a8)
                return '';
            if (_0x41e0a8 == window)
                return '#window';
            if (_0x41e0a8 == screen)
                return '#screen';
            return _0x41e0a8 && _0x41e0a8['nodeName'] ? _0x41e0a8['nodeName'] : '';
        },
        'fullscreenEnabled': function() {
            return document['fullscreenEnabled'] || document['webkitFullscreenEnabled'];
        }
    }
      , _0x17dcda = {};
    function _0x45e9f3(_0x5ae2a1) {
        return _0x5ae2a1 > 0x2 ? _0x46211(_0x5ae2a1) : _0x5ae2a1;
    }
    var _0x2b5048 = [0x0, typeof document !== 'undefined' ? document : 0x0, typeof window !== 'undefined' ? window : 0x0];
    function _0x3c63b2(_0x5966ea) {
        _0x5966ea = _0x45e9f3(_0x5966ea);
        var _0x3088c3 = _0x2b5048[_0x5966ea] || (typeof document !== 'undefined' ? document['querySelector'](_0x5966ea) : undefined);
        return _0x3088c3;
    }
    function _0x5454c2(_0x2de991) {
        return _0x3c63b2(_0x2de991);
    }
    function _0x437697(_0x6c815, _0x32bdb4, _0x26bbe7) {
        var _0x12a81f = _0x5454c2(_0x6c815);
        if (!_0x12a81f)
            return -0x4;
        _0x593fb9[_0x32bdb4 >> 0x2] = _0x12a81f['width'],
        _0x593fb9[_0x26bbe7 >> 0x2] = _0x12a81f['height'];
    }
    function _0x48fe8e(_0x23db90) {
        var _0xc1c3b5 = _0x9ae453()
          , _0x1c6ed7 = _0x2887c9(0x8)
          , _0x42825f = _0x1c6ed7 + 0x4
          , _0x369e67 = _0x2887c9(_0x23db90['id']['length'] + 0x1);
        _0x430ff7(_0x23db90['id'], _0x369e67, _0x23db90['id']['length'] + 0x1);
        var _0x3c4ea3 = _0x437697(_0x369e67, _0x1c6ed7, _0x42825f)
          , _0x36f906 = [_0x593fb9[_0x1c6ed7 >> 0x2], _0x593fb9[_0x42825f >> 0x2]];
        return _0x305fb7(_0xc1c3b5),
        _0x36f906;
    }
    function _0x27f083(_0x11a2f9, _0x2e319f, _0x59ca3e) {
        var _0x31116f = _0x5454c2(_0x11a2f9);
        if (!_0x31116f)
            return -0x4;
        return _0x31116f['width'] = _0x2e319f,
        _0x31116f['height'] = _0x59ca3e,
        0x0;
    }
    function _0xa1f99d(_0x333185, _0x126bff, _0x152017) {
        if (!_0x333185['controlTransferredOffscreen'])
            _0x333185['width'] = _0x126bff,
            _0x333185['height'] = _0x152017;
        else {
            var _0x2eef2d = _0x9ae453()
              , _0x70bb6d = _0x2887c9(_0x333185['id']['length'] + 0x1);
            _0x430ff7(_0x333185['id'], _0x70bb6d, _0x333185['id']['length'] + 0x1),
            _0x27f083(_0x70bb6d, _0x126bff, _0x152017),
            _0x305fb7(_0x2eef2d);
        }
    }
    function _0x20d954(_0x499605) {
        var _0x4369dc = _0x48fe8e(_0x499605)
          , _0x2f8cf0 = _0x4369dc[0x0]
          , _0x192d6e = _0x4369dc[0x1]
          , _0xf92777 = _0x499605['style']['width']
          , _0x47690e = _0x499605['style']['height']
          , _0x4c8be3 = _0x499605['style']['backgroundColor']
          , _0x1567a2 = document['body']['style']['backgroundColor']
          , _0x32cebe = _0x499605['style']['paddingLeft']
          , _0x33268f = _0x499605['style']['paddingRight']
          , _0x165bb7 = _0x499605['style']['paddingTop']
          , _0x1aefe1 = _0x499605['style']['paddingBottom']
          , _0x2a4475 = _0x499605['style']['marginLeft']
          , _0x41ee76 = _0x499605['style']['marginRight']
          , _0x3720cb = _0x499605['style']['marginTop']
          , _0x33feee = _0x499605['style']['marginBottom']
          , _0x49cf2b = document['body']['style']['margin']
          , _0x1e96ca = document['documentElement']['style']['overflow']
          , _0x23e116 = document['body']['scroll']
          , _0x2f68ab = _0x499605['style']['imageRendering'];
        function _0x158097() {
            var _0x2cb48b = document['fullscreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement'];
            if (!_0x2cb48b) {
                document['removeEventListener']('fullscreenchange', _0x158097),
                document['removeEventListener']('webkitfullscreenchange', _0x158097),
                _0xa1f99d(_0x499605, _0x2f8cf0, _0x192d6e),
                _0x499605['style']['width'] = _0xf92777,
                _0x499605['style']['height'] = _0x47690e,
                _0x499605['style']['backgroundColor'] = _0x4c8be3;
                if (!_0x1567a2)
                    document['body']['style']['backgroundColor'] = 'white';
                document['body']['style']['backgroundColor'] = _0x1567a2,
                _0x499605['style']['paddingLeft'] = _0x32cebe,
                _0x499605['style']['paddingRight'] = _0x33268f,
                _0x499605['style']['paddingTop'] = _0x165bb7,
                _0x499605['style']['paddingBottom'] = _0x1aefe1,
                _0x499605['style']['marginLeft'] = _0x2a4475,
                _0x499605['style']['marginRight'] = _0x41ee76,
                _0x499605['style']['marginTop'] = _0x3720cb,
                _0x499605['style']['marginBottom'] = _0x33feee,
                document['body']['style']['margin'] = _0x49cf2b,
                document['documentElement']['style']['overflow'] = _0x1e96ca,
                document['body']['scroll'] = _0x23e116,
                _0x499605['style']['imageRendering'] = _0x2f68ab;
                if (_0x499605['GLctxObject'])
                    _0x499605['GLctxObject']['GLctx']['viewport'](0x0, 0x0, _0x2f8cf0, _0x192d6e);
                _0x17dcda['canvasResizedCallback'] && function(_0x47f383, _0x510d81, _0x8be268) {
                    return _0x4f2e95['apply'](null, [_0x17dcda['canvasResizedCallback'], _0x47f383, _0x510d81, _0x8be268]);
                }(0x25, 0x0, _0x17dcda['canvasResizedCallbackUserData']);
            }
        }
        return document['addEventListener']('fullscreenchange', _0x158097),
        document['addEventListener']('webkitfullscreenchange', _0x158097),
        _0x158097;
    }
    function _0x514f83(_0x2ead15, _0xf64b9d, _0x45768f) {
        _0x2ead15['style']['paddingLeft'] = _0x2ead15['style']['paddingRight'] = _0x45768f + 'px',
        _0x2ead15['style']['paddingTop'] = _0x2ead15['style']['paddingBottom'] = _0xf64b9d + 'px';
    }
    function _0x52b8c0(_0x44fe32) {
        return _0x2b5048['indexOf'](_0x44fe32) < 0x0 ? _0x44fe32['getBoundingClientRect']() : {
            'left': 0x0,
            'top': 0x0
        };
    }
    function _0x38f5d0(_0x49a225, _0x3b25be) {
        var _0x2ac046 = _0x20d954(_0x49a225)
          , _0x567fab = _0x3b25be['softFullscreen'] ? innerWidth : screen['width']
          , _0x48f5cc = _0x3b25be['softFullscreen'] ? innerHeight : screen['height']
          , _0x59f3df = _0x52b8c0(_0x49a225)
          , _0x5421fd = _0x59f3df['width']
          , _0x3cbcf1 = _0x59f3df['height']
          , _0xab52c9 = _0x48fe8e(_0x49a225)
          , _0x1f0773 = _0xab52c9[0x0]
          , _0x546181 = _0xab52c9[0x1];
        if (_0x3b25be['scaleMode'] == 0x3)
            _0x514f83(_0x49a225, (_0x48f5cc - _0x3cbcf1) / 0x2, (_0x567fab - _0x5421fd) / 0x2),
            _0x567fab = _0x5421fd,
            _0x48f5cc = _0x3cbcf1;
        else {
            if (_0x3b25be['scaleMode'] == 0x2) {
                if (_0x567fab * _0x546181 < _0x1f0773 * _0x48f5cc) {
                    var _0x44056b = _0x546181 * _0x567fab / _0x1f0773;
                    _0x514f83(_0x49a225, (_0x48f5cc - _0x44056b) / 0x2, 0x0),
                    _0x48f5cc = _0x44056b;
                } else {
                    var _0x56f224 = _0x1f0773 * _0x48f5cc / _0x546181;
                    _0x514f83(_0x49a225, 0x0, (_0x567fab - _0x56f224) / 0x2),
                    _0x567fab = _0x56f224;
                }
            }
        }
        if (!_0x49a225['style']['backgroundColor'])
            _0x49a225['style']['backgroundColor'] = 'black';
        if (!document['body']['style']['backgroundColor'])
            document['body']['style']['backgroundColor'] = 'black';
        _0x49a225['style']['width'] = _0x567fab + 'px',
        _0x49a225['style']['height'] = _0x48f5cc + 'px';
        _0x3b25be['filteringMode'] == 0x1 && (_0x49a225['style']['imageRendering'] = 'optimizeSpeed',
        _0x49a225['style']['imageRendering'] = '-moz-crisp-edges',
        _0x49a225['style']['imageRendering'] = '-o-crisp-edges',
        _0x49a225['style']['imageRendering'] = '-webkit-optimize-contrast',
        _0x49a225['style']['imageRendering'] = 'optimize-contrast',
        _0x49a225['style']['imageRendering'] = 'crisp-edges',
        _0x49a225['style']['imageRendering'] = 'pixelated');
        var _0x39499b = _0x3b25be['canvasResolutionScaleMode'] == 0x2 ? devicePixelRatio : 0x1;
        if (_0x3b25be['canvasResolutionScaleMode'] != 0x0) {
            var _0x124d3e = _0x567fab * _0x39499b | 0x0
              , _0x32a2e8 = _0x48f5cc * _0x39499b | 0x0;
            _0xa1f99d(_0x49a225, _0x124d3e, _0x32a2e8);
            if (_0x49a225['GLctxObject'])
                _0x49a225['GLctxObject']['GLctx']['viewport'](0x0, 0x0, _0x124d3e, _0x32a2e8);
        }
        return _0x2ac046;
    }
    function _0x32dfda(_0x4fa63d, _0x28d04f) {
        (_0x28d04f['scaleMode'] != 0x0 || _0x28d04f['canvasResolutionScaleMode'] != 0x0) && _0x38f5d0(_0x4fa63d, _0x28d04f);
        if (_0x4fa63d['requestFullscreen'])
            _0x4fa63d['requestFullscreen']();
        else {
            if (_0x4fa63d['webkitRequestFullscreen'])
                _0x4fa63d['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']);
            else
                return _0x5bb742['fullscreenEnabled']() ? -0x3 : -0x1;
        }
        return _0x17dcda = _0x28d04f,
        _0x28d04f['canvasResizedCallback'] && function(_0x1b4aa3, _0x50d2b4, _0x3fffbe) {
            return _0x4f2e95['apply'](null, [_0x28d04f['canvasResizedCallback'], _0x1b4aa3, _0x50d2b4, _0x3fffbe]);
        }(0x25, 0x0, _0x28d04f['canvasResizedCallbackUserData']),
        0x0;
    }
    function _0x449660() {
        if (!_0x5bb742['fullscreenEnabled']())
            return -0x1;
        _0x5bb742['removeDeferredCalls'](_0x32dfda);
        var _0x5a47a3 = _0x2b5048[0x1];
        if (_0x5a47a3['exitFullscreen'])
            _0x5a47a3['fullscreenElement'] && _0x5a47a3['exitFullscreen']();
        else {
            if (_0x5a47a3['webkitExitFullscreen'])
                _0x5a47a3['webkitFullscreenElement'] && _0x5a47a3['webkitExitFullscreen']();
            else
                return -0x1;
        }
        return 0x0;
    }
    function _0x4fce1d(_0x25f546) {
        if (_0x25f546['requestPointerLock'])
            _0x25f546['requestPointerLock']();
        else {
            if (_0x25f546['msRequestPointerLock'])
                _0x25f546['msRequestPointerLock']();
            else
                return document['body']['requestPointerLock'] || document['body']['msRequestPointerLock'] ? -0x3 : -0x1;
        }
        return 0x0;
    }
    function _0x28ef2f() {
        _0x5bb742['removeDeferredCalls'](_0x4fce1d);
        if (document['exitPointerLock'])
            document['exitPointerLock']();
        else {
            if (document['msExitPointerLock'])
                document['msExitPointerLock']();
            else
                return -0x1;
        }
        return 0x0;
    }
    function _0x1f0db2(_0x48e72e) {
        var _0x22359e = document['fullscreenElement'] || document['mozFullScreenElement'] || document['webkitFullscreenElement'] || document['msFullscreenElement']
          , _0x2a48e5 = !!_0x22359e;
        _0x593fb9[_0x48e72e >> 0x2] = _0x2a48e5,
        _0x593fb9[_0x48e72e + 0x4 >> 0x2] = _0x5bb742['fullscreenEnabled']();
        var _0x38dd75 = _0x2a48e5 ? _0x22359e : _0x5bb742['previousFullscreenElement']
          , _0x1a66b3 = _0x5bb742['getNodeNameForTarget'](_0x38dd75)
          , _0x4a1000 = _0x38dd75 && _0x38dd75['id'] ? _0x38dd75['id'] : '';
        _0x430ff7(_0x1a66b3, _0x48e72e + 0x8, 0x80),
        _0x430ff7(_0x4a1000, _0x48e72e + 0x88, 0x80),
        _0x593fb9[_0x48e72e + 0x108 >> 0x2] = _0x38dd75 ? _0x38dd75['clientWidth'] : 0x0,
        _0x593fb9[_0x48e72e + 0x10c >> 0x2] = _0x38dd75 ? _0x38dd75['clientHeight'] : 0x0,
        _0x593fb9[_0x48e72e + 0x110 >> 0x2] = screen['width'],
        _0x593fb9[_0x48e72e + 0x114 >> 0x2] = screen['height'],
        _0x2a48e5 && (_0x5bb742['previousFullscreenElement'] = _0x22359e);
    }
    function _0x18edc7(_0x3a0a0f) {
        if (!_0x5bb742['fullscreenEnabled']())
            return -0x1;
        return _0x1f0db2(_0x3a0a0f),
        0x0;
    }
    function _0xa0dd01(_0x2d2530, _0x2d9ac2) {
        _0x2a3d2d[_0x2d2530 >> 0x3] = _0x2d9ac2['timestamp'];
        for (var _0x1c9804 = 0x0; _0x1c9804 < _0x2d9ac2['axes']['length']; ++_0x1c9804) {
            _0x2a3d2d[_0x2d2530 + _0x1c9804 * 0x8 + 0x10 >> 0x3] = _0x2d9ac2['axes'][_0x1c9804];
        }
        for (var _0x1c9804 = 0x0; _0x1c9804 < _0x2d9ac2['buttons']['length']; ++_0x1c9804) {
            typeof _0x2d9ac2['buttons'][_0x1c9804] === 'object' ? _0x2a3d2d[_0x2d2530 + _0x1c9804 * 0x8 + 0x210 >> 0x3] = _0x2d9ac2['buttons'][_0x1c9804]['value'] : _0x2a3d2d[_0x2d2530 + _0x1c9804 * 0x8 + 0x210 >> 0x3] = _0x2d9ac2['buttons'][_0x1c9804];
        }
        for (var _0x1c9804 = 0x0; _0x1c9804 < _0x2d9ac2['buttons']['length']; ++_0x1c9804) {
            typeof _0x2d9ac2['buttons'][_0x1c9804] === 'object' ? _0x593fb9[_0x2d2530 + _0x1c9804 * 0x4 + 0x410 >> 0x2] = _0x2d9ac2['buttons'][_0x1c9804]['pressed'] : _0x593fb9[_0x2d2530 + _0x1c9804 * 0x4 + 0x410 >> 0x2] = _0x2d9ac2['buttons'][_0x1c9804] == 0x1;
        }
        _0x593fb9[_0x2d2530 + 0x510 >> 0x2] = _0x2d9ac2['connected'],
        _0x593fb9[_0x2d2530 + 0x514 >> 0x2] = _0x2d9ac2['index'],
        _0x593fb9[_0x2d2530 + 0x8 >> 0x2] = _0x2d9ac2['axes']['length'],
        _0x593fb9[_0x2d2530 + 0xc >> 0x2] = _0x2d9ac2['buttons']['length'],
        _0x430ff7(_0x2d9ac2['id'], _0x2d2530 + 0x518, 0x40),
        _0x430ff7(_0x2d9ac2['mapping'], _0x2d2530 + 0x558, 0x40);
    }
    function _0x5a8f7f(_0x412079, _0xfc2918) {
        if (_0x412079 < 0x0 || _0x412079 >= _0x5bb742['lastGamepadState']['length'])
            return -0x5;
        if (!_0x5bb742['lastGamepadState'][_0x412079])
            return -0x7;
        return _0xa0dd01(_0xfc2918, _0x5bb742['lastGamepadState'][_0x412079]),
        0x0;
    }
    function _0x54c3a2() {
        return 0x80000000;
    }
    function _0x593a08() {
        return _0x5bb742['lastGamepadState']['length'];
    }
    function _0x30e01b() {
        _0x5bb742['removeAllEventListeners']();
    }
    function _0x1919cb(_0x1d6f6f) {
        return !_0x353c88['contexts'][_0x1d6f6f] || _0x353c88['contexts'][_0x1d6f6f]['GLctx']['isContextLost']();
    }
    function _0x4321cb(_0x245d8a) {
        return _0x245d8a < 0x0 || _0x245d8a === 0x0 && 0x1 / _0x245d8a === -Infinity;
    }
    function _0x182029(_0x1dc9b2, _0x2b228e) {
        return (_0x1dc9b2 >>> 0x0) + _0x2b228e * 0x100000000;
    }
    function _0x372d03(_0x34aa73, _0x1cb7e6) {
        return (_0x34aa73 >>> 0x0) + (_0x1cb7e6 >>> 0x0) * 0x100000000;
    }
    function _0x2155ab(_0x506f1e, _0x42afbb) {
        if (_0x506f1e <= 0x0)
            return _0x506f1e;
        var _0x12f547 = _0x42afbb <= 0x20 ? Math['abs'](0x1 << _0x42afbb - 0x1) : Math['pow'](0x2, _0x42afbb - 0x1);
        return _0x506f1e >= _0x12f547 && (_0x42afbb <= 0x20 || _0x506f1e > _0x12f547) && (_0x506f1e = -0x2 * _0x12f547 + _0x506f1e),
        _0x506f1e;
    }
    function _0x2c495d(_0x359b23, _0x329c28) {
        if (_0x359b23 >= 0x0)
            return _0x359b23;
        return _0x329c28 <= 0x20 ? 0x2 * Math['abs'](0x1 << _0x329c28 - 0x1) + _0x359b23 : Math['pow'](0x2, _0x329c28) + _0x359b23;
    }
    function _0x1ccc8f(_0x4c9ea6, _0x56391a) {
        var _0x27a3aa = _0x4c9ea6
          , _0x332c16 = _0x56391a;
        function _0x365231(_0x518416, _0x1b4782) {
            if (_0x1b4782 === 'double' || _0x1b4782 === 'i64')
                _0x518416 & 0x7 && (_0x518416 += 0x4);
            else {}
            return _0x518416;
        }
        function _0x3c6522(_0x5271c9) {
            var _0x57f0d7;
            _0x332c16 = _0x365231(_0x332c16, _0x5271c9);
            if (_0x5271c9 === 'double')
                _0x57f0d7 = _0x2a3d2d[_0x332c16 >> 0x3],
                _0x332c16 += 0x8;
            else
                _0x5271c9 == 'i64' ? (_0x57f0d7 = [_0x593fb9[_0x332c16 >> 0x2], _0x593fb9[_0x332c16 + 0x4 >> 0x2]],
                _0x332c16 += 0x8) : (_0x5271c9 = 'i32',
                _0x57f0d7 = _0x593fb9[_0x332c16 >> 0x2],
                _0x332c16 += 0x4);
            return _0x57f0d7;
        }
        var _0x29ef88 = [], _0x5c78ab, _0x328169, _0x4174ba;
        while (0x1) {
            var _0x2a3f49 = _0x27a3aa;
            _0x5c78ab = _0x10882b[_0x27a3aa >> 0x0];
            if (_0x5c78ab === 0x0)
                break;
            _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
            if (_0x5c78ab == 0x25) {
                var _0x5ef9db = ![]
                  , _0x1e7922 = ![]
                  , _0x60f956 = ![]
                  , _0x916c1f = ![]
                  , _0x208bca = ![];
                _0xee5d4f: while (0x1) {
                    switch (_0x328169) {
                    case 0x2b:
                        _0x5ef9db = !![];
                        break;
                    case 0x2d:
                        _0x1e7922 = !![];
                        break;
                    case 0x23:
                        _0x60f956 = !![];
                        break;
                    case 0x30:
                        if (_0x916c1f)
                            break _0xee5d4f;
                        else {
                            _0x916c1f = !![];
                            break;
                        }
                    case 0x20:
                        _0x208bca = !![];
                        break;
                    default:
                        break _0xee5d4f;
                    }
                    _0x27a3aa++,
                    _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                }
                var _0x370262 = 0x0;
                if (_0x328169 == 0x2a)
                    _0x370262 = _0x3c6522('i32'),
                    _0x27a3aa++,
                    _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                else
                    while (_0x328169 >= 0x30 && _0x328169 <= 0x39) {
                        _0x370262 = _0x370262 * 0xa + (_0x328169 - 0x30),
                        _0x27a3aa++,
                        _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                    }
                var _0x365f3c = ![]
                  , _0x2a5e5e = -0x1;
                if (_0x328169 == 0x2e) {
                    _0x2a5e5e = 0x0,
                    _0x365f3c = !![],
                    _0x27a3aa++,
                    _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                    if (_0x328169 == 0x2a)
                        _0x2a5e5e = _0x3c6522('i32'),
                        _0x27a3aa++;
                    else
                        while (0x1) {
                            var _0x3bea2f = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                            if (_0x3bea2f < 0x30 || _0x3bea2f > 0x39)
                                break;
                            _0x2a5e5e = _0x2a5e5e * 0xa + (_0x3bea2f - 0x30),
                            _0x27a3aa++;
                        }
                    _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                }
                _0x2a5e5e < 0x0 && (_0x2a5e5e = 0x6,
                _0x365f3c = ![]);
                var _0x27a1ba;
                switch (String['fromCharCode'](_0x328169)) {
                case 'h':
                    var _0x5c30f4 = _0x10882b[_0x27a3aa + 0x2 >> 0x0];
                    _0x5c30f4 == 0x68 ? (_0x27a3aa++,
                    _0x27a1ba = 0x1) : _0x27a1ba = 0x2;
                    break;
                case 'l':
                    var _0x5c30f4 = _0x10882b[_0x27a3aa + 0x2 >> 0x0];
                    _0x5c30f4 == 0x6c ? (_0x27a3aa++,
                    _0x27a1ba = 0x8) : _0x27a1ba = 0x4;
                    break;
                case 'L':
                case 'q':
                case 'j':
                    _0x27a1ba = 0x8;
                    break;
                case 'z':
                case 't':
                case 'I':
                    _0x27a1ba = 0x4;
                    break;
                default:
                    _0x27a1ba = null;
                }
                if (_0x27a1ba)
                    _0x27a3aa++;
                _0x328169 = _0x10882b[_0x27a3aa + 0x1 >> 0x0];
                switch (String['fromCharCode'](_0x328169)) {
                case 'd':
                case 'i':
                case 'u':
                case 'o':
                case 'x':
                case 'X':
                case 'p':
                    {
                        var _0x467680 = _0x328169 == 0x64 || _0x328169 == 0x69;
                        _0x27a1ba = _0x27a1ba || 0x4,
                        _0x4174ba = _0x3c6522('i' + _0x27a1ba * 0x8);
                        var _0x2009e2;
                        _0x27a1ba == 0x8 && (_0x4174ba = _0x328169 == 0x75 ? _0x372d03(_0x4174ba[0x0], _0x4174ba[0x1]) : _0x182029(_0x4174ba[0x0], _0x4174ba[0x1]));
                        if (_0x27a1ba <= 0x4) {
                            var _0x20bccb = Math['pow'](0x100, _0x27a1ba) - 0x1;
                            _0x4174ba = (_0x467680 ? _0x2155ab : _0x2c495d)(_0x4174ba & _0x20bccb, _0x27a1ba * 0x8);
                        }
                        var _0x3407cd = Math['abs'](_0x4174ba)
                          , _0x21837d = '';
                        if (_0x328169 == 0x64 || _0x328169 == 0x69)
                            _0x2009e2 = _0x2155ab(_0x4174ba, 0x8 * _0x27a1ba, 0x1)['toString'](0xa);
                        else {
                            if (_0x328169 == 0x75)
                                _0x2009e2 = _0x2c495d(_0x4174ba, 0x8 * _0x27a1ba, 0x1)['toString'](0xa),
                                _0x4174ba = Math['abs'](_0x4174ba);
                            else {
                                if (_0x328169 == 0x6f)
                                    _0x2009e2 = (_0x60f956 ? '0' : '') + _0x3407cd['toString'](0x8);
                                else {
                                    if (_0x328169 == 0x78 || _0x328169 == 0x58) {
                                        _0x21837d = _0x60f956 && _0x4174ba != 0x0 ? '0x' : '';
                                        if (_0x4174ba < 0x0) {
                                            _0x4174ba = -_0x4174ba,
                                            _0x2009e2 = (_0x3407cd - 0x1)['toString'](0x10);
                                            var _0x5c29bc = [];
                                            for (var _0x58e5aa = 0x0; _0x58e5aa < _0x2009e2['length']; _0x58e5aa++) {
                                                _0x5c29bc['push']((0xf - parseInt(_0x2009e2[_0x58e5aa], 0x10))['toString'](0x10));
                                            }
                                            _0x2009e2 = _0x5c29bc['join']('');
                                            while (_0x2009e2['length'] < _0x27a1ba * 0x2)
                                                _0x2009e2 = 'f' + _0x2009e2;
                                        } else
                                            _0x2009e2 = _0x3407cd['toString'](0x10);
                                        _0x328169 == 0x58 && (_0x21837d = _0x21837d['toUpperCase'](),
                                        _0x2009e2 = _0x2009e2['toUpperCase']());
                                    } else
                                        _0x328169 == 0x70 && (_0x3407cd === 0x0 ? _0x2009e2 = '(nil)' : (_0x21837d = '0x',
                                        _0x2009e2 = _0x3407cd['toString'](0x10)));
                                }
                            }
                        }
                        if (_0x365f3c)
                            while (_0x2009e2['length'] < _0x2a5e5e) {
                                _0x2009e2 = '0' + _0x2009e2;
                            }
                        if (_0x4174ba >= 0x0) {
                            if (_0x5ef9db)
                                _0x21837d = '+' + _0x21837d;
                            else
                                _0x208bca && (_0x21837d = ' ' + _0x21837d);
                        }
                        _0x2009e2['charAt'](0x0) == '-' && (_0x21837d = '-' + _0x21837d,
                        _0x2009e2 = _0x2009e2['substr'](0x1));
                        while (_0x21837d['length'] + _0x2009e2['length'] < _0x370262) {
                            _0x1e7922 ? _0x2009e2 += ' ' : _0x916c1f ? _0x2009e2 = '0' + _0x2009e2 : _0x21837d = ' ' + _0x21837d;
                        }
                        _0x2009e2 = _0x21837d + _0x2009e2,
                        _0x2009e2['split']('')['forEach'](function(_0x2103cc) {
                            _0x29ef88['push'](_0x2103cc['charCodeAt'](0x0));
                        });
                        break;
                    }
                case 'f':
                case 'F':
                case 'e':
                case 'E':
                case 'g':
                case 'G':
                    {
                        _0x4174ba = _0x3c6522('double');
                        var _0x2009e2;
                        if (isNaN(_0x4174ba))
                            _0x2009e2 = 'nan',
                            _0x916c1f = ![];
                        else {
                            if (!isFinite(_0x4174ba))
                                _0x2009e2 = (_0x4174ba < 0x0 ? '-' : '') + 'inf',
                                _0x916c1f = ![];
                            else {
                                var _0x370136 = ![]
                                  , _0x55db74 = Math['min'](_0x2a5e5e, 0x14);
                                if (_0x328169 == 0x67 || _0x328169 == 0x47) {
                                    _0x370136 = !![],
                                    _0x2a5e5e = _0x2a5e5e || 0x1;
                                    var _0x3f5996 = parseInt(_0x4174ba['toExponential'](_0x55db74)['split']('e')[0x1], 0xa);
                                    _0x2a5e5e > _0x3f5996 && _0x3f5996 >= -0x4 ? (_0x328169 = (_0x328169 == 0x67 ? 'f' : 'F')['charCodeAt'](0x0),
                                    _0x2a5e5e -= _0x3f5996 + 0x1) : (_0x328169 = (_0x328169 == 0x67 ? 'e' : 'E')['charCodeAt'](0x0),
                                    _0x2a5e5e--),
                                    _0x55db74 = Math['min'](_0x2a5e5e, 0x14);
                                }
                                if (_0x328169 == 0x65 || _0x328169 == 0x45)
                                    _0x2009e2 = _0x4174ba['toExponential'](_0x55db74),
                                    /[eE][-+]\d$/['test'](_0x2009e2) && (_0x2009e2 = _0x2009e2['slice'](0x0, -0x1) + '0' + _0x2009e2['slice'](-0x1));
                                else
                                    (_0x328169 == 0x66 || _0x328169 == 0x46) && (_0x2009e2 = _0x4174ba['toFixed'](_0x55db74),
                                    _0x4174ba === 0x0 && _0x4321cb(_0x4174ba) && (_0x2009e2 = '-' + _0x2009e2));
                                var _0x5a57d9 = _0x2009e2['split']('e');
                                if (_0x370136 && !_0x60f956)
                                    while (_0x5a57d9[0x0]['length'] > 0x1 && _0x5a57d9[0x0]['includes']('.') && (_0x5a57d9[0x0]['slice'](-0x1) == '0' || _0x5a57d9[0x0]['slice'](-0x1) == '.')) {
                                        _0x5a57d9[0x0] = _0x5a57d9[0x0]['slice'](0x0, -0x1);
                                    }
                                else {
                                    if (_0x60f956 && _0x2009e2['indexOf']('.') == -0x1)
                                        _0x5a57d9[0x0] += '.';
                                    while (_0x2a5e5e > _0x55db74++)
                                        _0x5a57d9[0x0] += '0';
                                }
                                _0x2009e2 = _0x5a57d9[0x0] + (_0x5a57d9['length'] > 0x1 ? 'e' + _0x5a57d9[0x1] : '');
                                if (_0x328169 == 0x45)
                                    _0x2009e2 = _0x2009e2['toUpperCase']();
                                if (_0x4174ba >= 0x0) {
                                    if (_0x5ef9db)
                                        _0x2009e2 = '+' + _0x2009e2;
                                    else
                                        _0x208bca && (_0x2009e2 = ' ' + _0x2009e2);
                                }
                            }
                        }
                        while (_0x2009e2['length'] < _0x370262) {
                            _0x1e7922 ? _0x2009e2 += ' ' : _0x916c1f && (_0x2009e2[0x0] == '-' || _0x2009e2[0x0] == '+') ? _0x2009e2 = _0x2009e2[0x0] + '0' + _0x2009e2['slice'](0x1) : _0x2009e2 = (_0x916c1f ? '0' : ' ') + _0x2009e2;
                        }
                        if (_0x328169 < 0x61)
                            _0x2009e2 = _0x2009e2['toUpperCase']();
                        _0x2009e2['split']('')['forEach'](function(_0x2dbeab) {
                            _0x29ef88['push'](_0x2dbeab['charCodeAt'](0x0));
                        });
                        break;
                    }
                case 's':
                    {
                        var _0x595987 = _0x3c6522('i8*')
                          , _0xfef188 = _0x595987 ? _0x50ed07(_0x595987) : '(null)'['length'];
                        if (_0x365f3c)
                            _0xfef188 = Math['min'](_0xfef188, _0x2a5e5e);
                        if (!_0x1e7922)
                            while (_0xfef188 < _0x370262--) {
                                _0x29ef88['push'](0x20);
                            }
                        if (_0x595987)
                            for (var _0x58e5aa = 0x0; _0x58e5aa < _0xfef188; _0x58e5aa++) {
                                _0x29ef88['push'](_0x2ac27b[_0x595987++ >> 0x0]);
                            }
                        else
                            _0x29ef88 = _0x29ef88['concat'](_0x1fcab5('(null)'['substr'](0x0, _0xfef188), !![]));
                        if (_0x1e7922)
                            while (_0xfef188 < _0x370262--) {
                                _0x29ef88['push'](0x20);
                            }
                        break;
                    }
                case 'c':
                    {
                        if (_0x1e7922)
                            _0x29ef88['push'](_0x3c6522('i8'));
                        while (--_0x370262 > 0x0) {
                            _0x29ef88['push'](0x20);
                        }
                        if (!_0x1e7922)
                            _0x29ef88['push'](_0x3c6522('i8'));
                        break;
                    }
                case 'n':
                    {
                        var _0x5d266f = _0x3c6522('i32*');
                        _0x593fb9[_0x5d266f >> 0x2] = _0x29ef88['length'];
                        break;
                    }
                case '%':
                    {
                        _0x29ef88['push'](_0x5c78ab);
                        break;
                    }
                default:
                    {
                        for (var _0x58e5aa = _0x2a3f49; _0x58e5aa < _0x27a3aa + 0x2; _0x58e5aa++) {
                            _0x29ef88['push'](_0x10882b[_0x58e5aa >> 0x0]);
                        }
                    }
                }
                _0x27a3aa += 0x2;
            } else
                _0x29ef88['push'](_0x5c78ab),
                _0x27a3aa += 0x1;
        }
        return _0x29ef88;
    }
    function _0x372b58(_0x32cd38) {
        if (!_0x32cd38 || !_0x32cd38['callee'] || !_0x32cd38['callee']['name'])
            return [null, '', ''];
        var _0x216470 = _0x32cd38['callee']['toString']()
          , _0xd46c14 = _0x32cd38['callee']['name']
          , _0x23fca1 = '('
          , _0x45de48 = !![];
        for (var _0x3ef7a3 in _0x32cd38) {
            var _0x3dcdf7 = _0x32cd38[_0x3ef7a3];
            !_0x45de48 && (_0x23fca1 += ', '),
            _0x45de48 = ![],
            typeof _0x3dcdf7 === 'number' || typeof _0x3dcdf7 === 'string' ? _0x23fca1 += _0x3dcdf7 : _0x23fca1 += '(' + typeof _0x3dcdf7 + ')';
        }
        _0x23fca1 += ')';
        var _0x1ed194 = _0x32cd38['callee']['caller'];
        _0x32cd38 = _0x1ed194 ? _0x1ed194['arguments'] : [];
        if (_0x45de48)
            _0x23fca1 = '';
        return [_0x32cd38, _0xd46c14, _0x23fca1];
    }
    function _0x238a63(_0x3196c8) {
        var _0x54bdae = _0x518cfb()
          , _0x1b95b3 = _0x54bdae['lastIndexOf']('_emscripten_log')
          , _0xeaaf8f = _0x54bdae['lastIndexOf']('_emscripten_get_callstack')
          , _0x21e0b3 = _0x54bdae['indexOf']('
', Math['max'](_0x1b95b3, _0xeaaf8f)) + 0x1;
        _0x54bdae = _0x54bdae['slice'](_0x21e0b3);
        _0x3196c8 & 0x20 && _0x41d093('EM_LOG_DEMANGLE is deprecated; ignoring');
        _0x3196c8 & 0x8 && typeof emscripten_source_map === 'undefined' && (_0x41d093('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),
        _0x3196c8 ^= 0x8,
        _0x3196c8 |= 0x10);
        var _0x18fb6a = null;
        if (_0x3196c8 & 0x80) {
            _0x18fb6a = _0x372b58(arguments);
            while (_0x18fb6a[0x1]['includes']('_emscripten_'))
                _0x18fb6a = _0x372b58(_0x18fb6a[0x0]);
        }
        var _0x736b05 = _0x54bdae['split']('
');
        _0x54bdae = '';
        var _0x3e3109 = new RegExp('\s*(.*?)@(.*?):([0-9]+):([0-9]+)')
          , _0x12fd8e = new RegExp('\s*(.*?)@(.*):(.*)(:(.*))?')
          , _0x35d44c = new RegExp('\s*at (.*?) \((.*):(.*):(.*)\)');
        for (var _0x59f8e7 in _0x736b05) {
            var _0x4e3685 = _0x736b05[_0x59f8e7]
              , _0x26dd8a = ''
              , _0xb1e71a = ''
              , _0x5dbbc4 = 0x0
              , _0x2e10be = 0x0
              , _0x13086b = _0x35d44c['exec'](_0x4e3685);
            if (_0x13086b && _0x13086b['length'] == 0x5)
                _0x26dd8a = _0x13086b[0x1],
                _0xb1e71a = _0x13086b[0x2],
                _0x5dbbc4 = _0x13086b[0x3],
                _0x2e10be = _0x13086b[0x4];
            else {
                _0x13086b = _0x3e3109['exec'](_0x4e3685);
                if (!_0x13086b)
                    _0x13086b = _0x12fd8e['exec'](_0x4e3685);
                if (_0x13086b && _0x13086b['length'] >= 0x4)
                    _0x26dd8a = _0x13086b[0x1],
                    _0xb1e71a = _0x13086b[0x2],
                    _0x5dbbc4 = _0x13086b[0x3],
                    _0x2e10be = _0x13086b[0x4] | 0x0;
                else {
                    _0x54bdae += _0x4e3685 + '
';
                    continue;
                }
            }
            var _0x40d44f = ![];
            if (_0x3196c8 & 0x8) {
                var _0x31a6df = emscripten_source_map['originalPositionFor']({
                    'line': _0x5dbbc4,
                    'column': _0x2e10be
                });
                _0x40d44f = _0x31a6df && _0x31a6df['source'],
                _0x40d44f && (_0x3196c8 & 0x40 && (_0x31a6df['source'] = _0x31a6df['source']['substring'](_0x31a6df['source']['replace'](/\\/g, '/')['lastIndexOf']('/') + 0x1)),
                _0x54bdae += '    at ' + _0x26dd8a + ' (' + _0x31a6df['source'] + ':' + _0x31a6df['line'] + ':' + _0x31a6df['column'] + ')
');
            }
            (_0x3196c8 & 0x10 || !_0x40d44f) && (_0x3196c8 & 0x40 && (_0xb1e71a = _0xb1e71a['substring'](_0xb1e71a['replace'](/\\/g, '/')['lastIndexOf']('/') + 0x1)),
            _0x54bdae += (_0x40d44f ? '     = ' + _0x26dd8a : '    at ' + _0x26dd8a) + ' (' + _0xb1e71a + ':' + _0x5dbbc4 + ':' + _0x2e10be + ')
'),
            _0x3196c8 & 0x80 && _0x18fb6a[0x0] && (_0x18fb6a[0x1] == _0x26dd8a && _0x18fb6a[0x2]['length'] > 0x0 && (_0x54bdae = _0x54bdae['replace'](/\s+$/, ''),
            _0x54bdae += ' with values: ' + _0x18fb6a[0x1] + _0x18fb6a[0x2] + '
'),
            _0x18fb6a = _0x372b58(_0x18fb6a[0x0]));
        }
        return _0x54bdae = _0x54bdae['replace'](/\s+$/, ''),
        _0x54bdae;
    }
    function _0x5706dc(_0x4e3130, _0x479ac9) {
        _0x4e3130 & 0x18 && (_0x479ac9 = _0x479ac9['replace'](/\s+$/, ''),
        _0x479ac9 += (_0x479ac9['length'] > 0x0 ? '
' : '') + _0x238a63(_0x4e3130));
        if (_0x4e3130 & 0x1) {
            if (_0x4e3130 & 0x4)
                console['error'](_0x479ac9);
            else {
                if (_0x4e3130 & 0x2)
                    console['warn'](_0x479ac9);
                else {
                    if (_0x4e3130 & 0x200)
                        console['info'](_0x479ac9);
                    else
                        _0x4e3130 & 0x100 ? console['debug'](_0x479ac9) : console['log'](_0x479ac9);
                }
            }
        } else
            _0x4e3130 & 0x6 ? _0x5a96d4(_0x479ac9) : _0x468a5e(_0x479ac9);
    }
    function _0x36847d(_0x29fec5, _0x38e793, _0x10f5d3) {
        var _0x2b14c9 = _0x1ccc8f(_0x38e793, _0x10f5d3)
          , _0x1d3212 = _0x44bcd4(_0x2b14c9, 0x0);
        _0x5706dc(_0x29fec5, _0x1d3212);
    }
    function _0x3ce0e3(_0x3b4539, _0x11493d) {
        _0x4990f2(_0x3b4539, _0x11493d || 0x1);
        throw 'longjmp';
    }
    function _0x5d7223(_0x8168dc, _0x1c41b7) {
        return _0x3ce0e3(_0x8168dc, _0x1c41b7);
    }
    function _0x193597(_0xb8f73e, _0x338877, _0x2b41df) {
        _0x2ac27b['copyWithin'](_0xb8f73e, _0x338877, _0x338877 + _0x2b41df);
    }
    function _0x25ff3d(_0x492ed2, _0x4fbce2) {
        if (!_0x5bb742['fullscreenEnabled']())
            return -0x1;
        _0x492ed2 = _0x3c63b2(_0x492ed2);
        if (!_0x492ed2)
            return -0x4;
        if (!_0x492ed2['requestFullscreen'] && !_0x492ed2['webkitRequestFullscreen'])
            return -0x3;
        var _0x33b63f = _0x5bb742['canPerformEventHandlerRequests']();
        if (!_0x33b63f)
            return _0x4fbce2['deferUntilInEventHandler'] ? (_0x5bb742['deferCall'](_0x32dfda, 0x1, [_0x492ed2, _0x4fbce2]),
            0x1) : -0x2;
        return _0x32dfda(_0x492ed2, _0x4fbce2);
    }
    function _0xe4d9d(_0xbd2e45, _0x577c6e) {
        var _0x1adbc6 = {
            'scaleMode': 0x0,
            'canvasResolutionScaleMode': 0x0,
            'filteringMode': 0x0,
            'deferUntilInEventHandler': _0x577c6e,
            'canvasResizedCallbackTargetThread': 0x2
        };
        return _0x25ff3d(_0xbd2e45, _0x1adbc6);
    }
    function _0x53f1bb(_0x28eaf5, _0x485d03) {
        _0x28eaf5 = _0x3c63b2(_0x28eaf5);
        if (!_0x28eaf5)
            return -0x4;
        if (!_0x28eaf5['requestPointerLock'] && !_0x28eaf5['msRequestPointerLock'])
            return -0x1;
        var _0x3349fb = _0x5bb742['canPerformEventHandlerRequests']();
        if (!_0x3349fb)
            return _0x485d03 ? (_0x5bb742['deferCall'](_0x4fce1d, 0x2, [_0x28eaf5]),
            0x1) : -0x2;
        return _0x4fce1d(_0x28eaf5);
    }
    function _0x1f5eef(_0x3120d3) {
        try {
            return _0x2aefc6['grow'](_0x3120d3 - _0x3a5088['byteLength'] + 0xffff >>> 0x10),
            _0x44e88b(_0x2aefc6['buffer']),
            0x1;
        } catch (_0x4ea3ca) {}
    }
    function _0x377a53(_0x381898) {
        var _0x12e0bc = _0x2ac27b['length'];
        _0x381898 = _0x381898 >>> 0x0;
        var _0x238e3e = 0x80000000;
        if (_0x381898 > _0x238e3e)
            return ![];
        for (var _0x19c9cd = 0x1; _0x19c9cd <= 0x4; _0x19c9cd *= 0x2) {
            var _0x43a45e = _0x12e0bc * (0x1 + 0.2 / _0x19c9cd);
            _0x43a45e = Math['min'](_0x43a45e, _0x381898 + 0x6000000);
            var _0x5d50a8 = Math['min'](_0x238e3e, _0x2fc4f9(Math['max'](_0x381898, _0x43a45e), 0x10000))
              , _0xde72d = _0x1f5eef(_0x5d50a8);
            if (_0xde72d)
                return !![];
        }
        return ![];
    }
    function _0x3db628() {
        try {
            if (navigator['getGamepads'])
                return (_0x5bb742['lastGamepadState'] = navigator['getGamepads']()) ? 0x0 : -0x1;
        } catch (_0x3b62d0) {
            navigator['getGamepads'] = null;
        }
        return -0x1;
    }
    function _0x347105(_0xa198b5, _0x516fce, _0xea5dcb, _0x32f3f1, _0x55d05c, _0x345bb0, _0x18b857) {
        if (!_0x5bb742['focusEvent'])
            _0x5bb742['focusEvent'] = _0x214635(0x100);
        var _0xf6a012 = function(_0x327c32) {
            var _0xeb9bc1 = _0x327c32 || event
              , _0xcc75b4 = _0x5bb742['getNodeNameForTarget'](_0xeb9bc1['target'])
              , _0x310f4f = _0xeb9bc1['target']['id'] ? _0xeb9bc1['target']['id'] : ''
              , _0x534659 = _0x5bb742['focusEvent'];
            _0x430ff7(_0xcc75b4, _0x534659 + 0x0, 0x80),
            _0x430ff7(_0x310f4f, _0x534659 + 0x80, 0x80);
            if (function(_0x4c20a3, _0x345ca2, _0x451559) {
                return _0x4f2e95['apply'](null, [_0x32f3f1, _0x4c20a3, _0x345ca2, _0x451559]);
            }(_0x55d05c, _0x534659, _0x516fce))
                _0xeb9bc1['preventDefault']();
        }
          , _0x5f55f9 = {
            'target': _0x3c63b2(_0xa198b5),
            'eventTypeString': _0x345bb0,
            'callbackfunc': _0x32f3f1,
            'handlerFunc': _0xf6a012,
            'useCapture': _0xea5dcb
        };
        _0x5bb742['registerOrRemoveHandler'](_0x5f55f9);
    }
    function _0xfb789d(_0x36f0e9, _0x4359d1, _0x1c5794, _0x3b375c, _0x53a3cf) {
        return _0x347105(_0x36f0e9, _0x4359d1, _0x1c5794, _0x3b375c, 0xc, 'blur', _0x53a3cf),
        0x0;
    }
    function _0x3bd0b3(_0x325695, _0x25ce53, _0x455278, _0x28905a, _0x56c3b0) {
        return _0x347105(_0x325695, _0x25ce53, _0x455278, _0x28905a, 0xd, 'focus', _0x56c3b0),
        0x0;
    }
    function _0x4ade51(_0x4efeed, _0x12366b, _0x8e17bd, _0x2d11c9, _0x2568d1, _0x2844ca, _0x23b049) {
        if (!_0x5bb742['fullscreenChangeEvent'])
            _0x5bb742['fullscreenChangeEvent'] = _0x214635(0x118);
        var _0x1cd078 = function(_0x2da1b9) {
            var _0x309985 = _0x2da1b9 || event
              , _0x2df183 = _0x5bb742['fullscreenChangeEvent'];
            _0x1f0db2(_0x2df183);
            if (function(_0x3e0873, _0x1f4dd6, _0x140e74) {
                return _0x4f2e95['apply'](null, [_0x2d11c9, _0x3e0873, _0x1f4dd6, _0x140e74]);
            }(_0x2568d1, _0x2df183, _0x12366b))
                _0x309985['preventDefault']();
        }
          , _0x6ceafe = {
            'target': _0x4efeed,
            'eventTypeString': _0x2844ca,
            'callbackfunc': _0x2d11c9,
            'handlerFunc': _0x1cd078,
            'useCapture': _0x8e17bd
        };
        _0x5bb742['registerOrRemoveHandler'](_0x6ceafe);
    }
    function _0x21855e(_0x43a2da, _0x3bb39f, _0x504519, _0x511598, _0x1b3b2f) {
        if (!_0x5bb742['fullscreenEnabled']())
            return -0x1;
        _0x43a2da = _0x3c63b2(_0x43a2da);
        if (!_0x43a2da)
            return -0x4;
        return _0x4ade51(_0x43a2da, _0x3bb39f, _0x504519, _0x511598, 0x13, 'fullscreenchange', _0x1b3b2f),
        _0x4ade51(_0x43a2da, _0x3bb39f, _0x504519, _0x511598, 0x13, 'webkitfullscreenchange', _0x1b3b2f),
        0x0;
    }
    function _0x4dcf8(_0x4f0947, _0x4bfcdb, _0x24fb68, _0x272ac9, _0x1083bb, _0x53fb72, _0x348d0b) {
        if (!_0x5bb742['gamepadEvent'])
            _0x5bb742['gamepadEvent'] = _0x214635(0x598);
        var _0x299ddd = function(_0x1c4d78) {
            var _0x4a90e9 = _0x1c4d78 || event
              , _0x2bc0f5 = _0x5bb742['gamepadEvent'];
            _0xa0dd01(_0x2bc0f5, _0x4a90e9['gamepad']);
            if (function(_0x575e01, _0x4e0fe5, _0x2948b9) {
                return _0x4f2e95['apply'](null, [_0x272ac9, _0x575e01, _0x4e0fe5, _0x2948b9]);
            }(_0x1083bb, _0x2bc0f5, _0x4bfcdb))
                _0x4a90e9['preventDefault']();
        }
          , _0x281a5a = {
            'target': _0x3c63b2(_0x4f0947),
            'allowsDeferredCalls': !![],
            'eventTypeString': _0x53fb72,
            'callbackfunc': _0x272ac9,
            'handlerFunc': _0x299ddd,
            'useCapture': _0x24fb68
        };
        _0x5bb742['registerOrRemoveHandler'](_0x281a5a);
    }
    function _0x59f744(_0x2a115a, _0x94fcd4, _0x1bdfa1, _0x3584b4) {
        if (_0x3db628())
            return -0x1;
        return _0x4dcf8(0x2, _0x2a115a, _0x94fcd4, _0x1bdfa1, 0x1a, 'gamepadconnected', _0x3584b4);
    }
    function _0x2387f5(_0x30016c, _0x23686f, _0x5d6e28, _0x487ebd) {
        if (_0x3db628())
            return -0x1;
        return _0x4dcf8(0x2, _0x30016c, _0x23686f, _0x5d6e28, 0x1b, 'gamepaddisconnected', _0x487ebd);
    }
    function _0x3d4d78(_0x495896, _0x21cba0, _0x5b72a4) {
        return setInterval(function() {
            (function(_0x5a6e0d) {
                _0x2d1c65['apply'](null, [_0x495896, _0x5a6e0d]);
            }(_0x5b72a4));
        }, _0x21cba0);
    }
    function _0x2b1192(_0x520303, _0x231780, _0x5710b7, _0x428a82, _0x2f45c9, _0xc93b6d, _0x451145) {
        if (!_0x5bb742['keyEvent'])
            _0x5bb742['keyEvent'] = _0x214635(0xa4);
        var _0x58aa73 = function(_0x403f7f) {
            var _0x1dc178 = _0x5bb742['keyEvent']
              , _0x1bf62d = _0x1dc178 >> 0x2;
            _0x593fb9[_0x1bf62d + 0x0] = _0x403f7f['location'],
            _0x593fb9[_0x1bf62d + 0x1] = _0x403f7f['ctrlKey'],
            _0x593fb9[_0x1bf62d + 0x2] = _0x403f7f['shiftKey'],
            _0x593fb9[_0x1bf62d + 0x3] = _0x403f7f['altKey'],
            _0x593fb9[_0x1bf62d + 0x4] = _0x403f7f['metaKey'],
            _0x593fb9[_0x1bf62d + 0x5] = _0x403f7f['repeat'],
            _0x593fb9[_0x1bf62d + 0x6] = _0x403f7f['charCode'],
            _0x593fb9[_0x1bf62d + 0x7] = _0x403f7f['keyCode'],
            _0x593fb9[_0x1bf62d + 0x8] = _0x403f7f['which'],
            _0x430ff7(_0x403f7f['key'] || '', _0x1dc178 + 0x24, 0x20),
            _0x430ff7(_0x403f7f['code'] || '', _0x1dc178 + 0x44, 0x20),
            _0x430ff7(_0x403f7f['char'] || '', _0x1dc178 + 0x64, 0x20),
            _0x430ff7(_0x403f7f['locale'] || '', _0x1dc178 + 0x84, 0x20);
            if (function(_0x5e228e, _0xeaf6b7, _0x454ac0) {
                return _0x4f2e95['apply'](null, [_0x428a82, _0x5e228e, _0xeaf6b7, _0x454ac0]);
            }(_0x2f45c9, _0x1dc178, _0x231780))
                _0x403f7f['preventDefault']();
        }
          , _0x5773f7 = {
            'target': _0x3c63b2(_0x520303),
            'allowsDeferredCalls': !![],
            'eventTypeString': _0xc93b6d,
            'callbackfunc': _0x428a82,
            'handlerFunc': _0x58aa73,
            'useCapture': _0x5710b7
        };
        _0x5bb742['registerOrRemoveHandler'](_0x5773f7);
    }
    function _0x2480a1(_0x25b800, _0x11e673, _0x55ddc3, _0x1ce6e3, _0x8778cf) {
        return _0x2b1192(_0x25b800, _0x11e673, _0x55ddc3, _0x1ce6e3, 0x2, 'keydown', _0x8778cf),
        0x0;
    }
    function _0xf67406(_0x535181, _0x300018, _0x52bd10, _0x1136f7, _0x1d6347) {
        return _0x2b1192(_0x535181, _0x300018, _0x52bd10, _0x1136f7, 0x1, 'keypress', _0x1d6347),
        0x0;
    }
    function _0x2e55f(_0x3172a0, _0x2592ab, _0x20d916, _0x72ee58, _0x1b9170) {
        return _0x2b1192(_0x3172a0, _0x2592ab, _0x20d916, _0x72ee58, 0x3, 'keyup', _0x1b9170),
        0x0;
    }
    function _0x141c32(_0x54f18b, _0x172345, _0x332195) {
        var _0x40a593 = function() {
            _0x319313['call'](null, _0x54f18b);
        };
        _0x3fee5b(_0x40a593, _0x172345, _0x332195);
    }
    function _0x3eb1fd(_0x349964, _0x563c84, _0x33c31a) {
        var _0x2d6910 = _0x349964 >> 0x2;
        _0x593fb9[_0x2d6910 + 0x0] = _0x563c84['screenX'],
        _0x593fb9[_0x2d6910 + 0x1] = _0x563c84['screenY'],
        _0x593fb9[_0x2d6910 + 0x2] = _0x563c84['clientX'],
        _0x593fb9[_0x2d6910 + 0x3] = _0x563c84['clientY'],
        _0x593fb9[_0x2d6910 + 0x4] = _0x563c84['ctrlKey'],
        _0x593fb9[_0x2d6910 + 0x5] = _0x563c84['shiftKey'],
        _0x593fb9[_0x2d6910 + 0x6] = _0x563c84['altKey'],
        _0x593fb9[_0x2d6910 + 0x7] = _0x563c84['metaKey'],
        _0x9a762d[_0x2d6910 * 0x2 + 0x10] = _0x563c84['button'],
        _0x9a762d[_0x2d6910 * 0x2 + 0x11] = _0x563c84['buttons'],
        _0x593fb9[_0x2d6910 + 0x9] = _0x563c84['movementX'],
        _0x593fb9[_0x2d6910 + 0xa] = _0x563c84['movementY'];
        var _0xe82469 = _0x52b8c0(_0x33c31a);
        _0x593fb9[_0x2d6910 + 0xb] = _0x563c84['clientX'] - _0xe82469['left'],
        _0x593fb9[_0x2d6910 + 0xc] = _0x563c84['clientY'] - _0xe82469['top'];
    }
    function _0x37fa8b(_0x413020, _0x459b18, _0x33b766, _0x33876c, _0x2e3b12, _0xbaf6fb, _0x69c8c7) {
        if (!_0x5bb742['mouseEvent'])
            _0x5bb742['mouseEvent'] = _0x214635(0x40);
        _0x413020 = _0x3c63b2(_0x413020);
        var _0x392721 = function(_0x24008f) {
            var _0x400274 = _0x24008f || event;
            _0x3eb1fd(_0x5bb742['mouseEvent'], _0x400274, _0x413020);
            if (function(_0x1e1c8b, _0x565e04, _0x4d208a) {
                return _0x4f2e95['apply'](null, [_0x33876c, _0x1e1c8b, _0x565e04, _0x4d208a]);
            }(_0x2e3b12, _0x5bb742['mouseEvent'], _0x459b18))
                _0x400274['preventDefault']();
        }
          , _0x4420e6 = {
            'target': _0x413020,
            'allowsDeferredCalls': _0xbaf6fb != 'mousemove' && _0xbaf6fb != 'mouseenter' && _0xbaf6fb != 'mouseleave',
            'eventTypeString': _0xbaf6fb,
            'callbackfunc': _0x33876c,
            'handlerFunc': _0x392721,
            'useCapture': _0x33b766
        };
        _0x5bb742['registerOrRemoveHandler'](_0x4420e6);
    }
    function _0x202a00(_0x522f0b, _0xdca870, _0x1c0c8c, _0x3e1be7, _0x3aa605) {
        return _0x37fa8b(_0x522f0b, _0xdca870, _0x1c0c8c, _0x3e1be7, 0x5, 'mousedown', _0x3aa605),
        0x0;
    }
    function _0x4aab61(_0x5e7f84, _0x5cc3ab, _0x3afa51, _0x31a174, _0x415f3f) {
        return _0x37fa8b(_0x5e7f84, _0x5cc3ab, _0x3afa51, _0x31a174, 0x8, 'mousemove', _0x415f3f),
        0x0;
    }
    function _0x57be8d(_0x1c97ce, _0x58916f, _0x28735a, _0x59bd0d, _0x485a33) {
        return _0x37fa8b(_0x1c97ce, _0x58916f, _0x28735a, _0x59bd0d, 0x6, 'mouseup', _0x485a33),
        0x0;
    }
    function _0xda117f(_0x36f38f) {
        var _0x5bd18c = document['pointerLockElement'] || document['mozPointerLockElement'] || document['webkitPointerLockElement'] || document['msPointerLockElement']
          , _0x34dccb = !!_0x5bd18c;
        _0x593fb9[_0x36f38f >> 0x2] = _0x34dccb;
        var _0x25a848 = _0x5bb742['getNodeNameForTarget'](_0x5bd18c)
          , _0x109335 = _0x5bd18c && _0x5bd18c['id'] ? _0x5bd18c['id'] : '';
        _0x430ff7(_0x25a848, _0x36f38f + 0x4, 0x80),
        _0x430ff7(_0x109335, _0x36f38f + 0x84, 0x80);
    }
    function _0x2135b5(_0x7af9e5, _0x38b5ff, _0x2ee07b, _0x19d4c1, _0x5bbc86, _0x4ddcd7, _0x36313d) {
        if (!_0x5bb742['pointerlockChangeEvent'])
            _0x5bb742['pointerlockChangeEvent'] = _0x214635(0x104);
        var _0x3774c8 = function(_0x1bf476) {
            var _0x489345 = _0x1bf476 || event
              , _0x3c9533 = _0x5bb742['pointerlockChangeEvent'];
            _0xda117f(_0x3c9533);
            if (function(_0x457819, _0x52f1e8, _0x14b919) {
                return _0x4f2e95['apply'](null, [_0x19d4c1, _0x457819, _0x52f1e8, _0x14b919]);
            }(_0x5bbc86, _0x3c9533, _0x38b5ff))
                _0x489345['preventDefault']();
        }
          , _0xddaeeb = {
            'target': _0x7af9e5,
            'eventTypeString': _0x4ddcd7,
            'callbackfunc': _0x19d4c1,
            'handlerFunc': _0x3774c8,
            'useCapture': _0x2ee07b
        };
        _0x5bb742['registerOrRemoveHandler'](_0xddaeeb);
    }
    function _0xcccecd(_0x41a307, _0x6abaa8, _0x1f1332, _0x135696, _0x41187d) {
        if (!document || !document['body'] || !document['body']['requestPointerLock'] && !document['body']['mozRequestPointerLock'] && !document['body']['webkitRequestPointerLock'] && !document['body']['msRequestPointerLock'])
            return -0x1;
        _0x41a307 = _0x3c63b2(_0x41a307);
        if (!_0x41a307)
            return -0x4;
        return _0x2135b5(_0x41a307, _0x6abaa8, _0x1f1332, _0x135696, 0x14, 'pointerlockchange', _0x41187d),
        _0x2135b5(_0x41a307, _0x6abaa8, _0x1f1332, _0x135696, 0x14, 'mozpointerlockchange', _0x41187d),
        _0x2135b5(_0x41a307, _0x6abaa8, _0x1f1332, _0x135696, 0x14, 'webkitpointerlockchange', _0x41187d),
        _0x2135b5(_0x41a307, _0x6abaa8, _0x1f1332, _0x135696, 0x14, 'mspointerlockchange', _0x41187d),
        0x0;
    }
    function _0x2442b9(_0x5adccc, _0x553ef0, _0x20d7d1, _0x2d6fd9, _0x56b4ef, _0x16e302, _0x22310a) {
        if (!_0x5bb742['touchEvent'])
            _0x5bb742['touchEvent'] = _0x214635(0x694);
        _0x5adccc = _0x3c63b2(_0x5adccc);
        var _0x2e88c0 = function(_0x18feed) {
            var _0x1367ff, _0x12533b = {}, _0x3d0a2d = _0x18feed['touches'];
            for (var _0x300241 = 0x0; _0x300241 < _0x3d0a2d['length']; ++_0x300241) {
                _0x1367ff = _0x3d0a2d[_0x300241],
                _0x1367ff['isChanged'] = _0x1367ff['onTarget'] = 0x0,
                _0x12533b[_0x1367ff['identifier']] = _0x1367ff;
            }
            for (var _0x300241 = 0x0; _0x300241 < _0x18feed['changedTouches']['length']; ++_0x300241) {
                _0x1367ff = _0x18feed['changedTouches'][_0x300241],
                _0x1367ff['isChanged'] = 0x1,
                _0x12533b[_0x1367ff['identifier']] = _0x1367ff;
            }
            for (var _0x300241 = 0x0; _0x300241 < _0x18feed['targetTouches']['length']; ++_0x300241) {
                _0x12533b[_0x18feed['targetTouches'][_0x300241]['identifier']]['onTarget'] = 0x1;
            }
            var _0x13ab8b = _0x5bb742['touchEvent']
              , _0x4654c0 = _0x13ab8b >> 0x2;
            _0x593fb9[_0x4654c0 + 0x1] = _0x18feed['ctrlKey'],
            _0x593fb9[_0x4654c0 + 0x2] = _0x18feed['shiftKey'],
            _0x593fb9[_0x4654c0 + 0x3] = _0x18feed['altKey'],
            _0x593fb9[_0x4654c0 + 0x4] = _0x18feed['metaKey'],
            _0x4654c0 += 0x5;
            var _0x2f57ab = _0x52b8c0(_0x5adccc)
              , _0x34e1f1 = 0x0;
            for (var _0x300241 in _0x12533b) {
                var _0x1367ff = _0x12533b[_0x300241];
                _0x593fb9[_0x4654c0 + 0x0] = _0x1367ff['identifier'],
                _0x593fb9[_0x4654c0 + 0x1] = _0x1367ff['screenX'],
                _0x593fb9[_0x4654c0 + 0x2] = _0x1367ff['screenY'],
                _0x593fb9[_0x4654c0 + 0x3] = _0x1367ff['clientX'],
                _0x593fb9[_0x4654c0 + 0x4] = _0x1367ff['clientY'],
                _0x593fb9[_0x4654c0 + 0x5] = _0x1367ff['pageX'],
                _0x593fb9[_0x4654c0 + 0x6] = _0x1367ff['pageY'],
                _0x593fb9[_0x4654c0 + 0x7] = _0x1367ff['isChanged'],
                _0x593fb9[_0x4654c0 + 0x8] = _0x1367ff['onTarget'],
                _0x593fb9[_0x4654c0 + 0x9] = _0x1367ff['clientX'] - _0x2f57ab['left'],
                _0x593fb9[_0x4654c0 + 0xa] = _0x1367ff['clientY'] - _0x2f57ab['top'],
                _0x4654c0 += 0xd;
                if (++_0x34e1f1 > 0x1f)
                    break;
            }
            _0x593fb9[_0x13ab8b >> 0x2] = _0x34e1f1;
            if (function(_0x11b069, _0x4f6faa, _0x3fef9d) {
                return _0x4f2e95['apply'](null, [_0x2d6fd9, _0x11b069, _0x4f6faa, _0x3fef9d]);
            }(_0x56b4ef, _0x13ab8b, _0x553ef0))
                _0x18feed['preventDefault']();
        }
          , _0x323950 = {
            'target': _0x5adccc,
            'allowsDeferredCalls': _0x16e302 == 'touchstart' || _0x16e302 == 'touchend',
            'eventTypeString': _0x16e302,
            'callbackfunc': _0x2d6fd9,
            'handlerFunc': _0x2e88c0,
            'useCapture': _0x20d7d1
        };
        _0x5bb742['registerOrRemoveHandler'](_0x323950);
    }
    function _0x754856(_0x49b1f3, _0x266ba7, _0x502b41, _0x593c20, _0x31754e) {
        return _0x2442b9(_0x49b1f3, _0x266ba7, _0x502b41, _0x593c20, 0x19, 'touchcancel', _0x31754e),
        0x0;
    }
    function _0xaaef7b(_0xdec455, _0x488369, _0x31e891, _0x4e82d, _0x2d26db) {
        return _0x2442b9(_0xdec455, _0x488369, _0x31e891, _0x4e82d, 0x17, 'touchend', _0x2d26db),
        0x0;
    }
    function _0xf0a182(_0xb7afe7, _0x42b494, _0x3c468, _0x38884f, _0x1197da) {
        return _0x2442b9(_0xb7afe7, _0x42b494, _0x3c468, _0x38884f, 0x18, 'touchmove', _0x1197da),
        0x0;
    }
    function _0x423c38(_0x2b5bd4, _0x39e367, _0x42f44d, _0x25eb7d, _0x1cf4f2) {
        return _0x2442b9(_0x2b5bd4, _0x39e367, _0x42f44d, _0x25eb7d, 0x16, 'touchstart', _0x1cf4f2),
        0x0;
    }
    function _0x1f5b89(_0x2beb6e, _0x54113a, _0x18aa7b, _0xe0283, _0x1b544c, _0x465962, _0x5d2e54) {
        if (!_0x5bb742['wheelEvent'])
            _0x5bb742['wheelEvent'] = _0x214635(0x60);
        var _0x12efbc = function(_0x3ab936) {
            var _0x5c2479 = _0x3ab936 || event
              , _0x33e7a0 = _0x5bb742['wheelEvent'];
            _0x3eb1fd(_0x33e7a0, _0x5c2479, _0x2beb6e),
            _0x2a3d2d[_0x33e7a0 + 0x40 >> 0x3] = _0x5c2479['deltaX'],
            _0x2a3d2d[_0x33e7a0 + 0x48 >> 0x3] = _0x5c2479['deltaY'],
            _0x2a3d2d[_0x33e7a0 + 0x50 >> 0x3] = _0x5c2479['deltaZ'],
            _0x593fb9[_0x33e7a0 + 0x58 >> 0x2] = _0x5c2479['deltaMode'];
            if (function(_0x2a4f63, _0x5f0826, _0x316e28) {
                return _0x4f2e95['apply'](null, [_0xe0283, _0x2a4f63, _0x5f0826, _0x316e28]);
            }(_0x1b544c, _0x33e7a0, _0x54113a))
                _0x5c2479['preventDefault']();
        }
          , _0x526eff = {
            'target': _0x2beb6e,
            'allowsDeferredCalls': !![],
            'eventTypeString': _0x465962,
            'callbackfunc': _0xe0283,
            'handlerFunc': _0x12efbc,
            'useCapture': _0x18aa7b
        };
        _0x5bb742['registerOrRemoveHandler'](_0x526eff);
    }
    function _0x2af8ee(_0x627097, _0x3f6054, _0x4dc4f1, _0x40dabd, _0x4c931e) {
        return _0x627097 = _0x3c63b2(_0x627097),
        typeof _0x627097['onwheel'] !== 'undefined' ? (_0x1f5b89(_0x627097, _0x3f6054, _0x4dc4f1, _0x40dabd, 0x9, 'wheel', _0x4c931e),
        0x0) : -0x1;
    }
    function _0x58bf6d(_0x57aa05) {
        var _0x14a50e = _0x15c469();
        while (_0x15c469() - _0x14a50e < _0x57aa05) {}
    }
    function _0xfed0eb(_0x31c502) {
        var _0x9bd1f2 = _0x31c502['getExtension']('ANGLE_instanced_arrays');
        if (_0x9bd1f2)
            return _0x31c502['vertexAttribDivisor'] = function(_0x285049, _0x19fd2f) {
                _0x9bd1f2['vertexAttribDivisorANGLE'](_0x285049, _0x19fd2f);
            }
            ,
            _0x31c502['drawArraysInstanced'] = function(_0x296dfd, _0x1b9606, _0x33e57c, _0x36fc0b) {
                _0x9bd1f2['drawArraysInstancedANGLE'](_0x296dfd, _0x1b9606, _0x33e57c, _0x36fc0b);
            }
            ,
            _0x31c502['drawElementsInstanced'] = function(_0x3a289b, _0x19b8dc, _0x4a8f10, _0x129655, _0x1dbf75) {
                _0x9bd1f2['drawElementsInstancedANGLE'](_0x3a289b, _0x19b8dc, _0x4a8f10, _0x129655, _0x1dbf75);
            }
            ,
            0x1;
    }
    function _0x1eb851(_0x1cbc98) {
        var _0x56a441 = _0x1cbc98['getExtension']('OES_vertex_array_object');
        if (_0x56a441)
            return _0x1cbc98['createVertexArray'] = function() {
                return _0x56a441['createVertexArrayOES']();
            }
            ,
            _0x1cbc98['deleteVertexArray'] = function(_0x247d50) {
                _0x56a441['deleteVertexArrayOES'](_0x247d50);
            }
            ,
            _0x1cbc98['bindVertexArray'] = function(_0x1ffac0) {
                _0x56a441['bindVertexArrayOES'](_0x1ffac0);
            }
            ,
            _0x1cbc98['isVertexArray'] = function(_0x3e89a0) {
                return _0x56a441['isVertexArrayOES'](_0x3e89a0);
            }
            ,
            0x1;
    }
    function _0x36e2f3(_0x1b6d5c) {
        var _0x52d3d0 = _0x1b6d5c['getExtension']('WEBGL_draw_buffers');
        if (_0x52d3d0)
            return _0x1b6d5c['drawBuffers'] = function(_0x1fd8f1, _0x4335b0) {
                _0x52d3d0['drawBuffersWEBGL'](_0x1fd8f1, _0x4335b0);
            }
            ,
            0x1;
    }
    function _0x304389(_0x22d1d7) {
        return !!(_0x22d1d7['dibvbi'] = _0x22d1d7['getExtension']('WEBGL_draw_instanced_base_vertex_base_instance'));
    }
    function _0x2c0e3e(_0x19a9f0) {
        return !!(_0x19a9f0['mdibvbi'] = _0x19a9f0['getExtension']('WEBGL_multi_draw_instanced_base_vertex_base_instance'));
    }
    function _0x5f44e7(_0x2a4d13) {
        return !!(_0x2a4d13['multiDrawWebgl'] = _0x2a4d13['getExtension']('WEBGL_multi_draw'));
    }
    var _0x353c88 = {
        'counter': 0x1,
        'buffers': [],
        'mappedBuffers': {},
        'programs': [],
        'framebuffers': [],
        'renderbuffers': [],
        'textures': [],
        'shaders': [],
        'vaos': [],
        'contexts': [],
        'offscreenCanvases': {},
        'queries': [],
        'samplers': [],
        'transformFeedbacks': [],
        'syncs': [],
        'byteSizeByTypeRoot': 0x1400,
        'byteSizeByType': [0x1, 0x1, 0x2, 0x2, 0x4, 0x4, 0x4, 0x2, 0x3, 0x4, 0x8],
        'stringCache': {},
        'stringiCache': {},
        'unpackAlignment': 0x4,
        'recordError': function _0x4d1409(_0x2766df) {
            !_0x353c88['lastError'] && (_0x353c88['lastError'] = _0x2766df);
        },
        'getNewId': function(_0x4caba5) {
            var _0x153875 = _0x353c88['counter']++;
            for (var _0x94748f = _0x4caba5['length']; _0x94748f < _0x153875; _0x94748f++) {
                _0x4caba5[_0x94748f] = null;
            }
            return _0x153875;
        },
        'MAX_TEMP_BUFFER_SIZE': 0x200000,
        'numTempVertexBuffersPerSize': 0x40,
        'log2ceilLookup': function(_0x2298f5) {
            return 0x20 - Math['clz32'](_0x2298f5 === 0x0 ? 0x0 : _0x2298f5 - 0x1);
        },
        'generateTempBuffers': function(_0x4d0a92, _0x57c62a) {
            var _0x171b07 = _0x353c88['log2ceilLookup'](_0x353c88['MAX_TEMP_BUFFER_SIZE']);
            _0x57c62a['tempVertexBufferCounters1'] = [],
            _0x57c62a['tempVertexBufferCounters2'] = [],
            _0x57c62a['tempVertexBufferCounters1']['length'] = _0x57c62a['tempVertexBufferCounters2']['length'] = _0x171b07 + 0x1,
            _0x57c62a['tempVertexBuffers1'] = [],
            _0x57c62a['tempVertexBuffers2'] = [],
            _0x57c62a['tempVertexBuffers1']['length'] = _0x57c62a['tempVertexBuffers2']['length'] = _0x171b07 + 0x1,
            _0x57c62a['tempIndexBuffers'] = [],
            _0x57c62a['tempIndexBuffers']['length'] = _0x171b07 + 0x1;
            for (var _0x38e39a = 0x0; _0x38e39a <= _0x171b07; ++_0x38e39a) {
                _0x57c62a['tempIndexBuffers'][_0x38e39a] = null,
                _0x57c62a['tempVertexBufferCounters1'][_0x38e39a] = _0x57c62a['tempVertexBufferCounters2'][_0x38e39a] = 0x0;
                var _0x528e8b = _0x353c88['numTempVertexBuffersPerSize'];
                _0x57c62a['tempVertexBuffers1'][_0x38e39a] = [],
                _0x57c62a['tempVertexBuffers2'][_0x38e39a] = [];
                var _0x28f508 = _0x57c62a['tempVertexBuffers1'][_0x38e39a]
                  , _0x33c969 = _0x57c62a['tempVertexBuffers2'][_0x38e39a];
                _0x28f508['length'] = _0x33c969['length'] = _0x528e8b;
                for (var _0x3c40fc = 0x0; _0x3c40fc < _0x528e8b; ++_0x3c40fc) {
                    _0x28f508[_0x3c40fc] = _0x33c969[_0x3c40fc] = null;
                }
            }
            if (_0x4d0a92) {
                _0x57c62a['tempQuadIndexBuffer'] = _0x264078['createBuffer'](),
                _0x57c62a['GLctx']['bindBuffer'](0x8893, _0x57c62a['tempQuadIndexBuffer']);
                var _0x7cab1 = _0x353c88['MAX_TEMP_BUFFER_SIZE'] >> 0x1
                  , _0x27bc8a = new Uint16Array(_0x7cab1)
                  , _0x38e39a = 0x0
                  , _0x3bd317 = 0x0;
                while (0x1) {
                    _0x27bc8a[_0x38e39a++] = _0x3bd317;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x27bc8a[_0x38e39a++] = _0x3bd317 + 0x1;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x27bc8a[_0x38e39a++] = _0x3bd317 + 0x2;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x27bc8a[_0x38e39a++] = _0x3bd317;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x27bc8a[_0x38e39a++] = _0x3bd317 + 0x2;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x27bc8a[_0x38e39a++] = _0x3bd317 + 0x3;
                    if (_0x38e39a >= _0x7cab1)
                        break;
                    _0x3bd317 += 0x4;
                }
                _0x57c62a['GLctx']['bufferData'](0x8893, _0x27bc8a, 0x88e4),
                _0x57c62a['GLctx']['bindBuffer'](0x8893, null);
            }
        },
        'getTempVertexBuffer': function _0x2bec68(_0x408f57) {
            var _0x28ee80 = _0x353c88['log2ceilLookup'](_0x408f57)
              , _0x2d5f15 = _0x353c88['currentContext']['tempVertexBuffers1'][_0x28ee80]
              , _0x1918c4 = _0x353c88['currentContext']['tempVertexBufferCounters1'][_0x28ee80];
            _0x353c88['currentContext']['tempVertexBufferCounters1'][_0x28ee80] = _0x353c88['currentContext']['tempVertexBufferCounters1'][_0x28ee80] + 0x1 & _0x353c88['numTempVertexBuffersPerSize'] - 0x1;
            var _0xb65330 = _0x2d5f15[_0x1918c4];
            if (_0xb65330)
                return _0xb65330;
            var _0x4249db = _0x264078['getParameter'](0x8894);
            return _0x2d5f15[_0x1918c4] = _0x264078['createBuffer'](),
            _0x264078['bindBuffer'](0x8892, _0x2d5f15[_0x1918c4]),
            _0x264078['bufferData'](0x8892, 0x1 << _0x28ee80, 0x88e8),
            _0x264078['bindBuffer'](0x8892, _0x4249db),
            _0x2d5f15[_0x1918c4];
        },
        'getTempIndexBuffer': function _0x400851(_0x5e7936) {
            var _0x23a789 = _0x353c88['log2ceilLookup'](_0x5e7936)
              , _0x508e3a = _0x353c88['currentContext']['tempIndexBuffers'][_0x23a789];
            if (_0x508e3a)
                return _0x508e3a;
            var _0x4ef57d = _0x264078['getParameter'](0x8895);
            return _0x353c88['currentContext']['tempIndexBuffers'][_0x23a789] = _0x264078['createBuffer'](),
            _0x264078['bindBuffer'](0x8893, _0x353c88['currentContext']['tempIndexBuffers'][_0x23a789]),
            _0x264078['bufferData'](0x8893, 0x1 << _0x23a789, 0x88e8),
            _0x264078['bindBuffer'](0x8893, _0x4ef57d),
            _0x353c88['currentContext']['tempIndexBuffers'][_0x23a789];
        },
        'newRenderingFrameStarted': function _0x6e5368() {
            if (!_0x353c88['currentContext'])
                return;
            var _0x50fc6e = _0x353c88['currentContext']['tempVertexBuffers1'];
            _0x353c88['currentContext']['tempVertexBuffers1'] = _0x353c88['currentContext']['tempVertexBuffers2'],
            _0x353c88['currentContext']['tempVertexBuffers2'] = _0x50fc6e,
            _0x50fc6e = _0x353c88['currentContext']['tempVertexBufferCounters1'],
            _0x353c88['currentContext']['tempVertexBufferCounters1'] = _0x353c88['currentContext']['tempVertexBufferCounters2'],
            _0x353c88['currentContext']['tempVertexBufferCounters2'] = _0x50fc6e;
            var _0x1c8b19 = _0x353c88['log2ceilLookup'](_0x353c88['MAX_TEMP_BUFFER_SIZE']);
            for (var _0x5ddb70 = 0x0; _0x5ddb70 <= _0x1c8b19; ++_0x5ddb70) {
                _0x353c88['currentContext']['tempVertexBufferCounters1'][_0x5ddb70] = 0x0;
            }
        },
        'getSource': function(_0xb4fd38, _0x473778, _0xb2718, _0x14809e) {
            var _0x2fa02c = '';
            for (var _0x3c7fa9 = 0x0; _0x3c7fa9 < _0x473778; ++_0x3c7fa9) {
                var _0x43a517 = _0x14809e ? _0x593fb9[_0x14809e + _0x3c7fa9 * 0x4 >> 0x2] : -0x1;
                _0x2fa02c += _0x46211(_0x593fb9[_0xb2718 + _0x3c7fa9 * 0x4 >> 0x2], _0x43a517 < 0x0 ? undefined : _0x43a517);
            }
            return _0x2fa02c;
        },
        'calcBufLength': function _0x40f8a7(_0x3c74bc, _0x1f0129, _0x87d1dd, _0x54e27c) {
            if (_0x87d1dd > 0x0)
                return _0x54e27c * _0x87d1dd;
            var _0x6f7c1f = _0x353c88['byteSizeByType'][_0x1f0129 - _0x353c88['byteSizeByTypeRoot']];
            return _0x3c74bc * _0x6f7c1f * _0x54e27c;
        },
        'usedTempBuffers': [],
        'preDrawHandleClientVertexAttribBindings': function _0x886d3f(_0x220a58) {
            _0x353c88['resetBufferBinding'] = ![];
            for (var _0x496b57 = 0x0; _0x496b57 < _0x353c88['currentContext']['maxVertexAttribs']; ++_0x496b57) {
                var _0xb6a627 = _0x353c88['currentContext']['clientBuffers'][_0x496b57];
                if (!_0xb6a627['clientside'] || !_0xb6a627['enabled'])
                    continue;
                _0x353c88['resetBufferBinding'] = !![];
                var _0x3a960a = _0x353c88['calcBufLength'](_0xb6a627['size'], _0xb6a627['type'], _0xb6a627['stride'], _0x220a58)
                  , _0x37dac3 = _0x353c88['getTempVertexBuffer'](_0x3a960a);
                _0x264078['bindBuffer'](0x8892, _0x37dac3),
                _0x264078['bufferSubData'](0x8892, 0x0, _0x2ac27b['subarray'](_0xb6a627['ptr'], _0xb6a627['ptr'] + _0x3a960a)),
                _0xb6a627['vertexAttribPointerAdaptor']['call'](_0x264078, _0x496b57, _0xb6a627['size'], _0xb6a627['type'], _0xb6a627['normalized'], _0xb6a627['stride'], 0x0);
            }
        },
        'postDrawHandleClientVertexAttribBindings': function _0x59a8c4() {
            _0x353c88['resetBufferBinding'] && _0x264078['bindBuffer'](0x8892, _0x353c88['buffers'][_0x264078['currentArrayBufferBinding']]);
        },
        'createContext': function(_0x3bc0df, _0x40f9ce) {
            !_0x3bc0df['getContextSafariWebGL2Fixed'] && (_0x3bc0df['getContextSafariWebGL2Fixed'] = _0x3bc0df['getContext'],
            _0x3bc0df['getContext'] = function(_0x2a59a9, _0x3c95c8) {
                var _0x357f4d = _0x3bc0df['getContextSafariWebGL2Fixed'](_0x2a59a9, _0x3c95c8);
                return _0x2a59a9 == 'webgl' == _0x357f4d instanceof WebGLRenderingContext ? _0x357f4d : null;
            }
            );
            var _0x5cb4b2 = _0x40f9ce['majorVersion'] > 0x1 ? _0x3bc0df['getContext']('webgl2', _0x40f9ce) : _0x3bc0df['getContext']('webgl', _0x40f9ce);
            if (!_0x5cb4b2)
                return 0x0;
            var _0x1a3549 = _0x353c88['registerContext'](_0x5cb4b2, _0x40f9ce);
            return _0x1a3549;
        },
        'registerContext': function(_0x271a4c, _0x425247) {
            var _0x42f3c1 = _0x353c88['getNewId'](_0x353c88['contexts'])
              , _0x281c18 = {
                'handle': _0x42f3c1,
                'attributes': _0x425247,
                'version': _0x425247['majorVersion'],
                'GLctx': _0x271a4c
            };
            if (_0x271a4c['canvas'])
                _0x271a4c['canvas']['GLctxObject'] = _0x281c18;
            _0x353c88['contexts'][_0x42f3c1] = _0x281c18;
            (typeof _0x425247['enableExtensionsByDefault'] === 'undefined' || _0x425247['enableExtensionsByDefault']) && _0x353c88['initExtensions'](_0x281c18);
            _0x281c18['maxVertexAttribs'] = _0x281c18['GLctx']['getParameter'](0x8869),
            _0x281c18['clientBuffers'] = [];
            for (var _0x175276 = 0x0; _0x175276 < _0x281c18['maxVertexAttribs']; _0x175276++) {
                _0x281c18['clientBuffers'][_0x175276] = {
                    'enabled': ![],
                    'clientside': ![],
                    'size': 0x0,
                    'type': 0x0,
                    'normalized': 0x0,
                    'stride': 0x0,
                    'ptr': 0x0,
                    'vertexAttribPointerAdaptor': null
                };
            }
            return _0x353c88['generateTempBuffers'](![], _0x281c18),
            _0x42f3c1;
        },
        'makeContextCurrent': function(_0x52cd30) {
            return _0x353c88['currentContext'] = _0x353c88['contexts'][_0x52cd30],
            _0x1455c0['ctx'] = _0x264078 = _0x353c88['currentContext'] && _0x353c88['currentContext']['GLctx'],
            !(_0x52cd30 && !_0x264078);
        },
        'getContext': function(_0x4e22a0) {
            return _0x353c88['contexts'][_0x4e22a0];
        },
        'deleteContext': function(_0xcb8dd7) {
            if (_0x353c88['currentContext'] === _0x353c88['contexts'][_0xcb8dd7])
                _0x353c88['currentContext'] = null;
            if (typeof _0x5bb742 === 'object')
                _0x5bb742['removeAllHandlersOnTarget'](_0x353c88['contexts'][_0xcb8dd7]['GLctx']['canvas']);
            if (_0x353c88['contexts'][_0xcb8dd7] && _0x353c88['contexts'][_0xcb8dd7]['GLctx']['canvas'])
                _0x353c88['contexts'][_0xcb8dd7]['GLctx']['canvas']['GLctxObject'] = undefined;
            _0x353c88['contexts'][_0xcb8dd7] = null;
        },
        'initExtensions': function(_0x1a069a) {
            if (!_0x1a069a)
                _0x1a069a = _0x353c88['currentContext'];
            if (_0x1a069a['initExtensionsDone'])
                return;
            _0x1a069a['initExtensionsDone'] = !![];
            var _0x41f07d = _0x1a069a['GLctx'];
            _0xfed0eb(_0x41f07d),
            _0x1eb851(_0x41f07d),
            _0x36e2f3(_0x41f07d),
            _0x304389(_0x41f07d),
            _0x2c0e3e(_0x41f07d);
            _0x1a069a['version'] >= 0x2 && (_0x41f07d['disjointTimerQueryExt'] = _0x41f07d['getExtension']('EXT_disjoint_timer_query_webgl2'));
            (_0x1a069a['version'] < 0x2 || !_0x41f07d['disjointTimerQueryExt']) && (_0x41f07d['disjointTimerQueryExt'] = _0x41f07d['getExtension']('EXT_disjoint_timer_query'));
            _0x5f44e7(_0x41f07d);
            var _0x361772 = _0x41f07d['getSupportedExtensions']() || [];
            _0x361772['forEach'](function(_0x431172) {
                !_0x431172['includes']('lose_context') && !_0x431172['includes']('debug') && _0x41f07d['getExtension'](_0x431172);
            });
        }
    }
      , _0x443e7b = ['default', 'low-power', 'high-performance'];
    function _0x410f97(_0x4934c3, _0x153552) {
        var _0x20e5d9 = _0x153552 >> 0x2
          , _0x53ed97 = _0x593fb9[_0x20e5d9 + (0x18 >> 0x2)]
          , _0x4c2558 = {
            'alpha': !!_0x593fb9[_0x20e5d9 + (0x0 >> 0x2)],
            'depth': !!_0x593fb9[_0x20e5d9 + (0x4 >> 0x2)],
            'stencil': !!_0x593fb9[_0x20e5d9 + (0x8 >> 0x2)],
            'antialias': !!_0x593fb9[_0x20e5d9 + (0xc >> 0x2)],
            'premultipliedAlpha': !!_0x593fb9[_0x20e5d9 + (0x10 >> 0x2)],
            'preserveDrawingBuffer': !!_0x593fb9[_0x20e5d9 + (0x14 >> 0x2)],
            'powerPreference': _0x443e7b[_0x53ed97],
            'failIfMajorPerformanceCaveat': !!_0x593fb9[_0x20e5d9 + (0x1c >> 0x2)],
            'majorVersion': _0x593fb9[_0x20e5d9 + (0x20 >> 0x2)],
            'minorVersion': _0x593fb9[_0x20e5d9 + (0x24 >> 0x2)],
            'enableExtensionsByDefault': _0x593fb9[_0x20e5d9 + (0x28 >> 0x2)],
            'explicitSwapControl': _0x593fb9[_0x20e5d9 + (0x2c >> 0x2)],
            'proxyContextToMainThread': _0x593fb9[_0x20e5d9 + (0x30 >> 0x2)],
            'renderViaOffscreenBackBuffer': _0x593fb9[_0x20e5d9 + (0x34 >> 0x2)]
        }
          , _0x348100 = _0x5454c2(_0x4934c3);
        if (!_0x348100)
            return 0x0;
        if (_0x4c2558['explicitSwapControl'])
            return 0x0;
        var _0x5bfdd9 = _0x353c88['createContext'](_0x348100, _0x4c2558);
        return _0x5bfdd9;
    }
    function _0x5702cf(_0x39e4f1, _0x3c4e97) {
        return _0x410f97(_0x39e4f1, _0x3c4e97);
    }
    function _0x70973() {
        return _0x353c88['currentContext'] ? _0x353c88['currentContext']['handle'] : 0x0;
    }
    function _0x52bf21() {
        return _0x70973();
    }
    _0x1455c0['_emscripten_webgl_get_current_context'] = _0x52bf21;
    function _0x11df5a(_0x3fb0d0) {
        var _0x507c74 = _0x353c88['makeContextCurrent'](_0x3fb0d0);
        return _0x507c74 ? 0x0 : -0x5;
    }
    _0x1455c0['_emscripten_webgl_make_context_current'] = _0x11df5a;
    function _0x2cf0bb(_0x69b206) {
        if (_0x353c88['currentContext'] == _0x69b206)
            _0x353c88['currentContext'] = 0x0;
        _0x353c88['deleteContext'](_0x69b206);
    }
    function _0x1046da(_0x2a13e2, _0x5bd557) {
        var _0x33dff4 = _0x353c88['getContext'](_0x2a13e2)
          , _0x3e9aab = _0x46211(_0x5bd557);
        if (_0x3e9aab['startsWith']('GL_'))
            _0x3e9aab = _0x3e9aab['substr'](0x3);
        if (_0x3e9aab == 'ANGLE_instanced_arrays')
            _0xfed0eb(_0x264078);
        if (_0x3e9aab == 'OES_vertex_array_object')
            _0x1eb851(_0x264078);
        if (_0x3e9aab == 'WEBGL_draw_buffers')
            _0x36e2f3(_0x264078);
        if (_0x3e9aab == 'WEBGL_draw_instanced_base_vertex_base_instance')
            _0x304389(_0x264078);
        if (_0x3e9aab == 'WEBGL_multi_draw_instanced_base_vertex_base_instance')
            _0x2c0e3e(_0x264078);
        if (_0x3e9aab == 'WEBGL_multi_draw')
            _0x5f44e7(_0x264078);
        var _0x486a64 = _0x33dff4['GLctx']['getExtension'](_0x3e9aab);
        return !!_0x486a64;
    }
    function _0x44fafe(_0x53e779) {
        var _0x2dee91 = _0x53e779 >> 0x2;
        for (var _0x44b526 = 0x0; _0x44b526 < 0x38 >> 0x2; ++_0x44b526) {
            _0x593fb9[_0x2dee91 + _0x44b526] = 0x0;
        }
        _0x593fb9[_0x2dee91 + (0x0 >> 0x2)] = _0x593fb9[_0x2dee91 + (0x4 >> 0x2)] = _0x593fb9[_0x2dee91 + (0xc >> 0x2)] = _0x593fb9[_0x2dee91 + (0x10 >> 0x2)] = _0x593fb9[_0x2dee91 + (0x20 >> 0x2)] = _0x593fb9[_0x2dee91 + (0x28 >> 0x2)] = 0x1;
    }
    var _0x372ade = {};
    function _0xdb9e41() {
        return _0x3b4a68 || './this.program';
    }
    function _0x53a69e() {
        if (!_0x53a69e['strings']) {
            var _0x13fcc1 = (typeof navigator === 'object' && navigator['languages'] && navigator['languages'][0x0] || 'C')['replace']('-', '_') + '.UTF-8'
              , _0x696146 = {
                'USER': 'web_user',
                'LOGNAME': 'web_user',
                'PATH': '/',
                'PWD': '/',
                'HOME': '/home/web_user',
                'LANG': _0x13fcc1,
                '_': _0xdb9e41()
            };
            for (var _0x5d7619 in _0x372ade) {
                _0x696146[_0x5d7619] = _0x372ade[_0x5d7619];
            }
            var _0x5ba2dd = [];
            for (var _0x5d7619 in _0x696146) {
                _0x5ba2dd['push'](_0x5d7619 + '=' + _0x696146[_0x5d7619]);
            }
            _0x53a69e['strings'] = _0x5ba2dd;
        }
        return _0x53a69e['strings'];
    }
    function _0x4c1ea0(_0x5e1daa, _0x2a85c2) {
        try {
            var _0x4b4fe1 = 0x0;
            return _0x53a69e()['forEach'](function(_0x4e8a84, _0x3e0f5f) {
                var _0x1cf26b = _0x2a85c2 + _0x4b4fe1;
                _0x593fb9[_0x5e1daa + _0x3e0f5f * 0x4 >> 0x2] = _0x1cf26b,
                _0x2ad138(_0x4e8a84, _0x1cf26b),
                _0x4b4fe1 += _0x4e8a84['length'] + 0x1;
            }),
            0x0;
        } catch (_0x40b3e5) {
            if (typeof _0x23c512 === 'undefined' || !(_0x40b3e5 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x40b3e5);
            return _0x40b3e5['errno'];
        }
    }
    function _0x4892dd(_0x4e52f1, _0x365424) {
        try {
            var _0xf9f206 = _0x53a69e();
            _0x593fb9[_0x4e52f1 >> 0x2] = _0xf9f206['length'];
            var _0x5a98b0 = 0x0;
            return _0xf9f206['forEach'](function(_0x437ded) {
                _0x5a98b0 += _0x437ded['length'] + 0x1;
            }),
            _0x593fb9[_0x365424 >> 0x2] = _0x5a98b0,
            0x0;
        } catch (_0x3f8a81) {
            if (typeof _0x23c512 === 'undefined' || !(_0x3f8a81 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x3f8a81);
            return _0x3f8a81['errno'];
        }
    }
    function _0xb1d24d(_0x5cb865) {
        try {
            var _0x4c64b0 = _0x5c83f1['getStreamFromFD'](_0x5cb865);
            return _0x23c512['close'](_0x4c64b0),
            0x0;
        } catch (_0x355428) {
            if (typeof _0x23c512 === 'undefined' || !(_0x355428 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x355428);
            return _0x355428['errno'];
        }
    }
    function _0x538eee(_0x4f2805, _0x197abc) {
        try {
            var _0x3140f9 = _0x5c83f1['getStreamFromFD'](_0x4f2805)
              , _0x16b108 = _0x3140f9['tty'] ? 0x2 : _0x23c512['isDir'](_0x3140f9['mode']) ? 0x3 : _0x23c512['isLink'](_0x3140f9['mode']) ? 0x7 : 0x4;
            return _0x10882b[_0x197abc >> 0x0] = _0x16b108,
            0x0;
        } catch (_0x1221eb) {
            if (typeof _0x23c512 === 'undefined' || !(_0x1221eb instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x1221eb);
            return _0x1221eb['errno'];
        }
    }
    function _0x515474(_0x489b30, _0x96bd9d, _0x518196, _0x591d53) {
        try {
            var _0x1e51a0 = _0x5c83f1['getStreamFromFD'](_0x489b30)
              , _0x621dc0 = _0x5c83f1['doReadv'](_0x1e51a0, _0x96bd9d, _0x518196);
            return _0x593fb9[_0x591d53 >> 0x2] = _0x621dc0,
            0x0;
        } catch (_0x46edae) {
            if (typeof _0x23c512 === 'undefined' || !(_0x46edae instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x46edae);
            return _0x46edae['errno'];
        }
    }
    function _0x43c9a1(_0x62cf8, _0x281d91, _0x429f8a, _0x1fa2a0, _0x1d2061) {
        try {
            var _0x21acc0 = _0x5c83f1['getStreamFromFD'](_0x62cf8)
              , _0x3e25d7 = 0x100000000
              , _0xaa2760 = _0x429f8a * _0x3e25d7 + (_0x281d91 >>> 0x0)
              , _0x2e0022 = 0x20000000000000;
            if (_0xaa2760 <= -_0x2e0022 || _0xaa2760 >= _0x2e0022)
                return -0x3d;
            _0x23c512['llseek'](_0x21acc0, _0xaa2760, _0x1fa2a0),
            (_0x27868b = [_0x21acc0['position'] >>> 0x0, (_0x1f09fe = _0x21acc0['position'],
            +Math['abs'](_0x1f09fe) >= 0x1 ? _0x1f09fe > 0x0 ? (Math['min'](+Math['floor'](_0x1f09fe / 0x100000000), 0xffffffff) | 0x0) >>> 0x0 : ~~+Math['ceil']((_0x1f09fe - +(~~_0x1f09fe >>> 0x0)) / 0x100000000) >>> 0x0 : 0x0)],
            _0x593fb9[_0x1d2061 >> 0x2] = _0x27868b[0x0],
            _0x593fb9[_0x1d2061 + 0x4 >> 0x2] = _0x27868b[0x1]);
            if (_0x21acc0['getdents'] && _0xaa2760 === 0x0 && _0x1fa2a0 === 0x0)
                _0x21acc0['getdents'] = null;
            return 0x0;
        } catch (_0x326dca) {
            if (typeof _0x23c512 === 'undefined' || !(_0x326dca instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x326dca);
            return _0x326dca['errno'];
        }
    }
    function _0x88da3b(_0x4bd2de, _0xfb63f, _0x44a545, _0x2defe7) {
        try {
            var _0x561648 = _0x5c83f1['getStreamFromFD'](_0x4bd2de)
              , _0x11f813 = _0x5c83f1['doWritev'](_0x561648, _0xfb63f, _0x44a545);
            return _0x593fb9[_0x2defe7 >> 0x2] = _0x11f813,
            0x0;
        } catch (_0x5ce583) {
            if (typeof _0x23c512 === 'undefined' || !(_0x5ce583 instanceof _0x23c512['ErrnoError']))
                _0x26724f(_0x5ce583);
            return _0x5ce583['errno'];
        }
    }
    function _0x21eeb6(_0x586c78, _0x7ee3ae) {
        return 0x0;
    }
    function _0x23337f() {
        return _0x391cb1();
    }
    function _0x4ff824(_0x117cc9, _0x553c0a, _0x4479c1, _0x1221e8) {
        var _0x5d3ced = 0x0, _0x7826db = 0x0, _0x704407 = 0x0, _0x5542c7 = 0x0, _0xb44bb5 = 0x0, _0x1673d8 = 0x0, _0xd6ab7a;
        function _0x13e6b2(_0x1c79e8, _0x3af452, _0x40b719, _0x42942e, _0x2f28dd, _0x1ef9c1) {
            var _0x15fe9a, _0x5ea7c2, _0x1d6a04, _0x23680e;
            return _0x5ea7c2 = _0x1c79e8 === 0xa ? 0x1c : 0x10,
            _0x2f28dd = _0x1c79e8 === 0xa ? _0x3c07fa(_0x2f28dd) : _0x20ec37(_0x2f28dd),
            _0x15fe9a = _0x214635(_0x5ea7c2),
            _0x23680e = _0x28fdd5(_0x15fe9a, _0x1c79e8, _0x2f28dd, _0x1ef9c1),
            _0x51a343(!_0x23680e),
            _0x1d6a04 = _0x214635(0x20),
            _0x593fb9[_0x1d6a04 + 0x4 >> 0x2] = _0x1c79e8,
            _0x593fb9[_0x1d6a04 + 0x8 >> 0x2] = _0x3af452,
            _0x593fb9[_0x1d6a04 + 0xc >> 0x2] = _0x40b719,
            _0x593fb9[_0x1d6a04 + 0x18 >> 0x2] = _0x42942e,
            _0x593fb9[_0x1d6a04 + 0x14 >> 0x2] = _0x15fe9a,
            _0x1c79e8 === 0xa ? _0x593fb9[_0x1d6a04 + 0x10 >> 0x2] = 0x1c : _0x593fb9[_0x1d6a04 + 0x10 >> 0x2] = 0x10,
            _0x593fb9[_0x1d6a04 + 0x1c >> 0x2] = 0x0,
            _0x1d6a04;
        }
        _0x4479c1 && (_0x704407 = _0x593fb9[_0x4479c1 >> 0x2],
        _0x5542c7 = _0x593fb9[_0x4479c1 + 0x4 >> 0x2],
        _0xb44bb5 = _0x593fb9[_0x4479c1 + 0x8 >> 0x2],
        _0x1673d8 = _0x593fb9[_0x4479c1 + 0xc >> 0x2]);
        _0xb44bb5 && !_0x1673d8 && (_0x1673d8 = _0xb44bb5 === 0x2 ? 0x11 : 0x6);
        !_0xb44bb5 && _0x1673d8 && (_0xb44bb5 = _0x1673d8 === 0x11 ? 0x2 : 0x1);
        _0x1673d8 === 0x0 && (_0x1673d8 = 0x6);
        _0xb44bb5 === 0x0 && (_0xb44bb5 = 0x1);
        if (!_0x117cc9 && !_0x553c0a)
            return -0x2;
        if (_0x704407 & ~(0x1 | 0x2 | 0x4 | 0x400 | 0x8 | 0x10 | 0x20))
            return -0x1;
        if (_0x4479c1 !== 0x0 && _0x593fb9[_0x4479c1 >> 0x2] & 0x2 && !_0x117cc9)
            return -0x1;
        if (_0x704407 & 0x20)
            return -0x2;
        if (_0xb44bb5 !== 0x0 && _0xb44bb5 !== 0x1 && _0xb44bb5 !== 0x2)
            return -0x7;
        if (_0x5542c7 !== 0x0 && _0x5542c7 !== 0x2 && _0x5542c7 !== 0xa)
            return -0x6;
        if (_0x553c0a) {
            _0x553c0a = _0x46211(_0x553c0a),
            _0x7826db = parseInt(_0x553c0a, 0xa);
            if (isNaN(_0x7826db)) {
                if (_0x704407 & 0x400)
                    return -0x2;
                return -0x8;
            }
        }
        if (!_0x117cc9)
            return _0x5542c7 === 0x0 && (_0x5542c7 = 0x2),
            (_0x704407 & 0x1) === 0x0 && (_0x5542c7 === 0x2 ? _0x5d3ced = _0x33e58f(0x7f000001) : _0x5d3ced = [0x0, 0x0, 0x0, 0x1]),
            _0xd6ab7a = _0x13e6b2(_0x5542c7, _0xb44bb5, _0x1673d8, null, _0x5d3ced, _0x7826db),
            _0x593fb9[_0x1221e8 >> 0x2] = _0xd6ab7a,
            0x0;
        _0x117cc9 = _0x46211(_0x117cc9),
        _0x5d3ced = _0x117f6e(_0x117cc9);
        if (_0x5d3ced !== null) {
            if (_0x5542c7 === 0x0 || _0x5542c7 === 0x2)
                _0x5542c7 = 0x2;
            else {
                if (_0x5542c7 === 0xa && _0x704407 & 0x8)
                    _0x5d3ced = [0x0, 0x0, _0x33e58f(0xffff), _0x5d3ced],
                    _0x5542c7 = 0xa;
                else
                    return -0x2;
            }
        } else {
            _0x5d3ced = _0x5af1ac(_0x117cc9);
            if (_0x5d3ced !== null) {
                if (_0x5542c7 === 0x0 || _0x5542c7 === 0xa)
                    _0x5542c7 = 0xa;
                else
                    return -0x2;
            }
        }
        if (_0x5d3ced != null)
            return _0xd6ab7a = _0x13e6b2(_0x5542c7, _0xb44bb5, _0x1673d8, _0x117cc9, _0x5d3ced, _0x7826db),
            _0x593fb9[_0x1221e8 >> 0x2] = _0xd6ab7a,
            0x0;
        if (_0x704407 & 0x4)
            return -0x2;
        _0x117cc9 = _0xe69825['lookup_name'](_0x117cc9),
        _0x5d3ced = _0x117f6e(_0x117cc9);
        if (_0x5542c7 === 0x0)
            _0x5542c7 = 0x2;
        else
            _0x5542c7 === 0xa && (_0x5d3ced = [0x0, 0x0, _0x33e58f(0xffff), _0x5d3ced]);
        return _0xd6ab7a = _0x13e6b2(_0x5542c7, _0xb44bb5, _0x1673d8, null, _0x5d3ced, _0x7826db),
        _0x593fb9[_0x1221e8 >> 0x2] = _0xd6ab7a,
        0x0;
    }
    function _0x352f57(_0x198871) {
        var _0x1aef05 = _0x214635(0x14)
          , _0x107f80 = _0x214635(_0x198871['length'] + 0x1);
        _0x430ff7(_0x198871, _0x107f80, _0x198871['length'] + 0x1),
        _0x593fb9[_0x1aef05 >> 0x2] = _0x107f80;
        var _0x5ee1ea = _0x214635(0x4);
        _0x593fb9[_0x5ee1ea >> 0x2] = 0x0,
        _0x593fb9[_0x1aef05 + 0x4 >> 0x2] = _0x5ee1ea;
        var _0x42e8bd = 0x2;
        _0x593fb9[_0x1aef05 + 0x8 >> 0x2] = _0x42e8bd,
        _0x593fb9[_0x1aef05 + 0xc >> 0x2] = 0x4;
        var _0x92a4b6 = _0x214635(0xc);
        return _0x593fb9[_0x92a4b6 >> 0x2] = _0x92a4b6 + 0x8,
        _0x593fb9[_0x92a4b6 + 0x4 >> 0x2] = 0x0,
        _0x593fb9[_0x92a4b6 + 0x8 >> 0x2] = _0x117f6e(_0xe69825['lookup_name'](_0x198871)),
        _0x593fb9[_0x1aef05 + 0x10 >> 0x2] = _0x92a4b6,
        _0x1aef05;
    }
    function _0x492bbe(_0x1a5040, _0x5f1761, _0x3412d7) {
        if (_0x3412d7 !== 0x2)
            return _0x1669bd(0x5),
            null;
        _0x1a5040 = _0x593fb9[_0x1a5040 >> 0x2];
        var _0x166f9d = _0x20ec37(_0x1a5040)
          , _0x35ad08 = _0xe69825['lookup_addr'](_0x166f9d);
        return _0x35ad08 && (_0x166f9d = _0x35ad08),
        _0x352f57(_0x166f9d);
    }
    function _0x1458e5(_0x127842) {
        return _0x352f57(_0x46211(_0x127842));
    }
    function _0x417f37(_0x372bdd, _0x254144, _0x55e579, _0x170b2b, _0x2f00f1, _0x2e8680, _0x5a59d5) {
        var _0x4b791f = _0x21553c(_0x372bdd, _0x254144);
        if (_0x4b791f['errno'])
            return -0x6;
        var _0x404c01 = _0x4b791f['port']
          , _0x1783dc = _0x4b791f['addr']
          , _0x492d9f = ![];
        if (_0x55e579 && _0x170b2b) {
            var _0x285ab6;
            if (_0x5a59d5 & 0x1 || !(_0x285ab6 = _0xe69825['lookup_addr'](_0x1783dc))) {
                if (_0x5a59d5 & 0x8)
                    return -0x2;
            } else
                _0x1783dc = _0x285ab6;
            var _0x2851a9 = _0x430ff7(_0x1783dc, _0x55e579, _0x170b2b);
            _0x2851a9 + 0x1 >= _0x170b2b && (_0x492d9f = !![]);
        }
        if (_0x2f00f1 && _0x2e8680) {
            _0x404c01 = '' + _0x404c01;
            var _0x2851a9 = _0x430ff7(_0x404c01, _0x2f00f1, _0x2e8680);
            _0x2851a9 + 0x1 >= _0x2e8680 && (_0x492d9f = !![]);
        }
        if (_0x492d9f)
            return -0xc;
        return 0x0;
    }
    function _0x59e53a() {
        throw 'getpwuid: TODO';
    }
    function _0x2f9da5(_0x5715f7) {
        var _0x167ec9 = Date['now']();
        return _0x593fb9[_0x5715f7 >> 0x2] = _0x167ec9 / 0x3e8 | 0x0,
        _0x593fb9[_0x5715f7 + 0x4 >> 0x2] = _0x167ec9 % 0x3e8 * 0x3e8 | 0x0,
        0x0;
    }
    function _0x1c9b77(_0x19be73) {
        _0x264078['activeTexture'](_0x19be73);
    }
    function _0x54441a(_0x3d6977, _0x24900e) {
        _0x3d6977 = _0x353c88['programs'][_0x3d6977],
        _0x24900e = _0x353c88['shaders'][_0x24900e],
        _0x3d6977[_0x24900e['shaderType']] = _0x24900e,
        _0x264078['attachShader'](_0x3d6977, _0x24900e);
    }
    function _0x7a635f(_0x2cc712, _0x25cce0) {
        _0x264078['beginQuery'](_0x2cc712, _0x353c88['queries'][_0x25cce0]);
    }
    function _0x36c476(_0x2b3ccb) {
        _0x264078['beginTransformFeedback'](_0x2b3ccb);
    }
    function _0x35ec60(_0x261dac, _0x5d411d, _0x2bf785) {
        _0x264078['bindAttribLocation'](_0x353c88['programs'][_0x261dac], _0x5d411d, _0x46211(_0x2bf785));
    }
    function _0x21ebb5(_0x3d9bab, _0x4b8dab) {
        if (_0x3d9bab == 0x8892)
            _0x264078['currentArrayBufferBinding'] = _0x4b8dab;
        else
            _0x3d9bab == 0x8893 && (_0x264078['currentElementArrayBufferBinding'] = _0x4b8dab);
        if (_0x3d9bab == 0x88eb)
            _0x264078['currentPixelPackBufferBinding'] = _0x4b8dab;
        else
            _0x3d9bab == 0x88ec && (_0x264078['currentPixelUnpackBufferBinding'] = _0x4b8dab);
        _0x264078['bindBuffer'](_0x3d9bab, _0x353c88['buffers'][_0x4b8dab]);
    }
    function _0x1f9fb5(_0x232073, _0x104c69, _0x11d288) {
        _0x264078['bindBufferBase'](_0x232073, _0x104c69, _0x353c88['buffers'][_0x11d288]);
    }
    function _0x4e098c(_0x10c9d2, _0x16ff65, _0x2fb849, _0x36756e, _0x554541) {
        _0x264078['bindBufferRange'](_0x10c9d2, _0x16ff65, _0x353c88['buffers'][_0x2fb849], _0x36756e, _0x554541);
    }
    function _0x4cc009(_0x218ae0, _0x3b4dde) {
        _0x264078['bindFramebuffer'](_0x218ae0, _0x353c88['framebuffers'][_0x3b4dde]);
    }
    function _0x2a309f(_0x18432b, _0x111c61) {
        _0x264078['bindRenderbuffer'](_0x18432b, _0x353c88['renderbuffers'][_0x111c61]);
    }
    function _0x386b53(_0x2a6745, _0x561e4e) {
        _0x264078['bindSampler'](_0x2a6745, _0x353c88['samplers'][_0x561e4e]);
    }
    function _0x47c25d(_0x221059, _0x512dc5) {
        _0x264078['bindTexture'](_0x221059, _0x353c88['textures'][_0x512dc5]);
    }
    function _0xcedef9(_0x5aebf5, _0x2bf87c) {
        _0x264078['bindTransformFeedback'](_0x5aebf5, _0x353c88['transformFeedbacks'][_0x2bf87c]);
    }
    function _0x17add8(_0x35ff74) {
        _0x264078['bindVertexArray'](_0x353c88['vaos'][_0x35ff74]);
        var _0x1667c4 = _0x264078['getParameter'](0x8895);
        _0x264078['currentElementArrayBufferBinding'] = _0x1667c4 ? _0x1667c4['name'] | 0x0 : 0x0;
    }
    function _0x2d0de7(_0x505512) {
        _0x264078['blendEquation'](_0x505512);
    }
    function _0x58b90e(_0x104624, _0xd381ca) {
        _0x264078['blendEquationSeparate'](_0x104624, _0xd381ca);
    }
    function _0x11d859(_0x452f38, _0x5aefcf, _0x17656a, _0x374ccc) {
        _0x264078['blendFuncSeparate'](_0x452f38, _0x5aefcf, _0x17656a, _0x374ccc);
    }
    function _0x322467(_0x14187c, _0x1cb7e3, _0x53789a, _0x434619, _0x1662a8, _0x3cb5a4, _0x473230, _0x39e05e, _0x390572, _0x30edec) {
        _0x264078['blitFramebuffer'](_0x14187c, _0x1cb7e3, _0x53789a, _0x434619, _0x1662a8, _0x3cb5a4, _0x473230, _0x39e05e, _0x390572, _0x30edec);
    }
    function _0xac88e(_0x34e411, _0x32ba88, _0x1b086b, _0x54dd01) {
        _0x353c88['currentContext']['version'] >= 0x2 ? _0x1b086b ? _0x264078['bufferData'](_0x34e411, _0x2ac27b, _0x54dd01, _0x1b086b, _0x32ba88) : _0x264078['bufferData'](_0x34e411, _0x32ba88, _0x54dd01) : _0x264078['bufferData'](_0x34e411, _0x1b086b ? _0x2ac27b['subarray'](_0x1b086b, _0x1b086b + _0x32ba88) : _0x32ba88, _0x54dd01);
    }
    function _0xbc3ef7(_0x59385e, _0x22e889, _0x25dac9, _0x2e8c56) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['bufferSubData'](_0x59385e, _0x22e889, _0x2ac27b, _0x2e8c56, _0x25dac9);
            return;
        }
        _0x264078['bufferSubData'](_0x59385e, _0x22e889, _0x2ac27b['subarray'](_0x2e8c56, _0x2e8c56 + _0x25dac9));
    }
    function _0x59b058(_0x588758) {
        return _0x264078['checkFramebufferStatus'](_0x588758);
    }
    function _0x479a0e(_0x2fa16b) {
        _0x264078['clear'](_0x2fa16b);
    }
    function _0x145c8e(_0x4e7a64, _0x51c86f, _0x3be30c, _0x4c0008) {
        _0x264078['clearBufferfi'](_0x4e7a64, _0x51c86f, _0x3be30c, _0x4c0008);
    }
    function _0x13d286(_0x375fe3, _0x4f16e9, _0x575a7b) {
        _0x264078['clearBufferfv'](_0x375fe3, _0x4f16e9, _0x81f2c2, _0x575a7b >> 0x2);
    }
    function _0x3b1de8(_0x62c984, _0x131bfd, _0x5c656a) {
        _0x264078['clearBufferuiv'](_0x62c984, _0x131bfd, _0x311b71, _0x5c656a >> 0x2);
    }
    function _0x4dcef7(_0x4db76b, _0x45cca8, _0x5559f6, _0x16378e) {
        _0x264078['clearColor'](_0x4db76b, _0x45cca8, _0x5559f6, _0x16378e);
    }
    function _0x3b7d1b(_0x515e72) {
        _0x264078['clearDepth'](_0x515e72);
    }
    function _0x421d18(_0x266f34) {
        _0x264078['clearStencil'](_0x266f34);
    }
    function _0x6beab1(_0x2cbce7, _0x14dbba, _0x514ede, _0x1c4eab) {
        return _0x264078['clientWaitSync'](_0x353c88['syncs'][_0x2cbce7], _0x14dbba, _0x182029(_0x514ede, _0x1c4eab));
    }
    function _0x2c66b7(_0x11ffc0, _0x400766, _0xa260fa, _0xd2b933) {
        _0x264078['colorMask'](!!_0x11ffc0, !!_0x400766, !!_0xa260fa, !!_0xd2b933);
    }
    function _0x3860d2(_0x5c346f) {
        _0x264078['compileShader'](_0x353c88['shaders'][_0x5c346f]);
    }
    function _0x35fb7e(_0x43e8ae, _0x56dd87, _0x274b70, _0xd71f82, _0x2a48a5, _0x5794b2, _0x4ed000, _0x39a603) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['currentPixelUnpackBufferBinding'] ? _0x264078['compressedTexImage2D'](_0x43e8ae, _0x56dd87, _0x274b70, _0xd71f82, _0x2a48a5, _0x5794b2, _0x4ed000, _0x39a603) : _0x264078['compressedTexImage2D'](_0x43e8ae, _0x56dd87, _0x274b70, _0xd71f82, _0x2a48a5, _0x5794b2, _0x2ac27b, _0x39a603, _0x4ed000);
            return;
        }
        _0x264078['compressedTexImage2D'](_0x43e8ae, _0x56dd87, _0x274b70, _0xd71f82, _0x2a48a5, _0x5794b2, _0x39a603 ? _0x2ac27b['subarray'](_0x39a603, _0x39a603 + _0x4ed000) : null);
    }
    function _0x3986b4(_0xaf9a75, _0x1b8c2b, _0x3a45e7, _0x3e08a0, _0x4c4307, _0x1a997b, _0x1a9fc3, _0x2c31da, _0x38a145) {
        _0x264078['currentPixelUnpackBufferBinding'] ? _0x264078['compressedTexImage3D'](_0xaf9a75, _0x1b8c2b, _0x3a45e7, _0x3e08a0, _0x4c4307, _0x1a997b, _0x1a9fc3, _0x2c31da, _0x38a145) : _0x264078['compressedTexImage3D'](_0xaf9a75, _0x1b8c2b, _0x3a45e7, _0x3e08a0, _0x4c4307, _0x1a997b, _0x1a9fc3, _0x2ac27b, _0x38a145, _0x2c31da);
    }
    function _0xf499f8(_0x3e60e0, _0x3a94d6, _0x25a738, _0x4dc4fc, _0x1b7ad4, _0x32e0de, _0x1bca91, _0x136a18, _0x487f61) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['currentPixelUnpackBufferBinding'] ? _0x264078['compressedTexSubImage2D'](_0x3e60e0, _0x3a94d6, _0x25a738, _0x4dc4fc, _0x1b7ad4, _0x32e0de, _0x1bca91, _0x136a18, _0x487f61) : _0x264078['compressedTexSubImage2D'](_0x3e60e0, _0x3a94d6, _0x25a738, _0x4dc4fc, _0x1b7ad4, _0x32e0de, _0x1bca91, _0x2ac27b, _0x487f61, _0x136a18);
            return;
        }
        _0x264078['compressedTexSubImage2D'](_0x3e60e0, _0x3a94d6, _0x25a738, _0x4dc4fc, _0x1b7ad4, _0x32e0de, _0x1bca91, _0x487f61 ? _0x2ac27b['subarray'](_0x487f61, _0x487f61 + _0x136a18) : null);
    }
    function _0xc8725d(_0x1dc92e, _0x481671, _0x23070f, _0x2a7592, _0x477d62, _0x5349fc, _0x12e10b, _0x34a687, _0x56a7c3, _0x45a8a6, _0x2df967) {
        _0x264078['currentPixelUnpackBufferBinding'] ? _0x264078['compressedTexSubImage3D'](_0x1dc92e, _0x481671, _0x23070f, _0x2a7592, _0x477d62, _0x5349fc, _0x12e10b, _0x34a687, _0x56a7c3, _0x45a8a6, _0x2df967) : _0x264078['compressedTexSubImage3D'](_0x1dc92e, _0x481671, _0x23070f, _0x2a7592, _0x477d62, _0x5349fc, _0x12e10b, _0x34a687, _0x56a7c3, _0x2ac27b, _0x2df967, _0x45a8a6);
    }
    function _0x232a40(_0x542905, _0x3f3d1d, _0x17fda0, _0x3132bf, _0x2cadf7) {
        _0x264078['copyBufferSubData'](_0x542905, _0x3f3d1d, _0x17fda0, _0x3132bf, _0x2cadf7);
    }
    function _0xd29dad(_0x1ce6d3, _0x52df60, _0x5ab7ab, _0x1e6928, _0x237939, _0x347a4e, _0x190069, _0x45a2b4) {
        _0x264078['copyTexImage2D'](_0x1ce6d3, _0x52df60, _0x5ab7ab, _0x1e6928, _0x237939, _0x347a4e, _0x190069, _0x45a2b4);
    }
    function _0x5c3078(_0x546fad, _0x412e81, _0x3eb97e, _0x409ccb, _0x5ed84f, _0x199d4b, _0x384814, _0x41421c) {
        _0x264078['copyTexSubImage2D'](_0x546fad, _0x412e81, _0x3eb97e, _0x409ccb, _0x5ed84f, _0x199d4b, _0x384814, _0x41421c);
    }
    function _0x28b527() {
        var _0x195b03 = _0x353c88['getNewId'](_0x353c88['programs'])
          , _0x5dbc50 = _0x264078['createProgram']();
        return _0x5dbc50['name'] = _0x195b03,
        _0x5dbc50['maxUniformLength'] = _0x5dbc50['maxAttributeLength'] = _0x5dbc50['maxUniformBlockNameLength'] = 0x0,
        _0x5dbc50['uniformIdCounter'] = 0x1,
        _0x353c88['programs'][_0x195b03] = _0x5dbc50,
        _0x195b03;
    }
    function _0x3e2e88(_0x48b0c6) {
        var _0x541481 = _0x353c88['getNewId'](_0x353c88['shaders']);
        return _0x353c88['shaders'][_0x541481] = _0x264078['createShader'](_0x48b0c6),
        _0x353c88['shaders'][_0x541481]['shaderType'] = _0x48b0c6 & 0x1 ? 'vs' : 'fs',
        _0x541481;
    }
    function _0x5ecdef(_0x4882a6) {
        _0x264078['cullFace'](_0x4882a6);
    }
    function _0x169958(_0x47089a, _0x389ebf) {
        for (var _0x1ad4c5 = 0x0; _0x1ad4c5 < _0x47089a; _0x1ad4c5++) {
            var _0x579a74 = _0x593fb9[_0x389ebf + _0x1ad4c5 * 0x4 >> 0x2]
              , _0x2b7f47 = _0x353c88['buffers'][_0x579a74];
            if (!_0x2b7f47)
                continue;
            _0x264078['deleteBuffer'](_0x2b7f47),
            _0x2b7f47['name'] = 0x0,
            _0x353c88['buffers'][_0x579a74] = null;
            if (_0x579a74 == _0x264078['currentArrayBufferBinding'])
                _0x264078['currentArrayBufferBinding'] = 0x0;
            if (_0x579a74 == _0x264078['currentElementArrayBufferBinding'])
                _0x264078['currentElementArrayBufferBinding'] = 0x0;
            if (_0x579a74 == _0x264078['currentPixelPackBufferBinding'])
                _0x264078['currentPixelPackBufferBinding'] = 0x0;
            if (_0x579a74 == _0x264078['currentPixelUnpackBufferBinding'])
                _0x264078['currentPixelUnpackBufferBinding'] = 0x0;
        }
    }
    function _0x1370bc(_0x39fb82, _0x5112e6) {
        for (var _0x223136 = 0x0; _0x223136 < _0x39fb82; ++_0x223136) {
            var _0x5c45b3 = _0x593fb9[_0x5112e6 + _0x223136 * 0x4 >> 0x2]
              , _0x27c37d = _0x353c88['framebuffers'][_0x5c45b3];
            if (!_0x27c37d)
                continue;
            _0x264078['deleteFramebuffer'](_0x27c37d),
            _0x27c37d['name'] = 0x0,
            _0x353c88['framebuffers'][_0x5c45b3] = null;
        }
    }
    function _0x5717a6(_0x36f2f9) {
        if (!_0x36f2f9)
            return;
        var _0x2b1dd3 = _0x353c88['programs'][_0x36f2f9];
        if (!_0x2b1dd3) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x264078['deleteProgram'](_0x2b1dd3),
        _0x2b1dd3['name'] = 0x0,
        _0x353c88['programs'][_0x36f2f9] = null;
    }
    function _0x47a018(_0x310c24, _0x684417) {
        for (var _0x292b2d = 0x0; _0x292b2d < _0x310c24; _0x292b2d++) {
            var _0x5a095f = _0x593fb9[_0x684417 + _0x292b2d * 0x4 >> 0x2]
              , _0x16e23a = _0x353c88['queries'][_0x5a095f];
            if (!_0x16e23a)
                continue;
            _0x264078['deleteQuery'](_0x16e23a),
            _0x353c88['queries'][_0x5a095f] = null;
        }
    }
    function _0x3316a6(_0x4756af, _0x34371c) {
        for (var _0x3ff414 = 0x0; _0x3ff414 < _0x4756af; _0x3ff414++) {
            var _0x247f37 = _0x593fb9[_0x34371c + _0x3ff414 * 0x4 >> 0x2]
              , _0x206a06 = _0x353c88['renderbuffers'][_0x247f37];
            if (!_0x206a06)
                continue;
            _0x264078['deleteRenderbuffer'](_0x206a06),
            _0x206a06['name'] = 0x0,
            _0x353c88['renderbuffers'][_0x247f37] = null;
        }
    }
    function _0x507359(_0x4e4121, _0x237608) {
        for (var _0x24b406 = 0x0; _0x24b406 < _0x4e4121; _0x24b406++) {
            var _0x598dde = _0x593fb9[_0x237608 + _0x24b406 * 0x4 >> 0x2]
              , _0x2786ad = _0x353c88['samplers'][_0x598dde];
            if (!_0x2786ad)
                continue;
            _0x264078['deleteSampler'](_0x2786ad),
            _0x2786ad['name'] = 0x0,
            _0x353c88['samplers'][_0x598dde] = null;
        }
    }
    function _0xbd1e24(_0x322d1e) {
        if (!_0x322d1e)
            return;
        var _0x24c130 = _0x353c88['shaders'][_0x322d1e];
        if (!_0x24c130) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x264078['deleteShader'](_0x24c130),
        _0x353c88['shaders'][_0x322d1e] = null;
    }
    function _0x52e356(_0x46d838) {
        if (!_0x46d838)
            return;
        var _0x45c399 = _0x353c88['syncs'][_0x46d838];
        if (!_0x45c399) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x264078['deleteSync'](_0x45c399),
        _0x45c399['name'] = 0x0,
        _0x353c88['syncs'][_0x46d838] = null;
    }
    function _0x5ae0dd(_0x1fcaf6, _0xb25817) {
        for (var _0x4bb6b5 = 0x0; _0x4bb6b5 < _0x1fcaf6; _0x4bb6b5++) {
            var _0x16936e = _0x593fb9[_0xb25817 + _0x4bb6b5 * 0x4 >> 0x2]
              , _0x418a8b = _0x353c88['textures'][_0x16936e];
            if (!_0x418a8b)
                continue;
            _0x264078['deleteTexture'](_0x418a8b),
            _0x418a8b['name'] = 0x0,
            _0x353c88['textures'][_0x16936e] = null;
        }
    }
    function _0xaba18f(_0x12f603, _0xeb10c2) {
        for (var _0x3d9953 = 0x0; _0x3d9953 < _0x12f603; _0x3d9953++) {
            var _0x553805 = _0x593fb9[_0xeb10c2 + _0x3d9953 * 0x4 >> 0x2]
              , _0x450130 = _0x353c88['transformFeedbacks'][_0x553805];
            if (!_0x450130)
                continue;
            _0x264078['deleteTransformFeedback'](_0x450130),
            _0x450130['name'] = 0x0,
            _0x353c88['transformFeedbacks'][_0x553805] = null;
        }
    }
    function _0x1a5627(_0x2ecedd, _0x1708d1) {
        for (var _0x5a84ee = 0x0; _0x5a84ee < _0x2ecedd; _0x5a84ee++) {
            var _0xd9c949 = _0x593fb9[_0x1708d1 + _0x5a84ee * 0x4 >> 0x2];
            _0x264078['deleteVertexArray'](_0x353c88['vaos'][_0xd9c949]),
            _0x353c88['vaos'][_0xd9c949] = null;
        }
    }
    function _0x486c17(_0x2e70be) {
        _0x264078['depthFunc'](_0x2e70be);
    }
    function _0x227bbe(_0x4eec1d) {
        _0x264078['depthMask'](!!_0x4eec1d);
    }
    function _0x54e540(_0x25d006, _0x3106d4) {
        _0x264078['detachShader'](_0x353c88['programs'][_0x25d006], _0x353c88['shaders'][_0x3106d4]);
    }
    function _0x57937e(_0x661231) {
        _0x264078['disable'](_0x661231);
    }
    function _0x5df8b5(_0x51333a) {
        var _0x4510dc = _0x353c88['currentContext']['clientBuffers'][_0x51333a];
        _0x4510dc['enabled'] = ![],
        _0x264078['disableVertexAttribArray'](_0x51333a);
    }
    function _0x5b2bf0(_0x595850, _0x48e79a, _0x3b26e5) {
        _0x353c88['preDrawHandleClientVertexAttribBindings'](_0x48e79a + _0x3b26e5),
        _0x264078['drawArrays'](_0x595850, _0x48e79a, _0x3b26e5),
        _0x353c88['postDrawHandleClientVertexAttribBindings']();
    }
    function _0xe896e4(_0x1fecd3, _0x2e3310, _0x87c117, _0x9dc806) {
        _0x264078['drawArraysInstanced'](_0x1fecd3, _0x2e3310, _0x87c117, _0x9dc806);
    }
    var _0x293c1d = [];
    function _0x38cbc5(_0x148596, _0x26bbc1) {
        var _0x1f7472 = _0x293c1d[_0x148596];
        for (var _0xfb68c1 = 0x0; _0xfb68c1 < _0x148596; _0xfb68c1++) {
            _0x1f7472[_0xfb68c1] = _0x593fb9[_0x26bbc1 + _0xfb68c1 * 0x4 >> 0x2];
        }
        _0x264078['drawBuffers'](_0x1f7472);
    }
    function _0x5c5569(_0x550091, _0x2b0a30, _0x8f7bd9, _0x5c3783) {
        var _0x22c43c;
        if (!_0x264078['currentElementArrayBufferBinding']) {
            var _0x31aa09 = _0x353c88['calcBufLength'](0x1, _0x8f7bd9, 0x0, _0x2b0a30);
            _0x22c43c = _0x353c88['getTempIndexBuffer'](_0x31aa09),
            _0x264078['bindBuffer'](0x8893, _0x22c43c),
            _0x264078['bufferSubData'](0x8893, 0x0, _0x2ac27b['subarray'](_0x5c3783, _0x5c3783 + _0x31aa09)),
            _0x5c3783 = 0x0;
        }
        _0x353c88['preDrawHandleClientVertexAttribBindings'](_0x2b0a30),
        _0x264078['drawElements'](_0x550091, _0x2b0a30, _0x8f7bd9, _0x5c3783),
        _0x353c88['postDrawHandleClientVertexAttribBindings'](_0x2b0a30),
        !_0x264078['currentElementArrayBufferBinding'] && _0x264078['bindBuffer'](0x8893, null);
    }
    function _0x377842(_0x200762, _0x25479d, _0x518198, _0x39697b, _0x242b6e) {
        _0x264078['drawElementsInstanced'](_0x200762, _0x25479d, _0x518198, _0x39697b, _0x242b6e);
    }
    function _0x55eff0(_0x13fac6) {
        _0x264078['enable'](_0x13fac6);
    }
    function _0x4a6a9e(_0xd5edd3) {
        var _0x3a038f = _0x353c88['currentContext']['clientBuffers'][_0xd5edd3];
        _0x3a038f['enabled'] = !![],
        _0x264078['enableVertexAttribArray'](_0xd5edd3);
    }
    function _0x21b06d(_0x7e5faa) {
        _0x264078['endQuery'](_0x7e5faa);
    }
    function _0x172015() {
        _0x264078['endTransformFeedback']();
    }
    function _0xfa6bc9(_0x8bb335, _0x56b5e9) {
        var _0x947877 = _0x264078['fenceSync'](_0x8bb335, _0x56b5e9);
        if (_0x947877) {
            var _0x1d38ad = _0x353c88['getNewId'](_0x353c88['syncs']);
            return _0x947877['name'] = _0x1d38ad,
            _0x353c88['syncs'][_0x1d38ad] = _0x947877,
            _0x1d38ad;
        } else
            return 0x0;
    }
    function _0x2683f4() {
        _0x264078['finish']();
    }
    function _0x387e07() {
        _0x264078['flush']();
    }
    function _0x51fb93(_0x44e1c3) {
        switch (_0x44e1c3) {
        case 0x8892:
            _0x44e1c3 = 0x8894;
            break;
        case 0x8893:
            _0x44e1c3 = 0x8895;
            break;
        case 0x88eb:
            _0x44e1c3 = 0x88ed;
            break;
        case 0x88ec:
            _0x44e1c3 = 0x88ef;
            break;
        case 0x8c8e:
            _0x44e1c3 = 0x8c8f;
            break;
        case 0x8f36:
            _0x44e1c3 = 0x8f36;
            break;
        case 0x8f37:
            _0x44e1c3 = 0x8f37;
            break;
        case 0x8a11:
            _0x44e1c3 = 0x8a28;
            break;
        }
        var _0x4359de = _0x264078['getParameter'](_0x44e1c3);
        if (_0x4359de)
            return _0x4359de['name'] | 0x0;
        else
            return 0x0;
    }
    function _0x55f6b6(_0x1b0d52) {
        switch (_0x1b0d52) {
        case 0x8892:
        case 0x8893:
        case 0x8f36:
        case 0x8f37:
        case 0x88eb:
        case 0x88ec:
        case 0x8c2a:
        case 0x8c8e:
        case 0x8a11:
            return !![];
        default:
            return ![];
        }
    }
    function _0x3f9168(_0x216947, _0x49df45, _0x16b5e8) {
        if (!_0x55f6b6(_0x216947)) {
            _0x353c88['recordError'](0x500),
            _0x5a96d4('GL_INVALID_ENUM in glFlushMappedBufferRange');
            return;
        }
        var _0x4a3ddc = _0x353c88['mappedBuffers'][_0x51fb93(_0x216947)];
        if (!_0x4a3ddc) {
            _0x353c88['recordError'](0x502),
            _0x5a96d4('buffer was never mapped in glFlushMappedBufferRange');
            return;
        }
        if (!(_0x4a3ddc['access'] & 0x10)) {
            _0x353c88['recordError'](0x502),
            _0x5a96d4('buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange');
            return;
        }
        if (_0x49df45 < 0x0 || _0x16b5e8 < 0x0 || _0x49df45 + _0x16b5e8 > _0x4a3ddc['length']) {
            _0x353c88['recordError'](0x501),
            _0x5a96d4('invalid range in glFlushMappedBufferRange');
            return;
        }
        _0x264078['bufferSubData'](_0x216947, _0x4a3ddc['offset'], _0x2ac27b['subarray'](_0x4a3ddc['mem'] + _0x49df45, _0x4a3ddc['mem'] + _0x49df45 + _0x16b5e8));
    }
    function _0x44915c(_0x3a36ba, _0x3037df, _0x4bbb34, _0x35f23a) {
        _0x264078['framebufferRenderbuffer'](_0x3a36ba, _0x3037df, _0x4bbb34, _0x353c88['renderbuffers'][_0x35f23a]);
    }
    function _0x4ea070(_0x2c42c9, _0xcdd3e5, _0xcfca2, _0xa64a87, _0x1b58f8) {
        _0x264078['framebufferTexture2D'](_0x2c42c9, _0xcdd3e5, _0xcfca2, _0x353c88['textures'][_0xa64a87], _0x1b58f8);
    }
    function _0x4b4a5f(_0x32cd53, _0x5d7e49, _0x1767fb, _0x3534f0, _0x3a171f) {
        _0x264078['framebufferTextureLayer'](_0x32cd53, _0x5d7e49, _0x353c88['textures'][_0x1767fb], _0x3534f0, _0x3a171f);
    }
    function _0x24db1c(_0x57b96f) {
        _0x264078['frontFace'](_0x57b96f);
    }
    function _0x5fc8a2(_0x4bf9a3, _0x29aec9, _0x4e35de, _0x15dcbb) {
        for (var _0x616b6a = 0x0; _0x616b6a < _0x4bf9a3; _0x616b6a++) {
            var _0x2638f4 = _0x264078[_0x4e35de]()
              , _0xf33e57 = _0x2638f4 && _0x353c88['getNewId'](_0x15dcbb);
            _0x2638f4 ? (_0x2638f4['name'] = _0xf33e57,
            _0x15dcbb[_0xf33e57] = _0x2638f4) : _0x353c88['recordError'](0x502),
            _0x593fb9[_0x29aec9 + _0x616b6a * 0x4 >> 0x2] = _0xf33e57;
        }
    }
    function _0x618e23(_0x3f4649, _0x6acc5c) {
        _0x5fc8a2(_0x3f4649, _0x6acc5c, 'createBuffer', _0x353c88['buffers']);
    }
    function _0x213749(_0x5ac5a3, _0x26a050) {
        _0x5fc8a2(_0x5ac5a3, _0x26a050, 'createFramebuffer', _0x353c88['framebuffers']);
    }
    function _0xcfa092(_0x4afa50, _0x3031b8) {
        _0x5fc8a2(_0x4afa50, _0x3031b8, 'createQuery', _0x353c88['queries']);
    }
    function _0x1a5202(_0x317fe4, _0x7ae910) {
        _0x5fc8a2(_0x317fe4, _0x7ae910, 'createRenderbuffer', _0x353c88['renderbuffers']);
    }
    function _0x299cac(_0x329997, _0x568339) {
        _0x5fc8a2(_0x329997, _0x568339, 'createSampler', _0x353c88['samplers']);
    }
    function _0x59bbf1(_0x5206ef, _0x515b66) {
        _0x5fc8a2(_0x5206ef, _0x515b66, 'createTexture', _0x353c88['textures']);
    }
    function _0xc19e0c(_0x4eabc9, _0x3f4d25) {
        _0x5fc8a2(_0x4eabc9, _0x3f4d25, 'createTransformFeedback', _0x353c88['transformFeedbacks']);
    }
    function _0x9b4bf6(_0x3c8e82, _0xdbe70) {
        _0x5fc8a2(_0x3c8e82, _0xdbe70, 'createVertexArray', _0x353c88['vaos']);
    }
    function _0x5f734f(_0x531709) {
        _0x264078['generateMipmap'](_0x531709);
    }
    function _0x2f85d9(_0x51100a, _0x538d6f, _0x4f56fc, _0x54e563, _0x2e8ced, _0x5a797b, _0xee8444, _0x3a5df7) {
        _0x538d6f = _0x353c88['programs'][_0x538d6f];
        var _0x2b9e4d = _0x264078[_0x51100a](_0x538d6f, _0x4f56fc);
        if (_0x2b9e4d) {
            var _0x36a1c4 = _0x3a5df7 && _0x430ff7(_0x2b9e4d['name'], _0x3a5df7, _0x54e563);
            if (_0x2e8ced)
                _0x593fb9[_0x2e8ced >> 0x2] = _0x36a1c4;
            if (_0x5a797b)
                _0x593fb9[_0x5a797b >> 0x2] = _0x2b9e4d['size'];
            if (_0xee8444)
                _0x593fb9[_0xee8444 >> 0x2] = _0x2b9e4d['type'];
        }
    }
    function _0x4130e8(_0x37f78e, _0x92ded6, _0x53b47c, _0x3e2f51, _0xbe33ce, _0x12388c, _0x505896) {
        _0x2f85d9('getActiveAttrib', _0x37f78e, _0x92ded6, _0x53b47c, _0x3e2f51, _0xbe33ce, _0x12388c, _0x505896);
    }
    function _0x290683(_0x12ac8a, _0x18b291, _0x269a09, _0x2769cd, _0x390efe, _0x30601e, _0x254b35) {
        _0x2f85d9('getActiveUniform', _0x12ac8a, _0x18b291, _0x269a09, _0x2769cd, _0x390efe, _0x30601e, _0x254b35);
    }
    function _0x5b720f(_0x14cf3e, _0x45c221, _0x38ccf8, _0x14ffb9, _0x465bca) {
        _0x14cf3e = _0x353c88['programs'][_0x14cf3e];
        var _0x4142b7 = _0x264078['getActiveUniformBlockName'](_0x14cf3e, _0x45c221);
        if (!_0x4142b7)
            return;
        if (_0x465bca && _0x38ccf8 > 0x0) {
            var _0x137976 = _0x430ff7(_0x4142b7, _0x465bca, _0x38ccf8);
            if (_0x14ffb9)
                _0x593fb9[_0x14ffb9 >> 0x2] = _0x137976;
        } else {
            if (_0x14ffb9)
                _0x593fb9[_0x14ffb9 >> 0x2] = 0x0;
        }
    }
    function _0x5c7676(_0x5c3f23, _0x567379, _0x225a46, _0x3cfb11) {
        if (!_0x3cfb11) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x5c3f23 = _0x353c88['programs'][_0x5c3f23];
        if (_0x225a46 == 0x8a41) {
            var _0xf22a5f = _0x264078['getActiveUniformBlockName'](_0x5c3f23, _0x567379);
            _0x593fb9[_0x3cfb11 >> 0x2] = _0xf22a5f['length'] + 0x1;
            return;
        }
        var _0x39544e = _0x264078['getActiveUniformBlockParameter'](_0x5c3f23, _0x567379, _0x225a46);
        if (_0x39544e === null)
            return;
        if (_0x225a46 == 0x8a43)
            for (var _0x2c38fd = 0x0; _0x2c38fd < _0x39544e['length']; _0x2c38fd++) {
                _0x593fb9[_0x3cfb11 + _0x2c38fd * 0x4 >> 0x2] = _0x39544e[_0x2c38fd];
            }
        else
            _0x593fb9[_0x3cfb11 >> 0x2] = _0x39544e;
    }
    function _0x52076c(_0x141313, _0x31faab, _0xd37bc3, _0x358940, _0x45b2ea) {
        if (!_0x45b2ea) {
            _0x353c88['recordError'](0x501);
            return;
        }
        if (_0x31faab > 0x0 && _0xd37bc3 == 0x0) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x141313 = _0x353c88['programs'][_0x141313];
        var _0x371932 = [];
        for (var _0x3daae5 = 0x0; _0x3daae5 < _0x31faab; _0x3daae5++) {
            _0x371932['push'](_0x593fb9[_0xd37bc3 + _0x3daae5 * 0x4 >> 0x2]);
        }
        var _0x4ee039 = _0x264078['getActiveUniforms'](_0x141313, _0x371932, _0x358940);
        if (!_0x4ee039)
            return;
        var _0x4d1af1 = _0x4ee039['length'];
        for (var _0x3daae5 = 0x0; _0x3daae5 < _0x4d1af1; _0x3daae5++) {
            _0x593fb9[_0x45b2ea + _0x3daae5 * 0x4 >> 0x2] = _0x4ee039[_0x3daae5];
        }
    }
    function _0x45020e(_0x16c27f, _0x44212d) {
        return _0x264078['getAttribLocation'](_0x353c88['programs'][_0x16c27f], _0x46211(_0x44212d));
    }
    function _0x25440b(_0x1121e3, _0x14e184, _0x540ca8, _0x7dfece) {
        if (!_0x7dfece) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x264078['getBufferSubData'](_0x1121e3, _0x14e184, _0x2ac27b, _0x7dfece, _0x540ca8);
    }
    function _0x3d66b0() {
        var _0x3fec43 = _0x264078['getError']() || _0x353c88['lastError'];
        return _0x353c88['lastError'] = 0x0,
        _0x3fec43;
    }
    function _0x25f418(_0x12f6d7, _0x355593, _0x3e9a34, _0x3c5ae9) {
        var _0x47898e = _0x264078['getFramebufferAttachmentParameter'](_0x12f6d7, _0x355593, _0x3e9a34);
        (_0x47898e instanceof WebGLRenderbuffer || _0x47898e instanceof WebGLTexture) && (_0x47898e = _0x47898e['name'] | 0x0),
        _0x593fb9[_0x3c5ae9 >> 0x2] = _0x47898e;
    }
    function _0x3ac804(_0xc2bc79, _0x33481a) {
        _0x311b71[_0xc2bc79 >> 0x2] = _0x33481a,
        _0x311b71[_0xc2bc79 + 0x4 >> 0x2] = (_0x33481a - _0x311b71[_0xc2bc79 >> 0x2]) / 0x100000000;
    }
    function _0x2bac5f(_0xb418d4, _0x353438, _0x1dd9d2, _0x5f5a20) {
        if (!_0x1dd9d2) {
            _0x353c88['recordError'](0x501);
            return;
        }
        var _0x28fd42 = _0x264078['getIndexedParameter'](_0xb418d4, _0x353438), _0x470688;
        switch (typeof _0x28fd42) {
        case 'boolean':
            _0x470688 = _0x28fd42 ? 0x1 : 0x0;
            break;
        case 'number':
            _0x470688 = _0x28fd42;
            break;
        case 'object':
            if (_0x28fd42 === null)
                switch (_0xb418d4) {
                case 0x8c8f:
                case 0x8a28:
                    _0x470688 = 0x0;
                    break;
                default:
                    {
                        _0x353c88['recordError'](0x500);
                        return;
                    }
                }
            else {
                if (_0x28fd42 instanceof WebGLBuffer)
                    _0x470688 = _0x28fd42['name'] | 0x0;
                else {
                    _0x353c88['recordError'](0x500);
                    return;
                }
            }
            break;
        default:
            _0x353c88['recordError'](0x500);
            return;
        }
        switch (_0x5f5a20) {
        case 0x1:
            _0x3ac804(_0x1dd9d2, _0x470688);
            break;
        case 0x0:
            _0x593fb9[_0x1dd9d2 >> 0x2] = _0x470688;
            break;
        case 0x2:
            _0x81f2c2[_0x1dd9d2 >> 0x2] = _0x470688;
            break;
        case 0x4:
            _0x10882b[_0x1dd9d2 >> 0x0] = _0x470688 ? 0x1 : 0x0;
            break;
        default:
            throw 'internal emscriptenWebGLGetIndexed() error, bad type: ' + _0x5f5a20;
        }
    }
    function _0xa30bf0(_0x3f7c58, _0x407a68, _0x3764a3) {
        _0x2bac5f(_0x3f7c58, _0x407a68, _0x3764a3, 0x0);
    }
    function _0x37eec5(_0x1bf879, _0x9681dd, _0x1bcc1f) {
        if (!_0x9681dd) {
            _0x353c88['recordError'](0x501);
            return;
        }
        var _0x3f6fc3 = undefined;
        switch (_0x1bf879) {
        case 0x8dfa:
            _0x3f6fc3 = 0x1;
            break;
        case 0x8df8:
            _0x1bcc1f != 0x0 && _0x1bcc1f != 0x1 && _0x353c88['recordError'](0x500);
            return;
        case 0x87fe:
        case 0x8df9:
            _0x3f6fc3 = 0x0;
            break;
        case 0x86a2:
            var _0x3a3238 = _0x264078['getParameter'](0x86a3);
            _0x3f6fc3 = _0x3a3238 ? _0x3a3238['length'] : 0x0;
            break;
        case 0x826e:
            _0x3f6fc3 = 0x100000;
            break;
        case 0x821d:
            if (_0x353c88['currentContext']['version'] < 0x2) {
                _0x353c88['recordError'](0x502);
                return;
            }
            var _0x17c627 = _0x264078['getSupportedExtensions']() || [];
            _0x3f6fc3 = 0x2 * _0x17c627['length'];
            break;
        case 0x821b:
        case 0x821c:
            if (_0x353c88['currentContext']['version'] < 0x2) {
                _0x353c88['recordError'](0x500);
                return;
            }
            _0x3f6fc3 = _0x1bf879 == 0x821b ? 0x3 : 0x0;
            break;
        }
        if (_0x3f6fc3 === undefined) {
            var _0x14c639 = _0x264078['getParameter'](_0x1bf879);
            switch (typeof _0x14c639) {
            case 'number':
                _0x3f6fc3 = _0x14c639;
                break;
            case 'boolean':
                _0x3f6fc3 = _0x14c639 ? 0x1 : 0x0;
                break;
            case 'string':
                _0x353c88['recordError'](0x500);
                return;
            case 'object':
                if (_0x14c639 === null)
                    switch (_0x1bf879) {
                    case 0x8894:
                    case 0x8b8d:
                    case 0x8895:
                    case 0x8ca6:
                    case 0x8ca7:
                    case 0x8069:
                    case 0x85b5:
                    case 0x8f36:
                    case 0x8f37:
                    case 0x88ed:
                    case 0x88ef:
                    case 0x8caa:
                    case 0x8919:
                    case 0x8c1d:
                    case 0x806a:
                    case 0x8e25:
                    case 0x8c8f:
                    case 0x8a28:
                    case 0x8514:
                        {
                            _0x3f6fc3 = 0x0;
                            break;
                        }
                    default:
                        {
                            _0x353c88['recordError'](0x500);
                            return;
                        }
                    }
                else {
                    if (_0x14c639 instanceof Float32Array || _0x14c639 instanceof Uint32Array || _0x14c639 instanceof Int32Array || _0x14c639 instanceof Array) {
                        for (var _0x20d00b = 0x0; _0x20d00b < _0x14c639['length']; ++_0x20d00b) {
                            switch (_0x1bcc1f) {
                            case 0x0:
                                _0x593fb9[_0x9681dd + _0x20d00b * 0x4 >> 0x2] = _0x14c639[_0x20d00b];
                                break;
                            case 0x2:
                                _0x81f2c2[_0x9681dd + _0x20d00b * 0x4 >> 0x2] = _0x14c639[_0x20d00b];
                                break;
                            case 0x4:
                                _0x10882b[_0x9681dd + _0x20d00b >> 0x0] = _0x14c639[_0x20d00b] ? 0x1 : 0x0;
                                break;
                            }
                        }
                        return;
                    } else
                        try {
                            _0x3f6fc3 = _0x14c639['name'] | 0x0;
                        } catch (_0x216094) {
                            _0x353c88['recordError'](0x500),
                            _0x5a96d4('GL_INVALID_ENUM in glGet' + _0x1bcc1f + 'v: Unknown object returned from WebGL getParameter(' + _0x1bf879 + ')! (error: ' + _0x216094 + ')');
                            return;
                        }
                }
                break;
            default:
                _0x353c88['recordError'](0x500),
                _0x5a96d4('GL_INVALID_ENUM in glGet' + _0x1bcc1f + 'v: Native code calling glGet' + _0x1bcc1f + 'v(' + _0x1bf879 + ') and it returns ' + _0x14c639 + ' of type ' + typeof _0x14c639 + '!');
                return;
            }
        }
        switch (_0x1bcc1f) {
        case 0x1:
            _0x3ac804(_0x9681dd, _0x3f6fc3);
            break;
        case 0x0:
            _0x593fb9[_0x9681dd >> 0x2] = _0x3f6fc3;
            break;
        case 0x2:
            _0x81f2c2[_0x9681dd >> 0x2] = _0x3f6fc3;
            break;
        case 0x4:
            _0x10882b[_0x9681dd >> 0x0] = _0x3f6fc3 ? 0x1 : 0x0;
            break;
        }
    }
    function _0x3bc2bc(_0x2865b3, _0xb04f7f) {
        _0x37eec5(_0x2865b3, _0xb04f7f, 0x0);
    }
    function _0x551d1e(_0x1d359a, _0x2f825f, _0x11781f, _0x4a28d9, _0x62df27) {
        if (_0x4a28d9 < 0x0) {
            _0x353c88['recordError'](0x501);
            return;
        }
        if (!_0x62df27) {
            _0x353c88['recordError'](0x501);
            return;
        }
        var _0x5bc92d = _0x264078['getInternalformatParameter'](_0x1d359a, _0x2f825f, _0x11781f);
        if (_0x5bc92d === null)
            return;
        for (var _0x248423 = 0x0; _0x248423 < _0x5bc92d['length'] && _0x248423 < _0x4a28d9; ++_0x248423) {
            _0x593fb9[_0x62df27 + _0x248423 * 0x4 >> 0x2] = _0x5bc92d[_0x248423];
        }
    }
    function _0x41bb3d(_0x33eae2, _0x40a4c2, _0x293af5, _0x39b89c, _0x2b0183) {
        _0x353c88['recordError'](0x502);
    }
    function _0x54e9e6(_0x29c927, _0x8ac5d3, _0x1d957a, _0x1b7088) {
        var _0x4d26e0 = _0x264078['getProgramInfoLog'](_0x353c88['programs'][_0x29c927]);
        if (_0x4d26e0 === null)
            _0x4d26e0 = '(unknown error)';
        var _0x20dd25 = _0x8ac5d3 > 0x0 && _0x1b7088 ? _0x430ff7(_0x4d26e0, _0x1b7088, _0x8ac5d3) : 0x0;
        if (_0x1d957a)
            _0x593fb9[_0x1d957a >> 0x2] = _0x20dd25;
    }
    function _0x2448e1(_0x2d5e1a, _0x360d0f, _0x998f24) {
        if (!_0x998f24) {
            _0x353c88['recordError'](0x501);
            return;
        }
        if (_0x2d5e1a >= _0x353c88['counter']) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x2d5e1a = _0x353c88['programs'][_0x2d5e1a];
        if (_0x360d0f == 0x8b84) {
            var _0x21cae1 = _0x264078['getProgramInfoLog'](_0x2d5e1a);
            if (_0x21cae1 === null)
                _0x21cae1 = '(unknown error)';
            _0x593fb9[_0x998f24 >> 0x2] = _0x21cae1['length'] + 0x1;
        } else {
            if (_0x360d0f == 0x8b87) {
                if (!_0x2d5e1a['maxUniformLength'])
                    for (var _0x1681f5 = 0x0; _0x1681f5 < _0x264078['getProgramParameter'](_0x2d5e1a, 0x8b86); ++_0x1681f5) {
                        _0x2d5e1a['maxUniformLength'] = Math['max'](_0x2d5e1a['maxUniformLength'], _0x264078['getActiveUniform'](_0x2d5e1a, _0x1681f5)['name']['length'] + 0x1);
                    }
                _0x593fb9[_0x998f24 >> 0x2] = _0x2d5e1a['maxUniformLength'];
            } else {
                if (_0x360d0f == 0x8b8a) {
                    if (!_0x2d5e1a['maxAttributeLength'])
                        for (var _0x1681f5 = 0x0; _0x1681f5 < _0x264078['getProgramParameter'](_0x2d5e1a, 0x8b89); ++_0x1681f5) {
                            _0x2d5e1a['maxAttributeLength'] = Math['max'](_0x2d5e1a['maxAttributeLength'], _0x264078['getActiveAttrib'](_0x2d5e1a, _0x1681f5)['name']['length'] + 0x1);
                        }
                    _0x593fb9[_0x998f24 >> 0x2] = _0x2d5e1a['maxAttributeLength'];
                } else {
                    if (_0x360d0f == 0x8a35) {
                        if (!_0x2d5e1a['maxUniformBlockNameLength'])
                            for (var _0x1681f5 = 0x0; _0x1681f5 < _0x264078['getProgramParameter'](_0x2d5e1a, 0x8a36); ++_0x1681f5) {
                                _0x2d5e1a['maxUniformBlockNameLength'] = Math['max'](_0x2d5e1a['maxUniformBlockNameLength'], _0x264078['getActiveUniformBlockName'](_0x2d5e1a, _0x1681f5)['length'] + 0x1);
                            }
                        _0x593fb9[_0x998f24 >> 0x2] = _0x2d5e1a['maxUniformBlockNameLength'];
                    } else
                        _0x593fb9[_0x998f24 >> 0x2] = _0x264078['getProgramParameter'](_0x2d5e1a, _0x360d0f);
                }
            }
        }
    }
    function _0x56a0f5(_0x28a2a1, _0x589aee, _0x4c725a) {
        if (!_0x4c725a) {
            _0x353c88['recordError'](0x501);
            return;
        }
        var _0x3798b7 = _0x353c88['queries'][_0x28a2a1], _0x54f452 = _0x264078['getQueryParameter'](_0x3798b7, _0x589aee), _0x22e7a1;
        typeof _0x54f452 == 'boolean' ? _0x22e7a1 = _0x54f452 ? 0x1 : 0x0 : _0x22e7a1 = _0x54f452,
        _0x593fb9[_0x4c725a >> 0x2] = _0x22e7a1;
    }
    function _0x595aec(_0x3140b5, _0x21d9d8, _0x374185) {
        if (!_0x374185) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x593fb9[_0x374185 >> 0x2] = _0x264078['getQuery'](_0x3140b5, _0x21d9d8);
    }
    function _0x18800e(_0x5d4fc9, _0x175b01, _0x2ea921) {
        if (!_0x2ea921) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x593fb9[_0x2ea921 >> 0x2] = _0x264078['getRenderbufferParameter'](_0x5d4fc9, _0x175b01);
    }
    function _0x19a7ff(_0x3072b1, _0x269037, _0x43b22e, _0x4e105b) {
        var _0x530a51 = _0x264078['getShaderInfoLog'](_0x353c88['shaders'][_0x3072b1]);
        if (_0x530a51 === null)
            _0x530a51 = '(unknown error)';
        var _0x1013d1 = _0x269037 > 0x0 && _0x4e105b ? _0x430ff7(_0x530a51, _0x4e105b, _0x269037) : 0x0;
        if (_0x43b22e)
            _0x593fb9[_0x43b22e >> 0x2] = _0x1013d1;
    }
    function _0x199867(_0x4804b5, _0x423ec5, _0x358bc5, _0x41120f) {
        var _0x5792e9 = _0x264078['getShaderPrecisionFormat'](_0x4804b5, _0x423ec5);
        _0x593fb9[_0x358bc5 >> 0x2] = _0x5792e9['rangeMin'],
        _0x593fb9[_0x358bc5 + 0x4 >> 0x2] = _0x5792e9['rangeMax'],
        _0x593fb9[_0x41120f >> 0x2] = _0x5792e9['precision'];
    }
    function _0x4504b2(_0x8962ef, _0x467a10, _0x3a3a9f, _0x50f325) {
        var _0x5cffb6 = _0x264078['getShaderSource'](_0x353c88['shaders'][_0x8962ef]);
        if (!_0x5cffb6)
            return;
        var _0x138944 = _0x467a10 > 0x0 && _0x50f325 ? _0x430ff7(_0x5cffb6, _0x50f325, _0x467a10) : 0x0;
        if (_0x3a3a9f)
            _0x593fb9[_0x3a3a9f >> 0x2] = _0x138944;
    }
    function _0x286b9e(_0x1fd311, _0x29f9bb, _0x260521) {
        if (!_0x260521) {
            _0x353c88['recordError'](0x501);
            return;
        }
        if (_0x29f9bb == 0x8b84) {
            var _0x4305dd = _0x264078['getShaderInfoLog'](_0x353c88['shaders'][_0x1fd311]);
            if (_0x4305dd === null)
                _0x4305dd = '(unknown error)';
            var _0x9340f8 = _0x4305dd ? _0x4305dd['length'] + 0x1 : 0x0;
            _0x593fb9[_0x260521 >> 0x2] = _0x9340f8;
        } else {
            if (_0x29f9bb == 0x8b88) {
                var _0x1943a1 = _0x264078['getShaderSource'](_0x353c88['shaders'][_0x1fd311])
                  , _0x319d55 = _0x1943a1 ? _0x1943a1['length'] + 0x1 : 0x0;
                _0x593fb9[_0x260521 >> 0x2] = _0x319d55;
            } else
                _0x593fb9[_0x260521 >> 0x2] = _0x264078['getShaderParameter'](_0x353c88['shaders'][_0x1fd311], _0x29f9bb);
        }
    }
    function _0x5aba50(_0x44f388) {
        var _0x526ccb = _0x353c88['stringCache'][_0x44f388];
        if (!_0x526ccb) {
            switch (_0x44f388) {
            case 0x1f03:
                var _0x341dcd = _0x264078['getSupportedExtensions']() || [];
                _0x341dcd = _0x341dcd['concat'](_0x341dcd['map'](function(_0x558428) {
                    return 'GL_' + _0x558428;
                })),
                _0x526ccb = _0x3d13ed(_0x341dcd['join'](' '));
                break;
            case 0x1f00:
            case 0x1f01:
            case 0x9245:
            case 0x9246:
                var _0xdc97d1 = _0x264078['getParameter'](_0x44f388);
                !_0xdc97d1 && _0x353c88['recordError'](0x500);
                _0x526ccb = _0xdc97d1 && _0x3d13ed(_0xdc97d1);
                break;
            case 0x1f02:
                var _0x4924ec = _0x264078['getParameter'](0x1f02);
                if (_0x353c88['currentContext']['version'] >= 0x2)
                    _0x4924ec = 'OpenGL ES 3.0 (' + _0x4924ec + ')';
                else
                    _0x4924ec = 'OpenGL ES 2.0 (' + _0x4924ec + ')';
                _0x526ccb = _0x3d13ed(_0x4924ec);
                break;
            case 0x8b8c:
                var _0x566bc0 = _0x264078['getParameter'](0x8b8c)
                  , _0x247101 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/
                  , _0x1fc4c7 = _0x566bc0['match'](_0x247101);
                if (_0x1fc4c7 !== null) {
                    if (_0x1fc4c7[0x1]['length'] == 0x3)
                        _0x1fc4c7[0x1] = _0x1fc4c7[0x1] + '0';
                    _0x566bc0 = 'OpenGL ES GLSL ES ' + _0x1fc4c7[0x1] + ' (' + _0x566bc0 + ')';
                }
                _0x526ccb = _0x3d13ed(_0x566bc0);
                break;
            default:
                _0x353c88['recordError'](0x500);
            }
            _0x353c88['stringCache'][_0x44f388] = _0x526ccb;
        }
        return _0x526ccb;
    }
    function _0x53ce6b(_0x431ec9, _0x58ef8b) {
        if (_0x353c88['currentContext']['version'] < 0x2)
            return _0x353c88['recordError'](0x502),
            0x0;
        var _0x3a1674 = _0x353c88['stringiCache'][_0x431ec9];
        if (_0x3a1674) {
            if (_0x58ef8b < 0x0 || _0x58ef8b >= _0x3a1674['length'])
                return _0x353c88['recordError'](0x501),
                0x0;
            return _0x3a1674[_0x58ef8b];
        }
        switch (_0x431ec9) {
        case 0x1f03:
            var _0x52765e = _0x264078['getSupportedExtensions']() || [];
            _0x52765e = _0x52765e['concat'](_0x52765e['map'](function(_0x12a407) {
                return 'GL_' + _0x12a407;
            })),
            _0x52765e = _0x52765e['map'](function(_0x48368b) {
                return _0x3d13ed(_0x48368b);
            }),
            _0x3a1674 = _0x353c88['stringiCache'][_0x431ec9] = _0x52765e;
            if (_0x58ef8b < 0x0 || _0x58ef8b >= _0x3a1674['length'])
                return _0x353c88['recordError'](0x501),
                0x0;
            return _0x3a1674[_0x58ef8b];
        default:
            _0x353c88['recordError'](0x500);
            return 0x0;
        }
    }
    function _0x333c06(_0x23f9db, _0x25f00b, _0x6ffd5b) {
        if (!_0x6ffd5b) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x593fb9[_0x6ffd5b >> 0x2] = _0x264078['getTexParameter'](_0x23f9db, _0x25f00b);
    }
    function _0x38a9c5(_0x5a4eb3, _0x3e4e11) {
        return _0x264078['getUniformBlockIndex'](_0x353c88['programs'][_0x5a4eb3], _0x46211(_0x3e4e11));
    }
    function _0x244a31(_0x15abeb, _0x3d595f, _0x1e1aa6, _0x3dcc40) {
        if (!_0x3dcc40) {
            _0x353c88['recordError'](0x501);
            return;
        }
        if (_0x3d595f > 0x0 && (_0x1e1aa6 == 0x0 || _0x3dcc40 == 0x0)) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x15abeb = _0x353c88['programs'][_0x15abeb];
        var _0x2c8000 = [];
        for (var _0x4eb9d9 = 0x0; _0x4eb9d9 < _0x3d595f; _0x4eb9d9++)
            _0x2c8000['push'](_0x46211(_0x593fb9[_0x1e1aa6 + _0x4eb9d9 * 0x4 >> 0x2]));
        var _0x233655 = _0x264078['getUniformIndices'](_0x15abeb, _0x2c8000);
        if (!_0x233655)
            return;
        var _0x337bc4 = _0x233655['length'];
        for (var _0x4eb9d9 = 0x0; _0x4eb9d9 < _0x337bc4; _0x4eb9d9++) {
            _0x593fb9[_0x3dcc40 + _0x4eb9d9 * 0x4 >> 0x2] = _0x233655[_0x4eb9d9];
        }
    }
    function _0x513dc8(_0x197b5a, _0x2a2ea2) {
        function _0xc55b7e(_0x354487) {
            return _0x354487['slice'](-0x1) == ']' && _0x354487['lastIndexOf']('[');
        }
        _0x2a2ea2 = _0x46211(_0x2a2ea2);
        if (_0x197b5a = _0x353c88['programs'][_0x197b5a]) {
            var _0x149003 = _0x197b5a['uniformLocsById'], _0x14a76e = _0x197b5a['uniformSizeAndIdsByName'], _0x1d8cd7, _0x10a9b9, _0x1f1755 = 0x0, _0x2cc0a3 = _0x2a2ea2, _0x3f595d = _0xc55b7e(_0x2a2ea2);
            if (!_0x149003) {
                _0x197b5a['uniformLocsById'] = _0x149003 = {},
                _0x197b5a['uniformArrayNamesById'] = {};
                for (_0x1d8cd7 = 0x0; _0x1d8cd7 < _0x264078['getProgramParameter'](_0x197b5a, 0x8b86); ++_0x1d8cd7) {
                    var _0x28b14b = _0x264078['getActiveUniform'](_0x197b5a, _0x1d8cd7)
                      , _0x5a7b48 = _0x28b14b['name']
                      , _0x8671d1 = _0x28b14b['size']
                      , _0x5c5367 = _0xc55b7e(_0x5a7b48)
                      , _0x153b67 = _0x5c5367 > 0x0 ? _0x5a7b48['slice'](0x0, _0x5c5367) : _0x5a7b48
                      , _0x5de6e0 = _0x14a76e[_0x153b67] ? _0x14a76e[_0x153b67][0x1] : _0x197b5a['uniformIdCounter'];
                    _0x197b5a['uniformIdCounter'] = Math['max'](_0x5de6e0 + _0x8671d1, _0x197b5a['uniformIdCounter']),
                    _0x14a76e[_0x153b67] = [_0x8671d1, _0x5de6e0];
                    for (_0x10a9b9 = 0x0; _0x10a9b9 < _0x8671d1; ++_0x10a9b9) {
                        _0x149003[_0x5de6e0] = _0x10a9b9,
                        _0x197b5a['uniformArrayNamesById'][_0x5de6e0++] = _0x153b67;
                    }
                }
            }
            _0x3f595d > 0x0 && (_0x1f1755 = _0x4df739(_0x2a2ea2['slice'](_0x3f595d + 0x1)) >>> 0x0,
            _0x2cc0a3 = _0x2a2ea2['slice'](0x0, _0x3f595d));
            var _0x48d76b = _0x14a76e[_0x2cc0a3];
            if (_0x48d76b && _0x1f1755 < _0x48d76b[0x0]) {
                _0x1f1755 += _0x48d76b[0x1];
                if (_0x149003[_0x1f1755] = _0x149003[_0x1f1755] || _0x264078['getUniformLocation'](_0x197b5a, _0x2a2ea2))
                    return _0x1f1755;
            }
        } else
            _0x353c88['recordError'](0x501);
        return -0x1;
    }
    function _0x19a3f2(_0x5dc9cd) {
        var _0x2dd82a = _0x264078['currentProgram'];
        if (_0x2dd82a) {
            var _0x2c51cd = _0x2dd82a['uniformLocsById'][_0x5dc9cd];
            return typeof _0x2c51cd === 'number' && (_0x2dd82a['uniformLocsById'][_0x5dc9cd] = _0x2c51cd = _0x264078['getUniformLocation'](_0x2dd82a, _0x2dd82a['uniformArrayNamesById'][_0x5dc9cd] + (_0x2c51cd > 0x0 ? '[' + _0x2c51cd + ']' : ''))),
            _0x2c51cd;
        } else
            _0x353c88['recordError'](0x502);
    }
    function _0x35fb46(_0x26a276, _0x415205, _0x31ee1d, _0x1cb824) {
        if (!_0x31ee1d) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x26a276 = _0x353c88['programs'][_0x26a276];
        var _0x267335 = _0x264078['getUniform'](_0x26a276, _0x19a3f2(_0x415205));
        if (typeof _0x267335 == 'number' || typeof _0x267335 == 'boolean')
            switch (_0x1cb824) {
            case 0x0:
                _0x593fb9[_0x31ee1d >> 0x2] = _0x267335;
                break;
            case 0x2:
                _0x81f2c2[_0x31ee1d >> 0x2] = _0x267335;
                break;
            }
        else
            for (var _0x259083 = 0x0; _0x259083 < _0x267335['length']; _0x259083++) {
                switch (_0x1cb824) {
                case 0x0:
                    _0x593fb9[_0x31ee1d + _0x259083 * 0x4 >> 0x2] = _0x267335[_0x259083];
                    break;
                case 0x2:
                    _0x81f2c2[_0x31ee1d + _0x259083 * 0x4 >> 0x2] = _0x267335[_0x259083];
                    break;
                }
            }
    }
    function _0x5d9158(_0x2190b0, _0x50bc0a, _0x598345) {
        _0x35fb46(_0x2190b0, _0x50bc0a, _0x598345, 0x0);
    }
    function _0x2dd9dc(_0x14329b, _0xa8039d, _0x34fc26, _0x442a6b) {
        if (!_0x34fc26) {
            _0x353c88['recordError'](0x501);
            return;
        }
        _0x353c88['currentContext']['clientBuffers'][_0x14329b]['enabled'] && _0x5a96d4('glGetVertexAttrib*v on client-side array: not supported, bad data returned');
        var _0x2aedad = _0x264078['getVertexAttrib'](_0x14329b, _0xa8039d);
        if (_0xa8039d == 0x889f)
            _0x593fb9[_0x34fc26 >> 0x2] = _0x2aedad && _0x2aedad['name'];
        else {
            if (typeof _0x2aedad == 'number' || typeof _0x2aedad == 'boolean')
                switch (_0x442a6b) {
                case 0x0:
                    _0x593fb9[_0x34fc26 >> 0x2] = _0x2aedad;
                    break;
                case 0x2:
                    _0x81f2c2[_0x34fc26 >> 0x2] = _0x2aedad;
                    break;
                case 0x5:
                    _0x593fb9[_0x34fc26 >> 0x2] = Math['fround'](_0x2aedad);
                    break;
                }
            else
                for (var _0x52cc31 = 0x0; _0x52cc31 < _0x2aedad['length']; _0x52cc31++) {
                    switch (_0x442a6b) {
                    case 0x0:
                        _0x593fb9[_0x34fc26 + _0x52cc31 * 0x4 >> 0x2] = _0x2aedad[_0x52cc31];
                        break;
                    case 0x2:
                        _0x81f2c2[_0x34fc26 + _0x52cc31 * 0x4 >> 0x2] = _0x2aedad[_0x52cc31];
                        break;
                    case 0x5:
                        _0x593fb9[_0x34fc26 + _0x52cc31 * 0x4 >> 0x2] = Math['fround'](_0x2aedad[_0x52cc31]);
                        break;
                    }
                }
        }
    }
    function _0x29a52f(_0xaeb323, _0x1776d1, _0x27da1e) {
        _0x2dd9dc(_0xaeb323, _0x1776d1, _0x27da1e, 0x5);
    }
    function _0x34eacd(_0x5aa7f4, _0x2937c5, _0x1ec2f8) {
        var _0x4beca9 = _0x293c1d[_0x2937c5];
        for (var _0x408b56 = 0x0; _0x408b56 < _0x2937c5; _0x408b56++) {
            _0x4beca9[_0x408b56] = _0x593fb9[_0x1ec2f8 + _0x408b56 * 0x4 >> 0x2];
        }
        _0x264078['invalidateFramebuffer'](_0x5aa7f4, _0x4beca9);
    }
    function _0x191f6f(_0x4caba9) {
        return _0x264078['isEnabled'](_0x4caba9);
    }
    function _0x2159fa(_0x3c2564) {
        var _0x35fff0 = _0x353c88['vaos'][_0x3c2564];
        if (!_0x35fff0)
            return 0x0;
        return _0x264078['isVertexArray'](_0x35fff0);
    }
    function _0x220366(_0x3c0b67) {
        _0x3c0b67 = _0x353c88['programs'][_0x3c0b67],
        _0x264078['linkProgram'](_0x3c0b67),
        _0x3c0b67['uniformLocsById'] = 0x0,
        _0x3c0b67['uniformSizeAndIdsByName'] = {},
        [_0x3c0b67['vs'], _0x3c0b67['fs']]['forEach'](function(_0x4d5539) {
            Object['keys'](_0x4d5539['explicitUniformLocations'])['forEach'](function(_0x27aa49) {
                var _0x418ad2 = _0x4d5539['explicitUniformLocations'][_0x27aa49];
                _0x3c0b67['uniformSizeAndIdsByName'][_0x27aa49] = [0x1, _0x418ad2],
                _0x3c0b67['uniformIdCounter'] = Math['max'](_0x3c0b67['uniformIdCounter'], _0x418ad2 + 0x1);
            });
        });
        function _0x3d1d8e(_0x1f22b9, _0x2f7cc5) {
            Object['keys'](_0x2f7cc5)['forEach'](function(_0x3e26ba) {
                _0x1f22b9[_0x3e26ba] = _0x2f7cc5[_0x3e26ba];
            });
        }
        _0x3c0b67['explicitUniformBindings'] = {},
        _0x3c0b67['explicitSamplerBindings'] = {},
        [_0x3c0b67['vs'], _0x3c0b67['fs']]['forEach'](function(_0x1112dc) {
            _0x3d1d8e(_0x3c0b67['explicitUniformBindings'], _0x1112dc['explicitUniformBindings']),
            _0x3d1d8e(_0x3c0b67['explicitSamplerBindings'], _0x1112dc['explicitSamplerBindings']);
        }),
        _0x3c0b67['explicitProgramBindingsApplied'] = 0x0;
    }
    function _0x43b219(_0x4f8626, _0xb12614, _0x209f68, _0x482997) {
        if (_0x482997 != 0x1a && _0x482997 != 0xa)
            return _0x5a96d4('glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER'),
            0x0;
        if (!_0x55f6b6(_0x4f8626))
            return _0x353c88['recordError'](0x500),
            _0x5a96d4('GL_INVALID_ENUM in glMapBufferRange'),
            0x0;
        var _0x1743eb = _0x214635(_0x209f68);
        if (!_0x1743eb)
            return 0x0;
        return _0x353c88['mappedBuffers'][_0x51fb93(_0x4f8626)] = {
            'offset': _0xb12614,
            'length': _0x209f68,
            'mem': _0x1743eb,
            'access': _0x482997
        },
        _0x1743eb;
    }
    function _0x45659f(_0x4c18a1, _0x208e0b) {
        _0x4c18a1 == 0xcf5 && (_0x353c88['unpackAlignment'] = _0x208e0b),
        _0x264078['pixelStorei'](_0x4c18a1, _0x208e0b);
    }
    function _0x1df48c(_0x5d93d7, _0x4139ff) {
        _0x264078['polygonOffset'](_0x5d93d7, _0x4139ff);
    }
    function _0x41aff4(_0x14d35e, _0x25e7a4, _0x5ba5e8, _0x40d896) {
        _0x353c88['recordError'](0x500);
    }
    function _0x3ea2e8(_0x13e39d, _0x4a2e01, _0x2245c6) {
        _0x353c88['recordError'](0x500);
    }
    function _0x470303(_0x2d4c29) {
        _0x264078['readBuffer'](_0x2d4c29);
    }
    function _0x55fac2(_0x271c3a, _0x41e816, _0x4a3f56, _0x5dfdc8) {
        function _0x5b2ab1(_0x36f534, _0x447ba9) {
            return _0x36f534 + _0x447ba9 - 0x1 & -_0x447ba9;
        }
        var _0x1f2184 = _0x271c3a * _0x4a3f56
          , _0x1a62fa = _0x5b2ab1(_0x1f2184, _0x5dfdc8);
        return _0x41e816 * _0x1a62fa;
    }
    function _0x40e4b4(_0x198b63) {
        var _0x38bc2a = {
            0x5: 0x3,
            0x6: 0x4,
            0x8: 0x2,
            0x733e: 0x3,
            0x7340: 0x4,
            0x6925: 0x2,
            0x6926: 0x2,
            0x7496: 0x3,
            0x7497: 0x4
        };
        return _0x38bc2a[_0x198b63 - 0x1902] || 0x1;
    }
    function _0x41dda(_0x21d596) {
        _0x21d596 -= 0x1400;
        if (_0x21d596 == 0x0)
            return _0x10882b;
        if (_0x21d596 == 0x1)
            return _0x2ac27b;
        if (_0x21d596 == 0x2)
            return _0x9a762d;
        if (_0x21d596 == 0x4)
            return _0x593fb9;
        if (_0x21d596 == 0x6)
            return _0x81f2c2;
        if (_0x21d596 == 0x5 || _0x21d596 == 0x70fa || _0x21d596 == 0x6f68 || _0x21d596 == 0x783b || _0x21d596 == 0x783e)
            return _0x311b71;
        return _0xb88d42;
    }
    function _0x41dc79(_0x2dadbe) {
        return 0x1f - Math['clz32'](_0x2dadbe['BYTES_PER_ELEMENT']);
    }
    function _0x946366(_0x3044af, _0x480fc2, _0x27db8e, _0x32e881, _0x3e0c9e, _0x3e8fe9) {
        var _0x4f90b6 = _0x41dda(_0x3044af)
          , _0x63ff10 = _0x41dc79(_0x4f90b6)
          , _0x24785b = 0x1 << _0x63ff10
          , _0x44cb8d = _0x40e4b4(_0x480fc2) * _0x24785b
          , _0x51bcdb = _0x55fac2(_0x27db8e, _0x32e881, _0x44cb8d, _0x353c88['unpackAlignment']);
        return _0x4f90b6['subarray'](_0x3e0c9e >> _0x63ff10, _0x3e0c9e + _0x51bcdb >> _0x63ff10);
    }
    function _0x5a793b(_0x4e8a5b, _0x53f631, _0x511af7, _0x2fb634, _0x452e9e, _0x13da77, _0x528365) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            if (_0x264078['currentPixelPackBufferBinding'])
                _0x264078['readPixels'](_0x4e8a5b, _0x53f631, _0x511af7, _0x2fb634, _0x452e9e, _0x13da77, _0x528365);
            else {
                var _0x30b9be = _0x41dda(_0x13da77);
                _0x264078['readPixels'](_0x4e8a5b, _0x53f631, _0x511af7, _0x2fb634, _0x452e9e, _0x13da77, _0x30b9be, _0x528365 >> _0x41dc79(_0x30b9be));
            }
            return;
        }
        var _0x5c142e = _0x946366(_0x13da77, _0x452e9e, _0x511af7, _0x2fb634, _0x528365, _0x452e9e);
        if (!_0x5c142e) {
            _0x353c88['recordError'](0x500);
            return;
        }
        _0x264078['readPixels'](_0x4e8a5b, _0x53f631, _0x511af7, _0x2fb634, _0x452e9e, _0x13da77, _0x5c142e);
    }
    function _0x47331c(_0x127e9a, _0x3f465a, _0x27f521, _0x12ba92) {
        _0x264078['renderbufferStorage'](_0x127e9a, _0x3f465a, _0x27f521, _0x12ba92);
    }
    function _0x344e29(_0x493609, _0x1a3777, _0x249427, _0x414e63, _0x2288ac) {
        _0x264078['renderbufferStorageMultisample'](_0x493609, _0x1a3777, _0x249427, _0x414e63, _0x2288ac);
    }
    function _0x1594de(_0x83938b, _0x333333, _0x53f84a) {
        _0x264078['samplerParameteri'](_0x353c88['samplers'][_0x83938b], _0x333333, _0x53f84a);
    }
    function _0x34329c(_0x5db462, _0x2cd9f4, _0x33db07, _0x470d11) {
        _0x264078['scissor'](_0x5db462, _0x2cd9f4, _0x33db07, _0x470d11);
    }
    function _0x5b196d(_0x4a7854, _0x5ef83f, _0x3aff85='(', _0x4ad271=')') {
        for (var _0x26c00f = 0x0; _0x5ef83f < _0x4a7854['length']; ++_0x5ef83f) {
            if (_0x4a7854[_0x5ef83f] == _0x3aff85)
                ++_0x26c00f;
            if (_0x4a7854[_0x5ef83f] == _0x4ad271 && --_0x26c00f == 0x0)
                return _0x5ef83f;
        }
    }
    function _0x141000(_0x4d395a) {
        var _0x3abd42 = 0x0
          , _0xf04a4b = _0x4d395a['length']
          , _0x1ba409 = ''
          , _0x2bb3d3 = [0x1]
          , _0x2d4cf4 = {
            'defined': function(_0x5758ae) {
                return _0x2d4cf4[_0x5758ae[0x0]] ? 0x1 : 0x0;
            },
            'GL_FRAGMENT_PRECISION_HIGH': function() {
                return 0x1;
            }
        };
        function _0x244ffc(_0x888570, _0xf1e2e1) {
            return !(_0x888570['charCodeAt'](_0xf1e2e1) > 0x20);
        }
        function _0xfdf715(_0x484eb5, _0x99613b) {
            while (!_0x244ffc(_0x484eb5, _0x99613b))
                ++_0x99613b;
            return _0x99613b;
        }
        function _0x58fac6(_0x598c19, _0x386074) {
            var _0x40f7e9 = _0x598c19['charCodeAt'](_0x386074);
            if (_0x40f7e9 > 0x20) {
                if (_0x40f7e9 < 0x30)
                    return 0x1;
                if (_0x40f7e9 < 0x3a)
                    return 0x2;
                if (_0x40f7e9 < 0x41)
                    return 0x1;
                if (_0x40f7e9 < 0x5b || _0x40f7e9 == 0x5f)
                    return 0x3;
                if (_0x40f7e9 < 0x61)
                    return 0x1;
                if (_0x40f7e9 < 0x7b)
                    return 0x3;
                return 0x1;
            }
            return _0x40f7e9 < 0x21 ? 0x0 : 0x4;
        }
        function _0x357c99(_0x2213c8, _0x9776c8) {
            var _0x28c234 = []
              , _0x52cf09 = _0x2213c8['length'];
            for (var _0x47b79b = 0x0; _0x47b79b <= _0x52cf09; ++_0x47b79b) {
                var _0x4daf32 = _0x58fac6(_0x2213c8, _0x47b79b);
                if (_0x4daf32 == 0x2 || _0x4daf32 == 0x3)
                    for (var _0x5e6e0f = _0x47b79b + 0x1; _0x5e6e0f <= _0x52cf09; ++_0x5e6e0f) {
                        var _0x2a8efe = _0x58fac6(_0x2213c8, _0x5e6e0f);
                        if (_0x2a8efe != _0x4daf32 && (_0x2a8efe != 0x2 || _0x4daf32 != 0x3)) {
                            _0x28c234['push'](_0x2213c8['substring'](_0x47b79b, _0x5e6e0f)),
                            _0x47b79b = _0x5e6e0f - 0x1;
                            break;
                        }
                    }
                else {
                    if (_0x4daf32 == 0x1) {
                        var _0x2f3528 = _0x2213c8['substr'](_0x47b79b, 0x2);
                        ['<=', '>=', '==', '!=', '&&', '||']['includes'](_0x2f3528) ? (_0x28c234['push'](_0x2f3528),
                        ++_0x47b79b) : _0x28c234['push'](_0x2213c8[_0x47b79b]);
                    }
                }
            }
            return _0x28c234;
        }
        function _0x3447fb(_0x4bc73a, _0x404f98, _0x3a6f31) {
            if (_0x3a6f31 === undefined)
                _0x3a6f31 = _0x4bc73a['length'];
            var _0x912a01 = _0x4bc73a['length']
              , _0x3c1c64 = '';
            for (var _0xb25da4 = _0x404f98; _0xb25da4 < _0x3a6f31; ++_0xb25da4) {
                var _0x25c546 = _0x58fac6(_0x4bc73a, _0xb25da4);
                if (_0x25c546 == 0x3)
                    for (var _0x3304fa = _0xb25da4 + 0x1; _0x3304fa <= _0x3a6f31; ++_0x3304fa) {
                        var _0x4e1c91 = _0x58fac6(_0x4bc73a, _0x3304fa);
                        if (_0x4e1c91 != 0x2 && _0x4e1c91 != 0x3) {
                            var _0x4b3fa4 = _0x4bc73a['substring'](_0xb25da4, _0x3304fa)
                              , _0x48e28f = _0x2d4cf4[_0x4b3fa4];
                            if (_0x48e28f) {
                                var _0x24075c = _0x4bc73a['substring'](_0x404f98, _0xb25da4);
                                if (_0x48e28f['length'] && _0x4bc73a[_0x3304fa] == '(') {
                                    var _0x10946f = _0x5b196d(_0x4bc73a, _0x3304fa);
                                    _0x24075c += _0x48e28f(_0x4bc73a['substring'](_0x3304fa + 0x1, _0x10946f)['split'](',')) + _0x4bc73a['substring'](_0x10946f + 0x1, _0x3a6f31);
                                } else
                                    _0x24075c += _0x48e28f() + _0x4bc73a['substring'](_0x3304fa, _0x3a6f31);
                                return _0x3447fb(_0x24075c, 0x0);
                            } else {
                                _0x3c1c64 += _0x4b3fa4,
                                _0xb25da4 = _0x3304fa - 0x1;
                                break;
                            }
                        }
                    }
                else
                    _0x3c1c64 += _0x4bc73a[_0xb25da4];
            }
            return _0x3c1c64;
        }
        function _0x3d0d29(_0x31543a) {
            while (_0x31543a['length'] > 0x1 || typeof _0x31543a[0x0] != 'function') {
                _0x31543a = function(_0x24af57) {
                    var _0x1efbec, _0x2d09b8, _0x410f48, _0x56d61c = -0x2;
                    for (_0x2d09b8 = 0x0; _0x2d09b8 < _0x24af57['length']; ++_0x2d09b8) {
                        (_0x410f48 = ['*', '/', '+', '-', '!', '<', '<=', '>', '>=', '==', '!=', '&&', '||', '(']['indexOf'](_0x24af57[_0x2d09b8])) > _0x56d61c && (_0x1efbec = _0x2d09b8,
                        _0x56d61c = _0x410f48);
                    }
                    if (_0x56d61c == 0xd) {
                        var _0x2d09b8 = _0x5b196d(_0x24af57, _0x1efbec);
                        if (_0x2d09b8)
                            return _0x24af57['splice'](_0x1efbec, _0x2d09b8 + 0x1 - _0x1efbec, _0x3d0d29(_0x24af57['slice'](_0x1efbec + 0x1, _0x2d09b8))),
                            _0x24af57;
                    }
                    if (_0x56d61c == 0x4) {
                        _0x1efbec = _0x24af57['lastIndexOf']('!');
                        var _0x21250f = _0x3d0d29(_0x24af57['slice'](_0x1efbec + 0x1, _0x1efbec + 0x2));
                        return _0x24af57['splice'](_0x1efbec, 0x2, function() {
                            return !_0x21250f();
                        }),
                        _0x24af57;
                    }
                    if (_0x56d61c >= 0x0) {
                        var _0x443781 = _0x3d0d29(_0x24af57['slice'](0x0, _0x1efbec))
                          , _0x1b2999 = _0x3d0d29(_0x24af57['slice'](_0x1efbec + 0x1));
                        switch (_0x24af57[_0x1efbec]) {
                        case '&&':
                            return [function() {
                                return _0x443781() && _0x1b2999();
                            }
                            ];
                        case '||':
                            return [function() {
                                return _0x443781() || _0x1b2999();
                            }
                            ];
                        case '==':
                            return [function() {
                                return _0x443781() == _0x1b2999();
                            }
                            ];
                        case '!=':
                            return [function() {
                                return _0x443781() != _0x1b2999();
                            }
                            ];
                        case '<':
                            return [function() {
                                return _0x443781() < _0x1b2999();
                            }
                            ];
                        case '<=':
                            return [function() {
                                return _0x443781() <= _0x1b2999();
                            }
                            ];
                        case '>':
                            return [function() {
                                return _0x443781() > _0x1b2999();
                            }
                            ];
                        case '>=':
                            return [function() {
                                return _0x443781() >= _0x1b2999();
                            }
                            ];
                        case '+':
                            return [function() {
                                return _0x443781() + _0x1b2999();
                            }
                            ];
                        case '-':
                            return [function() {
                                return _0x443781() - _0x1b2999();
                            }
                            ];
                        case '*':
                            return [function() {
                                return _0x443781() * _0x1b2999();
                            }
                            ];
                        case '/':
                            return [function() {
                                return Math['floor'](_0x443781() / _0x1b2999());
                            }
                            ];
                        }
                    }
                    var _0x70fa1b = _0x4df739(_0x24af57[_0x1efbec]);
                    return [function() {
                        return _0x70fa1b;
                    }
                    ];
                }(_0x31543a);
            }
            return _0x31543a[0x0];
        }
        for (; _0x3abd42 < _0xf04a4b; ++_0x3abd42) {
            var _0x17faf7 = _0x3abd42;
            _0x3abd42 = _0x4d395a['indexOf']('
', _0x3abd42);
            if (_0x3abd42 < 0x0)
                _0x3abd42 = _0xf04a4b;
            for (var _0x30c248 = _0x17faf7; _0x30c248 < _0x3abd42 && _0x244ffc(_0x4d395a, _0x30c248); ++_0x30c248)
                ;
            var _0x2e5473 = _0x2bb3d3[_0x2bb3d3['length'] - 0x1];
            if (_0x4d395a[_0x30c248] != '#') {
                _0x2e5473 && (_0x1ba409 += _0x3447fb(_0x4d395a, _0x17faf7, _0x3abd42) + '
');
                continue;
            }
            var _0x3c676f = _0xfdf715(_0x4d395a, _0x30c248)
              , _0x59391e = _0x4d395a['substring'](_0x30c248 + 0x1, _0x3c676f)
              , _0x2dbd43 = _0x4d395a['substring'](_0x3c676f, _0x3abd42)['trim']();
            switch (_0x59391e) {
            case 'if':
                var _0x51627a = _0x357c99(_0x3447fb(_0x2dbd43, 0x0))
                  , _0x148e1c = _0x3d0d29(_0x51627a)
                  , _0x182a9c = _0x148e1c();
                _0x2bb3d3['push'](!!_0x182a9c * _0x2bb3d3[_0x2bb3d3['length'] - 0x1]);
                break;
            case 'ifdef':
                _0x2bb3d3['push'](!!_0x2d4cf4[_0x2dbd43] * _0x2bb3d3[_0x2bb3d3['length'] - 0x1]);
                break;
            case 'ifndef':
                _0x2bb3d3['push'](!_0x2d4cf4[_0x2dbd43] * _0x2bb3d3[_0x2bb3d3['length'] - 0x1]);
                break;
            case 'else':
                _0x2bb3d3[_0x2bb3d3['length'] - 0x1] = 0x1 - _0x2bb3d3[_0x2bb3d3['length'] - 0x1];
                break;
            case 'endif':
                _0x2bb3d3['pop']();
                break;
            case 'define':
                if (_0x2e5473) {
                    var _0x309423 = _0x2dbd43['indexOf']('(')
                      , _0x28c753 = _0xfdf715(_0x2dbd43, 0x0);
                    if (_0x28c753 < _0x309423)
                        _0x309423 = 0x0;
                    if (_0x309423 > 0x0) {
                        var _0x34ceb2 = _0x2dbd43['indexOf'](')', _0x309423);
                        let _0x3ddcde = _0x2dbd43['substring'](_0x309423 + 0x1, _0x34ceb2)['split'](',')['map'](_0x30aad7 => _0x30aad7['trim']())
                          , _0x2c520b = _0x357c99(_0x2dbd43['substring'](_0x34ceb2 + 0x1)['trim']());
                        _0x2d4cf4[_0x2dbd43['substring'](0x0, _0x309423)] = function(_0x29f718) {
                            var _0x28d5f2 = '';
                            return _0x2c520b['forEach'](_0x17f92a => {
                                var _0x4a1809 = _0x3ddcde['indexOf'](_0x17f92a);
                                _0x28d5f2 += _0x4a1809 >= 0x0 ? _0x29f718[_0x4a1809] : _0x17f92a;
                            }
                            ),
                            _0x28d5f2;
                        }
                        ;
                    } else {
                        let _0x5d61ad = _0x3447fb(_0x2dbd43['substring'](_0x28c753 + 0x1)['trim'](), 0x0);
                        _0x2d4cf4[_0x2dbd43['substring'](0x0, _0x28c753)] = function() {
                            return _0x5d61ad;
                        }
                        ;
                    }
                }
                break;
            case 'undef':
                if (_0x2e5473)
                    delete _0x2d4cf4[_0x2dbd43];
                break;
            default:
                if (_0x59391e != 'version' && _0x59391e != 'pragma' && _0x59391e != 'extension') {}
                _0x1ba409 += _0x3447fb(_0x4d395a, _0x17faf7, _0x3abd42) + '
';
            }
        }
        return _0x1ba409;
    }
    function _0x121d42(_0x234023) {
        var _0xb904d1 = 0x0, _0x53d402 = '', _0x2632e3, _0x1a9776, _0x3375d5 = _0x234023['length'];
        for (; _0xb904d1 < _0x3375d5; ++_0xb904d1) {
            _0x2632e3 = _0x234023[_0xb904d1];
            if (_0x2632e3 == '/') {
                _0x1a9776 = _0x234023[_0xb904d1 + 0x1];
                if (_0x1a9776 == '/') {
                    while (_0xb904d1 < _0x3375d5 && _0x234023[_0xb904d1 + 0x1] != '
')
                        ++_0xb904d1;
                } else {
                    if (_0x1a9776 == '*') {
                        while (_0xb904d1 < _0x3375d5 && (_0x234023[_0xb904d1 - 0x1] != '*' || _0x234023[_0xb904d1] != '/'))
                            ++_0xb904d1;
                    } else
                        _0x53d402 += _0x2632e3;
                }
            } else
                _0x53d402 += _0x2632e3;
        }
        return _0x53d402;
    }
    function _0x2db8c0(_0x2e9a72, _0x537f08, _0x58993c, _0x500c47) {
        var _0x3592eb = _0x353c88['getSource'](_0x2e9a72, _0x537f08, _0x58993c, _0x500c47);
        _0x3592eb = _0x141000(_0x121d42(_0x3592eb));
        var _0x540768 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g, _0x40abbb = {}, _0x1d5f82;
        while (_0x1d5f82 = _0x540768['exec'](_0x3592eb)) {
            _0x40abbb[_0x1d5f82[0x5]] = _0x4df739(_0x1d5f82[0x1]);
            if (!(_0x40abbb[_0x1d5f82[0x5]] >= 0x0 && _0x40abbb[_0x1d5f82[0x5]] < 0x100000)) {
                console['error']('Specified an out of range layout(location=x) directive "' + _0x40abbb[_0x1d5f82[0x5]] + '"! (' + _0x1d5f82[0x0] + ')'),
                _0x353c88['recordError'](0x501);
                return;
            }
        }
        _0x3592eb = _0x3592eb['replace'](_0x540768, '$2'),
        _0x353c88['shaders'][_0x2e9a72]['explicitUniformLocations'] = _0x40abbb;
        var _0x14381f = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g, _0x20d508 = {}, _0x22d9ae = {}, _0xfa813b;
        while (_0xfa813b = _0x14381f['exec'](_0x3592eb)) {
            var _0x329072 = 0x1;
            for (var _0x1b9523 = _0xfa813b['index']; _0x1b9523 < _0x3592eb['length'] && _0x3592eb[_0x1b9523] != ';'; ++_0x1b9523) {
                if (_0x3592eb[_0x1b9523] == '[') {
                    _0x329072 = _0x4df739(_0x3592eb['slice'](_0x1b9523 + 0x1));
                    break;
                }
                if (_0x3592eb[_0x1b9523] == '{')
                    _0x1b9523 = _0x5b196d(_0x3592eb, _0x1b9523, '{', '}') - 0x1;
            }
            var _0x587b44 = _0x4df739(_0xfa813b[0x1])
              , _0x43af7c = 0x8872;
            _0xfa813b[0x3] && _0xfa813b[0x2]['indexOf']('sampler') != -0x1 ? _0x20d508[_0xfa813b[0x3]] = [_0x587b44, _0x329072] : (_0x43af7c = 0x8a2e,
            _0x22d9ae[_0xfa813b[0x2]] = [_0x587b44, _0x329072]);
            var _0xd817c2 = _0x264078['getParameter'](_0x43af7c);
            if (!(_0x587b44 >= 0x0 && _0x587b44 + _0x329072 <= _0xd817c2)) {
                console['error']('Specified an out of range layout(binding=x) directive "' + _0x587b44 + '"! (' + _0xfa813b[0x0] + '). Valid range is [0, ' + _0xd817c2 + '-1]'),
                _0x353c88['recordError'](0x501);
                return;
            }
        }
        _0x3592eb = _0x3592eb['replace'](/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, ''),
        _0x3592eb = _0x3592eb['replace'](/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, '$1)'),
        _0x3592eb = _0x3592eb['replace'](/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, 'layout($2)'),
        _0x353c88['shaders'][_0x2e9a72]['explicitSamplerBindings'] = _0x20d508,
        _0x353c88['shaders'][_0x2e9a72]['explicitUniformBindings'] = _0x22d9ae,
        _0x264078['shaderSource'](_0x353c88['shaders'][_0x2e9a72], _0x3592eb);
    }
    function _0x11bb58(_0x532702, _0x39725d, _0x34326d, _0x1ce602) {
        _0x264078['stencilFuncSeparate'](_0x532702, _0x39725d, _0x34326d, _0x1ce602);
    }
    function _0x433b1d(_0x3e1939) {
        _0x264078['stencilMask'](_0x3e1939);
    }
    function _0x4b8d8f(_0x4047cc, _0x357cdc, _0x420f6b, _0xf317d0) {
        _0x264078['stencilOpSeparate'](_0x4047cc, _0x357cdc, _0x420f6b, _0xf317d0);
    }
    function _0x211a4f(_0x357b13, _0x12dd53, _0x503b2d, _0x322ecf, _0x3509af, _0x263d4d, _0x4e8e20, _0x42d184, _0x4726c6) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            if (_0x264078['currentPixelUnpackBufferBinding'])
                _0x264078['texImage2D'](_0x357b13, _0x12dd53, _0x503b2d, _0x322ecf, _0x3509af, _0x263d4d, _0x4e8e20, _0x42d184, _0x4726c6);
            else {
                if (_0x4726c6) {
                    var _0x30d080 = _0x41dda(_0x42d184);
                    _0x264078['texImage2D'](_0x357b13, _0x12dd53, _0x503b2d, _0x322ecf, _0x3509af, _0x263d4d, _0x4e8e20, _0x42d184, _0x30d080, _0x4726c6 >> _0x41dc79(_0x30d080));
                } else
                    _0x264078['texImage2D'](_0x357b13, _0x12dd53, _0x503b2d, _0x322ecf, _0x3509af, _0x263d4d, _0x4e8e20, _0x42d184, null);
            }
            return;
        }
        _0x264078['texImage2D'](_0x357b13, _0x12dd53, _0x503b2d, _0x322ecf, _0x3509af, _0x263d4d, _0x4e8e20, _0x42d184, _0x4726c6 ? _0x946366(_0x42d184, _0x4e8e20, _0x322ecf, _0x3509af, _0x4726c6, _0x503b2d) : null);
    }
    function _0x1029de(_0x33ec33, _0x5b5a1f, _0x51f17a, _0x2deb2f, _0x38793f, _0x90696b, _0x4a307c, _0x2ed3c4, _0x488b24, _0x9c82dc) {
        if (_0x264078['currentPixelUnpackBufferBinding'])
            _0x264078['texImage3D'](_0x33ec33, _0x5b5a1f, _0x51f17a, _0x2deb2f, _0x38793f, _0x90696b, _0x4a307c, _0x2ed3c4, _0x488b24, _0x9c82dc);
        else {
            if (_0x9c82dc) {
                var _0x3f05cc = _0x41dda(_0x488b24);
                _0x264078['texImage3D'](_0x33ec33, _0x5b5a1f, _0x51f17a, _0x2deb2f, _0x38793f, _0x90696b, _0x4a307c, _0x2ed3c4, _0x488b24, _0x3f05cc, _0x9c82dc >> _0x41dc79(_0x3f05cc));
            } else
                _0x264078['texImage3D'](_0x33ec33, _0x5b5a1f, _0x51f17a, _0x2deb2f, _0x38793f, _0x90696b, _0x4a307c, _0x2ed3c4, _0x488b24, null);
        }
    }
    function _0x103784(_0xc62030, _0x470fb7, _0x65721b) {
        _0x264078['texParameterf'](_0xc62030, _0x470fb7, _0x65721b);
    }
    function _0x18b31e(_0x4f4caa, _0x2c3bf4, _0x23a62b) {
        _0x264078['texParameteri'](_0x4f4caa, _0x2c3bf4, _0x23a62b);
    }
    function _0x532dbf(_0x1d5ba9, _0x2e0ef3, _0x4180d4) {
        var _0x209821 = _0x593fb9[_0x4180d4 >> 0x2];
        _0x264078['texParameteri'](_0x1d5ba9, _0x2e0ef3, _0x209821);
    }
    function _0xc1100(_0x46cb9c, _0x34996d, _0x3bf233, _0x4f2065, _0x466632) {
        _0x264078['texStorage2D'](_0x46cb9c, _0x34996d, _0x3bf233, _0x4f2065, _0x466632);
    }
    function _0x218914(_0x4c0eb5, _0x1ce50e, _0x27033e, _0x5fd1a7, _0x15a56c, _0x4027c9) {
        _0x264078['texStorage3D'](_0x4c0eb5, _0x1ce50e, _0x27033e, _0x5fd1a7, _0x15a56c, _0x4027c9);
    }
    function _0x5da145(_0x15d571, _0x5d2b63, _0x6a43d4, _0x3dd0c9, _0x3c4f4f, _0x5a138e, _0x352771, _0xc53b6e, _0x19a99a) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            if (_0x264078['currentPixelUnpackBufferBinding'])
                _0x264078['texSubImage2D'](_0x15d571, _0x5d2b63, _0x6a43d4, _0x3dd0c9, _0x3c4f4f, _0x5a138e, _0x352771, _0xc53b6e, _0x19a99a);
            else {
                if (_0x19a99a) {
                    var _0x166fb8 = _0x41dda(_0xc53b6e);
                    _0x264078['texSubImage2D'](_0x15d571, _0x5d2b63, _0x6a43d4, _0x3dd0c9, _0x3c4f4f, _0x5a138e, _0x352771, _0xc53b6e, _0x166fb8, _0x19a99a >> _0x41dc79(_0x166fb8));
                } else
                    _0x264078['texSubImage2D'](_0x15d571, _0x5d2b63, _0x6a43d4, _0x3dd0c9, _0x3c4f4f, _0x5a138e, _0x352771, _0xc53b6e, null);
            }
            return;
        }
        var _0x2a152f = null;
        if (_0x19a99a)
            _0x2a152f = _0x946366(_0xc53b6e, _0x352771, _0x3c4f4f, _0x5a138e, _0x19a99a, 0x0);
        _0x264078['texSubImage2D'](_0x15d571, _0x5d2b63, _0x6a43d4, _0x3dd0c9, _0x3c4f4f, _0x5a138e, _0x352771, _0xc53b6e, _0x2a152f);
    }
    function _0x345751(_0x560790, _0xc82aa5, _0x261621, _0x5baef3, _0x24a02c, _0x535020, _0x2827c4, _0x5862c9, _0xcd9b5d, _0x1c5e90, _0x206ae8) {
        if (_0x264078['currentPixelUnpackBufferBinding'])
            _0x264078['texSubImage3D'](_0x560790, _0xc82aa5, _0x261621, _0x5baef3, _0x24a02c, _0x535020, _0x2827c4, _0x5862c9, _0xcd9b5d, _0x1c5e90, _0x206ae8);
        else {
            if (_0x206ae8) {
                var _0x136411 = _0x41dda(_0x1c5e90);
                _0x264078['texSubImage3D'](_0x560790, _0xc82aa5, _0x261621, _0x5baef3, _0x24a02c, _0x535020, _0x2827c4, _0x5862c9, _0xcd9b5d, _0x1c5e90, _0x136411, _0x206ae8 >> _0x41dc79(_0x136411));
            } else
                _0x264078['texSubImage3D'](_0x560790, _0xc82aa5, _0x261621, _0x5baef3, _0x24a02c, _0x535020, _0x2827c4, _0x5862c9, _0xcd9b5d, _0x1c5e90, null);
        }
    }
    function _0x352e51(_0x15bef6, _0x26199e, _0x4ca890, _0x180f8e) {
        _0x15bef6 = _0x353c88['programs'][_0x15bef6];
        var _0x28eed1 = [];
        for (var _0x54d5d2 = 0x0; _0x54d5d2 < _0x26199e; _0x54d5d2++)
            _0x28eed1['push'](_0x46211(_0x593fb9[_0x4ca890 + _0x54d5d2 * 0x4 >> 0x2]));
        _0x264078['transformFeedbackVaryings'](_0x15bef6, _0x28eed1, _0x180f8e);
    }
    var _0x44ce39 = [];
    function _0x5f81dd(_0x2a3cf1, _0x5e6b07, _0x1ee28c) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform1fv'](_0x19a3f2(_0x2a3cf1), _0x81f2c2, _0x1ee28c >> 0x2, _0x5e6b07);
            return;
        }
        if (_0x5e6b07 <= 0x120) {
            var _0x434a1e = _0x44ce39[_0x5e6b07 - 0x1];
            for (var _0x33a53f = 0x0; _0x33a53f < _0x5e6b07; ++_0x33a53f) {
                _0x434a1e[_0x33a53f] = _0x81f2c2[_0x1ee28c + 0x4 * _0x33a53f >> 0x2];
            }
        } else
            var _0x434a1e = _0x81f2c2['subarray'](_0x1ee28c >> 0x2, _0x1ee28c + _0x5e6b07 * 0x4 >> 0x2);
        _0x264078['uniform1fv'](_0x19a3f2(_0x2a3cf1), _0x434a1e);
    }
    function _0x8f4005(_0x305e2a, _0x46405e) {
        _0x264078['uniform1i'](_0x19a3f2(_0x305e2a), _0x46405e);
    }
    var _0x4871c6 = [];
    function _0x1da38f(_0x54a4c6, _0x41c2f2, _0x475323) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform1iv'](_0x19a3f2(_0x54a4c6), _0x593fb9, _0x475323 >> 0x2, _0x41c2f2);
            return;
        }
        if (_0x41c2f2 <= 0x120) {
            var _0x2791b6 = _0x4871c6[_0x41c2f2 - 0x1];
            for (var _0x2b62a5 = 0x0; _0x2b62a5 < _0x41c2f2; ++_0x2b62a5) {
                _0x2791b6[_0x2b62a5] = _0x593fb9[_0x475323 + 0x4 * _0x2b62a5 >> 0x2];
            }
        } else
            var _0x2791b6 = _0x593fb9['subarray'](_0x475323 >> 0x2, _0x475323 + _0x41c2f2 * 0x4 >> 0x2);
        _0x264078['uniform1iv'](_0x19a3f2(_0x54a4c6), _0x2791b6);
    }
    function _0x1af5e9(_0x456076, _0x25745e, _0x4b242b) {
        _0x264078['uniform1uiv'](_0x19a3f2(_0x456076), _0x311b71, _0x4b242b >> 0x2, _0x25745e);
    }
    function _0x19fec6(_0x183965, _0x1affbe, _0x31c323) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform2fv'](_0x19a3f2(_0x183965), _0x81f2c2, _0x31c323 >> 0x2, _0x1affbe * 0x2);
            return;
        }
        if (_0x1affbe <= 0x90) {
            var _0x578223 = _0x44ce39[0x2 * _0x1affbe - 0x1];
            for (var _0x4e5b5f = 0x0; _0x4e5b5f < 0x2 * _0x1affbe; _0x4e5b5f += 0x2) {
                _0x578223[_0x4e5b5f] = _0x81f2c2[_0x31c323 + 0x4 * _0x4e5b5f >> 0x2],
                _0x578223[_0x4e5b5f + 0x1] = _0x81f2c2[_0x31c323 + (0x4 * _0x4e5b5f + 0x4) >> 0x2];
            }
        } else
            var _0x578223 = _0x81f2c2['subarray'](_0x31c323 >> 0x2, _0x31c323 + _0x1affbe * 0x8 >> 0x2);
        _0x264078['uniform2fv'](_0x19a3f2(_0x183965), _0x578223);
    }
    function _0x500864(_0x373f12, _0xd8b33f, _0x7e72d8) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform2iv'](_0x19a3f2(_0x373f12), _0x593fb9, _0x7e72d8 >> 0x2, _0xd8b33f * 0x2);
            return;
        }
        if (_0xd8b33f <= 0x90) {
            var _0x251740 = _0x4871c6[0x2 * _0xd8b33f - 0x1];
            for (var _0x4ce11f = 0x0; _0x4ce11f < 0x2 * _0xd8b33f; _0x4ce11f += 0x2) {
                _0x251740[_0x4ce11f] = _0x593fb9[_0x7e72d8 + 0x4 * _0x4ce11f >> 0x2],
                _0x251740[_0x4ce11f + 0x1] = _0x593fb9[_0x7e72d8 + (0x4 * _0x4ce11f + 0x4) >> 0x2];
            }
        } else
            var _0x251740 = _0x593fb9['subarray'](_0x7e72d8 >> 0x2, _0x7e72d8 + _0xd8b33f * 0x8 >> 0x2);
        _0x264078['uniform2iv'](_0x19a3f2(_0x373f12), _0x251740);
    }
    function _0x14f9dc(_0x522e47, _0x524100, _0x29a745) {
        _0x264078['uniform2uiv'](_0x19a3f2(_0x522e47), _0x311b71, _0x29a745 >> 0x2, _0x524100 * 0x2);
    }
    function _0x2f914c(_0x9a5500, _0x1d12c0, _0x3436a9) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform3fv'](_0x19a3f2(_0x9a5500), _0x81f2c2, _0x3436a9 >> 0x2, _0x1d12c0 * 0x3);
            return;
        }
        if (_0x1d12c0 <= 0x60) {
            var _0x5dc721 = _0x44ce39[0x3 * _0x1d12c0 - 0x1];
            for (var _0x1a4acc = 0x0; _0x1a4acc < 0x3 * _0x1d12c0; _0x1a4acc += 0x3) {
                _0x5dc721[_0x1a4acc] = _0x81f2c2[_0x3436a9 + 0x4 * _0x1a4acc >> 0x2],
                _0x5dc721[_0x1a4acc + 0x1] = _0x81f2c2[_0x3436a9 + (0x4 * _0x1a4acc + 0x4) >> 0x2],
                _0x5dc721[_0x1a4acc + 0x2] = _0x81f2c2[_0x3436a9 + (0x4 * _0x1a4acc + 0x8) >> 0x2];
            }
        } else
            var _0x5dc721 = _0x81f2c2['subarray'](_0x3436a9 >> 0x2, _0x3436a9 + _0x1d12c0 * 0xc >> 0x2);
        _0x264078['uniform3fv'](_0x19a3f2(_0x9a5500), _0x5dc721);
    }
    function _0x5aca23(_0x32fb06, _0x329d76, _0x4e3421) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform3iv'](_0x19a3f2(_0x32fb06), _0x593fb9, _0x4e3421 >> 0x2, _0x329d76 * 0x3);
            return;
        }
        if (_0x329d76 <= 0x60) {
            var _0x1f03ef = _0x4871c6[0x3 * _0x329d76 - 0x1];
            for (var _0x3b9f02 = 0x0; _0x3b9f02 < 0x3 * _0x329d76; _0x3b9f02 += 0x3) {
                _0x1f03ef[_0x3b9f02] = _0x593fb9[_0x4e3421 + 0x4 * _0x3b9f02 >> 0x2],
                _0x1f03ef[_0x3b9f02 + 0x1] = _0x593fb9[_0x4e3421 + (0x4 * _0x3b9f02 + 0x4) >> 0x2],
                _0x1f03ef[_0x3b9f02 + 0x2] = _0x593fb9[_0x4e3421 + (0x4 * _0x3b9f02 + 0x8) >> 0x2];
            }
        } else
            var _0x1f03ef = _0x593fb9['subarray'](_0x4e3421 >> 0x2, _0x4e3421 + _0x329d76 * 0xc >> 0x2);
        _0x264078['uniform3iv'](_0x19a3f2(_0x32fb06), _0x1f03ef);
    }
    function _0x74a737(_0x506bfe, _0x1cd685, _0x535dfc) {
        _0x264078['uniform3uiv'](_0x19a3f2(_0x506bfe), _0x311b71, _0x535dfc >> 0x2, _0x1cd685 * 0x3);
    }
    function _0x591070(_0x217a94, _0x2e8c43, _0x2c1338) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform4fv'](_0x19a3f2(_0x217a94), _0x81f2c2, _0x2c1338 >> 0x2, _0x2e8c43 * 0x4);
            return;
        }
        if (_0x2e8c43 <= 0x48) {
            var _0x566ea7 = _0x44ce39[0x4 * _0x2e8c43 - 0x1]
              , _0x3d91fc = _0x81f2c2;
            _0x2c1338 >>= 0x2;
            for (var _0x427212 = 0x0; _0x427212 < 0x4 * _0x2e8c43; _0x427212 += 0x4) {
                var _0x4a0456 = _0x2c1338 + _0x427212;
                _0x566ea7[_0x427212] = _0x3d91fc[_0x4a0456],
                _0x566ea7[_0x427212 + 0x1] = _0x3d91fc[_0x4a0456 + 0x1],
                _0x566ea7[_0x427212 + 0x2] = _0x3d91fc[_0x4a0456 + 0x2],
                _0x566ea7[_0x427212 + 0x3] = _0x3d91fc[_0x4a0456 + 0x3];
            }
        } else
            var _0x566ea7 = _0x81f2c2['subarray'](_0x2c1338 >> 0x2, _0x2c1338 + _0x2e8c43 * 0x10 >> 0x2);
        _0x264078['uniform4fv'](_0x19a3f2(_0x217a94), _0x566ea7);
    }
    function _0x40e110(_0x569412, _0x5a24b8, _0x48426e) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniform4iv'](_0x19a3f2(_0x569412), _0x593fb9, _0x48426e >> 0x2, _0x5a24b8 * 0x4);
            return;
        }
        if (_0x5a24b8 <= 0x48) {
            var _0x497249 = _0x4871c6[0x4 * _0x5a24b8 - 0x1];
            for (var _0x4c3e06 = 0x0; _0x4c3e06 < 0x4 * _0x5a24b8; _0x4c3e06 += 0x4) {
                _0x497249[_0x4c3e06] = _0x593fb9[_0x48426e + 0x4 * _0x4c3e06 >> 0x2],
                _0x497249[_0x4c3e06 + 0x1] = _0x593fb9[_0x48426e + (0x4 * _0x4c3e06 + 0x4) >> 0x2],
                _0x497249[_0x4c3e06 + 0x2] = _0x593fb9[_0x48426e + (0x4 * _0x4c3e06 + 0x8) >> 0x2],
                _0x497249[_0x4c3e06 + 0x3] = _0x593fb9[_0x48426e + (0x4 * _0x4c3e06 + 0xc) >> 0x2];
            }
        } else
            var _0x497249 = _0x593fb9['subarray'](_0x48426e >> 0x2, _0x48426e + _0x5a24b8 * 0x10 >> 0x2);
        _0x264078['uniform4iv'](_0x19a3f2(_0x569412), _0x497249);
    }
    function _0x1309cf(_0x5adc8a, _0x72382, _0x23c453) {
        _0x264078['uniform4uiv'](_0x19a3f2(_0x5adc8a), _0x311b71, _0x23c453 >> 0x2, _0x72382 * 0x4);
    }
    function _0x416b34(_0x45033e, _0x4a788a, _0x5fd20c) {
        _0x45033e = _0x353c88['programs'][_0x45033e],
        _0x264078['uniformBlockBinding'](_0x45033e, _0x4a788a, _0x5fd20c);
    }
    function _0x128413(_0x379860, _0x45b7cc, _0x41cf99, _0x11c5bb) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniformMatrix3fv'](_0x19a3f2(_0x379860), !!_0x41cf99, _0x81f2c2, _0x11c5bb >> 0x2, _0x45b7cc * 0x9);
            return;
        }
        if (_0x45b7cc <= 0x20) {
            var _0x4b3010 = _0x44ce39[0x9 * _0x45b7cc - 0x1];
            for (var _0x407fc2 = 0x0; _0x407fc2 < 0x9 * _0x45b7cc; _0x407fc2 += 0x9) {
                _0x4b3010[_0x407fc2] = _0x81f2c2[_0x11c5bb + 0x4 * _0x407fc2 >> 0x2],
                _0x4b3010[_0x407fc2 + 0x1] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x4) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x2] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x8) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x3] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0xc) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x4] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x10) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x5] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x14) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x6] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x18) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x7] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x1c) >> 0x2],
                _0x4b3010[_0x407fc2 + 0x8] = _0x81f2c2[_0x11c5bb + (0x4 * _0x407fc2 + 0x20) >> 0x2];
            }
        } else
            var _0x4b3010 = _0x81f2c2['subarray'](_0x11c5bb >> 0x2, _0x11c5bb + _0x45b7cc * 0x24 >> 0x2);
        _0x264078['uniformMatrix3fv'](_0x19a3f2(_0x379860), !!_0x41cf99, _0x4b3010);
    }
    function _0x14da5b(_0x65982f, _0x5e5615, _0x17984c, _0x359cb5) {
        if (_0x353c88['currentContext']['version'] >= 0x2) {
            _0x264078['uniformMatrix4fv'](_0x19a3f2(_0x65982f), !!_0x17984c, _0x81f2c2, _0x359cb5 >> 0x2, _0x5e5615 * 0x10);
            return;
        }
        if (_0x5e5615 <= 0x12) {
            var _0x3a5b04 = _0x44ce39[0x10 * _0x5e5615 - 0x1]
              , _0x1eda3f = _0x81f2c2;
            _0x359cb5 >>= 0x2;
            for (var _0x3391db = 0x0; _0x3391db < 0x10 * _0x5e5615; _0x3391db += 0x10) {
                var _0x480b41 = _0x359cb5 + _0x3391db;
                _0x3a5b04[_0x3391db] = _0x1eda3f[_0x480b41],
                _0x3a5b04[_0x3391db + 0x1] = _0x1eda3f[_0x480b41 + 0x1],
                _0x3a5b04[_0x3391db + 0x2] = _0x1eda3f[_0x480b41 + 0x2],
                _0x3a5b04[_0x3391db + 0x3] = _0x1eda3f[_0x480b41 + 0x3],
                _0x3a5b04[_0x3391db + 0x4] = _0x1eda3f[_0x480b41 + 0x4],
                _0x3a5b04[_0x3391db + 0x5] = _0x1eda3f[_0x480b41 + 0x5],
                _0x3a5b04[_0x3391db + 0x6] = _0x1eda3f[_0x480b41 + 0x6],
                _0x3a5b04[_0x3391db + 0x7] = _0x1eda3f[_0x480b41 + 0x7],
                _0x3a5b04[_0x3391db + 0x8] = _0x1eda3f[_0x480b41 + 0x8],
                _0x3a5b04[_0x3391db + 0x9] = _0x1eda3f[_0x480b41 + 0x9],
                _0x3a5b04[_0x3391db + 0xa] = _0x1eda3f[_0x480b41 + 0xa],
                _0x3a5b04[_0x3391db + 0xb] = _0x1eda3f[_0x480b41 + 0xb],
                _0x3a5b04[_0x3391db + 0xc] = _0x1eda3f[_0x480b41 + 0xc],
                _0x3a5b04[_0x3391db + 0xd] = _0x1eda3f[_0x480b41 + 0xd],
                _0x3a5b04[_0x3391db + 0xe] = _0x1eda3f[_0x480b41 + 0xe],
                _0x3a5b04[_0x3391db + 0xf] = _0x1eda3f[_0x480b41 + 0xf];
            }
        } else
            var _0x3a5b04 = _0x81f2c2['subarray'](_0x359cb5 >> 0x2, _0x359cb5 + _0x5e5615 * 0x40 >> 0x2);
        _0x264078['uniformMatrix4fv'](_0x19a3f2(_0x65982f), !!_0x17984c, _0x3a5b04);
    }
    function _0xf76c72(_0x2602fd) {
        if (!_0x55f6b6(_0x2602fd))
            return _0x353c88['recordError'](0x500),
            _0x5a96d4('GL_INVALID_ENUM in glUnmapBuffer'),
            0x0;
        var _0x1435e5 = _0x51fb93(_0x2602fd)
          , _0x1d974e = _0x353c88['mappedBuffers'][_0x1435e5];
        if (!_0x1d974e)
            return _0x353c88['recordError'](0x502),
            _0x5a96d4('buffer was never mapped in glUnmapBuffer'),
            0x0;
        _0x353c88['mappedBuffers'][_0x1435e5] = null;
        if (!(_0x1d974e['access'] & 0x10))
            _0x353c88['currentContext']['version'] >= 0x2 ? _0x264078['bufferSubData'](_0x2602fd, _0x1d974e['offset'], _0x2ac27b, _0x1d974e['mem'], _0x1d974e['length']) : _0x264078['bufferSubData'](_0x2602fd, _0x1d974e['offset'], _0x2ac27b['subarray'](_0x1d974e['mem'], _0x1d974e['mem'] + _0x1d974e['length']));
        return _0x1f3809(_0x1d974e['mem']),
        0x1;
    }
    function _0x25576b() {
        var _0xe70d28 = _0x264078['currentProgram'];
        !_0xe70d28['explicitProgramBindingsApplied'] && (_0x353c88['currentContext']['version'] >= 0x2 && Object['keys'](_0xe70d28['explicitUniformBindings'])['forEach'](function(_0x8863b) {
            var _0xf5eaad = _0xe70d28['explicitUniformBindings'][_0x8863b];
            for (var _0x252286 = 0x0; _0x252286 < _0xf5eaad[0x1]; ++_0x252286) {
                var _0x23b45c = _0x264078['getUniformBlockIndex'](_0xe70d28, _0x8863b + (_0xf5eaad[0x1] > 0x1 ? '[' + _0x252286 + ']' : ''));
                _0x264078['uniformBlockBinding'](_0xe70d28, _0x23b45c, _0xf5eaad[0x0] + _0x252286);
            }
        }),
        Object['keys'](_0xe70d28['explicitSamplerBindings'])['forEach'](function(_0x31e6b8) {
            var _0x3bdaed = _0xe70d28['explicitSamplerBindings'][_0x31e6b8];
            for (var _0x1b1740 = 0x0; _0x1b1740 < _0x3bdaed[0x1]; ++_0x1b1740) {
                _0x264078['uniform1i'](_0x264078['getUniformLocation'](_0xe70d28, _0x31e6b8 + (_0x1b1740 ? '[' + _0x1b1740 + ']' : '')), _0x3bdaed[0x0] + _0x1b1740);
            }
        }),
        _0xe70d28['explicitProgramBindingsApplied'] = 0x1);
    }
    function _0x2322ae(_0x4164d6) {
        _0x4164d6 = _0x353c88['programs'][_0x4164d6],
        _0x264078['useProgram'](_0x4164d6),
        (_0x264078['currentProgram'] = _0x4164d6) && _0x25576b();
    }
    function _0x8972ce(_0x546847) {
        _0x264078['validateProgram'](_0x353c88['programs'][_0x546847]);
    }
    function _0x23b958(_0x30f110, _0x19f0bb, _0x733a3a, _0x582e5d, _0x50d545) {
        _0x264078['vertexAttrib4f'](_0x30f110, _0x19f0bb, _0x733a3a, _0x582e5d, _0x50d545);
    }
    function _0x1de043(_0x51d5a8, _0x2347ac) {
        _0x264078['vertexAttrib4f'](_0x51d5a8, _0x81f2c2[_0x2347ac >> 0x2], _0x81f2c2[_0x2347ac + 0x4 >> 0x2], _0x81f2c2[_0x2347ac + 0x8 >> 0x2], _0x81f2c2[_0x2347ac + 0xc >> 0x2]);
    }
    function _0x21597c(_0xcd4520, _0x61a85e, _0x5d296d, _0x483e06, _0x86beb4) {
        var _0x275984 = _0x353c88['currentContext']['clientBuffers'][_0xcd4520];
        if (!_0x264078['currentArrayBufferBinding']) {
            _0x275984['size'] = _0x61a85e,
            _0x275984['type'] = _0x5d296d,
            _0x275984['normalized'] = ![],
            _0x275984['stride'] = _0x483e06,
            _0x275984['ptr'] = _0x86beb4,
            _0x275984['clientside'] = !![],
            _0x275984['vertexAttribPointerAdaptor'] = function(_0x2a597c, _0xd650c1, _0x324420, _0x39d3df, _0x51ce50, _0x45edf4) {
                this['vertexAttribIPointer'](_0x2a597c, _0xd650c1, _0x324420, _0x51ce50, _0x45edf4);
            }
            ;
            return;
        }
        _0x275984['clientside'] = ![],
        _0x264078['vertexAttribIPointer'](_0xcd4520, _0x61a85e, _0x5d296d, _0x483e06, _0x86beb4);
    }
    function _0x5b3651(_0x4aec01, _0x572bc4, _0x351f73, _0x5629cc, _0xb5a928, _0x26fc69) {
        var _0x2550fa = _0x353c88['currentContext']['clientBuffers'][_0x4aec01];
        if (!_0x264078['currentArrayBufferBinding']) {
            _0x2550fa['size'] = _0x572bc4,
            _0x2550fa['type'] = _0x351f73,
            _0x2550fa['normalized'] = _0x5629cc,
            _0x2550fa['stride'] = _0xb5a928,
            _0x2550fa['ptr'] = _0x26fc69,
            _0x2550fa['clientside'] = !![],
            _0x2550fa['vertexAttribPointerAdaptor'] = function(_0x4354f6, _0x1a52e2, _0x3fef03, _0x4c1764, _0x4fb84a, _0x5cab7c) {
                this['vertexAttribPointer'](_0x4354f6, _0x1a52e2, _0x3fef03, _0x4c1764, _0x4fb84a, _0x5cab7c);
            }
            ;
            return;
        }
        _0x2550fa['clientside'] = ![],
        _0x264078['vertexAttribPointer'](_0x4aec01, _0x572bc4, _0x351f73, !!_0x5629cc, _0xb5a928, _0x26fc69);
    }
    function _0x4f86cc(_0x343afd, _0x1b7aba, _0xc5f10c, _0xcbea3) {
        _0x264078['viewport'](_0x343afd, _0x1b7aba, _0xc5f10c, _0xcbea3);
    }
    function _0x42619c(_0x194e11) {
        return _0x194e11;
    }
    function _0x371233(_0x41871e) {
        _0x4c1d85();
        var _0x5a7109 = new Date(_0x593fb9[_0x41871e + 0x14 >> 0x2] + 0x76c,_0x593fb9[_0x41871e + 0x10 >> 0x2],_0x593fb9[_0x41871e + 0xc >> 0x2],_0x593fb9[_0x41871e + 0x8 >> 0x2],_0x593fb9[_0x41871e + 0x4 >> 0x2],_0x593fb9[_0x41871e >> 0x2],0x0)
          , _0x2a0d38 = _0x593fb9[_0x41871e + 0x20 >> 0x2]
          , _0x274564 = _0x5a7109['getTimezoneOffset']()
          , _0x12d430 = new Date(_0x5a7109['getFullYear'](),0x0,0x1)
          , _0x168a01 = new Date(_0x5a7109['getFullYear'](),0x6,0x1)['getTimezoneOffset']()
          , _0x1aaa9f = _0x12d430['getTimezoneOffset']()
          , _0x48245b = Math['min'](_0x1aaa9f, _0x168a01);
        if (_0x2a0d38 < 0x0)
            _0x593fb9[_0x41871e + 0x20 >> 0x2] = Number(_0x168a01 != _0x1aaa9f && _0x48245b == _0x274564);
        else {
            if (_0x2a0d38 > 0x0 != (_0x48245b == _0x274564)) {
                var _0xfa9cf = Math['max'](_0x1aaa9f, _0x168a01)
                  , _0x1ad5ca = _0x2a0d38 > 0x0 ? _0x48245b : _0xfa9cf;
                _0x5a7109['setTime'](_0x5a7109['getTime']() + (_0x1ad5ca - _0x274564) * 0xea60);
            }
        }
        _0x593fb9[_0x41871e + 0x18 >> 0x2] = _0x5a7109['getDay']();
        var _0x416200 = (_0x5a7109['getTime']() - _0x12d430['getTime']()) / (0x3e8 * 0x3c * 0x3c * 0x18) | 0x0;
        return _0x593fb9[_0x41871e + 0x1c >> 0x2] = _0x416200,
        _0x593fb9[_0x41871e >> 0x2] = _0x5a7109['getSeconds'](),
        _0x593fb9[_0x41871e + 0x4 >> 0x2] = _0x5a7109['getMinutes'](),
        _0x593fb9[_0x41871e + 0x8 >> 0x2] = _0x5a7109['getHours'](),
        _0x593fb9[_0x41871e + 0xc >> 0x2] = _0x5a7109['getDate'](),
        _0x593fb9[_0x41871e + 0x10 >> 0x2] = _0x5a7109['getMonth'](),
        _0x5a7109['getTime']() / 0x3e8 | 0x0;
    }
    function _0x36ab1b(_0x802fae) {
        _0x58c6a4(_0x802fae);
    }
    function _0x34b9c5(_0x39dec1, _0x1c7827, _0x69002e) {
        return 0x0;
    }
    function _0x21161a(_0x338d45) {
        return _0x593fb9[_0x338d45 >> 0x2] = 0x0,
        0x0;
    }
    function _0x31a3f0(_0x31cbea) {
        return _0x31cbea % 0x4 === 0x0 && (_0x31cbea % 0x64 !== 0x0 || _0x31cbea % 0x190 === 0x0);
    }
    function _0x4aec4c(_0x1d8ced, _0x30e1b6) {
        var _0x8af0dc = 0x0;
        for (var _0x4da319 = 0x0; _0x4da319 <= _0x30e1b6; _0x8af0dc += _0x1d8ced[_0x4da319++]) {}
        return _0x8af0dc;
    }
    var _0x19be1d = [0x1f, 0x1d, 0x1f, 0x1e, 0x1f, 0x1e, 0x1f, 0x1f, 0x1e, 0x1f, 0x1e, 0x1f]
      , _0x1e2a24 = [0x1f, 0x1c, 0x1f, 0x1e, 0x1f, 0x1e, 0x1f, 0x1f, 0x1e, 0x1f, 0x1e, 0x1f];
    function _0x531010(_0x32a11e, _0x104180) {
        var _0x5022dc = new Date(_0x32a11e['getTime']());
        while (_0x104180 > 0x0) {
            var _0x7efe91 = _0x31a3f0(_0x5022dc['getFullYear']())
              , _0xc623e3 = _0x5022dc['getMonth']()
              , _0x497b4b = (_0x7efe91 ? _0x19be1d : _0x1e2a24)[_0xc623e3];
            if (_0x104180 > _0x497b4b - _0x5022dc['getDate']())
                _0x104180 -= _0x497b4b - _0x5022dc['getDate']() + 0x1,
                _0x5022dc['setDate'](0x1),
                _0xc623e3 < 0xb ? _0x5022dc['setMonth'](_0xc623e3 + 0x1) : (_0x5022dc['setMonth'](0x0),
                _0x5022dc['setFullYear'](_0x5022dc['getFullYear']() + 0x1));
            else
                return _0x5022dc['setDate'](_0x5022dc['getDate']() + _0x104180),
                _0x5022dc;
        }
        return _0x5022dc;
    }
    function _0x16e18f(_0x1ae1d5, _0x58808d, _0x147de0, _0xe6c192) {
        var _0x300df6 = _0x593fb9[_0xe6c192 + 0x28 >> 0x2]
          , _0x27c78c = {
            'tm_sec': _0x593fb9[_0xe6c192 >> 0x2],
            'tm_min': _0x593fb9[_0xe6c192 + 0x4 >> 0x2],
            'tm_hour': _0x593fb9[_0xe6c192 + 0x8 >> 0x2],
            'tm_mday': _0x593fb9[_0xe6c192 + 0xc >> 0x2],
            'tm_mon': _0x593fb9[_0xe6c192 + 0x10 >> 0x2],
            'tm_year': _0x593fb9[_0xe6c192 + 0x14 >> 0x2],
            'tm_wday': _0x593fb9[_0xe6c192 + 0x18 >> 0x2],
            'tm_yday': _0x593fb9[_0xe6c192 + 0x1c >> 0x2],
            'tm_isdst': _0x593fb9[_0xe6c192 + 0x20 >> 0x2],
            'tm_gmtoff': _0x593fb9[_0xe6c192 + 0x24 >> 0x2],
            'tm_zone': _0x300df6 ? _0x46211(_0x300df6) : ''
        }
          , _0x45d0a6 = _0x46211(_0x147de0)
          , _0x290caf = {
            '%c': '%a %b %d %H:%M:%S %Y',
            '%D': '%m/%d/%y',
            '%F': '%Y-%m-%d',
            '%h': '%b',
            '%r': '%I:%M:%S %p',
            '%R': '%H:%M',
            '%T': '%H:%M:%S',
            '%x': '%m/%d/%y',
            '%X': '%H:%M:%S',
            '%Ec': '%c',
            '%EC': '%C',
            '%Ex': '%m/%d/%y',
            '%EX': '%H:%M:%S',
            '%Ey': '%y',
            '%EY': '%Y',
            '%Od': '%d',
            '%Oe': '%e',
            '%OH': '%H',
            '%OI': '%I',
            '%Om': '%m',
            '%OM': '%M',
            '%OS': '%S',
            '%Ou': '%u',
            '%OU': '%U',
            '%OV': '%V',
            '%Ow': '%w',
            '%OW': '%W',
            '%Oy': '%y'
        };
        for (var _0x4bcfa4 in _0x290caf) {
            _0x45d0a6 = _0x45d0a6['replace'](new RegExp(_0x4bcfa4,'g'), _0x290caf[_0x4bcfa4]);
        }
        var _0x29b685 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          , _0x96f58a = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        function _0x1111ee(_0x16d5fa, _0x515bcd, _0xcbfb55) {
            var _0x38f87d = typeof _0x16d5fa === 'number' ? _0x16d5fa['toString']() : _0x16d5fa || '';
            while (_0x38f87d['length'] < _0x515bcd) {
                _0x38f87d = _0xcbfb55[0x0] + _0x38f87d;
            }
            return _0x38f87d;
        }
        function _0x180807(_0x2f4197, _0x5e1dfd) {
            return _0x1111ee(_0x2f4197, _0x5e1dfd, '0');
        }
        function _0x5ef273(_0x5fb6ba, _0x4e9276) {
            function _0x3c8521(_0x163262) {
                return _0x163262 < 0x0 ? -0x1 : _0x163262 > 0x0 ? 0x1 : 0x0;
            }
            var _0x2f7b69;
            return (_0x2f7b69 = _0x3c8521(_0x5fb6ba['getFullYear']() - _0x4e9276['getFullYear']())) === 0x0 && ((_0x2f7b69 = _0x3c8521(_0x5fb6ba['getMonth']() - _0x4e9276['getMonth']())) === 0x0 && (_0x2f7b69 = _0x3c8521(_0x5fb6ba['getDate']() - _0x4e9276['getDate']()))),
            _0x2f7b69;
        }
        function _0x22cf23(_0x4abc39) {
            switch (_0x4abc39['getDay']()) {
            case 0x0:
                return new Date(_0x4abc39['getFullYear']() - 0x1,0xb,0x1d);
            case 0x1:
                return _0x4abc39;
            case 0x2:
                return new Date(_0x4abc39['getFullYear'](),0x0,0x3);
            case 0x3:
                return new Date(_0x4abc39['getFullYear'](),0x0,0x2);
            case 0x4:
                return new Date(_0x4abc39['getFullYear'](),0x0,0x1);
            case 0x5:
                return new Date(_0x4abc39['getFullYear']() - 0x1,0xb,0x1f);
            case 0x6:
                return new Date(_0x4abc39['getFullYear']() - 0x1,0xb,0x1e);
            }
        }
        function _0x355340(_0x21c8f1) {
            var _0x59e3be = _0x531010(new Date(_0x21c8f1['tm_year'] + 0x76c,0x0,0x1), _0x21c8f1['tm_yday'])
              , _0x126e19 = new Date(_0x59e3be['getFullYear'](),0x0,0x4)
              , _0x521790 = new Date(_0x59e3be['getFullYear']() + 0x1,0x0,0x4)
              , _0x22c5be = _0x22cf23(_0x126e19)
              , _0x4cc916 = _0x22cf23(_0x521790);
            return _0x5ef273(_0x22c5be, _0x59e3be) <= 0x0 ? _0x5ef273(_0x4cc916, _0x59e3be) <= 0x0 ? _0x59e3be['getFullYear']() + 0x1 : _0x59e3be['getFullYear']() : _0x59e3be['getFullYear']() - 0x1;
        }
        var _0xd69ca7 = {
            '%a': function(_0x498f82) {
                return _0x29b685[_0x498f82['tm_wday']]['substring'](0x0, 0x3);
            },
            '%A': function(_0xb4d80a) {
                return _0x29b685[_0xb4d80a['tm_wday']];
            },
            '%b': function(_0x5f327b) {
                return _0x96f58a[_0x5f327b['tm_mon']]['substring'](0x0, 0x3);
            },
            '%B': function(_0xe59d44) {
                return _0x96f58a[_0xe59d44['tm_mon']];
            },
            '%C': function(_0x9c74e9) {
                var _0x58618c = _0x9c74e9['tm_year'] + 0x76c;
                return _0x180807(_0x58618c / 0x64 | 0x0, 0x2);
            },
            '%d': function(_0x9cb2fd) {
                return _0x180807(_0x9cb2fd['tm_mday'], 0x2);
            },
            '%e': function(_0x120f34) {
                return _0x1111ee(_0x120f34['tm_mday'], 0x2, ' ');
            },
            '%g': function(_0x38f357) {
                return _0x355340(_0x38f357)['toString']()['substring'](0x2);
            },
            '%G': function(_0x497bdb) {
                return _0x355340(_0x497bdb);
            },
            '%H': function(_0xd1f47b) {
                return _0x180807(_0xd1f47b['tm_hour'], 0x2);
            },
            '%I': function(_0x56f18d) {
                var _0x16da4d = _0x56f18d['tm_hour'];
                if (_0x16da4d == 0x0)
                    _0x16da4d = 0xc;
                else {
                    if (_0x16da4d > 0xc)
                        _0x16da4d -= 0xc;
                }
                return _0x180807(_0x16da4d, 0x2);
            },
            '%j': function(_0x5178eb) {
                return _0x180807(_0x5178eb['tm_mday'] + _0x4aec4c(_0x31a3f0(_0x5178eb['tm_year'] + 0x76c) ? _0x19be1d : _0x1e2a24, _0x5178eb['tm_mon'] - 0x1), 0x3);
            },
            '%m': function(_0x272111) {
                return _0x180807(_0x272111['tm_mon'] + 0x1, 0x2);
            },
            '%M': function(_0x4daaac) {
                return _0x180807(_0x4daaac['tm_min'], 0x2);
            },
            '%n': function() {
                return '
';
            },
            '%p': function(_0x436ebd) {
                return _0x436ebd['tm_hour'] >= 0x0 && _0x436ebd['tm_hour'] < 0xc ? 'AM' : 'PM';
            },
            '%S': function(_0x5fef78) {
                return _0x180807(_0x5fef78['tm_sec'], 0x2);
            },
            '%t': function() {
                return '	';
            },
            '%u': function(_0x2b4174) {
                return _0x2b4174['tm_wday'] || 0x7;
            },
            '%U': function(_0x3e3937) {
                var _0x2a6e18 = new Date(_0x3e3937['tm_year'] + 0x76c,0x0,0x1)
                  , _0x44bdf8 = _0x2a6e18['getDay']() === 0x0 ? _0x2a6e18 : _0x531010(_0x2a6e18, 0x7 - _0x2a6e18['getDay']())
                  , _0x2cdee6 = new Date(_0x3e3937['tm_year'] + 0x76c,_0x3e3937['tm_mon'],_0x3e3937['tm_mday']);
                if (_0x5ef273(_0x44bdf8, _0x2cdee6) < 0x0) {
                    var _0xc5d5b3 = _0x4aec4c(_0x31a3f0(_0x2cdee6['getFullYear']()) ? _0x19be1d : _0x1e2a24, _0x2cdee6['getMonth']() - 0x1) - 0x1f
                      , _0x58f1cc = 0x1f - _0x44bdf8['getDate']()
                      , _0x5ce9a1 = _0x58f1cc + _0xc5d5b3 + _0x2cdee6['getDate']();
                    return _0x180807(Math['ceil'](_0x5ce9a1 / 0x7), 0x2);
                }
                return _0x5ef273(_0x44bdf8, _0x2a6e18) === 0x0 ? '01' : '00';
            },
            '%V': function(_0x24376e) {
                var _0x1a54d9 = new Date(_0x24376e['tm_year'] + 0x76c,0x0,0x4)
                  , _0x4885d9 = new Date(_0x24376e['tm_year'] + 0x76d,0x0,0x4)
                  , _0x44ff4d = _0x22cf23(_0x1a54d9)
                  , _0x50c30c = _0x22cf23(_0x4885d9)
                  , _0x2136c0 = _0x531010(new Date(_0x24376e['tm_year'] + 0x76c,0x0,0x1), _0x24376e['tm_yday']);
                if (_0x5ef273(_0x2136c0, _0x44ff4d) < 0x0)
                    return '53';
                if (_0x5ef273(_0x50c30c, _0x2136c0) <= 0x0)
                    return '01';
                var _0x21c452;
                return _0x44ff4d['getFullYear']() < _0x24376e['tm_year'] + 0x76c ? _0x21c452 = _0x24376e['tm_yday'] + 0x20 - _0x44ff4d['getDate']() : _0x21c452 = _0x24376e['tm_yday'] + 0x1 - _0x44ff4d['getDate'](),
                _0x180807(Math['ceil'](_0x21c452 / 0x7), 0x2);
            },
            '%w': function(_0x37f3a2) {
                return _0x37f3a2['tm_wday'];
            },
            '%W': function(_0x30b359) {
                var _0x49813d = new Date(_0x30b359['tm_year'],0x0,0x1)
                  , _0x254fb0 = _0x49813d['getDay']() === 0x1 ? _0x49813d : _0x531010(_0x49813d, _0x49813d['getDay']() === 0x0 ? 0x1 : 0x7 - _0x49813d['getDay']() + 0x1)
                  , _0x34b485 = new Date(_0x30b359['tm_year'] + 0x76c,_0x30b359['tm_mon'],_0x30b359['tm_mday']);
                if (_0x5ef273(_0x254fb0, _0x34b485) < 0x0) {
                    var _0x4756e9 = _0x4aec4c(_0x31a3f0(_0x34b485['getFullYear']()) ? _0x19be1d : _0x1e2a24, _0x34b485['getMonth']() - 0x1) - 0x1f
                      , _0x5f2588 = 0x1f - _0x254fb0['getDate']()
                      , _0x24a167 = _0x5f2588 + _0x4756e9 + _0x34b485['getDate']();
                    return _0x180807(Math['ceil'](_0x24a167 / 0x7), 0x2);
                }
                return _0x5ef273(_0x254fb0, _0x49813d) === 0x0 ? '01' : '00';
            },
            '%y': function(_0x1fc03a) {
                return (_0x1fc03a['tm_year'] + 0x76c)['toString']()['substring'](0x2);
            },
            '%Y': function(_0x2cb128) {
                return _0x2cb128['tm_year'] + 0x76c;
            },
            '%z': function(_0x1fda97) {
                var _0x316305 = _0x1fda97['tm_gmtoff']
                  , _0x5a0958 = _0x316305 >= 0x0;
                return _0x316305 = Math['abs'](_0x316305) / 0x3c,
                _0x316305 = _0x316305 / 0x3c * 0x64 + _0x316305 % 0x3c,
                (_0x5a0958 ? '+' : '-') + String('0000' + _0x316305)['slice'](-0x4);
            },
            '%Z': function(_0x5d4951) {
                return _0x5d4951['tm_zone'];
            },
            '%%': function() {
                return '%';
            }
        };
        for (var _0x4bcfa4 in _0xd69ca7) {
            _0x45d0a6['includes'](_0x4bcfa4) && (_0x45d0a6 = _0x45d0a6['replace'](new RegExp(_0x4bcfa4,'g'), _0xd69ca7[_0x4bcfa4](_0x27c78c)));
        }
        var _0x175b8a = _0x1fcab5(_0x45d0a6, ![]);
        if (_0x175b8a['length'] > _0x58808d)
            return 0x0;
        return _0x5b86f9(_0x175b8a, _0x1ae1d5),
        _0x175b8a['length'] - 0x1;
    }
    function _0x139271(_0x2a79b5) {
        var _0x3d9a00 = Date['now']() / 0x3e8 | 0x0;
        return _0x2a79b5 && (_0x593fb9[_0x2a79b5 >> 0x2] = _0x3d9a00),
        _0x3d9a00;
    }
    function _0x4f1de4(_0x2d4731, _0x3b3938) {
        _0x2d4731 = _0x46211(_0x2d4731);
        try {
            return _0x23c512['utime'](_0x2d4731, _0x3b3938, _0x3b3938),
            0x0;
        } catch (_0x2308c3) {
            if (!(_0x2308c3 instanceof _0x23c512['ErrnoError']))
                throw _0x2308c3 + ' : ' + _0x3c669b();
            return _0x1669bd(_0x2308c3['errno']),
            -0x1;
        }
    }
    function _0x318d3b(_0x351b8d, _0x506ebc) {
        var _0x5e36be;
        return _0x506ebc ? _0x5e36be = _0x593fb9[_0x506ebc + 0x4 >> 0x2] * 0x3e8 : _0x5e36be = Date['now'](),
        _0x4f1de4(_0x351b8d, _0x5e36be);
    }
    var _0x439e8d = function(_0x47ed71, _0xb0f5d5, _0x32faca, _0x1ab7ef) {
        !_0x47ed71 && (_0x47ed71 = this),
        this['parent'] = _0x47ed71,
        this['mount'] = _0x47ed71['mount'],
        this['mounted'] = null,
        this['id'] = _0x23c512['nextInode']++,
        this['name'] = _0xb0f5d5,
        this['mode'] = _0x32faca,
        this['node_ops'] = {},
        this['stream_ops'] = {},
        this['rdev'] = _0x1ab7ef;
    }
      , _0x4ae9e3 = 0x124 | 0x49
      , _0x590342 = 0x92;
    Object['defineProperties'](_0x439e8d['prototype'], {
        'read': {
            'get': function() {
                return (this['mode'] & _0x4ae9e3) === _0x4ae9e3;
            },
            'set': function(_0x34302c) {
                _0x34302c ? this['mode'] |= _0x4ae9e3 : this['mode'] &= ~_0x4ae9e3;
            }
        },
        'write': {
            'get': function() {
                return (this['mode'] & _0x590342) === _0x590342;
            },
            'set': function(_0x58aae4) {
                _0x58aae4 ? this['mode'] |= _0x590342 : this['mode'] &= ~_0x590342;
            }
        },
        'isFolder': {
            'get': function() {
                return _0x23c512['isDir'](this['mode']);
            }
        },
        'isDevice': {
            'get': function() {
                return _0x23c512['isChrdev'](this['mode']);
            }
        }
    }),
    _0x23c512['FSNode'] = _0x439e8d,
    _0x23c512['staticInit'](),
    _0x1455c0['FS_createPath'] = _0x23c512['createPath'],
    _0x1455c0['FS_createDataFile'] = _0x23c512['createDataFile'],
    _0x1455c0['requestFullscreen'] = function _0x2ca4df(_0x1913fb, _0xc5fe15) {
        _0x391f70['requestFullscreen'](_0x1913fb, _0xc5fe15);
    }
    ,
    _0x1455c0['requestAnimationFrame'] = function _0x32cb2d(_0x30700b) {
        _0x391f70['requestAnimationFrame'](_0x30700b);
    }
    ,
    _0x1455c0['setCanvasSize'] = function _0x12d159(_0x2d89ee, _0x184e2a, _0x17df2f) {
        _0x391f70['setCanvasSize'](_0x2d89ee, _0x184e2a, _0x17df2f);
    }
    ,
    _0x1455c0['pauseMainLoop'] = function _0x36ded8() {
        _0x391f70['mainLoop']['pause']();
    }
    ,
    _0x1455c0['resumeMainLoop'] = function _0x20bb8() {
        _0x391f70['mainLoop']['resume']();
    }
    ,
    _0x1455c0['getUserMedia'] = function _0x1c6c17() {
        _0x391f70['getUserMedia']();
    }
    ,
    _0x1455c0['createContext'] = function _0x476e0d(_0x2e86e2, _0x272072, _0x34d237, _0x3846c6) {
        return _0x391f70['createContext'](_0x2e86e2, _0x272072, _0x34d237, _0x3846c6);
    }
    ;
    var _0x264078;
    for (var _0x203918 = 0x0; _0x203918 < 0x20; ++_0x203918)
        _0x293c1d['push'](new Array(_0x203918));
    var _0x52cbfd = new Float32Array(0x120);
    for (var _0x203918 = 0x0; _0x203918 < 0x120; ++_0x203918) {
        _0x44ce39[_0x203918] = _0x52cbfd['subarray'](0x0, _0x203918 + 0x1);
    }
    var _0x287042 = new Int32Array(0x120);
    for (var _0x203918 = 0x0; _0x203918 < 0x120; ++_0x203918) {
        _0x4871c6[_0x203918] = _0x287042['subarray'](0x0, _0x203918 + 0x1);
    }
    function _0x1fcab5(_0x215dd, _0x161a54, _0x378c09) {
        var _0x438840 = _0x378c09 > 0x0 ? _0x378c09 : _0x5a6a49(_0x215dd) + 0x1
          , _0x2428d4 = new Array(_0x438840)
          , _0x389c47 = _0x346e2c(_0x215dd, _0x2428d4, 0x0, _0x2428d4['length']);
        if (_0x161a54)
            _0x2428d4['length'] = _0x389c47;
        return _0x2428d4;
    }
    var _0xe9fa4d = {
        'Nk': _0x409b75,
        'Ik': _0x12a1a1,
        'Xc': _0x3c7cff,
        'yj': _0x5c1047,
        'jj': _0x472cfd,
        'il': _0x348b1e,
        'wj': _0x45772f,
        'vj': _0x3983c7,
        'sj': _0x3054e8,
        'uj': _0xd29ec3,
        'tj': _0x216c44,
        'Lk': _0x8f31f3,
        'Jk': _0x57371,
        '$k': _0x34b199,
        'ed': _0x1a16fd,
        'yk': _0x49dcb9,
        'Sj': _0x4bd3c4,
        'gd': _0x575352,
        'Zi': _0x483950,
        'pd': _0x2ab17f,
        'Vj': _0x137458,
        'Oi': _0x3c6dd9,
        'Lc': _0x58d163,
        'Nc': _0xa4fa8d,
        'Mc': _0x3bca55,
        'ok': _0x1f8b1f,
        'oj': _0x3e4bb9,
        'nj': _0x51e4db,
        'Bk': _0x4c7540,
        'Qk': _0x7791ce,
        'Pk': _0x491d91,
        'Aj': _0x281c38,
        'rj': _0x16e558,
        'qj': _0x34d02b,
        'Bj': _0x5b5a84,
        'dl': _0xf01197,
        'bj': _0x5c5101,
        'se': _0x849ab3,
        'te': _0x529032,
        'gj': _0x54ba52,
        'fj': _0x19ab61,
        'ej': _0x19bd02,
        'Oj': _0x52420d,
        'Nj': _0x2aeeb7,
        'Mj': _0x4afac8,
        'Lj': _0x57d13a,
        'pj': _0x250b8f,
        'kj': _0x5ec5c6,
        'll': _0x296f45,
        'kl': _0x58dde2,
        'Gk': _0x4a298f,
        'Cj': _0x2e12bd,
        'Wj': _0x4aac6d,
        'cj': _0x1b5568,
        'Ef': _0x24ed2f,
        'Pb': _0x4af9c3,
        'Ob': _0x4a9192,
        'If': _0x52c65d,
        'Ya': _0x5b7bf7,
        'Xa': _0x418d5b,
        'kf': _0x568013,
        'Lf': _0x5ab318,
        'mf': _0x3812d8,
        'cf': _0x42a5a4,
        'la': _0x4baba0,
        'Cf': _0x1f4f04,
        'Lb': _0x5e0402,
        'Kb': _0x1f33c7,
        'Af': _0x1bd25a,
        'Bf': _0x4ea7e3,
        'Jb': _0x3c5711,
        'Ib': _0x124255,
        'Ji': _0x42efd1,
        'Df': _0xb1dd45,
        'Nb': _0x598a05,
        'Mb': _0xccf154,
        'lf': _0x429328,
        'nf': _0x5037bb,
        'Ff': _0x556822,
        'Rb': _0x1b4855,
        'Qb': _0x5da481,
        'Tb': _0x1c6dd3,
        'ff': _0x15e70a,
        'zf': _0x5d94c9,
        'Gf': _0xc6cb69,
        'ia': _0x2bd03a,
        'og': _0x88f2ae,
        'ba': _0x10b0c7,
        'ig': _0x2a266c,
        'jg': _0x560c29,
        'fg': _0x214e2a,
        'ng': _0x278d34,
        'fc': _0x2c1fc9,
        'gc': _0x75b5e9,
        '$a': _0x191eef,
        'xa': _0x51c56d,
        'Ub': _0x1d9e95,
        'kg': _0x224ea1,
        'dg': _0x43cdda,
        'eg': _0x180f12,
        'ic': _0x22484f,
        'hc': _0x94284d,
        'va': _0x4830eb,
        'ja': _0x57e171,
        'mg': _0x233eb3,
        'lg': _0x4921e7,
        'wa': _0x2b514b,
        'pa': _0x5c514e,
        'ec': _0x52308c,
        'Bb': _0x5d7ea0,
        'Hb': _0x1e4b97,
        'Cb': _0x182d2f,
        'Db': _0x1282c7,
        'Fb': _0x3384e0,
        'pf': _0x18f7d1,
        'dc': _0x109a4a,
        'Mf': _0x5ea05f,
        'Eb': _0x3e13ca,
        'yf': _0x4a4bc7,
        'za': _0x235386,
        'Kf': _0x4c0eef,
        'jf': _0x59fba4,
        'ag': _0x5d13b1,
        'Yf': _0x2f15fe,
        '_f': _0x5c5ba7,
        '$f': _0x3fc045,
        '_a': _0x398169,
        'Uf': _0x57201c,
        'Wf': _0x14a04b,
        'Vf': _0xc521f3,
        'Xf': _0x4d8219,
        'Tj': _0x50d6a9,
        'Yk': _0x49b599,
        'Wk': _0x3940a8,
        'Uk': _0x41f7ac,
        'Dk': _0x2dd9b3,
        'Fk': _0x4086a4,
        '_k': _0x3ea7b2,
        'wk': _0x4827b0,
        'vk': _0x52dfb8,
        'Xj': _0x40ad62,
        'Sk': _0x47afbc,
        'el': _0xa2243e,
        'rk': _0x91566d,
        'cl': _0x3282a9,
        'bl': _0x7a83a2,
        'Kj': _0x1ccea0,
        'tb': _0x2150fa,
        'qk': _0x4031b5,
        'fd': _0x34d5a5,
        'pk': _0x17e9c7,
        'Hk': _0x3b98d5,
        'zj': _0x255447,
        'xj': _0x180dc6,
        'mj': _0x281fe0,
        'Si': _0x41d591,
        'Ri': _0x563641,
        'Pi': _0x3d8e66,
        'Qi': _0x4e6172,
        'Ok': _0x685af,
        'xk': _0x2c15a3,
        'hj': _0x23a863,
        'ij': _0x5cc032,
        'lj': _0x412cb4,
        'od': _0x27a105,
        'jl': _0xf73c3a,
        'hl': _0x120322,
        'fl': _0x490b46,
        'gl': _0x22219d,
        'Xk': _0x41088c,
        'Vk': _0x1b396d,
        'Tk': _0x53b64d,
        'Ck': _0x3755d5,
        'Ek': _0x2166ee,
        'Zk': _0x296828,
        'dj': _0xf33e99,
        'Rk': _0x579516,
        'Mk': _0x2ec2b7,
        'al': _0x46c950,
        'Ak': _0x1d2edb,
        'Pj': _0x4a0f59,
        'lk': _0x47e5dd,
        'ld': _0x2db508,
        'kk': _0x2cf8fa,
        'sb': _0x234983,
        'kd': _0xcf6349,
        'nd': _0x55dd69,
        'ak': _0x3b7652,
        'ck': _0x134c06,
        'mk': _0x3f8005,
        'nk': _0x40b585,
        'hk': _0x5beb42,
        'fk': _0x32428d,
        'ik': _0x27785b,
        'ek': _0x93bf8c,
        'gk': _0x41ce11,
        'md': _0x30f747,
        'qb': _0x175ee4,
        'rb': _0x1e78a7,
        'dk': _0x1d169a,
        'jk': _0x313852,
        'bk': _0x3df516,
        'Yj': _0x1486b2,
        'jd': _0x2978bb,
        'hd': _0x2e9ddd,
        '_j': _0x153fd5,
        '$j': _0x306e4a,
        'Zj': _0x400fbe,
        'id': _0x3f3e8f,
        'ob': _0x3dc2fe,
        'Ij': _0x1d6b69,
        'Yc': _0x374cbd,
        'Gj': _0x28950a,
        'Zc': _0x45e57f,
        'Dj': _0x5b3597,
        'Fj': _0x2b7bff,
        'Ej': _0x4dd7c6,
        'Hj': _0x4adb34,
        'p': _0x4ba6c4,
        'i': _0x142cef,
        'o': _0x14d32c,
        'j': _0x2771ff,
        'a': _0x438a87,
        'nl': _0x59a3c6,
        'pb': _0x409d9f,
        'Hd': _0x371fd5,
        'ha': _0x3d1c62,
        'Pd': _0x517f7a,
        'Qd': _0x11ce3f,
        'l': _0x4cf4ca,
        'Hf': _0x246efb,
        'sg': _0x1b31bb,
        'Jf': _0x601d36,
        'nh': _0x48be3c,
        'Ed': _0x37d2d0,
        'Xg': _0x4f59b1,
        'Kd': _0x14b6e6,
        'V': _0x32897a,
        'ei': _0x6fb3f4,
        'Qh': _0x55f1a5,
        'Bd': _0x14f15f,
        'yd': _0x32a959,
        'Pc': _0x42d444,
        'Qc': _0x2125be,
        'Md': _0x1f795c,
        'Pa': _0x406b0a,
        'af': _0x3822a8,
        'Gg': _0x3bde28,
        'gh': _0x2dc4e9,
        'tg': _0x364e5e,
        'Sb': _0x40a2bc,
        'yg': _0x5b8206,
        'Fd': _0x41fdc9,
        'Ad': _0x2cda87,
        'hg': _0x33b364,
        'bf': _0x2b4e45,
        'lb': _0x3195cc,
        'Gd': _0x2ca1e7,
        'Ng': _0x20456a,
        'Ti': _0x92a3ca,
        'Zf': _0x460f62,
        'Id': _0x3420cd,
        'Cd': _0x407aa9,
        'zd': _0xef2089,
        'Jd': _0x6d61e4,
        'gg': _0x4bd1c5,
        'Rf': _0xbd7a5e,
        'Ld': _0x16644f,
        'wb': _0x52fd21,
        'Gc': _0xb6dbf8,
        'pg': _0x6d9e96,
        'qg': _0x582cb4,
        'me': _0x519b27,
        'Dd': _0x1dc07c,
        'x': _0x15e6a1,
        'S': _0x44a9a5,
        'Se': _0xf8cead,
        'Ab': _0xff062,
        'Od': _0x4c3060,
        'ph': _0x46756e,
        'Da': _0x4614a0,
        'Fc': _0x44e5ed,
        'th': _0x2ab684,
        'Za': _0x1dee1c,
        'gf': _0x5edc4d,
        'ef': _0x11bf09,
        'wf': _0x449660,
        'qf': _0x28ef2f,
        'of': _0x437697,
        'vf': _0x18edc7,
        'Ua': _0x5a8f7f,
        'xe': _0x54c3a2,
        'O': _0x15c469,
        'Va': _0x593a08,
        'hf': _0x30e01b,
        'Pf': _0x1919cb,
        'C': _0x36847d,
        'F': _0x5d7223,
        'ol': _0x193597,
        'xf': _0xe4d9d,
        'rf': _0x53f1bb,
        'pl': _0x377a53,
        'Wa': _0x3db628,
        'Gb': _0xfb789d,
        'Ra': _0x27f083,
        'tf': _0x3bd0b3,
        'uf': _0x21855e,
        'Wb': _0x59f744,
        'Vb': _0x2387f5,
        '$e': _0x3d4d78,
        'sa': _0x2480a1,
        'qa': _0xf67406,
        'ra': _0x2e55f,
        '_e': _0x141c32,
        'df': _0x3bd6f3,
        'bc': _0x202a00,
        'ac': _0x4aab61,
        'cc': _0x57be8d,
        'sf': _0xcccecd,
        'Xb': _0x754856,
        'Zb': _0xaaef7b,
        'Yb': _0xf0a182,
        '_b': _0x423c38,
        '$b': _0x2af8ee,
        'Ki': _0x58bf6d,
        'Sf': _0x5702cf,
        'Qf': _0x2cf0bb,
        'ta': _0x1046da,
        'Of': _0x52bf21,
        'ug': _0x44fafe,
        'ua': _0x11df5a,
        'zk': _0x4c1ea0,
        'Kk': _0x4892dd,
        'A': _0x5cc2ad,
        'aa': _0xb1d24d,
        'Bc': _0x538eee,
        'zb': _0x515474,
        'Ze': _0x43c9a1,
        'mb': _0x88da3b,
        'ya': _0x21eeb6,
        'b': _0x23337f,
        'Nd': _0x4ff824,
        'bg': _0x492bbe,
        'cg': _0x1458e5,
        'xb': _0x417f37,
        'rg': _0x59e53a,
        'oa': _0x2f9da5,
        'Ci': _0x1c9b77,
        'zi': _0x54441a,
        'oc': _0x7a635f,
        'kh': _0x36c476,
        'Ha': _0x35ec60,
        'yi': _0x21ebb5,
        'Jg': _0x1f9fb5,
        'Ig': _0x4e098c,
        'vi': _0x4cc009,
        'wi': _0x2a309f,
        'Cg': _0x386b53,
        'xi': _0x47c25d,
        'ch': _0xcedef9,
        'fh': _0x17add8,
        'Ic': _0x2d0de7,
        'Jc': _0x58b90e,
        'Kc': _0x11d859,
        'Vg': _0x322467,
        'ti': _0xac88e,
        'ui': _0xbc3ef7,
        'si': _0x59b058,
        'oi': _0x479a0e,
        'xg': _0x145c8e,
        'wg': _0x13d286,
        'vg': _0x3b1de8,
        'pi': _0x4dcef7,
        'qi': _0x3b7d1b,
        'ri': _0x421d18,
        'Rd': _0x6beab1,
        'kb': _0x2c66b7,
        'ni': _0x3860d2,
        'li': _0x35fb7e,
        'Yg': _0x3986b4,
        'mi': _0xf499f8,
        'ah': _0xc8725d,
        'Mg': _0x232a40,
        'ki': _0xd29dad,
        'Hc': _0x5c3078,
        'ji': _0x28b527,
        'ii': _0x3e2e88,
        'hi': _0x5ecdef,
        'gi': _0x169958,
        'fi': _0x1370bc,
        'di': _0x5717a6,
        'eb': _0x47a018,
        'ci': _0x3316a6,
        'Bg': _0x507359,
        'bi': _0xbd1e24,
        'kc': _0x52e356,
        'ai': _0x5ae0dd,
        'dh': _0xaba18f,
        'ih': _0x1a5627,
        'Ga': _0x486c17,
        'Fa': _0x227bbe,
        '$h': _0x54e540,
        '_h': _0x57937e,
        'Zh': _0x5df8b5,
        'Wh': _0x5b2bf0,
        'Pg': _0xe896e4,
        'Lg': _0x38cbc5,
        'Xh': _0x5c5569,
        'Og': _0x377842,
        'Yh': _0x55eff0,
        'Vh': _0x4a6a9e,
        'pc': _0x21b06d,
        'lh': _0x172015,
        'jc': _0xfa6bc9,
        'Sh': _0x2683f4,
        'Th': _0x387e07,
        'Sg': _0x3f9168,
        'W': _0x44915c,
        'T': _0x4ea070,
        'Aa': _0x4b4a5f,
        'Ea': _0x24db1c,
        'Rh': _0x618e23,
        'Mh': _0x213749,
        'nc': _0xcfa092,
        'Nh': _0x1a5202,
        'Ag': _0x299cac,
        'Ph': _0x59bbf1,
        'eh': _0xc19e0c,
        'jh': _0x9b4bf6,
        'Oh': _0x5f734f,
        'Ii': _0x4130e8,
        'jb': _0x290683,
        'bb': _0x5b720f,
        'da': _0x5c7676,
        'ca': _0x52076c,
        'Hi': _0x45020e,
        'Nf': _0x25440b,
        'Lh': _0x3d66b0,
        'Kh': _0x25f418,
        'Bi': _0xa30bf0,
        'Ia': _0x3bc2bc,
        'Eg': _0x551d1e,
        'lc': _0x41bb3d,
        'Ei': _0x54e9e6,
        '_': _0x2448e1,
        'oh': _0x56a0f5,
        'mh': _0x595aec,
        'Uh': _0x18800e,
        'Ih': _0x19a7ff,
        'Ec': _0x199867,
        'Jh': _0x4504b2,
        'Di': _0x286b9e,
        'Hh': _0x5aba50,
        'Tg': _0x53ce6b,
        'Gh': _0x333c06,
        'Fg': _0x38a9c5,
        'ab': _0x244a31,
        'ka': _0x513dc8,
        'Dc': _0x5d9158,
        'Gi': _0x29a52f,
        'db': _0x34eacd,
        'Ai': _0x191f6f,
        'hh': _0x2159fa,
        'Eh': _0x220366,
        'Qg': _0x43b219,
        'Fh': _0x45659f,
        'Cc': _0x1df48c,
        'mc': _0x41aff4,
        'zg': _0x3ea2e8,
        'Kg': _0x470303,
        'fa': _0x5a793b,
        'Dh': _0x47331c,
        'Ug': _0x344e29,
        'Dg': _0x1594de,
        'ib': _0x34329c,
        'Bh': _0x2db8c0,
        'Ch': _0x11bb58,
        'zh': _0x433b1d,
        'Ah': _0x4b8d8f,
        'xh': _0x211a4f,
        '_g': _0x1029de,
        'yh': _0x103784,
        'hb': _0x18b31e,
        'wh': _0x532dbf,
        'Wg': _0xc1100,
        'Zg': _0x218914,
        'vh': _0x5da145,
        '$g': _0x345751,
        'bh': _0x352e51,
        'qc': _0x5f81dd,
        'Ba': _0x8f4005,
        'rc': _0x1da38f,
        'sc': _0x1af5e9,
        'tc': _0x19fec6,
        'uc': _0x500864,
        'vc': _0x14f9dc,
        'gb': _0x2f914c,
        'wc': _0x5aca23,
        'xc': _0x74a737,
        'ea': _0x591070,
        'yc': _0x40e110,
        'zc': _0x1309cf,
        'cb': _0x416b34,
        'Ac': _0x128413,
        'Ca': _0x14da5b,
        'Rg': _0xf76c72,
        'qh': _0x2322ae,
        'Fi': _0x8972ce,
        'rh': _0x23b958,
        'sh': _0x1de043,
        'Hg': _0x21597c,
        'uh': _0x5b3651,
        'fb': _0x4f86cc,
        'cd': _0x180428,
        'Jj': _0x18d572,
        'Sc': _0x5731c3,
        'J': _0x29c39c,
        'R': _0x262ed7,
        'xd': _0x13757a,
        'bd': _0x1719ba,
        'ie': _0x57ee10,
        'dd': _0xfbb0be,
        'ga': _0x371ad0,
        'M': _0x2d02c9,
        'D': _0x37623a,
        'wd': _0x3c772e,
        'Uc': _0x2d0a15,
        'w': _0x45c99d,
        'nb': _0x2e3186,
        'Wc': _0x2bf3ef,
        'd': _0x200cce,
        'Rj': _0x26cd44,
        'P': _0x358691,
        'X': _0x37cb78,
        'Uj': _0x421da5,
        'sd': _0x2a93e3,
        'La': _0x51f598,
        'c': _0x5a9a1d,
        'Ka': _0xbe52d1,
        'Rc': _0x31b3d1,
        'f': _0x4a2fc2,
        'Mi': _0x4a7b31,
        'Ui': _0x41f33b,
        'tk': _0xa0dbde,
        'Ni': _0x45f99c,
        'Li': _0x48142a,
        'ad': _0x134d45,
        'q': _0x31fd16,
        'Ja': _0x2d0d1f,
        'Yi': _0x1ec402,
        's': _0x5a00c0,
        'u': _0x243fec,
        '$i': _0x3417da,
        'y': _0x5e00f9,
        'E': _0x1eca1b,
        'N': _0x139c75,
        'ub': _0x2ae401,
        '$': _0x478bfc,
        'vd': _0x20f0a1,
        'he': _0x723ab4,
        'Pe': _0x2125db,
        'He': _0x35c2cb,
        'Ne': _0x41cce7,
        'Xe': _0x196136,
        'ae': _0x56fbed,
        'Ue': _0xec0c7,
        'Ve': _0x1ed249,
        'Ke': _0xce84d8,
        'Oe': _0xe26cf2,
        'fe': _0x1b99b1,
        'de': _0x591586,
        'Vd': _0xee75ad,
        'ee': _0x24c786,
        've': _0x2f703d,
        'Ae': _0x1f6b96,
        'Ee': _0xe09493,
        'We': _0xc8d792,
        'ue': _0x17272e,
        'Re': _0x58e3f6,
        'we': _0x29f961,
        'Te': _0x42790f,
        'Le': _0x3c02e4,
        'Ye': _0xfccce6,
        'Td': _0x10504d,
        'Zd': _0xd921e,
        'ze': _0x30966d,
        'De': _0x2de147,
        'oe': _0x4a3876,
        'Ud': _0x225639,
        'Sd': _0x4c19e0,
        'qe': _0x4bab91,
        '$d': _0x2cd9f1,
        'Fe': _0x1ea274,
        'h': _0x1b694a,
        'td': _0x1f96a7,
        'g': _0xc86741,
        'Tf': _0xfc4a26,
        'z': _0x32a0c5,
        'Tc': _0x599134,
        'Qj': _0x365b72,
        'G': _0x5159b9,
        'U': _0x36acbd,
        'm': _0x4f6d0e,
        'Vi': _0x5db92d,
        'Na': _0x11e4a1,
        'Wi': _0x3fe167,
        'Oc': _0x189f4f,
        'Z': _0x36724a,
        'sk': _0x2e4c87,
        '_i': _0x4927f7,
        'K': _0x2660d6,
        'H': _0x367ba3,
        'e': _0x3cefcc,
        'qd': _0x5dd0db,
        'ma': _0x3027fc,
        'uk': _0x27a4d8,
        'Ma': _0x3da2ed,
        'n': _0x26f417,
        'aj': _0x23c500,
        'ke': _0x4ef096,
        'rd': _0x1bef63,
        '$c': _0x522e06,
        'r': _0x3e2cec,
        't': _0x26e0cd,
        'B': _0x1aa7b4,
        'Xi': _0x28ea83,
        'ml': _0x3e452a,
        'Q': _0x30104e,
        'Ge': _0x52ddaf,
        'I': _0x25cf03,
        'Y': _0x3c0177,
        '_c': _0x513b96,
        'Oa': _0x2ed6e6,
        'Vc': _0x4d872f,
        'ud': _0x1a210e,
        'L': _0x1dd963,
        'je': _0x114e34,
        'Me': _0x6ead64,
        'ye': _0x26ac5d,
        'pe': _0x5b7eec,
        'Ce': _0x4931b3,
        'Je': _0x217373,
        'Qe': _0x402d72,
        'Wd': _0x3ce3a8,
        'ce': _0x46af1f,
        'ne': _0x3c8076,
        'Ie': _0x3ce05a,
        'Be': _0x23dd89,
        'le': _0x21ceef,
        're': _0xb31a22,
        '_d': _0x24ea7a,
        'be': _0x6bed37,
        'ge': _0x1bd2f3,
        'Xd': _0x21eff6,
        'Yd': _0x1934d8,
        'k': _0x42619c,
        'yb': _0x371233,
        'v': _0x36ab1b,
        'Sa': _0x34b9c5,
        'Ta': _0x21161a,
        'Qa': _0x16e18f,
        'na': _0x139271,
        'vb': _0x318d3b
    }
      , _0x4e9d70 = _0x221294()
      , _0x16501d = _0x1455c0['___wasm_call_ctors'] = function() {
        return (_0x16501d = _0x1455c0['___wasm_call_ctors'] = _0x1455c0['asm']['rl'])['apply'](null, arguments);
    }
      , _0x2e5e2a = _0x1455c0['_ReleaseKeys'] = function() {
        return (_0x2e5e2a = _0x1455c0['_ReleaseKeys'] = _0x1455c0['asm']['sl'])['apply'](null, arguments);
    }
      , _0x5694a0 = _0x1455c0['_SendMessageFloat'] = function() {
        return (_0x5694a0 = _0x1455c0['_SendMessageFloat'] = _0x1455c0['asm']['tl'])['apply'](null, arguments);
    }
      , _0x522f98 = _0x1455c0['_SendMessageString'] = function() {
        return (_0x522f98 = _0x1455c0['_SendMessageString'] = _0x1455c0['asm']['ul'])['apply'](null, arguments);
    }
      , _0x42bad7 = _0x1455c0['_SendMessage'] = function() {
        return (_0x42bad7 = _0x1455c0['_SendMessage'] = _0x1455c0['asm']['vl'])['apply'](null, arguments);
    }
      , _0x59870d = _0x1455c0['_SetFullscreen'] = function() {
        return (_0x59870d = _0x1455c0['_SetFullscreen'] = _0x1455c0['asm']['wl'])['apply'](null, arguments);
    }
      , _0x1f6982 = _0x1455c0['_main'] = function() {
        return (_0x1f6982 = _0x1455c0['_main'] = _0x1455c0['asm']['xl'])['apply'](null, arguments);
    }
      , _0x2d2c5c = _0x1455c0['___errno_location'] = function() {
        return (_0x2d2c5c = _0x1455c0['___errno_location'] = _0x1455c0['asm']['yl'])['apply'](null, arguments);
    }
      , _0x33e58f = _0x1455c0['_htonl'] = function() {
        return (_0x33e58f = _0x1455c0['_htonl'] = _0x1455c0['asm']['zl'])['apply'](null, arguments);
    }
      , _0x1e0697 = _0x1455c0['_htons'] = function() {
        return (_0x1e0697 = _0x1455c0['_htons'] = _0x1455c0['asm']['Al'])['apply'](null, arguments);
    }
      , _0x399942 = _0x1455c0['_ntohs'] = function() {
        return (_0x399942 = _0x1455c0['_ntohs'] = _0x1455c0['asm']['Bl'])['apply'](null, arguments);
    }
      , _0x2e5efc = _0x1455c0['__get_tzname'] = function() {
        return (_0x2e5efc = _0x1455c0['__get_tzname'] = _0x1455c0['asm']['Cl'])['apply'](null, arguments);
    }
      , _0x2ebd4f = _0x1455c0['__get_daylight'] = function() {
        return (_0x2ebd4f = _0x1455c0['__get_daylight'] = _0x1455c0['asm']['Dl'])['apply'](null, arguments);
    }
      , _0x58e7f9 = _0x1455c0['__get_timezone'] = function() {
        return (_0x58e7f9 = _0x1455c0['__get_timezone'] = _0x1455c0['asm']['El'])['apply'](null, arguments);
    }
      , _0x9ae453 = _0x1455c0['stackSave'] = function() {
        return (_0x9ae453 = _0x1455c0['stackSave'] = _0x1455c0['asm']['Fl'])['apply'](null, arguments);
    }
      , _0x305fb7 = _0x1455c0['stackRestore'] = function() {
        return (_0x305fb7 = _0x1455c0['stackRestore'] = _0x1455c0['asm']['Gl'])['apply'](null, arguments);
    }
      , _0x2887c9 = _0x1455c0['stackAlloc'] = function() {
        return (_0x2887c9 = _0x1455c0['stackAlloc'] = _0x1455c0['asm']['Hl'])['apply'](null, arguments);
    }
      , _0x4990f2 = _0x1455c0['_setThrew'] = function() {
        return (_0x4990f2 = _0x1455c0['_setThrew'] = _0x1455c0['asm']['Il'])['apply'](null, arguments);
    }
      , _0x3b07bf = _0x1455c0['___cxa_can_catch'] = function() {
        return (_0x3b07bf = _0x1455c0['___cxa_can_catch'] = _0x1455c0['asm']['Jl'])['apply'](null, arguments);
    }
      , _0x3fa6ff = _0x1455c0['___cxa_is_pointer_type'] = function() {
        return (_0x3fa6ff = _0x1455c0['___cxa_is_pointer_type'] = _0x1455c0['asm']['Kl'])['apply'](null, arguments);
    }
      , _0x214635 = _0x1455c0['_malloc'] = function() {
        return (_0x214635 = _0x1455c0['_malloc'] = _0x1455c0['asm']['Ll'])['apply'](null, arguments);
    }
      , _0x1f3809 = _0x1455c0['_free'] = function() {
        return (_0x1f3809 = _0x1455c0['_free'] = _0x1455c0['asm']['Ml'])['apply'](null, arguments);
    }
      , _0x14b23e = _0x1455c0['_memalign'] = function() {
        return (_0x14b23e = _0x1455c0['_memalign'] = _0x1455c0['asm']['Nl'])['apply'](null, arguments);
    }
      , _0x4bcec0 = _0x1455c0['_memset'] = function() {
        return (_0x4bcec0 = _0x1455c0['_memset'] = _0x1455c0['asm']['Ol'])['apply'](null, arguments);
    }
      , _0x50ed07 = _0x1455c0['_strlen'] = function() {
        return (_0x50ed07 = _0x1455c0['_strlen'] = _0x1455c0['asm']['Pl'])['apply'](null, arguments);
    }
      , _0x2d4b54 = _0x1455c0['dynCall_iidiiii'] = function() {
        return (_0x2d4b54 = _0x1455c0['dynCall_iidiiii'] = _0x1455c0['asm']['Rl'])['apply'](null, arguments);
    }
      , _0x194ad7 = _0x1455c0['dynCall_vii'] = function() {
        return (_0x194ad7 = _0x1455c0['dynCall_vii'] = _0x1455c0['asm']['Sl'])['apply'](null, arguments);
    }
      , _0xb7f250 = _0x1455c0['dynCall_iii'] = function() {
        return (_0xb7f250 = _0x1455c0['dynCall_iii'] = _0x1455c0['asm']['Tl'])['apply'](null, arguments);
    }
      , _0xd695d7 = _0x1455c0['dynCall_ii'] = function() {
        return (_0xd695d7 = _0x1455c0['dynCall_ii'] = _0x1455c0['asm']['Ul'])['apply'](null, arguments);
    }
      , _0x4f2e95 = _0x1455c0['dynCall_iiii'] = function() {
        return (_0x4f2e95 = _0x1455c0['dynCall_iiii'] = _0x1455c0['asm']['Vl'])['apply'](null, arguments);
    }
      , _0x5b10d3 = _0x1455c0['dynCall_jiji'] = function() {
        return (_0x5b10d3 = _0x1455c0['dynCall_jiji'] = _0x1455c0['asm']['Wl'])['apply'](null, arguments);
    }
      , _0x2d1c65 = _0x1455c0['dynCall_vi'] = function() {
        return (_0x2d1c65 = _0x1455c0['dynCall_vi'] = _0x1455c0['asm']['Xl'])['apply'](null, arguments);
    }
      , _0x28803b = _0x1455c0['dynCall_iiiii'] = function() {
        return (_0x28803b = _0x1455c0['dynCall_iiiii'] = _0x1455c0['asm']['Yl'])['apply'](null, arguments);
    }
      , _0x12db9f = _0x1455c0['dynCall_viii'] = function() {
        return (_0x12db9f = _0x1455c0['dynCall_viii'] = _0x1455c0['asm']['Zl'])['apply'](null, arguments);
    }
      , _0x5dc438 = _0x1455c0['dynCall_i'] = function() {
        return (_0x5dc438 = _0x1455c0['dynCall_i'] = _0x1455c0['asm']['_l'])['apply'](null, arguments);
    }
      , _0x319313 = _0x1455c0['dynCall_v'] = function() {
        return (_0x319313 = _0x1455c0['dynCall_v'] = _0x1455c0['asm']['$l'])['apply'](null, arguments);
    }
      , _0x20e8c0 = _0x1455c0['dynCall_viiiiii'] = function() {
        return (_0x20e8c0 = _0x1455c0['dynCall_viiiiii'] = _0x1455c0['asm']['am'])['apply'](null, arguments);
    }
      , _0x48b586 = _0x1455c0['dynCall_viiiii'] = function() {
        return (_0x48b586 = _0x1455c0['dynCall_viiiii'] = _0x1455c0['asm']['bm'])['apply'](null, arguments);
    }
      , _0x8f97d8 = _0x1455c0['dynCall_viiii'] = function() {
        return (_0x8f97d8 = _0x1455c0['dynCall_viiii'] = _0x1455c0['asm']['cm'])['apply'](null, arguments);
    }
      , _0x4ba930 = _0x1455c0['dynCall_iiiiii'] = function() {
        return (_0x4ba930 = _0x1455c0['dynCall_iiiiii'] = _0x1455c0['asm']['dm'])['apply'](null, arguments);
    }
      , _0x4f1730 = _0x1455c0['dynCall_iiij'] = function() {
        return (_0x4f1730 = _0x1455c0['dynCall_iiij'] = _0x1455c0['asm']['em'])['apply'](null, arguments);
    }
      , _0xe4a833 = _0x1455c0['dynCall_iiiiiiii'] = function() {
        return (_0xe4a833 = _0x1455c0['dynCall_iiiiiiii'] = _0x1455c0['asm']['fm'])['apply'](null, arguments);
    }
      , _0x525815 = _0x1455c0['dynCall_iiijiii'] = function() {
        return (_0x525815 = _0x1455c0['dynCall_iiijiii'] = _0x1455c0['asm']['gm'])['apply'](null, arguments);
    }
      , _0x32c01c = _0x1455c0['dynCall_iij'] = function() {
        return (_0x32c01c = _0x1455c0['dynCall_iij'] = _0x1455c0['asm']['hm'])['apply'](null, arguments);
    }
      , _0x2c1e10 = _0x1455c0['dynCall_iiiiiii'] = function() {
        return (_0x2c1e10 = _0x1455c0['dynCall_iiiiiii'] = _0x1455c0['asm']['im'])['apply'](null, arguments);
    }
      , _0x24324e = _0x1455c0['dynCall_jii'] = function() {
        return (_0x24324e = _0x1455c0['dynCall_jii'] = _0x1455c0['asm']['jm'])['apply'](null, arguments);
    }
      , _0x21e182 = _0x1455c0['dynCall_viiiiiii'] = function() {
        return (_0x21e182 = _0x1455c0['dynCall_viiiiiii'] = _0x1455c0['asm']['km'])['apply'](null, arguments);
    }
      , _0x3b25e5 = _0x1455c0['dynCall_jiii'] = function() {
        return (_0x3b25e5 = _0x1455c0['dynCall_jiii'] = _0x1455c0['asm']['lm'])['apply'](null, arguments);
    }
      , _0x27a66e = _0x1455c0['dynCall_fiiffi'] = function() {
        return (_0x27a66e = _0x1455c0['dynCall_fiiffi'] = _0x1455c0['asm']['mm'])['apply'](null, arguments);
    }
      , _0x35a029 = _0x1455c0['dynCall_viiififii'] = function() {
        return (_0x35a029 = _0x1455c0['dynCall_viiififii'] = _0x1455c0['asm']['nm'])['apply'](null, arguments);
    }
      , _0xbb2163 = _0x1455c0['dynCall_viiji'] = function() {
        return (_0xbb2163 = _0x1455c0['dynCall_viiji'] = _0x1455c0['asm']['om'])['apply'](null, arguments);
    }
      , _0x26fafe = _0x1455c0['dynCall_fii'] = function() {
        return (_0x26fafe = _0x1455c0['dynCall_fii'] = _0x1455c0['asm']['pm'])['apply'](null, arguments);
    }
      , _0x3abc7e = _0x1455c0['dynCall_viifi'] = function() {
        return (_0x3abc7e = _0x1455c0['dynCall_viifi'] = _0x1455c0['asm']['qm'])['apply'](null, arguments);
    }
      , _0x5bfaaa = _0x1455c0['dynCall_viiff'] = function() {
        return (_0x5bfaaa = _0x1455c0['dynCall_viiff'] = _0x1455c0['asm']['rm'])['apply'](null, arguments);
    }
      , _0xafe0c5 = _0x1455c0['dynCall_iijji'] = function() {
        return (_0xafe0c5 = _0x1455c0['dynCall_iijji'] = _0x1455c0['asm']['sm'])['apply'](null, arguments);
    }
      , _0xf4636f = _0x1455c0['dynCall_iiddi'] = function() {
        return (_0xf4636f = _0x1455c0['dynCall_iiddi'] = _0x1455c0['asm']['tm'])['apply'](null, arguments);
    }
      , _0x42d27b = _0x1455c0['dynCall_iiffi'] = function() {
        return (_0x42d27b = _0x1455c0['dynCall_iiffi'] = _0x1455c0['asm']['um'])['apply'](null, arguments);
    }
      , _0x33f504 = _0x1455c0['dynCall_viiij'] = function() {
        return (_0x33f504 = _0x1455c0['dynCall_viiij'] = _0x1455c0['asm']['vm'])['apply'](null, arguments);
    }
      , _0x44a79b = _0x1455c0['dynCall_diii'] = function() {
        return (_0x44a79b = _0x1455c0['dynCall_diii'] = _0x1455c0['asm']['wm'])['apply'](null, arguments);
    }
      , _0x4dae6d = _0x1455c0['dynCall_viiifi'] = function() {
        return (_0x4dae6d = _0x1455c0['dynCall_viiifi'] = _0x1455c0['asm']['xm'])['apply'](null, arguments);
    }
      , _0x359742 = _0x1455c0['dynCall_vijii'] = function() {
        return (_0x359742 = _0x1455c0['dynCall_vijii'] = _0x1455c0['asm']['ym'])['apply'](null, arguments);
    }
      , _0x2912a7 = _0x1455c0['dynCall_viif'] = function() {
        return (_0x2912a7 = _0x1455c0['dynCall_viif'] = _0x1455c0['asm']['zm'])['apply'](null, arguments);
    }
      , _0x4850fe = _0x1455c0['dynCall_iiji'] = function() {
        return (_0x4850fe = _0x1455c0['dynCall_iiji'] = _0x1455c0['asm']['Am'])['apply'](null, arguments);
    }
      , _0x91d167 = _0x1455c0['dynCall_fiii'] = function() {
        return (_0x91d167 = _0x1455c0['dynCall_fiii'] = _0x1455c0['asm']['Bm'])['apply'](null, arguments);
    }
      , _0x1032f7 = _0x1455c0['dynCall_jiiijii'] = function() {
        return (_0x1032f7 = _0x1455c0['dynCall_jiiijii'] = _0x1455c0['asm']['Cm'])['apply'](null, arguments);
    }
      , _0x593d18 = _0x1455c0['dynCall_viiijiii'] = function() {
        return (_0x593d18 = _0x1455c0['dynCall_viiijiii'] = _0x1455c0['asm']['Dm'])['apply'](null, arguments);
    }
      , _0x41ef49 = _0x1455c0['dynCall_viiiiiiii'] = function() {
        return (_0x41ef49 = _0x1455c0['dynCall_viiiiiiii'] = _0x1455c0['asm']['Em'])['apply'](null, arguments);
    }
      , _0x4d1344 = _0x1455c0['dynCall_vfi'] = function() {
        return (_0x4d1344 = _0x1455c0['dynCall_vfi'] = _0x1455c0['asm']['Fm'])['apply'](null, arguments);
    }
      , _0x5600d3 = _0x1455c0['dynCall_vifffi'] = function() {
        return (_0x5600d3 = _0x1455c0['dynCall_vifffi'] = _0x1455c0['asm']['Gm'])['apply'](null, arguments);
    }
      , _0x133b96 = _0x1455c0['dynCall_viiffiiiiiiiiiiiii'] = function() {
        return (_0x133b96 = _0x1455c0['dynCall_viiffiiiiiiiiiiiii'] = _0x1455c0['asm']['Hm'])['apply'](null, arguments);
    }
      , _0x5b2921 = _0x1455c0['dynCall_viiiifiiifiiiiiiii'] = function() {
        return (_0x5b2921 = _0x1455c0['dynCall_viiiifiiifiiiiiiii'] = _0x1455c0['asm']['Im'])['apply'](null, arguments);
    }
      , _0x9a21ae = _0x1455c0['dynCall_viiiiiiiiiiiiiiiii'] = function() {
        return (_0x9a21ae = _0x1455c0['dynCall_viiiiiiiiiiiiiiiii'] = _0x1455c0['asm']['Jm'])['apply'](null, arguments);
    }
      , _0x2afa81 = _0x1455c0['dynCall_ijji'] = function() {
        return (_0x2afa81 = _0x1455c0['dynCall_ijji'] = _0x1455c0['asm']['Km'])['apply'](null, arguments);
    }
      , _0x1515b0 = _0x1455c0['dynCall_iiiiiiiiii'] = function() {
        return (_0x1515b0 = _0x1455c0['dynCall_iiiiiiiiii'] = _0x1455c0['asm']['Lm'])['apply'](null, arguments);
    }
      , _0x54060e = _0x1455c0['dynCall_iiiiiiiii'] = function() {
        return (_0x54060e = _0x1455c0['dynCall_iiiiiiiii'] = _0x1455c0['asm']['Mm'])['apply'](null, arguments);
    }
      , _0x2a841c = _0x1455c0['dynCall_iiifi'] = function() {
        return (_0x2a841c = _0x1455c0['dynCall_iiifi'] = _0x1455c0['asm']['Nm'])['apply'](null, arguments);
    }
      , _0x506ad = _0x1455c0['dynCall_viiiffii'] = function() {
        return (_0x506ad = _0x1455c0['dynCall_viiiffii'] = _0x1455c0['asm']['Om'])['apply'](null, arguments);
    }
      , _0x1f2c96 = _0x1455c0['dynCall_iifi'] = function() {
        return (_0x1f2c96 = _0x1455c0['dynCall_iifi'] = _0x1455c0['asm']['Pm'])['apply'](null, arguments);
    }
      , _0x5bcb05 = _0x1455c0['dynCall_iiiiffi'] = function() {
        return (_0x5bcb05 = _0x1455c0['dynCall_iiiiffi'] = _0x1455c0['asm']['Qm'])['apply'](null, arguments);
    }
      , _0x18a335 = _0x1455c0['dynCall_viiiiffi'] = function() {
        return (_0x18a335 = _0x1455c0['dynCall_viiiiffi'] = _0x1455c0['asm']['Rm'])['apply'](null, arguments);
    }
      , _0x5196e2 = _0x1455c0['dynCall_viiiffi'] = function() {
        return (_0x5196e2 = _0x1455c0['dynCall_viiiffi'] = _0x1455c0['asm']['Sm'])['apply'](null, arguments);
    }
      , _0x2d8b4a = _0x1455c0['dynCall_iiiiiiiiiiiii'] = function() {
        return (_0x2d8b4a = _0x1455c0['dynCall_iiiiiiiiiiiii'] = _0x1455c0['asm']['Tm'])['apply'](null, arguments);
    }
      , _0x231bc1 = _0x1455c0['dynCall_vifi'] = function() {
        return (_0x231bc1 = _0x1455c0['dynCall_vifi'] = _0x1455c0['asm']['Um'])['apply'](null, arguments);
    }
      , _0x3738dc = _0x1455c0['dynCall_viiiifiii'] = function() {
        return (_0x3738dc = _0x1455c0['dynCall_viiiifiii'] = _0x1455c0['asm']['Vm'])['apply'](null, arguments);
    }
      , _0xc60bd7 = _0x1455c0['dynCall_viiifffiiiiii'] = function() {
        return (_0xc60bd7 = _0x1455c0['dynCall_viiifffiiiiii'] = _0x1455c0['asm']['Wm'])['apply'](null, arguments);
    }
      , _0x304bfb = _0x1455c0['dynCall_vifii'] = function() {
        return (_0x304bfb = _0x1455c0['dynCall_vifii'] = _0x1455c0['asm']['Xm'])['apply'](null, arguments);
    }
      , _0x31e7f8 = _0x1455c0['dynCall_viiffffffiiiiifi'] = function() {
        return (_0x31e7f8 = _0x1455c0['dynCall_viiffffffiiiiifi'] = _0x1455c0['asm']['Ym'])['apply'](null, arguments);
    }
      , _0x23df5d = _0x1455c0['dynCall_viffi'] = function() {
        return (_0x23df5d = _0x1455c0['dynCall_viffi'] = _0x1455c0['asm']['Zm'])['apply'](null, arguments);
    }
      , _0x5ab956 = _0x1455c0['dynCall_viiifii'] = function() {
        return (_0x5ab956 = _0x1455c0['dynCall_viiifii'] = _0x1455c0['asm']['_m'])['apply'](null, arguments);
    }
      , _0x32c30d = _0x1455c0['dynCall_iifii'] = function() {
        return (_0x32c30d = _0x1455c0['dynCall_iifii'] = _0x1455c0['asm']['$m'])['apply'](null, arguments);
    }
      , _0x379524 = _0x1455c0['dynCall_ji'] = function() {
        return (_0x379524 = _0x1455c0['dynCall_ji'] = _0x1455c0['asm']['an'])['apply'](null, arguments);
    }
      , _0x1d8eee = _0x1455c0['dynCall_viifii'] = function() {
        return (_0x1d8eee = _0x1455c0['dynCall_viifii'] = _0x1455c0['asm']['bn'])['apply'](null, arguments);
    }
      , _0x4fda01 = _0x1455c0['dynCall_viiiiiiiiiiiiiii'] = function() {
        return (_0x4fda01 = _0x1455c0['dynCall_viiiiiiiiiiiiiii'] = _0x1455c0['asm']['cn'])['apply'](null, arguments);
    }
      , _0x1f2301 = _0x1455c0['dynCall_iiffifiiii'] = function() {
        return (_0x1f2301 = _0x1455c0['dynCall_iiffifiiii'] = _0x1455c0['asm']['dn'])['apply'](null, arguments);
    }
      , _0x53508a = _0x1455c0['dynCall_jidi'] = function() {
        return (_0x53508a = _0x1455c0['dynCall_jidi'] = _0x1455c0['asm']['en'])['apply'](null, arguments);
    }
      , _0x3455f5 = _0x1455c0['dynCall_jjji'] = function() {
        return (_0x3455f5 = _0x1455c0['dynCall_jjji'] = _0x1455c0['asm']['fn'])['apply'](null, arguments);
    }
      , _0x5aa238 = _0x1455c0['dynCall_iji'] = function() {
        return (_0x5aa238 = _0x1455c0['dynCall_iji'] = _0x1455c0['asm']['gn'])['apply'](null, arguments);
    }
      , _0x4cc72d = _0x1455c0['dynCall_jdi'] = function() {
        return (_0x4cc72d = _0x1455c0['dynCall_jdi'] = _0x1455c0['asm']['hn'])['apply'](null, arguments);
    }
      , _0x146866 = _0x1455c0['dynCall_iiffii'] = function() {
        return (_0x146866 = _0x1455c0['dynCall_iiffii'] = _0x1455c0['asm']['jn'])['apply'](null, arguments);
    }
      , _0x305073 = _0x1455c0['dynCall_fi'] = function() {
        return (_0x305073 = _0x1455c0['dynCall_fi'] = _0x1455c0['asm']['kn'])['apply'](null, arguments);
    }
      , _0x30d260 = _0x1455c0['dynCall_viffffi'] = function() {
        return (_0x30d260 = _0x1455c0['dynCall_viffffi'] = _0x1455c0['asm']['ln'])['apply'](null, arguments);
    }
      , _0x5b335b = _0x1455c0['dynCall_iiiiiiiiiiiiiiiiiii'] = function() {
        return (_0x5b335b = _0x1455c0['dynCall_iiiiiiiiiiiiiiiiiii'] = _0x1455c0['asm']['mn'])['apply'](null, arguments);
    }
      , _0x47d37a = _0x1455c0['dynCall_viiiiiiiiiiiiii'] = function() {
        return (_0x47d37a = _0x1455c0['dynCall_viiiiiiiiiiiiii'] = _0x1455c0['asm']['nn'])['apply'](null, arguments);
    }
      , _0x3f622e = _0x1455c0['dynCall_viji'] = function() {
        return (_0x3f622e = _0x1455c0['dynCall_viji'] = _0x1455c0['asm']['on'])['apply'](null, arguments);
    }
      , _0x726401 = _0x1455c0['dynCall_viiiiiiiiii'] = function() {
        return (_0x726401 = _0x1455c0['dynCall_viiiiiiiiii'] = _0x1455c0['asm']['pn'])['apply'](null, arguments);
    }
      , _0x3b495e = _0x1455c0['dynCall_vidi'] = function() {
        return (_0x3b495e = _0x1455c0['dynCall_vidi'] = _0x1455c0['asm']['qn'])['apply'](null, arguments);
    }
      , _0x1e01a5 = _0x1455c0['dynCall_dii'] = function() {
        return (_0x1e01a5 = _0x1455c0['dynCall_dii'] = _0x1455c0['asm']['rn'])['apply'](null, arguments);
    }
      , _0x10f099 = _0x1455c0['dynCall_fffi'] = function() {
        return (_0x10f099 = _0x1455c0['dynCall_fffi'] = _0x1455c0['asm']['sn'])['apply'](null, arguments);
    }
      , _0x2f0e7b = _0x1455c0['dynCall_jji'] = function() {
        return (_0x2f0e7b = _0x1455c0['dynCall_jji'] = _0x1455c0['asm']['tn'])['apply'](null, arguments);
    }
      , _0x1a011b = _0x1455c0['dynCall_dddi'] = function() {
        return (_0x1a011b = _0x1455c0['dynCall_dddi'] = _0x1455c0['asm']['un'])['apply'](null, arguments);
    }
      , _0x26e025 = _0x1455c0['dynCall_jiiii'] = function() {
        return (_0x26e025 = _0x1455c0['dynCall_jiiii'] = _0x1455c0['asm']['vn'])['apply'](null, arguments);
    }
      , _0x22b44b = _0x1455c0['dynCall_diiii'] = function() {
        return (_0x22b44b = _0x1455c0['dynCall_diiii'] = _0x1455c0['asm']['wn'])['apply'](null, arguments);
    }
      , _0x417443 = _0x1455c0['dynCall_iidi'] = function() {
        return (_0x417443 = _0x1455c0['dynCall_iidi'] = _0x1455c0['asm']['xn'])['apply'](null, arguments);
    }
      , _0x225470 = _0x1455c0['dynCall_vijiiii'] = function() {
        return (_0x225470 = _0x1455c0['dynCall_vijiiii'] = _0x1455c0['asm']['yn'])['apply'](null, arguments);
    }
      , _0x5b6ecd = _0x1455c0['dynCall_viiiiiiiii'] = function() {
        return (_0x5b6ecd = _0x1455c0['dynCall_viiiiiiiii'] = _0x1455c0['asm']['zn'])['apply'](null, arguments);
    }
      , _0xbee9ef = _0x1455c0['dynCall_viiiji'] = function() {
        return (_0xbee9ef = _0x1455c0['dynCall_viiiji'] = _0x1455c0['asm']['An'])['apply'](null, arguments);
    }
      , _0x12f732 = _0x1455c0['dynCall_viiiiiiiiiii'] = function() {
        return (_0x12f732 = _0x1455c0['dynCall_viiiiiiiiiii'] = _0x1455c0['asm']['Bn'])['apply'](null, arguments);
    }
      , _0x2c4ee1 = _0x1455c0['dynCall_viffiiiiiiiiiiiii'] = function() {
        return (_0x2c4ee1 = _0x1455c0['dynCall_viffiiiiiiiiiiiii'] = _0x1455c0['asm']['Cn'])['apply'](null, arguments);
    }
      , _0x521e4a = _0x1455c0['dynCall_iiiifiiiiiiiii'] = function() {
        return (_0x521e4a = _0x1455c0['dynCall_iiiifiiiiiiiii'] = _0x1455c0['asm']['Dn'])['apply'](null, arguments);
    }
      , _0x33d540 = _0x1455c0['dynCall_iijii'] = function() {
        return (_0x33d540 = _0x1455c0['dynCall_iijii'] = _0x1455c0['asm']['En'])['apply'](null, arguments);
    }
      , _0x22fa6d = _0x1455c0['dynCall_iiiiidi'] = function() {
        return (_0x22fa6d = _0x1455c0['dynCall_iiiiidi'] = _0x1455c0['asm']['Fn'])['apply'](null, arguments);
    }
      , _0x4e6d6d = _0x1455c0['dynCall_diiid'] = function() {
        return (_0x4e6d6d = _0x1455c0['dynCall_diiid'] = _0x1455c0['asm']['Gn'])['apply'](null, arguments);
    }
      , _0x2a9f4d = _0x1455c0['dynCall_jiiij'] = function() {
        return (_0x2a9f4d = _0x1455c0['dynCall_jiiij'] = _0x1455c0['asm']['Hn'])['apply'](null, arguments);
    }
      , _0x45feb7 = _0x1455c0['dynCall_fiiif'] = function() {
        return (_0x45feb7 = _0x1455c0['dynCall_fiiif'] = _0x1455c0['asm']['In'])['apply'](null, arguments);
    }
      , _0x16161f = _0x1455c0['dynCall_ddiii'] = function() {
        return (_0x16161f = _0x1455c0['dynCall_ddiii'] = _0x1455c0['asm']['Jn'])['apply'](null, arguments);
    }
      , _0x1ffaf6 = _0x1455c0['dynCall_jiiji'] = function() {
        return (_0x1ffaf6 = _0x1455c0['dynCall_jiiji'] = _0x1455c0['asm']['Kn'])['apply'](null, arguments);
    }
      , _0x1bc59f = _0x1455c0['dynCall_ijiii'] = function() {
        return (_0x1bc59f = _0x1455c0['dynCall_ijiii'] = _0x1455c0['asm']['Ln'])['apply'](null, arguments);
    }
      , _0xa1a6e0 = _0x1455c0['dynCall_viiiifi'] = function() {
        return (_0xa1a6e0 = _0x1455c0['dynCall_viiiifi'] = _0x1455c0['asm']['Mn'])['apply'](null, arguments);
    }
      , _0x270471 = _0x1455c0['dynCall_viiiiiiiiifi'] = function() {
        return (_0x270471 = _0x1455c0['dynCall_viiiiiiiiifi'] = _0x1455c0['asm']['Nn'])['apply'](null, arguments);
    }
      , _0x42cdb1 = _0x1455c0['dynCall_viij'] = function() {
        return (_0x42cdb1 = _0x1455c0['dynCall_viij'] = _0x1455c0['asm']['On'])['apply'](null, arguments);
    }
      , _0x492c52 = _0x1455c0['dynCall_viiijj'] = function() {
        return (_0x492c52 = _0x1455c0['dynCall_viiijj'] = _0x1455c0['asm']['Pn'])['apply'](null, arguments);
    }
      , _0x305c6e = _0x1455c0['dynCall_viijji'] = function() {
        return (_0x305c6e = _0x1455c0['dynCall_viijji'] = _0x1455c0['asm']['Qn'])['apply'](null, arguments);
    }
      , _0x4af62a = _0x1455c0['dynCall_vijiii'] = function() {
        return (_0x4af62a = _0x1455c0['dynCall_vijiii'] = _0x1455c0['asm']['Rn'])['apply'](null, arguments);
    }
      , _0x9291a8 = _0x1455c0['dynCall_viiiiiiifjjfiii'] = function() {
        return (_0x9291a8 = _0x1455c0['dynCall_viiiiiiifjjfiii'] = _0x1455c0['asm']['Sn'])['apply'](null, arguments);
    }
      , _0x325eb2 = _0x1455c0['dynCall_viiiiiiifiifiii'] = function() {
        return (_0x325eb2 = _0x1455c0['dynCall_viiiiiiifiifiii'] = _0x1455c0['asm']['Tn'])['apply'](null, arguments);
    }
      , _0x4d290e = _0x1455c0['dynCall_viiiiiiiffffiii'] = function() {
        return (_0x4d290e = _0x1455c0['dynCall_viiiiiiiffffiii'] = _0x1455c0['asm']['Un'])['apply'](null, arguments);
    }
      , _0x3eddbe = _0x1455c0['dynCall_fiffffi'] = function() {
        return (_0x3eddbe = _0x1455c0['dynCall_fiffffi'] = _0x1455c0['asm']['Vn'])['apply'](null, arguments);
    }
      , _0x5de580 = _0x1455c0['dynCall_ifi'] = function() {
        return (_0x5de580 = _0x1455c0['dynCall_ifi'] = _0x1455c0['asm']['Wn'])['apply'](null, arguments);
    }
      , _0xbed010 = _0x1455c0['dynCall_idi'] = function() {
        return (_0xbed010 = _0x1455c0['dynCall_idi'] = _0x1455c0['asm']['Xn'])['apply'](null, arguments);
    }
      , _0x16fe21 = _0x1455c0['dynCall_viiiiiiiiiiii'] = function() {
        return (_0x16fe21 = _0x1455c0['dynCall_viiiiiiiiiiii'] = _0x1455c0['asm']['Yn'])['apply'](null, arguments);
    }
      , _0x54f658 = _0x1455c0['dynCall_iiiiji'] = function() {
        return (_0x54f658 = _0x1455c0['dynCall_iiiiji'] = _0x1455c0['asm']['Zn'])['apply'](null, arguments);
    }
      , _0x1cfbb5 = _0x1455c0['dynCall_viiiiiiiiiiiii'] = function() {
        return (_0x1cfbb5 = _0x1455c0['dynCall_viiiiiiiiiiiii'] = _0x1455c0['asm']['_n'])['apply'](null, arguments);
    }
      , _0x23a83b = _0x1455c0['dynCall_viiiiiiiiiiiiiiii'] = function() {
        return (_0x23a83b = _0x1455c0['dynCall_viiiiiiiiiiiiiiii'] = _0x1455c0['asm']['$n'])['apply'](null, arguments);
    }
      , _0x21dbad = _0x1455c0['dynCall_viiiiiiiiiiiiiiiiii'] = function() {
        return (_0x21dbad = _0x1455c0['dynCall_viiiiiiiiiiiiiiiiii'] = _0x1455c0['asm']['ao'])['apply'](null, arguments);
    }
      , _0x56e0da = _0x1455c0['dynCall_viidi'] = function() {
        return (_0x56e0da = _0x1455c0['dynCall_viidi'] = _0x1455c0['asm']['bo'])['apply'](null, arguments);
    }
      , _0x152c39 = _0x1455c0['dynCall_viiidi'] = function() {
        return (_0x152c39 = _0x1455c0['dynCall_viiidi'] = _0x1455c0['asm']['co'])['apply'](null, arguments);
    }
      , _0x3d7cac = _0x1455c0['dynCall_viidiji'] = function() {
        return (_0x3d7cac = _0x1455c0['dynCall_viidiji'] = _0x1455c0['asm']['eo'])['apply'](null, arguments);
    }
      , _0x38645b = _0x1455c0['dynCall_viidjii'] = function() {
        return (_0x38645b = _0x1455c0['dynCall_viidjii'] = _0x1455c0['asm']['fo'])['apply'](null, arguments);
    }
      , _0x1e89e3 = _0x1455c0['dynCall_vijijii'] = function() {
        return (_0x1e89e3 = _0x1455c0['dynCall_vijijii'] = _0x1455c0['asm']['go'])['apply'](null, arguments);
    }
      , _0x2185e9 = _0x1455c0['dynCall_viiiidi'] = function() {
        return (_0x2185e9 = _0x1455c0['dynCall_viiiidi'] = _0x1455c0['asm']['ho'])['apply'](null, arguments);
    }
      , _0x240dd6 = _0x1455c0['dynCall_iiiiiiidii'] = function() {
        return (_0x240dd6 = _0x1455c0['dynCall_iiiiiiidii'] = _0x1455c0['asm']['io'])['apply'](null, arguments);
    }
      , _0x9c2959 = _0x1455c0['dynCall_viiiidij'] = function() {
        return (_0x9c2959 = _0x1455c0['dynCall_viiiidij'] = _0x1455c0['asm']['jo'])['apply'](null, arguments);
    }
      , _0x18d037 = _0x1455c0['dynCall_viijii'] = function() {
        return (_0x18d037 = _0x1455c0['dynCall_viijii'] = _0x1455c0['asm']['ko'])['apply'](null, arguments);
    }
      , _0x5190d8 = _0x1455c0['dynCall_fiiii'] = function() {
        return (_0x5190d8 = _0x1455c0['dynCall_fiiii'] = _0x1455c0['asm']['lo'])['apply'](null, arguments);
    }
      , _0x44beb6 = _0x1455c0['dynCall_fiifi'] = function() {
        return (_0x44beb6 = _0x1455c0['dynCall_fiifi'] = _0x1455c0['asm']['mo'])['apply'](null, arguments);
    }
      , _0x54d78a = _0x1455c0['dynCall_iiidii'] = function() {
        return (_0x54d78a = _0x1455c0['dynCall_iiidii'] = _0x1455c0['asm']['no'])['apply'](null, arguments);
    }
      , _0x596041 = _0x1455c0['dynCall_iiiifi'] = function() {
        return (_0x596041 = _0x1455c0['dynCall_iiiifi'] = _0x1455c0['asm']['oo'])['apply'](null, arguments);
    }
      , _0x529263 = _0x1455c0['dynCall_iiiiiiiiiii'] = function() {
        return (_0x529263 = _0x1455c0['dynCall_iiiiiiiiiii'] = _0x1455c0['asm']['po'])['apply'](null, arguments);
    }
      , _0x4f836a = _0x1455c0['dynCall_viiiijiii'] = function() {
        return (_0x4f836a = _0x1455c0['dynCall_viiiijiii'] = _0x1455c0['asm']['qo'])['apply'](null, arguments);
    }
      , _0x234415 = _0x1455c0['dynCall_iiiifii'] = function() {
        return (_0x234415 = _0x1455c0['dynCall_iiiifii'] = _0x1455c0['asm']['ro'])['apply'](null, arguments);
    }
      , _0x1d9dfe = _0x1455c0['dynCall_iiifii'] = function() {
        return (_0x1d9dfe = _0x1455c0['dynCall_iiifii'] = _0x1455c0['asm']['so'])['apply'](null, arguments);
    }
      , _0x176a26 = _0x1455c0['dynCall_viiiifii'] = function() {
        return (_0x176a26 = _0x1455c0['dynCall_viiiifii'] = _0x1455c0['asm']['to'])['apply'](null, arguments);
    }
      , _0x30c57d = _0x1455c0['dynCall_viiffi'] = function() {
        return (_0x30c57d = _0x1455c0['dynCall_viiffi'] = _0x1455c0['asm']['uo'])['apply'](null, arguments);
    }
      , _0x2aab20 = _0x1455c0['dynCall_vifffiii'] = function() {
        return (_0x2aab20 = _0x1455c0['dynCall_vifffiii'] = _0x1455c0['asm']['vo'])['apply'](null, arguments);
    }
      , _0x3f3107 = _0x1455c0['dynCall_iiiiidii'] = function() {
        return (_0x3f3107 = _0x1455c0['dynCall_iiiiidii'] = _0x1455c0['asm']['wo'])['apply'](null, arguments);
    }
      , _0x476bb2 = _0x1455c0['dynCall_viiiiiiifddfiii'] = function() {
        return (_0x476bb2 = _0x1455c0['dynCall_viiiiiiifddfiii'] = _0x1455c0['asm']['xo'])['apply'](null, arguments);
    }
      , _0xe18d3c = _0x1455c0['dynCall_viidii'] = function() {
        return (_0xe18d3c = _0x1455c0['dynCall_viidii'] = _0x1455c0['asm']['yo'])['apply'](null, arguments);
    }
      , _0x31045f = _0x1455c0['dynCall_dji'] = function() {
        return (_0x31045f = _0x1455c0['dynCall_dji'] = _0x1455c0['asm']['zo'])['apply'](null, arguments);
    }
      , _0x114231 = _0x1455c0['dynCall_vidiii'] = function() {
        return (_0x114231 = _0x1455c0['dynCall_vidiii'] = _0x1455c0['asm']['Ao'])['apply'](null, arguments);
    }
      , _0x1992a8 = _0x1455c0['dynCall_viiddi'] = function() {
        return (_0x1992a8 = _0x1455c0['dynCall_viiddi'] = _0x1455c0['asm']['Bo'])['apply'](null, arguments);
    }
      , _0x5b05a2 = _0x1455c0['dynCall_iiiiiiiiiji'] = function() {
        return (_0x5b05a2 = _0x1455c0['dynCall_iiiiiiiiiji'] = _0x1455c0['asm']['Co'])['apply'](null, arguments);
    }
      , _0xf32dee = _0x1455c0['dynCall_vji'] = function() {
        return (_0xf32dee = _0x1455c0['dynCall_vji'] = _0x1455c0['asm']['Do'])['apply'](null, arguments);
    }
      , _0x5d1647 = _0x1455c0['dynCall_di'] = function() {
        return (_0x5d1647 = _0x1455c0['dynCall_di'] = _0x1455c0['asm']['Eo'])['apply'](null, arguments);
    }
      , _0xd70fac = _0x1455c0['dynCall_iiiiiiiiiiii'] = function() {
        return (_0xd70fac = _0x1455c0['dynCall_iiiiiiiiiiii'] = _0x1455c0['asm']['Fo'])['apply'](null, arguments);
    }
      , _0x2620dc = _0x1455c0['dynCall_iiiiiiiiiiiiii'] = function() {
        return (_0x2620dc = _0x1455c0['dynCall_iiiiiiiiiiiiii'] = _0x1455c0['asm']['Go'])['apply'](null, arguments);
    }
      , _0x30971a = _0x1455c0['dynCall_iiiiiiiiiiiiiii'] = function() {
        return (_0x30971a = _0x1455c0['dynCall_iiiiiiiiiiiiiii'] = _0x1455c0['asm']['Ho'])['apply'](null, arguments);
    }
      , _0x1ed446 = _0x1455c0['dynCall_iiiiiiiiiiiiiiii'] = function() {
        return (_0x1ed446 = _0x1455c0['dynCall_iiiiiiiiiiiiiiii'] = _0x1455c0['asm']['Io'])['apply'](null, arguments);
    }
      , _0x16b126 = _0x1455c0['dynCall_iiiiiiiiiiiiiiiii'] = function() {
        return (_0x16b126 = _0x1455c0['dynCall_iiiiiiiiiiiiiiiii'] = _0x1455c0['asm']['Jo'])['apply'](null, arguments);
    }
      , _0x1b1672 = _0x1455c0['dynCall_iiiiiiiiiiiiiiiiii'] = function() {
        return (_0x1b1672 = _0x1455c0['dynCall_iiiiiiiiiiiiiiiiii'] = _0x1455c0['asm']['Ko'])['apply'](null, arguments);
    }
      , _0x140bed = _0x1455c0['dynCall_fifi'] = function() {
        return (_0x140bed = _0x1455c0['dynCall_fifi'] = _0x1455c0['asm']['Lo'])['apply'](null, arguments);
    }
      , _0x3daa11 = _0x1455c0['dynCall_iiijii'] = function() {
        return (_0x3daa11 = _0x1455c0['dynCall_iiijii'] = _0x1455c0['asm']['Mo'])['apply'](null, arguments);
    }
      , _0x122851 = _0x1455c0['dynCall_iijiiii'] = function() {
        return (_0x122851 = _0x1455c0['dynCall_iijiiii'] = _0x1455c0['asm']['No'])['apply'](null, arguments);
    }
      , _0x439343 = _0x1455c0['dynCall_jijiii'] = function() {
        return (_0x439343 = _0x1455c0['dynCall_jijiii'] = _0x1455c0['asm']['Oo'])['apply'](null, arguments);
    }
      , _0x56d47b = _0x1455c0['dynCall_iijiiiiii'] = function() {
        return (_0x56d47b = _0x1455c0['dynCall_iijiiiiii'] = _0x1455c0['asm']['Po'])['apply'](null, arguments);
    }
      , _0x38fa06 = _0x1455c0['dynCall_iijjiiiiii'] = function() {
        return (_0x38fa06 = _0x1455c0['dynCall_iijjiiiiii'] = _0x1455c0['asm']['Qo'])['apply'](null, arguments);
    }
      , _0x3e560e = _0x1455c0['dynCall_iiiijjii'] = function() {
        return (_0x3e560e = _0x1455c0['dynCall_iiiijjii'] = _0x1455c0['asm']['Ro'])['apply'](null, arguments);
    }
      , _0x21c1d6 = _0x1455c0['dynCall_iijiii'] = function() {
        return (_0x21c1d6 = _0x1455c0['dynCall_iijiii'] = _0x1455c0['asm']['So'])['apply'](null, arguments);
    }
      , _0x3490ef = _0x1455c0['dynCall_viijiiijiiii'] = function() {
        return (_0x3490ef = _0x1455c0['dynCall_viijiiijiiii'] = _0x1455c0['asm']['To'])['apply'](null, arguments);
    }
      , _0x31c3d1 = _0x1455c0['dynCall_iiiiij'] = function() {
        return (_0x31c3d1 = _0x1455c0['dynCall_iiiiij'] = _0x1455c0['asm']['Uo'])['apply'](null, arguments);
    }
      , _0x2d0f4c = _0x1455c0['dynCall_vijjji'] = function() {
        return (_0x2d0f4c = _0x1455c0['dynCall_vijjji'] = _0x1455c0['asm']['Vo'])['apply'](null, arguments);
    }
      , _0x40dcea = _0x1455c0['dynCall_iiiji'] = function() {
        return (_0x40dcea = _0x1455c0['dynCall_iiiji'] = _0x1455c0['asm']['Wo'])['apply'](null, arguments);
    }
      , _0x5d9d13 = _0x1455c0['dynCall_jjii'] = function() {
        return (_0x5d9d13 = _0x1455c0['dynCall_jjii'] = _0x1455c0['asm']['Xo'])['apply'](null, arguments);
    }
      , _0x10806a = _0x1455c0['dynCall_fiifii'] = function() {
        return (_0x10806a = _0x1455c0['dynCall_fiifii'] = _0x1455c0['asm']['Yo'])['apply'](null, arguments);
    }
      , _0x376ef9 = _0x1455c0['dynCall_iiiiff'] = function() {
        return (_0x376ef9 = _0x1455c0['dynCall_iiiiff'] = _0x1455c0['asm']['Zo'])['apply'](null, arguments);
    }
      , _0x43bea0 = _0x1455c0['dynCall_jiiiiiiiiii'] = function() {
        return (_0x43bea0 = _0x1455c0['dynCall_jiiiiiiiiii'] = _0x1455c0['asm']['_o'])['apply'](null, arguments);
    }
      , _0x3bd26a = _0x1455c0['dynCall_viijiiiiii'] = function() {
        return (_0x3bd26a = _0x1455c0['dynCall_viijiiiiii'] = _0x1455c0['asm']['$o'])['apply'](null, arguments);
    }
      , _0xa870b8 = _0x1455c0['dynCall_vjjjiiii'] = function() {
        return (_0xa870b8 = _0x1455c0['dynCall_vjjjiiii'] = _0x1455c0['asm']['ap'])['apply'](null, arguments);
    }
      , _0x8e91d9 = _0x1455c0['dynCall_vjiiiii'] = function() {
        return (_0x8e91d9 = _0x1455c0['dynCall_vjiiiii'] = _0x1455c0['asm']['bp'])['apply'](null, arguments);
    }
      , _0x116ee3 = _0x1455c0['dynCall_jiiiii'] = function() {
        return (_0x116ee3 = _0x1455c0['dynCall_jiiiii'] = _0x1455c0['asm']['cp'])['apply'](null, arguments);
    }
      , _0x41de44 = _0x1455c0['dynCall_viiifffi'] = function() {
        return (_0x41de44 = _0x1455c0['dynCall_viiifffi'] = _0x1455c0['asm']['dp'])['apply'](null, arguments);
    }
      , _0x23c2bd = _0x1455c0['dynCall_fifii'] = function() {
        return (_0x23c2bd = _0x1455c0['dynCall_fifii'] = _0x1455c0['asm']['ep'])['apply'](null, arguments);
    }
      , _0x2af966 = _0x1455c0['dynCall_fiffi'] = function() {
        return (_0x2af966 = _0x1455c0['dynCall_fiffi'] = _0x1455c0['asm']['fp'])['apply'](null, arguments);
    }
      , _0x1c5141 = _0x1455c0['dynCall_fiiifi'] = function() {
        return (_0x1c5141 = _0x1455c0['dynCall_fiiifi'] = _0x1455c0['asm']['gp'])['apply'](null, arguments);
    }
      , _0x45b4ec = _0x1455c0['dynCall_viiifiii'] = function() {
        return (_0x45b4ec = _0x1455c0['dynCall_viiifiii'] = _0x1455c0['asm']['hp'])['apply'](null, arguments);
    }
      , _0x553358 = _0x1455c0['dynCall_iiifiii'] = function() {
        return (_0x553358 = _0x1455c0['dynCall_iiifiii'] = _0x1455c0['asm']['ip'])['apply'](null, arguments);
    }
      , _0x58c9a0 = _0x1455c0['dynCall_viiiiffiiii'] = function() {
        return (_0x58c9a0 = _0x1455c0['dynCall_viiiiffiiii'] = _0x1455c0['asm']['jp'])['apply'](null, arguments);
    }
      , _0x10b534 = _0x1455c0['dynCall_viiifiiii'] = function() {
        return (_0x10b534 = _0x1455c0['dynCall_viiifiiii'] = _0x1455c0['asm']['kp'])['apply'](null, arguments);
    }
      , _0x181d26 = _0x1455c0['dynCall_vifiiifi'] = function() {
        return (_0x181d26 = _0x1455c0['dynCall_vifiiifi'] = _0x1455c0['asm']['lp'])['apply'](null, arguments);
    }
      , _0x9e9e00 = _0x1455c0['dynCall_viifiiifi'] = function() {
        return (_0x9e9e00 = _0x1455c0['dynCall_viifiiifi'] = _0x1455c0['asm']['mp'])['apply'](null, arguments);
    }
      , _0x2afc70 = _0x1455c0['dynCall_viffiifi'] = function() {
        return (_0x2afc70 = _0x1455c0['dynCall_viffiifi'] = _0x1455c0['asm']['np'])['apply'](null, arguments);
    }
      , _0x28a554 = _0x1455c0['dynCall_ffi'] = function() {
        return (_0x28a554 = _0x1455c0['dynCall_ffi'] = _0x1455c0['asm']['op'])['apply'](null, arguments);
    }
      , _0x3b2555 = _0x1455c0['dynCall_viiiiffffi'] = function() {
        return (_0x3b2555 = _0x1455c0['dynCall_viiiiffffi'] = _0x1455c0['asm']['pp'])['apply'](null, arguments);
    }
      , _0x57a6e2 = _0x1455c0['dynCall_fiiiii'] = function() {
        return (_0x57a6e2 = _0x1455c0['dynCall_fiiiii'] = _0x1455c0['asm']['qp'])['apply'](null, arguments);
    }
      , _0x34eeba = _0x1455c0['dynCall_fiiiiii'] = function() {
        return (_0x34eeba = _0x1455c0['dynCall_fiiiiii'] = _0x1455c0['asm']['rp'])['apply'](null, arguments);
    }
      , _0x4a46e4 = _0x1455c0['dynCall_ffffi'] = function() {
        return (_0x4a46e4 = _0x1455c0['dynCall_ffffi'] = _0x1455c0['asm']['sp'])['apply'](null, arguments);
    }
      , _0x160695 = _0x1455c0['dynCall_ffffffi'] = function() {
        return (_0x160695 = _0x1455c0['dynCall_ffffffi'] = _0x1455c0['asm']['tp'])['apply'](null, arguments);
    }
      , _0xba4c45 = _0x1455c0['dynCall_viiifffiiiiiiifffiiii'] = function() {
        return (_0xba4c45 = _0x1455c0['dynCall_viiifffiiiiiiifffiiii'] = _0x1455c0['asm']['up'])['apply'](null, arguments);
    }
      , _0x154bfc = _0x1455c0['dynCall_viiffii'] = function() {
        return (_0x154bfc = _0x1455c0['dynCall_viiffii'] = _0x1455c0['asm']['vp'])['apply'](null, arguments);
    }
      , _0x3cbbc2 = _0x1455c0['dynCall_viiiffiii'] = function() {
        return (_0x3cbbc2 = _0x1455c0['dynCall_viiiffiii'] = _0x1455c0['asm']['wp'])['apply'](null, arguments);
    }
      , _0x35249c = _0x1455c0['dynCall_viiiijii'] = function() {
        return (_0x35249c = _0x1455c0['dynCall_viiiijii'] = _0x1455c0['asm']['xp'])['apply'](null, arguments);
    }
      , _0xdabc21 = _0x1455c0['dynCall_vifiiii'] = function() {
        return (_0xdabc21 = _0x1455c0['dynCall_vifiiii'] = _0x1455c0['asm']['yp'])['apply'](null, arguments);
    }
      , _0x2ef6b6 = _0x1455c0['dynCall_iiiffi'] = function() {
        return (_0x2ef6b6 = _0x1455c0['dynCall_iiiffi'] = _0x1455c0['asm']['zp'])['apply'](null, arguments);
    }
      , _0x55e7ce = _0x1455c0['dynCall_iiififii'] = function() {
        return (_0x55e7ce = _0x1455c0['dynCall_iiififii'] = _0x1455c0['asm']['Ap'])['apply'](null, arguments);
    }
      , _0x21fbfb = _0x1455c0['dynCall_iiifiiiii'] = function() {
        return (_0x21fbfb = _0x1455c0['dynCall_iiifiiiii'] = _0x1455c0['asm']['Bp'])['apply'](null, arguments);
    }
      , _0x602f3e = _0x1455c0['dynCall_iifiifiiii'] = function() {
        return (_0x602f3e = _0x1455c0['dynCall_iifiifiiii'] = _0x1455c0['asm']['Cp'])['apply'](null, arguments);
    }
      , _0x5e7e25 = _0x1455c0['dynCall_iiiifiii'] = function() {
        return (_0x5e7e25 = _0x1455c0['dynCall_iiiifiii'] = _0x1455c0['asm']['Dp'])['apply'](null, arguments);
    }
      , _0x5f6df5 = _0x1455c0['dynCall_iiifiiii'] = function() {
        return (_0x5f6df5 = _0x1455c0['dynCall_iiifiiii'] = _0x1455c0['asm']['Ep'])['apply'](null, arguments);
    }
      , _0xf03d85 = _0x1455c0['dynCall_iiiffiii'] = function() {
        return (_0xf03d85 = _0x1455c0['dynCall_iiiffiii'] = _0x1455c0['asm']['Fp'])['apply'](null, arguments);
    }
      , _0x5282b2 = _0x1455c0['dynCall_iiiiifii'] = function() {
        return (_0x5282b2 = _0x1455c0['dynCall_iiiiifii'] = _0x1455c0['asm']['Gp'])['apply'](null, arguments);
    }
      , _0x442512 = _0x1455c0['dynCall_iifiifffii'] = function() {
        return (_0x442512 = _0x1455c0['dynCall_iifiifffii'] = _0x1455c0['asm']['Hp'])['apply'](null, arguments);
    }
      , _0x4e012d = _0x1455c0['dynCall_iiiiiiffi'] = function() {
        return (_0x4e012d = _0x1455c0['dynCall_iiiiiiffi'] = _0x1455c0['asm']['Ip'])['apply'](null, arguments);
    }
      , _0x45bccb = _0x1455c0['dynCall_iifffi'] = function() {
        return (_0x45bccb = _0x1455c0['dynCall_iifffi'] = _0x1455c0['asm']['Jp'])['apply'](null, arguments);
    }
      , _0x5cdbe2 = _0x1455c0['dynCall_iiifffi'] = function() {
        return (_0x5cdbe2 = _0x1455c0['dynCall_iiifffi'] = _0x1455c0['asm']['Kp'])['apply'](null, arguments);
    }
      , _0x2df2e8 = _0x1455c0['dynCall_iifiii'] = function() {
        return (_0x2df2e8 = _0x1455c0['dynCall_iifiii'] = _0x1455c0['asm']['Lp'])['apply'](null, arguments);
    }
      , _0x237c59 = _0x1455c0['dynCall_iifiiii'] = function() {
        return (_0x237c59 = _0x1455c0['dynCall_iifiiii'] = _0x1455c0['asm']['Mp'])['apply'](null, arguments);
    }
      , _0x268be6 = _0x1455c0['dynCall_viiiiifi'] = function() {
        return (_0x268be6 = _0x1455c0['dynCall_viiiiifi'] = _0x1455c0['asm']['Np'])['apply'](null, arguments);
    }
      , _0x20acad = _0x1455c0['dynCall_viiiiifii'] = function() {
        return (_0x20acad = _0x1455c0['dynCall_viiiiifii'] = _0x1455c0['asm']['Op'])['apply'](null, arguments);
    }
      , _0x3302d7 = _0x1455c0['dynCall_viiiiiifi'] = function() {
        return (_0x3302d7 = _0x1455c0['dynCall_viiiiiifi'] = _0x1455c0['asm']['Pp'])['apply'](null, arguments);
    }
      , _0xaffe7c = _0x1455c0['dynCall_viiiiiifii'] = function() {
        return (_0xaffe7c = _0x1455c0['dynCall_viiiiiifii'] = _0x1455c0['asm']['Qp'])['apply'](null, arguments);
    }
      , _0x3d48c9 = _0x1455c0['dynCall_ifffi'] = function() {
        return (_0x3d48c9 = _0x1455c0['dynCall_ifffi'] = _0x1455c0['asm']['Rp'])['apply'](null, arguments);
    }
      , _0x10b1a0 = _0x1455c0['dynCall_iffffi'] = function() {
        return (_0x10b1a0 = _0x1455c0['dynCall_iffffi'] = _0x1455c0['asm']['Sp'])['apply'](null, arguments);
    }
      , _0x54f4d9 = _0x1455c0['dynCall_vffi'] = function() {
        return (_0x54f4d9 = _0x1455c0['dynCall_vffi'] = _0x1455c0['asm']['Tp'])['apply'](null, arguments);
    }
      , _0x121f4d = _0x1455c0['dynCall_ifiiiii'] = function() {
        return (_0x121f4d = _0x1455c0['dynCall_ifiiiii'] = _0x1455c0['asm']['Up'])['apply'](null, arguments);
    }
      , _0x2a3bb0 = _0x1455c0['dynCall_vfiiiii'] = function() {
        return (_0x2a3bb0 = _0x1455c0['dynCall_vfiiiii'] = _0x1455c0['asm']['Vp'])['apply'](null, arguments);
    }
      , _0xbdf138 = _0x1455c0['dynCall_vfiiiiiiiiii'] = function() {
        return (_0xbdf138 = _0x1455c0['dynCall_vfiiiiiiiiii'] = _0x1455c0['asm']['Wp'])['apply'](null, arguments);
    }
      , _0x2c0dde = _0x1455c0['dynCall_vfii'] = function() {
        return (_0x2c0dde = _0x1455c0['dynCall_vfii'] = _0x1455c0['asm']['Xp'])['apply'](null, arguments);
    }
      , _0x38f612 = _0x1455c0['dynCall_iifiiiii'] = function() {
        return (_0x38f612 = _0x1455c0['dynCall_iifiiiii'] = _0x1455c0['asm']['Yp'])['apply'](null, arguments);
    }
      , _0x56349b = _0x1455c0['dynCall_vififii'] = function() {
        return (_0x56349b = _0x1455c0['dynCall_vififii'] = _0x1455c0['asm']['Zp'])['apply'](null, arguments);
    }
      , _0x5a32b2 = _0x1455c0['dynCall_ifii'] = function() {
        return (_0x5a32b2 = _0x1455c0['dynCall_ifii'] = _0x1455c0['asm']['_p'])['apply'](null, arguments);
    }
      , _0x4f0607 = _0x1455c0['dynCall_iiiiiifiii'] = function() {
        return (_0x4f0607 = _0x1455c0['dynCall_iiiiiifiii'] = _0x1455c0['asm']['$p'])['apply'](null, arguments);
    }
      , _0x5d0b3e = _0x1455c0['dynCall_viiiiiifiii'] = function() {
        return (_0x5d0b3e = _0x1455c0['dynCall_viiiiiifiii'] = _0x1455c0['asm']['aq'])['apply'](null, arguments);
    }
      , _0x540935 = _0x1455c0['dynCall_iifiiiiii'] = function() {
        return (_0x540935 = _0x1455c0['dynCall_iifiiiiii'] = _0x1455c0['asm']['bq'])['apply'](null, arguments);
    }
      , _0x5382ba = _0x1455c0['dynCall_iifffiiii'] = function() {
        return (_0x5382ba = _0x1455c0['dynCall_iifffiiii'] = _0x1455c0['asm']['cq'])['apply'](null, arguments);
    }
      , _0x426093 = _0x1455c0['dynCall_iiffiiii'] = function() {
        return (_0x426093 = _0x1455c0['dynCall_iiffiiii'] = _0x1455c0['asm']['dq'])['apply'](null, arguments);
    }
      , _0x6ef29a = _0x1455c0['dynCall_viiiifffiiii'] = function() {
        return (_0x6ef29a = _0x1455c0['dynCall_viiiifffiiii'] = _0x1455c0['asm']['eq'])['apply'](null, arguments);
    }
      , _0x5de5b2 = _0x1455c0['dynCall_viiiifiiiiii'] = function() {
        return (_0x5de5b2 = _0x1455c0['dynCall_viiiifiiiiii'] = _0x1455c0['asm']['fq'])['apply'](null, arguments);
    }
      , _0xb9d881 = _0x1455c0['dynCall_iiiiiffi'] = function() {
        return (_0xb9d881 = _0x1455c0['dynCall_iiiiiffi'] = _0x1455c0['asm']['gq'])['apply'](null, arguments);
    }
      , _0x246857 = _0x1455c0['dynCall_viiiiiiifiii'] = function() {
        return (_0x246857 = _0x1455c0['dynCall_viiiiiiifiii'] = _0x1455c0['asm']['hq'])['apply'](null, arguments);
    }
      , _0x15d331 = _0x1455c0['dynCall_fiiifii'] = function() {
        return (_0x15d331 = _0x1455c0['dynCall_fiiifii'] = _0x1455c0['asm']['iq'])['apply'](null, arguments);
    }
      , _0x3f757b = _0x1455c0['dynCall_iiiffii'] = function() {
        return (_0x3f757b = _0x1455c0['dynCall_iiiffii'] = _0x1455c0['asm']['jq'])['apply'](null, arguments);
    }
      , _0x48077b = _0x1455c0['dynCall_fifiii'] = function() {
        return (_0x48077b = _0x1455c0['dynCall_fifiii'] = _0x1455c0['asm']['kq'])['apply'](null, arguments);
    }
      , _0x1d58e0 = _0x1455c0['dynCall_viiiiffii'] = function() {
        return (_0x1d58e0 = _0x1455c0['dynCall_viiiiffii'] = _0x1455c0['asm']['lq'])['apply'](null, arguments);
    }
      , _0x51cd23 = _0x1455c0['dynCall_viiiiifffi'] = function() {
        return (_0x51cd23 = _0x1455c0['dynCall_viiiiifffi'] = _0x1455c0['asm']['mq'])['apply'](null, arguments);
    }
      , _0x1af894 = _0x1455c0['dynCall_iiiiifi'] = function() {
        return (_0x1af894 = _0x1455c0['dynCall_iiiiifi'] = _0x1455c0['asm']['nq'])['apply'](null, arguments);
    }
      , _0x3cbbfd = _0x1455c0['dynCall_fifiiiii'] = function() {
        return (_0x3cbbfd = _0x1455c0['dynCall_fifiiiii'] = _0x1455c0['asm']['oq'])['apply'](null, arguments);
    }
      , _0x1538cb = _0x1455c0['dynCall_viifiii'] = function() {
        return (_0x1538cb = _0x1455c0['dynCall_viifiii'] = _0x1455c0['asm']['pq'])['apply'](null, arguments);
    }
      , _0x2988b4 = _0x1455c0['dynCall_vifiiiii'] = function() {
        return (_0x2988b4 = _0x1455c0['dynCall_vifiiiii'] = _0x1455c0['asm']['qq'])['apply'](null, arguments);
    }
      , _0x248b3b = _0x1455c0['dynCall_viffiifffiii'] = function() {
        return (_0x248b3b = _0x1455c0['dynCall_viffiifffiii'] = _0x1455c0['asm']['rq'])['apply'](null, arguments);
    }
      , _0x10cefe = _0x1455c0['dynCall_fifffi'] = function() {
        return (_0x10cefe = _0x1455c0['dynCall_fifffi'] = _0x1455c0['asm']['sq'])['apply'](null, arguments);
    }
      , _0x4b167d = _0x1455c0['dynCall_viffiiiii'] = function() {
        return (_0x4b167d = _0x1455c0['dynCall_viffiiiii'] = _0x1455c0['asm']['tq'])['apply'](null, arguments);
    }
      , _0x4c0135 = _0x1455c0['dynCall_vifffffi'] = function() {
        return (_0x4c0135 = _0x1455c0['dynCall_vifffffi'] = _0x1455c0['asm']['uq'])['apply'](null, arguments);
    }
      , _0x777760 = _0x1455c0['dynCall_vifiii'] = function() {
        return (_0x777760 = _0x1455c0['dynCall_vifiii'] = _0x1455c0['asm']['vq'])['apply'](null, arguments);
    }
      , _0x467ef1 = _0x1455c0['dynCall_iifiifiii'] = function() {
        return (_0x467ef1 = _0x1455c0['dynCall_iifiifiii'] = _0x1455c0['asm']['wq'])['apply'](null, arguments);
    }
      , _0x52feca = _0x1455c0['dynCall_viddi'] = function() {
        return (_0x52feca = _0x1455c0['dynCall_viddi'] = _0x1455c0['asm']['xq'])['apply'](null, arguments);
    }
      , _0x52c21b = _0x1455c0['dynCall_vijji'] = function() {
        return (_0x52c21b = _0x1455c0['dynCall_vijji'] = _0x1455c0['asm']['yq'])['apply'](null, arguments);
    }
      , _0x8acdef = _0x1455c0['dynCall_vijjjji'] = function() {
        return (_0x8acdef = _0x1455c0['dynCall_vijjjji'] = _0x1455c0['asm']['zq'])['apply'](null, arguments);
    }
      , _0x2e17e7 = _0x1455c0['dynCall_iijjjji'] = function() {
        return (_0x2e17e7 = _0x1455c0['dynCall_iijjjji'] = _0x1455c0['asm']['Aq'])['apply'](null, arguments);
    }
      , _0x3432e4 = _0x1455c0['dynCall_iiidi'] = function() {
        return (_0x3432e4 = _0x1455c0['dynCall_iiidi'] = _0x1455c0['asm']['Bq'])['apply'](null, arguments);
    }
      , _0x5f0934 = _0x1455c0['dynCall_iijjjjiii'] = function() {
        return (_0x5f0934 = _0x1455c0['dynCall_iijjjjiii'] = _0x1455c0['asm']['Cq'])['apply'](null, arguments);
    }
      , _0x5abdd3 = _0x1455c0['dynCall_viiiiiifiifiiii'] = function() {
        return (_0x5abdd3 = _0x1455c0['dynCall_viiiiiifiifiiii'] = _0x1455c0['asm']['Dq'])['apply'](null, arguments);
    }
      , _0x1c8de6 = _0x1455c0['dynCall_iiffffiii'] = function() {
        return (_0x1c8de6 = _0x1455c0['dynCall_iiffffiii'] = _0x1455c0['asm']['Eq'])['apply'](null, arguments);
    }
      , _0x4d9b0a = _0x1455c0['dynCall_iiidfi'] = function() {
        return (_0x4d9b0a = _0x1455c0['dynCall_iiidfi'] = _0x1455c0['asm']['Fq'])['apply'](null, arguments);
    }
      , _0x53dbf7 = _0x1455c0['dynCall_iiijfi'] = function() {
        return (_0x53dbf7 = _0x1455c0['dynCall_iiijfi'] = _0x1455c0['asm']['Gq'])['apply'](null, arguments);
    }
      , _0x16e63a = _0x1455c0['dynCall_iiiififi'] = function() {
        return (_0x16e63a = _0x1455c0['dynCall_iiiififi'] = _0x1455c0['asm']['Hq'])['apply'](null, arguments);
    }
      , _0x15440e = _0x1455c0['dynCall_iiiffifiiii'] = function() {
        return (_0x15440e = _0x1455c0['dynCall_iiiffifiiii'] = _0x1455c0['asm']['Iq'])['apply'](null, arguments);
    }
      , _0xf7a51b = _0x1455c0['dynCall_iiifiifiii'] = function() {
        return (_0xf7a51b = _0x1455c0['dynCall_iiifiifiii'] = _0x1455c0['asm']['Jq'])['apply'](null, arguments);
    }
      , _0x111959 = _0x1455c0['dynCall_iiifiifiiiii'] = function() {
        return (_0x111959 = _0x1455c0['dynCall_iiifiifiiiii'] = _0x1455c0['asm']['Kq'])['apply'](null, arguments);
    }
      , _0x278da1 = _0x1455c0['dynCall_ifffii'] = function() {
        return (_0x278da1 = _0x1455c0['dynCall_ifffii'] = _0x1455c0['asm']['Lq'])['apply'](null, arguments);
    }
      , _0x320144 = _0x1455c0['dynCall_ffffii'] = function() {
        return (_0x320144 = _0x1455c0['dynCall_ffffii'] = _0x1455c0['asm']['Mq'])['apply'](null, arguments);
    }
      , _0x5f0fea = _0x1455c0['dynCall_ffffifi'] = function() {
        return (_0x5f0fea = _0x1455c0['dynCall_ffffifi'] = _0x1455c0['asm']['Nq'])['apply'](null, arguments);
    }
      , _0x4f7e70 = _0x1455c0['dynCall_ffffiffi'] = function() {
        return (_0x4f7e70 = _0x1455c0['dynCall_ffffiffi'] = _0x1455c0['asm']['Oq'])['apply'](null, arguments);
    }
      , _0xa301e8 = _0x1455c0['dynCall_viiififi'] = function() {
        return (_0xa301e8 = _0x1455c0['dynCall_viiififi'] = _0x1455c0['asm']['Pq'])['apply'](null, arguments);
    }
      , _0xf6cfdf = _0x1455c0['dynCall_viiififfi'] = function() {
        return (_0xf6cfdf = _0x1455c0['dynCall_viiififfi'] = _0x1455c0['asm']['Qq'])['apply'](null, arguments);
    }
      , _0x9f7a76 = _0x1455c0['dynCall_ifiii'] = function() {
        return (_0x9f7a76 = _0x1455c0['dynCall_ifiii'] = _0x1455c0['asm']['Rq'])['apply'](null, arguments);
    }
      , _0x5813e8 = _0x1455c0['dynCall_iiffiiiii'] = function() {
        return (_0x5813e8 = _0x1455c0['dynCall_iiffiiiii'] = _0x1455c0['asm']['Sq'])['apply'](null, arguments);
    }
      , _0x410ab2 = _0x1455c0['dynCall_iiffifiii'] = function() {
        return (_0x410ab2 = _0x1455c0['dynCall_iiffifiii'] = _0x1455c0['asm']['Tq'])['apply'](null, arguments);
    }
      , _0xbb1dec = _0x1455c0['dynCall_iififi'] = function() {
        return (_0xbb1dec = _0x1455c0['dynCall_iififi'] = _0x1455c0['asm']['Uq'])['apply'](null, arguments);
    }
      , _0x561451 = _0x1455c0['dynCall_iiififi'] = function() {
        return (_0x561451 = _0x1455c0['dynCall_iiififi'] = _0x1455c0['asm']['Vq'])['apply'](null, arguments);
    }
      , _0x2c035f = _0x1455c0['dynCall_iiiiifiiii'] = function() {
        return (_0x2c035f = _0x1455c0['dynCall_iiiiifiiii'] = _0x1455c0['asm']['Wq'])['apply'](null, arguments);
    }
      , _0x3077b0 = _0x1455c0['dynCall_viidiii'] = function() {
        return (_0x3077b0 = _0x1455c0['dynCall_viidiii'] = _0x1455c0['asm']['Xq'])['apply'](null, arguments);
    }
      , _0x3eed1b = _0x1455c0['dynCall_diidi'] = function() {
        return (_0x3eed1b = _0x1455c0['dynCall_diidi'] = _0x1455c0['asm']['Yq'])['apply'](null, arguments);
    }
      , _0x1d7f4e = _0x1455c0['dynCall_fiifdi'] = function() {
        return (_0x1d7f4e = _0x1455c0['dynCall_fiifdi'] = _0x1455c0['asm']['Zq'])['apply'](null, arguments);
    }
      , _0x291e10 = _0x1455c0['dynCall_viiiiiifddfiiii'] = function() {
        return (_0x291e10 = _0x1455c0['dynCall_viiiiiifddfiiii'] = _0x1455c0['asm']['_q'])['apply'](null, arguments);
    }
      , _0x1ba9d5 = _0x1455c0['dynCall_viijiii'] = function() {
        return (_0x1ba9d5 = _0x1455c0['dynCall_viijiii'] = _0x1455c0['asm']['$q'])['apply'](null, arguments);
    }
      , _0x51d5c1 = _0x1455c0['dynCall_fiifji'] = function() {
        return (_0x51d5c1 = _0x1455c0['dynCall_fiifji'] = _0x1455c0['asm']['ar'])['apply'](null, arguments);
    }
      , _0x1adc14 = _0x1455c0['dynCall_viiiiiifjjfiiii'] = function() {
        return (_0x1adc14 = _0x1455c0['dynCall_viiiiiifjjfiiii'] = _0x1455c0['asm']['br'])['apply'](null, arguments);
    }
      , _0x5202de = _0x1455c0['dynCall_viiiiiiffffiiii'] = function() {
        return (_0x5202de = _0x1455c0['dynCall_viiiiiiffffiiii'] = _0x1455c0['asm']['cr'])['apply'](null, arguments);
    }
      , _0x4d0e5c = _0x1455c0['dynCall_viifiiii'] = function() {
        return (_0x4d0e5c = _0x1455c0['dynCall_viifiiii'] = _0x1455c0['asm']['dr'])['apply'](null, arguments);
    }
      , _0x5a51ad = _0x1455c0['dynCall_iiiiifiii'] = function() {
        return (_0x5a51ad = _0x1455c0['dynCall_iiiiifiii'] = _0x1455c0['asm']['er'])['apply'](null, arguments);
    }
      , _0x7068d1 = _0x1455c0['dynCall_fffffi'] = function() {
        return (_0x7068d1 = _0x1455c0['dynCall_fffffi'] = _0x1455c0['asm']['fr'])['apply'](null, arguments);
    }
      , _0x152846 = _0x1455c0['dynCall_fiiffffi'] = function() {
        return (_0x152846 = _0x1455c0['dynCall_fiiffffi'] = _0x1455c0['asm']['gr'])['apply'](null, arguments);
    }
      , _0x2d4cfe = _0x1455c0['dynCall_fffifffi'] = function() {
        return (_0x2d4cfe = _0x1455c0['dynCall_fffifffi'] = _0x1455c0['asm']['hr'])['apply'](null, arguments);
    }
      , _0x529db3 = _0x1455c0['dynCall_ifiiii'] = function() {
        return (_0x529db3 = _0x1455c0['dynCall_ifiiii'] = _0x1455c0['asm']['ir'])['apply'](null, arguments);
    }
      , _0x820b13 = _0x1455c0['dynCall_idiiiii'] = function() {
        return (_0x820b13 = _0x1455c0['dynCall_idiiiii'] = _0x1455c0['asm']['jr'])['apply'](null, arguments);
    }
      , _0x49034b = _0x1455c0['dynCall_idiiii'] = function() {
        return (_0x49034b = _0x1455c0['dynCall_idiiii'] = _0x1455c0['asm']['kr'])['apply'](null, arguments);
    }
      , _0x206384 = _0x1455c0['dynCall_idii'] = function() {
        return (_0x206384 = _0x1455c0['dynCall_idii'] = _0x1455c0['asm']['lr'])['apply'](null, arguments);
    }
      , _0x4518c4 = _0x1455c0['dynCall_ijii'] = function() {
        return (_0x4518c4 = _0x1455c0['dynCall_ijii'] = _0x1455c0['asm']['mr'])['apply'](null, arguments);
    }
      , _0x1582a3 = _0x1455c0['dynCall_iidii'] = function() {
        return (_0x1582a3 = _0x1455c0['dynCall_iidii'] = _0x1455c0['asm']['nr'])['apply'](null, arguments);
    }
      , _0x4cdf23 = _0x1455c0['dynCall_iidiii'] = function() {
        return (_0x4cdf23 = _0x1455c0['dynCall_iidiii'] = _0x1455c0['asm']['or'])['apply'](null, arguments);
    }
      , _0x514c2a = _0x1455c0['dynCall_iiijiiii'] = function() {
        return (_0x514c2a = _0x1455c0['dynCall_iiijiiii'] = _0x1455c0['asm']['pr'])['apply'](null, arguments);
    }
      , _0x4ff5dd = _0x1455c0['dynCall_vjiiii'] = function() {
        return (_0x4ff5dd = _0x1455c0['dynCall_vjiiii'] = _0x1455c0['asm']['qr'])['apply'](null, arguments);
    }
      , _0x58cc02 = _0x1455c0['dynCall_iddi'] = function() {
        return (_0x58cc02 = _0x1455c0['dynCall_iddi'] = _0x1455c0['asm']['rr'])['apply'](null, arguments);
    }
      , _0x45833c = _0x1455c0['dynCall_viifiifi'] = function() {
        return (_0x45833c = _0x1455c0['dynCall_viifiifi'] = _0x1455c0['asm']['sr'])['apply'](null, arguments);
    }
      , _0x5c6304 = _0x1455c0['dynCall_vifiifi'] = function() {
        return (_0x5c6304 = _0x1455c0['dynCall_vifiifi'] = _0x1455c0['asm']['tr'])['apply'](null, arguments);
    }
      , _0x335e5e = _0x1455c0['dynCall_viffii'] = function() {
        return (_0x335e5e = _0x1455c0['dynCall_viffii'] = _0x1455c0['asm']['ur'])['apply'](null, arguments);
    }
      , _0x55d89b = _0x1455c0['dynCall_viddfffi'] = function() {
        return (_0x55d89b = _0x1455c0['dynCall_viddfffi'] = _0x1455c0['asm']['vr'])['apply'](null, arguments);
    }
      , _0x5890e2 = _0x1455c0['dynCall_viidfffi'] = function() {
        return (_0x5890e2 = _0x1455c0['dynCall_viidfffi'] = _0x1455c0['asm']['wr'])['apply'](null, arguments);
    }
      , _0x5c9df9 = _0x1455c0['dynCall_vidifffi'] = function() {
        return (_0x5c9df9 = _0x1455c0['dynCall_vidifffi'] = _0x1455c0['asm']['xr'])['apply'](null, arguments);
    }
      , _0x1e8c42 = _0x1455c0['dynCall_vidii'] = function() {
        return (_0x1e8c42 = _0x1455c0['dynCall_vidii'] = _0x1455c0['asm']['yr'])['apply'](null, arguments);
    }
      , _0x4e9406 = _0x1455c0['dynCall_viiiiiiifi'] = function() {
        return (_0x4e9406 = _0x1455c0['dynCall_viiiiiiifi'] = _0x1455c0['asm']['zr'])['apply'](null, arguments);
    }
      , _0x5a7ee2 = _0x1455c0['dynCall_iffi'] = function() {
        return (_0x5a7ee2 = _0x1455c0['dynCall_iffi'] = _0x1455c0['asm']['Ar'])['apply'](null, arguments);
    }
      , _0x4ccd29 = _0x1455c0['dynCall_viiffffi'] = function() {
        return (_0x4ccd29 = _0x1455c0['dynCall_viiffffi'] = _0x1455c0['asm']['Br'])['apply'](null, arguments);
    }
      , _0x4c51e3 = _0x1455c0['dynCall_ffii'] = function() {
        return (_0x4c51e3 = _0x1455c0['dynCall_ffii'] = _0x1455c0['asm']['Cr'])['apply'](null, arguments);
    }
      , _0xc3b022 = _0x1455c0['dynCall_ddddi'] = function() {
        return (_0xc3b022 = _0x1455c0['dynCall_ddddi'] = _0x1455c0['asm']['Dr'])['apply'](null, arguments);
    }
      , _0x38a2c3 = _0x1455c0['dynCall_ddi'] = function() {
        return (_0x38a2c3 = _0x1455c0['dynCall_ddi'] = _0x1455c0['asm']['Er'])['apply'](null, arguments);
    }
      , _0x5f384c = _0x1455c0['dynCall_jijii'] = function() {
        return (_0x5f384c = _0x1455c0['dynCall_jijii'] = _0x1455c0['asm']['Fr'])['apply'](null, arguments);
    }
      , _0x1c73a3 = _0x1455c0['dynCall_iiiiiji'] = function() {
        return (_0x1c73a3 = _0x1455c0['dynCall_iiiiiji'] = _0x1455c0['asm']['Gr'])['apply'](null, arguments);
    }
      , _0x136da9 = _0x1455c0['dynCall_viiijii'] = function() {
        return (_0x136da9 = _0x1455c0['dynCall_viiijii'] = _0x1455c0['asm']['Hr'])['apply'](null, arguments);
    }
      , _0x2b51c3 = _0x1455c0['dynCall_viffffffi'] = function() {
        return (_0x2b51c3 = _0x1455c0['dynCall_viffffffi'] = _0x1455c0['asm']['Ir'])['apply'](null, arguments);
    }
      , _0x5b51d3 = _0x1455c0['dynCall_ijjiiii'] = function() {
        return (_0x5b51d3 = _0x1455c0['dynCall_ijjiiii'] = _0x1455c0['asm']['Jr'])['apply'](null, arguments);
    }
      , _0x5bba55 = _0x1455c0['dynCall_vdiiiii'] = function() {
        return (_0x5bba55 = _0x1455c0['dynCall_vdiiiii'] = _0x1455c0['asm']['Kr'])['apply'](null, arguments);
    }
      , _0x17eb32 = _0x1455c0['dynCall_diiji'] = function() {
        return (_0x17eb32 = _0x1455c0['dynCall_diiji'] = _0x1455c0['asm']['Lr'])['apply'](null, arguments);
    }
      , _0x4bccbd = _0x1455c0['dynCall_vjiiiiiiii'] = function() {
        return (_0x4bccbd = _0x1455c0['dynCall_vjiiiiiiii'] = _0x1455c0['asm']['Mr'])['apply'](null, arguments);
    }
      , _0x291d94 = _0x1455c0['dynCall_vjiiiiiii'] = function() {
        return (_0x291d94 = _0x1455c0['dynCall_vjiiiiiii'] = _0x1455c0['asm']['Nr'])['apply'](null, arguments);
    }
      , _0x11c76f = _0x1455c0['dynCall_ijiiii'] = function() {
        return (_0x11c76f = _0x1455c0['dynCall_ijiiii'] = _0x1455c0['asm']['Or'])['apply'](null, arguments);
    }
      , _0x236c8b = _0x1455c0['dynCall_diji'] = function() {
        return (_0x236c8b = _0x1455c0['dynCall_diji'] = _0x1455c0['asm']['Pr'])['apply'](null, arguments);
    }
      , _0x2d386f = _0x1455c0['dynCall_fidi'] = function() {
        return (_0x2d386f = _0x1455c0['dynCall_fidi'] = _0x1455c0['asm']['Qr'])['apply'](null, arguments);
    }
      , _0x12a393 = _0x1455c0['dynCall_vfffi'] = function() {
        return (_0x12a393 = _0x1455c0['dynCall_vfffi'] = _0x1455c0['asm']['Rr'])['apply'](null, arguments);
    }
      , _0x57152f = _0x1455c0['dynCall_vffffi'] = function() {
        return (_0x57152f = _0x1455c0['dynCall_vffffi'] = _0x1455c0['asm']['Sr'])['apply'](null, arguments);
    }
      , _0x19da0a = _0x1455c0['dynCall_vffffiiii'] = function() {
        return (_0x19da0a = _0x1455c0['dynCall_vffffiiii'] = _0x1455c0['asm']['Tr'])['apply'](null, arguments);
    }
      , _0xa11f59 = _0x1455c0['dynCall_vifffii'] = function() {
        return (_0xa11f59 = _0x1455c0['dynCall_vifffii'] = _0x1455c0['asm']['Ur'])['apply'](null, arguments);
    }
      , _0x1fb012 = _0x1455c0['dynCall_vffffii'] = function() {
        return (_0x1fb012 = _0x1455c0['dynCall_vffffii'] = _0x1455c0['asm']['Vr'])['apply'](null, arguments);
    }
      , _0x1fdbd4 = _0x1455c0['dynCall_viiiifffi'] = function() {
        return (_0x1fdbd4 = _0x1455c0['dynCall_viiiifffi'] = _0x1455c0['asm']['Wr'])['apply'](null, arguments);
    }
      , _0x30e8ea = _0x1455c0['dynCall_vfiii'] = function() {
        return (_0x30e8ea = _0x1455c0['dynCall_vfiii'] = _0x1455c0['asm']['Xr'])['apply'](null, arguments);
    }
      , _0x523658 = _0x1455c0['dynCall_fffifi'] = function() {
        return (_0x523658 = _0x1455c0['dynCall_fffifi'] = _0x1455c0['asm']['Yr'])['apply'](null, arguments);
    }
      , _0x57cf09 = _0x1455c0['dynCall_viifffi'] = function() {
        return (_0x57cf09 = _0x1455c0['dynCall_viifffi'] = _0x1455c0['asm']['Zr'])['apply'](null, arguments);
    }
      , _0x262391 = _0x1455c0['dynCall_iiiifiiiii'] = function() {
        return (_0x262391 = _0x1455c0['dynCall_iiiifiiiii'] = _0x1455c0['asm']['_r'])['apply'](null, arguments);
    }
      , _0x4024d2 = _0x1455c0['dynCall_iiiifiiii'] = function() {
        return (_0x4024d2 = _0x1455c0['dynCall_iiiifiiii'] = _0x1455c0['asm']['$r'])['apply'](null, arguments);
    }
      , _0xec3bd4 = _0x1455c0['dynCall_vijjii'] = function() {
        return (_0xec3bd4 = _0x1455c0['dynCall_vijjii'] = _0x1455c0['asm']['as'])['apply'](null, arguments);
    }
      , _0x1f6689 = _0x1455c0['dynCall_viiiififfi'] = function() {
        return (_0x1f6689 = _0x1455c0['dynCall_viiiififfi'] = _0x1455c0['asm']['bs'])['apply'](null, arguments);
    }
      , _0x542786 = _0x1455c0['dynCall_viiiifiifi'] = function() {
        return (_0x542786 = _0x1455c0['dynCall_viiiifiifi'] = _0x1455c0['asm']['cs'])['apply'](null, arguments);
    }
      , _0x401bf2 = _0x1455c0['dynCall_viiiifiiii'] = function() {
        return (_0x401bf2 = _0x1455c0['dynCall_viiiifiiii'] = _0x1455c0['asm']['ds'])['apply'](null, arguments);
    }
      , _0x5a7106 = _0x1455c0['dynCall_viiiifiiiii'] = function() {
        return (_0x5a7106 = _0x1455c0['dynCall_viiiifiiiii'] = _0x1455c0['asm']['es'])['apply'](null, arguments);
    }
      , _0x2ee733 = _0x1455c0['dynCall_viiiifiiiiiiii'] = function() {
        return (_0x2ee733 = _0x1455c0['dynCall_viiiifiiiiiiii'] = _0x1455c0['asm']['fs'])['apply'](null, arguments);
    }
      , _0x4811a4 = _0x1455c0['dynCall_viiiiiffii'] = function() {
        return (_0x4811a4 = _0x1455c0['dynCall_viiiiiffii'] = _0x1455c0['asm']['gs'])['apply'](null, arguments);
    }
      , _0x3e81ff = _0x1455c0['dynCall_viffiii'] = function() {
        return (_0x3e81ff = _0x1455c0['dynCall_viffiii'] = _0x1455c0['asm']['hs'])['apply'](null, arguments);
    }
      , _0x5ddcf8 = _0x1455c0['dynCall_viffffiii'] = function() {
        return (_0x5ddcf8 = _0x1455c0['dynCall_viffffiii'] = _0x1455c0['asm']['is'])['apply'](null, arguments);
    }
      , _0x31cc4b = _0x1455c0['dynCall_viffffii'] = function() {
        return (_0x31cc4b = _0x1455c0['dynCall_viffffii'] = _0x1455c0['asm']['js'])['apply'](null, arguments);
    }
      , _0x1df776 = _0x1455c0['dynCall_viiiififii'] = function() {
        return (_0x1df776 = _0x1455c0['dynCall_viiiififii'] = _0x1455c0['asm']['ks'])['apply'](null, arguments);
    }
      , _0x870911 = _0x1455c0['dynCall_viiififiii'] = function() {
        return (_0x870911 = _0x1455c0['dynCall_viiififiii'] = _0x1455c0['asm']['ls'])['apply'](null, arguments);
    }
      , _0x3f264d = _0x1455c0['dynCall_iiififfi'] = function() {
        return (_0x3f264d = _0x1455c0['dynCall_iiififfi'] = _0x1455c0['asm']['ms'])['apply'](null, arguments);
    }
      , _0x109cc = _0x1455c0['dynCall_viffiiii'] = function() {
        return (_0x109cc = _0x1455c0['dynCall_viffiiii'] = _0x1455c0['asm']['ns'])['apply'](null, arguments);
    }
      , _0x5bf5fc = _0x1455c0['dynCall_viiiiffffiiii'] = function() {
        return (_0x5bf5fc = _0x1455c0['dynCall_viiiiffffiiii'] = _0x1455c0['asm']['os'])['apply'](null, arguments);
    }
      , _0x4cb736 = _0x1455c0['dynCall_viifiiiii'] = function() {
        return (_0x4cb736 = _0x1455c0['dynCall_viifiiiii'] = _0x1455c0['asm']['ps'])['apply'](null, arguments);
    }
      , _0x49ceb4 = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiffffiiii'] = function() {
        return (_0x49ceb4 = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiffffiiii'] = _0x1455c0['asm']['qs'])['apply'](null, arguments);
    }
      , _0xabd40d = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiiiiiii'] = function() {
        return (_0xabd40d = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiiiiiii'] = _0x1455c0['asm']['rs'])['apply'](null, arguments);
    }
      , _0x28ec37 = _0x1455c0['dynCall_viififii'] = function() {
        return (_0x28ec37 = _0x1455c0['dynCall_viififii'] = _0x1455c0['asm']['ss'])['apply'](null, arguments);
    }
      , _0x54d287 = _0x1455c0['dynCall_iiiffiiii'] = function() {
        return (_0x54d287 = _0x1455c0['dynCall_iiiffiiii'] = _0x1455c0['asm']['ts'])['apply'](null, arguments);
    }
      , _0xb1bb8d = _0x1455c0['dynCall_iiiiffiiii'] = function() {
        return (_0xb1bb8d = _0x1455c0['dynCall_iiiiffiiii'] = _0x1455c0['asm']['us'])['apply'](null, arguments);
    }
      , _0x766d46 = _0x1455c0['dynCall_vjii'] = function() {
        return (_0x766d46 = _0x1455c0['dynCall_vjii'] = _0x1455c0['asm']['vs'])['apply'](null, arguments);
    }
      , _0x5cd422 = _0x1455c0['dynCall_fffffffi'] = function() {
        return (_0x5cd422 = _0x1455c0['dynCall_fffffffi'] = _0x1455c0['asm']['ws'])['apply'](null, arguments);
    }
      , _0xfddad1 = _0x1455c0['dynCall_viffifi'] = function() {
        return (_0xfddad1 = _0x1455c0['dynCall_viffifi'] = _0x1455c0['asm']['xs'])['apply'](null, arguments);
    }
      , _0x2d4cc6 = _0x1455c0['dynCall_viiffifi'] = function() {
        return (_0x2d4cc6 = _0x1455c0['dynCall_viiffifi'] = _0x1455c0['asm']['ys'])['apply'](null, arguments);
    }
      , _0x132535 = _0x1455c0['dynCall_fiiiffi'] = function() {
        return (_0x132535 = _0x1455c0['dynCall_fiiiffi'] = _0x1455c0['asm']['zs'])['apply'](null, arguments);
    }
      , _0x1c4626 = _0x1455c0['dynCall_viiffiiiiiiiii'] = function() {
        return (_0x1c4626 = _0x1455c0['dynCall_viiffiiiiiiiii'] = _0x1455c0['asm']['As'])['apply'](null, arguments);
    }
      , _0x9db572 = _0x1455c0['dynCall_viiiiiffiii'] = function() {
        return (_0x9db572 = _0x1455c0['dynCall_viiiiiffiii'] = _0x1455c0['asm']['Bs'])['apply'](null, arguments);
    }
      , _0x4fe390 = _0x1455c0['dynCall_viiffiii'] = function() {
        return (_0x4fe390 = _0x1455c0['dynCall_viiffiii'] = _0x1455c0['asm']['Cs'])['apply'](null, arguments);
    }
      , _0x509fe3 = _0x1455c0['dynCall_viiffiiiiiii'] = function() {
        return (_0x509fe3 = _0x1455c0['dynCall_viiffiiiiiii'] = _0x1455c0['asm']['Ds'])['apply'](null, arguments);
    }
      , _0x431796 = _0x1455c0['dynCall_fffffffffi'] = function() {
        return (_0x431796 = _0x1455c0['dynCall_fffffffffi'] = _0x1455c0['asm']['Es'])['apply'](null, arguments);
    }
      , _0x464ce1 = _0x1455c0['dynCall_vifiiiiii'] = function() {
        return (_0x464ce1 = _0x1455c0['dynCall_vifiiiiii'] = _0x1455c0['asm']['Fs'])['apply'](null, arguments);
    }
      , _0x406417 = _0x1455c0['dynCall_viifiiiiiii'] = function() {
        return (_0x406417 = _0x1455c0['dynCall_viifiiiiiii'] = _0x1455c0['asm']['Gs'])['apply'](null, arguments);
    }
      , _0x404119 = _0x1455c0['dynCall_viiififfiiiiiii'] = function() {
        return (_0x404119 = _0x1455c0['dynCall_viiififfiiiiiii'] = _0x1455c0['asm']['Hs'])['apply'](null, arguments);
    }
      , _0x2abe56 = _0x1455c0['dynCall_viiffiifiiiiiii'] = function() {
        return (_0x2abe56 = _0x1455c0['dynCall_viiffiifiiiiiii'] = _0x1455c0['asm']['Is'])['apply'](null, arguments);
    }
      , _0x499eec = _0x1455c0['dynCall_viifiiiiii'] = function() {
        return (_0x499eec = _0x1455c0['dynCall_viifiiiiii'] = _0x1455c0['asm']['Js'])['apply'](null, arguments);
    }
      , _0x915522 = _0x1455c0['dynCall_viiifiiiiii'] = function() {
        return (_0x915522 = _0x1455c0['dynCall_viiifiiiiii'] = _0x1455c0['asm']['Ks'])['apply'](null, arguments);
    }
      , _0x32ce0c = _0x1455c0['dynCall_viififiiiiii'] = function() {
        return (_0x32ce0c = _0x1455c0['dynCall_viififiiiiii'] = _0x1455c0['asm']['Ls'])['apply'](null, arguments);
    }
      , _0x3af164 = _0x1455c0['dynCall_viiiffiifiiiiiii'] = function() {
        return (_0x3af164 = _0x1455c0['dynCall_viiiffiifiiiiiii'] = _0x1455c0['asm']['Ms'])['apply'](null, arguments);
    }
      , _0x411373 = _0x1455c0['dynCall_viiiiiifiiiiii'] = function() {
        return (_0x411373 = _0x1455c0['dynCall_viiiiiifiiiiii'] = _0x1455c0['asm']['Ns'])['apply'](null, arguments);
    }
      , _0x551cad = _0x1455c0['dynCall_vififiii'] = function() {
        return (_0x551cad = _0x1455c0['dynCall_vififiii'] = _0x1455c0['asm']['Os'])['apply'](null, arguments);
    }
      , _0x18924e = _0x1455c0['dynCall_viiiiiiiijiiii'] = function() {
        return (_0x18924e = _0x1455c0['dynCall_viiiiiiiijiiii'] = _0x1455c0['asm']['Ps'])['apply'](null, arguments);
    }
      , _0x292e52 = _0x1455c0['dynCall_viiiiiffi'] = function() {
        return (_0x292e52 = _0x1455c0['dynCall_viiiiiffi'] = _0x1455c0['asm']['Qs'])['apply'](null, arguments);
    }
      , _0xff690d = _0x1455c0['dynCall_viiidii'] = function() {
        return (_0xff690d = _0x1455c0['dynCall_viiidii'] = _0x1455c0['asm']['Rs'])['apply'](null, arguments);
    }
      , _0x5e284f = _0x1455c0['dynCall_ijiiiiiiiii'] = function() {
        return (_0x5e284f = _0x1455c0['dynCall_ijiiiiiiiii'] = _0x1455c0['asm']['Ss'])['apply'](null, arguments);
    }
      , _0x4d6c65 = _0x1455c0['dynCall_ijjiii'] = function() {
        return (_0x4d6c65 = _0x1455c0['dynCall_ijjiii'] = _0x1455c0['asm']['Ts'])['apply'](null, arguments);
    }
      , _0x10e870 = _0x1455c0['dynCall_jjjii'] = function() {
        return (_0x10e870 = _0x1455c0['dynCall_jjjii'] = _0x1455c0['asm']['Us'])['apply'](null, arguments);
    }
      , _0x4fb1f5 = _0x1455c0['dynCall_iijjijii'] = function() {
        return (_0x4fb1f5 = _0x1455c0['dynCall_iijjijii'] = _0x1455c0['asm']['Vs'])['apply'](null, arguments);
    }
      , _0x35ce59 = _0x1455c0['dynCall_jiijii'] = function() {
        return (_0x35ce59 = _0x1455c0['dynCall_jiijii'] = _0x1455c0['asm']['Ws'])['apply'](null, arguments);
    }
      , _0x4b6e48 = _0x1455c0['dynCall_viiiidii'] = function() {
        return (_0x4b6e48 = _0x1455c0['dynCall_viiiidii'] = _0x1455c0['asm']['Xs'])['apply'](null, arguments);
    }
      , _0x984e4a = _0x1455c0['dynCall_vidiiiii'] = function() {
        return (_0x984e4a = _0x1455c0['dynCall_vidiiiii'] = _0x1455c0['asm']['Ys'])['apply'](null, arguments);
    }
      , _0x5b34c1 = _0x1455c0['dynCall_viiidjii'] = function() {
        return (_0x5b34c1 = _0x1455c0['dynCall_viiidjii'] = _0x1455c0['asm']['Zs'])['apply'](null, arguments);
    }
      , _0x191d9c = _0x1455c0['dynCall_viijijji'] = function() {
        return (_0x191d9c = _0x1455c0['dynCall_viijijji'] = _0x1455c0['asm']['_s'])['apply'](null, arguments);
    }
      , _0x16d13b = _0x1455c0['dynCall_vijijji'] = function() {
        return (_0x16d13b = _0x1455c0['dynCall_vijijji'] = _0x1455c0['asm']['$s'])['apply'](null, arguments);
    }
      , _0x7f2ed5 = _0x1455c0['dynCall_viffffffffffffffffi'] = function() {
        return (_0x7f2ed5 = _0x1455c0['dynCall_viffffffffffffffffi'] = _0x1455c0['asm']['at'])['apply'](null, arguments);
    }
      , _0x568ee4 = _0x1455c0['dynCall_jiidi'] = function() {
        return (_0x568ee4 = _0x1455c0['dynCall_jiidi'] = _0x1455c0['asm']['bt'])['apply'](null, arguments);
    }
      , _0x4a6b1e = _0x1455c0['dynCall_viiiidijii'] = function() {
        return (_0x4a6b1e = _0x1455c0['dynCall_viiiidijii'] = _0x1455c0['asm']['ct'])['apply'](null, arguments);
    }
      , _0x364529 = _0x1455c0['dynCall_iiidiii'] = function() {
        return (_0x364529 = _0x1455c0['dynCall_iiidiii'] = _0x1455c0['asm']['dt'])['apply'](null, arguments);
    }
      , _0x467c73 = _0x1455c0['dynCall_viijiiiii'] = function() {
        return (_0x467c73 = _0x1455c0['dynCall_viijiiiii'] = _0x1455c0['asm']['et'])['apply'](null, arguments);
    }
      , _0x5c1039 = _0x1455c0['dynCall_viifffffi'] = function() {
        return (_0x5c1039 = _0x1455c0['dynCall_viifffffi'] = _0x1455c0['asm']['ft'])['apply'](null, arguments);
    }
      , _0x432bce = _0x1455c0['dynCall_viiffffffi'] = function() {
        return (_0x432bce = _0x1455c0['dynCall_viiffffffi'] = _0x1455c0['asm']['gt'])['apply'](null, arguments);
    }
      , _0x3a670d = _0x1455c0['dynCall_viifffffffi'] = function() {
        return (_0x3a670d = _0x1455c0['dynCall_viifffffffi'] = _0x1455c0['asm']['ht'])['apply'](null, arguments);
    }
      , _0x234002 = _0x1455c0['dynCall_viiffffffffi'] = function() {
        return (_0x234002 = _0x1455c0['dynCall_viiffffffffi'] = _0x1455c0['asm']['it'])['apply'](null, arguments);
    }
      , _0x2b727a = _0x1455c0['dynCall_viiffffffffiii'] = function() {
        return (_0x2b727a = _0x1455c0['dynCall_viiffffffffiii'] = _0x1455c0['asm']['jt'])['apply'](null, arguments);
    }
      , _0x22da94 = _0x1455c0['dynCall_viiiiffffii'] = function() {
        return (_0x22da94 = _0x1455c0['dynCall_viiiiffffii'] = _0x1455c0['asm']['kt'])['apply'](null, arguments);
    }
      , _0x4ca958 = _0x1455c0['dynCall_didi'] = function() {
        return (_0x4ca958 = _0x1455c0['dynCall_didi'] = _0x1455c0['asm']['lt'])['apply'](null, arguments);
    }
      , _0x49ce37 = _0x1455c0['dynCall_ddidi'] = function() {
        return (_0x49ce37 = _0x1455c0['dynCall_ddidi'] = _0x1455c0['asm']['mt'])['apply'](null, arguments);
    }
      , _0x569a64 = _0x1455c0['dynCall_viddii'] = function() {
        return (_0x569a64 = _0x1455c0['dynCall_viddii'] = _0x1455c0['asm']['nt'])['apply'](null, arguments);
    }
      , _0x510513 = _0x1455c0['dynCall_iiiddi'] = function() {
        return (_0x510513 = _0x1455c0['dynCall_iiiddi'] = _0x1455c0['asm']['ot'])['apply'](null, arguments);
    }
      , _0x3714e8 = _0x1455c0['dynCall_viddiiii'] = function() {
        return (_0x3714e8 = _0x1455c0['dynCall_viddiiii'] = _0x1455c0['asm']['pt'])['apply'](null, arguments);
    }
      , _0x4f56d5 = _0x1455c0['dynCall_viiijji'] = function() {
        return (_0x4f56d5 = _0x1455c0['dynCall_viiijji'] = _0x1455c0['asm']['qt'])['apply'](null, arguments);
    }
      , _0x152921 = _0x1455c0['dynCall_vijiiiiiii'] = function() {
        return (_0x152921 = _0x1455c0['dynCall_vijiiiiiii'] = _0x1455c0['asm']['rt'])['apply'](null, arguments);
    }
      , _0x1dcbbe = _0x1455c0['dynCall_vijiiiiiiii'] = function() {
        return (_0x1dcbbe = _0x1455c0['dynCall_vijiiiiiiii'] = _0x1455c0['asm']['st'])['apply'](null, arguments);
    }
      , _0x428628 = _0x1455c0['dynCall_jjiiii'] = function() {
        return (_0x428628 = _0x1455c0['dynCall_jjiiii'] = _0x1455c0['asm']['tt'])['apply'](null, arguments);
    }
      , _0x1c6f71 = _0x1455c0['dynCall_jjiiiii'] = function() {
        return (_0x1c6f71 = _0x1455c0['dynCall_jjiiiii'] = _0x1455c0['asm']['ut'])['apply'](null, arguments);
    }
      , _0xe01e0f = _0x1455c0['dynCall_jijjji'] = function() {
        return (_0xe01e0f = _0x1455c0['dynCall_jijjji'] = _0x1455c0['asm']['vt'])['apply'](null, arguments);
    }
      , _0x9115ed = _0x1455c0['dynCall_jijjjii'] = function() {
        return (_0x9115ed = _0x1455c0['dynCall_jijjjii'] = _0x1455c0['asm']['wt'])['apply'](null, arguments);
    }
      , _0x4f8821 = _0x1455c0['dynCall_jjiii'] = function() {
        return (_0x4f8821 = _0x1455c0['dynCall_jjiii'] = _0x1455c0['asm']['xt'])['apply'](null, arguments);
    }
      , _0x309d9c = _0x1455c0['dynCall_ijijiiiii'] = function() {
        return (_0x309d9c = _0x1455c0['dynCall_ijijiiiii'] = _0x1455c0['asm']['yt'])['apply'](null, arguments);
    }
      , _0x5b45b7 = _0x1455c0['dynCall_ijjjiii'] = function() {
        return (_0x5b45b7 = _0x1455c0['dynCall_ijjjiii'] = _0x1455c0['asm']['zt'])['apply'](null, arguments);
    }
      , _0x397c95 = _0x1455c0['dynCall_vijjjiijii'] = function() {
        return (_0x397c95 = _0x1455c0['dynCall_vijjjiijii'] = _0x1455c0['asm']['At'])['apply'](null, arguments);
    }
      , _0x21611d = _0x1455c0['dynCall_ijjjiijii'] = function() {
        return (_0x21611d = _0x1455c0['dynCall_ijjjiijii'] = _0x1455c0['asm']['Bt'])['apply'](null, arguments);
    }
      , _0x5de21f = _0x1455c0['dynCall_vijiiiiii'] = function() {
        return (_0x5de21f = _0x1455c0['dynCall_vijiiiiii'] = _0x1455c0['asm']['Ct'])['apply'](null, arguments);
    }
      , _0x23b68f = _0x1455c0['dynCall_jfi'] = function() {
        return (_0x23b68f = _0x1455c0['dynCall_jfi'] = _0x1455c0['asm']['Dt'])['apply'](null, arguments);
    }
      , _0x2a4401 = _0x1455c0['dynCall_fji'] = function() {
        return (_0x2a4401 = _0x1455c0['dynCall_fji'] = _0x1455c0['asm']['Et'])['apply'](null, arguments);
    }
      , _0x57ec7e = _0x1455c0['dynCall_fdi'] = function() {
        return (_0x57ec7e = _0x1455c0['dynCall_fdi'] = _0x1455c0['asm']['Ft'])['apply'](null, arguments);
    }
      , _0x2018aa = _0x1455c0['dynCall_dfi'] = function() {
        return (_0x2018aa = _0x1455c0['dynCall_dfi'] = _0x1455c0['asm']['Gt'])['apply'](null, arguments);
    }
      , _0x5046d3 = _0x1455c0['dynCall_jidii'] = function() {
        return (_0x5046d3 = _0x1455c0['dynCall_jidii'] = _0x1455c0['asm']['Ht'])['apply'](null, arguments);
    }
      , _0x2ebe07 = _0x1455c0['dynCall_viiiiiiiji'] = function() {
        return (_0x2ebe07 = _0x1455c0['dynCall_viiiiiiiji'] = _0x1455c0['asm']['It'])['apply'](null, arguments);
    }
      , _0x1c243a = _0x1455c0['dynCall_viiiiiiiiji'] = function() {
        return (_0x1c243a = _0x1455c0['dynCall_viiiiiiiiji'] = _0x1455c0['asm']['Jt'])['apply'](null, arguments);
    }
      , _0x3733e2 = _0x1455c0['dynCall_viiiiiiiiiji'] = function() {
        return (_0x3733e2 = _0x1455c0['dynCall_viiiiiiiiiji'] = _0x1455c0['asm']['Kt'])['apply'](null, arguments);
    }
      , _0x796cb8 = _0x1455c0['dynCall_ijiijii'] = function() {
        return (_0x796cb8 = _0x1455c0['dynCall_ijiijii'] = _0x1455c0['asm']['Lt'])['apply'](null, arguments);
    }
      , _0x402fd0 = _0x1455c0['dynCall_vjjiiiii'] = function() {
        return (_0x402fd0 = _0x1455c0['dynCall_vjjiiiii'] = _0x1455c0['asm']['Mt'])['apply'](null, arguments);
    }
      , _0x99c5ed = _0x1455c0['dynCall_vjjii'] = function() {
        return (_0x99c5ed = _0x1455c0['dynCall_vjjii'] = _0x1455c0['asm']['Nt'])['apply'](null, arguments);
    }
      , _0x2665f9 = _0x1455c0['dynCall_ijiiji'] = function() {
        return (_0x2665f9 = _0x1455c0['dynCall_ijiiji'] = _0x1455c0['asm']['Ot'])['apply'](null, arguments);
    }
      , _0x5d495d = _0x1455c0['dynCall_ijiiiii'] = function() {
        return (_0x5d495d = _0x1455c0['dynCall_ijiiiii'] = _0x1455c0['asm']['Pt'])['apply'](null, arguments);
    }
      , _0x3190e9 = _0x1455c0['dynCall_ijiiiiji'] = function() {
        return (_0x3190e9 = _0x1455c0['dynCall_ijiiiiji'] = _0x1455c0['asm']['Qt'])['apply'](null, arguments);
    }
      , _0x1263ce = _0x1455c0['dynCall_jiiiiii'] = function() {
        return (_0x1263ce = _0x1455c0['dynCall_jiiiiii'] = _0x1455c0['asm']['Rt'])['apply'](null, arguments);
    }
      , _0x505e8a = _0x1455c0['dynCall_ddii'] = function() {
        return (_0x505e8a = _0x1455c0['dynCall_ddii'] = _0x1455c0['asm']['St'])['apply'](null, arguments);
    }
      , _0xbfc3d2 = _0x1455c0['dynCall_idiii'] = function() {
        return (_0xbfc3d2 = _0x1455c0['dynCall_idiii'] = _0x1455c0['asm']['Tt'])['apply'](null, arguments);
    }
      , _0x379baa = _0x1455c0['dynCall_vdiii'] = function() {
        return (_0x379baa = _0x1455c0['dynCall_vdiii'] = _0x1455c0['asm']['Ut'])['apply'](null, arguments);
    }
      , _0x5754a9 = _0x1455c0['dynCall_jdii'] = function() {
        return (_0x5754a9 = _0x1455c0['dynCall_jdii'] = _0x1455c0['asm']['Vt'])['apply'](null, arguments);
    }
      , _0x5127c7 = _0x1455c0['dynCall_iijjji'] = function() {
        return (_0x5127c7 = _0x1455c0['dynCall_iijjji'] = _0x1455c0['asm']['Wt'])['apply'](null, arguments);
    }
      , _0x482175 = _0x1455c0['dynCall_viijjji'] = function() {
        return (_0x482175 = _0x1455c0['dynCall_viijjji'] = _0x1455c0['asm']['Xt'])['apply'](null, arguments);
    }
      , _0x277a39 = _0x1455c0['dynCall_vdii'] = function() {
        return (_0x277a39 = _0x1455c0['dynCall_vdii'] = _0x1455c0['asm']['Yt'])['apply'](null, arguments);
    }
      , _0x400086 = _0x1455c0['dynCall_iiiijii'] = function() {
        return (_0x400086 = _0x1455c0['dynCall_iiiijii'] = _0x1455c0['asm']['Zt'])['apply'](null, arguments);
    }
      , _0x23eeaf = _0x1455c0['dynCall_jijji'] = function() {
        return (_0x23eeaf = _0x1455c0['dynCall_jijji'] = _0x1455c0['asm']['_t'])['apply'](null, arguments);
    }
      , _0xa54188 = _0x1455c0['dynCall_diddi'] = function() {
        return (_0xa54188 = _0x1455c0['dynCall_diddi'] = _0x1455c0['asm']['$t'])['apply'](null, arguments);
    }
      , _0x1024e7 = _0x1455c0['dynCall_iijjii'] = function() {
        return (_0x1024e7 = _0x1455c0['dynCall_iijjii'] = _0x1455c0['asm']['au'])['apply'](null, arguments);
    }
      , _0x5ef661 = _0x1455c0['dynCall_viiiiijji'] = function() {
        return (_0x5ef661 = _0x1455c0['dynCall_viiiiijji'] = _0x1455c0['asm']['bu'])['apply'](null, arguments);
    }
      , _0x3b66cc = _0x1455c0['dynCall_viiiiji'] = function() {
        return (_0x3b66cc = _0x1455c0['dynCall_viiiiji'] = _0x1455c0['asm']['cu'])['apply'](null, arguments);
    }
      , _0x568507 = _0x1455c0['dynCall_vijjjii'] = function() {
        return (_0x568507 = _0x1455c0['dynCall_vijjjii'] = _0x1455c0['asm']['du'])['apply'](null, arguments);
    }
      , _0x32fd1f = _0x1455c0['dynCall_jjjji'] = function() {
        return (_0x32fd1f = _0x1455c0['dynCall_jjjji'] = _0x1455c0['asm']['eu'])['apply'](null, arguments);
    }
      , _0x36e668 = _0x1455c0['dynCall_viijijii'] = function() {
        return (_0x36e668 = _0x1455c0['dynCall_viijijii'] = _0x1455c0['asm']['fu'])['apply'](null, arguments);
    }
      , _0x191c96 = _0x1455c0['dynCall_viijijiii'] = function() {
        return (_0x191c96 = _0x1455c0['dynCall_viijijiii'] = _0x1455c0['asm']['gu'])['apply'](null, arguments);
    }
      , _0x2f2603 = _0x1455c0['dynCall_vijiji'] = function() {
        return (_0x2f2603 = _0x1455c0['dynCall_vijiji'] = _0x1455c0['asm']['hu'])['apply'](null, arguments);
    }
      , _0x370191 = _0x1455c0['dynCall_viijiijiii'] = function() {
        return (_0x370191 = _0x1455c0['dynCall_viijiijiii'] = _0x1455c0['asm']['iu'])['apply'](null, arguments);
    }
      , _0x4a67de = _0x1455c0['dynCall_viiiijiiii'] = function() {
        return (_0x4a67de = _0x1455c0['dynCall_viiiijiiii'] = _0x1455c0['asm']['ju'])['apply'](null, arguments);
    }
      , _0x375879 = _0x1455c0['dynCall_viijjii'] = function() {
        return (_0x375879 = _0x1455c0['dynCall_viijjii'] = _0x1455c0['asm']['ku'])['apply'](null, arguments);
    }
      , _0x4f574d = _0x1455c0['dynCall_jiiiiiiiii'] = function() {
        return (_0x4f574d = _0x1455c0['dynCall_jiiiiiiiii'] = _0x1455c0['asm']['lu'])['apply'](null, arguments);
    }
      , _0x1654d5 = _0x1455c0['dynCall_iiiiijii'] = function() {
        return (_0x1654d5 = _0x1455c0['dynCall_iiiiijii'] = _0x1455c0['asm']['mu'])['apply'](null, arguments);
    }
      , _0x197e81 = _0x1455c0['dynCall_iiiidii'] = function() {
        return (_0x197e81 = _0x1455c0['dynCall_iiiidii'] = _0x1455c0['asm']['nu'])['apply'](null, arguments);
    }
      , _0x507a09 = _0x1455c0['dynCall_iidfii'] = function() {
        return (_0x507a09 = _0x1455c0['dynCall_iidfii'] = _0x1455c0['asm']['ou'])['apply'](null, arguments);
    }
      , _0x45943a = _0x1455c0['dynCall_iidfi'] = function() {
        return (_0x45943a = _0x1455c0['dynCall_iidfi'] = _0x1455c0['asm']['pu'])['apply'](null, arguments);
    }
      , _0xf08266 = _0x1455c0['dynCall_iiddfi'] = function() {
        return (_0xf08266 = _0x1455c0['dynCall_iiddfi'] = _0x1455c0['asm']['qu'])['apply'](null, arguments);
    }
      , _0x8a051b = _0x1455c0['dynCall_iijfii'] = function() {
        return (_0x8a051b = _0x1455c0['dynCall_iijfii'] = _0x1455c0['asm']['ru'])['apply'](null, arguments);
    }
      , _0x123161 = _0x1455c0['dynCall_iijfi'] = function() {
        return (_0x123161 = _0x1455c0['dynCall_iijfi'] = _0x1455c0['asm']['su'])['apply'](null, arguments);
    }
      , _0x55e6ed = _0x1455c0['dynCall_iijjfi'] = function() {
        return (_0x55e6ed = _0x1455c0['dynCall_iijjfi'] = _0x1455c0['asm']['tu'])['apply'](null, arguments);
    }
      , _0x161397 = _0x1455c0['dynCall_iiiiffiiiji'] = function() {
        return (_0x161397 = _0x1455c0['dynCall_iiiiffiiiji'] = _0x1455c0['asm']['uu'])['apply'](null, arguments);
    }
      , _0x424035 = _0x1455c0['dynCall_iiidfii'] = function() {
        return (_0x424035 = _0x1455c0['dynCall_iiidfii'] = _0x1455c0['asm']['vu'])['apply'](null, arguments);
    }
      , _0x54c7a2 = _0x1455c0['dynCall_iiijfii'] = function() {
        return (_0x54c7a2 = _0x1455c0['dynCall_iiijfii'] = _0x1455c0['asm']['wu'])['apply'](null, arguments);
    }
      , _0x220895 = _0x1455c0['dynCall_jiiiiiii'] = function() {
        return (_0x220895 = _0x1455c0['dynCall_jiiiiiii'] = _0x1455c0['asm']['xu'])['apply'](null, arguments);
    }
      , _0x4871b0 = _0x1455c0['dynCall_fiiiiiii'] = function() {
        return (_0x4871b0 = _0x1455c0['dynCall_fiiiiiii'] = _0x1455c0['asm']['yu'])['apply'](null, arguments);
    }
      , _0x502135 = _0x1455c0['dynCall_iiiiffiiiii'] = function() {
        return (_0x502135 = _0x1455c0['dynCall_iiiiffiiiii'] = _0x1455c0['asm']['zu'])['apply'](null, arguments);
    }
      , _0x27b441 = _0x1455c0['dynCall_iiiidfii'] = function() {
        return (_0x27b441 = _0x1455c0['dynCall_iiiidfii'] = _0x1455c0['asm']['Au'])['apply'](null, arguments);
    }
      , _0xe0ef56 = _0x1455c0['dynCall_iiiijfii'] = function() {
        return (_0xe0ef56 = _0x1455c0['dynCall_iiiijfii'] = _0x1455c0['asm']['Bu'])['apply'](null, arguments);
    }
      , _0x4f0f0b = _0x1455c0['dynCall_iiiiffii'] = function() {
        return (_0x4f0f0b = _0x1455c0['dynCall_iiiiffii'] = _0x1455c0['asm']['Cu'])['apply'](null, arguments);
    }
      , _0x16472e = _0x1455c0['dynCall_jiiiiji'] = function() {
        return (_0x16472e = _0x1455c0['dynCall_jiiiiji'] = _0x1455c0['asm']['Du'])['apply'](null, arguments);
    }
      , _0x156572 = _0x1455c0['dynCall_fiiiifi'] = function() {
        return (_0x156572 = _0x1455c0['dynCall_fiiiifi'] = _0x1455c0['asm']['Eu'])['apply'](null, arguments);
    }
      , _0x13b38e = _0x1455c0['dynCall_didii'] = function() {
        return (_0x13b38e = _0x1455c0['dynCall_didii'] = _0x1455c0['asm']['Fu'])['apply'](null, arguments);
    }
      , _0x136f8b = _0x1455c0['dynCall_iiijjii'] = function() {
        return (_0x136f8b = _0x1455c0['dynCall_iiijjii'] = _0x1455c0['asm']['Gu'])['apply'](null, arguments);
    }
      , _0x4c874b = _0x1455c0['dynCall_vidiji'] = function() {
        return (_0x4c874b = _0x1455c0['dynCall_vidiji'] = _0x1455c0['asm']['Hu'])['apply'](null, arguments);
    }
      , _0x18fa9a = _0x1455c0['dynCall_vidjii'] = function() {
        return (_0x18fa9a = _0x1455c0['dynCall_vidjii'] = _0x1455c0['asm']['Iu'])['apply'](null, arguments);
    }
      , _0x1eb109 = _0x1455c0['dynCall_j'] = function() {
        return (_0x1eb109 = _0x1455c0['dynCall_j'] = _0x1455c0['asm']['Ju'])['apply'](null, arguments);
    }
      , _0x3d6fb9 = _0x1455c0['dynCall_jijj'] = function() {
        return (_0x3d6fb9 = _0x1455c0['dynCall_jijj'] = _0x1455c0['asm']['Ku'])['apply'](null, arguments);
    }
      , _0x43ae7d = _0x1455c0['dynCall_vij'] = function() {
        return (_0x43ae7d = _0x1455c0['dynCall_vij'] = _0x1455c0['asm']['Lu'])['apply'](null, arguments);
    }
      , _0x4139ee = _0x1455c0['dynCall_iiiijiii'] = function() {
        return (_0x4139ee = _0x1455c0['dynCall_iiiijiii'] = _0x1455c0['asm']['Mu'])['apply'](null, arguments);
    }
      , _0x2bca2d = _0x1455c0['dynCall_iiiij'] = function() {
        return (_0x2bca2d = _0x1455c0['dynCall_iiiij'] = _0x1455c0['asm']['Nu'])['apply'](null, arguments);
    }
      , _0x51b6b1 = _0x1455c0['dynCall_ijj'] = function() {
        return (_0x51b6b1 = _0x1455c0['dynCall_ijj'] = _0x1455c0['asm']['Ou'])['apply'](null, arguments);
    }
      , _0x5257ab = _0x1455c0['dynCall_vjji'] = function() {
        return (_0x5257ab = _0x1455c0['dynCall_vjji'] = _0x1455c0['asm']['Pu'])['apply'](null, arguments);
    }
      , _0x486351 = _0x1455c0['dynCall_ij'] = function() {
        return (_0x486351 = _0x1455c0['dynCall_ij'] = _0x1455c0['asm']['Qu'])['apply'](null, arguments);
    }
      , _0x2a5b05 = _0x1455c0['dynCall_vif'] = function() {
        return (_0x2a5b05 = _0x1455c0['dynCall_vif'] = _0x1455c0['asm']['Ru'])['apply'](null, arguments);
    }
      , _0xaf20e3 = _0x1455c0['dynCall_vid'] = function() {
        return (_0xaf20e3 = _0x1455c0['dynCall_vid'] = _0x1455c0['asm']['Su'])['apply'](null, arguments);
    }
      , _0x51b52c = _0x1455c0['dynCall_viiiiif'] = function() {
        return (_0x51b52c = _0x1455c0['dynCall_viiiiif'] = _0x1455c0['asm']['Tu'])['apply'](null, arguments);
    }
      , _0x2bc0aa = _0x1455c0['dynCall_viiiif'] = function() {
        return (_0x2bc0aa = _0x1455c0['dynCall_viiiif'] = _0x1455c0['asm']['Uu'])['apply'](null, arguments);
    }
      , _0x3ccf42 = _0x1455c0['dynCall_viiiiiif'] = function() {
        return (_0x3ccf42 = _0x1455c0['dynCall_viiiiiif'] = _0x1455c0['asm']['Vu'])['apply'](null, arguments);
    }
      , _0x1561ec = _0x1455c0['dynCall_iiif'] = function() {
        return (_0x1561ec = _0x1455c0['dynCall_iiif'] = _0x1455c0['asm']['Wu'])['apply'](null, arguments);
    }
      , _0x5e7fd4 = _0x1455c0['dynCall_fif'] = function() {
        return (_0x5e7fd4 = _0x1455c0['dynCall_fif'] = _0x1455c0['asm']['Xu'])['apply'](null, arguments);
    }
      , _0x4ec110 = _0x1455c0['dynCall_iiiiiifff'] = function() {
        return (_0x4ec110 = _0x1455c0['dynCall_iiiiiifff'] = _0x1455c0['asm']['Yu'])['apply'](null, arguments);
    }
      , _0x3b17c8 = _0x1455c0['dynCall_iiiiiifiif'] = function() {
        return (_0x3b17c8 = _0x1455c0['dynCall_iiiiiifiif'] = _0x1455c0['asm']['Zu'])['apply'](null, arguments);
    }
      , _0x5f1197 = _0x1455c0['dynCall_iiiiiiifiif'] = function() {
        return (_0x5f1197 = _0x1455c0['dynCall_iiiiiiifiif'] = _0x1455c0['asm']['_u'])['apply'](null, arguments);
    }
      , _0x4ad8fd = _0x1455c0['dynCall_fiff'] = function() {
        return (_0x4ad8fd = _0x1455c0['dynCall_fiff'] = _0x1455c0['asm']['$u'])['apply'](null, arguments);
    }
      , _0x435f07 = _0x1455c0['dynCall_fiiiiiifiifif'] = function() {
        return (_0x435f07 = _0x1455c0['dynCall_fiiiiiifiifif'] = _0x1455c0['asm']['av'])['apply'](null, arguments);
    }
      , _0x84fa7c = _0x1455c0['dynCall_fiiiiiifiiiif'] = function() {
        return (_0x84fa7c = _0x1455c0['dynCall_fiiiiiifiiiif'] = _0x1455c0['asm']['bv'])['apply'](null, arguments);
    }
      , _0x14a365 = _0x1455c0['dynCall_iifiiiijii'] = function() {
        return (_0x14a365 = _0x1455c0['dynCall_iifiiiijii'] = _0x1455c0['asm']['cv'])['apply'](null, arguments);
    }
      , _0x337550 = _0x1455c0['dynCall_vifijii'] = function() {
        return (_0x337550 = _0x1455c0['dynCall_vifijii'] = _0x1455c0['asm']['dv'])['apply'](null, arguments);
    }
      , _0x168af9 = _0x1455c0['dynCall_iiiifffiii'] = function() {
        return (_0x168af9 = _0x1455c0['dynCall_iiiifffiii'] = _0x1455c0['asm']['ev'])['apply'](null, arguments);
    }
      , _0x3f258d = _0x1455c0['dynCall_iiiifffffi'] = function() {
        return (_0x3f258d = _0x1455c0['dynCall_iiiifffffi'] = _0x1455c0['asm']['fv'])['apply'](null, arguments);
    }
      , _0x4e807d = _0x1455c0['dynCall_viffiiiif'] = function() {
        return (_0x4e807d = _0x1455c0['dynCall_viffiiiif'] = _0x1455c0['asm']['gv'])['apply'](null, arguments);
    }
      , _0x33b716 = _0x1455c0['dynCall_viffiifffffiii'] = function() {
        return (_0x33b716 = _0x1455c0['dynCall_viffiifffffiii'] = _0x1455c0['asm']['hv'])['apply'](null, arguments);
    }
      , _0x148456 = _0x1455c0['dynCall_viffffiifffiiiiif'] = function() {
        return (_0x148456 = _0x1455c0['dynCall_viffffiifffiiiiif'] = _0x1455c0['asm']['iv'])['apply'](null, arguments);
    }
      , _0x31f474 = _0x1455c0['dynCall_iiiifffffii'] = function() {
        return (_0x31f474 = _0x1455c0['dynCall_iiiifffffii'] = _0x1455c0['asm']['jv'])['apply'](null, arguments);
    }
      , _0x4c4304 = _0x1455c0['dynCall_viiiiiiiiiiifii'] = function() {
        return (_0x4c4304 = _0x1455c0['dynCall_viiiiiiiiiiifii'] = _0x1455c0['asm']['kv'])['apply'](null, arguments);
    }
      , _0xfeffce = _0x1455c0['dynCall_viff'] = function() {
        return (_0xfeffce = _0x1455c0['dynCall_viff'] = _0x1455c0['asm']['lv'])['apply'](null, arguments);
    }
      , _0x1dbd5d = _0x1455c0['dynCall_iiiiifiiiiif'] = function() {
        return (_0x1dbd5d = _0x1455c0['dynCall_iiiiifiiiiif'] = _0x1455c0['asm']['mv'])['apply'](null, arguments);
    }
      , _0x521f32 = _0x1455c0['dynCall_viiifiiiii'] = function() {
        return (_0x521f32 = _0x1455c0['dynCall_viiifiiiii'] = _0x1455c0['asm']['nv'])['apply'](null, arguments);
    }
      , _0x55c2c5 = _0x1455c0['dynCall_viiiifiiiiif'] = function() {
        return (_0x55c2c5 = _0x1455c0['dynCall_viiiifiiiiif'] = _0x1455c0['asm']['ov'])['apply'](null, arguments);
    }
      , _0x4e1fc7 = _0x1455c0['dynCall_iifff'] = function() {
        return (_0x4e1fc7 = _0x1455c0['dynCall_iifff'] = _0x1455c0['asm']['pv'])['apply'](null, arguments);
    }
      , _0x6fb0df = _0x1455c0['dynCall_iif'] = function() {
        return (_0x6fb0df = _0x1455c0['dynCall_iif'] = _0x1455c0['asm']['qv'])['apply'](null, arguments);
    }
      , _0x46bd53 = _0x1455c0['dynCall_viijijj'] = function() {
        return (_0x46bd53 = _0x1455c0['dynCall_viijijj'] = _0x1455c0['asm']['rv'])['apply'](null, arguments);
    }
      , _0xf8f519 = _0x1455c0['dynCall_viijj'] = function() {
        return (_0xf8f519 = _0x1455c0['dynCall_viijj'] = _0x1455c0['asm']['sv'])['apply'](null, arguments);
    }
      , _0x3f810e = _0x1455c0['dynCall_viiiij'] = function() {
        return (_0x3f810e = _0x1455c0['dynCall_viiiij'] = _0x1455c0['asm']['tv'])['apply'](null, arguments);
    }
      , _0x1c2cdd = _0x1455c0['dynCall_iiijji'] = function() {
        return (_0x1c2cdd = _0x1455c0['dynCall_iiijji'] = _0x1455c0['asm']['uv'])['apply'](null, arguments);
    }
      , _0x4a5977 = _0x1455c0['dynCall_ijjiiiii'] = function() {
        return (_0x4a5977 = _0x1455c0['dynCall_ijjiiiii'] = _0x1455c0['asm']['vv'])['apply'](null, arguments);
    }
      , _0x2f4124 = _0x1455c0['dynCall_vidd'] = function() {
        return (_0x2f4124 = _0x1455c0['dynCall_vidd'] = _0x1455c0['asm']['wv'])['apply'](null, arguments);
    }
      , _0x1a6622 = _0x1455c0['dynCall_iiiiiifffiiifiii'] = function() {
        return (_0x1a6622 = _0x1455c0['dynCall_iiiiiifffiiifiii'] = _0x1455c0['asm']['xv'])['apply'](null, arguments);
    }
      , _0x256394 = _0x1455c0['dynCall_viid'] = function() {
        return (_0x256394 = _0x1455c0['dynCall_viid'] = _0x1455c0['asm']['yv'])['apply'](null, arguments);
    }
      , _0x31d982 = _0x1455c0['dynCall_viiif'] = function() {
        return (_0x31d982 = _0x1455c0['dynCall_viiif'] = _0x1455c0['asm']['zv'])['apply'](null, arguments);
    }
      , _0x59a18f = _0x1455c0['dynCall_fiiiif'] = function() {
        return (_0x59a18f = _0x1455c0['dynCall_fiiiif'] = _0x1455c0['asm']['Av'])['apply'](null, arguments);
    }
      , _0x408199 = _0x1455c0['dynCall_iiiiiff'] = function() {
        return (_0x408199 = _0x1455c0['dynCall_iiiiiff'] = _0x1455c0['asm']['Bv'])['apply'](null, arguments);
    }
      , _0x1cca2a = _0x1455c0['dynCall_viffff'] = function() {
        return (_0x1cca2a = _0x1455c0['dynCall_viffff'] = _0x1455c0['asm']['Cv'])['apply'](null, arguments);
    }
      , _0x168c41 = _0x1455c0['dynCall_vifff'] = function() {
        return (_0x168c41 = _0x1455c0['dynCall_vifff'] = _0x1455c0['asm']['Dv'])['apply'](null, arguments);
    }
      , _0x2f5859 = _0x1455c0['dynCall_viifff'] = function() {
        return (_0x2f5859 = _0x1455c0['dynCall_viifff'] = _0x1455c0['asm']['Ev'])['apply'](null, arguments);
    }
      , _0x1271d9 = _0x1455c0['dynCall_vf'] = function() {
        return (_0x1271d9 = _0x1455c0['dynCall_vf'] = _0x1455c0['asm']['Fv'])['apply'](null, arguments);
    }
      , _0x1193d2 = _0x1455c0['dynCall_vffff'] = function() {
        return (_0x1193d2 = _0x1455c0['dynCall_vffff'] = _0x1455c0['asm']['Gv'])['apply'](null, arguments);
    }
      , _0x2cd178 = _0x1455c0['dynCall_vff'] = function() {
        return (_0x2cd178 = _0x1455c0['dynCall_vff'] = _0x1455c0['asm']['Hv'])['apply'](null, arguments);
    }
      , _0x26b231 = _0x1455c0['dynCall_fff'] = function() {
        return (_0x26b231 = _0x1455c0['dynCall_fff'] = _0x1455c0['asm']['Iv'])['apply'](null, arguments);
    }
      , _0x1640a8 = _0x1455c0['dynCall_f'] = function() {
        return (_0x1640a8 = _0x1455c0['dynCall_f'] = _0x1455c0['asm']['Jv'])['apply'](null, arguments);
    }
      , _0x7c454a = _0x1455c0['dynCall_vfff'] = function() {
        return (_0x7c454a = _0x1455c0['dynCall_vfff'] = _0x1455c0['asm']['Kv'])['apply'](null, arguments);
    }
      , _0x586368 = _0x1455c0['dynCall_ff'] = function() {
        return (_0x586368 = _0x1455c0['dynCall_ff'] = _0x1455c0['asm']['Lv'])['apply'](null, arguments);
    }
      , _0x1da362 = _0x1455c0['dynCall_iiifiifii'] = function() {
        return (_0x1da362 = _0x1455c0['dynCall_iiifiifii'] = _0x1455c0['asm']['Mv'])['apply'](null, arguments);
    }
      , _0x3a0711 = _0x1455c0['dynCall_fiif'] = function() {
        return (_0x3a0711 = _0x1455c0['dynCall_fiif'] = _0x1455c0['asm']['Nv'])['apply'](null, arguments);
    }
      , _0x449562 = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiffffiii'] = function() {
        return (_0x449562 = _0x1455c0['dynCall_iiiiiiffiiiiiiiiiffffiii'] = _0x1455c0['asm']['Ov'])['apply'](null, arguments);
    }
      , _0x41c606 = _0x1455c0['dynCall_viififi'] = function() {
        return (_0x41c606 = _0x1455c0['dynCall_viififi'] = _0x1455c0['asm']['Pv'])['apply'](null, arguments);
    }
      , _0x47b102 = _0x1455c0['dynCall_viiiiiiiijiii'] = function() {
        return (_0x47b102 = _0x1455c0['dynCall_viiiiiiiijiii'] = _0x1455c0['asm']['Qv'])['apply'](null, arguments);
    }
      , _0x18cda2 = _0x1455c0['dynCall_d'] = function() {
        return (_0x18cda2 = _0x1455c0['dynCall_d'] = _0x1455c0['asm']['Rv'])['apply'](null, arguments);
    }
    ;
    function _0x5a00c0(_0x46944b, _0x43a5f3, _0x5ed3fa, _0x2ad775, _0x201761, _0x5a702a) {
        var _0x1a383c = _0x9ae453();
        try {
            return _0x4ba930(_0x46944b, _0x43a5f3, _0x5ed3fa, _0x2ad775, _0x201761, _0x5a702a);
        } catch (_0x32891b) {
            _0x305fb7(_0x1a383c);
            if (_0x32891b !== _0x32891b + 0x0 && _0x32891b !== 'longjmp')
                throw _0x32891b;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4f6d0e(_0x1f8f6c, _0x42c8ac, _0x3dd2c3) {
        var _0x55eaf0 = _0x9ae453();
        try {
            _0x194ad7(_0x1f8f6c, _0x42c8ac, _0x3dd2c3);
        } catch (_0x4a5dbc) {
            _0x305fb7(_0x55eaf0);
            if (_0x4a5dbc !== _0x4a5dbc + 0x0 && _0x4a5dbc !== 'longjmp')
                throw _0x4a5dbc;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5a9a1d(_0x28101b, _0x2c454f, _0x1714a6) {
        var _0x29f6bb = _0x9ae453();
        try {
            return _0xb7f250(_0x28101b, _0x2c454f, _0x1714a6);
        } catch (_0x35f5d8) {
            _0x305fb7(_0x29f6bb);
            if (_0x35f5d8 !== _0x35f5d8 + 0x0 && _0x35f5d8 !== 'longjmp')
                throw _0x35f5d8;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4a2fc2(_0x48d6b8, _0x2c509c, _0x28e4f3, _0x2b32d7) {
        var _0x52e87e = _0x9ae453();
        try {
            return _0x4f2e95(_0x48d6b8, _0x2c509c, _0x28e4f3, _0x2b32d7);
        } catch (_0x3350b7) {
            _0x305fb7(_0x52e87e);
            if (_0x3350b7 !== _0x3350b7 + 0x0 && _0x3350b7 !== 'longjmp')
                throw _0x3350b7;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x26f417(_0x3ab457, _0x368f34, _0x4d296b, _0x341b19, _0x1fc8d2) {
        var _0x1005f7 = _0x9ae453();
        try {
            _0x8f97d8(_0x3ab457, _0x368f34, _0x4d296b, _0x341b19, _0x1fc8d2);
        } catch (_0x4b5b95) {
            _0x305fb7(_0x1005f7);
            if (_0x4b5b95 !== _0x4b5b95 + 0x0 && _0x4b5b95 !== 'longjmp')
                throw _0x4b5b95;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x31fd16(_0x325c2b, _0xe305ef, _0x41f343, _0x4832c8, _0x28ed30) {
        var _0x60849d = _0x9ae453();
        try {
            return _0x28803b(_0x325c2b, _0xe305ef, _0x41f343, _0x4832c8, _0x28ed30);
        } catch (_0x43f2ea) {
            _0x305fb7(_0x60849d);
            if (_0x43f2ea !== _0x43f2ea + 0x0 && _0x43f2ea !== 'longjmp')
                throw _0x43f2ea;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x37623a(_0x16db49, _0x29eca5, _0x3493e9, _0x7f2edb) {
        var _0x31d303 = _0x9ae453();
        try {
            return _0x91d167(_0x16db49, _0x29eca5, _0x3493e9, _0x7f2edb);
        } catch (_0x167afd) {
            _0x305fb7(_0x31d303);
            if (_0x167afd !== _0x167afd + 0x0 && _0x167afd !== 'longjmp')
                throw _0x167afd;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x262ed7(_0x4c851d, _0x42e087, _0x59ed6a, _0x149535) {
        var _0x269d5c = _0x9ae453();
        try {
            return _0x44a79b(_0x4c851d, _0x42e087, _0x59ed6a, _0x149535);
        } catch (_0x4de89b) {
            _0x305fb7(_0x269d5c);
            if (_0x4de89b !== _0x4de89b + 0x0 && _0x4de89b !== 'longjmp')
                throw _0x4de89b;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x189f4f(_0x603a59, _0x420580, _0x51578e, _0x46ee89) {
        var _0x3f1bca = _0x9ae453();
        try {
            _0x2912a7(_0x603a59, _0x420580, _0x51578e, _0x46ee89);
        } catch (_0x3de55a) {
            _0x305fb7(_0x3f1bca);
            if (_0x3de55a !== _0x3de55a + 0x0 && _0x3de55a !== 'longjmp')
                throw _0x3de55a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xc86741(_0x22c5b3, _0x40c8eb) {
        var _0x36dba5 = _0x9ae453();
        try {
            _0x2d1c65(_0x22c5b3, _0x40c8eb);
        } catch (_0xd29ef6) {
            _0x305fb7(_0x36dba5);
            if (_0xd29ef6 !== _0xd29ef6 + 0x0 && _0xd29ef6 !== 'longjmp')
                throw _0xd29ef6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3cefcc(_0x26bd83, _0x4c3d28, _0x5c4f47, _0x196fd5) {
        var _0x189a04 = _0x9ae453();
        try {
            _0x12db9f(_0x26bd83, _0x4c3d28, _0x5c4f47, _0x196fd5);
        } catch (_0x3fd14c) {
            _0x305fb7(_0x189a04);
            if (_0x3fd14c !== _0x3fd14c + 0x0 && _0x3fd14c !== 'longjmp')
                throw _0x3fd14c;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x200cce(_0x14ca40, _0x7dfb0e) {
        var _0x453195 = _0x9ae453();
        try {
            return _0xd695d7(_0x14ca40, _0x7dfb0e);
        } catch (_0x3f09e1) {
            _0x305fb7(_0x453195);
            if (_0x3f09e1 !== _0x3f09e1 + 0x0 && _0x3f09e1 !== 'longjmp')
                throw _0x3f09e1;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1b694a(_0x596ee2) {
        var _0x160054 = _0x9ae453();
        try {
            _0x319313(_0x596ee2);
        } catch (_0x13e0d5) {
            _0x305fb7(_0x160054);
            if (_0x13e0d5 !== _0x13e0d5 + 0x0 && _0x13e0d5 !== 'longjmp')
                throw _0x13e0d5;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x45c99d(_0x494db4) {
        var _0x215a25 = _0x9ae453();
        try {
            return _0x5dc438(_0x494db4);
        } catch (_0x199385) {
            _0x305fb7(_0x215a25);
            if (_0x199385 !== _0x199385 + 0x0 && _0x199385 !== 'longjmp')
                throw _0x199385;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5e00f9(_0x105b85, _0x128a67, _0x3946f1, _0x40c8e4, _0x2d41b4, _0x35935f, _0x30b3d7, _0x20d0c1) {
        var _0x58db46 = _0x9ae453();
        try {
            return _0xe4a833(_0x105b85, _0x128a67, _0x3946f1, _0x40c8e4, _0x2d41b4, _0x35935f, _0x30b3d7, _0x20d0c1);
        } catch (_0x5c7084) {
            _0x305fb7(_0x58db46);
            if (_0x5c7084 !== _0x5c7084 + 0x0 && _0x5c7084 !== 'longjmp')
                throw _0x5c7084;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3e2cec(_0x1a423f, _0x3b17de, _0x29eb71, _0x3e6681, _0x2c8d83, _0x49d981) {
        var _0x418941 = _0x9ae453();
        try {
            _0x48b586(_0x1a423f, _0x3b17de, _0x29eb71, _0x3e6681, _0x2c8d83, _0x49d981);
        } catch (_0x44f036) {
            _0x305fb7(_0x418941);
            if (_0x44f036 !== _0x44f036 + 0x0 && _0x44f036 !== 'longjmp')
                throw _0x44f036;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x243fec(_0x1d9588, _0x4919fb, _0x5cf09b, _0x250528, _0x5cd987, _0x3c6da7, _0x22d529) {
        var _0x4f15f8 = _0x9ae453();
        try {
            return _0x2c1e10(_0x1d9588, _0x4919fb, _0x5cf09b, _0x250528, _0x5cd987, _0x3c6da7, _0x22d529);
        } catch (_0x300f83) {
            _0x305fb7(_0x4f15f8);
            if (_0x300f83 !== _0x300f83 + 0x0 && _0x300f83 !== 'longjmp')
                throw _0x300f83;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2ae401(_0x1a600a, _0x46e825, _0x18cab0, _0x2d7cb3, _0x785056, _0x1ab129, _0x353aff, _0x4e57b0, _0x2ba989, _0x3024b7, _0x234ef9) {
        var _0x75a4de = _0x9ae453();
        try {
            return _0x529263(_0x1a600a, _0x46e825, _0x18cab0, _0x2d7cb3, _0x785056, _0x1ab129, _0x353aff, _0x4e57b0, _0x2ba989, _0x3024b7, _0x234ef9);
        } catch (_0x5a196f) {
            _0x305fb7(_0x75a4de);
            if (_0x5a196f !== _0x5a196f + 0x0 && _0x5a196f !== 'longjmp')
                throw _0x5a196f;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x478bfc(_0x2499c7, _0x4ef041, _0x1c9c50, _0xe349c, _0x543c1d, _0x7d2a00, _0x31ef33, _0x5ed526, _0x32b41c, _0x5a3047, _0x1ca40c, _0x3865f8, _0x4739d8) {
        var _0x33e6db = _0x9ae453();
        try {
            return _0x2d8b4a(_0x2499c7, _0x4ef041, _0x1c9c50, _0xe349c, _0x543c1d, _0x7d2a00, _0x31ef33, _0x5ed526, _0x32b41c, _0x5a3047, _0x1ca40c, _0x3865f8, _0x4739d8);
        } catch (_0x4dd975) {
            _0x305fb7(_0x33e6db);
            if (_0x4dd975 !== _0x4dd975 + 0x0 && _0x4dd975 !== 'longjmp')
                throw _0x4dd975;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1aa7b4(_0x3ed025, _0x4c705b, _0x38f4eb, _0x543d7a, _0x4325d3, _0x1d6f4a, _0x304b7b, _0xa80e4) {
        var _0x58abdd = _0x9ae453();
        try {
            _0x21e182(_0x3ed025, _0x4c705b, _0x38f4eb, _0x543d7a, _0x4325d3, _0x1d6f4a, _0x304b7b, _0xa80e4);
        } catch (_0x44d11e) {
            _0x305fb7(_0x58abdd);
            if (_0x44d11e !== _0x44d11e + 0x0 && _0x44d11e !== 'longjmp')
                throw _0x44d11e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2ed6e6(_0x6afb98, _0x2f32f0, _0x52b466, _0x266a87, _0xefaa6c, _0x121d34, _0x54685b, _0x3d4338, _0x305bcf, _0x588987, _0xab4573) {
        var _0x563279 = _0x9ae453();
        try {
            _0x726401(_0x6afb98, _0x2f32f0, _0x52b466, _0x266a87, _0xefaa6c, _0x121d34, _0x54685b, _0x3d4338, _0x305bcf, _0x588987, _0xab4573);
        } catch (_0x3a03d5) {
            _0x305fb7(_0x563279);
            if (_0x3a03d5 !== _0x3a03d5 + 0x0 && _0x3a03d5 !== 'longjmp')
                throw _0x3a03d5;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x26e0cd(_0x41fce8, _0x2bc467, _0x2a8c9c, _0xd4a133, _0xb89ef4, _0x4908ba, _0x19b40b) {
        var _0x287d6b = _0x9ae453();
        try {
            _0x20e8c0(_0x41fce8, _0x2bc467, _0x2a8c9c, _0xd4a133, _0xb89ef4, _0x4908ba, _0x19b40b);
        } catch (_0x370762) {
            _0x305fb7(_0x287d6b);
            if (_0x370762 !== _0x370762 + 0x0 && _0x370762 !== 'longjmp')
                throw _0x370762;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x25cf03(_0x47faef, _0x1acabc, _0x2fcacb, _0x1f0bff, _0x95b0a3, _0x4d50fc, _0x51e9b6, _0xa80a18, _0x451ed3) {
        var _0x29f6fd = _0x9ae453();
        try {
            _0x41ef49(_0x47faef, _0x1acabc, _0x2fcacb, _0x1f0bff, _0x95b0a3, _0x4d50fc, _0x51e9b6, _0xa80a18, _0x451ed3);
        } catch (_0x1cd79e) {
            _0x305fb7(_0x29f6fd);
            if (_0x1cd79e !== _0x1cd79e + 0x0 && _0x1cd79e !== 'longjmp')
                throw _0x1cd79e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1eca1b(_0x5367e4, _0x138e01, _0x4dbbae, _0x3abe3b, _0x759b00, _0x177a7f, _0x1525f5, _0x59fbf5, _0x1dc114) {
        var _0xbed717 = _0x9ae453();
        try {
            return _0x54060e(_0x5367e4, _0x138e01, _0x4dbbae, _0x3abe3b, _0x759b00, _0x177a7f, _0x1525f5, _0x59fbf5, _0x1dc114);
        } catch (_0x5e9e64) {
            _0x305fb7(_0xbed717);
            if (_0x5e9e64 !== _0x5e9e64 + 0x0 && _0x5e9e64 !== 'longjmp')
                throw _0x5e9e64;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2d02c9(_0x242c3b, _0x75c009, _0x5a93e6) {
        var _0x1d7a7e = _0x9ae453();
        try {
            return _0x26fafe(_0x242c3b, _0x75c009, _0x5a93e6);
        } catch (_0x2f0c08) {
            _0x305fb7(_0x1d7a7e);
            if (_0x2f0c08 !== _0x2f0c08 + 0x0 && _0x2f0c08 !== 'longjmp')
                throw _0x2f0c08;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x367ba3(_0x2dbcdc, _0xcb56f5, _0x1fb13b, _0x4503b5, _0x38811e) {
        var _0xd38390 = _0x9ae453();
        try {
            _0x3abc7e(_0x2dbcdc, _0xcb56f5, _0x1fb13b, _0x4503b5, _0x38811e);
        } catch (_0x2d4bfb) {
            _0x305fb7(_0xd38390);
            if (_0x2d4bfb !== _0x2d4bfb + 0x0 && _0x2d4bfb !== 'longjmp')
                throw _0x2d4bfb;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x36724a(_0x52185f, _0x4f40a6, _0x19376f, _0x58ebab, _0x53261f) {
        var _0x359928 = _0x9ae453();
        try {
            _0x5bfaaa(_0x52185f, _0x4f40a6, _0x19376f, _0x58ebab, _0x53261f);
        } catch (_0x39b386) {
            _0x305fb7(_0x359928);
            if (_0x39b386 !== _0x39b386 + 0x0 && _0x39b386 !== 'longjmp')
                throw _0x39b386;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x30104e(_0x147613, _0x2fc392, _0x399d43, _0x20e370, _0x14d14d, _0x19f732, _0x553201, _0x4daa58, _0x207370, _0x3bee79, _0xada1e5, _0x3afb09, _0x35e7b6, _0x4b3cba, _0x104e57) {
        var _0x1cf1cb = _0x9ae453();
        try {
            _0x325eb2(_0x147613, _0x2fc392, _0x399d43, _0x20e370, _0x14d14d, _0x19f732, _0x553201, _0x4daa58, _0x207370, _0x3bee79, _0xada1e5, _0x3afb09, _0x35e7b6, _0x4b3cba, _0x104e57);
        } catch (_0x3adaae) {
            _0x305fb7(_0x1cf1cb);
            if (_0x3adaae !== _0x3adaae + 0x0 && _0x3adaae !== 'longjmp')
                throw _0x3adaae;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3e452a(_0x375e4b, _0x33f09f, _0x521fee, _0x4546ed, _0x2943f5, _0x546bea, _0x52a627, _0x15f86a, _0x43a60e, _0x27015e, _0x22c823, _0x168cde, _0xe224ee, _0x197e7a, _0x494705) {
        var _0x590f1f = _0x9ae453();
        try {
            _0x4d290e(_0x375e4b, _0x33f09f, _0x521fee, _0x4546ed, _0x2943f5, _0x546bea, _0x52a627, _0x15f86a, _0x43a60e, _0x27015e, _0x22c823, _0x168cde, _0xe224ee, _0x197e7a, _0x494705);
        } catch (_0x347c2f) {
            _0x305fb7(_0x590f1f);
            if (_0x347c2f !== _0x347c2f + 0x0 && _0x347c2f !== 'longjmp')
                throw _0x347c2f;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x11e4a1(_0x276c57, _0x33e323, _0x2d49a2, _0x2ec33b, _0xe5df95) {
        var _0x3c0da9 = _0x9ae453();
        try {
            _0x56e0da(_0x276c57, _0x33e323, _0x2d49a2, _0x2ec33b, _0xe5df95);
        } catch (_0x279623) {
            _0x305fb7(_0x3c0da9);
            if (_0x279623 !== _0x279623 + 0x0 && _0x279623 !== 'longjmp')
                throw _0x279623;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x32a0c5(_0x4f9037, _0x305a43, _0x41be68, _0x182b08) {
        var _0x405acd = _0x9ae453();
        try {
            _0x3b495e(_0x4f9037, _0x305a43, _0x41be68, _0x182b08);
        } catch (_0x54c9a3) {
            _0x305fb7(_0x405acd);
            if (_0x54c9a3 !== _0x54c9a3 + 0x0 && _0x54c9a3 !== 'longjmp')
                throw _0x54c9a3;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3da2ed(_0x6692, _0x2db469, _0xb1d346, _0xaa519a, _0x2000e0, _0x411c72) {
        var _0x13340d = _0x9ae453();
        try {
            _0x4dae6d(_0x6692, _0x2db469, _0xb1d346, _0xaa519a, _0x2000e0, _0x411c72);
        } catch (_0x3497e8) {
            _0x305fb7(_0x13340d);
            if (_0x3497e8 !== _0x3497e8 + 0x0 && _0x3497e8 !== 'longjmp')
                throw _0x3497e8;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x29c39c(_0x1fb940, _0x1df40a, _0x566d83) {
        var _0x4c2886 = _0x9ae453();
        try {
            return _0x1e01a5(_0x1fb940, _0x1df40a, _0x566d83);
        } catch (_0x4d0be3) {
            _0x305fb7(_0x4c2886);
            if (_0x4d0be3 !== _0x4d0be3 + 0x0 && _0x4d0be3 !== 'longjmp')
                throw _0x4d0be3;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x13757a(_0x42da2d, _0x335dcb, _0x5c7fc0, _0xfb873f, _0x267143) {
        var _0x4b9752 = _0x9ae453();
        try {
            return _0x4e6d6d(_0x42da2d, _0x335dcb, _0x5c7fc0, _0xfb873f, _0x267143);
        } catch (_0x3eacd4) {
            _0x305fb7(_0x4b9752);
            if (_0x3eacd4 !== _0x3eacd4 + 0x0 && _0x3eacd4 !== 'longjmp')
                throw _0x3eacd4;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3c772e(_0x48031, _0x33fc25, _0x403d63, _0x29759a, _0x27e03e) {
        var _0x4f625c = _0x9ae453();
        try {
            return _0x45feb7(_0x48031, _0x33fc25, _0x403d63, _0x29759a, _0x27e03e);
        } catch (_0x1bf082) {
            _0x305fb7(_0x4f625c);
            if (_0x1bf082 !== _0x1bf082 + 0x0 && _0x1bf082 !== 'longjmp')
                throw _0x1bf082;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x20f0a1(_0x2bd042, _0x4a4b18, _0x1198de, _0x2a8fc8, _0x1640d6, _0x517e6e, _0x2ec416, _0x1fd581, _0x2bf0ae, _0x3990fb, _0x339003, _0x22d74b, _0x1574b1, _0x2325c6, _0x48d480, _0x3f521c, _0x18715c, _0x327509, _0x4a97d3) {
        var _0x2077db = _0x9ae453();
        try {
            return _0x5b335b(_0x2bd042, _0x4a4b18, _0x1198de, _0x2a8fc8, _0x1640d6, _0x517e6e, _0x2ec416, _0x1fd581, _0x2bf0ae, _0x3990fb, _0x339003, _0x22d74b, _0x1574b1, _0x2325c6, _0x48d480, _0x3f521c, _0x18715c, _0x327509, _0x4a97d3);
        } catch (_0x2f6059) {
            _0x305fb7(_0x2077db);
            if (_0x2f6059 !== _0x2f6059 + 0x0 && _0x2f6059 !== 'longjmp')
                throw _0x2f6059;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5159b9(_0x5eaae2, _0x57b30d, _0x514fe8, _0x4f0c80) {
        var _0x4f9129 = _0x9ae453();
        try {
            _0x231bc1(_0x5eaae2, _0x57b30d, _0x514fe8, _0x4f0c80);
        } catch (_0x2dfd90) {
            _0x305fb7(_0x4f9129);
            if (_0x2dfd90 !== _0x2dfd90 + 0x0 && _0x2dfd90 !== 'longjmp')
                throw _0x2dfd90;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1a210e(_0x27f152, _0x2503f8, _0x182b46, _0x2c63c3, _0x1ef70e, _0x1ec429, _0xe5e864, _0x485282, _0x2a58bc, _0x1271b1, _0x52c11d, _0x6a414d, _0x3b8dce, _0x16b75b, _0x562d6c) {
        var _0x140097 = _0x9ae453();
        try {
            _0x47d37a(_0x27f152, _0x2503f8, _0x182b46, _0x2c63c3, _0x1ef70e, _0x1ec429, _0xe5e864, _0x485282, _0x2a58bc, _0x1271b1, _0x52c11d, _0x6a414d, _0x3b8dce, _0x16b75b, _0x562d6c);
        } catch (_0x361b57) {
            _0x305fb7(_0x140097);
            if (_0x361b57 !== _0x361b57 + 0x0 && _0x361b57 !== 'longjmp')
                throw _0x361b57;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x51f598(_0x480bc1, _0x106540, _0x8b54b3, _0x50e48a, _0x19180f) {
        var _0x2f4c92 = _0x9ae453();
        try {
            return _0x32c30d(_0x480bc1, _0x106540, _0x8b54b3, _0x50e48a, _0x19180f);
        } catch (_0x20b54b) {
            _0x305fb7(_0x2f4c92);
            if (_0x20b54b !== _0x20b54b + 0x0 && _0x20b54b !== 'longjmp')
                throw _0x20b54b;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1f96a7(_0x32e8fc, _0x10e939, _0x3005e4) {
        var _0x4332c1 = _0x9ae453();
        try {
            _0x4d1344(_0x32e8fc, _0x10e939, _0x3005e4);
        } catch (_0x3928cb) {
            _0x305fb7(_0x4332c1);
            if (_0x3928cb !== _0x3928cb + 0x0 && _0x3928cb !== 'longjmp')
                throw _0x3928cb;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2660d6(_0x22c2fd, _0x58e2cc, _0x570a52, _0x1cece9, _0x20e447, _0x13ce29, _0x296e05, _0x5d3b02, _0x4e4aba, _0x5b1b51, _0x523915, _0x419826, _0x2c5d10, _0xe57326, _0x28d1cb, _0x47f29e, _0x236db6, _0x134d36) {
        var _0x203169 = _0x9ae453();
        try {
            _0x133b96(_0x22c2fd, _0x58e2cc, _0x570a52, _0x1cece9, _0x20e447, _0x13ce29, _0x296e05, _0x5d3b02, _0x4e4aba, _0x5b1b51, _0x523915, _0x419826, _0x2c5d10, _0xe57326, _0x28d1cb, _0x47f29e, _0x236db6, _0x134d36);
        } catch (_0x42e17a) {
            _0x305fb7(_0x203169);
            if (_0x42e17a !== _0x42e17a + 0x0 && _0x42e17a !== 'longjmp')
                throw _0x42e17a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1dd963(_0x29b404, _0x5dca43, _0x1a7196, _0x479ebb, _0x3337a2, _0x242193, _0x42b1b3, _0x33996b, _0x5c4544, _0x1e02ff, _0x49f729, _0x204228, _0x2bb080, _0x55631a, _0x34e88b, _0x113253, _0x135024, _0xf1ee69) {
        var _0x4d0d1d = _0x9ae453();
        try {
            _0x9a21ae(_0x29b404, _0x5dca43, _0x1a7196, _0x479ebb, _0x3337a2, _0x242193, _0x42b1b3, _0x33996b, _0x5c4544, _0x1e02ff, _0x49f729, _0x204228, _0x2bb080, _0x55631a, _0x34e88b, _0x113253, _0x135024, _0xf1ee69);
        } catch (_0x9e0fdb) {
            _0x305fb7(_0x4d0d1d);
            if (_0x9e0fdb !== _0x9e0fdb + 0x0 && _0x9e0fdb !== 'longjmp')
                throw _0x9e0fdb;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x139c75(_0x18d1d5, _0x1e0447, _0xde5803, _0x5a5e53, _0x742b32, _0x4dde72, _0x451dc1, _0x432704, _0xe88671, _0x45d879) {
        var _0x133b1b = _0x9ae453();
        try {
            return _0x1515b0(_0x18d1d5, _0x1e0447, _0xde5803, _0x5a5e53, _0x742b32, _0x4dde72, _0x451dc1, _0x432704, _0xe88671, _0x45d879);
        } catch (_0x399161) {
            _0x305fb7(_0x133b1b);
            if (_0x399161 !== _0x399161 + 0x0 && _0x399161 !== 'longjmp')
                throw _0x399161;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xbe52d1(_0x433b06, _0x65bce7, _0x26a549, _0x4a81d8, _0xda893b) {
        var _0x489fbf = _0x9ae453();
        try {
            return _0x2a841c(_0x433b06, _0x65bce7, _0x26a549, _0x4a81d8, _0xda893b);
        } catch (_0x1bd6dd) {
            _0x305fb7(_0x489fbf);
            if (_0x1bd6dd !== _0x1bd6dd + 0x0 && _0x1bd6dd !== 'longjmp')
                throw _0x1bd6dd;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x27a4d8(_0x1103d2, _0x67516f, _0xfe5bd2, _0x2d3102, _0x590aa1, _0x77ba3d, _0x19da1a, _0xc63db3) {
        var _0x5cf622 = _0x9ae453();
        try {
            _0x506ad(_0x1103d2, _0x67516f, _0xfe5bd2, _0x2d3102, _0x590aa1, _0x77ba3d, _0x19da1a, _0xc63db3);
        } catch (_0xbad6b9) {
            _0x305fb7(_0x5cf622);
            if (_0xbad6b9 !== _0xbad6b9 + 0x0 && _0xbad6b9 !== 'longjmp')
                throw _0xbad6b9;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2a93e3(_0x120361, _0x46935d, _0x5b1b26, _0x41870f) {
        var _0x11400e = _0x9ae453();
        try {
            return _0x1f2c96(_0x120361, _0x46935d, _0x5b1b26, _0x41870f);
        } catch (_0x54dfc1) {
            _0x305fb7(_0x11400e);
            if (_0x54dfc1 !== _0x54dfc1 + 0x0 && _0x54dfc1 !== 'longjmp')
                throw _0x54dfc1;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xa0dbde(_0x350b8d, _0x289f85, _0x45736c, _0xea5f56, _0xc16262, _0x48ac20, _0x1a0e13) {
        var _0x13c0bc = _0x9ae453();
        try {
            return _0x5bcb05(_0x350b8d, _0x289f85, _0x45736c, _0xea5f56, _0xc16262, _0x48ac20, _0x1a0e13);
        } catch (_0x410588) {
            _0x305fb7(_0x13c0bc);
            if (_0x410588 !== _0x410588 + 0x0 && _0x410588 !== 'longjmp')
                throw _0x410588;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1bef63(_0x4d8e53, _0x2876ec, _0x5f46a0, _0x44d018, _0x7c141f, _0x3d2fe5, _0x28c224, _0x587528) {
        var _0x59ba6c = _0x9ae453();
        try {
            _0x18a335(_0x4d8e53, _0x2876ec, _0x5f46a0, _0x44d018, _0x7c141f, _0x3d2fe5, _0x28c224, _0x587528);
        } catch (_0xe98432) {
            _0x305fb7(_0x59ba6c);
            if (_0xe98432 !== _0xe98432 + 0x0 && _0xe98432 !== 'longjmp')
                throw _0xe98432;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3027fc(_0x3caa8e, _0x29fe7f, _0x338d38, _0x191a4f, _0x384392, _0x262fd4, _0x49831a) {
        var _0x4a2871 = _0x9ae453();
        try {
            _0x5196e2(_0x3caa8e, _0x29fe7f, _0x338d38, _0x191a4f, _0x384392, _0x262fd4, _0x49831a);
        } catch (_0x3180a6) {
            _0x305fb7(_0x4a2871);
            if (_0x3180a6 !== _0x3180a6 + 0x0 && _0x3180a6 !== 'longjmp')
                throw _0x3180a6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5dd0db(_0x48a207, _0x3d3dc4, _0x26d28d, _0x2c43b1, _0x4da18a, _0x46ff61, _0x48aafa, _0x52c355, _0x1073e4, _0x3ecf66, _0x2e9971, _0x409c96, _0x22e4e9) {
        var _0x303a4e = _0x9ae453();
        try {
            _0xc60bd7(_0x48a207, _0x3d3dc4, _0x26d28d, _0x2c43b1, _0x4da18a, _0x46ff61, _0x48aafa, _0x52c355, _0x1073e4, _0x3ecf66, _0x2e9971, _0x409c96, _0x22e4e9);
        } catch (_0x2b7e9e) {
            _0x305fb7(_0x303a4e);
            if (_0x2b7e9e !== _0x2b7e9e + 0x0 && _0x2b7e9e !== 'longjmp')
                throw _0x2b7e9e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x36acbd(_0x5d9403, _0x164ef1, _0x46c213, _0x32de26, _0x4a3220) {
        var _0x434c4d = _0x9ae453();
        try {
            _0x304bfb(_0x5d9403, _0x164ef1, _0x46c213, _0x32de26, _0x4a3220);
        } catch (_0xfdec24) {
            _0x305fb7(_0x434c4d);
            if (_0xfdec24 !== _0xfdec24 + 0x0 && _0xfdec24 !== 'longjmp')
                throw _0xfdec24;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2e4c87(_0x2b76d2, _0x3cad29, _0x255459, _0x44b670, _0x31ff10, _0x1b33ad, _0x3dd79a, _0x107ef9, _0x5d256f, _0x518eea, _0x373e0a, _0x1115a9, _0xdf5a8, _0xdd1e7e, _0x105d55, _0x1793b1) {
        var _0x5bfe7a = _0x9ae453();
        try {
            _0x31e7f8(_0x2b76d2, _0x3cad29, _0x255459, _0x44b670, _0x31ff10, _0x1b33ad, _0x3dd79a, _0x107ef9, _0x5d256f, _0x518eea, _0x373e0a, _0x1115a9, _0xdf5a8, _0xdd1e7e, _0x105d55, _0x1793b1);
        } catch (_0x3553f6) {
            _0x305fb7(_0x5bfe7a);
            if (_0x3553f6 !== _0x3553f6 + 0x0 && _0x3553f6 !== 'longjmp')
                throw _0x3553f6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x358691(_0x57cc93, _0x447c60, _0x434d17, _0x14d0d2, _0x501dbe) {
        var _0x1ef526 = _0x9ae453();
        try {
            return _0x42d27b(_0x57cc93, _0x447c60, _0x434d17, _0x14d0d2, _0x501dbe);
        } catch (_0x1a4130) {
            _0x305fb7(_0x1ef526);
            if (_0x1a4130 !== _0x1a4130 + 0x0 && _0x1a4130 !== 'longjmp')
                throw _0x1a4130;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x37cb78(_0x1226c3, _0x17d065, _0xedb005, _0x44e434, _0x1ba8ea, _0xef2500, _0xef60f9, _0x52d862, _0x3b6b24, _0x11c37d) {
        var _0x1a8814 = _0x9ae453();
        try {
            return _0x1f2301(_0x1226c3, _0x17d065, _0xedb005, _0x44e434, _0x1ba8ea, _0xef2500, _0xef60f9, _0x52d862, _0x3b6b24, _0x11c37d);
        } catch (_0x5e893e) {
            _0x305fb7(_0x1a8814);
            if (_0x5e893e !== _0x5e893e + 0x0 && _0x5e893e !== 'longjmp')
                throw _0x5e893e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x421da5(_0x53746d, _0x3064bd, _0x23317f, _0x1ba7c5, _0x3ee284, _0x29a325) {
        var _0x520194 = _0x9ae453();
        try {
            return _0x146866(_0x53746d, _0x3064bd, _0x23317f, _0x1ba7c5, _0x3ee284, _0x29a325);
        } catch (_0x66d06d) {
            _0x305fb7(_0x520194);
            if (_0x66d06d !== _0x66d06d + 0x0 && _0x66d06d !== 'longjmp')
                throw _0x66d06d;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x371ad0(_0x57844c, _0x51daa1) {
        var _0x3b836f = _0x9ae453();
        try {
            return _0x305073(_0x57844c, _0x51daa1);
        } catch (_0x322fdc) {
            _0x305fb7(_0x3b836f);
            if (_0x322fdc !== _0x322fdc + 0x0 && _0x322fdc !== 'longjmp')
                throw _0x322fdc;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xfbb0be(_0x2415ee, _0x4c4a7d, _0x240f09, _0x49129c) {
        var _0x5e804d = _0x9ae453();
        try {
            return _0x10f099(_0x2415ee, _0x4c4a7d, _0x240f09, _0x49129c);
        } catch (_0x30e637) {
            _0x305fb7(_0x5e804d);
            if (_0x30e637 !== _0x30e637 + 0x0 && _0x30e637 !== 'longjmp')
                throw _0x30e637;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x180428(_0x143514, _0x521f8b, _0x23ac94, _0x584da3) {
        var _0x26df1f = _0x9ae453();
        try {
            return _0x1a011b(_0x143514, _0x521f8b, _0x23ac94, _0x584da3);
        } catch (_0x23a5c6) {
            _0x305fb7(_0x26df1f);
            if (_0x23a5c6 !== _0x23a5c6 + 0x0 && _0x23a5c6 !== 'longjmp')
                throw _0x23a5c6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x26cd44(_0x333984, _0x2754c4, _0x2374f9, _0x27f708) {
        var _0x2ba861 = _0x9ae453();
        try {
            return _0x417443(_0x333984, _0x2754c4, _0x2374f9, _0x27f708);
        } catch (_0x48da8a) {
            _0x305fb7(_0x2ba861);
            if (_0x48da8a !== _0x48da8a + 0x0 && _0x48da8a !== 'longjmp')
                throw _0x48da8a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1719ba(_0x91cc89, _0x1348a7, _0x32e5dd, _0x6aee8c, _0x3841c1) {
        var _0x222c47 = _0x9ae453();
        try {
            return _0x22b44b(_0x91cc89, _0x1348a7, _0x32e5dd, _0x6aee8c, _0x3841c1);
        } catch (_0x3ed1f4) {
            _0x305fb7(_0x222c47);
            if (_0x3ed1f4 !== _0x3ed1f4 + 0x0 && _0x3ed1f4 !== 'longjmp')
                throw _0x3ed1f4;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3c0177(_0xedb260, _0x87336d, _0x5c9c98, _0x583728, _0x1abc1d, _0x1f87a5, _0x592bd6, _0x46272f, _0x547bf2, _0x52c0e9) {
        var _0x291cb8 = _0x9ae453();
        try {
            _0x5b6ecd(_0xedb260, _0x87336d, _0x5c9c98, _0x583728, _0x1abc1d, _0x1f87a5, _0x592bd6, _0x46272f, _0x547bf2, _0x52c0e9);
        } catch (_0x514536) {
            _0x305fb7(_0x291cb8);
            if (_0x514536 !== _0x514536 + 0x0 && _0x514536 !== 'longjmp')
                throw _0x514536;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x365b72(_0x307e8a, _0x5bf241, _0x15f709, _0x1bf4f5, _0x56d200, _0x56a4ff, _0x51bfde, _0x129c1f, _0x39fdb1, _0x4cab65, _0x354dc3, _0x228fd5, _0x2b1597, _0x190f0f, _0x4fcebf, _0x4452f3, _0x5f4810) {
        var _0x3922f1 = _0x9ae453();
        try {
            _0x2c4ee1(_0x307e8a, _0x5bf241, _0x15f709, _0x1bf4f5, _0x56d200, _0x56a4ff, _0x51bfde, _0x129c1f, _0x39fdb1, _0x4cab65, _0x354dc3, _0x228fd5, _0x2b1597, _0x190f0f, _0x4fcebf, _0x4452f3, _0x5f4810);
        } catch (_0x54ce39) {
            _0x305fb7(_0x3922f1);
            if (_0x54ce39 !== _0x54ce39 + 0x0 && _0x54ce39 !== 'longjmp')
                throw _0x54ce39;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x134d45(_0x54440b, _0x41b4de, _0x3dd5a4, _0x41f9f6, _0x410830, _0x5d68c1, _0x5ef823, _0x428d22, _0x1a26e9, _0xe7e1de, _0x468d1f, _0x3c6821, _0x12e1f4, _0x18ebf6) {
        var _0x3513df = _0x9ae453();
        try {
            return _0x521e4a(_0x54440b, _0x41b4de, _0x3dd5a4, _0x41f9f6, _0x410830, _0x5d68c1, _0x5ef823, _0x428d22, _0x1a26e9, _0xe7e1de, _0x468d1f, _0x3c6821, _0x12e1f4, _0x18ebf6);
        } catch (_0x1319c2) {
            _0x305fb7(_0x3513df);
            if (_0x1319c2 !== _0x1319c2 + 0x0 && _0x1319c2 !== 'longjmp')
                throw _0x1319c2;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2d0d1f(_0x12c2f4, _0x5a79f6, _0x532c75, _0x3a7fbb, _0x590a9f, _0x5abe9e, _0x3159bc) {
        var _0x1158aa = _0x9ae453();
        try {
            return _0x22fa6d(_0x12c2f4, _0x5a79f6, _0x532c75, _0x3a7fbb, _0x590a9f, _0x5abe9e, _0x3159bc);
        } catch (_0x20ebd8) {
            _0x305fb7(_0x1158aa);
            if (_0x20ebd8 !== _0x20ebd8 + 0x0 && _0x20ebd8 !== 'longjmp')
                throw _0x20ebd8;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x18d572(_0x2a1f16, _0x15b1ff, _0x45bf9d, _0x6d00f5, _0x37f37b) {
        var _0x553faa = _0x9ae453();
        try {
            return _0x16161f(_0x2a1f16, _0x15b1ff, _0x45bf9d, _0x6d00f5, _0x37f37b);
        } catch (_0xdb4e45) {
            _0x305fb7(_0x553faa);
            if (_0xdb4e45 !== _0xdb4e45 + 0x0 && _0xdb4e45 !== 'longjmp')
                throw _0xdb4e45;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x522e06(_0x29db44, _0x354536, _0x31c631, _0x2996ff, _0x47f936, _0x234382, _0x4bb79b) {
        var _0x2f47cb = _0x9ae453();
        try {
            _0xa1a6e0(_0x29db44, _0x354536, _0x31c631, _0x2996ff, _0x47f936, _0x234382, _0x4bb79b);
        } catch (_0x5e7550) {
            _0x305fb7(_0x2f47cb);
            if (_0x5e7550 !== _0x5e7550 + 0x0 && _0x5e7550 !== 'longjmp')
                throw _0x5e7550;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x513b96(_0x2fa00f, _0x5ab767, _0x4cb136, _0x33e24f, _0x46ebf0, _0x522a08, _0x1cdbb7, _0x4502cc, _0x308a78, _0x3825d1, _0x42a0e6, _0x309d68) {
        var _0x57c239 = _0x9ae453();
        try {
            _0x270471(_0x2fa00f, _0x5ab767, _0x4cb136, _0x33e24f, _0x46ebf0, _0x522a08, _0x1cdbb7, _0x4502cc, _0x308a78, _0x3825d1, _0x42a0e6, _0x309d68);
        } catch (_0x411c01) {
            _0x305fb7(_0x57c239);
            if (_0x411c01 !== _0x411c01 + 0x0 && _0x411c01 !== 'longjmp')
                throw _0x411c01;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2bf3ef(_0x215f06, _0x47ddb8, _0xe7ad77) {
        var _0x38e535 = _0x9ae453();
        try {
            return _0x5de580(_0x215f06, _0x47ddb8, _0xe7ad77);
        } catch (_0x202813) {
            _0x305fb7(_0x38e535);
            if (_0x202813 !== _0x202813 + 0x0 && _0x202813 !== 'longjmp')
                throw _0x202813;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2e3186(_0x52ef96, _0x30643b, _0x258072) {
        var _0x362fc3 = _0x9ae453();
        try {
            return _0xbed010(_0x52ef96, _0x30643b, _0x258072);
        } catch (_0x1b3c98) {
            _0x305fb7(_0x362fc3);
            if (_0x1b3c98 !== _0x1b3c98 + 0x0 && _0x1b3c98 !== 'longjmp')
                throw _0x1b3c98;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4d872f(_0x88a773, _0x3df586, _0x4dc691, _0x5e7548, _0x5d8e1e, _0x5dbc43, _0x2b6ca0, _0x2aca63, _0x4d44f2, _0x299a61, _0x15df35, _0x130c9e, _0x514766) {
        var _0x593da9 = _0x9ae453();
        try {
            _0x16fe21(_0x88a773, _0x3df586, _0x4dc691, _0x5e7548, _0x5d8e1e, _0x5dbc43, _0x2b6ca0, _0x2aca63, _0x4d44f2, _0x299a61, _0x15df35, _0x130c9e, _0x514766);
        } catch (_0xf93ce4) {
            _0x305fb7(_0x593da9);
            if (_0xf93ce4 !== _0xf93ce4 + 0x0 && _0xf93ce4 !== 'longjmp')
                throw _0xf93ce4;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x23c500(_0x3faea8, _0x581b85, _0x138db7, _0x33abb6, _0xd974d, _0x4c75c0, _0x33da80) {
        var _0x2191d7 = _0x9ae453();
        try {
            _0x2185e9(_0x3faea8, _0x581b85, _0x138db7, _0x33abb6, _0xd974d, _0x4c75c0, _0x33da80);
        } catch (_0x125161) {
            _0x305fb7(_0x2191d7);
            if (_0x125161 !== _0x125161 + 0x0 && _0x125161 !== 'longjmp')
                throw _0x125161;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3417da(_0x11c2cb, _0x5107e7, _0x1713f2, _0x2a48bb, _0x5223a4, _0x894a88, _0x1a8046, _0xe6b48c, _0x3e825c, _0x3f5332) {
        var _0x59550b = _0x9ae453();
        try {
            return _0x240dd6(_0x11c2cb, _0x5107e7, _0x1713f2, _0x2a48bb, _0x5223a4, _0x894a88, _0x1a8046, _0xe6b48c, _0x3e825c, _0x3f5332);
        } catch (_0x32bec6) {
            _0x305fb7(_0x59550b);
            if (_0x32bec6 !== _0x32bec6 + 0x0 && _0x32bec6 !== 'longjmp')
                throw _0x32bec6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2d0a15(_0x5d5a2f, _0xd7aebd, _0xc73bea, _0x163ca0, _0x4cbc86) {
        var _0x321138 = _0x9ae453();
        try {
            return _0x5190d8(_0x5d5a2f, _0xd7aebd, _0xc73bea, _0x163ca0, _0x4cbc86);
        } catch (_0x40e908) {
            _0x305fb7(_0x321138);
            if (_0x40e908 !== _0x40e908 + 0x0 && _0x40e908 !== 'longjmp')
                throw _0x40e908;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4927f7(_0x35e11d, _0x59a528, _0x5adf1d, _0x189ca5, _0x10a45e, _0x21522c) {
        var _0x3bea6b = _0x9ae453();
        try {
            _0x30c57d(_0x35e11d, _0x59a528, _0x5adf1d, _0x189ca5, _0x10a45e, _0x21522c);
        } catch (_0x4ed974) {
            _0x305fb7(_0x3bea6b);
            if (_0x4ed974 !== _0x4ed974 + 0x0 && _0x4ed974 !== 'longjmp')
                throw _0x4ed974;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1ec402(_0x3d4a7e, _0x37375f, _0x421703, _0x3f0e4b, _0x40f6f9, _0x2043b8, _0x3c79f9, _0xcd84b4) {
        var _0x5b753b = _0x9ae453();
        try {
            return _0x3f3107(_0x3d4a7e, _0x37375f, _0x421703, _0x3f0e4b, _0x40f6f9, _0x2043b8, _0x3c79f9, _0xcd84b4);
        } catch (_0x4dbac2) {
            _0x305fb7(_0x5b753b);
            if (_0x4dbac2 !== _0x4dbac2 + 0x0 && _0x4dbac2 !== 'longjmp')
                throw _0x4dbac2;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x28ea83(_0x50f17a, _0x483316, _0x1fad95, _0x57c554, _0x2e0935, _0x421d7a, _0x37ecaf, _0x597857, _0x2b2460, _0x4713be, _0x4f4182, _0x5b7f90, _0x40d523, _0x35b7ad, _0x379330) {
        var _0x191918 = _0x9ae453();
        try {
            _0x476bb2(_0x50f17a, _0x483316, _0x1fad95, _0x57c554, _0x2e0935, _0x421d7a, _0x37ecaf, _0x597857, _0x2b2460, _0x4713be, _0x4f4182, _0x5b7f90, _0x40d523, _0x35b7ad, _0x379330);
        } catch (_0x5e5f07) {
            _0x305fb7(_0x191918);
            if (_0x5e5f07 !== _0x5e5f07 + 0x0 && _0x5e5f07 !== 'longjmp')
                throw _0x5e5f07;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3fe167(_0x370cb5, _0x436299, _0x1de617, _0x1df8e0, _0x32d97b, _0x45c637) {
        var _0x5c6167 = _0x9ae453();
        try {
            _0xe18d3c(_0x370cb5, _0x436299, _0x1de617, _0x1df8e0, _0x32d97b, _0x45c637);
        } catch (_0xd6fb0a) {
            _0x305fb7(_0x5c6167);
            if (_0xd6fb0a !== _0xd6fb0a + 0x0 && _0xd6fb0a !== 'longjmp')
                throw _0xd6fb0a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x599134(_0x5ba1a9, _0x2c9147, _0x4e4de3, _0x468e41, _0x3ba598, _0x1d82e1) {
        var _0x2256aa = _0x9ae453();
        try {
            _0x114231(_0x5ba1a9, _0x2c9147, _0x4e4de3, _0x468e41, _0x3ba598, _0x1d82e1);
        } catch (_0x42e7ca) {
            _0x305fb7(_0x2256aa);
            if (_0x42e7ca !== _0x42e7ca + 0x0 && _0x42e7ca !== 'longjmp')
                throw _0x42e7ca;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5db92d(_0x2faa1d, _0x5dd315, _0x57240e, _0x544e15, _0x4f6ada, _0x591b32) {
        var _0x1ce492 = _0x9ae453();
        try {
            _0x1992a8(_0x2faa1d, _0x5dd315, _0x57240e, _0x544e15, _0x4f6ada, _0x591b32);
        } catch (_0xdd6eb2) {
            _0x305fb7(_0x1ce492);
            if (_0xdd6eb2 !== _0xdd6eb2 + 0x0 && _0xdd6eb2 !== 'longjmp')
                throw _0xdd6eb2;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5731c3(_0x2d026a, _0x1ef2e7) {
        var _0x117b7c = _0x9ae453();
        try {
            return _0x5d1647(_0x2d026a, _0x1ef2e7);
        } catch (_0x5b2072) {
            _0x305fb7(_0x117b7c);
            if (_0x5b2072 !== _0x5b2072 + 0x0 && _0x5b2072 !== 'longjmp')
                throw _0x5b2072;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x31b3d1(_0x5acf74, _0x2aad92, _0x111643, _0x3cf232, _0x16e3c1, _0x27aac5) {
        var _0x2350ce = _0x9ae453();
        try {
            return _0x1d9dfe(_0x5acf74, _0x2aad92, _0x111643, _0x3cf232, _0x16e3c1, _0x27aac5);
        } catch (_0x5f09dc) {
            _0x305fb7(_0x2350ce);
            if (_0x5f09dc !== _0x5f09dc + 0x0 && _0x5f09dc !== 'longjmp')
                throw _0x5f09dc;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x41f33b(_0x1e1045, _0x232daa, _0x17a900, _0x1deb04, _0x17a6c3, _0x3aeec8) {
        var _0xe598dc = _0x9ae453();
        try {
            return _0x376ef9(_0x1e1045, _0x232daa, _0x17a900, _0x1deb04, _0x17a6c3, _0x3aeec8);
        } catch (_0x448825) {
            _0x305fb7(_0xe598dc);
            if (_0x448825 !== _0x448825 + 0x0 && _0x448825 !== 'longjmp')
                throw _0x448825;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x45f99c(_0x2638ac, _0x100834, _0x15416b, _0x54e0e7, _0x554cd0, _0x57fc34) {
        var _0x48b2c6 = _0x9ae453();
        try {
            return _0x596041(_0x2638ac, _0x100834, _0x15416b, _0x54e0e7, _0x554cd0, _0x57fc34);
        } catch (_0x482ce5) {
            _0x305fb7(_0x48b2c6);
            if (_0x482ce5 !== _0x482ce5 + 0x0 && _0x482ce5 !== 'longjmp')
                throw _0x482ce5;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4a7b31(_0x446fe1, _0x1203af, _0x5072f4, _0x58dddf, _0x50461a, _0x853358, _0x396b51) {
        var _0x2765bc = _0x9ae453();
        try {
            return _0x197e81(_0x446fe1, _0x1203af, _0x5072f4, _0x58dddf, _0x50461a, _0x853358, _0x396b51);
        } catch (_0x3efe85) {
            _0x305fb7(_0x2765bc);
            if (_0x3efe85 !== _0x3efe85 + 0x0 && _0x3efe85 !== 'longjmp')
                throw _0x3efe85;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x48142a(_0x7c8498, _0x366680, _0x262932, _0x1de356, _0x460e0a, _0x294a2d, _0x10d08a) {
        var _0x15a4c0 = _0x9ae453();
        try {
            return _0x234415(_0x7c8498, _0x366680, _0x262932, _0x1de356, _0x460e0a, _0x294a2d, _0x10d08a);
        } catch (_0x997949) {
            _0x305fb7(_0x15a4c0);
            if (_0x997949 !== _0x997949 + 0x0 && _0x997949 !== 'longjmp')
                throw _0x997949;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xfc4a26(_0x4e9625, _0x4ad4ca, _0x34b2a6, _0x333342) {
        var _0x369d9e = _0x9ae453();
        try {
            _0x2f4124(_0x4e9625, _0x4ad4ca, _0x34b2a6, _0x333342);
        } catch (_0x484687) {
            _0x305fb7(_0x369d9e);
            if (_0x484687 !== _0x484687 + 0x0 && _0x484687 !== 'longjmp')
                throw _0x484687;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xfccce6(_0x3e393b, _0x4861, _0x2fdd18, _0x45ca14, _0x3c16b2) {
        var _0x5a7069 = _0x9ae453();
        try {
            return _0x26e025(_0x3e393b, _0x4861, _0x2fdd18, _0x45ca14, _0x3c16b2);
        } catch (_0x536a83) {
            _0x305fb7(_0x5a7069);
            if (_0x536a83 !== _0x536a83 + 0x0 && _0x536a83 !== 'longjmp')
                throw _0x536a83;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x196136(_0x5b6d4c, _0x7499d8, _0x5f1bc9, _0x1c8029, _0x2c7e67) {
        var _0x306e9e = _0x9ae453();
        try {
            return _0x4f1730(_0x5b6d4c, _0x7499d8, _0x5f1bc9, _0x1c8029, _0x2c7e67);
        } catch (_0x1cf91d) {
            _0x305fb7(_0x306e9e);
            if (_0x1cf91d !== _0x1cf91d + 0x0 && _0x1cf91d !== 'longjmp')
                throw _0x1cf91d;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xc8d792(_0x53a49c) {
        var _0x510e34 = _0x9ae453();
        try {
            return _0x1eb109(_0x53a49c);
        } catch (_0x525b29) {
            _0x305fb7(_0x510e34);
            if (_0x525b29 !== _0x525b29 + 0x0 && _0x525b29 !== 'longjmp')
                throw _0x525b29;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1ed249(_0x2594c4, _0x37685f, _0x487bfd, _0x242fe3) {
        var _0xe02f24 = _0x9ae453();
        try {
            return _0x32c01c(_0x2594c4, _0x37685f, _0x487bfd, _0x242fe3);
        } catch (_0x30471d) {
            _0x305fb7(_0xe02f24);
            if (_0x30471d !== _0x30471d + 0x0 && _0x30471d !== 'longjmp')
                throw _0x30471d;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xec0c7(_0x1dabc0, _0x4760dc, _0x41e4e5, _0x409ba2, _0x26c508, _0x467658, _0x393ce9, _0x10437f) {
        var _0x4c3d96 = _0x9ae453();
        try {
            return _0x525815(_0x1dabc0, _0x4760dc, _0x41e4e5, _0x409ba2, _0x26c508, _0x467658, _0x393ce9, _0x10437f);
        } catch (_0x47a77b) {
            _0x305fb7(_0x4c3d96);
            if (_0x47a77b !== _0x47a77b + 0x0 && _0x47a77b !== 'longjmp')
                throw _0x47a77b;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x42790f(_0x2286db, _0xfb871e, _0x2f0a16) {
        var _0x18640c = _0x9ae453();
        try {
            return _0x24324e(_0x2286db, _0xfb871e, _0x2f0a16);
        } catch (_0x5d8de9) {
            _0x305fb7(_0x18640c);
            if (_0x5d8de9 !== _0x5d8de9 + 0x0 && _0x5d8de9 !== 'longjmp')
                throw _0x5d8de9;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x58e3f6(_0xac7ad2, _0x21a694) {
        var _0x849be4 = _0x9ae453();
        try {
            return _0x379524(_0xac7ad2, _0x21a694);
        } catch (_0x517f9c) {
            _0x305fb7(_0x849be4);
            if (_0x517f9c !== _0x517f9c + 0x0 && _0x517f9c !== 'longjmp')
                throw _0x517f9c;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x402d72(_0x5c5540, _0x3e0398, _0x338392, _0x2078fc, _0x1f1b82, _0x4f48fb, _0x59bcf0) {
        var _0x40acd8 = _0x9ae453();
        try {
            _0x18d037(_0x5c5540, _0x3e0398, _0x338392, _0x2078fc, _0x1f1b82, _0x4f48fb, _0x59bcf0);
        } catch (_0xddfe28) {
            _0x305fb7(_0x40acd8);
            if (_0xddfe28 !== _0xddfe28 + 0x0 && _0xddfe28 !== 'longjmp')
                throw _0xddfe28;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2125db(_0x4de657, _0x8ff51a, _0x5dadcb, _0x290967, _0x1891bd, _0x23ebb0, _0x1b451b) {
        var _0x463273 = _0x9ae453();
        try {
            return _0x31c3d1(_0x4de657, _0x8ff51a, _0x5dadcb, _0x290967, _0x1891bd, _0x23ebb0, _0x1b451b);
        } catch (_0x2792e6) {
            _0x305fb7(_0x463273);
            if (_0x2792e6 !== _0x2792e6 + 0x0 && _0x2792e6 !== 'longjmp')
                throw _0x2792e6;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xe26cf2(_0x47519d, _0xd2d21a, _0xea7e7c, _0xd8a86e, _0x26d913, _0x63b8fc) {
        var _0x2c8b0b = _0x9ae453();
        try {
            return _0x33d540(_0x47519d, _0xd2d21a, _0xea7e7c, _0xd8a86e, _0x26d913, _0x63b8fc);
        } catch (_0x22582b) {
            _0x305fb7(_0x2c8b0b);
            if (_0x22582b !== _0x22582b + 0x0 && _0x22582b !== 'longjmp')
                throw _0x22582b;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x41cce7(_0x2709e9, _0x860fad, _0x5f2dd5, _0x3f1b09, _0x19828f, _0x2e9477, _0x1cedf7, _0x4a517d, _0x21cd44, _0x4bbc4a) {
        var _0x3329ac = _0x9ae453();
        try {
            return _0x3e560e(_0x2709e9, _0x860fad, _0x5f2dd5, _0x3f1b09, _0x19828f, _0x2e9477, _0x1cedf7, _0x4a517d, _0x21cd44, _0x4bbc4a);
        } catch (_0x8d9145) {
            _0x305fb7(_0x3329ac);
            if (_0x8d9145 !== _0x8d9145 + 0x0 && _0x8d9145 !== 'longjmp')
                throw _0x8d9145;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x6ead64(_0x4ac045, _0x536262, _0x33015d, _0x517cf7, _0x4c07cf, _0x480505) {
        var _0x2bc9a7 = _0x9ae453();
        try {
            _0x33f504(_0x4ac045, _0x536262, _0x33015d, _0x517cf7, _0x4c07cf, _0x480505);
        } catch (_0x739155) {
            _0x305fb7(_0x2bc9a7);
            if (_0x739155 !== _0x739155 + 0x0 && _0x739155 !== 'longjmp')
                throw _0x739155;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3c02e4(_0x16e376, _0x4e9b43, _0x5ed242, _0x8202a) {
        var _0x40beab = _0x9ae453();
        try {
            return _0x3b25e5(_0x16e376, _0x4e9b43, _0x5ed242, _0x8202a);
        } catch (_0x5b9711) {
            _0x305fb7(_0x40beab);
            if (_0x5b9711 !== _0x5b9711 + 0x0 && _0x5b9711 !== 'longjmp')
                throw _0x5b9711;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xce84d8(_0x5a9a72, _0x300ca2, _0xb1334b, _0x29b40d, _0x38d5fa) {
        var _0x4eb074 = _0x9ae453();
        try {
            return _0x4850fe(_0x5a9a72, _0x300ca2, _0xb1334b, _0x29b40d, _0x38d5fa);
        } catch (_0x4da775) {
            _0x305fb7(_0x4eb074);
            if (_0x4da775 !== _0x4da775 + 0x0 && _0x4da775 !== 'longjmp')
                throw _0x4da775;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x217373(_0x18b18d, _0x471965, _0x3dcbdf, _0x211e5f, _0x2af2c7, _0x98c76c) {
        var _0x3f33d1 = _0x9ae453();
        try {
            _0xbb2163(_0x18b18d, _0x471965, _0x3dcbdf, _0x211e5f, _0x2af2c7, _0x98c76c);
        } catch (_0x53b276) {
            _0x305fb7(_0x3f33d1);
            if (_0x53b276 !== _0x53b276 + 0x0 && _0x53b276 !== 'longjmp')
                throw _0x53b276;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3ce05a(_0x453477, _0xd86ed1, _0x516295, _0x3d866b, _0x3e81b1) {
        var _0x4e5594 = _0x9ae453();
        try {
            _0x3f622e(_0x453477, _0xd86ed1, _0x516295, _0x3d866b, _0x3e81b1);
        } catch (_0x1624fe) {
            _0x305fb7(_0x4e5594);
            if (_0x1624fe !== _0x1624fe + 0x0 && _0x1624fe !== 'longjmp')
                throw _0x1624fe;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x35c2cb(_0x480da9, _0x37dbaa, _0x571c02, _0x5102ae, _0x8b8fc2, _0x3ef73a, _0x3785dc, _0x460699) {
        var _0x321431 = _0x9ae453();
        try {
            return _0x400086(_0x480da9, _0x37dbaa, _0x571c02, _0x5102ae, _0x8b8fc2, _0x3ef73a, _0x3785dc, _0x460699);
        } catch (_0x2f2dcc) {
            _0x305fb7(_0x321431);
            if (_0x2f2dcc !== _0x2f2dcc + 0x0 && _0x2f2dcc !== 'longjmp')
                throw _0x2f2dcc;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x52ddaf(_0xcbdb2e, _0x320615, _0x37afa2, _0xca9c59, _0x544a66, _0xf7a057, _0x2d8613, _0x9693fa, _0x5821cd, _0x2e59d0, _0x49b478, _0x4e2e3f, _0x4ecfb7, _0x4660e5, _0x58913b, _0x279a4b, _0x3ad064) {
        var _0xaab62f = _0x9ae453();
        try {
            _0x9291a8(_0xcbdb2e, _0x320615, _0x37afa2, _0xca9c59, _0x544a66, _0xf7a057, _0x2d8613, _0x9693fa, _0x5821cd, _0x2e59d0, _0x49b478, _0x4e2e3f, _0x4ecfb7, _0x4660e5, _0x58913b, _0x279a4b, _0x3ad064);
        } catch (_0x58f35d) {
            _0x305fb7(_0xaab62f);
            if (_0x58f35d !== _0x58f35d + 0x0 && _0x58f35d !== 'longjmp')
                throw _0x58f35d;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1ea274(_0x11fa46, _0x24b2f7, _0x2198c0, _0x5b8b7a, _0x1815e1, _0x42c287) {
        var _0x6a028 = _0x9ae453();
        try {
            return _0x3455f5(_0x11fa46, _0x24b2f7, _0x2198c0, _0x5b8b7a, _0x1815e1, _0x42c287);
        } catch (_0x49ab28) {
            _0x305fb7(_0x6a028);
            if (_0x49ab28 !== _0x49ab28 + 0x0 && _0x49ab28 !== 'longjmp')
                throw _0x49ab28;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xe09493(_0x50d944, _0x434d36, _0xa7551d, _0x43f4e6, _0x167496, _0x4226ca) {
        var _0x2b7142 = _0x9ae453();
        try {
            return _0x2afa81(_0x50d944, _0x434d36, _0xa7551d, _0x43f4e6, _0x167496, _0x4226ca);
        } catch (_0x142bbe) {
            _0x305fb7(_0x2b7142);
            if (_0x142bbe !== _0x142bbe + 0x0 && _0x142bbe !== 'longjmp')
                throw _0x142bbe;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2de147(_0x576fb8, _0x3f81f3, _0x55e8ec, _0x87be43, _0x450502, _0x15bdcc) {
        var _0x442be7 = _0x9ae453();
        try {
            return _0x1ffaf6(_0x576fb8, _0x3f81f3, _0x55e8ec, _0x87be43, _0x450502, _0x15bdcc);
        } catch (_0x54810) {
            _0x305fb7(_0x442be7);
            if (_0x54810 !== _0x54810 + 0x0 && _0x54810 !== 'longjmp')
                throw _0x54810;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4931b3(_0x331fca, _0x3a4717, _0x1458b9, _0xb69a03, _0x4e295b) {
        var _0x5319b3 = _0x9ae453();
        try {
            _0x42cdb1(_0x331fca, _0x3a4717, _0x1458b9, _0xb69a03, _0x4e295b);
        } catch (_0x18b2b0) {
            _0x305fb7(_0x5319b3);
            if (_0x18b2b0 !== _0x18b2b0 + 0x0 && _0x18b2b0 !== 'longjmp')
                throw _0x18b2b0;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x23dd89(_0x6a7018, _0x118648, _0x2e461d, _0xba72aa, _0x563391, _0x13ed8f) {
        var _0x5baee6 = _0x9ae453();
        try {
            _0x359742(_0x6a7018, _0x118648, _0x2e461d, _0xba72aa, _0x563391, _0x13ed8f);
        } catch (_0x145a38) {
            _0x305fb7(_0x5baee6);
            if (_0x145a38 !== _0x145a38 + 0x0 && _0x145a38 !== 'longjmp')
                throw _0x145a38;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1f6b96(_0x44a297, _0x5980ac, _0x1374f6, _0x45d77d, _0x554b46, _0x2d66a4) {
        var _0x28c6fc = _0x9ae453();
        try {
            return _0x1bc59f(_0x44a297, _0x5980ac, _0x1374f6, _0x45d77d, _0x554b46, _0x2d66a4);
        } catch (_0x3e7b13) {
            _0x305fb7(_0x28c6fc);
            if (_0x3e7b13 !== _0x3e7b13 + 0x0 && _0x3e7b13 !== 'longjmp')
                throw _0x3e7b13;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x30966d(_0x5a610b, _0x5cf51a, _0x1c3020, _0x154ebc, _0x5ba9ef, _0x21b2b8) {
        var _0x48e184 = _0x9ae453();
        try {
            return _0x2a9f4d(_0x5a610b, _0x5cf51a, _0x1c3020, _0x154ebc, _0x5ba9ef, _0x21b2b8);
        } catch (_0x3d20cc) {
            _0x305fb7(_0x48e184);
            if (_0x3d20cc !== _0x3d20cc + 0x0 && _0x3d20cc !== 'longjmp')
                throw _0x3d20cc;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x26ac5d(_0x15309e, _0xb4bc69, _0x3bf1bf, _0x451101, _0x1641cb, _0x38f896, _0x16620d) {
        var _0x5d0b4a = _0x9ae453();
        try {
            _0xbee9ef(_0x15309e, _0xb4bc69, _0x3bf1bf, _0x451101, _0x1641cb, _0x38f896, _0x16620d);
        } catch (_0x5a1709) {
            _0x305fb7(_0x5d0b4a);
            if (_0x5a1709 !== _0x5a1709 + 0x0 && _0x5a1709 !== 'longjmp')
                throw _0x5a1709;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x29f961(_0x3494e5, _0x1ccbad, _0x5354bb, _0x53f729) {
        var _0x22ba5b = _0x9ae453();
        try {
            return _0x53508a(_0x3494e5, _0x1ccbad, _0x5354bb, _0x53f729);
        } catch (_0x2880ef) {
            _0x305fb7(_0x22ba5b);
            if (_0x2880ef !== _0x2880ef + 0x0 && _0x2880ef !== 'longjmp')
                throw _0x2880ef;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2f703d(_0x33ffa4, _0x506f3a, _0x847c41, _0x52b10d) {
        var _0x3c6955 = _0x9ae453();
        try {
            return _0x5aa238(_0x33ffa4, _0x506f3a, _0x847c41, _0x52b10d);
        } catch (_0x5bd0ef) {
            _0x305fb7(_0x3c6955);
            if (_0x5bd0ef !== _0x5bd0ef + 0x0 && _0x5bd0ef !== 'longjmp')
                throw _0x5bd0ef;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x17272e(_0x290fb5, _0x2f89c3, _0x451c1e) {
        var _0x12ac61 = _0x9ae453();
        try {
            return _0x4cc72d(_0x290fb5, _0x2f89c3, _0x451c1e);
        } catch (_0x6be2a0) {
            _0x305fb7(_0x12ac61);
            if (_0x6be2a0 !== _0x6be2a0 + 0x0 && _0x6be2a0 !== 'longjmp')
                throw _0x6be2a0;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xb31a22(_0xdfd885, _0x33bfd3, _0xbfe182, _0x28746e, _0xf29bab, _0x3d3389, _0x5271d8, _0x28437f) {
        var _0x3e5911 = _0x9ae453();
        try {
            _0x225470(_0xdfd885, _0x33bfd3, _0xbfe182, _0x28746e, _0xf29bab, _0x3d3389, _0x5271d8, _0x28437f);
        } catch (_0x2db66f) {
            _0x305fb7(_0x3e5911);
            if (_0x2db66f !== _0x2db66f + 0x0 && _0x2db66f !== 'longjmp')
                throw _0x2db66f;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4bab91(_0x384f86, _0x38c0cc, _0x3f600e, _0x16510a) {
        var _0x3d68ad = _0x9ae453();
        try {
            return _0x2f0e7b(_0x384f86, _0x38c0cc, _0x3f600e, _0x16510a);
        } catch (_0x1c087d) {
            _0x305fb7(_0x3d68ad);
            if (_0x1c087d !== _0x1c087d + 0x0 && _0x1c087d !== 'longjmp')
                throw _0x1c087d;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x5b7eec(_0x4222be, _0x47de53, _0x188e33, _0x547a46, _0x597669, _0xa0e018, _0x7676ab, _0x1d48e4) {
        var _0x520c2b = _0x9ae453();
        try {
            _0x492c52(_0x4222be, _0x47de53, _0x188e33, _0x547a46, _0x597669, _0xa0e018, _0x7676ab, _0x1d48e4);
        } catch (_0x4b8a01) {
            _0x305fb7(_0x520c2b);
            if (_0x4b8a01 !== _0x4b8a01 + 0x0 && _0x4b8a01 !== 'longjmp')
                throw _0x4b8a01;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4a3876(_0x336574, _0x1edadb, _0x5f552d, _0xa593c5, _0x107cf0) {
        var _0x344fdc = _0x9ae453();
        try {
            return _0x5b10d3(_0x336574, _0x1edadb, _0x5f552d, _0xa593c5, _0x107cf0);
        } catch (_0x30dd45) {
            _0x305fb7(_0x344fdc);
            if (_0x30dd45 !== _0x30dd45 + 0x0 && _0x30dd45 !== 'longjmp')
                throw _0x30dd45;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3c8076(_0x1e5a98, _0x506c85, _0x59b3a4, _0xf0c505, _0x48d70a, _0x6cee16, _0x4f3964, _0x359faa) {
        var _0x49878c = _0x9ae453();
        try {
            _0x305c6e(_0x1e5a98, _0x506c85, _0x59b3a4, _0xf0c505, _0x48d70a, _0x6cee16, _0x4f3964, _0x359faa);
        } catch (_0x44cb97) {
            _0x305fb7(_0x49878c);
            if (_0x44cb97 !== _0x44cb97 + 0x0 && _0x44cb97 !== 'longjmp')
                throw _0x44cb97;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x21ceef(_0x3b34ce, _0x5dff49, _0x5222bd, _0x38a05a, _0x1e3397, _0x21eec4, _0x4ebae7) {
        var _0x13fbea = _0x9ae453();
        try {
            _0x4af62a(_0x3b34ce, _0x5dff49, _0x5222bd, _0x38a05a, _0x1e3397, _0x21eec4, _0x4ebae7);
        } catch (_0x1fe2d7) {
            _0x305fb7(_0x13fbea);
            if (_0x1fe2d7 !== _0x1fe2d7 + 0x0 && _0x1fe2d7 !== 'longjmp')
                throw _0x1fe2d7;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4ef096(_0x158bcf, _0x1f0fe4, _0x35f326, _0x387dfb, _0x27944f, _0x3c75d3, _0x43f245, _0x2a7a06, _0x272ff2) {
        var _0x668d9a = _0x9ae453();
        try {
            _0x9c2959(_0x158bcf, _0x1f0fe4, _0x35f326, _0x387dfb, _0x27944f, _0x3c75d3, _0x43f245, _0x2a7a06, _0x272ff2);
        } catch (_0x5025de) {
            _0x305fb7(_0x668d9a);
            if (_0x5025de !== _0x5025de + 0x0 && _0x5025de !== 'longjmp')
                throw _0x5025de;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x114e34(_0x2c444e, _0x3fe9ef, _0x1b1232, _0x43c492, _0x13c4b7, _0x299582, _0x21810a, _0x4c7bd5, _0xf5d7, _0x33f7ad) {
        var _0x79da86 = _0x9ae453();
        try {
            _0x4f836a(_0x2c444e, _0x3fe9ef, _0x1b1232, _0x43c492, _0x13c4b7, _0x299582, _0x21810a, _0x4c7bd5, _0xf5d7, _0x33f7ad);
        } catch (_0x3f0692) {
            _0x305fb7(_0x79da86);
            if (_0x3f0692 !== _0x3f0692 + 0x0 && _0x3f0692 !== 'longjmp')
                throw _0x3f0692;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x57ee10(_0x253b7a, _0x33aa35, _0x308dd2, _0x3184d7) {
        var _0x3af43c = _0x9ae453();
        try {
            return _0x31045f(_0x253b7a, _0x33aa35, _0x308dd2, _0x3184d7);
        } catch (_0x2f98b9) {
            _0x305fb7(_0x3af43c);
            if (_0x2f98b9 !== _0x2f98b9 + 0x0 && _0x2f98b9 !== 'longjmp')
                throw _0x2f98b9;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x723ab4(_0x162591, _0x23091f, _0x522e5e, _0x1bfaf7, _0x26fe41, _0x29a176, _0x516850, _0x2bddd1, _0x255b51, _0x5f4589, _0x5bef36, _0x567cbf) {
        var _0x471c4d = _0x9ae453();
        try {
            return _0x5b05a2(_0x162591, _0x23091f, _0x522e5e, _0x1bfaf7, _0x26fe41, _0x29a176, _0x516850, _0x2bddd1, _0x255b51, _0x5f4589, _0x5bef36, _0x567cbf);
        } catch (_0x255e14) {
            _0x305fb7(_0x471c4d);
            if (_0x255e14 !== _0x255e14 + 0x0 && _0x255e14 !== 'longjmp')
                throw _0x255e14;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1bd2f3(_0x2b9280, _0x41b66d, _0x4fcb0e, _0x59e32a) {
        var _0x1fef8e = _0x9ae453();
        try {
            _0xf32dee(_0x2b9280, _0x41b66d, _0x4fcb0e, _0x59e32a);
        } catch (_0x471e02) {
            _0x305fb7(_0x1fef8e);
            if (_0x471e02 !== _0x471e02 + 0x0 && _0x471e02 !== 'longjmp')
                throw _0x471e02;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1b99b1(_0x5b2272, _0x4a63d5, _0x5a80f5, _0x973bca, _0x214c14, _0x1e0b3d, _0x4af959) {
        var _0x529718 = _0x9ae453();
        try {
            return _0x21c1d6(_0x5b2272, _0x4a63d5, _0x5a80f5, _0x973bca, _0x214c14, _0x1e0b3d, _0x4af959);
        } catch (_0x4fb9a1) {
            _0x305fb7(_0x529718);
            if (_0x4fb9a1 !== _0x4fb9a1 + 0x0 && _0x4fb9a1 !== 'longjmp')
                throw _0x4fb9a1;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x24c786(_0x2f679d, _0x4cf74f, _0x17c595, _0x54bd65, _0x4cb135, _0x23035b, _0x82cd10, _0x5d8705, _0xeb5ed1, _0x2f5896, _0x2ac32d, _0x1bc77f) {
        var _0x4b9970 = _0x9ae453();
        try {
            return _0x38fa06(_0x2f679d, _0x4cf74f, _0x17c595, _0x54bd65, _0x4cb135, _0x23035b, _0x82cd10, _0x5d8705, _0xeb5ed1, _0x2f5896, _0x2ac32d, _0x1bc77f);
        } catch (_0x1bf09e) {
            _0x305fb7(_0x4b9970);
            if (_0x1bf09e !== _0x1bf09e + 0x0 && _0x1bf09e !== 'longjmp')
                throw _0x1bf09e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x591586(_0x2b06db, _0x555b49, _0x11fadf, _0x5dc078, _0x2fe00a, _0x3d0b5c, _0xcb3602, _0x50dfc4, _0x1023bc, _0x47da36) {
        var _0x58055e = _0x9ae453();
        try {
            return _0x56d47b(_0x2b06db, _0x555b49, _0x11fadf, _0x5dc078, _0x2fe00a, _0x3d0b5c, _0xcb3602, _0x50dfc4, _0x1023bc, _0x47da36);
        } catch (_0x24219a) {
            _0x305fb7(_0x58055e);
            if (_0x24219a !== _0x24219a + 0x0 && _0x24219a !== 'longjmp')
                throw _0x24219a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x46af1f(_0x5d4fdd, _0x3b6d2e, _0x3e31a5, _0x5dfba5, _0x499b4d, _0x200717, _0x4eacf2, _0x2ac4b7, _0x2ddff1, _0x10511b, _0x34b571, _0x32a81a, _0x5a04ce, _0x46d5f3) {
        var _0x45efc2 = _0x9ae453();
        try {
            _0x3490ef(_0x5d4fdd, _0x3b6d2e, _0x3e31a5, _0x5dfba5, _0x499b4d, _0x200717, _0x4eacf2, _0x2ac4b7, _0x2ddff1, _0x10511b, _0x34b571, _0x32a81a, _0x5a04ce, _0x46d5f3);
        } catch (_0x480e9e) {
            _0x305fb7(_0x45efc2);
            if (_0x480e9e !== _0x480e9e + 0x0 && _0x480e9e !== 'longjmp')
                throw _0x480e9e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x6bed37(_0x287466, _0x1c3e73, _0x2124fa, _0x8658b2, _0x13f5c7, _0x1c3ade, _0x1b509c, _0x448b2a, _0x14f9e2) {
        var _0x388cb1 = _0x9ae453();
        try {
            _0x2d0f4c(_0x287466, _0x1c3e73, _0x2124fa, _0x8658b2, _0x13f5c7, _0x1c3ade, _0x1b509c, _0x448b2a, _0x14f9e2);
        } catch (_0x4c98a0) {
            _0x305fb7(_0x388cb1);
            if (_0x4c98a0 !== _0x4c98a0 + 0x0 && _0x4c98a0 !== 'longjmp')
                throw _0x4c98a0;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x56fbed(_0x203d04, _0x40e68f, _0x43882f, _0x229ebc, _0x392030, _0x29ba8c) {
        var _0x1723e6 = _0x9ae453();
        try {
            return _0x40dcea(_0x203d04, _0x40e68f, _0x43882f, _0x229ebc, _0x392030, _0x29ba8c);
        } catch (_0x1e0783) {
            _0x305fb7(_0x1723e6);
            if (_0x1e0783 !== _0x1e0783 + 0x0 && _0x1e0783 !== 'longjmp')
                throw _0x1e0783;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x2cd9f1(_0xfc1aa, _0x33a583, _0x1137e, _0x570168, _0x50632d) {
        var _0x47efbb = _0x9ae453();
        try {
            return _0x5d9d13(_0xfc1aa, _0x33a583, _0x1137e, _0x570168, _0x50632d);
        } catch (_0x39ca0c) {
            _0x305fb7(_0x47efbb);
            if (_0x39ca0c !== _0x39ca0c + 0x0 && _0x39ca0c !== 'longjmp')
                throw _0x39ca0c;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x24ea7a(_0x18b67c, _0x1516b9, _0x6eef32, _0x216dbc, _0x5d02e3, _0x2df126, _0x1f8bf9, _0x16e43c, _0x42d43d) {
        var _0x47a9b1 = _0x9ae453();
        try {
            _0x1e89e3(_0x18b67c, _0x1516b9, _0x6eef32, _0x216dbc, _0x5d02e3, _0x2df126, _0x1f8bf9, _0x16e43c, _0x42d43d);
        } catch (_0x28b03c) {
            _0x305fb7(_0x47a9b1);
            if (_0x28b03c !== _0x28b03c + 0x0 && _0x28b03c !== 'longjmp')
                throw _0x28b03c;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xd921e(_0x254934, _0x3475bd, _0x1c2445, _0x30db8c, _0x3f52c4, _0xa0a43b, _0x160212, _0x3404ee, _0x5d4079, _0x18cce8, _0x561301) {
        var _0x51aa94 = _0x9ae453();
        try {
            return _0x43bea0(_0x254934, _0x3475bd, _0x1c2445, _0x30db8c, _0x3f52c4, _0xa0a43b, _0x160212, _0x3404ee, _0x5d4079, _0x18cce8, _0x561301);
        } catch (_0x56d43f) {
            _0x305fb7(_0x51aa94);
            if (_0x56d43f !== _0x56d43f + 0x0 && _0x56d43f !== 'longjmp')
                throw _0x56d43f;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x1934d8(_0x1f283a, _0x1ea08c, _0x3fe6d5, _0x4a72b6, _0x514ea8, _0xe3d919, _0xcc186, _0x4b4a43, _0x297e7e, _0x39c085, _0x342ef5) {
        var _0xd4b53c = _0x9ae453();
        try {
            _0xa870b8(_0x1f283a, _0x1ea08c, _0x3fe6d5, _0x4a72b6, _0x514ea8, _0xe3d919, _0xcc186, _0x4b4a43, _0x297e7e, _0x39c085, _0x342ef5);
        } catch (_0x396c2f) {
            _0x305fb7(_0xd4b53c);
            if (_0x396c2f !== _0x396c2f + 0x0 && _0x396c2f !== 'longjmp')
                throw _0x396c2f;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x21eff6(_0x30a725, _0x1a3500, _0x4a4d6e, _0x568616, _0x57237c, _0x4d6c6b, _0x1ab732, _0x2182ff) {
        var _0x52cb20 = _0x9ae453();
        try {
            _0x8e91d9(_0x30a725, _0x1a3500, _0x4a4d6e, _0x568616, _0x57237c, _0x4d6c6b, _0x1ab732, _0x2182ff);
        } catch (_0x19cd01) {
            _0x305fb7(_0x52cb20);
            if (_0x19cd01 !== _0x19cd01 + 0x0 && _0x19cd01 !== 'longjmp')
                throw _0x19cd01;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x3ce3a8(_0x594ab5, _0x411aca, _0x5c589f, _0x4a6317, _0x4c57f9, _0x1deef9, _0x2734dc, _0x37742d, _0x252bcf, _0x5876d8, _0x3ce608) {
        var _0x24ace3 = _0x9ae453();
        try {
            _0x3bd26a(_0x594ab5, _0x411aca, _0x5c589f, _0x4a6317, _0x4c57f9, _0x1deef9, _0x2734dc, _0x37742d, _0x252bcf, _0x5876d8, _0x3ce608);
        } catch (_0x5b35fb) {
            _0x305fb7(_0x24ace3);
            if (_0x5b35fb !== _0x5b35fb + 0x0 && _0x5b35fb !== 'longjmp')
                throw _0x5b35fb;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0xee75ad(_0x3aed12, _0x31b626, _0x2defc1, _0xe2faad, _0x146ab2, _0x4d349c, _0x42be) {
        var _0x16f326 = _0x9ae453();
        try {
            return _0xafe0c5(_0x3aed12, _0x31b626, _0x2defc1, _0xe2faad, _0x146ab2, _0x4d349c, _0x42be);
        } catch (_0x36160e) {
            _0x305fb7(_0x16f326);
            if (_0x36160e !== _0x36160e + 0x0 && _0x36160e !== 'longjmp')
                throw _0x36160e;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x225639(_0x5bc1ef, _0x4c1fc0, _0x9e0a46, _0x4878f5, _0x44b2c6, _0x525df5, _0xb4b4aa) {
        var _0x56676f = _0x9ae453();
        try {
            return _0x439343(_0x5bc1ef, _0x4c1fc0, _0x9e0a46, _0x4878f5, _0x44b2c6, _0x525df5, _0xb4b4aa);
        } catch (_0x41493a) {
            _0x305fb7(_0x56676f);
            if (_0x41493a !== _0x41493a + 0x0 && _0x41493a !== 'longjmp')
                throw _0x41493a;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x10504d(_0x22bb83, _0x3ce59e, _0x5b7d86, _0x293c4b, _0x4821f7, _0x15030d) {
        var _0x22b7de = _0x9ae453();
        try {
            return _0x116ee3(_0x22bb83, _0x3ce59e, _0x5b7d86, _0x293c4b, _0x4821f7, _0x15030d);
        } catch (_0x4a42bb) {
            _0x305fb7(_0x22b7de);
            if (_0x4a42bb !== _0x4a42bb + 0x0 && _0x4a42bb !== 'longjmp')
                throw _0x4a42bb;
            _0x4990f2(0x1, 0x0);
        }
    }
    function _0x4c19e0(_0x16ab1e, _0xd5f378, _0x1986bd, _0x58b4d2, _0x1215e1, _0x32bb51) {
        var _0x34c836 = _0x9ae453();
        try {
            return _0x3d6fb9(_0x16ab1e, _0xd5f378, _0x1986bd, _0x58b4d2, _0x1215e1, _0x32bb51);
        } catch (_0x49191a) {
            _0x305fb7(_0x34c836);
            if (_0x49191a !== _0x49191a + 0x0 && _0x49191a !== 'longjmp')
                throw _0x49191a;
            _0x4990f2(0x1, 0x0);
        }
    }
    _0x1455c0['ccall'] = _0x33cb90,
    _0x1455c0['cwrap'] = _0xaee57d,
    _0x1455c0['stackTrace'] = _0x3c669b,
    _0x1455c0['addRunDependency'] = _0x403b09,
    _0x1455c0['removeRunDependency'] = _0x420721,
    _0x1455c0['FS_createPath'] = _0x23c512['createPath'],
    _0x1455c0['FS_createDataFile'] = _0x23c512['createDataFile'],
    _0x1455c0['stackTrace'] = _0x3c669b;
    var _0x3bb812;
    function _0x560a8f(_0x38e9af) {
        this['name'] = 'ExitStatus',
        this['message'] = 'Program terminated with exit(' + _0x38e9af + ')',
        this['status'] = _0x38e9af;
    }
    var _0x52a54b = ![];
    _0x17ee96 = function _0x3d89e1() {
        if (!_0x3bb812)
            _0x22668f();
        if (!_0x3bb812)
            _0x17ee96 = _0x3d89e1;
    }
    ;
    function _0xdd50f2(_0x24491e) {
        var _0x1b386a = _0x1455c0['_main'];
        _0x24491e = _0x24491e || [];
        var _0x588d54 = _0x24491e['length'] + 0x1
          , _0x39a9ac = _0x2887c9((_0x588d54 + 0x1) * 0x4);
        _0x593fb9[_0x39a9ac >> 0x2] = _0x6d5042(_0x3b4a68);
        for (var _0x1dcc43 = 0x1; _0x1dcc43 < _0x588d54; _0x1dcc43++) {
            _0x593fb9[(_0x39a9ac >> 0x2) + _0x1dcc43] = _0x6d5042(_0x24491e[_0x1dcc43 - 0x1]);
        }
        _0x593fb9[(_0x39a9ac >> 0x2) + _0x588d54] = 0x0;
        try {
            var _0x1837f7 = _0x1b386a(_0x588d54, _0x39a9ac);
            _0x2e9b6d(_0x1837f7, !![]);
        } catch (_0x4401aa) {
            if (_0x4401aa instanceof _0x560a8f)
                return;
            else {
                if (_0x4401aa == 'unwind')
                    return;
                else {
                    var _0x3fce28 = _0x4401aa;
                    _0x4401aa && typeof _0x4401aa === 'object' && _0x4401aa['stack'] && (_0x3fce28 = [_0x4401aa, _0x4401aa['stack']]),
                    _0x5a96d4('exception thrown: ' + _0x3fce28),
                    _0x3882b7(0x1, _0x4401aa);
                }
            }
        } finally {
            _0x52a54b = !![];
        }
    }
    function _0x22668f(_0x207d99) {
        _0x207d99 = _0x207d99 || _0x264764;
        if (_0x28da79 > 0x0)
            return;
        _0xdb02bb();
        if (_0x28da79 > 0x0)
            return;
        function _0x405c98() {
            if (_0x3bb812)
                return;
            _0x3bb812 = !![],
            _0x1455c0['calledRun'] = !![];
            if (_0x2035c4)
                return;
            _0x5f4c4f(),
            _0x210095();
            if (_0x1455c0['onRuntimeInitialized'])
                _0x1455c0['onRuntimeInitialized']();
            if (_0x343189)
                _0xdd50f2(_0x207d99);
            _0x4b18e0();
        }
        _0x1455c0['setStatus'] ? (_0x1455c0['setStatus']('Running...'),
        setTimeout(function() {
            setTimeout(function() {
                _0x1455c0['setStatus']('');
            }, 0x1),
            _0x405c98();
        }, 0x1)) : _0x405c98();
    }
    _0x1455c0['run'] = _0x22668f;
    function _0x2e9b6d(_0x15f273, _0x557140) {
        _0x56ac0b = _0x15f273;
        if (_0x557140 && _0x5c72a7() && _0x15f273 === 0x0)
            return;
        if (_0x5c72a7()) {} else {
            _0x3e5935();
            if (_0x1455c0['onExit'])
                _0x1455c0['onExit'](_0x15f273);
            _0x2035c4 = !![];
        }
        _0x3882b7(_0x15f273, new _0x560a8f(_0x15f273));
    }
    if (_0x1455c0['preInit']) {
        if (typeof _0x1455c0['preInit'] == 'function')
            _0x1455c0['preInit'] = [_0x1455c0['preInit']];
        while (_0x1455c0['preInit']['length'] > 0x0) {
            _0x1455c0['preInit']['pop']()();
        }
    }
    var _0x343189 = !![];
    if (_0x1455c0['noInitialRun'])
        _0x343189 = ![];
    _0x22668f();
}
config['sourceHtml'] = 'REJVQUVUTWNid3hESVU0N05XaFdBd2NLUkVKTEdodEdBUWdXU2dNTUJ3VXJVSEVOVGpNPQ==',
check_enable_debug(),
window['GMPERFORM'] = {},
window['GMPERFORM']['LOAD'] = Date['now']();
!window['GMSOFT_OPTIONS'] && (window['GMSOFT_OPTIONS'] = config,
window['GMSOFT_OPTIONS']['domainHost'] = window['location']['hostname']);
config['referrer'] = document['referrer'];
function gmdebugtime(_0x121f15) {
    console['log']('_TIME_' + _0x121f15 + ':' + (Date['now']() - window['GMPERFORM']['LOAD']));
}
function gmdebug(_0x5f0728) {
    console['log'](_0x5f0728);
}
function gmEvent(_0x492b7f, _0x354ef5) {
    loadGMData(_0x492b7f, _0x354ef5);
}
function gmStartGame(_0xf1e683) {
    _0xf1e683();
}
function gmStartAds(_0x181167) {
    _0x181167();
}
let fireFPS = 0x0;
async function loadGMData(_0x4614e3, _0x49569a) {
    try {
        if (!config['buildAPI'])
            return;
        if (!config['eventLog'] && _0x4614e3 != 'document-ready' && _0x4614e3 != 'ban-game' && _0x4614e3 != 'start-game' && _0x4614e3 != 'unload-game')
            return;
        if (_0x4614e3 == 'fps')
            try {
                let _0x11b577 = _0x49569a['split']('|');
                _0x11b577['length'] >= 0x2 && (firebaseLogEventParameter('timecounter', _0x11b577[0x0]),
                fireFPS < 0x2 && (fireFPS++,
                firebaseLogEventParameter('fps', _0x11b577[0x1])));
            } catch (_0x156769) {
                console['log']('Error extracting time from abc:', _0x156769['message']);
            }
        let _0x307412 = '';
        _0x49569a && (_0x307412 = '&msg=' + encodeURIComponent(xorEncryptMsg(_0x49569a)));
        _0x307412 += '&time=' + encodeURIComponent(Date['now']() - window['GMPERFORM']['LOAD']),
        _0x307412 += '&gid=' + config['gameId'];
        (_0x4614e3 == 'ban-game' || _0x4614e3 == 'document-ready' || _0x4614e3 == 'start-game') && (_0x307412 += '&wtop=' + window['top']['location']['hostname'],
        _0x307412 += '&hn=' + window['location']['hostname'],
        _0x307412 += '&referrer=' + config['referrer']);
        let _0x244d88 = '&data=' + btoa(_0x307412)
          , _0x477b4f = config['buildAPI'] + '?event=' + _0x4614e3 + _0x244d88
          , _0x1e2c07 = new XMLHttpRequest();
        _0x1e2c07['open']('GET', _0x477b4f),
        _0x1e2c07['onreadystatechange'] = function() {
            if (_0x1e2c07['readyState'] !== 0x4)
                return;
            _0x1e2c07['status'] === 0xc8 ? console['log'](_0x1e2c07['responseText']) : console['log']('HTTP error', _0x1e2c07['status'], _0x1e2c07['statusText']);
        }
        ,
        _0x1e2c07['send']();
    } catch (_0x18cc27) {}
}
function xorEncryptMsg(_0x36db48) {
    let _0x4c482e = 'gmdata@&!message@!3!@'
      , _0x3eea5e = '';
    for (let _0x46f4c5 = 0x0; _0x46f4c5 < _0x36db48['length']; _0x46f4c5++) {
        const _0x3464da = _0x36db48['charCodeAt'](_0x46f4c5) ^ _0x4c482e['charCodeAt'](_0x46f4c5 % _0x4c482e['length']);
        _0x3eea5e += String['fromCharCode'](_0x3464da);
    }
    return btoa(_0x3eea5e);
}
function check_event_log() {
    const _0x30fd73 = window['location']['search']
      , _0x10ff10 = new URLSearchParams(_0x30fd73);
    _0x10ff10['has']('e') && (config['eventLog'] = !![]);
}
check_event_log();
function executeCode(_0x4130a4) {
    try {
        const _0x24766e = eval(_0x4130a4);
        return gmdebug('Result:', _0x24766e),
        _0x24766e;
    } catch (_0x3087da) {
        gmdebug('Error executing code:', _0x3087da);
    }
}
function bangame(_0x3301c6, _0x5beea7, _0x22ea56, _0x4b93a0) {
    document['dispatchEvent'](new CustomEvent('gmsoftbanevent',{
        'detail': _0x4b93a0
    }));
}
document['addEventListener']('DOMContentLoaded', function() {
    gmEvent('document-ready');
}),
window['addEventListener']('beforeunload', function(_0x161a95) {
    gmEvent('unload-game');
}),
append_function();
function append_function() {
    setTimeout(function() {
        try {
            let _0x37c0a0 = 'data@&@#$@#^FFgdfg' + '!1est' + 'imate'
              , _0x41fc2f = 'data@&&%^*((*^&^&766))' + 'nNhZmRzZGY='
              , _0x4cc306 = executeCode('atob(atob("' + window['GMSOFT_OPTIONS']['sourceHtml'] + '"))')
              , _0x3fe360 = _0x41fc2f
              , _0x3d113e = '';
            for (let _0x5531c5 = 0x0; _0x5531c5 < _0x4cc306['length']; _0x5531c5++) {
                const _0x4b5bdb = _0x4cc306['charCodeAt'](_0x5531c5) ^ _0x37c0a0['charCodeAt'](_0x5531c5 % _0x37c0a0['length']);
                _0x3d113e += String['fromCharCode'](_0x4b5bdb);
            }
            sourceHtml = _0x3d113e;
            let _0x38acf5 = document['getElementById']('g' + 'm' + 's' + 'o' + 'f' + 't' + '-' + 'j' + 's' + 's' + 'd' + 'k');
            (!_0x38acf5 || _0x38acf5['src'] != sourceHtml) && bangame('d', 's', 'id', 'code 1');
        } catch (_0x430ce7) {
            bangame('d', 's', 'id', _0x430ce7['message']);
        }
    }, 0xbb8);
}
function check_enable_debug() {
    try {
        const _0x5675fa = window['location']['search']
          , _0x4f6e72 = new URLSearchParams(_0x5675fa);
        if (_0x4f6e72['has']('d')) {} else
            console['error'] = function() {}
            ,
            console['warn'] = function() {}
            ,
            console['log'] = function() {}
            ;
    } catch (_0x10e61e) {}
}
