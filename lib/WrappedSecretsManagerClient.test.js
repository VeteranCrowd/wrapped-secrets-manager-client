/* eslint-env mocha */

// mocha imports
import chai from 'chai';

import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import chaiMatchPattern from 'chai-match-pattern';
chai.use(chaiMatchPattern);

const expect = chai.expect;

// npm imports
import { v4 as uuid } from 'uuid';

// lib imports
import { WrappedSecretsManagerClient } from './WrappedSecretsManagerClient.js';

describe('WrappedSecretsManagerClient', function () {
  let wrappedSecretsManagerClient;

  before(function () {
    wrappedSecretsManagerClient = new WrappedSecretsManagerClient();
  });

  describe('constructor', function () {
    it('should create a WrappedSecretsManagerClient instance', function () {
      expect(wrappedSecretsManagerClient).to.be.an.instanceof(
        WrappedSecretsManagerClient
      );
    });
  });

  describe('create/delete secret', function () {
    it('should close', async function () {
      const name = uuid();
      const initialVersion = uuid();
      const value = uuid();

      const createResponse = await wrappedSecretsManagerClient.createSecret({
        versionId: initialVersion,
        name,
        value,
      });
      expect(createResponse).to.matchPattern(`{
        name: "${name}",
        versionId: "${initialVersion}",
        ...
      }`);

      const deleteResponse = await wrappedSecretsManagerClient.deleteSecret({
        secretId: name,
      });
      expect(deleteResponse).to.matchPattern(`{
        name: "${name}",
        ...
      }`);
    });
  });

  describe('createSecret ... deleteSecret', function () {
    let name;
    let initialVersion;
    let value;

    before(async function () {
      name = uuid();
      initialVersion = uuid();
      value = uuid();

      await wrappedSecretsManagerClient.createSecret({
        name,
        value,
        versionId: initialVersion,
      });
    });

    describe('describeSecret', function () {
      it('should find existing secret', async function () {
        expect(
          wrappedSecretsManagerClient.describeSecret({
            secretId: name,
          })
        ).not.to.eventually.throw();
      });

      it('should fail on nonexistent secret', async function () {
        expect(
          wrappedSecretsManagerClient.describeSecret({
            secretId: name + name,
          })
        ).to.eventually.throw();
      });
    });

    describe('getSecretValue', function () {
      it('should get current secret value', async function () {
        const response = await wrappedSecretsManagerClient.getSecretValue({
          secretId: name,
        });

        expect(response).to.matchPattern(`{
          name: "${name}",
          value: "${value}",
          versionId: "${initialVersion}",
          ...
        }`);
      });

      it('should get secret value by version', async function () {
        const response = await wrappedSecretsManagerClient.getSecretValue({
          secretId: name,
          versionId: initialVersion,
        });

        expect(response).to.matchPattern(`{
          name: "${name}",
          value: "${value}",
          versionId: "${initialVersion}",
          ...
        }`);
      });
    });

    describe('putSecretValue', function () {
      it('should put new current value', async function () {
        const newValue = uuid();

        await wrappedSecretsManagerClient.putSecretValue({
          secretId: name,
          value: newValue,
        });

        const response = await wrappedSecretsManagerClient.getSecretValue({
          secretId: name,
        });

        expect(response).to.matchPattern(`{
          name: "${name}",
          value: "${newValue}",
          ...
        }`);
      });

      it('should put new value by version', async function () {
        const newValue = uuid();
        const newVersion = uuid();

        await wrappedSecretsManagerClient.putSecretValue({
          secretId: name,
          versionId: newVersion,
          value: newValue,
        });

        const response = await wrappedSecretsManagerClient.getSecretValue({
          secretId: name,
          versionId: newVersion,
        });

        expect(response).to.matchPattern(`{
          name: "${name}",
          value: "${newValue}",
          versionId: "${newVersion}",
          ...
        }`);
      });

      it('should put JSON value', async function () {
        const newValue = { value: uuid() };

        await wrappedSecretsManagerClient.putSecretValue({
          secretId: name,
          value: newValue,
        });

        const response = await wrappedSecretsManagerClient.getSecretValue({
          secretId: name,
        });

        expect(response.value).to.deep.equal(newValue);
      });
    });

    after(async function () {
      await wrappedSecretsManagerClient.deleteSecret({
        secretId: name,
      });
    });
  });
});
