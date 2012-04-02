/**
 * Collection for CalendarDays
 * 
 */
Cal.MenuItemList = Backbone.Collection.extend({
    model: Cal.MenuItem,
    comparitor: function(item) {
        return item.get('index');
    }
});