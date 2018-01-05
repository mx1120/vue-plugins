/**
 * Created by Administrator on 2018/1/5.
 */
const banner = resolve => {
	require(['components/swiper'], resolve)
}
const route = [
	{
		name: 'swiper',
		path: '/swiper',
		component: banner
	}
]

export default route