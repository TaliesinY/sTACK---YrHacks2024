// function to save student info to local storage 
function saveStudentInfo() {
    const preferredName = document.getElementById('preferredName').value;
    const pronouns = document.getElementById('pronouns').value;
    const favoriteSubject = document.getElementById('favoriteSubject').value;
    const bio = document.getElementById('bio').value;
    const comments = document.getElementById('comments').value;

    const studentInfo = {
        preferredName: preferredName,
        pronouns: pronouns,
        favoriteSubject: favoriteSubject,
        bio: bio,
        comments: comments,
    };
    let studentsData = JSON.parse(localStorage.getItem('studentsData')) || [];
    studentsData.push(studentInfo);
    localStorage.setItem('studentsData', JSON.stringify(studentsData));
    window.location.href = "home.html";
}

//Parsing the array into 
document.addEventListener('DOMContentLoaded', function () {
    const studentsData = JSON.parse(localStorage.getItem('studentsData'));
    if (studentsData && studentsData.length > 0) {
        const studentDropdown = document.getElementById('students');
        studentsData.forEach(function(studentInfo) {
            const option = document.createElement('option');
            option.value = studentInfo.preferredName;
            option.text = studentInfo.preferredName; 
            studentDropdown.appendChild(option);
        });
    }
});
// checking data and displaying info when studentDropdown is selected (the dropdown thingy)
document.addEventListener('DOMContentLoaded', function () {
    const studentDropdown = document.getElementById('students');
    const studentInfoDiv = document.getElementById('studentInfoDiv');
    function displayStudentInfoDiv() {
        const selectedStudent = studentDropdown.value;
        studentInfoDiv.style.display = 'none';
        if (selectedStudent !== '') {
            const studentData = JSON.parse(localStorage.getItem('studentsData'));
            
            const selectedStudentData = studentData.find(student => student.preferredName === selectedStudent);

            if (selectedStudentData) {
                studentInfoDiv.innerHTML = `
                    <p><strong>Name:</strong> ${selectedStudentData.preferredName|| 'N/A'}</p>
                    <p><strong>Pronouns:</strong> ${selectedStudentData.pronouns|| 'N/A'}</p>
                    <p><strong>Favorite Subject:</strong> ${selectedStudentData.favoriteSubject|| 'N/A'}</p>
                    <p><strong>Bio:</strong> ${selectedStudentData.bio|| 'N/A'}</p>
                    <p><strong>Comments for Teacher:</strong> ${selectedStudentData.comments|| 'N/A'}</p>
                `;
                studentInfoDiv.style.display = 'block'; 
            }
        }
    }
    studentDropdown.addEventListener('change', displayStudentInfoDiv);
    displayStudentInfoDiv();
});

// displays the content or hides the old ones
document.addEventListener('DOMContentLoaded', function () {
    const studentDropdown = document.getElementById('studentDropdown');
    const studentInfoDiv = document.getElementById('studentInfoDiv');
    function displayStudentInfoDiv() {
        const selectedStudent = studentDropdown.value;
        studentInfoDiv.style.display = 'none';
        if (selectedStudent !== 'selectStudent') {
            studentInfoDiv.style.display = 'block';
        }
    }
    studentDropdown.addEventListener('change', displayStudentInfoDiv);

    displayStudentInfoDiv();
});

// Creates a new account given username and password
function addAccount() {
    const usernameInput = document.getElementsByName("username-input")[0].value;
    const passwordInput = document.getElementsByName('password-input')[0].value;
    const positionInput = document.getElementsByName('position-input')[0].value;

    /**userNames = JSON.parse(localStorage.getItem('usernames'));
    passwords = JSON.parse(localStorage.getItem('passwords'));
    positions = JSON.parse(localStorage.getItem('positions'));*/
    for (let i = 0; i < userNames.length; i++) {
        if (usernameInput === userNames[i]) {
            booleanValue = true;
        }
    }
    if (!booleanValue) {
        userNames.push(usernameInput);
        passwords.push(passwordInput);
        positions.push(positionInput);
    }
    /*localStorage.setItem('usernames', JSON.stringify(userNames));
    localStorage.setItem('passwords', JSON.stringify(passwords));
    localStorage.setItem('positions', JSON.stringify(positions));*/
}

//checks if the account that the user logs in with is valud
function verifyAccount() {
    usernameInput = document.getElementsByName('loginUsername-input')[0].value;
    for (let i = 0; i < userNames.length - 1; i++) {
        if (usernameInput === userNames[i]) {
            if (positions[i] === "teacher") {
                console.log("teacherlog");
                window.location = 'http://127.0.0.1:5500/teacherPage.html';
            } else if (positions[i] === "student") {
                window.location = 'http://127.0.0.1:5500/studentPage.html';
                console.log('studentlog');
            }
        } else {
            window.location = 'http://127.0.0.1:5500/home.html';
            console.log("homelog");
        }
    }
}
