const app = Vue.createApp({ // coeur de l'app
    data: function() {
        return {
            cart: 0, //panier
            produit: "tableau du renard d'automne",
            marque: "petit fûté",
            image: "./assets/images/renard.jpg",
            description: "un tableau de Jeff Roselthank capturant l'instant où la face du renard d'ombres surgit de la brume une nuit de 31 octobre. Les réverbères font briller ses yeux d'une lueure orange innimitable",
            inStock: true,
            activeClass: true,
            inventory: 20,
            details: ['L : 100cm', 'H : 80cm', 'Cadre : Metal', 'Finition : Effet cuivre'],
            variants: [
                {id: 2231, custom: 'basique', image: './assets/images/renard.jpg', quantity: 20},
                {id: 2234, custom: 'cadre bois', image: './assets/images/cadre_bois.jpg', color:'brown', quantity: 18},
                {id: 2235, custom: 'verre anti-reflets', image: './assets/images/verre_anti_reflet.jpg',color:'gray', quantity: 16},
            ]
        }
    },
    methods: {
        addPanier() { // methode du clic d'ajout au panier : incremente la value cart (panier) de 1
            this.cart +=1
            this.inventory -=1
        },
        removePanier() { // methode du clic de retrait du panier : décremente la value cart (panier) de 1
            this.cart -=1
            this.inventory +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    computed: {
        titre(){
            return this.marque + ' - ' + this.produit
        }
    }
})