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
import routes from "../../utils/routes";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Card } from "../../components/cards";

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
            Hi {seller ? seller.firstName + " " + seller.lastName : "Seller"},
          </h6>
          <h1 className="">Welcome to Local Shoppers</h1>
        </div>
      </HeaderContainer>
      <section className="container">
        {error && <p className="text-center text-red-500">{error}</p>}
        {seller && (
          <>
            {seller.business ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link
                      className="flex space-x-2"
                      to={`${routes.getBusiness}/${seller.business._id}`}
                    >
                      <div>
                        <HiOutlineHome className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">
                          Manage Business
                        </h4>
                        <h6>Create, Edit, and Delete your categories</h6>
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
                        <h6>Create, Edit, and Delete your categories</h6>
                      </div>
                    </Link>
                  </Card>
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link className="flex space-x-2" to={routes.getCategories}>
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
                  <Card className="hover:bg-indigo-100 transition duration-500">
                    <Link className="flex space-x-2" to={routes.getCategories}>
                      <div>
                        <HiOutlineUserCircle className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-medium">Your Profile</h4>
                        <h6 className="text-gray-600">
                          Create, Edit, and Delete your categories
                        </h6>
                      </div>
                    </Link>
                  </Card>
                </div>
              </>
            ) : (
              <>
                <div className="bg-indigo-500 p-10 rounded-xl shadow-lg text-white">
                  <h1 className="text-4xl font-bold mb-3">
                    Welcome {seller.firstName}
                  </h1>
                  <h2 className="text-3xl font-semibold mb-3">
                    Start your online business now
                  </h2>
                  <p className="mb-5">
                    Create your online business within 10 minutes
                  </p>
                  <Link
                    className="text-lg font-semibold px-3 py-3 bg-white text-black rounded-lg"
                    to={routes.createBusiness}
                  >
                    Create your online store
                  </Link>
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
