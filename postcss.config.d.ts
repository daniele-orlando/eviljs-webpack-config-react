import PostcssPluginPresetEnv from 'postcss-preset-env';
export declare const PostcssPlugins: {
    PostcssPluginInset: import("postcss").PluginCreator<{}>;
    PostcssPluginPresetEnv: PostcssPluginPresetEnv.PostcssPresetEnv;
};
declare const _default: {
    plugins: (import("postcss").Plugin | import("postcss").Processor)[];
};
export default _default;
export declare function createPostcssConfig(options?: PostcssConfigOptions): {
    plugins: (import("postcss").Plugin | import("postcss").Processor)[];
};
export interface PostcssConfigOptions {
    mode?: undefined | string;
    workDir?: undefined | string;
    pluginPresetEnvOptions?: undefined | PostcssPluginPresetEnv.pluginOptions;
}
