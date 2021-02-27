(function (){

    var mockDatabase = [
    {
			_id: 'classic_duck',
			name: 'Classic Duck',
			price:'2.00',
			available: true,
			image:'<img class= "productPic" src="images/classic_duck.jpg" alt = "Classic Duck">'

		},
		{
			_id: 'drippy_duck',
			name:'Drippy Duck' ,
			price:'15.00',
			available: false,
			image:'<img class= "productPic" src="images/drippy_duck.jpg" alt = "Drippy Duck">'

		},
		{
			_id: 'athlete_duck',
			name: 'Athlete Duck',
			price:'5.00',
			available: true,
			image:'<img class= "productPic" src="images/athlete_duck.jpg" alt = "Athlete Duck">'
		 },
    {
			_id: 'dj_ducky',
			name: 'DJ Ducky',
		  price:'8.08',
			available: false,
			image:'<img class= "productPic" src="images/dj_ducky.jpg" alt = "DJ Ducky">'
		 },
		{
			_id: 'dragon_duck',
			name: 'Dragon Duck',
			price:'20.00',
			available: false,
			image:'<img class= "productPic" src="images/Dragon_duck.jpg" alt = "Dragon Duck">'
		},
		{
			_id: 'big_duck',
		 name: 'Big Duck',
		 price:'50.00',
		 available: true,
		 image:'<img class= "productPic" src="images/big_duck.jpg" alt = "Big Duck">'
	  },
		{
			_id: 'human_duck',
			name: 'Human Duck',
			price:'24.00',
			available: false,
			image:'<img class= "productPic" src="images/human_duck.jpg" alt = "Human Duck">'
		 },
		{
			_id: 'lucky_duck',
			name: 'Lucky Duck',
			price:'7.77',
			available: false,
			image:'<img class= "productPic" src="images/lucky_duck.jpeg" alt = "Lucky Duck">'
		},
		{
			_id: 'artsy_duck',
	  	name: 'Artsy Duck',
		  price:'5.00',
		  available: true,
			image:'<img class= "productPic" src="images/artsy_duck.jpg" alt = "Artsy Duck">'
		},
		{
			_id: 'soldier_duck',
			name: 'Soldier Duck',
		  price:'12.34',
			available: true,
			image:'<img class= "productPic" src="images/soldier_duck.jpg" alt = "Soldier Duck">'
		},
	];

    function showProducts(products){
        var list = document.querySelector('#products');
        list.innerHTML = '';

        var items = products.map(function (product) {
					return '<div class="card">' +
					     product.image +
					      '<div class="card-body">' +
					        '<h3>' + product.name +'</h3>'+
					        '<p>$'+ product.price +'</p>' +
					      '</div>' +
					    '</div>';
        });

        items.forEach(function (card) {
					list.innerHTML += card;
				});
    }

    showProducts(mockDatabase);

    function priceCap(value) {
      var filteredResults = mockDatabase.filter(function (product) {
         return value || product.price < 10;
     });
     showProducts(filteredResults);
 }

 document.querySelector('#cheap').addEventListener('change', function(event){
      var value = event.target.value === 'true';
      priceCap(value);
  });

    function showAvailable(showAvailable) {
		    var filteredResults = mockDatabase.filter(function (product) {
			  return showAvailable || product.available;
		});

		showProducts(filteredResults);
	}

	// Change events trigger after the value of a form input changes
	document.querySelector('#available').addEventListener('change', function(event){
		// in this case value is a string that we need to convert to a boolean
		var value = event.target.value === 'true';
		showAvailable(value);
	});

  function sortFilters(val){
    var sorted = (val == 'name') ?
			mockDatabase.sort(function (x, y) {
				var a = x.name.toUpperCase();
				var b = y.name.toUpperCase();

				if (a < b) {
				    return -1;
				}
				if (a > b) {
				    return 1;
				}
			}) :
			mockDatabase.sort(function (x, y) {

				return x[val] - y[val];
			});
		showProducts(sorted);
	}

  document.querySelector('#sortFilter').addEventListener('change', function(event){
		sortFilters(event.target.value);
	});
    }

)();
