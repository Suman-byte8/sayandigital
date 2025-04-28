import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";


export default function PreviewCard({image,title,id,subTitle}) {
  return (
    <Card id={id} sx={{ width: {
      xs: "80%",
      sm:320
    }, height:380, boxShadow: "lg" }}>
      {/* Frame Image */}
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </AspectRatio>
      </CardOverflow>

      {/* Frame Details */}
      <CardContent>
        {/* <Typography level="body-xs"></Typography> */}
        <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
          {title}
        </Typography>
        <Typography level="body-sm" sx={{ mt: 0.5 }}>
          {subTitle}
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <CardOverflow>
        <Button variant="solid" color="warning" size="lg">
          Not Available For Now
        </Button>
      </CardOverflow>
    </Card>
  );
}
