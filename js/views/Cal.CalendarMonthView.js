Cal.CalendarMonthView = Backbone.View.extend({
    tagName: 'div',
    initialize: function (year, month) {
        _.bindAll(this, 'render'); // Each fnction that needs to reference this should be listed here.
    },

    render: function (opts) {
        var self = this, renDay = {}, preBuffer = new Cal.DayList(), preLen = 1;

        // Setting up the comparator for the previous month days. This will make
        // sure the days are sorted properly (oldest date to newer)
        preBuffer.comparator = function (day1, day2) {
            return (day1.get('dayDate') > day2.get('dayDate')) ? 1 : -1;
        }

        // Pop the required number of days off the previous month day collection
        // so that we can put the proper number of buffer days in.
        for (preLen = 1; preLen < this.model.weekStartNum; preLen++) {
           preBuffer.add(this.model.previous.get('dayCollection').models.pop());
        }
        

        // Render the previous month buffer days..
        _(preBuffer.models).each(function (item) {
            renDay = new Cal.CalendarDayView({
                model: item
            });
            $(self.el).append(renDay.render().el);
        });

        // Render the current month buffer days.
        _(this.model.current.get('dayCollection').models).each(function (item) {
            renDay = new Cal.CalendarDayView({
                model: item
            });
            $(self.el).append(renDay.render().el);
        });
        return this;
    }
});