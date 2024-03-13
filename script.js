function translate(sourceLang, targetLang) {
    const originalText = document.getElementById('originalText').innerText;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: originalText,
            source: sourceLang,
            target: targetLang,
            format: 'text'
        })
    })
    .then(response => response.json())
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById('translatedText').innerText = translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
