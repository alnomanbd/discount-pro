import { Carousel } from 'react-responsive-carousel';  // For the banner slider
const HomeSlider = () => {
  return (
    <div className="w-full bg-gray-100">
        <Carousel showArrows={false} autoPlay interval={3000} infiniteLoop>
          <div>
            <img src="https://img.lazcdn.com/us/domino/200e9086-b226-4623-98c7-660fce5d390c_BD-1976-688.jpg_2200x2200q80.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="https://img.lazcdn.com/us/domino/782ec401-3aba-4ae1-b490-59ad6c4c5d51_BD-1976-688.jpg_2200x2200q80.jpg" alt="Banner 2" />
          </div>
          <div>
            <img src="https://img.lazcdn.com/us/domino/3bdc28e3-fb3b-411f-a96a-b22fc8dfadb2_BD-1976-688.jpg_2200x2200q80.jpg" alt="Banner 3" />
          </div>
        </Carousel>
      </div>
  )
}

export default HomeSlider