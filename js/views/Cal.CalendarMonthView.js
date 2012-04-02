Cal.CalendarMonthView = Backbone.View.extend({
    tagName: 'div',
    initialize: function (year, month) {
        _.bindAll(this, 'render'); // Each fnction that needs to reference this should be listed here.
    },

    render: function (opts) {
        console.log("here", this, opts)
        var self = this, renDay = {};
        // Render each day.
        _(this.model.get('dayCollection').models).each(function (item) {
            renDay = new Cal.CalendarDayView({
                model: item
            });
            $(self.el).append(renDay.render().el);
        });
        return this;
    }
});