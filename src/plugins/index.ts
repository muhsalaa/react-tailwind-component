import plugin from "tailwindcss/plugin";

export const rtcPlugin = plugin(function () {}, {
  content: ["node_modules/@muhsalaa/react-tailwind-component/dist/**/*.js"],
});
