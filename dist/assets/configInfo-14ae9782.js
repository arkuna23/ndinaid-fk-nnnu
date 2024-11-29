function n(e) {
    switch (e = e == null ? void 0 : e.toLowerCase(), e) {
      case "全部":
        return "svg-icon:pipeline-all";

      case "java":
        return "svg-icon:pipeline-java";

      case "android":
        return "svg-icon:pipeline-android";

      case "python":
        return "svg-icon:pipeline-python";

      case "vue":
        return "svg-icon:pipeline-vue";

      case "php":
        return "svg-icon:pipeline-php";

      case "html":
        return "svg-icon:pipeline-html";

      case "redis":
        return "svg-icon:redis";

      case "nacos":
        return "svg-icon:nacos";

      case "c":
        return "svg-icon:pipeline-c";

      default:
        return "svg-icon:pipeline-default";
    }
}

export {
    n as g
};