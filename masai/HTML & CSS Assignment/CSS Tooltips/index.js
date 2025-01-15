document.querySelectorAll('.tooltip-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tooltip-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('tooltip-btn')) {
      document.querySelectorAll('.tooltip-btn').forEach((btn) => btn.classList.remove('active'));
    }
  });
  