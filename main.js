import init, { detect_faces } from "./pkg/wasm_face_rec.js";  // Import WASM functions

// Handle Image Upload
async function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = document.getElementById("uploaded-image");
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
        const imageData = await loadImageData(img);

        // Call WASM function (currently returns dummy data)
        const faces = detect_faces(imageData.data, img.width, img.height);  
        drawBoundingBoxes(faces);
    };
}

// Convert Image to Byte Array
async function loadImageData(img) {
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(ctx.getImageData(0, 0, img.width, img.height));
    });
}

// Draw Bounding Boxes (if face detection was working)
function drawBoundingBoxes(faces) {
    const canvas = document.getElementById("face-overlay");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    faces.forEach(face => {
        ctx.strokeRect(face.x, face.y, face.width, face.height);
    });
}

// Initialize Everything on Page Load
window.onload = async () => {
    await init();  // Initialize WASM
    document.getElementById("file-input").addEventListener("change", handleFile);
};

