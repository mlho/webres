function colorControls(mode){
    var colorCtn = document.getElementById('color-ctn');
    var singleColor = document.getElementById('single-color');
    var stripeColor = document.getElementById('stripe-color');

    if('breath' == mode || 'solid' == mode || 'stripe' == mode || 'strobe' == mode){
            colorCtn.style.display = 'block';

            if('stripe' == mode){
                stripeColor.style.display = 'block';
                singleColor.style.display = 'none';
            }
            else{
                stripeColor.style.display = 'none';
                singleColor.style.display = 'block';
            }
    }
    else{
        colorCtn.style.display = 'none';
    }
}

(function() {
    var modeSelect = document.getElementById('select-mode');
    var mode = modeSelect.value;
    colorControls(mode);

    modeSelect.oninput = function() {
        mode = modeSelect.value;
        colorControls(mode);
    }

    var slider = document.getElementById('brightness-slider');
    var output = document.getElementById('brightness-output');
    output.innerHTML = slider.value + ' %';
    
    slider.oninput = function() {
        output.innerHTML = this.value + ' %';
    }
})();