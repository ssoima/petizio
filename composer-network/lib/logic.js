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

/* global getAssetRegistry getParticipantRegistry */

async function voteForPetition(voteForPetition) {
    const petition = voteForPetition.petition;
    const voter = voteForPetition.voter;
    const newVote = getFactory().newAsset("org.petizio.petition", "Vote");
    newVote.owner = voter;
    petition.votes.push(newVote);
    await assetRegistry.update(petition.votes);
}



// /**
//  * Sample transaction
//  * @param {org.petizio.com.SampleTransaction} sampleTransaction
//  * @transaction
//  */
// async function sampleTransaction(tx) {
//     // Save the old value of the asset.
//     const oldValue = tx.asset.value;
//
//     // Update the asset with the new value.
//     tx.asset.value = tx.newValue;
//
//     // Get the asset registry for the asset.
//     const assetRegistry = await getAssetRegistry('org.petizio.com.SampleAsset');
//     // Update the asset in the asset registry.
//     await assetRegistry.update(tx.asset);
//
//     // Emit an event for the modified asset.
//     let event = getFactory().newEvent('org.petizio.com', 'SampleEvent');
//     event.asset = tx.asset;
//     event.oldValue = oldValue;
//     event.newValue = tx.newValue;
//     emit(event);
// }
