// Advanced Task Management System - JavaScript
class TaskManager {
  constructor() {
    this.tasks = this.loadTasks();
    this.currentFilter = "all";
    this.currentSort = "date-desc";
    this.currentPriority = "medium";
    this.editingTaskId = null;
    this.searchQuery = "";
    this.theme = this.loadTheme();

    this.initializeElements();
    this.attachEventListeners();
    this.applyTheme();
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
    this.deleteAllBtn = document.getElementById("deleteAllBtn");
    this.taskStats = document.getElementById("taskStats");
    this.editModal = document.getElementById("editModal");
    this.editTaskInput = document.getElementById("editTaskInput");
    this.saveEditBtn = document.getElementById("saveEditBtn");
    this.cancelEditBtn = document.getElementById("cancelEditBtn");
    this.closeModal = document.getElementById("closeModal");
    this.searchInput = document.getElementById("searchInput");
    this.sortSelect = document.getElementById("sortSelect");
    this.themeToggle = document.getElementById("themeToggle");

    // Priority buttons
    this.priorityBtns = document.querySelectorAll(
      ".priority-selector .priority-btn"
    );
    this.editPriorityBtns = {
      low: document.getElementById("editPriorityLow"),
      medium: document.getElementById("editPriorityMedium"),
      high: document.getElementById("editPriorityHigh"),
    };

    // Count elements
    this.countAll = document.getElementById("countAll");
    this.countActive = document.getElementById("countActive");
    this.countCompleted = document.getElementById("countCompleted");

    // Stat elements
    this.statAll = document.getElementById("statAll");
    this.statActive = document.getElementById("statActive");
    this.statCompleted = document.getElementById("statCompleted");
  }

