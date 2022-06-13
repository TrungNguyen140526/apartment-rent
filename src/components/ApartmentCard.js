import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ApartmentCard() {
    return (
        <Card sx={{ m: 2, maxWidth: 270 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
                    alt="apartment"
                />
                <CardContent>
                    <Typography gutterBottom variant="h7" component="div">
                        Căn hộ mát mẻ Vinhomes Grand Park
                    </Typography>
                    <Typography variant="body2">
                        35 triệu/tháng - 136 m²
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hôm qua
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
