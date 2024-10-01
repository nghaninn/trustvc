const regex = new RegExp(/^chore\(release\): /g);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {},
  ignores: [(message) => regex.test(message)],
};
