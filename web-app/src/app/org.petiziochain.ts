
var images = [
  'https://3j551k2eo5512znc2g46kkjmwkf-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/09KWF03_017-1024x683.jpg',
  'https://bitcoinist.com/wp-content/uploads/2018/09/shutterstock_56887675-e1537643630413.jpg',
  'https://cdn.pixabay.com/photo/2013/01/31/17/18/countryside-76962_1280.jpg',
/*
  'https://fsmedia.imgix.net/2e/c5/af/ff/d7b1/429f/834d/f1d178714cd4/bees.jpeg?rect=0%2C0%2C5184%2C2596&auto=format%2Ccompress&dpr=2&w=650',
*/
  'https://littlebeesbighoney.com/wp-content/uploads/2018/08/Bees-at-Work-674x634.jpg',
  'https://pixnio.com/free-images/2017/10/28/2017-10-28-11-25-37-1100x733.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71OXHyAgWBL._SL1152_.jpg'
];

export class Petition {
    id: string; //the ownerPubKey key thing
    owner : string;
    title: string;
    description1: string;
    description2: string;
    logo: string;
    numberSignatures: string;
  populate (id, title, description1,description2, numberSignatures){
    this.id = id;
    this.title = title;
    this.description1 = description1;
    this.description2 = description2;

    this.numberSignatures = numberSignatures;

    var images = [
      'https://3j551k2eo5512znc2g46kkjmwkf-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/09KWF03_017-1024x683.jpg',
      'https://bitcoinist.com/wp-content/uploads/2018/09/shutterstock_56887675-e1537643630413.jpg',
      'https://cdn.pixabay.com/photo/2013/01/31/17/18/countryside-76962_1280.jpg',
      /*
        'https://fsmedia.imgix.net/2e/c5/af/ff/d7b1/429f/834d/f1d178714cd4/bees.jpeg?rect=0%2C0%2C5184%2C2596&auto=format%2Ccompress&dpr=2&w=650',
      */
      'https://littlebeesbighoney.com/wp-content/uploads/2018/08/Bees-at-Work-674x634.jpg',
  /*'https://pixnio.com/free-images/2017/10/28/2017-10-28-11-25-37-1100x733.jpg',*/
      'https://images-na.ssl-images-amazon.com/images/I/71OXHyAgWBL._SL1152_.jpg'
    ];
    var imageidx = parseInt(this.id)%5;
    console.log(imageidx);
    this.logo=images[imageidx];

  }

}


export class Signature{
    id: number; //asset ID of the Signature
/*
    name: string;
*/
    release: Date;
    checksum: string;
    ownerId: string; // id of the petition that owns the signature
    signerId: string; // signer's id
    signerKey: string; // signer's private key

  created: boolean;
    hasBusinessRelation: boolean;
    constructor (id, title, release, checksum, ownerId, signerId, signerKey, created, hasBusinessRelation){
        this.id = id;
/*
        this.name = name;
*/
        this.release = release;
        this.checksum = checksum;
        this.ownerId = ownerId; //ownerpubkey
        this.signerId = signerId; //signerpubkey
        this.signerKey = signerKey; //signerkey
      this.created = created;
	this.hasBusinessRelation = hasBusinessRelation;
    }
}

export class Certificate {
    name: string;
    release: string;
    checksum: string; //the unique identifies 
    ipfsHash: string;
    companyId: string;

    constructor(name, release, checksum, ipfsHash, companyId){
        this.name = name;
        this.release = release;
        this.checksum = checksum;
        this.ipfsHash = ipfsHash;
        this.companyId = companyId;
    }

}


