/**
 * A Calendar Day
 */
Cal.Main = function(opts) {
    var currentDate = new Date();
    this.month = (opts.month) ? parseInt(opts.month) : currentDate.getMonth(); // Can't use the normal || operator because 0 evals to false
    this.year = opts.year || currentDate.getFullYear();
    
    this.menu = {};
    this.currentMonth = {};
    this.monthView = {};
        
    this.initialize = function() {
        
        var cDate = moment([this.year, this.month]),
            pDate = moment(cDate).add('M', -1),
            nDate = moment(cDate).add('M', 1);
            
            console.log(pDate, cDate, nDate);
        
        // Setting up the menu bar
        this.menu = new Cal.MenuBarView({
            model: new Cal.MenuBar({'year': this.year, 'month': this.month})
        });
        
        // Setting up the main calendar viewport
        this.currentMonth = new Cal.CalendarMonth({'year': this.year, 'month': this.month}),
        this.monthView = new Cal.CalendarMonthView({'model': this.currentMonth, 'className': 'calendar-day-view'});
        
        // Appending the new controls to the page
        $(opts.target).append(this.menu.render().el);
        $(opts.target).append(this.monthView.render().el);
    }

    this.initialize();
};