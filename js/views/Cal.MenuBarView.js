/**
 * A Calendar Day
 */
Cal.MenuBarView = Backbone.View.extend({
    tagName: 'div',
    className: 'calendar-menu-bar',
    initialize: function() {
        _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
    },
    render: function() {
        var tDate = moment([this.model.get('year'), this.model.get('month')]);
        console.log(tDate.daysInMonth());
        $(this.el).append('<div class="menu-bar-item">' + tDate.format('MMMM, YYYY') + '</div>');
        return this;
    }
});