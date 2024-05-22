let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        document.getElementById('alarm-message').textContent = 'Wake up!';
        alarmTimeout = setTimeout(() => {
            alert('Wake up!');
            document.getElementById('alarm-message').textContent = '';
            alarmTime = null;
        }, 1000);
    }

    setTimeout(updateTime, 1000);
}

function setAlarm() {
    const input = document.getElementById('alarm-time').value;
    if (input) {
        alarmTime = input;
        document.getElementById('alarm-message').textContent = `Alarm set for ${alarmTime}`;
    }
}

updateTime();
