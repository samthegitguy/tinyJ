/** 
 * Element class.
 * 
 * Usually hidden from the user and the user can simply call $(...).html() or $(...).css() because the $ function returns an Element object which has the functions.
 * 
 * Here it's named as _Element due to conflicts with an existing Element js declaration.
 * However you should not need to worry about this for the above reasons.
 * @author samthegitguy
 * @access
 */
class _Element {
    /** 
     * Simple setter constructor for the Element class. 
     * 
     */
    constructor(element) {
        this.element = element
    }
    html(htmlto) {
        document.getElementById(this.element).innerHTML = htmlto
        
    }
    /**
     * Adjust attributes of a element by providing a object e.g.
     * @example
     * attr({
     *  onClick: "alert("Pop!")",
     *  ...: "..."
     * })
     * Note that you should use the css() function rather than changing the style attributes with attr(). 
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style | the MDN document documentation} ( :D ) for more info.
     * @param {Object} elements 
     */
    attr(elements) {
        let x;
        for (x in elements) {
            document.getElementById(this.element).setAttributes(elements[x])
        }
    }
}
function $(element) {
    return new _Element(element)
}
$.ajax = function(url) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText)
            } else {
                reject(new Error("Not 200"))
            }
        }
        xhttp.open("GET", url, true)
        xhttp.send()
    })
}
console.log("hi")
