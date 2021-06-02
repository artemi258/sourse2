function calc(calcForm, blockSize, blockMaterial, blockOptions, price) {
    const calc = document.querySelector(calcForm),
          size = document.querySelectorAll(blockSize),
          material = document.querySelectorAll(blockMaterial),
          options = document.querySelectorAll(blockOptions),
          calcPrice = document.querySelector(price);


          let product = {
            
          };
          let productPrice = {

          };

          function calculatingPrice() {

          }

          function calculation(event, elem, type) {
            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch (item.nodeName) {
                        case 'SELECT':
                            
                            product[type] = item.value;
                            productPrice[type] = item;
                            console.log(product);
                            console.log(productPrice);
                            break;
                        
                            
                        default:
                            console.log('tam');
                            break;
                    }
                });
            })
            

          }

          calculation('change', size, 'size');
          calculation('change', material, 'material');
          calculation('change', options, 'options');


};

export default calc;