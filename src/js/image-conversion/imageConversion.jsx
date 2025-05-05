import axios from "axios";
import conversionFormats from "../../utils/conversionFormats";
import { base64ToArrayBuffer } from '../../utils/miscFunctions';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export async function sendImagesForConversion(files, progress) {
    if (!files || files.length === 0) return;
    const formData = new FormData();
    files.forEach(file => {
        formData.append('images', file); // 'images' is the field name your backend expects
        formData.append('convertTo[]', file.convertTo);
    });

    try {
        const config = {
            onUploadProgress: (progressEvent) => {
                const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                console.log(percent)
                progress(percent);
            }
        };
    
        const res = await axios.post(`${SERVER_URL}/api/convert-images`, formData, config)
        const { base64Buffers, filenames, formats } = res.data;
        const blobs = base64Buffers.map((base64, i) => {
            const arrBuffer = base64ToArrayBuffer(base64);
            const blob = new Blob([arrBuffer], { type: `image/${formats[i]}` })

            return blob;
        })
        console.log(res)

        // const imgUrls = blobs.map(blob => URL.createObjectURL(blob));

        const convertedFiles = blobs.map((blob, i) => ({ url: URL.createObjectURL(blob), filename: filenames[i],  size: blob.size}));
        console.log(convertedFiles)
        return { success: true, convertedFiles };
    } catch (err) {
        console.error(err)
        return { success: false, error: err };;
    }

}

export function validateImagesForConversion(files) {
    const validExtensions = conversionFormats
        .map(f => f.toLowerCase())
        .filter(f => f !== '...');

    const hasInvalidFile = files.some(file => {
        const parts = file.name.split('.');
        const fileExt = parts.length > 1 ? parts.pop().toLowerCase() : '';

        return !validExtensions.includes(fileExt);
    });

    if (hasInvalidFile) return { message: 'One or more files have an unsupported or missing extension.', bool: false };

    const missingConvertToFormat = files.some(file => {
        const lowerCaseExt = file?.convertTo?.toLowerCase()
        return !validExtensions.includes(lowerCaseExt)
    })

    if (missingConvertToFormat) return { message: 'Please select format you want to convert images to.', bool: false };

    // Proceed with conversion
    return { message: 'Image validation success', bool: true };;
}

export function setImageFormatTo(id, format, callback) {
    callback(allFiles => allFiles.map(file => {
        if (file.id === id) {
            file.convertTo = format;
            return file;
        }
        return file;
    }))
}
export function removeImageFromFiles(id, callback) {
    callback(allFiles => allFiles.filter(file => file.id != id));
}