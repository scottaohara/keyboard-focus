;(function () {
    'use strict';

    function keyboardFocus (e) {

        if (e.keyCode !== 9) {
            return;
        }

        switch (e.target.nodeName.toLowerCase()) {
            case 'input':
            case 'select':
            case 'textarea':
                break;
            default:
                document.documentElement.classList.add('keyboard-focus');
                document.removeEventListener('keydown', keyboardFocus, false);
                document.addEventListener('mouseup', mouseFocus, false);
        }
    }

    function mouseFocus (e) {
        document.documentElement.classList.remove('keyboard-focus');
        document.removeEventListener('mouseup', mouseFocus, false);
        document.addEventListener('keydown', keyboardFocus, false);
    }

    document.addEventListener('keydown', keyboardFocus, false);

})();
