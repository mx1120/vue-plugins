/**
 * Created by Administrator on 2018/1/5.
 */
const banner = resolve => {
	require(['components/swiper'], resolve)
}
const bind = resolve => {
	require(['components/bind'], resolve)
}
const modification = resolve => {
	require(['components/subComponent/Modification'], resolve)
}

const route = [
	{
		name: 'swiper',
		path: '/banner/:type',
		component: banner,
		meta: {
			pression: 'swiper'
		}
	},
	{
		name: 'bind',
		path: '/bind',
		component:bind,
		children:[
			{
				path: 'modi',
				component: modification
			}
		]

	}
]

export default route