function openRoom(roomId) {
    document.getElementById('room-detail').style.display = 'flex';

    if (roomId === 'room1') {
        document.getElementById('room-title').innerText = 'Room 1';
        document.getElementById('room-description').innerText = 'This is a description of Room 1.';
    } else if (roomId === 'room2') {
        document.getElementById('room-title').innerText = 'Room 2';
        document.getElementById('room-description').innerText = 'This is a description of Room 2.';
    } else if (roomId === 'room3') {
        document.getElementById('room-title').innerText = 'Room 3';
        document.getElementById('room-description').innerText = 'This is a description of Room 3.';
    } else if (roomId === 'room4') {
        document.getElementById('room-title').innerText = 'Room 4';
        document.getElementById('room-description').innerText = 'This is a description of Room 4.';
    } else if (roomId === 'room5') {
        document.getElementById('room-title').innerText = 'Room 5';
        document.getElementById('room-description').innerText = 'This is a description of Room 5.';
    } else if (roomId === 'room6') {
        document.getElementById('room-title').innerText = 'Room 6';
        document.getElementById('room-description').innerText = 'This is a description of Room 6.';
    } else if (roomId === 'room7') {
        document.getElementById('room-title').innerText = 'Room 7';
        document.getElementById('room-description').innerText = 'This is a description of Room 7.';
    } else if (roomId === 'room8') {
        document.getElementById('room-title').innerText = 'Room 8';
        document.getElementById('room-description').innerText = 'This is a description of Room 8.';
    }
}

function closeRoom() {
    document.getElementById('room-detail').style.display = 'none';
}
