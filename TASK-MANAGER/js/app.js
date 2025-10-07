// Task Management System - JavaScript
class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentFilter = "all";
    this.editingTaskId = null;

    this.initializeElements();
    this.attachEventListeners();
    this.render();
  }

  // Initialize DOM elements
  initializeElements() {
    this.taskInput = document.getElementById("taskInput");
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.taskList = document.getElementById("taskList");
    this.emptyState = document.getElementById("emptyState");
    this.filterBtns = document.querySelectorAll(".filter-btn");
    this.clearCompletedBtn = document.getElementById("clearCompletedBtn");
    this.taskStats = document.getElementById("taskStats");
    this.editModal = document.getElementById("editModal");
    this.editTaskInput = document.getElementById("editTaskInput");
    this.saveEditBtn = document.getElementById("saveEditBtn");
    this.cancelEditBtn = document.getElementById("cancelEditBtn");
    this.closeModal = document.getElementById("closeModal");

    // Count elements
    this.countAll = document.getElementById("countAll");
    this.countActive = document.getElementById("countActive");
    this.countCompleted = document.getElementById("countCompleted");
  }

  // Attach event listeners
  attachEventListeners() {
    // Add task
    this.addTaskBtn.addEventListener("click", () => this.addTask());
    this.taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTask();
    });

    // Filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.setFilter(e.target.dataset.filter);
      });
    });

    // Clear completed
    this.clearCompletedBtn.addEventListener("click", () =>
      this.clearCompleted()
    );

    // Modal events
    this.saveEditBtn.addEventListener("click", () => this.saveEdit());
    this.cancelEditBtn.addEventListener("click", () => this.closeEditModal());
    this.closeModal.addEventListener("click", () => this.closeEditModal());

    // Close modal on outside click
    this.editModal.addEventListener("click", (e) => {
      if (e.target === this.editModal) this.closeEditModal();
    });

    // Edit task input enter key
    this.editTaskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.saveEdit();
    });

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.editModal.classList.contains("show")) {
        this.closeEditModal();
      }
    });
  }

  // Generate unique ID
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Add new task
  addTask() {
    const text = this.taskInput.value.trim();

    if (text === "") {
      this.taskInput.focus();
      return;
    }

    const task = {
      id: this.generateId(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.tasks.unshift(task);
    this.saveTasks();
    this.taskInput.value = "";
    this.render();

    // Show success feedback
    this.taskInput.placeholder = "Task added successfully!";
    setTimeout(() => {
      this.taskInput.placeholder = "What needs to be done?";
    }, 2000);
  }

  // Toggle task completion
  toggleTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.render();
    }
  }

  // Delete task
  deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.saveTasks();
      this.render();
    }
  }

  // Open edit modal
  openEditModal(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      this.editingTaskId = id;
      this.editTaskInput.value = task.text;
      this.editModal.classList.add("show");
      this.editTaskInput.focus();
      this.editTaskInput.select();
    }
  }

  // Close edit modal
  closeEditModal() {
    this.editModal.classList.remove("show");
    this.editingTaskId = null;
    this.editTaskInput.value = "";
  }

  // Save edited task
  saveEdit() {
    const newText = this.editTaskInput.value.trim();

    if (newText === "") {
      this.editTaskInput.focus();
      return;
    }

    const task = this.tasks.find((t) => t.id === this.editingTaskId);
    if (task) {
      task.text = newText;
      this.saveTasks();
      this.closeEditModal();
      this.render();
    }
  }

  // Set filter
  setFilter(filter) {
    this.currentFilter = filter;

    // Update active button
    this.filterBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });

    this.render();
  }

  // Clear completed tasks
  clearCompleted() {
    const completedCount = this.tasks.filter((t) => t.completed).length;

    if (completedCount === 0) {
      return;
    }

    if (confirm(`Delete ${completedCount} completed task(s)?`)) {
      this.tasks = this.tasks.filter((t) => !t.completed);
      this.saveTasks();
      this.render();
    }
  }

  // Get filtered tasks
  getFilteredTasks() {
    switch (this.currentFilter) {
      case "active":
        return this.tasks.filter((t) => !t.completed);
      case "completed":
        return this.tasks.filter((t) => t.completed);
      default:
        return this.tasks;
    }
  }

  // Update counts
  updateCounts() {
    const allCount = this.tasks.length;
    const activeCount = this.tasks.filter((t) => !t.completed).length;
    const completedCount = this.tasks.filter((t) => t.completed).length;

    this.countAll.textContent = allCount;
    this.countActive.textContent = activeCount;
    this.countCompleted.textContent = completedCount;

    // Update stats
    const plural = activeCount !== 1 ? "s" : "";
    this.taskStats.textContent = `${activeCount} task${plural} remaining`;
  }

  // Create task element
  createTaskElement(task) {
    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
    taskItem.dataset.id = task.id;

    taskItem.innerHTML = `
      <div class="task-checkbox ${
        task.completed ? "checked" : ""
      }" data-action="toggle">
        <span class="checkmark">✓</span>
      </div>
      <div class="task-content">${this.escapeHtml(task.text)}</div>
      <div class="task-actions">
        <button class="task-action-btn edit" data-action="edit" title="Edit task">
          ✏️
        </button>
        <button class="task-action-btn delete" data-action="delete" title="Delete task">
          🗑️
        </button>
      </div>
    `;

    // Attach event listeners
    taskItem
      .querySelector('[data-action="toggle"]')
      .addEventListener("click", () => {
        this.toggleTask(task.id);
      });

    taskItem
      .querySelector('[data-action="edit"]')
      .addEventListener("click", () => {
        this.openEditModal(task.id);
      });

    taskItem
      .querySelector('[data-action="delete"]')
      .addEventListener("click", () => {
        this.deleteTask(task.id);
      });

    return taskItem;
  }

  // Escape HTML to prevent XSS
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Render tasks
  render() {
    const filteredTasks = this.getFilteredTasks();

    // Clear task list
    this.taskList.innerHTML = "";

    // Show/hide empty state
    if (filteredTasks.length === 0) {
      this.emptyState.classList.add("show");
      this.taskList.style.display = "none";
    } else {
      this.emptyState.classList.remove("show");
      this.taskList.style.display = "flex";

      // Render each task
      filteredTasks.forEach((task) => {
        const taskElement = this.createTaskElement(task);
        this.taskList.appendChild(taskElement);
      });
    }

    // Update counts
    this.updateCounts();
  }

  // Save tasks to localStorage
  saveTasks() {
    localStorage.setItem("taskManagerTasks", JSON.stringify(this.tasks));
  }

  // Load tasks from localStorage
  loadTasks() {
    try {
      const tasks = localStorage.getItem("taskManagerTasks");
      return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
      console.error("Error loading tasks:", error);
      return [];
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new TaskManager();
});
