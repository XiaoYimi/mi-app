
// 正则验证
const patten = {
  // 手机
  phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
  // 邮箱
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  // 身份证
  IDCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 6~12 密码(字母开头,由字母,数字,下划线组成)
  password: /^[a-zA-Z]\w{5,12}$/,
  // 6~12 强密码(必须大小写与数字组合,不可使用特殊符号)
  passwordS: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,12}$/,
  // 6~12 强密码(必须大小写与数字组合,可使用特殊符号)
  passwordSS: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
  // 金钱(必须 2 位小数)
  money: /^[0-9]+(.[0-9]{1,2})?$/,
  // xml 文件
  xml: /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/,
  // 邮政编码
  post: /[1-9]\d{5}(?!\d)/,
  // 域名
  domain: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
  // IP
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  // 国内电话
  domesticTelephone: /\d{3}-\d{8}|\d{4}-\d{7}/,
  // 空白行
  blankLine: /\n\s*\r/
}

const errortip = {
  phoneLength: '手机号码位数不正确',
  phoneFormat: '手机号码格式不正确',
  emailFormat: '邮箱格式不正确',
  IDCardLength: '身份证位数不正确',
  IDCardFormat: '身份证格式不正确',
  passwordLength: '密码长度有所限制(6~12)',
  passwordFormat: '密码格式错误(字母开头,由字母,数字,下划线组成)',
  passwordFormatS: '密码格式错误(必须大小写与数字组合,不可使用特殊符号)',
  passwordFormatSS: '密码格式错误(必须大小写与数字组合,可使用特殊符号)',
  moneyFormat: '金钱格式错误',
  xmlFormat: '文件扩展名不为 XML',
  postFormat: '邮编格式不正确',
  domainFormat: '域名格式不正确',
  IPFormat: 'IP 格式不正确',
  domesticTelephoneFormat: '国内电话格式不正确',

  usernameBlank: '用户名不能为空',
  codeBlank: '验证码不能为空'
}

export default {
  patten,
  errortip
}
