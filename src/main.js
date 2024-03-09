const shops = [{
    "_id": {
      "$oid": "65ecb191b5cd3f8855474006"
    },
    "id": 1,
    "name": "Pharmacy One"
  },
  {
    "_id": {
      "$oid": "65ecb191b5cd3f8855474007"
    },
    "id": 2,
    "name": "MediMart Pharmacy"
  },
  {
    "_id": {
      "$oid": "65ecb191b5cd3f8855474008"
    },
    "id": 3,
    "name": "Healthy Life Pharmacy"
  },
  {
    "_id": {
      "$oid": "65ecb191b5cd3f8855474009"
    },
    "id": 4,
    "name": "Wellness Pharmacy"
  },
  {
    "_id": {
      "$oid": "65ecb191b5cd3f885547400a"
    },
    "id": 5,
    "name": "Caring Pharmacy"
  }];

const pharmacies = document.querySelector('.pharmacies');

pharmacies.append(...shops.map(({id, name}) => {
    const pharmacy = document.createElement('li');
    const buttonPharmacy = document.createElement('button');
    buttonPharmacy.type = 'button';
    buttonPharmacy.dataset.id = id;
    buttonPharmacy.textContent = name;
    pharmacy.appendChild(buttonPharmacy);
    return pharmacy;
}));