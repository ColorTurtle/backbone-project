var ListView = Backbone.View.extend({
	className: 'list-item', 

	createTemplate: _.template($('#list-item-template').text()),
	
	events: {
		"click": "setJumbotronItem",
		"click .js-remove-button": "remove",
	},

	initialize: function(){

		$('.js-contact-list').prepend( this.el );
		
		this.render();

		this.listenTo(this.model, 'change', this.render);

	},

	render: function(){
		var renderedTemplate = this.createTemplate( this.model.attributes );

		this.$el.html( renderedTemplate );
	},

	setJumbotronItem: function(){
		new JumboView({model: this.model})
	}


});

var JumboView = Backbone.View.extend({
	className:'main-pic',

	createTemplateMain: _.template($('#jumbo-item-template').text()),

	initialize: function(){

		$('.js-jumbotron').html( this.el );
		
		this.render()
	},

	render: function(){
		var renderedTemplate = this.createTemplateMain(this.model.attributes);

		this.$el.html( renderedTemplate )
		var that = this;
		_.defer(function(){that.$el.addClass('active')});

	}
});
