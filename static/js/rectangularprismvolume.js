

volBtn = document.querySelector('#button_volume');

volBtn.addEventListener('click',function(e){
    
    txtLength = document.querySelector('#value_length');
    txtWidth = document.querySelector('#value_width');
    txtHeight = document.querySelector('#value_height');
    txtRectvolume = document.querySelector('#value_rectanglevolume');

    let rectanglevolume;

    rectanglevolume = parseFloat(txtLength.value) * parseFloat(txtWidth.value);

    txtRectvolume.value = rectanglevolume;
});