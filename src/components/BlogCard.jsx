import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import user from '../assets/icon.png'
import boxing from '../assets/boxing.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function BlogCard() {
    return (
        <Card className='my-3 mx-3' sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="author">
                        <img src={user} alt="" />
                    </Avatar>
                }

                title="Jishan"
                subheader="29/07/2025"
            />
            <CardMedia
                component="img"
                height="194"
                image={boxing}
                alt="Blog Image"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This is a brief description of the blog post. It gives readers a preview
                    of what the content is about before they click to read more.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Link className='ms-auto' to={'/view-post/:id'}>
                    <button className="  bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-800 rounded">
                        View More
                    </button>  
                </Link>    
                      </CardActions>
        </Card>
    );
}