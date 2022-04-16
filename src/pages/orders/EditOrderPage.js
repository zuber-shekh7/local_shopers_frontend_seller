import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editOrder, getOrder } from "../../actions/orderActions";
import { Button } from "../../components/buttons";
import { Card } from "../../components/cards";
import { FormGroup } from "../../components/forms/containers";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { orderStatus } from "../../utils/helper";
import routes, { generateRoute } from "../../utils/routes";

const EditOrderPage = () => {
  const [status, setStatus] = useState("");

  const { businessId, orderId } = useParams();

  const { loading, order, error } = useSelector((state) => state.getOrder);
  const {
    loading: updateLoading,
    order: updateOrder,
    error: updateError,
  } = useSelector((state) => state.editOrder);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (order) {
      setStatus(order.status);
    } else {
      dispatch(getOrder(orderId));
    }
  }, [orderId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === order.status) {
      return navigate(
        generateRoute(routes.getOrder, {
          ":businessId": businessId,
          ":orderId": orderId,
        })
      );
    }

    const formData = new FormData();
    formData.append("status", status);

    dispatch(editOrder(formData, order._id));
  };

  if (updateOrder) {
    return (
      <Navigate
        to={generateRoute(routes.getOrder, {
          ":businessId": businessId,
          ":orderId": orderId,
        })}
      />
    );
  }
  return (
    <main>
      <HeaderContainer>
        <h1>Edit Order</h1>
      </HeaderContainer>
      <section className="container max-w-lg">
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "orders",
              to: generateRoute(routes.getOrders, {
                ":businessId": businessId,
              }),
            },
            {
              name: order ? order._id : "summary",
              to: generateRoute(routes.getOrder, {
                ":businessId": businessId,
                ":orderId": orderId,
              }),
            },
            {
              name: "edit",
              to: "",
            },
          ]}
        />
        {loading && <Loader />}
        {error && <Error />}
        {order && (
          <Card>
            <div className="flex justify-center">
              <h6 className="uppercase">order | {order._id}</h6>
            </div>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="w-full rounded-lg border"
                  name=""
                  id=""
                >
                  <option disabled>Select order status</option>
                  {orderStatus.map((status, index) => {
                    return (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    );
                  })}
                </select>
              </FormGroup>
              <FormGroup>
                <Button className="w-full">Save</Button>
              </FormGroup>
              <FormGroup className="flex justify-center mb-0">
                {updateLoading && <Loader />}
                {updateError && <Error />}
              </FormGroup>
            </form>
          </Card>
        )}
      </section>
    </main>
  );
};

export default EditOrderPage;
