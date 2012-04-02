/**
 * A Calendar Day
 */
Cal.CalendarView = Backbone.View.extend({
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
    },
    render: function() {
        this.el = $(this.el).addClass('calendar-container');
        //$(this.el).append(this.menuBar.render().el);
        var g = this.monthView.render().el;
        console.log(g);
        $(this.el).append(g);
    }
});