import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Chat from  '../../public/images/projects/Real-tim-Chat-Application.png';
import Book from '../../public/images/projects/Book-Recommendation-App.jpg';
import Commerce from '../../public/images/projects/E-Commerce-Website.jpg';
import Task from '../../public/images/projects/tab-task-lists.jpg'

function projects() {
  return (
    <Carousel className='projects'>
      <div className='carousel-item'>
        <Image className='img' alt='' width='400' height='400' src={Task} />
        <div className='carousel-text'>
          <h3>Task Management Application</h3>
          <p>The application allow users to create, update,<br/>  and delete tasks, set task deadlines, and track <br/>  their progress. Users able to sign up, log in, and have their <br/>  own personalized task lists. The application provide an intuitive <br/> user interface and a seamless user experience.</p>
        </div>
      </div>
      <div className='carousel-item'>
        <Image className='img' alt='' width='400' height='400' src={Commerce} />
        <div className='carousel-text'> 
          <h3>E-Commerce Website</h3>
          <p>The website allow users to browse and purchase <br/>  products, manage their profiles, add products to their <br/>  cart, and complete orders. The website have features such <br/>  as user authentication, product search, product details, <br/> shopping cart, and order history.</p>
        </div>
      </div>
      <div className='carousel-item'>
        <Image className='img' alt='' width='400' height='400' src={Book} />
        <div className='carousel-text'>
          <h3>Book Recommendation App</h3>
          <p>
          This project is a platform where users can discover <br/>  and share book recommendations, fostering a community <br/>  of book lovers. The app provide an intuitive and engaging <br/>  user experience, allowing users to easily find books, <br/>  rate them, and connect with other readers.
          </p>
        </div>
      </div>
      <div className='carousel-item'>
        <Image className='img' alt='' width='400' height='400' src={Chat} />
        <div className='carousel-text'>
          <h3>Real-time Chat Application</h3>
          <p>
          The application provide features such as creating <br/> user accounts, joining chat rooms, sending and receiving messages,<br/>  and displaying online/offline status.
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default projects;