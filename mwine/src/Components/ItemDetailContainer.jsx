import { SnackbarContent, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';






const ItemListContainer = () => {

  const { iditem } = useParams();

    const [product,setProduct] =useState({});
    let productsHC =[
        {
            id: 1,
            name: "Stradivarius",
            category: "Vino Tinto",
            price: 100,
            rating: 5,
            image:"/assets/img/vino-stradivarius-01.jpg",
            description: "Color rojo profundo e intenso, con abundante lágrima que cae lento por los costados del cristal cuando agitamos la copa para apreciar más su encanto. Sus aromas recuerdan al higo glaceado y las frutas confitadas.",
        },
        {
            id: 2,
            name: "Malamado",
            category: "Vino tinto",
            price: 80,
            rating: 2,
            image: "/assets/img/vino-malamado-01.jpg",
            description: "Se destaca un Matiz púrpura con algunos visos naranja propios de la madurez. Posee un aroma delicado e intenso a frutos secos como almendras, castañas y nuez, en combinación con notas de ciruelas, higos, membrillo y canela. Tiene una entrada dulce y sedosa, con amplio desarrollo y persistente final.",
        },
        {
            id: 3,
            name: "Lopez",
            category: "Vino blanco",
            price: 20,
            rating: 4,
            image: "/assets/img/vino-lopez-01.jpg",
            description: "Vino elaborado con uvas cuidadosamente seleccionadas de las variedades Torrontés Riojano, Moscatel y Viognier. oriental. Suelo arenoso y profundo. Viñedos en espaldera alta.",
        },
        {
            id: 4,
            name: "Angelica Zapata",
            category: "Vino tinto",
            price: 2220,
            rating: 5,
            image: "/assets/img/vino-angelicazapata-01.jpg",
            description: "blend proveniente de uvas Malbec de diferentes viñedos. El resultado es un vino de gran concentración y elegancia. El viñedo Angélica aporta aromas de ciruelas maduras, mermelada de frutos rojos, suavidad y volumen al paladar.",
          },
          {
            id: 5,
              name: "Rutini",
              category: "Vino tinto",
              price: 220,
              rating: 4,
              image: "/assets/img/vino-rutini-01.jpg",
              description: "olor rojo violáceo muy profundo, los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados). En boca, su estructura concentrada deja la evocación de sus taninos suaves y sucrosos. Apto para guarda de unos 6 años.",
          },
          {
            id: 6,
              name: "Jack Daniels",
              category: "Whisky",
              price: 220,
              rating: 4,
              image: "/assets/img/jack-daniels-01.jpg",
              description: "El color, cuerpo y sabor característico del Jack Daniels se debe a un minucioso proceso que lo hace único. El whiskey se realiza con agua subterránea sacada de una cueva en Tennessee, además al whisky se lo somete a un proceso llamado «charcoal mellowing» que consiste en filtrarlo a través de carbón de arce sacarino que lo convierte en lo que es: un Tennessee whiskey y no en un bourbon, licor con el que se lo confunde por su suavidad a pesar de su alta graduación alcohólica. Finalmente el whiskey es añejado en barriles de roble blanco que son ensamblados a mano y quemados por dentro para fundir los azucares propios de la madera y darle al Jack Daniels su sabor y color ámbar",
          },
          {
            id: 7,
              name: "Red Label",
              category: "Whisky",
              price: 220,
              rating: 4,
              image: "/assets/img/red-label-01.jpg",
              description: "Johnnie Walker Red Label se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor.",
          },
          {
            id: 8,
              name: "Bombay",
              category: "Gin",
              price: 220,
              rating: 4,
              image: "/assets/img/bombay-01.jpg",
              description: "Al paladar, transmite piel de limón y una dulzura media, seguidas de un enebro intenso y una dulzura ácida de limón, apoyados por notas de salida de cilantro y regaliz, equilibradas por las notas más profundas y especiadas que definen la base del paladar.",
          },
    ];


  useEffect(()=> {

    const productoPromise = new Promise((res, rej)=>{
      setTimeout(() => {
          res(productsHC.find((item)=> item.id == iditem));
      }, 2000);
  });



  productoPromise.then((res)=> setProduct(res));


  },[iditem]);

  



  return (
    <div>
        {product.id ?(
            <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
        
        
          
          <ItemDetail product={product}/>
          
        </Grid>
      </Box>
        ):<SnackbarContent message="Cargando..." sx={{width:"100px"}}></SnackbarContent>
        }
         
        
       
    </div>
  )
}

export default ItemListContainer
