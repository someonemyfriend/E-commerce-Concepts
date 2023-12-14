void function() {
    'use strict';
    
    // Get the element with the ID "save-color-btn"
    var saveColorBtn = document.getElementById("save-color-btn");
    
    // Add a click event listener to the "save-color-btn" element
    saveColorBtn.addEventListener('click', e => {
    
        // Remove all elements with the class 'js-color' inside the element with ID 'choosenColor'
        $('#choosenColor').find('.js-color').remove();
        
        // Iterate over an array [0, 1, 2]
        for (let i in [0, 1, 2]) {
            var color = null;
            var els = saveColorBtn.form.elements['legs-color-swatch-' + i];
            
            // Check the type of 'els' and determine the appropriate action
            if (!els) {
                continue;
            } else if (els instanceof HTMLElement) {
                if (els.checked) color = els;
            } else if ((els instanceof RadioNodeList || Array.isArray(els)) && 1 < els.length) {
                color = [].find.call(els, el => el.checked);
            } else {
                throw 'unexpected els';
            }
            
            if (!color) continue;
            
            // Extract the background style from the next sibling of the selected color element
            var bg = color.nextElementSibling.style.background;
            bg = bg.replace('38-38', '147-147');
            
            // Create a new list item element with a specific structure using jQuery
            var $colorSelected = $(`
                <li class="js-color">
                    <!-- ... (structure details skipped for brevity) -->
                </li>
            `);
            
            // Set the background styles for various elements within the created list item
            $colorSelected.find('label').css('background', bg);
            $colorSelected.find('span').css('background', bg);
            $colorSelected.find('.after').css('background', bg.replace('147-147', '38-38'));
            
            // Append the created list item to the element with ID 'choosenColor'
            $('#choosenColor').append($colorSelected);
        }
        
        // Move the element with ID 'addColorBtn' to the end of the element with ID 'choosenColor'
        $('#choosenColor')[0].insertAdjacentElement('beforeend', $('#choosenColor #addColorBtn')[0]);
        
        // Prevent the default behavior of the click event!!
        e.preventDefault();
        
        // Simulate a click on an element with the class 'js-color-combinations-overlay-close'
        $('.js-color-combinations-overlay-close').click();
    });
}();
