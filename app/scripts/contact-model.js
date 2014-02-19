var Contact = Backbone.Model.extend({
	defaults: {
		name: '????',
		date: '1889',
		avatar: 'http://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg',
		bio: 'Dummy',
		source: ''
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact
})

