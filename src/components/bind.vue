<template>
    <div>
        <input type="text" v-model="msg" debounce="1000"> <br/>
        {{msg}}

        <!---->
        <p v-for="item,index in list" :class="'item' + index"  v-cloak="">
            {{index}}
        </p>

        <!--排序插件-->
        <ul>
            <li v-for="item in userCars">
                <p>{{item.name}}</p>
            </li>
        </ul>
        <p>zzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
        <sub-cont :cars="cars"></sub-cont>
        <router-view/>
    </div>
</template>

<script type="text/ecmascript-6">
    import subCont from './subComponent/subTest.vue'
	export default {
    	components:{
    		subCont
        },
		data() {
			return {
				msg: 'hello word',
                list: [1, 2, 3],
                someProp: 'idName',
                otherProp: 'prop',
                cars:[
                    {
                    	name: '快车',
                        tag: '1'
                    },
                    {
                    	name: '顺风车',
                        tag: '2'
                    },
                    {
                    	name: '转车',
                        tag: '0'
                    }
                ],
				users: [
					{ 'user': 'fred',   'age': 48 },
					{ 'user': 'barney', 'age': 34 },
					{ 'user': 'fred',   'age': 40 },
					{ 'user': 'barney', 'age': 36 }
				]
            }
		},
        computed:{
			userCars() {
				return _.orderBy(this.cars, 'tag')
            },
            comUsers() {
				return _.orderBy(this.users, ['age', 'name'], ['asc', 'desc'])
            }
        },
        methods: {
		    LayerAlert() {
		    	alert(1)
            }
        },
		created() {
			let _this = this
			_.debounce(_this.LayerAlert, 3000, {})
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>