// JavaScript Document
module.exports = function(width){
	return {
		area:function(pwidth){
			if (typeof(pwidth) == 'undefined'){
				return width * width;
			} else {
				return pwidth * pwidth;
			}
		}
	}
}
