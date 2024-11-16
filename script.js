// Function to save the content as a .txt file
function saveAsFile() {
  const text = document.getElementById("notepad").value;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "filename.txt";
  link.click();
}

// Function to load content from a .txt file
function loadFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    document.getElementById("notepad").value = content;
    saveToCache(content); // Save loaded content to cache
  };
  reader.readAsText(file);
}

// Function to clear the content of the notepad
function clearNote() {
  document.getElementById("notepad").value = "";
  localStorage.removeItem("note"); // Clear the cached note
}

// Save content to localStorage
function saveToCache(content) {
  localStorage.setItem("note", content);
}

// Load content from localStorage (if available)
function loadFromCache() {
  const savedNote = localStorage.getItem("note");
  if (savedNote) {
    document.getElementById("notepad").value = savedNote;
  }
}

// Listen for changes in the notepad and save them to localStorage
document.getElementById("notepad").addEventListener("input", function () {
  const content = document.getElementById("notepad").value;
  saveToCache(content);
});

// Load the saved content when the page is loaded
window.onload = loadFromCache;
