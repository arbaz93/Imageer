import axios from "axios";

const serverUrl = import.meta.env.VITE_SERVER_URL;
export async function sendImageIdToServerForDeletionAfterMonth(id) {
    const payload = {
        'id': id,
        'timestamp': Date.now()
    }
    try {
        const res = await axios.post(`${serverUrl}/api/delete-image-time-month`, payload);
        return res;
    } catch(err) {
        console.error(err);
        return {success: false, err};
    }
}