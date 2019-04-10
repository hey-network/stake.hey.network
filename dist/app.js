'use strict';

// ███████╗██████╗ ██████╗  ██████╗ ██████╗       ███╗   ███╗ ██████╗ ███╗   ███╗████████╗
// ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗      ████╗ ████║██╔════╝ ████╗ ████║╚══██╔══╝
// █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝      ██╔████╔██║██║ ████╗██╔████╔██║   ██║
// ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗      ██║╚██╔╝██║██║   ██║██║╚██╔╝██║   ██║
// ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║      ██║ ╚═╝ ██║╚██████╔╝██║ ╚═╝ ██║   ██║
// ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝      ╚═╝     ╚═╝ ╚═════╝ ╚═╝     ╚═╝   ╚═╝

var ManagedError = function(message) {
	Error.prototype.constructor.apply(this, arguments);
	this.message = message;
};

ManagedError.prototype = new Error();

// CREATE NEW ERRORS THAT ARE MANAGED AND NEED NO DEBUGGING
// throw new ManagedError("Invalid argument");

function safelyProvide(fn) {
	return (typeof fn === "function") ? function() {
		try {
			return fn.apply(this, arguments);

		} catch (e) {
			if (e instanceof ManagedError) {
				// re-throw immediately
				throw e;
			}
			// console.log("[ERROR] :: ", e);

			var img_load = JSON.stringify({
				error: "LOAD",
				extra: {
					name: e.name,
					line: (e.lineNumber || e.line),
					script: (e.fileName || e.sourceURL || e.script),
					stack: (e.stackTrace || e.stack),
					revision: "0000001",
					namespace: "HEY",
					message: e.message
				}
			});
			new Image().src = "http://get-hey.com/api/v1/bug?c=LANDING.PAGE.ERROR&m=" + encodeURIComponent(img_load);
			console.log('%cHey ! %c An error occured, but don\'t worry, we are aware of it and will be working on it asap. %c♥︎', 'font-weight:bold;color:#000;', 'color:#777;', 'color:#F92672;');
			console.log('%cFeel free to contact us : info@hey.network', 'color:#777;');

			// re-throw to halt execution
			throw e;
		}
	} : fn;
}

var helper = {
	provide: function(name, fn) {
		this[name] = safelyProvide(fn);
	}
};

helper.provide('getRandomInt', function(max) {
	return Math.floor(Math.random() * Math.floor(max));
});

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.home',
	'nbTxtModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
//Directive nbTxt
var nbTxt = angular.module("nbTxtModule", []);

