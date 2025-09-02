import React, { useEffect, useState } from "react";
import womenscollection from "../../assets/womens-collection.webp";
import menscollection from "../../assets/mens-collection.webp";
const MyOrderPage = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: 12345,
          createdAt: Date.now(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "product 1",
              Image: menscollection,
              altText: "product 1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: 45678,
          createdAt: Date.now(),
          shippingAddress: { city: "New York", country: "USA" },
          orderItems: [
            {
              name: "product 2",
              Image: womenscollection,
              altText: "product 2",
            },
          ],
          totalPrice: 150,
          isPaid: true,
        },
      ];
      setOrder(mockOrders);
    }, 1000);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order Id</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      className="rouded object-cover h-[50px] w-[50px] rounded-lg"
                      src={order.orderItems[0].Image}
                      alt={order.orderItems[0].name}
                    />
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city} ${order.shippingAddress.country}`
                      : ""}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-gray-800"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You Have No Orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
