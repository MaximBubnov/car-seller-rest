<template>
    <div>
        <car-form :cars="cars" :carAttr="car"/>
        <br/> <br/>
        <div class="card-columns text-center" style=".card-columns {
                     @include media-breakpoint-only(lg) {
                     column-count: 4;
                    }
                     @include media-breakpoint-only(xl) {
                     column-count: 5;
                    }
                }">
            <car-row v-for="car in cars"
                 :key="car.id"
                 :car = "car"
                 :editCar="editCar"
                 :deleteCar = "deleteCar"
                 :cars="cars"
                 />
        </div>
    </div>
</template>

<script>
    import CarRow from './CarRow.vue'
    import CarForm from './CarForm.vue'

    export default {
        props: ['cars'],
        components: {
          CarRow,
            CarForm
        },
        data () {
            return {
                car: null
            }
        },
        methods : {
            editCar(car) {
                this.car = car
            },
            deleteCar(car) {
                this.$resource('/cars{/id}').remove({id: car.id}).then(result => {
                    if(result.ok) {
                        this.cars.splice(this.cars.indexOf(this.car), 1)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>