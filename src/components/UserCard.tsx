import { VFC, useReducer } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
    user: UserProfile;
};

export const UserCard: VFC<Props> = (props) => {
    const { user } = props;
    return (
        <div>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>メール</dt>
                <dd>{user.email}</dd>
                <dt>住所</dt>
                <dd>{user.address}</dd>
            </dl>
        </div>
    )
};