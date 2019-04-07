module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        // 可能是多余的
        // plugins: ['transform-decorators-legacy']
    };
};
