# Tencent cloud sms send action 

Send sms by tencent cloud sms in github action.:rocket:


## Usage

see [test.yml](.github/workflows/test.yml)

```yaml
- name: Tencent cloud sms send action
  uses: ./
  id: send
  with:
    secret_id: ${{ secrets.TEST_SECRET_ID }}
    secret_key: ${{ secrets.TEST_SECRET_KEY }}
    sdk_app_id: ${{ secrets.TEST_SDK_APP_ID }}
    region: ${{ secrets.TEST_REGION }}
    sms_sign: ${{ secrets.TEST_SMS_SIGN }}
    sms_phones: ${{ secrets.TEST_SMS_PHONES }}
    sms_template_id: ${{ secrets.TEST_SMS_TEMPLATE_ID }}
    sms_template_params: ${{ secrets.TEST_SMS_TEMPLATE_PARAMS }}
- name: Get the result
  run: echo "The result was ${{ steps.send.outputs.result }}"
```

See the [actions tab](https://github.com/actions/typescript-action/actions) for runs of this action! :rocket:
