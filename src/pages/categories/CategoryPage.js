import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { deleteCategory, getCategory } from "../../actions/categoriesActions";
import routes from "../../utils/routes";
import Modal from "../../components/shared/Modal";
import Breadcrumb from "../../components/shared/Breadcrumb";
import moment from "moment";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Button, LinkButton } from "../../components/buttons";
import { Card } from "../../components/cards";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const CategoryPage = () => {
  const [open, setOpen] = useState(false);

  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );

  const { deleteLoading, success, deleteError } = useSelector(
    (state) => state.deleteCategory
  );

  const dispatch = useDispatch();
  const { category_id } = useParams();

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, [dispatch, category_id]);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
    setOpen(false);
  };

  if (success) {
    return <Navigate to={routes.getCategories} />;
  }

  return (
    <main>
      <HeaderContainer>
        <h1>{category ? category.name : "Category"}</h1>
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
              name: "categories",
              to: routes.getCategories,
            },
            {
              name: category ? category.name : "Category",
              to: "",
            },
          ]}
        />
        {loading && <Loader />}
        {error && <Error />}
        {category && (
          <div className="flex justify-center">
            <Modal
              show={open}
              onClick={() => setOpen(false)}
              onSubmit={() => handleDelete(category._id)}
              title={`Are you sure you want to delete ${category.name}?`}
              description="Once you delete, you won't be able to access it further."
              cta="Confirm Delete"
            />
            <Card className="flex flex-1 flex-col card border shadow-lg">
              <img
                className="w-full h-64 rounded-lg object-cover mb-5"
                src={category.image}
                alt={category.name}
              />

              <div className="text-center">
                <div className="mb-5">
                  <h2>{category.name}</h2>
                  <p>Created : {moment(category.createdAt).fromNow()}</p>
                  <p>Last Modified : {moment(category.updatedAt).fromNow()}</p>
                </div>
                <div className="flex justify-center mb-5">
                  <LinkButton
                    className="flex w-full justify-center items-center space-x-2"
                    to={`${routes.getCategories}/${category._id}/products`}
                  >
                    <span>Expore Products</span>
                  </LinkButton>
                </div>
                <div className="flex justify-evenly space-x-2">
                  <LinkButton
                    className="flex w-full justify-center items-center space-x-2"
                    to={`${routes.getCategories}/${category._id}/edit`}
                  >
                    <HiOutlinePencil />
                    <span>Edit</span>
                  </LinkButton>
                  <Button
                    className="bg-red-500 w-full flex justify-center items-center space-x-2 hover:bg-red-600"
                    onClick={() => setOpen(true)}
                  >
                    <HiOutlineTrash />
                    <span>Delete</span>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                {deleteLoading && <Loader />}
                {deleteError && <Error />}
              </div>
            </Card>
          </div>
        )}
      </section>
    </main>
  );
};

export default CategoryPage;
