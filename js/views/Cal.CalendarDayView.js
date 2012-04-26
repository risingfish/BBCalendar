Cal.CalendarDayView = Backbone.View.extend({
    tagName: 'td', // name of (orphan) root tag in this.el
    initialize: function(){
        _.bindAll(this, 'render'); // every function that uses 'this' as the current object should be in here
    },
    render: function(){
        $(this.el).addClass('calendar-day');
        $(this.el).html(this.model.get('dayDate').getDate());
        return this; // for chainable calls, like .render().el
    }
});
  