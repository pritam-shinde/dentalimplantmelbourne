import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Container, Grid, Box, Button } from "@mui/material";
import { Hero, SectionalHeading, CustomCard } from '../../Components/Components';
import './sass/blog.css'

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [noOfBlog, setNoBlog] = useState(6)

  useEffect(() => {
    fetch('https://bayswaterdentist.com.au/blog/wp-json/wp/v2/posts').then(res => res.json()).then(data => setBlogs(data.slice(0, noOfBlog))).catch(error=> console.log(error))
  }, [blogs, noOfBlog]);

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const loadMore = () => {
    setNoBlog(noOfBlog + 3)
  }

  console.log(blogs)

  return (
    <>
      <Helmet>
        <title>Blogs - Dental Implant Melbourne</title>
      </Helmet>
      <main id='blogPage'>
        <Hero pageHead="Blogs" />
        <section>
          <Container className='py-md-5 py-3' maxWidth="xxl">
            <Grid container={true}>
              <Grid item={true} xs={11} md={11} lg={10} className="mx-auto" >
                <Box className='text-center'>
                  <SectionalHeading Head="Our Latest Blogs" Span="Blogs" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus" />
                </Box>
                <Box mt={5}>
                  <Grid container={true} spacing={3}>
                    {
                      blogs.map(item => {
                        return (<>
                          <Grid key={item.id} item={true} xs={12} sm={6} md={6} lg={4}>
                            <Box>
                              <CustomCard image={item.yoast_head_json.og_image[0].url} title={item.title.rendered} align="left" para={`${item.yoast_head_json.og_description.split(" ").slice(0, 20).join(" ")} [...]`} btnText="Read More" link={`/blog/${item.slug}/`} date={`${item.date.split("T")[0].split("-")[2]} ${months[Number(item.date.split("T")[0].split("-")[1]) - 1]}, ${item.date.split("T")[0].split("-")[0]}`} />
                            </Box>
                          </Grid>
                        </>)
                      })
                    }
                  </Grid>
                 {
                   noOfBlog <= blogs.length ? <Box mt={5} className="text-center">
                     <Button variant="contained" onClick={loadMore}>Load More</Button>
                   </Box> : null
                 }
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Blog