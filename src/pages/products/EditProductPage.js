import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../../actions/productActions";
import { Button } from "../../components/buttons";
import { Card } from "../../components/cards";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { units } from "../../utils/helper";
import routes, { generateRoute } from "../../utils/routes";

const EditProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [unit, setUnit] = useState("");
  const [stock, setStock] = useState(1);
  const [photo, setPhoto] = useState(null);

  const { loading, product, error } = useSelector((state) => state.getProduct);
  const {
    loading: updateLoading,
    product: updatedProduct,
    error: updateError,
  } = useSelector((state) => state.editProduct);

  const { businessId, productId, categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setDiscountPrice(product.discountPrice);
      setQty(product.qty);
      setUnit(product.unit);
      setStock(product.stock);
    } else {
      dispatch(getProduct(productId));
    }
  }, [productId, product, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name &&
      !description &&
      !price &&
      !stock &&
      !discountPrice &&
      !qty &&
      !unit
    ) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountPrice", discountPrice);
    formData.append("discount", calculateDiscount(price, discountPrice));
    formData.append("qty", qty);
    formData.append("unit", unit);
    formData.append("stock", stock);
    formData.append("photos", photo);

    dispatch(editProduct(formData, productId));
  };

  if (updatedProduct) {
    return (
      <Navigate
        to={generateRoute(routes.getProduct, {
          ":businessId": businessId,
          ":categoryId": categoryId,
          ":productId": productId,
        })}
      />
    );
  }

  const calculateDiscount = (basePrice, discountPrice) => {
    const discount = 100 - (discountPrice / basePrice) * 100;
    return discount.toFixed(2);
  };

  return (
    <main>
      <HeaderContainer>
        <h1>Edit Product</h1>
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
            {
              name: product ? product.name : "product",
              to: generateRoute(routes.getProduct, {
                ":businessId": businessId,
                ":categoryId": categoryId,
                ":productId": productId,
              }),
            },
            { name: "edit", to: "" },
          ]}
        />
        {(loading || updateLoading) && <Loader />}
        {(error || updateError) && <Error />}
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
              <div className="grid grid-cols-12 gap-x-2">
                <div className="col-span-6">
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
                </div>
                <div className="col-span-6">
                  <Label htmlFor="discountedPrice">Discounted Price</Label>
                  <Input
                    id="discountedPrice"
                    className="w-full"
                    type="number"
                    value={discountPrice}
                    onChange={(e) => setDiscountPrice(e.target.value)}
                    placeholder="Enter discount price"
                    min={1}
                    required
                  />
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="flex justify-between">
                <span>Price: {discountPrice}</span>
                <span>
                  Discount: {calculateDiscount(price, discountPrice)} %
                </span>
              </div>
            </FormGroup>
            <FormGroup>
              <div className="grid grid-cols-12 gap-x-2">
                <div className="col-span-6">
                  <Label htmlFor="qty">Quantity</Label>
                  <Input
                    id="qty"
                    className="w-full"
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Enter Quantity"
                    min={1}
                    required
                  />
                </div>
                <div className="col-span-6">
                  <Label htmlFor="unit">Unit</Label>
                  <select
                    className="w-full border rounded-lg"
                    id="unit"
                    defaultValue={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                  >
                    <option disabled>Select an unit</option>
                    {units.map((unit, index) => {
                      return (
                        <option key={index} value={unit}>
                          {unit}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </FormGroup>
            <FormGroup>
              <span>
                {unit && qty && discountPrice
                  ? `₹ ${discountPrice} - ${qty} ${unit}`
                  : null}
              </span>
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
              />
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
      </section>
    </main>
  );
};

export default EditProductPage;
