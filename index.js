function openRoom(roomId) {
    document.getElementById('room-detail').style.display = 'flex';

    // Example: change details based on the clicked room
    if (roomId === 'room1') {
        document.getElementById('room-title').innerText = 'Room 1';
        document.getElementById('room-description').innerText = 'This is a description of Room 1.';
        // Add images or change src as needed
    }
    // Add other rooms as needed
}

function closeRoom() {
    document.getElementById('room-detail').style.display = 'none';
}
