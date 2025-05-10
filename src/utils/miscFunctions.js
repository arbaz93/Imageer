export function formatBytes(bytes, decimal = 2) {
    if (bytes >= 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024 * 1024)).toFixed(decimal) + 'GB';
    } else if (bytes >= 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(decimal) + 'MB';
    } else if (bytes >= 1024) {
      return (bytes / 1024).toFixed(decimal) + 'KB';
    } else {
      return bytes + 'B';
    }
}

export function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// Find file extension of a file using its name
export function fileExtension(fileName) {
  let fullstopAt = fileName.length - fileName.split('').reverse().indexOf('.');
  const format = fileName.split('').slice(fullstopAt).join('').toLowerCase();

  return format
}