const info = document.querySelectorAll('#info');
const artImg = document.querySelectorAll('.art-img');
const artBlock = document.querySelectorAll('.art');



artBlock.forEach((block) => {
    block.addEventListener(('mouseover'), () => {
        let artInfo = block.lastElementChild;
        artInfo.innerHTML = `"${block.firstElementChild.firstElementChild.id}"<br>Procreate`;
        artInfo.classList.add('art-info');
    });
    block.addEventListener(('mouseout'), () => {
        let artInfo = block.lastElementChild;
        artInfo.innerHTML = "";
        block.lastElementChild.classList.remove('art-info');
    });
});