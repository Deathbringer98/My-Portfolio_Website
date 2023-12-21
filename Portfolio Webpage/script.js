// script.js

function openProject(projectName) {
  console.log(`Clicked on ${projectName}`);

  // Get all project boxes
  const projectBoxes = document.querySelectorAll('.project-box');

  // Remove the 'highlight' class from all project boxes
  projectBoxes.forEach(box => box.classList.remove('highlight'));

  // Find and highlight the clicked project box
  const clickedBox = document.querySelector(`[data-project="${projectName}"]`);
  clickedBox.classList.add('highlight');
}

// Function to reset highlighting
function resetHighlight() {
  const projectBoxes = document.querySelectorAll('.project-box');
  projectBoxes.forEach(box => box.classList.remove('highlight'));
}
