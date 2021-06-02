function calc(calcForm, blockSize, blockMaterial, blockOptions, price) {
    const calc = document.querySelector(calcForm),
          size = document.querySelectorAll(blockSize),
          sizeElem = size[0].querySelectorAll('option'),
          material = document.querySelectorAll(blockMaterial),
          materialElem = material[0].querySelectorAll('option'),
          options = document.querySelectorAll(blockOptions),
          optionsElem = options[0].querySelectorAll('option'),
          calcPrice = document.querySelector(price);


          let product = {};
          let productPrice = {};

          function calculatingPrice(elem, meaning) {
            

          }
          function createPrice(event, elem, type) {
            elem.forEach(item => {
                item.addEventListener(event, () => {

                    productPrice[type] = item.value;
                    createProduct(sizeElem, type);
                    createProduct(materialElem, type);
                    createProduct(optionsElem, type);
                    console.log(productPrice);
                    console.log(product);

                });
            });
          }

          function createProduct(elem, type) {
            elem.forEach(item=> {

                if (item.getAttribute('value') == productPrice.size) {
                    product[type] = item.textContent;
                }
                if (item.getAttribute('value') == productPrice.material) {
                    product[type] = item.textContent;
                }
                if (item.getAttribute('value') == productPrice.options) {
                    product[type] = item.textContent;
                }
            });
          }

          

          createPrice('change', size, 'size');
          createPrice('change', material, 'material');
          createPrice('change', options, 'options');
        //   calculation('input', calc, 'promocode');


};

export default calc;