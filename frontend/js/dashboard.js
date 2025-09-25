
// Function to activate the correct section based on the query parameter
function activateSection() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get('section'); // e.g., "admin"

    // Get all sections and navigation buttons
    const sections = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Deactivate all sections and buttons
    sections.forEach((section) => section.classList.remove('active'));
    navButtons.forEach((button) => button.classList.remove('active'));

    // Activate the correct section and button
    if (section) {
        const targetSection = document.getElementById(section);
        const targetButton = document.querySelector(`.nav-btn[data-target="${section}"]`);

        if (targetSection && targetButton) {
            targetSection.classList.add('active');
            targetButton.classList.add('active');
        }
    }
}

// Call the function on page load
activateSection();

/* ---------------- Sample class-wise data (Teacher) ---------------- */
const classData = {
    "6A": {
        totalStudents: 42, present: 38, absent: 2, onLeave: 2,
        trend7: [82, 85, 88, 86, 90, 89, 90],
        absentStudents: [{ roll: "05", name: "Riya S." }, { roll: "12", name: "Arjun M." }],
        lowAttendance: [{ name: "Arjun M.", pct: 55 }, { name: "Rahul K.", pct: 60 }, { name: "Sana P.", pct: 62 }, {
            name:
                "Nikhil R.", pct: 64
        }, { name: "Jaya T.", pct: 65 }],
        students: [
            { name: "Riya S.", rfid: "RFID001", status: "Present" },
            { name: "Arjun M.", rfid: "RFID002", status: "Absent" },
            { name: "Sana P.", rfid: "RFID003", status: "On Leave" },
            { name: "Nikhil Roy", rfid: "RFID004", status: "Present" },
            { name: "Kriti Pandey", rfid: "RFID005", status: "Absent" },
            { name: "Manav Rathi", rfid: "RFID006", status: "Present" },
            { name: "Zara Khan", rfid: "RFID007", status: "On Leave" },
            { name: "Vikram Singh", rfid: "RFID008", status: "Present" },
            { name: "Sneha Mishra", rfid: "RFID009", status: "Absent" },
            { name: "Rahul Kumar", rfid: "RFID010", status: "Present" },
            { name: "Jaya Tiwari", rfid: "RFID011", status: "On Leave" },
            { name: "Deepak Patel", rfid: "RFID012", status: "Present" },
            { name: "Rohit Sharma", rfid: "RFID013", status: "Absent" },
            { name: "Naina Thakur", rfid: "RFID014", status: "Present" },
            { name: "Karan Malhotra", rfid: "RFID015", status: "On Leave" },
            { name: "Bina Lal", rfid: "RFID016", status: "Present" },
            { name: "Aman Gupta", rfid: "RFID017", status: "Absent" },
            { name: "Priya Verma", rfid: "RFID018", status: "Present" },
            { name: "Anjali Das", rfid: "RFID019", status: "On Leave" },
            { name: "Ravi Shukla", rfid: "RFID020", status: "Present" },
            { name: "Meera Joshi", rfid: "RFID021", status: "Absent" },
            { name: "Kabir Khan", rfid: "RFID022", status: "Present" },
            { name: "Simran Kaur", rfid: "RFID023", status: "On Leave" },
            { name: "Aditya Roy", rfid: "RFID024", status: "Present" },
            { name: "Pooja Singh", rfid: "RFID025", status: "Absent" },
            { name: "Ishaan Jain", rfid: "RFID026", status: "Present" },
            { name: "Tanya Kapoor", rfid: "RFID027", status: "On Leave" },
            { name: "Harsh Vardhan", rfid: "RFID028", status: "Present" },
            { name: "Neha Agarwal", rfid: "RFID029", status: "Absent" },
            { name: "Siddharth Rao", rfid: "RFID030", status: "Present" },
            { name: "Aditi Nair", rfid: "RFID031", status: "On Leave" },
            { name: "Rajesh Yadav", rfid: "RFID032", status: "Present" },
            { name: "Komal Bhatia", rfid: "RFID033", status: "Absent" },
            { name: "Vivek Tiwari", rfid: "RFID034", status: "Present" },
            { name: "Shreya Ghosh", rfid: "RFID035", status: "On Leave" },
            { name: "Ankit Sharma", rfid: "RFID036", status: "Present" },
            { name: "Pallavi Roy", rfid: "RFID037", status: "Absent" },
            { name: "Rohan Das", rfid: "RFID038", status: "Present" },
            { name: "Isha Kapoor", rfid: "RFID039", status: "On Leave" },
            { name: "Kunal Mehta", rfid: "RFID040", status: "Present" },
            { name: "Nidhi Jain", rfid: "RFID041", status: "Absent" },
            { name: "Aarav Gupta", rfid: "RFID042", status: "Present" }
            // Add more students as needed
        ]
    },
    "7A": {
        totalStudents: 48, present: 44, absent: 3, onLeave: 1,
        trend7: [80, 82, 85, 84, 86, 87, 86],
        absentStudents: [{ roll: "03", name: "Kriti P." }, { roll: "18", name: "Manav R." }, { roll: "22", name: "Zara L." }],
        lowAttendance: [{ name: "Manav R.", pct: 50 }, { name: "Kriti P.", pct: 58 }, { name: "Zara L.", pct: 61 }, {
            name:
                "Vikram S.", pct: 63
        }, { name: "Sneha M.", pct: 66 }], students: [
            { name: "Riya S.", rfid: "RFID001", status: "Present" },
            { name: "Arjun M.", rfid: "RFID002", status: "Absent" },
            { name: "Sana P.", rfid: "RFID003", status: "On Leave" },
            // Add more students as needed
        ]
    },
    "8A": {
        totalStudents: 50, present: 45, absent: 3, onLeave: 2,
        trend7: [88, 90, 92, 89, 91, 90, 90],
        absentStudents: [{ roll: "05", name: "Riya S." }, { roll: "12", name: "Arjun M." }, { roll: "29", name: "Jaya T." }],
        lowAttendance: [{ name: "Arjun M.", pct: 55 }, { name: "Rahul K.", pct: 60 }, { name: "Sana P.", pct: 62 }, {
            name:
                "Nikhil R.", pct: 64
        }, { name: "Jaya T.", pct: 65 }], students: [
            { name: "Riya S.", rfid: "RFID001", status: "Present" },
            { name: "Arjun M.", rfid: "RFID002", status: "Absent" },
            { name: "Sana P.", rfid: "RFID003", status: "On Leave" },
            // Add more students as needed
        ]
    },
    "9A": {
        totalStudents: 46, present: 44, absent: 1, onLeave: 1,
        trend7: [90, 91, 92, 91, 92, 93, 92],
        absentStudents: [{ roll: "10", name: "Deepak P." }],
        lowAttendance: [{ name: "Deepak P.", pct: 67 }, { name: "Rohit S.", pct: 68 }, { name: "Naina T.", pct: 69 }, {
            name:
                "Karan M.", pct: 70
        }, { name: "Bina L.", pct: 72 }], students: [
            { name: "Riya S.", rfid: "RFID001", status: "Present" },
            { name: "Arjun M.", rfid: "RFID002", status: "Absent" },
            { name: "Sana P.", rfid: "RFID003", status: "On Leave" },
            // Add more students as needed
        ]
    }
};
function exportToExcel(className) {
    const classInfo = classData[className];
    if (!classInfo || !classInfo.students) {
        alert("No data available for the selected class.");
        return;
    }

    // Prepare data for Excel
    const worksheetData = [
        ["Name", "RFID", "Status"], // Header row
        ...classInfo.students.map(student => [student.name, student.rfid, student.status])
    ];

    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, className);

    // Export the workbook as an Excel file
    XLSX.writeFile(workbook, `${className}_Student_Data.xlsx`);
}

