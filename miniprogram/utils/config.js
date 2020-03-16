/**
 * 打赏二维码
 */
var moneyUrl ="http://47.111.14.23:8503/gh1.jpg"

/**
 * 公众号二维码
 */
var wechatUrl ="http://47.111.14.23:8503/gh.jpg"

/**
 * 云开发环境
 */
var env ="test-91f3af"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

var subcributeTemplateId ="M-R2Uhi_-hiBr5OhbHc_47dz9ZD-Lqnu1zbXfIY-NGY"

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env,
    subcributeTemplateId:subcributeTemplateId
}