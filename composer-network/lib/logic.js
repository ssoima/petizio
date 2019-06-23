/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/* global getAssetRegistry getParticipantRegistry */

/**
 * Creates a petition.
 * @param {org.petizio.com.CreatePetition} createPetition
 * @transaction
 */
async function createPetition(tx){
    petitionAR = await getAssetRegistry("org.petizio.com.Petition");
    petition = getFactory().newResource("org.petizio.com", "Petition", tx.petitionId);

    petition.descriptionShort = tx.descriptionShort;
    petition.descriptionLong = tx.descriptionLong;
    petition.title = tx.title;

    // We get the petitionerId from tx, so we need to query the actual entry in order to assign it to the petition.
    petitionerAR = await getParticipantRegistry("org.petizio.com.Petitioner");
    owner = petitionerAR.get(tx.owner);
    petition.owner = tx.owner;

    petitionAR.add(petition);
}

/**
 * Casts a vote for one petition.
 * @param {org.petizio.com.VoteForPetition} voteForPetition
 * @transaction
 */
async function voteForPetition(voteForPetition) {
    const petition = voteForPetition.petition;
    const voter = voteForPetition.voter;
    const newVoteId = petition.getIdentifier() + voter.getIdentifier();

    factory = getFactory();
    const newVote = factory.newResource("org.petizio.com", "Vote", newVoteId);
    voteAssetRegistry = await getAssetRegistry("org.petizio.com.Vote");
    voteAssetRegistry.add(newVote);

    newVote.owner = voter;
    petition.votes.push(newVote);
    assetRegistry = await getAssetRegistry("org.petizio.com.Petition");
    assetRegistry.update(petition);
}


/**
 * Creates some sample data that can be displayed in the DApp.
 * @param {org.petizio.com.CreateSampleData} createSampleData
 * @transaction
 */
async function createSampleData(){
    factory = getFactory();

    petitionerAR = await getParticipantRegistry("org.petizio.com.Petitioner");
    petitioner = factory.newResource("org.petizio.com", "Petitioner", "12092183d029843241");
    petitionerAR.add(petitioner);

    for(var i=0; i<3; i++){
        voterAR = await getParticipantRegistry("org.petizio.com.Voter");
        voter = factory.newResource("org.petizio.com", "Voter", "873214098709"+i);
        voterAR.add(voter);
    }

    petitionAR = await getAssetRegistry("org.petizio.com.Petition");
    petition = factory.newResource("org.petizio.com", "Petition", "8321748702195798432151");

    petition.descriptionShort = "Plant over meta in your daily diet.";
    petition.descriptionLong = "My name is Sven Epiney. I’m a pro chef and the author of Eat what Cows eat. I’ve been fortunate enough to reach millions of people with a positive message, and with this petition I’m hoping to bring a positive change to Switzerland with a mainstream meatless option at Main Trainstations! Adding plant-based protein options in public places will appeal to workers out for a quick lunch, families with health-conscious members out to dinner, children on field trips, and anyone looking for something different than the current menu. According to a recent survey, more than one-third of Swiss already buy meat substitutes for reasons that range from health to ethics! So why not make a meatless option available for everyone to enjoy? Healthy living should be about progress, not perfection, and this is an easy step that we should be taking.";
    petition.title = "It’s time for a healthy, meatless option";
    petition.owner = petitioner;

    petitionAR.add(petition);

    factory = getFactory();

    petitionerAR = await getParticipantRegistry("org.petizio.com.Petitioner");
    petitioner = factory.newResource("org.petizio.com", "Petitioner", "1209218323029843241");
    petitionerAR.add(petitioner);

    for(var i=0; i<3; i++){
        voterAR = await getParticipantRegistry("org.petizio.com.Voter");
        voter = factory.newResource("org.petizio.com", "Voter", "87321401198709"+i);
        voterAR.add(voter);
    }

    petitionAR = await getAssetRegistry("org.petizio.com.Petition");
    petition = factory.newResource("org.petizio.com", "Petition", "8321809748702195798432151");

    petition.descriptionShort = "Blockchain can heavily assist public services. Petizio has THE solution to it.";
    petition.descriptionLong = "In the recent years the technology of Blockchain has evolved rapidly and becoming from just a promising technology to one that brings actual value. We (the voters) want, that the Swiss Government adopts more Blockchain Applications in their ecosystem. Examples for the Blockchain adoption of public services are given by the Startup Procivis, which offers an entire ecosystem for public services. They include e-voting, e-ID’s and many more solutions. Another promising Start-Up is Petizio, which developed a system for petitions on the Blockchain, to make it immutable, safe and transparent. Current solutions can be manipulated by either the system provider or the actual voter. We (the voters) think, that Blockchain will be crucial for the future competitiveness of Switzerland.";
    petition.title = "Bring more Blockchain Applications to the Swiss Government";
    petition.owner = petitioner;

    petitionAR.add(petition);
}


