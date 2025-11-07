let questions = [];

const questionForm = document.getElementById("questionForm");
const questionList = document.getElementById("questionList");
const rightPane = document.getElementById("rightPane");

questionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const questionText = document.getElementById("question").value.trim();

    if (!title || !questionText) return;

    const newQuestion = { title, question: questionText, responses: [], resolved: false };
    questions.push(newQuestion);

    renderQuestions();
    questionForm.reset();
});

// Render all questions on the left pane
function renderQuestions() {
    questionList.innerHTML = "";
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question-box");
        div.innerHTML = `<strong>${q.title}</strong><br>${q.question}`;
        div.addEventListener("click", () => openQuestion(index));
        questionList.appendChild(div);
    });
}

// Open question and show responses
function openQuestion(index) {
    const q = questions[index];
    rightPane.innerHTML = `
    <h2>${q.title}</h2>
    <p>${q.question}</p>
    <h3>Responses</h3>
    <div id="responses">
      ${q.responses.map(r => `<div class="response"><b>${r.name}:</b> ${r.comment}</div>`).join("")}
    </div>
    <h3>Add a Response</h3>
    <form id="responseForm">
      <input type="text" id="resName" placeholder="Your Name" required><br><br>
      <textarea id="resComment" placeholder="Your Comment" required></textarea><br><br>
      <button type="submit">Submit Response</button>
    </form>
    <br>
    <button id="resolveBtn">Resolve</button>
  `;

    document.getElementById("responseForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("resName").value.trim();
        const comment = document.getElementById("resComment").value.trim();
        if (!name || !comment) return;

        q.responses.push({ name, comment });
        openQuestion(index); // refresh the view
    });

    document.getElementById("resolveBtn").addEventListener("click", () => {
        questions.splice(index, 1); // remove question
        renderQuestions();
        resetRightPane();
    });
}

function resetRightPane() {
    rightPane.innerHTML = `
    <h2>Ask a Question</h2>
    <form id="questionForm">
      <input type="text" id="title" placeholder="Title" required><br><br>
      <textarea id="question" placeholder="Your question..." required></textarea><br><br>
      <button type="submit">Submit Question</button>
    </form>
  `;
    document.getElementById("questionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value.trim();
        const questionText = document.getElementById("question").value.trim();
        if (!title || !questionText) return;

        const newQuestion = { title, question: questionText, responses: [], resolved: false };
        questions.push(newQuestion);
        renderQuestions();
        resetRightPane();
    });
}
