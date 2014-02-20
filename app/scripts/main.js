console.log('Life is amazing!');

$(document).ready(function(){

	// start the app
	window.contacts = new ContactsCollection( );

	// var collectionIndex = 1;


	contacts.fetch({
    success: function(){
      contacts.each(function(contact){
        new ListView({model: contact});
      })
      
    },
    
    error: function(){
      console.log('WHOAAAAAAAAAA theres a problem')
    }
  });


  $('.js-save-button').click(function(){

  	var painting = new Contact()

  	if($('.name-input').val()) {painting.set({name: $('.name-input').val()})};
  	if($('.bio-input').val()) {painting.set({bio: $('.bio-input').val()})};
  	if($('.date-input').val()) {painting.set({date: $('.date-input').val()})};
  	if($('.avatar-input').val()) {painting.set({avatar: $('.avatar-input').val()})};
  	if($('.source-input').val()) {painting.set({source: $('.source-input').val()})};

  	var freshModel = contacts.add(painting);

  	new ListView({model: freshModel});

  	freshModel.save()
  });


	// var jumbotronLoop = setInterval(function(){
	// 	$('.main-pic').removeClass('active')
	// 	new JumboView( {model: contacts.at(collectionIndex)} )


	// 	if (contacts.length === collectionIndex + 1){
	// 		collectionIndex = 0;
	// 	} else {
	// 		collectionIndex++;
	// 	}

	// }, 6000)

	// new JumboView( {model: contacts.first()} )


	// contacts.each(function(contact){
	// new ListView({model:contact});
	// each view created is getting it's own model instance

	// })

});

	// showMore: function(){
	// 	$('.painting-pic').toggleClass('inFocus');
	// },


// new ListView({model: new Contact}) 