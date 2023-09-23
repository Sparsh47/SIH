import Navbar from "../Navbar/Navbar";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import Footer from "../Footer";
import { courseAbout } from "./courseAbout";

function Personalize() {
  return (
    <div>
      <Navbar />
      <CourseHeader
        title={courseAbout[0].title}
        desc={courseAbout[0].desc}
        keyConcepts={courseAbout[0].keyConcepts}
      />
      <CourseContent />
      <Footer />
    </div>
  );
}

export default Personalize;
