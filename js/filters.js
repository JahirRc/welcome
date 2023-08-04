let selectedColor = 'all';

const colorImages = document.querySelectorAll('#color,#rarity,#type,#class');
colorImages.forEach(image => {
    image.addEventListener('click', () => {
        selectedColor = image.getAttribute('src');
        console.log(selectedColor);
        filterData();
    });
});

function filterData() {
    const imageWrappers = document.querySelectorAll('.img-wrapper');
    imageWrappers.forEach(wrapper => {
        const dataColor = wrapper.getAttribute('data-color');
        const dataRarity = wrapper.getAttribute('data-rarity');
        const dataType = wrapper.getAttribute('data-type');
        const dataClass = wrapper.getAttribute('data-class');
        if (selectedColor === 'all' || dataColor === selectedColor || dataRarity == selectedColor || dataType == selectedColor || dataClass == selectedColor) {
            wrapper.style.display = 'block';
        } else {
            wrapper.style.display = 'none';
        }
    });
}





/*

const rarityImages = document.querySelectorAll('#rarity');
rarityImages.forEach(image => {
    image.addEventListener('click', () => {
        selectedRarity = image.getAttribute('src');
        console.log(selectedRarity);
        filterData();
    });
});

function filterData2() {
    const imageWrappers = document.querySelectorAll('.img-wrapper');
    imageWrappers.forEach(wrapper => {
        const dataRarity = wrapper.getAttribute('data-rarity');
        if (selectedRarity === 'all' || dataRarity === selectedRarity) {
            wrapper.style.display = 'block';
        } else {
            wrapper.style.display = 'none';
        }
    });
}

*/