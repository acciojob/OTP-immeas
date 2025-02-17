//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const codeFields = document.querySelectorAll('.code');
    
    codeFields.forEach((field, index) => {
        // Focus next field on typing
        field.addEventListener('input', function () {
            if (field.value) {
                const nextField = codeFields[index + 1];
                if (nextField) {
                    nextField.focus();
                }
            }
        });

        // Handle backspace behavior
        field.addEventListener('keydown', function (event) {
            if (event.key === 'Backspace' && !field.value) {
                const previousField = codeFields[index - 1];
                if (previousField) {
                    previousField.focus();
                }
            }
        });
    });

    // Automatically focus the first input field
    codeFields[0].focus();
});
