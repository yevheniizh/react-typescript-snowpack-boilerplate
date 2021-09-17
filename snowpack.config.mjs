const isProduction = process.env.NODE_ENV === "production";

export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/" },
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-typescript"],
  env: {
    BUNDLER: "SNOWPACK",
  },
  optimize: {
    minify: isProduction ? true : false,
    // bundle: isProduction ? true : false,
  },
  devOptions: {
    // port: 3000,
  },
};
