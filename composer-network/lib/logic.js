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

    petition.descriptionShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    petition.descriptionLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    petition.title = "Lorem Ipsum";
    petition.owner = petitioner;

    petitionAR.add(petition);
}

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