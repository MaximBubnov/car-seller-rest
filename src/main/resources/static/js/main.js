import Vue from 'vue'
import App from '../pages/App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
    el: "#app",
    render: a => a(App)
});

/*
var carApi = Vue.resource('/cars{/id}'); // т.е мы ссылаемся на наш ресурс (CarController  и его RequestMapping("cars"))

function getId(list, id) {
    for(var i=0; i<list.length; i++) {
        if(list[i].id === id) {
            return i;
        }
    }

    return -1;
}

Vue.component('car-form', {

    props: ['cars', 'carAttr'],

    data: function () {

        return {
            name: '',
            model: '',
            owner: '',
            year: '',
            id: ''
        }
    },

    watch: {
        carAttr : function(newVal, oldVal) {
            this.name = newVal.name;
            this.model = newVal.model;
            this.owner = newVal.owner;
            this.year = newVal.year;
            this.id = newVal.id;
        }
    },
    template:
    '<div>' +
    '<input type="text" placeholder="Car name" v-model="name">' +
    '<input type="text" placeholder="Car model" v-model="model">' +
    '<input type="text" placeholder="Car owner" v-model="owner">' +
    '<input type="text" placeholder="Car year" v-model="year">' +
    '<input type="button" value="Send" @click="save">' +
    '</div>',

    methods: {
        save: function () {
            var car = {name: this.name, model: this.model, owner: this.owner, year: this.year};

            if(this.id) {
                carApi.update({id: this.id}, car).then(result =>
                    result.json().then(data =>
                        {
                            var index = getId(this.cars, data.id);

                            this.cars.splice(index, 1, data);

                            this.name = '';
                            this.model = '';
                            this.owner = '';
                            this.year = '';
                            this.id = '';
                        }
                    )
                )
            } else {
                carApi.save({}, car).then(result =>
                    result.json().then(data =>
                        {
                            this.cars.push(data);

                            this.name = '';
                            this.model = '';
                            this.owner = '';
                            this.year = '';
                        }
                    )
                )
            }
        }
    }
});



Vue.component('car-row', {
    props:['car', 'editCar', 'cars'],
    template:
    '<div>' +
        ' <i>( {{ car.id }} )</i> {{car.name}} | {{car.model}} | {{car.owner}} | {{car.year}}' +
            '<span style="position: absolute; right: 0">' +
                '<input type="button" value="Edit" @click="edit" />' +
                '<input type="button" value="X" @click="del" />' +
            '</span>' +
    '</div>',

    methods: {
        edit: function () {
            this.editCar(this.car);
        },

        del: function () {
            carApi.remove({id: this.car.id}).then(result => {
                if(result.ok) {
                    this.cars.splice(this.cars.indexOf(this.car), 1)
                }
            })
        }
    }
});



Vue.component('cars-list', {
    props: ['cars'],
    data: function () {
        return {
            car: null
        }
    },
    template:
    '<div style="position: relative; width: 300px">' +
        '<car-form :cars="cars" :carAttr="car"/>' +
        '<br/> <br/>' +
        '<car-row v-for="car in cars" :key="car.id" :car = "car"  :editCar="editCar" :cars="cars"/>' +
    '</div>',
    methods : {
        editCar: function (car) {
            this.car = car;
        }
    }
});
});*/
