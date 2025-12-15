/**
 * Parses command line arguments into structured format
 * @param {string[]} args - Array of command line arguments
 * @returns {Object} Parsed arguments with command, options, and args
 */
function parseArgs(args) {
  const parsed = {
    command: null,
    options: {},
    args: []
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith('-')) {
        parsed.options[key] = value;
        i++;
      } else {
        parsed.options[key] = true;
      }
    } else if (arg.startsWith('-')) {
      parsed.options[arg.slice(1)] = true;
    } else if (!parsed.command) {
      parsed.command = arg;
    } else {
      parsed.args.push(arg);
    }
  }

  return parsed;
}

/**
 * Gets a specific option value from parsed arguments
 * @param {Object} parsed - Parsed arguments object
 * @param {string} key - Option key to retrieve
 * @param {*} defaultValue - Default value if option not found
 * @returns {*} Option value or default
 */
function getOption(parsed, key, defaultValue = null) {
  return parsed.options[key] !== undefined ? parsed.options[key] : defaultValue;
}

/**
 * Checks whether an option flag exists in parsed args
 * @param {Object} parsed - Parsed arguments object
 * @param {string} key - Option key to check
 * @returns {boolean} True if option is present
 */
function hasOption(parsed, key) {
  return Object.prototype.hasOwnProperty.call(parsed.options, key);
}

module.exports = {
  parseArgs,
  getOption,
  hasOption
};