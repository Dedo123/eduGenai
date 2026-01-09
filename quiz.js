const questionPool = [
    {
        question: "ใครได้รับการยกย่องว่าเป็น 'บิดาแห่งปัญญาประดิษฐ์'?",
        options: ["Alan Turing", "John McCarthy", "Elon Musk", "Geoffrey Hinton"],
        answer: 1
    },
    {
        question: "คำว่า 'Artificial Intelligence' ถูกบัญญัติขึ้นครั้งแรกในปีใด?",
        options: ["1950", "1956", "1960", "2000"],
        answer: 1
    },
    {
        question: "งานประชุมใดที่ถือเป็นจุดกำเนิดของ AI อย่างเป็นทางการ?",
        options: ["Dartmouth Summer Research Project", "TechCrunch Disrupt", "CES", "World AI Conference"],
        answer: 0
    },
    {
        question: "ภาษาโปรแกรมใดที่ John McCarthy สร้างขึ้นสำหรับงานด้าน AI?",
        options: ["Python", "Java", "Lisp", "C++"],
        answer: 2
    },
    {
        question: "แนวคิดใดของ McCarthy ที่เป็นรากฐานของ Cloud Computing?",
        options: ["Neural Networks", "Deep Learning", "Time-sharing", "Blockchain"],
        answer: 2
    },
    {
        question: "ประโยชน์หลักของ AI ในการวางแผนบทเรียนคืออะไร?",
        options: ["เพิ่มภาระงานให้ครู", "ลดเวลาในการเตรียมการสอนและงานธุรการ", "ทำให้นักเรียนเรียนหนักขึ้น", "แทนที่ครูอย่างสมบูรณ์"],
        answer: 1
    },
    {
        question: "เครื่องมือ Content Engines ช่วยทำสิ่งใด?",
        options: ["ซ่อมคอมพิวเตอร์", "สร้างแบบทดสอบและบทสรุป", "วาดภาพศิลปะ", "สอนพิเศษตัวต่อตัว"],
        answer: 1
    },
    {
        question: "Smart Tutors มีหน้าที่หลักคืออะไร?",
        options: ["ตอบคำถามและช่วยเหลือเรื่องการเรียน 24 ชม.", "วางแผนการเงิน", "เล่นเกมกับนักเรียน", "จัดการตารางสอน"],
        answer: 0
    },
    {
        question: "AI Image Generation ช่วยส่งเสริมด้านใดมากที่สุด?",
        options: ["การคำนวณเลข", "จินตนาการและความคิดสร้างสรรค์", "การท่องจำ", "ทักษะทางภาษา"],
        answer: 1
    },
    {
        question: "วิวัฒนาการของ AI เริ่มต้นจากอะไร?",
        options: ["หุ่นยนต์ฮิวแมนนอยด์", "อัลกอริทึมง่ายๆ", "สมองมนุษย์จริง", "อินเทอร์เน็ตความเร็วสูง"],
        answer: 1
    },
    {
        question: "Generative AI เปรียบเสมือนสิ่งใดในห้องเรียน?",
        options: ["นักเรียน", "ผู้จัดการ", "ผู้ช่วยนักบิน (Co-pilot)", "ผู้สังเกตการณ์"],
        answer: 2
    },
    {
        question: "เว็บไซต์ใดที่เชื่อมโยงกับ Smart Tutors?",
        options: ["google.com", "smarttutorsltd.co.uk", "openai.com", "facebook.com"],
        answer: 1
    },
    {
        question: "ข้อดีของการใช้ AI ในวิชาประวัติศาสตร์คืออะไร?",
        options: ["จำปีพ.ศ.ได้แม่นยำ", "สนทนากับบุคคลสำคัญในอดีตได้", "ไม่ต้องเรียนหนังสือ", "เขียนรายงานได้ยาวขึ้น"],
        answer: 1
    },
    {
        question: "Creative Suites เปิดโอกาสให้นักเรียนแสดงออกผ่านสิ่งใด?",
        options: ["การเขียน ศิลปะ และดนตรี", "การเต้นรำ", "การทำอาหาร", "การเล่นกีฬา"],
        answer: 0
    },
    {
        question: "หัวข้อหลักของเว็บไซต์นี้คืออะไร?",
        options: ["การเขียนโปรแกรมเบื้องต้น", "ดิจิตอลปัญญาประดิษฐ์แบบรู้สร้าง", "ประวัติศาสตร์โลก", "การทำอาหารไทย"],
        answer: 1
    },
    {
        question: "Enhanced Pedagogy เน้นเรื่องอะไร?",
        options: ["การเรียนแบบท่องจำ", "การเรียนรู้เฉพาะบุคคล (Personalized Learning)", "การสอบแข่งขัน", "การเรียนในห้องเรียนเท่านั้น"],
        answer: 1
    },
    {
        question: "สโลแกนของ EduGenAI คืออะไร?",
        options: ["เรียนดี มีความสุข", "Education Reimagined", "AI for All", "Future is Now"],
        answer: 1
    },
    {
        question: "ห้องแล็บวิทยาศาสตร์เสมือนจริงช่วยเรื่องความปลอดภัยในการทำอะไร?",
        options: ["การนอนหลับ", "การจำลองการทดลองที่ซับซ้อน", "การเล่นเกม", "การรับประทานอาหาร"],
        answer: 1
    },
    {
        question: "AI Agent ช่วยแนะนำอะไรให้ครูได้บ้าง?",
        options: ["เมนูอาหารกลางวัน", "แผนการสอนที่ครอบคลุม", "สถานที่ท่องเที่ยว", "เพลงยอดนิยม"],
        answer: 1
    },
    {
        question: "การเข้าใจประวัติศาสตร์ AI ช่วยให้นักการศึกษาทำสิ่งใด?",
        options: ["เลิกใช้เทคโนโลยี", "ตระหนักถึงความรวดเร็วของนวัตกรรม", "กลับไปสอนแบบเดิม", "กลัวหุ่นยนต์แย่งงาน"],
        answer: 1
    },
    {
        question: "Generative AI แตกต่างจาก AI แบบดั้งเดิมอย่างไร?",
        options: ["สร้างเนื้อหาใหม่ได้", "คำนวณเลขได้เร็วกว่า", "ใช้ไฟฟ้าน้อยกว่า", "ทำงานได้โดยไม่ต้องมีโปรแกรม"],
        answer: 0
    },
    {
        question: "Prompt Engineering คืออะไร?",
        options: ["วิศวกรรมโยธา", "ศิลปะการป้อนคำสั่งให้ AI", "การซ่อมคอมพิวเตอร์", "การเขียนโค้ดภาษา C"],
        answer: 1
    },
    {
        question: "ข้อใดไม่ใช่ตัวอย่างของ Generative AI?",
        options: ["ChatGPT", "Midjourney", "Microsoft Excel (รุ่นเก่า)", "Gemini"],
        answer: 2
    },
    {
        question: "Machine Learning เรียนรู้จากอะไร?",
        options: ["หนังสือเรียน", "ข้อมูล (Data)", "ครูสอนพิเศษ", "ความรู้สึก"],
        answer: 1
    },
    {
        question: "การใช้ AI ในการศึกษาอาจมีข้อกังวลเรื่องใด?",
        options: ["นักเรียนจะฉลาดเกินไป", "ความเป็นส่วนตัวของข้อมูล (Data Privacy)", "ครูจะไม่มีงานทำ", "โรงเรียนจะประหยัดงบเกินไป"],
        answer: 1
    },
    {
        question: "AI Hallucination คืออะไร?",
        options: ["AI นอนหลับ", "AI สร้างข้อมูลเท็จหรือมั่วข้อมูล", "AI ติดไวรัส", "AI ทำงานช้าลง"],
        answer: 1
    },
    {
        question: "Turing Test ใช้ทดสอบอะไร?",
        options: ["ความเร็วอินเทอร์เน็ต", "ความสามารถในการแสดงออกเหมือนมนุษย์ของเครื่องจักร", "ความทนทานของฮาร์ดแวร์", " IQ ของโปรแกรมเมอร์"],
        answer: 1
    },
    {
        question: "Deep Learning จำลองการทำงานมาจากอะไร?",
        options: ["ระบบสุริยะ", "โครงข่ายประสาทในสมองมนุษย์", "วงจรไฟฟ้า", "โครงสร้างตึก"],
        answer: 1
    },
    {
        question: "ข้อใดคือบทบาทที่เหมาะสมของครูในยุค AI?",
        options: ["ผู้ป้อนข้อมูล", "ผู้อำนวยความสะดวกและชี้แนะ (Facilitator)", "ผู้คุมสอบ", "ผู้ซ่อมบำรุง AI"],
        answer: 1
    },
    {
        question: "Adaptive Learning คืออะไร?",
        options: ["การเรียนแบบปรับตัวตามความสามารถผู้เรียน", "การเรียนในห้องแอร์", "การเรียนผ่านทีวี", "การเรียนวิชาพละ"],
        answer: 0
    },
    {
        question: "Natural Language Processing (NLP) เกี่ยวข้องกับอะไร?",
        options: ["การปลูกต้นไม้", "การประมวลผลภาษาธรรมชาติ", "การถ่ายภาพ", "การออกกำลังกาย"],
        answer: 1
    },
    {
        question: "GPT ย่อมาจากอะไร?",
        options: ["General Pre-trained Transformer", "Generative Pre-trained Transformer", "Great Python Tool", "Google Power Tech"],
        answer: 1
    },
    {
        question: "AI ช่วยลดช่องว่างทางการศึกษาได้อย่างไร?",
        options: ["แจกเงินนักเรียน", "เข้าถึงแหล่งความรู้คุณภาพสูงได้ทุกที่ทุกเวลา", "บังคับให้นักเรียนเก่งขึ้น", "ปิดโรงเรียนที่ไม่พร้อม"],
        answer: 1
    },
    {
        question: "Plagiarism Checker ที่ใช้ AI มีประโยชน์อย่างไร?",
        options: ["ช่วยคัดลอกงานเพื่อน", "ตรวจสอบการคัดลอกผลงานทางวิชาการ", "ช่วยเขียนเรียงความ", "ช่วยแปลภาษา"],
        answer: 1
    },
    {
        question: "Gamification ในการศึกษาคืออะไร?",
        options: ["การห้ามนักเรียนเล่นเกม", "การนำกลไกเกมมาใช้ในการเรียนรู้", "การวิจารณ์เกม", "การสร้างเกมขาย"],
        answer: 1
    },
    {
        question: "Virtual Reality (VR) ต่างจาก AI อย่างไร?",
        options: ["VR คือโลกเสมือน, AI คือปัญญาประดิษฐ์", "เหมือนกันทุกประการ", "VR ใช้หูฟัง, AI ใช้คีย์บอร์ด", "VR คือหุ่นยนต์"],
        answer: 0
    },
    {
        question: "Chatbot เพื่อการศึกษาควรมีคุณสมบัติอย่างไร?",
        options: ["ดุร้าย", "ตอบคำถามได้ถูกต้องและเข้าใจบริบท", "ตอบช้าๆ", "ไม่ตอบอะไรเลย"],
        answer: 1
    },
    {
        question: "Ethics of AI (จริยธรรม AI) สำคัญอย่างไร?",
        options: ["ไม่สำคัญ", "เพื่อให้การใช้ AI เป็นธรรมและโปร่งใส", "เพื่อให้ AI ราคาแพงขึ้น", "เพื่อให้ AI ทำงานช้าลง"],
        answer: 1
    },
    {
        question: "Lifelong Learning หมายถึงอะไร?",
        options: ["เรียนจนแก่", "การเรียนรู้ตลอดชีวิต", "เรียนเฉพาะตอนเด็ก", "เรียนในโรงเรียนเท่านั้น"],
        answer: 1
    },
    {
        question: "Project-Based Learning (PBL) ร่วมกับ AI ช่วยอะไร?",
        options: ["ทำให้นักเรียนขี้เกียจ", "ช่วยในการค้นคว้าและสร้างชิ้นงานที่ซับซ้อนขึ้น", "ทำให้เสียเวลา", "ไม่ต้องส่งงานครู"],
        answer: 1
    },
    {
        question: "AI สามารถช่วยเรื่อง Accessibility ได้อย่างไร?",
        options: ["ทำให้เว็บไซต์เข้าถึงยากขึ้น", "ช่วยแปลงเสียงเป็นข้อความสำหรับผู้พิการทางการได้ยิน", "เพิ่มค่าอินเทอร์เน็ต", "ลดขนาดตัวหนังสือ"],
        answer: 1
    },
    {
        question: "Flipped Classroom คืออะไร?",
        options: ["ห้องเรียนกลับหัว", "เรียนเนื้อหาที่บ้าน ทำการบ้านที่โรงเรียน", "เรียนบนดาดฟ้า", "เรียนในโรงอาหาร"],
        answer: 1
    },
    {
        question: "Data Analytics ในการศึกษาใช้วิเคราะห์อะไร?",
        options: ["ราคาอาหาร", "พฤติกรรมและผลการเรียนของนักเรียน", "คุณภาพอากาศ", "จราจรหน้าโรงเรียน"],
        answer: 1
    },
    {
        question: "AI Mentor แตกต่างจากครูมนุษย์อย่างไร?",
        options: ["AI มีความรู้สึก", "AI ทำงานได้ 24 ชม. แต่ไม่มีความเข้าอกเข้าใจลึกซึ้งเหมือนมนุษย์", "AI กินข้าวได้", "เหมือนกันทุกอย่าง"],
        answer: 1
    },
    {
        question: "EdTech ย่อมาจากอะไร?",
        options: ["Education Technology", "Editor Technician", "Ed's Technical Shop", "Education Teaching"],
        answer: 0
    },
    {
        question: "สิ่งที่ AI ยังทำได้ไม่ดีเท่ามนุษย์คือ?",
        options: ["การคำนวณ", "ความเข้าอกเข้าใจ (Empathy) และทักษะสังคม", "การค้นหาข้อมูล", "การทำงานซ้ำๆ"],
        answer: 1
    },
    {
        question: "อนาคตของการสอบวัดผลอาจเปลี่ยนไปอย่างไร?",
        options: ["ยกเลิกการสอบ", "เน้นการประเมินทักษะและการใช้งานจริงมากกว่าการท่องจำ", "สอบนานขึ้น", "สอบยากขึ้น"],
        answer: 1
    },
    {
        question: "การรู้เท่าทันดิจิทัล (Digital Literacy) จำเป็นหรือไม่?",
        options: ["ไม่จำเป็น ให้ AI ทำแทน", "จำเป็นมาก เพื่อใช้งานเทคโนโลยีอย่างปลอดภัยและสร้างสรรค์", "จำเป็นเฉพาะโปรแกรมเมอร์", "ล้าสมัยแล้ว"],
        answer: 1
    },
    {
        question: "เป้าหมายสูงสุดของ AI ในการศึกษาคือ?",
        options: ["ยึดครองโลก", "ยกระดับศักยภาพมนุษย์ในการเรียนรู้", "ทำลายระบบการศึกษา", "สร้างวุ่นวาย"],
        answer: 1
    },
    {
        question: "ใครคือผู้ที่ควรเป็นศูนย์กลางของการเรียนรู้?",
        options: ["AI", "เทคโนโลยี", "ผู้เรียน (Learner)", "หลักสูตร"],
        answer: 2
    }
];

