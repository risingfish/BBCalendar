/**
 * A Calendar Day
 */
Cal.CalendarView = Backbone.Model.extend({
    tagName: 'div',
    defaults: {
        currentMonth: 0,
        currentYear: 2012
    },
    initialize: function(opts) {
        var currentDate = new Date();
        this.set({
            'currentMonth': opts.currentMonth || currentDate.getMonth(),
            'currentYear': opts.currentYear || currentDate.getYear()
        });
        
        this.monthView = new Cal.CalendarMonthView(this.get('currentYear'), this.get('currentMonth'));
        //this.menuBar = new Cal.MenuBar();
        console.log(this.monthView);
    }
});