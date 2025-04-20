 export const shareFunctions = [shareToFacebook, shareToTwitter, shareToInstagram, shareToWhatsapp, shareToTelegram]
export function shareToFacebook(imageUrl) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}`
    window.open(url, '_blank')
}
export function shareToTwitter(imageUrl, text = '') {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}
export function shareToInstagram(imageUrl) {
    
}
export function shareToWhatsapp(imageUrl, text = '') {
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + imageUrl)}`;
    window.open(url, '_blank');
}
export function shareToTelegram(imageUrl, text = '') {
    const url = `https://t.me/share/url?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}