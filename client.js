// Connect to your external Socket.IO server
const socket = io.connect('https://your-external-server.com');

document.getElementById('changeImageBtn').addEventListener('click', () => {
    const newSrc = 'newImage.jpg'; // Change logic as per your use case
    socket.emit('change image', newSrc);
});

socket.on('change image', (newSrc) => {
    document.getElementById('image').src = newSrc;
});
