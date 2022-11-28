const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js',
    search: './src/js/search.js',
    sauna: './src/js/sauna.js',
    order: './src/js/order.js',
    payment: './src/js/payment.js',
    connection: './src/js/connection.js',
    profile: './src/js/profile.js',
    company: './src/js/company.js',
    companyContacts: './src/js/company-contacts.js',
    companyPhotos: './src/js/company-photos.js',
    companyFeatures: './src/js/company-features.js',
    companyDepartments: './src/js/company-departments.js',
    companyEdit: './src/js/company-edit.js',
    companyAccountEdit: './src/js/company-account-edit.js',
    companyStock: './src/js/company-stock.js',
    companyStockSet: './src/js/company-stock-set.js',
    schedule: './src/js/schedule',
    scheduleAdd: './src/js/schedule-add.js',
    scheduleMonth: './src/js/schedule-month.js',
    scheduleWeek: './src/js/schedule-week.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['@babel/preset-env', { modules: false }]],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
      '%components%': path.resolve(__dirname, 'src/blocks/components'),
    },
  },
};
