import { toWords } from "number-in-words";
import { useState } from "react";
import logo from "../../public/logo.png";
import { usePDF } from "react-to-pdf";
const OrderInfo = () => {
  const { toPDF, targetRef } = usePDF({ filename: "Invoice.pdf" });
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    sellerName: "Subrata Sarker",
    sellerCity: "Dhaka",
    sellerState: "Mirzapur, Tangail",
    sellerPincode: "1920",
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

    if (
      !billerName &&
      !billerCity &&
      !billerState &&
      !billerPincode &&
      !sellerCity &&
      !sellerName &&
      !sellerState &&
      !sellerPincode &&
      !placeOfDelivery
    ) {
      return;
    }

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
    setFormData({ ...formData, ...data });
    setOpen(true);
  };
  const calculateTotalAmount = () => {
    return formData?.itemDetails
      .reduce((total, i) => {
        const amount = i.quantity * i.unitPrice * (1 - i.discount / 100);
        const taxAmount =
          i.taxType === "IGST"
            ? i.unitPrice * i.quantity * (18 / 100)
            : i.unitPrice * i.quantity * (18 / 2 / 100);
        return total + amount + taxAmount;
      }, 0)
      .toFixed(2);
  };
  return (
    <>
      <div className=" md:flex gap-2 print:hidden my-2">
        <button
          className="p-2 my-2 w-full bg-blue-500 text-white rounded"
          onClick={() => setOpen(false)}
        >
          Edit Info
        </button>
        <button
          className="p-2 w-full my-2 bg-blue-500 text-white rounded"
          onClick={() => toPDF()}
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
      {!open ? (
        <div className="bg-slate-200 rounded-lg">
          <form onSubmit={handleOrderInfo} className="p-2">
            <div className="md:flex gap-2">
              <div className="flex-1 my-2">
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
              <div className="flex-1 my-2">
                <h2 className="text-2xl">Billing Details</h2>
                <hr className="my-2 border-blue-500" />
                <div className="">
                  <div className="flex flex-col">
                    <label htmlFor="billerName">Full Name</label>
                    <input
                      type="text"
                      required
                      name="billerName"
                      id="billerName"
                    />
                  </div>
                  <div className="md:flex gap-2 justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="billerCity">City</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="billerCity"
                        id="billerCity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="billerState">State</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="billerState"
                        id="billerState"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="billerPincode">Pincode</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="billerPincode"
                        id="billerPincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex gap-2">
              <div className="flex-1 my-2">
                <h2 className="text-2xl">Shipping Details</h2>
                <hr className="my-2 border-blue-500" />
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="shippingName">Full Name</label>
                    <input
                      type="text"
                      required
                      name="shippingName"
                      id="shippingName"
                    />
                  </div>
                  <div className="md:flex gap-2 justify-between">
                    <div className="flex flex-col">
                      <label htmlFor="shippingCity">City</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="shippingCity"
                        id="shippingCity"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="shippingState">State</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="shippingState"
                        id="shippingState"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="shippingPincode">Pincode</label>
                      <input
                        className="md:w-[150px]"
                        type="text"
                        required
                        name="shippingPincode"
                        id="shippingPincode"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-2">
                <h2 className="text-2xl">Place of Delivery</h2>
                <hr className="my-2 border-blue-500" />
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="placeOfDelivery">State</label>
                    <input
                      type="text"
                      required
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
              className="bg-blue-500 text-white px-8 py-2 rounded w-full my-2"
              type="submit"
              value={"Place Order"}
            />
          </form>
        </div>
      ) : (
        <>
          <div
            ref={targetRef}
            className="text-xl relative w-[794px] h-[1123px] mx-auto bg-white p-10"
          >
            <div className="flex">
              <div className="flex-1">
                <img className="w-60" src={logo} alt="" />
              </div>
              <div className="flex-1 text-end">
                <h1>Invoice / Bill / Cash Memo</h1>
                <p>(Original For Recipient)</p>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-center py-4">
                  <span className="font-bold text-xl">Sold by:-</span>{" "}
                  {formData.sellerName} || {"  "}
                  {formData.sellerState +
                    "  " +
                    formData.sellerCity +
                    "  " +
                    formData.sellerPincode}
                </h2>
              </div>
              <div className="flex justify-between my-2">
                <div>
                  <div>
                    <h2 className="font-bold text-xl">Billing Info: </h2>
                    <p>{formData.billerName}</p>
                    <p>
                      {formData.billerState +
                        "  " +
                        formData.billerCity +
                        "  " +
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
                        "  " +
                        formData.shippingCity +
                        " " +
                        formData.shippingPincode}
                    </p>
                  </div>
                </div>
              </div>
              <hr className="border-black py-2" />
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
                    <th className="border pb-2 border-black">SL</th>
                    <th className="border pb-2 border-black">Description</th>
                    <th className="border pb-2 border-black">Price</th>
                    <th className="border pb-2 border-black">QTY</th>
                    <th className="border pb-2 border-black">Discount</th>
                    <th className="border pb-2 border-black">Amount</th>
                    <th className="border pb-2 border-black">Tax Amount</th>
                    <th className="border pb-2 border-black">Net Amount</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {formData?.itemDetails.map((i, index) => (
                    <tr key={index}>
                      <td className="border pb-2 border-black">{index + 1}</td>
                      <td className="border pb-2 border-black">
                        {i.description}
                      </td>
                      <td className="border pb-2 border-black">
                        {i.unitPrice}
                      </td>
                      <td className="border pb-2 border-black">{i.quantity}</td>
                      <td className="border pb-2 border-black">
                        {i.discount} %
                      </td>
                      <td className="border pb-2 border-black">
                        {(
                          i.quantity * i.unitPrice -
                          i.quantity * i.unitPrice * (i.discount / 100)
                        ).toFixed(2)}
                      </td>
                      <td className="border pb-2 border-black">
                        {(i.taxType == "IGST"
                          ? i.unitPrice * i.quantity * (18 / 100)
                          : i.unitPrice * i.quantity * (18 / 2 / 100)
                        ).toFixed(2)}
                      </td>
                      <td className="border pb-2 border-black">
                        {(
                          i.quantity * i.unitPrice -
                          i.quantity * i.unitPrice * (i.discount / 100) +
                          (i.taxType == "IGST"
                            ? i.unitPrice * i.quantity * (18 / 100)
                            : i.unitPrice * i.quantity * (18 / 2 / 100))
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="">{toWords(calculateTotalAmount())}</p>
                </div>
                <div>
                  <p className="">Total: {calculateTotalAmount()}</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 p-4 w-full text-center">
              <div className="flex justify-between">
                <div className="flex-1">
                  <p className="font-bold">Seller: Subrata Sarker</p>
                  <p>Amazon.in</p>
                  <p>Online shop app</p>
                </div>
                <div className="flex-1 flex justify-center items-end">
                  <p>Amazon.in</p>
                </div>
                <div className="flex-1">
                  <p className="font-bold">Manager:Rezaul Karim</p>
                  <p>Amazon.in</p>
                  <p>Online shop app</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </>
      )}
    </>
  );
};

export default OrderInfo;
