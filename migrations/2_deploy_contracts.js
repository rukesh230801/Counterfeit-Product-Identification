const FakeProdId = artifacts.require("FakeProdId");

module.exports = function (deployer) {
  deployer.deploy(FakeProdId);
};
