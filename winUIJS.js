document.addEventListener("DOMContentLoaded", function() {
    // An array of map names to check local storage and update on load
    const maps = ['mirage', 'office', 'dust2', 'anubis', 'nuke', 'inf', 'ancient', 'vertigo', 'overpass'];

    maps.forEach((mapName) => {
        const img = document.getElementById(mapName);
        const savedImageSrc = localStorage.getItem(mapName + 'ImageSrc');

        if (savedImageSrc) {
            img.src = savedImageSrc;
        }
    });
});

function changeMapImage(mapName, newSrc) {
    const img = document.getElementById(mapName);
    img.src = newSrc;

    // Save the new image source to localStorage
    localStorage.setItem(mapName + 'ImageSrc', newSrc);
}
