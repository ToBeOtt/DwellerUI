import {useState, useEffect} from 'react';
import API_BASE_URL from '../../config/apiConfig';

export default async function fetchDataWithToken(url) {
    const token = localStorage.getItem('token');
  
    if (!token) {
        // Handle the case where the token is missing or expired
        // You might want to redirect to the login page or take appropriate action
        return null;
    }

    try {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        });

        if (response.ok) {
        const data = await response.json();
        return data;
        } else {
        // Handle error response
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
    }
}


async function fetchUserData() {
    const userData = await fetchDataWithToken(`${API_BASE_URL}/household/GetInfo`);
    // Use userData as needed
  }