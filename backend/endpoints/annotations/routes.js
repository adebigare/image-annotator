import * as controller from './controller';
import * as session from '../session/controller';

export const location = '/api/annotations';
export const routes = {
  get: {
    '/attributes': [
      session.ensureSession,
      controller.getAttributes,
    ],
    '/workload': [
      session.ensureSession,
      controller.getWorkload,
    ],
    '/overall-stats': [
      controller.getOverallStats,
    ],
  },
  post: {
    '/': [
      session.ensureSession,
      controller.postAnnotations,
    ],
  },
};
