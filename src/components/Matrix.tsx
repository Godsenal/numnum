import React, { useRef, useEffect } from 'react';

const Matrix = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvas.current) {
      const c = canvas.current;
      const ctx = canvas.current.getContext("2d");
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      matrix.split('');

      const font_size = 10;
      const columns = c.width / font_size;
      const drops: number[] = [];

      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
      if (!ctx) return;
      const draw = () => {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#16c3ac"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
          //a random chinese character to print
          var text = matrix[Math.floor(Math.random() * matrix.length)];
          //x = i*font_size, y = value of drops[i]*font_size
          ctx.fillText(text, i * font_size, drops[i] * font_size);

          //sending the drop back to the top randomly after it has crossed the screen
          //adding a randomness to the reset to make the drops scattered on the Y axis
          if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

          //incrementing Y coordinate
          drops[i]++;
        }
      }

      setInterval(draw, 35);

      const resizeHandler = () => {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
      };
      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, []);
  return (
    <canvas ref={canvas} />
  )
}

export default Matrix;