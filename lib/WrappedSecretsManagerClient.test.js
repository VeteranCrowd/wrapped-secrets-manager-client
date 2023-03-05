/* eslint-env mocha */

// mocha imports
import chai from 'chai';
import chaiMatchPattern from 'chai-match-pattern';
chai.use(chaiMatchPattern);
const expect = chai.expect;

// lib imports
import { WrappedSecretsManagerClient } from './WrappedSecretsManagerClient.js';

describe('WrappedSecretsManagerClient', function () {
  describe('constructor', function () {
    it('should create a WrappedSecretsManagerClient instance', function () {
      const wrappedSecretsManagerClient = new WrappedSecretsManagerClient();
      expect(wrappedSecretsManagerClient).to.be.an.instanceof(
        WrappedSecretsManagerClient
      );
    });
  });
});
