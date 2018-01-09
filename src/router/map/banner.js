/**
 * Created by Administrator on 2018/1/5.
 */
const banner = resolve => {
	require(['components/swiper'], resolve)
}
const bind = resolve => {
	require(['components/bind'], resolve)
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
		component:bind
	}
]

export default route