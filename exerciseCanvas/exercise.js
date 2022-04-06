

const canvas = document.getElementById('canvas')

if(canvas.getContext){
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (10, 10, 200, 200);
    
    ctx.clearRect (60, 60, 100, 100);

    ctx.strokeRect (80, 80, 60, 60);

    ctx.strokeRect (100, 350, 60, 60)
    ctx.fillStyle = "rgba(0, 152, 200, 0.6)";
    ctx.fillRect (115, 370, 30, 40);

    
    ctx.fillStyle = "rgba(0, 152, 200, 0.9)";
    ctx.beginPath();
    ctx.moveTo(80, 350);
    ctx.lineTo(180, 350);
    ctx.lineTo(130, 300);
    ctx.closePath()
    ctx.fill();
    
    ctx.moveTo(135, 390);
    ctx.arc(139, 390, 3, 0, Math.PI * 2, true);
    ctx.fill();
    
} else{
    console.log('uh...');
}

