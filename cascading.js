// Sample data for subjects, topics, and chapters
const data = {
    Balingasag: {
        Algebra: ['Linear Equations', 'Quadratic Equations', 'Polynomials'],
        Geometry: ['Triangles', 'Circles', 'Polygons'],
    },
    Gingoog: {
        Physics: ['Newton\'s Laws', 'Thermodynamics', 'Optics'],
        Chemistry: ['Periodic Table', 'Chemical Reactions', 'Stoichiometry'],
    },
    Opol: {
        Ancient: ['Egypt', 'Greece', 'Rome'],
        Modern: ['World War I', 'World War II', 'Cold War'],
    }
};

// Get DOM elements
const subjectSelect = document.getElementById('subject');
const topicSelect = document.getElementById('topic');
const chapterSelect = document.getElementById('chapter');

// Populate subjects dropdown
for (const subject in data) {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
}

// Event listener for subject change
subjectSelect.addEventListener('change', function () {
    const selectedSubject = this.value;
    // Clear and disable topics and chapters
    topicSelect.innerHTML = '<option value="" selected="selected">Select topic</option>';
    chapterSelect.innerHTML = '<option value="" selected="selected">Select chapter</option>';
    topicSelect.disabled = true;
    chapterSelect.disabled = true;

    if (selectedSubject) {
        // Populate topics dropdown based on selected subject
        for (const topic in data[selectedSubject]) {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicSelect.appendChild(option);
        }
        topicSelect.disabled = false; // Enable topics dropdown
    }
});

// Event listener for topic change
topicSelect.addEventListener('change', function () {
    const selectedSubject = subjectSelect.value;
    const selectedTopic = this.value;

    // Clear and disable chapters dropdown
    chapterSelect.innerHTML = '<option value="" selected="selected">Select chapter</option>';
    chapterSelect.disabled = true;

    if (selectedSubject && selectedTopic) {
        // Populate chapters dropdown based on selected topic
        const chapters = data[selectedSubject][selectedTopic];
        for (const chapter of chapters) {
            const option = document.createElement('option');
            option.value = chapter;
            option.textContent = chapter;
            chapterSelect.appendChild(option);
        }
        chapterSelect.disabled = false; // Enable chapters dropdown
    }
});
document.getElementById('toggle-switch').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
    }
});
