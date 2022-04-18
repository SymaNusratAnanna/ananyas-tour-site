import React from 'react';


const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Blog</h1>
        <div className='  p-10 mx-5 my-5'>
            <h2>Diffrence between Authentication and Authorization?</h2>
            <h4>Authentication confirms the identity of the user where  What resources a user has access to is determined by authorization. Passwords, one-time pins, biometric information, and other information provided or entered by the user are used for authentication on the other side  Authorization is controlled by the organization's settings, which it implements and maintains. The first step in a successful identity and access management strategy is authentication. Authentication is always followed by authorization. The user can see and alter several aspects of authentication on the other hand  The user has no visibility into or control over authorization.</h4>

            <h2>Why i am using firebase?</h2>
            <h4>  I use Firebase Authentication because Building secure sign-ins for any platform is simple with Firebase Authentication. Email and password authentication, phone authentication, and multi-platform login are all supported by this end-to-end system. Increase the rate of development.</h4>

            <h2>What other options do you have to implement authentication?</h2>
            <h4> 1.Auth0.
               <h4> 2.MongoDB.</h4>
               <h4>3.Passport.</h4>
               <h4> 4.Okta.</h4>
               <h4> 5.JSON Web Token.</h4>
               <h4> 7.Amazon Cognito.</h4>
               <h4> 8.Keycloak.</h4>

</h4>

<h2>What other services does firebase provide other than authentication?</h2>
<h4>There are many services which Firebase provides,other that auhtentication Most useful of them are:</h4>

<h4>1.Cloud Firestore</h4>
<h4>2.Cloud Functions</h4>
<h4>3.Hosting</h4>
<h4>4.Cloud Storage</h4>
<h4>5.Google Analytics</h4>
<h4>6.Predictions</h4>
<h4>7.Cloud Messaging</h4>
<h4>8.Dynamic Links</h4>
<h4>9.Remote Config</h4>
        </div>
        </div>
    );
};

export default Blog;