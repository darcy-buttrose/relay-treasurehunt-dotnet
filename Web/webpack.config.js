/**
 * Created by Darcy on 13/09/2015.
 */
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("./loadersByExtension");


    var entry = [
        "bootstrap-webpack!./bootstrap.config.js",
        "./app/entry.jsx"
    ];
    var loaders = {
        "jsx": ["react-hot-loader", "babel-loader?stage=0&plugins=./app/babelRelayPlugin"],
        "js": {
            loader: "babel-loader?stage=0",
            include: path.join(__dirname, "app")
        },
        "json": "json-loader",
        "coffee": "coffee-redux-loader",
        "json5": "json5-loader",
        "txt": "raw-loader",
        "png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
        "woff|woff2": "url-loader?limit=100000",
        "ttf|eot": "file-loader",
        "wav|mp3": "file-loader",
        "html": "html-loader",
        "md|markdown": ["html-loader", "markdown-loader"]
    };
    var cssLoader = "css-loader?module";
    var stylesheetLoaders = {
        "css": cssLoader,
        "less": [cssLoader, "less-loader"],
        "styl": [cssLoader, "stylus-loader"],
        "scss|sass": [cssLoader, "sass-loader"]
    };
    var additionalLoaders = [
        // **IMPORTANT** This is needed so that each bootstrap js file required by
        // bootstrap-webpack has access to the jQuery object
        { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

        // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
        // loads bootstrap's css.
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ];
    var alias = {

    };
    var aliasLoader = {

    };
    var externals = [

    ];
    var modulesDirectories = ["web_modules", "node_modules"];
    var extensions = ["", ".web.js", ".js", ".jsx", ".json"];
    var root = path.join(__dirname, "app");
    var output = {
        path: path.join(__dirname, "public"),
        publicPath: "/_assets/",
        filename: "[name].js",
        chunkFilename: "[name].js",
        sourceMapFilename: "debugging/[file].map",
        libraryTarget: undefined
    };
    var excludeFromStats = [
        /node_modules[\\\/]react(-router)?[\\\/]/,
        /node_modules[\\\/]items-store[\\\/]/
    ];
    var plugins = [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        }),
        new webpack.PrefetchPlugin("react"),
        new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
    ];
    plugins.push(new StatsPlugin(path.join(__dirname, "build", "stats.json"), {
        chunkModules: true,
        exclude: excludeFromStats
    }));

    Object.keys(stylesheetLoaders).forEach(function(ext) {
        var stylesheetLoader = stylesheetLoaders[ext];
        if(Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
        stylesheetLoaders[ext] = "style-loader!" + stylesheetLoader;
    });
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin()
    );

    module.exports = {
        entry: entry,
        output: output,
        target: "web",
        module: {
            loaders: loadersByExtension(loaders).concat(loadersByExtension(stylesheetLoaders)).concat(additionalLoaders)
        },
        devtool: "source-map",
        debug: true,
        resolveLoader: {
            root: path.join(__dirname, "node_modules"),
            alias: aliasLoader
        },
        externals: externals,
        resolve: {
            root: root,
            modulesDirectories: modulesDirectories,
            extensions: extensions,
            alias: alias
        },
        plugins: plugins,
        devServer: {
            stats: {
                cached: false,
                exclude: excludeFromStats
            }
        }
    };