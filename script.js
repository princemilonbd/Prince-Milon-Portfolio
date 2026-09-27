const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelectorAll('.play').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.dataset.title;
    alert(`Demo player: ${title}\n\nReplace this button with your Spotify, YouTube, SoundCloud or MP3 link.`);
  });
});
