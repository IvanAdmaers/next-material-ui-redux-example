const url = process.env.backendUrl;

/**
 * This function gets users from api
 *
 * @async
 * @function getUsers
 * @param options {object} - Request options
 * @returns {Array.<{page: Number, per_page: Number, total: Number, total_pages: Number, data: Array.<{id: Number, email: String, first_name: String, last_name: String, avatar: String}>>} Array of posts
 */
export const getUsers = async (options = {}) => {
  const page = options.page || 1;

  const transformResponse = (res) => ({
    page: res.page,
    perPage: res.per_page,
    total: res.total,
    totalPages: res.total_pages,
    usersList: res.data,
  });

  try {
    const req = await fetch(`${url}/users?page=${page}&per_page=3`);

    const res = await req.json();

    return transformResponse(res);
  } catch (e) {
    throw new Error(e);
  }
};
