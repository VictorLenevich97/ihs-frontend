const API_PREFIX = 'AdminApp';
const RATING_PREFIX = 'Rating/rating';

export const NAVIGATION_TOP_LEVEL = `${API_PREFIX}/navigation/toplevel`;
export const NEWS = `${API_PREFIX}/news`;
export const LOGIN = `${API_PREFIX}/auth/signin`;
export const ANNOUNCEMENTS = `${API_PREFIX}/announcements`;
export const TIMETABLE = `${API_PREFIX}/timetable`;
export const TIMETABLE_EVENTS = `${API_PREFIX}/timetable/events`;
export const CATEGORIES = `${API_PREFIX}/categories`;
export const DEPARTMENTS = `${API_PREFIX}/departments`;
export const DEPARTMENTS_ALL_FACULTY = `${API_PREFIX}/departments/allFacultyDepartments`;
export const PAGE = `${API_PREFIX}/page`;
export const PUBLICATIONS = `${API_PREFIX}/publications/filter`;
export const PUBLICATION_CATEGORIES = `${API_PREFIX}/publicationCategories/rootCategories?children=true`;
export const DOCUMENTS = `${API_PREFIX}/documents/filter`;
export const DOCUMENTS_CATEGORIES = `${API_PREFIX}/documentCategories/rootCategories`;
export const SAFETY = `${API_PREFIX}/safety/filter`;
export const SAFETY_CATEGORIES = `${API_PREFIX}/safetyCategories/rootCategories?children=true`;
export const YMKD_LINKS = `${API_PREFIX}/ymkd/links`;

// Ymkd

export const YMKD_DISCIPLINE = `${API_PREFIX}/ymkdDiscipline`;
export const YMKD_DISCIPLINE_DEPARTMENT = `${API_PREFIX}/ymkdDiscipline/department`;
export const YMKD_DOCUMENTS = `${API_PREFIX}/ymkd/filter`;
export const YMKD_STATISTIC = `${API_PREFIX}/ymkdStatistic`;
export const YMKD_STATISTIC_DETAIL = `${API_PREFIX}/ymkdStatistic/details`;

// Students

export const STUDENTS = `${RATING_PREFIX}`;
export const STUDENTS_NAMES = `${STUDENTS}/students/names`;
export const STUDENTS_NAMES_SEARCH = `${STUDENTS_NAMES}/search`;
export const LISTENERS_NAMES = `${RATING_PREFIX}/listeners/names`;
export const LISTENERS_NAMES_SEARCH = `${RATING_PREFIX}/listeners/names/search`;

// Resource

export const DATA = 'data';
