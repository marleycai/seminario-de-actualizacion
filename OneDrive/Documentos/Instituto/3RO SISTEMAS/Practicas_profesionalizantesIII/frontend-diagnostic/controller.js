button0.addEventListener('click', action => display.value = display.value + '0');

button1.addEventListener('click', action => display.value = display.value + '1');

button2.addEventListener('click', action => display.value = display.value + '2');

button3.addEventListener('click', action => display.value = display.value + '3');

button4.addEventListener('click', action => display.value = display.value + '4');

button5.addEventListener('click', action => display.value = display.value + '5');

button6.addEventListener('click', action => display.value = display.value + '6');

button7.addEventListener('click', action => display.value = display.value + '7');

button8.addEventListener('click', action => display.value = display.value + '8');

button9.addEventListener('click', action => display.value = display.value + '9');

buttonPunto.addEventListener('click', action => display.value = display.value + '.');

buttonSumar.addEventListener('click', action => display.value = display.value+'+');

buttonRestar.addEventListener('click', action => display.value = display.value+'-');

buttonMult.addEventListener('click', action => display.value = display.value+'*');

buttonDiv.addEventListener('click', action => display.value = display.value+'/');

buttonIgual.addEventListener( 'click', action => display.value = eval( display.value ) );

buttonBorrar.addEventListener( 'click', action => display.value = '' );
