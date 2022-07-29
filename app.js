$(document).ready(function () {
    $('.slider').slick({

        autoplay: true,
        autoplaySpeed: 4000,

    });


});

const app = Vue.createApp({
    data() {
        return {
            menu: [
                { mM: 'background-image: url("png/Gyro Sandwhich.png")', product: 'Gyro Sandwhich', price: 350, rating: 4.7 },
                { mM: 'background-image: url("png/Enchilada.png")', product: 'Enchilada', price: 390, rating: 4.7 },
                { mM: 'background-image: url("png/Green Beans.png")', product: 'Green Beans', price: 230, rating: 4.9 },
                { mM: 'background-image: url("png/Pizza.png")', product: 'Pizza', price: 150, rating: 4.9 },
                { mM: 'background-image: url("png/Chicken Pot Pie.png")', product: 'Chicken Pot Pie', price: 260, rating: 4.7 },
                { mM: 'background-image: url("png/Green Salad.png")', product: 'Green Salad', price: 100, rating: 4.8 },
            ],
        }
    }
});
app.mount('#apper');
