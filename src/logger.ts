export function format(message: String, prefix?: String) {
  return `[${new Date(Date.now()).toLocaleTimeString()}] ` + (prefix ? `>> (${prefix.toUpperCase()}) ${message}` : `>> ${message}`);
}

export function log(message: String, prefix?: String) {
  console.log(format(message, prefix));
};