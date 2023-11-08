// /utils/encryption.js

const crypto = require('crypto');

// Función para encriptar datos
const encryptData = (data, key, iv) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encryptedData = cipher.update(data, 'utf-8', 'base64');
  encryptedData += cipher.final('base64');
  return encryptedData;
};

// Función para desencriptar datos
const decryptData = (encryptedData, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
  decryptedData += decipher.final('utf-8');
  return decryptedData;
};

module.exports = {
  encryptData,
  decryptData,
};
