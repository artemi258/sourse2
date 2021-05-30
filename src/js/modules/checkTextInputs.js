function checkTextInputs(selector) {
    const inputs = document.querySelectorAll(selector);
inputs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value.match(/[a-z]/ig)) {
            item.value = '';
        }
    });
    
});
    
}

export default checkTextInputs;