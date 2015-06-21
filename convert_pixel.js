 window.onload = function() {
    var c=document.getElementById("canvas");
    var context=c.getContext("2d");
    var img=document.getElementById("image");
    context.drawImage(img,0,0);
	
	var json=document.getElementById("result_json");
	json.value = image_to_json(img);
	
	display_image(json.value, img.width, img.height, 2);
	
	function image_to_json(image) {
		var json_result = '{';
		for(var i = 0; i < img.width; i++) {
			json_result += '"'+i+'": {';
			for(var j = 0; j < img.height; j++) {
			  var pixel_data = context.getImageData(i, j, 1, 1).data;
			  json_result += '"'+j+'":';
			  json_result += '{';
			  for(var k= 0; k < 4; k++) {
				switch(k) {
					case 0:
						json_result += '"R":"'+pixel_data[k]+'",';
					break;
					case 1:
						json_result += '"G":"'+pixel_data[k]+'",';
					break;
					case 2:
						json_result += '"B":"'+pixel_data[k]+'",';
					break;
					case 3:
						json_result += '"A":"'+pixel_data[k]+'"';
					break;
				}
			  }
			  json_result += '}';
			  if(j != img.height-1) {
				json_result += ',';
			  }
			}
			json_result += '}';
			if(i != img.width-1) {
				json_result += ',';
			}
		}
		json_result += '}';
		return(json_result);
	}
	
	function display_image(json_data, width, height, orientation) {
		var canvas=document.getElementById("canvas_result");
		var ctx=canvas.getContext("2d");
		var json_data_array = JSON.parse(json_data);
		
		switch(orientation) {
			case 0:
				for(var i = 0; i < width; i++) {
					for(var j = 0; j < height; j++) {
						var transparency = json_data_array[i][j]['A'] / 255;
						ctx.fillStyle="rgba("+json_data_array[i][j]['R']+","+json_data_array[i][j]['G']+","+json_data_array[i][j]['B']+","+transparency+")";
						ctx.fillRect(i,j,1,1);
					}
				}
			break;
			case 1:
				for(var i = width-1; i > 0; i--) {
					for(var j = 0; j < height; j++) {
						var transparency = json_data_array[i][j]['A'] / 255;
						ctx.fillStyle="rgba("+json_data_array[i][j]['R']+","+json_data_array[i][j]['G']+","+json_data_array[i][j]['B']+","+transparency+")";
						ctx.fillRect(width-1-i,j,1,1);
					}
				}
			break;
			case 2:
				for(var i = 0; i < width; i++) {
					for(var j = height-1; j > 0; j--) {
						var transparency = json_data_array[i][j]['A'] / 255;
						ctx.fillStyle="rgba("+json_data_array[i][j]['R']+","+json_data_array[i][j]['G']+","+json_data_array[i][j]['B']+","+transparency+")";
						ctx.fillRect(i,height-1-j,1,1);
					}
				}
			break;
			case 3:
				for(var i = width-1; i > 0; i--) {
					for(var j = height-1; j > 0; j--) {
						var transparency = json_data_array[i][j]['A'] / 255;
						ctx.fillStyle="rgba("+json_data_array[i][j]['R']+","+json_data_array[i][j]['G']+","+json_data_array[i][j]['B']+","+transparency+")";
						ctx.fillRect(width-1-i,height-1-j,1,1);
					}
				}
			break;
			default:
				for(var i = 0; i < width; i++) {
					for(var j = 0; j < height; j++) {
						var transparency = json_data_array[i][j]['A'] / 255;
						ctx.fillStyle="rgba("+json_data_array[i][j]['R']+","+json_data_array[i][j]['G']+","+json_data_array[i][j]['B']+","+transparency+")";
						ctx.fillRect(i,j,1,1);
					}
				}
			break;
		}
	}
};
