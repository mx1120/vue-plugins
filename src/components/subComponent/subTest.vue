<template>
    <div>
        <p v-for="item in cars">
            {{item.name}}
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		props:{
            cars:{
            	type:Array,
                default() {
            		return {
            			'tag':'',
                        'name':''
                    }
                }
            }
        },
		data() {
			return {
            }
		},
		created() {
		    this.$set(this.cars, 0, {'tag': 'handsome', 'name': 'mengxiang'})
		},
        methods:{

        }
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>