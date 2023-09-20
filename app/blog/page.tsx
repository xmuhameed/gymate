import { Landing } from '@/Components/Landing';
import { Posts } from '@/Components/blogPage/Posts';
import { BlogSideBar } from '@/Components/blogPage/BlogSideBar';

const blog = () => {
  return (
    <>
    <Landing mainHeading="Blog"/>
    <section className="mx-8 xl:mx-32 flex flex-col md:flex-row justify-between">
      <div className="md:w-[60%]">
        <Posts />
      </div>
      <div className="hidden md:block md:w-[35%]">
        <BlogSideBar />
      </div>
    </section>
  </>
  )
}
export default blog;