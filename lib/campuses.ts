export interface Campus {
  uni: string;
  short: string;
  campus: string;
  lat: number;
  lng: number;
  address: string;
  region: string;
}

// GPS-accurate campus directory ported from the Shabab News app.
export const campuses: Campus[] = [
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Beirut (Damascus Road)', lat: 33.8825, lng: 35.5133, address: 'Damascus Road, Beirut', region: 'Beirut' },
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Beirut (Monnot)', lat: 33.8891, lng: 35.5097, address: 'Monnot Street, Beirut', region: 'Beirut' },
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Mansourieh', lat: 33.8617, lng: 35.5702, address: 'Mansourieh, Mount Lebanon', region: 'Mount Lebanon' },
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Tripoli', lat: 34.4333, lng: 35.8333, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Zahle', lat: 33.8439, lng: 35.9072, address: 'Zahle, Bekaa Valley', region: 'Bekaa' },
  { uni: 'Saint Joseph University', short: 'USJ', campus: 'Saida', lat: 33.5606, lng: 35.3728, address: 'Saida, South Lebanon', region: 'South' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Beirut (Mouseitbeh)', lat: 33.8767, lng: 35.4952, address: 'Mouseitbeh, Beirut', region: 'Beirut' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Bekaa (Khyara)', lat: 33.6425, lng: 35.8236, address: 'Khyara, Bekaa Valley', region: 'Bekaa' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Saida', lat: 33.5414, lng: 35.3853, address: 'Saida, South Lebanon', region: 'South' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Tripoli', lat: 34.4222, lng: 35.8206, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Nabatieh', lat: 33.3769, lng: 35.4744, address: 'Nabatieh, South Lebanon', region: 'South' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Tyre', lat: 33.2647, lng: 35.2108, address: 'Tyre, South Lebanon', region: 'South' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Mount Lebanon (Jdeideh)', lat: 33.8872, lng: 35.5611, address: 'Jdeideh, Mount Lebanon', region: 'Mount Lebanon' },
  { uni: 'Lebanese International University', short: 'LIU', campus: 'Akkar (Halba)', lat: 34.5458, lng: 36.0789, address: 'Halba, Akkar', region: 'North' },
  { uni: 'Beirut Arab University', short: 'BAU', campus: 'Beirut (Main)', lat: 33.8722, lng: 35.4939, address: 'Beirut', region: 'Beirut' },
  { uni: 'Beirut Arab University', short: 'BAU', campus: 'Debbieh', lat: 33.6339, lng: 35.4789, address: 'Debbieh, Chouf', region: 'Mount Lebanon' },
  { uni: 'Beirut Arab University', short: 'BAU', campus: 'Tripoli', lat: 34.4539, lng: 35.8294, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Notre Dame University', short: 'NDU', campus: 'Zouk Mosbeh (Main)', lat: 33.9497, lng: 35.6117, address: 'Zouk Mosbeh, Keserwan', region: 'Mount Lebanon' },
  { uni: 'Notre Dame University', short: 'NDU', campus: 'Barsa (North)', lat: 34.3917, lng: 35.8211, address: 'Barsa, Koura', region: 'North' },
  { uni: 'Notre Dame University', short: 'NDU', campus: 'Deir el Kamar', lat: 33.7003, lng: 35.5658, address: 'Deir el Kamar, Chouf', region: 'Mount Lebanon' },
  { uni: 'University of Balamand', short: 'UOB', campus: 'Al Kurah (Main)', lat: 34.3672, lng: 35.7831, address: 'Al Kurah, North Lebanon', region: 'North' },
  { uni: 'University of Balamand', short: 'UOB', campus: 'Beirut (Achrafieh)', lat: 33.8858, lng: 35.5233, address: 'Achrafieh, Beirut', region: 'Beirut' },
  { uni: 'University of Balamand', short: 'UOB', campus: 'Akkar (Beino)', lat: 34.5431, lng: 36.1436, address: 'Beino, Akkar', region: 'North' },
  { uni: 'Holy Spirit University of Kaslik', short: 'USEK', campus: 'Kaslik (Main)', lat: 33.9819, lng: 35.6186, address: 'Kaslik, Jounieh', region: 'Mount Lebanon' },
  { uni: 'Holy Spirit University of Kaslik', short: 'USEK', campus: 'Zahle', lat: 33.8472, lng: 35.8978, address: 'Zahle, Bekaa', region: 'Bekaa' },
  { uni: 'Holy Spirit University of Kaslik', short: 'USEK', campus: 'Chekka', lat: 34.3283, lng: 35.7275, address: 'Chekka, North Lebanon', region: 'North' },
  { uni: 'American University of Technology', short: 'AUT', campus: 'Halat (Main)', lat: 34.0747, lng: 35.6517, address: 'Halat, Byblos', region: 'Mount Lebanon' },
  { uni: 'American University of Technology', short: 'AUT', campus: 'Tripoli', lat: 34.4286, lng: 35.8239, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Antonine University', short: 'UA', campus: 'Baabda (Main)', lat: 33.8497, lng: 35.5539, address: 'Baabda, Mount Lebanon', region: 'Mount Lebanon' },
  { uni: 'Antonine University', short: 'UA', campus: 'Zahle (Nabi Ayla)', lat: 33.8764, lng: 35.9522, address: 'Nabi Ayla, Zahle', region: 'Bekaa' },
  { uni: 'Antonine University', short: 'UA', campus: 'Mejdlaya (Zgharta)', lat: 34.4144, lng: 35.8683, address: 'Mejdlaya, Zgharta', region: 'North' },
  { uni: 'Jinan University', short: 'Jinan', campus: 'Tripoli (Main)', lat: 34.4128, lng: 35.8369, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Jinan University', short: 'Jinan', campus: 'Saida', lat: 33.5614, lng: 35.3811, address: 'Saida, South Lebanon', region: 'South' },
  { uni: 'City University', short: 'CityU', campus: 'Tripoli (Al Manar)', lat: 34.4367, lng: 35.8144, address: 'Al Manar, Tripoli', region: 'North' },
  { uni: 'Arab Open University', short: 'AOU', campus: 'Beirut (Badaro)', lat: 33.8756, lng: 35.5175, address: 'Badaro, Beirut', region: 'Beirut' },
  { uni: 'American University of Culture and Education', short: 'AUCE', campus: 'Beirut (Museum)', lat: 33.8794, lng: 35.5189, address: 'Museum District, Beirut', region: 'Beirut' },
  { uni: 'American University of Culture and Education', short: 'AUCE', campus: 'Nabatieh', lat: 33.3756, lng: 35.4853, address: 'Nabatieh, South Lebanon', region: 'South' },
  { uni: 'American University of Culture and Education', short: 'AUCE', campus: 'Tyre', lat: 33.2722, lng: 35.2089, address: 'Tyre, South Lebanon', region: 'South' },
  { uni: 'Universite Libano-Francaise', short: 'ULF', campus: 'Tripoli', lat: 34.4178, lng: 35.8336, address: 'Tripoli, North Lebanon', region: 'North' },
  { uni: 'Universite Libano-Francaise', short: 'ULF', campus: 'Deddeh (Koura)', lat: 34.3756, lng: 35.7989, address: 'Deddeh, Koura', region: 'North' },
  { uni: 'Universite Sainte Famille', short: 'USF', campus: 'Batroun', lat: 34.2547, lng: 35.6631, address: 'Batroun, North Lebanon', region: 'North' },
  { uni: 'East International University', short: 'EIU', campus: 'Beirut (Chyah)', lat: 33.8644, lng: 35.5136, address: 'Chyah, Beirut', region: 'Beirut' },
];

export const regions = ['All', 'Beirut', 'Mount Lebanon', 'North', 'South', 'Bekaa'];
