import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router"

import { Avatar, Container, Grid, IconButton, Typography } from "@mui/material"
import { DeleteForeverRounded, EditRounded, EditOffSharp } from "@mui/icons-material"

import { getProducts, getSingleProduct, deleteProduct } from "../store/products"

const AdminProductsList = () => {
  const products = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getSingleProduct())
  }, [])

  const handleClickEdit = async (productId) => {
    await dispatch(getSingleProduct(productId))
    navigate("/admin/administrador/edit")
  }

  return (
    <>
      <Grid item xs={12}></Grid>
      <Container>
        <Grid
          container
          sx={{
            p: 3,
            backgroundColor: "rgb(231, 231, 231)",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "left", backgroundColor: "" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Lista de Productos
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              sx={{ border: "solid 2px black", borderRadius: "5px" }}
            >
              <Grid item xs={1}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Img
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Titulo
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Categoria
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Precio
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Stock
                </Typography>
              </Grid>

              <Grid item xs={2}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Editar
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography variant="subtitle1" component="div" gutterBottom>
                  Eliminar
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            {products.map((product, i) => (
              <>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  sx={{ marginBottom: "10px" }}
                >
                  <Grid item xs={1} aria-label="imagen">
                    <Avatar variant="square" src={product.image}></Avatar>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {product.title}
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      gutterBottom
                    >
                      {product.category}
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    {product.price}
                  </Grid>

                  <Grid item xs={2}>
                    <Grid container alignItems="center">
                      <Grid item xs={12}>
                        {" "}
                        <Typography variant="body2" gutterBottom>
                          {product.stock}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={2}>
                    <IconButton edge="end" aria-label="edit">
                    {location.pathname === "/admin/administrador" ?
                      <EditRounded onClick={() => {handleClickEdit(product._id)}} /> : <EditOffSharp />}
                    </IconButton>
                  </Grid>

                  <Grid item xs={1}>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteForeverRounded
                        onClick={() => {
                          dispatch(deleteProduct(product._id))
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>

              </>
            ))}

          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default AdminProductsList
