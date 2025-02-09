const isProd = process.env.NODE_ENV === 'production';

interface Picture {
	front: string,
	back: string
}

let pictures: Array<Picture> = [
	{
		front: "/team/students/CIS_1.png",
		back: "/team/students/CIS_2.png"
	},
	{
		front: "/team/students/GSIS_1.png",
		back: "/team/students/GSIS_2.png"
	},
	{
		front: "/team/students/HARROW_1.png",
		back: "/team/students/HARROW_2.png"
	},
	{
		front: "/team/students/HKIS_1.png",
		back: "/team/students/HKIS_2.png"
	},
	{
		front: "/team/students/ISF_1.png",
		back: "/team/students/ISF_2.png"
	},
	{
		front: "/team/students/KELLETT_1.png",
		back: "/team/students/KELLETT_2.png"
	},
	{
		front: "/team/students/KGV_1.png",
		back: "/team/students/KGV_2.png"
	},
	{
		front: "/team/students/SIS_1.png",
		back: "/team/students/SIS_2.png"
	},
	{
		front: "/team/students/STC_1.png",
		back: "/team/students/STC_2.png"
	},
	{
		front: "/team/students/VSA_1.png",
		back: "/team/students/VSA_2.png"
	},
	{
		front: "/team/students/WIS_1.png",
		back: "/team/students/WIS_2.png"
	},
]

for (let pic in pictures) {
	let front = pictures[pic].front
	let back = pictures[pic].back

	pictures[pic].front = isProd ? '/codehershk' + front : front
	pictures[pic].back = isProd ? '/codehershk' + back: back
}

export default pictures