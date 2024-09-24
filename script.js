// Data for each room
const rooms = {
    room1: {
        title: "Room 1",
        description: "This is the description for Room 1. It's a beautifully crafted virtual space with a serene environment.",
        images: ["room1-1.png", "room1-2.png", "room1-3.png"],
        link: "https://room1site.com"
    },
    room2: {
        title: "Room 2",
        description: "Room 2 is an industrial-themed space with sleek design elements and a futuristic vibe.",
        images: ["room2-1.png", "room2-2.png", "room2-3.png"],
        link: "https://room2site.com"
    },
    // Add data for more rooms here
};

let currentImageIndex = 0;
let currentRoomId = "";

// Function to open a room modal
function openRoom(roomId) {
    const room = rooms[roomId];
    if (room) {
        currentRoomId = roomId;
        document.getElementById("roomTitle").innerText = room.title;
        document.getElementById("roomDescription").innerText = room.description;
        document.getElementById("roomImage").src = room.images[0];
        document.getElementById("roomLink").href = room.link;
        currentImageIndex = 0;
        document.getElementById("roomModal").style.display = "flex";
    }
}

// Function to close the room modal
function closeRoom() {
    document.getElementById("roomModal").style.display = "none";
}

// Function to navigate through slideshow
function nextImage() {
    const room = rooms[currentRoomId];
    if (room) {
        currentImageIndex = (currentImageIndex + 1) % room.images.length;
        document.getElementById("roomImage").src = room.images[currentImageIndex];
    }
}

function prevImage() {
    const room = rooms[currentRoomId];
    if (room) {
        currentImageIndex = (currentImageIndex - 1 + room.images.length) % room.images.length;
        document.getElementById("roomImage").src = room.images[currentImageIndex];
    }
}
