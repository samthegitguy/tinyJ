class Element {
    constructor(element) {
        this.element = element
    }
    html(htmlto) {
        document.getElementById(this.element).innerHTML = htmlto
    }
}
function $(element) {
    return new Element(element)
}
$.ajax = function(url) {
    let response
    window.fetch(url).then((res, err) => {
        if (err) {
            console.error(err);
        }
        response = res
    })
    return response
}
console.log("hi")
