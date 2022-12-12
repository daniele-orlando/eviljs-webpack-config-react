import { BundleStatsWebpackPlugin as WebpackPluginBundleStats } from 'bundle-stats-webpack-plugin';
import WebpackPluginCaseSensitivePaths from 'case-sensitive-paths-webpack-plugin';
import WebpackPluginCopy from 'copy-webpack-plugin';
import WebpackPluginCssMinimizer from 'css-minimizer-webpack-plugin';
import WebpackPluginForkTsChecker from 'fork-ts-checker-webpack-plugin';
import WebpackPluginHtml from 'html-webpack-plugin';
import { DuplicatesPlugin as WebpackPluginDuplicates } from 'inspectpack/plugin/index.js';
import WebpackPluginMiniCssExtract from 'mini-css-extract-plugin';
import Webpack from 'webpack';
import { BundleAnalyzerPlugin as WebpackPluginBundleAnalyzer } from 'webpack-bundle-analyzer';
export { asBooleanLike } from '@eviljs/std/type.js';
export declare const DefaultBasePath = "/";
export declare const DefaultBundleName = "";
export declare const DefaultServerAddress = "0.0.0.0";
export declare const DefaultServerPort = 8000;
export declare const WebpackPlugins: {
    Webpack: typeof Webpack;
    WebpackPluginBundleAnalyzer: typeof WebpackPluginBundleAnalyzer;
    WebpackPluginBundleStats: typeof WebpackPluginBundleStats;
    WebpackPluginCaseSensitivePaths: typeof WebpackPluginCaseSensitivePaths;
    WebpackPluginCopy: typeof WebpackPluginCopy;
    WebpackPluginCssMinimizer: typeof WebpackPluginCssMinimizer;
    WebpackPluginDefine: typeof Webpack.DefinePlugin;
    WebpackPluginDuplicates: typeof WebpackPluginDuplicates;
    WebpackPluginForkTsChecker: typeof WebpackPluginForkTsChecker;
    WebpackPluginHtml: typeof WebpackPluginHtml;
    WebpackPluginMiniCssExtract: typeof WebpackPluginMiniCssExtract;
};
declare const _default: {
    performance: {
        hints: string | boolean;
    };
    devtool: string;
    devServer: {
        host: string;
        port: number;
        client: {
            logging: string;
            progress: boolean;
            overlay: {
                errors: boolean;
                warnings: boolean;
            };
        };
        historyApiFallback: boolean;
        hot: boolean;
    };
    snapshot: {
        managedPaths: never[];
    };
    stats: string;
    infrastructureLogging: {
        level: string;
    };
    optimization: {
        runtimeChunk: string | true;
        splitChunks: {
            chunks: string;
            minSize: number;
        };
    };
    entry: {
        main: string;
    };
    output: {
        publicPath: string;
        path: string;
        filename: string;
        chunkFilename: string;
        assetModuleFilename: string;
        clean: boolean;
    };
    mode: string;
    resolve: {
        modules: string[];
        alias: {
            'react/jsx-runtime'?: string;
            'react-dom'?: string;
            react?: string;
        };
        extensionAlias: {
            '.js': string[];
        };
        extensions: string[];
        symlinks: boolean;
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            include: (string | RegExp)[];
            options: {};
            use?: never;
            type?: never;
        } | {
            test: RegExp;
            use: ({
                loader: string;
                options?: never;
            } | {
                loader: string;
                options: {
                    sourceMap: boolean;
                    importLoaders: number;
                    postcssOptions?: never;
                };
            } | {
                loader: string;
                options: {
                    sourceMap: boolean;
                    postcssOptions: {};
                    importLoaders?: never;
                };
            })[];
            loader?: never;
            include?: never;
            options?: never;
            type?: never;
        } | {
            test: RegExp;
            type: string;
            loader?: never;
            include?: never;
            options?: never;
            use?: never;
        })[];
    };
    plugins: (false | WebpackPluginCaseSensitivePaths | WebpackPluginCopy | WebpackPluginForkTsChecker | WebpackPluginHtml | WebpackPluginMiniCssExtract | Webpack.DefinePlugin | WebpackPluginBundleAnalyzer | WebpackPluginBundleStats | WebpackPluginDuplicates)[];
};
export default _default;
export declare function createWebpackConfig(options?: undefined | WebpackConfigOptions): {
    performance: {
        hints: string | boolean;
    };
    devtool: string;
    devServer: {
        host: string;
        port: number;
        client: {
            logging: string;
            progress: boolean;
            overlay: {
                errors: boolean;
                warnings: boolean;
            };
        };
        historyApiFallback: boolean;
        hot: boolean;
    };
    snapshot: {
        managedPaths: never[];
    };
    stats: string;
    infrastructureLogging: {
        level: string;
    };
    optimization: {
        runtimeChunk: string | true;
        splitChunks: {
            chunks: string;
            minSize: number;
        };
    };
    entry: {
        main: string;
    };
    output: {
        publicPath: string;
        path: string;
        filename: string;
        chunkFilename: string;
        assetModuleFilename: string;
        clean: boolean;
    };
    mode: string;
    resolve: {
        modules: string[];
        alias: {
            'react/jsx-runtime'?: string;
            'react-dom'?: string;
            react?: string;
        };
        extensionAlias: {
            '.js': string[];
        };
        extensions: string[];
        symlinks: boolean;
    };
    module: {
        rules: ({
            test: RegExp;
            loader: string;
            include: (string | RegExp)[];
            options: {};
            use?: never;
            type?: never;
        } | {
            test: RegExp;
            use: ({
                loader: string;
                options?: never;
            } | {
                loader: string;
                options: {
                    sourceMap: boolean;
                    importLoaders: number;
                    postcssOptions?: never;
                };
            } | {
                loader: string;
                options: {
                    sourceMap: boolean;
                    postcssOptions: {};
                    importLoaders?: never;
                };
            })[];
            loader?: never;
            include?: never;
            options?: never;
            type?: never;
        } | {
            test: RegExp;
            type: string;
            loader?: never;
            include?: never;
            options?: never;
            use?: never;
        })[];
    };
    plugins: (false | WebpackPluginCaseSensitivePaths | WebpackPluginCopy | WebpackPluginForkTsChecker | WebpackPluginHtml | WebpackPluginMiniCssExtract | Webpack.DefinePlugin | WebpackPluginBundleAnalyzer | WebpackPluginBundleStats | WebpackPluginDuplicates)[];
};
export declare function isBabelLoaderRule(rule: {
    loader?: string;
}): boolean;
export interface WebpackConfigOptions {
    babelOptions?: undefined | {};
    basePath?: undefined | string;
    bundleName?: undefined | string;
    debug?: undefined | boolean;
    define?: undefined | Record<string, any>;
    entry?: undefined | string;
    entryHtml?: undefined | string;
    libDir?: undefined | string;
    srcDir?: undefined | string;
    srcPrefix?: undefined | string;
    mode?: undefined | string;
    postcssOptions?: undefined | {};
    preact?: undefined | boolean;
    runtime?: undefined | boolean;
    serverAddress?: undefined | string;
    serverPort?: undefined | number;
    styles?: undefined | 'bundle' | 'extract';
    stylesOptions?: undefined | {};
    workDir?: undefined | string;
}
