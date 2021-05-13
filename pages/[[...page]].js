import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Paper, Container, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import CardItem from 'src/components/CardItem';

// Api
import { getUsers } from 'src/api';

// Redux
import { wrapper } from 'src/store';
import { fetchUsers } from 'src/actions/postsActions';
import { useSelector } from 'react-redux';

import useStyles from 'styles/index';

export const getStaticPaths = async () => {
  const { totalPages } = await getUsers();

  const paths = [
    {
      params: { page: [] },
    },
  ];

  for (let i = 1; i <= +totalPages; i++) {
    paths.push({ params: { page: [String(i)] } });
  }

  return { paths, fallback: false };
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ params, store }) => {
    const page = +params?.page?.[0] || 1;
    await store.dispatch(fetchUsers(page));

    return {
      props: { page },
      revalidate: 60,
    };
  },
);

const Home = ({ page }) => {
  const router = useRouter();
  const classes = useStyles();
  const { totalPages, usersList, error } = useSelector(({ users }) => users);

  const paginationHandler = (e, page) => {
    router.push(`/${page}`);
  };

  return (
    <>
      <Head>
        <title>{`Users page ${page}`}</title>
      </Head>
      <Container className={classes.root} component={Paper} maxWidth="md">
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Users
        </Typography>

        <div className={classes.posts}>
          {!error ? (
            usersList.map(
              ({
                id,
                email,
                first_name: firstName,
                last_name: lastName,
                avatar,
              }) => {
                return (
                  <CardItem
                    key={`user-${id}`}
                    title={email}
                    body={`${firstName} ${lastName}`}
                    // image={`https://source.unsplash.com/random?sig=${id}`}
                    image={avatar}
                  />
                );
              },
            )
          ) : (
            <Typography variant="h6">Something wrong</Typography>
          )}
        </div>
        <Pagination
          className={classes.pagination}
          page={page}
          onChange={paginationHandler}
          count={totalPages}
        />
      </Container>
    </>
  );
};

Home.defaultProps = {
  page: 1,
};

Home.propTypes = {
  page: PropTypes.number,
};

export default Home;
