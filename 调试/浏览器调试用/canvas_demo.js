var canvas = document.createElement.apply(document,["canvas"])
canvas.width  = 48;
canvas.height = 16;
var CanvasRC2D = canvas.getContext.apply(canvas,["2d"])
CanvasRC2D.fillText.apply(CanvasRC2D,["龘ฑภ경", 2, 12])
CanvasRC2D.arc.apply(CanvasRC2D,[8, 8, 8, 0, 2])
CanvasRC2D.stroke.apply(CanvasRC2D,[])
canvas.toDataURL.apply(canvas,[])