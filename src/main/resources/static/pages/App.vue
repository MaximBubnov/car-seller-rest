<template>
    <div>
        <div class="text-center" v-if="!profile">

            <div class="text-center" style="font-size: 72px; color: green" >
                Welcome to Car Seller!
            </div>
            <div class="mt-3">
                <img src="../images/carseller.jpg" alt="" width="350">
            </div>
            <br> <br>
            Необходимо авторизоваться через
            <a href="/login" class="badge badge-primary" style="font-size: 20px">Google</a>
        </div>
        <div v-else>
            <div class="text-center" style="font-size: 25px" > Welcome, {{profile.name}}</div>

            <cars-list  :cars="cars"/>

            <div class="row">
                <div class="col-sm-8"></div>
                <div class="text-center col-sm-4">
                    <a href="/logout" class="badge badge-secondary" style="font-size: 35px;" >Выйти</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CarsList from '../components/cars/CarList.vue'

    export default {
        components: {
            CarsList
        },
        data() {
            return {
                cars : frontendData.cars,
                profile: frontendData.profile
            }
        }
}
</script>

<style>

</style>