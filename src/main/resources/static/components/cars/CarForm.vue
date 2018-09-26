<template>

    <div class="mt-3 text-center">
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Your own Car Editor
        </a>
        <div class="collapse mt-2" id="collapseExample">
            <form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label"> Car Name : </label>
                    <div class="col-sm-3">
                        <input type="text" placeholder="Car name" v-model="name" class="form-control" id="carName">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Car Model</label>
                    <div class="col-sm-3">
                        <input type="text" placeholder="Car model" v-model="model" class="form-control" id="carModel">
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-2 col-form-label">Car name</label>
                    <div class="col-sm-3">
                        <input type="text" placeholder="Car owner" v-model="owner" class="form-control" id="carOwner">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Car Year</label>
                    <div class="col-sm-3">
                        <input type="text" placeholder="Car year" v-model="year" class="form-control" id="carYear">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Phone Owner</label>
                    <div class="col-sm-3">
                        <input type="text" placeholder="Phone Owner" v-model="phone" class="form-control" id="carPhone">
                    </div>
                </div>
                    <input type="button" value="Send car for sale" @click="save" class="btn btn-primary">
            </form>
        </div>
    </div>
</template>

<script>
    function getId(list, id) {
        for(var i=0; i<list.length; i++) {
            if(list[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    export default {
        props: ['cars', 'carAttr'],

        data() {

            return {
                name: '',
                model: '',
                owner: '',
                year: '',
                phone: '',
                id: ''
            }
        },

        watch: {
            carAttr(newVal, oldVal) {
                this.name = newVal.name;
                this.model = newVal.model;
                this.owner = newVal.owner;
                this.year = newVal.year;
                this.phone = newVal.phone;
                this.id = newVal.id;
            }
        },
        methods: {
            save() {
                const car = {name: this.name, model: this.model, owner: this.owner, year: this.year, phone: this.phone};

                if(this.id) {
                    this.$resource('/cars{/id}').update({id: this.id}, car).then(result =>
                        result.json().then(data =>
                            {
                                const index = getId(this.cars, data.id);

                                this.cars.splice(index, 1, data);

                                this.name = '';
                                this.model = '';
                                this.owner = '';
                                this.year = '';
                                this.phone = '';
                                this.id = '';
                            }
                        )
                    )
                } else {
                    this.$resource('/cars{/id}').save({}, car).then(result =>
                        result.json().then(data =>
                            {
                                this.cars.push(data);

                                this.name = '';
                                this.model = '';
                                this.owner = '';
                                this.phone = '';
                                this.year = '';
                            }
                        )
                    )
                }
            }
        }
    }
</script>

<style scoped>

</style>