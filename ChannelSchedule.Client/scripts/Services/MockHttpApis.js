var JustinCredible;
(function (JustinCredible) {
    var SampleApp;
    (function (SampleApp) {
        var Services;
        (function (Services) {
            /**
             * Provides mock responses for HTTP requests.
             *
             * This can be useful for unit testing or demoing or developing applications
             * without a live internet connection or access to the HTTP APIs.
             */
            var MockHttpApis = (function () {
                function MockHttpApis($httpBackend) {
                    this.$httpBackend = $httpBackend;
                }
                Object.defineProperty(MockHttpApis, "$inject", {
                    get: function () {
                        return [
                            "$httpBackend"
                        ];
                    },
                    enumerable: true,
                    configurable: true
                });
                //#endregion
                //#region Public API
                /**
                 * Used to setup a random delay time for mock HTTP requests.
                 *
                 * @param $provide The provider service which will be used to obtain and decorate the httpBackend service.
                 */
                MockHttpApis.setupMockHttpDelay = function ($provide) {
                    var maxDelay = 3000, minDelay = 1000;
                    // Example taken from the following blog post:
                    // http://endlessindirection.wordpress.com/2013/05/18/angularjs-delay-response-from-httpbackend/
                    $provide.decorator("$httpBackend", function ($delegate) {
                        var proxy = function (method, url, data, callback, headers) {
                            var interceptor = function () {
                                var _this = this, _arguments = arguments, delay;
                                if (url.indexOf(".html") > -1) {
                                    // Don't apply a delay for templates.
                                    callback.apply(_this, _arguments);
                                }
                                else {
                                    // http://jsfiddle.net/alanwsmith/GfAhy/
                                    delay = Math.floor(Math.random() * (maxDelay - minDelay + 1) + minDelay);
                                    setTimeout(function () {
                                        callback.apply(_this, _arguments);
                                    }, delay);
                                }
                            };
                            return $delegate.call(this, method, url, data, interceptor, headers);
                        };
                        /* tslint:disable:forin */
                        for (var key in $delegate) {
                            proxy[key] = $delegate[key];
                        }
                        /* tslint:enable:forin */
                        return proxy;
                    });
                };
                /**
                 * Used to mock the responses for the $http service. Useful when debugging
                 * or demo scenarios when a backend is not available.
                 *
                 * This can only be called once per page (ie on page load). Subsequent calls
                 * will not remove existing mock rules.
                 *
                 * @param mock True to mock API calls, false to let them pass through normally.
                 */
                MockHttpApis.prototype.mockHttpCalls = function (mock) {
                    // Always allow all requests for templates to go through.
                    this.$httpBackend.whenGET(/.*\.html/).passThrough();
                    if (mock) {
                    }
                    else {
                        // Allow ALL HTTP requests to go through.
                        this.$httpBackend.whenDELETE(/.*/).passThrough();
                        this.$httpBackend.whenGET(/.*/).passThrough();
                        //this.$httpBackend.whenHEAD(/.*/).passThrough(); //TODO The ts.d includes whenHEAD but this version of Angular doesn't?
                        this.$httpBackend.whenJSONP(/.*/).passThrough();
                        this.$httpBackend.whenPATCH(/.*/).passThrough();
                        this.$httpBackend.whenPOST(/.*/).passThrough();
                        this.$httpBackend.whenPUT(/.*/).passThrough();
                    }
                };
                //#region Injection
                MockHttpApis.ID = "MockHttpApis";
                return MockHttpApis;
            })();
            Services.MockHttpApis = MockHttpApis;
        })(Services = SampleApp.Services || (SampleApp.Services = {}));
    })(SampleApp = JustinCredible.SampleApp || (JustinCredible.SampleApp = {}));
})(JustinCredible || (JustinCredible = {}));
//# sourceMappingURL=MockHttpApis.js.map