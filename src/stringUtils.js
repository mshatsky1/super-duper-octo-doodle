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

module.exports = {
  capitalize,
  reverse,
  truncate
};

