import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import "../App.css";

const Userdata = () => {

    const Url = "https://jsonplaceholder.typicode.com/users";

    const [userData, setUserData] = useState();
    const [layout, setLayout] = useState('list');

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = async () => {
        const response = await axios.get(Url);
        setUserData(response.data);
    };

    const renderListItem = (data) => {
        let avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img className="avatar" src={avatarUrl} alt={data.username} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.name}</div>
                        <div className="product-email">Email - {data.email}</div>
                        <div className="product-phone">Phone - {data.phone}</div>
                        <div className="product-company">Company - {data.company['name']}</div>
                        <div className="product-website">Website - {data.website}</div>
                        <div className="product-address">Address - {data.address['street']}, {data.address['suite']},{data.address['city']}, {data.address['zipcode']}</div>
                    </div>
                </div>
            </div>
        );
    }


    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        if (layout === 'list')
            return renderListItem(product);
    }


    return (
        <div className="App">
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={userData} layout={layout}
                        itemTemplate={itemTemplate} rows={9} />
                </div>
            </div>

        </div>
    );
}

export default Userdata;
