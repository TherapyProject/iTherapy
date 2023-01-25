import Slider from '../SliderSection/Slider';
import SliderLayout from '../SliderSection/SliderLayout';
// Blogcards goes inside here
const RecentBlogs = ({blogData}) => {
  return (
    <div className="recent-blogs bg-cyan-50 pb-14 pt-14 md:pl-10 lg:pl-20 pl-7 pr-7 md:pr-16">
      <div className="flex gap-5 justify-between md:flex-row flex-col">
        <SliderLayout title="Recent Blogs">
          <Slider blogData={blogData} />
        </SliderLayout>
      </div>
    </div>
  );
};

export default RecentBlogs;
