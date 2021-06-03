function calc(promocode, blockSize, blockMaterial, blockOptions, price, button) {
    const promocod = document.querySelectorAll(promocode),
          size = document.querySelectorAll(blockSize),
          sizeElem = size[0].querySelectorAll('option'),
          material = document.querySelectorAll(blockMaterial),
          materialElem = material[0].querySelectorAll('option'),
          options = document.querySelectorAll(blockOptions),
          optionsElem = options[0].querySelectorAll('option'),
          calcPrice = document.querySelector(price),
          buttonForm = document.querySelector(button);

          buttonForm.disabled = true;

          let product = {};
          let productPrice = {};

          function calculatingPrice() {

                if (!productPrice.size || productPrice.size == '' || !productPrice.material || productPrice.material == '') {
                    calcPrice.textContent = 'Выберите размер и материал картины';
                } else if (productPrice.size && productPrice.size !== '' && productPrice.material && productPrice.material !== '') {
                    calcPrice.textContent = (+productPrice.size) * (+productPrice.material);
                    buttonForm.disabled = false;
                } 

                if (productPrice.size && productPrice.size !== '' && productPrice.material && productPrice.material !== '' &&productPrice.options && productPrice.options !== '') {
                    calcPrice.textContent = (+productPrice.size) * (+productPrice.material) + (+productPrice.options);
                }

                if (productPrice.promocod === 'IWANTPOPART') {
                    let sum = +calcPrice.textContent * 0.7;
                    calcPrice.textContent = sum;
                }

          }

          function createPrice(event, elem, type) {
            elem.forEach(item => {
                item.addEventListener(event, () => {

                    productPrice[type] = item.value;  // добавление цены услуги
                    createProduct(sizeElem, type);
                    createProduct(materialElem, type);
                    createProduct(optionsElem, type);
                    calculatingPrice();
                    console.log(productPrice);
                    console.log(product);
                });
            });
          }

          function createProduct(elem, type) {                          // добавление наименования услуги
            elem.forEach(item => {

                if (item.getAttribute('value') == productPrice[type]) {
                    product[type] = item.textContent;
                }
            });
          }

          createPrice('change', size, 'size');
          createPrice('change', material, 'material');
          createPrice('change', options, 'options');
          createPrice('input', promocod, 'promocod');
};

export default calc;