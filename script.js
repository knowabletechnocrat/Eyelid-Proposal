const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');
const container = document.querySelector('.container');

noBtn.addEventListener('mouseover', () => {
  const parentRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();
  const padding = 28;
  const maxLeft = parentRect.width - btnRect.width - padding;
  const maxTop = parentRect.height - btnRect.height - padding - 18;
  noBtn.style.left = Math.max(10, Math.random() * maxLeft) + "px";
  noBtn.style.top = Math.max(8, Math.random() * maxTop) + "px";
});
container.addEventListener('mouseleave', () => {
  noBtn.style.left = '';
  noBtn.style.top = '';
});
yesBtn.addEventListener('click', () => {
  response.innerHTML = "You said <b>YES</b>! 🥰💍💖<br>Can't wait for our beautiful adventure together! 💝✨";
});
noBtn.addEventListener('click', () => {
  response.innerHTML = "Aww... the No is too shy to be clicked! 😉💕";
});
const music = document.getElementById('backgroundMusic');
window.addEventListener('click', () => {
  if (music.paused || music.muted) {
    music.muted = false;
    music.play().catch(() => {
      // handle any error if play fails
    });
  }
});
yesBtn.addEventListener('click', async () => {
  response.innerHTML = "You said <b>YES</b>! 🥰💍💖<br>Can't wait for our amazing journey together!";

  try {
    const res = await fetch('/.netlify/functions/proposalResponse', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ response: "Yes! 💖" })
    });
    const result = await res.json();
    console.log(result.message);
  } catch (error) {
    console.error('Error sending response:', error);
  }
});
