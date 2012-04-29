/**
 * A Calendar Day
 */
Cal.Button = Backbone.View.extend({
    tagName: 'button',
    className: 'button',
    initialize: function() {
        _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
    },
    events: {
        'click': 'handleClick'
    },
    handleClick: function() {
        console.log('clicked!')
    },
    render: function() {
        
        
        return this;
    }
});