const path = require('path')
module.exports = {
  title: 'Ava 3.0 Components',
  ignore: ['**/Components/**'],
  require: [
    './src/assets/scss/themes/ava_3.scss',
    './docs/assets/docs.style.scss',
    './docs/scripts/index.js'
  ],
  // renderRootJsx: path.join(__dirname, 'docs/scripts/index.js'),
  theme: {
    maxWidth: '100%',
    sidebarWidth: 240,
    fontFamily: {
      base: ['Roboto', 'Arial', 'sans-serif']
    }
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Uso',
      content: './docs/intro.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Boas Práticas com React.js',
      content: './docs/padroes-praticas.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Padrões Ava_3.0_lib',
      content: './docs/padroes-ava-lib.md',
      sectionDepth: 1,
      exampleMode: 'hide',
      usageMode: 'hide'
    },
    {
      name: 'Componentes',
      content: './docs/components.md',
      //components: './docs/components/components.js',
      sectionDepth: 2,
      sections: [
        {
          name: 'Atoms',
          content: './docs/atoms.md',
          components: './src/components/atoms/**/K[A-Z]*.js',
          sectionDepth: 2,
          exampleMode: 'expand',
          usageMode: 'expand'
        },
        {
          name: 'Molecules',
          content: './docs/molecules.md',
          components: './src/components/molecules/**/K[A-Z]*.vue',
          sectionDepth: 2,
          exampleMode: 'expand',
          usageMode: 'expand'
        }
      ]
    },
    {
      name: 'Tipografia',
      content: './docs/typography.md',
      sectionDepth: 1,
      exampleMode: 'expand',
      usageMode: 'expand'
    }
  ],
  webpackConfig: {
    resolve: {
      alias: { 'react-native': 'react-native-web' },
      extensions: ['.js'],
    },
    stats: {
      children: false,
      chunks: false,
      modules: false,
      reasons: false,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ],
    },
  },
}