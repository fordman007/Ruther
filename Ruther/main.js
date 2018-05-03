var canvas = document.getElementById('drawingsurface');
var context = canvas.getContext('2d');

// //draw daigonal line
// context.beginPath();
// context.moveTo(100,150);
// context.lineTo(75,100);
// context.moveTo(100,150);
// context.lineTo(450,50);
// context.lineWidth = 10;
// //set line color
// context.strokeStyle = '#ff0000';
// context.stroke();

// //draw a rectangle
// context.beginPath();
// context.rect(188,50,200,100);
// context.fillStyle = 'yellow';
// context.fill();
// context.lineWidth = 7;
// context.strokeStyle = 'black';
// context.stroke();

// //draw custom line
// context.beginPath();
// context.moveTo(50,50);
// context.lineTo(70,250);
// context.lineTo(300,200);
// context.closePath();
// //context.fill();
// context.stroke();

//assignment draw a star with 8 points

//draw circle
//var centerX = canvas.width/2;
//var centerY = canvas.height/2;
// var radius = 70;
// context.beginPath();
// //Math.PI is use to calculate the circumference of a circle with a passed raduis
// context.arc(200, 200, radius,0,2*Math.PI,false);
// context.fillStyle ='green';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = "#003300";
// context.stroke();

// var radius = 70;
// context.beginPath();
// //Math.PI is use to calculate the circumference of a circle with a passed raduis
// context.arc(100, 75, radius,0,2*Math.PI,false);
// context.fillStyle ='blue';
// context.fill();
// context.lineWidth = 5;
// context.strokeStyle = "#003300";
// context.stroke();


//draw text

    //  context.font = "30px Arial";
    //  //context.fontweight = "Bold";
    //  context.fontsize = "20px"
    //  context.fillStyle = "red"
    //  context.strokeText("Hello World",10, 50);

    //  //linear gradient
    //  context.rect(0,0, canvas.width,canvas.height);
    //  //add linear gradient
    //  var grd = context.createLinearGradient(0,0,canvas.width,canvas.height);
    //  //liht blue
    //  grd.addColorStop(0,'#8ED6FF');
    //  //darkblue
    //  grd.addColorStop(1,'#004CB3');
    //  context.fillStyle = grd;
    //  context.fill();
     
      //linear gradient
    //   context.rect(0,0, canvas.width,canvas.height);
    //   //add linear gradient
    //   var grd = context.createRadialGradient(238, 50, 10, 238, 50, 300);
    //   //liht blue
    //   grd.addColorStop(0,'#8ED6FF');
    //   //darkblue
    //   grd.addColorStop(1,'#004CB3');
    //   context.fillStyle = grd;
    //   context.fill();

    // //draw image
    // var imageObj = new Image();
    // imageObj.onload = function(){
    //     //context.drawImage(imageObj, 10, 50);
    
    // };
    // //imageObj.src = 'https://pixabay.com/en/animal-gorilla-ape-primate-3346192/'
    
    // //this is the one that worked
    // var img = document.getElementById("scream");
    // context.drawImage(img, 10, 10);

    //Animation
      window.addEventListener("mousemove",animate, false)
      function animate(element){

        context.clearRect(0,0,500,500)
        var xPosition = element.clientX
        var yPostion = element.clientY
        context.fillRect(xPosition-50, yPosition-50, 100, 100)
      }