console.log('Life is amazing!');

$(document).ready(function(){

	// start the app
	window.contacts = new ContactsCollection( data )

	var collectionIndex = 1;

	// var jumbotronLoop = setInterval(function(){
	// 	$('.main-pic').removeClass('active')
	// 	new JumboView( {model: contacts.at(collectionIndex)} )


	// 	if (contacts.length === collectionIndex + 1){
	// 		collectionIndex = 0;
	// 	} else {
	// 		collectionIndex++;
	// 	}

	// }, 6000)

	new JumboView( {model: contacts.first()} )


	contacts.each(function(contact){
	new ListView({model:contact});
	// each view created is getting it's own model instance

	})

});

// new ListView({model: new Contact}) 