// Опишите своими словами, как Вы понимаете, что такое обработчик событий.

document.getElementById('price').onfocus = function() {
    document.getElementById('price').style.outlineColor = 'yellowgreen';
}

const errorMsg = document.createTextNode('Please enter correct price.');


document.getElementById('price').onblur = function() {
    if (document.getElementById('price').value < 0) {
        document.getElementById('price').style.borderColor = 'red';
        document.getElementById('parent').appendChild(errorMsg);
    } else {
        document.getElementById('current').innerHTML = `<span class="tag is-success is-medium">Текущая цена: $${this.value}<button id="but" class="delete is-medium" onclick="rem()"></button>`;
        document.getElementById('price').style.color = 'green';
    }
}

const rem = () => {
    document.getElementById('current').firstChild.remove();
    document.getElementById('price').value = '';
}