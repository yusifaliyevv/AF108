import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container spacing={2} padding={2}>
      {products.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography color="text.secondary">{item.price} $</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
