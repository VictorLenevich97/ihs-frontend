import React from 'react';

import * as routes from 'constant/routes';
import { RouterType } from 'types/routerType';

const Main = React.lazy(() => import('pages/main'));
const RatingStudents = React.lazy(() => import('pages/ratingStudents'));
const RatingListeners = React.lazy(() => import('pages/ratingListeners'));
const PlanCalendar = React.lazy(() => import('pages/planCalendar'));
const NewsDetail = React.lazy(() => import('pages/newsDetail'));
const AnnouncementDetail = React.lazy(() => import('pages/announcementDetail'));
const DepartmentDetail = React.lazy(() => import('pages/departmentDetail'));
const Publications = React.lazy(() => import('pages/publications'));
const Documents = React.lazy(() => import('pages/documents'));
const Resource = React.lazy(() => import('pages/resource'));
const Safety = React.lazy(() => import('pages/safety'));
const YmkdDocuments = React.lazy(() => import('pages/ymkdDocuments'));
const YmkdStatistics = React.lazy(() => import('pages/ymkdStatistics'));
const YmkdChart = React.lazy(() => import('pages/ymkdChart'));

const NotFound = React.lazy(() => import('pages/notFound'));

const MAIN_LAYOUTS_ROUTES: RouterType[] = [
  {
    path: routes.MAIN,
    component: Main,
    exact: true,
  },
  {
    path: `${routes.RATING_STUDENTS}/:studentCode?`,
    component: RatingStudents,
    exact: true,
  },
  {
    path: `${routes.RATING_LISTENERS}/:studentCode?`,
    component: RatingListeners,
    exact: true,
  },
  {
    path: `${routes.NEWS}/:newsId`,
    component: NewsDetail,
    exact: true,
  },
  {
    path: routes.PLAN_CALENDAR,
    component: PlanCalendar,
    exact: true,
  },
  {
    path: `${routes.ANNOUNCEMENT}/:announcementId`,
    component: AnnouncementDetail,
    exact: true,
  },
  {
    path: `${routes.PAGE}/:categoryLink/:departmentLink/:pageLink?`,
    component: DepartmentDetail,
    exact: false,
  },
  {
    path: `${routes.PUBLICATIONS}`,
    component: Publications,
    exact: true,
  },
  {
    path: `${routes.RESOURCES}/:resourceLink/:file?`,
    component: Resource,
    exact: false,
  },
  {
    path: `${routes.DOCUMENTS_ALL}`,
    component: Documents,
    exact: true,
  },
  {
    path: `${routes.SAFETY_ALL}`,
    component: Safety,
    exact: true,
  },
  {
    path: `${routes.YMKD_DOCUMENTS}`,
    component: YmkdDocuments,
  },
  {
    path: `${routes.YMKD_STATISTICS}`,
    component: YmkdStatistics,
    exact: true,
  },
  {
    path: `${routes.YMKD_CHART}`,
    component: YmkdChart,
    exact: true,
  },
  { path: routes.NOT_FOUND, component: NotFound },
];
export default MAIN_LAYOUTS_ROUTES;
