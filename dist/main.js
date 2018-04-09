class FormValidation {
    constructor() {
        /* selectors */
        this.buttonSubmitSelector = '.form__button_with-border';
        this.formGroup = '.form__group';
        this.inputSelector = '.form__input';
        this.errorMsgSelector = '.form__error-msg';

        /* css classes */
        this.errorMsgDisplayedClass = '_displayed';

        this.init();
    }

    init() {
        let btn = document.querySelector(this.buttonSubmitSelector),
            inputs = document.querySelectorAll(this.inputSelector);

        btn.addEventListener('click', () => {
            this.validateForm();
    });
        inputs.forEach((item, index) => {
            item.addEventListener('blur', (e) => {
            this.validateInput(e.currentTarget);
    });
    });
    }

    validateForm() {
        let errorInputsNum = 0,
            inputs = document.querySelectorAll(this.inputSelector),
            errorMsg = document.querySelectorAll(this.errorMsgSelector);

        inputs.forEach((item, index) => {
            if(!item.value) {
            errorInputsNum++;
            item.closest(this.formGroup).nextElementSibling.classList.add(this.errorMsgDisplayedClass);
        }
    });

        if(errorInputsNum == 0) {
            errorMsg.forEach((item, index) => {
                item.classList.remove(this.errorMsgDisplayedClass);
        });
            inputs.forEach((item, index) => {
                item.value = '';
        });
            alert('Thank you! Your message was sent.');
        }

    }

    validateInput(target) {
        let errorMsg = target.closest(this.formGroup).nextElementSibling;

        if(!target.value) {
            errorMsg.classList.add(this.errorMsgDisplayedClass);
        } else {
            errorMsg.classList.remove(this.errorMsgDisplayedClass);
        }
    }
}

let formValidation = new FormValidation();
