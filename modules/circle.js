// JavaScript Document
var PI = Math.PI;

this.globalval = 14;

exports.area = function(r){
	return PI * r * r;
}

exports.circumference = function(r){
	return 2 * PI * r;
}