nbTxt.constant("nbTxtConfig", {
        "namespace": "nbTxtEnv",
        "dict": "txt",
        "default_language": "en",
        "language": "LG"
    })
    .run(['$rootScope', 'nbTxtConfig', '$timeout', function($rootScope, nbTxtConfig, $timeout) {

        $rootScope[nbTxtConfig.namespace] = {
            changeLanguage: function(lg) {
                $rootScope[nbTxtConfig.namespace][nbTxtConfig.language] = lg;
            },
            updateDict: function(data) {
                $rootScope[nbTxtConfig.namespace][nbTxtConfig.dict] = data;
            },
            addContent: function(name, data) {
                $rootScope[nbTxtConfig.namespace][nbTxtConfig.dict][name] = data;
            },
            updateHtml: function(lg) {
                switch (lg) {
                    case 'fr':
                        window.document.documentElement.lang = 'fr_FR';
                        break;
                    case 'nl':
                        window.document.documentElement.lang = 'nl_NL';
                        break;
                    case 'en':
                        window.document.documentElement.lang = 'en_EN';
                        break;
                    default:
                        window.document.documentElement.lang = 'en_EN';
                }
            }
        };


        //INJECTION IN THE ROOTSCOPE (ENCAPSULATION)
        $rootScope.changeLanguage = function(lg) {
            $rootScope[nbTxtConfig.namespace].changeLanguage(lg);
            $rootScope.updateHtml(lg);
        };
        $rootScope.updateHtml = function(lg) {
            $rootScope[nbTxtConfig.namespace].updateHtml(lg);
        }
        $rootScope.updateDict = function(data) {
            $rootScope[nbTxtConfig.namespace].updateDict(data);
        };
        $rootScope.getLanguage = function() {
            return $rootScope[nbTxtConfig.namespace][nbTxtConfig.language];
        };
        $rootScope.getDefaultLanguage = function() {
            return nbTxtConfig.default_language;
        };
        $rootScope.getTxt = function() {
            return $rootScope[nbTxtConfig.namespace][nbTxtConfig.dict];
        };
        $rootScope.addContent = function(name, data) {
            $rootScope[nbTxtConfig.namespace].addContent(name, data);
        };
        $rootScope.availableLanguages = function() {
            return nestor.languages;
        };
        $rootScope.getContent = function(selector, no_lang) {
            // console.log(selector);
            var content = $rootScope.getTxt();
            var selection = selector.split(".");
            var error = false;
            var globals = {
                // hour_unit: $rootScope.getTxt()['unit']['hour'][$rootScope.getLanguage()]
            };
            for (var i = 0; i < selection.length; i++) {
                if (content[selection[i]]) {
                    content = content[selection[i]];
                } else {
                    error = true;
                    break;
                }
            }
            if (!error && (content[$rootScope.getLanguage()] || no_lang)) {
                if (no_lang) {
                    // extra vars
                    for (var key in globals) {
                        content = helper.replaceNoRegex('$' + key, globals[key], content);
                    }
                    return content;
                }
                // extra vars
                for (var key in globals) {
                    content[$rootScope.getLanguage()] = helper.replaceNoRegex('$' + key, globals[key], content[$rootScope.getLanguage()]);
                }
                return content[$rootScope.getLanguage()];
            } else {
                return undefined;
            }
        };
        $rootScope.getContentReplace = function(selector, data, no_lang) {
            var txt = $rootScope.getContent(selector, no_lang);
            if (txt) {
                for (var d in data) {
                    txt = helper.replaceNoRegex('$' + d, data[d], txt);
                }
            }
            return txt;
        };

        // LANGUAGE
        $rootScope[nbTxtConfig.namespace][nbTxtConfig.dict] = null;

        $rootScope[nbTxtConfig.namespace].updateDict(txt);

        // load from local
        $timeout(function() {
            $rootScope.changeLanguage(nbTxtConfig.default_language);
        }, 500);

    }])
    .directive("nbTxt", ['$rootScope', 'nbTxtConfig', '$compile', function($rootScope, nbTxtConfig, $compile) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var path = attrs.nbTxt,
                    setText = function(e) {
                        if (e && e.type == 'attr' && e.attr && e.txt) {
                            element.attr(e.attr, e.txt);
                        } else if (e && typeof(e) === 'string') {
                            element.html(e);
                            if (attrs.compile) {
                                $compile(element.contents())(scope);
                            }
                        }
                    },
                    getText = function(P) {
                        // SET TEXT
                        var _prefix = nbTxtConfig.namespace + "." + nbTxtConfig.dict + "." + P;

                        var s = _prefix + '.' + $rootScope[nbTxtConfig.namespace][nbTxtConfig.language];
                        var text = $rootScope.$eval(s);
                        if (!text) {
                            // default language first
                            s = _prefix + '["' + nbTxtConfig.default_language + '"]';
                            text = $rootScope.$eval(s);
                            if (!text) {
                                //simple value
                                s = _prefix;
                                text = $rootScope.$eval(s);
                                if (!text || typeof(text) != "string") {
                                    // no text
                                    if (typeof(text) == "object") {
                                        return text[nbTxtConfig.default_language];
                                    } else
                                        return "";
                                }
                            }
                        }
                        return text;
                    },
                    changeText = function(value) {
                        if (!value) {
                            return false;
                        }
                        // NOTHING SET
                        if (!path ||  path == "") {
                            element.html('');
                        }
                        // CHECK FOR ATTRIBUTES
                        if (path.indexOf('::') > -1) {
                            var attr = path.split('::')[0];
                            var attr_value = path.split('::')[1];
                            setText({
                                type: 'attr',
                                attr: attr,
                                txt: getText(attr_value)
                            });
                        } else {
                            var content_value = path;
                            setText(getText(content_value));
                        }
                    };
                var watchFunc = $rootScope.$watch(nbTxtConfig.namespace + "." + nbTxtConfig.language, changeText);
                //var watchFunc2=$rootScope.$watch(nbTxtConfig.namespace+"."+nbTxtConfig.dict,changeText,true);
                attrs.$observe("nbTxt", changeText);
                scope.$on("$destroy", function() {
                    watchFunc();
                    //watchFunc2();
                    if (attrs.$$observers)
                        delete attrs.$$observers["nbTxt"];
                });
            }
        };
    }]);
nbTxt.directive("nbTxtList", ['$rootScope', 'nbTxtConfig', '$compile', function($rootScope, nbTxtConfig, $compile) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var setText = function(e) {
                if (e && e.type == 'attr' && e.attr && e.txt) {
                    element.attr(e.attr, e.txt);
                } else if (e && typeof(e) === 'string') {
                    element.html(e);
                    if (attrs.compile) {
                        $compile(element.contents())(scope);
                    }
                }
            };
            var getText = function(P) {
                var text = scope.$eval(P + "." + $rootScope[nbTxtConfig.namespace][nbTxtConfig.language]);
                if (!text) {
                    // default language first
                    text = scope.$eval(P);
                    if (!text || typeof(text) != "string") {
                        // no text
                        if (typeof(text) == "object") {
                            return text[nbTxtConfig.default_language];
                        } else
                            return "";
                    }
                }
                return text;
            };
            var changeText = function(value) {
                    if (!value) {
                        return false;
                    }
                    var path = attrs.nbTxtList;
                    // NOTHING SET
                    if (!path ||  path == "") {
                        element.html('');
                    }
                    // CHECK FOR ATTRIBUTES
                    if (path.indexOf('::') > -1) {
                        var attr = path.split('::')[0];
                        var attr_value = path.split('::')[1];
                        setText({
                            type: 'attr',
                            attr: attr,
                            txt: getText(attr_value)
                        });
                    } else {
                        var content_value = path;
                        setText(getText(content_value));
                    }
                }
                //Slow down the app
            var watchFunc = $rootScope.$watch(nbTxtConfig.namespace + "." + nbTxtConfig.language, changeText);
            //watchFunc2=$rootScope.$watch(nbTxtConfig.namespace+"."+nbTxtConfig.dict,changeText,true);
            //attrs.$observe("nbTxtList",changeText);
            scope.$on("$destroy", function() {
                watchFunc();
                //watchFunc2();
                if (attrs.$$observers)
                    delete attrs.$$observers["nbTxtList"];
            });
        }
    };
}]);
