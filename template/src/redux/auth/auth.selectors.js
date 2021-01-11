import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const selectUserInfo = createSelector([selectAuth], (auth) => auth.user);
