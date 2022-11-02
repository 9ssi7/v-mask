import { Plugin } from "vue";
import { useMask } from "./directive";

const plugin: Plugin = (app) => {
  app.directive("mask", useMask);
};

export default plugin;
