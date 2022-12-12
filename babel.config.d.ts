export declare const BabelPlugins: {
    BabelPluginProposalDecorators: any;
    BabelPluginProposalNullishCoalescingOperator: any;
    BabelPluginProposalNumericSeparator: any;
    BabelPluginProposalOptionalChaining: any;
    BabelPluginSyntaxDynamicImport: any;
    BabelPluginTransformRuntime: any;
    BabelPresetReact: any;
    BabelPresetTypescript: any;
};
declare const _default: {
    presets: any[][];
    plugins: any[];
};
export default _default;
export declare function createBabelConfig(options?: BabelConfigOptions): {
    presets: any[][];
    plugins: any[];
};
export interface BabelConfigOptions {
    mode?: undefined | string;
    workDir?: undefined | string;
}
