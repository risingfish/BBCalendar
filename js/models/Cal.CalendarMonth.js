Cal.CalendarMonth = Backbone.Model.extend({
    defaults: {
        year: 2012,
        month: 0,
        dayCollection: new Cal.DayList()
    },
    initialize: function (opts) {
        this.set({
            'year': opts.year || 2012,
            'month': opts.month || 0
        });
        
        this.set({
            'dayCollection': DateUtils.buildMonthDays(this.get('year'), this.get('month'))
        });
    }
});