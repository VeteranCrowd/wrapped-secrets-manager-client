# WrappedSqsClient

This package wraps the [Secrets Manager Client - AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/index.html) to provide consistent logging and other services.

# API Documentation

<a name="module_wrapped-secrets-manager-client"></a>

## wrapped-secrets-manager-client

* [wrapped-secrets-manager-client](#module_wrapped-secrets-manager-client)
    * [.WrappedSecretsManagerClient](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)
        * [new exports.WrappedSecretsManagerClient([options])](#new_module_wrapped-secrets-manager-client.WrappedSecretsManagerClient_new)

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient"></a>

### wrapped-secrets-manager-client.WrappedSecretsManagerClient
Wraps an AWS Secrets Manager client to provide standard logging & services.

**Kind**: static class of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  
<a name="new_module_wrapped-secrets-manager-client.WrappedSecretsManagerClient_new"></a>

#### new exports.WrappedSecretsManagerClient([options])
WrappedSqsClient constructor.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Options. |
| [options.logger] | <code>object</code> | Logger instance (default is [global console object](https://nodejs.org/api/console.html#class-console)). Must have info, error & debug methods |
| [options.logInternals] | <code>boolean</code> | Log AWS client internals (default is false). |
| [options.config] | <code>object</code> | [SecretsManagerClientConfig](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/interfaces/secretsmanagerclientconfig.html). |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
