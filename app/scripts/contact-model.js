var Contact = Backbone.Model.extend({
	
	idAttribute: '_id',

	defaults: {
		name: '????',
		date: '1889',
		avatar: 'http://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg',
		bio: 'Something else painted by Vincent Van Gogh',
		source: ''
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'

})

