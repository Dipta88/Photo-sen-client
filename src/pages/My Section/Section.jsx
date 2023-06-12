
import al1 from '../../assets/images/al1.jpg'
import al2 from '../../assets/images/al2.jpg'
import al3 from '../../assets/images/al3.jpg'
import al4 from '../../assets/images/al4.jpg'
import al5 from '../../assets/images/al5.jpg'
import al6 from '../../assets/images/al6.jpg'
const Section = () => {
  return (
    <div>
        <h1 className='text-6xl text-center text-yellow-500 mt-40'>Gallery</h1>
      <div className="grid grid-cols-3 gap-5 w-50  max-w-screen-2xl mx-auto mt-10 mb-20">
        <div>
          <img src={al1} alt="al1"/>
         
        </div>
        <div>
        <img src={al2} alt="al2" />
        </div>
        <div>
        <img src={al3} alt="al3" />
        </div>
        <div>
        <img src={al4} alt="al4" />
        </div>
        <div>
        <img src={al5} alt="al5" />
        </div>
        <div>
        <img src={al6} alt="al6" />
        </div>
      </div>
    </div>
  );
};

export default Section;
