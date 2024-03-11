const KEY_CART = 'cart';
const numberShoppingCart = document.querySelector('.main-nav span');

if (localStorage.getItem(KEY_CART)) {
  numberShoppingCart.textContent = JSON.parse(localStorage.getItem(KEY_CART)).length;
}

const shops = [
  {
    _id: {
      $oid: '65ecb191b5cd3f8855474006',
    },
    id: 1,
    name: 'Pharmacy One',
  },
  {
    _id: {
      $oid: '65ecb191b5cd3f8855474007',
    },
    id: 2,
    name: 'MediMart Pharmacy',
  },
  {
    _id: {
      $oid: '65ecb191b5cd3f8855474008',
    },
    id: 3,
    name: 'Healthy Life Pharmacy',
  },
  {
    _id: {
      $oid: '65ecb191b5cd3f8855474009',
    },
    id: 4,
    name: 'Wellness Pharmacy',
  },
  {
    _id: {
      $oid: '65ecb191b5cd3f885547400a',
    },
    id: 5,
    name: 'Caring Pharmacy',
  },
];

//tczG0LzKPZ6fQRO9MarYzonKYTXf0zfV1ftJH1H7HYr6Tvvl2bfannmfH9bs2Aoq

const medicamentsDB = [
  {
    _id: {
      $oid: '65ecb447b5cd3f885547400d',
    },
    Name: 'Aspirin',
    date: '2024-03-02',
    description: 'Used to reduce fever and relieve mild to moderate pain',
    price: 5.99,
    photo:
      'https://pixabay.com/get/g2a5552af0272160ead7f0143a66c63529136a06cc9f705dc846bb65917ea7b38c19cde632a9a6130eaf3adb80b2fece5e46c6c3d30dcd0b38cdc80cb73663883_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb447b5cd3f885547400e',
    },
    Name: 'Ibuprofen',
    date: '2024-03-03',
    description:
      'Nonsteroidal anti-inflammatory drug (NSAID) for pain relief, fever reduction, and against swelling',
    price: 8.45,
    photo:
      'https://pixabay.com/get/ga855de1c7d2e51c73b84113273bf351e8646dc125e45da09b3d664ddc965df13a33e64e4a8e002e8741735f7712b05f02cef503341a4482a1e83fce731ae6b60_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb447b5cd3f885547400f',
    },
    Name: 'Paracetamol',
    date: '2024-03-04',
    description:
      'Used to treat pain and fever, known as acetaminophen in the U.S.',
    price: 3.75,
    photo:
      'https://pixabay.com/get/g7797d2d5e7738147d48eea913381d84f181f72f18e8214c401c8bb75d59f7bb2dfbd5cdcc4bde0388f2213dad892c7db265356207a7d89c8f7f9bf82259085b1_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb447b5cd3f8855474010',
    },
    Name: 'Amoxicillin',
    date: '2024-03-05',
    description: 'Antibiotic used to treat a number of bacterial infections',
    price: 11.2,
    photo:
      'https://pixabay.com/get/g16c53b40043f52c9882787118dc08b13acc016f2fde939eae745b77a44a6933a4fa1eb96dc09aa6239529803c462e4cee0ec6b833d893c16da9d4c950c6b6009_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb447b5cd3f8855474011',
    },
    Name: 'Loratadine',
    date: '2024-03-06',
    description:
      'Antihistamine that reduces the effects of natural histamine in the body for allergy relief',
    price: 7.3,
    photo:
      'https://pixabay.com/get/g7adbea776d571a60c1ffac48fc37496b31fd53ce386569c132360dfec68aace2425fb3ef048181651172b8c1573f495c53ed04f7bb7ec17ed04668c255181f45_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474013',
    },
    Name: 'Aspirin',
    date: '2024-03-02',
    description: 'Used to reduce fever and relieve mild to moderate pain',
    price: 5.99,
    photo:
      'https://pixabay.com/get/g8313d5dc504093d55910a6eebfd77ccd6b9a8ed711f5d4b854660bb1c291e7502d081f87b95580a2ed7399343f032ff49a5a8d29adddb442f4e3949c95996852_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474014',
    },
    Name: 'Ibuprofen',
    date: '2024-03-03',
    description:
      'Nonsteroidal anti-inflammatory drug (NSAID) for pain relief, fever reduction, and against swelling',
    price: 8.45,
    photo:
      'https://pixabay.com/get/g7797d2d5e7738147d48eea913381d84f181f72f18e8214c401c8bb75d59f7bb2dfbd5cdcc4bde0388f2213dad892c7db265356207a7d89c8f7f9bf82259085b1_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474015',
    },
    Name: 'Paracetamol',
    date: '2024-03-04',
    description:
      'Used to treat pain and fever, known as acetaminophen in the U.S.',
    price: 3.75,
    photo:
      'https://pixabay.com/get/g2119932731405e554b7965435919c9ebd89909d331b23ed8f14d4e17f2dae1baff824a4e5e187e11f15cf403f9e064ae5560b2b2835ead2c31d8370a2426e4ee_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474016',
    },
    Name: 'Amoxicillin',
    date: '2024-03-05',
    description: 'Antibiotic used to treat a number of bacterial infections',
    price: 11.2,
    photo:
      'https://pixabay.com/get/gc340c95fb5fd25ea6b1ae66dced135b2710f47ebf9e336b9b15204e59d8b7fff5815270fabacbf344b6e9975c12a91b05ca3c7e27c071086c69e8caa128c9d5c_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474017',
    },
    Name: 'Loratadine',
    date: '2024-03-06',
    description:
      'Antihistamine that reduces the effects of natural histamine in the body for allergy relief',
    price: 7.3,
    photo:
      'https://pixabay.com/get/g8265a346e56515d4b13098e9afc20b56434d7fb58220c7746171997ae1f884fcfbc66113ad8d7f3df8ca5e4412b36b87da10e8fd485ae7211be88148a1cac412_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474018',
    },
    Name: 'Metformin',
    date: '2024-03-07',
    description: 'Medication used to treat type 2 diabetes',
    price: 5,
    photo:
      'https://pixabay.com/get/gf207c6b83132459d886ff3998a39c3e049f3c3fa6a368cf93835f44a93d494f147bf6a453d0bffbb6c5d5935c53724e5afb52dc0589c828b9d1dc54b9806a925_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f8855474019',
    },
    Name: 'Amlodipine',
    date: '2024-03-08',
    description:
      'Used to treat high blood pressure and coronary artery disease',
    price: 9.4,
    photo:
      'https://pixabay.com/get/gf6ae69d44aab0be9cf854799542e93a77a3aa80913fdceb98c1d01623ecda685e5c502f5beeda57a608cf8c1f74e9dc855b763e194416b10fa9fd8f771099b64_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb4b0b5cd3f885547401a',
    },
    Name: 'Simvastatin',
    date: '2024-03-09',
    description:
      'Used to control hypercholesterolemia (high cholesterol levels) and to prevent cardiovascular disease',
    price: 15.99,
    photo:
      'https://pixabay.com/get/g82ecbbaa5558a9590ac4a94009f4475967827f112283c9dad1ae37c98c84232f0622a0e9a4360c3effe4534463931706f87589daf1ad347d57b2ebe01b954552_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f885547401c',
    },
    Name: 'Cetirizine',
    date: '2024-03-07',
    description:
      'Used to treat allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.',
    price: 12.3,
    photo:
      'https://pixabay.com/get/gbd6d8089f134dd65300987f901ec8d932dd13b827f2a2b813ab7538667f858747272f981de5a08cdfcd4a609291cf20fec5893317a40334de96abe3440b49eed_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f885547401d',
    },
    Name: 'Metformin',
    date: '2024-03-08',
    description: 'Medication used to treat type 2 diabetes.',
    price: 15,
    photo:
      'https://pixabay.com/get/gbf748f340bbf530b094a30f50cc493d3257241f2663718d44986dab44a11cc8f623bfa68235e5a276322596a576fca4099144bbde624754f402fd60ddc3eaf7b_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f885547401e',
    },
    Name: 'Amlodipine',
    date: '2024-03-09',
    description: 'Used to treat high blood pressure and prevent chest pain.',
    price: 9.5,
    photo:
      'https://pixabay.com/get/g50e40d6a552b0505ed58e553025be99d5c1fbe94d14f10906d9b831dae7816af611930cdae1ed20bfba93774c3115ffa76f9c62f62aa558ad698e026a8654266_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f885547401f',
    },
    Name: 'Simvastatin',
    date: '2024-03-10',
    description:
      'Used to control hypercholesterolemia (high cholesterol levels) and to prevent cardiovascular disease.',
    price: 18.75,
    photo:
      'https://pixabay.com/get/g6d8209428d87446cbc87d740fb0ad10d76ea113681c8ffa4897e25186c696a8fe711e9bb9f8e0de43311bdda63f176c80e68221a806ff38e2cbe1f3975899355_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474020',
    },
    Name: 'Lisinopril',
    date: '2024-03-11',
    description: 'Used to treat high blood pressure and heart failure.',
    price: 10.2,
    photo:
      'https://pixabay.com/get/g470309d0d69f0781293ddd1ef8e9137e1c23eac41559b3977936d88ff5ca9571df1b5536edf20e6fe7f351bb2e3bcdfda7bd6999988c7642052d9f3ee7c978ca_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474021',
    },
    Name: 'Albuterol',
    date: '2024-03-12',
    description:
      'Used to treat wheezing and shortness of breath caused by breathing problems.',
    price: 13.45,
    photo:
      'https://pixabay.com/get/ge76e6fc877cecd0a50f4a914b276ebabd064b23f7c852daf33335da8537b132dfe3f82a2d634abbe874b0ae128ed030d09378d0e190549d24467c8282c6e50a0_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474022',
    },
    Name: 'Hydrochlorothiazide',
    date: '2024-03-13',
    description: 'Used to treat high blood pressure and fluid retention.',
    price: 8.9,
    photo:
      'https://pixabay.com/get/g419cdaa9aff5394ecbcf0e9f519286763b411b1ee8ba7c206aefd924051d94fb4c13bc6a83556258941a2980ada7b44ef984c207feb75a49c64f86528ab13581_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474023',
    },
    Name: 'Prednisone',
    date: '2024-03-14',
    description:
      'Used as an anti-inflammatory or an immunosuppressant medication.',
    price: 16,
    photo:
      'https://pixabay.com/get/g00ed1c9491cafb61f04653c504cd379daa945f3698349fa82a23d9756967ea536fba8192a7cff13e5e58020aa756903c0eeb05e71429f47a91f0549e211102a1_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474024',
    },
    Name: 'Omeprazole',
    date: '2024-03-15',
    description: 'Used to treat certain stomach and esophagus problems.',
    price: 22.35,
    photo:
      'https://pixabay.com/get/gca686568747ec1038e07391d9817fb29bfe5c0615439fb188a682cba372df07c231019a236908da70c9955a68e674c3af74094a79f8fb22b4178bf71f465d40a_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb4d5b5cd3f8855474025',
    },
    Name: 'Atorvastatin',
    date: '2024-03-16',
    description:
      'Used to treat high cholesterol and reduce the risk of heart disease.',
    price: 19.95,
    photo:
      'https://pixabay.com/get/g9c8762242f8b4b0d186ee5404af1cfb89465f6df640ada3169203340ae48c713a390f8111004b5d499c603522486b5f54b8c5f0d8a1ceebb21c4ecee8d7571bc_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474027',
    },
    Name: 'Acetaminophen',
    date: '2024-03-17',
    description: 'Used to treat pain and fever.',
    price: 7.5,
    photo:
      'https://pixabay.com/get/gfe9a1944d0f40ec5cfee01ef195fa8cad5c23238b4df966cc4cb570ee9c54986dfc65bf0557fc7cdfa9a4bed3e40fa5c4f3b9db5f3c083d4afe158753855293c_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474028',
    },
    Name: 'Diphenhydramine',
    date: '2024-03-18',
    description: 'Antihistamine used to treat allergy symptoms.',
    price: 9.2,
    photo:
      'https://pixabay.com/get/geebe8fe641976d57dddd31920d9c24883a8a9ba99f9f4fa3a46a6727f34633b03032f7f0ffd9d718beeed3ec7b50a25c29cd78c131e828e4e64e390d0baadcdc_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474029',
    },
    Name: 'Ciprofloxacin',
    date: '2024-03-19',
    description: 'Antibiotic used to treat a variety of bacterial infections.',
    price: 15.75,
    photo:
      'https://pixabay.com/get/ged79797acfcfe2dc789534d1f2ef9f9bc65f07822524ff36f86fe41fb24063ea40af4fdb127e30394c210945d1c5dc3e0707d90dd60c5b41a195950978770583_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402a',
    },
    Name: 'Lorazepam',
    date: '2024-03-20',
    description: 'Used to treat anxiety disorders.',
    price: 12.3,
    photo:
      'https://pixabay.com/get/ge88346693c0fa4ccbb2fb4ed548c5ae30769a88a852a932ebc56c861628cd0b96f34cf0558b36d8a3592e2c1003dd13d8ef347159b79aec2c3dfcf4941bb7ed3_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402b',
    },
    Name: 'Diazepam',
    date: '2024-03-21',
    description: 'Used to treat anxiety, alcohol withdrawal, and seizures.',
    price: 11.5,
    photo:
      'https://pixabay.com/get/g517906634924031e44e1f67ee4fad9484d1b19899e2198676fa50a96887fbe59b2ca9b01281efb9a84749fbecda866e5012b4164491085d36292ac657ce8cded_1280.png',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402c',
    },
    Name: 'Furosemide',
    date: '2024-03-22',
    description:
      'Used to treat fluid retention (edema) and swelling caused by congestive heart failure, liver disease, kidney disease, and other medical conditions.',
    price: 8.9,
    photo:
      'https://pixabay.com/get/g391b69351603af3d061619c56973e31a4bcfebc60f5f387f5c2b289680c82b86931282d495a94ea4119a473797dcbd71cf54585e27f8df332e76b629e6bb0796_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402d',
    },
    Name: 'Oxycodone',
    date: '2024-03-23',
    description:
      'Narcotic pain medication used to treat moderate to severe pain.',
    price: 25,
    photo:
      'https://pixabay.com/get/ga65012794507bba65be740e91456b8f0ec2fcbc05c899648dd350af7f61b0ed69494a9fb5339b0b59ae1c852029d247e678e48b840cf0f4441b6afb419097c15_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402e',
    },
    Name: 'Morphine',
    date: '2024-03-24',
    description: 'Narcotic used to treat moderate to severe pain.',
    price: 30.5,
    photo:
      'https://pixabay.com/get/g7887ad7fc64db7f327209c5b7dcb97b945103061c873c2d6b2bed3950a723e9fb140f5d82142d4643a6b11bc0bd90384f4e61789f6fb7e63418eb6c94c609f04_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f885547402f',
    },
    Name: 'Gabapentin',
    date: '2024-03-25',
    description:
      'Anticonvulsant medication used to treat seizures and nerve pain caused by shingles.',
    price: 14.2,
    photo:
      'https://pixabay.com/get/g2cb1ae673c8bd2d01814d1672cbadc012fc5f6ba9fd0b74a53f559e72626089c1fddd7ad4c3954859a8dd30486e566af75dcc23c548c02d2b9d5a283d0d5b704_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474030',
    },
    Name: 'Amitriptyline',
    date: '2024-03-26',
    description:
      'Tricyclic antidepressant medication used to treat depression and nerve pain.',
    price: 11.8,
    photo:
      'https://pixabay.com/get/g769270c51bff158ea7190055b330d1955e495f68bd2b2fe9ecb10ef2933dd3dbb7170ff68b9f8af69a5f51b9764c32cf8f54a6ce06028677f2a02b4cf026561d_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474031',
    },
    Name: 'Tadalafil',
    date: '2024-03-27',
    description:
      'Used to treat erectile dysfunction and benign prostatic hyperplasia.',
    price: 40,
    photo:
      'https://pixabay.com/get/gd49cab8c1bcae58a0781269bd7cd114232dfd5ce2fce52f88f9727d9acb9fc435ad6320d4f0ce4911fa4e917b8b5f5a844262009f018f717438dcd04019a1ea8_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474032',
    },
    Name: 'Sildenafil',
    date: '2024-03-28',
    description:
      'Used to treat erectile dysfunction and pulmonary arterial hypertension.',
    price: 35.5,
    photo:
      'https://pixabay.com/get/gecadcb194c270e4a66bc080c60f4c04d49011251385130ddf8ff851b28efd292c294b87f019edf1845c8438bdb43f6826fe733971e25d7d4959d65249baa47e5_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474033',
    },
    Name: 'Atenolol',
    date: '2024-03-29',
    description:
      'Beta blocker medication used to treat high blood pressure and prevent chest pain.',
    price: 9.8,
    photo:
      'https://pixabay.com/get/g802c6ec74ed87a1fbd423d59d899148cf8f32a352affec8d59f809f248c7390458dc4c371c813d749fc52280b920c48b53b4fe2dc32d337cadbe4c768e1bac67_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474034',
    },
    Name: 'Metoprolol',
    date: '2024-03-30',
    description:
      'Beta blocker medication used to treat high blood pressure and prevent heart attacks.',
    price: 8.65,
    photo:
      'https://pixabay.com/get/g388e3d97fcdd8bd90eadbe3b60286f831df0ad19fbf4e7df44e85ceee81ad6ca4d5104d942367d9c2045c08520e332e3b11f2d735683a205e2ac1bea4c577b76_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474035',
    },
    Name: 'Losartan',
    date: '2024-03-31',
    description:
      'Angiotensin II receptor blocker (ARB) used to treat high blood pressure and reduce the risk of stroke in those with high blood pressure and an enlarged heart.',
    price: 12.25,
    photo:
      'https://pixabay.com/get/gf144ee311b9a88f546bc2e54a0000b9ec4368bf54a0f6c42f1fc62eb08113c7236da1507988d398a81a99d4643e4496f3ac3f5e1295dd9c3c28d74620b7a7401_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474036',
    },
    Name: 'Ondansetron',
    date: '2024-04-01',
    description:
      'Used to prevent nausea and vomiting caused by cancer chemotherapy, radiation therapy, and surgery.',
    price: 17,
    photo:
      'https://pixabay.com/get/g3245943787f8c9f1bbd576a2ead8185e378ec6a55b65b48026780e4b30f4a058ee82e06b9eb26cc31caebbde44e423a2699fdb539d63f2305cec986966d5fc70_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474037',
    },
    Name: 'Lansoprazole',
    date: '2024-04-02',
    description:
      'Proton pump inhibitor (PPI) used to treat certain stomach and esophagus problems.',
    price: 10.75,
    photo:
      'https://pixabay.com/get/g914ebdbafccd871b44fd73641e871c45327d749c9b65bbf0e1592839706df1770f7470ee71fdcafd8cc7b4444ddd2da9a64c4ceb6a27943e68820e7ed6574a58_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb541b5cd3f8855474038',
    },
    Name: 'Ranitidine',
    date: '2024-04-03',
    description:
      'H2 histamine receptor antagonist used to treat peptic ulcer disease and gastroesophageal reflux disease (GERD).',
    price: 7.9,
    photo:
      'https://pixabay.com/get/g8352143801da4e362e9f6cbe39fc66cd42f9071e936c50a00d5849ab1f90c9ef2c9857430cccf2c006fd25407b79d526ba27d40899d0ae0f94f1ac3bf9a85dff_1280.png',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403a',
    },
    Name: 'Zyrtec',
    date: '2024-04-04',
    description:
      'Used to treat allergy symptoms such as sneezing, itching, watery eyes, and runny nose.',
    price: 14.99,
    photo:
      'https://pixabay.com/get/g5ccff47280999b73ec053b195ce3d36f4a1cae7051cc87dd213d5e24481b3649bd337b4e99ade9f231d25e140dbcac87279c9dd9f56978d1af6401ef365a32b3_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403b',
    },
    Name: 'Naproxen',
    date: '2024-04-05',
    description:
      'Nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, and fever.',
    price: 9.25,
    photo:
      'https://pixabay.com/get/gfb5087ed1d2602955f4c99be12a63a0e9f3bf3940c4c26669ed1948d7ddb5fcadd1a8a5acb3a4833cb8c91403971447437b0324b28329d72e9504023a1fe8d20_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403c',
    },
    Name: 'Cephalexin',
    date: '2024-04-06',
    description:
      'Antibiotic used to treat bacterial infections such as upper respiratory infections, ear infections, skin infections, and urinary tract infections.',
    price: 12.5,
    photo:
      'https://pixabay.com/get/gb9fbd563d89efc66e0ec90417f93efae9a2c6be8bbc47eb9cd8b9b2cd9c6a26648f390b52987d1f2b19105eb294be38525b6a7771c7230692af095e714385713_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403d',
    },
    Name: 'Tramadol',
    date: '2024-04-07',
    description:
      'Narcotic-like pain reliever used to treat moderate to severe pain.',
    price: 18.75,
    photo:
      'https://pixabay.com/get/g3437cf0dbb1f0cf5e14b5868321b37ee19f521bfe2d47e31ec2ac93a0d7d3543a17308eecf2b521e117cf013ddc3904a2f1404d3e5857ff386a6b32ebbf5bf8b_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403e',
    },
    Name: 'Venlafaxine',
    date: '2024-04-08',
    description:
      'Serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant used to treat depression, anxiety, and panic attacks.',
    price: 16.8,
    photo:
      'https://pixabay.com/get/gdb45653bdfea8bdfe863e4cb2d75e1cb015d972abd37dbddce9b3d793cff8e8be169db26f7076ec3832b737799b99c70a923a777707ecf3fa6e5c533d40c7b7a_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f885547403f',
    },
    Name: 'Prednisolone',
    date: '2024-04-09',
    description:
      'Glucocorticoid medication used to treat a variety of inflammatory and autoimmune conditions such as asthma, rheumatoid arthritis, and systemic lupus erythematosus.',
    price: 11.4,
    photo:
      'https://pixabay.com/get/g16a274c109d86f4c9eb62f0bdae20d4b5b6259d7866f4f63bc27b34a15cc33b05afe24b0d7ab4d28ebc3fe2be2e1d02149ccc4c58883f2dc9e6592852097714e_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474040',
    },
    Name: 'Doxycycline',
    date: '2024-04-10',
    description:
      'Antibiotic used to treat a wide range of bacterial infections including those that cause acne.',
    price: 10.3,
    photo:
      'https://pixabay.com/get/g2856f5ce492ff4c468ed531122e4c3cf46e9a3b9f555e410907d210fbb4aab3977fcb51271bbe762c9715f6ad7e663aca0641f0528aac9196014427af6ad89ce_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474041',
    },
    Name: 'Clonazepam',
    date: '2024-04-11',
    description:
      'Benzodiazepine medication used to treat panic disorder, seizures, and certain types of epilepsy.',
    price: 13.2,
    photo:
      'https://pixabay.com/get/gb3eedb6ee6ea38300f0d45239df9c98a133dfbe943a536576e38f5bb4816cf4132e223076acfc8223f6a59fb9b2e2071bf1231ee67ea6ba1755f6216b0c8eb27_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474042',
    },
    Name: 'Alprazolam',
    date: '2024-04-12',
    description:
      'Benzodiazepine medication used to treat anxiety and panic disorder.',
    price: 14.5,
    photo:
      'https://pixabay.com/get/gf421cb0982722ddcd63f3f3481198f41b1deb4fdec581e4c5ef1f3694ef770277e9a4d54e98b94251cc222a7addab346fb85dfc888041c003ca6c7f0dcee2718_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474043',
    },
    Name: 'Olanzapine',
    date: '2024-04-13',
    description:
      'Atypical antipsychotic medication used to treat schizophrenia and bipolar disorder.',
    price: 22.6,
    photo:
      'https://pixabay.com/get/gee67714a9571a3c8a34496fc4c99dbb54931d9b87867b8eca856ab3630018310dd68796a541c2299a8a129668ff38dc55d2c9f482d3268f8e784d20b12ad524b_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474044',
    },
    Name: 'Quetiapine',
    date: '2024-04-14',
    description:
      'Atypical antipsychotic medication used to treat schizophrenia, bipolar disorder, and major depressive disorder.',
    price: 20.75,
    photo:
      'https://pixabay.com/get/g38d37ecb6499f25a0b398a3b82324eb8dd1901c7591c158dd3c28627e8919f69ddad1bc03c1ffedf6172fa3fa6bd9ee192d28223644859a6d28d36e5195c3ba9_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474045',
    },
    Name: 'Escitalopram',
    date: '2024-04-15',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and generalized anxiety disorder.',
    price: 15.9,
    photo:
      'https://pixabay.com/get/ge08e936efe679ce8420ebcc84c97952c22ec89f58bdeddf47ec7451dcd852614c6effe4c6273ab24e94e2092d8246efc66e138e4f4e2f6548aba4084bcc549d1_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474046',
    },
    Name: 'Sertraline',
    date: '2024-04-16',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder, panic disorder, and social anxiety disorder.',
    price: 17.25,
    photo:
      'https://pixabay.com/get/g0a4a3c0b97efa79f89ec8649ed43c887fe68e7671d4a34d63820df6acb884c80379ef2444e50d11c2f6a00b851092263ab46f6126fa39081df5e513a111d9916_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474047',
    },
    Name: 'Citalopram',
    date: '2024-04-17',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and panic disorder.',
    price: 14.8,
    photo:
      'https://pixabay.com/get/gf8deb9c168fc7552b9c59a29925ad78f49bf8715c7b4282f37d78d4b3d0f6dff4e3af3631728849b54a2147c3f2d729277a35675e49ccf6aa985ed0df6f9061b_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb59bb5cd3f8855474048',
    },
    Name: 'Mirtazapine',
    date: '2024-04-18',
    description:
      'Atypical antidepressant medication used to treat depression and sometimes anxiety and insomnia.',
    price: 16,
    photo:
      'https://pixabay.com/get/ged82688ed7f5f834068ab0377f6cf6c55c2ed554919ffe07899ccdc0a973770bc25c69219397ccc1e1637c96561c28c9929bea24c8bdae62f38c0942d4e6977e_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404a',
    },
    Name: 'Bupropion',
    date: '2024-04-19',
    description:
      'Atypical antidepressant medication used to treat depression and to aid in smoking cessation.',
    price: 18.5,
    photo:
      'https://pixabay.com/get/gb3ae4e3c548e73b7a24a0951f84a01d05fd91dea8146ce5f3bca750ec38ed8b5a915a83a6363a4d14efa8a842ceca1be5289a18222b2696b686c2be887b3a0d9_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404b',
    },
    Name: 'Venlafaxine',
    date: '2024-04-20',
    description:
      'Serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant used to treat depression, anxiety, and panic attacks.',
    price: 20.75,
    photo:
      'https://pixabay.com/get/g7666651693f14ae2202a10146e74db0be78a855c0d856c08edd05c052924260afe0e70179cde52e4f3b50bfb6bcddbfe87a8c8a490492f18370e69414b62b16d_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404c',
    },
    Name: 'Fluoxetine',
    date: '2024-04-21',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder (OCD), bulimia nervosa, and panic disorder.',
    price: 15.3,
    photo:
      'https://pixabay.com/get/gda4e73f22f4ac4e07ba68df9bfa06523ece47550c8aabafbbfd983718817922acab788a5c60a0f8a187e5437957d2d5aa9042a51e510f1a7cf14242c9deaea71_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404d',
    },
    Name: 'Citalopram',
    date: '2024-04-22',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and panic disorder.',
    price: 16.2,
    photo:
      'https://pixabay.com/get/g381b34ea3b247bca28fa38e691d348ab0a3be2fb7ff7952b174bc105b9e7967a527d997da0db521cb859e715ecd13a498b8e754ab9d363b1a9d95c5dab533d16_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404e',
    },
    Name: 'Tramadol',
    date: '2024-04-23',
    description:
      'Narcotic-like pain reliever used to treat moderate to severe pain.',
    price: 19,
    photo:
      'https://pixabay.com/get/gf5e36a7d3a272609a917df7af4d86aa567db495f26bc5ef1762dbc263d39e7f870d8598c9c5bda56a68bb771af32b9a4388322d668b23cf78907777885902836_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547404f',
    },
    Name: 'Lisinopril',
    date: '2024-04-24',
    description:
      'Angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure and heart failure.',
    price: 10.5,
    photo:
      'https://pixabay.com/get/g24bcb86ac2cb609e264b3631b1985f5cb285f4c86f103dc3cfe36f63f004a61a558ee9ad80b3866bef7fb4d77d94619ce014ffb064c4bbe87e775acc443b0eb0_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474050',
    },
    Name: 'Metformin',
    date: '2024-04-25',
    description:
      'Oral diabetes medication that helps control blood sugar levels.',
    price: 12.75,
    photo:
      'https://pixabay.com/get/gf9fd5b7d992d5996eee07ecdfbd21f3353fc067b7eb989157232852a690e816376b36471c6ef1c2a2aa061b6975173c6462f5016847bf308a9e313689efd9591_1280.png',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474051',
    },
    Name: 'Atenolol',
    date: '2024-04-26',
    description:
      'Beta blocker medication used to treat high blood pressure and prevent chest pain.',
    price: 11.2,
    photo:
      'https://pixabay.com/get/gad9894650fa0fe2fecb8fa39c60a14034fbfb807bc5027ad9178c9189e6592ed238b0f14856d3f88e352d75d00a0c122752497655c55b7f6f8c710eb36530c01_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474052',
    },
    Name: 'Metoprolol',
    date: '2024-04-27',
    description:
      'Beta blocker medication used to treat high blood pressure and prevent heart attacks.',
    price: 9.9,
    photo:
      'https://pixabay.com/get/g65d5f7f18b78737681b79c4ee9b023fc64fd838fd5fce6ed7ce348391958efe9f28cb038dc745e2fa833cccbc7fda25eb586f3362dd8606ed82e093d3a0042d7_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474053',
    },
    Name: 'Losartan',
    date: '2024-04-28',
    description:
      'Angiotensin II receptor blocker (ARB) used to treat high blood pressure and reduce the risk of stroke in those with high blood pressure and an enlarged heart.',
    price: 12.6,
    photo:
      'https://pixabay.com/get/gfcdccca2871ccb386714ee887d35448c2ef12a3dc0c371064d88afb0c5431dd1358daf92129963d61f900615f3bd20034b6bf4d27abeee6e92c62030dc79a426_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474054',
    },
    Name: 'Ondansetron',
    date: '2024-04-29',
    description:
      'Used to prevent nausea and vomiting caused by cancer chemotherapy, radiation therapy, and surgery.',
    price: 17.25,
    photo:
      'https://pixabay.com/get/gb43b9e05a1d102098a04a677c0c87ec59afad3d041a39daddb5007752345a631d61819b0551ded532991031e84da56f9a3251b523f23e0caf2ac06c2f742a72e_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474055',
    },
    Name: 'Lansoprazole',
    date: '2024-04-30',
    description:
      'Proton pump inhibitor (PPI) used to treat certain stomach and esophagus problems.',
    price: 11.75,
    photo:
      'https://pixabay.com/get/g0d1d65a5623a1c6dfc2dee33e5f066bd645acb24affa0b8b8d02db835964f4cda27dd532dc409c75a408b29d29de09c9e61dca126493eb4353d65298d95e0956_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474056',
    },
    Name: 'Ranitidine',
    date: '2024-05-01',
    description:
      'H2 histamine receptor antagonist used to treat peptic ulcer disease and gastroesophageal reflux disease (GERD).',
    price: 8.8,
    photo:
      'https://pixabay.com/get/g475955fbfe02adf24d18dbce43690bdd6596de21a80f534ecdf7d810a750c720358b32ce1a9d601575db45f37b1821e8b9b83b7cc40067b7cee09bd1c633d281_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474057',
    },
    Name: 'Diazepam',
    date: '2024-05-02',
    description:
      'Benzodiazepine medication used to treat anxiety, alcohol withdrawal, and seizures.',
    price: 13.5,
    photo:
      'https://pixabay.com/get/g498d77375c17e866eef2593d066b196644852f393d9c259d07e665c82bd7aa36ea85d7d19d3a1e00d2817a25f2703fec23379a8b7a777a12401d7fe495e569ca_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474058',
    },
    Name: 'Albuterol',
    date: '2024-05-03',
    description:
      'Bronchodilator used to treat wheezing and shortness of breath caused by breathing problems.',
    price: 16.8,
    photo:
      'https://pixabay.com/get/g6b089579f69a9b9bb825e5563a91a89201caf4b6165764c4bfe62704e99fced2dba354b090312873161da6685719033444aa90f43b9d0a729e6ae641791a830e_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f8855474059',
    },
    Name: 'Hydrochlorothiazide',
    date: '2024-05-04',
    description:
      'Diuretic used to treat high blood pressure and fluid retention (edema).',
    price: 10.4,
    photo:
      'https://pixabay.com/get/gc729767a71d7bf63ded32d8871ec104ea7c1f5598640e210ba160ce5bddb6bbe37a856e3577f90e5de61dd244608d99bf36020afd54f9bc8f03d73acdef99580_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547405a',
    },
    Name: 'Prednisone',
    date: '2024-05-05',
    description:
      'Corticosteroid medication used to treat a variety of inflammatory and autoimmune conditions.',
    price: 14.2,
    photo:
      'https://pixabay.com/get/g1a8035979d78b348f6d5c2ebec4c646e3b7a56670abd156ba7c7bc3dad853899b71539871139eb20399bbd4aeede762409d3c50ef8e226ea7bc15721d2b85031_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547405b',
    },
    Name: 'Omeprazole',
    date: '2024-05-06',
    description:
      'Proton pump inhibitor (PPI) used to reduce stomach acid and prevent ulcers.',
    price: 9.6,
    photo:
      'https://pixabay.com/get/g209717a639ad03c464bf83b6a98f0f3f3a24598fdda161557d19057bde8140bb6eb7d7113afe017d3d1572c1bdeddfada990f8bbd281202a55cf8d70313633b7_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547405c',
    },
    Name: 'Metronidazole',
    date: '2024-05-07',
    description:
      'Antibiotic medication used to treat bacterial infections such as dental infections, skin infections, and bacterial vaginosis.',
    price: 13.75,
    photo:
      'https://pixabay.com/get/g99eff8bf5976e6c7a2c199fc1db8735f712b3abcd373f94e4c407e5dcb319bd59cf5682336771bfe57ac30bc51f5b871ef54487be6cd50668ffd5e317179beb5_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb673b5cd3f885547405d',
    },
    Name: 'Naproxen',
    date: '2024-05-08',
    description:
      'Nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, and fever.',
    price: 11.9,
    photo:
      'https://pixabay.com/get/g870205d6afaae6ca823cb5cd9d7a7e07f4f81b2398bc962c4fc1543049f92ed0db515053b42632befd4e26bfd0f67e39f8516f2e38ea62d17d1711734a4ea7d3_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547405f',
    },
    Name: 'Duloxetine',
    date: '2024-05-09',
    description:
      'Serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant used to treat depression and generalized anxiety disorder.',
    price: 21.5,
    photo:
      'https://pixabay.com/get/g2478d48bf755968c9c719f7eef465ef3b1863213dcc41b0543510bacc5b93b427f5ff7571456a0fcd75f72ea7031ae19c9d1002e4417bdc5150e33831dc0d6e2_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474060',
    },
    Name: 'Gabapentin',
    date: '2024-05-10',
    description:
      'Anticonvulsant medication used to treat seizures and neuropathic pain.',
    price: 18.25,
    photo:
      'https://pixabay.com/get/g374deab4c82e200d3587962fa8551d36b4a8bad44d929aba61f18abf57238ebc0992844be37852df5e8d276b8c39174057c67f25ae216ef9e2e622300ae547e5_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474061',
    },
    Name: 'Pregabalin',
    date: '2024-05-11',
    description:
      'Anticonvulsant medication used to treat seizures, neuropathic pain, and generalized anxiety disorder.',
    price: 19.75,
    photo:
      'https://pixabay.com/get/g3db36f402f3aec6943116fc5f0d40db7d03a26fa259a4147490ef02e62045f43c54dbdb0c3a21b27e7db4ff2c2fd459ac1f80016e97e222303ea0d3e5dab7e49_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474062',
    },
    Name: 'Methotrexate',
    date: '2024-05-12',
    description:
      'Disease-modifying antirheumatic drug (DMARD) used to treat certain types of cancer, autoimmune diseases, and ectopic pregnancy.',
    price: 22.3,
    photo:
      'https://pixabay.com/get/g6f2f61791f450acfd7334515d9d6f5c2796164dafe1bb54c6892f8b9bcf1f1132bc5a6a2930f3f438b1dc5a8cdc097b8cf329c720f4026e1c5aa88dc22f002e1_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474063',
    },
    Name: 'Atorvastatin',
    date: '2024-05-13',
    description:
      'HMG-CoA reductase inhibitor (statin) used to lower cholesterol levels and reduce the risk of heart disease.',
    price: 17.9,
    photo:
      'https://pixabay.com/get/ga20c4345343c4b921ba301dd7af05385505ae2499aab204b823f8671c9f279139993bb8c427acb684952aab33d73295a8cd240b98f1c56fc2a43608322d05629_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474064',
    },
    Name: 'Clindamycin',
    date: '2024-05-14',
    description:
      'Antibiotic medication used to treat various bacterial infections.',
    price: 15.6,
    photo:
      'https://pixabay.com/get/gbf0e29ca59f021ab73332e2737933e8912d8741bc447be8923ac541ebc751460fa14dec7cf8c3c6a8db1425ac7a8fbcd08f4c4eca738a2e9aaf9caa687b6505b_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474065',
    },
    Name: 'Furosemide',
    date: '2024-05-15',
    description:
      'Loop diuretic used to treat fluid retention (edema) and high blood pressure.',
    price: 12.4,
    photo:
      'https://pixabay.com/get/gcfc69f6968910d12ccfc8cb3e70a5c0002c41d07ba05eae21337db1944e66dadc0f48987f77045c0ddbfd9bc8e6fba25a936da4ad6db17ab9de0775bde2b7fcd_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474066',
    },
    Name: 'Cyclobenzaprine',
    date: '2024-05-16',
    description:
      'Muscle relaxant medication used to relieve muscle spasms and pain caused by strains, sprains, or other muscle injuries.',
    price: 14.8,
    photo:
      'https://pixabay.com/get/g096285ed988e4c5ff59c1f5081e700c481c57e23c7bc3d0f25b93da08cd31a5f984af8f0e26573b24fea3307cbb769f52382e8f48a8857a1ac749e50ae019397_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474067',
    },
    Name: 'Amoxicillin',
    date: '2024-05-17',
    description:
      'Antibiotic medication used to treat bacterial infections such as pneumonia, bronchitis, and ear infections.',
    price: 11.25,
    photo:
      'https://pixabay.com/get/g5cda4bbae34763077af145660b146aeb0d8ca431c086d5493131db7b4c34e165f846ea7faea237776926a6e0a551908298dbe8a0a9729379a05ea9c81056e453_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474068',
    },
    Name: 'Cephalexin',
    date: '2024-05-18',
    description:
      'Antibiotic used to treat bacterial infections such as upper respiratory infections, ear infections, skin infections, and urinary tract infections.',
    price: 13.5,
    photo:
      'https://pixabay.com/get/g52023f243faceda3ceddc49632c3eab4b4a4088eb2e9044abe988dd2f2e7cf6c1268aea1779c6e0c4423bfcc2ab5beca1d933a59d01ae167451a46eb8245aaf8_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474069',
    },
    Name: 'Zolpidem',
    date: '2024-05-19',
    description:
      'Sedative-hypnotic medication used to treat insomnia (difficulty falling asleep).',
    price: 16.75,
    photo:
      'https://pixabay.com/get/g407d613d38e6c844c66cc7abde8c5b4d6ca9205bff32edb0f09015d163276ba5388394015032b5d7e0339d115eb2d88aad55667c8511b5bfe699fbf0f2671a85_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406a',
    },
    Name: 'Fexofenadine',
    date: '2024-05-20',
    description:
      'Antihistamine medication used to treat allergy symptoms such as runny nose, sneezing, and itching.',
    price: 14.2,
    photo:
      'https://pixabay.com/get/g1b5a01f10e0869041145475b473ed36e6a05788ed32fc5279baca2e2670305bfdd23a4fa71544868796a23788d8b8f10449324f0b7c2ec0201de2833f04e69b4_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406b',
    },
    Name: 'Escitalopram',
    date: '2024-05-21',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and generalized anxiety disorder.',
    price: 17.3,
    photo:
      'https://pixabay.com/get/g068b735201b4f403a78edfa94615b7a0424e47ba0709e1c5e456eb36e2f7eca814767a2a70e382a9408d6663891a7a24a2fe790fb5ff081a08d4ca40fe4bada0_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406c',
    },
    Name: 'Doxycycline',
    date: '2024-05-22',
    description:
      'Antibiotic used to treat a wide range of bacterial infections including those that cause acne.',
    price: 12.9,
    photo:
      'https://pixabay.com/get/g6a2e796e5e2063ab21025e07f8971b867c21bef7f47230a0574c64cb75cd32cb8aea8cfbce02aea1a107f8716b1522a2438d16aa58efea29c4ceb938a07de681_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406d',
    },
    Name: 'Alprazolam',
    date: '2024-05-23',
    description:
      'Benzodiazepine medication used to treat anxiety and panic disorder.',
    price: 15.5,
    photo:
      'https://pixabay.com/get/gd2bbd1b018affcb314f178f38a30908938ff75294480d5a14d7a1ab4feae0312fc72d32e058cadabf29924bcb15931483dbac2c6938bb82d089b68f72d8e03f2_1280.jpg',
    idshop: 5,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406e',
    },
    Name: 'Losartan',
    date: '2024-05-24',
    description:
      'Angiotensin II receptor blocker (ARB) used to treat high blood pressure and reduce the risk of stroke in those with high blood pressure and an enlarged heart.',
    price: 18.6,
    photo:
      'https://pixabay.com/get/g8a740bd4fe66280c900ffc967aeaf3d32dbbe12639c7fea8cc08fe67b239cc94fa915aa3f6a08c6e98a488fd4d1e560df952ecacd23d4bccb9d930dbfd3cae3a_1280.jpg',
    idshop: 1,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f885547406f',
    },
    Name: 'Diazepam',
    date: '2024-05-25',
    description:
      'Benzodiazepine medication used to treat anxiety, alcohol withdrawal, and seizures.',
    price: 13.8,
    photo:
      'https://pixabay.com/get/gde45700ecb9f3c34bf35be1533e435945ef86161b415ecc3dcf7c05b238cd0691ea7d4a984ae52c783d372732c3d76c7a2760a633612a1780000710a38006cde_1280.jpg',
    idshop: 2,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474070',
    },
    Name: 'Metformin',
    date: '2024-05-26',
    description:
      'Oral diabetes medication that helps control blood sugar levels.',
    price: 11.75,
    photo:
      'https://pixabay.com/get/g22529745ddfee2a67a9115494e39c42c6b5cc1084e2a289440e586b8dcee813358cf791fb6b971b7df3c361aab27803428ac66ab19144470e3d4006ef6d5e9e3_1280.jpg',
    idshop: 3,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474071',
    },
    Name: 'Simvastatin',
    date: '2024-05-27',
    description:
      'HMG-CoA reductase inhibitor (statin) used to lower cholesterol levels and reduce the risk of heart disease.',
    price: 16.4,
    photo:
      'https://pixabay.com/get/ga7396a0ddfe0711e3e37d8dc02d5e9edc550144e6687b1546107ca739d3c17209efac8371a5468a86d90596fe1cf5c2d5718f5c4664aec1149d76b702ba9696e_1280.jpg',
    idshop: 4,
  },
  {
    _id: {
      $oid: '65ecb70fb5cd3f8855474072',
    },
    Name: 'Citalopram',
    date: '2024-05-28',
    description:
      'Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression and panic disorder.',
    price: 14.9,
    photo:
      'https://pixabay.com/get/gecfb4e5a5f4c5d9f92ce1d704ed285e531f151f414cd141339f86f0e67fdab87d8d8029ddeb39b62b9a415fb2ab4ddf578851785e67c0cf219831597b5783e32_1280.jpg',
    idshop: 5,
  },
];

