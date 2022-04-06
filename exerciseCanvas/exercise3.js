function draw(){
    const canvas = document.getElementById('canvas');
    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

        for(let i = 0; i < 4; i++){
            for (let j = 0; j < 3; j++){
                ctx.beginPath();
                let x = 25 + j * 50;
                let y = 25 + i * 50;
                let radius = 20;
                let startAngle =  0;
                let endAngle = Math.PI + (Math.PI * j) / 2;
                let anticlockwise = i % 2 == 0? false : true;

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if(i > 1){
                    ctx.fill();
                } else{
                    ctx.stroke();
                }
            }
        }
    }
}