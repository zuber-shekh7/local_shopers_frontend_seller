import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { getSeller } from "../../actions/sellerActions";
import routes, { generateRoute } from "../../utils/routes";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Card } from "../../components/cards";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { LinkButton } from "../../components/buttons";

const DashboardPage = () => {
  const {
    seller: { _id },
  } = useSelector((state) => state.sellerLogin);

  const { loading, seller, error } = useSelector((state) => state.getSeller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeller(_id));
  }, [_id, dispatch]);

  return (
    <main>
      <HeaderContainer>
        <div>
          <h6>
            Hi{" "}
            {seller && seller.firstName
              ? seller.firstName + " " + seller.lastName
              : "Seller"}
            ,
          </h6>
          <h1 className="">Welcome to Local Shoppers</h1>
        </div>
      </HeaderContainer>
      <section className="container">
        {error && <Error />}
        {loading && <Loader />}
        {seller && (
          <>
            {seller.business ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link className="flex space-x-2" to={routes.getCategories}>
                      <div>
                        <HiOutlineUserCircle className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">Your Profile</h4>
                        <h6>Edit email, mobile, name etc...</h6>
                      </div>
                    </Link>
                  </Card>
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link
                      className="flex space-x-2"
                      to={generateRoute(routes.getBusiness, {
                        ":businessId": seller.business._id,
                      })}
                    >
                      <div>
                        <HiOutlineHome className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">
                          Manage Business
                        </h4>
                        <h6>Edit name, category and many more</h6>
                      </div>
                    </Link>
                  </Card>
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link className="flex space-x-2" to={routes.getOrders}>
                      <div>
                        <HiOutlineTruck className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">Manage Orders</h4>
                        <h6>Manage orders</h6>
                      </div>
                    </Link>
                  </Card>
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link
                      className="flex space-x-2"
                      to={generateRoute(routes.getCategories, {
                        ":businessId": seller.business._id,
                      })}
                    >
                      <div>
                        <HiOutlineFolderOpen className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">
                          Manage Categories
                        </h4>
                        <h6>Create, Edit, and Delete your categories</h6>
                      </div>
                    </Link>
                  </Card>
                </div>
              </>
            ) : (
              <>
                <div className="bg-indigo-600 text-white p-10 rounded-lg shadow-lg">
                  <h1>Welcome {seller.firstName}</h1>
                  <h2>Start your online business now</h2>
                  <p className="mb-5">
                    Create your online business within 10 minutes
                  </p>
                  <LinkButton
                    className="text-lg font-semibold py-3 bg-white text-black rounded-lg hover:bg-indigo-50"
                    to={routes.createBusiness}
                  >
                    Create your online store
                  </LinkButton>
                </div>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default DashboardPage;
