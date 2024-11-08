// Task Manager App JS

// Task Form Display
document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-form-container').style.display = 'block';
    document.getElementById('task-form-container').style.transform = 'scale(1)';
  });
  
  // Dark Mode Toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.app-container').classList.toggle('dark-mode');
  });
  
  // Handle Task Submission
  document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;
    const category = document.getElementById('task-category').value;
    const dueDate = document.getElementById('task-date').value;
    const priority = document.getElementById('task-priority').value;
    const recurring = document.getElementById('recurring-task').checked;
  
    const task = document.createElement('div');
    task.classList.add('task-item', category);
    task.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <span class="task-category">${category}</span>
      <span class="task-date">${dueDate}</span>
      <span class="task-priority">${priority}</span>
      <button class="delete-btn">&times;</button>
    `;
    document.getElementById('task-list').appendChild(task);
  
    // Task Deletion
    task.querySelector('.delete-btn').addEventListener('click', () => {
      task.remove();
    });
  
    // Hide Task Form
    document.getElementById('task-form-container').style.display = 'none';
    document.getElementById('task-form').reset();
  });
  
  // Task Sorting
  document.getElementById('sort-tasks').addEventListener('change', (e) => {
    const tasks = Array.from(document.querySelectorAll('.task-item'));
    tasks.sort((a, b) => {
      const aValue = a.querySelector(`.${e.target.value}`).textContent;
      const bValue = b.querySelector(`.${e.target.value}`).textContent;
      return aValue.localeCompare(bValue);
    });
    tasks.forEach(task => document.getElementById('task-list').appendChild(task));
  });
  
  // Voice Input
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  
  document.getElementById('voice-input-btn').addEventListener('click', () => {
    recognition.start();
  });
  
  recognition.onresult = (event) => {
    const voiceInput = event.results[0][0].transcript;
    document.getElementById('task-title').value = voiceInput;
  };
  
  // Task Comments
  document.getElementById('add-comment-btn').addEventListener('click', () => {
    const commentText = document.getElementById('task-comment-input').value;
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.textContent = commentText;
    document.getElementById('comments-list').appendChild(comment);
  });
  