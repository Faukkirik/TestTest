export const submitForm = (formData, onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    const url = 'http://localhost:9090/api/registration'; // Замените на реальный URL сервера

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                onSuccess();
            } else {
                onError();
            }
        }
    };

    xhr.send(JSON.stringify(formData));
};
