const OrderInfo = () => {
  const handleOrderInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleOrderInfo}>
        <div>
          <h2>Billing Detailes</h2>
          <hr />
          <div>
            <div>
              <label htmlFor="billerName">Full Name</label>
              <input type="text" name="billerName" />
            </div>
            <div>
              <div>
                <label htmlFor="billerCity">City</label>
                <input type="text" name="billerCity" />
              </div>
              <div>
                <label htmlFor="billerState">State</label>
                <input type="text" name="billerState" />
              </div>
              <div>
                <label htmlFor="billerPincode">Pincode</label>
                <input type="text" name="billerPincode" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Shipping Detailes</h2>
          <hr />
          <div>
            <div>
              <label htmlFor="shippingName">Full Name</label>
              <input type="text" name="shippingName" />
            </div>
            <div>
              <div>
                <label htmlFor="shippingCity">City</label>
                <input type="text" name="shippingCity" />
              </div>
              <div>
                <label htmlFor="shippingState">State</label>
                <input type="text" name="shippingState" />
              </div>
              <div>
                <label htmlFor="shippingPincode">Pincode</label>
                <input type="text" name="shippingPincode" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <input type="submit" value={"Place Order"} />
      </form>
    </div>
  );
};

export default OrderInfo;

