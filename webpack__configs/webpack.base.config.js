const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { runInContext } = require("lodash");

const multipage = require("./multipage.config");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}
let isProduction = mode === "production" ? true : false;

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets",
};

const PAGES_DIR = `${PATHS.src}`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith(".pug"));

const htmlPlugin = multipage.pages.map((page) => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: page.template,
    filename: page.page,
    chunks: [...page.chunks],
  });
});

module.exports = {
  mode: mode,
  stats: { children: true },
  externals: { paths: PATHS },
  entry: {
    // module: `${PATHS.src}/your-module.js`,
    ...multipage.entry,
  },
  output: {
    filename: `${PATHS.assets}/js/[name].[contenthash].js`,
    path: PATHS.dist,
    // publicPath: "/",
    // assetModuleFilename: "assets/images/[name].[hash][ext][query]",
    clean: true,
  },
  resolve: {
    alias: {
      ui: path.resolve(__dirname, "./ui-kit/ui-components"),
    },
  },
  optimization: {
    //if minimize using in mode dev, that minimize: true
    minimize: isProduction,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              [
                "svgo",
                {
                  plugins: [{ name: "preset-default" }],
                },
              ],
            ],
          },
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            // Your options for `squoosh`
          },
        },
      }),

      // new ImageMinimizerPlugin({
      // 	minimizer: {
      // 		implementation: ImageMinimizerPlugin.squooshMinify,
      // 		options: {
      // 			encodeOptions: {
      // 				mozjpeg: {
      // 					// That setting might be close to lossless, but it’s not guaranteed
      // 					// https://github.com/GoogleChromeLabs/squoosh/issues/85
      // 					quality: 80,
      // 				},
      // 				webp: {
      // 					lossless: 1,
      // 				},
      // 				avif: {
      // 					// https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
      // 					cqLevel: 0,
      // 				},
      // 			},
      // 		},
      // 	},
      // }),

      // new ImageMinimizerPlugin({
      // 	minimizer: {
      // 		implementation: ImageMinimizerPlugin.imageminMinify,
      // 		options: {
      // 			// Lossless optimization with custom option
      // 			// Feel free to experiment with options for better result for you
      // 			plugins: [
      // 				["gifsicle", { interlaced: true }],
      // 				["jpegtran", { progressive: true }],
      // 				["optipng", { optimizationLevel: 5 }],
      // 				// Svgo configuration here https://github.com/svg/svgo#configuration
      // 				[
      // 					"svgo",
      // 					{
      // 						plugins: [{ name: "preset-default" }],
      // 					},
      // 				],
      // 			],
      // 		},
      // 	},
      // }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    // new HtmlWebpackPlugin({
    // 	title: "Development",
    // 	filename: "index.html",
    // 	scriptLoading: "module",
    // 	inject: "body", //inject is vstavka link and scripts into html document
    // 	excludeChunks: ["about"],
    // 	// inject: false,
    // 	// template: path.resolve(__dirname, "./src/template.html"),
    // 	// template: path.resolve(__dirname, "../src/index.pug"),
    // 	template: path.resolve(__dirname, "../src/pages/index.pug"),
    // 	// template: path.resolve(__dirname, "../src/pages/template.pug"),
    // 	// template: `${PATHS.src}/pages/index.pug`,
    // }),
    // ...PAGES.map(
    // 	(page) =>
    // 		new HtmlWebpackPlugin({
    // 			template: `${PAGES_DIR}/${page}`,
    // 			filename: `${page.replace(/\.pug/, ".html")}`,
    // 		})
    // ),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, `${PATHS.src}/static/favicon.png`),
      // logo: path.resolve(__dirname, "../src/static/favicon.svg"),
      outputPath: `${PATHS.assets}/static`,
      cache: true,
      prefix: "assets/static/",
      favicons: {
        appName: "my-app",
        appDescription: "My awesome App",
        developerName: "Me",
        developerURL: null, // prevent retrieving from the nearest package.json
        background: "#ddd",
        theme_color: "#333",
        icons: {
          android: true, // Create Android homescreen icon. `boolean`
          appleIcon: true, // Create Apple touch icons. `boolean`
          appleStartup: true, // Create Apple startup images. `boolean`
          coast: true, // Create Opera Coast icon. `boolean`
          favicons: true, // Create regular favicons. `boolean`
          firefox: true, // Create Firefox OS icons. `boolean`
          opengraph: true, // Create Facebook OpenGraph image. `boolean`
          twitter: true, // Create Twitter Summary Card image. `boolean`
          windows: true, // Create Windows 8 tile icons. `boolean`
          yandex: true, // Create Yandex browser icon. `boolean`
        },
      },
    }),

    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/css/[name].[contenthash].css`,
    }),
    ...htmlPlugin,
  ],

  module: {
    rules: [
      {
        test: /\.pug$/i,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: "pug-loader", options: { pretty: !isProduction } }],
        // use: [{ loader: "html-loader" }, { loader: "pug-html-loader?pretty=true" }],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        // options: { attrs: ["img:src", "link:href"] }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: { sourceMap: true },
        },
      },
      {
        test: /\.scss$/i,

        use: [
          // mode === "development" ? "style-loader" :
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: { sourceMap: true },
          },
          {
            loader: "resolve-url-loader",
            options: {},
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          // mode === "development" ? "style-loader" :
          MiniCssExtractPlugin.loader,

          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}/img/[name].[hash][ext][query]`,
        },
      },
      {
        test: /\.(mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}/video/[name].[hash][ext][query]`,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        exclude: [/modules/],
        type: "asset/resource",
        generator: {
          filename: `${PATHS.assets}/fonts/[name][ext]`,
        },
      },
    ],
  },
};
console.log(mode + " --- MODE --- = " + process.env.NODE_ENV + "--isProduction = " + isProduction);