// Bind the export functionality to the button
document.getElementById("exportBtn").addEventListener("click", () => {
    const selectedClass = document.getElementById("classSelect").value;
    exportToExcel(selectedClass);
});
/* ---------------- DOM refs ---------------- */
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

// Navigation logic
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-target');
        pages.forEach(p => p.classList.remove('active'));
        const page = document.getElementById(target);
        if (page) page.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/* ---------------- Teacher: populate class dropdown ---------------- */
const classSelect = document.getElementById('classSelect');
Object.keys(classData).forEach(cls => {
    const opt = document.createElement('option'); opt.value = cls; opt.textContent = cls;
    classSelect.appendChild(opt);
});

// Stat DOM
const totalStudentsEl = document.getElementById('totalStudents');
const checkedInEl = document.getElementById('checkedIn');
const absentCountEl = document.getElementById('absentCount');
const onLeaveEl = document.getElementById('onLeave');
const absentTableBody = document.querySelector('#absentTable tbody');
const lowListEl = document.getElementById('lowList');

// Chart instances
let pieChart = null, trendChart = null;

// Helper chart rendering functions
function renderTeacherCharts(cls) {
    const data = classData[cls];
    if (!data) return;

    // Destroy if exists
    if (pieChart) pieChart.destroy();
    if (trendChart) trendChart.destroy();

    // Pie
    const pieCtx = document.getElementById('attendancePie').getContext('2d');
    pieChart = new Chart(pieCtx, {
        type: 'doughnut',
        data: {
            labels: ['Present', 'Absent', 'On Leave'],
            datasets: [{ data: [data.present, data.absent, data.onLeave], backgroundColor: ['#10b981', '#ef4444', '#f59e0b'] }]
        },
        options: { plugins: { legend: { position: 'bottom' } }, cutout: '60%' }
    });

    // Trend (line)
    const labels = ['7 days ago', '6', '5', '4', '3', '2', 'Today'];
    const trendCtx = document.getElementById('trendChart').getContext('2d');
    trendChart = new Chart(trendCtx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Attendance %',
                data: data.trend7,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59,130,246,0.08)',
                tension: 0.35,
                fill: true,
                pointRadius: 4
            }]
        },
        options: {
            interaction: { mode: 'index', intersect: false },
            plugins: { legend: { display: false } },
            scales: { y: { suggestedMin: 50, suggestedMax: 100 } }
        }
    });
}

