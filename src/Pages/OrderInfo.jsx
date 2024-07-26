const OrderInfo = () => {
  const handleOrderInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handleOrderInfo} className="p-4">
        <div className="md:flex gap-4">
          <div className="flex-1 my-4">
            <h2 className="text-2xl">Billing Detailes</h2>
            <hr className="my-2 border-blue-500" />
            <div className="">
              <div className="flex flex-col">
                <label htmlFor="billerName">Full Name</label>
                <input type="text" name="billerName" />
              </div>
              <div className="md:flex gap-2 justify-between">
                <div className="flex flex-col">
                  <label htmlFor="billerCity">City</label>
                  <input className="md:w-[150px]" type="text" name="billerCity" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="billerState">State</label>
                  <input className="md:w-[150px]" type="text" name="billerState" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="billerPincode">Pincode</label>
                  <input className="md:w-[150px]" type="text" name="billerPincode" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 my-4">
            <h2 className="text-2xl">Shipping Detailes</h2>
            <hr className="my-2 border-blue-500" />
            <div>
              <div className="flex flex-col">
                <label htmlFor="shippingName">Full Name</label>
                <input type="text" name="shippingName" />
              </div>
              <div className="md:flex gap-2 justify-between">
                <div className="flex flex-col">
                  <label htmlFor="shippingCity">City</label>
                  <input className="md:w-[150px]" type="text" name="shippingCity" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="shippingState">State</label>
                  <input className="md:w-[150px]" type="text" name="shippingState" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="shippingPincode">Pincode</label>
                  <input className="md:w-[150px]" type="text" name="shippingPincode" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <input className="bg-blue-500 text-white px-8 py-4 rounded w-full my-4" type="submit" value={"Place Order"} />
      </form>
    </div>
  );
};

export default OrderInfo;
