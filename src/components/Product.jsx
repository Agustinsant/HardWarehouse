import React, { useEffect, useState } from 'react'
import "../styles/singleProduct.css"
import { Breadcrumbs, Link, Typography, Container, Grid, CardMedia, Button, IconButton, Divider, Rating } from "@mui/material"
import { RemoveCircleOutline, AddCircleOutline, Star } from '@mui/icons-material'
import axios from "axios"


function Product() {

    const [value, setValue] = useState(0);
    const [producto, setProducto] = useState({})

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/20")
            .then(res => res.data)
            .then(data => setProducto(data))
    }, []);


    return (
        <Container  className='product-conteiner'>

            <Grid container spacing={8} >
                <Grid item xs={12}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="white" href="/">
                            Productos
                        </Link>
                        <Link
                            underline="hover"
                            color="white"
                            href="/getting-started/installation/"
                        >
                            Categoria
                        </Link>
                        <Typography color="#13FFD5">{producto.category}</Typography>
                    </Breadcrumbs>
                </Grid>

                <Grid item xs={12}>

                    <Grid container spacing={10} >
                        <Grid item xs={6}>
                            <CardMedia
                                component="img"
                                width='100%'
                                image={producto.image}
                                alt="Paella dish"
                            />
                        </Grid>
                        <Grid item xs={6}>

                            <Grid container spacing={4} >

                                <Grid item xs={12}>
                                    <Typography variant="h4" component="div" gutterBottom>
                                        {producto.title}
                                    </Typography>
                                </Grid>

                                <Divider />

                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {producto.description}
                                    </Typography>
                                </Grid>


                                <Grid item xs={12}>

                                </Grid>



                                <Grid item xs={4}>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        <Typography color="white">Precio : {producto.price}</Typography>

                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>

                                    <IconButton aria-label="delete">
                                        <AddCircleOutline />
                                    </IconButton>
                                    1
                                    <IconButton aria-label="delete">
                                        <RemoveCircleOutline />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography component="legend">Valoraciones Generales</Typography>

                                    <Rating
                                        name="text-feedback"
                                        value={3}
                                        readOnly
                                        precision={0.1}
                                        emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Typography component="legend">Tu valoracion el producto</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />

                                </Grid>



                                <Grid item xs={12}>

                                    <Button variant="contained">Agregar al carrito</Button>

                                </Grid>





                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>

            </Grid>






        </Container>)
}

export default Product