// Toggle dropdown on click
function toggleDropdownClick() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown if clicking outside
  window.onclick = function (event) {
    const dropdown = document.getElementById('dropdown');
    const coursesButton = document.querySelector('.courses');
    if (!coursesButton.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  };
  
  // Prevent dropdown from closing while hovering
  document.getElementById('dropdown').onmouseover = function () {
    this.style.display = 'block';
  };
  
  document.getElementById('dropdown').onmouseout = function () {
    this.style.display = 'none';
  };
  