function inCoordinates(b, mousePos){
	if(mousePos.x >= b.x && mousePos.x <= b.x + b.width && mousePos.y >= b.y-10 && mousePos.y <= b.y + b.height)
		return true;
	else 
		return false;
}
	
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}