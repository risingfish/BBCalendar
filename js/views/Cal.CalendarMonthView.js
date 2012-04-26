Cal.CalendarMonthView = Backbone.View.extend({
    tagName: 'table',
    initialize: function (year, month) {
        _.bindAll(this, 'render'); // Each fnction that needs to reference this should be listed here.
    },

    render: function (opts) {
        var self = this, 
            renderedDay = {}, 
            renderedDayList = [], 
            preBuffer = new Cal.DayList(), 
            preLen = 1,
            tWeeks = 0,
            tRow,
            w,
            d,
            loopDay = 0;

        // Setting up the comparator for the previous month days. This will make
        // sure the days are sorted properly (oldest date to newest)
        preBuffer.comparator = function (day1, day2) {
            return (day1.get('dayDate') > day2.get('dayDate')) ? 1 : -1;
        }

        // Pop the required number of days off the previous month day collection
        // so that we can put the proper number of buffer days in.
        for (preLen = 0; preLen < this.model.weekStartNum; preLen++) {
           preBuffer.add(this.model.previous.get('dayCollection').models.pop());
        }
        

        // Push the rendered days from the previous month buffer
        _(preBuffer.models).each(function (item) {
            renderedDay = new Cal.CalendarDayView({
                model: item
            });
            renderedDayList.push(renderedDay.render().el);
        });

        // Render the current month buffer days.
        _(this.model.current.get('dayCollection').models).each(function (item) {
            renderedDay = new Cal.CalendarDayView({
                model: item
            });
            renderedDayList.push(renderedDay.render().el);
        });
        
        tWeeks = Math.ceil(renderedDayList.length / 7);
        
        for (w = 0; w < tWeeks; w += 1) {
            tRow = $('<tr>').appendTo($(self.el));
            for (d = 0; d < 7; d += 1) {
                if (loopDay >= renderedDayList.length) {
                    continue;
                }
                tRow.append(renderedDayList[loopDay]);
                loopDay += 1;
            }
        }
        
        
        return this;
    }
});