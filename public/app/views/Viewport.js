NestedListDemo.views.Viewport = Ext.extend(Ext.NestedList, {
    initComponent: function() {
        Ext.apply(this, {
            fullscreen: true,
            title: 'Music',
            displayField: 'text',
            store: NestedListDemo.music_store,
            getDetailCard: function(item, parent) {
                var itemData = item.attributes.record.data,
                parentData = parent.attributes.record.data,
                detailCard = new Ext.Panel({
                    scroll: 'vertical',
                    styleHtmlContent: true,
                    tpl: ["<h2>{text}</h2>","{info}"]
                });
                this.backButton.setText(parentData.text);
                this.toolbar.setTitle(itemData.text);
                detailCard.update(itemData);
                return detailCard;
            }
        });
        NestedListDemo.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
