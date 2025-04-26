import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
const UNSIGNED_PRESET_NAME = import.meta.env.VITE_UNSIGNED_PRESET_NAME;
const uploadUrl = `${BASE_URL}/${CLOUD_NAME}/image/upload`;

export async function uploadImageToCloudinary(data, onProgess) {

    const formData = new FormData();
    formData.append('file', data.image);
    formData.append('upload_preset', UNSIGNED_PRESET_NAME);
    formData.append('cloud_name', CLOUD_NAME);

    try {
        const response = await axios.post(uploadUrl, formData, { onUploadProgress: handleProgress});

        function handleProgress(progressEvent) {
            const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            if (onProgess) onProgess(percentage);
        }
        return response;
    } catch (err) {
        console.error('something went wrong!!!', err)
        return err;
    }

}