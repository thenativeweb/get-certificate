'use strict';

var fs = require('fs'),
    path = require('path');

var getCertificate = function getCertificate(directory) {
  if (!directory) {
    throw new Error('Directory is missing.');
  }

  /* eslint-disable no-sync */
  if (!fs.existsSync(directory)) {
    throw new Error('Directory not found.');
  }

  var certificate = void 0,
      privateKey = void 0;

  try {
    certificate = fs.readFileSync(path.join(directory, 'certificate.pem'), { encoding: 'utf8' }).trim();
  } catch (ex) {
    throw new Error('Certificate not found.');
  }

  try {
    privateKey = fs.readFileSync(path.join(directory, 'privateKey.pem'), { encoding: 'utf8' }).trim();
  } catch (ex) {
    throw new Error('Private key not found.');
  }
  /* eslint-enable no-sync */

  return { certificate: certificate, privateKey: privateKey };
};

module.exports = getCertificate;