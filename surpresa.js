objectDetector= "";
 img = "";
  objects = [];
   status = "";
    function preload(){ 
     }
     function setup() { 
        canvas = createCanvas(640, 420);
         canvas.center(); 
         video=createCapture(VIDEO);
         video.size(640,420);
video.hide();
         objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
         document.getElementById("status").innerHTML = "Status: Detectando Objetos";
         }
         function modelLoaded() {
             console.log("Modelo Carregado!") ;
             status = "true"; 
             objectDetector.detect(video, gotResult);
             }
             function gotResult(error, results) { 
                if (error) {
                     console.log(error);
                     } console.log(results);
                      objects = results; 
            }
     function draw()
      { if (status != undefined) { 
        image(video, 0, 0, 640, 420);
         for (var i = 0; i < objects.length; i++ ) { 
                document.getElementById("status").innerHTML = "Status: Objetos Detectados"; 
                fill("#FF0000");
                 percent = floor(objects[i].confidence * 100);
                  text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
                   noFill(); 
                   stroke(255, 0, 0);
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
     }
     }
     }
