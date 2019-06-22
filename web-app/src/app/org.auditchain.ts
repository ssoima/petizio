export class Company {
    id: string; //the ownerPubKey key thing
    name: string;
    description: string;
    logo: string; //pathfornow
    ownerPubKey: string;
    businessRelation: string;

    constructor (id, name, description, logo, ownerPubKey, businessRelation){
        this.id = id;
        this.name = name;
        this.description = description;
        this.logo = logo;
        this.ownerPubKey = ownerPubKey;
    	this.businessRelation = businessRelation;
    }
}

export class Audit{
    id: number; //asset ID of the Audit
    name: string;
    release: Date;
    checksum: string;
    ownerId: string; // id of the company that owns the audit
    acquired: boolean;
    created: boolean;
    hasBusinessRelation: boolean;
    constructor (id, name, release, checksum, ownerId, acquired, created, hasBusinessRelation){
        this.id = id;
        this.name = name;
        this.release = release;
        this.checksum = checksum;
        this.ownerId = ownerId; //ownerpubkey
        this.acquired = acquired;
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

