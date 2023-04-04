"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-ignore
if (!window.Ylide) {
    var STYLES_1 = "\niframe.ylide-iframe {\n\twidth: 100%;\n\theight: 100%;\n\tborder: 0;\n}\n\n.ylide-send-message-popup {\n\tposition: fixed;\n    right: 36px;\n    bottom: 0;\n    width: 500px;\n    height: 520px;\n    max-width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    background: #f7f7ee;\n    border-radius: 8px 8px 0 0;\n    box-shadow: rgba(26, 179, 148, 0.4) 4px 4px 24px, rgba(151, 71, 255, 0.25) -16px -8px 64px;\n    transition: all 200ms;\n}\n\n.ylide-floating-button {\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n    position: fixed;\n    right: 36px;\n    bottom: 36px;\n    width: 48px;\n    height: 48px;\n    color: #111;\n    background: #ebe2f9;\n    border-radius: 100%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 20px;\n    cursor: pointer;\n}\n\n.ylide-floating-button_active {\n    color: #fff;\n    background: #9747ff;\n}\n\n.ylide-floating-button svg {\n\tfill: currentColor;\n}\n\n.ylide-mailbox-popup {\n\tposition: fixed;\n    right: 36px;\n    bottom: 0;\n    width: 500px;\n    height: 520px;\n    max-width: 100%;\n    overflow: hidden;\n    background: #f7f7ee;\n    border-radius: 8px 8px 0 0;\n    box-shadow: rgba(26, 179, 148, 0.4) 4px 4px 24px, rgba(151, 71, 255, 0.25) -16px -8px 64px;\n    transition: all 200ms;\n}\n\n.ylide-mailbox-popup-close {\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n    position: fixed;\n    right: 24px;\n    bottom: 504px;\n    width: 32px;\n    height: 32px;\n    color: #fff;\n    background: #9747ff;\n    border-radius: 100%;\n    box-shadow: rgba(151, 71, 255, 0.5) 2px 2px 16px;\n    cursor: pointer;\n}\n\n@media (max-width: 640px), (max-height: 640px) {\n\t.ylide-send-message-popup {\n\t\tright: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 0;\n\t}\n  \n  \t.ylide-mailbox-popup {\n\t\ttop: 0;\n\t\tright: 0;\n\t\twidth: 100%;\n    \theight: auto;\n\t\tborder-radius: 0;\n  \t}\n  \t\n  \t.ylide-mailbox-popup-close {\n\t\tright: 36px;\n\t\tbottom: 36px;\n\t\twidth: 48px;\n\t\theight: 48px;\n\t}\n}\n\t";
    var YLIDE_LOGO_SVG_1 = "\n<svg width=\"28\" height=\"28\" viewBox=\"0 0 28 28\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path d=\"M0 7.92434C0 6.65706 1.02734 5.62972 2.29463 5.62972H2.45212C3.7194 5.62972 4.74674 6.65706 4.74674 7.92434C4.74674 9.19163 3.7194 10.219 2.45212 10.219H2.29462C1.02734 10.219 0 9.19163 0 7.92434Z\"></path>\n\t<path d=\"M5.8037 2.29462C5.8037 1.02734 6.83104 0 8.09833 0H8.25582C9.52311 0 10.5504 1.02734 10.5504 2.29462C10.5504 3.56191 9.52311 4.58925 8.25582 4.58925H8.09833C6.83104 4.58925 5.8037 3.56191 5.8037 2.29462Z\"></path>\n\t<path d=\"M17.4496 2.29462C17.4496 1.02734 18.4769 0 19.7442 0H19.9017C21.169 0 22.1963 1.02734 22.1963 2.29462C22.1963 3.56191 21.169 4.58925 19.9017 4.58925H19.7442C18.4769 4.58925 17.4496 3.56191 17.4496 2.29462Z\"></path>\n\t<path d=\"M23.2533 7.92434C23.2533 6.65706 24.2806 5.62972 25.5479 5.62972H25.7054C26.9727 5.62972 28 6.65706 28 7.92434C28 9.19163 26.9727 10.219 25.7054 10.219H25.5479C24.2806 10.219 23.2533 9.19163 23.2533 7.92434Z\"></path>\n\t<path d=\"M17.4496 13.5912C17.4496 12.3239 18.4769 11.2966 19.7442 11.2966H19.9017C21.169 11.2966 22.1963 12.3239 22.1963 13.5912C22.1963 14.8585 21.169 15.8859 19.9017 15.8859H19.7442C18.4769 15.8859 17.4496 14.8585 17.4496 13.5912Z\"></path>\n\t<path d=\"M11.6266 7.92434C11.6266 6.65706 12.654 5.62972 13.9213 5.62972H14.0787C15.346 5.62972 16.3734 6.65706 16.3734 7.92434C16.3734 9.19163 15.346 10.219 14.0787 10.219H13.9213C12.654 10.219 11.6266 9.19163 11.6266 7.92434Z\"></path>\n\t<path d=\"M11.6266 19.1281C11.6266 17.8608 12.654 16.8334 13.9213 16.8334H14.0787C15.346 16.8334 16.3734 17.8608 16.3734 19.1281C16.3734 20.3954 15.346 21.4227 14.0787 21.4227H13.9213C12.654 21.4227 11.6266 20.3954 11.6266 19.1281Z\"></path>\n\t<path d=\"M5.8037 13.5912C5.8037 12.3239 6.83104 11.2966 8.09833 11.2966H8.25582C9.52311 11.2966 10.5504 12.3239 10.5504 13.5912C10.5504 14.8585 9.52311 15.8859 8.25582 15.8859H8.09833C6.83104 15.8859 5.8037 14.8585 5.8037 13.5912Z\"></path>\n\t<path d=\"M12.8488 5.91723L10.2707 3.42295V3.37635C10.0478 3.77876 9.70441 4.10944 9.28715 4.32331H9.33959L11.9169 6.8168V6.82378C12.1325 6.4431 12.4566 6.12798 12.8488 5.91723Z\"></path>\n\t<path d=\"M17.7472 3.42295V3.40806C17.9703 3.79613 18.3066 4.11508 18.7128 4.32331H18.6783L16.101 6.8168V6.85599C15.887 6.46348 15.5588 6.13821 15.1591 5.92153H15.1646L17.7472 3.42295Z\"></path>\n\t<path d=\"M13.3511 10.1322V16.9203C13.5573 16.8637 13.775 16.8334 14 16.8334C14.232 16.8334 14.4562 16.8656 14.6681 16.9256V10.1268C14.4562 10.1868 14.232 10.219 14 10.219C13.775 10.219 13.5573 10.1887 13.3511 10.1322Z\"></path>\n\t<path d=\"M12.7941 17.1513L10.2628 14.7035V14.6871C10.0427 15.0779 9.70845 15.4 9.30341 15.6115H9.33959L11.8891 18.0781C12.0945 17.6928 12.4095 17.3711 12.7941 17.1513Z\"></path>\n\t<path d=\"M6.08007 12.4596V12.5156C6.30137 12.1132 6.64299 11.782 7.05855 11.5669H7.01775L4.43265 9.06589C4.20471 9.44942 3.86545 9.76324 3.45749 9.96613H3.50142L6.08007 12.4596Z\"></path>\n\t<path d=\"M13.3511 21.3359V28H14.6681V21.3305C14.4562 21.3905 14.232 21.4227 14 21.4227C13.775 21.4227 13.5573 21.3924 13.3511 21.3359Z\"></path>\n\t<path d=\"M16.1165 18.0887L18.6835 15.6064H18.6869C18.2937 15.3988 17.968 15.0867 17.7496 14.7088L15.2171 17.1577C15.6001 17.3794 15.9132 17.7025 16.1165 18.0887Z\"></path>\n\t<path d=\"M21.9352 12.4622V12.5438C21.7128 12.1254 21.3613 11.7817 20.9315 11.5618H21.0041L23.5739 9.07686C23.8017 9.45541 24.1384 9.76518 24.5425 9.96613H24.5164L21.9352 12.4622Z\"></path>\n</svg>";
    var CLOSE_ICON_SVG_1 = "\n<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z\" fill=\"white\"/>\n</svg>";
    // @ts-ignore
    var Ylide_1 = (window.Ylide = (function () {
        var WidgetId;
        (function (WidgetId) {
            WidgetId["SEND_MESSAGE"] = "SEND_MESSAGE";
            WidgetId["MAILBOX"] = "MAILBOX";
        })(WidgetId || (WidgetId = {}));
        var WidgetEvent;
        (function (WidgetEvent) {
            WidgetEvent["CLOSE"] = "CLOSE";
        })(WidgetEvent || (WidgetEvent = {}));
        function decodeWidgetMessage(e) {
            try {
                var json = JSON.parse(e.data);
                invariant(json.ylide);
                invariant(Object.values(WidgetId).includes(json.widget));
                invariant(Object.values(WidgetEvent).includes(json.event));
                return json;
            }
            catch (e) {
                return;
            }
        }
        //
        function invariant(condition, info) {
            if (condition)
                return;
            var message = (info instanceof Error ? info : typeof info === 'function' ? info() : info) || 'Invariant failed';
            if (message instanceof Error) {
                throw message;
            }
            else {
                throw new Error(message);
            }
        }
        function toArray(iterable) {
            return Array.prototype.slice.call(iterable);
        }
        //
        function createElement(tagName, params) {
            var elem = document.createElement(tagName);
            if (params === null || params === void 0 ? void 0 : params.className) {
                elem.className = params.className;
            }
            if (params === null || params === void 0 ? void 0 : params.style) {
                Object.assign(elem.style, params.style);
            }
            if (params === null || params === void 0 ? void 0 : params.innerHTML) {
                elem.innerHTML = params.innerHTML;
            }
            if (params === null || params === void 0 ? void 0 : params.appendTo) {
                params.appendTo.appendChild(elem);
            }
            return elem;
        }
        function createSvg(content, params) {
            var container = createElement('div', { innerHTML: content });
            var svg = container.children[0];
            if (params === null || params === void 0 ? void 0 : params.style) {
                Object.assign(svg.style, params.style);
            }
            if (params === null || params === void 0 ? void 0 : params.appendTo) {
                params.appendTo.appendChild(svg);
            }
            return svg;
        }
        //
        function createURLSearchParams(params) {
            var search = new URLSearchParams();
            Object.entries(params).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (value != null) {
                    search.set(key, value);
                }
            });
            return search;
        }
        //
        function requestToIndexerHub(url, body) {
            return __awaiter(this, void 0, void 0, function () {
                var endpoints, endpoint, response, responseBody;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            endpoints = [
                                'https://idx1.ylide.io',
                                'https://idx2.ylide.io',
                                'https://idx3.ylide.io',
                                'https://idx4.ylide.io',
                                'https://idx5.ylide.io',
                            ];
                            endpoint = endpoints[Math.round(Math.random() * (endpoints.length - 1))];
                            return [4 /*yield*/, fetch("".concat(endpoint).concat(url), {
                                    method: 'POST',
                                    body: JSON.stringify(body),
                                    headers: {
                                        'Content-Type': 'text/plain',
                                    },
                                })];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, response.json()];
                        case 2:
                            responseBody = _a.sent();
                            if (responseBody.result) {
                                return [2 /*return*/, responseBody.data];
                            }
                            else {
                                throw new Error(responseBody.error || 'Response error');
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        //
        var root = createElement('div', {
            appendTo: document.body,
            style: {
                position: 'relative',
                zIndex: '1',
            },
        });
        var FloatingButton = (function () {
            var CLASS_NAME = 'ylide-floating-button';
            var button;
            return {
                show: function (onClick) {
                    FloatingButton.hide();
                    button = createElement('div', {
                        appendTo: root,
                        className: CLASS_NAME,
                    });
                    FloatingButton.setIsActive(false);
                    FloatingButton.setOnClick(onClick);
                },
                hide: function () {
                    if (button) {
                        root.removeChild(button);
                    }
                },
                setIsActive: function (isActive) {
                    if (!button)
                        return;
                    button.className = "".concat(CLASS_NAME, " ").concat(isActive ? "".concat(CLASS_NAME, "_active") : '');
                    button.innerHTML = '';
                    createSvg(isActive ? CLOSE_ICON_SVG_1 : YLIDE_LOGO_SVG_1, {
                        appendTo: button,
                    });
                },
                setOnClick: function (onClick) {
                    if (!button)
                        return;
                    button.onclick = onClick || null;
                },
            };
        })();
        var SendMessagePopup = (function () {
            var SEND_MESSAGE_POPUP_URL = 'http://localhost:3000/widget/send-message';
            var container;
            var iframe;
            function messageListener(e) {
                var message = decodeWidgetMessage(e);
                if ((message === null || message === void 0 ? void 0 : message.widget) !== WidgetId.SEND_MESSAGE)
                    return;
                if (message.event === WidgetEvent.CLOSE) {
                    SendMessagePopup.close();
                }
            }
            return {
                isOpen: function () { return !!container; },
                open: function (options) {
                    SendMessagePopup.close();
                    MailboxPopup.close();
                    // TODO: Responsiveness
                    container = createElement('div', {
                        appendTo: root,
                        className: 'ylide-send-message-popup',
                    });
                    iframe = createElement('iframe', {
                        appendTo: container,
                        className: 'ylide-iframe',
                    });
                    iframe.src = "".concat(SEND_MESSAGE_POPUP_URL, "?").concat(createURLSearchParams({
                        to: options.address,
                        subject: options.subject,
                    }).toString());
                    window.addEventListener('message', messageListener);
                },
                close: function () {
                    if (container) {
                        root.removeChild(container);
                    }
                    container = iframe = undefined;
                    window.removeEventListener('message', messageListener);
                },
            };
        })();
        var MailboxPopup = (function () {
            var MAILBOX_POPUP_URL = 'http://localhost:3000/widget/mailbox';
            var CLASS_NAME = 'ylide-mailbox-popup';
            var container;
            var iframe;
            var closeButton;
            function messageListener(e) {
                var message = decodeWidgetMessage(e);
                if ((message === null || message === void 0 ? void 0 : message.widget) !== WidgetId.MAILBOX)
                    return;
                if (message.event === WidgetEvent.CLOSE) {
                    MailboxPopup.close();
                }
            }
            return {
                isOpen: function () { return !!container; },
                open: function () {
                    MailboxPopup.close();
                    SendMessagePopup.close();
                    container = createElement('div', {
                        appendTo: root,
                        className: CLASS_NAME,
                    });
                    iframe = createElement('iframe', {
                        appendTo: container,
                        className: 'ylide-iframe',
                    });
                    iframe.src = MAILBOX_POPUP_URL;
                    closeButton = createElement('div', {
                        appendTo: root,
                        className: "".concat(CLASS_NAME, "-close"),
                    });
                    createSvg(CLOSE_ICON_SVG_1, { appendTo: closeButton });
                    closeButton.onclick = function () { return MailboxPopup.close(); };
                    window.addEventListener('message', messageListener);
                },
                close: function () {
                    if (container) {
                        root.removeChild(container);
                    }
                    if (closeButton) {
                        root.removeChild(closeButton);
                    }
                    container = iframe = closeButton = undefined;
                    window.removeEventListener('message', messageListener);
                },
            };
        })();
        //
        return {
            init: (function () {
                var isInitialized = false;
                return function () {
                    if (!isInitialized) {
                        var styleSheet = document.createElement('style');
                        styleSheet.innerHTML = STYLES_1;
                        document.head.appendChild(styleSheet);
                    }
                    var buttons = toArray(document.getElementsByClassName('ylide-send-message'));
                    buttons.forEach(function (button) {
                        if (button.dataset.initialised)
                            return;
                        button.dataset.initialised = '1';
                        var address = button.dataset.to;
                        var subject = button.dataset.subject;
                        if (!address)
                            return;
                        Ylide_1.hasPublicKeys(address).then(function (hasKeys) {
                            if (!hasKeys)
                                return;
                            Object.assign(button.style, {
                                display: 'inline-flex',
                                alignItems: 'center',
                                verticalAlign: 'middle',
                                padding: '4px 12px',
                                font: '13px/1 sans-serif',
                                color: '#222',
                                background: '#ebe2f9',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            });
                            createSvg('<svg width="14" height="14" viewBox="0 0 37 37" xmlns="http://www.w3.org/2000/svg">' +
                                '<path d="M0 10.4643C0 8.79078 1.35662 7.43416 3.0301 7.43416H3.23807C4.91155 7.43416 6.26817 8.79078 6.26817 10.4643C6.26817 12.1377 4.91154 13.4944 3.23807 13.4944H3.0301C1.35662 13.4944 0 12.1377 0 10.4643Z"/>' +
                                '<path d="M7.66391 3.0301C7.66391 1.35662 9.02053 0 10.694 0H10.902C12.5755 0 13.9321 1.35662 13.9321 3.0301C13.9321 4.70358 12.5755 6.0602 10.902 6.0602H10.694C9.02053 6.0602 7.66391 4.70358 7.66391 3.0301Z"/>' +
                                '<path d="M23.0425 3.0301C23.0425 1.35662 24.3991 0 26.0726 0H26.2806C27.954 0 29.3107 1.35662 29.3107 3.0301C29.3107 4.70358 27.954 6.0602 26.2806 6.0602H26.0726C24.3991 6.0602 23.0425 4.70358 23.0425 3.0301Z"/>' +
                                '<path d="M30.7064 10.4643C30.7064 8.79078 32.063 7.43416 33.7365 7.43416H33.9445C35.6179 7.43416 36.9746 8.79078 36.9746 10.4643C36.9746 12.1377 35.6179 13.4944 33.9445 13.4944H33.7365C32.063 13.4944 30.7064 12.1377 30.7064 10.4643Z"/>' +
                                '<path d="M23.0425 17.9475C23.0425 16.274 24.3991 14.9174 26.0726 14.9174H26.2806C27.954 14.9174 29.3107 16.274 29.3107 17.9475C29.3107 19.621 27.954 20.9776 26.2806 20.9776H26.0726C24.3991 20.9776 23.0425 19.621 23.0425 17.9475Z"/>' +
                                '<path d="M15.3532 10.4643C15.3532 8.79078 16.7098 7.43416 18.3833 7.43416H18.5913C20.2647 7.43416 21.6214 8.79078 21.6214 10.4643C21.6214 12.1377 20.2647 13.4944 18.5913 13.4944H18.3833C16.7098 13.4944 15.3532 12.1377 15.3532 10.4643Z"/>' +
                                '<path d="M15.3532 25.259C15.3532 23.5855 16.7098 22.2289 18.3833 22.2289H18.5913C20.2647 22.2289 21.6214 23.5855 21.6214 25.259C21.6214 26.9325 20.2647 28.2891 18.5913 28.2891H18.3833C16.7098 28.2891 15.3532 26.9325 15.3532 25.259Z"/>' +
                                '<path d="M7.66391 17.9475C7.66391 16.274 9.02053 14.9174 10.694 14.9174H10.902C12.5755 14.9174 13.9321 16.274 13.9321 17.9475C13.9321 19.621 12.5755 20.9776 10.902 20.9776H10.694C9.02053 20.9776 7.66391 19.621 7.66391 17.9475Z"/>' +
                                '<path d="M16.9671 7.81382L13.5626 4.52007V4.45854C13.2683 4.98993 12.8149 5.4266 12.2639 5.70901H12.3331L15.7365 9.00172V9.01095C16.0213 8.50824 16.4491 8.09212 16.9671 7.81382Z"/>' +
                                '<path d="M23.4355 4.52007V4.50041C23.7302 5.01287 24.1742 5.43405 24.7106 5.70901H24.665L21.2616 9.00172V9.05348C20.9791 8.53515 20.5457 8.10563 20.0179 7.81951H20.0251L23.4355 4.52007Z"/>' +
                                '<path d="M17.6304 13.3797V22.3435C17.9027 22.2689 18.1902 22.2289 18.4873 22.2289C18.7936 22.2289 19.0897 22.2714 19.3695 22.3506V13.3727C19.0897 13.4519 18.7936 13.4944 18.4873 13.4944C18.1902 13.4944 17.9027 13.4544 17.6304 13.3797Z"/>' +
                                '<path d="M16.8949 22.6486L13.5522 19.4163V19.3946C13.2615 19.9107 12.8202 20.336 12.2853 20.6153H12.3331L15.6998 23.8725C15.9711 23.3637 16.3869 22.9389 16.8949 22.6486Z"/>' +
                                '<path d="M8.02885 16.4532V16.5271C8.32109 15.9957 8.7722 15.5583 9.32095 15.2743H9.26708L5.8534 11.9717C5.55241 12.4782 5.1044 12.8926 4.56569 13.1605H4.6237L8.02885 16.4532Z"/>' +
                                '<path d="M17.6304 28.1745V36.9746H19.3695V28.1674C19.0897 28.2466 18.7936 28.2891 18.4873 28.2891C18.1902 28.2891 17.9027 28.2491 17.6304 28.1745Z"/>' +
                                '<path d="M21.2821 23.8865L24.672 20.6086H24.6764C24.1572 20.3344 23.727 19.9223 23.4387 19.4233L20.0944 22.6571C20.6003 22.9498 21.0137 23.3765 21.2821 23.8865Z"/>' +
                                '<path d="M28.9658 16.4565V16.5644C28.6721 16.0119 28.208 15.558 27.6405 15.2676H27.7363L31.1298 11.9862C31.4307 12.4861 31.8752 12.8951 32.4088 13.1605H32.3744L28.9658 16.4565Z"/>' +
                                '</svg>', {
                                appendTo: button,
                                style: {
                                    margin: '0 8px 0 0',
                                    fill: 'currentColor',
                                },
                            });
                            createElement('div', {
                                appendTo: button,
                                innerHTML: 'Send Message',
                            });
                            button.onclick = function () { return Ylide_1.openSendMessagePopup({ address: address, subject: subject }); };
                        });
                    });
                    isInitialized = true;
                };
            })(),
            hasPublicKeys: function (address) { return __awaiter(void 0, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, requestToIndexerHub('/keys', { address: address })];
                        case 1:
                            data = _a.sent();
                            return [2 /*return*/, Object.keys(data).some(function (key) { return data[key] != null; })];
                    }
                });
            }); },
            openSendMessagePopup: SendMessagePopup.open,
            openMailboxPopup: MailboxPopup.open,
            showFloatingMailboxButton: function () {
                FloatingButton.show(function () {
                    if (MailboxPopup.isOpen()) {
                        MailboxPopup.close();
                        FloatingButton.setIsActive(false);
                    }
                    else {
                        MailboxPopup.open();
                        FloatingButton.setIsActive(true);
                    }
                });
            },
        };
    })());
    Ylide_1.init();
    // @ts-ignore
    var MutationObserver_1 = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver_1) {
        var mutationObserver = new MutationObserver_1(function () { return Ylide_1.init(); });
        mutationObserver.observe(document.body, { childList: true, subtree: true });
    }
    else {
        document.body.addEventListener('DOMNodeInsertedIntoDocument', function () { return Ylide_1.init(); }, false);
    }
}