// Update UI
function updateTeacherUI(cls) {
    const data = classData[cls];
    if (!data) return;
    totalStudentsEl.textContent = data.totalStudents;
    checkedInEl.textContent = data.present;
    absentCountEl.textContent = data.absent;
    onLeaveEl.textContent = data.onLeave;

    // absent table
    absentTableBody.innerHTML = '';
    if (Array.isArray(data.absentStudents) && data.absentStudents.length) {
        data.absentStudents.forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${s.roll || '-'}</td>
  <td>${s.name}</td>
  <td>
    <button class="btn ghost" data-action="mark-leave" data-roll="${s.roll}" data-class="${cls}">Mark Leave</button>
    <button class="btn" data-action="notify" data-roll="${s.roll}" data-class="${cls}">Notify Parent</button>
  </td>`;
            absentTableBody.appendChild(tr);
        });
    } else {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="3" class="muted">No absent students today</td>`;
        absentTableBody.appendChild(tr);
    }

    // low attendance
    lowListEl.innerHTML = '';
    if (Array.isArray(data.lowAttendance) && data.lowAttendance.length) {
        data.lowAttendance.forEach(st => {
            const li = document.createElement('li');
            li.textContent = `${st.name} — ${st.pct}%`;
            lowListEl.appendChild(li);
        });
    } else {
        const li = document.createElement('li'); li.textContent = 'No low-attendance students for this class.';
        lowListEl.appendChild(li);
    }

    // charts
    renderTeacherCharts(cls);
}

