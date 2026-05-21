/* ────────────────────────────────────────────────────────────
   canvas-bg.js — drifting particles, very low opacity
   ──────────────────────────────────────────────────────────── */

(function(){
  const cv = document.getElementById('bg');
  if (!cv) return;
  const ctx = cv.getContext('2d');

  let W, H;
  function resize(){ W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const pts = Array.from({length:40}, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.1,
    vy: (Math.random() - 0.5) * 0.1,
    r:  Math.random() * 0.9 + 0.2
  }));

  function draw(){
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(36,88,160,0.3)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
