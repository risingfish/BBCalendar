/**
 * The main calendar Menu Bar
 */
Cal.MenuBarView = Backbone.View.extend({
    tagName: 'div',
    className: 'calendar-menu-bar',
    initialize: function() {
        _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
    },
    render: function() {
        var tDate = moment([this.model.get('year'), this.model.get('month')]);
        $(this.el).append('<div class="menu-bar-item"><button class="navButton backward">&lt;</button></div>');
        $(this.el).append('<div class="menu-bar-item">' + tDate.format('MMMM, YYYY') + '</div>');
        $(this.el).append('<div class="menu-bar-item"><button class="navButton forward">&gt;</button></div>');
        return this;
    }
});