class Element {
    /** documentation test
     * 
     */
    constructor(element) {
        this.element = element
    }
    html(htmlto) {
        document.getElementById(this.element).innerHTML = htmlto
    }
    attr(elements) {
        let x;
        for (x in elements) {
            document.getElementById(this.element).setAttributes(elements[x])
        }
    }
}
function $(element) {
    return new Element(element)
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
