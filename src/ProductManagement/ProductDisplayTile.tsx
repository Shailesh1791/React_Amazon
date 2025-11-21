import React, { useEffect, useState } from "react";
import ErrorBoundary from "../common/ErrorBoundary";

import { Card, CardMedia, CardContent, Button, Typography, Grid } from "@mui/material";
import { useContext } from "../hooks/provider";
import { dashboardMappingService } from "../services";

const ProductDisplayTile: React.FC = (): React.ReactElement => {
  const [store] = useContext();
  const productData = store.storeProcess?.productList;
  const [products, setProducts] = useState<any[]>([] as any);
  const serviceCall = dashboardMappingService();

  useEffect(() => {
    serviceCall.addSelectProduct(products);
  }, [products]);

  const addToCart = (productId: any) => {
    const filterProduct = productData.filter((item: any) => item.productId === productId);
    setProducts([...products, filterProduct[0]]);
  }

  return (
    <>
      <ErrorBoundary>
        <Grid container spacing={2}>
          {productData.map((card: any, i: any) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Card sx={{ maxWidth: 300, borderRadius: 2, mx: "auto" }}>
                <CardMedia component="img" height="160" image={card.imageUrl} alt={card.category} />
                <CardContent>
                  <Typography variant="h6">{card.brand}</Typography>
                  <Typography variant="body2" color="text.secondary">Name: {card.name}</Typography>
                  <Typography variant="body2" color="text.secondary">Price: {card.price}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    <Button color="primary" variant="contained" sx={{ mr: 4 }}
                      onClick={() => addToCart(card.productId)}>Add To Cart</Button>
                    <Button color="primary" variant="contained">Wishlist</Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </ErrorBoundary>
    </>
  );

};

export default React.memo(ProductDisplayTile);