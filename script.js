function showLove() {
    alert("I love you too betu ❤️");
  }

  // Create floating hearts
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);