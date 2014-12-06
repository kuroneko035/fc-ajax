/**
 * @file fc-ajax主入口文件
 * @author Leo Wang(wangkemiao@baidu.com)
 */

define(function (require) {
    'use strict';

    /**
     * fc-ajax 存储库
     * @module ajax
     */
    var ajax = {
        version: '0.0.1-alpha.5',

        request: require('./request')
    };

    return ajax;
});
