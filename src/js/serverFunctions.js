import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export async function sendImageIdToServerForDeletionAfterMonth(id) {
    const payload = {
        'id': id,
        'timestamp': Date.now()
    }
    try {
        const req = axios.post(`${serverUrl}/delete-image-time-month`, payload);
        console.log('success', req);
    } catch(err) {
        console.error(err)
    }
}