const activities = [
	{
		name: 'Natural History Mus.',
		type: 'Art & Culture',
		description:
			'The Natural History Museum in London is a museum that exhibits a vast range of specimens from various segments of natural history.',
		budget: 1,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://media.timeout.com/images/105162351/image.jpg',
		map: 'https://goo.gl/maps/GbUjjz3yDmBb5UuYA',
	},
	{
		name: 'Old Royal Observatory',
		type: 'Parks & Gardens',
		description:
			'Stroll around the magical gardens located close to the Greenwich Observatory. Find an assortment of over 400 different botanicals from around the world.',
		budget: 1,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image:
			'https://upload.wikimedia.org/wikipedia/commons/a/a6/The_Greenwich_Observatory_-_geograph.org.uk_-_1350541.jpg',
		map: 'https://goo.gl/maps/4tiN5S4ceH5ugaT96',
	},
	{
		name: 'Primrose Petting Zoo',
		type: 'Parks & Gardens',
		description:
			'Come and discover all the new things that are happening in our goats & llamas petting Zoo. Entry is free for children under the age of 12',
		budget: 2,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://live.staticflickr.com/3841/14668921488_1f41631cd5_b.jpg',
		map: 'https://goo.gl/maps/stbzE2rSFBbCbHRX7',
	},
	{
		name: "L'Osterie",
		type: 'Food & Drink',
		description:
			"Fine dine with the freshest seafood available in town. L'Osterie is a renowed restaurant that frequently attracts celebrities like Eva Longoria and Brad Pitt.",
		budget: 3,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image:
			'https://jennyshearawn.com/wp-content/uploads/2021/12/Oyster-Platter-with-Wild-Blueberry-Mignonette-Granita-15.jpg',
		map: 'https://goo.gl/maps/t4atbwGpxVSHSHRq5',
	},
	{
		name: 'Rough Trade',
		type: 'Art & Culture',
		description:
			"We welcome you to London's most renowned Vinyl trading store. Rough Trade has been standing strong since the 60's and has been visited by the likes of Jimi Hendrix, Eric Clapton & The Beatles. Located very central and easy accessible to the public",
		budget: 2,
		energy_level: 1,
		dog_friendly: true,
		saved: false,
		image:
			'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px684576-image-kwvxh660.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=965e3f6108276c8f91c5e533139803bf',
		map: 'https://goo.gl/maps/umNkCq6Q1Fts5Jso9',
	},
	{
		name: 'COLAB Theatre',
		type: 'Art & Culture',
		description:
			'London based Immersive Theatre company comprising of different theatre companies working together to create the first home for Immersive Theatre. The venue is open to the public but we recommend checking the dates to join one of our immersive plays',
		budget: 3,
		energy_level: 3,
		dog_friendly: false,
		saved: false,
		image:
			'https://images.ctfassets.net/6pezt69ih962/6pgVjVC52R9kp1IN6klWdw/abf56a0f5c155fc0e569af2da1f74cfb/Closer-1200-190722.jpg',
		map: 'https://goo.gl/maps/BezpEdeXS6SrGVrQA',
	},
	{
		name: 'Darcy & May Green',
		type: 'Food & Drink',
		description:
			'Moored on the Grand Union Canal outside Paddington Station, Darcie Green and May Green aren’t simply floating barges; they’re also floating pieces of art designed by the legendary Sir Peter Blake.',
		budget: 2,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image: 'https://media.timeout.com/images/105238968/750/562/image.jpg',
		map: 'https://goo.gl/maps/hX8mLZE1cwfM9Y7b9',
	},
	{
		name: 'CRATE Brewery',
		type: 'Food & Drink',
		description:
			"Things don't get much more bucolic in London's East End than at this totally hip warehouse-style pizzeria-cum-brewery on the banks of the Lea. In summer, arrive as early as decency allows, bag a reclaimed riverside bench, then proceed to order your first pint of Crate's own craft beer, lager or cider (with perhaps a pizza on the side)",
		budget: 2,
		energy_level: 1,
		dog_friendly: true,
		saved: false,
		image:
			'https://djq2q4f22hoou.cloudfront.net/live/desktop/images/destinations/ayia-napa/activities/brewery-tour-header.jpg',
		map: 'https://goo.gl/maps/NnChDLqwBMQF63cP8',
	},
	{
		name: "The Duke's Head",
		type: 'Food & Drink',
		description:
			"It may date back to Victorian times, but this 150-year-old Putney institution has moved with the times. Note the spruced-up parquet floors, dangling metal lamps and gallery of modern artworks. It's not quite on the water's edge, but it certainly gets into the riverside spirit, especially when the Boat Race is on",
		budget: 2,
		energy_level: 1,
		dog_friendly: true,
		saved: false,
		image: 'https://media.timeout.com/images/122259/750/562/image.jpg',
		map: 'https://goo.gl/maps/PaUabSzhUTs7kjPA8',
	},
	{
		name: 'The Summerhouse',
		type: 'Food & Drink',
		description:
			"From the owners of nearby Waterway, this atmospheric canal-side gem originally launched as a summer-only pop-up, but became so popular that it's now a permanent, year-round fixture. It's easy to see why this place is so popular: the menu majors in flappingly fresh fish, while punters in the open-sided part of the dining room find themselves effectively right on the canal",
		budget: 3,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image: 'https://media.timeout.com/images/59193/750/562/image.jpg',
		map: 'https://goo.gl/maps/Yc4mbtxxm1gwMnzo8',
	},
  {
		name: 'Regents Park',
		type: 'Parks & Gardens',
		description:
			"The Regent's Park combines large open spaces with tree-lined pathways, formal gardens, and four children’s playgrounds. It has excellent sports facilities, and contains central London's largest outdoor sports area.",
		budget: 1,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://live.staticflickr.com/2905/14258339372_6df954b7f8_b.jpg',
		map: 'https://goo.gl/maps/geQ9Qdc5FTs1T3rz6',
	},
  {
		name: 'Fenchurch',
		type: 'Food & Drink',
		description:
			"Swanky seafood-focused restaurant for high-end dishes & drinks in the Sky Garden 37 floors up. The menu is a mix of European & American classics, plus a selection of international favourites. The restaurant is a great place to dine with a group, or to just have a drink",
		budget: 3,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image: 'https://skygarden.london/wp-content/uploads/2019/10/Rhubarb-at-Sky-Garden-Web-Sized42-1024x768.jpg',
		map: 'https://goo.gl/maps/VYMnHygAtWJWm4r56',
	},
	{
		name: 'Globe Theatre',
		type: 'Art & Culture',
		description:
			"Shakespeare's Globe is a reconstruction of the Globe Theatre, an Elizabethan playhouse for which William Shakespeare wrote his plays, in the London Borough of Southwark, on the south bank of the River Thames",
		budget: 3,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://media.timeout.com/images/105575558/750/562/image.jpg',
		map: 'https://goo.gl/maps/wGxCXffhNWofFKAN8',
	},
  {
		name: 'Folkestone Gardens',
		type: 'Parks & Gardens',
		description:
			'Folkestone Gardens is a small urban park located in Deptford, south east London. Now part of the London Borough of Lewisham, it was created during the 1970s on an area badly damaged by bombs in World War II.',
		budget: 1,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://s0.geograph.org.uk/geophotos/04/56/35/4563528_367c132c.jpg',
		map: 'https://goo.gl/maps/ZWdFMFFSNB2nqzbV6',
	},
	{
		name: 'Tate Modern Museum',
		type: 'Art & Culture',
		description:
			'Saunter around one of the most vivid art museums in the world. TATE has been the house for many local, national & international artists. The general entry is free but we encourage considering one of the fascinating exclusive displays. Those have a low entry fee but it is worth every penny',
		budget: 1,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image:
			'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/07/Asus-rog-phone-6-tate-modern-main-camera-scaled.jpg',
		map: 'https://goo.gl/maps/QjEe3KVmULjMiJo36',
	},
	{
		name: 'Beckenham Swim Lake',
		type: 'Activity',
		description:
			"City-dwellers hungry for their alfresco swim fix now have a new expanse of chilly open water to throw their shivering bods into. The Borough of Lewisham's largest green space is officially London's newest wild-swimming spot. Only technically, it's pretty ancient.",
		budget: 2,
		energy_level: 3,
		dog_friendly: false,
		saved: false,
		image: 'https://media.timeout.com/images/105487761/750/562/image.jpg',
		map: 'https://goo.gl/maps/Qp7BpEBbYnqXmoQP9',
	},
	{
		name: 'Everyman Cinema',
		type: 'Art & Culture',
		description:
			"This summer, Everyman Cinema  brings the open-air screen back to the steps of Granary Square at King's Cross, London. Join  from 27th June for free live screenings of Wimbledon, Tour De France and, most importantly of all, films in the sun overlooking Regent's Canal.All screenings are free to attend so there is no need to book, simply turn up to Granary Square on the day.",
		energy_level: 2,
		dog_friendly: false,
		budget: 2,
		saved: false,
		image:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7e/74/b4/everyman-cinema-bristol.jpg?w=1200&h=1200&s=1',
		map: 'https://g.page/everymankingscross?share',
	},
	{
		name: 'Southbank Centre',
		type: 'Art & Culture',
		description:
			"Southbank Centre is a complex of artistic venues in London, England, on the South Bank of the River Thames. It comprises three main performance venues, together with the Hayward Gallery, and is Europe's largest Centre for the arts.",
		energy_level: 2,
		dog_friendly: true,
		budget: 2,
		saved: false,
		image:
			'https://images.ctfassets.net/6pezt69ih962/70D1pqfGIIyn47gDotT7zx/b8c0cf659bdf9e801c370d207162d3f4/NationalTheatre-1200-200422.jpg',
		map: 'https://goo.gl/maps/uAZkeWtDF6arxpyM8',
	},
  {
		name: 'Cycle Cities',
		type: 'Activity',
		description:
			'Cycle Cities is not your typical bike rental. Offering the newest toys on the market to explore the city in the most fun way. From e-tandem to segways & hoverboars. Say hi to our friendly staff and enjoy the ride.',
		budget: 2,
		energy_level: 3,
		dog_friendly: false,
		saved: false,
		image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/04/df.jpg',
		map: 'https://g.page/Cyclecities?share',
	},
	{
		name: 'Hyde Park',
		type: 'Parks & Gardens',
		description:
			'Hyde Park is a Grade I-listed major park in Central London. It is the largest of four Royal Parks that form a chain from the entrance of Kensington Palace through Kensington Gardens and Hyde Park, via Hyde Park Corner and Green Park past the main entrance to Buckingham Palace.',
		budget: 1,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://s0.geograph.org.uk/geophotos/06/02/97/6029737_3283dcc1.jpg',
		map: 'https://goo.gl/maps/DRt8hAY7d177SwCTA',
	},
	{
		name: 'Pierre Hermé Paris',
		type: 'Food & Drink',
		description:
			'Representing the beauty and art of fine French macarons and chocolates at the heart of London!.',
		budget: 3,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/10/1d/b1/c8/gorgeous-macarons.jpg',
		map: 'https://goo.gl/maps/qGHGj5U2YenYTxTa9',
	},
	{
		name: 'Barbican Centre',
		type: 'Art & Culture',
		description:
			'The Barbican Centre is a world-class arts and learning organisation, pushing the boundaries of all major art forms including dance, film, music, theatre and visual arts..',
		budget: 2,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://live.staticflickr.com/941/29641653728_7dee51fe8b_b.jpg',
		map: 'https://goo.gl/maps/rVSyuyWa97SEypdb9',
	},
	{
		name: 'London Eye',
		type: 'Landmarks',
		description:
			"The London Eye, or the Millennium Wheel, is a cantilevered observation wheel on the South Bank of the River Thames in London. It is Europe's tallest cantilevered observation wheel, and is the most popular paid tourist attraction in the United Kingdom.",
		budget: 2,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://s0.geograph.org.uk/photos/00/08/000865_af8dd45a.jpg',
		map: 'https://goo.gl/maps/ZcBtPwgTcJbsbhei9',
	},
	{
		name: "Christopher's london",
		type: 'Food & Drink',
		description:
			'Classic American steakhouse & grill, plus a martini cocktail bar in high-ceilinged rooms.',
		budget: 3,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/23766263.jpg',
		map: 'https://goo.gl/maps/3ykiBFJXGD4Jdjw36',
	},
	{
		name: 'PF Chang',
		type: 'Food & Drink',
		description:
			'Family-friendly chain offering creative takes on Asian fare in a striking space.',
		budget: 3,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image:
			'https://media-cdn.tripadvisor.com/media/photo-s/11/fa/3f/f8/front-interior-of-pf.jpg',
		map: 'https://goo.gl/maps/hS4nni6yqRrNgqqA8',
	},
	{
		name: 'Sky Garden',
		type: 'Landmarks',
		description:
			'Known as the walkie talkie due to its unique shape, this skyscraper features a top-floor restaurant.',
		budget: 2,
		energy_level: 1,
		dog_friendly: false,
		saved: false,
		image: 'https://live.staticflickr.com/383/18460331166_a2c3118456_b.jpg',
		map: 'https://goo.gl/maps/4fst9XeupH3TsGpJA',
	},
	{
		name: 'Tower of London',
		type: 'Landmarks',
		description:
			"The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London.",
		budget: 2,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://s0.geograph.org.uk/photos/30/75/307507_e7570ba6.jpg',
		map: 'https://goo.gl/maps/3eTxK1L3w62siiPu7',
	},
	{
		name: 'Emirates Airline Ride',
		type: 'Activity',
		description:
			"Glide above the Thames in the Emirates Air Line cable car and take in aerial views of London's skyline, as you travel from the Greenwich Peninsula to the Royal Docks",
		budget: 2,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://s0.geograph.org.uk/geophotos/03/01/84/3018498_c64dff23.jpg',
		map: 'https://goo.gl/maps/PnS8M7SNKVc85uz76',
	},
	{
		name: 'Mutts Hotel',
		type: 'Hospitality',
		description:
			'Take time to play with your best friend at the Mutts Hotel, or let your dog make new friends while you explore the city. With our prime location in central London it very popular among travellers who are looking for a little time off.',
		budget: 2,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image:
			'https://www.rockythetraveller.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-07-at-11.27.37-PM.png',
		map: 'https://goo.gl/maps/6eRcsoYBStduE7LU8',
	},
  {
		name: 'Burgess Park',
		type: 'Parks & Gardens',
		description:
			'Burgess Park is a public park situated in Camberwell the London Borough of Southwark, and is close to Walworth to the north and Bermondsey to the east. At 56 hectares, it is one of the largest parks in South London. ',
		budget: 1,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://live.staticflickr.com/4816/46975146121_777ed60450_b.jpg',
		map: 'https://goo.gl/maps/oRhbbfn4k41NzTkN6',
	},
	{
		name: 'Cutty Sark Pub',
		type: 'Food & Drink',
		description:
			'Light-filled, Georgian riverside pub over 3 floors, with Thames views from the elegant dining room. Enjoy our friendly staff and a wide selection of drinks and food. Often packed with locals and tourists, this pub is a great place to meet up with friends and family.',
		budget: 2,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://live.staticflickr.com/65535/51310856076_e150de9186_b.jpg',
		map: 'https://g.page/CuttySarkPub?share',
	},

	{
		name: 'Big Ben and Parliament',
		type: 'Landmarks',
		description:
			'Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer also to the clock and the clock tower.',
		budget: 1,
		energy_level: 1,
		dog_friendly: true,
		saved: false,
		image:
			'https://blog.globusjourneys.com/wp-content/uploads/2020/08/The-Houses-of-Parliament-Big-Ben.jpg',
		map: 'https://goo.gl/maps/oRux9vXGczBAGCBs6',
	},
	{
		name: 'Station 9 3/4',
		type: 'Art & Culture',
		description:
			"Head to King's Cross station to see where Harry Potter & his fellow wizards depart for Hogwarts. Take a photo by the trolley. Visit the Harry Potter shop.",
		budget: 2,
		energy_level: 1,
		dog_friendly: true,
		saved: false,
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Platform_9_3-4_%28King%27s_Cross_station%2C_London%2C_2014%29.jpg/800px-Platform_9_3-4_%28King%27s_Cross_station%2C_London%2C_2014%29.jpg',
		map: 'https://goo.gl/maps/k6CtibpxTsBhetcj6',
	},
	{
		name: 'Buckingham Palace',
		type: 'Landmarks',
		description:
			'Buckingham Palace is a London royal residence and the administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality.',
		budget: 2,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image:
			'https://cdn.londonandpartners.com/asset/buckingham-palace_image-courtesy-of-royal-collection-trust-her-majesty-queen-elizabeth-ii-2021-photo-andrew-holt_247a2afaed0312ad4e8fb6142fdcdd5a.jpg',
		map: 'https://goo.gl/maps/e3LwQqksTrx16uiR7',
	},
	{
		name: 'Trafalgar Square',
		type: 'Landmarks',
		description:
			'Come and discover all the new things that are happening in our goats & lamas petting Zoo. Entry is free for children under the age of 12',
		budget: 1,
		energy_level: 2,
		dog_friendly: false,
		saved: false,
		image: 'https://live.staticflickr.com/1334/5117477965_8103d8cbfc_b.jpg',
		map: 'https://goo.gl/maps/zPqrdF51hUkMdJB39',
	},
  {
		name: 'Brompton Bikes',
		type: 'Activity',
		description:
			'Brompton Bikes is a bicycle rental company based in Brompton, London. We offer a wide range of bikes and accessories for hire, including mountain bikes, city bikes, e-bikes, and electric scooters.',
		budget: 2,
		energy_level: 3,
		dog_friendly: false,
		saved: false,
		image: 'https://live.staticflickr.com/623/33366919125_432ea4d946_b.jpg',
		map: 'https://goo.gl/maps/dAa359P1BPycA22y8',
	},
	{
		name: 'Millwall Park',
		type: 'Parks & Gardens',
		description:
			"Open green space offering soccer & cricket fields, a children's playground & exercise equipment. Located in the Isle of Dogs, it is very central and close to many of the tourist attractions in the area.",
		budget: 1,
		energy_level: 2,
		dog_friendly: true,
		saved: false,
		image: 'https://live.staticflickr.com/8844/17669485616_c337c9eea1_b.jpg',
		map: 'https://goo.gl/maps/2DJvW1v9yTBGXy6u8',
	},
]
export default activities
