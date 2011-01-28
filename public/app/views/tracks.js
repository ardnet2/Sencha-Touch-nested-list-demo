NestedListDemo.views.Tracks = Ext.extend(Ext.NestedList, {
    title: 'Tracks',
    displayField: 'text',
    store: NestedListDemo.tracks_store,
    getDetailCard: function(item, parent) {
        var itemData = item.attributes.record.data,
        parentData = parent.attributes.record.data,
        detailCard = new Ext.Panel({
			styleHtmlContent: true,
            tpl: "<h2>{text}</h2>"
        });
        this.backButton.setText(parentData.text);
        this.toolbar.setTitle(itemData.text);
        detailCard.update(itemData);
        return detailCard;
    }
});
