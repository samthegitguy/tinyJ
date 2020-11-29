/**
 * Element class.
 *
 * Usually hidden from the user and the user can simply call $(...).html() or $(...).css() because the $ function returns an Element object which has the functions.
 *
 * Here it's named as _Element due to conflicts with an existing Element js declaration.
 * However you should not need to worry about this for the above reasons.
 * @author samthegitguy
 */
declare class _Element {
    element: string;
    /**
     * Simple setter constructor for the Element class.
     *
     */
    constructor(element: any);
    html(htmlto: any): void;
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
    attr(elements: any): void;
}
declare function $(element: any): _Element;
declare namespace $ {
    var ajax: (url: any) => Promise<unknown>;
}
//# sourceMappingURL=tinyJ.d.ts.map