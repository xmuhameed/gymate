import { Landing } from '@/Components/Landing';
import { ScheduleComponent } from '@/Components/schedulePage/ScheduleComponent';

const schedule = () => {
  return (
    <>
    <Landing mainHeading="Schedule by Day"/>
    <section className="w-sreen py-20 mx-10 xl:mx-32">
        <ScheduleComponent />
    </section>
  </>
  )
}
export default schedule;