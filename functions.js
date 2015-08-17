$(document).ready(function(){
	var newEmployee = {};
	var empArray = [];
	var newEl, newText, position, newButton, newButtonText, position2;

	position = document.getElementById('list');

	console.log(newEmployee);
	
	$('#submit').on('click', function(e){
		var $inputs = $('#empForm :input');
		console.log($inputs);
		//var $inputEmpform = $('#empForm');
		//newEmployee[$inputEmpform.name] = $inputEmpform.val();

		$inputs.each(function(){
			newEmployee[this.name] = $(this).val();
		});

		var myNewElement = $('<li>First name: ' + newEmployee.firstname +  ' | Last Name: ' + newEmployee.lastname + ' | Employee Number: ' + newEmployee.employeenumber + ' | Employee Title: ' + newEmployee.emptitle + ' | Review Score: ' + newEmployee.reviewscore + ' | Salary: ' + newEmployee.salary + '  <div class="button">Remove</div></li>');

		myNewElement.appendTo( "#list" );

		//var myNewButton = $('<div> Remove </div>');
		//myNewButton.appendTo( ".shown" );	
		//$('div').attr('class', 'button');		
		
		e.preventDefault();

		$('div').on('click', function(){
			$(this).parent('li').remove();
		});

		console.log(newEmployee);

		//	if(newEmployee.reviewscore < 2){
		//	$(myNewElement).attr("class", "low");
		//} else if(newEmployee.reviewscore = 3){
		//	$(myNewElement).attr("class", "middle");
		//} else {
		//	$(myNewElement).attr("class", "high");
		//}

		switch(newEmployee.reviewscore) {
			case 1:
				$('myNewElement').attr("class", "low");
				break;
			case 2:
				$('myNewElement').attr("class", "low");
				break;
			case 3:
				$('myNewElement').attr("class", "middle");
				break;
			case 4:
				$('myNewElement').attr("class", "high");
				break;
			case 5:
				$('myNewElement').attr("class", "high");
				break;	
		}
	});
});




		//newEl = document.createElement('li');
		//newText = document.createTextNode('First name: ' + newEmployee.firstname +  ' | Last Name: ' + newEmployee.lastname + ' | Employee Number ' + newEmployee.employeenumber + ' | Employee Title: ' + newEmployee.emptitle + ' | Review Score: ' + newEmployee.reviewscore + ' | Salary: ' + newEmployee.salary);
		//newButton = document.createElement('div');
		//newButtonText = document.createTextNode("Remove")

		//newEl.appendChild(newText);
		//position.appendChild(newEl);
		//$('li').attr('id', 'shown');

		//position2 = document.getElementById('shown');
		//newButton.appendChild(newButtonText);
		//position2.appendChild(newButton);
		//$('div').attr('class', 'button');
		



		//newEmployee.firstname = $('#firstname').val();
		//newEmployee.lastname = $('#lastname').val();
		//newEmployee.employeenumber = $('#employeenumber').val();
		//newEmployee.emptitle = $('#emptitle').val();
		//newEmployee.reviewscore = $('#reviewscore').val();
		//newEmployee.salary = $('#salary').val();

		//console.log(newEmployee);
		
		//employeeArray.push(newEmployee);
		
		//console.log(employeeArray);

		//for(i = 0; i < employeeArray.length; i++) {
		//	$('ul').append('<li> First name: ' + employeeArray[i].firstname + '</li>');
		//}

		//e.preventDefault();
	//});


//$('#submit').on('click', function(){
		//var $inputs = $('#empForm :input');
		//$inputs.each(function(){
			//values[this.name] = $(this).var();
		//});
//});

//$( "#empForm" ).submit(function( event ) {
  //		alert( "Handler for .submit() called." );
  	//	event.preventDefault();
  		
//	});
