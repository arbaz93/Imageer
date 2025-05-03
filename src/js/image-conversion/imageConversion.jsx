
export function handleConversion(files) {
    if(!files || files.length === 0) return;
    
}

export function validateImageForConversion(image) {

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