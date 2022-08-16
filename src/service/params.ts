export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toParamns(params: any[], empty = false): string {
    let link = "";
    if (params && params.length > 0)
      for (const key in params[0]) {
        if (empty || (!empty && params[0][key] != undefined)) {
          if (link !== "") {
            link += "&";
          }
          link += key + "=" + params[0][key];
        }
      }
    return `?${link}`;
  },
};
