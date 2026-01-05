const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

//to save the dark mode use the object "local storage".

//function that stores the value true if the dark mode is activated or false if it's not.
function store(value) {
    localStorage.setItem('darkmode', value);
}

//function that indicates if the "darkmode" property exists. It loads the page as we had left it.
function load() {
    const darkmode = localStorage.getItem('darkmode');

    //if the dark mode was never activated
    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if (darkmode == 'true') { //if the dark mode is activated
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if (darkmode == 'false') { //if the dark mode exists but is disabled
        icon.classList.add('fa-sun');
    }
}


load();

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    //save true or false
    store(body.classList.contains('darkmode'));

    if (body.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)
})

const verses = [
    {
        text: "I am the way and the truth and the life.",
        ref: "John 14:6",
        color: "#fe1c07ff"   // coral
    },
    {
        text: "Whatever you do, work at it with all your heart.",
        ref: "Colossians 3:23",
        color: "#6a5acd"   // slate blue
    },
    {
        text: "The Lord is my shepherd; I shall not want.",
        ref: "Psalm 23:1",
        color: "#86cfffff"   // medium sea green
    },
    {
        text: "Be strong and courageous. Do not be afraid.",
        ref: "Joshua 1:9",
        color: "#ffa500"   // orange
    }
];


let index = 0;
let intervalId = null;
const START_DELAY = 1000;

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const cross = document.getElementById("cross");
const verseBox = document.getElementById("verse");

function showVerse() {
    const verse = verses[index];
    verseBox.innerHTML = `"${verse.text}"<br><cite>- ${verse.ref}</cite>`;
    cross.style.color = verse.color;
    index = (index + 1) % verses.length;
}

function start() {

    playBtn.classList.add("hidden");   // hide play
    pauseBtn.classList.remove("hidden"); // show pause
    cross.classList.add("playing");

    // show first verse immediately

    showVerse(); // show first verse after delay
    intervalId = setInterval(showVerse, 4000);
}

function pause() {
    clearInterval(intervalId); // stop verse rotation
    pauseBtn.classList.add("hidden");   // hide pause
    playBtn.classList.remove("hidden"); // show play
    cross.classList.remove("playing");


}


// attach event listeners
playBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);

const circle = document.querySelector('.progress');
const valueText = document.getElementById('value');

const radius = 70;
const circumference = 2 * Math.PI * radius;

/* SET DASH */
circle.style.strokeDasharray = circumference;

/* GPA VALUE */
const targetGPA = 3.76;
const maxGPA = 4.0;
const percentage = (targetGPA / maxGPA) * 100;

/* ANIMATE */
let current = 0;

function animateGauge() {
    if (current <= percentage) {
        const offset = circumference - (current / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        valueText.textContent = (current / 100 * maxGPA).toFixed(1);
        current += 1;
        requestAnimationFrame(animateGauge);
    }
}
//for skills 
const skillCircle = document.querySelector('.skill-progress');
const skillText = document.getElementById('skillvalue');

if (skillCircle && skillText) {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;

    skillCircle.style.strokeDasharray = circumference;
    skillCircle.style.strokeDashoffset = circumference;

    // 🔢 SKILL OUT OF 10
    const skillOutOf10 = 7.5;  // CHANGE THIS
    const targetPercent = (skillOutOf10 / 10) * 100;

    let current = 0;

    function animateSkill() {
        if (current <= targetPercent) {
            const offset =
                circumference - (current / 100) * circumference;

            skillCircle.style.strokeDashoffset = offset;

            // 👇 display as x / 10
            skillText.textContent = skillOutOf10.toFixed(1);

            current++;
            requestAnimationFrame(animateSkill);
        }
    }

    animateSkill();
}



//for attendance
// ======================
// ATTENDANCE GAUGE
// ======================
const attendanceCircle = document.querySelector('.attendance-progress');
const attendanceText = document.getElementById('attendanceValue');

const attendanceRadius = 70;
const attendanceCircumference = 2 * Math.PI * attendanceRadius;

attendanceCircle.style.strokeDasharray = attendanceCircumference;

/* SET ATTENDANCE HERE */
const attendance = 96.7; // 0–100%

let attendanceCurrent = 0;

function animateAttendance() {
    if (attendanceCurrent <= attendance) {
        const offset =
            attendanceCircumference -
            (attendanceCurrent / 100) * attendanceCircumference;

        attendanceCircle.style.strokeDashoffset = offset;
        attendanceText.textContent = attendanceCurrent + "%";

        attendanceCurrent += 1;
        requestAnimationFrame(animateAttendance);
    }
}

document.querySelectorAll("textarea").forEach(t => {
    t.addEventListener("input", () => {
        t.style.height = "auto";
        t.style.height = t.scrollHeight + "px";
    });
});



animateAttendance();




animateGauge();

/* DARK MODE */
function toggleDark() {
    document.body.classList.toggle('darkmode');
}
// Select all project cards
// Select all cards