let currentQuestions = [];
let userAnswers = {};

function startQuiz() {
    const quizContainer = document.getElementById('quiz-content');
    const startBtn = document.getElementById('start-btn');
    const resultDiv = document.getElementById('quiz-result');

    // Reset state
    userAnswers = {};
    resultDiv.innerHTML = '';
    resultDiv.style.display = 'none';
    startBtn.style.display = 'none';

    // Select 40 random questions
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 40);

    // Render questions
    let html = '';
    currentQuestions.forEach((q, index) => {
        html += `
            <div class="question-block" id="q-${index}">
                <h3>ข้อที่ ${index + 1}: ${q.question}</h3>
                <div class="options">
                    ${q.options.map((opt, i) => `
                        <label class="option-label">
                            <input type="radio" name="question${index}" value="${i}">
                            <span class="option-text">${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += '<button onclick="submitQuiz()" class="btn" style="margin-top: 2rem;">ส่งคำตอบ</button>';
    quizContainer.innerHTML = html;
}

function submitQuiz() {
    let score = 0;
    const quizContainer = document.getElementById('quiz-content');
    const resultDiv = document.getElementById('quiz-result');

    // Calculate score and show correct/incorrect
    currentQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        const block = document.getElementById(`q-${index}`);

        if (selected) {
            const val = parseInt(selected.value);
            if (val === q.answer) {
                score++;
                block.classList.add('correct');
            } else {
                block.classList.add('incorrect');
                // Show correct answer
                const correctText = q.options[q.answer];
                const feedback = document.createElement('p');
                feedback.className = 'feedback';
                feedback.textContent = `คำตอบที่ถูกคือ: ${correctText}`;
                block.appendChild(feedback);
            }
        } else {
            block.classList.add('incorrect');
            const correctText = q.options[q.answer];
            const feedback = document.createElement('p');
            feedback.className = 'feedback';
            feedback.textContent = `ไม่ได้ตอบ (คำตอบที่ถูกคือ: ${correctText})`;
            block.appendChild(feedback);
        }

        // Disable inputs
        const inputs = block.querySelectorAll('input');
        inputs.forEach(input => input.disabled = true);
    });

    // Show result
    resultDiv.innerHTML = `
        <h3>คะแนนของคุณ: <span style="color: var(--accent-blue)">${score}</span> / 40</h3>
        <p>${score >= 32 ? 'ยอดเยี่ยม! คุณคือผู้เชี่ยวชาญด้าน AI' : score >= 20 ? 'ทำได้ดี! เรียนรู้เพิ่มเติมอีกนิด' : 'พยายามอีกครั้งนะ!'}</p>
        <button onclick="startQuiz()" class="btn" style="margin-top: 1rem;">ทำแบบทดสอบใหม่</button>
    `;
    resultDiv.style.display = 'block';

    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth' });

    // Remove submit button from container (optional, or just hide it)
    const submitBtn = quizContainer.querySelector('button');
    if (submitBtn) submitBtn.style.display = 'none';
}