  // Attach event listeners
  attachEventListeners() {
    // Add task
    this.addTaskBtn.addEventListener("click", () => this.addTask());
    this.taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTask();
    });

    // Priority selection
    this.priorityBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.priorityBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentPriority = btn.dataset.priority;
      });
    });

    // Edit modal priority buttons
    Object.values(this.editPriorityBtns).forEach((btn) => {
      btn.addEventListener("click", () => {
        Object.values(this.editPriorityBtns).forEach((b) =>
          b.classList.remove("active")
        );
        btn.classList.add("active");
      });
    });

    // Filter buttons
    this.filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.setFilter(e.target.closest(".filter-btn").dataset.filter);
      });
    });

    // Sort select
    this.sortSelect.addEventListener("change", (e) => {
      this.currentSort = e.target.value;
      this.render();
    });

    // Search input
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.render();
    });

    // Clear completed
    this.clearCompletedBtn.addEventListener("click", () =>
      this.clearCompleted()
    );

    // Delete all
    this.deleteAllBtn.addEventListener("click", () => this.deleteAll());

    // Theme toggle
    this.themeToggle.addEventListener("click", () => this.toggleTheme());

    // Modal events
    this.saveEditBtn.addEventListener("click", () => this.saveEdit());
    this.cancelEditBtn.addEventListener("click", () => this.closeEditModal());
    this.closeModal.addEventListener("click", () => this.closeEditModal());

    // Close modal on overlay click
    this.editModal.addEventListener("click", (e) => {
      if (
        e.target === this.editModal ||
        e.target.classList.contains("modal-overlay")
      ) {
        this.closeEditModal();
      }
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
      this.showNotification("Please enter a task", "error");
      return;
    }

    const task = {
      id: this.generateId(),
      text: text,
      completed: false,
      priority: this.currentPriority,
      createdAt: new Date().toISOString(),
    };

    this.tasks.unshift(task);
    this.saveTasks();
    this.taskInput.value = "";
    this.render();

    // Show success feedback
    this.showNotification("Task added successfully!", "success");
  }

  // Toggle task completion
  toggleTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.render();

      const message = task.completed ? "Task completed! 🎉" : "Task reopened";
      this.showNotification(message, task.completed ? "success" : "info");
    }
  }

  // Delete task
  deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      this.saveTasks();
      this.render();
      this.showNotification("Task deleted", "info");
    }
  }

  // Open edit modal
  openEditModal(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      this.editingTaskId = id;
      this.editTaskInput.value = task.text;

      // Set priority buttons
      Object.values(this.editPriorityBtns).forEach((btn) =>
        btn.classList.remove("active")
      );
      this.editPriorityBtns[task.priority].classList.add("active");

      this.editModal.classList.add("show");
      setTimeout(() => {
        this.editTaskInput.focus();
        this.editTaskInput.select();
      }, 100);
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
      this.showNotification("Task cannot be empty", "error");
      return;
    }

    const task = this.tasks.find((t) => t.id === this.editingTaskId);
    if (task) {
      task.text = newText;

      // Get selected priority
      const activePriorityBtn = Object.values(this.editPriorityBtns).find(
        (btn) => btn.classList.contains("active")
      );
      if (activePriorityBtn) {
        task.priority = activePriorityBtn.dataset.priority;
      }

      this.saveTasks();
      this.closeEditModal();
      this.render();
      this.showNotification("Task updated successfully!", "success");
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
      this.showNotification("No completed tasks to clear", "info");
      return;
    }

    if (confirm(`Delete ${completedCount} completed task(s)?`)) {
      this.tasks = this.tasks.filter((t) => !t.completed);
      this.saveTasks();
      this.render();
      this.showNotification(`${completedCount} task(s) cleared`, "success");
    }
  }

  // Delete all tasks
  deleteAll() {
    if (this.tasks.length === 0) {
      this.showNotification("No tasks to delete", "info");
      return;
    }

    if (
      confirm(
        `Are you sure you want to delete all ${this.tasks.length} task(s)? This action cannot be undone.`
      )
    ) {
      this.tasks = [];
      this.saveTasks();
      this.render();
      this.showNotification("All tasks deleted", "info");
    }
  }

  // Get filtered and sorted tasks
  getFilteredTasks() {
    let filtered = [...this.tasks];

    // Apply filter
    switch (this.currentFilter) {
      case "active":
        filtered = filtered.filter((t) => !t.completed);
        break;
      case "completed":
        filtered = filtered.filter((t) => t.completed);
        break;
    }

    // Apply search
    if (this.searchQuery) {
      filtered = filtered.filter((t) =>
        t.text.toLowerCase().includes(this.searchQuery)
      );
    }

    // Apply sort
    filtered.sort((a, b) => {
      switch (this.currentSort) {
        case "date-desc":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "date-asc":
          return new Date(a.createdAt) - new Date(b.createdAt);
        case "priority-desc":
          return (
            this.getPriorityValue(b.priority) -
            this.getPriorityValue(a.priority)
          );
        case "priority-asc":
          return (
            this.getPriorityValue(a.priority) -
            this.getPriorityValue(b.priority)
          );
        case "name-asc":
          return a.text.localeCompare(b.text);
        case "name-desc":
          return b.text.localeCompare(a.text);
        default:
          return 0;
      }
    });

    return filtered;
  }

  // Get priority numeric value
  getPriorityValue(priority) {
    const values = { low: 1, medium: 2, high: 3 };
    return values[priority] || 2;
  }

  // Get priority label
  getPriorityLabel(priority) {
    const labels = {
      low: { icon: "🟢", text: "Low" },
      medium: { icon: "🟡", text: "Medium" },
      high: { icon: "🔴", text: "High" },
    };
    return labels[priority] || labels.medium;
  }

  // Update counts
  updateCounts() {
    const allCount = this.tasks.length;
    const activeCount = this.tasks.filter((t) => !t.completed).length;
    const completedCount = this.tasks.filter((t) => t.completed).length;

    this.countAll.textContent = allCount;
    this.countActive.textContent = activeCount;
    this.countCompleted.textContent = completedCount;

    this.statAll.textContent = allCount;
    this.statActive.textContent = activeCount;
    this.statCompleted.textContent = completedCount;

    // Update stats
    const plural = activeCount !== 1 ? "s" : "";
    this.taskStats.textContent = `${activeCount} task${plural} remaining`;
  }

  // Create task element
  createTaskElement(task) {
    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${
      task.completed ? "completed" : ""
    } priority-${task.priority}`;
    taskItem.dataset.id = task.id;

    const priorityLabel = this.getPriorityLabel(task.priority);
    const formattedDate = this.formatDate(task.createdAt);

    taskItem.innerHTML = `
      <div class="task-priority-indicator priority-${task.priority}"></div>
      <div class="task-checkbox ${
        task.completed ? "checked" : ""
      }" data-action="toggle">
        <svg class="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="task-main">
        <div class="task-content">${this.escapeHtml(task.text)}</div>
        <div class="task-meta">
          <span class="task-priority-badge priority-${task.priority}">
            <span class="priority-icon">${priorityLabel.icon}</span>
            ${priorityLabel.text}
          </span>
          <span class="task-date" title="${new Date(
            task.createdAt
          ).toLocaleString()}">
            <svg class="date-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            ${formattedDate}
          </span>
        </div>
      </div>
      <div class="task-actions">
        <button class="task-action-btn edit" data-action="edit" title="Edit task">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="task-action-btn delete" data-action="delete" title="Delete task">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
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

  // Format date
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  // Escape HTML to prevent XSS
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Show notification
  showNotification(message, type = "info") {
    // Remove existing notifications
    const existing = document.querySelector(".notification");
    if (existing) existing.remove();

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add("show"), 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Theme management
  loadTheme() {
    return localStorage.getItem("taskManagerTheme") || "light";
  }

  saveTheme(theme) {
    localStorage.setItem("taskManagerTheme", theme);
  }

  applyTheme() {
    document.body.setAttribute("data-theme", this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.saveTheme(this.theme);
    this.applyTheme();
    this.showNotification(
      `${this.theme === "light" ? "Light" : "Dark"} mode activated`,
      "info"
    );
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
      filteredTasks.forEach((task, index) => {
        const taskElement = this.createTaskElement(task);
        taskElement.style.animationDelay = `${index * 0.05}s`;
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
