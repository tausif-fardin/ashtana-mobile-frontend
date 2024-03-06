import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import Header from "../components/header";
import Banner from "../components/banner";
import CategoryList from "../components/category-list";
import Preview from "../components/horizontal-preview";
import getApi from "../../api/getApi";

function Home() {
  const [product, setProduct] = useState([
    {
      id: 0,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      subtitle: "Visit site",
    },
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      subtitle: "Visit site",
    },
  ]);
  const [allproduct, setAllProduct] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getProduct = (url) => {
    getApi(
      `https://fakestoreapi.com/products/category/men's clothing?limit=5`,
      "GET"
    )
      .then((json) => {
        //setProduct(json)
        setisLoading(false);
      })
      .catch((e) => setisLoading(false));
  };

  const getAllProduct = () => {
    getApi(`https://fakestoreapi.com/products/?limit=15`, "GET")
      .then((json) => {
        setAllProduct(json);
        setisLoading(false);
      })
      .catch((e) => setisLoading(false));
  };

  useEffect(() => {
    getProduct();
    getAllProduct();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <CategoryList />
      <Banner
        width="100%"
        height={150}
        image="https://previews.123rf.com/images/kchung/kchung1909/kchung190900083/130601427-sunscreen-product-banner-ads-on-orange-square-podium-and-paper-art-background-in-3d-illustration.jpg"
      />
      <Preview title="Top Trends" products={product} />
      <Banner
        width="100%"
        height={150}
        image="https://image.freepik.com/free-vector/mega-sale-offers-modern-promotional-banner_501916-61.jpg"
      />
      <Preview title="Popular Collection" products={product} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
