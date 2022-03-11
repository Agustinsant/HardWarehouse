import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"

import { Breadcrumbs, Link, Typography, Container, Grid, CardMedia, Button, IconButton, Divider, Rating, MobileStepper } from "@mui/material"
import { RemoveCircleOutline, AddCircleOutline, Star, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { getSingleProduct } from '../store/products'
import { Box } from '@mui/system'
import { useTheme } from '@emotion/react'
import { useParams } from 'react-router'





function Product() {
    const {id} = useParams()

    const dispatch = useDispatch()

    const [value, setValue] = useState(0);
    const [unidadAddCarrito, setUnidadAddCarrito] = useState(1)

    const productos = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getSingleProduct(id))

    }, [dispatch])


    const addToUnitShoppingCart = (event) => {
        event.preventDefault()
        setUnidadAddCarrito(unidadAddCarrito + 1)

    }
    const removeToUnitShoppingCart = (event) => {
        event.preventDefault()
        if (unidadAddCarrito <= 1) return alert("no se pueden extraer mas ")
        setUnidadAddCarrito(unidadAddCarrito - 1)

    }



    const steps = [1]
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    //if(productos.loading) return <h1>loading...</h1>

    if (!productos.singleProduct.id) return <h1> no hay datos</h1>

    return (
        <div className='marginContainer'>

            <Container >

                <Grid container spacing={8} >
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link href="/productos">
                                <p className='letrasBlancas categoriaBreadcrums'>Productos</p>
                            </Link>
                            <Typography >
                                <p className='letrasBlancas '>Categoria</p>
                            </Typography>
                            <Typography >
                                <p className='letrasVerdes'>{productos.singleProduct.category}</p>
                            </Typography>
                        </Breadcrumbs>
                    </Grid>

                    <Grid item xs={12}>

                        <Grid container spacing={10} >
                            <Grid item xs={6}>

                                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>

                                    <CardMedia
                                        component="img"
                                        width='100%'
                                        image={productos.singleProduct.image}
                                        alt="Paella dish"
                                    />
                                    <MobileStepper
                                        variant="text"
                                        steps={maxSteps}
                                        position="static"
                                        activeStep={activeStep}
                                        nextButton={
                                            <Button
                                                size="small"
                                                onClick={handleNext}
                                                disabled={activeStep === maxSteps - 1}
                                            >
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowLeft />
                                                ) : (
                                                    <KeyboardArrowRight />
                                                )}
                                            </Button>
                                        }
                                        backButton={
                                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                                {theme.direction === 'rtl' ? (
                                                    <KeyboardArrowRight />
                                                ) : (
                                                    <KeyboardArrowLeft />
                                                )}
                                            </Button>
                                        }
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>

                                <Grid container spacing={4} >

                                    <Grid item xs={12}>
                                        <Typography variant="h4" component="div" gutterBottom>
                                            <p className='letrasVerdes'>{productos.singleProduct.title}</p>
                                        </Typography>
                                    </Grid>

                                    <Divider />

                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            <p className='letrasBlancas'>{productos.singleProduct.description}</p>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            <Typography >
                                                <p className='letrasBlancas'>Precio :  $ {(productos.singleProduct.price * unidadAddCarrito)}</p>
                                            </Typography>

                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <IconButton aria-label="add" onClick={addToUnitShoppingCart}>
                                            <AddCircleOutline />
                                        </IconButton>
                                        {unidadAddCarrito}
                                        <IconButton aria-label="delete" onClick={removeToUnitShoppingCart}>
                                            <RemoveCircleOutline />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="legend">
                                            <p className='letrasBlancas'>Valoraciones Generales</p>
                                        </Typography>

                                        <Rating
                                            name="text-feedback"
                                            value={3}
                                            readOnly
                                            precision={0.1}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography component="legend">
                                            <p className='letrasBlancas'>Tu valoracion el producto</p>
                                        </Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <button className='button-addCarrito'>
                                            <p >Agregar al carrito</p>
                                        </button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>)
}

export default Product