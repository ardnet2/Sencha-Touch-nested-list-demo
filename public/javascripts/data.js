Ext.regModel('ListItem', {
    fields: [{name: 'text', type: 'string'}]
});

NestedListDemo.store = new Ext.data.TreeStore({
    model: 'ListItem',
    root: NestedListDemo.data,
    proxy: {
        type: 'ajax',
        url: '/groceries.json',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});
