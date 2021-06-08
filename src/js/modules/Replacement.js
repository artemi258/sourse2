function replacement(blockSelector) {

    const block = document.querySelectorAll(blockSelector);

   function showImg(blockImg) {

        const img = blockImg.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';

        blockImg.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        });
   }

   function hideImg(blockImg) {

    const img = blockImg.querySelector('img');

    img.src = img.src.slice(0, -6) + '.png';

    blockImg.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
        p.style.display = 'block';
    });
}

   block.forEach(item => {
        item.addEventListener('mouseenter' , (e) => {
            showImg(e.target);
    });
   });
    block.forEach(item => {
        item.addEventListener('mouseleave' , (e) => {
            hideImg(e.target);
        });
    });
}

export default replacement;