import {UserInfoClaims} from '../entities/claims/userInfoClaims';

/*
 * We can return any user data to our UI clients here, including both OAuth and non OAuth data
 */
export class UserInfoService {

    private readonly _claims: UserInfoClaims;

    public constructor(claims: UserInfoClaims) {
        this._claims = claims;
    }

    public getUserClaims(): any {
        return this._claims.toWireFormat();
    }
}
