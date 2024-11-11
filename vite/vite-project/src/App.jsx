import './App.css';

function App() {
  let click = (e) => {
    e.preventDefault();
    console.log("Clicked Successfully");
    <e className="render"></e>
  };

   
  return (
    <div>
      <h1 className='s'>Hello world</h1>
      <p className='h'> hello world Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ad neque incidunt provident nisi repudiandae rerum omnis pariatur sunt rem, cupiditate reiciendis illo. Amet necessitatibus voluptatum odit officia alias labore consectetur consequuntur, sequi enim!</p>
      
      <h2 className='t'> Welcome to the world of React</h2>
      <p className='w'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut libero dolores quam enim ducimus quisquam beatae aperiam! Facere vitae nisi sed quisquam veritatis, molestiae laborum ipsa. Sint, deserunt soluta quaerat itaque optio praesentium, est blanditiis minus, nam ducimus repellat placeat facilis debitis? Odio, veniam aliquid!</p>
     <h6>&copy; Sambitkumar Swain</h6>

      <div>
        <table className='table'>
          <caption>A test table with merged cell</caption>
          <thead>
            <tr>
              <th rowSpan="2">Gender</th>
              <th colSpan="2">Average</th>
              <th rowSpan="2">RedEyes</th>
            </tr>
            <tr>
              <th>height</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>males</td>
              <td>1.9</td>
              <td>0.003</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>females</td>
              <td>1.7</td>
              <td>0.002</td>
              <td>43%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type='submit' onClick={click}>Submit</button>
    </div>
  );
}

export default App;
