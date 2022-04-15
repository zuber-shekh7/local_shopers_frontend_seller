import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import FormData from "form-data";
import routes, { generateRoute } from "../../utils/routes";
import { getBusinessCategories } from "../../actions/businessCategoryActions";
import { createBusiness } from "../../actions/businessActions";
import { getSeller } from "../../actions/sellerActions";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Card } from "../../components/cards";
import { FormGroup } from "../../components/forms/containers";
import { Label, Input } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";

const CreateBusinessPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const {
    seller: { _id },
  } = useSelector((state) => state.sellerLogin);
  const { seller } = useSelector((state) => state.getSeller);

  const { categories: businessCategories } = useSelector(
    (state) => state.getBusinessCategories
  );
  const { loading, business, error } = useSelector(
    (state) => state.createBusiness
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSeller(_id));
  }, [_id, dispatch]);

  useEffect(() => {
    if (seller && seller.business) {
      navigate(routes.dashboard);
    }
  }, [seller, navigate, dispatch]);

  useEffect(() => {
    if (!businessCategories) {
      dispatch(getBusinessCategories());
    } else {
      setCategories(businessCategories);
      setCategory(businessCategories[0]._id);
    }
  }, [businessCategories, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("photo", photo);
    formData.append("businessCategoryId", category);

    dispatch(createBusiness(formData));
  };

  if (business) {
    return (
      <Navigate
        to={generateRoute(routes.getBusiness, { ":businessId": business._id })}
      />
    );
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Create Business</h1>
      </HeaderContainer>
      <section className="container max-w-lg">
        <Breadcrumb
          links={[
            {
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "create business",
              to: "",
            },
          ]}
        />
        <Card className="shadow-lg">
          <div>
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
                  placeholder="Enter description"
                  required
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label>Select category</Label>
                {categories && (
                  <select
                    className="w-full rounded-lg"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    required
                  >
                    <option disabled>Select category</option>
                    {categories.map((category) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
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
                  accept="image/jpeg"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Button className="w-full" type="submit">
                  Create
                </Button>
              </FormGroup>
              <FormGroup className="flex justify-center mb-0">
                {error && <Error />}
                {loading && <Loader />}
              </FormGroup>
            </form>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default CreateBusinessPage;
