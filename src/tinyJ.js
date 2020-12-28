/** 
 * Element class.
 * 
 * Usually hidden from the user and the user can simply call $(...).html() or $(...).css() because the $ function returns an Element object which has the functions.
 * 
 * Here it's named as _Element due to conflicts with an existing Element js declaration.
 * However you should not need to worry about this for the above reasons.
 * @author samthegitguy
 */
class _Element {
    /** 
     * Simple setter constructor for the Element class. 
     * 
     */
    constructor(element) {
        this.element = document.getElementById(element)
    }
    html(htmlto) {
        this.element.innerHTML = htmlto

    }
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
    attr(elements) {
        let x;
        for (x in elements) {
            this.element.setAttribute(Object.keys(elements)[x], elements[x])
        }
    }
}
let $ = function(element) {
    return new _Element(element)
}
/**
 * JAX stands for Javascript and XML.
 * It is not asynchronous.
 * 
 * This method does not exist in the standard JQuery library.
 * There is only one param(url) which is the url to send the request to.
 * 
 * @see $.ajax
 * @param {string} url 
 */
$.jax = function(url) {
    let result;

    const xhttp = new XMLHttpRequest() 
    xhttp.open("GET", url)
    xhttp.onload(() => {
        result = xhttp.response
    })
    xhttp.onerror(() => {
        result = new Error("Network Error")
    })
    return result;

}
// TODO: Confirm conformity with actual $.ajax syntax
$.ajax = function(configObject) {
    if (typeof(configObject.xhr) != null) var xhr = configObject.xhr
    else var xhr = new XMLHttpRequest 
    if (!configObject.async) $.jax(configObject.url)

    xhr.open(configObject.type, configObject.url)
    
    xhr.onload(() => {
        if (configObject.dataType === "script") eval(xhr.response)

        configObject.success(xhr.response, xhr.status, xhr)
    })
    xhr.onerror(() => {
        configObject.error(xhr, xhr.status, xhr.statusText)
        // TODO: Change "Network Error" to actual error code
    })

    if (typeof(configObject.beforeSend) == Function) configObject.beforeSend(xhr)
    xhr.send()
}

exports = $;
