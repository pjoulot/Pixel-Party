 window.onload = function() {
    var c=document.getElementById("canvas");
    var context=c.getContext("2d");
    var img=document.getElementById("image");
    context.drawImage(img,0,0);
	
	var json=document.getElementById("result_json");
	json.value = image_to_json(img);
	var canvas=document.getElementById("canvas_result");
	//display_image_from_json(json.value, canvas, img.width, img.height, 2);
	display_image(img, canvas, 1);
	
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
	
	function display_image(image, canvas, orientation) {
		var tempCanvas = document.createElement('canvas');
		var tempContext = tempCanvas.getContext("2d");
		tempContext.drawImage(image,0,0);
		var realContext = canvas.getContext("2d");
		var pixel_data, transparency;
		
		switch(orientation) {
			case 0:
				for(var i = 0; i < img.width; i++) {
					for(var j = 0; j < img.height; j++) {
						pixel_data = tempContext.getImageData(i, j, 1, 1).data;
						transparency = pixel_data[3] / 255;
						realContext.fillStyle="rgba("+pixel_data[0]+","+pixel_data[1]+","+pixel_data[2]+","+transparency+")";
						realContext.fillRect(i,j,1,1);
					}
				}
			break;
			case 1:
				for(var i = img.width-1; i > 0; i--) {
					for(var j = 0; j < img.height; j++) {
						pixel_data = tempContext.getImageData(i, j, 1, 1).data;
						transparency = pixel_data[3] / 255;
						realContext.fillStyle="rgba("+pixel_data[0]+","+pixel_data[1]+","+pixel_data[2]+","+transparency+")";
						realContext.fillRect(img.width-1-i,j,1,1);
					}
				}
			break;
			case 2:
				for(var i = 0; i < img.width; i++) {
					for(var j = img.height-1; j > 0; j--) {
						pixel_data = tempContext.getImageData(i, j, 1, 1).data;
						transparency = pixel_data[3] / 255;
						realContext.fillStyle="rgba("+pixel_data[0]+","+pixel_data[1]+","+pixel_data[2]+","+transparency+")";
						realContext.fillRect(i,img.height-1-j,1,1);
					}
				}
			break;
			case 3:
				for(var i = img.width-1; i > 0; i--) {
					for(var j = img.height-1; j > 0; j--) {
						pixel_data = tempContext.getImageData(i, j, 1, 1).data;
						transparency = pixel_data[3] / 255;
						realContext.fillStyle="rgba("+pixel_data[0]+","+pixel_data[1]+","+pixel_data[2]+","+transparency+")";
						realContext.fillRect(img.width-1-i,img.height-1-j,1,1);
					}
				}
			break;
			default:
				for(var i = 0; i < img.width; i++) {
					for(var j = 0; j < img.height; j++) {
						pixel_data = tempContext.getImageData(i, j, 1, 1).data;
						transparency = pixel_data[3] / 255;
						realContext.fillStyle="rgba("+pixel_data[0]+","+pixel_data[1]+","+pixel_data[2]+","+transparency+")";
						realContext.fillRect(i,j,1,1);
					}
				}
			break;
		}
	}
	
	function display_image_from_json(json_data, canvas, width, height, orientation) {
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
