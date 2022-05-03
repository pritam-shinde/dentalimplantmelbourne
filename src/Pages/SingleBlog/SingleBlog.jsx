import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { Container, Box, Grid, Typography, Card, CardHeader, CardContent, TextField, Button, } from '@mui/material';
import './sass/singleBlog.css';
import parse from 'html-react-parser';


const SingleBlog = () => {
    let { slug } = useParams();
    const [blog, setBlog] = useState();
    const [recentPost, setRecentPost] = useState([]);
    const [comment, setComment] = useState({
        userName: "",
        userEmail: "",
        userWebsite: "",
        userComment: ""
    });

    useEffect(() => {
        fetch(`https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts/?slug=${slug}`).then(res => res.json()).then(data => setBlog(data))
    }, [slug, blog]);

    useEffect(() => {
        fetch('https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts').then(res => res.json()).then(data => setRecentPost(data.slice(0, 5)), [recentPost])
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setComment((prevVal) => {
            return {
                ...prevVal,
                [id]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        console.log()

        var raw = JSON.stringify({
            "post": blog[0].id,
            "author_name": comment.userName,
            "author_email": comment.userEmail,
            "content": comment.userComment
        });

        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://bayswaterdentist.com.au/blog/wp-json/wp/v2/comments/create", requestOptions)
            .then(response => response.text())
            .then(result => {console.log(result)})
            .catch(error => console.log('error', error));

            setComment((prevVal)=>{
                return{
                    ...prevVal,
                    userName: "",
                    userEmail: "",
                    userWebsite: "",
                    userComment: ""
                }
            })
    }

    return (
        <>
            <Container maxWidth="xxl" id="singleBlog">
                <Grid container={true}>
                    <Grid item={true} xs={11} sm={11} md={10} lg={10} className="mx-auto" >
                        <Box>
                            <Grid container={true} columnSpacing={3}>
                                <Grid item={true} xs={12} sm={8} className="order-0" >
                                    <Box py={5} id="content">
                                        <Box>
                                            {
                                                blog ? blog[0].title.rendered ? <Typography variant="h1" gutterBottom>{blog[0].title.rendered}</Typography> : null : null
                                            }
                                        </Box>
                                        <Box mb={2}>
                                            {
                                                blog ? blog[0].yoast_head_json.og_image[0].url ? <img src={blog[0].yoast_head_json.og_image[0].url} alt="" className="img-fluid" /> : null : null
                                            }
                                        </Box>
                                        <Box>
                                            {blog ? blog[0].content.rendered ? <Box>{
                                                parse(String(blog[0].content.rendered))
                                            }</Box> : null : null}
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} sm={4} id="sidebar" className="order-md-1 order-2" >
                                    <Box py={5}>
                                        <Box mb={2} className="widget" id="widget1">
                                            <Card className="shadow">
                                                <CardHeader title="Recent Post" />
                                                <CardContent>
                                                    {
                                                        recentPost.map(item => {
                                                            return (<>
                                                                <Box mb={3} className="d-flex">
                                                                    <Box className="flex-shrink-0">
                                                                        <img src={item.yoast_head_json.og_image[0].url} alt="..." height="64" width="64" />
                                                                    </Box>
                                                                    <Box className="flex-grow-1 ms-3">
                                                                        <Typography variant="h5"><Link to={`/blog/${item.slug}/`}>{item.title.rendered ? item.title.rendered : null}{item.title.rendered ? item.title.rendered : null}</Link></Typography>
                                                                        <Typography>{`${item.yoast_head_json.og_description.split(" ").slice(0, 20).join(" ")} [...]`}</Typography>
                                                                    </Box>
                                                                </Box>
                                                            </>)
                                                        })
                                                    }
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item={true} xs={12} sm={7} id="reviews" className="order-md-2 order-1" >
                                    <Box py={5}>
                                        <Card className="shadow">
                                            <CardHeader title="Leave a Reply" />
                                            <CardContent>
                                                <form method="POST" onSubmit={handleSubmit}>
                                                    <Grid container={true} spacing={3}>
                                                        <Grid item={true} xs={12} sm={6}>
                                                            <Box className="form-group">
                                                                <TextField type="text" id="userName" label="Name" variant="outlined" className="form-control" onChange={handleChange} value={comment.userName} required />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item={true} xs={12} sm={6}>
                                                            <Box className="form-group">
                                                                <TextField type="email" id="userEmail" label="Email" variant="outlined" className="form-control" onChange={handleChange} value={comment.userEmail} required />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item={true} xs={12}>
                                                            <Box className="form-group">
                                                                <TextField type="url" id="userWebsite" label="Website" variant="outlined" className="form-control" onChange={handleChange} value={comment.userWebsite} required />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item={true} xs={12}>
                                                            <Box className="form-group">
                                                                <TextField type="text" id="userComment" label="Comment" multiline rows={4} className="form-control" onChange={handleChange} value={comment.userComment} required />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item={true} xs={12}>
                                                            <Box className="form-group">
                                                                <Button type="submit" variant="contained" className="custom-btn">Post Comment</Button>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SingleBlog