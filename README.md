# petizio

Petizio is a petition creating and voting app that allows users to vote pseudo-anonymously after veryfing themselves through government identification. Citizens can then create new petitions and vote through the app without the need of exposing their identity in a way that each vote gets count once.  

## Problem Description

Currently there are three approaches to gathering signatures for petitions;

* **Physical:** Physical petitions where signatures are gathered on the street through physical copies. This approach has multiple limitations ranging from signature consolidation to information dissemination. 
* **Private Entities:** Websites such as [change.org](https://www.change.org) digitizes the process of voting and allows users to gather votes and make their issues heard. But the lack of identification creates the problem of a single person signing the petition multiple times.
* **State Owned Websites:** There are solutions provided by the state such as in [Germany](https://epetitionen.bundestag.de/) overcomes the problem of identification of citizens, however they are still vulnerable to attacks and they do not provide full anonymity.

None of these solutions have an identity verification nor provide anonymity for citizens.

## Solution

Our solution is to use governmental facilities to verify the citizens and register on a private blockchain. Verified citizens can then create and vote on petitions on the blockchain  


<figure align="center">
  <img src="https://github.com/ssoima/petizio/blob/master/web-app/src/assets/Solution_Explanation.png" alt="not found" style="width:100%">
   <figcaption>Fig.1: Solution Overview.</figcaption>
</figure> 


The Petizio app is writen using Angular.js and
<figure align="center">
  <img src="https://github.com/ssoima/petizio/blob/master/web-app/src/assets/TechnicalArchitecture.png" alt="not found" style="width:100%">
   <figcaption>Fig.2: Architecture Overview.</figcaption>
</figure> 



One vote is one vote: The confirmation method prevents a single agent to vote multiple times.  
Immutability: Nobody can tamper with votes once they have been written to the blockchain.  
Anonymity: When the issues are being voted for, it is not known who supports the ideas, people can vote without revealing their identity.  
  
Finally, petitions create a low-risk, high-reward environment that allows the general public to familiarize themselves with the idea of blockchain in governmental processes. This allows the dissemination of technology and creates the building blocks of a e-voting system.
