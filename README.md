# wrapped-client-secrets-manager

This package wraps the [Secrets Manager Client - AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/index.html) to provide consistent logging and other services.

# API Documentation

<a name="module_wrapped-secrets-manager-client"></a>

## wrapped-secrets-manager-client

* [wrapped-secrets-manager-client](#module_wrapped-secrets-manager-client)
    * _static_
        * [.WrappedSecretsManagerClient](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)
            * [new exports.WrappedSecretsManagerClient([options])](#new_module_wrapped-secrets-manager-client.WrappedSecretsManagerClient_new)
            * [.createSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+createSecret) ⇒ <code>Promise.&lt;CreateSecretResponse&gt;</code>
            * [.deleteSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+deleteSecret) ⇒ <code>Promise.&lt;DeleteSecretResponse&gt;</code>
            * [.describeSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+describeSecret) ⇒ <code>Promise.&lt;object&gt;</code>
            * [.getSecretValue(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+getSecretValue) ⇒ <code>Promise.&lt;GetSecretValueResponse&gt;</code>
            * [.putSecretValue(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+putSecretValue) ⇒ <code>Promise.&lt;PutSecretValueResponse&gt;</code>
    * _inner_
        * [~CreateSecretResponse](#module_wrapped-secrets-manager-client..CreateSecretResponse) : <code>object</code>
        * [~DeleteSecretResponse](#module_wrapped-secrets-manager-client..DeleteSecretResponse) : <code>object</code>
        * [~GetSecretValueResponse](#module_wrapped-secrets-manager-client..GetSecretValueResponse) : <code>object</code>
        * [~PutSecretValueResponse](#module_wrapped-secrets-manager-client..PutSecretValueResponse) : <code>object</code>

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient"></a>

### wrapped-secrets-manager-client.WrappedSecretsManagerClient
Wraps an AWS Secrets Manager client to provide standard logging & services.

**Kind**: static class of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  

* [.WrappedSecretsManagerClient](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)
    * [new exports.WrappedSecretsManagerClient([options])](#new_module_wrapped-secrets-manager-client.WrappedSecretsManagerClient_new)
    * [.createSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+createSecret) ⇒ <code>Promise.&lt;CreateSecretResponse&gt;</code>
    * [.deleteSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+deleteSecret) ⇒ <code>Promise.&lt;DeleteSecretResponse&gt;</code>
    * [.describeSecret(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+describeSecret) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.getSecretValue(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+getSecretValue) ⇒ <code>Promise.&lt;GetSecretValueResponse&gt;</code>
    * [.putSecretValue(options)](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+putSecretValue) ⇒ <code>Promise.&lt;PutSecretValueResponse&gt;</code>

<a name="new_module_wrapped-secrets-manager-client.WrappedSecretsManagerClient_new"></a>

#### new exports.WrappedSecretsManagerClient([options])
WrappedSqsClient constructor.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Options. |
| [options.logger] | <code>object</code> | Logger instance (default is [global console object](https://nodejs.org/api/console.html#class-console)). Must have info, error & debug methods |
| [options.logInternals] | <code>boolean</code> | Log AWS client internals (default is false). |
| [options.config] | <code>object</code> | [SecretsManagerClientConfig](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/interfaces/secretsmanagerclientconfig.html). |

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+createSecret"></a>

#### wrappedSecretsManagerClient.createSecret(options) ⇒ <code>Promise.&lt;CreateSecretResponse&gt;</code>
Create a secret.

**Kind**: instance method of [<code>WrappedSecretsManagerClient</code>](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)  
**Returns**: <code>Promise.&lt;CreateSecretResponse&gt;</code> - Response object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options. |
| [options.description] | <code>string</code> | A user-provided description of the secret. |
| [options.forceOverwriteReplicaSecret] | <code>boolean</code> | Specifies whether to overwrite a secret with the same name in the destination Region. |
| options.name | <code>string</code> | Specifies the friendly name of the new secret. The secret name must be ASCII letters, digits, or the following characters : /_+=.@- |
| options.value | <code>string</code> \| <code>object</code> | Specifies the value of the secret. |
| [options.versionId] | <code>string</code> | A unique identifier for the request. If you repeat the request with the same client request token, but change other parameters, AWS CloudFormation returns an error, indicating that the request is not idempotent. Generated by AWS if not submitted. |

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+deleteSecret"></a>

#### wrappedSecretsManagerClient.deleteSecret(options) ⇒ <code>Promise.&lt;DeleteSecretResponse&gt;</code>
Delete a secret.

**Kind**: instance method of [<code>WrappedSecretsManagerClient</code>](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)  
**Returns**: <code>Promise.&lt;DeleteSecretResponse&gt;</code> - Response object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options. |
| options.secretId | <code>string</code> | The ARN or name of the secret to delete. |
| [options.recoveryWindowInDays] | <code>string</code> | Specifies the number of days that AWS CloudFormation waits before deleting the secret permanently. You can specify a minimum value of 7 to a maximum value of 30 days. The default value is 30. |
| [options.forceDeleteWithoutRecovery] | <code>string</code> | Specifies whether to delete the secret without any recovery window. |

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+describeSecret"></a>

#### wrappedSecretsManagerClient.describeSecret(options) ⇒ <code>Promise.&lt;object&gt;</code>
Describe a secret.

**Kind**: instance method of [<code>WrappedSecretsManagerClient</code>](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)  
**Returns**: <code>Promise.&lt;object&gt;</code> - Response object (see [DescribeSecretCommandOutput](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/interfaces/describesecretcommandoutput.html)).  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options. |
| options.secretId | <code>string</code> | The ARN or name of the secret to describe. |

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+getSecretValue"></a>

#### wrappedSecretsManagerClient.getSecretValue(options) ⇒ <code>Promise.&lt;GetSecretValueResponse&gt;</code>
Get a secret value.

**Kind**: instance method of [<code>WrappedSecretsManagerClient</code>](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)  
**Returns**: <code>Promise.&lt;GetSecretValueResponse&gt;</code> - Response object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options. |
| options.secretId | <code>string</code> | The ARN or name of the secret. |
| [options.versionId] | <code>string</code> | The unique identifier of the version of the secret that you want to retrieve. |

<a name="module_wrapped-secrets-manager-client.WrappedSecretsManagerClient+putSecretValue"></a>

#### wrappedSecretsManagerClient.putSecretValue(options) ⇒ <code>Promise.&lt;PutSecretValueResponse&gt;</code>
Put a secret value.

**Kind**: instance method of [<code>WrappedSecretsManagerClient</code>](#module_wrapped-secrets-manager-client.WrappedSecretsManagerClient)  
**Returns**: <code>Promise.&lt;PutSecretValueResponse&gt;</code> - Response object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Options. |
| options.secretId | <code>string</code> | The ARN or name of the secret. |
| options.value | <code>string</code> \| <code>object</code> | Specifies the value of the secret. |
| [options.versionId] | <code>string</code> | A unique identifier for the request. If you repeat the request with the same client request token, but change other parameters, AWS CloudFormation returns an error, indicating that the request is not idempotent. Generated by AWS if not submitted. |

<a name="module_wrapped-secrets-manager-client..CreateSecretResponse"></a>

### wrapped-secrets-manager-client~CreateSecretResponse : <code>object</code>
**Kind**: inner typedef of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arn | <code>string</code> | The Amazon Resource Name (ARN) of the secret. |
| name | <code>string</code> | The friendly name of the secret. |
| replicationStatus | <code>string</code> | The status of replication for the secret. |
| versionId | <code>string</code> | The unique identifier of the version of the secret that was created. |

<a name="module_wrapped-secrets-manager-client..DeleteSecretResponse"></a>

### wrapped-secrets-manager-client~DeleteSecretResponse : <code>object</code>
**Kind**: inner typedef of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arn | <code>string</code> | The ARN of the secret that is scheduled for deletion. |
| deletionDate | <code>Date</code> | The date and time after which this secret Secrets Manager can permanently delete this secret, and it can no longer be restored. This value is the date and time of the delete request plus the number of days in RecoveryWindowInDays. |
| name | <code>string</code> | The friendly name of the secret that is scheduled for deletion. |

<a name="module_wrapped-secrets-manager-client..GetSecretValueResponse"></a>

### wrapped-secrets-manager-client~GetSecretValueResponse : <code>object</code>
**Kind**: inner typedef of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arn | <code>string</code> | The ARN of the secret. |
| createdDate | <code>Date</code> | The date and time that this version of the secret was created. |
| name | <code>string</code> | The friendly name of the secret. |
| value | <code>string</code> \| <code>object</code> | The secret value. |
| versionId | <code>string</code> | The unique identifier of this version of the secret. |

<a name="module_wrapped-secrets-manager-client..PutSecretValueResponse"></a>

### wrapped-secrets-manager-client~PutSecretValueResponse : <code>object</code>
**Kind**: inner typedef of [<code>wrapped-secrets-manager-client</code>](#module_wrapped-secrets-manager-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| arn | <code>string</code> | The Amazon Resource Name (ARN) of the secret. |
| name | <code>string</code> | The friendly name of the secret. |
| versionId | <code>string</code> | The unique identifier of the version of the secret. |


---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
