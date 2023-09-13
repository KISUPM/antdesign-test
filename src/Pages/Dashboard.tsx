import { Box, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Table } from "antd";
import classes from "./Dashboard.module.css";

type Product = {
  key?: number;
  brand: string;
  category: string;
  description: string;
  id: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

const Dashboard: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    setIsFetching(true);
    await fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((json) => {
        const data = json as {
          products: Product[];
        };
        const products = data.products.map((p, index) => {
          return { ...p, key: index + 1 };
        });
        setAllProducts(products);
      });
    setIsFetching(false);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const columns = [
    {
      title: "List",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
  ];
  return (
    <Box className={classes.mainBox} border="1px solid red" position="relative">
      <Box className={classes.header} position="sticky" top="0">
        <Heading>Dashboard</Heading>
        <Button onClick={getAllProduct} isLoading={isFetching}>
          Fetch
        </Button>
      </Box>
      <Box>
        <Table
          dataSource={allProducts}
          columns={columns}
          loading={isFetching}
          onRow={(p, index) => {
            return {
              onClick: () => {
                console.log(p.title, index);
              },
            };
          }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
