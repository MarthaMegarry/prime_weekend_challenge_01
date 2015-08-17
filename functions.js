$(document).ready(function(){
	var $form = $('#empForm');
	var $firstname = $('#firstname');
	var $lastname = $('#lastname');
	var $employeenumber = $('#employeenumber');
	var $emptitle = $('#emptitle');
	var $reviewscore = $('#reviewscore');
	var $salary = $('#salary');
	var $list = $('#list');

	//var newEl, newText, position, newButton, newButtonText, position2;

	//position = document.getElementById('list');

	//console.log(newEmployee);
	
	$form.on('submit', function(e){
		e.preventDefault();
		var newEmployee = new Employee(
			$firstname.val(),
			$lastname.val(),
			$employeenumber.val(),
			$emptitle.val(),
			$reviewscore.val(),
			$salary.val()	
		);
		appendEmployee(newEmployee);
	});

	var Employee = function(firstName, lastName, empNum, empTitle, score, salary) {
    	this.firstname = firstName;
    	this.lastname = lastName;
    	this.employeenumber = empNum;
    	this.emptitle = empTitle;
    	this.reviewscore = score;
    	this.salary = salary;
  	}	

  	function appendEmployee(emp){
    	var $li = $('<li>');
    	$li.attr('class', 'score' + emp.reviewscore);
    	$li.text('First name: ' + emp.firstname +  ' | Last Name: ' + emp.lastname + ' | Employee Number: ' + emp.employeenumber + ' | Employee Title: ' + emp.emptitle + ' | Review Score: ' + emp.reviewscore + ' | Salary: ' + emp.salary
    	);

    	var $button = $('<button>');
    	$button.text('Delete');
    	$button.attr('class', 'js-delete');

    	$li.append($button);

    	$list.append($li);
  	}

	$list.on('click', '.js-delete', function(e){
    	e.preventDefault();
    	$(this).parent().remove();
  	})
});