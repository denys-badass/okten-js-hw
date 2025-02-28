'use strict';

// Task 10.10
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
const users = [
    {
        id: 1,
        name: 'Joseph Fleming',
        email: 'garciatiffany@salazar.com',
        phone: '656249204280438',
        address: '2313 Patricia Crossing, Williamburgh, HI 16010',
        company: 'Clark-Harvey',
        jobTitle: 'Lawyer'
    },
    {
        id: 2,
        name: 'Kaitlin Sandoval',
        email: 'michaelwells@miller-mcdaniel.com',
        phone: '+1-163-632-1699863',
        address: '72158 David Dale Apt. 959, New Georgebury, VT 61533',
        company: 'Bradford, Bennett and Richardson',
        jobTitle: 'Barrister'
    },
    {
        id: 3,
        name: 'Brooke Lopez',
        email: 'danielle87@hotmail.com',
        phone: '(059)617-99872117',
        address: '573 Guzman Drive, West Brianmouth, IN 09219',
        company: 'Ruiz-Grant',
        jobTitle: 'Quality manager'
    },
    {
        id: 4,
        name: 'Edward Sanders',
        email: 'lambcrystal@yahoo.com',
        phone: '8821128385332',
        address: '7668 Donna Harbor, Lake William, MA 21195',
        company: 'Best, Wu and Greene',
        jobTitle: 'Insurance underwriter'
    },
    {
        id: 5,
        name: 'Kimberly Freeman',
        email: 'cindy11@may-cannon.com',
        phone: '644-827-07705103',
        address: '50509 Debra Run Apt. 727, Garciamouth, MN 98865',
        company: 'Rodriguez, Carroll and Webb',
        jobTitle: 'Community education officer'
    },
    {
        id: 6,
        name: 'William Collins',
        email: 'gdaniel@morrison.info',
        phone: '511-401-786297685',
        address: '1748 Benson Turnpike, South Patrickhaven, IA 64142',
        company: 'Hodge, Valdez and Beltran',
        jobTitle: 'Engineer, manufacturing systems'
    },
    {
        id: 7,
        name: 'Michael Bowers',
        email: 'vvelasquez@wright-woodward.com',
        phone: '(813)509-9799',
        address: '19477 Eric Vista Suite 875, East Reginahaven, ME 61667',
        company: 'Murray-Ferguson',
        jobTitle: 'Corporate investment banker'
    },
    {
        id: 8,
        name: 'Amy Taylor',
        email: 'gregory07@harrison.com',
        phone: '(807)060-5172',
        address: '337 Nicholas Circle, Port Catherineton, HI 01133',
        company: 'Reed PLC',
        jobTitle: 'Arts administrator'
    },
    {
        id: 9,
        name: 'Elizabeth Byrd',
        email: 'alexanderharris@yahoo.com',
        phone: '001-024-332-9273',
        address: '13409 Miller Plains, West Scott, KY 07066',
        company: 'Crawford-King',
        jobTitle: 'Commercial horticulturist'
    },
    {
        id: 10,
        name: 'Anthony Smith',
        email: 'derek80@anderson-johnston.com',
        phone: '+1-345-421-17515740',
        address: '9129 Lopez Rest, Gayshire, MN 06406',
        company: 'Morse LLC',
        jobTitle: 'Lecturer, further education'
    },
    {
        id: 11,
        name: 'Tanner Arnold',
        email: 'ashleyhudson@gmail.com',
        phone: '001-154-097-2671155',
        address: '84913 Martinez Row, South Dennisfurt, MI 51086',
        company: 'Howard-Alvarez',
        jobTitle: 'Librarian, academic'
    },
    {
        id: 12,
        name: 'Angela Aguilar',
        email: 'nwilliams@gmail.com',
        phone: '8441095085678',
        address: '6212 Mcmahon Station, South Beverlyside, CT 07310',
        company: 'Wilkinson-Dean',
        jobTitle: 'Teacher, secondary school'
    },
    {
        id: 13,
        name: 'Martha Lewis',
        email: 'michaelkelley@boyd-marshall.com',
        phone: '+1-537-927-4368396',
        address: '017 Barbara Lake Apt. 282, Mortonbury, NM 04403',
        company: 'Roberts-Jones',
        jobTitle: 'Civil Service fast streamer'
    },
    {
        id: 14,
        name: 'Alicia Russo',
        email: 'vbooker@yahoo.com',
        phone: '045-084-4972825',
        address: '55089 Francis Station, Schultzborough, MD 07253',
        company: 'Cabrera, Clark and Kane',
        jobTitle: 'Contracting civil engineer'
    },
    {
        id: 15,
        name: 'Kelly Thomas',
        email: 'damonsmith@reese.com',
        phone: '8463608106',
        address: '93400 Sharp Coves Suite 056, Andrewview, OK 13958',
        company: 'Navarro-Powers',
        jobTitle: 'Editorial assistant'
    },
    {
        id: 16,
        name: 'Edward Buchanan',
        email: 'qfrench@hotmail.com',
        phone: '568-749-6303',
        address: '555 Reed Viaduct, Vincentport, WY 94795',
        company: 'Moreno, Perry and Nelson',
        jobTitle: 'General practice doctor'
    },
    {
        id: 17,
        name: 'Jamie Sanders',
        email: 'palmermichelle@yahoo.com',
        phone: '+1-205-531-15889301',
        address: '9454 Tamara Ferry, Perryfurt, VT 91272',
        company: 'Jackson-Williams',
        jobTitle: 'Estate agent'
    },
    {
        id: 18,
        name: 'Candace Ward',
        email: 'xflores@schneider.net',
        phone: '(518)747-84805934',
        address: '279 Rodriguez Lights Suite 607, Hintonbury, OR 61229',
        company: 'Jefferson-Schaefer',
        jobTitle: 'Tree surgeon'
    },
    {
        id: 19,
        name: 'Teresa Peterson',
        email: 'sharonwhitehead@gutierrez-joseph.biz',
        phone: '855-331-7357',
        address: '1450 Leslie Crescent Suite 743, Teresaberg, CT 60764',
        company: 'Rowe, Pearson and Bennett',
        jobTitle: 'Operational investment banker'
    },
    {
        id: 20,
        name: 'Katherine Klein',
        email: 'vincentcarrillo@orozco.com',
        phone: '6930216681',
        address: '951 Diane Falls Suite 385, Toddmouth, VT 32199',
        company: 'Mccall, Mccarthy and Brock',
        jobTitle: 'Amenity horticulturist'
    },
    {
        id: 21,
        name: 'Donald Drake',
        email: 'jamesharris@howe.com',
        phone: '(506)922-0173428',
        address: '535 Laura Mews Suite 560, Taylorberg, TN 29393',
        company: 'Kim-Davis',
        jobTitle: 'Clinical research associate'
    },
    {
        id: 22,
        name: 'Jeffrey Taylor',
        email: 'ethan59@schmidt.com',
        phone: '0727551818',
        address: '765 Austin Fall, Port Diana, LA 43988',
        company: 'Williams PLC',
        jobTitle: 'Automotive engineer'
    },
    {
        id: 23,
        name: 'Nicholas Hill',
        email: 'nbeard@yahoo.com',
        phone: '5786803903',
        address: '768 Sarah Road, Westburgh, IA 29711',
        company: 'Turner, Bell and Mccoy',
        jobTitle: 'Administrator'
    },
    {
        id: 24,
        name: 'Anna Oliver',
        email: 'johnszachary@hotmail.com',
        phone: '+1-696-965-984642167',
        address: '78986 Williams Spurs, Rogersport, AZ 74426',
        company: 'Sanchez, Turner and Sanders',
        jobTitle: 'Clinical research associate'
    },
    {
        id: 25,
        name: 'Matthew Oconnor',
        email: 'asantiago@yahoo.com',
        phone: '859598669774964',
        address: '08353 Dennis Mount, Madisonstad, UT 07593',
        company: 'Delacruz-House',
        jobTitle: 'Lecturer, further education'
    },
    {
        id: 26,
        name: 'Amy Lara',
        email: 'tsmith@elliott-burke.com',
        phone: '137-385-0607982',
        address: '967 Vickie Neck, North Sean, MD 69747',
        company: 'Anderson, Turner and Mckinney',
        jobTitle: 'Dealer'
    },
    {
        id: 27,
        name: 'Michelle Bennett',
        email: 'simseric@yahoo.com',
        phone: '+1-751-088-00203314',
        address: '595 Dawn Port Suite 833, South Lydiaton, KS 31151',
        company: 'Johnson PLC',
        jobTitle: 'International aid/development worker'
    },
    {
        id: 28,
        name: 'Robert Shields',
        email: 'mjohnson@hotmail.com',
        phone: '(080)579-6689',
        address: '9636 Christensen Groves, Haleburgh, GA 53600',
        company: 'Perez, Hayes and Smith',
        jobTitle: 'Producer, radio'
    },
    {
        id: 29,
        name: 'Kiara Williams',
        email: 'steven60@yahoo.com',
        phone: '581-826-6399',
        address: '597 Kara Causeway Apt. 756, Sandersland, DE 97800',
        company: 'Pierce Inc',
        jobTitle: 'Toxicologist'
    },
    {
        id: 30,
        name: 'Brandi Mcintyre',
        email: 'madelineyoung@gmail.com',
        phone: '(359)123-8085',
        address: '6897 Shawn Fords, Brownton, CA 09639',
        company: 'Cook-Skinner',
        jobTitle: 'Operational researcher'
    },
    {
        id: 31,
        name: 'Shane Andrade',
        email: 'apark@yahoo.com',
        phone: '537-270-8596',
        address: '70267 Arnold Unions Suite 403, New Leemouth, KY 50752',
        company: 'Schroeder-Fleming',
        jobTitle: 'Psychologist, forensic'
    },
    {
        id: 32,
        name: 'Thomas Gutierrez',
        email: 'yfarley@hall.com',
        phone: '(306)784-28247791',
        address: 'USS Horn, FPO AA 83556',
        company: 'Finley-Dean',
        jobTitle: 'Accountant, chartered public finance'
    },
    {
        id: 33,
        name: 'Natalie Marsh',
        email: 'ginadavies@gmail.com',
        phone: '7729452878959',
        address: '282 Matthew Station, Kevinview, PA 76550',
        company: 'Price, Hammond and Bradley',
        jobTitle: 'Scientist, research (physical sciences)'
    },
    {
        id: 34,
        name: 'Kevin Moore',
        email: 'christineolson@yahoo.com',
        phone: '+1-380-875-5895750',
        address: '584 Danielle Extensions Apt. 246, Reynoldsbury, NM 04629',
        company: 'Hines, Snyder and Smith',
        jobTitle: 'Psychologist, clinical'
    },
    {
        id: 35,
        name: 'Jason Bowen',
        email: 'cassandra23@hotmail.com',
        phone: '6419892021',
        address: '6311 Mitchell Manor Suite 526, Davidsontown, NY 93765',
        company: 'Santiago and Sons',
        jobTitle: 'Agricultural engineer'
    },
    {
        id: 36,
        name: 'Michael Smith',
        email: 'amcintyre@yahoo.com',
        phone: '804-845-9088',
        address: '9158 Alvarado Common, Marktown, SD 40292',
        company: 'Bell, Hardin and Lamb',
        jobTitle: 'Social researcher'
    },
    {
        id: 37,
        name: 'Emma Lee',
        email: 'lisarivers@gomez.biz',
        phone: '(182)322-05848669',
        address: '5541 Timothy Tunnel, North Mariafurt, AZ 42720',
        company: 'Brown, Johnson and Rowland',
        jobTitle: 'Engineer, building services'
    },
    {
        id: 38,
        name: 'Barbara Cruz',
        email: 'kristin04@hotmail.com',
        phone: '001-341-505-1614',
        address: '13650 Timothy Inlet Suite 917, Andrewtown, IA 03952',
        company: 'Edwards, Ramos and Johnson',
        jobTitle: 'Biomedical engineer'
    },
    {
        id: 39,
        name: 'Lori Mccoy',
        email: 'mmathis@robinson.net',
        phone: '6048614311',
        address: 'USS Chavez, FPO AP 06042',
        company: 'Jackson Group',
        jobTitle: 'Higher education careers adviser'
    },
    {
        id: 40,
        name: 'Andrew Taylor',
        email: 'elizabethwarren@yahoo.com',
        phone: '707-484-9278',
        address: '103 Garcia Manors, Maryville, GA 53415',
        company: 'Moses-Carpenter',
        jobTitle: 'Surveyor, land/geomatics'
    },
    {
        id: 41,
        name: 'Matthew Kelly',
        email: 'uaustin@holland.com',
        phone: '001-485-596-202818317',
        address: '536 Jennifer Burg, Lauriefurt, CO 45652',
        company: 'Smith Ltd',
        jobTitle: 'Education administrator'
    },
    {
        id: 42,
        name: 'Elizabeth Lara',
        email: 'thomaspruitt@thompson.net',
        phone: '(153)173-159322088',
        address: '1358 Shaw Station Suite 273, Jameschester, VA 67678',
        company: 'Taylor Inc',
        jobTitle: 'Armed forces logistics/support/administrative officer'
    },
    {
        id: 43,
        name: 'Dustin Ross',
        email: 'lauracampos@yahoo.com',
        phone: '+1-547-680-66765594',
        address: 'Unit 0966 Box 7623, DPO AP 17128',
        company: 'Melendez-Martin',
        jobTitle: 'Politician\'s assistant'
    },
    {
        id: 44,
        name: 'Alex Wheeler',
        email: 'timothybennett@gmail.com',
        phone: '036-695-21958006',
        address: '831 Gloria Street, West Deniseport, TN 45409',
        company: 'Diaz PLC',
        jobTitle: 'Speech and language therapist'
    },
    {
        id: 45,
        name: 'Brandy Hicks',
        email: 'andrew73@gonzalez-gentry.com',
        phone: '5570351926',
        address: 'Unit 3689 Box 5425, DPO AE 10252',
        company: 'Douglas-Freeman',
        jobTitle: 'Physicist, medical'
    },
    {
        id: 46,
        name: 'Robin Kennedy',
        email: 'uolson@hotmail.com',
        phone: '(253)105-0002',
        address: '0812 Davis Park, Mckayshire, CA 74127',
        company: 'White, Hart and Hunt',
        jobTitle: 'Theatre stage manager'
    },
    {
        id: 47,
        name: 'Jonathan Oconnor',
        email: 'chelsea84@yahoo.com',
        phone: '+1-719-175-79005098',
        address: '56363 Gregory Vista, West Nicoleport, IL 70893',
        company: 'Malone, Pratt and Campbell',
        jobTitle: 'Press photographer'
    },
    {
        id: 48,
        name: 'Courtney Robertson',
        email: 'davidgardner@hotmail.com',
        phone: '001-434-949-7357',
        address: '3651 Melanie Corners, Nguyenton, WV 39434',
        company: 'Gamble, Cooper and Rodgers',
        jobTitle: 'Doctor, general practice'
    },
    {
        id: 49,
        name: 'Breanna Stewart',
        email: 'sarah96@hernandez.com',
        phone: '8895622005034',
        address: '42527 Jasmine Junction, Theresaport, IN 44416',
        company: 'Barnes-Moreno',
        jobTitle: 'Toxicologist'
    },
    {
        id: 50,
        name: 'Daniel Martinez',
        email: 'mclaughlinjohn@hotmail.com',
        phone: '(651)733-6575752',
        address: '58255 Cynthia Square, North Jerry, NH 58901',
        company: 'Clark LLC',
        jobTitle: 'Metallurgist'
    },
    {
        id: 51,
        name: 'Anthony Ho',
        email: 'btaylor@gmail.com',
        phone: '+1-267-312-69573388',
        address: '135 Reid Ridge Suite 439, West Travisland, PA 83331',
        company: 'Strickland-Perez',
        jobTitle: 'Commercial art gallery manager'
    },
    {
        id: 52,
        name: 'Sandra Dickerson',
        email: 'chelsea34@hotmail.com',
        phone: '2189369112',
        address: 'USNV Foster, FPO AP 47888',
        company: 'Wolfe-Potter',
        jobTitle: 'Travel agency manager'
    },
    {
        id: 53,
        name: 'Chris Ramsey',
        email: 'garypayne@hotmail.com',
        phone: '901-712-3273252',
        address: '2170 Chloe Brooks, North Bianca, AR 25451',
        company: 'Martinez Ltd',
        jobTitle: 'Biochemist, clinical'
    },
    {
        id: 54,
        name: 'Robert Lyons',
        email: 'fdiaz@gmail.com',
        phone: '3929685749029',
        address: '618 Christina Court, West Lauraside, MD 53029',
        company: 'Dixon-Charles',
        jobTitle: 'Learning mentor'
    },
    {
        id: 55,
        name: 'Kathy Blackwell',
        email: 'carrjanice@sullivan.com',
        phone: '4759753882',
        address: '000 Ryan Burg Suite 654, Port Matthew, MT 89977',
        company: 'Lopez-Peterson',
        jobTitle: 'Engineer, water'
    },
    {
        id: 56,
        name: 'Melanie Jackson',
        email: 'hineserica@hotmail.com',
        phone: '5854221355',
        address: '6195 Mccann Flats Apt. 457, Bellfort, UT 70336',
        company: 'Craig LLC',
        jobTitle: 'Local government officer'
    },
    {
        id: 57,
        name: 'Lisa Riley',
        email: 'jamesjackson@thomas-fowler.com',
        phone: '120-390-3321194',
        address: '0493 Romero Radial, North Erin, SD 66900',
        company: 'Smith-Morrison',
        jobTitle: 'Geophysicist/field seismologist'
    },
    {
        id: 58,
        name: 'Michael Case',
        email: 'christineperry@kerr.com',
        phone: '001-315-648-2510207',
        address: '8704 Clifford Loop, North Kathryn, HI 91305',
        company: 'Ryan-Acosta',
        jobTitle: 'Phytotherapist'
    },
    {
        id: 59,
        name: 'Randy Rose',
        email: 'qgarcia@yahoo.com',
        phone: '001-415-559-19280887',
        address: '92160 Raymond Streets Apt. 939, West Abigailtown, NC 95231',
        company: 'Brown-Sanchez',
        jobTitle: 'Administrator, arts'
    },
    {
        id: 60,
        name: 'James Washington',
        email: 'rcortez@hotmail.com',
        phone: '889-066-93537058',
        address: '7059 Davis Groves Suite 372, Summersland, MO 61583',
        company: 'Perez, Ross and Vasquez',
        jobTitle: 'Surgeon'
    },
    {
        id: 61,
        name: 'Jesse Wallace',
        email: 'rivasstephen@petty.net',
        phone: '702-472-1661',
        address: 'PSC 9889, Box 2533, APO AE 14506',
        company: 'Fox, Nash and Gonzalez',
        jobTitle: 'Producer, radio'
    },
    {
        id: 62,
        name: 'Brad Huang',
        email: 'makayla05@yahoo.com',
        phone: '75616292107444',
        address: '434 Gibson Ford, Bobbytown, AK 88817',
        company: 'Lewis, Hogan and Jimenez',
        jobTitle: 'Chartered certified accountant'
    },
    {
        id: 63,
        name: 'Gail Miller',
        email: 'gking@clark.biz',
        phone: '001-687-890-31539274',
        address: 'Unit 4505 Box 0947, DPO AE 35059',
        company: 'Thomas-Bennett',
        jobTitle: 'Drilling engineer'
    },
    {
        id: 64,
        name: 'Joseph Beard',
        email: 'heather33@silva.com',
        phone: '45379471666058',
        address: '084 Joseph Trace, Nicoleland, AL 43716',
        company: 'Snyder-Warner',
        jobTitle: 'Scientist, audiological'
    },
    {
        id: 65,
        name: 'Brittany Simpson',
        email: 'christinathomas@yahoo.com',
        phone: '+1-615-850-682698061',
        address: '817 Joseph Walk Apt. 986, New Emilychester, NC 27680',
        company: 'Hunt, Johnson and Moss',
        jobTitle: 'Meteorologist'
    },
    {
        id: 66,
        name: 'Carol Kennedy',
        email: 'ryan12@lawrence-williams.com',
        phone: '9009741583',
        address: '648 Natalie Estate, Port Dawnton, SC 50341',
        company: 'Perez, Gonzalez and Carter',
        jobTitle: 'Chief Operating Officer'
    },
    {
        id: 67,
        name: 'Patricia Johnson',
        email: 'priscilla19@bass-johnson.com',
        phone: '025-256-5358',
        address: 'USNV Thompson, FPO AA 02958',
        company: 'Padilla, Anderson and Roberts',
        jobTitle: 'Insurance risk surveyor'
    },
    {
        id: 68,
        name: 'Dr. Jessica Gomez',
        email: 'dunnrobert@robinson.net',
        phone: '001-394-682-8707',
        address: 'Unit 3149 Box 8741, DPO AA 98796',
        company: 'Carey, Wilson and West',
        jobTitle: 'Film/video editor'
    },
    {
        id: 69,
        name: 'Ryan Brown',
        email: 'morrisjustin@yahoo.com',
        phone: '866-228-95891345',
        address: '7573 Horton Vista, Toddberg, TN 65203',
        company: 'Fry, Ross and Peterson',
        jobTitle: 'Chief Technology Officer'
    },
    {
        id: 70,
        name: 'Jessica Barnes',
        email: 'marknelson@fisher.org',
        phone: '+1-058-710-856808489',
        address: '381 Sean Rue, Jeffreyside, NC 51398',
        company: 'Brooks LLC',
        jobTitle: 'Therapist, horticultural'
    },
    {
        id: 71,
        name: 'Elizabeth Young',
        email: 'sarah12@fisher.com',
        phone: '912-760-68494060',
        address: '6233 Samuel Valley, Lake Gregory, MS 67122',
        company: 'Mcdonald Inc',
        jobTitle: 'Licensed conveyancer'
    },
    {
        id: 72,
        name: 'Scott Owens',
        email: 'fschmidt@jones.org',
        phone: '576-532-200532148',
        address: '26285 Tina Flat, North Kellystad, ME 97430',
        company: 'Avila, Stevens and Patterson',
        jobTitle: 'Scientist, research (life sciences)'
    },
    {
        id: 73,
        name: 'Brenda Rodriguez',
        email: 'samanthaowens@nichols.net',
        phone: '001-352-060-62336174',
        address: '27940 Amy Corners Suite 455, West Cliffordchester, NJ 43710',
        company: 'Medina Inc',
        jobTitle: 'Pension scheme manager'
    },
    {
        id: 74,
        name: 'Taylor Patel',
        email: 'ericcosta@bruce-mueller.com',
        phone: '9384173375',
        address: '282 Noah Rapid, West Brandimouth, CO 03792',
        company: 'Golden-Frazier',
        jobTitle: 'Colour technologist'
    },
    {
        id: 75,
        name: 'Dr. Jacqueline Price',
        email: 'melissa61@russell.com',
        phone: '(063)825-2597467',
        address: '56767 Reilly Ports, North Stephanieberg, UT 52935',
        company: 'Norris, Reese and Jenkins',
        jobTitle: 'Engineer, civil (contracting)'
    },
    {
        id: 76,
        name: 'Justin Lambert',
        email: 'heatherfinley@yahoo.com',
        phone: '001-566-727-88269350',
        address: '298 Renee Ridge, West Josephborough, NE 77718',
        company: 'Scott, Young and Marshall',
        jobTitle: 'Sports development officer'
    },
    {
        id: 77,
        name: 'Elizabeth Rocha',
        email: 'charlesmeagan@hancock.com',
        phone: '(126)420-6028',
        address: '24501 Amanda Dale, Crossmouth, NE 09274',
        company: 'Clark-Gill',
        jobTitle: 'Architect'
    },
    {
        id: 78,
        name: 'Scott Thomas',
        email: 'robertstammy@gmail.com',
        phone: '0171758565287',
        address: '6094 Barker Valleys, Juarezmouth, RI 97442',
        company: 'Smith-Willis',
        jobTitle: 'Press sub'
    },
    {
        id: 79,
        name: 'Albert Ortega',
        email: 'morgan59@cox-young.com',
        phone: '(775)980-28650743',
        address: '472 Stone Mission, Christopherville, AL 02848',
        company: 'Rogers, Cooper and Manning',
        jobTitle: 'Dentist'
    },
    {
        id: 80,
        name: 'Mrs. Holly Wright',
        email: 'jmorris@reyes-johnson.com',
        phone: '001-122-269-212216410',
        address: '71084 Thomas Valleys Apt. 041, Castilloside, IN 97126',
        company: 'Armstrong LLC',
        jobTitle: 'Television camera operator'
    },
    {
        id: 81,
        name: 'Patricia Gibson',
        email: 'robert83@montoya.com',
        phone: '355-173-271541475',
        address: '12270 Molly Alley Apt. 097, Joneston, DE 86378',
        company: 'Thomas and Sons',
        jobTitle: 'Chief Operating Officer'
    },
    {
        id: 82,
        name: 'Mr. Joseph Brewer',
        email: 'megan74@johnson.com',
        phone: '(230)279-5663',
        address: '40732 Erica Hollow Suite 483, Gonzalesside, NE 05261',
        company: 'Freeman-Allen',
        jobTitle: 'Computer games developer'
    },
    {
        id: 83,
        name: 'Timothy Frederick',
        email: 'wilsonamy@yahoo.com',
        phone: '5034940971918',
        address: '6580 Rhodes Light, East Jeremyview, VA 03027',
        company: 'Wallace, Smith and Chambers',
        jobTitle: 'Research scientist (life sciences)'
    },
    {
        id: 84,
        name: 'Jessica Walker',
        email: 'bryan04@andrews.biz',
        phone: '909-177-663727114',
        address: '36058 Walker Trace Suite 685, North Kennethport, WI 07535',
        company: 'Flynn and Sons',
        jobTitle: 'Accountant, chartered public finance'
    },
    {
        id: 85,
        name: 'Diana Johnson',
        email: 'tjohnson@gmail.com',
        phone: '(884)898-3232',
        address: '86020 Michelle Haven Suite 350, West Brittanychester, CO 11908',
        company: 'Hansen, Ward and Torres',
        jobTitle: 'Advertising art director'
    },
    {
        id: 86,
        name: 'Robert Garcia',
        email: 'samantha55@richards-davis.org',
        phone: '586793587263763',
        address: '6759 Thomas Locks, New Thomas, TN 53534',
        company: 'Willis-Garcia',
        jobTitle: 'Special effects artist'
    },
    {
        id: 87,
        name: 'Jessica Brown',
        email: 'franklinbrenda@hotmail.com',
        phone: '5674070876',
        address: '1560 Peterson Ford Apt. 620, Port Michelehaven, HI 65687',
        company: 'Livingston-Hanson',
        jobTitle: 'Advertising account planner'
    },
    {
        id: 88,
        name: 'Sean Bishop',
        email: 'dennisgraves@hotmail.com',
        phone: '(780)153-2588',
        address: '202 Butler Pines, Gutierrezside, CO 51924',
        company: 'Hull-Hansen',
        jobTitle: 'Radio broadcast assistant'
    },
    {
        id: 89,
        name: 'Cassandra Garcia',
        email: 'crystal39@gibson.com',
        phone: '+1-016-910-01751767',
        address: '081 Landry Hill, Lake Brenda, VT 45594',
        company: 'James, Fox and Mitchell',
        jobTitle: 'Oceanographer'
    },
    {
        id: 90,
        name: 'Christopher Marsh',
        email: 'ykirk@terry.org',
        phone: '(066)980-73685207',
        address: '4570 Jones Throughway Apt. 303, Andersonchester, ID 47514',
        company: 'Powell Ltd',
        jobTitle: 'Engineer, electronics'
    },
    {
        id: 91,
        name: 'Courtney Henderson',
        email: 'patrick66@stewart.info',
        phone: '+1-846-276-0127557',
        address: '1657 Marc Hill, Lake Stacyville, DE 26782',
        company: 'Walton-Hebert',
        jobTitle: 'Field trials officer'
    },
    {
        id: 92,
        name: 'Wesley Moran',
        email: 'gordonnatasha@collins-ellis.com',
        phone: '7577988507',
        address: 'PSC 1413, Box 5594, APO AA 35438',
        company: 'Graves, Adams and Chen',
        jobTitle: 'Restaurant manager, fast food'
    },
    {
        id: 93,
        name: 'Cory Davis',
        email: 'steven98@duran.com',
        phone: '759729181667697',
        address: '297 Ortiz Fall Suite 720, South Joshualand, AK 96503',
        company: 'Dudley, Estes and Wilson',
        jobTitle: 'Designer, fashion/clothing'
    },
    {
        id: 94,
        name: 'Lauren Phillips',
        email: 'harrisonthomas@hotmail.com',
        phone: '9155607505',
        address: '1443 Moore Springs, West Bradley, LA 57413',
        company: 'Cox-Martin',
        jobTitle: 'Research scientist (life sciences)'
    },
    {
        id: 95,
        name: 'Teresa Bauer',
        email: 'wdiaz@yahoo.com',
        phone: '50744369313041',
        address: '15229 Scott Forks Suite 772, New Gary, TN 87166',
        company: 'Gonzales, Smith and Potter',
        jobTitle: 'Commercial horticulturist'
    },
    {
        id: 96,
        name: 'Nicole Brown',
        email: 'adamknapp@gaines.com',
        phone: '(003)702-53682105',
        address: '118 Mcguire Lock Suite 330, North Brian, HI 66130',
        company: 'Taylor-Franklin',
        jobTitle: 'Legal executive'
    },
    {
        id: 97,
        name: 'Alex Morales',
        email: 'lisa46@lucas.com',
        phone: '878-726-6798',
        address: '772 Janice Road, Williamport, OR 43974',
        company: 'Walker Group',
        jobTitle: 'Research scientist (physical sciences)'
    },
    {
        id: 98,
        name: 'Savannah Gonzalez',
        email: 'kimberly79@peters.biz',
        phone: '(880)190-17978435',
        address: '1393 James Rapid Suite 616, New Mark, OH 68291',
        company: 'Schwartz, Jones and Garcia',
        jobTitle: 'Medical sales representative'
    },
    {
        id: 99,
        name: 'Mary Williams',
        email: 'juan66@hotmail.com',
        phone: '0213243596',
        address: '600 Yvette Knolls, Matthewmouth, OH 08471',
        company: 'Lara Inc',
        jobTitle: 'Advice worker'
    },
    {
        id: 100,
        name: 'Scott White',
        email: 'ehart@elliott.info',
        phone: '053-841-6137285',
        address: '33294 Li Station, Lake Victoria, ID 66801',
        company: 'Ellis-Robinson',
        jobTitle: 'Sports coach'
    }
];

