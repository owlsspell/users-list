import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/api';

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}
export type Geo = {
    lat: string;
    lng: string;
}
export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}


export default function UserDetail() {
    const [user, setUser] = useState<User | null>(null);
    const { userId } = useParams<{ userId: string }>();

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (!userId) return
            try {
                const response = await getUser(userId);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Contact Details</h2>
            <h3>User Name: {user.username}</h3>
            <p>Email Address: {user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <p>Website: {user.website}</p>
            <h2>Address</h2>
            <p>Street: {user.address.street}</p>
            <p>City: {user.address.city}</p>
            <p>Zip Code: {user.address.zipcode}</p>
            <h2>Company Details</h2>
            <p>Company Name: {user.company.name}</p>
            <p>Catch Phrase: {user.company.catchPhrase}</p>
        </div>

    )
}
