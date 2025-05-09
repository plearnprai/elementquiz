// --- Configuration ---
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqGO6dVvsdDOzCCI3lUtYVxLH1w2NiGjR7MQjxM7XtuEgU1ULqnUM5jyqDD7Usoz6DsA/exec'; // <--- ใส่ URL ที่นี่! สำคัญมาก

const questions = [
    {
        question: "1. ลักษณะผิว",
        options: [ { text: "ผิวแห้ง บาง หยาบ ผิวคล้ำง่าย", element: "ลม" }, { text: "สีผิวออกแดง ผิวมัน มีฝ้า หรือรอยดำตามผิวหนัง มักถูกแดดเผาหรือเป็นผื่นแดงง่าย", element: "ไฟ" }, { text: "ผิวเนียน นุ่มละเอียด รูขุมขุนเล็ก", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "2. ลักษณะผม",
        options: [ { text: "ผมค่อนข้างบาง แห้ง แตกปลายง่าย", element: "ลม" }, { text: "มีแนวโน้มผมหงอกก่อนวัยหรือศีรษะล้าน", element: "ไฟ" }, { text: "ผมดกหนา เส้นใหญ่ เงา ไม่ร่วงง่าย", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "3. ลักษณะฟัน",
        options: [ { text: "ฟันเรียงตัวไม่สม่ำเสมอ ฟันมักผุหรือเหงือกร่นง่าย", element: "ลม" }, { text: "สีเนื้อฟันค่อนข้างเหลือง แข็งเเรงปานกลาง เหงือกมีสีเเดงระเรื่อ", element: "ไฟ" }, { text: "ฟันเรียงตัวสม่ำเสมอสุขภาพฟันและเหงือกแข็งแรง", element: "น้ำ" } ],
        type: "radio"
    },
     {
        question: "4. ลักษณะรูปร่าง",
        options: [ { text: "รูปร่างเล็ก ผอมบาง โปร่ง", element: "ลม" }, { text: "รูปร่างสมส่วน มีกล้ามเนื้อ ถึงเเม้ไม่ได้ออกกำลังกายหนัก", element: "ไฟ" }, { text: "รูปร่างใหญ่ เจ้าเนื้อ", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "5. น้ำหนัก",
        options: [ { text: "น้ำหนักน้อย ลดน้ำหนักง่ายแต่เพิ่มยาก", element: "ลม" }, { text: "น้ำหนักตัวได้มาตรฐานควบคุมน้ำหนักได้ดี สามารถลดหรือเพิ่มได้ไม่ยากนัก", element: "ไฟ" }, { text: "น้ำหนักค่อนข้างมาก น้ำหนักขึ้นง่ายแต่ลดยาก", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "6. ลักษณะเหงื่อ",
        options: [ { text: "เหงื่อออกน้อย ไม่มีกลิ่นตัว", element: "ลม" }, { text: "เหงื่อออกมาก เพียงเเค่อากาศร้อน ขยับตัวหรือทานอาหารเผ็ดร้อน ค่อนข้างมีกลิ่นตัว", element: "ไฟ" }, { text: "เหงื่อออกปานกลาง เช่น เวลาออกกำลังกายหรือตากเเดด", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "7. การขับถ่าย",
        options: [ { text: "ไม่ค่อยขับถ่ายทุกวัน มักท้องผูก อุจจาระค่อนข้างแข็ง สีเข้ม", element: "ลม" }, { text: "ขับถ่ายทุกวัน บางวันมากกว่าหนึ่งครั้ง มักจะท้องเสียมากกว่าท้องผูก อุจจาระค่อนไปทางเหลว", element: "ไฟ" }, { text: "ขับถ่ายทุกวัน ค่อนข้างเป็นเวลา อุจจาระเกาะเป็นก้อนดี ไม่แข็งหรือเหลวมาก", element: "น้ำ" } ],
        type: "radio"
    },
     {
        question: "8. การนอน",
        options: [ { text: "นอนน้อย ส่วนใหญ่ไม่เกิน 6 ชม./วัน หลับยาก ไม่สนิท มักตื่นขึ้นกลางดึกแล้วหลับต่อได้ยาก", element: "ลม" }, { text: "นอนประมาณ 6-8 ชม./วัน หลับสนิท ตื่นแล้วลุกจากเตียงได้ทันที ไม่โอ้เอ้ สามารถกำหนดเวลาตื่นได้ไม่ยาก", element: "ไฟ" }, { text: "นอนมาก วันละ 8 ชม./วัน หรือมากกว่านั้น หลับสนิท ค่อนข้างขี้เซา ตื่นแล้วไม่ค่อยยอมลุกจากเตียงทันที", element: "น้ำ" } ],
        type: "radio"
    },
     {
        question: "9. สภาพร่างกายเมื่อมีความเครียด",
        options: [ { text: "ท้องอืด มีลมในท้องมาก ท้องผูก", element: "ลม" }, { text: "เป็นสิว ปวดศีรษะ กรดไหลย้อน", element: "ไฟ" }, { text: "น้ำหนักขึ้น หนักเนื้อหนักตัว", element: "น้ำ" } ],
        type: "radio"
    },
     {
        question: "10. สภาพอากาศ",
        options: [ { text: "อากาศหนาวหรือลมแรง ทำให้รู้สึกไม่สบายตัวเเละเจ็บป่วยได้ง่าย", element: "ลม" }, { text: "ไม่ทนทานต่ออากาศร้อนหรือเเสงเเดด", element: "ไฟ" }, { text: "เซื่องซึม เชื่องช้าเมื่ออยู่ในสภาวะอากาศเย็นเเละชื้น", element: "น้ำ" } ],
        type: "radio"
    },
     {
        question: "11. บุคลิกภาพ",
        options: [ { text: "เคลื่อนไหวว่องไว ชอบทำหลายอย่างในเวลาเดียวกัน จดจ่อกับสิ่งที่ทำได้ไม่นาน มักไม่อยู่นิ่ง", element: "ลม" }, { text: "เคลื่อนไหวมั่นคง กระตือรือร้น มีความตั้งใจ เเน่วเเน่ จดจ่อกับสิ่งที่ทำได้จนเสร็จ", element: "ไฟ" }, { text: "เคลื่อนไหวช้า ความอดทนสูง ทำอะไรนานๆ ได้ ต้องการเวลาในการปรับตัว ชอบอยู่นิ่งๆ", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "12. การพูด & น้ำเสียง",
        options: [ { text: "พูดเร็ว ช่างพูด คำพูดไม่กระชับ", element: "ลม" }, { text: "เสียงดังฟังชัด พูดจากระชับได้ใจความ น้ำเสียงมีพลังบางครั้งเหมือนออกคำสั่ง", element: "ไฟ" }, { text: "พูดน้อย พูดช้า เสียงเบา น้ำเสียงนุ่มนวล", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "13. กระบวนการเรียนรู้",
        options: [ { text: "ชอบเรียนรู้ มีความรอบรู้หลายอย่าง จินตนาการสูง แต่อาจลืมง่าย", element: "ลม" }, { text: "ตรรกะดี เรียนรู้ไวเเม้จะเป็นเรื่องยากๆ โดยเฉพาะเรื่องที่สนใจ หรือเป็นประโยชน์", element: "ไฟ" }, { text: "จดจำสิ่งที่เรียนรู้ได้ดี เชี่ยวชาญในเรื่องที่ศึกษา", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "14. อารมณ์เชิงบวก",
        options: [ { text: "ร่าเริง สนุกสนาน เปิดใจ ชิลๆ", element: "ลม" }, { text: "จริงจัง มั่นใจในตัวเอง ตั้งเป้าหมายสูง", element: "ไฟ" }, { text: "สงบ มั่นคง เห็นอกเห็นใจ", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "15. อารมณ์เชิงลบ",
        options: [ { text: "วิตกกังวล หวาดกลัว ประหม่า", element: "ลม" }, { text: "ใจร้อน หงุดหงิด ไม่พอใจหรือโกรธได้ง่าย", element: "ไฟ" }, { text: "มักเก็บความรู้สึก เหงา เศร้า อิจฉา", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "16. การตัดสินใจ",
        options: [ { text: "ตัดสินใจเเบบลังเล ไม่เเน่ใจ", element: "ลม" }, { text: "ตัดสินใจแบบมั่นใจ เด็ดขาด", element: "ไฟ" }, { text: "ตัดสินใจช้า ไม่ชอบตัดสินใจ", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "17. สไตล์การทำงาน",
        options: [ { text: "ทำงานเก่งเป็นช่วงสั้นๆ ไอเดียบรรเจิด ชอบเริ่มต้นโครงการใหม่ ๆ แต่ไม่ถนัดงานที่ต้องทำต่อเนื่องเป็นเวลานาน", element: "ลม" }, { text: "มีสมาธิดี ตั้งใจทำงาน มุ่งเน้นผลลัพธ์ อดทนปานกลาง ทุกการทำงานมีเป้าหมายชัดเจน", element: "ไฟ" }, { text: "ไม่ใช่คนริเริ่มโครงการ แต่ถ้าได้ทำแล้วจะมีความอดทนสูง ทำงานได้ต่อเนื่องและมั่นคงเป็นเวลานาน", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "18. ปฏิกิริยาต่อความกดดัน",
        options: [ { text: "ไม่ชอบทำงานภายใต้แรงกดดัน", element: "ลม" }, { text: "ทำงานภายใต้เเรงกดดันได้ดี", element: "ไฟ" }, { text: "ทำงานภายใต้เเรงกดดันได้ เเต่ไม่ชอบความเร่งรีบ", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "19. ความสนใจ",
        options: [ { text: "ศิลปะ วรรณกรรม ปรัชญา จิตวิญญาณ การมองภาพรวม", element: "ลม" }, { text: "ธุรกิจ วิทยาศาสตร์ กฏหมาย การคำนวณ", element: "ไฟ" }, { text: "การให้คำปรึกษา การสอน การดูเเล การลงมือทำ เกี่ยวกับทรัพยากรบุคคล", element: "น้ำ" } ],
        type: "radio"
    },
    {
        question: "20. เลือกอาการที่ตรงกับท่าน (เลือกได้หลายข้อ)",
        options: [ { text: "ท่านมีปัญหาชามือชาเท้า วิงเวียนได้ง่าย", element: "ลม", id: "q20_1" }, { text: "ท่านมีปัญหาปวดเมื่อย ข้อลั่นง่าย", element: "ลม", id: "q20_2" }, { text: "ท่านมีปัญหากรดไหลย้อน แสบร้อนทรวงอก", element: "ไฟ", id: "q20_3" }, { text: "ท่านมีปัญหาแผลในปาก แผลร้อนในได้ง่าย", element: "ไฟ", id: "q20_4" }, { text: "ท่านมีปัญหาภูมิแพ้ คัดจมูก", element: "น้ำ", id: "q20_5" }, { text: "ท่านมีตุ่มเปื่อยตามร่างกายได้ง่าย", element: "น้ำ", id: "q20_6" } ],
        type: "checkbox"
    },
    // --- เปลี่ยน Q21 กลับเป็น type: "date" ---
    {
        question: "21. วันเดือนปีเกิดของท่าน (ใช้เพื่อเชื่อมโยงกับธาตุเจ้าเรือนขณะแรกเกิดของท่าน)",
        options: [],
        type: "date", // ใช้ปฏิทินเลือก
        id: "q21_dob"
    }
];

// --- Recommendations (ไม่มี advice แล้ว) ---
const recommendations = {
    "ลม": { image: "wind_element.png", advice: "" },
    "ไฟ": { image: "fire_element.png", advice: "" },
    "น้ำ": { image: "water_element.png", advice: "" },
    "ลม-ไฟ": { image: "wind_element.png", advice: "" }, // หรือ fire_element.png
    "ลม-น้ำ": { image: "wind_element.png", advice: "" }, // หรือ water_element.png
    "ไฟ-น้ำ": { image: "fire_element.png", advice: "" }, // หรือ water_element.png
};

// --- DOM Elements ---
const questionsContainer = document.getElementById('questions-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const resultChartCtx = document.getElementById('result-chart').getContext('2d');
const windPercentSpan = document.getElementById('wind-percent');
const firePercentSpan = document.getElementById('fire-percent');
const waterPercentSpan = document.getElementById('water-percent');
const dominantElementSpan = document.getElementById('dominant-element');
const elementImage = document.getElementById('element-image');
// const elementAdvice = document.getElementById('element-advice'); // ไม่ได้ใช้แล้ว
const feedbackSection = document.getElementById('feedback-section');
const feedbackOptionsContainer = feedbackSection.querySelector('.feedback-options');
const restartButton = document.getElementById('restart-btn');
const loadingMsg = document.getElementById('loading-msg');
const sendingMsg = document.getElementById('sending-msg');

let resultChart;
let calculatedScores = {};
let calculatedAnswers = {};
let calculatedPercentages = {};
let calculatedDominantKey = "";
let isSubmitting = false; // Flag to prevent multiple submissions

// --- Utility Functions ---
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- Core Functions ---

// สร้างคำถามบนหน้าเว็บ
function renderQuestions() {
    questionsContainer.innerHTML = '';
    loadingMsg.classList.remove('hidden');
    submitButton.disabled = true;

    // --- สร้าง Feedback radios (1-5) และผูก event listener ---
    feedbackOptionsContainer.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const feedbackLabel = document.createElement('label');
        const feedbackInput = document.createElement('input');
        feedbackInput.type = 'radio'; feedbackInput.name = 'feedback-rating'; feedbackInput.value = i; feedbackInput.id = `feedback-${i}`; feedbackInput.disabled = false;
        feedbackInput.addEventListener('change', handleFeedbackSelection);
        feedbackLabel.htmlFor = `feedback-${i}`; feedbackLabel.appendChild(feedbackInput); feedbackLabel.appendChild(document.createTextNode(i));
        feedbackOptionsContainer.appendChild(feedbackLabel);
    }

    // สร้างคำถามหลัก
    setTimeout(() => {
        questions.forEach((q, index) => {
            const questionBlock = document.createElement('div');
            questionBlock.classList.add('question-block');
            const questionText = document.createElement('p');
            questionText.textContent = q.question;
            questionBlock.appendChild(questionText);

            // --- สร้าง Input ตาม Type ---
            if (q.type === "radio" || q.type === "checkbox") {
                let optionsToRender = [...q.options]; if (q.type === "radio" || q.type === "checkbox") { shuffleArray(optionsToRender); }
                optionsToRender.forEach((option, i) => {
                    const label = document.createElement('label'); const input = document.createElement('input'); input.type = q.type; input.value = option.element;
                    if (q.type === "radio") { input.name = `question-${index}`; input.required = true; } else { input.name = option.id; input.id = option.id; }
                    label.appendChild(input); label.appendChild(document.createTextNode(` ${option.text}`)); questionBlock.appendChild(label);
                 });
            } else if (q.type === "date") { // <-- Handle type: "date"
                const input = document.createElement('input');
                input.type = "date";
                input.name = `question-${index}`;
                input.id = q.id;
                input.required = true; // Make date selection mandatory
                questionBlock.appendChild(input);
            }
             // Add other input types here if needed in the future
            questionsContainer.appendChild(questionBlock);
        });
        loadingMsg.classList.add('hidden'); submitButton.disabled = false;
    }, 10);
}

// --- ฟังก์ชันจัดการเมื่อเลือก Feedback (เหมือนเดิม) ---
async function handleFeedbackSelection(event) {
    if (isSubmitting) return;
    const feedbackScore = event.target.value; isSubmitting = true;
    const feedbackRadios = document.querySelectorAll('input[name="feedback-rating"]'); feedbackRadios.forEach(inp => inp.disabled = true);
    sendingMsg.classList.remove('hidden');
    const success = await sendDataToSheet( calculatedScores, calculatedPercentages, calculatedDominantKey, calculatedAnswers, feedbackScore );
    sendingMsg.classList.add('hidden');
     if (!success) {
         feedbackRadios.forEach(inp => inp.disabled = false); isSubmitting = false;
     } else {
         const thankYouMsg = document.createElement('p'); thankYouMsg.textContent = "ขอบคุณสำหรับข้อมูล"; thankYouMsg.style.textAlign = 'center'; thankYouMsg.style.marginTop = '10px'; thankYouMsg.style.color = 'green';
         const existingThankYou = feedbackSection.querySelector('p[style*="color: green"]'); if (existingThankYou) existingThankYou.remove();
         feedbackSection.appendChild(thankYouMsg);
     }
}

// คำนวณคะแนน (Q1-20) และเก็บคำตอบ (Q1-21)
function calculateScoresAndAnswers() {
    const scores = { "ลม": 0, "ไฟ": 0, "น้ำ": 0 };
    const answers = {};

    questions.forEach((q, index) => {
        const questionKey = `Q${index + 1}`;
        if (index < 20) { // Score questions 1-20
             if (q.type === 'radio') {
                 const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
                 if (selectedOption) { scores[selectedOption.value]++; const originalOption = q.options.find(opt => opt.element === selectedOption.value && selectedOption.parentElement.textContent.includes(opt.text)); answers[questionKey] = originalOption ? originalOption.text : selectedOption.parentElement.textContent.trim().substring(1); } else { throw new Error(`กรุณาตอบคำถามข้อ ${index + 1}`); }
             } else if (q.type === 'checkbox') {
                 answers[questionKey] = []; q.options.forEach(option => { const checkbox = document.getElementById(option.id); if (checkbox && checkbox.checked) { scores[option.element]++; answers[questionKey].push(option.text); } }); answers[questionKey] = answers[questionKey].join(', '); if (!answers[questionKey]) answers[questionKey] = "ไม่ได้เลือก";
             }
        } else { // Question 21 (Date) - No score
            if (q.type === 'date') { // <-- Check for type: "date"
                const dateInput = document.getElementById(q.id);
                if (dateInput && dateInput.value) {
                    answers[questionKey] = dateInput.value; // Store YYYY-MM-DD value
                } else {
                     throw new Error(`กรุณาเลือก วันเดือนปีเกิด (ข้อ 21)`); // Error message for date
                }
            }
             // Remove dd/mm/yyyy validation
        }
    });
    return { scores, answers };
}

// แสดงผลลัพธ์
function displayResults(scores) {
    quizForm.classList.add('hidden'); submitButton.classList.add('hidden'); resultContainer.classList.remove('hidden'); restartButton.classList.remove('hidden'); isSubmitting = false;
    const feedbackRadios = document.querySelectorAll('input[name="feedback-rating"]'); feedbackRadios.forEach(inp => inp.disabled = false);
    const existingThankYou = feedbackSection.querySelector('p[style*="color: green"]'); if (existingThankYou) existingThankYou.remove();

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    let percentages = {}; let dominantKey = "";

    // --- Calculate Percentages and Dominant Element ---
    if (totalScore === 0) {
         console.warn("Total score is 0. Displaying default message."); percentages = { "ลม": 0, "ไฟ": 0, "น้ำ": 0 }; dominantKey = "ไม่สามารถระบุได้"; if (resultChart) { resultChart.destroy(); resultChart = null; }
    } else {
        calculatedPercentages = { "ลม": Math.round((scores["ลม"] / totalScore) * 100), "ไฟ": Math.round((scores["ไฟ"] / totalScore) * 100), "น้ำ": Math.round((scores["น้ำ"] / totalScore) * 100) }; percentages = calculatedPercentages;
        let maxScore = -1; let dominantElements = [];
        for (const element in scores) { if (scores[element] > maxScore) { maxScore = scores[element]; dominantElements = [element]; } else if (scores[element] === maxScore && scores[element] > 0) { dominantElements.push(element); } }
        if (maxScore <= 0) { dominantKey = "ไม่สามารถระบุได้"; } else { calculatedDominantKey = dominantElements.sort().join('-'); dominantKey = calculatedDominantKey; }

        // --- Create Donut Chart ---
        const chartData = { labels: ['ธาตุลม', 'ธาตุไฟ', 'ธาตุน้ำ'], datasets: [{ label: 'สัดส่วนธาตุ', data: [percentages["ลม"], percentages["ไฟ"], percentages["น้ำ"]], backgroundColor: ['#90EE90', '#FF6347', '#87CEEB'], borderColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'], borderWidth: 2 }] };
        if (resultChart) resultChart.destroy();
        resultChart = new Chart(resultChartCtx, { type: 'doughnut', data: chartData, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: function(context) { let label = context.label || ''; if (label) label += ': '; if (context.parsed !== null) label += context.parsed + '%'; return label; } } } } } });
    }

    // --- Display Percentages and Dominant Element ---
    windPercentSpan.textContent = percentages["ลม"] ?? 0; firePercentSpan.textContent = percentages["ไฟ"] ?? 0; waterPercentSpan.textContent = percentages["น้ำ"] ?? 0;
    dominantElementSpan.textContent = dominantKey;

    // --- Display Only Image ---
    const recommendationData = recommendations[dominantKey] || recommendations[dominantKey.split('-')[0]] || { image: '', advice: '' }; // Fallback
    if (recommendationData.image) {
        elementImage.src = recommendationData.image;
        elementImage.alt = `สัญลักษณ์ธาตุ ${dominantKey}`; // Updated alt text
        elementImage.style.display = 'block';
    } else {
        elementImage.style.display = 'none';
    }
    // No longer setting elementAdvice.textContent

    // --- Scroll to Results ---
    resultContainer.scrollIntoView({ behavior: 'smooth' });
}


// ส่งข้อมูลไปยัง Google Apps Script (เหมือนเดิม)
async function sendDataToSheet(scores, percentages, dominantElement, answers, feedbackScore) {
    const timestamp = new Date().toLocaleString('th-TH', { timeZone: 'Asia/Bangkok' });
    const dataToSend = { timestamp: timestamp, wind_score: scores["ลม"] ?? 0, fire_score: scores["ไฟ"] ?? 0, water_score: scores["น้ำ"] ?? 0, wind_percent: percentages["ลม"] ?? 0, fire_percent: percentages["ไฟ"] ?? 0, water_percent: percentages["น้ำ"] ?? 0, dominant_element: dominantElement || "N/A", Feedback: feedbackScore || "N/A", };
    for (let i = 1; i <= questions.length; i++) { dataToSend[`Q${i}`] = answers[`Q${i}`] || ""; }
    console.log("Sending data:", dataToSend);
    if (!SCRIPT_URL || SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') { console.error("Google Apps Script URL is not set!"); alert("ข้อผิดพลาด: ไม่ได้ตั้งค่า URL สำหรับบันทึกข้อมูล"); return false; }
    try {
        const response = await fetch(SCRIPT_URL, { method: 'POST', mode: 'cors', cache: 'no-cache', headers: { 'Content-Type': 'application/x-www-form-urlencoded', }, body: new URLSearchParams(dataToSend) });
        const resultText = await response.text(); console.log("Apps Script Response:", resultText);
        if (resultText.toLowerCase().includes("success")) { console.log('Data sent successfully!'); return true; } else { console.warn('Data sent, but response indicates potential issue:', resultText); alert('การส่งข้อมูลอาจมีปัญหา โปรดตรวจสอบ Console หรือติดต่อผู้ดูแล'); return false; }
    } catch (error) { console.error('Error sending data to Google Sheet:', error); alert('เกิดข้อผิดพลาดในการส่งข้อมูล: ' + error.message); return false; }
}

// --- Event Listeners ---
quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    try {
        const { scores, answers } = calculateScoresAndAnswers(); // Validate Q21 date input here
        calculatedScores = scores; calculatedAnswers = answers;
        displayResults(scores);
    } catch (error) {
        alert(error.message); console.error("Quiz calculation/display error:", error);
    }
});

restartButton.addEventListener('click', () => {
    // Reset UI
    resultContainer.classList.add('hidden'); sendingMsg.classList.add('hidden');
    quizForm.reset(); quizForm.classList.remove('hidden');
    submitButton.classList.remove('hidden'); submitButton.disabled = true; restartButton.classList.add('hidden');
    const existingThankYou = feedbackSection.querySelector('p[style*="color: green"]'); if (existingThankYou) existingThankYou.remove();
    // Reset stored data
    calculatedScores = {}; calculatedAnswers = {}; calculatedPercentages = {}; calculatedDominantKey = ""; isSubmitting = false;
    // Destroy chart
    if (resultChart) { resultChart.destroy(); resultChart = null; }
    // Scroll & Re-render
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderQuestions();
});

// --- Initialisation ---
renderQuestions(); // Initial rendering of questions when the page loads