/**
 * A Calendar Day
 */
Cal.Main = function(opts) {
    var currentDate = new Date(),
        month = (opts.month) ? parseInt(opts.month) : currentDate.getMonth(), // Can't use the normal || operator because 0 evals to false
        year = opts.year || currentDate.getFullYear();
    
    // Models
    this.options = opts;
    this.cDate = moment([year, month]);
    this.previousMonth = {};
    this.currentMonth = {};
    this.nextMonth = {};

    // Views
    this.menu = {};
    this.monthView = {};
    
    /**
     * This is the initial setup of the calendar. We build the UI, set the current
     * month, and render the initial calendar here.
     */
    this.initialize = function() {
        var monthViewModel;
        
        // Setting up the menu bar
        this.menu = new Cal.MenuBarView({
            model: new Cal.MenuBar({'year': this.cDate.year(), 'month': this.cDate.month()})
        });
        
        // Setting up the main calendar viewport
        this.setCurrentDate(this.cDate.year(), this.cDate.month());
        
        monthViewModel = {
            weekStartNum: moment([this.cDate.year(), this.cDate.month(), 1]).day(),
            previous: this.previousMonth,
            current: this.currentMonth,
            next: this.nextMonth
        };
        
        this.monthView = new Cal.CalendarMonthView({'model': monthViewModel, 'className': 'calendar-day-view'});
        
        // Appending the new controls to the page
        $(opts.target).append(this.menu.render().el);
        $(opts.target).append(this.monthView.render().el);
    }
    
    this.setCurrentDate = function(year, month) {
        this.cDate = moment([year, month]);

        var pDate = moment(this.cDate).add('M', -1),
            nDate = moment(this.cDate).add('M', 1);
            
        this.previousMonth = new Cal.CalendarMonth({'year': this.cDate.year(), 'month': this.cDate.month()});
        this.currentMonth = new Cal.CalendarMonth({'year': pDate.year(), 'month': pDate.month()});
        this.nextMonth = new Cal.CalendarMonth({'year': nDate.year(), 'month': nDate.month()});
    }

    this.initialize();
};