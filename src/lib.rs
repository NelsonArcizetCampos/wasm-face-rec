use wasm_bindgen::prelude::*;

// Define a struct for face bounding boxes
#[wasm_bindgen]
pub struct FaceBoundingBox {
    pub x: u32,
    pub y: u32,
    pub width: u32,
    pub height: u32,
}

// Placeholder function that "detects" faces
#[wasm_bindgen]
pub fn detect_faces(_image_data: &[u8], _width: u32, _height: u32) -> Vec<FaceBoundingBox> {
    vec![
        FaceBoundingBox { x: 50, y: 50, width: 100, height: 100 },
        FaceBoundingBox { x: 200, y: 80, width: 90, height: 90 },
    ]
}
