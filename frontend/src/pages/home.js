import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorScheme } from "../theme";
import Input from '../components/atoms/input';
import SimpleForm from '../components/atoms/simpleForm';
import Button from '../components/atoms/button';
import Cta from '../components/atoms/cta';

const Home = () => {
  const [ID, setID] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(ID);
    navigate("./profile", { state: { id: ID } });
  };
  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="mt-12 text-3xl font-bold">Welcome to Menta!</h1>
      <div className="mt-6">
          <SimpleForm
            className=""
            // description="Enter your ID"
          >
            <Input
              name="ID"
              placeholder="Enter your ID"
              id="menta-id"
              extraClass="py-2"
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              extraClass="px-6 py-4 text-lg"
            >
              Go
            </Button>
          </SimpleForm>
      </div>
    </div>
  );
};

export default Home;
