import React, { useState } from "react";
import FormData from "form-data";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { createProduct } from "../../actions/productActions";
import { Button } from "../../components/buttons";
import { Card } from "../../components/cards";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(1);
  const [photo, setPhoto] = useState();

  const { loading, product, error } = useSelector(
    (state) => state.createProduct
  );

  const { businessId, categoryId } = useParams();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (!name && !description && !price && !stock && !photo) {
      return;
    }

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("categoryId", categoryId);
    formData.append("photos", photo);

    dispatch(createProduct(formData));
  };

  if (product) {
    return (
      <Navigate
        to={generateRoute(routes.getProduct, {
          ":businessId": businessId,
          ":categoryId": categoryId,
          ":productId": product._id,
        })}
      />
    );
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Add Product</h1>
      </HeaderContainer>
      <section className="container max-w-lg">
        {/* breadcrumb */}
        <Breadcrumb
          links={[
            {
              name: "home",
              to: generateRoute(routes.getBusiness, {
                ":businessId": businessId,
              }),
            },
            {
              name: "categories",
              to: generateRoute(routes.getCategories, {
                ":businessId": businessId,
              }),
            },
            {
              name: "category",
              to: generateRoute(routes.getCategory, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            {
              name: "products",
              to: generateRoute(routes.getProducts, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            { name: "new", to: "" },
          ]}
        />
        {loading && <Loader />}
        {error && <Error />}
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
                placeholder="Enter product name"
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
                placeholder="Enter product name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                className="w-full"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                min={1}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                className="w-full"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Enter stock"
                min={1}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="photo">Photo</Label>
              <Input
                id="photo"
                className="w-full"
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                placeholder="Upload image"
                accept="image/jpeg"
                required
              />
            </FormGroup>
            <FormGroup>
              <Button className="w-full">Save</Button>
            </FormGroup>
            <FormGroup className="flex justify-center mb-0"></FormGroup>
          </form>
        </Card>
      </section>
    </main>
  );
};

export default AddProductPage;
