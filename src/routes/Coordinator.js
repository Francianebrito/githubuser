export const goToLogin = (history) => {
  history.push("/login");
};

export const goToUser = (history) => {
  history.push(`/`);
};

export const goToRepositories = (history) => {
  history.push(`/repositories`);
};

export const gotoBack = (history) => {
  window.history.back();
};

export const goToFollowers = (history) => {
  history.push(`/followers`);
};

export const goToFollower = (history, username) => {
  history.push(`/follower/${username}`);
};

export const goToFollowing = (history) => {
  history.push(`/following`);
};

export const goToStarred = (history) => {
  history.push(`/starred`);
};
