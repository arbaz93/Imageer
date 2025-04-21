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
    const message = encodeURIComponent(`${text} ${imageUrl}`);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const url = isMobile
        ? `https://wa.me/?text=${message}`  
        : `https://web.whatsapp.com/send?text=${message}`;

    window.open(url, '_blank');
}
export function shareToTelegram(imageUrl, text = '') {
    const url = `https://t.me/share/url?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}