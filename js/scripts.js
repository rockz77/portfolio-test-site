// Check for GR (Guthy Renker) Namespace
if (!GR) {
    var GR = {};
}

// GR.Portfolio Namespace
GR.Portfolio = {
    // Constructor
    init: function() {
        var self = this;

        self.elements;
        self.bindUI();
    },

    /*
     * All global and initial binded DOM elements.
     */
    elements: {
        $portfolioImageHolder: $('.portfolio-image-holder')
    },

    /*
     * All initial DOM manipulation/binding logic and initialization
     */
    bindUI: function () {
        var self = this;

        /* Initialize image scroller */
        self.initImageScroller(self.elements.$portfolioImageHolder);
    },

    /*
     * Private method
     * Description: Initialize parallax image scroller
     * Params: Pass in DOM element
     */
    initImageScroller: function (initializingElement) {
        initializingElement.imageScroll({
            container: $('.portfolio-image-1'),
            holderClass: 'portfolio-image-holder',
            holderMinHeight: 720,
            holderMaxHeight: 720,
            imgClass: 'portfolio-image1',
            speed: 0.6
        });
    }
};

// Initialize all functionality
(function () {
    GR.Portfolio.init();
})();
