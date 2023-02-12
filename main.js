var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
    fabric.image.fromURL("BirthdayImage.jpg") 
	blockImageObject = Img;

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
    top:0,
    lest:0
    });
    canvas.add(blockImageObject);
}

function playSound(){
	x.play("bdayaudio.mp3");
}
