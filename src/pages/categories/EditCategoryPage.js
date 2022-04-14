import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import routes from "../../utils/routes";
import { editCategory, getCategory } from "../../actions/categoriesActions";
import { useEffect } from "react";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Card } from "../../components/cards";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const EditCategoryPage = () => {
  const [name, setName] = useState("");

  const [image, setImage] = useState(null);

  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );
  const {
    loading: updateLoading,
    category: updatedCategory,
    updateError,
  } = useSelector((state) => state.editCategory);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(getCategory(categoryId));
  }, [categoryId, dispatch]);

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !image) {
      return;
    }

    if (name === category.name && !image) {
      return navigate(`${routes.getCategories}/${categoryId}`);
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    dispatch(editCategory(formData, categoryId));
  };

  if (updatedCategory) {
    return <Navigate to={`${routes.getCategories}/${category._id}`} />;
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Edit Category</h1>
      </HeaderContainer>
      <section className="container max-w-xl">
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
              to: `${routes.getCategories}/${categoryId}`,
            },
            {
              name: "Edit",
              to: "",
            },
          ]}
        />
        <Card className="flex justify-center form border shadow-lg px-5">
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label className="block" htmlFor="name">
                  Name
                </Label>
                <Input
                  id="name"
                  className="w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="iPhones"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  className="w-full"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  placeholder="Upload image"
                  accept="image/jpeg"
                />
              </FormGroup>
              <FormGroup>
                <Button className="w-full" type="submit">
                  Save
                </Button>
              </FormGroup>
              <FormGroup className="flex justify-center mb-0">
                {(updateError || error) && <Error />}
                {(updateLoading || loading) && <Loader />}
              </FormGroup>
            </form>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default EditCategoryPage;
