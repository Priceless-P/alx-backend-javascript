export default function getListStudentIds(array) {
  if (array instanceof Array) {
    return array.map((ar) => ar.id);
  }
  return [];
}
