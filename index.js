let pressed = [];
const secrectCode = 'greenqueen'

window.addEventListener('keyup', (e) => {
  // console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secrectCode.length -1, pressed.length - secrectCode.length );
  if (pressed.join('').includes(secrectCode)) {
    // console.log('Ding Ding');
    cornify_add();
  }
  // console.log(pressed);
})