function degToRad(deg) {
	return deg * Math.PI / 180;
}

function sphericalToCartesian(coords) {
	var zoom = 17;
    var n = Math.pow(2, zoom), 
 		x = n * ((coords.lon + 180) / 360),
 		latRad = degToRad(coords.lat),
 		y = n * (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2;
    return { x: x/1000, z: y/1000, y: coords.elevation };
}