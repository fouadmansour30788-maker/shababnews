export interface University {
  id: number;
  name: string;
  short: string;
  type: string; // Private | Catholic | Islamic
  location: string;
  phone: string;
  email: string;
  website: string;
  founded?: number;
  programs?: string;
  majors: string[];
  description: string;
  image: string;
}

const img = (q: string) => `https://images.unsplash.com/${q}?w=1000&h=700&fit=crop`;

// Content sourced from the original Shabab News website (shababnews.net) — its
// North Lebanon university guide.
export const universities: University[] = [
  {
    id: 1, name: 'Al Jinan University', short: 'Jinan', type: 'Private',
    location: 'Zaitoun, Abou Samra, Tripoli', phone: '06-447906', email: 'mail@jinan.edu.lb', website: 'https://www.jinan.edu.lb',
    founded: 1988, programs: '40+',
    majors: ['Communication', 'Education', 'Literature & Humanities', 'Public Health', 'Sciences', 'Political Science'],
    description: "Founded in 1988 and officially licensed by Lebanese Republican Decree no. 1948 in 1999, Jinan University awards Bachelor, Honor, Master's and PhD degrees. It relies on an elite academic and administrative staff using modern curricula, methodology and technology recognized worldwide.",
    image: img('photo-1607237138185-eedd9c632b0b'),
  },
  {
    id: 2, name: 'American University of Technology', short: 'AUT', type: 'Private',
    location: 'Ras Masqa / Daher el Ain, North Lebanon', phone: '06-418503', email: 'info@aut.edu', website: 'https://www.aut.edu',
    programs: '14',
    majors: ['Accounting', 'Banking & Finance', 'Computer Science', 'Economics', 'Graphic Design', 'Hospitality Management', 'Information Technology', 'Interior Design', 'Management', 'MIS', 'Marketing & Retail', 'Nutrition & Dietetics', 'Transport Management'],
    description: "AUT prepares students for 21st-century challenges through global perspectives and 'cascading interdependence.' It emphasises leadership, interpersonal maturity and the practical application of knowledge across classroom, online and workplace settings.",
    image: img('photo-1532094349884-543bc11b234d'),
  },
  {
    id: 3, name: 'Arab Open University', short: 'AOU', type: 'Private',
    location: 'Behsas, Tripoli', phone: '06-409440', email: 'info@aou.edu.lb', website: 'https://web.aou.edu.lb',
    programs: '11',
    majors: ['Business Studies', 'Computer Studies', 'Education Studies', 'Language Studies'],
    description: 'Following the British Open University model, AOU delivers quality programmes with hands-on practical experience and research in IT, security, marketing, HR and entrepreneurship, alongside strong community engagement.',
    image: img('photo-1523050854058-8df90110c9f1'),
  },
  {
    id: 4, name: 'Arts, Science and Technology University', short: 'AUL', type: 'Private',
    location: 'University Center, Tripoli, North Lebanon', phone: '06-203222', email: 'info@aul.edu.lb', website: 'https://www.aul.edu.lb',
    founded: 2000, programs: '20+',
    majors: ['Business Administration', 'Humanities', 'Sciences & Fine Arts'],
    description: "Established in 2000, AUL is among the region's premier higher-education institutions, with a multinational student body of around 6,000. Tolerance, respect and openness are the principles on which the AUL community prospers.",
    image: img('photo-1498243691581-b145c3f54a5a'),
  },
  {
    id: 5, name: 'American University of Culture and Education', short: 'AUCE', type: 'Private',
    location: 'Badaro, Tayouneh roundabout, Omar Bayhom St., Beirut', phone: '01-385566', email: 'info@auce.edu.lb', website: 'https://auce.edu.lb',
    majors: [],
    description: 'The American University of Culture and Education (AUCE) provides accessible higher education to students across Lebanon.',
    image: img('photo-1591123120675-6f7f1aae0e5b'),
  },
  {
    id: 6, name: 'Azm University', short: 'Azm', type: 'Private',
    location: 'Fouad Chehab Boulevard, Tripoli', phone: '06-446572', email: 'info@azmuniversity.edu.lb', website: 'https://www.azmuniversity.edu.lb',
    founded: 2015, programs: '7',
    majors: ['Accounting', 'Architecture & Design', 'Business Administration', 'Journalism & Media', 'Finance', 'Management', 'Mass Media & Communication'],
    description: "Established by the M1 Group founders in 2014 with operations beginning in 2015, Azm University offers a distinguished learning experience in Tripoli — Bachelor's degrees in Business Administration, Architecture, Journalism and Media Communications, taught in English.",
    image: img('photo-1541339907198-e08756dedf3f'),
  },
  {
    id: 7, name: 'Beirut Arab University — Tripoli Campus', short: 'BAU', type: 'Private',
    location: 'Tripoli Campus, Corniche el-Mina', phone: '06-218400', email: 'admission@bau.edu.lb', website: 'https://www.bau.edu.lb',
    programs: '24',
    majors: ['Accounting', 'Architecture & Design', 'Banking & Finance', 'Biology', 'Chemistry', 'Civil Engineering', 'Computer Science', 'Electrical Engineering', 'Business Administration', 'Graphic Design', 'Interior Design', 'Mechanical Engineering', 'Medical Lab & Technology', 'Nursing', 'Nutrition & Dietetics', 'Physics'],
    description: "The Tripoli campus of Beirut Arab University offers classrooms, laboratories, libraries, dormitories and sports facilities, with comprehensive student services spanning admission, registration, housing and activities — all aimed at students' academic success and career development.",
    image: img('photo-1562774053-701939374585'),
  },
  {
    id: 8, name: 'City University', short: 'CityU', type: 'Private',
    location: 'Muhieddine Makkouk Boulevard, Abou Samra, Tripoli', phone: '06-426800', email: 'info@cityu.edu.lb', website: 'https://www.cityu.edu.lb',
    founded: 1966, programs: '29',
    majors: ['Accounting', 'Architecture & Design', 'Biomedical Engineering', 'Civil & Environmental Engineering', 'Computer Science', 'Economics', 'Graphic Design', 'Hospitality Management', 'Industrial Engineering', 'Information Technology', 'Interior Design', 'Management', 'Marine Engineering', 'Nursing', 'Petroleum Engineering', 'Translation', 'Travel & Tourism'],
    description: "Rooted in the 'Al-Manar Society' founded in 1966 by the late Prime Minister Rashid Karami and educator Muhieddine Makkouk, City University is a non-profit institution dedicated to quality education for North Lebanon and the wider Arab world.",
    image: img('photo-1481253127861-534498168948'),
  },
  {
    id: 9, name: 'Holy Spirit University of Kaslik', short: 'USEK', type: 'Catholic',
    location: 'Kaslik, Mount Lebanon', phone: '03-259801', email: 'info@usek.edu.lb', website: 'https://www.usek.edu.lb',
    founded: 1938,
    majors: [],
    description: 'Established by the Lebanese Maronite Order in 1938, USEK was the first university founded upon a Lebanese initiative by Lebanese citizens. Serving over 8,000 students, it blends tradition with modernity through Christian humanist values, with regional centres in Zahle, Chekka and Rmeich.',
    image: img('photo-1571019613454-1cb2f99b2d8b'),
  },
  {
    id: 10, name: 'Antonine University — Mejdlaya', short: 'UA', type: 'Catholic',
    location: 'Mejdlaya — Zgharta', phone: '06-669101', email: 'info.uam@ua.edu.lb', website: 'https://www.ua.edu.lb',
    programs: '5',
    majors: ['Business Administration', 'Engineering', 'Music & Musicology', 'Public Health, Physical Therapy & Nursing', 'Sport Sciences'],
    description: "Situated in the historic district of Zgharta, Antonine University's Mejdlaya campus offers an inspiring academic, cultural and natural environment 90km from Beirut, with a moderate climate and landscapes ideal for learning and outdoor life.",
    image: img('photo-1551038247-3d9af20df552'),
  },
  {
    id: 11, name: 'Université Saint-Joseph — Tripoli (CLN)', short: 'USJ', type: 'Catholic',
    location: 'Ras Maska, south entrance of Tripoli', phone: '06-400820', email: 'cln@usj.edu.lb', website: 'https://www.cln.usj.edu.lb',
    founded: 1881, programs: '10',
    majors: ['Arabic Language & Literature', 'Biochemistry', 'Chemical Engineering', 'Computer Engineering', 'Electrical Engineering', 'French Language & Literature', 'Mathematics', 'Mechanical Engineering', 'Primary Education'],
    description: 'USJ traces its roots to 1881, when Père Monnot obtained papal confirmation of the title of University and the right to confer academic degrees — the origin of its Faculty of Theology (1883). Its North Lebanon Campus (CLN) serves Tripoli and the north.',
    image: img('photo-1580582932707-520aed937b7b'),
  },
  {
    id: 12, name: 'Lebanese International University', short: 'LIU', type: 'Private',
    location: 'Dahr El Ain Road, Al Haykalieh, Tripoli', phone: '06-416333', email: 'media@liu.edu.lb', website: 'https://www.liu.edu.lb',
    majors: [],
    description: "LIU's dedicated faculty and staff support students' overall development, integration and involvement in student life across its accessible campuses throughout Lebanon.",
    image: img('photo-1568792923760-d70635a89fdc'),
  },
  {
    id: 13, name: 'Notre Dame University — North Lebanon', short: 'NDU', type: 'Catholic',
    location: 'Barsa, El Koura, North Lebanon', phone: '06-416100', email: 'admission_nlc@ndu.edu.lb', website: 'https://www.ndu.edu.lb',
    programs: '18',
    majors: ['Accounting', 'Architecture & Design', 'Banking & Finance', 'Biology', 'Civil Engineering', 'Computer Science', 'Electrical Engineering', 'Food Science & Technology', 'Graphic Design', 'Hospitality Management', 'Human Resources Management', 'Interior Design', 'Management', 'Marketing & Retail', 'Nutrition & Dietetics', 'Physical Education', 'Travel & Tourism'],
    description: 'The NDU North Lebanon Campus sits on the green hills of Barsa in Koura, overlooking the bay of El Mina–Tripoli and the mountains of Ehden and Bcharré. Built on 50,000 m² donated by Barsa village, its first building opened in 1999.',
    image: img('photo-1592280771190-3e2e4d571952'),
  },
  {
    id: 14, name: 'Université Libano-Française (ULF)', short: 'ULF', type: 'Private',
    location: 'Deddeh, El Koura', phone: '06-405046', email: 'info@ulf.edu.lb', website: 'https://www.ulf.edu.lb',
    founded: 1996, programs: '30',
    majors: ['Technology', 'Business', 'Engineering', 'Science & Letters'],
    description: 'Established in 1996 as the Centre Universitaire de Technologie (CUT) and renamed in 2007, ULF (Université de Technologie et de Sciences Appliquées Libano-Française) offers 30 fields of specialization leading to Bachelor’s, Master’s and Engineering diplomas.',
    image: img('photo-1592280771190-3e2e4d571952'),
  },
  {
    id: 15, name: 'Université Sainte Famille — Batroun', short: 'USF', type: 'Catholic',
    location: 'Rue n°3, Immeuble 380, Batroun, North Lebanon', phone: '06-642250', email: 'info@usf.edu.lb', website: 'https://www.usf.edu.lb',
    programs: '11',
    majors: ['Business', 'Pedagogy', 'Laboratory Medicine', 'MBA', 'Medical Imaging', 'Midwifery', 'Nursing', 'Nutrition & Dietetics', 'Orthopedagogy', 'Physiotherapy'],
    description: 'Run by the Congregation of Maronite Sisters of the Holy Family, USF emphasises pastoral values and the perpetual pursuit of human perfection, developing well-rounded individuals prepared for ethical, civic and professional challenges.',
    image: img('photo-1576091160550-2173dba999ef'),
  },
  {
    id: 16, name: 'University of Balamand', short: 'UOB', type: 'Private',
    location: 'Al-Kurah, Amioun', phone: '06-930250', email: 'admissions@balamand.edu.lb', website: 'https://www.balamand.edu.lb',
    founded: 1988, programs: '61',
    majors: ['Fine Arts', 'Arts & Sciences', 'Engineering', 'Business & Management', 'Health Sciences', 'Medicine & Medical Sciences', 'Technology', 'Library & Information Studies'],
    description: 'Founded in 1988 and rooted in the Antiochian Orthodox Christian tradition, the University of Balamand draws on values of tolerance, openness and inquiry, promoting interfaith dialogue and committed to nation-building through academic and research initiatives.',
    image: img('photo-1607237138185-eedd9c632b0b'),
  },
  {
    id: 17, name: 'University of Tripoli', short: 'UT', type: 'Islamic',
    location: 'Abou Samra, Islah Street, Tripoli', phone: '06-447200', email: 'info@ut.edu.lb', website: 'https://www.ut.edu.lb',
    founded: 1982,
    majors: ['Islamic Studies', 'Islamic Jurisprudence (Sharia)'],
    description: 'Established by the Islamic Reform Society in 1982 and licensed under Presidential Decree No. 3484 (1986) as the Tripoli University Institute for Islamic Studies, it offers recognised degrees in Islamic Jurisprudence and Islamic Studies.',
    image: img('photo-1519452575417-564c1401ecc0'),
  },
];

export const uniTypes = ['All', 'Private', 'Catholic', 'Islamic'];
