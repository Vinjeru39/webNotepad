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
  };
  reader.readAsText(file);
}

// Function to clear the content of the notepad
function clearNote() {
  document.getElementById("notepad").value = "";
}
