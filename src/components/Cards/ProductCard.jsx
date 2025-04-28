import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, subTitle, price, image, width, height,minQuantity }) => {
  const truncateTitle = (subTitle) => {
    return subTitle.length > 40 ? subTitle.slice(0, 40) + "..." : subTitle;
  };

  const navigate = useNavigate();

  const onBuy = () => {
    // console.log("Navigating with minQuantity:", minQuantity);
    navigate("/order-product", {
      state: {
        title,
        subTitle,
        images: [image],
        price,
        minQuantity
      },
    });
  };

  return (
    <Card
      id={id}
      sx={{
        width: width || "100%", // Full width by default
        maxWidth: 300, // Constrain max width for larger screens
        height: height||"auto", // Allow auto height
        display: "flex",
        flexDirection: "column",
        boxShadow: "lg",
        borderRadius: "md",
        justifyContent: "space-between",
        margin: "12px", // Add margin for spacing
        overflow: "hidden", // Prevent content overflow
        "@media (min-width: 640px)": {
          width: width || 250, // Set specific width for small screens and up
          height: height || 400,
        },
        "@media (min-width: 1024px)": {
          width: width || 300,
          height: 450,
        },
      }}
    >
      <CardOverflow>
        <AspectRatio
          sx={{
            aspectRatio: "16/9", // Maintain aspect ratio
          }}
        >
          <img
            src={image}
            loading="lazy"
            alt={title}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              padding: "5px",
            }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "20px", lg: "22px" },
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          color="neutral"
          textColor="text.primary"
          overlay="true"
          endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: "md", fontSize: { xs: "12px", sm: "14px" } }}
        >
          {truncateTitle(subTitle)}
        </Typography>

        <Typography
          level="title-lg"
          sx={{
            mt: 3,
            fontWeight: "xl",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            fontSize: { xs: "14px", sm: "16px", lg: "18px" },
          }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          ₹ {price}
        </Typography>
      </CardContent>
      <Button
        variant="solid"
        color="primary"
        sx={{
          mt: 2,
          mb: 1,
          fontSize: { xs: "12px", sm: "14px" },
          padding: { xs: "6px 12px", sm: "8px 16px" },
        }}
        onClick={onBuy}
      >
        Buy Now
      </Button>
    </Card>
  );
};

export default ProductCard;
