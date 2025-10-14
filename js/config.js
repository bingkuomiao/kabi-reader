/**
 * 阅读器配置文件
 * 修改此文件中的配置项来调整阅读器设置
 * 修改后需要刷新页面生效
 */

// 阅读器全局配置
window.READER_CONFIG = {
    // 服务器类型：app | server | serverNoSecured
    type: "server",
    // 服务器地址
    address: "http://192.200.217.59:4396",
    // 登录用户名（仅server类型需要）
    username: "jinglei",
    // 登录密码（仅server类型需要）
    password: "",
    // 加密盐值（预留功能）
    salt: "",
    // 阅读界面字体大小（像素）
    contentFontSize: 47,
    // 行间距（倍数）
    lineHeight: 1.3,
    // 字体家族
    // 可选值： 系统默认, 世间美好, 云朵字体, 糯米圆体, 御风楷体, 方正品尚
    fontFamily: "系统默认",
    // 字体加粗 可选值： normal, bold
    fontWeight: "normal",

    // 字间距（像素）
    letterSpacing: 7,
    // 底部信息区字体大小比例（相对于阅读区）
    menuFontSizeRatio: 0.6,
    // 默认翻页方式：1-4
    // 1: 左右分区域翻页
    // 2: 上下分区域翻页
    // 3: 左上角上一页，其余下一页
    // 4: 右上角上一页，其余下一页
    currentClickFunNum: 4
};
