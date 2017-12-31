import titleCase from 'title-case';

const stripHTML = html => {
  return html.replace(/<(?:.|\n)*?>/gm, '');
}

const formatTitle = title => {
  const newTitle = title.replace('-', ' ');
  return titleCase(newTitle);
}

export {
  stripHTML,
  formatTitle,
}
