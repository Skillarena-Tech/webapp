import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Amplify } from 'aws-amplify';
import * as AWS from 'aws-sdk';
// import { SignUpParameters } from '../types/auth';
import { signUp, confirmSignUp, type ConfirmSignUpInput, autoSignIn, signIn, type SignInInput, signOut, getCurrentUser, type GetCurrentUserOutput } from 'aws-amplify/auth';

import { environment } from '../../environments/environment';
import * as shortUUID from 'short-uuid';

AWS.config.update(
    {
        accessKeyId: environment.sdk.accessKey,
        secretAccessKey: environment.sdk.accessSecret,
        region: environment.cognito.region,
    }
)

@Injectable({
    providedIn: 'root',
})
export class CognitoService {

    private authenticationSubject: BehaviorSubject<any>;
    private cognitoIdServiceProvider: AWS.CognitoIdentityServiceProvider;

    constructor() {
        Amplify.configure({
            Auth: {
                Cognito: {
                    userPoolId: environment.cognito.userPoolId,
                    userPoolClientId: environment.cognito.userPoolWebClientId,
                    signUpVerificationMethod: 'link'
                }
            },
        });
        this.cognitoIdServiceProvider = new AWS.CognitoIdentityServiceProvider();

        this.authenticationSubject = new BehaviorSubject<boolean>(false);
    }

    public async handleSignUp(signUpParameters: SignUpParameters) {
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username: shortUUID.generate(),
                password: signUpParameters.password,
                options: {
                    userAttributes: {
                        email: signUpParameters.email,
                        given_name: signUpParameters.firstName,
                        family_name: signUpParameters.lastName,
                    },
                    autoSignIn: true,
                },
            });
            console.log('isSignUpComplete', isSignUpComplete);
            console.log('userId', userId);
            console.log('nextStep', nextStep);
        }
        catch (error) {
            console.log('error signing up:', error);
        }
    }

    public async emailExists(email: string): Promise<boolean> {
        try {
            const { Users } = await this.cognitoIdServiceProvider.listUsers({
                UserPoolId: environment.cognito.userPoolId,
                Filter: email = "${email}",
            }).promise();
            return !!Users?.length;
        }
        catch (error) {
            console.log('error checking email:', error);
            return false;
        }
    }
}