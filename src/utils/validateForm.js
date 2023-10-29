export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name) {
        errors.name = 'Пожалуйста, введите ваше имя.';
    }

    if (!formData.email) {
        errors.email = 'Пожалуйста, введите ваш email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Пожалуйста, введите корректный email.';
    }

    if (!formData.phone) {
        errors.phone = 'Пожалуйста, введите ваш номер телефона.';
    }

    if (!formData.message) {
        errors.message = 'Пожалуйста, введите ваше сообщение.';
    }

    return errors;
};
