import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import routes, { generateRoute } from "../../utils/routes";
import { Input, Label } from "../../components/forms/inputs";
import { FormGroup } from "../../components/forms/containers";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { editSeller, getSeller } from "../../actions/sellerActions";
import { Card } from "../../components/cards";

const EditProfilePage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    seller: { _id: sellerId },
  } = useSelector((state) => state.sellerLogin);

  const { loading, seller, error } = useSelector((state) => state.getSeller);
  const {
    loading: updateLoading,
    seller: updateSeller,
    error: updateError,
  } = useSelector((state) => state.editSeller);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      seller.email === email &&
      seller.profile.firstName === firstName &&
      seller.profile.lastName === lastName &&
      seller.mobile === mobile
    ) {
      navigate(-1);
    }

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("mobile", mobile);

    dispatch(editSeller(formData, seller._id));
  };

  useEffect(() => {
    if (!seller) {
      dispatch(getSeller(sellerId));
    } else {
      setFirstName(seller.profile.firstName);
      setLastName(seller.profile.lastName);
      setEmail(seller.email);
      setMobile(seller.mobile);
    }
  }, [sellerId, seller, dispatch]);

  if (updateSeller) {
    return <Navigate to={generateRoute(routes.profile)} />;
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <Card className="card border rounded-lg shadow-lg">
        <form className="flex-1 p-5" onSubmit={handleSubmit}>
          <FormGroup>
            <Label className="block" htmlFor="firstName">
              First Name
            </Label>
            <Input
              id="firstName"
              className="w-full"
              type="text"
              value={firstName}
              placeholder="Steve"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-5">
            <Label className="block" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              id="lastName"
              className="w-full"
              type="text"
              value={lastName}
              placeholder="Jobs"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-5">
            <Label className="block" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              className="w-full"
              type="email"
              value={email}
              placeholder="stevejobs@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="mb-5">
            <Label className="block" htmlFor="mobile">
              Mobile
            </Label>
            <Input
              id="mobile"
              className="w-full"
              type="text"
              value={mobile}
              placeholder="9876543210"
              onChange={(e) => setMobile(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-5">
            <Button className="w-full ">Save</Button>
          </FormGroup>
          <FormGroup className="flex justify-center mb-0">
            {(loading || updateLoading) && <Loader />}
            {(error || updateError) && <Error />}
          </FormGroup>
        </form>
      </Card>
    </div>
  );
};

export default EditProfilePage;
