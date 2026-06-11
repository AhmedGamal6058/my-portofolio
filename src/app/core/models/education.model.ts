export interface Education {
  id: string;
  degree: string; // i18n key (e.g. 'education.degree.bachelor')
  degreeFull: string; // full degree name
  facultyKey: string; // i18n key
  faculty: string; // faculty name
  university: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  grade: string; // grade value (e.g. 'B+')
  gradeFull: string; // full grade text
  courseworkKey?: string; // i18n key
  courses: string[]; // list of courses
  emphasisKey?: string;
  emphasis: string;
}
