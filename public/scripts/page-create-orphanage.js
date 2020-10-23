// create map
const map = L.map('mapid').setView([-29.9354698,-51.0037415], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: ".././images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
});


let marker;

// create and add marker
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map);
})


// adicionar o campo de fotos
function addPhotoField(){
    // pegar o container de fotos #images
    const container = document.querySelector('#images');

    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);

    // Verificar se o campo está vazio, se sim, não adicionar ao container de fotos de images
    const input = newFieldContainer.children[0];

    if(input.value == ""){
        return
    }
    // Limpar o campo antes de adicionar ao container de images
    input.value = "";

    //adicionar o clone ao conteudo de #images
    container.appendChild(newFieldContainer);
}


function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2){
        // limpar o valor do campo
        span.parentNode.children[0].value = "";
        return
    }
    // deletar o campo
    span.parentNode.remove();
}


// Select yes or no
function toggleSelect(event){
    // retirar a classe .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach( function(button){
        button.classList.remove('active');
    });
    // colocar a classe .active
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = button.dataset.value;
    
    // pegar o botao clicado
 
}

function validate(event){
    // validar se lat e lng estão preenchidos
    const lat = document.querySelector('[name=lat]');
    const lng = document.querySelector('[name=lng]');

    if (lat.value == ""){
        event.preventDefault();
        alert('Selecione um ponto no mapa');
    } 
}