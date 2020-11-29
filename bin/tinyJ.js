/**
 * Element class.
 *
 * Usually hidden from the user and the user can simply call $(...).html() or $(...).css() because the $ function returns an Element object which has the functions.
 *
 * Here it's named as _Element due to conflicts with an existing Element js declaration.
 * However you should not need to worry about this for the above reasons.
 * @author samthegitguy
 */
var _Element = /** @class */ (function () {
    /**
     * Simple setter constructor for the Element class.
     *
     */
    function _Element(element) {
        this.element = element;
    }
    _Element.prototype.html = function (htmlto) {
        document.getElementById(this.element).innerHTML = htmlto;
    };
    /**
     *   * Note that you should use the css() function rather than changing the style attributes with attr(). For more information on why this is so, see the link below.
     * Adjust attributes of a element by providing a object e.g.
     * @example
     * attr({
     *  onClick: "alert("Pop!")",
     *  ...: "..."
     * })
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style | the MDN document documentation} ( :D ) for more info.
     * @param {Object} elements
     */
    _Element.prototype.attr = function (elements) {
        var x;
        for (x in elements) {
            document.getElementById(this.element).setAttribute(Object.keys(elements)[x], elements[x]);
        }
    };
    return _Element;
}());
function $(element) {
    return new _Element(element);
}
$.ajax = function (url) {
    return new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText);
            }
            else {
                reject(new Error("Not 200"));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
};
console.log("hi");
