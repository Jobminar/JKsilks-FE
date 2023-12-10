import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleCancel = () => {
    // Handle cancel logic if needed
  };

  const handleUploadImages = () => {
    // Handle image upload logic
  };

  return (
    <div className="container-fluid bg-white p-5">
      {/* Navigation Bar */}
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <img
                src="https://file.rendit.io/n/aKKzICwicf7qjfBk0Aqc.png"
                alt="Frame1"
                className="navbar-brand"
                style={{ width: "40px" }}
              />
              <div className="collapse navbar-collapse">
                <div className="navbar-nav ms-auto">
                  <a className="nav-link" href="#">
                    Customers
                  </a>
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                  <a className="nav-link" href="#">
                    Feedback
                  </a>
                  <a className="nav-link" href="#">
                    Discounts
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Products Section */}
      <div className="row mt-2">
        <div className="col">
          <h1 className="text-3xl font-weight-bold">Products</h1>
        </div>
      </div>

      {/* Categories */}
      <div className="row mt-4">
        {" "}
        {/* Increased the top margin */}
        <div className="col">
          <div className="d-flex flex-row gap-5 w-100">
            {" "}
            {/* Increased the gap */}
            <div className="font-italic text-danger">Semi Kanchi pattu</div>
            <div className="font-italic">Light weight pattu</div>
            <div className="font-italic">Soft Silk</div>
            <div className="font-italic">Pure Kanchi Pattu</div>
            <div id="PureKanjivaramSilk" className="font-italic">
              Pure Kanjivaram Silk
            </div>
            <div className="font-italic">Exclusive Bridal wear</div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="row mt-4">
        <div className="col-md-12">
          {" "}
          {/* Increased the width to col-md-12 */}
          <div className="text-3xl font-italic text-dark">Upload New</div>
          <hr className="w-100 border-top border-dark" />
          <div className="row gap-3">
            <div className="col-md-6">
              <div className="text-2xl font-italic text-dark mt-3">Images:</div>
              <input
                type="file"
                className="form-control"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
            <div className="col-md-6">
              <div className="text-2xl font-italic text-dark mt-3">Price:</div>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
              />
            </div>
          </div>
          <div className="row mt-3 gap-3">
            <div className="col-md-6">
              <div className="text-2xl font-italic text-dark">Description:</div>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                rows="3"
              />
            </div>
            <div className="col-md-6 d-flex align-items-end gap-3">
              {" "}
              {/* Increased the gap */}
              <button className="btn btn-danger w-50" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="btn btn-warning w-50"
                onClick={handleUploadImages}
              >
                Upload images
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Data Section */}
      <div className="row mt-2">
        <div className="col d-flex justify-content-between align-items-center">
          <div className="text-2xl font-italic text-dark">Inventory Data</div>
          <div className="text-danger">View All</div>
        </div>
        <hr className="w-100 border-top border-dark" />
      </div>

      {/* Product Elements */}
      <div className="row mt-2 m-4">
        <div className="col d-flex gap-3">
          {/* Product 1 */}
          <div className="flex-shrink-0">
            <img
              src="https://file.rendit.io/n/iZWZ0dd3iDTSP2E5ahdN.png"
              alt="Frame2"
            />
            <div className="text-xl font-italic font-weight-bold mt-3">
              Pure Kanchi Pattu
            </div>
            <div className="text-lg font-italic">₹ 2599.00</div>
          </div>

          {/* Product 2 */}
          <div className="flex-shrink-0">
            <img
              src="https://file.rendit.io/n/hQaNQ6JnCU24DtJg1Zzz.png"
              alt="Frame3"
            />
            <div className="text-xl font-italic font-weight-bold mt-3">
              Pure Kanchi Pattu
            </div>
            <div className="text-lg font-italic">₹ 2599.00</div>
          </div>

          {/* Product 3 */}
          <div className="flex-shrink-0">
            <img
              src="https://file.rendit.io/n/POs8vSqo8Tcw1NQcpPND.png"
              alt="Frame5"
            />
            <div className="text-xl font-italic font-weight-bold mt-3">
              Pure Kanchi Pattu
            </div>
            <div className="text-lg font-italic">₹ 2599.00</div>
          </div>

          {/* Product 4 */}
          <div className="flex-shrink-0">
            <img
              src="https://file.rendit.io/n/3AjFbPDoNVU86PHWuIbH.png"
              alt="Frame6"
            />
            <div className="text-xl font-italic font-weight-bold mt-3">
              Pure Kanchi Pattu
            </div>
            <div className="text-lg font-italic">₹ 2599.00</div>
          </div>

          <div className="flex-shrink-0">
            <img
              src="https://file.rendit.io/n/hQaNQ6JnCU24DtJg1Zzz.png"
              alt="Frame4"
            />
            <div className="text-xl font-italic font-weight-bold mt-3">
              Pure Kanchi Pattu
            </div>
            <div className="text-lg font-italic">₹ 2599.00</div>
          </div>
        </div>
      </div>

      {/* Additional Product Element */}
    </div>
  );
};

export default Product;
