import SectionTitle from "../Common/SectionTitle";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What our clients say"
          paragraph="Trusted by businesses worldwide — see what our partners say about working with us."
          center
        />
 <TestimonialSlider />
      
      </div>
    </section>
  );
};

export default Testimonials;
