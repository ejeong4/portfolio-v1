const artBlock = document.querySelectorAll('.art');
const projectBlock = document.querySelectorAll('.project');
const moreBtn = document.querySelector('#more-button');

moreBtn.addEventListener('mouseover', () => moreBtn.classList.add('hover'));
moreBtn.addEventListener('mouseout', () => moreBtn.classList.remove('hover'));

artBlock.forEach((block) => {
    const artInfo = block.lastElementChild;
    block.addEventListener(('mouseover'), () => {
        artInfo.innerHTML = `"${block.firstElementChild.firstElementChild.id}"<br>Procreate`;
        artInfo.classList.add('art-info');
    });
    block.addEventListener(('mouseout'), () => {
        artInfo.innerHTML = "";
        block.lastElementChild.classList.remove('art-info');
    });
});

projectBlock.forEach((block) => {
    const info = block.lastElementChild;
    block.addEventListener(('mouseover'), () => {
        info.innerHTML = `"${block.firstElementChild.firstElementChild.id}"<br>HTML, CSS, Vanilla JS`;
        info.classList.add('project-info');
    });
    block.addEventListener(('mouseout'), () => {
        info.innerHTML = "";
        block.lastElementChild.classList.remove('project-info');
    });
});