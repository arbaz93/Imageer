import imageCompression from 'browser-image-compression';
import { fileExtension } from '../../utils/miscFunctions';
const browserImageCompressionValidFormats = [
    { name:'jpeg', mimeType: 'image/jpeg' },
    { name:'jpg', mimeType: 'image/jpeg' },
    { name:'png', mimeType: 'image/png' },
    { name:'webp', mimeType: 'image/webp' },
    { name:'gif', mimeType: 'image/gif' }
]
export async function compressImage(file, maxSize = 3, useWebWorker = true) {
    const ext = fileExtension(file.name);
    const formatIsValid = browserImageCompressionValidFormats.some(ex => ex.name == ext);
    if(!formatIsValid) return { type: 'error', message: 'format not supported for compression.'};
    
    const options = {
        maxSizeMB: maxSize,
        fileType: file.type,
        useWebWorker
    }
    try {
        const compressedBlob = await imageCompression(file, options);
        const fileFromBlob = new File([compressedBlob], compressedBlob.name, {type: file.type});
        fileFromBlob.id= file.id;
        
        return fileFromBlob;
    } catch(error) {
        console.error(error);
        return { type: 'error', message: 'file Compression failed!'};
    }
}