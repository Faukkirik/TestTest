export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim().length < 1) {
        errors.name = 'Пожалуйста, введите ваше имя.';
    }

    if (!formData.email.trim()) {
        errors.email = 'Пожалуйста, введите ваш email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Пожалуйста, введите корректный email.';
    }

    if (!formData.phone.length < 5) {
        errors.phone = 'Пожалуйста, введите ваш номер телефона.';
    }

    if (!formData.message.trim()) {
        errors.message = 'Пожалуйста, введите ваше сообщение.';
    }

    return errors;
};
