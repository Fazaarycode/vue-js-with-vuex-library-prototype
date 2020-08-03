function setFormStyleTextArea() {
    let formInputs = document.querySelectorAll('textarea');
    // console.log('What is this ', formInputs)
    // set padding , height, width and color and font
    formInputs.forEach(el => {
        el.style.padding = '10px';
        el.style.height = '20px';
        el.style.lineHeight = '1.7';
        el.style.width = '200px';
        el.style.color = 'white';
        el.style.fontWeight = '800';
        el.style.backgroundColor = 'purple';

    })
}

function setFormStyle() {
    console.log('tf')
    let formInputs = document.querySelectorAll('input');
    console.log('What is this ', formInputs)
    // set padding , height, width and color and font
    formInputs.forEach(el => {
        el.style.padding = '10px';
        el.style.height = '40px';
        el.style.lineHeight = '1.7';
        el.style.width = '200px';
        el.style.color = 'white';
        el.style.fontWeight = '800';
        el.style.backgroundColor = 'purple';

    })
}


function errorLabelsHightlight() {
    let validationLabels = document.querySelectorAll('.formulate-input-error');
    validationLabels.forEach(label => {
        label.style.color = 'red';
        label.style.fontStyle = 'italic';
        label.style.fontWeight = '800';
        label.style.fontSize = '18px';

    })
}

module.exports = {
    setFormStyle,
    setFormStyleTextArea,
    errorLabelsHightlight

}