// Initial teacher load
const initialClass = Object.keys(classData)[0];
classSelect.value = initialClass;
updateTeacherUI(initialClass);

// class change handler
classSelect.addEventListener('change', (e) => {
    const cls = e.target.value;
    updateTeacherUI(cls);
});

// refresh button
document.getElementById('refreshBtn').addEventListener('click', () => {
    updateTeacherUI(classSelect.value);
});

// absent table actions (mark leave / notify)
document.querySelector('#absentTable tbody').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const roll = btn.getAttribute('data-roll');
    const cls = btn.getAttribute('data-class');
    if (action === 'mark-leave') {
        // Demo behavior: move student from absent to onLeave
        const arr = classData[cls].absentStudents || [];
        const idx = arr.findIndex(s => s.roll === roll);
        if (idx !== -1) {
            arr.splice(idx, 1);
            classData[cls].onLeave = (classData[cls].onLeave || 0) + 1;
            classData[cls].absent = Math.max(0, (classData[cls].absent || 1) - 1);
            updateTeacherUI(cls);
            alert(`Marked leave for roll ${roll} (${cls}).`);
        } else alert('Student not found (demo).');
    } else if (action === 'notify') {
        alert(`Parent notified for roll ${roll} (${cls}). (demo)`);
    }
});

/* ---------------- Admin Charts (sample) ---------------- */
const adminBar = new Chart(document.getElementById('adminBar').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Class 6', '7', '8', '9', '10', '11', '12'],
        datasets: [{ label: '% Present', data: [96, 92, 90, 94, 95, 89, 88], backgroundColor: '#3b82f6' }]
    },
    options: { scales: { y: { beginAtZero: true, max: 100 } } }
});

const adminDoughnut = new Chart(document.getElementById('adminDoughnut').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['RFID', 'App', 'Manual'], datasets: [{
            data: [2000, 2500, 300], backgroundColor: ['#60a5fa',
                '#34d399', '#f97316']
        }]
    },
    options: { plugins: { legend: { position: 'bottom' } } }
});

/* ---------------- Government Charts ---------------- */
const topBottomBar = new Chart(document.getElementById('topBottomBar').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Top A', 'Top B', 'Top C', 'Top D', 'Top E', 'Bottom A', 'Bottom B', 'Bottom C', 'Bottom D', 'Bottom E'],
        datasets: [{
            label: 'Attendance %', data: [98, 97, 96, 95, 95, 74, 72, 70, 69, 65], backgroundColor: function (ctx) {
                return ctx.dataIndex < 5 ? '#10b981' : '#ef4444';
            }
        }]
    }, options: { indexAxis: 'y', scales: { x: { max: 100 } } }
}); const districtTrend = new Chart(document.getElementById('districtTrend').getContext('2d'), {
    type: 'line', data:
    {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{
            label: 'District', data: [85, 86,
                87, 88, 87, 88, 88], borderColor: '#3b82f6', fill: false
        }, {
            label: 'National Avg', data: [88, 88, 88, 88, 89,
                89, 89], borderColor: '#94a3b8', borderDash: [5, 5], fill: false
        }]
    }, options: {
        scales: {
            y: {
                suggestedMin: 60,
                suggestedMax: 100
            }
        }
    }
}); // government filter demo
document.getElementById('govFilter').addEventListener('change', (e) => {
    const val = e.target.value;
    const el = document.getElementById('districtAttendance');
    if (val === 'urban') el.textContent = '90%'; else if (val === 'rural') el.textContent = '84%'; else el.textContent =
        '88%';
});

// make charts responsive on window resize
window.addEventListener('resize', () => {
    [pieChart, trendChart, adminBar, adminDoughnut, topBottomBar, districtTrend].forEach(c => {
        try { c.resize() } catch
        (e) { }
    });
});