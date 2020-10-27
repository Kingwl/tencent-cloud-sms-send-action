import * as core from '@actions/core'
import * as tencentcloud from 'tencentcloud-sdk-nodejs'
import {SendSmsRequest} from 'tencentcloud-sdk-nodejs/tencentcloud/services/sms/v20190711/sms_models'

const smsClient = tencentcloud.sms.v20190711.Client

function toStringArray(str: string): string[] {
  try {
    const result = JSON.parse(str)
    if (Array.isArray(result)) {
      return result as string[]
    }
  } catch {
    // noop
  }
  return [str]
}

async function run(): Promise<void> {
  try {
    const secretId = core.getInput('secret_id')
    const secretKey = core.getInput('secret_key')
    const SmsSdkAppid = core.getInput('sdk_app_id')
    const Sign = core.getInput('sms_sign')
    const region = core.getInput('region')
    const PhoneNumberSet = toStringArray(core.getInput('sms_phones'))
    const TemplateID = core.getInput('sms_template_id')
    const TemplateParamSet = toStringArray(core.getInput('sms_template_params'))

    const client = new smsClient({
      credential: {
        secretId,
        secretKey
      },
      region
    })

    const req: SendSmsRequest = {
      SmsSdkAppid,
      PhoneNumberSet,
      TemplateID,
      TemplateParamSet,
      Sign
    }

    console.log('Start send sms')
    client.SendSms(req, (err, resp) => {
      if (err) {
        console.log('Send sms failed:', err)
        core.setOutput('result', false)
        return
      }
      console.log('Send sms done', resp.SendStatusSet)
      core.setOutput('result', true)
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
