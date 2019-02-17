import axios from 'axios';

const URL = 'http://diamo.oscorp.pro';

axios.defaults.baseURL = URL;

// TEMPRORARY
export const getCurrentUser = () => true;
// TEMPRORARY


export const getProducts = async () => {
    const { data } = await axios.get('/tovar/getListTovar');
    return data.map(item => ({
        ...item,
        discountPrice: item.discount_price,
        idCategory: item.id_category,
        purchasePrice: item.purchase_price
    }));
};

export const getCategories = async () => {
    const { data } = await axios.get('/tovar/getCategory');
    return data;
};

export const getUsers = async () => {
    const { data } = await axios.get('/users/getUsers')
    return data;
};

export const getUser = async (id) => {
    const { data } = await axios.get(`/users/getUser/${id}`);
    return data;
};

export const addUser = async (user) => {
    console.log('addUser', user);
    // const { } = { }
    // await axios.post('/users/create', {Users: rest});
};

export const updateUser = async (user) => {
    console.log('updateUser', user);
    // await axios.post('/users/updates', {Users: rest});
};

export const getOrders = async () => {
    const { data } = await axios.get('/product/New');
    console.log('getOrders', data);
    return {
        domains: data.filter.domain.map((item, index) => {
            return {
                value: index,
                label: item.domain
            }
        }).filter(item => item.label),
        products: data.filter.model.map((item, index) => { 
            return {
                value: index,
                label: item.model
            }
        }).filter(item => item.label),
        statuses: data.filter.vids.map((item, index) => {
            return {
                value: index,
                label: item
            }
        }),
        // vids: [...data.filter.vids],
        orders: [...data.prod],
        ordersCount: +data.prod_count,
        pagination: {
            current: +data.page,
            all: +data.page_count
        },
        statistic: {
            allAmount: data.stat_all.coll,
            allCount: data.stat_all.count,
            allPrice: data.stat_all.price,
            apprCount: data.stat_appr.count,
            apprPrice: data.stat_appr.price
        },
        user: data.user
    };
};

// filter: {domain: Array(14), model: Array(9), vids: Array(10)}
// newProperty: 123
// page: "1"
// page_count: 1
// post: []
// prod: (4) [{…}, {…}, {…}, {…}]
// prod_count: "4"
// select: "SELECT * FROM tbl_product WHERE 1 AND vid in (0,2,6,4) AND `create_time`>= '2019-02-07 00:00:01' AND `create_time` <= '2019-02-07 23:59:59' ORDER BY create_time DESC LIMIT 0, 10"
// stat_all: {count: 0, price: 0, coll: 0}
// stat_appr: {count: 0, price: 0}
// user: "Guest"




//////////////////////////////////////////////////////////////////////////////////////////
// export const getProducts = () => fetch(`${URL}/tovar/getListTovar`).then(r => r.json());

// export const getCategories = () => fetch(`${URL}/tovar/getCategory`).then(r => r.json());

// export const getUsers = () => fetch(`${URL}/users/getUsers`).then(r => r.json());

// export const getUser = (id) => fetch(`${URL}/users/getUser/${id}`).then(r => r.json());
//////////////////////////////////////////////////////////////////////////////////////////
