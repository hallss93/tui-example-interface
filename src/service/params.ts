export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toParamns(params: any[], empty = false): string {
    let link = "";
    if (params && params.length > 0)
      for (const key in params[0]) {
        if (link !== "") {
          link += "&";
        }
        if (empty) link += key + "=" + params[0][key];
        else if (!empty && params[0][key]) link += key + "=" + params[0][key];
      }
    return `?${link}`;
  },
};
