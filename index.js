const product = document.querySelector('#product');

product.addEventListener('dragstart', (e) => {
    console.log('drag start');
});

product.addEventListener('dragend', (e) => {
    console.log('drag end');
});

product.addEventListener('drag', (e) => {
    console.log('drag');
});

const container = document.querySelector('#container');

container.addEventListener('dragenter', (e) => {
    console.log('Drag Enter');
});

container.addEventListener('dragleave', (e) => {
    console.log('Drag Leave');
});

container.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log('Drag Over');
});

container.addEventListener('drop', (e) => {
    console.log('Drop');
    container.appendChild(product);
});
