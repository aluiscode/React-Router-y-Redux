import md5 from 'md5';

const gravatar = (email) => {
  const base = 'http://gravatar.com/avatar/';
  const formatteEmail = (email).trip().toLowerCase();
  const hash = md5(formatteEmail, { encodign: 'binary' });
  return `${base}${hash}`;
};

export default gravatar;
