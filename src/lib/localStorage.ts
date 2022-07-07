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
