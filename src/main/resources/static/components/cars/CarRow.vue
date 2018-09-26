<template>
    <div class="card border-default mb-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <img src="./img/carseller.jpg" alt="" class="rounded detailed-car-image">
                    <h5 class="card-title mt-1"> {{car.name }} - {{car.model}}</h5>
                    <p class="card-text">Subscription of car</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> {{car.name }}</li>
                    <li class="list-group-item"> {{car.owner }}</li>
                    <li class="list-group-item"> {{ car.year }}</li>
                </ul>
                <div class="card-body">
                    <input type="button" value="Edit" @click="edit" class="btn btn-primary"/>
                    <input type="button" value="X" @click="del" class="btn btn-primary"/>
                </div>
                 <hr>
                <div class="card-body">
                    <div class="phone-block">
                        <transition name="phone">
                            <p v-if="phoneVisibility">{{car.phone}}</p>
                        </transition>
                    </div>
                    <button
                            class="btn btn-outline-success mr-3"
                            @click="phoneVisibility = !phoneVisibility"
                    >{{ phoneBtnText }}</button>
                </div>
                <div class="card-footer text-muted">
                    {{car.creationDate}}
                </div>
            </div>
</template>

<script>
    export default {

        data() {
            return {
                phoneVisibility: false
            }
        },
        props:['car', 'editCar', 'cars', 'deleteCar', ' phoneBtnText'],
        methods: {
            edit () {
                this.editCar(this.car);
            },

            del() {
                this.deleteCar(this.car);
            }
        },
        computed: {
            phoneBtnText() {
                return this.phoneVisibility ? 'Hide phone' : 'Show phone'
            }
        }
    }
</script>

<style>

</style>