function draw(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //Outer Circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); //Mouth (clockwise)
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true) //Left Eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); //Right eye
        ctx.fill();
    }

}