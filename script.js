// Function to set the title
function setTitle(newTitle) {
    const titleElement = document.getElementById('title');
    titleElement.textContent = newTitle;
}

// Function to set the description
function setDescription(newDescription) {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = newDescription;
}

// Function to set the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function to set the font color
function setFontColor(color) {
    document.body.style.color = color;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.style.color = color;
    footer.style.color = color;
}

// Function to set the theme
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}