/* eslint-disable no-invalid-this */
window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    const matrix = '+7 (___) ___ ____';
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < val.length) {
        return val.charAt(i++);
      } else {
        return i >= val.length ? '' : a;
      }
    });
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const input = document.querySelector('#tel');
  input.addEventListener('input', mask, false);
  input.addEventListener('focus', mask, false);
  input.addEventListener('blur', mask, false);
});

