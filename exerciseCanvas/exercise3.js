function draw(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgba(115, 216, 67, 0.6)';
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(40, 130);
        ctx.lineTo(130, 50);
        ctx.lineTo(130, 130);
        ctx.closePath();
        ctx.stroke();
    }
}