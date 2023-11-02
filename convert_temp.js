// Written by: Alan Hernandez
// Started & Finished on: November 01, 2023

// Strict mode is enabled (however that even works)
"use strict";

// The following '$' function is used to select any HTML element from the HTML document.
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
// This function converts to celsius (obviously).
const calculateCelsius = temp => {
	let celsius = ((temp-32) * 5/9).toFixed(0);
// Uses '#degrees_computed' to display the celsius value.
	$("#degrees_computed").value = celsius;
};
// This function converts to fahrenheit (obviously).
const calculateFahrenheit = temp => {
	let fahrenheit = (temp * 9/5 + 32).toFixed(0);
// Uses '#degrees_computed' to display the fahrenheit value.
	$("#degrees_computed").value = fahrenheit;
};

// This function i responsible for changing the labels of both '#degree_label_1' & '#degree_label_2'.
const toggleDisplay = (label1Text, label2Text) => {
	document.querySelector("#degree_label_1").innerHTML = label1Text;
	document.querySelector("#degree_label_2").innerHTML = label2Text;
};

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {
// Places emphasize the HTML element with the ID '#degrees_entered'.
	$("#degrees_entered").focus();
// The variable 'temp' is defined & given the value of the HTML element '#degrees_entered'.
	let temp = $("#degrees_entered").value;
// Different calculations will take place depending on which radio button is checked.
    if ($("#to_celsius").checked) {
// Validation loop for Celsius.
		if (temp > -273.15 && temp < 9999) {
// The value of the variable 'temp' is passed to the function 'calculateCelsius'.
			calculateCelsius(temp);
		} else {
// An error message is created.
// Creates a new <p> tag.
			//document.createElement("p");
// 
			//createTextNode("Message")
// Resets the value of '#degrees_computed'.
			$("#degrees_computed").value = "";
		}
	} else if ($("#to_fahrenheit").checked) {
// Validation loop for Fahrenheit.
		if (temp > -459.67 && temp < 9999) {
// The value of the variable 'temp' is passed to the function 'calculateFahrenheit'.
			calculateFahrenheit(temp);
		} else {
// An error message is created.

// Resets the value of '#degrees_computed'.
			$("#degrees_computed").value = "";
		}
	}
};

// ToCelsius Function
const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
// toFahrenheit Function
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

// The event-handler function 'clearAll' is defined below.
const clearAll = evt => {
// Makes the program emphasize the text box with the HTML ID 'subtotal'.
	$("#degrees_entered").focus();
// The following statements clear all values from each textbox.
	$("#degrees_entered").value = "";
	$("#degrees_computed").value = "";
};

// The following Event-Listener is activated once the HTML document is fully loaded & DOM is ready,
// (by my understanding at least).
document.addEventListener("DOMContentLoaded", () => {
// The Event Listener below calls the Event-Handler Funtion 'convertTemp'
// whenever the '#convert' ID-element is triggered by the 'click' event.
	$("#convert").addEventListener("click", convertTemp);
// The Event Listener below calls the Event-Handler Funtion 'toCelsius'
// whenever the '#to_celsius' ID-element is triggered by the 'click' event.
    $("#to_celsius").addEventListener("click", toCelsius);
// The Event Listener below calls the Event-Handler Funtion 'toFahrenheit'
// whenever the '#to_fahrenheit' ID-element is triggered by the 'click' event.
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
// The Event Listener below calls the Event-Handler Funtion 'clearAll'
// whenever the '#clear' ID-element is triggered by the 'click' event.
	$("#clear").addEventListener("click", clearAll);
// Places emphasize the HTML element with the ID '#degrees_entered'.
	$("#degrees_entered").focus();
});