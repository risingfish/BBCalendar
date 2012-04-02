/**
 * A Calendar Day
 */
Cal.Main = function(opts) {
    var currentDate = new Date();
    this.month = (opts.month) ? parseInt(opts.month) : currentDate.getMonth(); // Can't use the normal || operator because 0 evals to false
    this.year = opts.year || currentDate.getFullYear();
    
    this.menu = {};
    this.previousMonth = {};
    this.currentMonth = {};
    this.nextMonth = {};
    this.monthView = {};
        
    this.initialize = function() {
        console.log(this.month)
        this.menu = new Cal.MenuBarView({
            model: new Cal.MenuBar({'year': this.year, 'month': this.month})
        });
        
        this.currentMonth = new Cal.CalendarMonth({'year': this.year, 'month': this.month}),
        this.monthView = new Cal.CalendarMonthView({'model': this.currentMonth, 'className': 'calendar-day-view'});
        
        $(opts.target).append(this.menu.render().el);
        $(opts.target).append(this.monthView.render().el);
    }

    this.initialize();
};