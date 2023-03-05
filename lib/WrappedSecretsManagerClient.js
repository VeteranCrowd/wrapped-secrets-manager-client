/**
 * @module wrapped-secrets-manager-client
 */

// npm imports
import smClient from '@aws-sdk/client-secrets-manager';
const { SecretsManager } = smClient;

import _ from 'lodash';

const defaultClientConfig = { region: 'us-east-1' };

/**
 * Wraps an AWS Secrets Manager client to provide standard logging & services.
 */
export class WrappedSecretsManagerClient {
  #client;
  #logger;

  /**
   * WrappedSqsClient constructor.
   *
   * @param {object} [options] - Options.
   * @param {object} [options.logger] - Logger instance (default is {@link https://nodejs.org/api/console.html#class-console global console object}). Must have info, error & debug methods
   * @param {boolean} [options.logInternals] - Log AWS client internals (default is false).
   * @param {object} [options.config] - {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/interfaces/secretsmanagerclientconfig.html SecretsManagerClientConfig}.
   */
  constructor({
    config = defaultClientConfig,
    logger = console,
    logInternals = false,
  } = {}) {
    // Validate options.
    if (!logger.info || !logger.error || !logger.debug)
      throw new Error('logger must have info, error & debug methods');

    // Set state.
    this.#logger = logger;
    this.#client = new SecretsManager({
      ..._.omit(config, 'logger'),
      ...(logInternals ? { logger } : {}),
    });
  }
}
