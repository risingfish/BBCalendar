Cal.MenuBar = Backbone.Model.extend({
    defaults: {
        year: 2012,
        month: 0,
        views: {}
    },
    initialize: function (opts) {
        this.set({
            'year': opts.year || 2000,
            'month': opts.month || 0
        });
    }
});