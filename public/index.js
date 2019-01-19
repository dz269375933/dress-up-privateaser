/* global PRIVATEASER*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const head='<table id="resultTable">' +
          '<tr>' +
          '<td>Name</td>' +
          '<td>Type</td>' +
          '<td>Amount</td>' +
          '</tr>';
    const bottom="</table>";
    const template = actors.map(actor => {
      return `
            <tr class="actor">
                <td><span>${actor.who}</span></td>
                <td><span>${actor.type}</span></td>
                <td><span>${actor.amount}</span></td>
            </tr>
      `;
    }).join('');

    div.id='resultDiv'
    div.innerHTML = head+template+bottom;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {

    const bar = PRIVATEASER.getBar();
    const time = document.querySelector('.js-time').value;
    const persons = document.querySelector('.js-persons').value;
    const option = document.querySelector('.js-option').checked;
    const actors = PRIVATEASER.payActors(bar, time, persons, option);

    render(actors);

    return;
  });
})();
