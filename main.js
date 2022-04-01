


window.onload = function () {

    //crear Card
    let card = new Card();

    //crear container
    let container = document.createElement('div');

    container.classList.add('container');

    card.setProperties({
        image:{
            src:encodeURI('/images/img-1.png'),
            alt:'imagen de muestra'
        },
        classList:['cardActive','cardObject']
    });

    

    container.append(card.getCard());

    //contenido principal
    let main = document.getElementsByTagName('main')[0];

    main.append(container);

    //agregar contenido
    // let body = document.getElementsByTagName('body')[0];

    // body.append(main);

}