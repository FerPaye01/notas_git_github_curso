const toggleButtons = document.querySelectorAll('.toggle-btn');
const agradecimientos = document.getElementById('agradecimientos');
let activeContent = null;

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    
    if (activeContent === targetContent) {
      targetContent.classList.add('hidden');
      agradecimientos.classList.remove('hidden');
      button.querySelector('.triangle').textContent = '▶';
      activeContent = null;
    } else {
      if (activeContent) {
        activeContent.classList.add('hidden');
        const oldButton = document.querySelector(`[data-target="${activeContent.id}"]`);
        if (oldButton) {
          oldButton.querySelector('.triangle').textContent = '▶';
        }
      }
      targetContent.classList.remove('hidden');
      agradecimientos.classList.add('hidden');
      button.querySelector('.triangle').textContent = '▼';
      activeContent = targetContent;
    }
  });
});


//const infoButtons = document.querySelectorAll('.info-btn');
//infoButtons.forEach(infoBtn => {
 // infoBtn.addEventListener('click', () => {
 //   alert('En esta unidad ...');
 // });
//});
