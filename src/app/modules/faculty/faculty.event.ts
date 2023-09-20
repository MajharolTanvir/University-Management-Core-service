import { RedisClient } from '../../../shared/redis';
import { EVENT_FACULTY_CREATED } from './faculty.constant';
import { FacultyService } from './faculty.services';

const initStudentEvents = () => {
  RedisClient.subscribe(EVENT_FACULTY_CREATED, async (e: string) => {
    const data = JSON.parse(e);
    console.log(data);
    await FacultyService.createFacultyFromEvent(data);
    console.log(data);
  });
};

export default initStudentEvents;
