import globals from "globals";
import pluginVue from "eslint-plugin-vue";


export default [
  { files: ["**/*.{vue,js}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  ...pluginVue.configs["flat/recommended"],
  {
    rules: {
      'vue/no-unused-vars': 'error',
      'vetur.validation.style': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-explicit-emits': 'off',
      "vue/script-indent": ["warn", 2, { "baseIndent": 1 }]
    }
  }
];