


window.onload = function () {

    //crear Card
    // let card = new Card();

    //crear container
    // let container = document.createElement('div');

    // container.classList.add('container');

    // card.setProperties({
    //     image:{
    //         src:encodeURI('/images/img-1.png'),
    //         alt:'imagen de muestra'
    //     },
    //     classList:['cardActive','cardObject']
    // });



    // container.append(card.getCard());

    let cardsContainer = new CardsContainer(12);

    let cardDetails = [];

    // for (let index = 0; index < 12; index++) {

    //     cardDetails.push({
    //         image:{
    //             src:encodeURI('/images/img-1.png'),
    //             alt:'imagen de muestra'
    //         },
    //         classList:['cardActive','cardObject']
    //     });

    // }  

    (async () => {
        let pokeData = await getPokeApiData(12);
        console.log(pokeData);
        cardDetails = pokeData.map((pokeData) => {
            return {
                info: {
                    id: pokeData.id,
                    user: '',
                    title: pokeData.name
                },
                image: {
                    src: encodeURI(pokeData.sprites.front_default),
                    alt: pokeData.name
                },
                classList: ['cardActive', 'cardObject']
            }

        })
        console.log(cardDetails);

        cardsContainer.setCards(cardDetails);

        let container = cardsContainer.getCardsContainer();

        //contenido principal
        let main = document.getElementsByTagName('main')[0];

        main.append(container);
    })();


    //agregar contenido
    // let body = document.getElementsByTagName('body')[0];

    // body.append(main);

}