const pharmacies = document.querySelector('.pharmacies');
const medicaments = document.querySelector('.medicaments');

pharmacies.append(
  ...shops.map(({ id, name }) => {
    const pharmacy = document.createElement('li');
    const buttonPharmacy = document.createElement('button');
    buttonPharmacy.type = 'button';
    buttonPharmacy.dataset.id = id;
    buttonPharmacy.textContent = name;
    pharmacy.appendChild(buttonPharmacy);
    return pharmacy;
  })
);

const firstShop = document.querySelector('.pharmacies button');

addMedicaments(firstShop.dataset.id);

pharmacies.addEventListener('click', event => {
  if (event.target.nodeName === 'BUTTON') {
    addMedicaments(event.target.dataset.id);
  }
});

function addMedicaments(idShop) {
  let markupMedicaments = '';

  markupMedicaments = medicamentsDB.reduce((accumulator, currentValue) => {
    if (idShop == currentValue.idshop) {
      console.log(accumulator);
      return (
        accumulator +
        `<li>
                      <img src="${currentValue.photo}" alt="${currentValue.Name}">
                      <p data-name>${currentValue.Name}</p>
                      <div class="price-detail">
                        <p data-price>${currentValue.price}</p>
                        <button type="button" data-id="${currentValue._id.$oid}">Add to Cart</button>
                      <div>
                      <p data-description>${currentValue.description}</p>
                    </li>`
      );
    }
    return accumulator;
  }, '');

  medicaments.innerHTML = markupMedicaments;
}

medicaments.addEventListener('click', event => {
  if (!(event.target.nodeName === 'BUTTON')) {
    return;
  }

  let cartData = [];
  let localCartData;
  const getLocalCart = localStorage.getItem(KEY_CART);
  const medicamentID = event.target.dataset.id;

  if (getLocalCart) {
    if(getLocalCart.includes(medicamentID)) {
      return;
    }
    cartData = JSON.parse(getLocalCart);
  }

  cartData.push(medicamentID);
  localCartData = JSON.stringify(cartData);
  localStorage.setItem(KEY_CART, localCartData);
  numberShoppingCart.textContent = cartData.length;
});
