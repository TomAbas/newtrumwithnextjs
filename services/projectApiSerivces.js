export function getCategoryFromListAllProject(allProjects) {
  return allProjects.filter((item) => item.isCategory);
}
