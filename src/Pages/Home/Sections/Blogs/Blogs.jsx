import { Container, Box, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { SectionalHeading, CustomCard } from '../../../../Components/Components';

const Blogs = () => {
const [blogs, setBlogs] = useState([])

useEffect(()=>{
    fetch('https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts').then(res => res.json()).then(data => setBlogs(data.slice(0, 3)) )
},[blogs])

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <>
            <section className='mb-md-5 mb-3'>
                <Container maxWidth="xxl">
                    <Box className='text-center mb-md-5 mb-3 px-md-5 px-0'>
                        <SectionalHeading Span="Blogs" Head="Our Latest Blogs" para="orem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus." />
                    </Box>
                    <Box>
                        <Grid container={true} spacing={3}>
                            {
                                blogs.map(item=>{
                                    return <Grid key={item.id} item={true} xs={12} sm={6} md={6} lg={4}>
                                        <Box>
                                            <CustomCard image={item.yoast_head_json.og_image[0].url} title={item.title.rendered} align="left" para={`${item.yoast_head_json.og_description.split(" ").slice(0, 20).join(" ")} [...]`} btnText="Read More" link={`/blog/${item.slug}/`} date={`${item.date.split("T")[0].split("-")[2]} ${months[Number(item.date.split("T")[0].split("-")[1])-1]}, ${item.date.split("T")[0].split("-")[0]}`} />
                                        </Box>
                                    </Grid>
                                })
                        }
                        </Grid>
                    </Box>
                </Container>
            </section>
        </>
    )
}

export default Blogs