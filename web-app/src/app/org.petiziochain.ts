export class Petition {
    id: string; //the ownerPubKey key thing
    title: string;
    description1: string;
    description2: string;
  logo: string; //pathfornow
    numberSignatures: string;

    constructor (id, title, description1,description2, logo, numberSignatures){
        this.id = id;
        this.title = title;
        this.description1 = description1;
        this.description2 = description2;

      this.logo = logo;
        this.numberSignatures = numberSignatures;


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
        this.signerKey = signerKey; //signerpubkey
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

export class Rating{
    type: string;
    checksum: string;
    mark: number;
    comment: string;
}

