exports.verifyAccountTemplate = function (verifyUrl) {
	var url = `
<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#434c5e;font-weight:300" bgcolor="#ffffff">
  <span
    style="display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">This is your verify email on WAKAME website. </span>
  <table width="100%" cellpadding="0" cellspacing="0" style="width:100%;height:100%" bgcolor="#ffffff">
    <tbody>
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" style="width:540px" bgcolor="#ffffff">
            <tbody>
              <tr>
                <td style="line-height:1px;font-size:1px;height:2px" bgcolor="#FF3366">.</td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="border-color:#ebecee;border-style:solid;border-width:0 1px 1px">
                    <tbody>
                      <tr>
                        <td align="left" style="padding:64px 60px 30px">
                          <img src="https://drive.google.com/uc?export=download&id=1XhTjTN1HtqeRAGm-B_QywjnJk2ugV2Y4"
                            alt="InVision" width="120" height="102"
                            style="display:block;line-height:1px;border:0;margin:0 auto" class="CToWUd">
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:14px;padding:0 60px 30px">
                          <h1
                            style="font-weight:300;font-size:22px;line-height:1.3em;color:#313745;margin:0 0 0.35em;padding:0">
                            Verify your email address</h1>
                          <p style="font-size:14px;line-height:1.5em;margin-bottom:1em;color:#313745;margin-top:0"
                            align="left">Let’s make it official. To verify your email address, click the link below.</p>

                          <div
                            style="background-color:#f9f9f9;margin:24px 0;padding:12px 0;border:1px solid #eeeeee;border-radius:8px;font-size:35px;color:#313745;letter-spacing:5px"
                            align="center">
                            <a href="${verifyUrl}" style="color:#276ee5;text-decoration:none" target="_blank"> Verify Account</a>
                          </div>
                          <p style="font-size:14px;line-height:1.5em;margin-bottom:1em;color:#313745;margin-top:0"
                            align="left">If you didn’t request a code, you can safely ignore this email.</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center"
                          style="border-top-style:solid;border-top-width:1px;border-top-color:#ebecee;color:#6c7689;font-size:12px;padding:20px 0"
                          bgcolor="#F8F8FA">
                          Questions? <a href="https://support.invisionapp.com/hc/en-us"
                            style="color:#276ee5;text-decoration:none" target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://support.invisionapp.com/hc/en-us&amp;source=gmail&amp;ust=1629430262453000&amp;usg=AFQjCNHY98Q17XMy10SBHmqA9ZTjyinlCQ">We're
                            here to help.</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellpadding="0" cellspacing="0" style="width:540px;margin-top:24px">
            <tbody>
              <tr style="display:none">
                <td align="" style="padding-bottom:16px">
                  <img
                    src="https://ci3.googleusercontent.com/proxy/NAkGzA32ODzcz6rqfGGOKxDShUxv5kUbnhLAuGnI1k2CJvWeMJmnV5f9nB3Kto92BjkGovX7bXoF3k7ef8sOmuLh9s30F5oKHha0fK4LK5MKGMwKxDU-lLli9nHzIur1NrJ28oo=s0-d-e1-ft#https://invisionapp-cdn.com/invisionapp-email-assets/invision-logo-black-large.png"
                    alt="InVision" width="32" height="27" style="display:block;line-height:1px;margin:auto;border:0"
                    class="CToWUd">
                </td>
              </tr>
              <tr>
                <td align="center">
                  <h2
                    style="font-weight:500;margin:0;padding:0;font-size:12px;line-height:1.5em;text-transform:uppercase;letter-spacing:.02em;color:#313745">
                    Powered by WAKAME</h2>
                  <h3
                    style="font-weight:300;color:#6c7689;font-size:12px;letter-spacing:.02em;line-height:20px;margin:0;padding:0">
                    Designed By Minh Tai</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <img
    src="https://ci4.googleusercontent.com/proxy/qd9YeBCmlgoQc_BfpEA1hybxwUsBfxaShUvlEn3wNlCfVL-UwJMy_kEle60SMlM24qes4JjPCvU8QMdLOLsr9nX8Qm2PyyYOX6oUIB6eh6fRvhuvpCoH8tlKxA9IcsRg5O9LNpzatfkDOOgY661zm7ic_jvAw86oA0wtAyUFtlNsNTBwyr_lQAtO5o2-uWgA3oGS4McAnpBuFzPIwqQtGkFUSeZurS7sq4kbnwBb3KDjMlOKbT_ZwS-Pxg6Yep2QZPNwlT8IsxEq2ULBqljAZdweymtfzbVOsgDTctIciKzdZPpOgn4e177hrauMBtGafP6MyeV_kzygJfiAnzgM1mwDYy-YRGE65RPDBptQEbudzOdRf4nW8WmRWmqsIpeS5kRTikoCBDw-_Icp8KMNmEFP3MXsanzwhySOPVCGdXAcUkOS6APD8i-7-VE6CGzY9fdcQ1JkYLhObDNCEhQ7kY6qvD6eMyLALbK0M6bwqF0hSrZZQBs34N5SpowSo91lYSVAQHBPshkX-kOEUjPrMniB5yEY4qmvLyd4kv1DaeINoK3C0B0m9vUbYW9NFCFrTAtkcFt3HrGPg44t0HYt_fpNmT1TYzXAzTGKC2fy6BaOB-VHo_PENwbLqQQ=s0-d-e1-ft#https://ea.pstmrk.it/open/v3_6_c-mMqCBDeeVmyDumc7p6FwYL9ZBwU6gdyR8KHE85YroMqHor2ucwfpgdn2xmnLm6xIOVu_6Winf950AtPujpvhZ8VukqG4edQkCxQsuYWXhUuX9_5siYEi_QuO-CZoGZ1B1i3yu25QbOim9wqDTkdzDTuN5bED32FbdyXcZiHuVoaQXzez0uvMQ42r_wNQg8Yk8WCy2PJEf6pTJKzZiyXmPoYUf0ai8ijxwDvmpqb4F8dmQ7KAzMKNZx7w3Htz4BR1TP7D58Hj1R2KLz7YNs0ZZjTZf6kEf93wc1TY3VTnM9mMJAXEfQ4eu7JECFHFhhX4RguxIdnlCSGC9rsOB2y2THito48ljUFq1JtiDt_Hl7Zo_YdWEB92EDyEa4AprBycPTRp44g4TUOke5azhuFdXbqIvE207M1TF3aF7B4"
    width="1" height="1" border="0" alt="" class="CToWUd">
</div>`;
	return url;
};
exports.resetPwdTemplate = function (resetUrl) {
	var url = `
<div style="font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#434c5e;font-weight:300" bgcolor="#ffffff">
  <span
    style="display:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">Your
    verification code is 999083</span>
  <table width="100%" cellpadding="0" cellspacing="0" style="width:100%;height:100%" bgcolor="#ffffff">
    <tbody>
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" style="width:540px" bgcolor="#ffffff">
            <tbody>
              <tr>
                <td style="line-height:1px;font-size:1px;height:2px" bgcolor="#FF3366">.</td>
              </tr>
              <tr>
                <td>
                  <table width="100%" cellpadding="0" cellspacing="0"
                    style="border-color:#ebecee;border-style:solid;border-width:0 1px 1px">
                    <tbody>
                      <tr>
                        <td align="left" style="padding:64px 60px 30px">
                          <img src="https://drive.google.com/uc?export=download&id=1XhTjTN1HtqeRAGm-B_QywjnJk2ugV2Y4"
                            alt="InVision" width="120" height="102"
                            style="display:block;line-height:1px;border:0;margin:0 auto" class="CToWUd">
                        </td>
                      </tr>
                      <tr>
                        <td align="left" style="font-size:14px;padding:0 60px 30px">
                          <h1
                            style="font-weight:300;font-size:22px;line-height:1.3em;color:#313745;margin:0 0 0.35em;padding:0">
                            Reset password for your account</h1>
                          <p style="font-size:14px;line-height:1.5em;margin-bottom:1em;color:#313745;margin-top:0"
                            align="left">To set new password for your account, click the link below.</p>

                          <div
                            style="background-color:#f9f9f9;margin:24px 0;padding:12px 0;border:1px solid #eeeeee;border-radius:8px;font-size:35px;color:#313745;letter-spacing:5px"
                            align="center">
                            <a href="${resetUrl}" style="color:#276ee5;text-decoration:none" target="_blank"> Reset Password</a>
                          </div>
                          <p style="font-size:14px;line-height:1.5em;margin-bottom:1em;color:#313745;margin-top:0"
                            align="left">If you didn’t request a code, you can safely ignore this email.</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center"
                          style="border-top-style:solid;border-top-width:1px;border-top-color:#ebecee;color:#6c7689;font-size:12px;padding:20px 0"
                          bgcolor="#F8F8FA">
                          Questions? <a href="https://support.invisionapp.com/hc/en-us"
                            style="color:#276ee5;text-decoration:none" target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://support.invisionapp.com/hc/en-us&amp;source=gmail&amp;ust=1629430262453000&amp;usg=AFQjCNHY98Q17XMy10SBHmqA9ZTjyinlCQ">We're
                            here to help.</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellpadding="0" cellspacing="0" style="width:540px;margin-top:24px">
            <tbody>
              <tr style="display:none">
                <td align="" style="padding-bottom:16px">
                  <img
                    src="https://ci3.googleusercontent.com/proxy/NAkGzA32ODzcz6rqfGGOKxDShUxv5kUbnhLAuGnI1k2CJvWeMJmnV5f9nB3Kto92BjkGovX7bXoF3k7ef8sOmuLh9s30F5oKHha0fK4LK5MKGMwKxDU-lLli9nHzIur1NrJ28oo=s0-d-e1-ft#https://invisionapp-cdn.com/invisionapp-email-assets/invision-logo-black-large.png"
                    alt="InVision" width="32" height="27" style="display:block;line-height:1px;margin:auto;border:0"
                    class="CToWUd">
                </td>
              </tr>
              <tr>
                <td align="center">
                  <h2
                    style="font-weight:500;margin:0;padding:0;font-size:12px;line-height:1.5em;text-transform:uppercase;letter-spacing:.02em;color:#313745">
                    Powered by WAKAME</h2>
                  <h3
                    style="font-weight:300;color:#6c7689;font-size:12px;letter-spacing:.02em;line-height:20px;margin:0;padding:0">
                    Designed By Minh Tai</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <img
    src="https://ci4.googleusercontent.com/proxy/qd9YeBCmlgoQc_BfpEA1hybxwUsBfxaShUvlEn3wNlCfVL-UwJMy_kEle60SMlM24qes4JjPCvU8QMdLOLsr9nX8Qm2PyyYOX6oUIB6eh6fRvhuvpCoH8tlKxA9IcsRg5O9LNpzatfkDOOgY661zm7ic_jvAw86oA0wtAyUFtlNsNTBwyr_lQAtO5o2-uWgA3oGS4McAnpBuFzPIwqQtGkFUSeZurS7sq4kbnwBb3KDjMlOKbT_ZwS-Pxg6Yep2QZPNwlT8IsxEq2ULBqljAZdweymtfzbVOsgDTctIciKzdZPpOgn4e177hrauMBtGafP6MyeV_kzygJfiAnzgM1mwDYy-YRGE65RPDBptQEbudzOdRf4nW8WmRWmqsIpeS5kRTikoCBDw-_Icp8KMNmEFP3MXsanzwhySOPVCGdXAcUkOS6APD8i-7-VE6CGzY9fdcQ1JkYLhObDNCEhQ7kY6qvD6eMyLALbK0M6bwqF0hSrZZQBs34N5SpowSo91lYSVAQHBPshkX-kOEUjPrMniB5yEY4qmvLyd4kv1DaeINoK3C0B0m9vUbYW9NFCFrTAtkcFt3HrGPg44t0HYt_fpNmT1TYzXAzTGKC2fy6BaOB-VHo_PENwbLqQQ=s0-d-e1-ft#https://ea.pstmrk.it/open/v3_6_c-mMqCBDeeVmyDumc7p6FwYL9ZBwU6gdyR8KHE85YroMqHor2ucwfpgdn2xmnLm6xIOVu_6Winf950AtPujpvhZ8VukqG4edQkCxQsuYWXhUuX9_5siYEi_QuO-CZoGZ1B1i3yu25QbOim9wqDTkdzDTuN5bED32FbdyXcZiHuVoaQXzez0uvMQ42r_wNQg8Yk8WCy2PJEf6pTJKzZiyXmPoYUf0ai8ijxwDvmpqb4F8dmQ7KAzMKNZx7w3Htz4BR1TP7D58Hj1R2KLz7YNs0ZZjTZf6kEf93wc1TY3VTnM9mMJAXEfQ4eu7JECFHFhhX4RguxIdnlCSGC9rsOB2y2THito48ljUFq1JtiDt_Hl7Zo_YdWEB92EDyEa4AprBycPTRp44g4TUOke5azhuFdXbqIvE207M1TF3aF7B4"
    width="1" height="1" border="0" alt="" class="CToWUd">
</div>`;
	return url;
};
