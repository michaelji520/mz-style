/**
 * Copyright (c) 2014-2018 NighthawkStudio, All rights reserved.
 * @fileoverview
 * @author Michael Zhang | michaelji520@gmail.com
 * @version 1.0 | 2019-02-17 | initial version
 */


// GPSSPG 经纬度转换API, 将GPS坐标转化为百度，高德，谷歌地图等坐标
const GPSSPG_API_OID = 9778;

// 经纬度转换接口, demo: http://api.gpsspg.com/convert/coord/?oid=9778&key=9685xx79z8w9u17190x9u20yx2114zxz2wvw6&from=0&to=2&latlng=40.040568,116.311408
const CONVERT_COORDINATE = 'http://api.gpsspg.com/convert/coord/';

// 百度地图API，根据坐标获取地址信息
const BAIDU_AK = 'B7e3d6b248237bec007b53fc08d583bd';

// 获取地址接口
const BAIDU_GET_POSITION = 'http://api.map.baidu.com/geocoder/v2/';