let firstIndex = JSON.parse(localStorage.getItem('startIndex')) ?? 0;
const numOfItems = 10;

const usersDiv = document.getElementById('cards');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const cardHeaderCreator = (item) => {
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    const header = document.createElement('h2');
    header.innerText = item.name;
    cardHeader.appendChild(header);
    
    return cardHeader;
}

const jobInfoCreator = (item) => {
    const jobInfo = document.createElement('div');
    jobInfo.classList.add('job-info');
    const jobTitle = document.createElement('p');
    const company = document.createElement('p');
    jobTitle.innerText = `Job Title: ${item.jobTitle}`;
    company.innerText = `Company: ${item.company}`;
    jobInfo.append(jobTitle, company);
    
    return jobInfo;
}

const cardFooterCreator = (item) => {
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    email.innerText = `Email: ${item.email}`;
    phone.innerText = `Phone: ${item.phone}`;
    cardFooter.append(email, phone);
    
    return cardFooter;
}

const cardCreator = (item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.appendChild(cardHeaderCreator(item));
    card.appendChild(jobInfoCreator(item));
    card.appendChild(cardFooterCreator(item));
    
    return card;
}

const pagination = (arr) => {
    const arrForRepresent = arr.slice(firstIndex, firstIndex + numOfItems);
    usersDiv.innerHTML = '';
    for (const item of arrForRepresent) {
        usersDiv.appendChild(cardCreator(item));
    }
    
    localStorage.setItem('startIndex', firstIndex);
}

const prevPagination = (arr) => {
    if (firstIndex <= 0) {
        return;
    }
    firstIndex -= numOfItems;
    
    pagination(arr);
}

const nextPagination = (arr) => {
    if (firstIndex + numOfItems >= arr.length) {
        return;
    }
    firstIndex += numOfItems;
    
    pagination(arr);
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        pagination(users);
    }
}

prevBtn.onclick = () => {
    prevPagination(users);
}

nextBtn.onclick = () => {
    nextPagination(users);
}
