module.exports = function (english) {
    return english.split(',').join('').split('.').filter(function (x) {return !/^\s*$/.test(x);}).join(',').toLowerCase() + '..';
};
