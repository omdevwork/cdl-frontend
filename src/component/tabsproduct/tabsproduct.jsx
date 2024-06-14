import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './tabsproduct.css'

const TabsProduct = () => {
  const [key, setKey] = useState('priceBreakup');

  return (
    <section className='py-5'>

      <div className="container tabsProduct">

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 justify-content-center"
        >
          <Tab eventKey="priceBreakup" title="Price Breakup">
            <div className="tab-content">
              {/* <h2>Price Breakup</h2> */}
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheetsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheetsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>
          </Tab>
          <Tab eventKey="productDetails" title="Product Details">
            <div className="tab-content">
              {/* <h2>Product Details</h2> */}
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheetsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
          </Tab>
          <Tab eventKey="delivery" title="Delivery">
            <div className="tab-content">
              {/* <h2>Delivery</h2> */}
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheetsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheetsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsProduct;
