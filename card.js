class Card {

    constructor(options) {

        this.properties = {
            size: {
                width: '',
                height: ''
            },
            info: {
                id: '',
                user: '',
                title: ''
            },
            image: {
                src: '',
                alt: ''
            },
            classList: [],
            active: false
        };

        this.properties = Object.assign(this.properties, options);

        this.favClickEvent = (e) => {
            console.log('fav');
            if (favoritesItem('set', this.properties)) {
                if (!this.fav.classList.contains('actived'))
                    this.fav.classList.toggle('actived'); //activa
            } else {
                if (this.fav.classList.contains('actived'))
                    this.fav.classList.toggle('actived'); //desactiva
            }
        }
        this.maxClickEvent = (e) => {
            console.log('max');
            console.log(this.getImage());
            console.log(e.y);
            maximizarGifos(this.getImage(), this.getInfo(), e.y);

        }

        this.card = document.createElement('div');
        this.card.classList.add('card', 'cardInactive');
        this.properties.classList.forEach(c => {
            this.card.classList.add(c);
        });
        this.cardImage = document.createElement('div');
        this.cardImage.classList.add('card', 'cardImage');
        this.cardImageImg = document.createElement('img');
        this.cardImageImg.classList.add('card', 'cardImage');
        this.cardImageImg.setAttribute('src', this.properties.image.src);
        this.cardImageImg.setAttribute('alt', this.properties.image.alt);
        this.cardContent = document.createElement('div');
        this.cardContent.classList.add('card', 'cardContent');
        this.cardButtons = document.createElement('div');
        this.cardButtons.classList.add('card', 'cardButtons');
        this.cardInfo = document.createElement('div');
        this.cardInfo.classList.add('card', 'cardInfo');
        this.infoUser = document.createElement('div');
        this.infoUser.classList.add('infoUser');
        this.infoUser.textContent = this.properties.info.user;
        this.infoTitle = document.createElement('div');
        this.infoTitle.classList.add('infoTitle');
        this.infoTitle.textContent = this.properties.info.title;
        this.trash = document.createElement('div');
        this.trash.classList.add('trash');
        this.trash.addEventListener('click', this.trashClickEvent);
        this.cardButtons.appendChild(this.trash);

        this.fav = document.createElement('div');
        this.fav.classList.add('fav');
        this.fav.addEventListener('click', this.favClickEvent);
        this.cardButtons.appendChild(this.fav);
 
        this.down = document.createElement('div');
        this.down.classList.add('down');
        this.down.addEventListener('click', this.downClickEvent);
        this.cardButtons.appendChild(this.down);
   
        this.max = document.createElement('div');
        this.max.classList.add('max');
        this.max.addEventListener('click', this.maxClickEvent);
        this.cardButtons.appendChild(this.max);
  
        this.cardImage.appendChild(this.cardImageImg);

        this.cardInfo.appendChild(this.infoUser);
        this.cardInfo.appendChild(this.infoTitle);

        this.cardContent.appendChild(this.cardButtons);
        this.cardContent.appendChild(this.cardInfo);
        this.card.appendChild(this.cardImage);
        this.card.appendChild(this.cardContent);
        
        if (this.properties.active) {
            if (!this.card.classList.contains('cardActive'))
                this.card.classList.toggle('cardActive');
        }
    }

    getCard() {
        return this.card;
    }

    getSize() {
        return this.properties.size;
    }

    getImage() {
        return this.properties.image;
    }

    getInfo() {
        return this.properties.info;
    }

    clearProperties() {
        const options = {
            size: {
                width: '',
                height: ''
            },
            info: {
                id: '',
                user: '',
                title: ''
            },
            image: {
                src: '',
                alt: ''
            },
            active: false
        };
        this.properties = Object.assign(this.properties, options);
        this.setSize();
        this.setImage();
        this.setInfo();
        this.properties.classList.forEach(c => {
            this.card.classList.remove(c);
        });

    }

    setProperties(options) {
        this.properties = Object.assign(this.properties, options);
        this.setSize();
        this.setImage();
        this.setInfo();
        this.setClasslist();
        // this.setActive();
        // if (favoritesItem('get', this.properties)) {
        //     if (!this.fav.classList.contains('actived'))
        //         this.fav.classList.toggle('actived'); //activa
        // } else {
        //     if (this.fav.classList.contains('actived'))
        //         this.fav.classList.toggle('actived'); //desactiva
        // }
    }

    setSize() {
        this.card.style.width = this.properties.size.width;
        this.card.style.height = this.properties.size.height;
    }

    setImage() {
        this.cardImageImg.setAttribute('src', this.properties.image.src);
        this.cardImageImg.setAttribute('alt', this.properties.image.alt);
    }

    setInfo() {
        this.infoUser.textContent = this.properties.info.user;
        this.infoTitle.textContent = this.properties.info.title;
    }

    setClasslist() {
        this.properties.classList.forEach(c => {
            if (!this.card.classList.contains(c))
                this.card.classList.add(c);
        });
    }

    setButtonsActions(options) {
        this.setProperties(options);
        if ((!this.properties.setButtonsActions.trash.active) && (!this.trash.classList.contains('desactived'))) {
            this.trash.classList.toggle('desactived');
        }
        if ((!this.properties.setButtonsActions.fav.active) && (!this.fav.classList.contains('desactived'))) {
            this.fav.classList.toggle('desactived');
        }
        if ((!this.properties.setButtonsActions.down.active) && (!this.down.classList.contains('desactived'))) {
            this.down.classList.toggle('desactived');
        }
        if ((!this.properties.setButtonsActions.max.active) && (!this.max.classList.contains('desactived'))) {
            this.max.classList.toggle('desactived');
        }
    }

    setActive() {
        if (this.properties.active) {
            if (!this.card.classList.contains('cardActive'))
                this.card.classList.toggle('cardActive'); //activa
        } else {
            if (this.card.classList.contains('cardActive'))
                this.card.classList.toggle('cardActive'); //desactiva
        }
    }

    setDraggable(draggable) {
        this.card.setAttribute('draggable', draggable);
    }

    setTrashClickEvent(trashClickEvent) {
        this.trashClickEvent = trashClickEvent;
    }

    setFavClickEvent(favClickEvent) {
        this.favClickEvent = favClickEvent;
    }

    setDownClickEvent(downClickEvent) {
        this.downClickEvent = downClickEvent;
    }

    setMaxClickEvent(maxClickEvent) {
        this.maxClickEvent = maxClickEvent;
    }

    setCard(properties) {
        this.clearProperties();
        this.setProperties(properties);
    }
}

// module.exports = {Card};


// Cards Container

class CardsContainer{

    constructor(cantCards){

        this.properties = {
            cantCards : cantCards,
            containerStyles:'cardsContainer'
        }

        this.cardsContainer = [];
        
    }

    setProperties(properties){
        this.properties = Object.assign(this.properties,properties);
    }

    getProperties(){
        return this.properties;
    }

    setCards(cardsDetails){

        cardsDetails.forEach((cardDetails) =>{
            this.cardsContainer.push(new Card(cardDetails)); 
        });

        this.properties.cantCards = cardsDetails.length;
           
    }

    getCardsContainer(){
        
        let container = document.createElement('div');
        container.classList.add(this.properties.containerStyles);
        this.cardsContainer.forEach((card)=>{
            container.append(card.getCard());
        });

        return container;


    }

}