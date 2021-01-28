

volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){
    
    txtRadius = document.querySelector('#value_radius');
    txtHeight = document.querySelector('#value_height');
    txtCylindervolume = document.querySelector('#value_cylindervolume');

    let cylindervolume;

    cylindervolume = parseFloat(txtRadius.value) * parseFloat(txtHeight.value);

    txtCylindervolume.value = cylindervolume;
});