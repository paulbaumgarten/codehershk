const list = ['/event/audreySpeech.jpeg',
	'/event/electronics.jpg',
	'/event/fullHall.JPG',
	'/event/fullTeam.jpg',
	'/event/fun.jpg',
	'/event/gaming.jpg',
	'/event/gaming2.jpg',
	'/event/hardworking.jpeg',
	'/event/mainSpeech.jpeg',
	'/event/panel.jpg',
	'/event/workshop.jpeg']


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<string>): Array<string> {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

	}
	return array
}

export const all2 = (splice: number = -1, shuffled: boolean = true): Array<string> => {
	// python generated list
	let items =  [ // total of 81 items
		'/event/pics25all/Arrivals.JPG',
		'/event/pics25all/DSC02171.JPG',
		'/event/pics25all/DSC02172.JPG',
		'/event/pics25all//DSC02173.JPG',
		'/event/pics25all/DSC02178.JPG',
		'/event/pics25all/Hackathon Winner Presentation.JPG',
		'/event/pics25all/L1003946.JPG',
		'/event/pics25all/L1003947.JPG',
		'/event/pics25all/L1003969.JPG',
		'/event/pics25all/L1003971.JPG',
		'/event/pics25all/L1003973.JPG',
		'/event/pics25all/L1003976.JPG',
		'/event/pics25all/L1003984.JPG',
		'/event/pics25all/L1003998.JPG',
		'/event/pics25all/MCs & Event Schedule.jpg',
		'/event/pics25all/Merch.jpg',
		'/event/pics25all/Participants 2.jpg',
		'/event/pics25all/CodeHers 2025 Logo.png',
		'/event/pics25all/CODEHERS25.jpg',
		'/event/pics25all/CODEHERS25-1.jpg',
		'/event/pics25all/CODEHERS25-2.jpg',
		'/event/pics25all/CODEHERS25-3.jpg',
		'/event/pics25all/CODEHERS25-4.jpg',
		'/event/pics25all/CODEHERS25-5.jpg',
		'/event/pics25all/CODEHERS25-6.jpg',
		'/event/pics25all/CODEHERS25-7.jpg',
		'/event/pics25all/CODEHERS25-8.jpg',
		'/event/pics25all/CODEHERS25-9.jpg',
		'/event/pics25all/CODEHERS25-10.jpg',
		'/event/pics25all/CODEHERS25-11.jpg',
		'/event/pics25all/CODEHERS25-12.jpg',
		'/event/pics25all/CODEHERS25-13.jpg',
		'/event/pics25all/CODEHERS25-14.jpg',
		'/event/pics25all/CODEHERS25-15.jpg',
		'/event/pics25all/CODEHERS25-16.jpg',
		'/event/pics25all/CODEHERS25-18.jpg',
		'/event/pics25all/DSC00980.JPG',
		'/event/pics25all/DSC00984.JPG',
		'/event/pics25all/DSC00980.JPG',
		'/event/pics25all/DSC00990.JPG',
		'/event/pics25all/DSC00995.JPG',
		'/event/pics25all/DSC00996.JPG',
		'/event/pics25all/DSC01000.JPG',
		'/event/pics25all/DSC01005.JPG',
		'/event/pics25all/DSC01006.JPG',
		'/event/pics25all/DSC01010.JPG',
		'/event/pics25all/DSC01070.JPG',
		'/event/pics25all/DSC01071.JPG',
		'/event/pics25all/DSC01073.JPG',
		'/event/pics25all/DSC01081.JPG',
		'/event/pics25all/DSC01114.JPG',
		'/event/pics25all/DSC01139.JPG',
		'/event/pics25all/DSC01144.JPG',
		'/event/pics25all/DSC01152.JPG',
		'/event/pics25all/DSC01153.JPG',
		'/event/pics25all/DSC01158.JPG',
		'/event/pics25all/DSC01165.JPG',
		'/event/pics25all/DSC01168.JPG',
		'/event/pics25all/DSC01183.JPG',
		'/event/pics25all/IMG_4379.jpg',
		'/event/pics25all/IMG_4382.jpg',
		'/event/pics25all/IMG_4394.jpg',
		'/event/pics25all/IMG_4397.jpg',
		'/event/pics25all/IMG_4535.jpg',
		'/event/pics25all/IMG_4538.jpg',
		'/event/pics25all/IMG_4560.jpg',
		'/event/pics25all/IMG_4581.jpg',
		'/event/pics25all/IMG_4601.jpg',
		'/event/pics25all/IMG_4630.jpg',
		'/event/pics25all/IMG_4638.jpg',
		'/event/pics25all/IMG_4645.jpg',
		'/event/pics25all/IMG_4646.jpg',
		'/event/pics25all/IMG_4651.jpg',
		'/event/pics25all/IMG_4680.jpg',
		'/event/pics25all/IMG_4701.jpg',
		'/event/pics25all/IMG_4737.jpg',

	]

	if (shuffled)
		items = shuffleArray(items)

	if (splice < 0 || splice > items.length)
		return items
	else
		return items.splice(0, splice)
}

export default list
