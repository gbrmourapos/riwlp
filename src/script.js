const URL = "http://127.0.0.1:5000";

const handleSubmitContact = async () => {
    console.log('[SCRIPT::handleSubmitContact] Start');
    try {
        const payload = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        }
        
        console.log('[SCRIPT::handleSubmitContact] Payload:', payload);
        const response = await fetch(`${URL}/contact`, {
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(payload),
        })
        
        clearContactForm();

        const json = await response.json();
        console.log('[SCRIPT::handleSubmitContact] Response:', json);

    } catch(err) {
        console.log('[SCRIPT::handleSubmitContact] Error:', err);
    }

    console.log('[SCRIPT::handleSubmitContact] End');
}

const clearContactForm = () => {
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('message').value = ""
}