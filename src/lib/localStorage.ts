export function saveEntityCache(
  entity : {
    from : string,
    to : string,
    amountFrom : number,
    amountTo : number,
  },
) {
  localStorage.setItem(
    'entity',
    JSON.stringify(entity),
  );
}

export function getEntityCache() {
  return JSON.parse(
    <string> localStorage.getItem('entity'),
  );
}

export function saveThemeCache(
  theme : string,
) {
  localStorage.setItem(
    'theme',
    theme,
  );
}

export function getThemeCache() {
  return <string> localStorage.getItem('theme') || 'light';
}

export function toggleThemeCache() {
  if (getThemeCache() === 'light') {
    saveThemeCache('dark');
  } else {
    saveThemeCache('light');
  }
}
