        // Sart new timed event
        var start = new Date().getTime();

        //Random color generator for shapes
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        //Function for making shape appear
        function makeShapeAppear() {
            //Local Variables for sizing of shapes and random movements
            var top = Math.random() * 70;
            var left = Math.random() * 80;
            var width = Math.random() * 200 + 50;
            // Randomness of shape type (squares and circles)
            if (Math.random() > 0.5) {
                document.getElementById("square").style.borderRadius = "50%";
            } else {
                document.getElementById("square").style.borderRadius = "0";
            }
            document.getElementById("square").style.backgroundColor = getRandomColor();
            document.getElementById("square").style.width = width + "px";
            document.getElementById("square").style.height = width + "px";
            document.getElementById("square").style.top = top + "vh";
            document.getElementById("square").style.left = left + "vw";
            //Make shape appear
            document.getElementById("square").style.display = "block";
            start = new Date().getTime();
        }

        //Function to make shape appear after random short delay
        function appearAfterDelay() {
            setTimeout(makeShapeAppear, Math.random()*3000);
        }

        appearAfterDelay();

        //Function which makes shape disappear on click
        document.getElementById("square").onclick = function(){
            document.getElementById("square").style.display = "none";
            var end = new Date().getTime();
            var timeTaken = ((end - start)/1000);
            document.getElementById("timeTaken").innerHTML = timeTaken + "s";
            appearAfterDelay();
        }