import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormData from "form-data";
import routes from "../../utils/routes";
import { createCategory } from "../../actions/categoriesActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const CreateCategoryPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const { loading, category, error } = useSelector(
    (state) => state.createCategory
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !image) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    dispatch(createCategory(formData));
  };

  if (category) {
    return <Navigate to={`${routes.getCategories}/${category._id}`} />;
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Add category</h1>
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
              name: "new",
              to: "",
            },
          ]}
        />
        <div className="flex justify-center form border rounded-lg shadow-lg">
          <div className="flex-1">
            <form className="p-5" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
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
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Button className="w-full " type="submit">
                  Create
                </Button>
              </FormGroup>
              <FormGroup className="flex justify-center mb-0">
                {error && <Error>{error}</Error>}
                {loading && <Loader />}
              </FormGroup>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateCategoryPage;
