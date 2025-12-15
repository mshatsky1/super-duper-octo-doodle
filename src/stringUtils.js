function capitalize(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverse(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split('').reverse().join('');
}

function truncate(str, length) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + '...';
}

function padLeft(str, length, char = ' ') {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.padStart(length, char);
}

function padRight(str, length, char = ' ') {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.padEnd(length, char);
}

function toTitleCase(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.split(' ').map(word => capitalize(word)).join(' ');
}

function removeWhitespace(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str.replace(/\s+/g, '');
}

function toKebabCase(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function toCamelCase(str) {
  if (!str || typeof str !== 'string') {
    return '';
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''));
}

function countWords(str) {
  if (!str || typeof str !== 'string') {
    return 0;
  }
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

module.exports = {
  capitalize,
  reverse,
  truncate,
  padLeft,
  padRight,
  toTitleCase,
  removeWhitespace,
  toKebabCase,
  toCamelCase,
  countWords
};