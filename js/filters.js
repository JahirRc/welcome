let selectedColor = 'all';

const colorImages = document.querySelectorAll('#color,#rarity,#type,#class');
colorImages.forEach(image => {
    image.addEventListener('click', () => {
        selectedColor = image.getAttribute('src');
        console.log(selectedColor);
    });
});

/* FILTER - NAVBAR */
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

/* LIVE SEARCH */
$(document).ready(function() {
    $('#searchInput').on('input', function() {
        var searchValue = $(this).val().toLowerCase();
        $('.image-container .img-wrapper').each(function() {
            var itemData = $(this).data('name').toLowerCase();
            if (itemData.indexOf(searchValue) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
});





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
