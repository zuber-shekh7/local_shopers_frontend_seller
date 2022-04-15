import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { editBusiness, getBusiness } from "../../actions/businessActions";
import routes, { generateRoute } from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Error } from "../../components/messages";
import { Loader } from "../../components/loaders";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Card } from "../../components/cards";
import { Button } from "../../components/buttons";
import { getBusinessCategories } from "../../actions/businessCategoryActions";

const EditBusinessPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [category, setCategory] = useState("");

  const { businessId } = useParams();

  const { loading, business, error } = useSelector(
    (state) => state.getBusiness
  );
  const {
    loading: updateLoading,
    business: updatedBusiness,
    error: updateError,
  } = useSelector((state) => state.editBusiness);

  const { categories } = useSelector((state) => state.getBusinessCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (business) {
      setName(business.name);
      setDescription(business.description);
      setCategory(business.category._id);
    }
    dispatch(getBusiness(businessId));
  }, [businessId, dispatch]);

  useEffect(() => {
    dispatch(getBusinessCategories());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description && !category) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("businessCategoryId", category);
    formData.append("photo", photo);

    dispatch(editBusiness(formData, businessId));
  };

  if (updatedBusiness) {
    return (
      <Navigate
        to={generateRoute(routes.getBusiness, { ":businessId": businessId })}
      />
    );
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Edit Business {error}</h1>
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
              name: "business",
              to: generateRoute(routes.getBusiness, {
                ":businessId": businessId,
              }),
            },
            {
              name: "edit",
              to: "",
            },
          ]}
        />

        {business && (
          <Card className="shadow-lg">
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  className="w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter business name"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  className="w-full"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter business description"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="categories">Select category</Label>

                {categories && (
                  <select
                    className="w-full  rounded-lg"
                    value={category}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled>Select category</option>
                    {categories.map((businessCategory) => {
                      return (
                        <option
                          key={businessCategory._id}
                          value={businessCategory._id}
                        >
                          {businessCategory.name}
                        </option>
                      );
                    })}
                  </select>
                )}
              </FormGroup>
              <FormGroup>
                <Label htmlFor="photo">Photo</Label>
                <Input
                  id="photo"
                  className="w-full"
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  placeholder="Upload photo"
                />
              </FormGroup>
              <FormGroup>
                <Button className="w-full">Save</Button>
              </FormGroup>
              <FormGroup className="flex justify-center mb-0">
                {(error || updateError) && <Error />}
                {(loading || updateLoading) && <Loader />}
              </FormGroup>
            </form>
          </Card>
        )}
      </section>
    </main>
  );
};

export default EditBusinessPage;
