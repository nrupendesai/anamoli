/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global regForm, angular */

var app = angular.module('myApp', []);
app.controller('Sform', function($scope, $http) {
	$http.get("countries.json").then(function(response) {
		$scope.countries = response.data;
	});

	$scope.industries = [ {
		"name" : "Software design/development"
	}, {
		"name" : "Networking/systems administration"
	}, {
		"name" : "Database administration"
	}, {
		"name" : "Software implementation analyst"
	}, {
		"name" : "Testing/quality assurance "
	} ];

});

function regValidate() {
	document.getElementById('fnameErr').innerHTML = "";
	document.getElementById('lnameErr').innerHTML = "";
	document.getElementById('cnameErr').innerHTML = "";
	document.getElementById('mailErr').innerHTML = "";
	document.getElementById('phnErr').innerHTML = "";
	document.getElementById('cntryErr').innerHTML = "";
	document.getElementById('stateErr').innerHTML = "";
	document.getElementById('indstryErr').innerHTML = "";
	document.getElementById('zipErr').innerHTML = "";
	document.getElementById('passErr').innerHTML = "";
	document.getElementById('cpassErr').innerHTML = "";
	var flag = true;
	if (document.regForm.fname.value === "") {
		document.getElementById('fnameErr').innerHTML = "Please Enter First Name";
		flag = true;
	}
	if (document.regForm.lname.value === "") {
		document.getElementById('lnameErr').innerHTML = "Please Enter Last Name";
		flag = true;
	}
	if (document.regForm.cname.value === "") {
		document.getElementById('cnameErr').innerHTML = "Please Enter Company Name";
		flag = true;
	}

	// email verification
	var emailID = document.regForm.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (atpos < 1 || (dotpos - atpos < 2)) {
		document.getElementById('mailErr').innerHTML = "Please valid email id";
		flag = true;
	}

	// number verification
	function checkNumber(num) {
		var n = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		return n.test(num);
	}
	if (document.regForm.number.value !== "") {
		flag = true;
		if (!checkNumber(document.regForm.number.value)) {
			document.getElementById('phnErr').innerHTML = "Please enter valid number";
		}
	} else {
		document.getElementById('phnErr').innerHTML = "Please enter number";
	}

	// country validation
	if (document.regForm.country.value === "") {
		flag = true;
		document.getElementById('cntryErr').innerHTML = "please select a country";
	}

	// state validation
	if (document.regForm.state.value === "") {
		flag = true;
		document.getElementById('stateErr').innerHTML = "please select a state";
	}

	// industry validation
	if (document.regForm.industry.value === "") {
		flag = true;
		document.getElementById('indstryErr').innerHTML = "please select a industry";
	}

	// industry validation
	if (document.regForm.zip.value === "") {
		flag = true;
		document.getElementById('zipErr').innerHTML = "please enter a zip/postal";
	}

	// pass verification
	function checkPassword(str) {
		var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return re.test(str);
	}

	if (document.regForm.pass.value == "") {
		flag = true;
		
		document.getElementById('passErr').innerHTML = "Please enter password";
	} else if (document.regForm.cpass.value == "") {
		flag = true;
		document.getElementById('cpassErr').innerHTML = "Please enter confirm password";

	} else if (document.regForm.pass.value === document.regForm.cpass.value) {
		flag = true;
		if (!checkPassword(document.regForm.pass.value)) {
			document.getElementById('cpassErr').innerHTML = "Please check that you've entered and confirmed your password!";
			regForm.pass.focus();

		}
	}
	else {
		
		document.getElementById('cpassErr').innerHTML = "";
	}

	return flag;
	// document.forms['regForm'].reset();

};

