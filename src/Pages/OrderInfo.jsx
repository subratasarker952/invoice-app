import { useState } from "react";

const OrderInfo = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    sellerName: "Subrata Sarker",
    sellerCity: "Dhaka",
    sellerState: "Mirzapur, Tangail",
    sellerPincode: "1940",
    billerName: "",
    billerCity: "",
    billerState: "",
    billerPincode: "",
    shippingName: "",
    shippingCity: "",
    shippingState: "",
    shippingPincode: "",
    placeOfDelivery: "",
    reverseCharge: "NO",
    orderNo: "O01",
    orderDate: "07/11/23",
    invoiceNo: "INV01",
    invoiceDate: "07/11/23",
    itemDetails: [
      {
        description: "Item 1",
        unitPrice: 100.0,
        quantity: 2,
        discount: 10.0,
        taxType: "IGST",
      },
      {
        description: "Item 2",
        unitPrice: 200.0,
        quantity: 1,
        discount: 20.0,
        taxType: "CGST",
      },
      {
        description: "Item 3",
        unitPrice: 300.0,
        quantity: 3,
        discount: 10.0,
        taxType: "SGST",
      },
    ],
  });

  const handleOrderInfo = (e) => {
    e.preventDefault();
    const sellerName = e.target.sellerName.value;
    const sellerCity = e.target.sellerCity.value;
    const sellerState = e.target.sellerState.value;
    const sellerPincode = e.target.sellerPincode.value;
    const billerName = e.target.billerName.value;
    const billerCity = e.target.billerCity.value;
    const billerState = e.target.billerState.value;
    const billerPincode = e.target.billerPincode.value;
    const shippingName = e.target.shippingName.value;
    const shippingCity = e.target.shippingCity.value;
    const shippingState = e.target.shippingState.value;
    const shippingPincode = e.target.shippingPincode.value;
    const placeOfDelivery = e.target.placeOfDelivery.value;
    const reverseCharge = e.target.reverseCharge.value;
    const data = {
      sellerName,
      sellerCity,
      sellerState,
      sellerPincode,
      billerName,
      billerCity,
      billerState,
      billerPincode,
      shippingName,
      shippingCity,
      shippingState,
      shippingPincode,
      placeOfDelivery,
      reverseCharge,
    };
    setFormData({ ...formData, data });
    setOpen(true);
  };

  return (
    <>
      {!open ? (
        <div>
          <form onSubmit={handleOrderInfo} className="p-4">
            <div className="md:flex gap-4">
              <div className="flex-1 my-4">
                <h2 className="text-2xl">Seller Details</h2>
                <hr className="my-2 border-blue-500" />
                <div className="">
                  <div className="flex flex-col">
                    <label htmlFor="billerName">Full Name</label>
                    <input
                      type="text"
                      name="sellerName"
                      readOnly
                      defaultValue={formData.sellerName}
                      id="sellerName"
                    />
                  </div>
                  <div className="md:flex gap-2 justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="sellerCity">City</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="sellerCity"
                        readOnly
                        defaultValue={formData.sellerCity}
                        id="sellerCity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="sellerState">State</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="sellerState"
                        readOnly
                        defaultValue={formData.sellerState}
                        id="sellerState"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="sellerPincode">Pincode</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="sellerPincode"
                        readOnly
                        defaultValue={formData.sellerPincode}
                        id="sellerPincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-4">
                <h2 className="text-2xl">Billing Details</h2>
                <hr className="my-2 border-blue-500" />
                <div className="">
                  <div className="flex flex-col">
                    <label htmlFor="billerName">Full Name</label>
                    <input type="text" name="billerName" id="billerName" />
                  </div>
                  <div className="md:flex gap-2 justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="billerCity">City</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="billerCity"
                        id="billerCity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="billerState">State</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="billerState"
                        id="billerState"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="billerPincode">Pincode</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="billerPincode"
                        id="billerPincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="flex-1 my-4">
                <h2 className="text-2xl">Shipping Details</h2>
                <hr className="my-2 border-blue-500" />
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="shippingName">Full Name</label>
                    <input type="text" name="shippingName" id="shippingName" />
                  </div>
                  <div className="md:flex gap-2 justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="shippingCity">City</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="shippingCity"
                        id="shippingCity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="shippingState">State</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="shippingState"
                        id="shippingState"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="shippingPincode">Pincode</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        name="shippingPincode"
                        id="shippingPincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-4">
                <h2 className="text-2xl">Place of Delivery</h2>
                <hr className="my-2 border-blue-500" />
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="placeOfDelivery">State</label>
                    <input
                      type="text"
                      name="placeOfDelivery"
                      id="placeOfDelivery"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="reverseCharge"> ReverseCharge</label>
                    <select name="reverseCharge" id="reverseCharge">
                      <option defaultValue={"NO"} value="NO">
                        NO
                      </option>
                      <option value="YES">YES</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <input
              className="bg-blue-500 text-white px-8 py-4 rounded w-full my-4"
              type="submit"
              value={"Place Order"}
            />
          </form>
        </div>
      ) : (
        <>
          <div className="text-xl p-10">
            <div>Header</div>
            <div>
              <div>
                <h2>Sold by: </h2>
                <p>{formData.sellerName}</p>
                <p>
                  {formData.sellerState +
                    "," +
                    formData.sellerCity +
                    "," +
                    formData.sellerPincode}
                </p>
              </div>
              <div className="flex justify-between my-2">
                <div>
                  <div>
                    <h2 className="font-bold text-xl">Billing Info: </h2>
                    <p>{formData.billerName}</p>
                    <p>
                      {formData.billerState +
                        "," +
                        formData.billerCity +
                        "," +
                        formData.billerPincode}
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className="font-bold text-xl">Shipping Info: </h2>
                    <p>{formData.shippingName}</p>
                    <p>
                      {formData.shippingState +
                        "," +
                        formData.shippingCity +
                        "," +
                        formData.shippingPincode}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="border-black my-2" />
              <div className="flex justify-between my-2">
                <div>
                  <div>
                    <h2 className="font-bold text-xl">Order info </h2>
                    <p>Order Number: {formData.orderNo}</p>
                    <p>Order Date: {formData.orderDate}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className="font-bold text-xl">Invoice Info </h2>
                    <p>Invoice Number: {formData.invoiceNo}</p>
                    <p>Invoice Date: {formData.invoiceDate}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <table className="w-full border-black border border-collapse">
                <thead>
                  <tr className="border">
                    <th className="border border-black">SL</th>
                    <th className="border border-black">Description</th>
                    <th className="border border-black">Price</th>
                    <th className="border border-black">QTY</th>
                    <th className="border border-black">Discount</th>
                    <th className="border border-black">Amount</th>
                    <th className="border border-black">Tax Amount</th>
                    <th className="border border-black">Net Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {formData?.itemDetails.map((i, index) => (
                    <tr key={index}>
                      <td className="border border-black">{index + 1}</td>
                      <td className="border border-black">{i.description}</td>
                      <td className="border border-black">{i.unitPrice}</td>
                      <td className="border border-black">{i.quantity}</td>
                      <td className="border border-black">{i.discount} %</td>
                      <td className="border border-black">
                        {i.quantity * i.unitPrice -
                          i.quantity * i.unitPrice * (i.discount / 100)}
                      </td>
                      <td className="border border-black">
                        {i.taxType == "IGST"
                          ? i.unitPrice * i.quantity * (18 / 100)
                          : i.unitPrice * i.quantity * (18 / 2 / 100)}
                      </td>
                      <td className="border border-black">
                        {i.quantity * i.unitPrice -
                          i.quantity * i.unitPrice * (i.discount / 100) +
                          (i.taxType == "IGST"
                            ? i.unitPrice * i.quantity * (18 / 100)
                            : i.unitPrice * i.quantity * (18 / 2 / 100))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right my-2">
                <p>
                  Total Amount: <input type="text" className=" w-[180px] border" />
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className=" md:flex gap-4 print:hidden">
            <button
              className="p-2 my-2 w-full bg-blue-500 text-white rounded"
              onClick={() => setOpen(false)}
            >
              Edit Info
            </button>
            <button
              className="p-2 w-full my-2 bg-blue-500 text-white rounded"
              onClick={() => setOpen(false)}
            >
              DownLoad
            </button>
            <button
              className="p-2 w-full my-2 bg-blue-500 text-white rounded"
              onClick={() => window.print()}
            >
              Print
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default OrderInfo;
