import React from 'react'
import './CarsAvailableseemore.css'

// for total available
export default function Totalavailableseemore() {
  return (
    <div>
    <div className="availableTitle"> <h2>Cars available now </h2>
    <p> The cars listed here have been set to available by their owners</p>
    </div>
    <div className="totalSeemore">
      <div id='Selectors'  className="selectorsContainer">
  <label for="type">Type:</label>
  <select id="type">
    <option value="gas">Gas</option>
    <option value="electric">Electric</option>
    <option value="hybrid">Hybrid</option>
  </select>

  <label for="make">Make:</label>
  <select id="make">
    <option value="brand1">Brand 1</option>
    <option value="brand2">Brand 2</option>
  </select>

  <label for="price">Price:</label>
  <select id="price">
    <option value="100">Up to $100</option>
    <option value="200">Up to $200</option>
    <option value="300">Up to $200</option>
    <option value="400">Up to $200</option>
    <option value="500">Up to $200</option>
    <option value="600">Up to $200</option>
  </select>

  <label for="color">Color:</label>
  <select id="color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="white">White</option>
    <option value="green">Green</option>
    <option value="black">Black</option>
  </select>

</div>


      <div className="TotalCarsmore">
           <div className="carItem">
            <div className="carName"> Car 1</div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>

           </div>
           <div className="carItem">
            <div className="carName"> Car 2</div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>

           </div>
           <div className="carItem">
            <div className="carName"> Car 3</div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>

           </div>
           <div className="carItem">
            <div className="carName"> Car 4</div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>

           </div>
           <div className="carItem">
            <div className="carName"> Car 5</div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>

           </div>
           <div className="carItem">
            <div className="carName"> Car 6 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 7 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 8 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 9 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 10 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 11 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>
           <div className="carItem">
            <div className="carName"> Car 12 </div>
            <div className="carImage"> image</div>
            <div className="carArea">
              <div>area</div>
              <div className="reserve"> <a href="#">Reserve</a></div>
            </div>
           </div>


      </div>
      </div>
      </div>
  )
}

